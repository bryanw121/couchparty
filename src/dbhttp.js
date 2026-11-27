// Minimal Postgres-over-HTTPS client for Neon (the same request @neondatabase/serverless makes),
// kept tiny so the function bundle stays small. Values come back as text; rows as plain objects.

function pgArray(arr) {
  return '{' + arr.map((v) => (v === null ? 'NULL' : '"' + String(v).replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"')).join(',') + '}';
}

export function neonHttp(connectionString) {
  const u = new URL(connectionString);
  const endpoint = 'https://' + u.hostname.replace(/^[^.]+\./, 'api.') + '/sql';
  return async function sql(query, params = []) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Neon-Connection-String': connectionString, 'Neon-Raw-Text-Output': 'true', 'Neon-Array-Mode': 'true' },
      body: JSON.stringify({ query, params: params.map((p) => (Array.isArray(p) ? pgArray(p) : p === null || p === undefined ? null : String(p))) }),
    });
    if (!res.ok) throw new Error('db ' + res.status + ' ' + (await res.text()).slice(0, 200));
    const out = await res.json();
    const names = (out.fields || []).map((f) => f.name);
    return (out.rows || []).map((row) => Object.fromEntries(names.map((n, i) => [n, row[i]])));
  };
}
