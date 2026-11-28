// The TV and phone pages load from the public repo at a pinned commit (env PAGES_REF), via jsDelivr.
// Updating a page is then a git push plus a settings change, instead of redeploying server code.
const CDN = 'https://raw.githubusercontent.com/bryanw121/couchparty/';
const WAIT = (msg) => '<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="4"></head>' +
  '<body style="margin:0;height:100vh;display:flex;align-items:center;justify-content:center;background:#0E1020;color:#F4F5FA;font:600 22px sans-serif">' + msg + '</body></html>';
const FALLBACK = { tv: WAIT('CouchParty is starting…'), play: WAIT('CouchParty is starting…') };
let cache = { ref: null, pages: null };
let artCache={ref:null,page:null};
let soloCache={ref:null,page:null};
export async function getSolo(){
  const ref=String(process.env.PAGES_REF||'').trim();
  if(!/^[0-9a-f]{7,40}$/.test(ref))return FALLBACK.tv;
  if(soloCache.ref===ref&&soloCache.page)return soloCache.page;
  try{const response=await fetch(CDN+ref+'/web-dist/pages/kart-solo.html');if(!response.ok)return WAIT('Solo mode is loading…');const page=await response.text();soloCache={ref,page};return page;}catch{return WAIT('Solo mode is loading…');}
}
export async function getArtReview(){
  const ref=String(process.env.PAGES_REF||'').trim();
  if(!/^[0-9a-f]{7,40}$/.test(ref))return FALLBACK.tv;
  if(artCache.ref===ref&&artCache.page)return artCache.page;
  try{
    const response=await fetch(CDN+ref+'/web-dist/pages/kart-art-review.html');
    if(!response.ok)return WAIT('The art studio is loading…');
    const page=await response.text();artCache={ref,page};return page;
  }catch{return WAIT('The art studio is loading…');}
}

export async function getPages() {
  const ref = String(process.env.PAGES_REF || '').trim();
  if (!/^[0-9a-f]{7,40}$/.test(ref)) return cache.pages || FALLBACK;
  if (cache.ref === ref && cache.pages) return cache.pages;
  try {
    const [tv, play] = await Promise.all(['tv', 'play'].map(async (n) => {
      const r = await fetch(CDN + ref + '/web-dist/pages/' + n + '.html');
      if (!r.ok) throw new Error(n + ' ' + r.status);
      return r.text();
    }));
    cache = { ref, pages: { tv, play } };
    return cache.pages;
  } catch (e) {
    console.error('[pages]', e.message);
    return cache.pages || FALLBACK;
  }
}
