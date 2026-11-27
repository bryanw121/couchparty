(()=>{var cf=Object.defineProperty;var lf=(s,t,e)=>t in s?cf(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var J=(s,t,e)=>lf(s,typeof t!="symbol"?t+"":t,e);var fh=0,Ac=1,dh=2;var nr=1,ph=2,cs=3,Wn=0,Ve=1,$e=2,Nn=0,Si=1,ir=2,Rc=3,Cc=4,mh=5;var si=100,gh=101,xh=102,_h=103,yh=104,vh=200,bh=201,Mh=202,Sh=203,jr=204,Qr=205,Eh=206,Th=207,wh=208,Ah=209,Rh=210,Ch=211,Ph=212,Ih=213,Lh=214,to=0,eo=1,no=2,Ei=3,io=4,so=5,ro=6,oo=7,Pc=0,Dh=1,Nh=2,vn=0,Ic=1,Lc=2,Dc=3,sr=4,Nc=5,Uc=6,Fc=7;var Oc=300,hi=301,Ci=302,Fo=303,Oo=304,rr=306,nn=1e3,Cn=1001,ao=1002,Ce=1003,Uh=1004;var or=1005;var ze=1006,Bo=1007;var ui=1008;var je=1009,Bc=1010,kc=1011,ls=1012,ko=1013,bn=1014,Mn=1015,Un=1016,zo=1017,Ho=1018,hs=1020,zc=35902,Hc=35899,Gc=1021,Vc=1022,fn=1023,Pn=1026,fi=1027,ar=1028,Go=1029,di=1030,Vo=1031;var Wo=1033,cr=33776,lr=33777,hr=33778,ur=33779,Xo=35840,qo=35841,Yo=35842,Zo=35843,Jo=36196,Ko=37492,$o=37496,jo=37488,Qo=37489,fr=37490,ta=37491,ea=37808,na=37809,ia=37810,sa=37811,ra=37812,oa=37813,aa=37814,ca=37815,la=37816,ha=37817,ua=37818,fa=37819,da=37820,pa=37821,ma=36492,ga=36494,xa=36495,_a=36283,ya=36284,dr=36285,va=36286;var Es=2300,co=2301,$r=2302,dc=2303,pc=2400,mc=2401,gc=2402;var Fh=3200;var pr=0,Oh=1,Yn="",Ne="srgb",Ts="srgb-linear",ws="linear",ce="srgb";var vi=7680;var xc=519,Bh=512,kh=513,zh=514,ba=515,Hh=516,Gh=517,Ma=518,Vh=519,_c=35044;var Wc="300 es",_n=2e3,Ki=2001;function hf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function uf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function As(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Wh(){let s=As("canvas");return s.style.display="block",s}var Ol={},$i=null;function Xc(...s){let t="THREE."+s.shift();$i?$i("log",t,...s):console.log(t,...s)}function Xh(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function kt(...s){s=Xh(s);let t="THREE."+s.shift();if($i)$i("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Gt(...s){s=Xh(s);let t="THREE."+s.shift();if($i)$i("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Mi(...s){let t=s.join(" ");t in Ol||(Ol[t]=!0,kt(...s))}function qh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Yh={[to]:eo,[no]:ro,[io]:oo,[Ei]:so,[eo]:to,[ro]:no,[oo]:io,[so]:Ei},In=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bl=1234567,vs=Math.PI/180,ji=180/Math.PI;function Pi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[s&255]+Xe[s>>8&255]+Xe[s>>16&255]+Xe[s>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Qt(s,t,e){return Math.max(t,Math.min(e,s))}function qc(s,t){return(s%t+t)%t}function ff(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function df(s,t,e){return s!==t?(e-s)/(t-s):0}function bs(s,t,e){return(1-e)*s+e*t}function pf(s,t,e,n){return bs(s,t,1-Math.exp(-e*n))}function mf(s,t=1){return t-Math.abs(qc(s,t*2)-t)}function gf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function xf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function _f(s,t){return s+Math.floor(Math.random()*(t-s+1))}function yf(s,t){return s+Math.random()*(t-s)}function vf(s){return s*(.5-Math.random())}function bf(s){s!==void 0&&(Bl=s);let t=Bl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mf(s){return s*vs}function Sf(s){return s*ji}function Ef(s){return(s&s-1)===0&&s!==0}function Tf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function wf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Af(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),h=o((t-n)/2),d=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*u,c*f,c*h,a*l);break;case"YZY":s.set(c*h,a*u,c*f,a*l);break;case"ZXZ":s.set(c*f,c*h,a*u,a*l);break;case"XZX":s.set(a*u,c*p,c*d,a*l);break;case"YXY":s.set(c*d,a*u,c*p,a*l);break;case"ZYZ":s.set(c*p,c*d,a*u,a*l);break;default:kt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Je(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var De={DEG2RAD:vs,RAD2DEG:ji,generateUUID:Pi,clamp:Qt,euclideanModulo:qc,mapLinear:ff,inverseLerp:df,lerp:bs,damp:pf,pingpong:mf,smoothstep:gf,smootherstep:xf,randInt:_f,randFloat:yf,randFloatSpread:vf,seededRandom:bf,degToRad:Mf,radToDeg:Sf,isPowerOfTwo:Ef,ceilPowerOfTwo:Tf,floorPowerOfTwo:wf,setQuaternionFromProperEuler:Af,normalize:Je,denormalize:Zi},jc=class jc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jc.prototype.isVector2=!0;var lt=jc,Ln=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3],h=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(f!==x||c!==h||l!==d||u!==p){let g=c*h+l*d+u*p+f*x;g<0&&(h=-h,d=-d,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let b=Math.acos(g),S=Math.sin(b);m=Math.sin(m*b)/S,a=Math.sin(a*b)/S,c=c*m+h*a,l=l*m+d*a,u=u*m+p*a,f=f*m+x*a}else{c=c*m+h*a,l=l*m+d*a,u=u*m+p*a,f=f*m+x*a;let b=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=b,l*=b,u*=b,f*=b}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=r[o],h=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+u*f+c*d-l*h,t[e+1]=c*p+u*h+l*f-a*d,t[e+2]=l*p+u*d+a*h-c*f,t[e+3]=u*p-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),f=a(r/2),h=c(n/2),d=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*p,this._y=l*d*f-h*u*p,this._z=l*u*p+h*d*f,this._w=l*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+l*d*p,this._y=l*d*f-h*u*p,this._z=l*u*p-h*d*f,this._w=l*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-l*d*p,this._y=l*d*f+h*u*p,this._z=l*u*p+h*d*f,this._w=l*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-l*d*p,this._y=l*d*f+h*u*p,this._z=l*u*p-h*d*f,this._w=l*u*f+h*d*p;break;case"YZX":this._x=h*u*f+l*d*p,this._y=l*d*f+h*u*p,this._z=l*u*p-h*d*f,this._w=l*u*f-h*d*p;break;case"XZY":this._x=h*u*f-l*d*p,this._y=l*d*f-h*u*p,this._z=l*u*p+h*d*f,this._w=l*u*f+h*d*p;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Qc=class Qc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),u=2*(a*e-r*i),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=i+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ga.copy(this).projectOnVector(t),this.sub(Ga)}reflect(t){return this.sub(Ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qc.prototype.isVector3=!0;var I=Qc,Ga=new I,kl=new Ln,tl=class tl{constructor(t,e,n,i,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],p=n[8],x=i[0],g=i[3],m=i[6],b=i[1],S=i[4],y=i[7],T=i[2],M=i[5],A=i[8];return r[0]=o*x+a*b+c*T,r[3]=o*g+a*S+c*M,r[6]=o*m+a*y+c*A,r[1]=l*x+u*b+f*T,r[4]=l*g+u*S+f*M,r[7]=l*m+u*y+f*A,r[2]=h*x+d*b+p*T,r[5]=h*g+d*S+p*M,r[8]=h*m+d*y+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,p=e*f+n*h+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=f*x,t[1]=(i*l-u*n)*x,t[2]=(a*n-i*o)*x,t[3]=h*x,t[4]=(u*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Mi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Va.makeScale(t,e)),this}rotate(t){return Mi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Va.makeRotation(-t)),this}translate(t,e){return Mi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};tl.prototype.isMatrix3=!0;var Yt=tl,Va=new Yt,zl=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hl=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rf(){let s={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ce&&(i.r=Vn(i.r),i.g=Vn(i.g),i.b=Vn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ce&&(i.r=Ji(i.r),i.g=Ji(i.g),i.b=Ji(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Yn?ws:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Mi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Mi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ts]:{primaries:t,whitePoint:n,transfer:ws,toXYZ:zl,fromXYZ:Hl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:zl,fromXYZ:Hl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),s}var ne=Rf();function Vn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ji(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Fi,lo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fi===void 0&&(Fi=As("canvas")),Fi.width=t.width,Fi.height=t.height;let i=Fi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Fi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=As("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Vn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vn(e[n]/255)*255):e[n]=Vn(e[n]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Cf=0,Qi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Pi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Wa(i[o].image)):r.push(Wa(i[o]))}else r=Wa(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Wa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?lo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}var Pf=0,Xa=new I,Ke=class s extends In{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Cn,i=Cn,r=ze,o=ui,a=fn,c=je,l=s.DEFAULT_ANISOTROPY,u=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Pi(),this.name="",this.source=new Qi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xa).x}get height(){return this.source.getSize(Xa).y}get depth(){return this.source.getSize(Xa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nn:t.x=t.x-Math.floor(t.x);break;case Cn:t.x=t.x<0?0:1;break;case ao:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nn:t.y=t.y-Math.floor(t.y);break;case Cn:t.y=t.y<0?0:1;break;case ao:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Oc;Ke.DEFAULT_ANISOTROPY=1;var el=class el{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(l+1)/2,y=(d+1)/2,T=(m+1)/2,M=(u+h)/4,A=(f+x)/4,_=(p+g)/4;return S>y&&S>T?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=M/n,r=A/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=M/i,r=_/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=A/r,i=_/r),this.set(n,i,r,e),this}let b=Math.sqrt((g-p)*(g-p)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(g-p)/b,this.y=(f-x)/b,this.z=(h-u)/b,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};el.prototype.isVector4=!0;var Me=el,ho=class extends In{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new Ke(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Qi(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends ho{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Rs=class extends Ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var uo=class extends Ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Uo=class Uo{constructor(t,e,n,i,r,o,a,c,l,u,f,h,d,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,u,f,h,d,p,x,g)}set(t,e,n,i,r,o,a,c,l,u,f,h,d,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Uo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Oi.setFromMatrixColumn(t,0).length(),r=1/Oi.setFromMatrixColumn(t,1).length(),o=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=o*u,d=o*f,p=a*u,x=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+p*l,e[5]=h-x*l,e[9]=-a*c,e[2]=x-h*l,e[6]=p+d*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*u,d=c*f,p=l*u,x=l*f;e[0]=h+x*a,e[4]=p*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-p,e[6]=x+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*u,d=c*f,p=l*u,x=l*f;e[0]=h-x*a,e[4]=-o*f,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*u,d=o*f,p=a*u,x=a*f;e[0]=c*u,e[4]=p*l-d,e[8]=h*l+x,e[1]=c*f,e[5]=x*l+h,e[9]=d*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,d=o*l,p=a*c,x=a*l;e[0]=c*u,e[4]=x-h*f,e[8]=p*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+p,e[10]=h-x*f}else if(t.order==="XZY"){let h=o*c,d=o*l,p=a*c,x=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+x,e[5]=o*u,e[9]=d*f-p,e[2]=p*f-d,e[6]=a*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(If,t,Lf)}lookAt(t,e,n){let i=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),$n.crossVectors(n,tn),$n.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),$n.crossVectors(n,tn)),$n.normalize(),Ar.crossVectors(tn,$n),i[0]=$n.x,i[4]=Ar.x,i[8]=tn.x,i[1]=$n.y,i[5]=Ar.y,i[9]=tn.y,i[2]=$n.z,i[6]=Ar.z,i[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],b=n[3],S=n[7],y=n[11],T=n[15],M=i[0],A=i[4],_=i[8],E=i[12],R=i[1],P=i[5],D=i[9],z=i[13],W=i[2],O=i[6],L=i[10],U=i[14],X=i[3],$=i[7],tt=i[11],et=i[15];return r[0]=o*M+a*R+c*W+l*X,r[4]=o*A+a*P+c*O+l*$,r[8]=o*_+a*D+c*L+l*tt,r[12]=o*E+a*z+c*U+l*et,r[1]=u*M+f*R+h*W+d*X,r[5]=u*A+f*P+h*O+d*$,r[9]=u*_+f*D+h*L+d*tt,r[13]=u*E+f*z+h*U+d*et,r[2]=p*M+x*R+g*W+m*X,r[6]=p*A+x*P+g*O+m*$,r[10]=p*_+x*D+g*L+m*tt,r[14]=p*E+x*z+g*U+m*et,r[3]=b*M+S*R+y*W+T*X,r[7]=b*A+S*P+y*O+T*$,r[11]=b*_+S*D+y*L+T*tt,r[15]=b*E+S*z+y*U+T*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],p=t[3],x=t[7],g=t[11],m=t[15],b=c*d-l*h,S=a*d-l*f,y=a*h-c*f,T=o*d-l*u,M=o*h-c*u,A=o*f-a*u;return e*(x*b-g*S+m*y)-n*(p*b-g*T+m*M)+i*(p*S-x*T+m*A)-r*(p*y-x*M+g*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-n*(r*u-a*c)+i*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],p=t[12],x=t[13],g=t[14],m=t[15],b=e*a-n*o,S=e*c-i*o,y=e*l-r*o,T=n*c-i*a,M=n*l-r*a,A=i*l-r*c,_=u*x-f*p,E=u*g-h*p,R=u*m-d*p,P=f*g-h*x,D=f*m-d*x,z=h*m-d*g,W=b*z-S*D+y*P+T*R-M*E+A*_;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/W;return t[0]=(a*z-c*D+l*P)*O,t[1]=(i*D-n*z-r*P)*O,t[2]=(x*A-g*M+m*T)*O,t[3]=(h*M-f*A-d*T)*O,t[4]=(c*R-o*z-l*E)*O,t[5]=(e*z-i*R+r*E)*O,t[6]=(g*y-p*A-m*S)*O,t[7]=(u*A-h*y+d*S)*O,t[8]=(o*D-a*R+l*_)*O,t[9]=(n*R-e*D-r*_)*O,t[10]=(p*M-x*y+m*b)*O,t[11]=(f*y-u*M-d*b)*O,t[12]=(a*E-o*P-c*_)*O,t[13]=(e*P-n*E+i*_)*O,t[14]=(x*S-p*T-g*b)*O,t[15]=(u*T-f*S+h*b)*O,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,p=r*f,x=o*u,g=o*f,m=a*f,b=c*l,S=c*u,y=c*f,T=n.x,M=n.y,A=n.z;return i[0]=(1-(x+m))*T,i[1]=(d+y)*T,i[2]=(p-S)*T,i[3]=0,i[4]=(d-y)*M,i[5]=(1-(h+m))*M,i[6]=(g+b)*M,i[7]=0,i[8]=(p+S)*A,i[9]=(g-b)*A,i[10]=(1-(h+x))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Oi.set(i[0],i[1],i[2]).length(),a=Oi.set(i[4],i[5],i[6]).length(),c=Oi.set(i[8],i[9],i[10]).length();r<0&&(o=-o),mn.copy(this);let l=1/o,u=1/a,f=1/c;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=f,mn.elements[9]*=f,mn.elements[10]*=f,e.setFromRotationMatrix(mn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,i,r,o,a=_n,c=!1){let l=this.elements,u=2*r/(e-t),f=2*r/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),p,x;if(c)p=r/(o-r),x=o*r/(o-r);else if(a===_n)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ki)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=_n,c=!1){let l=this.elements,u=2/(e-t),f=2/(n-i),h=-(e+t)/(e-t),d=-(n+i)/(n-i),p,x;if(c)p=1/(o-r),x=o/(o-r);else if(a===_n)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ki)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Uo.prototype.isMatrix4=!0;var be=Uo,Oi=new I,mn=new be,If=new I(0,0,0),Lf=new I(1,1,1),$n=new I,Ar=new I,tn=new I,Gl=new be,Vl=new Ln,Xn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";var Cs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Df=0,Wl=new I,Bi=new Ln,Bn=new be,Rr=new I,ms=new I,Nf=new I,Uf=new Ln,Xl=new I(1,0,0),ql=new I(0,1,0),Yl=new I(0,0,1),Zl={type:"added"},Ff={type:"removed"},ki={type:"childadded",child:null},qa={type:"childremoved",child:null},He=class s extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new I,e=new Xn,n=new Ln,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new be},normalMatrix:{value:new Yt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(Xl,t)}rotateY(t){return this.rotateOnAxis(ql,t)}rotateZ(t){return this.rotateOnAxis(Yl,t)}translateOnAxis(t,e){return Wl.copy(t).applyQuaternion(this.quaternion),this.position.add(Wl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xl,t)}translateY(t){return this.translateOnAxis(ql,t)}translateZ(t){return this.translateOnAxis(Yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Rr.copy(t):Rr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(ms,Rr,this.up):Bn.lookAt(Rr,ms,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),Bi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zl),ki.child=t,this.dispatchEvent(ki),ki.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ff),qa.child=t,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zl),ki.child=t,this.dispatchEvent(ki),ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,Nf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Uf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};He.DEFAULT_UP=new I(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ie=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},Of={type:"move"},ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;l.inputState.pinching&&h>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Of)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Ya(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=qc(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ya(o,r,t+1/3),this.g=Ya(o,r,t),this.b=Ya(o,r,t-1/3)}return ne.colorSpaceToWorking(this,i),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let n=Zh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return ne.workingToColorSpace(qe.copy(this),t),Math.round(Qt(qe.r*255,0,255))*65536+Math.round(Qt(qe.g*255,0,255))*256+Math.round(Qt(qe.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(qe.copy(this),e);let n=qe.r,i=qe.g,r=qe.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ne){ne.workingToColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,i=qe.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(Cr);let n=bs(jn.h,Cr.h,e),i=bs(jn.s,Cr.s,e),r=bs(jn.l,Cr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new Ut;Ut.NAMES=Zh;var Ps=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Is=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},gn=new I,kn=new I,Za=new I,zn=new I,zi=new I,Hi=new I,Jl=new I,Ja=new I,Ka=new I,$a=new I,ja=new Me,Qa=new Me,tc=new Me,ii=class s{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),gn.subVectors(t,e),i.cross(gn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){gn.subVectors(i,e),kn.subVectors(n,e),Za.subVectors(t,e);let o=gn.dot(gn),a=gn.dot(kn),c=gn.dot(Za),l=kn.dot(kn),u=kn.dot(Za),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(l*c-a*u)*h,p=(o*u-a*c)*h;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zn.x),c.addScaledVector(o,zn.y),c.addScaledVector(a,zn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return ja.setScalar(0),Qa.setScalar(0),tc.setScalar(0),ja.fromBufferAttribute(t,e),Qa.fromBufferAttribute(t,n),tc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ja,r.x),o.addScaledVector(Qa,r.y),o.addScaledVector(tc,r.z),o}static isFrontFacing(t,e,n,i){return gn.subVectors(n,e),kn.subVectors(t,e),gn.cross(kn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),gn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;zi.subVectors(i,n),Hi.subVectors(r,n),Ja.subVectors(t,n);let c=zi.dot(Ja),l=Hi.dot(Ja);if(c<=0&&l<=0)return e.copy(n);Ka.subVectors(t,i);let u=zi.dot(Ka),f=Hi.dot(Ka);if(u>=0&&f<=u)return e.copy(i);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(zi,o);$a.subVectors(t,r);let d=zi.dot($a),p=Hi.dot($a);if(p>=0&&d<=p)return e.copy(r);let x=d*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(Hi,a);let g=u*p-d*f;if(g<=0&&f-u>=0&&d-p>=0)return Jl.subVectors(r,i),a=(f-u)/(f-u+(d-p)),e.copy(i).addScaledVector(Jl,a);let m=1/(g+x+h);return o=x*m,a=h*m,e.copy(n).addScaledVector(zi,o).addScaledVector(Hi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ri=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)),Pr.applyMatrix4(t.matrixWorld),this.union(Pr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),Ir.subVectors(this.max,gs),Gi.subVectors(t.a,gs),Vi.subVectors(t.b,gs),Wi.subVectors(t.c,gs),Qn.subVectors(Vi,Gi),ti.subVectors(Wi,Vi),gi.subVectors(Gi,Wi);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-gi.z,gi.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,gi.z,0,-gi.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-gi.y,gi.x,0];return!ec(e,Gi,Vi,Wi,Ir)||(e=[1,0,0,0,1,0,0,0,1],!ec(e,Gi,Vi,Wi,Ir))?!1:(Lr.crossVectors(Qn,ti),e=[Lr.x,Lr.y,Lr.z],ec(e,Gi,Vi,Wi,Ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Hn=[new I,new I,new I,new I,new I,new I,new I,new I],xn=new I,Pr=new ri,Gi=new I,Vi=new I,Wi=new I,Qn=new I,ti=new I,gi=new I,gs=new I,Ir=new I,Lr=new I,xi=new I;function ec(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){xi.fromArray(s,r);let a=i.x*Math.abs(xi.x)+i.y*Math.abs(xi.y)+i.z*Math.abs(xi.z),c=t.dot(xi),l=e.dot(xi),u=n.dot(xi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Pe=new I,Dr=new lt,Bf=0,Ue=class extends In{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_c,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Dr.fromBufferAttribute(this,e),Dr.applyMatrix3(t),this.setXY(e,Dr.x,Dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),i=Je(i,this.array),r=Je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_c&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ls=class extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ds=class extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Xt=class extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}},kf=new ri,xs=new I,nc=new I,Ti=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):kf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xs.subVectors(t,this.center);let e=xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(xs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xs.copy(t.center).add(nc)),this.expandByPoint(xs.copy(t.center).sub(nc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},zf=0,hn=new be,ic=new He,Xi=new I,en=new ri,_s=new ri,Be=new I,he=class s extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hf(t)?Ds:Ls)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return ic.lookAt(t),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];_s.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(en.min,_s.min),en.expandByPoint(Be),Be.addVectors(en.max,_s.max),en.expandByPoint(Be)):(en.expandByPoint(_s.min),en.expandByPoint(_s.max))}en.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Be.fromBufferAttribute(a,l),c&&(Xi.fromBufferAttribute(t,l),Be.add(Xi)),i=Math.max(i,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ue(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new I,c[_]=new I;let l=new I,u=new I,f=new I,h=new lt,d=new lt,p=new lt,x=new I,g=new I;function m(_,E,R){l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,R),h.fromBufferAttribute(r,_),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),u.sub(l),f.sub(l),d.sub(h),p.sub(h);let P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(x.copy(u).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(P),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(P),a[_].add(x),a[E].add(x),a[R].add(x),c[_].add(g),c[E].add(g),c[R].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let _=0,E=b.length;_<E;++_){let R=b[_],P=R.start,D=R.count;for(let z=P,W=P+D;z<W;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let S=new I,y=new I,T=new I,M=new I;function A(_){T.fromBufferAttribute(i,_),M.copy(T);let E=a[_];S.copy(E),S.sub(T.multiplyScalar(T.dot(E))).normalize(),y.crossVectors(M,E);let P=y.dot(c[_])<0?-1:1;o.setXYZW(_,S.x,S.y,S.z,P)}for(let _=0,E=b.length;_<E;++_){let R=b[_],P=R.start,D=R.count;for(let z=P,W=P+D;z<W;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let i=new I,r=new I,o=new I,a=new I,c=new I,l=new I,u=new I,f=new I;if(t)for(let h=0,d=t.count;h<d;h+=3){let p=t.getX(h+0),x=t.getX(h+1),g=t.getX(h+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u),d=0,p=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*u;for(let m=0;m<u;m++)h[p++]=l[d++]}return new Ue(h,u,f)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){let h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Hf=0,Dn=class extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=Si,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jr,this.blendDst=Qr,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jr&&(n.blendSrc=this.blendSrc),this.blendDst!==Qr&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ei&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Gn=new I,sc=new I,Nr=new I,ei=new I,rc=new I,Ur=new I,oc=new I,Ns=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){sc.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(sc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Nr),a=ei.dot(this.direction),c=-ei.dot(Nr),l=ei.lengthSq(),u=Math.abs(1-o*o),f,h,d,p;if(u>0)if(f=o*c-a,h=o*a-c,p=r*u,f>=0)if(h>=-p)if(h<=p){let x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-p?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=p?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(sc).addScaledVector(Nr,h),d}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);let n=Gn.dot(this.direction),i=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,i,r){rc.subVectors(e,t),Ur.subVectors(n,t),oc.crossVectors(rc,Ur);let o=this.direction.dot(oc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,t);let c=a*this.direction.dot(Ur.crossVectors(ei,Ur));if(c<0)return null;let l=a*this.direction.dot(rc.cross(ei));if(l<0||c+l>o)return null;let u=-a*ei.dot(oc);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Kl=new be,_i=new Ns,Fr=new Ti,$l=new I,Or=new I,Br=new I,kr=new I,ac=new I,zr=new I,jl=new I,Hr=new I,nt=class extends He{constructor(t=new he,e=new Ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){zr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],f=r[c];u!==0&&(ac.fromBufferAttribute(f,t),o?zr.addScaledVector(ac,u):zr.addScaledVector(ac.sub(e),u))}e.add(zr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(Fr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Fr,$l)===null||_i.origin.distanceToSquared($l)>(t.far-t.near)**2))&&(Kl.copy(r).invert(),_i.copy(t.ray).applyMatrix4(Kl),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let g=h[p],m=o[g.materialIndex],b=Math.max(g.start,d.start),S=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=b,T=S;y<T;y+=3){let M=a.getX(y),A=a.getX(y+1),_=a.getX(y+2);i=Gr(this,m,t,n,l,u,f,M,A,_),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let b=a.getX(g),S=a.getX(g+1),y=a.getX(g+2);i=Gr(this,o,t,n,l,u,f,b,S,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){let g=h[p],m=o[g.materialIndex],b=Math.max(g.start,d.start),S=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let y=b,T=S;y<T;y+=3){let M=y,A=y+1,_=y+2;i=Gr(this,m,t,n,l,u,f,M,A,_),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let b=g,S=g+1,y=g+2;i=Gr(this,o,t,n,l,u,f,b,S,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Gf(s,t,e,n,i,r,o,a){let c;if(t.side===Ve?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Wn,a),c===null)return null;Hr.copy(a),Hr.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Hr);return l<e.near||l>e.far?null:{distance:l,point:Hr.clone(),object:s}}function Gr(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Or),s.getVertexPosition(c,Br),s.getVertexPosition(l,kr);let u=Gf(s,t,e,n,Or,Br,kr,jl);if(u){let f=new I;ii.getBarycoord(jl,Or,Br,kr,f),i&&(u.uv=ii.getInterpolatedAttribute(i,a,c,l,f,new lt)),r&&(u.uv1=ii.getInterpolatedAttribute(r,a,c,l,f,new lt)),o&&(u.normal=ii.getInterpolatedAttribute(o,a,c,l,f,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new I,materialIndex:0};ii.getNormal(Or,Br,kr,h.normal),u.face=h,u.barycoord=f}return u}var es=class extends Ke{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Ce,u=Ce,f,h){super(null,o,a,c,l,u,i,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cc=new I,Vf=new I,Wf=new Yt,Rn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=cc.subVectors(n,e).cross(Vf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(cc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wf.getNormalMatrix(t),i=this.coplanarPoint(cc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},yi=new Ti,Xf=new lt(.5,.5),Vr=new I,ns=class{constructor(t=new Rn,e=new Rn,n=new Rn,i=new Rn,r=new Rn,o=new Rn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],b=r[12],S=r[13],y=r[14],T=r[15];if(i[0].setComponents(l-o,d-u,m-p,T-b).normalize(),i[1].setComponents(l+o,d+u,m+p,T+b).normalize(),i[2].setComponents(l+a,d+f,m+x,T+S).normalize(),i[3].setComponents(l-a,d-f,m-x,T-S).normalize(),n)i[4].setComponents(c,h,g,y).normalize(),i[5].setComponents(l-c,d-h,m-g,T-y).normalize();else if(i[4].setComponents(l-c,d-h,m-g,T-y).normalize(),e===_n)i[5].setComponents(l+c,d+h,m+g,T+y).normalize();else if(e===Ki)i[5].setComponents(c,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){yi.center.set(0,0,0);let e=Xf.distanceTo(t.center);return yi.radius=.7071067811865476+e,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Vr.x=i.normal.x>0?t.max.x:t.min.x,Vr.y=i.normal.y>0?t.max.y:t.min.y,Vr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var is=class extends Dn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ql=new be,yc=new Ns,Wr=new Ti,Xr=new I,Us=class extends He{constructor(t=new he,e=new is){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(i),Wr.radius+=r,t.ray.intersectsSphere(Wr)===!1)return;Ql.copy(i).invert(),yc.copy(t.ray).applyMatrix4(Ql);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=h,x=d;p<x;p++){let g=l.getX(p);Xr.fromBufferAttribute(f,g),th(Xr,g,c,i,t,e,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let p=h,x=d;p<x;p++)Xr.fromBufferAttribute(f,p),th(Xr,p,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function th(s,t,e,n,i,r,o){let a=yc.distanceSqToPoint(s);if(a<e){let c=new I;yc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Fs=class extends Ke{constructor(t=[],e=hi,n,i,r,o,a,c,l,u){super(t,e,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ie=class extends Ke{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qn=class extends Ke{constructor(t,e,n=bn,i,r,o,a=Ce,c=Ce,l,u=Pn,f=1){if(u!==Pn&&u!==fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},fo=class extends qn{constructor(t,e=bn,n=hi,i,r,o=Ce,a=Ce,c,l=Pn){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,i,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Os=class extends Ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},le=class s extends he{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],f=[],h=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(f,2));function p(x,g,m,b,S,y,T,M,A,_,E){let R=y/A,P=T/_,D=y/2,z=T/2,W=M/2,O=A+1,L=_+1,U=0,X=0,$=new I;for(let tt=0;tt<L;tt++){let et=tt*P-z;for(let gt=0;gt<O;gt++){let Vt=gt*R-D;$[x]=Vt*b,$[g]=et*S,$[m]=W,l.push($.x,$.y,$.z),$[x]=0,$[g]=0,$[m]=M>0?1:-1,u.push($.x,$.y,$.z),f.push(gt/A),f.push(1-tt/_),U+=1}}for(let tt=0;tt<_;tt++)for(let et=0;et<A;et++){let gt=h+et+O*tt,Vt=h+et+O*(tt+1),ae=h+(et+1)+O*(tt+1),te=h+(et+1)+O*tt;c.push(gt,Vt,te),c.push(Vt,ae,te),X+=6}a.addGroup(d,X,E),d+=X,h+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Bs=class s extends he{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new I,u=new lt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let d=n+f/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ue=class s extends he{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let u=[],f=[],h=[],d=[],p=0,x=[],g=n/2,m=0;b(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(d,2));function b(){let y=new I,T=new I,M=0,A=(e-t)/n;for(let _=0;_<=r;_++){let E=[],R=_/r,P=R*(e-t)+t;for(let D=0;D<=i;D++){let z=D/i,W=z*c+a,O=Math.sin(W),L=Math.cos(W);T.x=P*O,T.y=-R*n+g,T.z=P*L,f.push(T.x,T.y,T.z),y.set(O,A,L).normalize(),h.push(y.x,y.y,y.z),d.push(z,1-R),E.push(p++)}x.push(E)}for(let _=0;_<i;_++)for(let E=0;E<r;E++){let R=x[E][_],P=x[E+1][_],D=x[E+1][_+1],z=x[E][_+1];(t>0||E!==0)&&(u.push(R,P,z),M+=3),(e>0||E!==r-1)&&(u.push(P,D,z),M+=3)}l.addGroup(m,M,0),m+=M}function S(y){let T=p,M=new lt,A=new I,_=0,E=y===!0?t:e,R=y===!0?1:-1;for(let D=1;D<=i;D++)f.push(0,g*R,0),h.push(0,R,0),d.push(.5,.5),p++;let P=p;for(let D=0;D<=i;D++){let W=D/i*c+a,O=Math.cos(W),L=Math.sin(W);A.x=E*L,A.y=g*R,A.z=E*O,f.push(A.x,A.y,A.z),h.push(0,R,0),M.x=O*.5+.5,M.y=L*.5*R+.5,d.push(M.x,M.y),p++}for(let D=0;D<i;D++){let z=T+D,W=P+D;y===!0?u.push(W,W+1,z):u.push(W+1,W,z),_+=3}l.addGroup(m,_,y===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Le=class s extends ue{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},po=class s extends he{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),l(n),u(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let S=new I,y=new I,T=new I;for(let M=0;M<e.length;M+=3)d(e[M+0],S),d(e[M+1],y),d(e[M+2],T),c(S,y,T,b)}function c(b,S,y,T){let M=T+1,A=[];for(let _=0;_<=M;_++){A[_]=[];let E=b.clone().lerp(y,_/M),R=S.clone().lerp(y,_/M),P=M-_;for(let D=0;D<=P;D++)D===0&&_===M?A[_][D]=E:A[_][D]=E.clone().lerp(R,D/P)}for(let _=0;_<M;_++)for(let E=0;E<2*(M-_)-1;E++){let R=Math.floor(E/2);E%2===0?(h(A[_][R+1]),h(A[_+1][R]),h(A[_][R])):(h(A[_][R+1]),h(A[_+1][R+1]),h(A[_+1][R]))}}function l(b){let S=new I;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(b),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function u(){let b=new I;for(let S=0;S<r.length;S+=3){b.x=r[S+0],b.y=r[S+1],b.z=r[S+2];let y=g(b)/2/Math.PI+.5,T=m(b)/Math.PI+.5;o.push(y,1-T)}p(),f()}function f(){for(let b=0;b<o.length;b+=6){let S=o[b+0],y=o[b+2],T=o[b+4],M=Math.max(S,y,T),A=Math.min(S,y,T);M>.9&&A<.1&&(S<.2&&(o[b+0]+=1),y<.2&&(o[b+2]+=1),T<.2&&(o[b+4]+=1))}}function h(b){r.push(b.x,b.y,b.z)}function d(b,S){let y=b*3;S.x=t[y+0],S.y=t[y+1],S.z=t[y+2]}function p(){let b=new I,S=new I,y=new I,T=new I,M=new lt,A=new lt,_=new lt;for(let E=0,R=0;E<r.length;E+=9,R+=6){b.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),M.set(o[R+0],o[R+1]),A.set(o[R+2],o[R+3]),_.set(o[R+4],o[R+5]),T.copy(b).add(S).add(y).divideScalar(3);let P=g(T);x(M,R+0,b,P),x(A,R+2,S,P),x(_,R+4,y,P)}}function x(b,S,y,T){T<0&&b.x===1&&(o[S]=b.x-1),y.x===0&&y.z===0&&(o[S]=T/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let u=n[i],h=n[i+1]-u,d=(o-u)/h;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new lt:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,i=[],r=[],o=[],a=new I,c=new be;for(let d=0;d<=t;d++){let p=d/t;i[d]=this.getTangentAt(p,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Qt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Qt(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ss=class extends rn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new lt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},mo=class extends ss{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Yc(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,i(o,a,h,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var eh=new I,nh=new I,lc=new Yc,hc=new Yc,uc=new Yc,oi=class extends rn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(nh.subVectors(i[0],i[1]).add(i[0]),l=nh);let f=i[a%r],h=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(eh.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=eh),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(u),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),lc.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,p,x,g),hc.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,p,x,g),uc.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&(lc.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),hc.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),uc.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(lc.calc(c),hc.calc(c),uc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ih(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function qf(s,t){let e=1-s;return e*e*t}function Yf(s,t){return 2*(1-s)*s*t}function Zf(s,t){return s*s*t}function Ms(s,t,e,n){return qf(s,t)+Yf(s,e)+Zf(s,n)}function Jf(s,t){let e=1-s;return e*e*e*t}function Kf(s,t){let e=1-s;return 3*e*e*s*t}function $f(s,t){return 3*(1-s)*s*s*t}function jf(s,t){return s*s*s*t}function Ss(s,t,e,n,i){return Jf(s,t)+Kf(s,e)+$f(s,n)+jf(s,i)}var ks=class extends rn{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ss(t,i.x,r.x,o.x,a.x),Ss(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},go=class extends rn{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ss(t,i.x,r.x,o.x,a.x),Ss(t,i.y,r.y,o.y,a.y),Ss(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zs=class extends rn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xo=class extends rn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hs=class extends rn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ms(t,i.x,r.x,o.x),Ms(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wi=class extends rn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ms(t,i.x,r.x,o.x),Ms(t,i.y,r.y,o.y),Ms(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gs=class extends rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(ih(a,c.x,l.x,u.x,f.x),ih(a,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new lt().fromArray(i))}return this}},_o=Object.freeze({__proto__:null,ArcCurve:mo,CatmullRomCurve3:oi,CubicBezierCurve:ks,CubicBezierCurve3:go,EllipseCurve:ss,LineCurve:zs,LineCurve3:xo,QuadraticBezierCurve:Hs,QuadraticBezierCurve3:wi,SplineCurve:Gs}),yo=class extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _o[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new _o[i.type]().fromJSON(i))}return this}},Vs=class extends yo{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new zs(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Hs(this.currentPoint.clone(),new lt(t,e),new lt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new ks(this.currentPoint.clone(),new lt(t,e),new lt(n,i),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Gs(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){let l=new ss(t,e,n,i,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},un=class extends Vs{constructor(t){super(t),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Vs().fromJSON(i))}return this}};function Qf(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Jh(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=sd(s,t,r,e)),s.length>80*e){a=s[0],c=s[1];let u=a,f=c;for(let h=e;h<i;h+=e){let d=s[h],p=s[h+1];d<a&&(a=d),p<c&&(c=p),d>u&&(u=d),p>f&&(f=p)}l=Math.max(u-a,f-c),l=l!==0?32767/l:0}return Ws(r,o,e,a,c,l,0),o}function Jh(s,t,e,n,i){let r;if(i===md(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=sh(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=sh(o/n|0,s[o],s[o+1],r);return r&&rs(r,r.next)&&(qs(r),r=r.next),r}function Ai(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(rs(e,e.next)||Se(e.prev,e,e.next)===0)){if(qs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ws(s,t,e,n,i,r,o){if(!s)return;!o&&r&&ld(s,n,i,r);let a=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(r?ed(s,n,i,r):td(s)){t.push(c.i,s.i,l.i),qs(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=nd(Ai(s),t),Ws(s,t,e,n,i,r,2)):o===2&&id(s,t,e,n,i,r):Ws(Ai(s),t,e,n,i,r,1);break}}}function td(s){let t=s.prev,e=s,n=s.next;if(Se(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(i,r,o),f=Math.min(a,c,l),h=Math.max(i,r,o),d=Math.max(a,c,l),p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=h&&p.y>=f&&p.y<=d&&ys(i,a,r,c,o,l,p.x,p.y)&&Se(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ed(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Se(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,u=i.y,f=r.y,h=o.y,d=Math.min(a,c,l),p=Math.min(u,f,h),x=Math.max(a,c,l),g=Math.max(u,f,h),m=vc(d,p,t,e,n),b=vc(x,g,t,e,n),S=s.prevZ,y=s.nextZ;for(;S&&S.z>=m&&y&&y.z<=b;){if(S.x>=d&&S.x<=x&&S.y>=p&&S.y<=g&&S!==i&&S!==o&&ys(a,u,c,f,l,h,S.x,S.y)&&Se(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&ys(a,u,c,f,l,h,y.x,y.y)&&Se(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=m;){if(S.x>=d&&S.x<=x&&S.y>=p&&S.y<=g&&S!==i&&S!==o&&ys(a,u,c,f,l,h,S.x,S.y)&&Se(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=b;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==o&&ys(a,u,c,f,l,h,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function nd(s,t){let e=s;do{let n=e.prev,i=e.next.next;!rs(n,i)&&$h(n,e,e.next,i)&&Xs(n,i)&&Xs(i,n)&&(t.push(n.i,e.i,i.i),qs(e),qs(e.next),e=s=i),e=e.next}while(e!==s);return Ai(e)}function id(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fd(o,a)){let c=jh(o,a);o=Ai(o,o.next),c=Ai(c,c.next),Ws(o,t,e,n,i,r,0),Ws(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function sd(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=Jh(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(ud(l))}i.sort(rd);for(let r=0;r<i.length;r++)e=od(i[r],e);return e}function rd(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function od(s,t){let e=ad(s,t);if(!e)return t;let n=jh(e,s);return Ai(n,n.next),Ai(e,e.next)}function ad(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(rs(s,e))return e;do{if(rs(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Kh(i<l?n:r,i,c,l,i<l?r:n,i,e.x,e.y)){let f=Math.abs(i-e.y)/(n-e.x);Xs(e,s)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&cd(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function cd(s,t){return Se(s.prev,s,t.prev)<0&&Se(t.next,s,s.next)<0}function ld(s,t,e,n){let i=s;do i.z===0&&(i.z=vc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,hd(i)}function hd(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function vc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function ud(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Kh(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function ys(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Kh(s,t,e,n,i,r,o,a)}function fd(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!dd(s,t)&&(Xs(s,t)&&Xs(t,s)&&pd(s,t)&&(Se(s.prev,s,t.prev)||Se(s,t.prev,t))||rs(s,t)&&Se(s.prev,s,s.next)>0&&Se(t.prev,t,t.next)>0)}function Se(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function rs(s,t){return s.x===t.x&&s.y===t.y}function $h(s,t,e,n){let i=Yr(Se(s,t,e)),r=Yr(Se(s,t,n)),o=Yr(Se(e,n,s)),a=Yr(Se(e,n,t));return!!(i!==r&&o!==a||i===0&&qr(s,e,t)||r===0&&qr(s,n,t)||o===0&&qr(e,s,n)||a===0&&qr(e,t,n))}function qr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Yr(s){return s>0?1:s<0?-1:0}function dd(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&$h(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Xs(s,t){return Se(s.prev,s,s.next)<0?Se(s,t,s.next)>=0&&Se(s,s.prev,t)>=0:Se(s,t,s.prev)<0||Se(s,s.next,t)<0}function pd(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function jh(s,t){let e=bc(s.i,s.x,s.y),n=bc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function sh(s,t,e,n){let i=bc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function bc(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function md(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Mc=class{static triangulate(t,e,n=2){return Qf(t,e,n)}},bi=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];rh(t),oh(n,t);let o=t.length;e.forEach(rh);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,oh(n,e[c]);let a=Mc.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function rh(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function oh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var yn=class s extends he{constructor(t=new un([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Xt(i,3)),this.setAttribute("uv",new Xt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:gd,S,y=!1,T,M,A,_;if(m){S=m.getSpacedPoints(u),y=!0,h=!1;let it=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(u,it),M=new I,A=new I,_=new I}h||(g=0,d=0,p=0,x=0);let E=a.extractPoints(l),R=E.shape,P=E.holes;if(!bi.isClockWise(R)){R=R.reverse();for(let it=0,ct=P.length;it<ct;it++){let at=P[it];bi.isClockWise(at)&&(P[it]=at.reverse())}}function z(it){let at=10000000000000001e-36,vt=it[0];for(let xt=1;xt<=it.length;xt++){let zt=xt%it.length,Pt=it[zt],Wt=Pt.x-vt.x,Zt=Pt.y-vt.y,N=Wt*Wt+Zt*Zt,fe=Math.max(Math.abs(Pt.x),Math.abs(Pt.y),Math.abs(vt.x),Math.abs(vt.y)),ee=at*fe*fe;if(N<=ee){it.splice(zt,1),xt--;continue}vt=Pt}}z(R),P.forEach(z);let W=P.length,O=R;for(let it=0;it<W;it++){let ct=P[it];R=R.concat(ct)}function L(it,ct,at){return ct||Gt("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(ct,at)}let U=R.length;function X(it,ct,at){let vt,xt,zt,Pt=it.x-ct.x,Wt=it.y-ct.y,Zt=at.x-it.x,N=at.y-it.y,fe=Pt*Pt+Wt*Wt,ee=Pt*N-Wt*Zt;if(Math.abs(ee)>Number.EPSILON){let C=Math.sqrt(fe),v=Math.sqrt(Zt*Zt+N*N),k=ct.x-Wt/C,V=ct.y+Pt/C,Y=at.x-N/v,ht=at.y+Zt/v,ut=((Y-k)*N-(ht-V)*Zt)/(Pt*N-Wt*Zt);vt=k+Pt*ut-it.x,xt=V+Wt*ut-it.y;let Z=vt*vt+xt*xt;if(Z<=2)return new lt(vt,xt);zt=Math.sqrt(Z/2)}else{let C=!1;Pt>Number.EPSILON?Zt>Number.EPSILON&&(C=!0):Pt<-Number.EPSILON?Zt<-Number.EPSILON&&(C=!0):Math.sign(Wt)===Math.sign(N)&&(C=!0),C?(vt=-Wt,xt=Pt,zt=Math.sqrt(fe)):(vt=Pt,xt=Wt,zt=Math.sqrt(fe/2))}return new lt(vt/zt,xt/zt)}let $=[];for(let it=0,ct=O.length,at=ct-1,vt=it+1;it<ct;it++,at++,vt++)at===ct&&(at=0),vt===ct&&(vt=0),$[it]=X(O[it],O[at],O[vt]);let tt=[],et,gt=$.concat();for(let it=0,ct=W;it<ct;it++){let at=P[it];et=[];for(let vt=0,xt=at.length,zt=xt-1,Pt=vt+1;vt<xt;vt++,zt++,Pt++)zt===xt&&(zt=0),Pt===xt&&(Pt=0),et[vt]=X(at[vt],at[zt],at[Pt]);tt.push(et),gt=gt.concat(et)}let Vt;if(g===0)Vt=bi.triangulateShape(O,P);else{let it=[],ct=[];for(let at=0;at<g;at++){let vt=at/g,xt=d*Math.cos(vt*Math.PI/2),zt=p*Math.sin(vt*Math.PI/2)+x;for(let Pt=0,Wt=O.length;Pt<Wt;Pt++){let Zt=L(O[Pt],$[Pt],zt);wt(Zt.x,Zt.y,-xt),vt===0&&it.push(Zt)}for(let Pt=0,Wt=W;Pt<Wt;Pt++){let Zt=P[Pt];et=tt[Pt];let N=[];for(let fe=0,ee=Zt.length;fe<ee;fe++){let C=L(Zt[fe],et[fe],zt);wt(C.x,C.y,-xt),vt===0&&N.push(C)}vt===0&&ct.push(N)}}Vt=bi.triangulateShape(it,ct)}let ae=Vt.length,te=p+x;for(let it=0;it<U;it++){let ct=h?L(R[it],gt[it],te):R[it];y?(A.copy(T.normals[0]).multiplyScalar(ct.x),M.copy(T.binormals[0]).multiplyScalar(ct.y),_.copy(S[0]).add(A).add(M),wt(_.x,_.y,_.z)):wt(ct.x,ct.y,0)}for(let it=1;it<=u;it++)for(let ct=0;ct<U;ct++){let at=h?L(R[ct],gt[ct],te):R[ct];y?(A.copy(T.normals[it]).multiplyScalar(at.x),M.copy(T.binormals[it]).multiplyScalar(at.y),_.copy(S[it]).add(A).add(M),wt(_.x,_.y,_.z)):wt(at.x,at.y,f/u*it)}for(let it=g-1;it>=0;it--){let ct=it/g,at=d*Math.cos(ct*Math.PI/2),vt=p*Math.sin(ct*Math.PI/2)+x;for(let xt=0,zt=O.length;xt<zt;xt++){let Pt=L(O[xt],$[xt],vt);wt(Pt.x,Pt.y,f+at)}for(let xt=0,zt=P.length;xt<zt;xt++){let Pt=P[xt];et=tt[xt];for(let Wt=0,Zt=Pt.length;Wt<Zt;Wt++){let N=L(Pt[Wt],et[Wt],vt);y?wt(N.x,N.y+S[u-1].y,S[u-1].x+at):wt(N.x,N.y,f+at)}}}K(),ot();function K(){let it=i.length/3;if(h){let ct=0,at=U*ct;for(let vt=0;vt<ae;vt++){let xt=Vt[vt];Bt(xt[2]+at,xt[1]+at,xt[0]+at)}ct=u+g*2,at=U*ct;for(let vt=0;vt<ae;vt++){let xt=Vt[vt];Bt(xt[0]+at,xt[1]+at,xt[2]+at)}}else{for(let ct=0;ct<ae;ct++){let at=Vt[ct];Bt(at[2],at[1],at[0])}for(let ct=0;ct<ae;ct++){let at=Vt[ct];Bt(at[0]+U*u,at[1]+U*u,at[2]+U*u)}}n.addGroup(it,i.length/3-it,0)}function ot(){let it=i.length/3,ct=0;rt(O,ct),ct+=O.length;for(let at=0,vt=P.length;at<vt;at++){let xt=P[at];rt(xt,ct),ct+=xt.length}n.addGroup(it,i.length/3-it,1)}function rt(it,ct){let at=it.length;for(;--at>=0;){let vt=at,xt=at-1;xt<0&&(xt=it.length-1);for(let zt=0,Pt=u+g*2;zt<Pt;zt++){let Wt=U*zt,Zt=U*(zt+1),N=ct+vt+Wt,fe=ct+xt+Wt,ee=ct+xt+Zt,C=ct+vt+Zt;Ft(N,fe,ee,C)}}}function wt(it,ct,at){c.push(it),c.push(ct),c.push(at)}function Bt(it,ct,at){se(it),se(ct),se(at);let vt=i.length/3,xt=b.generateTopUV(n,i,vt-3,vt-2,vt-1);qt(xt[0]),qt(xt[1]),qt(xt[2])}function Ft(it,ct,at,vt){se(it),se(ct),se(vt),se(ct),se(at),se(vt);let xt=i.length/3,zt=b.generateSideWallUV(n,i,xt-6,xt-3,xt-2,xt-1);qt(zt[0]),qt(zt[1]),qt(zt[3]),qt(zt[1]),qt(zt[2]),qt(zt[3])}function se(it){i.push(c[it*3+0]),i.push(c[it*3+1]),i.push(c[it*3+2])}function qt(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return xd(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new _o[i.type]().fromJSON(i)),new s(n,t.options)}},gd={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],u=t[i*3+1];return[new lt(r,o),new lt(a,c),new lt(l,u)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[i*3],d=t[i*3+1],p=t[i*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new lt(o,1-c),new lt(l,1-f),new lt(h,1-p),new lt(x,1-m)]:[new lt(a,1-c),new lt(u,1-f),new lt(d,1-p),new lt(g,1-m)]}};function xd(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ys=class s extends po{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Zs=class s extends he{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Qt(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/e,f=new I,h=new lt,d=new I,p=new I,x=new I,g=0,m=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:g=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,d.x=m*1,d.y=-g,d.z=m*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:g=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(p)}for(let b=0;b<=e;b++){let S=n+b*u*i,y=Math.sin(S),T=Math.cos(S);for(let M=0;M<=t.length-1;M++){f.x=t[M].x*y,f.y=t[M].y,f.z=t[M].x*T,o.push(f.x,f.y,f.z),h.x=b/e,h.y=M/(t.length-1),a.push(h.x,h.y);let A=c[3*M+0]*y,_=c[3*M+1],E=c[3*M+0]*T;l.push(A,_,E)}}for(let b=0;b<e;b++)for(let S=0;S<t.length-1;S++){let y=S+b*t.length,T=y,M=y+t.length,A=y+t.length+1,_=y+1;r.push(T,M,_),r.push(A,_,M)}this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("uv",new Xt(a,2)),this.setAttribute("normal",new Xt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Ge=class s extends he{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,f=t/a,h=e/c,d=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let b=m*h-o;for(let S=0;S<l;S++){let y=S*f-r;p.push(y,-b,0),x.push(0,0,1),g.push(S/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<a;b++){let S=b+l*m,y=b+l*(m+1),T=b+1+l*(m+1),M=b+1+l*m;d.push(S,y,M),d.push(y,T,M)}this.setIndex(d),this.setAttribute("position",new Xt(p,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var pe=class s extends he{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],f=new I,h=new I,d=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let b=[],S=m/n,y=o+S*a,T=t*Math.cos(y),M=Math.sqrt(t*t-T*T),A=0;m===0&&o===0?A=.5/e:m===n&&c===Math.PI&&(A=-.5/e);for(let _=0;_<=e;_++){let E=_/e,R=i+E*r;f.x=-M*Math.cos(R),f.y=T,f.z=M*Math.sin(R),p.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),g.push(E+A,1-S),b.push(l++)}u.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){let S=u[m][b+1],y=u[m][b],T=u[m+1][b],M=u[m+1][b+1];(m!==0||o>0)&&d.push(S,y,M),(m!==n-1||c<Math.PI)&&d.push(y,T,M)}this.setIndex(d),this.setAttribute("position",new Xt(p,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var on=class s extends he{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],u=[],f=[],h=new I,d=new I,p=new I;for(let x=0;x<=n;x++){let g=o+x/n*a;for(let m=0;m<=i;m++){let b=m/i*r;d.x=(t+e*Math.cos(g))*Math.cos(b),d.y=(t+e*Math.cos(g))*Math.sin(b),d.z=e*Math.sin(g),l.push(d.x,d.y,d.z),h.x=t*Math.cos(b),h.y=t*Math.sin(b),p.subVectors(d,h).normalize(),u.push(p.x,p.y,p.z),f.push(m/i),f.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=i;g++){let m=(i+1)*x+g-1,b=(i+1)*(x-1)+g-1,S=(i+1)*(x-1)+g,y=(i+1)*x+g;c.push(m,b,y),c.push(b,S,y)}this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ri=class s extends he{constructor(t=new wi(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,c=new I,l=new lt,u=new I,f=[],h=[],d=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(d,2));function x(){for(let S=0;S<e;S++)g(S);g(r===!1?e:0),b(),m()}function g(S){u=t.getPointAt(S/e,u);let y=o.normals[S],T=o.binormals[S];for(let M=0;M<=i;M++){let A=M/i*Math.PI*2,_=Math.sin(A),E=-Math.cos(A);c.x=E*y.x+_*T.x,c.y=E*y.y+_*T.y,c.z=E*y.z+_*T.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,f.push(a.x,a.y,a.z)}}function m(){for(let S=1;S<=e;S++)for(let y=1;y<=i;y++){let T=(i+1)*(S-1)+(y-1),M=(i+1)*S+(y-1),A=(i+1)*S+y,_=(i+1)*(S-1)+y;p.push(T,M,_),p.push(M,A,_)}}function b(){for(let S=0;S<=e;S++)for(let y=0;y<=i;y++)l.x=S/e,l.y=y/i,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new _o[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ii(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(ah(i))i.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(ah(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Ye(s){let t={};for(let e=0;e<s.length;e++){let n=Ii(s[e]);for(let i in n)t[i]=n[i]}return t}function ah(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function _d(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Zc(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var Qh={clone:Ii,merge:Ye},yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yd,this.fragmentShader=vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ii(t.uniforms),this.uniformsGroups=_d(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Ut().setHex(i.value);break;case"v2":this.uniforms[n].value=new lt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new I().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new be().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},vo=class extends an{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Dt=class extends Dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pr,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Js=class extends Dn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ut(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pr,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var bo=class extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Mo=class extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Zr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}var ai=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},So=class extends ai{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pc,endingEnd:pc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case mc:r=t,a=2*e-n;break;case gc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case mc:o=t,c=2*n-e;break;case gc:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),x=p*p,g=x*p,m=-h*g+2*h*x-h*p,b=(1+h)*g+(-1.5-2*h)*x+(-.5+h)*p+1,S=(-1-d)*g+(1.5+d)*x+.5*p,y=d*g-d*x;for(let T=0;T!==a;++T)r[T]=m*o[u+T]+b*o[l+T]+S*o[c+T]+y*o[f+T];return r}},Eo=class extends ai{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(i-e),f=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*f+o[c+h]*u;return r}},To=class extends ai{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},wo=class extends ai{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let p=(n-e)/(i-e),x=1-p;for(let g=0;g!==a;++g)r[g]=o[l+g]*x+o[c+g]*p;return r}let h=a*2,d=t-1;for(let p=0;p!==a;++p){let x=o[l+p],g=o[c+p],m=d*h+p*2,b=f[m],S=f[m+1],y=t*h+p*2,T=u[y],M=u[y+1],A=(n-e)/(i-e),_,E,R,P,D;for(let z=0;z<8;z++){_=A*A,E=_*A,R=1-A,P=R*R,D=P*R;let O=D*e+3*P*A*b+3*R*_*T+E*i-n;if(Math.abs(O)<1e-10)break;let L=3*P*(b-e)+6*R*A*(T-b)+3*_*(i-T);if(Math.abs(L)<1e-10)break;A=A-O/L,A=Math.max(0,Math.min(1,A))}r[p]=D*x+3*P*A*S+3*R*_*M+E*g}return r}},cn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zr(e,this.TimeBufferType),this.values=Zr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Zr(t.times,Array),values:Zr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new To(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new So(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new wo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Es:e=this.InterpolantFactoryMethodDiscrete;break;case co:e=this.InterpolantFactoryMethodLinear;break;case $r:e=this.InterpolantFactoryMethodSmooth;break;case dc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return co;case this.InterpolantFactoryMethodSmooth:return $r;case this.InterpolantFactoryMethodBezier:return dc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Gt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Gt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&uf(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){Gt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===$r,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(i)c=!0;else{let f=a*n,h=f-n,d=f+n;for(let p=0;p!==n;++p){let x=e[f+p];if(x!==e[h+p]||x!==e[d+p]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};cn.prototype.ValueTypeName="";cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=co;var ci=class extends cn{constructor(t,e,n){super(t,e,n)}};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Es;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends cn{constructor(t,e,n,i){super(t,e,n,i)}};Ao.prototype.ValueTypeName="color";var Ro=class extends cn{constructor(t,e,n,i){super(t,e,n,i)}};Ro.prototype.ValueTypeName="number";var Co=class extends ai{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let u=l+a;l!==u;l+=4)Ln.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ks=class extends cn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Co(this.times,this.values,this.getValueSize(),t)}};Ks.prototype.ValueTypeName="quaternion";Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends cn{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Es;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Po=class extends cn{constructor(t,e,n,i){super(t,e,n,i)}};Po.prototype.ValueTypeName="vector";var Io=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let d=l[f],p=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tu=new Io,Lo=class{constructor(t){this.manager=t!==void 0?t:tu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Lo.DEFAULT_MATERIAL_NAME="__DEFAULT";var os=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},$s=class extends os{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},fc=new be,ch=new I,lh=new I,Sc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=je,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ns,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;ch.setFromMatrixPosition(t.matrixWorld),e.position.copy(ch),lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lh),e.updateMatrixWorld(),fc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fc,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Ki||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Jr=new I,Kr=new Ln,An=new I,js=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Jr,Kr,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jr,Kr,An.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Jr,Kr,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jr,Kr,An.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ni=new I,hh=new lt,uh=new lt,ke=class extends js{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ji*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,hh,uh),e.subVectors(uh,hh)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(vs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var as=class extends js{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ec=class extends Sc{constructor(){super(new as(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qs=class extends os{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new Ec}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},tr=class extends os{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var qi=-90,Yi=1,Do=class extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ke(qi,Yi,t,e);i.layers=this.layers,this.add(i);let r=new ke(qi,Yi,t,e);r.layers=this.layers,this.add(r);let o=new ke(qi,Yi,t,e);o.layers=this.layers,this.add(o);let a=new ke(qi,Yi,t,e);a.layers=this.layers,this.add(a);let c=new ke(qi,Yi,t,e);c.layers=this.layers,this.add(c);let l=new ke(qi,Yi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ki)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},No=class extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Jc="\\[\\]\\.:\\/",bd=new RegExp("["+Jc+"]","g"),Kc="[^"+Jc+"]",Md="[^"+Jc.replace("\\.","")+"]",Sd=/((?:WC+[\/:])*)/.source.replace("WC",Kc),Ed=/(WCOD+)?/.source.replace("WCOD",Md),Td=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kc),wd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kc),Ad=new RegExp("^"+Sd+Ed+Td+wd+"$"),Rd=["material","materials","bones","map"],Tc=class{constructor(t,e,n){let i=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(bd,"")}static parseTrackName(t){let e=Ad.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Rd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=Tc;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $x=new Float32Array(1);var er=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,kt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var nl=class nl{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};nl.prototype.isMatrix2=!0;var wc=nl;function $c(s,t,e,n){let i=Cd(n);switch(e){case Gc:return s*t;case ar:return s*t/i.components*i.byteLength;case Go:return s*t/i.components*i.byteLength;case di:return s*t*2/i.components*i.byteLength;case Vo:return s*t*2/i.components*i.byteLength;case Vc:return s*t*3/i.components*i.byteLength;case fn:return s*t*4/i.components*i.byteLength;case Wo:return s*t*4/i.components*i.byteLength;case cr:case lr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case hr:case ur:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case qo:case Zo:return Math.max(s,16)*Math.max(t,8)/4;case Xo:case Yo:return Math.max(s,8)*Math.max(t,8)/2;case Jo:case Ko:case jo:case Qo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $o:case fr:case ta:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ea:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case na:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ia:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case sa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ra:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case oa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case aa:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ca:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case la:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ha:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ua:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case fa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case da:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case pa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ma:case ga:case xa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case _a:case ya:return Math.ceil(s/4)*Math.ceil(t/4)*8;case dr:case va:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cd(s){switch(s){case je:case Bc:return{byteLength:1,components:1};case ls:case kc:case Un:return{byteLength:2,components:1};case zo:case Ho:return{byteLength:2,components:4};case bn:case ko:case Mn:return{byteLength:4,components:1};case zc:case Hc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Su(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Od(s){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,f=l.byteLength,h=s.createBuffer();s.bindBuffer(c,h),s.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let u=c.array,f=c.updateRanges;if(s.bindBuffer(l,a),f.length===0)s.bufferSubData(l,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){let p=f[h],x=f[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){let x=f[d];s.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$d=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ap=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Pp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Up=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Op=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,im=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,am=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Am=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Im=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,km=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ym=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,i0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,r0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,o0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,l0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,d0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:Bd,alphahash_pars_fragment:kd,alphamap_fragment:zd,alphamap_pars_fragment:Hd,alphatest_fragment:Gd,alphatest_pars_fragment:Vd,aomap_fragment:Wd,aomap_pars_fragment:Xd,batching_pars_vertex:qd,batching_vertex:Yd,begin_vertex:Zd,beginnormal_vertex:Jd,bsdfs:Kd,iridescence_fragment:$d,bumpmap_pars_fragment:jd,clipping_planes_fragment:Qd,clipping_planes_pars_fragment:tp,clipping_planes_pars_vertex:ep,clipping_planes_vertex:np,color_fragment:ip,color_pars_fragment:sp,color_pars_vertex:rp,color_vertex:op,common:ap,cube_uv_reflection_fragment:cp,defaultnormal_vertex:lp,displacementmap_pars_vertex:hp,displacementmap_vertex:up,emissivemap_fragment:fp,emissivemap_pars_fragment:dp,colorspace_fragment:pp,colorspace_pars_fragment:mp,envmap_fragment:gp,envmap_common_pars_fragment:xp,envmap_pars_fragment:_p,envmap_pars_vertex:yp,envmap_physical_pars_fragment:Pp,envmap_vertex:vp,fog_vertex:bp,fog_pars_vertex:Mp,fog_fragment:Sp,fog_pars_fragment:Ep,gradientmap_pars_fragment:Tp,lightmap_pars_fragment:wp,lights_lambert_fragment:Ap,lights_lambert_pars_fragment:Rp,lights_pars_begin:Cp,lights_toon_fragment:Ip,lights_toon_pars_fragment:Lp,lights_phong_fragment:Dp,lights_phong_pars_fragment:Np,lights_physical_fragment:Up,lights_physical_pars_fragment:Fp,lights_fragment_begin:Op,lights_fragment_maps:Bp,lights_fragment_end:kp,lightprobes_pars_fragment:zp,logdepthbuf_fragment:Hp,logdepthbuf_pars_fragment:Gp,logdepthbuf_pars_vertex:Vp,logdepthbuf_vertex:Wp,map_fragment:Xp,map_pars_fragment:qp,map_particle_fragment:Yp,map_particle_pars_fragment:Zp,metalnessmap_fragment:Jp,metalnessmap_pars_fragment:Kp,morphinstance_vertex:$p,morphcolor_vertex:jp,morphnormal_vertex:Qp,morphtarget_pars_vertex:tm,morphtarget_vertex:em,normal_fragment_begin:nm,normal_fragment_maps:im,normal_pars_fragment:sm,normal_pars_vertex:rm,normal_vertex:om,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:cm,clearcoat_normal_fragment_maps:lm,clearcoat_pars_fragment:hm,iridescence_pars_fragment:um,opaque_fragment:fm,packing:dm,premultiplied_alpha_fragment:pm,project_vertex:mm,dithering_fragment:gm,dithering_pars_fragment:xm,roughnessmap_fragment:_m,roughnessmap_pars_fragment:ym,shadowmap_pars_fragment:vm,shadowmap_pars_vertex:bm,shadowmap_vertex:Mm,shadowmask_pars_fragment:Sm,skinbase_vertex:Em,skinning_pars_vertex:Tm,skinning_vertex:wm,skinnormal_vertex:Am,specularmap_fragment:Rm,specularmap_pars_fragment:Cm,tonemapping_fragment:Pm,tonemapping_pars_fragment:Im,transmission_fragment:Lm,transmission_pars_fragment:Dm,uv_pars_fragment:Nm,uv_pars_vertex:Um,uv_vertex:Fm,worldpos_vertex:Om,background_vert:Bm,background_frag:km,backgroundCube_vert:zm,backgroundCube_frag:Hm,cube_vert:Gm,cube_frag:Vm,depth_vert:Wm,depth_frag:Xm,distance_vert:qm,distance_frag:Ym,equirect_vert:Zm,equirect_frag:Jm,linedashed_vert:Km,linedashed_frag:$m,meshbasic_vert:jm,meshbasic_frag:Qm,meshlambert_vert:t0,meshlambert_frag:e0,meshmatcap_vert:n0,meshmatcap_frag:i0,meshnormal_vert:s0,meshnormal_frag:r0,meshphong_vert:o0,meshphong_frag:a0,meshphysical_vert:c0,meshphysical_frag:l0,meshtoon_vert:h0,meshtoon_frag:u0,points_vert:f0,points_frag:d0,shadow_vert:p0,shadow_frag:m0,sprite_vert:g0,sprite_frag:x0},yt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},On={basic:{uniforms:Ye([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ye([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ye([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ye([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ye([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ye([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ye([yt.points,yt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ye([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ye([yt.common,yt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ye([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ye([yt.sprite,yt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:Ye([yt.common,yt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:Ye([yt.lights,yt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};On.physical={uniforms:Ye([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var Sa={r:0,b:0,g:0},_0=new be,Eu=new Yt;Eu.set(-1,0,0,0,1,0,0,0,1);function y0(s,t,e,n,i,r){let o=new Ut(0),a=i===!0?0:1,c,l,u=null,f=0,h=null;function d(b){let S=b.isScene===!0?b.background:null;if(S&&S.isTexture){let y=b.backgroundBlurriness>0;S=t.get(S,y)}return S}function p(b){let S=!1,y=d(b);y===null?g(o,a):y&&y.isColor&&(g(y,1),S=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(b,S){let y=d(S);y&&(y.isCubeTexture||y.mapping===rr)?(l===void 0&&(l=new nt(new le(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Ii(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(_0.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Eu),l.material.toneMapped=ne.getTransfer(y.colorSpace)!==ce,(u!==y||f!==y.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new nt(new Ge(2,2),new an({name:"BackgroundMaterial",uniforms:Ii(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ne.getTransfer(y.colorSpace)!==ce,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function g(b,S){b.getRGB(Sa,Zc(s)),e.buffers.color.setClear(Sa.r,Sa.g,Sa.b,S,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,g(o,a)},render:p,addToRenderList:x,dispose:m}}function v0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null),r=i,o=!1;function a(P,D,z,W,O){let L=!1,U=f(P,W,z,D);r!==U&&(r=U,l(r.object)),L=d(P,W,z,O),L&&p(P,W,z,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,y(P,D,z,W),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return s.createVertexArray()}function l(P){return s.bindVertexArray(P)}function u(P){return s.deleteVertexArray(P)}function f(P,D,z,W){let O=W.wireframe===!0,L=n[D.id];L===void 0&&(L={},n[D.id]=L);let U=P.isInstancedMesh===!0?P.id:0,X=L[U];X===void 0&&(X={},L[U]=X);let $=X[z.id];$===void 0&&($={},X[z.id]=$);let tt=$[O];return tt===void 0&&(tt=h(c()),$[O]=tt),tt}function h(P){let D=[],z=[],W=[];for(let O=0;O<e;O++)D[O]=0,z[O]=0,W[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:W,object:P,attributes:{},index:null}}function d(P,D,z,W){let O=r.attributes,L=D.attributes,U=0,X=z.getAttributes();for(let $ in X)if(X[$].location>=0){let et=O[$],gt=L[$];if(gt===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(gt=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(gt=P.instanceColor)),et===void 0||et.attribute!==gt||gt&&et.data!==gt.data)return!0;U++}return r.attributesNum!==U||r.index!==W}function p(P,D,z,W){let O={},L=D.attributes,U=0,X=z.getAttributes();for(let $ in X)if(X[$].location>=0){let et=L[$];et===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(et=P.instanceColor));let gt={};gt.attribute=et,et&&et.data&&(gt.data=et.data),O[$]=gt,U++}r.attributes=O,r.attributesNum=U,r.index=W}function x(){let P=r.newAttributes;for(let D=0,z=P.length;D<z;D++)P[D]=0}function g(P){m(P,0)}function m(P,D){let z=r.newAttributes,W=r.enabledAttributes,O=r.attributeDivisors;z[P]=1,W[P]===0&&(s.enableVertexAttribArray(P),W[P]=1),O[P]!==D&&(s.vertexAttribDivisor(P,D),O[P]=D)}function b(){let P=r.newAttributes,D=r.enabledAttributes;for(let z=0,W=D.length;z<W;z++)D[z]!==P[z]&&(s.disableVertexAttribArray(z),D[z]=0)}function S(P,D,z,W,O,L,U){U===!0?s.vertexAttribIPointer(P,D,z,O,L):s.vertexAttribPointer(P,D,z,W,O,L)}function y(P,D,z,W){x();let O=W.attributes,L=z.getAttributes(),U=D.defaultAttributeValues;for(let X in L){let $=L[X];if($.location>=0){let tt=O[X];if(tt===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(tt=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(tt=P.instanceColor)),tt!==void 0){let et=tt.normalized,gt=tt.itemSize,Vt=t.get(tt);if(Vt===void 0)continue;let ae=Vt.buffer,te=Vt.type,K=Vt.bytesPerElement,ot=te===s.INT||te===s.UNSIGNED_INT||tt.gpuType===ko;if(tt.isInterleavedBufferAttribute){let rt=tt.data,wt=rt.stride,Bt=tt.offset;if(rt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<$.locationSize;Ft++)m($.location+Ft,rt.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ft=0;Ft<$.locationSize;Ft++)g($.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let Ft=0;Ft<$.locationSize;Ft++)S($.location+Ft,gt/$.locationSize,te,et,wt*K,(Bt+gt/$.locationSize*Ft)*K,ot)}else{if(tt.isInstancedBufferAttribute){for(let rt=0;rt<$.locationSize;rt++)m($.location+rt,tt.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let rt=0;rt<$.locationSize;rt++)g($.location+rt);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let rt=0;rt<$.locationSize;rt++)S($.location+rt,gt/$.locationSize,te,et,gt*K,gt/$.locationSize*rt*K,ot)}}else if(U!==void 0){let et=U[X];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv($.location,et);break;case 3:s.vertexAttrib3fv($.location,et);break;case 4:s.vertexAttrib4fv($.location,et);break;default:s.vertexAttrib1fv($.location,et)}}}}b()}function T(){E();for(let P in n){let D=n[P];for(let z in D){let W=D[z];for(let O in W){let L=W[O];for(let U in L)u(L[U].object),delete L[U];delete W[O]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let D=n[P.id];for(let z in D){let W=D[z];for(let O in W){let L=W[O];for(let U in L)u(L[U].object),delete L[U];delete W[O]}}delete n[P.id]}function A(P){for(let D in n){let z=n[D];for(let W in z){let O=z[W];if(O[P.id]===void 0)continue;let L=O[P.id];for(let U in L)u(L[U].object),delete L[U];delete O[P.id]}}}function _(P){for(let D in n){let z=n[D],W=P.isInstancedMesh===!0?P.id:0,O=z[W];if(O!==void 0){for(let L in O){let U=O[L];for(let X in U)u(U[X].object),delete U[X];delete O[L]}delete z[W],Object.keys(z).length===0&&delete n[D]}}}function E(){R(),o=!0,r!==i&&(r=i,l(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function b0(s,t,e){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(s.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function M0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==fn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let _=A===Un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==je&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Mn&&!_)}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(kt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),M=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:y,maxSamples:T,samples:M}}function S0(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Rn,a=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let p=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,m=s.get(f);if(!i||p===null||p.length===0||r&&!g)r?u(null):l();else{let b=r?0:n,S=b*4,y=m.clippingState||null;c.value=y,y=u(p,h,S,d);for(let T=0;T!==S;++T)y[T]=e[T];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,p){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=c.value,p!==!0||g===null){let m=d+x*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,y=d;S!==x;++S,y+=4)o.copy(f[S]).applyMatrix4(b,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var pi=4,eu=[.125,.215,.35,.446,.526,.582],Li=20,E0=256,mr=new as,nu=new Ut,il=null,sl=0,rl=0,ol=!1,T0=new I,Ta=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=T0}=r;il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(il,sl,rl),this._renderer.xr.enabled=ol,t.scissorTest=!1,us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hi||t.mapping===Ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:Un,format:fn,colorSpace:Ts,depthBuffer:!1},i=iu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=w0(r)),this._blurMaterial=R0(r,t,e),this._ggxMaterial=A0(r,t,e)}return i}_compileMaterial(t){let e=new nt(new he,t);this._renderer.compile(e,mr)}_sceneToCubeUV(t,e,n,i,r){let c=new ke(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(nu),f.toneMapping=vn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nt(new le,new Ee({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,b=t.background;b?b.isColor&&(g.color.copy(b),t.background=null,m=!0):(g.color.copy(nu),m=!0);for(let S=0;S<6;S++){let y=S%3;y===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[S],r.y,r.z)):y===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[S]));let T=this._cubeSize;us(i,y*T,S>2?T:0,T,T),f.setRenderTarget(i),m&&f.render(x,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===hi||t.mapping===Ci;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=su());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;us(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,mr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=0+l*1.25,d=f*h,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-pi?n-p+pi:0),m=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=p-e,us(r,g,m,3*x,2*x),i.setRenderTarget(r),i.render(a,mr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,us(t,g,m,3*x,2*x),i.setRenderTarget(t),i.render(a,mr)}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Gt("blur direction must be either latitudinal or longitudinal!");let u=3,f=this._lodMeshes[i];f.material=l;let h=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Li-1),x=r/p,g=isFinite(r)?1+Math.floor(u*x):Li;g>Li&&kt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Li}`);let m=[],b=0;for(let A=0;A<Li;++A){let _=A/x,E=Math.exp(-_*_/2);m.push(E),A===0?b+=E:A<g&&(b+=2*E)}for(let A=0;A<m.length;A++)m[A]=m[A]/b;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:S}=this;h.dTheta.value=p,h.mipInt.value=S-n;let y=this._sizeLods[i],T=3*y*(i>S-pi?i-S+pi:0),M=4*(this._cubeSize-y);us(e,T,M,3*y,2*y),c.setRenderTarget(e),c.render(f,mr)}};function w0(s){let t=[],e=[],n=[],i=s,r=s-pi+1+eu.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>s-pi?c=eu[o-s+pi-1]:o===0&&(c=0),e.push(c);let l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,p=6,x=3,g=2,m=1,b=new Float32Array(x*p*d),S=new Float32Array(g*p*d),y=new Float32Array(m*p*d);for(let M=0;M<d;M++){let A=M%3*2/3-1,_=M>2?0:-1,E=[A,_,0,A+2/3,_,0,A+2/3,_+1,0,A,_,0,A+2/3,_+1,0,A,_+1,0];b.set(E,x*p*M),S.set(h,g*p*M);let R=[M,M,M,M,M,M];y.set(R,m*p*M)}let T=new he;T.setAttribute("position",new Ue(b,x)),T.setAttribute("uv",new Ue(S,g)),T.setAttribute("faceIndex",new Ue(y,m)),n.push(new nt(T,null)),i>pi&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function iu(s,t,e){let n=new sn(s,t,e);return n.texture.mapping=rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function us(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function A0(s,t,e){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:E0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ra(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function R0(s,t,e){let n=new Float32Array(Li),i=new I(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function su(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function ru(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ra(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var wa=class extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Fs(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new le(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Nn});r.uniforms.tEquirect.value=e;let o=new nt(i,r),a=e.minFilter;return e.minFilter===ui&&(e.minFilter=ze),new Do(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}};function C0(s){let t=new WeakMap,e=new WeakMap,n=null;function i(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Fo||d===Oo)if(t.has(h)){let p=t.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let x=new wa(p.height);return x.fromEquirectangularTexture(s,h),t.set(h,x),h.addEventListener("dispose",l),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,p=d===Fo||d===Oo,x=d===hi||d===Ci;if(p||x){let g=e.get(h),m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Ta(s)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{let b=h.image;return p&&b&&b.height>0||x&&b&&c(b)?(n===null&&(n=new Ta(s)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function a(h,d){return d===Fo?h.mapping=hi:d===Oo&&(h.mapping=Ci),h}function c(h){let d=0,p=6;for(let x=0;x<p;x++)h[x]!==void 0&&d++;return d===p}function l(h){let d=h.target;d.removeEventListener("dispose",l);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function P0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Mi("WebGLRenderer: "+n+" extension not supported."),i}}}function I0(s,t,e,n){let i={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let p in h.attributes)t.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete i[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let d in h)t.update(h[d],s.ARRAY_BUFFER)}function l(f){let h=[],d=f.index,p=f.attributes.position,x=0;if(p===void 0)return;if(d!==null){let b=d.array;x=d.version;for(let S=0,y=b.length;S<y;S+=3){let T=b[S+0],M=b[S+1],A=b[S+2];h.push(T,M,M,A,A,T)}}else{let b=p.array;x=p.version;for(let S=0,y=b.length/3-1;S<y;S+=3){let T=S+0,M=S+1,A=S+2;h.push(T,M,M,A,A,T)}}let g=new(p.count>=65535?Ds:Ls)(h,1);g.version=x;let m=r.get(f);m&&t.remove(m),r.set(f,g)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function L0(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){s.drawElements(n,h,r,f*o),e.update(h,n,1)}function l(f,h,d){d!==0&&(s.drawElementsInstanced(n,h,r,f*o,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let x=0;for(let g=0;g<d;g++)x+=h[g];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function D0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Gt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function N0(s,t,e){let n=new WeakMap,i=new Me;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let E=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],S=0;d===!0&&(S=1),p===!0&&(S=2),x===!0&&(S=3);let y=a.attributes.position.count*S,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let M=new Float32Array(y*T*4*f),A=new Rs(M,y,T,f);A.type=Mn,A.needsUpdate=!0;let _=S*4;for(let R=0;R<f;R++){let P=g[R],D=m[R],z=b[R],W=y*T*4*R;for(let O=0;O<P.count;O++){let L=O*_;d===!0&&(i.fromBufferAttribute(P,O),M[W+L+0]=i.x,M[W+L+1]=i.y,M[W+L+2]=i.z,M[W+L+3]=0),p===!0&&(i.fromBufferAttribute(D,O),M[W+L+4]=i.x,M[W+L+5]=i.y,M[W+L+6]=i.z,M[W+L+7]=0),x===!0&&(i.fromBufferAttribute(z,O),M[W+L+8]=i.x,M[W+L+9]=i.y,M[W+L+10]=i.z,M[W+L+11]=z.itemSize===4?i.w:1)}}h={count:f,texture:A,size:new lt(y,T)},n.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let p=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function U0(s,t,e,n,i){let r=new WeakMap;function o(l){let u=i.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var F0={[Ic]:"LINEAR_TONE_MAPPING",[Lc]:"REINHARD_TONE_MAPPING",[Dc]:"CINEON_TONE_MAPPING",[sr]:"ACES_FILMIC_TONE_MAPPING",[Uc]:"AGX_TONE_MAPPING",[Fc]:"NEUTRAL_TONE_MAPPING",[Nc]:"CUSTOM_TONE_MAPPING"};function O0(s,t,e,n,i,r){let o=new sn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,depthTexture:i?new qn(t,e):void 0}),a=new sn(t,e,{type:Un,depthBuffer:!1,stencilBuffer:!1}),c=new he;c.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Xt([0,2,0,0,2,0],2));let l=new vo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new nt(c,l),f=new as(-1,1,1,-1,0,1),h=null,d=null,p=!1,x,g=null,m=[],b=!1;this.setSize=function(S,y){o.setSize(S,y),a.setSize(S,y);for(let T=0;T<m.length;T++){let M=m[T];M.setSize&&M.setSize(S,y)}},this.setEffects=function(S){m=S,b=m.length>0&&m[0].isRenderPass===!0;let y=o.width,T=o.height;for(let M=0;M<m.length;M++){let A=m[M];A.setSize&&A.setSize(y,T)}},this.begin=function(S,y){if(p||S.toneMapping===vn&&m.length===0)return!1;if(g=y,y!==null){let T=y.width,M=y.height;(o.width!==T||o.height!==M)&&this.setSize(T,M)}return b===!1&&S.setRenderTarget(o),x=S.toneMapping,S.toneMapping=vn,!0},this.hasRenderPass=function(){return b},this.end=function(S,y){S.toneMapping=x,p=!0;let T=o,M=a;for(let A=0;A<m.length;A++){let _=m[A];if(_.enabled!==!1&&(_.render(S,M,T,y),_.needsSwap!==!1)){let E=T;T=M,M=E}}if(h!==S.outputColorSpace||d!==S.toneMapping){h=S.outputColorSpace,d=S.toneMapping,l.defines={},ne.getTransfer(h)===ce&&(l.defines.SRGB_TRANSFER="");let A=F0[d];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(g),S.render(u,f),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}var Tu=new Ke,ll=new qn(1,1),wu=new Rs,Au=new uo,Ru=new Fs,ou=[],au=[],cu=new Float32Array(16),lu=new Float32Array(9),hu=new Float32Array(4);function ds(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=ou[i];if(r===void 0&&(r=new Float32Array(i),ou[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Fe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Oe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ca(s,t){let e=au[t];e===void 0&&(e=new Int32Array(t),au[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function B0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function k0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2fv(this.addr,t),Oe(e,t)}}function z0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;s.uniform3fv(this.addr,t),Oe(e,t)}}function H0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4fv(this.addr,t),Oe(e,t)}}function G0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;hu.set(n),s.uniformMatrix2fv(this.addr,!1,hu),Oe(e,n)}}function V0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;lu.set(n),s.uniformMatrix3fv(this.addr,!1,lu),Oe(e,n)}}function W0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;cu.set(n),s.uniformMatrix4fv(this.addr,!1,cu),Oe(e,n)}}function X0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function q0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2iv(this.addr,t),Oe(e,t)}}function Y0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3iv(this.addr,t),Oe(e,t)}}function Z0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4iv(this.addr,t),Oe(e,t)}}function J0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function K0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2uiv(this.addr,t),Oe(e,t)}}function $0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3uiv(this.addr,t),Oe(e,t)}}function j0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4uiv(this.addr,t),Oe(e,t)}}function Q0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ll.compareFunction=e.isReversedDepthBuffer()?Ma:ba,r=ll):r=Tu,e.setTexture2D(t||r,i)}function tg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Au,i)}function eg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ru,i)}function ng(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||wu,i)}function ig(s){switch(s){case 5126:return B0;case 35664:return k0;case 35665:return z0;case 35666:return H0;case 35674:return G0;case 35675:return V0;case 35676:return W0;case 5124:case 35670:return X0;case 35667:case 35671:return q0;case 35668:case 35672:return Y0;case 35669:case 35673:return Z0;case 5125:return J0;case 36294:return K0;case 36295:return $0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return eg;case 36289:case 36303:case 36311:case 36292:return ng}}function sg(s,t){s.uniform1fv(this.addr,t)}function rg(s,t){let e=ds(t,this.size,2);s.uniform2fv(this.addr,e)}function og(s,t){let e=ds(t,this.size,3);s.uniform3fv(this.addr,e)}function ag(s,t){let e=ds(t,this.size,4);s.uniform4fv(this.addr,e)}function cg(s,t){let e=ds(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function lg(s,t){let e=ds(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function hg(s,t){let e=ds(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ug(s,t){s.uniform1iv(this.addr,t)}function fg(s,t){s.uniform2iv(this.addr,t)}function dg(s,t){s.uniform3iv(this.addr,t)}function pg(s,t){s.uniform4iv(this.addr,t)}function mg(s,t){s.uniform1uiv(this.addr,t)}function gg(s,t){s.uniform2uiv(this.addr,t)}function xg(s,t){s.uniform3uiv(this.addr,t)}function _g(s,t){s.uniform4uiv(this.addr,t)}function yg(s,t,e){let n=this.cache,i=t.length,r=Ca(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=ll:o=Tu;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function vg(s,t,e){let n=this.cache,i=t.length,r=Ca(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Au,r[o])}function bg(s,t,e){let n=this.cache,i=t.length,r=Ca(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ru,r[o])}function Mg(s,t,e){let n=this.cache,i=t.length,r=Ca(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||wu,r[o])}function Sg(s){switch(s){case 5126:return sg;case 35664:return rg;case 35665:return og;case 35666:return ag;case 35674:return cg;case 35675:return lg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return fg;case 35668:case 35672:return dg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return xg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return Mg}}var hl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ig(e.type)}},ul=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sg(e.type)}},fl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},al=/(\w+)(\])?(\[|\.)?/g;function uu(s,t){s.seq.push(t),s.map[t.id]=t}function Eg(s,t,e){let n=s.name,i=n.length;for(al.lastIndex=0;;){let r=al.exec(n),o=al.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){uu(e,l===void 0?new hl(a,s,t):new ul(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new fl(a),uu(e,f)),e=f}}}var fs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Eg(a,c,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function fu(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Tg=37297,wg=0;function Ag(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var du=new Yt;function Rg(s){ne._getMatrix(du,ne.workingColorSpace,s);let t=`mat3( ${du.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(s)){case ws:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function pu(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Ag(s.getShaderSource(t),a)}else return r}function Cg(s,t){let e=Rg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Pg={[Ic]:"Linear",[Lc]:"Reinhard",[Dc]:"Cineon",[sr]:"ACESFilmic",[Uc]:"AgX",[Fc]:"Neutral",[Nc]:"Custom"};function Ig(s,t){let e=Pg[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ea=new I;function Lg(){ne.getLuminanceCoefficients(Ea);let s=Ea.x.toFixed(4),t=Ea.y.toFixed(4),e=Ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function Ng(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ug(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function xr(s){return s!==""}function mu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fg=/^[ \t]*#include +<([\w\d./]+)>/gm;function dl(s){return s.replace(Fg,Bg)}var Og=new Map;function Bg(s,t){let e=$t[t];if(e===void 0){let n=Og.get(t);if(n!==void 0)e=$t[n],kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return dl(e)}var kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xu(s){return s.replace(kg,zg)}function zg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function _u(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Hg={[nr]:"SHADOWMAP_TYPE_PCF",[cs]:"SHADOWMAP_TYPE_VSM"};function Gg(s){return Hg[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Vg={[hi]:"ENVMAP_TYPE_CUBE",[Ci]:"ENVMAP_TYPE_CUBE",[rr]:"ENVMAP_TYPE_CUBE_UV"};function Wg(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Vg[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Xg={[Ci]:"ENVMAP_MODE_REFRACTION"};function qg(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Xg[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Yg={[Pc]:"ENVMAP_BLENDING_MULTIPLY",[Dh]:"ENVMAP_BLENDING_MIX",[Nh]:"ENVMAP_BLENDING_ADD"};function Zg(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Yg[s.combine]||"ENVMAP_BLENDING_NONE"}function Jg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Kg(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Gg(e),l=Wg(e),u=qg(e),f=Zg(e),h=Jg(e),d=Dg(e),p=Ng(r),x=i.createProgram(),g,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(xr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(xr).join(`
`),m.length>0&&(m+=`
`)):(g=[_u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),m=[_u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vn?"#define TONE_MAPPING":"",e.toneMapping!==vn?$t.tonemapping_pars_fragment:"",e.toneMapping!==vn?Ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Cg("linearToOutputTexel",e.outputColorSpace),Lg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xr).join(`
`)),o=dl(o),o=mu(o,e),o=gu(o,e),a=dl(a),a=mu(a,e),a=gu(a,e),o=xu(o),a=xu(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=b+g+o,y=b+m+a,T=fu(i,i.VERTEX_SHADER,S),M=fu(i,i.FRAGMENT_SHADER,y);i.attachShader(x,T),i.attachShader(x,M),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(P){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(x)||"",z=i.getShaderInfoLog(T)||"",W=i.getShaderInfoLog(M)||"",O=D.trim(),L=z.trim(),U=W.trim(),X=!0,$=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,T,M);else{let tt=pu(i,T,"vertex"),et=pu(i,M,"fragment");Gt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+tt+`
`+et)}else O!==""?kt("WebGLProgram: Program Info Log:",O):(L===""||U==="")&&($=!1);$&&(P.diagnostics={runnable:X,programLog:O,vertexShader:{log:L,prefix:g},fragmentShader:{log:U,prefix:m}})}i.deleteShader(T),i.deleteShader(M),_=new fs(i,x),E=Ug(i,x)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(x,Tg)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=M,this}var $g=0,pl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ml(t),e.set(t,n)),n}},ml=class{constructor(t){this.id=$g++,this.code=t,this.usedTimes=0}};function jg(s){return s===di||s===fr||s===dr}function Qg(s,t,e,n,i,r){let o=new Cs,a=new pl,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,E,R,P,D,z){let W=P.fog,O=D.geometry,L=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,X=t.get(_.envMap||L,U),$=X&&X.mapping===rr?X.image.height:null,tt=d[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&kt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let et=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,gt=et!==void 0?et.length:0,Vt=0;O.morphAttributes.position!==void 0&&(Vt=1),O.morphAttributes.normal!==void 0&&(Vt=2),O.morphAttributes.color!==void 0&&(Vt=3);let ae,te,K,ot;if(tt){let At=On[tt];ae=At.vertexShader,te=At.fragmentShader}else{ae=_.vertexShader,te=_.fragmentShader;let At=a.getVertexShaderStage(_),Te=a.getFragmentShaderStage(_);a.update(_,At,Te),K=At.id,ot=Te.id}let rt=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),Bt=D.isInstancedMesh===!0,Ft=D.isBatchedMesh===!0,se=!!_.map,qt=!!_.matcap,it=!!X,ct=!!_.aoMap,at=!!_.lightMap,vt=!!_.bumpMap&&_.wireframe===!1,xt=!!_.normalMap,zt=!!_.displacementMap,Pt=!!_.emissiveMap,Wt=!!_.metalnessMap,Zt=!!_.roughnessMap,N=_.anisotropy>0,fe=_.clearcoat>0,ee=_.dispersion>0,C=_.iridescence>0,v=_.sheen>0,k=_.transmission>0,V=N&&!!_.anisotropyMap,Y=fe&&!!_.clearcoatMap,ht=fe&&!!_.clearcoatNormalMap,ut=fe&&!!_.clearcoatRoughnessMap,Z=C&&!!_.iridescenceMap,Q=C&&!!_.iridescenceThicknessMap,dt=v&&!!_.sheenColorMap,It=v&&!!_.sheenRoughnessMap,_t=!!_.specularMap,pt=!!_.specularColorMap,Ot=!!_.specularIntensityMap,Ht=k&&!!_.transmissionMap,Jt=k&&!!_.thicknessMap,F=!!_.gradientMap,ft=!!_.alphaMap,j=_.alphaTest>0,mt=!!_.alphaHash,St=!!_.extensions,st=vn;_.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(st=s.toneMapping);let Ct={shaderID:tt,shaderType:_.type,shaderName:_.name,vertexShader:ae,fragmentShader:te,defines:_.defines,customVertexShaderID:K,customFragmentShaderID:ot,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Ft,batchingColor:Ft&&D._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&D.instanceColor!==null,instancingMorph:Bt&&D.morphTexture!==null,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:se,matcap:qt,envMap:it,envMapMode:it&&X.mapping,envMapCubeUVHeight:$,aoMap:ct,lightMap:at,bumpMap:vt,normalMap:xt,displacementMap:zt,emissiveMap:Pt,normalMapObjectSpace:xt&&_.normalMapType===Oh,normalMapTangentSpace:xt&&_.normalMapType===pr,packedNormalMap:xt&&_.normalMapType===pr&&jg(_.normalMap.format),metalnessMap:Wt,roughnessMap:Zt,anisotropy:N,anisotropyMap:V,clearcoat:fe,clearcoatMap:Y,clearcoatNormalMap:ht,clearcoatRoughnessMap:ut,dispersion:ee,iridescence:C,iridescenceMap:Z,iridescenceThicknessMap:Q,sheen:v,sheenColorMap:dt,sheenRoughnessMap:It,specularMap:_t,specularColorMap:pt,specularIntensityMap:Ot,transmission:k,transmissionMap:Ht,thicknessMap:Jt,gradientMap:F,opaque:_.transparent===!1&&_.blending===Si&&_.alphaToCoverage===!1,alphaMap:ft,alphaTest:j,alphaHash:mt,combine:_.combine,mapUv:se&&p(_.map.channel),aoMapUv:ct&&p(_.aoMap.channel),lightMapUv:at&&p(_.lightMap.channel),bumpMapUv:vt&&p(_.bumpMap.channel),normalMapUv:xt&&p(_.normalMap.channel),displacementMapUv:zt&&p(_.displacementMap.channel),emissiveMapUv:Pt&&p(_.emissiveMap.channel),metalnessMapUv:Wt&&p(_.metalnessMap.channel),roughnessMapUv:Zt&&p(_.roughnessMap.channel),anisotropyMapUv:V&&p(_.anisotropyMap.channel),clearcoatMapUv:Y&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ht&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:It&&p(_.sheenRoughnessMap.channel),specularMapUv:_t&&p(_.specularMap.channel),specularColorMapUv:pt&&p(_.specularColorMap.channel),specularIntensityMapUv:Ot&&p(_.specularIntensityMap.channel),transmissionMapUv:Ht&&p(_.transmissionMap.channel),thicknessMapUv:Jt&&p(_.thicknessMap.channel),alphaMapUv:ft&&p(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(xt||N),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(se||ft),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:wt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Vt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:st,decodeVideoTexture:se&&_.map.isVideoTexture===!0&&ne.getTransfer(_.map.colorSpace)===ce,decodeVideoTextureEmissive:Pt&&_.emissiveMap.isVideoTexture===!0&&ne.getTransfer(_.emissiveMap.colorSpace)===ce,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===$e,flipSided:_.side===Ve,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:St&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&_.extensions.multiDraw===!0||Ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function g(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)E.push(R),E.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(m(E,_),b(E,_),E.push(s.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function m(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function b(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function S(_){let E=d[_.type],R;if(E){let P=On[E];R=Qh.clone(P.uniforms)}else R=_.uniforms;return R}function y(_,E){let R=u.get(E);return R!==void 0?++R.usedTimes:(R=new Kg(s,E,_,i),l.push(R),u.set(E,R)),R}function T(_){if(--_.usedTimes===0){let E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function M(_){a.remove(_)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:S,acquireProgram:y,releaseProgram:T,releaseShaderCache:M,programs:l,dispose:A}}function tx(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function ex(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function yu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function vu(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,p,x,g,m){let b=s[t];return b===void 0?(b={id:h.id,object:h,geometry:d,material:p,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:g,group:m},s[t]=b):(b.id=h.id,b.object=h,b.geometry=d,b.material=p,b.materialVariant=o(h),b.groupOrder=x,b.renderOrder=h.renderOrder,b.z=g,b.group=m),t++,b}function c(h,d,p,x,g,m){let b=a(h,d,p,x,g,m);p.transmission>0?n.push(b):p.transparent===!0?i.push(b):e.push(b)}function l(h,d,p,x,g,m){let b=a(h,d,p,x,g,m);p.transmission>0?n.unshift(b):p.transparent===!0?i.unshift(b):e.unshift(b)}function u(h,d,p){e.length>1&&e.sort(h||ex),n.length>1&&n.sort(d||yu),i.length>1&&i.sort(d||yu),p&&(e.reverse(),n.reverse(),i.reverse())}function f(){for(let h=t,d=s.length;h<d;h++){let p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:f,sort:u}}function nx(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new vu,s.set(n,[o])):i>=r.length?(o=new vu,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function ix(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Ut};break;case"SpotLight":e={position:new I,direction:new I,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function sx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var rx=0;function ox(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ax(s){let t=new ix,e=sx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let i=new I,r=new be,o=new be;function a(l){let u=0,f=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,b=0,S=0,y=0,T=0,M=0,A=0;l.sort(ox);for(let E=0,R=l.length;E<R;E++){let P=l[E],D=P.color,z=P.intensity,W=P.distance,O=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===di?O=P.shadow.map.texture:O=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=D.r*z,f+=D.g*z,h+=D.b*z;else if(P.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(P.sh.coefficients[L],z);A++}else if(P.isDirectionalLight){let L=t.get(P);if(L.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let U=P.shadow,X=e.get(P);X.shadowIntensity=U.intensity,X.shadowBias=U.bias,X.shadowNormalBias=U.normalBias,X.shadowRadius=U.radius,X.shadowMapSize=U.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=P.shadow.matrix,b++}n.directional[d]=L,d++}else if(P.isSpotLight){let L=t.get(P);L.position.setFromMatrixPosition(P.matrixWorld),L.color.copy(D).multiplyScalar(z),L.distance=W,L.coneCos=Math.cos(P.angle),L.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),L.decay=P.decay,n.spot[x]=L;let U=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,U.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[x]=U.matrix,P.castShadow){let X=e.get(P);X.shadowIntensity=U.intensity,X.shadowBias=U.bias,X.shadowNormalBias=U.normalBias,X.shadowRadius=U.radius,X.shadowMapSize=U.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=O,y++}x++}else if(P.isRectAreaLight){let L=t.get(P);L.color.copy(D).multiplyScalar(z),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=L,g++}else if(P.isPointLight){let L=t.get(P);if(L.color.copy(P.color).multiplyScalar(P.intensity),L.distance=P.distance,L.decay=P.decay,P.castShadow){let U=P.shadow,X=e.get(P);X.shadowIntensity=U.intensity,X.shadowBias=U.bias,X.shadowNormalBias=U.normalBias,X.shadowRadius=U.radius,X.shadowMapSize=U.mapSize,X.shadowCameraNear=U.camera.near,X.shadowCameraFar=U.camera.far,n.pointShadow[p]=X,n.pointShadowMap[p]=O,n.pointShadowMatrix[p]=P.shadow.matrix,S++}n.point[p]=L,p++}else if(P.isHemisphereLight){let L=t.get(P);L.skyColor.copy(P.color).multiplyScalar(z),L.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[m]=L,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let _=n.hash;(_.directionalLength!==d||_.pointLength!==p||_.spotLength!==x||_.rectAreaLength!==g||_.hemiLength!==m||_.numDirectionalShadows!==b||_.numPointShadows!==S||_.numSpotShadows!==y||_.numSpotMaps!==T||_.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+T-M,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=A,_.directionalLength=d,_.pointLength=p,_.spotLength=x,_.rectAreaLength=g,_.hemiLength=m,_.numDirectionalShadows=b,_.numPointShadows=S,_.numSpotShadows=y,_.numSpotMaps=T,_.numLightProbes=A,n.version=rx++)}function c(l,u){let f=0,h=0,d=0,p=0,x=0,g=u.matrixWorldInverse;for(let m=0,b=l.length;m<b;m++){let S=l[m];if(S.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),f++}else if(S.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),d++}else if(S.isRectAreaLight){let y=n.rectArea[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(S.isPointLight){let y=n.point[h];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),h++}else if(S.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function bu(s){let t=new ax(s),e=[],n=[],i=[];function r(h){f.camera=h,e.length=0,n.length=0,i.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function c(h){i.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function cx(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new bu(s),t.set(i,[a])):r>=o.length?(a=new bu(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ux=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],fx=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Mu=new be,gr=new I,cl=new I;function dx(s,t,e){let n=new ns,i=new lt,r=new lt,o=new Me,a=new bo,c=new Mo,l={},u=e.maxTextureSize,f={[Wn]:Ve,[Ve]:Wn,[$e]:$e},h=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:lx,fragmentShader:hx}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let p=new he;p.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new nt(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nr;let m=this.type;this.render=function(M,A,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===ph&&(kt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=nr);let E=s.getRenderTarget(),R=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Nn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let z=m!==this.type;z&&A.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(O=>O.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,O=M.length;W<O;W++){let L=M[W],U=L.shadow;if(U===void 0){kt("WebGLShadowMap:",L,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let X=U.getFrameExtents();i.multiply(X),r.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/X.x),i.x=r.x*X.x,U.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/X.y),i.y=r.y*X.y,U.mapSize.y=r.y));let $=s.state.buffers.depth.getReversed();if(U.camera._reversedDepth=$,U.map===null||z===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===cs){if(L.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new sn(i.x,i.y,{format:di,type:Un,minFilter:ze,magFilter:ze,generateMipmaps:!1}),U.map.texture.name=L.name+".shadowMap",U.map.depthTexture=new qn(i.x,i.y,Mn),U.map.depthTexture.name=L.name+".shadowMapDepth",U.map.depthTexture.format=Pn,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ce,U.map.depthTexture.magFilter=Ce}else L.isPointLight?(U.map=new wa(i.x),U.map.depthTexture=new fo(i.x,bn)):(U.map=new sn(i.x,i.y),U.map.depthTexture=new qn(i.x,i.y,bn)),U.map.depthTexture.name=L.name+".shadowMap",U.map.depthTexture.format=Pn,this.type===nr?(U.map.depthTexture.compareFunction=$?Ma:ba,U.map.depthTexture.minFilter=ze,U.map.depthTexture.magFilter=ze):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ce,U.map.depthTexture.magFilter=Ce);U.camera.updateProjectionMatrix()}let tt=U.map.isWebGLCubeRenderTarget?6:1;for(let et=0;et<tt;et++){if(U.map.isWebGLCubeRenderTarget)s.setRenderTarget(U.map,et),s.clear();else{et===0&&(s.setRenderTarget(U.map),s.clear());let gt=U.getViewport(et);o.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),D.viewport(o)}if(L.isPointLight){let gt=U.camera,Vt=U.matrix,ae=L.distance||gt.far;ae!==gt.far&&(gt.far=ae,gt.updateProjectionMatrix()),gr.setFromMatrixPosition(L.matrixWorld),gt.position.copy(gr),cl.copy(gt.position),cl.add(ux[et]),gt.up.copy(fx[et]),gt.lookAt(cl),gt.updateMatrixWorld(),Vt.makeTranslation(-gr.x,-gr.y,-gr.z),Mu.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Mu,gt.coordinateSystem,gt.reversedDepth)}else U.updateMatrices(L);n=U.getFrustum(),y(A,_,U.camera,L,this.type)}U.isPointLightShadow!==!0&&this.type===cs&&b(U,_),U.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(E,R,P)};function b(M,A){let _=t.update(x);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new sn(i.x,i.y,{format:di,type:Un})),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(A,null,_,h,x,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(A,null,_,d,x,null)}function S(M,A,_,E){let R=null,P=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)R=P;else if(R=_.isPointLight===!0?c:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let D=R.uuid,z=A.uuid,W=l[D];W===void 0&&(W={},l[D]=W);let O=W[z];O===void 0&&(O=R.clone(),W[z]=O,A.addEventListener("dispose",T)),R=O}if(R.visible=A.visible,R.wireframe=A.wireframe,E===cs?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=s.properties.get(R);D.light=_}return R}function y(M,A,_,E,R){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===cs)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);let z=t.update(M),W=M.material;if(Array.isArray(W)){let O=z.groups;for(let L=0,U=O.length;L<U;L++){let X=O[L],$=W[X.materialIndex];if($&&$.visible){let tt=S(M,$,E,R);M.onBeforeShadow(s,M,A,_,z,tt,X),s.renderBufferDirect(_,null,z,tt,M,X),M.onAfterShadow(s,M,A,_,z,tt,X)}}}else if(W.visible){let O=S(M,W,E,R);M.onBeforeShadow(s,M,A,_,z,O,null),s.renderBufferDirect(_,null,z,O,M,null),M.onAfterShadow(s,M,A,_,z,O,null)}}let D=M.children;for(let z=0,W=D.length;z<W;z++)y(D[z],A,_,E,R)}function T(M){M.target.removeEventListener("dispose",T);for(let _ in l){let E=l[_],R=M.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function px(s,t){function e(){let F=!1,ft=new Me,j=null,mt=new Me(0,0,0,0);return{setMask:function(St){j!==St&&!F&&(s.colorMask(St,St,St,St),j=St)},setLocked:function(St){F=St},setClear:function(St,st,Ct,At,Te){Te===!0&&(St*=At,st*=At,Ct*=At),ft.set(St,st,Ct,At),mt.equals(ft)===!1&&(s.clearColor(St,st,Ct,At),mt.copy(ft))},reset:function(){F=!1,j=null,mt.set(-1,0,0,0)}}}function n(){let F=!1,ft=!1,j=null,mt=null,St=null;return{setReversed:function(st){if(ft!==st){let Ct=t.get("EXT_clip_control");st?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),ft=st;let At=St;St=null,this.setClear(At)}},getReversed:function(){return ft},setTest:function(st){st?rt(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(st){j!==st&&!F&&(s.depthMask(st),j=st)},setFunc:function(st){if(ft&&(st=Yh[st]),mt!==st){switch(st){case to:s.depthFunc(s.NEVER);break;case eo:s.depthFunc(s.ALWAYS);break;case no:s.depthFunc(s.LESS);break;case Ei:s.depthFunc(s.LEQUAL);break;case io:s.depthFunc(s.EQUAL);break;case so:s.depthFunc(s.GEQUAL);break;case ro:s.depthFunc(s.GREATER);break;case oo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}mt=st}},setLocked:function(st){F=st},setClear:function(st){St!==st&&(St=st,ft&&(st=1-st),s.clearDepth(st))},reset:function(){F=!1,j=null,mt=null,St=null,ft=!1}}}function i(){let F=!1,ft=null,j=null,mt=null,St=null,st=null,Ct=null,At=null,Te=null;return{setTest:function(_e){F||(_e?rt(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(_e){ft!==_e&&!F&&(s.stencilMask(_e),ft=_e)},setFunc:function(_e,En,Tn){(j!==_e||mt!==En||St!==Tn)&&(s.stencilFunc(_e,En,Tn),j=_e,mt=En,St=Tn)},setOp:function(_e,En,Tn){(st!==_e||Ct!==En||At!==Tn)&&(s.stencilOp(_e,En,Tn),st=_e,Ct=En,At=Tn)},setLocked:function(_e){F=_e},setClear:function(_e){Te!==_e&&(s.clearStencil(_e),Te=_e)},reset:function(){F=!1,ft=null,j=null,mt=null,St=null,st=null,Ct=null,At=null,Te=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,u={},f={},h={},d=new WeakMap,p=[],x=null,g=!1,m=null,b=null,S=null,y=null,T=null,M=null,A=null,_=new Ut(0,0,0),E=0,R=!1,P=null,D=null,z=null,W=null,O=null,L=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,X=0,$=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec($)[1]),U=X>=1):$.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),U=X>=2);let tt=null,et={},gt=s.getParameter(s.SCISSOR_BOX),Vt=s.getParameter(s.VIEWPORT),ae=new Me().fromArray(gt),te=new Me().fromArray(Vt);function K(F,ft,j,mt){let St=new Uint8Array(4),st=s.createTexture();s.bindTexture(F,st),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ct=0;Ct<j;Ct++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,mt,0,s.RGBA,s.UNSIGNED_BYTE,St):s.texImage2D(ft+Ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,St);return st}let ot={};ot[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),ot[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ot[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(s.DEPTH_TEST),o.setFunc(Ei),vt(!1),xt(Ac),rt(s.CULL_FACE),ct(Nn);function rt(F){u[F]!==!0&&(s.enable(F),u[F]=!0)}function wt(F){u[F]!==!1&&(s.disable(F),u[F]=!1)}function Bt(F,ft){return h[F]!==ft?(s.bindFramebuffer(F,ft),h[F]=ft,F===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ft),F===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function Ft(F,ft){let j=p,mt=!1;if(F){j=d.get(ft),j===void 0&&(j=[],d.set(ft,j));let St=F.textures;if(j.length!==St.length||j[0]!==s.COLOR_ATTACHMENT0){for(let st=0,Ct=St.length;st<Ct;st++)j[st]=s.COLOR_ATTACHMENT0+st;j.length=St.length,mt=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,mt=!0);mt&&s.drawBuffers(j)}function se(F){return x!==F?(s.useProgram(F),x=F,!0):!1}let qt={[si]:s.FUNC_ADD,[gh]:s.FUNC_SUBTRACT,[xh]:s.FUNC_REVERSE_SUBTRACT};qt[_h]=s.MIN,qt[yh]=s.MAX;let it={[vh]:s.ZERO,[bh]:s.ONE,[Mh]:s.SRC_COLOR,[jr]:s.SRC_ALPHA,[Rh]:s.SRC_ALPHA_SATURATE,[wh]:s.DST_COLOR,[Eh]:s.DST_ALPHA,[Sh]:s.ONE_MINUS_SRC_COLOR,[Qr]:s.ONE_MINUS_SRC_ALPHA,[Ah]:s.ONE_MINUS_DST_COLOR,[Th]:s.ONE_MINUS_DST_ALPHA,[Ch]:s.CONSTANT_COLOR,[Ph]:s.ONE_MINUS_CONSTANT_COLOR,[Ih]:s.CONSTANT_ALPHA,[Lh]:s.ONE_MINUS_CONSTANT_ALPHA};function ct(F,ft,j,mt,St,st,Ct,At,Te,_e){if(F===Nn){g===!0&&(wt(s.BLEND),g=!1);return}if(g===!1&&(rt(s.BLEND),g=!0),F!==mh){if(F!==m||_e!==R){if((b!==si||T!==si)&&(s.blendEquation(s.FUNC_ADD),b=si,T=si),_e)switch(F){case Si:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ir:s.blendFunc(s.ONE,s.ONE);break;case Rc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Gt("WebGLState: Invalid blending: ",F);break}else switch(F){case Si:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ir:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Rc:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cc:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",F);break}S=null,y=null,M=null,A=null,_.set(0,0,0),E=0,m=F,R=_e}return}St=St||ft,st=st||j,Ct=Ct||mt,(ft!==b||St!==T)&&(s.blendEquationSeparate(qt[ft],qt[St]),b=ft,T=St),(j!==S||mt!==y||st!==M||Ct!==A)&&(s.blendFuncSeparate(it[j],it[mt],it[st],it[Ct]),S=j,y=mt,M=st,A=Ct),(At.equals(_)===!1||Te!==E)&&(s.blendColor(At.r,At.g,At.b,Te),_.copy(At),E=Te),m=F,R=!1}function at(F,ft){F.side===$e?wt(s.CULL_FACE):rt(s.CULL_FACE);let j=F.side===Ve;ft&&(j=!j),vt(j),F.blending===Si&&F.transparent===!1?ct(Nn):ct(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let mt=F.stencilWrite;a.setTest(mt),mt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Pt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(F){P!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),P=F)}function xt(F){F!==fh?(rt(s.CULL_FACE),F!==D&&(F===Ac?s.cullFace(s.BACK):F===dh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),D=F}function zt(F){F!==z&&(U&&s.lineWidth(F),z=F)}function Pt(F,ft,j){F?(rt(s.POLYGON_OFFSET_FILL),(W!==ft||O!==j)&&(W=ft,O=j,o.getReversed()&&(ft=-ft),s.polygonOffset(ft,j))):wt(s.POLYGON_OFFSET_FILL)}function Wt(F){F?rt(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function Zt(F){F===void 0&&(F=s.TEXTURE0+L-1),tt!==F&&(s.activeTexture(F),tt=F)}function N(F,ft,j){j===void 0&&(tt===null?j=s.TEXTURE0+L-1:j=tt);let mt=et[j];mt===void 0&&(mt={type:void 0,texture:void 0},et[j]=mt),(mt.type!==F||mt.texture!==ft)&&(tt!==j&&(s.activeTexture(j),tt=j),s.bindTexture(F,ft||ot[F]),mt.type=F,mt.texture=ft)}function fe(){let F=et[tt];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ee(){try{s.compressedTexImage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function v(){try{s.texSubImage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function k(){try{s.texSubImage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function V(){try{s.compressedTexSubImage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function Y(){try{s.compressedTexSubImage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function ht(){try{s.texStorage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function ut(){try{s.texStorage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function Z(){try{s.texImage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function Q(){try{s.texImage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function dt(F){return f[F]!==void 0?f[F]:s.getParameter(F)}function It(F,ft){f[F]!==ft&&(s.pixelStorei(F,ft),f[F]=ft)}function _t(F){ae.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),ae.copy(F))}function pt(F){te.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),te.copy(F))}function Ot(F,ft){let j=l.get(ft);j===void 0&&(j=new WeakMap,l.set(ft,j));let mt=j.get(F);mt===void 0&&(mt=s.getUniformBlockIndex(ft,F.name),j.set(F,mt))}function Ht(F,ft){let mt=l.get(ft).get(F);c.get(ft)!==mt&&(s.uniformBlockBinding(ft,mt,F.__bindingPointIndex),c.set(ft,mt))}function Jt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},f={},tt=null,et={},h={},d=new WeakMap,p=[],x=null,g=!1,m=null,b=null,S=null,y=null,T=null,M=null,A=null,_=new Ut(0,0,0),E=0,R=!1,P=null,D=null,z=null,W=null,O=null,ae.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:wt,bindFramebuffer:Bt,drawBuffers:Ft,useProgram:se,setBlending:ct,setMaterial:at,setFlipSided:vt,setCullFace:xt,setLineWidth:zt,setPolygonOffset:Pt,setScissorTest:Wt,activeTexture:Zt,bindTexture:N,unbindTexture:fe,compressedTexImage2D:ee,compressedTexImage3D:C,texImage2D:Z,texImage3D:Q,pixelStorei:It,getParameter:dt,updateUBOMapping:Ot,uniformBlockBinding:Ht,texStorage2D:ht,texStorage3D:ut,texSubImage2D:v,texSubImage3D:k,compressedTexSubImage2D:V,compressedTexSubImage3D:Y,scissor:_t,viewport:pt,reset:Jt}}function mx(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,u=new WeakMap,f=new Set,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,v){return p?new OffscreenCanvas(C,v):As("canvas")}function g(C,v,k){let V=1,Y=ee(C);if((Y.width>k||Y.height>k)&&(V=k/Math.max(Y.width,Y.height)),V<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ht=Math.floor(V*Y.width),ut=Math.floor(V*Y.height);h===void 0&&(h=x(ht,ut));let Z=v?x(ht,ut):h;return Z.width=ht,Z.height=ut,Z.getContext("2d").drawImage(C,0,0,ht,ut),kt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ht+"x"+ut+")."),Z}else return"data"in C&&kt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),C;return C}function m(C){return C.generateMipmaps}function b(C){s.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(C,v,k,V,Y,ht=!1){if(C!==null){if(s[C]!==void 0)return s[C];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ut;V&&(ut=t.get("EXT_texture_norm16"),ut||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=v;if(v===s.RED&&(k===s.FLOAT&&(Z=s.R32F),k===s.HALF_FLOAT&&(Z=s.R16F),k===s.UNSIGNED_BYTE&&(Z=s.R8),k===s.UNSIGNED_SHORT&&ut&&(Z=ut.R16_EXT),k===s.SHORT&&ut&&(Z=ut.R16_SNORM_EXT)),v===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.R8UI),k===s.UNSIGNED_SHORT&&(Z=s.R16UI),k===s.UNSIGNED_INT&&(Z=s.R32UI),k===s.BYTE&&(Z=s.R8I),k===s.SHORT&&(Z=s.R16I),k===s.INT&&(Z=s.R32I)),v===s.RG&&(k===s.FLOAT&&(Z=s.RG32F),k===s.HALF_FLOAT&&(Z=s.RG16F),k===s.UNSIGNED_BYTE&&(Z=s.RG8),k===s.UNSIGNED_SHORT&&ut&&(Z=ut.RG16_EXT),k===s.SHORT&&ut&&(Z=ut.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RG8UI),k===s.UNSIGNED_SHORT&&(Z=s.RG16UI),k===s.UNSIGNED_INT&&(Z=s.RG32UI),k===s.BYTE&&(Z=s.RG8I),k===s.SHORT&&(Z=s.RG16I),k===s.INT&&(Z=s.RG32I)),v===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),k===s.UNSIGNED_INT&&(Z=s.RGB32UI),k===s.BYTE&&(Z=s.RGB8I),k===s.SHORT&&(Z=s.RGB16I),k===s.INT&&(Z=s.RGB32I)),v===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),k===s.UNSIGNED_INT&&(Z=s.RGBA32UI),k===s.BYTE&&(Z=s.RGBA8I),k===s.SHORT&&(Z=s.RGBA16I),k===s.INT&&(Z=s.RGBA32I)),v===s.RGB&&(k===s.UNSIGNED_SHORT&&ut&&(Z=ut.RGB16_EXT),k===s.SHORT&&ut&&(Z=ut.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),v===s.RGBA){let Q=ht?ws:ne.getTransfer(Y);k===s.FLOAT&&(Z=s.RGBA32F),k===s.HALF_FLOAT&&(Z=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Z=Q===ce?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&ut&&(Z=ut.RGBA16_EXT),k===s.SHORT&&ut&&(Z=ut.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function T(C,v){let k;return C?v===null||v===bn||v===hs?k=s.DEPTH24_STENCIL8:v===Mn?k=s.DEPTH32F_STENCIL8:v===ls&&(k=s.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===bn||v===hs?k=s.DEPTH_COMPONENT24:v===Mn?k=s.DEPTH_COMPONENT32F:v===ls&&(k=s.DEPTH_COMPONENT16),k}function M(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ce&&C.minFilter!==ze?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function A(C){let v=C.target;v.removeEventListener("dispose",A),E(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&f.delete(v)}function _(C){let v=C.target;v.removeEventListener("dispose",_),P(v)}function E(C){let v=n.get(C);if(v.__webglInit===void 0)return;let k=C.source,V=d.get(k);if(V){let Y=V[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&R(C),Object.keys(V).length===0&&d.delete(k)}n.remove(C)}function R(C){let v=n.get(C);s.deleteTexture(v.__webglTexture);let k=C.source,V=d.get(k);delete V[v.__cacheKey],o.memory.textures--}function P(C){let v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let Y=0;Y<v.__webglFramebuffer[V].length;Y++)s.deleteFramebuffer(v.__webglFramebuffer[V][Y]);else s.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)s.deleteFramebuffer(v.__webglFramebuffer[V]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let k=C.textures;for(let V=0,Y=k.length;V<Y;V++){let ht=n.get(k[V]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),o.memory.textures--),n.remove(k[V])}n.remove(C)}let D=0;function z(){D=0}function W(){return D}function O(C){D=C}function L(){let C=D;return C>=i.maxTextures&&kt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),D+=1,C}function U(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function X(C,v){let k=n.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){let V=C.image;if(V===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(k,C,v);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+v)}function $(C,v){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){wt(k,C,v);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+v)}function tt(C,v){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){wt(k,C,v);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+v)}function et(C,v){let k=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){Bt(k,C,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+v)}let gt={[nn]:s.REPEAT,[Cn]:s.CLAMP_TO_EDGE,[ao]:s.MIRRORED_REPEAT},Vt={[Ce]:s.NEAREST,[Uh]:s.NEAREST_MIPMAP_NEAREST,[or]:s.NEAREST_MIPMAP_LINEAR,[ze]:s.LINEAR,[Bo]:s.LINEAR_MIPMAP_NEAREST,[ui]:s.LINEAR_MIPMAP_LINEAR},ae={[Bh]:s.NEVER,[Vh]:s.ALWAYS,[kh]:s.LESS,[ba]:s.LEQUAL,[zh]:s.EQUAL,[Ma]:s.GEQUAL,[Hh]:s.GREATER,[Gh]:s.NOTEQUAL};function te(C,v){if(v.type===Mn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ze||v.magFilter===Bo||v.magFilter===or||v.magFilter===ui||v.minFilter===ze||v.minFilter===Bo||v.minFilter===or||v.minFilter===ui)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,gt[v.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,gt[v.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,gt[v.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Vt[v.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Vt[v.minFilter]),v.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ae[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ce||v.minFilter!==or&&v.minFilter!==ui||v.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function K(C,v){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",A));let V=v.source,Y=d.get(V);Y===void 0&&(Y={},d.set(V,Y));let ht=U(v);if(ht!==C.__cacheKey){Y[ht]===void 0&&(Y[ht]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Y[ht].usedTimes++;let ut=Y[C.__cacheKey];ut!==void 0&&(Y[C.__cacheKey].usedTimes--,ut.usedTimes===0&&R(v)),C.__cacheKey=ht,C.__webglTexture=Y[ht].texture}return k}function ot(C,v,k){return Math.floor(Math.floor(C/k)/v)}function rt(C,v,k,V){let ht=C.updateRanges;if(ht.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,k,V,v.data);else{ht.sort((It,_t)=>It.start-_t.start);let ut=0;for(let It=1;It<ht.length;It++){let _t=ht[ut],pt=ht[It],Ot=_t.start+_t.count,Ht=ot(pt.start,v.width,4),Jt=ot(_t.start,v.width,4);pt.start<=Ot+1&&Ht===Jt&&ot(pt.start+pt.count-1,v.width,4)===Ht?_t.count=Math.max(_t.count,pt.start+pt.count-_t.start):(++ut,ht[ut]=pt)}ht.length=ut+1;let Z=e.getParameter(s.UNPACK_ROW_LENGTH),Q=e.getParameter(s.UNPACK_SKIP_PIXELS),dt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let It=0,_t=ht.length;It<_t;It++){let pt=ht[It],Ot=Math.floor(pt.start/4),Ht=Math.ceil(pt.count/4),Jt=Ot%v.width,F=Math.floor(Ot/v.width),ft=Ht,j=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(s.UNPACK_SKIP_ROWS,F),e.texSubImage2D(s.TEXTURE_2D,0,Jt,F,ft,j,k,V,v.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Z),e.pixelStorei(s.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(s.UNPACK_SKIP_ROWS,dt)}}function wt(C,v,k){let V=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=s.TEXTURE_3D);let Y=K(C,v),ht=v.source;e.bindTexture(V,C.__webglTexture,s.TEXTURE0+k);let ut=n.get(ht);if(ht.version!==ut.__version||Y===!0){if(e.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let j=ne.getPrimaries(ne.workingColorSpace),mt=v.colorSpace===Yn?null:ne.getPrimaries(v.colorSpace),St=v.colorSpace===Yn||j===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let Q=g(v.image,!1,i.maxTextureSize);Q=fe(v,Q);let dt=r.convert(v.format,v.colorSpace),It=r.convert(v.type),_t=y(v.internalFormat,dt,It,v.normalized,v.colorSpace,v.isVideoTexture);te(V,v);let pt,Ot=v.mipmaps,Ht=v.isVideoTexture!==!0,Jt=ut.__version===void 0||Y===!0,F=ht.dataReady,ft=M(v,Q);if(v.isDepthTexture)_t=T(v.format===fi,v.type),Jt&&(Ht?e.texStorage2D(s.TEXTURE_2D,1,_t,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,_t,Q.width,Q.height,0,dt,It,null));else if(v.isDataTexture)if(Ot.length>0){Ht&&Jt&&e.texStorage2D(s.TEXTURE_2D,ft,_t,Ot[0].width,Ot[0].height);for(let j=0,mt=Ot.length;j<mt;j++)pt=Ot[j],Ht?F&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,pt.width,pt.height,dt,It,pt.data):e.texImage2D(s.TEXTURE_2D,j,_t,pt.width,pt.height,0,dt,It,pt.data);v.generateMipmaps=!1}else Ht?(Jt&&e.texStorage2D(s.TEXTURE_2D,ft,_t,Q.width,Q.height),F&&rt(v,Q,dt,It)):e.texImage2D(s.TEXTURE_2D,0,_t,Q.width,Q.height,0,dt,It,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ht&&Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,_t,Ot[0].width,Ot[0].height,Q.depth);for(let j=0,mt=Ot.length;j<mt;j++)if(pt=Ot[j],v.format!==fn)if(dt!==null)if(Ht){if(F)if(v.layerUpdates.size>0){let St=$c(pt.width,pt.height,v.format,v.type);for(let st of v.layerUpdates){let Ct=pt.data.subarray(st*St/pt.data.BYTES_PER_ELEMENT,(st+1)*St/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,st,pt.width,pt.height,1,dt,Ct)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,pt.width,pt.height,Q.depth,dt,pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,_t,pt.width,pt.height,Q.depth,0,pt.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,pt.width,pt.height,Q.depth,dt,It,pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,_t,pt.width,pt.height,Q.depth,0,dt,It,pt.data)}else{Ht&&Jt&&e.texStorage2D(s.TEXTURE_2D,ft,_t,Ot[0].width,Ot[0].height);for(let j=0,mt=Ot.length;j<mt;j++)pt=Ot[j],v.format!==fn?dt!==null?Ht?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,pt.width,pt.height,dt,pt.data):e.compressedTexImage2D(s.TEXTURE_2D,j,_t,pt.width,pt.height,0,pt.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?F&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,pt.width,pt.height,dt,It,pt.data):e.texImage2D(s.TEXTURE_2D,j,_t,pt.width,pt.height,0,dt,It,pt.data)}else if(v.isDataArrayTexture)if(Ht){if(Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,_t,Q.width,Q.height,Q.depth),F)if(v.layerUpdates.size>0){let j=$c(Q.width,Q.height,v.format,v.type);for(let mt of v.layerUpdates){let St=Q.data.subarray(mt*j/Q.data.BYTES_PER_ELEMENT,(mt+1)*j/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,mt,Q.width,Q.height,1,dt,It,St)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,dt,It,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,_t,Q.width,Q.height,Q.depth,0,dt,It,Q.data);else if(v.isData3DTexture)Ht?(Jt&&e.texStorage3D(s.TEXTURE_3D,ft,_t,Q.width,Q.height,Q.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,dt,It,Q.data)):e.texImage3D(s.TEXTURE_3D,0,_t,Q.width,Q.height,Q.depth,0,dt,It,Q.data);else if(v.isFramebufferTexture){if(Jt)if(Ht)e.texStorage2D(s.TEXTURE_2D,ft,_t,Q.width,Q.height);else{let j=Q.width,mt=Q.height;for(let St=0;St<ft;St++)e.texImage2D(s.TEXTURE_2D,St,_t,j,mt,0,dt,It,null),j>>=1,mt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){let j=s.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),f.add(v),j.onpaint=mt=>{let St=mt.changedElements;for(let st of f)St.includes(st.image)&&(st.needsUpdate=!0)},j.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Q);else{let St=s.RGBA,st=s.RGBA,Ct=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,St,st,Ct,Q)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Ht&&Jt){let j=ee(Ot[0]);e.texStorage2D(s.TEXTURE_2D,ft,_t,j.width,j.height)}for(let j=0,mt=Ot.length;j<mt;j++)pt=Ot[j],Ht?F&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,dt,It,pt):e.texImage2D(s.TEXTURE_2D,j,_t,dt,It,pt);v.generateMipmaps=!1}else if(Ht){if(Jt){let j=ee(Q);e.texStorage2D(s.TEXTURE_2D,ft,_t,j.width,j.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,It,Q)}else e.texImage2D(s.TEXTURE_2D,0,_t,dt,It,Q);m(v)&&b(V),ut.__version=ht.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Bt(C,v,k){if(v.image.length!==6)return;let V=K(C,v),Y=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+k);let ht=n.get(Y);if(Y.version!==ht.__version||V===!0){e.activeTexture(s.TEXTURE0+k);let ut=ne.getPrimaries(ne.workingColorSpace),Z=v.colorSpace===Yn?null:ne.getPrimaries(v.colorSpace),Q=v.colorSpace===Yn||ut===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let dt=v.isCompressedTexture||v.image[0].isCompressedTexture,It=v.image[0]&&v.image[0].isDataTexture,_t=[];for(let st=0;st<6;st++)!dt&&!It?_t[st]=g(v.image[st],!0,i.maxCubemapSize):_t[st]=It?v.image[st].image:v.image[st],_t[st]=fe(v,_t[st]);let pt=_t[0],Ot=r.convert(v.format,v.colorSpace),Ht=r.convert(v.type),Jt=y(v.internalFormat,Ot,Ht,v.normalized,v.colorSpace),F=v.isVideoTexture!==!0,ft=ht.__version===void 0||V===!0,j=Y.dataReady,mt=M(v,pt);te(s.TEXTURE_CUBE_MAP,v);let St;if(dt){F&&ft&&e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Jt,pt.width,pt.height);for(let st=0;st<6;st++){St=_t[st].mipmaps;for(let Ct=0;Ct<St.length;Ct++){let At=St[Ct];v.format!==fn?Ot!==null?F?j&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,0,0,At.width,At.height,Ot,At.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,Jt,At.width,At.height,0,At.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,0,0,At.width,At.height,Ot,Ht,At.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,Jt,At.width,At.height,0,Ot,Ht,At.data)}}}else{if(St=v.mipmaps,F&&ft){St.length>0&&mt++;let st=ee(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Jt,st.width,st.height)}for(let st=0;st<6;st++)if(It){F?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,_t[st].width,_t[st].height,Ot,Ht,_t[st].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Jt,_t[st].width,_t[st].height,0,Ot,Ht,_t[st].data);for(let Ct=0;Ct<St.length;Ct++){let Te=St[Ct].image[st].image;F?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,0,0,Te.width,Te.height,Ot,Ht,Te.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,Jt,Te.width,Te.height,0,Ot,Ht,Te.data)}}else{F?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ot,Ht,_t[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Jt,Ot,Ht,_t[st]);for(let Ct=0;Ct<St.length;Ct++){let At=St[Ct];F?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,0,0,Ot,Ht,At.image[st]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,Jt,Ot,Ht,At.image[st])}}}m(v)&&b(s.TEXTURE_CUBE_MAP),ht.__version=Y.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Ft(C,v,k,V,Y,ht){let ut=r.convert(k.format,k.colorSpace),Z=r.convert(k.type),Q=y(k.internalFormat,ut,Z,k.normalized,k.colorSpace),dt=n.get(v),It=n.get(k);if(It.__renderTarget=v,!dt.__hasExternalTextures){let _t=Math.max(1,v.width>>ht),pt=Math.max(1,v.height>>ht);Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?e.texImage3D(Y,ht,Q,_t,pt,v.depth,0,ut,Z,null):e.texImage2D(Y,ht,Q,_t,pt,0,ut,Z,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Zt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,Y,It.__webglTexture,0,Wt(v)):(Y===s.TEXTURE_2D||Y>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,Y,It.__webglTexture,ht),e.bindFramebuffer(s.FRAMEBUFFER,null)}function se(C,v,k){if(s.bindRenderbuffer(s.RENDERBUFFER,C),v.depthBuffer){let V=v.depthTexture,Y=V&&V.isDepthTexture?V.type:null,ht=T(v.stencilBuffer,Y),ut=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Zt(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(v),ht,v.width,v.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(v),ht,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ht,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ut,s.RENDERBUFFER,C)}else{let V=v.textures;for(let Y=0;Y<V.length;Y++){let ht=V[Y],ut=r.convert(ht.format,ht.colorSpace),Z=r.convert(ht.type),Q=y(ht.internalFormat,ut,Z,ht.normalized,ht.colorSpace);Zt(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(v),Q,v.width,v.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(v),Q,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Q,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function qt(C,v,k){let V=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(v.depthTexture);if(Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),Y.__webglTexture===void 0){Y.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),te(s.TEXTURE_CUBE_MAP,v.depthTexture);let dt=r.convert(v.depthTexture.format),It=r.convert(v.depthTexture.type),_t;v.depthTexture.format===Pn?_t=s.DEPTH_COMPONENT24:v.depthTexture.format===fi&&(_t=s.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,_t,v.width,v.height,0,dt,It,null)}}else X(v.depthTexture,0);let ht=Y.__webglTexture,ut=Wt(v),Z=V?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,Q=v.depthTexture.format===fi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===Pn)Zt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,Z,ht,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,Q,Z,ht,0);else if(v.depthTexture.format===fi)Zt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,Z,ht,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,Q,Z,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(C){let v=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let V=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){let Y=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",Y)};V.addEventListener("dispose",Y),v.__depthDisposeCallback=Y}v.__boundDepthTexture=V}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let V=0;V<6;V++)qt(v.__webglFramebuffer[V],C,V);else{let V=C.texture.mipmaps;V&&V.length>0?qt(v.__webglFramebuffer[0],C,0):qt(v.__webglFramebuffer,C,0)}else if(k){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=s.createRenderbuffer(),se(v.__webglDepthbuffer[V],C,!1);else{let Y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=v.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,ht)}}else{let V=C.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),se(v.__webglDepthbuffer,C,!1);else{let Y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,ht)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(C,v,k){let V=n.get(C);v!==void 0&&Ft(V.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&it(C)}function at(C){let v=C.texture,k=n.get(C),V=n.get(v);C.addEventListener("dispose",_);let Y=C.textures,ht=C.isWebGLCubeRenderTarget===!0,ut=Y.length>1;if(ut||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=v.version,o.memory.textures++),ht){k.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[Z]=[];for(let Q=0;Q<v.mipmaps.length;Q++)k.__webglFramebuffer[Z][Q]=s.createFramebuffer()}else k.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let Z=0;Z<v.mipmaps.length;Z++)k.__webglFramebuffer[Z]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(ut)for(let Z=0,Q=Y.length;Z<Q;Z++){let dt=n.get(Y[Z]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&Zt(C)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){let Q=Y[Z];k.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[Z]);let dt=r.convert(Q.format,Q.colorSpace),It=r.convert(Q.type),_t=y(Q.internalFormat,dt,It,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),pt=Wt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,_t,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,k.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),se(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),te(s.TEXTURE_CUBE_MAP,v);for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)Ft(k.__webglFramebuffer[Z][Q],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q);else Ft(k.__webglFramebuffer[Z],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(v)&&b(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let Z=0,Q=Y.length;Z<Q;Z++){let dt=Y[Z],It=n.get(dt),_t=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_t=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(_t,It.__webglTexture),te(_t,dt),Ft(k.__webglFramebuffer,C,dt,s.COLOR_ATTACHMENT0+Z,_t,0),m(dt)&&b(_t)}e.unbindTexture()}else{let Z=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Z,V.__webglTexture),te(Z,v),v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)Ft(k.__webglFramebuffer[Q],C,v,s.COLOR_ATTACHMENT0,Z,Q);else Ft(k.__webglFramebuffer,C,v,s.COLOR_ATTACHMENT0,Z,0);m(v)&&b(Z),e.unbindTexture()}C.depthBuffer&&it(C)}function vt(C){let v=C.textures;for(let k=0,V=v.length;k<V;k++){let Y=v[k];if(m(Y)){let ht=S(C),ut=n.get(Y).__webglTexture;e.bindTexture(ht,ut),b(ht),e.unbindTexture()}}}let xt=[],zt=[];function Pt(C){if(C.samples>0){if(Zt(C)===!1){let v=C.textures,k=C.width,V=C.height,Y=s.COLOR_BUFFER_BIT,ht=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=n.get(C),Z=v.length>1;if(Z)for(let dt=0;dt<v.length;dt++)e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let Q=C.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Y|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Y|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ut.__webglColorRenderbuffer[dt]);let It=n.get(v[dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,It,0)}s.blitFramebuffer(0,0,k,V,0,0,k,V,Y,s.NEAREST),c===!0&&(xt.length=0,zt.length=0,xt.push(s.COLOR_ATTACHMENT0+dt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(xt.push(ht),zt.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,zt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let dt=0;dt<v.length;dt++){e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,ut.__webglColorRenderbuffer[dt]);let It=n.get(v[dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,It,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let v=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Wt(C){return Math.min(i.maxSamples,C.samples)}function Zt(C){let v=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function N(C){let v=o.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function fe(C,v){let k=C.colorSpace,V=C.format,Y=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Ts&&k!==Yn&&(ne.getTransfer(k)===ce?(V!==fn||Y!==je)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",k)),v}function ee(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=z,this.getTextureUnits=W,this.setTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=tt,this.setTextureCube=et,this.rebindTextures=ct,this.setupRenderTarget=at,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function gx(s,t){function e(n,i=Yn){let r,o=ne.getTransfer(i);if(n===je)return s.UNSIGNED_BYTE;if(n===zo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ho)return s.UNSIGNED_SHORT_5_5_5_1;if(n===zc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Hc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bc)return s.BYTE;if(n===kc)return s.SHORT;if(n===ls)return s.UNSIGNED_SHORT;if(n===ko)return s.INT;if(n===bn)return s.UNSIGNED_INT;if(n===Mn)return s.FLOAT;if(n===Un)return s.HALF_FLOAT;if(n===Gc)return s.ALPHA;if(n===Vc)return s.RGB;if(n===fn)return s.RGBA;if(n===Pn)return s.DEPTH_COMPONENT;if(n===fi)return s.DEPTH_STENCIL;if(n===ar)return s.RED;if(n===Go)return s.RED_INTEGER;if(n===di)return s.RG;if(n===Vo)return s.RG_INTEGER;if(n===Wo)return s.RGBA_INTEGER;if(n===cr||n===lr||n===hr||n===ur)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xo||n===qo||n===Yo||n===Zo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jo||n===Ko||n===$o||n===jo||n===Qo||n===fr||n===ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jo||n===Ko)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$o)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===jo)return r.COMPRESSED_R11_EAC;if(n===Qo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===fr)return r.COMPRESSED_RG11_EAC;if(n===ta)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===ca||n===la||n===ha||n===ua||n===fa||n===da||n===pa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ea)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===na)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ia)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ra)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===aa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ca)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===la)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ha)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ua)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===da)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ma||n===ga||n===xa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ma)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_a||n===ya||n===dr||n===va)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_a)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_x=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,gl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Os(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new an({vertexShader:xx,fragmentShader:_x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new nt(new Ge(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xl=class extends In{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,p=null,x=typeof XRWebGLBinding<"u",g=new gl,m={},b=e.getContextAttributes(),S=null,y=null,T=[],M=[],A=new lt,_=null,E=new ke;E.viewport=new Me;let R=new ke;R.viewport=new Me;let P=[E,R],D=new No,z=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ot=T[K];return ot===void 0&&(ot=new ts,T[K]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(K){let ot=T[K];return ot===void 0&&(ot=new ts,T[K]=ot),ot.getGripSpace()},this.getHand=function(K){let ot=T[K];return ot===void 0&&(ot=new ts,T[K]=ot),ot.getHandSpace()};function O(K){let ot=M.indexOf(K.inputSource);if(ot===-1)return;let rt=T[ot];rt!==void 0&&(rt.update(K.inputSource,K.frame,l||o),rt.dispatchEvent({type:K.type,data:K.inputSource}))}function L(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",U);for(let K=0;K<T.length;K++){let ot=M[K];ot!==null&&(M[K]=null,T[K].disconnect(ot))}z=null,W=null,g.reset();for(let K in m)delete m[K];t.setRenderTarget(S),d=null,h=null,f=null,i=null,y=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",L),i.addEventListener("inputsourceschange",U),b.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,wt=null,Bt=null;b.depth&&(Bt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=b.stencil?fi:Pn,wt=b.stencil?hs:bn);let Ft={colorFormat:e.RGBA8,depthFormat:Bt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ft),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new sn(h.textureWidth,h.textureHeight,{format:fn,type:je,depthTexture:new qn(h.textureWidth,h.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let rt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,rt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new sn(d.framebufferWidth,d.framebufferHeight,{format:fn,type:je,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function U(K){for(let ot=0;ot<K.removed.length;ot++){let rt=K.removed[ot],wt=M.indexOf(rt);wt>=0&&(M[wt]=null,T[wt].disconnect(rt))}for(let ot=0;ot<K.added.length;ot++){let rt=K.added[ot],wt=M.indexOf(rt);if(wt===-1){for(let Ft=0;Ft<T.length;Ft++)if(Ft>=M.length){M.push(rt),wt=Ft;break}else if(M[Ft]===null){M[Ft]=rt,wt=Ft;break}if(wt===-1)break}let Bt=T[wt];Bt&&Bt.connect(rt)}}let X=new I,$=new I;function tt(K,ot,rt){X.setFromMatrixPosition(ot.matrixWorld),$.setFromMatrixPosition(rt.matrixWorld);let wt=X.distanceTo($),Bt=ot.projectionMatrix.elements,Ft=rt.projectionMatrix.elements,se=Bt[14]/(Bt[10]-1),qt=Bt[14]/(Bt[10]+1),it=(Bt[9]+1)/Bt[5],ct=(Bt[9]-1)/Bt[5],at=(Bt[8]-1)/Bt[0],vt=(Ft[8]+1)/Ft[0],xt=se*at,zt=se*vt,Pt=wt/(-at+vt),Wt=Pt*-at;if(ot.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Wt),K.translateZ(Pt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Bt[10]===-1)K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let Zt=se+Pt,N=qt+Pt,fe=xt-Wt,ee=zt+(wt-Wt),C=it*qt/N*Zt,v=ct*qt/N*Zt;K.projectionMatrix.makePerspective(fe,ee,C,v,Zt,N),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function et(K,ot){ot===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ot.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ot=K.near,rt=K.far;g.texture!==null&&(g.depthNear>0&&(ot=g.depthNear),g.depthFar>0&&(rt=g.depthFar)),D.near=R.near=E.near=ot,D.far=R.far=E.far=rt,(z!==D.near||W!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),z=D.near,W=D.far),D.layers.mask=K.layers.mask|6,E.layers.mask=D.layers.mask&-5,R.layers.mask=D.layers.mask&-3;let wt=K.parent,Bt=D.cameras;et(D,wt);for(let Ft=0;Ft<Bt.length;Ft++)et(Bt[Ft],wt);Bt.length===2?tt(D,E,R):D.projectionMatrix.copy(E.projectionMatrix),gt(K,D,wt)};function gt(K,ot,rt){rt===null?K.matrix.copy(ot.matrixWorld):(K.matrix.copy(rt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ot.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ji*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(K){c=K,h!==null&&(h.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(K){return m[K]};let Vt=null;function ae(K,ot){if(u=ot.getViewerPose(l||o),p=ot,u!==null){let rt=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let wt=!1;rt.length!==D.cameras.length&&(D.cameras.length=0,wt=!0);for(let qt=0;qt<rt.length;qt++){let it=rt[qt],ct=null;if(d!==null)ct=d.getViewport(it);else{let vt=f.getViewSubImage(h,it);ct=vt.viewport,qt===0&&(t.setRenderTargetTextures(y,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(y))}let at=P[qt];at===void 0&&(at=new ke,at.layers.enable(qt),at.viewport=new Me,P[qt]=at),at.matrix.fromArray(it.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(it.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(ct.x,ct.y,ct.width,ct.height),qt===0&&(D.matrix.copy(at.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),wt===!0&&D.cameras.push(at)}let Bt=i.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let qt=f.getDepthInformation(rt[0]);qt&&qt.isValid&&qt.texture&&g.init(qt,i.renderState)}if(Bt&&Bt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let qt=0;qt<rt.length;qt++){let it=rt[qt].camera;if(it){let ct=m[it];ct||(ct=new Os,m[it]=ct);let at=f.getCameraImage(it);ct.sourceTexture=at}}}}for(let rt=0;rt<T.length;rt++){let wt=M[rt],Bt=T[rt];wt!==null&&Bt!==void 0&&Bt.update(wt,ot,l||o)}Vt&&Vt(K,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),p=null}let te=new Su;te.setAnimationLoop(ae),this.setAnimationLoop=function(K){Vt=K},this.dispose=function(){}}},yx=new be,Cu=new Yt;Cu.set(-1,0,0,0,1,0,0,0,1);function vx(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Zc(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,b,S,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,b,S):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ve&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ve&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=t.get(m),S=b.envMap,y=b.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(yx.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Cu),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,b,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=S*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ve&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let b=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function bx(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,T){let M=T.program;n.uniformBlockBinding(y,M)}function l(y,T){let M=i[y.id];M===void 0&&(g(y),M=u(y),i[y.id]=M,y.addEventListener("dispose",b));let A=T.program;n.updateUBOMapping(y,A);let _=t.render.frame;r[y.id]!==_&&(h(y),r[y.id]=_)}function u(y){let T=f();y.__bindingPointIndex=T;let M=s.createBuffer(),A=y.__size,_=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,A,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,M),M}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let T=i[y.id],M=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let _=0,E=M.length;_<E;_++){let R=M[_];if(Array.isArray(R))for(let P=0,D=R.length;P<D;P++)d(R[P],_,P,A);else d(R,_,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,T,M,A){if(x(y,T,M,A)===!0){let _=y.__offset,E=y.value;if(Array.isArray(E)){let R=0;for(let P=0;P<E.length;P++){let D=E[P],z=m(D);p(D,y.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,y.__data)}}function p(y,T,M){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,M)}function x(y,T,M,A){let _=y.value,E=T+"_"+M;if(A[E]===void 0)return typeof _=="number"||typeof _=="boolean"?A[E]=_:ArrayBuffer.isView(_)?A[E]=_.slice():A[E]=_.clone(),!0;{let R=A[E];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return A[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function g(y){let T=y.uniforms,M=0,A=16;for(let E=0,R=T.length;E<R;E++){let P=Array.isArray(T[E])?T[E]:[T[E]];for(let D=0,z=P.length;D<z;D++){let W=P[D],O=Array.isArray(W.value)?W.value:[W.value];for(let L=0,U=O.length;L<U;L++){let X=O[L],$=m(X),tt=M%A,et=tt%$.boundary,gt=tt+et;M+=et,gt!==0&&A-gt<$.storage&&(M+=A-gt),W.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=$.storage}}}let _=M%A;return _>0&&(M+=A-_),y.__size=M,y.__cache={},this}function m(y){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",y),T}function b(y){let T=y.target;T.removeEventListener("dispose",b);let M=o.indexOf(T.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function S(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:S}}var Mx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fn=null;function Sx(){return Fn===null&&(Fn=new es(Mx,16,16,di,Un),Fn.name="DFG_LUT",Fn.minFilter=ze,Fn.magFilter=ze,Fn.wrapS=Cn,Fn.wrapT=Cn,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}var Aa=class{constructor(t={}){let{canvas:e=Wh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=je}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=d,g=new Set([Wo,Vo,Go]),m=new Set([je,bn,ls,hs,zo,Ho]),b=new Uint32Array(4),S=new Int32Array(4),y=new I,T=null,M=null,A=[],_=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,D=null,z=null,W=null,O=null;this._outputColorSpace=Ne;let L=0,U=0,X=null,$=-1,tt=null,et=new Me,gt=new Me,Vt=null,ae=new Ut(0),te=0,K=e.width,ot=e.height,rt=1,wt=null,Bt=null,Ft=new Me(0,0,K,ot),se=new Me(0,0,K,ot),qt=!1,it=new ns,ct=!1,at=!1,vt=new be,xt=new I,zt=new Me,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function Zt(){return X===null?rt:1}let N=n;function fe(w,B){return e.getContext(w,B)}try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",En,!1),N===null){let B="webgl2";if(N=fe(B,w),N===null)throw fe(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw Gt("WebGLRenderer: "+w.message),w}let ee,C,v,k,V,Y,ht,ut,Z,Q,dt,It,_t,pt,Ot,Ht,Jt,F,ft,j,mt,St,st;function Ct(){ee=new P0(N),ee.init(),mt=new gx(N,ee),C=new M0(N,ee,t,mt),v=new px(N,ee),C.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),z=N.createFramebuffer(),W=N.createFramebuffer(),O=N.createFramebuffer(),k=new D0(N),V=new tx,Y=new mx(N,ee,v,V,C,mt,k),ht=new C0(R),ut=new Od(N),St=new v0(N,ut),Z=new I0(N,ut,k,St),Q=new U0(N,Z,ut,St,k),F=new N0(N,C,Y),Ot=new S0(V),dt=new Qg(R,ht,ee,C,St,Ot),It=new vx(R,V),_t=new nx,pt=new cx(ee),Jt=new y0(R,ht,v,Q,p,c),Ht=new dx(R,Q,C),st=new bx(N,k,C,v),ft=new b0(N,ee,k),j=new L0(N,ee,k),k.programs=dt.programs,R.capabilities=C,R.extensions=ee,R.properties=V,R.renderLists=_t,R.shadowMap=Ht,R.state=v,R.info=k}Ct(),x!==je&&(E=new O0(x,e.width,e.height,a,i,r));let At=new xl(R,N);this.xr=At,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let w=ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(w){w!==void 0&&(rt=w,this.setSize(K,ot,!1))},this.getSize=function(w){return w.set(K,ot)},this.setSize=function(w,B,q=!0){if(At.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,ot=B,e.width=Math.floor(w*rt),e.height=Math.floor(B*rt),q===!0&&(e.style.width=w+"px",e.style.height=B+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(K*rt,ot*rt).floor()},this.setDrawingBufferSize=function(w,B,q){K=w,ot=B,rt=q,e.width=Math.floor(w*q),e.height=Math.floor(B*q),this.setViewport(0,0,w,B)},this.setEffects=function(w){if(x===je){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let B=0;B<w.length;B++)if(w[B].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(et)},this.getViewport=function(w){return w.copy(Ft)},this.setViewport=function(w,B,q,H){w.isVector4?Ft.set(w.x,w.y,w.z,w.w):Ft.set(w,B,q,H),v.viewport(et.copy(Ft).multiplyScalar(rt).round())},this.getScissor=function(w){return w.copy(se)},this.setScissor=function(w,B,q,H){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,B,q,H),v.scissor(gt.copy(se).multiplyScalar(rt).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(w){v.setScissorTest(qt=w)},this.setOpaqueSort=function(w){wt=w},this.setTransparentSort=function(w){Bt=w},this.getClearColor=function(w){return w.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,q=!0){let H=0;if(w){let G=!1;if(X!==null){let Mt=X.texture.format;G=g.has(Mt)}if(G){let Mt=X.texture.type,Tt=m.has(Mt),bt=Jt.getClearColor(),Rt=Jt.getClearAlpha(),Lt=bt.r,Kt=bt.g,jt=bt.b;Tt?(b[0]=Lt,b[1]=Kt,b[2]=jt,b[3]=Rt,N.clearBufferuiv(N.COLOR,0,b)):(S[0]=Lt,S[1]=Kt,S[2]=jt,S[3]=Rt,N.clearBufferiv(N.COLOR,0,S))}else H|=N.COLOR_BUFFER_BIT}B&&(H|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",En,!1),Jt.dispose(),_t.dispose(),pt.dispose(),V.dispose(),ht.dispose(),Q.dispose(),St.dispose(),st.dispose(),dt.dispose(),At.dispose(),At.removeEventListener("sessionstart",Cl),At.removeEventListener("sessionend",Pl),mi.stop()};function Te(w){w.preventDefault(),Xc("WebGLRenderer: Context Lost."),P=!0}function _e(){Xc("WebGLRenderer: Context Restored."),P=!1;let w=k.autoReset,B=Ht.enabled,q=Ht.autoUpdate,H=Ht.needsUpdate,G=Ht.type;Ct(),k.autoReset=w,Ht.enabled=B,Ht.autoUpdate=q,Ht.needsUpdate=H,Ht.type=G}function En(w){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Tn(w){let B=w.target;B.removeEventListener("dispose",Tn),tf(B)}function tf(w){ef(w),V.remove(w)}function ef(w){let B=V.get(w).programs;B!==void 0&&(B.forEach(function(q){dt.releaseProgram(q)}),w.isShaderMaterial&&dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,q,H,G,Mt){B===null&&(B=Pt);let Tt=G.isMesh&&G.matrixWorld.determinantAffine()<0,bt=rf(w,B,q,H,G);v.setMaterial(H,Tt);let Rt=q.index,Lt=1;if(H.wireframe===!0){if(Rt=Z.getWireframeAttribute(q),Rt===void 0)return;Lt=2}let Kt=q.drawRange,jt=q.attributes.position,Nt=Kt.start*Lt,de=(Kt.start+Kt.count)*Lt;Mt!==null&&(Nt=Math.max(Nt,Mt.start*Lt),de=Math.min(de,(Mt.start+Mt.count)*Lt)),Rt!==null?(Nt=Math.max(Nt,0),de=Math.min(de,Rt.count)):jt!=null&&(Nt=Math.max(Nt,0),de=Math.min(de,jt.count));let Ae=de-Nt;if(Ae<0||Ae===1/0)return;St.setup(G,H,bt,q,Rt);let we,me=ft;if(Rt!==null&&(we=ut.get(Rt),me=j,me.setIndex(we)),G.isMesh)H.wireframe===!0?(v.setLineWidth(H.wireframeLinewidth*Zt()),me.setMode(N.LINES)):me.setMode(N.TRIANGLES);else if(G.isLine){let We=H.linewidth;We===void 0&&(We=1),v.setLineWidth(We*Zt()),G.isLineSegments?me.setMode(N.LINES):G.isLineLoop?me.setMode(N.LINE_LOOP):me.setMode(N.LINE_STRIP)}else G.isPoints?me.setMode(N.POINTS):G.isSprite&&me.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))me.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let We=G._multiDrawStarts,Et=G._multiDrawCounts,Qe=G._multiDrawCount,oe=Rt?ut.get(Rt).bytesPerElement:1,ln=V.get(H).currentProgram.getUniforms();for(let wn=0;wn<Qe;wn++)ln.setValue(N,"_gl_DrawID",wn),me.render(We[wn]/oe,Et[wn])}else if(G.isInstancedMesh)me.renderInstances(Nt,Ae,G.count);else if(q.isInstancedBufferGeometry){let We=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Et=Math.min(q.instanceCount,We);me.renderInstances(Nt,Ae,Et)}else me.render(Nt,Ae)};function Rl(w,B,q){w.transparent===!0&&w.side===$e&&w.forceSinglePass===!1?(w.side=Ve,w.needsUpdate=!0,wr(w,B,q),w.side=Wn,w.needsUpdate=!0,wr(w,B,q),w.side=$e):wr(w,B,q)}this.compile=function(w,B,q=null){q===null&&(q=w),M=pt.get(q),M.init(B),_.push(M),q.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),w!==q&&w.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),M.setupLights();let H=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let Mt=G.material;if(Mt)if(Array.isArray(Mt))for(let Tt=0;Tt<Mt.length;Tt++){let bt=Mt[Tt];Rl(bt,q,G),H.add(bt)}else Rl(Mt,q,G),H.add(Mt)}),M=_.pop(),H},this.compileAsync=function(w,B,q=null){let H=this.compile(w,B,q);return new Promise(G=>{function Mt(){if(H.forEach(function(Tt){V.get(Tt).currentProgram.isReady()&&H.delete(Tt)}),H.size===0){G(w);return}setTimeout(Mt,10)}ee.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let za=null;function nf(w){za&&za(w)}function Cl(){mi.stop()}function Pl(){mi.start()}let mi=new Su;mi.setAnimationLoop(nf),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(w){za=w,At.setAnimationLoop(w),w===null?mi.stop():mi.start()},At.addEventListener("sessionstart",Cl),At.addEventListener("sessionend",Pl),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(w,B);let q=At.enabled===!0&&At.isPresenting===!0,H=E!==null&&(X===null||q)&&E.begin(R,X);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(B),B=At.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,B,X),M=pt.get(w,_.length),M.init(B),M.state.textureUnits=Y.getTextureUnits(),_.push(M),vt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),it.setFromProjectionMatrix(vt,_n,B.reversedDepth),at=this.localClippingEnabled,ct=Ot.init(this.clippingPlanes,at),T=_t.get(w,A.length),T.init(),A.push(T),At.enabled===!0&&At.isPresenting===!0){let Tt=R.xr.getDepthSensingMesh();Tt!==null&&Ha(Tt,B,-1/0,R.sortObjects)}Ha(w,B,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(wt,Bt,B.reversedDepth),Wt=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Wt&&Jt.addToRenderList(T,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&Ot.beginShadows();let G=M.state.shadowsArray;if(Ht.render(G,w,B),ct===!0&&Ot.endShadows(),(H&&E.hasRenderPass())===!1){let Tt=T.opaque,bt=T.transmissive;if(M.setupLights(),B.isArrayCamera){let Rt=B.cameras;if(bt.length>0)for(let Lt=0,Kt=Rt.length;Lt<Kt;Lt++){let jt=Rt[Lt];Ll(Tt,bt,w,jt)}Wt&&Jt.render(w);for(let Lt=0,Kt=Rt.length;Lt<Kt;Lt++){let jt=Rt[Lt];Il(T,w,jt,jt.viewport)}}else bt.length>0&&Ll(Tt,bt,w,B),Wt&&Jt.render(w),Il(T,w,B)}X!==null&&U===0&&(Y.updateMultisampleRenderTarget(X),Y.updateRenderTargetMipmap(X)),H&&E.end(R),w.isScene===!0&&w.onAfterRender(R,w,B),St.resetDefaultState(),$=-1,tt=null,_.pop(),_.length>0?(M=_[_.length-1],Y.setTextureUnits(M.state.textureUnits),ct===!0&&Ot.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?T=A[A.length-1]:T=null,D!==null&&D.renderEnd()};function Ha(w,B,q,H){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLightProbeGrid)M.pushLightProbeGrid(w);else if(w.isLight)M.pushLight(w),w.castShadow&&M.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||it.intersectsSprite(w)){H&&zt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(vt);let Tt=Q.update(w),bt=w.material;bt.visible&&T.push(w,Tt,bt,q,zt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||it.intersectsObject(w))){let Tt=Q.update(w),bt=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),zt.copy(w.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),zt.copy(Tt.boundingSphere.center)),zt.applyMatrix4(w.matrixWorld).applyMatrix4(vt)),Array.isArray(bt)){let Rt=Tt.groups;for(let Lt=0,Kt=Rt.length;Lt<Kt;Lt++){let jt=Rt[Lt],Nt=bt[jt.materialIndex];Nt&&Nt.visible&&T.push(w,Tt,Nt,q,zt.z,jt)}}else bt.visible&&T.push(w,Tt,bt,q,zt.z,null)}}let Mt=w.children;for(let Tt=0,bt=Mt.length;Tt<bt;Tt++)Ha(Mt[Tt],B,q,H)}function Il(w,B,q,H){let{opaque:G,transmissive:Mt,transparent:Tt}=w;M.setupLightsView(q),ct===!0&&Ot.setGlobalState(R.clippingPlanes,q),H&&v.viewport(et.copy(H)),G.length>0&&Tr(G,B,q),Mt.length>0&&Tr(Mt,B,q),Tt.length>0&&Tr(Tt,B,q),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Ll(w,B,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[H.id]===void 0){let Nt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[H.id]=new sn(1,1,{generateMipmaps:!0,type:Nt?Un:je,minFilter:ui,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let Mt=M.state.transmissionRenderTarget[H.id],Tt=H.viewport||et;Mt.setSize(Tt.z*R.transmissionResolutionScale,Tt.w*R.transmissionResolutionScale);let bt=R.getRenderTarget(),Rt=R.getActiveCubeFace(),Lt=R.getActiveMipmapLevel();R.setRenderTarget(Mt),R.getClearColor(ae),te=R.getClearAlpha(),te<1&&R.setClearColor(16777215,.5),R.clear(),Wt&&Jt.render(q);let Kt=R.toneMapping;R.toneMapping=vn;let jt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),M.setupLightsView(H),ct===!0&&Ot.setGlobalState(R.clippingPlanes,H),Tr(w,q,H),Y.updateMultisampleRenderTarget(Mt),Y.updateRenderTargetMipmap(Mt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let de=0,Ae=B.length;de<Ae;de++){let we=B[de],{object:me,geometry:We,material:Et,group:Qe}=we;if(Et.side===$e&&me.layers.test(H.layers)){let oe=Et.side;Et.side=Ve,Et.needsUpdate=!0,Dl(me,q,H,We,Et,Qe),Et.side=oe,Et.needsUpdate=!0,Nt=!0}}Nt===!0&&(Y.updateMultisampleRenderTarget(Mt),Y.updateRenderTargetMipmap(Mt))}R.setRenderTarget(bt,Rt,Lt),R.setClearColor(ae,te),jt!==void 0&&(H.viewport=jt),R.toneMapping=Kt}function Tr(w,B,q){let H=B.isScene===!0?B.overrideMaterial:null;for(let G=0,Mt=w.length;G<Mt;G++){let Tt=w[G],{object:bt,geometry:Rt,group:Lt}=Tt,Kt=Tt.material;Kt.allowOverride===!0&&H!==null&&(Kt=H),bt.layers.test(q.layers)&&Dl(bt,B,q,Rt,Kt,Lt)}}function Dl(w,B,q,H,G,Mt){w.onBeforeRender(R,B,q,H,G,Mt),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(R,B,q,H,w,Mt),G.transparent===!0&&G.side===$e&&G.forceSinglePass===!1?(G.side=Ve,G.needsUpdate=!0,R.renderBufferDirect(q,B,H,G,w,Mt),G.side=Wn,G.needsUpdate=!0,R.renderBufferDirect(q,B,H,G,w,Mt),G.side=$e):R.renderBufferDirect(q,B,H,G,w,Mt),w.onAfterRender(R,B,q,H,G,Mt)}function wr(w,B,q){B.isScene!==!0&&(B=Pt);let H=V.get(w),G=M.state.lights,Mt=M.state.shadowsArray,Tt=G.state.version,bt=dt.getParameters(w,G.state,Mt,B,q,M.state.lightProbeGridArray),Rt=dt.getProgramCacheKey(bt),Lt=H.programs;H.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,H.fog=B.fog;let Kt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;H.envMap=ht.get(w.envMap||H.environment,Kt),H.envMapRotation=H.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Lt===void 0&&(w.addEventListener("dispose",Tn),Lt=new Map,H.programs=Lt);let jt=Lt.get(Rt);if(jt!==void 0){if(H.currentProgram===jt&&H.lightsStateVersion===Tt)return Ul(w,bt),jt}else bt.uniforms=dt.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,q,bt),w.onBeforeCompile(bt,R),jt=dt.acquireProgram(bt,Rt),Lt.set(Rt,jt),H.uniforms=bt.uniforms;let Nt=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Nt.clippingPlanes=Ot.uniform),Ul(w,bt),H.needsLights=af(w),H.lightsStateVersion=Tt,H.needsLights&&(Nt.ambientLightColor.value=G.state.ambient,Nt.lightProbe.value=G.state.probe,Nt.directionalLights.value=G.state.directional,Nt.directionalLightShadows.value=G.state.directionalShadow,Nt.spotLights.value=G.state.spot,Nt.spotLightShadows.value=G.state.spotShadow,Nt.rectAreaLights.value=G.state.rectArea,Nt.ltc_1.value=G.state.rectAreaLTC1,Nt.ltc_2.value=G.state.rectAreaLTC2,Nt.pointLights.value=G.state.point,Nt.pointLightShadows.value=G.state.pointShadow,Nt.hemisphereLights.value=G.state.hemi,Nt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Nt.spotLightMatrix.value=G.state.spotLightMatrix,Nt.spotLightMap.value=G.state.spotLightMap,Nt.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=M.state.lightProbeGridArray.length>0,H.currentProgram=jt,H.uniformsList=null,jt}function Nl(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=fs.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Ul(w,B){let q=V.get(w);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function sf(w,B){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;y.setFromMatrixPosition(B.matrixWorld);for(let q=0,H=w.length;q<H;q++){let G=w[q];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function rf(w,B,q,H,G){B.isScene!==!0&&(B=Pt),Y.resetTextureUnits();let Mt=B.fog,Tt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?B.environment:null,bt=X===null?R.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ne.workingColorSpace,Rt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Lt=ht.get(H.envMap||Tt,Rt),Kt=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,jt=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Nt=!!q.morphAttributes.position,de=!!q.morphAttributes.normal,Ae=!!q.morphAttributes.color,we=vn;H.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(we=R.toneMapping);let me=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,We=me!==void 0?me.length:0,Et=V.get(H),Qe=M.state.lights;if(ct===!0&&(at===!0||w!==tt)){let ye=w===tt&&H.id===$;Ot.setState(H,w,ye)}let oe=!1;H.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Qe.state.version||Et.outputColorSpace!==bt||G.isBatchedMesh&&Et.batching===!1||!G.isBatchedMesh&&Et.batching===!0||G.isBatchedMesh&&Et.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Et.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Et.instancing===!1||!G.isInstancedMesh&&Et.instancing===!0||G.isSkinnedMesh&&Et.skinning===!1||!G.isSkinnedMesh&&Et.skinning===!0||G.isInstancedMesh&&Et.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Et.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Et.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Et.instancingMorph===!1&&G.morphTexture!==null||Et.envMap!==Lt||H.fog===!0&&Et.fog!==Mt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Ot.numPlanes||Et.numIntersection!==Ot.numIntersection)||Et.vertexAlphas!==Kt||Et.vertexTangents!==jt||Et.morphTargets!==Nt||Et.morphNormals!==de||Et.morphColors!==Ae||Et.toneMapping!==we||Et.morphTargetsCount!==We||!!Et.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(oe=!0):(oe=!0,Et.__version=H.version);let ln=Et.currentProgram;oe===!0&&(ln=wr(H,B,G),D&&H.isNodeMaterial&&D.onUpdateProgram(H,ln,Et));let wn=!1,Zn=!1,Ni=!1,ge=ln.getUniforms(),Re=Et.uniforms;if(v.useProgram(ln.program)&&(wn=!0,Zn=!0,Ni=!0),H.id!==$&&($=H.id,Zn=!0),Et.needsLights){let ye=sf(M.state.lightProbeGridArray,G);Et.lightProbeGrid!==ye&&(Et.lightProbeGrid=ye,Zn=!0)}if(wn||tt!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ge.setValue(N,"projectionMatrix",w.projectionMatrix),ge.setValue(N,"viewMatrix",w.matrixWorldInverse);let Kn=ge.map.cameraPosition;Kn!==void 0&&Kn.setValue(N,xt.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&ge.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ge.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),tt!==w&&(tt=w,Zn=!0,Ni=!0)}if(Et.needsLights&&(Qe.state.directionalShadowMap.length>0&&ge.setValue(N,"directionalShadowMap",Qe.state.directionalShadowMap,Y),Qe.state.spotShadowMap.length>0&&ge.setValue(N,"spotShadowMap",Qe.state.spotShadowMap,Y),Qe.state.pointShadowMap.length>0&&ge.setValue(N,"pointShadowMap",Qe.state.pointShadowMap,Y)),G.isSkinnedMesh){ge.setOptional(N,G,"bindMatrix"),ge.setOptional(N,G,"bindMatrixInverse");let ye=G.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),ge.setValue(N,"boneTexture",ye.boneTexture,Y))}G.isBatchedMesh&&(ge.setOptional(N,G,"batchingTexture"),ge.setValue(N,"batchingTexture",G._matricesTexture,Y),ge.setOptional(N,G,"batchingIdTexture"),ge.setValue(N,"batchingIdTexture",G._indirectTexture,Y),ge.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&ge.setValue(N,"batchingColorTexture",G._colorsTexture,Y));let Jn=q.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&F.update(G,q,ln),(Zn||Et.receiveShadow!==G.receiveShadow)&&(Et.receiveShadow=G.receiveShadow,ge.setValue(N,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&B.environment!==null&&(Re.envMapIntensity.value=B.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=Sx()),Zn){if(ge.setValue(N,"toneMappingExposure",R.toneMappingExposure),Et.needsLights&&of(Re,Ni),Mt&&H.fog===!0&&It.refreshFogUniforms(Re,Mt),It.refreshMaterialUniforms(Re,H,rt,ot,M.state.transmissionRenderTarget[w.id]),Et.needsLights&&Et.lightProbeGrid){let ye=Et.lightProbeGrid;Re.probesSH.value=ye.texture,Re.probesMin.value.copy(ye.boundingBox.min),Re.probesMax.value.copy(ye.boundingBox.max),Re.probesResolution.value.copy(ye.resolution)}fs.upload(N,Nl(Et),Re,Y)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(fs.upload(N,Nl(Et),Re,Y),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ge.setValue(N,"center",G.center),ge.setValue(N,"modelViewMatrix",G.modelViewMatrix),ge.setValue(N,"normalMatrix",G.normalMatrix),ge.setValue(N,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){let ye=H.uniformsGroups;for(let Kn=0,Ui=ye.length;Kn<Ui;Kn++){let Fl=ye[Kn];st.update(Fl,ln),st.bind(Fl,ln)}}return ln}function of(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function af(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,B,q){let H=V.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),V.get(w.texture).__webglTexture=B,V.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){let q=V.get(w);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,q=0){X=w,L=B,U=q;let H=null,G=!1,Mt=!1;if(w){let bt=V.get(w);if(bt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(N.FRAMEBUFFER,bt.__webglFramebuffer),et.copy(w.viewport),gt.copy(w.scissor),Vt=w.scissorTest,v.viewport(et),v.scissor(gt),v.setScissorTest(Vt),$=-1;return}else if(bt.__webglFramebuffer===void 0)Y.setupRenderTarget(w);else if(bt.__hasExternalTextures)Y.rebindTextures(w,V.get(w.texture).__webglTexture,V.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Kt=w.depthTexture;if(bt.__boundDepthTexture!==Kt){if(Kt!==null&&V.has(Kt)&&(w.width!==Kt.image.width||w.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(w)}}let Rt=w.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(Mt=!0);let Lt=V.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Lt[B])?H=Lt[B][q]:H=Lt[B],G=!0):w.samples>0&&Y.useMultisampledRTT(w)===!1?H=V.get(w).__webglMultisampledFramebuffer:Array.isArray(Lt)?H=Lt[q]:H=Lt,et.copy(w.viewport),gt.copy(w.scissor),Vt=w.scissorTest}else et.copy(Ft).multiplyScalar(rt).floor(),gt.copy(se).multiplyScalar(rt).floor(),Vt=qt;if(q!==0&&(H=z),v.bindFramebuffer(N.FRAMEBUFFER,H)&&v.drawBuffers(w,H),v.viewport(et),v.scissor(gt),v.setScissorTest(Vt),G){let bt=V.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,bt.__webglTexture,q)}else if(Mt){let bt=B;for(let Rt=0;Rt<w.textures.length;Rt++){let Lt=V.get(w.textures[Rt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Rt,Lt.__webglTexture,q,bt)}}else if(w!==null&&q!==0){let bt=V.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,bt.__webglTexture,q)}$=-1},this.readRenderTargetPixels=function(w,B,q,H,G,Mt,Tt,bt=0){if(!(w&&w.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=V.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt){v.bindFramebuffer(N.FRAMEBUFFER,Rt);try{let Lt=w.textures[bt],Kt=Lt.format,jt=Lt.type;if(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+bt),!C.textureFormatReadable(Kt)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(jt)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-H&&q>=0&&q<=w.height-G&&N.readPixels(B,q,H,G,mt.convert(Kt),mt.convert(jt),Mt)}finally{let Lt=X!==null?V.get(X).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(w,B,q,H,G,Mt,Tt,bt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=V.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt)if(B>=0&&B<=w.width-H&&q>=0&&q<=w.height-G){v.bindFramebuffer(N.FRAMEBUFFER,Rt);let Lt=w.textures[bt],Kt=Lt.format,jt=Lt.type;if(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+bt),!C.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Nt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Nt),N.bufferData(N.PIXEL_PACK_BUFFER,Mt.byteLength,N.STREAM_READ),N.readPixels(B,q,H,G,mt.convert(Kt),mt.convert(jt),0);let de=X!==null?V.get(X).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,de);let Ae=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await qh(N,Ae,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Nt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Mt),N.deleteBuffer(Nt),N.deleteSync(Ae),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,q=0){let H=Math.pow(2,-q),G=Math.floor(w.image.width*H),Mt=Math.floor(w.image.height*H),Tt=B!==null?B.x:0,bt=B!==null?B.y:0;Y.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,Tt,bt,G,Mt),v.unbindTexture()},this.copyTextureToTexture=function(w,B,q=null,H=null,G=0,Mt=0){let Tt,bt,Rt,Lt,Kt,jt,Nt,de,Ae,we=w.isCompressedTexture?w.mipmaps[Mt]:w.image;if(q!==null)Tt=q.max.x-q.min.x,bt=q.max.y-q.min.y,Rt=q.isBox3?q.max.z-q.min.z:1,Lt=q.min.x,Kt=q.min.y,jt=q.isBox3?q.min.z:0;else{let Re=Math.pow(2,-G);Tt=Math.floor(we.width*Re),bt=Math.floor(we.height*Re),w.isDataArrayTexture?Rt=we.depth:w.isData3DTexture?Rt=Math.floor(we.depth*Re):Rt=1,Lt=0,Kt=0,jt=0}H!==null?(Nt=H.x,de=H.y,Ae=H.z):(Nt=0,de=0,Ae=0);let me=mt.convert(B.format),We=mt.convert(B.type),Et;B.isData3DTexture?(Y.setTexture3D(B,0),Et=N.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Y.setTexture2DArray(B,0),Et=N.TEXTURE_2D_ARRAY):(Y.setTexture2D(B,0),Et=N.TEXTURE_2D),v.activeTexture(N.TEXTURE0),v.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),v.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),v.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);let Qe=v.getParameter(N.UNPACK_ROW_LENGTH),oe=v.getParameter(N.UNPACK_IMAGE_HEIGHT),ln=v.getParameter(N.UNPACK_SKIP_PIXELS),wn=v.getParameter(N.UNPACK_SKIP_ROWS),Zn=v.getParameter(N.UNPACK_SKIP_IMAGES);v.pixelStorei(N.UNPACK_ROW_LENGTH,we.width),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,we.height),v.pixelStorei(N.UNPACK_SKIP_PIXELS,Lt),v.pixelStorei(N.UNPACK_SKIP_ROWS,Kt),v.pixelStorei(N.UNPACK_SKIP_IMAGES,jt);let Ni=w.isDataArrayTexture||w.isData3DTexture,ge=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){let Re=V.get(w),Jn=V.get(B),ye=V.get(Re.__renderTarget),Kn=V.get(Jn.__renderTarget);v.bindFramebuffer(N.READ_FRAMEBUFFER,ye.__webglFramebuffer),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Ui=0;Ui<Rt;Ui++)Ni&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(w).__webglTexture,G,jt+Ui),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(B).__webglTexture,Mt,Ae+Ui)),N.blitFramebuffer(Lt,Kt,Tt,bt,Nt,de,Tt,bt,N.DEPTH_BUFFER_BIT,N.NEAREST);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||V.has(w)){let Re=V.get(w),Jn=V.get(B);v.bindFramebuffer(N.READ_FRAMEBUFFER,W),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,O);for(let ye=0;ye<Rt;ye++)Ni?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.__webglTexture,G,jt+ye):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Re.__webglTexture,G),ge?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Jn.__webglTexture,Mt,Ae+ye):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Jn.__webglTexture,Mt),G!==0?N.blitFramebuffer(Lt,Kt,Tt,bt,Nt,de,Tt,bt,N.COLOR_BUFFER_BIT,N.NEAREST):ge?N.copyTexSubImage3D(Et,Mt,Nt,de,Ae+ye,Lt,Kt,Tt,bt):N.copyTexSubImage2D(Et,Mt,Nt,de,Lt,Kt,Tt,bt);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ge?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Et,Mt,Nt,de,Ae,Tt,bt,Rt,me,We,we.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(Et,Mt,Nt,de,Ae,Tt,bt,Rt,me,we.data):N.texSubImage3D(Et,Mt,Nt,de,Ae,Tt,bt,Rt,me,We,we):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Mt,Nt,de,Tt,bt,me,We,we.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Mt,Nt,de,we.width,we.height,me,we.data):N.texSubImage2D(N.TEXTURE_2D,Mt,Nt,de,Tt,bt,me,We,we);v.pixelStorei(N.UNPACK_ROW_LENGTH,Qe),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,oe),v.pixelStorei(N.UNPACK_SKIP_PIXELS,ln),v.pixelStorei(N.UNPACK_SKIP_ROWS,wn),v.pixelStorei(N.UNPACK_SKIP_IMAGES,Zn),Mt===0&&B.generateMipmaps&&N.generateMipmap(Et),v.unbindTexture()},this.initRenderTarget=function(w){V.get(w).__webglFramebuffer===void 0&&Y.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Y.setTextureCube(w,0):w.isData3DTexture?Y.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Y.setTexture2DArray(w,0):Y.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){L=0,U=0,X=null,v.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var Pu=[[0,0,0],[0,0,-80],[25,2,-140],[75,4,-170],[130,2,-140],[150,0,-80],[135,-2,-20],[95,-3,25],[120,-1,75],[160,2,120],[140,4,180],[80,2,195],[30,0,160],[-35,-1,180],[-95,1,150],[-115,2,105],[-85,1,75],[-45,0,65],[-15,0,45]],Iu={meadow:{id:"meadow",shortcut:[142,180],name:"Meadow Loop",points:Pu,theme:{skyTop:3116287,skyMid:8177919,skyLow:14218239,fog:14218239,ground:6082373,trees:[4114766,3126595,8051018,5427578,16751821,16765286],trunk:10115884,ambient:.85,sun:1.7,sunColor:16774368,hemiSky:12575743,clouds:16777215,curbA:"#ef4444",curbB:"#ffffff",padColor:"#ff7a00"}},sunset:{id:"sunset",shortcut:[142,180],name:"Sunset Bay",points:Pu.map(([s,t,e],n)=>[-s,t*1.6+(n%3===0?1.5:0),e]),theme:{skyTop:4930216,skyMid:16747100,skyLow:16766366,fog:16763296,ground:15781766,trees:[3064998,2533018,8115081,16752451],trunk:10512186,ambient:.8,sun:1.6,sunColor:16757370,hemiSky:16761504,clouds:16769232,curbA:"#ff7a00",curbB:"#fff3d6",padColor:"#ff3b8d"}},frosty:{id:"frosty",shortcut:[216,262],name:"Frosty Peaks",points:[[0,0,0],[0,0,-80],[-20,3,-130],[-70,6,-150],[-120,5,-120],[-130,3,-60],[-90,1,-20],[-60,0,30],[-100,2,80],[-80,5,140],[-20,7,160],[45,5,150],[95,3,120],[100,1,75],[60,0,55],[20,0,40]],theme:{skyTop:6990312,skyMid:12575743,skyLow:15924223,fog:15398655,ground:16054527,trees:[15267071,10475720,8370392,13625599],trunk:8018500,ambient:.95,sun:1.4,sunColor:15398143,hemiSky:16777215,clouds:16777215,curbA:"#3b82f6",curbB:"#ffffff",padColor:"#00b4ff"}},neon:{id:"neon",shortcut:[228,262],name:"Neon Night",points:[[0,0,0],[0,0,-80],[10,2,-150],[60,4,-190],[120,3,-170],[140,1,-110],[110,0,-60],[130,-1,0],[180,1,40],[170,3,110],[110,4,140],[50,2,110],[20,0,140],[-40,1,170],[-110,3,155],[-165,4,105],[-130,2,40],[-90,1,55],[-45,0,60],[-12,0,45]],theme:{skyTop:460575,skyMid:2366046,skyLow:7024547,fog:2759518,ground:1911642,trees:[16732120,2746367,10906623,6094749],trunk:3813227,glow:!0,ambient:.55,sun:.9,sunColor:12167423,hemiSky:7035903,clouds:4865423,curbA:"#ff2fd0",curbB:"#2a2a5a",padColor:"#29e7ff"}}};function _r(s){return Iu[s||"meadow"]||Iu.meadow}function Lu(){let s=document.createElement("canvas");s.width=512,s.height=128;let t=s.getContext("2d"),e=4,n=16,i=s.width/n,r=s.height/e;for(let a=0;a<e;a++)for(let c=0;c<n;c++)t.fillStyle=(a+c)%2===0?"#ffffff":"#18181b",t.fillRect(c*i,a*r,i,r);t.fillStyle="#eab308",t.fillRect(0,0,s.width,6),t.fillRect(0,s.height-6,s.width,6);let o=new Ie(s);return o.wrapS=nn,o.wrapT=nn,o}function Du(){let s=document.createElement("canvas");s.width=512,s.height=512;let t=s.getContext("2d");t.fillStyle="#27272a",t.fillRect(0,0,512,512);for(let r=0;r<6e3;r++){let o=Math.random()*512,a=Math.random()*512,c=Math.floor(35+Math.random()*15);t.fillStyle=`rgb(${c},${c},${c})`,t.fillRect(o,a,2,2)}t.fillStyle="#f8fafc";let e=8,n=512/e;for(let r=0;r<e;r++)t.fillRect(250,r*n+12,12,n-24);t.fillStyle="#eab308",t.fillRect(24,0,8,512),t.fillRect(480,0,8,512);let i=new Ie(s);return i.wrapS=nn,i.wrapT=nn,i.repeat.set(1,40),i}function Nu(s="#dc2626",t="#ffffff"){let e=document.createElement("canvas");e.width=128,e.height=256;let n=e.getContext("2d"),i=8,r=e.height/i;for(let a=0;a<i;a++)n.fillStyle=a%2===0?s:t,n.fillRect(0,a*r,e.width,r);let o=new Ie(e);return o.wrapS=nn,o.wrapT=nn,o.repeat.set(1,22),o}function yr(s,t,e){let n=document.createElement("canvas");n.width=512,n.height=128;let i=n.getContext("2d");return i.fillStyle=t,i.fillRect(0,0,512,128),i.fillStyle=e,i.fillRect(0,0,512,8),i.fillRect(0,120,512,8),i.font="bold 44px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillStyle=e,i.fillText(s,256,64),new Ie(n)}var Pa=class{constructor(t,e){J(this,"scene");J(this,"spline");J(this,"totalLength",0);J(this,"trackPoints",[]);J(this,"trackMesh",null);J(this,"sceneryGroup");J(this,"startingLightsGroup");J(this,"lightMeshes",[]);J(this,"animatedProps",[]);J(this,"roadWidth",18);J(this,"course");J(this,"shortcut",null);this.scene=t,this.course=_r(e),this.sceneryGroup=new ie,this.startingLightsGroup=new ie,this.scene.add(this.sceneryGroup),this.scene.add(this.startingLightsGroup);let n=this.course.points.map(([i,r,o])=>new I(i,r,o));this.spline=new oi(n,!0,"centripetal",.4),this.totalLength=this.spline.getLength(),this.sampleTrackPoints(300),this.buildRoadMesh(),this.findShortcut(),this.buildTerrainAndHills(),this.buildStartGantry(),this.buildScenery(),this.buildBarriers(),this.buildShortcut()}sampleTrackPoints(t){this.trackPoints=[];let e=0,n=this.spline.getPointAt(0);for(let i=0;i<t;i++){let r=i/t,o=this.spline.getPointAt(r),a=this.spline.getTangentAt(r).normalize(),c=new I(0,1,0),l=new I().crossVectors(a,c).normalize();i>0&&(e+=n.distanceTo(o)),n=o,this.trackPoints.push({x:o.x,y:o.y,z:o.z,tangentX:a.x,tangentY:a.y,tangentZ:a.z,normalX:l.x,normalY:l.y,normalZ:l.z,width:this.roadWidth,bank:0,distance:e})}}buildRoadMesh(){let e=this.roadWidth/2,n=new he,i=[],r=[],o=[],a=[],c=[],l=[],u=[],f=[],h=[],d=2.2;for(let R=0;R<=300;R++){let P=R%300/300,D=this.spline.getPointAt(P),z=this.spline.getTangentAt(P).normalize(),W=new I(-z.z,0,z.x).normalize(),O=D.clone().addScaledVector(W,-e),L=D.clone().addScaledVector(W,e);i.push(O.x,O.y+.05,O.z),i.push(L.x,L.y+.05,L.z);let U=R/300*60;r.push(0,U),r.push(1,U);let X=O.clone().addScaledVector(W,-d);a.push(X.x,X.y+.12,X.z),a.push(O.x,O.y+.06,O.z),c.push(0,U*2),c.push(1,U*2);let $=L.clone().addScaledVector(W,d);if(u.push(L.x,L.y+.06,L.z),u.push($.x,$.y+.12,$.z),f.push(0,U*2),f.push(1,U*2),R<300){let tt=R*2,et=(R+1)*2;o.push(tt,tt+1,et),o.push(tt+1,et+1,et),l.push(tt,tt+1,et),l.push(tt+1,et+1,et),h.push(tt,tt+1,et),h.push(tt+1,et+1,et)}}n.setAttribute("position",new Xt(i,3)),n.setAttribute("uv",new Xt(r,2)),n.setIndex(o),n.computeVertexNormals();let p=Du(),x=new Dt({map:p,roughness:.85,metalness:.1});this.trackMesh=new nt(n,x),this.trackMesh.receiveShadow=!0,this.sceneryGroup.add(this.trackMesh);let g=Nu(this.course.theme.curbA,this.course.theme.curbB),m=new Dt({map:g,roughness:.7}),b=new he;b.setAttribute("position",new Xt(a,3)),b.setAttribute("uv",new Xt(c,2)),b.setIndex(l),b.computeVertexNormals();let S=new nt(b,m);S.receiveShadow=!0,this.sceneryGroup.add(S);let y=new he;y.setAttribute("position",new Xt(u,3)),y.setAttribute("uv",new Xt(f,2)),y.setIndex(h),y.computeVertexNormals();let T=new nt(y,m);T.receiveShadow=!0,this.sceneryGroup.add(T);let M=new Ge(this.roadWidth,4),A=Lu(),_=new Dt({map:A,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2}),E=new nt(M,_);E.rotation.x=-Math.PI/2,E.position.set(0,.08,0),this.sceneryGroup.add(E)}buildTerrainAndHills(){let t=new Ge(600,600,128,128);t.rotateX(-Math.PI/2);let e=t.attributes.position;for(let r=0;r<e.count;r++){let o=e.getX(r),a=e.getZ(r),c=this.getTerrainElevation(o,a),l=this.getClosestTrackPointInfo(o,a);l.dist<this.roadWidth*.5+6&&(c=Math.min(c,l.y-.35));let u=this.shortcut?this.segDist(o,a,this.shortcut.ax,this.shortcut.az,this.shortcut.bx,this.shortcut.bz):null;u&&u.d<this.shortcut.w/2+6&&(c=Math.min(c,this.shortcut.ay+(this.shortcut.by-this.shortcut.ay)*u.t-.3)),e.setY(r,c)}t.computeVertexNormals();let n=new Dt({color:5078031,roughness:.9,flatShading:!0}),i=new nt(t,n);i.receiveShadow=!0,this.sceneryGroup.add(i)}findShortcut(){let t=this.course.shortcut;if(!t)return;let e=this.trackPoints[t[0]],n=this.trackPoints[t[1]];!e||!n||(this.shortcut={ax:e.x,ay:e.y,az:e.z,bx:n.x,by:n.y,bz:n.z,w:11,ia:t[0],ib:t[1]})}segDist(t,e,n,i,r,o){let a=r-n,c=o-i,l=a*a+c*c||1,u=Math.max(0,Math.min(1,((t-n)*a+(e-i)*c)/l)),f=n+a*u,h=i+c*u;return{d:Math.hypot(t-f,e-h),t:u}}onShortcut(t,e){let n=this.shortcut;if(!n)return null;let i=this.segDist(t,e,n.ax,n.az,n.bx,n.bz);return i.d>n.w/2+.8?null:n.ay+(n.by-n.ay)*i.t}buildShortcut(){let t=this.shortcut;if(!t)return;let e=document.createElement("canvas");e.width=64,e.height=256;let n=e.getContext("2d");n.fillStyle="#c98b4f",n.fillRect(0,0,64,256),n.fillStyle="#ffffff",n.fillRect(0,0,4,256),n.fillRect(60,0,4,256);for(let f=0;f<260;f++)n.fillStyle=Math.random()<.5?"rgba(90,55,25,.35)":"rgba(230,190,140,.35)",n.fillRect(Math.random()*64,Math.random()*256,3,3);n.fillStyle="rgba(70,40,20,.35)",n.fillRect(14,0,6,256),n.fillRect(44,0,6,256);let i=new Ie(e);i.wrapT=nn;let r=Math.hypot(t.bx-t.ax,t.bz-t.az);i.repeat.set(1,r/10);let o=new Ge(t.w,r,1,8),a=new nt(o,new Dt({map:i,roughness:1,polygonOffset:!0,polygonOffsetFactor:1}));a.rotation.x=-Math.PI/2,a.rotation.z=-Math.atan2(t.bx-t.ax,t.bz-t.az)+Math.PI,a.position.set((t.ax+t.bx)/2,(t.ay+t.by)/2-.05,(t.az+t.bz)/2),this.sceneryGroup.add(a);let c=new Dt({color:16742912}),l=(t.bx-t.ax)/r,u=(t.bz-t.az)/r;for(let f=12;f<r-12;f+=9)for(let h of[-1,1]){let d=new nt(new Le(.45,1.2,8),c);d.position.set(t.ax+l*f+-u*h*(t.w/2+.6),t.ay+(t.by-t.ay)*(f/r)+.5,t.az+u*f+l*h*(t.w/2+.6)),this.sceneryGroup.add(d)}for(let[f,h,d,p,x]of[[t.ax,t.ay,t.az,t.bx,t.bz],[t.bx,t.by,t.bz,t.ax,t.az]]){let g=document.createElement("canvas");g.width=256,g.height=96;let m=g.getContext("2d");m.fillStyle="#ffc83d",m.fillRect(0,0,256,96),m.fillStyle="#1b1b3a",m.font="bold 44px sans-serif",m.textAlign="center",m.textBaseline="middle",m.fillText("SHORTCUT",128,50);let b=new Ie(g);b.colorSpace=Ne;let S=new nt(new Ge(4.2,1.6),new Dt({map:b,side:$e})),y=p-f,T=x-d,M=Math.hypot(y,T)||1,A=this.roadWidth/2+7,_=t.w/2+2.2,E=f+y/M*A+-T/M*_,R=d+T/M*A+y/M*_;S.position.set(E,h+2.6,R),S.lookAt(f,h+2.6,d);let P=new nt(new ue(.12,.12,2.6,6),new Dt({color:7031339}));P.position.set(E,h+1.3,R),this.sceneryGroup.add(S,P)}}getClosestTrackPointInfo(t,e){let n=9999,i=0;for(let r=0;r<this.trackPoints.length;r+=4){let o=this.trackPoints[r],a=o.x-t,c=o.z-e,l=Math.sqrt(a*a+c*c);l<n&&(n=l,i=o.y)}return{dist:n,y:i}}getTerrainElevation(t,e){let{dist:n,y:i}=this.getClosestTrackPointInfo(t,e);if(n>25){let r=Math.sin(t*.02)*Math.cos(e*.02)*14+Math.sin(t*.05+e*.04)*6,a=Math.max(0,Math.min(1,(n-25)/(60-25))),c=i-.05,l=Math.max(-2,r-2);return c*(1-a)+l*a}else return i-.05}buildStartGantry(){let t=new ie;t.position.set(0,0,0);let e=new Dt({color:3359061,roughness:.4,metalness:.7}),n=new Dt({map:yr("\u{1F3C1} SUPER ARCADE GP \u{1F3C1}","#dc2626","#ffffff")}),i=this.roadWidth/2+2.5,r=9,o=new le(.8,r,.8),a=new nt(o,e);a.position.set(-i,r/2,0),a.castShadow=!0,t.add(a);let c=new nt(o,e);c.position.set(i,r/2,0),c.castShadow=!0,t.add(c);let l=new le(this.roadWidth+6,1.4,1.2),u=new nt(l,e);u.position.set(0,r,0),u.castShadow=!0,t.add(u);let f=new Ge(this.roadWidth-2,2.2),h=new nt(f,n);h.position.set(0,r+.3,-.62),h.rotation.y=Math.PI,t.add(h);let d=new nt(f,n);d.position.set(0,r+.3,.62),t.add(d),this.lightMeshes=[];let p=new le(4.8,1.6,.6),x=new nt(p,new Dt({color:1579035}));x.position.set(0,r-1.2,-.2),t.add(x);let g=[15680580,15680580,15680580];for(let m=0;m<3;m++){let b=new pe(.4,16,16),S=new Dt({color:2565930,emissive:0,roughness:.2}),y=new nt(b,S);y.position.set((m-1)*1.4,r-1.2,-.5),t.add(y),this.lightMeshes.push(y)}this.startingLightsGroup.add(t)}setStartingLights(t){for(let e=0;e<3;e++){let n=this.lightMeshes[e];if(!n)continue;let i=n.material;t>=1&&t<=3?e<t?(i.color.setHex(15680580),i.emissive.setHex(15680580)):(i.color.setHex(2565930),i.emissive.setHex(0)):t===4?(i.color.setHex(2278750),i.emissive.setHex(2278750)):(i.color.setHex(2565930),i.emissive.setHex(0))}}buildScenery(){let t=new Dt({color:7877903,roughness:.9}),e=new Dt({color:1409085,roughness:.8,flatShading:!0}),n=new Dt({color:1467700,roughness:.8,flatShading:!0}),i=(r,o,a,c)=>{let l=new ie;l.position.set(r,o,a),l.scale.set(c,c,c);let u=new ue(.3,.45,2.5,6),f=new nt(u,t);f.position.y=1.25,f.castShadow=!0,l.add(f);let h=new nt(new Le(2.2,3.2,6),e);h.position.y=3.5,h.castShadow=!0,l.add(h);let d=new nt(new Le(1.7,2.8,6),n);d.position.y=5.2,d.castShadow=!0,l.add(d);let p=new nt(new Le(1.2,2.2,6),e);return p.position.y=6.6,p.castShadow=!0,l.add(p),l};for(let r=0;r<90;r++){let o=r/90*Math.PI*2,a=60+r%7*22,c=Math.cos(o)*a+(Math.random()-.5)*30,l=Math.sin(o)*a+(Math.random()-.5)*30,{dist:u}=this.getClosestTrackPointInfo(c,l);if(u>this.roadWidth/2+6){let f=.8+Math.random()*.7,h=this.getTerrainElevation(c,l),d=i(c,h,l,f);this.sceneryGroup.add(d)}}this.buildGrandstand(-22,this.getTerrainElevation(-22,-45),-45,Math.PI/2),this.buildGrandstand(22,this.getTerrainElevation(22,-45),-45,-Math.PI/2),this.buildHotAirBalloon(60,45,-50,15680580,16436245),this.buildHotAirBalloon(-80,55,60,3900150,16777215);for(let[r,o]of[[120,60],[-110,-100],[200,-150],[-200,120],[60,-240]])this.getClosestTrackPointInfo(r,o).dist>this.roadWidth/2+14&&this.buildWindTurbine(r,this.getTerrainElevation(r,o),o)}buildGrandstand(t,e,n,i){let r=new ie;r.position.set(t,e,n),r.rotation.y=i;let o=new Dt({color:4674921,roughness:.5}),a=new Dt({color:14427686,roughness:.4}),c=new Dt({color:3900150,roughness:.6}),l=5;for(let x=0;x<l;x++){let g=new le(24,.8,1.6),m=new nt(g,o);m.position.set(0,(x+1)*.8,x*1.4),m.castShadow=!0,r.add(m);for(let b=0;b<12;b++){let S=new le(.7,.9,.6),y=[15680580,3900150,15381256,1096065,11032055,16777215],T=new Dt({color:y[Math.floor(Math.random()*y.length)]}),M=new nt(S,T);M.position.set(-10+b*1.8+(Math.random()-.5)*.3,(x+1)*.8+.7,x*1.4),r.add(M)}}let u=new le(26,.4,9),f=new nt(u,a);f.position.set(0,8,3),f.rotation.x=.15,f.castShadow=!0,r.add(f);let h=new ue(.2,.2,8,8),d=new nt(h,o);d.position.set(-11,4,-1),r.add(d);let p=new nt(h,o);p.position.set(11,4,-1),r.add(p),this.sceneryGroup.add(r)}buildHotAirBalloon(t,e,n,i,r){let o=new ie;o.position.set(t,e,n);let a=new pe(7,14,14);a.scale(1,1.4,1);let c=new Dt({color:i,roughness:.4}),l=new nt(a,c);l.castShadow=!0,o.add(l);let u=new le(2,1.6,2),f=new Dt({color:7877903,roughness:.9}),h=new nt(u,f);h.position.set(0,-11,0),o.add(h),this.sceneryGroup.add(o);let d=e;this.animatedProps.push({mesh:o,update:p=>{o.position.y=d+Math.sin(p*.8+t)*2.5,o.rotation.y=p*.1}})}buildWindTurbine(t,e,n){let i=new ie;i.position.set(t,e,n);let r=new Dt({color:15857145,roughness:.3}),o=new ue(.6,1.4,28,10),a=new nt(o,r);a.position.y=14,a.castShadow=!0,i.add(a);let c=new pe(.9,10,10),l=new nt(c,r);l.position.set(0,28,.8),i.add(l);let u=new ie;u.position.set(0,28,1.2);for(let f=0;f<3;f++){let h=new le(.5,11,.1),d=new nt(h,r);d.position.y=5.5;let p=new ie;p.rotation.z=f*Math.PI*2/3,p.add(d),u.add(p)}i.add(u),this.sceneryGroup.add(i),this.animatedProps.push({mesh:u,update:(f,h)=>{u.rotation.z+=h*1.8}})}buildBarriers(){let t=[yr("\u26A1 TURBO CHARGE \u26A1","#1d4ed8","#ffffff"),yr("\u{1F525} APEX DRIFT \u{1F525}","#ea580c","#ffffff"),yr("\u{1F3C6} CHAMPIONSHIP \u{1F3C6}","#eab308","#000000")],e=[25,45,80,120,160,210,260],n=this.roadWidth/2+1.2;e.forEach((i,r)=>{if(i>=this.trackPoints.length)return;let o=this.trackPoints[i],a=t[r%t.length],c=new Dt({map:a,roughness:.5}),l=new le(.4,1.8,8),u=new nt(l,c);u.position.set(o.x+o.normalX*n,o.y+.9,o.z+o.normalZ*n),!(this.shortcut&&this.segDist(u.position.x,u.position.z,this.shortcut.ax,this.shortcut.az,this.shortcut.bx,this.shortcut.bz).d<this.shortcut.w+4)&&(u.lookAt(u.position.x+o.tangentX,u.position.y,u.position.z+o.tangentZ),u.castShadow=!0,this.sceneryGroup.add(u))})}getClosestTrackPoint(t,e){let n=1/0,i=0;for(let o=0;o<this.trackPoints.length;o++){let a=this.trackPoints[o],c=a.x-t,l=a.z-e,u=c*c+l*l;u<n&&(n=u,i=o)}return{point:this.trackPoints[i],index:i,distanceToCenter:Math.sqrt(n)}}update(t,e){for(let n of this.animatedProps)n.update(t,e)}};function _l(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new he,l=0;for(let u=0;u<s.length;++u){let f=s[u],h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0,f=[];for(let h=0;h<s.length;++h){let d=s[h].index;for(let p=0;p<d.count;++p)f.push(d.getX(p)+u);u+=s[h].attributes.position.count}c.setIndex(f)}for(let u in r){let f=Uu(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){let d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][h]);let p=Uu(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}}return c}function Uu(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){let u=s[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new Ue(o,e,n),c=0;for(let l=0;l<s.length;++l){let u=s[l];if(u.isInterleavedBufferAttribute){let f=c/e;for(let h=0,d=u.count;h<d;h++)for(let p=0;p<e;p++){let x=u.getComponent(h,p);a.setComponent(h+f,p,x)}}else o.set(u.array,c);c+=u.count*e}return i!==void 0&&(a.gpuType=i),a}var yl={cat:"tabby",bunny:"bunbun",crown:"duke",horns:"rex",bow:"lulu",antenna:"zippy",cap:"ace",bear:"grizz"};function Fu(s,t,e="race"){let n=yl[t.topper||"cap"]||"ace",i=e==="portrait",r=(y,T=.5,M=0,A=0)=>{let _=new Dt({color:y,roughness:T,metalness:M,emissive:A,emissiveIntensity:A?.8:0});return _.userData.preserveShading=!0,_},o=r(16775663,.3),a=r(1514536,.3),c=r(16752568,.45),l=r(16762158,.25,.55),u=r(t.color,.4),f=new pe(1,i?28:18,i?20:12),h=(y,T,M,A,_,E,R,P)=>{let D=new nt(f,T);return D.position.set(M,A,_),D.scale.set(E,R,P),D.castShadow=D.receiveShadow=!0,y.add(D),D},d=(y,T,M,A)=>{let _=new oi(M.map(R=>new I(R[0],R[1],R[2]))),E=new nt(new Ri(_,i?20:10,A,i?8:5,!1),T);return E.castShadow=!0,y.add(E),E},p=(y,T,M,A,_,E,R,P=0,D=0)=>{let z=new nt(new Le(E,R,i?20:12),T);return z.position.set(M,A,_),z.rotation.set(D,0,P),z.castShadow=!0,y.add(z),z},x=new ie;x.name=n+"-head",x.position.set(0,1.05,-.14),s.add(x);let g=(y,T,M,A=.07,_=.095,E=3811870)=>{h(x,o,y,T,M,A,_,.045),h(x,r(E,.22),y,T-_*.08,M+.04,A*.62,_*.7,.015),h(x,a,y,T-_*.08,M+.052,A*.32,_*.4,.009),h(x,o,y-A*.22,T+_*.22,M+.06,A*.18,_*.17,.005)},m=(y,T,M,A=7023138)=>d(x,r(A),[[-M,y+.02,T-.01],[-M*.5,y-.012,T+.008],[0,y-.022,T+.012],[M*.5,y-.012,T+.008],[M,y+.02,T-.01]],.009),b=(y,T,M)=>{for(let A of[-1,1])h(x,r(16748451,.6),A*M,y,T,.05,.03,.01)},S=(y,T,M,A)=>{h(s,y,0,.68,-.14,.29,.31,.24),T&&h(s,T,0,.64,.06,.2,.24,.09);for(let _ of[-1,1])h(s,y,_*.29,.73,-.02,.12,.18,.13).rotation.z=_*.35,h(s,y,_*.3,.61,.13,.095,.17,.095).rotation.x=-.85,h(s,M||o,_*.23,.63,.26,.11,.1,.09),h(s,A||a,_*.19,.36,.34,.14,.11,.21)};if(n==="tabby"){let y=r(16095804),T=r(16773336),M=r(12869916),A=r(3108832);S(y,T,T),d(s,A,[[-.24,.9,-.05],[0,.86,.14],[.24,.9,-.05]],.05),h(x,y,0,0,0,.33,.29,.27),h(x,T,0,-.09,.19,.2,.13,.12);for(let _ of[-1,1]){let E=p(x,y,_*.2,.28,-.03,.1,.2,-_*.35);E.scale.z=.7;let R=p(x,c,_*.195,.265,.005,.055,.13,-_*.35);R.scale.z=.5,g(_*.11,.05,.22,.07,.09,5025616);for(let P of[-1,1])d(x,o,[[_*.1,-.1+P*.012,.27],[_*.22,-.09+P*.035,.25],[_*.32,-.08+P*.055,.2]],.005)}for(let _=-1;_<=1;_++)h(x,M,_*.07,.24,.14-Math.abs(_)*.03,.022,.055,.02).rotation.z=_*.25;p(x,c,0,-.05,.3,.03,.04,Math.PI),b(-.07,.24,.2),m(-.15,.28,.06),d(s,y,[[0,.5,-.38],[.18,.55,-.55],[.26,.8,-.6],[.18,1,-.55]],.045)}else if(n==="bunbun"){let y=r(16643835),T=u,M=c;S(T,y,y);for(let A of[-1,1])h(s,l,A*.13,.8,.08,.03,.03,.015);h(x,y,0,0,0,.3,.29,.27),h(x,y,0,-.1,.17,.19,.12,.13);for(let A of[-1,1]){let _=h(x,y,A*.11,.42,-.05,.075,.24,.055);_.rotation.z=-A*.18;let E=h(x,M,A*.113,.42,-.006,.04,.18,.02);E.rotation.z=-A*.18,g(A*.11,.06,.22,.068,.095,10504286)}h(x,M,0,-.04,.29,.035,.025,.02);for(let A of[-1,1])h(x,o,A*.018,-.16,.28,.016,.03,.01);b(-.06,.23,.19),m(-.12,.285,.05),h(s,y,0,.5,-.4,.09,.09,.09)}else if(n==="duke"){let y=r(2501202),T=r(16514047),M=r(16751398),A=r(9133302,.55);S(y,T,y,M),h(s,A,0,.78,-.3,.36,.36,.1),d(s,l,[[-.25,.95,-.05],[0,.92,.08],[.25,.95,-.05]],.02),h(x,y,0,0,0,.31,.3,.28),h(x,T,0,-.04,.14,.23,.22,.16);for(let R of[-1,1])g(R*.1,.05,.23,.065,.085,2833034);p(x,M,0,-.06,.35,.075,.19,0,Math.PI/2).scale.set(1.4,1,.6),b(-.07,.22,.17);let E=new nt(new ue(.15,.13,.1,16),l);E.position.set(0,.31,-.02),x.add(E);for(let R=0;R<5;R++){let P=R*Math.PI*2/5;p(x,l,Math.sin(P)*.13,.4,Math.cos(P)*.13-.02,.04,.1)}h(x,r(3065014,.15,.2),0,.31,.13,.03,.035,.015)}else if(n==="rex"){let y=r(4177780),T=r(16050081),M=r(2068310),A=r(16773590,.35);S(y,T,y,y),h(x,y,0,0,.02,.3,.27,.29),h(x,y,0,-.07,.22,.2,.14,.14);let _=new un;_.moveTo(-.4,-.05),_.absarc(0,-.05,.4,Math.PI,0,!0),_.lineTo(-.4,-.05);let E=new nt(new yn(_,{depth:.04,bevelEnabled:!0,bevelSize:.015,bevelThickness:.015,bevelSegments:2,curveSegments:i?32:16}),M);E.position.set(0,.05,-.2),E.rotation.x=-.35,E.castShadow=!0,x.add(E);for(let R=0;R<7;R++){let P=Math.PI-R*Math.PI/6,D=h(x,T,Math.cos(P)*.37,.05+Math.sin(P)*.37*Math.cos(.35),-.17+Math.sin(P)*.37*Math.sin(.35),.04,.04,.03);D.userData.frill=1}for(let R of[-1,1])p(x,A,R*.12,.27,.1,.04,.2,-R*.15,-.5),g(R*.12,.08,.22,.065,.085,14254635),h(x,a,R*.05,-.04,.35,.012,.01,.006);p(x,A,0,.06,.35,.035,.11,0,.9),m(-.15,.3,.1,1924665),d(s,y,[[0,.48,-.38],[0,.45,-.62],[.12,.44,-.82]],.07)}else if(n==="lulu"){let y=r(16754884),T=r(16748465),M=r(15220591),A=r(16773621);S(A,void 0,y,M);for(let E=0;E<6;E++){let R=E*Math.PI/3;h(s,r(16735631),Math.sin(R)*.2,.62+Math.cos(R)*.13,.04+Math.cos(R)*.02,.03,.03,.02)}h(x,y,0,0,0,.32,.29,.28);let _=new nt(new ue(.085,.09,.07,i?24:14),T);_.rotation.x=Math.PI/2,_.position.set(0,-.07,.29),x.add(_);for(let E of[-1,1]){h(x,r(12867450),E*.03,-.07,.328,.016,.024,.006);let R=p(x,y,E*.2,.24,.05,.08,.17,-E*1.1,.35);R.scale.z=.5,g(E*.12,.07,.22,.062,.085,5979020),h(x,M,E*.09,.3,-.02,.09,.06,.04).rotation.z=E*.3}h(x,r(12068178),0,.3,0,.035,.04,.035),b(-.05,.25,.2),m(-.16,.27,.055),d(s,y,[[0,.5,-.38],[.08,.54,-.5],[-.02,.6,-.52],[.06,.66,-.5]],.02)}else if(n==="zippy"){let y=r(10475762,.25,.4),T=r(13227747,.2,.75),M=r(988710,.2),A=r(7336191,.2,0,3135231);S(y,T,T),h(s,A,0,.72,.1,.05,.05,.02),h(x,y,0,0,0,.31,.28,.28),h(x,M,0,-.01,.17,.23,.17,.13);for(let E of[-1,1]){h(x,A,E*.085,.02,.29,.04,.055,.01);let R=new nt(new ue(.06,.06,.08,16),T);R.rotation.z=Math.PI/2,R.position.set(E*.31,0,0),x.add(R)}d(x,A,[[-.07,-.06,.29],[0,-.09,.3],[.07,-.06,.29]],.012);let _=new nt(new ue(.012,.012,.18,8),T);_.position.set(0,.35,0),x.add(_),h(x,r(16773466,.2,0,16765952),0,.46,0,.05,.05,.05)}else if(n==="ace"){let y=r(16765503),T=r(16747039),M=r(3104736),A=r(16777215,.5);S(A,y,y,T),d(s,r(14826299),[[-.28,.7,.05],[0,.66,.2],[.28,.7,.05]],.025),h(x,y,0,0,0,.3,.29,.27);for(let D of[-1,1])g(D*.1,.06,.22,.065,.09,2829099);let _=h(x,T,0,-.07,.29,.13,.04,.1);_.rotation.x=-.1,h(x,r(15035664),0,-.11,.28,.11,.03,.085),b(-.05,.23,.19),h(x,M,0,.16,-.01,.31,.17,.28);let E=h(x,M,0,.14,.22,.22,.025,.15);E.rotation.x=-.15;let R=new un;for(let D=0;D<10;D++){let z=D%2?.022:.05,W=D*Math.PI/5;R[D?"lineTo":"moveTo"](Math.sin(W)*z,Math.cos(W)*z)}let P=new nt(new yn(R,{depth:.01,bevelEnabled:!1}),o);P.position.set(0,.24,.25),P.rotation.x=-.45,x.add(P),h(x,y,0,.3,-.05,.03,.06,.03).rotation.z=.4}else{let y=r(10117686),T=r(15255451),M=r(2759186,.25),A=r(14236218);S(y,T,y,y),h(s,y,0,.7,-.14,.34,.33,.27),h(x,y,0,0,0,.34,.31,.29),h(x,T,0,-.09,.2,.17,.12,.12);for(let _ of[-1,1])h(x,y,_*.25,.23,-.03,.1,.1,.06),h(x,T,_*.25,.23,.01,.055,.055,.03),g(_*.12,.06,.23,.06,.075,4860948);h(x,M,0,-.04,.31,.06,.04,.04),m(-.14,.3,.06,3809814),b(-.06,.24,.21),d(x,A,[[-.33,.1,-.02],[-.2,.2,.2],[0,.24,.26],[.2,.2,.2],[.33,.1,-.02]],.03),h(x,A,.18,.12,-.28,.06,.08,.03).rotation.z=.6}return x}var vr=new I;function dn(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;vr.copy(t),vr[n]=0,vr.normalize();let l=.5*o/(o+a),u=1-vr.angleTo(s)/c;return Math.sign(vr[e])===1?u*l:a/(o+a)+l+l*(1-u)}var br=class s extends le{constructor(t=1,e=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new I,l=new I,u=new I(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,p=f.length/6,x=new I,g=.5/o;for(let m=0,b=0;m<f.length;m+=3,b+=2)switch(c.fromArray(f,m),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),f[m+0]=u.x*Math.sign(c.x)+l.x*r,f[m+1]=u.y*Math.sign(c.y)+l.y*r,f[m+2]=u.z*Math.sign(c.z)+l.z*r,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/p)){case 0:x.set(1,0,0),d[b+0]=dn(x,l,"z","y",r,n),d[b+1]=1-dn(x,l,"y","z",r,e);break;case 1:x.set(-1,0,0),d[b+0]=1-dn(x,l,"z","y",r,n),d[b+1]=1-dn(x,l,"y","z",r,e);break;case 2:x.set(0,1,0),d[b+0]=1-dn(x,l,"x","z",r,t),d[b+1]=dn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),d[b+0]=1-dn(x,l,"x","z",r,t),d[b+1]=1-dn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),d[b+0]=1-dn(x,l,"x","y",r,t),d[b+1]=1-dn(x,l,"y","x",r,e);break;case 5:x.set(0,0,-1),d[b+0]=dn(x,l,"x","y",r,t),d[b+1]=1-dn(x,l,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};function Ou(s,t){let e=yl[t.topper||"cap"]||"ace",n=e==="duke"||e==="lulu",i=e==="grizz"||e==="rex",r=(L,U=.32,X=.15)=>{let $=new Dt({color:L,roughness:U,metalness:X});return $.userData.preserveShading=!0,$},o=r(t.color),a=r(16774366),c=r(2106932,.66,.05),l=r(13098731,.2,.7),u=r(16762434,.25,.6),f=r({tabby:16773336,bunbun:16777215,duke:16765773,rex:16050081,lulu:16777215,zippy:2831432,ace:3104736,grizz:15255451}[e]??16777215),h=n?u:l,d=new pe(1,20,14);function p(L,U,X,$,tt){let et=new nt(L,U);return et.position.set(X,$,tt),et.castShadow=et.receiveShadow=!0,s.add(et),et}function x(L,U,X,$,tt,et,gt,Vt=.08){return p(new br(tt,et,gt,2,Math.min(Vt,et/2-.001,tt/2-.001,gt/2-.001)),L,U,X,$)}function g(L,U,X,$,tt,et,gt){let Vt=p(d,L,U,X,$);return Vt.scale.set(tt,et,gt),Vt}let m=x(c,0,.23,0,1.25,.14,2.35,.06);m.name="chassis",x(o,0,.38,-.24,1.12,.28,1.52,.13);let b=x(c,0,.67,-.39,.62,.64,.2,.085);b.rotation.x=.12,x(f,0,.83,-.45,.5,.19,.12,.05);for(let L of[-1,1]){let U=g(f,L*.64,.4,-.12,.22,i?.25:.19,.71);U.name="side-pod",x(h,L*.68,.36,-.08,.075,.065,1.03,.03);let X=p(new on(.37,.075,8,20,Math.PI),o,L*.77,.34,-.85);X.rotation.y=Math.PI/2}let S=g(o,0,.43,.77,i?.62:.55,n?.23:.21,e==="zippy"?.66:.6);S.name="hood";let y=(L,U,X,$)=>{let tt=new I((U-S.position.x)/S.scale.x,0,(X-S.position.z)/S.scale.z);tt.y=Math.sqrt(Math.max(0,1-tt.x*tt.x-tt.z*tt.z));let et=new I(1,0,0).addScaledVector(tt,-tt.x).normalize(),gt=tt.clone().cross(et).normalize(),Vt=[],ae=[],te=ot=>Vt.push(S.position.x+ot.x*(S.scale.x+.003),S.position.y+ot.y*(S.scale.y+.003),S.position.z+ot.z*(S.scale.z+.003));te(tt);for(let ot=1;ot<=3;ot++)for(let rt=0;rt<20;rt++){let wt=rt*Math.PI/10,Bt=$/Math.min(S.scale.x,S.scale.z)*ot/3;te(tt.clone().multiplyScalar(Math.cos(Bt)).addScaledVector(et,Math.cos(wt)*Math.sin(Bt)).addScaledVector(gt,Math.sin(wt)*Math.sin(Bt)))}for(let ot=0;ot<20;ot++)ae.push(0,1+ot,1+(ot+1)%20);for(let ot=1;ot<3;ot++)for(let rt=0;rt<20;rt++){let wt=1+(ot-1)*20+rt,Bt=1+(ot-1)*20+(rt+1)%20,Ft=1+ot*20+rt,se=1+ot*20+(rt+1)%20;ae.push(wt,Ft,se,wt,se,Bt)}let K=new he;K.setAttribute("position",new Xt(Vt,3)),K.setIndex(ae),K.computeVertexNormals(),p(K,L,0,0,0)};if(e==="tabby"||e==="grizz"){y(f,0,.74,.13);for(let[L,U]of[[-.17,.96],[0,1.02],[.17,.96]])y(f,L,U,.065)}else if(e==="bunbun"||e==="lulu")for(let[L,U]of[[-.3,.62],[.3,.62],[0,.95],[-.22,1],[.22,1],[0,.6]])y(f,L,U,.06);else if(e==="rex"){S.material=f;for(let L=0;L<4;L++){let U=p(new Le(.09,.22,4),o,0,.66-L*.02,.42+L*.2);U.scale.z=.35}}else if(e==="zippy")for(let L of[-1,1])for(let U of[.45,.75,1.05])y(l,L*.32,U,.035);else if(e==="ace")for(let L of[.5,.72,.94])for(let U of[-1,1])y(f,U*.13,L,.08);else if(e==="duke")for(let[L,U]of[[-.3,.6],[.3,.6],[0,.98]])y(u,L,U,.07);x(h,0,.25,1.27,1.4,.16,.25,.07),x(c,0,.39,1.3,.54,.15,.035,.015);for(let L=-2;L<=2;L++)x(l,L*.095,.39,1.324,.025,.1,.012,.005);for(let L of[-1,1]){let U=g(h,L*.48,.49,1.17,.105,.09,.046);U.rotation.y=L*.15,g(a,L*.48,.49,1.212,.073,.06,.025),g(r(16009541),L*.49,.51,-1.08,.085,.046,.033)}x(c,0,.44,-.88,.61,.34,.54,.07);for(let L=0;L<5;L++)x(l,0,.44+L*.052,-.9,.66,.018,.48,.007);for(let L of[-1,1]){let U=p(new ue(.08,.065,.41,12),l,L*.24,.38,-1.24);U.rotation.x=Math.PI/2;let X=p(new Bs(.058,12),c,L*.24,.38,-1.45);X.rotation.y=Math.PI}let T=n?1:i?.88:.81;for(let L of[-1,1])x(h,L*.39,T-.18,-1.04,.055,.34,.06,.02);let M=x(n?o:f,0,T,-1.06,i?1.62:1.43,.095,.35,.04);M.name="rear-wing";for(let L of[-1,1])x(o,L*(i?.79:.69),T+.035,-1.06,.07,.22,.37,.025);if(e==="rex")for(let L of[-.5,0,.5])p(new Le(.065,.2,12),a,L,T+.14,-1.06);if(n)for(let L of[-1,1])g(u,L*.63,T+.14,-1.04,.047,.047,.047);let A=new ie;A.name=e+"-emblem",A.position.set(0,.61,1.02),A.rotation.x=-.7,s.add(A);let _=(L,U,X=0,$=0,tt=0)=>{let et=new nt(L,U);return et.position.set(X,$,tt),et.castShadow=!0,A.add(et),et},E=_(new ue(.18,.18,.025,24),n?u:a);E.rotation.x=Math.PI/2;let R=(L,U=o)=>{let X=new un;X.moveTo(L[0][0],L[0][1]),L.slice(1).forEach($=>X.lineTo($[0],$[1])),X.closePath(),_(new yn(X,{depth:.015,bevelEnabled:!0,bevelSegments:2,bevelSize:.003,bevelThickness:.003}),U,0,0,.02)},P=(L,U,X,$=o)=>{let tt=_(new pe(X,12,8),$,L,U,.03);tt.scale.z=.3};if(e==="tabby"||e==="grizz"){P(0,-.03,.06);for(let[L,U]of[[-.075,.055],[0,.085],[.075,.055]])P(L,U,.03)}else if(e==="bunbun"){R([[0,-.11],[-.04,.04],[.04,.04]],r(16747039));for(let L of[-1,0,1])R([[L*.03,.04],[L*.05+0,.11],[L*.03+.012,.04]],r(4177780))}else if(e==="duke")R([[-.11,-.07],[-.11,.06],[-.055,0],[0,.09],[.055,0],[.11,.06],[.11,-.07]],r(9133302));else if(e==="rex"){P(0,-.035,.055);for(let[L,U]of[[-.065,.05],[0,.075],[.065,.05]]){let X=_(new Le(.025,.07,8),o,L,U,.03);X.rotation.z=-L*4}}else if(e==="lulu"){let L=new un;L.moveTo(0,-.09),L.bezierCurveTo(-.13,-.01,-.09,.1,0,.045),L.bezierCurveTo(.09,.1,.13,-.01,0,-.09),_(new yn(L,{depth:.015,bevelEnabled:!0,bevelSegments:2,bevelSize:.003,bevelThickness:.003}),r(15220591),0,0,.02)}else if(e==="zippy")R([[.03,.11],[-.07,-.01],[-.005,-.01],[-.03,-.11],[.07,.02],[.005,.02]],r(3127520));else{let L=[];for(let U=0;U<10;U++){let X=U%2?.045:.1,$=U*Math.PI/5;L.push([Math.sin($)*X,Math.cos($)*X])}R(L,f)}let D=new ie;D.position.set(0,.59,-1.185),D.rotation.y=Math.PI,s.add(D);let z=new nt(new br(.25,.18,.024,1,.02),a);D.add(z);let W={1:[1,2],2:[0,1,6,4,3],3:[0,1,6,2,3],4:[5,6,1,2],5:[0,5,6,2,3],6:[0,5,6,4,2,3],7:[0,1,2],8:[0,1,2,3,4,5,6],9:[0,1,2,3,5,6],0:[0,1,2,3,4,5]},O=[[0,.06],[.04,.03],[.04,-.03],[0,-.06],[-.04,-.03],[-.04,.03],[0,0]];for(let L of W[t.number%10]||W[0]){let U=L===0||L===3||L===6,X=new nt(new le(U?.055:.012,U?.012:.045,.008),c);X.position.set(O[L][0],O[L][1],.018),D.add(X)}return s.userData.character=e,{paint:o,secondary:f,dark:c,chrome:l,trim:h,character:e,heavy:i}}function Bu(s){let t=new ie,e=new ie;t.add(e);let n=Ou(e,s);t.name=n.character+"-kart";let i=Fu(e,s),r=new nt(new on(.15,.025,8,20),n.dark);r.position.set(0,.64,.27),r.rotation.x=-.5,e.add(r);let o=new nt(new ue(.025,.025,.33,8),n.chrome);o.position.set(0,.49,.2),o.rotation.x=.45,e.add(o);let a=new nt(new pe(.045,10,8),n.trim);a.position.copy(r.position),e.add(a);let c=new Dt({color:1448998,roughness:.85}),l=new Dt({color:3159876,roughness:.9});c.userData.preserveShading=l.userData.preserveShading=!0;function u(x,g){let m=new ie,b=new ie;m.add(b);let S=[[x*.58,-g/2-.005],[x*.86,-g/2],[x,-g*.28],[x,g*.28],[x*.86,g/2],[x*.58,g/2+.005]].map(([E,R])=>new lt(E,R)),y=new Zs(S,24);y.rotateZ(Math.PI/2);let T=new nt(y,c);T.castShadow=!0,b.add(T);let M=new ue(x*.59,x*.59,g+.012,20);M.rotateZ(Math.PI/2),b.add(new nt(M,n.dark));let A=[],_=[];for(let E of[-1,1]){let R=new nt(new on(x*.64,.018,6,24),n.trim);R.rotation.y=Math.PI/2,R.position.x=E*(g/2+.008),b.add(R);let P=new ue(x*.2,x*.2,.025,12);P.rotateZ(Math.PI/2);let D=new nt(P,n.paint);D.position.x=E*(g/2+.027),b.add(D);for(let z=0;z<5;z++){let W=z*Math.PI*2/5,O=new le(.018,x*.48,.034);O.rotateX(W),O.translate(E*(g/2+.016),Math.cos(W)*x*.36,Math.sin(W)*x*.36),A.push(O)}}b.add(new nt(_l(A),n.chrome)),A.forEach(E=>E.dispose());for(let E=0;E<18;E++){let R=E*Math.PI/9,P=new le(g*.72,.012,.032);P.rotateX(R),P.translate(0,Math.cos(R)*(x+.001),Math.sin(R)*(x+.001)),_.push(P)}return b.add(new nt(_l(_),l)),_.forEach(E=>E.dispose()),m}let f=u(.26,.22);f.position.set(-.72,.26,.85),t.add(f);let h=u(.26,.22);h.position.set(.72,.26,.85),t.add(h);let d=u(.32,.32);d.position.set(-.76,.32,-.85),t.add(d);let p=u(.32,.32);return p.position.set(.76,.32,-.85),t.add(p),{rootGroup:t,bodyGroup:e,frontLeftWheel:f,frontRightWheel:h,rearLeftWheel:d,rearRightWheel:p,steeringWheel:r,driverHead:i,exhaustLeft:new I(-.24,.38,-1.45),exhaustRight:new I(.24,.38,-1.45),rearLeftSparkPos:new I(-.76,.15,-.95),rearRightSparkPos:new I(.76,.15,-.95)}}var Ia=class{constructor(){J(this,"group");J(this,"maxParticles",600);J(this,"particles",[]);J(this,"geometry");J(this,"material");J(this,"pointsMesh");J(this,"positions");J(this,"colors");J(this,"sizes");this.group=new ie,this.positions=new Float32Array(this.maxParticles*3),this.colors=new Float32Array(this.maxParticles*3),this.sizes=new Float32Array(this.maxParticles),this.geometry=new he,this.geometry.setAttribute("position",new Ue(this.positions,3)),this.geometry.setAttribute("color",new Ue(this.colors,3)),this.geometry.setAttribute("size",new Ue(this.sizes,1));let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255, 255, 255, 1.0)"),n.addColorStop(.4,"rgba(255, 255, 255, 0.8)"),n.addColorStop(.8,"rgba(255, 255, 255, 0.2)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let i=new Ie(t);this.material=new is({size:1,vertexColors:!0,transparent:!0,opacity:.9,blending:ir,depthWrite:!1,map:i}),this.pointsMesh=new Us(this.geometry,this.material),this.pointsMesh.frustumCulled=!1,this.group.add(this.pointsMesh)}emitDriftSparks(t,e,n){let i=2+e,r=new Ut(3718648);e===2&&(r=new Ut(16347926)),e>=3&&(r=new Ut(11032055));for(let o=0;o<i&&!(this.particles.length>=this.maxParticles);o++){let a=(Math.random()-.5)*.4,c=new I(-Math.sin(n)*(1.5+Math.random()*2)+a,.8+Math.random()*1.5,-Math.cos(n)*(1.5+Math.random()*2)+a);this.particles.push({position:t.clone().add(new I((Math.random()-.5)*.3,.1+Math.random()*.2,(Math.random()-.5)*.3)),velocity:c,color:r.clone(),size:.4+Math.random()*.4,maxLife:.35+Math.random()*.2,life:0,opacity:1})}}emitBoostFlames(t,e){let i=[new Ut(3900150),new Ut(440020),new Ut(16777215)];for(let r=0;r<3&&!(this.particles.length>=this.maxParticles);r++){let o=e+Math.PI,a=new I(Math.sin(o)*(4+Math.random()*3),.3+Math.random()*.4,Math.cos(o)*(4+Math.random()*3));this.particles.push({position:t.clone().add(new I((Math.random()-.5)*.2,.1,(Math.random()-.5)*.2)),velocity:a,color:i[Math.floor(Math.random()*i.length)].clone(),size:.6+Math.random()*.5,maxLife:.25+Math.random()*.15,life:0,opacity:1})}}emitTireSmoke(t,e=!1){if(this.particles.length>=this.maxParticles)return;let n=e?new Ut(8702998):new Ut(13948120),i=new I((Math.random()-.5)*.8,.6+Math.random()*.8,(Math.random()-.5)*.8);this.particles.push({position:t.clone().add(new I((Math.random()-.5)*.2,.1,(Math.random()-.5)*.2)),velocity:i,color:n,size:.5+Math.random()*.6,maxLife:.4+Math.random()*.25,life:0,opacity:.6})}update(t){for(let o=this.particles.length-1;o>=0;o--){let a=this.particles[o];if(a.life+=t,a.life>=a.maxLife){this.particles.splice(o,1);continue}a.position.addScaledVector(a.velocity,t),a.velocity.y-=2*t,a.size=Math.max(.01,a.size*(1+t*.8))}let e=this.geometry.attributes.position,n=this.geometry.attributes.color,i=this.geometry.attributes.size,r=this.particles.length;for(let o=0;o<r;o++){let a=this.particles[o],c=1-a.life/a.maxLife;this.positions[o*3]=a.position.x,this.positions[o*3+1]=a.position.y,this.positions[o*3+2]=a.position.z,this.colors[o*3]=a.color.r*c,this.colors[o*3+1]=a.color.g*c,this.colors[o*3+2]=a.color.b*c,this.sizes[o]=a.size}for(let o=r;o<this.maxParticles;o++)this.sizes[o]=0,this.positions[o*3]=0,this.positions[o*3+1]=-999,this.positions[o*3+2]=0;e.needsUpdate=!0,n.needsUpdate=!0,i.needsUpdate=!0}clear(){this.particles=[]}};var vl=class{constructor(){J(this,"ctx",null);J(this,"isMuted",!1);J(this,"isInitialized",!1);J(this,"engineGain",null);J(this,"engineOsc1",null);J(this,"engineOsc2",null);J(this,"engineFilter",null);J(this,"screechGain",null);J(this,"screechFilter",null);J(this,"screechSource",null);J(this,"masterGain",null)}output(){return this.init(),this.ctx&&this.masterGain?{ctx:this.ctx,out:this.masterGain}:null}adopt(t){this.ctx!==t&&(this.isInitialized||(this.ctx=t,this.masterGain=t.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:1,t.currentTime),this.masterGain.connect(t.destination),this.setupEngineSynth(),this.setupScreechSynth(),this.isInitialized=!0))}running(){return!!this.ctx&&this.ctx.state==="running"}init(){if(this.isInitialized&&this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:1,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.setupEngineSynth(),this.setupScreechSynth(),this.isInitialized=!0}catch(t){console.warn("Web Audio API not supported or blocked:",t)}}setupEngineSynth(){!this.ctx||!this.masterGain||(this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(0,this.ctx.currentTime),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(600,this.ctx.currentTime),this.engineFilter.Q.setValueAtTime(2.5,this.ctx.currentTime),this.engineOsc1=this.ctx.createOscillator(),this.engineOsc1.type="sawtooth",this.engineOsc1.frequency.setValueAtTime(55,this.ctx.currentTime),this.engineOsc2=this.ctx.createOscillator(),this.engineOsc2.type="triangle",this.engineOsc2.frequency.setValueAtTime(110,this.ctx.currentTime),this.engineOsc1.connect(this.engineFilter),this.engineOsc2.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.engineOsc1.start(),this.engineOsc2.start())}setupScreechSynth(){if(!this.ctx||!this.masterGain)return;let t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);for(let i=0;i<t;i++)n[i]=Math.random()*2-1;this.screechSource=this.ctx.createBufferSource(),this.screechSource.buffer=e,this.screechSource.loop=!0,this.screechFilter=this.ctx.createBiquadFilter(),this.screechFilter.type="bandpass",this.screechFilter.frequency.setValueAtTime(1400,this.ctx.currentTime),this.screechFilter.Q.setValueAtTime(3,this.ctx.currentTime),this.screechGain=this.ctx.createGain(),this.screechGain.gain.setValueAtTime(0,this.ctx.currentTime),this.screechSource.connect(this.screechFilter),this.screechFilter.connect(this.screechGain),this.screechGain.connect(this.masterGain),this.screechSource.start()}updateEngine(t,e,n){this.ctx&&this.engineGain&&this.engineGain.gain.setTargetAtTime(0,this.ctx.currentTime,.05)}updateDriftScreech(t,e,n){if(!this.ctx||!this.screechGain||!this.screechFilter)return;let i=this.ctx.currentTime;if(t&&Math.abs(n)>5){let r=.05+e*.04,o=1200+e*500;this.screechGain.gain.setTargetAtTime(r,i,.05),this.screechFilter.frequency.setTargetAtTime(o,i,.05)}else this.screechGain.gain.setTargetAtTime(0,i,.05)}stopEngine(){!this.ctx||!this.engineGain||(this.engineGain.gain.setTargetAtTime(0,this.ctx.currentTime,.1),this.screechGain&&this.screechGain.gain.setTargetAtTime(0,this.ctx.currentTime,.1))}playCountdownBeep(t=!1){if(!this.ctx||!this.masterGain||this.isMuted)return;let e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();if(t){n.type="triangle",n.frequency.setValueAtTime(1046.5,e),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.001,e+.6);let r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(1318.5,e),o.gain.setValueAtTime(.2,e),o.gain.exponentialRampToValueAtTime(.001,e+.6),r.connect(o),o.connect(this.masterGain),r.start(e),r.stop(e+.6)}else n.type="square",n.frequency.setValueAtTime(440,e),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.001,e+.25);n.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+(t?.6:.25))}playBoostSound(){if(!this.ctx||!this.masterGain||this.isMuted)return;let t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(250,t),e.frequency.exponentialRampToValueAtTime(950,t+.35);let i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(1200,t),i.frequency.exponentialRampToValueAtTime(4e3,t+.35),n.gain.setValueAtTime(.1,t),n.gain.exponentialRampToValueAtTime(.001,t+.45),e.connect(i),i.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.45)}playCollisionSound(t=1){if(!this.ctx||!this.masterGain||this.isMuted)return;let e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(140,e),n.frequency.exponentialRampToValueAtTime(35,e+.18);let r=Math.min(Math.max(t,.2),1);i.gain.setValueAtTime(.4*r,e),i.gain.exponentialRampToValueAtTime(.001,e+.2),n.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+.2)}playCoin(){if(!this.ctx||!this.masterGain||this.isMuted)return;let t=this.ctx.currentTime;[988,1319].forEach((e,n)=>{let i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="square",i.frequency.value=e,r.gain.setValueAtTime(1e-4,t+n*.07),r.gain.exponentialRampToValueAtTime(.06,t+n*.07+.01),r.gain.exponentialRampToValueAtTime(1e-4,t+n*.07+.14),i.connect(r).connect(this.masterGain),i.start(t+n*.07),i.stop(t+n*.07+.16)})}playLapChime(t=!1){if(!this.ctx||!this.masterGain||this.isMuted)return;(t?[659.25,880,1174.66]:[587.33,880]).forEach((n,i)=>{if(!this.ctx||!this.masterGain)return;let r=this.ctx.currentTime+i*.08,o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(n,r),a.gain.setValueAtTime(.25,r),a.gain.exponentialRampToValueAtTime(.001,r+.5),o.connect(a),a.connect(this.masterGain),o.start(r),o.stop(r+.55)})}playFinishFanfare(){if(!this.ctx||!this.masterGain||this.isMuted)return;let t=[{f:523.25,d:.12},{f:659.25,d:.12},{f:783.99,d:.12},{f:1046.5,d:.25},{f:880,d:.15},{f:1046.5,d:.45}],e=0;t.forEach(n=>{if(!this.ctx||!this.masterGain)return;let i=this.ctx.currentTime+e,r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n.f,i),o.gain.setValueAtTime(.3,i),o.gain.exponentialRampToValueAtTime(.001,i+n.d),r.connect(o),o.connect(this.masterGain),r.start(i),r.stop(i+n.d+.05),e+=n.d*.9})}toggleMute(){return this.isMuted=!this.isMuted,this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:1,this.ctx.currentTime),this.isMuted}getMuted(){return this.isMuted}},re=new vl;var Ex={cat:330,bunny:400,crown:210,horns:190,bow:370,antenna:290,cap:300,bear:150},ku={a:[800,1150,2800],o:[450,800,2830],u:[325,700,2530],e:[400,2e3,2550],i:[300,2300,3e3],h:[600,1400,2600]},Mr=null,zu=0;function Da(){let s=re.output();return!s||s.ctx.state!=="running"?null:s}function Tx(s){if(!Mr||Mr.sampleRate!==s.sampleRate){Mr=s.createBuffer(1,s.sampleRate,s.sampleRate);let t=Mr.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}return Mr}function xe(s,t,e,n,i,r,o=0){let a=Da();if(!a)return;let c=a.ctx,l=c.currentTime+n,u=c.createOscillator(),f=c.createGain();u.type=s,u.frequency.setValueAtTime(t,l),u.frequency.exponentialRampToValueAtTime(Math.max(20,e),l+i),f.gain.setValueAtTime(1e-4,l),f.gain.exponentialRampToValueAtTime(r,l+.012),f.gain.exponentialRampToValueAtTime(1e-4,l+i);let h=u;if(o){let d=c.createBiquadFilter();d.type="lowpass",d.frequency.value=o,u.connect(d),h=d}h.connect(f).connect(a.out),u.start(l),u.stop(l+i+.05)}function pn(s,t,e,n,i,r,o=1){let a=Da();if(!a)return;let c=a.ctx,l=c.currentTime+s,u=c.createBufferSource(),f=c.createBiquadFilter(),h=c.createGain();u.buffer=Tx(c),f.type=n,f.Q.value=o,f.frequency.setValueAtTime(i,l),f.frequency.exponentialRampToValueAtTime(Math.max(30,r),l+t),h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(e,l+.01),h.gain.exponentialRampToValueAtTime(1e-4,l+t),u.connect(f).connect(h).connect(a.out),u.start(l,Math.random()*.5),u.stop(l+t+.05)}function La(s,t,e,n,i,r,o){let a=Da();if(!a)return;let c=a.ctx,l=c.currentTime+s,u=c.createOscillator(),f=c.createOscillator(),h=c.createGain(),d=c.createGain();u.type="sawtooth",u.frequency.setValueAtTime(e,l),u.frequency.exponentialRampToValueAtTime(n,l+t),f.frequency.value=6,h.gain.value=e*.025,f.connect(h).connect(u.frequency),d.gain.setValueAtTime(1e-4,l),d.gain.exponentialRampToValueAtTime(o,l+.03),d.gain.setValueAtTime(o,l+t*.7),d.gain.exponentialRampToValueAtTime(1e-4,l+t),d.connect(a.out);let p=ku[i],x=ku[r];p.forEach((g,m)=>{let b=c.createBiquadFilter(),S=c.createGain();b.type="bandpass",b.Q.value=9,b.frequency.setValueAtTime(g,l),b.frequency.linearRampToValueAtTime(x[m],l+t*.6),S.gain.value=[1,.6,.25][m]*3,u.connect(b).connect(S).connect(d)}),u.start(l),f.start(l),u.stop(l+t+.05),f.stop(l+t+.05)}var Hu=s=>(Ex[s||"cap"]||280)*(.97+Math.random()*.06),Ze={cheer(s){let t=Hu(s);La(0,.16,t*1.1,t*1.35,"i","a",.22),La(.17,.42,t*1.6,t*1.25,"h","u",.24),[0,4,7,12].forEach((e,n)=>xe("triangle",880*Math.pow(2,e/12),880*Math.pow(2,e/12),.08+n*.06,.18,.05))},ouch(s){let t=Hu(s);pn(0,.35,.35,"lowpass",1800,200),xe("sine",160,40,0,.3,.45),La(.1,.22,t*1.4,t*1.2,"o","a",.2),La(.33,.4,t*1.15,t*.7,"o","u",.2),xe("sine",1400,300,.15,.7,.07)},throwItem(s,t){if(s==="banana"||s==="fake"){t?(xe("sine",420,140,0,.14,.18),pn(.02,.08,.08,"bandpass",900,500,2)):(pn(0,.25,.12,"bandpass",600,2400,2),xe("sine",300,700,0,.22,.1));return}if(s==="bomb"){pn(0,.6,.08,"highpass",3e3,5e3,1),xe("square",220,330,0,.12,.05,1200);return}if(s==="red"||s==="blue"){pn(0,.45,.16,"bandpass",500,2600,1.5),xe("sawtooth",140,420,0,.45,.06,1400);return}pn(0,.2,.14,"bandpass",900,2600,2),xe("triangle",500,900,0,.12,.08)},pickup(){[0,3,7,10,14].forEach((s,t)=>xe("square",660*Math.pow(2,s/12),660*Math.pow(2,s/12),t*.035,.08,.035,3e3))},block(){xe("square",1400,1100,0,.12,.08,4e3),xe("triangle",2100,2100,.02,.2,.06),pn(0,.1,.1,"highpass",3e3,3e3,1)},bump(){xe("sine",220,70,0,.16,.35),xe("square",180,120,0,.08,.06,900)},wall(){xe("sine",120,45,0,.2,.45),pn(0,.18,.18,"bandpass",700,300,1.5),xe("triangle",900,860,0,.18,.05)},boom(){xe("sine",90,30,0,.7,.6),pn(0,.9,.45,"lowpass",2500,120)},zap(){for(let s=0;s<5;s++)pn(s*.05,.08,.2,"bandpass",3e3-s*300,1200,6);xe("sawtooth",1200,80,0,.6,.08,3e3)},horn(){xe("square",233,233,0,.5,.12,1600),xe("square",294,294,0,.5,.1,1600)},splat(){pn(0,.25,.3,"lowpass",1400,200),xe("sine",300,90,0,.18,.2)},steal(){pn(0,.3,.15,"bandpass",2400,600,3),xe("triangle",900,1600,.05,.15,.06)},star(){[0,4,7,11,14,19].forEach((s,t)=>xe("triangle",784*Math.pow(2,s/12),784*Math.pow(2,s/12),t*.05,.2,.05))},driftLevel(s){let t=[0,880,1175,1568][s]||1568;xe("triangle",t,t,0,.12,.07),xe("triangle",t*1.5,t*1.5,.05,.12,.05)},overtake(){xe("square",784,784,0,.07,.04,3e3),xe("square",1175,1175,.07,.12,.04,3e3)},reverse(){let s=Da();if(!s)return;let t=s.ctx.currentTime;t-zu<.6||(zu=t,xe("square",1046,1046,0,.22,.05,2500))}};var Na=class{constructor(t,e){J(this,"totalLaps",3);J(this,"track");J(this,"particles");this.track=t,this.particles=e}updateRacer(t,e,n,i,r){if(t.spinOutTimer>0){t.spinOutTimer-=i,t.speed*=Math.max(0,1-i*2),t.rotation.y+=i*12,this.syncMesh(t,n,i);return}if(t.invulnerableTimer>0&&(t.invulnerableTimer-=i),e.respawn){this.respawnOnTrack(t);return}let{config:o}=t,a=!0,c=this.track.getClosestTrackPoint(t.position.x,t.position.z),l=this.track.roadWidth/2,u=this.track.onShortcut(t.position.x,t.position.z),f=u!==null&&c.distanceToCenter>l+.5,h=c.distanceToCenter>l+.5&&!f;t.boostTimer>0&&(t.boostTimer-=i,t.boostTimer<=0&&(t.boostMultiplier=1));let d=o.topSpeed*t.boostMultiplier;t.shrinkTimer&&t.shrinkTimer>0&&(t.shrinkTimer-=i,d*=.72),t.starTimer&&t.starTimer>0&&(t.starTimer-=i,d*=1.18),d*=1+.012*(t.coins||0),t.rideTimer&&t.rideTimer>0&&(t.rideTimer-=i,d*=1.35,t.speed=Math.max(t.speed,o.topSpeed*1.45)),t.ghostTimer&&t.ghostTimer>0&&(t.ghostTimer-=i),t.inkTimer&&t.inkTimer>0&&(t.inkTimer-=i);let p=o.acceleration;if(f&&t.boostTimer<=0&&!(t.starTimer&&t.starTimer>0)&&(d=Math.min(d,o.topSpeed*.66)),h&&(t.boostTimer<=0&&(d=Math.min(d,o.topSpeed*.66)),p*=.8,Math.abs(t.speed)>5&&Math.random()<.4&&this.particles.emitTireSmoke(new I(t.position.x,t.position.y,t.position.z),!0)),e.throttle)if(t.speed<d){let R=Math.max(0,Math.min(1,t.speed/d));t.speed+=p*(1.35-.85*R)*i*(t.boostTimer>0?1.4:1)}else t.speed-=10*i;else if(e.brake)t.speed>0?t.speed-=35*i:t.speed>-12&&(t.speed-=14*i);else{let R=h?13:9;t.speed>0?t.speed=Math.max(0,t.speed-R*i):t.speed<0&&(t.speed=Math.min(0,t.speed+R*i))}let x=Math.abs(t.speed)/o.topSpeed,g=o.handling*.68*Math.min(1,x/.3),m=typeof e.steer=="number"?e.steer:0;e.steerLeft&&(m+=1),e.steerRight&&(m-=1),m=Math.max(-1,Math.min(1,m)),Math.abs(m)<.05&&(m=0),m=Math.sign(m)*(.35*Math.abs(m)+.65*m*m);let b=t.steerSmooth||0,S=Math.abs(m)<Math.abs(b)||Math.sign(m)!==Math.sign(b)?14:9;t.steerSmooth=b+(m-b)*Math.min(1,i*S),Math.abs(t.steerSmooth)<.002&&m===0&&(t.steerSmooth=0);let y=m;m=t.steerSmooth;let T=e.drift&&!t.driftHeld;if(t.driftHeld=e.drift,T&&!t.isDrifting&&(t.hopT||0)<=0&&Math.abs(t.speed)>6&&(t.hopT=.26,t.config.isPlayer&&t.config.audioLead!==!1&&re.playCollisionSound(.15)),(t.hopT||0)>0&&(t.hopT-=i,t.hopT<=0&&e.drift&&!t.isDrifting&&Math.abs(t.speed)>10&&Math.abs(y)>.15&&(t.isDrifting=!0,t.driftDirection=Math.sign(y),t.driftTime=0,t.driftLevel=0)),t.isDrifting)if(!e.drift||Math.abs(t.speed)<8)t.driftLevel>0&&this.triggerDriftBoost(t),t.isDrifting=!1,t.driftDirection=0,t.driftTime=0,t.driftLevel=0;else{let R=Math.max(-1,Math.min(1,m*t.driftDirection));t.driftTime+=i*(.6+.9*Math.max(0,R)),t.driftTime>2.4?t.driftLevel=3:t.driftTime>1.5?t.driftLevel=2:t.driftTime>.7&&(t.driftLevel=1);let P=Math.max(-1,Math.min(1,m*t.driftDirection)),D=o.handling*.5*(1.05+P*.4)*t.driftDirection;if(t.angularVelocity=De.lerp(t.angularVelocity,D,Math.min(1,i*8)),t.rotation.roll=De.lerp(t.rotation.roll,-t.driftDirection*.18,i*10),t.driftLevel>0){let z=new I;t.driftDirection>0?n.rearRightWheel.getWorldPosition(z):n.rearLeftWheel.getWorldPosition(z),this.particles.emitDriftSparks(z,t.driftLevel,t.rotation.y)}}else{if(m!==0&&Math.abs(t.speed)>.5){let R=t.speed<0?-1:1;t.angularVelocity=De.lerp(t.angularVelocity,m*g*R,Math.min(1,i*12))}else t.angularVelocity=De.lerp(t.angularVelocity,0,Math.min(1,i*14));t.rotation.roll=De.lerp(t.rotation.roll,-m*.08*x,i*8)}t.rotation.y+=t.angularVelocity*i,t.slideAngle=De.lerp(t.slideAngle||0,t.isDrifting?t.driftDirection*.26:0,Math.min(1,i*6));let M=t.rotation.y+t.slideAngle,A=Math.sin(M)*t.speed,_=Math.cos(M)*t.speed;if(t.position.x+=A*i,t.position.z+=_*i,t.bumpX||t.bumpZ){t.position.x+=(t.bumpX||0)*i,t.position.z+=(t.bumpZ||0)*i;let R=Math.exp(-i*6);t.bumpX=(t.bumpX||0)*R,t.bumpZ=(t.bumpZ||0)*R,Math.abs(t.bumpX)+Math.abs(t.bumpZ)<.05&&(t.bumpX=t.bumpZ=0)}t.position.y=De.lerp(t.position.y,(f?u:c.point.y)+.1,i*12);let E=l+10;if(c.distanceToCenter>E&&!f){let R=c.point.x-t.position.x,P=c.point.z-t.position.z,D=Math.sqrt(R*R+P*P);if(D>.01){t.position.x+=R/D*(c.distanceToCenter-E),t.position.z+=P/D*(c.distanceToCenter-E),t.speed*=Math.pow(.6,i);let z=performance.now();t.config.isPlayer&&!t.isFinished&&(!t.bumpedAt||z-t.bumpedAt>400)&&(Ze.wall(),t.bumpedAt=z)}}if(this.handleKartCollisions(t,r),t.boostTimer>0){let R=new I;n.rootGroup.getWorldPosition(R),this.particles.emitBoostFlames(R,t.rotation.y)}if(this.updateProgression(t),this.syncMesh(t,n,i),t.config.isPlayer&&!t.isFinished&&t.speed<-2&&Ze.reverse(),t.config.isPlayer&&t.config.audioLead!==!1){if(t.isFinished){re.stopEngine();return}re.updateEngine(t.speed/o.topSpeed,e.throttle,t.boostTimer>0),re.updateDriftScreech(t.isDrifting,t.driftLevel,t.speed)}}triggerDriftBoost(t){let e=.7,n=1.35;t.driftLevel===2?(e=1.2,n=1.48):t.driftLevel===3&&(e=1.7,n=1.62),t.boostTimer=e,t.boostMultiplier=n,t.speed=Math.max(t.speed,t.config.topSpeed*1.15),t.config.isPlayer&&re.playBoostSound()}triggerStartBoost(t){t.boostTimer=1.8,t.boostMultiplier=1.45,t.speed=t.config.topSpeed*1.2,t.config.isPlayer&&re.playBoostSound()}handleKartCollisions(t,e){for(let i of e){if(i.config.id===t.config.id||(t.ghostTimer||0)>0||(i.ghostTimer||0)>0)continue;let r=t.position.x-i.position.x,o=t.position.z-i.position.z,a=Math.sqrt(r*r+o*o);if(a<1.35*2&&a>.001){let c=2.7-a,l=r/a,u=o/a,f=t.config.weight||2,h=i.config.weight||2,d=h/(f+h),p=f/(f+h);t.position.x+=l*c*d,t.position.z+=u*c*d,i.position.x-=l*c*p,i.position.z-=u*c*p;let x=Math.min(30,Math.abs(t.speed-i.speed)+6),g=performance.now();if(!t.bumpedAt||g-t.bumpedAt>250){let b=S=>S.starTimer&&S.starTimer>0?3:1;t.bumpX=(t.bumpX||0)+l*x*.55*d*b(i)/b(t),t.bumpZ=(t.bumpZ||0)+u*x*.55*d*b(i)/b(t),i.bumpX=(i.bumpX||0)-l*x*.55*p*b(t)/b(i),i.bumpZ=(i.bumpZ||0)-u*x*.55*p*b(t)/b(i),t.bumpedAt=i.bumpedAt=g,(t.config.isPlayer&&!t.isFinished||i.config.isPlayer&&!i.isFinished)&&Ze.bump()}let m=(t.speed*f+i.speed*h)/(f+h);t.speed=De.lerp(t.speed,m,.5*d),i.speed=De.lerp(i.speed,m,.5*p)}}}updateProgression(t){let e=this.track.getClosestTrackPoint(t.position.x,t.position.z),n=this.track.trackPoints.length,i=e.index,r=t.checkpointIndex,o=(i-r+n)%n;o>0&&o<n/3&&(t.checkpointIndex=i,t.splineProgress=i/n,r>n*.85&&i<n*.15&&(t.currentLap+=1,t.lapTimes.push(t.currentLapTime),(t.bestLapTime===null||t.currentLapTime<t.bestLapTime)&&(t.bestLapTime=t.currentLapTime),t.config.isPlayer&&re.playLapChime(t.currentLap===(this.totalLaps||3)),t.currentLapTime=0)),t.totalDistance=(t.currentLap-1)*this.track.totalLength+e.point.distance}respawnOnTrack(t){let e=this.track.getClosestTrackPoint(t.position.x,t.position.z);t.position.x=e.point.x,t.position.y=e.point.y+.1,t.position.z=e.point.z,t.rotation.y=Math.atan2(e.point.tangentX,e.point.tangentZ),t.rotation.roll=0,t.rotation.pitch=0,t.speed=0,t.angularVelocity=0,t.isDrifting=!1,t.driftLevel=0,t.boostTimer=0,t.invulnerableTimer=1.5}syncMesh(t,e,n){let{rootGroup:i,bodyGroup:r,frontLeftWheel:o,frontRightWheel:a,rearLeftWheel:c,rearRightWheel:l,steeringWheel:u,driverHead:f}=e,h=(t.hopT||0)>0?Math.sin((1-t.hopT/.26)*Math.PI)*.45:0;i.position.set(t.position.x,t.position.y+h,t.position.z),i.rotation.y=t.rotation.y,r.rotation.z=t.rotation.roll,r.rotation.x=t.rotation.pitch;let d=t.speed/.3*n;o.children[0].rotation.x+=d,a.children[0].rotation.x+=d,c.children[0].rotation.x+=d,l.children[0].rotation.x+=d;let p=t.isDrifting?t.driftDirection*.45:t.angularVelocity/2.5;o.rotation.y=De.lerp(o.rotation.y,p,n*15),a.rotation.y=De.lerp(a.rotation.y,p,n*15),u.rotation.z=-p*1.8,f.rotation.y=De.lerp(f.rotation.y,p*.8,n*10)}};var Di=class{constructor(t,e){J(this,"track");J(this,"me");J(this,"lane",0);J(this,"laneGoal",0);J(this,"laneTimer",0);J(this,"skill");this.track=t,this.me=e,this.skill=e.config.aiAggression||1,this.lane=this.laneGoal=(Math.random()-.5)*.7}wrap(t){for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}roadHeading(t){let e=this.track.trackPoints,n=e[(t%e.length+e.length)%e.length];return Math.atan2(n.tangentX,n.tangentZ)}update(t,e){let n=this.me,i=this.track.trackPoints,r=i.length,o=this.track.totalLength/r,a=this.track.roadWidth/2,c=Math.abs(n.speed),l=this.track.getClosestTrackPoint(n.position.x,n.position.z),u=l.index;this.laneTimer-=t,this.laneTimer<=0&&(this.laneTimer=2+Math.random()*3,this.laneGoal=(Math.random()-.5)*.8);for(let z of e){if(z===n)continue;let W=z.position.x-n.position.x,O=z.position.z-n.position.z,L=W*Math.sin(n.rotation.y)+O*Math.cos(n.rotation.y),U=W*Math.cos(n.rotation.y)-O*Math.sin(n.rotation.y);L>0&&L<9&&Math.abs(U)<2.6&&z.speed<n.speed&&(this.laneGoal=U>0?-.55:.55,this.laneTimer=1.2)}this.lane+=(this.laneGoal-this.lane)*Math.min(1,t*1.5);let f=Math.round((7+c*.32)/o),h=i[(u+f)%r],d=this.wrap(this.roadHeading(u+f+6)-this.roadHeading(u+f-2)),p=Math.max(-.8,Math.min(.8,this.lane+Math.sign(d)*Math.min(.5,Math.abs(d)*1.2))),x=h.x+h.normalX*p*a,g=h.z+h.normalZ*p*a,m=Math.atan2(x-n.position.x,g-n.position.z),b=this.wrap(m-n.rotation.y),S=Math.max(-1,Math.min(1,b*2.4)),y=Math.round((22+c*.5)/o),T=Math.abs(this.wrap(this.roadHeading(u+y)-this.roadHeading(u+2))),M=l.distanceToCenter>a+.5,A=n.config.topSpeed,_=A*(.92+.08*Math.min(1,this.skill));T>1.1?_=A*.62:T>.75&&(_=A*.78),Math.abs(b)>.9&&(_=Math.min(_,A*.5));let E=c<_,R=c>_+8||Math.abs(b)>1.3&&c>14,P=T>.55&&T<1.6&&c>24&&!M&&Math.abs(S)>.35,D=n.isDrifting?T>.3&&Math.sign(S)===n.driftDirection:P;return{throttle:E,brake:R,steerLeft:!1,steerRight:!1,steer:S,drift:D,respawn:!1,cameraToggle:!1}}};var Sr=class{constructor(t){J(this,"camera");J(this,"currentView","chase");J(this,"targetPosition",new I);J(this,"targetLookAt",new I);J(this,"baseFOV",68);this.camera=new ke(this.baseFOV,t,.2,1e3),this.camera.position.set(0,10,20)}setView(t){this.currentView=t}cycleView(){let t=["chase","cockpit","action","topdown"],e=(t.indexOf(this.currentView)+1)%t.length;return this.currentView=t[e],this.currentView}update(t,e){let n=t.rotation.y,i=Math.min(1.5,Math.abs(t.speed)/t.config.topSpeed),r=this.baseFOV;t.boostTimer>0?r=this.baseFOV+16:r=this.baseFOV+i*8,this.camera.fov=De.lerp(this.camera.fov,r,e*6),this.camera.updateProjectionMatrix();let o=new I(t.position.x,t.position.y,t.position.z);if(this.currentView==="chase"){let l=t.isDrifting?-t.driftDirection*.9:0,u=new I(-Math.sin(n)*5.8+Math.cos(n)*l,2.4,-Math.cos(n)*5.8-Math.sin(n)*l);this.targetPosition.copy(o).add(u),this.targetLookAt.copy(o).add(new I(Math.sin(n)*14,1.1,Math.cos(n)*14)),this.camera.position.lerp(this.targetPosition,e*10),this.camera.lookAt(this.targetLookAt)}else if(this.currentView==="cockpit"){let a=new I(Math.sin(n)*.4,.95,Math.cos(n)*.4);this.camera.position.copy(o).add(a);let c=o.clone().add(new I(Math.sin(n)*20,.8,Math.cos(n)*20));this.camera.lookAt(c)}else if(this.currentView==="action"){let l=new I(-Math.sin(n)*3.5,1.1,-Math.cos(n)*3.5);this.targetPosition.copy(o).add(l),this.targetLookAt.copy(o).add(new I(Math.sin(n)*8,.8,Math.cos(n)*8)),this.camera.position.lerp(this.targetPosition,e*14),this.camera.lookAt(this.targetLookAt)}else this.currentView==="topdown"&&(this.targetPosition.set(o.x,o.y+40,o.z+10),this.camera.position.lerp(this.targetPosition,e*6),this.camera.lookAt(o))}onResize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}};var Ua=["banana","green","red","blue","boost","star","bolt","fake","coin","horn","bomb","ink","golden","ride","ghost"],bl=["banana","green","red","fake","bomb"],wx=["banana","green","red","boost"];function Ax(s,t){let e=t<=1?0:(s-1)/(t-1),n={banana:5-4*e,green:3.5-2*e,fake:2.2*(1-e),coin:3*(1-e)+.3,horn:e<.25?1.2:.3,red:e<.1?.4:1+2.5*e,bomb:.4+1.8*e,ink:e>.3?1.2:0,boost:1+3*e,golden:e>.5?2.2*e:0,star:e>.45?2*e:0,ride:e>.7?2.6*e:0,ghost:e>.3?.8:0,blue:e>.5?1:0,bolt:e>.8?.9:0},i=0;for(let o of Ua)i+=n[o];let r=Math.random()*i;for(let o of Ua)if(r-=n[o],r<=0)return o;return"banana"}var Rx=["#ff5d8f","#4cc9f0","#ffc83d","#7bd389","#b388ff"];function Vu(s){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d");e.fillStyle=s,e.fillRect(0,0,128,128),e.fillStyle="rgba(255,255,255,0.35)";for(let i=10;i<128;i+=26)for(let r=i/26%2?22:9;r<128;r+=26)e.beginPath(),e.arc(r,i,4,0,Math.PI*2),e.fill();e.fillStyle="#ffffff",e.fillRect(52,0,24,128),e.fillRect(0,52,128,24),e.fillStyle="rgba(0,0,0,0.12)",e.fillRect(52,0,4,128),e.fillRect(0,52,128,4);let n=new Ie(t);return n.colorSpace=Ne,n}function Cx(s){let t=new Dt({color:16777215,roughness:.35});for(let n of[-1,1]){let i=new nt(new on(.22,.08,8,14),t);i.position.set(n*.22,.82,0),i.rotation.set(0,Math.PI/2,n*.5),i.scale.set(1,1,.6),s.add(i)}let e=new nt(new pe(.11,10,8),t);e.position.y=.78,s.add(e)}function Px(s){return new Dt({color:s,emissive:s,emissiveIntensity:.35,roughness:.25,metalness:.1})}function Gu(s){let t=new ie;if(s==="bomb"){let e=new nt(new pe(.55,16,12),new Dt({color:2302778,roughness:.35,metalness:.2}));e.position.y=.6,t.add(e);let n=new nt(new ue(.16,.2,.18,10),new Dt({color:9080744}));n.position.y=1.15,t.add(n);let i=new nt(new ue(.04,.04,.35,6),new Dt({color:13214826}));i.position.set(.06,1.38,0),i.rotation.z=-.4,t.add(i);let r=new nt(new pe(.12,8,6),new Ee({color:16765773}));r.position.set(.14,1.55,0),r.name="flame",t.add(r);let o=new nt(new pe(.12,8,6),new Ee({color:16777215}));return o.position.set(-.22,.85,.35),t.add(o),t}if(s==="fake"){let e=new nt(new le(1.3,1.3,1.3),new Dt({map:Vu("#ff5d8f"),roughness:.35}));e.position.y=.75,t.add(e);let n=new Dt({color:14035001}),i=new nt(new on(.2,.07,8,12),n);return i.position.y=1.5,i.rotation.y=Math.PI/2,t.add(i),t}if(s==="banana"){let e=new Dt({color:16767291,roughness:.55}),n=new wi(new I(-.45,.15,0),new I(0,.05,.25),new I(.45,.15,0)),i=new nt(new Ri(n,12,.13,8,!1),e);t.add(i);for(let o=0;o<3;o++){let a=new nt(new Le(.16,.6,6),e),c=o/3*Math.PI*2;a.position.set(.45+Math.cos(c)*.12,.18,Math.sin(c)*.18),a.rotation.set(Math.sin(c)*1.1,0,-1.2+Math.cos(c)*.3),t.add(a)}let r=new nt(new pe(.07,6,5),new Dt({color:5913106}));r.position.set(-.5,.17,0),t.add(r)}else if(s==="green"){let e=new nt(new pe(.5,18,14),new Dt({color:4054148,roughness:.15,transparent:!0,opacity:.92,emissive:1735236,emissiveIntensity:.25}));e.position.y=.5,e.name="body",t.add(e);let n=new nt(new pe(.13,8,6),new Ee({color:16777215}));n.position.set(-.18,.78,.3),t.add(n);let i=new Ee({color:1776442});for(let r of[-1,1]){let o=new nt(new pe(.07,8,6),i);o.position.set(r*.15,.58,.45),t.add(o)}}else if(s==="red"){let e=new nt(new ue(.22,.26,1,12),Px(16726843));e.rotation.x=Math.PI/2;let n=new nt(new Le(.22,.45,12),new Dt({color:16777215,roughness:.3}));n.rotation.x=Math.PI/2,n.position.z=.72;let i=new nt(new ue(.235,.235,.12,12),new Dt({color:16762941}));i.rotation.x=Math.PI/2,i.position.z=.25,t.add(e,n,i);let r=new Dt({color:16777215,roughness:.4});for(let a=0;a<3;a++){let c=new nt(new le(.04,.32,.3),r),l=a/3*Math.PI*2;c.position.set(Math.sin(l)*.28,Math.cos(l)*.28,-.4),c.rotation.z=-l,t.add(c)}let o=new nt(new Le(.18,.6,10),new Ee({color:16753434,transparent:!0,opacity:.85}));o.rotation.x=-Math.PI/2,o.position.z=-.8,o.name="flame",t.add(o),t.children.forEach(a=>a.position.y+=.45)}else{let e=new Dt({color:5991382,roughness:.6,emissive:2767514,emissiveIntensity:.4});for(let[o,a,c]of[[0,0,.45],[-.42,-.08,.32],[.42,-.06,.34],[.12,.22,.32]]){let l=new nt(new pe(c,12,10),e);l.position.set(o,a,0),t.add(l)}let n=new un;n.moveTo(.05,0),n.lineTo(-.15,-.35),n.lineTo(0,-.35),n.lineTo(-.1,-.7),n.lineTo(.2,-.25),n.lineTo(.05,-.25),n.lineTo(.2,0);let i=new nt(new yn(n,{depth:.06,bevelEnabled:!1}),new Ee({color:16773466}));i.position.set(0,-.3,0),i.name="flame",t.add(i);let r=new Ee({color:16777215});for(let o of[-1,1]){let a=new nt(new le(.16,.06,.04),r);a.position.set(o*.15,.05,.44),a.rotation.z=o*.35,t.add(a)}}return t}var Fa=class{constructor(t,e){J(this,"scene",t);J(this,"track",e);J(this,"held",new Map);J(this,"onEvent");J(this,"boxes",[]);J(this,"coinsOnTrack",[]);J(this,"thrown",[]);J(this,"group",new ie);J(this,"boxGeo",new le(1.4,1.4,1.4));J(this,"boxMats");J(this,"aiTimers",new Map);J(this,"fx",[]);t.add(this.group),this.boxMats=Rx.map(c=>new Dt({map:Vu(c),roughness:.35,emissive:16777215,emissiveIntensity:.12}));let n=0,i=e.trackPoints;for(let c of[.16,.42,.68,.88]){let l=i[Math.floor(c*i.length)%i.length],u=e.roadWidth;for(let f of[-.4,-.2,0,.2,.4]){let h=l.x+l.normalX*f*u,d=l.z+l.normalZ*f*u,p=new nt(this.boxGeo,this.boxMats[n++%this.boxMats.length]);Cx(p),p.position.set(h,l.y+1.2,d),this.group.add(p),this.boxes.push({mesh:p,x:h,y:l.y,z:d,respawn:0})}}let r=new ue(.55,.55,.14,18);r.rotateX(Math.PI/2);let o=new Dt({color:16762941,emissive:11565056,emissiveIntensity:.45,metalness:.6,roughness:.25}),a=new Dt({color:14722048,metalness:.6,roughness:.3});for(let c of[.07,.29,.53,.77]){let l=(Math.random()-.5)*.6;for(let u=0;u<5;u++){let f=i[(Math.floor(c*i.length)+u*2)%i.length],h=f.x+f.normalX*l*e.roadWidth,d=f.z+f.normalZ*l*e.roadWidth,p=new nt(r,o),x=new nt(new on(.55,.06,6,18),a);p.add(x),p.position.set(h,f.y+1,d),this.group.add(p),this.coinsOnTrack.push({mesh:p,x:h,y:f.y,z:d,respawn:0})}}}reset(){for(let t of this.thrown)this.group.remove(t.mesh);this.thrown=[];for(let t of this.held.values())for(let e of t.trail)this.group.remove(e);this.held.clear();for(let t of this.boxes)t.respawn=0,t.mesh.visible=!0;for(let t of this.coinsOnTrack)t.respawn=0,t.mesh.visible=!0}update(t,e,n,i,r){for(let o of this.coinsOnTrack){if(o.respawn>0){o.respawn-=t,o.respawn<=0&&(o.mesh.visible=!0);continue}o.mesh.rotation.y+=t*3,o.mesh.position.y=o.y+1+Math.sin(e*3+o.x)*.12;for(let a of n){let c=a.position.x-o.x,l=a.position.z-o.z;if(c*c+l*l<4.5){o.mesh.visible=!1,o.respawn=10,(a.coins||0)<10&&(a.coins=(a.coins||0)+1,a.config.isPlayer&&a.config.audioLead!==!1&&re.playCoin()),this.onEvent?.({type:"coin",racer:a.config.id});break}}}for(let o of this.boxes){if(o.respawn>0){o.respawn-=t,o.respawn<=0&&(o.mesh.visible=!0);continue}o.mesh.rotation.y+=t*1.6,o.mesh.rotation.x=Math.sin(e*1.3+o.x)*.3,o.mesh.position.y=o.y+1.2+Math.sin(e*2.2+o.z)*.15;for(let a of n){let c=a.position.x-o.x,l=a.position.z-o.z;if(c*c+l*l<6.5){o.mesh.visible=!1,o.respawn=2.5,this.held.has(a.config.id)||(this.held.set(a.config.id,{kind:null,rollLeft:1.3,shown:"banana",count:1,trailing:!1,trail:[]}),this.onEvent?.({type:"pickup",racer:a.config.id}),a.config.isPlayer&&re.playLapChime(!1));break}}}for(let[o,a]of this.held)if(!a.kind&&(a.rollLeft-=t,a.shown=Ua[Math.floor(e*14)%Ua.length],a.rollLeft<=0)){let c=n.find(l=>l.config.id===o);a.kind=Ax(c?c.rank:n.length,n.length),a.shown=a.kind,wx.includes(a.kind)&&Math.random()<.22&&(a.count=3,bl.includes(a.kind)&&this.startTrail(a)),c&&!c.config.isPlayer&&this.aiTimers.set(o,.6+Math.random()*3.5)}for(let[o,a]of this.aiTimers){let c=a-t;c<=0?(this.aiTimers.delete(o),i.add(o)):this.aiTimers.set(o,c)}for(let o of i)this.fire(o,n);for(let[o,a]of this.held)a.kind==="golden"&&a.left!==void 0&&(a.left-=t,a.left<=0?this.held.delete(o):!n.find(c=>c.config.id===o)?.config.isPlayer&&Math.random()<t*3&&i.add(o));this.updateFx(t),this.updateTrails(n),this.updateThrown(t,n,e);for(let o of n){if((o.starTimer||0)>0)for(let a of n){if(a===o||a.spinOutTimer>0||(a.starTimer||0)>0)continue;let c=a.position.x-o.position.x,l=a.position.z-o.position.z;c*c+l*l<5&&this.hit(a,o.config.id,"star")}r(o.config.id,(o.shrinkTimer||0)>0?.6:1)}}press(t,e,n){let i=this.held.get(t);!i||!i.kind||(bl.includes(i.kind)?i.trailing||this.startTrail(i):this.fire(t,e,n))}release(t,e,n){let i=this.held.get(t);i&&i.kind&&i.trailing&&this.fire(t,e,n)}fire(t,e,n){let i=this.held.get(t),r=e.find(c=>c.config.id===t);if(!i||!i.kind||!r)return;let o=i.kind;if(o==="golden"){i.left===void 0&&(i.left=7),this.use("boost",r,e);return}i.count--;let a=i.trail.pop();if(a&&this.group.remove(a),i.count<=0){for(let c of i.trail)this.group.remove(c);this.held.delete(t)}else r.config.isPlayer||this.aiTimers.set(t,.8+Math.random()*2);this.use(o,r,e,n)}startTrail(t){t.trailing=!0;for(let e=t.trail.length;e<t.count;e++){let n=Gu(t.kind);n.scale.setScalar(.85),this.group.add(n),t.trail.push(n)}}ring(t,e,n,i,r){let o=new nt(new on(1,.25,8,32),new Ee({color:i,transparent:!0,opacity:.9}));o.rotation.x=Math.PI/2,o.position.set(t,e+.6,n),this.group.add(o),this.fx.push({mesh:o,life:.45,max:.45,grow:r})}boom(t,e,n){let i=new nt(new pe(1,16,12),new Ee({color:16747039,transparent:!0,opacity:.85}));i.position.set(t,e+1,n),this.group.add(i),this.fx.push({mesh:i,life:.6,max:.6,grow:8})}updateFx(t){for(let e=this.fx.length-1;e>=0;e--){let n=this.fx[e];n.life-=t;let i=1-n.life/n.max;n.mesh.scale.setScalar(.5+i*n.grow),n.mesh.material.opacity=.9*(1-i),n.life<=0&&(this.group.remove(n.mesh),this.fx.splice(e,1))}}explode(t,e){this.boom(t.x,t.y,t.z);for(let n of e){let i=n.position.x-t.x,r=n.position.z-t.z;i*i+r*r<64&&this.hit(n,t.owner,"bomb")}this.onEvent?.({type:"boom",racer:t.owner})}updateTrails(t){for(let[e,n]of this.held){if(!n.trailing)continue;let i=t.find(o=>o.config.id===e);if(!i)continue;let r=i.rotation.y;n.trail.forEach((o,a)=>{let c=1.9+a*1.1,l=Math.sin(performance.now()/120+a)*.15;o.position.set(i.position.x-Math.sin(r)*c+Math.cos(r)*l,i.position.y,i.position.z-Math.cos(r)*c-Math.sin(r)*l),o.rotation.y=r})}}shield(t){let e=this.held.get(t.config.id);if(!e||!e.trailing||e.count<=0)return!1;e.count--;let n=e.trail.pop();if(n&&this.group.remove(n),e.count<=0){for(let i of e.trail)this.group.remove(i);this.held.delete(t.config.id)}return this.onEvent?.({type:"block",racer:t.config.id}),!0}use(t,e,n,i){this.onEvent?.({type:"use",racer:e.config.id,item:t,aim:i});let r=e.rotation.y;if(t==="boost"){e.boostTimer=1.4,e.boostMultiplier=1.5,e.speed=Math.max(e.speed,e.config.topSpeed*1.2),e.config.isPlayer&&re.playBoostSound();return}if(t==="star"){e.starTimer=7,e.invulnerableTimer=7,e.boostTimer=7,e.boostMultiplier=1.15,e.config.isPlayer&&re.playBoostSound();return}if(t==="bolt"){for(let h of n)h===e||(h.starTimer||0)>0||(h.shrinkTimer=5,h.spinOutTimer=Math.max(h.spinOutTimer,.5),h.speed*=.5);this.onEvent?.({type:"bolt",racer:e.config.id});return}if(t==="coin"){e.coins=Math.min(10,(e.coins||0)+2),e.boostTimer=Math.max(e.boostTimer,.35),e.boostMultiplier=Math.max(e.boostMultiplier,1.15);return}if(t==="horn"){for(let h of n){if(h===e)continue;let d=h.position.x-e.position.x,p=h.position.z-e.position.z;d*d+p*p<90&&this.hit(h,e.config.id,"horn")}for(let h=this.thrown.length-1;h>=0;h--){let d=this.thrown[h],p=d.x-e.position.x,x=d.z-e.position.z;p*p+x*x<180&&(this.group.remove(d.mesh),this.thrown.splice(h,1))}this.ring(e.position.x,e.position.y,e.position.z,16777215,10),this.onEvent?.({type:"horn",racer:e.config.id});return}if(t==="ink"){for(let h of n)h.rank<e.rank&&!((h.starTimer||0)>0)&&(h.inkTimer=4.5,this.onEvent?.({type:"ink",racer:h.config.id,by:e.config.id}));return}if(t==="ride"){e.rideTimer=3.4,e.invulnerableTimer=Math.max(e.invulnerableTimer,3.6),e.boostTimer=3.4,e.boostMultiplier=1.6;return}if(t==="ghost"){e.ghostTimer=5,e.invulnerableTimer=Math.max(e.invulnerableTimer,5);let h=n.filter(p=>p.rank<e.rank&&this.held.get(p.config.id)?.kind),d=h[Math.floor(Math.random()*h.length)];if(d){let p=this.held.get(d.config.id);for(let g of p.trail)this.group.remove(g);this.held.delete(d.config.id);let x={kind:p.kind,rollLeft:0,shown:p.kind,count:p.count,trailing:!1,trail:[]};this.held.set(e.config.id,x),bl.includes(x.kind)&&x.count>1&&this.startTrail(x),e.config.isPlayer||this.aiTimers.set(e.config.id,1+Math.random()*2),this.onEvent?.({type:"steal",racer:d.config.id,by:e.config.id,item:x.kind})}return}let o=Gu(t);this.group.add(o);let a=t==="banana"||t==="fake",c=i?i==="back":a,l=a&&!c,u=c?-2.6:2.6,f={kind:t,owner:e.config.id,mesh:o,x:e.position.x+Math.sin(r)*u,y:e.position.y,z:e.position.z+Math.cos(r)*u,heading:c&&!a?r+Math.PI:r,speed:l?46:a?0:t==="bomb"?c?14:42:t==="green"?62:58,life:a?60:t==="bomb"?1.3:t==="green"?3.5:8,armed:.4,drag:l?1:void 0};if(t==="red"&&c)f.kind="green";else if(t==="red"){let h=n.filter(d=>d.rank===e.rank-1)[0];f.target=h?h.config.id:void 0,h||(f.kind="green")}if(t==="blue"){let h=n.filter(d=>d.rank===1&&d!==e)[0];f.target=h?h.config.id:void 0}this.thrown.push(f)}updateThrown(t,e,n){let i=this.track.roadWidth/2;for(let r=this.thrown.length-1;r>=0;r--){let o=this.thrown[r];if(o.life-=t,o.armed-=t,o.speed>0){if(o.target){let u=e.find(f=>f.config.id===o.target);if(u){let h=Math.atan2(u.position.x-o.x,u.position.z-o.z)-o.heading;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;let d=(o.kind==="blue"?5:3.2)*t;o.heading+=Math.max(-d,Math.min(d,h))}}else{let u=this.track.getClosestTrackPoint(o.x,o.z);if(u.distanceToCenter>i+2){let f=u.point,h=Math.atan2(f.x-o.x,f.z-o.z);o.heading+=Math.sign(Math.sin(h-o.heading))*3*t}}if(o.x+=Math.sin(o.heading)*o.speed*t,o.z+=Math.cos(o.heading)*o.speed*t,o.kind==="red")o.mesh.rotation.y=o.heading;else if(o.kind==="green"){o.mesh.rotation.y=o.heading;let u=o.mesh.getObjectByName("body");if(u){let f=Math.abs(Math.sin(n*9));u.position.y=.5+f*.35,u.scale.set(1+(1-f)*.15,1-(1-f)*.15,1+(1-f)*.15)}}else o.mesh.rotation.y+=t*3;let l=o.mesh.getObjectByName("flame");l&&l.scale.setScalar(.8+Math.random()*.4)}let a=this.track.getClosestTrackPoint(o.x,o.z).point.y;o.y=De.lerp(o.y,a+(o.kind==="blue"?1.4:.1),t*10),o.mesh.position.set(o.x,o.y,o.z),o.kind==="bomb"&&o.speed>0&&(o.speed=Math.max(0,o.speed-30*t)),o.drag&&o.speed>0&&(o.speed=Math.max(0,o.speed-55*t),o.speed===0&&(o.mesh.rotation.y=o.heading));let c=o.life<=0;if(c&&o.kind==="bomb"&&this.explode(o,e),!c)for(let l of e){if(l.config.id===o.owner&&o.armed>0)continue;let u=l.position.x-o.x,f=l.position.z-o.z,h=o.kind==="blue"&&l.config.id===o.target?2.6:1.7;if(u*u+f*f<h*h){if(o.kind==="blue"&&o.target&&l.config.id!==o.target)continue;if(o.kind==="bomb"){this.explode(o,e),c=!0;break}if(o.kind!=="blue"&&l.config.id!==o.owner&&this.shield(l)){c=!0;break}this.hit(l,o.owner,o.kind),c=!0;break}}c&&(this.group.remove(o.mesh),this.thrown.splice(r,1))}}hit(t,e,n){t.invulnerableTimer>0||(t.starTimer||0)>0||(t.ghostTimer||0)>0||(t.rideTimer||0)>0||(t.coins=Math.max(0,(t.coins||0)-3),t.spinOutTimer=n==="blue"?1.8:1.1,t.invulnerableTimer=2.2,t.boostTimer=0,t.boostMultiplier=1,t.isDrifting=!1,this.onEvent?.({type:"hit",racer:t.config.id,by:e,item:n}),t.config.isPlayer&&re.playCollisionSound(1))}};var Ix=[0,2,4,5,7,9,11],Wu=[0,2,3,5,7,8,10],Lx=[0,2,4,5,7,9,10],Xu=["k.h.s.h.k.k.s.h.","k.h.s.h.k.hks.ho"],Ml=["k.h.k.h.k.h.k.ho","k.hsk.h.k.hsk.hs"],Dx=["k...h...s...h...","k...h.k.s...h.hh"],qu=["k..h.hs..h.hk.hh","k..h.hs..hkhs.ho"],Sl={meadow:{bpm:140,root:60,scale:Ix,lead:"square",verse:{chords:[1,5,6,4],leadOct:1,arp:!0,pad:!0,bass:"R.R.5.R.R.8.5.R.",lead:"1-3-5-3-6-5-3---2-4-6-4-5---3---1-3-5-a-6-5-3-2-1-------5-------",drums:Xu},chorus:{chords:[4,5,3,6],leadOct:1,arp:!0,pad:!0,bass:"R.8.R.8.R.8.5.8.",lead:"a---b-a-6-5-6---5---6-5-3-2-3---6-5-6-a-b-a-6-5-a-------6---5---",drums:Ml}},sunset:{bpm:118,root:62,scale:Lx,swing:.14,lead:"triangle",verse:{chords:[1,7,4,1],leadOct:1,arp:!1,pad:!0,bass:"R..R..5.R..8..5.",lead:"5--3--1-2-3-----4--3--2-1-2-----5--6--b-a-6-----5-------3-------",drums:qu},chorus:{chords:[4,1,7,5],leadOct:1,arp:!0,pad:!0,bass:"R..R..5.R..R..8.",lead:"a--b--a-6-5-6---b--a--6-5-3-----a--b--c-b-a-6---5-------a-------",drums:qu}},frosty:{bpm:150,root:57,scale:Wu,lead:"triangle",verse:{chords:[1,6,4,5],leadOct:1,arp:!0,pad:!1,bass:"R.R.R.R.5.5.R.R.",lead:"1-5-a-5-3-5-a-5-6-a-c-a-5-a-c-a-4-6-b-6-3-5-a-5-7-2-5-2-7-------",drums:Xu},chorus:{chords:[6,7,3,5],leadOct:1,arp:!0,pad:!0,bass:"R.8.R.8.5.8.R.8.",lead:"a---c---b-a-5---6---a---c-b-a---b---a---6-5-4---5---7---b-------",drums:Ml}},neon:{bpm:112,root:52,scale:Wu,lead:"sawtooth",verse:{chords:[1,6,3,7],leadOct:1,arp:!0,pad:!0,bass:"R.RR.RR.R.RR.R8.",lead:"1-------5---3---4-------3---2---1-------7---5---6-------5-------",drums:Dx},chorus:{chords:[6,4,1,5],leadOct:1,arp:!0,pad:!0,bass:"R.RR.RR.R.RR.R8.",lead:"a---b---c---b---a---6---5---6---a---b---c---e---d-------b-------",drums:Ml}}},ps=s=>440*Math.pow(2,(s-69)/12),El=class{constructor(t){J(this,"song");J(this,"ctx",null);J(this,"bus",null);J(this,"fxSend",null);J(this,"timer",null);J(this,"step",0);J(this,"nextAt",0);J(this,"tempo",1);J(this,"noise",null);this.song=Sl[t]||Sl.meadow}start(){let t=re.output();if(!t||this.timer)return;let e=this.ctx=t.ctx;this.bus=e.createGain(),this.bus.gain.value=.55,this.bus.connect(t.out),this.fxSend=e.createGain(),this.fxSend.gain.value=.35;let n=e.createDelay(1);n.delayTime.value=60/this.song.bpm*.75;let i=e.createGain();i.gain.value=.32;let r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=2600,this.fxSend.connect(n),n.connect(r),r.connect(i),i.connect(n),r.connect(this.bus);let o=e.createConvolver(),a=e.sampleRate*1.4,c=e.createBuffer(2,a,e.sampleRate);for(let h=0;h<2;h++){let d=c.getChannelData(h);for(let p=0;p<a;p++)d[p]=(Math.random()*2-1)*Math.pow(1-p/a,2.6)}o.buffer=c;let l=e.createGain();l.gain.value=.5,this.fxSend.connect(o),o.connect(l),l.connect(this.bus);let u=e.createBuffer(1,e.sampleRate*.4,e.sampleRate),f=u.getChannelData(0);for(let h=0;h<f.length;h++)f[h]=Math.random()*2-1;this.noise=u,this.nextAt=e.currentTime+.1,this.timer=setInterval(()=>this.pump(),25)}finalLap(){if(!this.ctx||!this.bus)return;let t=this.ctx.currentTime+.05;[0,4,7,12,16].forEach((e,n)=>this.voice(ps(this.song.root+12+e),t+n*.08,.16,"square",.12,!0)),this.tempo=1.15,this.step=128}stop(){if(clearInterval(this.timer),this.timer=null,this.bus&&this.ctx){let t=this.bus;t.gain.setTargetAtTime(0,this.ctx.currentTime,.25),setTimeout(()=>t.disconnect(),1500)}this.bus=null}pump(){if(!this.ctx)return;let t=60/(this.song.bpm*this.tempo)/4;for(;this.nextAt<this.ctx.currentTime+.15;){let e=this.song.swing&&this.step%2?t*this.song.swing:0;this.playStep(this.step,this.nextAt+e,t),this.nextAt+=t,this.step=(this.step+1)%256}}deg(t,e=0){let n=this.song.scale,i=t-1;return this.song.root+n[(i%7+7)%7]+12*(Math.floor(i/7)+e)}playStep(t,e,n){let i=t>=128,r=i?this.song.chorus:this.song.verse,o=t%128,a=Math.floor(o/16),c=o%16,l=r.chords[a%r.chords.length],u=[this.deg(l),this.deg(l+2),this.deg(l+4)],h=r.drums[a%4===3?1:0][c];h==="k"&&this.kick(e),h==="s"&&this.snare(e),h==="h"&&this.hat(e,!1),h==="o"&&this.hat(e,!0),i&&c%4===2&&h!=="s"&&this.hat(e,!1);let d=r.bass[c];d&&d!=="."&&this.bassNote(ps(u[0]-24+(d==="5"?7:d==="8"?12:0)),e,n*1.6),r.pad&&c===0&&u.forEach((x,g)=>this.pad(ps(x+0),e,n*16)),r.arp&&c%2===0&&this.voice(ps(u[c/2%3]+12),e,n*1.2,"square",.035,!1);let p=r.lead[o%64];if(p&&p!=="."&&p!=="-"){let x=1;for(;r.lead[(o+x)%64]==="-"&&x<16;)x++;let g=p>="a"&&p<="g",m=g?p.charCodeAt(0)-96:Number(p);this.lead(ps(this.deg(m,r.leadOct+(g?1:0))),e,n*x*.95,i)}}env(t,e,n,i,r){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(i,e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+Math.max(n+.02,r))}voice(t,e,n,i,r,o){let a=this.ctx,c=a.createOscillator(),l=a.createGain();c.type=i,c.frequency.value=t,this.env(l,e,.005,r,n),c.connect(l),l.connect(this.bus),o&&l.connect(this.fxSend),c.start(e),c.stop(e+n+.05)}lead(t,e,n,i){let r=this.ctx,o=r.createGain(),a=r.createBiquadFilter();a.type="lowpass",a.frequency.value=i?3800:2400,a.Q.value=2;let c=r.createOscillator(),l=r.createGain();c.frequency.value=5.5,l.gain.value=t*.006,c.connect(l);for(let u of[-6,6]){let f=r.createOscillator();f.type=this.song.lead,f.frequency.value=t,f.detune.value=u,l.connect(f.frequency),f.connect(a),f.start(e),f.stop(e+n+.1)}c.start(e),c.stop(e+n+.1),this.env(o,e,.015,this.song.lead==="sawtooth"?.07:.1,n),a.connect(o),o.connect(this.bus),o.connect(this.fxSend)}bassNote(t,e,n){let i=this.ctx,r=i.createOscillator(),o=i.createGain(),a=i.createBiquadFilter();r.type="sawtooth",r.frequency.value=t,a.type="lowpass",a.Q.value=6,a.frequency.setValueAtTime(1200,e),a.frequency.exponentialRampToValueAtTime(220,e+n),this.env(o,e,.005,.22,n),r.connect(a).connect(o).connect(this.bus),r.start(e),r.stop(e+n+.05)}pad(t,e,n){let i=this.ctx,r=i.createGain(),o=i.createBiquadFilter();o.type="lowpass",o.frequency.value=1100;for(let a of[-9,9]){let c=i.createOscillator();c.type="sawtooth",c.frequency.value=t,c.detune.value=a,c.connect(o),c.start(e),c.stop(e+n+.3)}r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.025,e+.25),r.gain.setValueAtTime(.025,e+n*.8),r.gain.linearRampToValueAtTime(1e-4,e+n+.25),o.connect(r),r.connect(this.bus),r.connect(this.fxSend)}kick(t){let e=this.ctx,n=e.createOscillator(),i=e.createGain();n.frequency.setValueAtTime(150,t),n.frequency.exponentialRampToValueAtTime(42,t+.14),this.env(i,t,.002,.7,.22),n.connect(i).connect(this.bus),n.start(t),n.stop(t+.25),this.noiseHit(t,.015,.12,3e3,"highpass")}noiseHit(t,e,n,i,r,o=!1){let a=this.ctx,c=a.createBufferSource(),l=a.createBiquadFilter(),u=a.createGain();c.buffer=this.noise,l.type=r,l.frequency.value=i,this.env(u,t,.002,n,e),c.connect(l).connect(u),u.connect(this.bus),o&&u.connect(this.fxSend),c.start(t),c.stop(t+e+.02)}snare(t){this.noiseHit(t,.18,.3,1700,"bandpass",!0);let e=this.ctx,n=e.createOscillator(),i=e.createGain();n.type="triangle",n.frequency.setValueAtTime(220,t),n.frequency.exponentialRampToValueAtTime(140,t+.08),this.env(i,t,.002,.18,.1),n.connect(i).connect(this.bus),n.start(t),n.stop(t+.12)}hat(t,e){this.noiseHit(t,e?.22:.045,e?.08:.06,8e3,"highpass")}},Nx="https://cdn.jsdelivr.net/gh/bryanw121/couchparty@main/audio/",Er={};function Yu(s,t){return Er[t]||(Er[t]=fetch(Nx+t+".mp3").then(e=>{if(!e.ok)throw new Error("http "+e.status);return e.arrayBuffer()}).then(e=>new Promise((n,i)=>s.decodeAudioData(e,n,i))),Er[t].catch(()=>delete Er[t])),Er[t]}function Zu(s){let t=re.output();t&&Yu(t.ctx,"kart-"+s).catch(()=>{})}var Oa=class{constructor(t){J(this,"course");J(this,"ctx",null);J(this,"gain",null);J(this,"src",null);J(this,"synth",null);J(this,"stopped",!1);J(this,"fast",!1);this.course=Sl[t]?t:"meadow"}start(){let t=re.output();if(!t)return;this.ctx=t.ctx,this.gain=t.ctx.createGain(),this.gain.gain.value=.42,this.gain.connect(t.out);let e=setTimeout(()=>this.useSynth(),6e3);Yu(t.ctx,"kart-"+this.course).then(n=>{if(clearTimeout(e),this.stopped||this.synth||!this.ctx||!this.gain)return;let i=this.ctx.createBufferSource();i.buffer=n,i.loop=!0,this.fast&&(i.playbackRate.value=1.12),i.connect(this.gain),this.gain.gain.setValueAtTime(0,this.ctx.currentTime),this.gain.gain.linearRampToValueAtTime(.42,this.ctx.currentTime+.6),i.start(),this.src=i}).catch(()=>{clearTimeout(e),this.useSynth()})}useSynth(){this.stopped||this.src||this.synth||(this.synth=new El(this.course),this.synth.start(),this.fast&&this.synth.finalLap())}finalLap(){if(this.fast=!0,this.synth){this.synth.finalLap();return}if(!this.ctx||!this.src||!this.gain)return;let t=this.ctx,e=t.currentTime;this.gain.gain.setValueAtTime(.42,e),this.gain.gain.linearRampToValueAtTime(.12,e+.15),[0,4,7,12,16].forEach((n,i)=>{let r=t.createOscillator(),o=t.createGain();r.type="square",r.frequency.value=ps(72+n),o.gain.setValueAtTime(1e-4,e+i*.09),o.gain.linearRampToValueAtTime(.1,e+i*.09+.01),o.gain.exponentialRampToValueAtTime(1e-4,e+i*.09+(i===4?.5:.14)),r.connect(o).connect(re.output().out),r.start(e+i*.09),r.stop(e+i*.09+.6)}),this.src.playbackRate.setValueAtTime(1,e+.7),this.src.playbackRate.linearRampToValueAtTime(1.12,e+1.2),this.gain.gain.linearRampToValueAtTime(.46,e+1.2)}stop(){if(this.stopped=!0,this.synth?.stop(),this.gain&&this.ctx){let t=this.gain,e=this.src;t.gain.setTargetAtTime(0,this.ctx.currentTime,.25),setTimeout(()=>{try{e?.stop()}catch{}t.disconnect()},1500)}this.gain=null,this.src=null}};function Tl(){let s=new Uint8Array([90,170,255]),t=new es(s,s.length,1,ar);return t.minFilter=Ce,t.magFilter=Ce,t.generateMipmaps=!1,t.needsUpdate=!0,t}function wl(s,t,e=new Map){s.traverse(n=>{let i=n;if(!i.isMesh||!i.material)return;let r=o=>{if(o.userData.preserveShading)return o;let a=o;if(!a.isMeshStandardMaterial)return o;let c=e.get(o);return c||(c=new Js({color:a.color.clone().offsetHSL(0,.12,.02),map:a.map,emissive:a.emissive.clone(),emissiveIntensity:a.emissiveIntensity,transparent:a.transparent,opacity:a.opacity,side:a.side,polygonOffset:a.polygonOffset,polygonOffsetFactor:a.polygonOffsetFactor,gradientMap:t}),e.set(o,c)),c};i.material=Array.isArray(i.material)?i.material.map(r):r(i.material)})}function Ux(s){let t=new pe(520,32,16),e=new Ut(s.skyTop),n=new Ut(s.skyMid),i=new Ut(s.skyLow),r=[],o=t.attributes.position;for(let l=0;l<o.count;l++){let u=o.getY(l)/520,f=u>.25?n.clone().lerp(e,Math.min(1,(u-.25)/.6)):i.clone().lerp(n,Math.max(0,(u+.05)/.3));r.push(f.r,f.g,f.b)}t.setAttribute("color",new Xt(r,3));let a=new Ee({vertexColors:!0,side:Ve,fog:!1,depthWrite:!1}),c=new nt(t,a);return c.renderOrder=-1,c}function Fx(s){let t=new ie,e=new Ee({color:s,fog:!1}),n=4+Math.floor(Math.random()*3);for(let i=0;i<n;i++){let r=6+Math.random()*6,o=new nt(new pe(r,10,8),e);o.position.set((i-n/2)*8+Math.random()*4,Math.random()*4,Math.random()*6),o.scale.y=.7,t.add(o)}return t}function Ox(s,t){let e=new ie,n=new nt(new ue(.35,.55,3,8),new Dt({color:t.trunk}));n.position.y=1.5,e.add(n);let i=t.trees[Math.floor(Math.random()*t.trees.length)],r=new Dt({color:i,roughness:.8,emissive:t.glow?i:0,emissiveIntensity:t.glow?.55:0}),o=[[0,4.4,0,2.4],[1.3,3.8,.3,1.6],[-1.2,3.9,-.2,1.7],[.2,5.6,.2,1.6]];for(let[a,c,l,u]of o){let f=new nt(new Ys(u,1),r);f.position.set(a,c,l),e.add(f)}return e.scale.setScalar(s),e}function Bx(s){let t=document.createElement("canvas");t.width=128,t.height=256;let e=t.getContext("2d");e.fillStyle=s,e.fillRect(0,0,128,256),e.fillStyle="#ffe14d";for(let i=0;i<3;i++){let r=40+i*70;e.beginPath(),e.moveTo(14,r+50),e.lineTo(64,r),e.lineTo(114,r+50),e.lineTo(114,r+74),e.lineTo(64,r+24),e.lineTo(14,r+74),e.closePath(),e.fill()}let n=new Ie(t);return n.colorSpace=Ne,n}function Ju(s,t){let e=t.course.theme;s.background=new Ut(e.skyMid),s.fog=new Ps(e.fog,140,480),s.add(Ux(e));let n=[];for(let l=0;l<14;l++){let u=Fx(e.clouds),f=l/14*Math.PI*2,h=260+Math.random()*120;u.position.set(Math.cos(f)*h,70+Math.random()*50,Math.sin(f)*h),u.lookAt(0,u.position.y,0),s.add(u),n.push(u)}let i=[];t.sceneryGroup.children.forEach(l=>{let u=l;u.isGroup&&u.children.length===4&&u.children[1].geometry instanceof Le&&i.push(u)});let r=(l,u)=>{let f=1e9;for(let d=0;d<t.trackPoints.length;d+=3){let p=t.trackPoints[d],x=(p.x-l)**2+(p.z-u)**2;x<f&&(f=x)}if(Math.sqrt(f)<t.roadWidth*.5+9)return!0;let h=t.shortcut;if(h){let d=h.bx-h.ax,p=h.bz-h.az,x=d*d+p*p||1,g=Math.max(0,Math.min(1,((l-h.ax)*d+(u-h.az)*p)/x));if(Math.hypot(l-(h.ax+d*g),u-(h.az+p*g))<h.w/2+6)return!0}return!1};for(let l of i){if(t.sceneryGroup.remove(l),r(l.position.x,l.position.z))continue;let u=Ox(l.scale.x*(.75+Math.random()*.35),e);u.position.copy(l.position),u.rotation.y=Math.random()*Math.PI,t.sceneryGroup.add(u)}t.sceneryGroup.traverse(l=>{let u=l.material;!u||!u.isMeshStandardMaterial||u.color.getHex()===5078031&&(u.color.setHex(e.ground),u.flatShading=!1,u.needsUpdate=!0)});let o=[],a=new Ee({map:Bx(e.padColor),transparent:!0,opacity:.95,polygonOffset:!0,polygonOffsetFactor:-3}),c=t.trackPoints;for(let l of[.06,.3,.55,.8]){let u=Math.floor(l*c.length)%c.length,f=c[u],h=Math.atan2(f.tangentX,f.tangentZ);for(let d of[-.22,.22]){let p=f.x+f.normalX*d*t.roadWidth,x=f.z+f.normalZ*d*t.roadWidth,g=new nt(new Ge(3.4,6),a);g.rotation.x=-Math.PI/2,g.rotation.z=h+Math.PI,g.position.set(p,f.y+.12,x),t.sceneryGroup.add(g),o.push({x:p,z:x,heading:h,mesh:g})}}return wl(s,Tl()),{pads:o,update:l=>{for(let u=0;u<n.length;u++)n[u].position.y+=Math.sin(l*.3+u)*.01;a.opacity=.75+Math.sin(l*8)*.2}}}function Ku(){let s=document.createElement("canvas");s.width=s.height=64;let t=s.getContext("2d"),e=t.createRadialGradient(32,32,4,32,32,32);e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);let n=new nt(new Ge(2.6,3.4),new Ee({map:new Ie(s),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));return n.rotation.x=-Math.PI/2,n}var kx=[{id:"tabby",name:"Tabby",color:"#FF9F43",accent:"#fff3d6",topper:"cat",spd:3,acc:4,hnd:4},{id:"bunbun",name:"Bun Bun",color:"#FF7AC6",accent:"#fdf2f8",topper:"bunny",spd:2,acc:5,hnd:5},{id:"duke",name:"Duke",color:"#9B6BFF",accent:"#fcd34d",topper:"crown",spd:5,acc:2,hnd:3},{id:"rex",name:"Rex",color:"#3DDC84",accent:"#ecfdf5",topper:"horns",spd:5,acc:3,hnd:2},{id:"lulu",name:"Lulu",color:"#FF5D8F",accent:"#ffe4ec",topper:"bow",spd:3,acc:5,hnd:4},{id:"zippy",name:"Zippy",color:"#4CC9F0",accent:"#f0f9ff",topper:"antenna",spd:4,acc:4,hnd:3},{id:"ace",name:"Ace",color:"#FFC83D",accent:"#fff7d6",topper:"cap",spd:4,acc:3,hnd:4},{id:"grizz",name:"Grizz",color:"#B07A4F",accent:"#f4f1e6",topper:"bear",spd:5,acc:2,hnd:2}],zx={chill:.8,fast:1,turbo:1.2};function $u(s,t,e,n){return{weight:s>=5?3:t>=5?1:2,topSpeed:(41.5+(s-3)*1.1)*n,acceleration:(30+(t-3)*2.6)*n,handling:(3.2+(e-3)*.18)*(n>1?1.08:1)}}var ju=["cap","cat","bunny","crown","horns","bow","antenna"],Hx=8,Gx={banana:'<svg viewBox="0 0 40 40"><path d="M7 12 C8 30 28 36 35 22 C25 25 15 22 12 9 Z" fill="#ffd93b" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><path d="M12 9 L10 4" stroke="#5a3a12" stroke-width="3" stroke-linecap="round"/><path d="M14 20 C18 26 24 28 30 26" fill="none" stroke="#fff6b0" stroke-width="2" stroke-linecap="round"/></svg>',green:'<svg viewBox="0 0 40 40"><ellipse cx="20" cy="36" rx="10" ry="2.5" fill="rgba(0,0,0,.35)"/><circle cx="20" cy="20" r="14" fill="#3ddc84" stroke="#1b1b3a" stroke-width="2.5"/><circle cx="14" cy="14" r="4" fill="#fff" opacity=".85"/><circle cx="16" cy="21" r="2.2" fill="#1b1b3a"/><circle cx="24" cy="21" r="2.2" fill="#1b1b3a"/><path d="M16 26 Q20 29 24 26" fill="none" stroke="#1b1b3a" stroke-width="2" stroke-linecap="round"/></svg>',red:'<svg viewBox="0 0 40 40"><g transform="rotate(45 20 20)"><path d="M20 3 C26 9 26 22 25 28 H15 C14 22 14 9 20 3 Z" fill="#ff3b3b" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><path d="M20 3 C23 6 24.5 9 25 12 H15 C15.5 9 17 6 20 3 Z" fill="#fff" stroke="#1b1b3a" stroke-width="2" stroke-linejoin="round"/><rect x="15" y="17" width="10" height="3" fill="#ffc83d"/><path d="M15 22 L10 30 L15 28 Z M25 22 L30 30 L25 28 Z" fill="#fff" stroke="#1b1b3a" stroke-width="2" stroke-linejoin="round"/><path d="M17 29 L20 37 L23 29 Z" fill="#ffa31a"/></g></svg>',blue:'<svg viewBox="0 0 40 40"><path d="M10 24 A6 6 0 0 1 11 13 A8 8 0 0 1 26 10 A7 7 0 0 1 31 24 Z" fill="#5b6bd6" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><path d="M15 17 L18 18.5 M25 17 L22 18.5" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/><path d="M21 24 L16 31 H20 L17 38 L25 28 H21 L23 24 Z" fill="#fff15a" stroke="#1b1b3a" stroke-width="1.5" stroke-linejoin="round"/></svg>',boost:'<svg viewBox="0 0 40 40"><rect x="12" y="8" width="16" height="24" rx="5" fill="#ff7a00" stroke="#1b1b3a" stroke-width="2.5"/><rect x="15" y="4" width="10" height="5" rx="2" fill="#c9d3e6" stroke="#1b1b3a" stroke-width="2"/><path d="M21 12 L15 21 H19 L17 28 L25 18 H21 Z" fill="#ffe14d" stroke="#1b1b3a" stroke-width="1.5" stroke-linejoin="round"/><path d="M15 33 L20 39 L25 33 Z" fill="#ffd34d"/></svg>',star:'<svg viewBox="0 0 40 40"><defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff7ac6"/><stop offset=".5" stop-color="#ffd34d"/><stop offset="1" stop-color="#5ee6c8"/></linearGradient></defs><path d="M20 3 L25 14.5 L37.5 15.5 L28 23.5 L31 36 L20 29.5 L9 36 L12 23.5 L2.5 15.5 L15 14.5 Z" fill="url(#sg)" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="34" cy="6" r="2" fill="#fff"/><circle cx="6" cy="31" r="1.5" fill="#fff"/></svg>',bolt:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="17" fill="#2b2f6b" stroke="#1b1b3a" stroke-width="2"/><path d="M24 4 L9 22 H18 L14 37 L31 16 H22 Z" fill="#fff15a" stroke="#1b1b3a" stroke-width="2" stroke-linejoin="round"/></svg>',fake:'<svg viewBox="0 0 40 40"><rect x="7" y="13" width="26" height="22" rx="3" fill="#ff5d8f" stroke="#1b1b3a" stroke-width="2.5"/><rect x="17.5" y="13" width="5" height="22" fill="#d62839"/><rect x="7" y="21" width="26" height="5" fill="#d62839"/><path d="M20 13 C14 4 8 9 14 13 M20 13 C26 4 32 9 26 13" fill="none" stroke="#d62839" stroke-width="3" stroke-linecap="round"/><text x="20" y="31" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="9" fill="#fff">!</text></svg>',coin:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="#ffc83d" stroke="#1b1b3a" stroke-width="2.5"/><circle cx="20" cy="20" r="10.5" fill="none" stroke="#e0a400" stroke-width="2"/><path d="M20 12 L22.4 17.2 L28 17.6 L23.8 21.2 L25.1 26.6 L20 23.7 L14.9 26.6 L16.2 21.2 L12 17.6 L17.6 17.2 Z" fill="#fff6c2"/></svg>',horn:'<svg viewBox="0 0 40 40"><path d="M6 17 h6 l12 -9 v24 l-12 -9 h-6 z" fill="#ff5d5d" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><rect x="9" y="23" width="4" height="8" rx="1.5" fill="#c9d3e6" stroke="#1b1b3a" stroke-width="2"/><path d="M29 14 Q33 20 29 26 M32.5 10 Q39 20 32.5 30" fill="none" stroke="#1b1b3a" stroke-width="2.5" stroke-linecap="round"/></svg>',bomb:'<svg viewBox="0 0 40 40"><circle cx="18" cy="24" r="12" fill="#23233a" stroke="#1b1b3a" stroke-width="2.5"/><rect x="15" y="9" width="7" height="5" rx="1.5" fill="#8a8fa8" stroke="#1b1b3a" stroke-width="2"/><path d="M20 9 Q22 4 27 5" fill="none" stroke="#c9a46a" stroke-width="2.5"/><path d="M29 2 l1.5 3 3 0.5 -2.3 2 0.6 3.2 -2.8 -1.6 -2.8 1.6 0.6 -3.2 -2.3 -2 3 -0.5 z" fill="#ffd34d"/><circle cx="13" cy="19" r="3" fill="#fff" opacity=".6"/></svg>',ink:'<svg viewBox="0 0 40 40"><path d="M20 6 C26 6 25 12 30 11 C36 10 36 17 32 19 C37 22 34 29 28 27 C28 33 22 36 18 31 C13 35 7 31 10 26 C4 25 4 18 9 17 C6 12 12 8 15 11 C15 7 17 6 20 6 Z" fill="#7b4cc9" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="34" cy="31" r="2.5" fill="#7b4cc9"/><circle cx="6" cy="9" r="2" fill="#7b4cc9"/><circle cx="16" cy="17" r="3" fill="#fff" opacity=".5"/></svg>',golden:'<svg viewBox="0 0 40 40"><rect x="12" y="8" width="16" height="24" rx="5" fill="#ffc83d" stroke="#1b1b3a" stroke-width="2.5"/><rect x="15" y="4" width="10" height="5" rx="2" fill="#fff1a8" stroke="#1b1b3a" stroke-width="2"/><path d="M21 12 L15 21 H19 L17 28 L25 18 H21 Z" fill="#fff" stroke="#1b1b3a" stroke-width="1.5" stroke-linejoin="round"/><path d="M33 8 l1 2.5 2.5 1 -2.5 1 -1 2.5 -1 -2.5 -2.5 -1 2.5 -1 z M7 26 l0.8 2 2 0.8 -2 0.8 -0.8 2 -0.8 -2 -2 -0.8 2 -0.8 z" fill="#fff"/><path d="M15 33 L20 39 L25 33 Z" fill="#ff7a00"/></svg>',ride:'<svg viewBox="0 0 40 40"><g transform="rotate(-35 20 20)"><path d="M20 3 C26 9 26 22 25 29 H15 C14 22 14 9 20 3 Z" fill="#f4f5fa" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="20" cy="15" r="3.5" fill="#4cc9f0" stroke="#1b1b3a" stroke-width="2"/><path d="M15 21 L9 30 L15 28 Z M25 21 L31 30 L25 28 Z" fill="#ff7a00" stroke="#1b1b3a" stroke-width="2" stroke-linejoin="round"/><path d="M16 30 L20 39 L24 30 Z" fill="#ffd34d"/></g></svg>',ghost:'<svg viewBox="0 0 40 40"><path d="M8 34 V18 C8 10 13 5 20 5 C27 5 32 10 32 18 V34 L28 31 L24 34 L20 31 L16 34 L12 31 Z" fill="#f4f5fa" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><ellipse cx="15.5" cy="17" rx="2.5" ry="3.5" fill="#1b1b3a"/><ellipse cx="24.5" cy="17" rx="2.5" ry="3.5" fill="#1b1b3a"/><ellipse cx="20" cy="25" rx="3" ry="2" fill="#1b1b3a"/></svg>'},Al={banana:["Banana","drop behind"],green:["Bouncer","fires straight"],red:["Homing rocket","chases next kart"],blue:["Leader zapper","hits 1st place"],boost:["Turbo","speed burst"],star:["Star power","unstoppable"],bolt:["Lightning","shrinks everyone"],fake:["Decoy box","fake item box"],coin:["Coins","more top speed"],horn:["Air horn","blast nearby"],bomb:["Bomb","throw \xB7 explodes"],ink:["Ink splat","blinds leaders"],golden:["Golden turbo","boost spam 7s"],ride:["Rocket ride","auto-drive fast"],ghost:["Ghost","steal an item"]};function Qu(s){return s+(s===1?"st":s===2?"nd":s===3?"rd":"th")}function Vx(s){if(s==null)return"--";let t=Math.floor(s/60),e=s-t*60;return t+":"+(e<10?"0":"")+e.toFixed(1)}var ka=class{constructor(t,e){J(this,"container",t);J(this,"opts",e);J(this,"renderer");J(this,"scene",new Is);J(this,"track");J(this,"particles",new Ia);J(this,"physics");J(this,"items",null);J(this,"racers",[]);J(this,"humans",[]);J(this,"overview");J(this,"overlay");J(this,"banner");J(this,"clock",new er(!1));J(this,"raf",0);J(this,"phase","intro");J(this,"introT",0);J(this,"countdown",0);J(this,"step",-1);J(this,"laps");J(this,"firstHumanFinishAt",-1);J(this,"elapsed",0);J(this,"disposed",!1);J(this,"finalLapMusic",!1);J(this,"music",null);J(this,"style");J(this,"gradient",Tl());J(this,"shadows",new Map);J(this,"padCooldown",new Map);J(this,"onResize",()=>{let t=this.container.clientWidth,e=this.container.clientHeight;this.renderer.setSize(t,e);let n=this.views();this.humans.forEach((i,r)=>{let o=n[r];i.human.cam.onResize(o.w,o.h),Object.assign(i.human.hud.style,{left:o.x+"px",top:e-o.y-o.h+"px",width:o.w+"px",height:o.h+"px"});let a=Math.round(Math.min(o.h*.36,o.w*.2,210)),c=Math.round(Math.min(o.w,o.h)*.03),l=this.humans.length>1?44:60;Object.assign(i.human.ink.style,{left:o.x+"px",top:e-o.y-o.h+"px",width:o.w+"px",height:o.h+"px"}),Object.assign(i.human.banner.style,{left:o.x+"px",width:o.w+"px",top:e-o.y-o.h+o.h*.26+"px",fontSize:Math.round(Math.min(o.h*.13,72))+"px"}),Object.assign(i.human.map.style,{width:a+"px",height:a+"px",left:o.x+c+"px",top:e-o.y-a-c-l+"px"})}),n[3]&&this.humans.length===3&&this.overview.onResize(n[3].w,n[3].h),this.banner.style.fontSize=(this.humans.length>2?80:120)+"px"});J(this,"loop",()=>{if(this.disposed)return;this.raf=requestAnimationFrame(this.loop);let t=Math.min(this.clock.getDelta(),.05);this.elapsed+=t,this.phase==="intro"?(this.update(t),this.introFrame(t)):this.phase==="replay"?this.replayFrame():this.phase==="podium"?this.podiumFrame(t):this.update(t),this.render()});J(this,"frames",[]);J(this,"winnerFrame",-1);J(this,"winnerId","");J(this,"finalOrder",[]);J(this,"cine",new ke(50,16/9,.1,1500));J(this,"replayAt",0);J(this,"confetti",[]);J(this,"labels",[]);J(this,"recTick",0);J(this,"podiumKarts",[]);J(this,"podiumCenter",new I);J(this,"podiumDir",{fx:0,fz:1});J(this,"mapBase",null);J(this,"mapXf",{cx:0,cz:0,k:1});(!e.autopilot||e.music)&&Zu(e.course||"meadow"),this.laps=e.laps||3;let n=Math.min(e.players.length,4)>1;this.renderer=new Aa({antialias:!n,powerPreference:"high-performance"}),this.renderer.setPixelRatio(e.quality==="high"?Math.min(window.devicePixelRatio,1.5):1),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.shadowMap.enabled=!n&&e.quality==="high",this.renderer.toneMapping=sr,this.renderer.toneMappingExposure=1.05,this.renderer.setScissorTest(!0),t.appendChild(this.renderer.domElement),this.renderer.domElement.style.display="block";let i=_r(e.course).theme;this.scene.add(new tr(16777215,i.ambient));let r=new Qs(i.sunColor,i.sun);r.position.set(100,150,80),r.castShadow=this.renderer.shadowMap.enabled,r.shadow.mapSize.set(1024,1024);let o=160;Object.assign(r.shadow.camera,{left:-o,right:o,top:o,bottom:-o,near:10,far:400}),this.scene.add(r),this.scene.add(new $s(i.hemiSky,i.ground,.55)),this.track=new Pa(this.scene,e.course),this.scene.add(this.particles.group),this.physics=new Na(this.track,this.particles),this.physics.totalLaps=this.laps,e.items!==!1&&(this.items=new Fa(this.scene,this.track),this.items.onEvent=c=>this.onItemEvent(c)),this.style=Ju(this.scene,this.track);let a=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());this.scene.traverse(c=>{let l=c.material;l&&l.map&&(l.map.anisotropy=a,l.map.needsUpdate=!0)}),this.overview=new Sr(1),this.overview.setView("topdown"),this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;pointer-events:none;font-family:Inter,Segoe UI,Roboto,sans-serif;color:#fff",t.style.position=t.style.position||"relative",t.appendChild(this.overlay),this.banner=document.createElement("div"),this.banner.style.cssText='position:absolute;left:50%;top:42%;transform:translate(-50%,-50%);font:900 120px/1 "Space Grotesk",Inter,sans-serif;text-shadow:0 6px 0 rgba(0,0,0,.35),0 0 30px rgba(0,0,0,.4);transition:transform .15s;white-space:nowrap',this.overlay.appendChild(this.banner),this.build(),window.addEventListener("resize",this.onResize)}build(){let t=this.opts.players.slice(0,4),e=[],n=zx[this.opts.speed||"fast"]||1;t.forEach((o,a)=>{let c=o.stats||{spd:3,acc:3,hnd:3};e.push({id:o.id,name:o.name,isPlayer:!0,audioLead:a===0,color:o.color,accentColor:"#ffffff",helmetColor:o.color,visorColor:"#0f172a",number:a+1,...$u(c.spd,c.acc,c.hnd,n),driftMultiplier:1.35,topper:o.topper||ju[a%ju.length]})});let i=new Set(t.map(o=>(o.driver||o.color).toLowerCase()));for(let o of this.opts.cpus===!1?[]:kx){if(e.length>=Hx)break;if(i.has(o.id)||i.has(o.color.toLowerCase()))continue;let a=$u(o.spd,o.acc,o.hnd,n);e.push({id:"cpu-"+o.id,name:o.name,isPlayer:!1,color:o.color,accentColor:o.accent,helmetColor:o.color,visorColor:"#0f172a",number:e.length+1,topSpeed:a.topSpeed*(.95+Math.random()*.04),acceleration:a.acceleration*.95,handling:a.handling,weight:a.weight,driftMultiplier:1.3,aiAggression:.9+Math.random()*.3,topper:o.topper})}e.filter(o=>!o.isPlayer).concat(e.filter(o=>o.isPlayer)).forEach((o,a)=>{let c=Bu(o);c.driverHead.scale.setScalar(1.18),wl(c.rootGroup,this.gradient),this.scene.add(c.rootGroup);let l=Ku();this.scene.add(l),this.shadows.set(o.id,l);let u={config:o,position:{x:a%2?3.5:-3.5,y:.1,z:-6-a*5.5},rotation:{y:Math.PI,pitch:0,roll:0},speed:0,angularVelocity:0,steerAngle:0,isDrifting:!1,driftDirection:0,driftTime:0,driftLevel:0,boostTimer:0,boostMultiplier:1,currentLap:1,lapDistance:0,totalDistance:0,splineProgress:0,checkpointIndex:0,lapTimes:[],currentLapTime:0,bestLapTime:null,totalRaceTime:0,rank:a+1,isFinished:!1,invulnerableTimer:0,spinOutTimer:0,shrinkTimer:0,starTimer:0},f={state:u,handles:c};if(o.isPlayer){let h=document.createElement("div");h.style.cssText="position:absolute;box-sizing:border-box;padding:2.2vh 2vw;display:flex;flex-direction:column;justify-content:space-between",this.overlay.appendChild(h);let d=document.createElement("canvas");d.width=d.height=256,d.style.cssText="position:absolute;pointer-events:none;filter:drop-shadow(0 4px 8px rgba(0,0,0,.45))",this.overlay.appendChild(d);let p=document.createElement("div");p.style.cssText="position:absolute;pointer-events:none;opacity:0;overflow:hidden",this.overlay.appendChild(p);let x=document.createElement("div");x.style.cssText='position:absolute;pointer-events:none;text-align:center;font:italic 900 64px/1 "Space Grotesk",Inter,sans-serif;color:#fff;-webkit-text-stroke:5px #1b1b3a;paint-order:stroke fill;opacity:0;white-space:nowrap',this.overlay.appendChild(x),f.human={idx:this.humans.length,cam:new Sr(1),pad:{steer:0,gas:!1,brake:!1,drift:!1,item:!1},itemWas:!1,gasAt:-1,hud:h,map:d,banner:x,ink:p,finishedShown:!1},this.humans.push(f)}else f.ai=new Di(this.track,u);this.racers.push(f)}),this.onResize()}setInput(t,e){let n=this.humans.find(i=>i.state.config.id===t);!n||!n.human||(e.gas&&!n.human.pad.gas&&(n.human.gasAt=this.countdown),Object.assign(n.human.pad,e))}hudInfo(){return this.humans.map(t=>{let e=this.items?this.items.held.get(t.state.config.id):void 0;return{p:t.state.config.id,rank:t.state.rank,of:this.racers.length,lap:Math.min(t.state.currentLap,this.laps),item:e?e.kind||"rolling":null,n:e&&e.kind?e.count:0,done:t.state.isFinished}})}start(){re.init(),this.clock.start(),this.loop()}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),re.stopEngine(),this.music?.stop(),window.removeEventListener("resize",this.onResize),this.renderer.dispose(),this.container.innerHTML=""}views(){let t=this.container.clientWidth,e=this.container.clientHeight,n=this.humans.length;return n<=1?[{x:0,y:0,w:t,h:e}]:n===2?[{x:0,y:e/2,w:t,h:e/2},{x:0,y:0,w:t,h:e/2}]:[{x:0,y:e/2,w:t/2,h:e/2},{x:t/2,y:e/2,w:t/2,h:e/2},{x:0,y:0,w:t/2,h:e/2},{x:t/2,y:0,w:t/2,h:e/2}]}update(t){this.track.update(this.elapsed,t),this.tickCountdown(t);let e=this.racers.map(o=>o.state),n=new Set,i={throttle:!1,brake:!1,steerLeft:!1,steerRight:!1,drift:!1,respawn:!1,cameraToggle:!1};for(let o of this.racers){let a=i;if(this.phase!=="countdown"&&this.phase!=="intro")if((o.state.rideTimer||0)>0)o.ai||(o.ai=new Di(this.track,o.state)),a=o.ai.update(t,e);else if(o.human&&this.opts.autopilot)o.ai||(o.ai=new Di(this.track,o.state)),a=o.ai.update(t,e);else if(o.human){let l=o.human.pad;o.state.isFinished?a=o.ai?o.ai.update(t,e):{...i,throttle:!0}:a={throttle:l.gas,brake:l.brake,steerLeft:!1,steerRight:!1,steer:l.steer,drift:l.drift,respawn:!1,cameraToggle:!1},this.items&&this.phase==="racing"&&(l.item&&!o.human.itemWas&&this.items.press(o.state.config.id,e,l.aim),!l.item&&o.human.itemWas&&this.items.release(o.state.config.id,e,l.aim)),o.human.itemWas=l.item}else o.ai&&(a=o.ai.update(t,e),(o.state.inkTimer||0)>0&&(a={...a,steer:(a.steer||0)+Math.sin(this.elapsed*3+o.state.position.x)*.5}));let c=o.state.currentLap;if(this.physics.updateRacer(o.state,a,o.handles,t,e),o.state.starTimer&&o.state.starTimer>0){let l=this.elapsed*2%1;o.handles.bodyGroup.traverse(u=>{let f=u.material;f&&f.emissive&&f.emissive.setHSL(l,1,.45)})}else o.state.starTimer!==void 0&&o.state.starTimer<=0&&o.state.starTimer>-1&&(o.handles.bodyGroup.traverse(l=>{let u=l.material;u&&u.emissive&&u.emissive.setRGB(0,0,0)}),o.state.starTimer=-1);this.phase==="racing"&&!o.state.isFinished&&(o.state.currentLapTime+=t,o.state.totalRaceTime+=t,o.state.currentLap!==c&&o.state.currentLap<=this.laps&&(this.opts.onEvent?.({type:"lap",racer:o.state.config.id,lap:o.state.currentLap,final:o.state.currentLap===this.laps}),o.human&&this.say(o,o.state.currentLap===this.laps?"FINAL LAP!":"LAP "+o.state.currentLap,o.state.currentLap===this.laps?"#ffc83d":"#ffffff",1500),o.human&&o.state.currentLap===this.laps&&!this.finalLapMusic&&(this.finalLapMusic=!0,this.music?.finalLap())),o.state.currentLap>this.laps&&(o.state.isFinished=!0,o.state.finishRank=this.racers.filter(l=>l.state.isFinished).length,o.state.finishRank===1&&(this.winnerFrame=this.frames.length,this.winnerId=o.state.config.id),o.human&&(o.ai||(o.ai=new Di(this.track,o.state)),this.firstHumanFinishAt<0&&(this.firstHumanFinishAt=this.elapsed),this.opts.onEvent?.({type:"finish",racer:o.state.config.id,rank:o.state.finishRank}),this.say(o,o.state.finishRank===1?"1ST PLACE!":"FINISH!",o.state.finishRank===1?"#ffc83d":"#ffffff",2200),re.playFinishFanfare())))}let r=[...this.racers].sort((o,a)=>{let c=o.state.finishRank||99,l=a.state.finishRank||99;return c!==l?c-l:a.state.totalDistance-o.state.totalDistance});r.forEach((o,a)=>{o.state.rank=a+1}),this.phase==="racing"&&(this.detectMoments(),this.record()),this.items&&this.phase!=="countdown"&&this.phase!=="intro"&&this.items.update(t,this.elapsed,e,n,(o,a)=>{let c=this.racers.find(l=>l.state.config.id===o);c&&c.handles.rootGroup.scale.setScalar(De.lerp(c.handles.rootGroup.scale.x,a,t*6))}),this.style.update(this.elapsed);for(let o of this.racers){let a=(o.state.ghostTimer||0)>0;if(a!==!!o.handles.rootGroup.userData.ghost&&(o.handles.rootGroup.userData.ghost=a,o.handles.rootGroup.traverse(u=>{let f=u.material;f&&(f.transparent=a||f.transparent,f.opacity=a?.25:1)})),o.human){let u=(o.state.inkTimer||0)>0,f=o.human.ink;u&&f.style.opacity!=="1"?(f.innerHTML=Xx(),f.style.transition="opacity .1s",f.style.opacity="1",qx(f)):!u&&f.style.opacity==="1"&&(f.style.transition="opacity .9s",f.style.opacity="0")}let c=this.shadows.get(o.state.config.id);c&&(c.position.set(o.state.position.x,o.state.position.y+.06,o.state.position.z),c.rotation.z=o.state.rotation.y,c.scale.setScalar(o.handles.rootGroup.scale.x));let l=(this.padCooldown.get(o.state.config.id)||0)-t;if(this.padCooldown.set(o.state.config.id,l),l<=0&&this.phase==="racing")for(let u of this.style.pads){let f=o.state.position.x-u.x,h=o.state.position.z-u.z;if(f*f+h*h<7){o.state.boostTimer=Math.max(o.state.boostTimer,1.1),o.state.boostMultiplier=Math.max(o.state.boostMultiplier,1.45),o.state.speed=Math.max(o.state.speed,o.state.config.topSpeed*1.15),this.padCooldown.set(o.state.config.id,.8),o.human&&o.state.config.audioLead&&re.playBoostSound();break}}}this.particles.update(t);for(let o of this.humans)o.human.cam.update(o.state,t);this.humans.length===3&&this.overview.update(r[0].state,t),this.drawHud(),this.drawMaps(),this.phase==="racing"&&(this.humans.every(a=>a.state.isFinished)||this.firstHumanFinishAt>=0&&this.elapsed-this.firstHumanFinishAt>25)&&this.finish(r)}introFrame(t){if(this.introT===0){this.hideHud(!0);let d=_r(this.opts.course);this.banner.innerHTML='<div style="font-size:.85em">'+Ba(d.name.toUpperCase())+'</div><div style="font-size:.35em;letter-spacing:.08em;color:#ffc83d;margin-top:.3em">'+this.laps+" LAPS \xB7 "+this.racers.length+" KARTS</div>",this.banner.style.color="#ffffff",this.banner.style.top="18%"}this.introT+=t;let n=this.track.trackPoints,i=1e9,r=-1e9,o=1e9,a=-1e9;for(let d of n)i=Math.min(i,d.x),r=Math.max(r,d.x),o=Math.min(o,d.z),a=Math.max(a,d.z);let c=(i+r)/2,l=(o+a)/2,u=Math.max(r-i,a-o)*.75,f=Math.min(1,this.introT/5.5),h=this.humans[0]||this.racers[0];if(f<.75){let d=f/.75,p=-Math.PI/2+d*Math.PI*1.1;this.cine.position.set(c+Math.cos(p)*u,150-d*70,l+Math.sin(p)*u),this.cine.lookAt(c,0,l)}else{let d=(f-.75)/.25,p=d*d*(3-2*d),x=h.state,g=x.rotation.y,m=new I(c+Math.cos(-Math.PI/2+Math.PI*1.1)*u,80,l+Math.sin(-Math.PI/2+Math.PI*1.1)*u),b=new I(x.position.x-Math.sin(g)*9,x.position.y+4,x.position.z-Math.cos(g)*9);this.cine.position.lerpVectors(m,b,p);let S=new I(c,0,l).lerp(new I(x.position.x+Math.sin(g)*10,x.position.y,x.position.z+Math.cos(g)*10),p);this.cine.lookAt(S)}this.introT>=5.5&&(this.phase="countdown",this.hideHud(!1),this.banner.innerHTML="",this.banner.style.top="42%")}tickCountdown(t){if(this.phase==="intro"||this.phase!=="countdown"&&this.countdown>5)return;this.countdown+=t;let e=this.countdown,n=e<1?0:e<2?1:e<3?2:e<4?3:e<5?4:5;if(n===this.step)return;this.step=n;let i=["","3","2","1","GO!",""][n];if(this.banner.textContent=i,this.banner.style.color=n===4?"#5ee6c8":"#ffffff",this.banner.style.transform="translate(-50%,-50%) scale(1.25)",setTimeout(()=>{this.banner.style.transform="translate(-50%,-50%) scale(1)"},120),n>=1&&n<=3&&(re.playCountdownBeep(!1),this.track.setStartingLights(n)),n===4){re.playCountdownBeep(!0),this.track.setStartingLights(4),this.phase="racing",(!this.opts.autopilot||this.opts.music)&&(this.music=new Oa(this.opts.course||"meadow"),this.music.start());for(let r of this.humans){let o=r.human.gasAt;r.human.pad.gas&&o>=3.5&&o<4.05&&this.physics.triggerStartBoost(r.state)}}n===5&&this.track.setStartingLights(0)}finish(t){this.phase="done";let e=t.map((n,i)=>({id:n.state.config.id,name:n.state.config.name,color:n.state.config.color,human:!!n.human,rank:i+1,time:n.state.isFinished?n.state.totalRaceTime:null,bestLap:n.state.bestLapTime}));this.banner.textContent="FINISH!",this.banner.style.color="#ffc83d",this.finalOrder=t,this.music?.stop(),re.stopEngine(),setTimeout(()=>this.startReplay(),1800),setTimeout(()=>this.startPodium(),8300),setTimeout(()=>{this.phase="done",this.opts.onFinish?.(e)},15300)}record(){if(++this.recTick%2)return;let t=new Float32Array(this.racers.length*5);this.racers.forEach((e,n)=>{let i=e.state;t.set([i.position.x,i.position.y,i.position.z,i.rotation.y+(i.slideAngle||0)*.6,i.rotation.roll],n*5)}),this.frames.push(t)}hideHud(t){for(let e of this.humans)e.human.hud.style.display=e.human.map.style.display=e.human.banner.style.display=t?"none":""}startReplay(){this.disposed||this.winnerFrame<0||(this.phase="replay",this.replayAt=Math.max(0,this.winnerFrame-120),this.hideHud(!0),this.banner.innerHTML='<span style="font-size:.35em;letter-spacing:.1em;color:#ff5d5d">\u25CF REPLAY</span>',this.banner.style.top="8%",this.banner.style.left="10%")}replayFrame(){let t=Math.min(this.frames.length-1,this.winnerFrame+45),e=Math.min(t,Math.floor(this.replayAt)),n=this.frames[e];if(!n)return;this.racers.forEach((u,f)=>{let h=u.handles.rootGroup;h.position.set(n[f*5],n[f*5+1],n[f*5+2]),h.rotation.y=n[f*5+3],h.rotation.z=n[f*5+4];let d=this.shadows.get(u.state.config.id);d&&(d.position.set(n[f*5],n[f*5+1]+.06,n[f*5+2]),d.rotation.z=n[f*5+3])});let i=this.racers.findIndex(u=>u.state.config.id===this.winnerId),r=n[i*5],o=n[i*5+1],a=n[i*5+2],c=n[i*5+3],l=(e-(this.winnerFrame-120))/165;if(l<.5){let f=3-l*6;this.cine.position.set(r+Math.cos(c)*7-Math.sin(c)*f,o+1.4,a-Math.sin(c)*7-Math.cos(c)*f)}else{let u=this.track.trackPoints,f=u[u.length-6];this.cine.position.set(f.x-f.normalX*15,f.y+3.5,f.z-f.normalZ*15)}this.cine.lookAt(r,o+.8,a),this.replayAt+=.75}startPodium(){if(this.disposed)return;this.phase="podium",re.playFinishFanfare();let t=this.finalOrder.slice(0,3),e=this.track.trackPoints[Math.floor(this.track.trackPoints.length*.06)],n=new I(e.x,e.y,e.z),i=Math.atan2(e.tangentX,e.tangentZ)+Math.PI,r=Math.sin(i),o=Math.cos(i),a=Math.cos(i),c=-Math.sin(i);this.racers.forEach(h=>{if(!t.includes(h)){h.handles.rootGroup.visible=!1;let d=this.shadows.get(h.state.config.id);d&&(d.visible=!1)}});let l=[[0,2.4,"#ffc83d"],[-4.6,1.6,"#c9d3e6"],[4.6,1,"#e08a4c"]];this.podiumKarts=[],t.forEach((h,d)=>{let[p,x,g]=l[d],m=new nt(new le(4.2,x,4.2),new Dt({color:g,roughness:.4}));m.position.set(n.x+a*p,n.y+x/2,n.z+c*p),m.rotation.y=i;let b=document.createElement("canvas");b.width=b.height=128;let S=b.getContext("2d");S.fillStyle="#1b1b3a",S.font="italic 900 96px sans-serif",S.textAlign="center",S.textBaseline="middle",S.fillText(String(d+1),64,70);let y=new nt(new Ge(2,2),new Ee({map:new Ie(b),transparent:!0}));y.position.set(m.position.x+r*2.12,n.y+x/2,m.position.z+o*2.12),y.rotation.y=i,this.scene.add(m,y);let T=h.handles.rootGroup;T.visible=!0,T.position.set(m.position.x,n.y+x,m.position.z),T.rotation.set(0,i,0),this.podiumKarts.push({r:h,y:n.y+x,i:d});let M=document.createElement("div");M.style.cssText='position:absolute;transform:translate(-50%,-100%);text-align:center;font:italic 900 34px "Space Grotesk",Inter,sans-serif;color:#fff;-webkit-text-stroke:4px #1b1b3a;paint-order:stroke fill;white-space:nowrap',M.innerHTML='<span style="color:'+["#ffc83d","#dfe7ff","#f0a46b"][d]+'">'+["1ST","2ND","3RD"][d]+"</span> "+Ba(h.state.config.name),this.overlay.appendChild(M),this.labels.push(M)}),this.cine.position.set(n.x+r*12,n.y+4.5,n.z+o*12),this.cine.lookAt(n.x,n.y+2,n.z),this.podiumCenter=n,this.podiumDir={fx:r,fz:o};let u=[16735631,16762941,5032432,6219464,10185727,16777215];for(let h=0;h<160;h++){let d=new nt(new Ge(.25,.4),new Ee({color:u[h%u.length],side:$e}));d.position.set(n.x+(Math.random()-.5)*18,n.y+6+Math.random()*10,n.z+(Math.random()-.5)*18),d.userData.v=1.5+Math.random()*2,this.scene.add(d),this.confetti.push(d)}let f=t[0];this.banner.innerHTML=Ba(f.state.config.name)+" WINS!",this.banner.style.color="#ffc83d",this.banner.style.top="9%",this.banner.style.left="50%",this.banner.style.fontSize="72px"}podiumFrame(t){let e=this.elapsed;for(let c of this.podiumKarts){let l=c.r.handles.rootGroup,u=c.i===0?Math.abs(Math.sin(e*5))*.9:Math.abs(Math.sin(e*4+c.i))*.4;l.position.y=c.y+u,c.i===0&&(l.rotation.y+=t*(Math.sin(e*.7)>.6?6:0)),c.r.handles.driverHead.rotation.z=Math.sin(e*8+c.i)*.25;let f=l.position.clone();f.y+=3.2,f.project(this.cine);let h=this.container.clientWidth,d=this.container.clientHeight,p=this.labels[c.i];p&&(p.style.left=(f.x*.5+.5)*h+"px",p.style.top=(-f.y*.5+.5)*d+"px")}for(let c of this.confetti)c.position.y-=c.userData.v*t,c.rotation.x+=t*4,c.rotation.y+=t*3,c.position.y<this.podiumCenter.y&&(c.position.y+=16);let n=Math.sin(e*.3)*.35,{fx:i,fz:r}=this.podiumDir,o=i*Math.cos(n)-r*Math.sin(n),a=i*Math.sin(n)+r*Math.cos(n);this.cine.position.set(this.podiumCenter.x+o*12,this.podiumCenter.y+4.5,this.podiumCenter.z+a*12),this.cine.lookAt(this.podiumCenter.x,this.podiumCenter.y+2.2,this.podiumCenter.z)}onItemEvent(t){this.opts.onEvent?.(t);let e=this.humans.find(o=>o.state.config.id===t.racer),n=t.by?this.humans.find(o=>o.state.config.id===t.by):void 0,i=o=>o&&o.state.config.topper,r=o=>!!o&&!o.state.isFinished;if(t.type==="hit")e&&(this.say(e,t.item==="blue"?"ZAPPED!":"HIT!","#ff5d5d"),r(e)&&Ze.ouch(i(e))),n&&n!==e&&(this.say(n,"NICE HIT!","#5ee6c8"),setTimeout(()=>Ze.cheer(i(n)),e?450:0));else if(t.type==="use"&&r(e)&&["banana","fake","green","red","blue","bomb"].includes(t.item||""))Ze.throwItem(t.item,t.aim==="back"||(t.item==="banana"||t.item==="fake")&&t.aim!=="front");else if(t.type==="pickup"&&r(e))Ze.pickup();else if(t.type==="block"&&e)this.say(e,"BLOCKED!","#8fb4ff",900);else if(t.type==="bolt")for(let o of this.humans)o!==e&&!((o.state.starTimer||0)>0)&&this.say(o,"SHRUNK!","#fff15a");else t.type==="use"&&e&&t.item==="star"?(this.say(e,"STAR POWER!","#ffd34d"),Ze.star()):t.type==="use"&&e&&t.item==="ride"?this.say(e,"ROCKET RIDE!","#ff7a00"):t.type==="use"&&e&&t.item==="ghost"?this.say(e,"GHOST!","#e8ecff"):t.type==="use"&&e&&t.item==="coin"?this.say(e,"+2 COINS","#ffc83d",700):t.type==="use"&&e&&t.item==="golden"?this.say(e,"GOLDEN TURBO!","#ffc83d",700):t.type==="ink"&&e?(this.say(e,"SPLAT!","#c9a8ff"),Ze.splat()):t.type==="steal"?((e||n)&&Ze.steal(),e&&this.say(e,"STOLEN!","#ff5d5d"),n&&n!==e&&this.say(n,"GOT IT!","#5ee6c8")):t.type==="horn"&&e?(this.say(e,"HONK!","#ffffff",700),Ze.horn()):t.type==="boom"&&Ze.boom()}render(){if(this.phase==="replay"||this.phase==="podium"||this.phase==="intro"){let e=this.container.clientWidth,n=this.container.clientHeight;this.cine.aspect=e/n,this.cine.updateProjectionMatrix(),this.renderer.setViewport(0,0,e,n),this.renderer.setScissor(0,0,e,n),this.renderer.render(this.scene,this.cine);return}let t=this.views();if(this.humans.forEach((e,n)=>{let i=t[n];this.renderer.setViewport(i.x,i.y,i.w,i.h),this.renderer.setScissor(i.x,i.y,i.w,i.h),this.renderer.render(this.scene,e.human.cam.camera)}),this.humans.length===3){let e=t[3];this.renderer.setViewport(e.x,e.y,e.w,e.h),this.renderer.setScissor(e.x,e.y,e.w,e.h),this.renderer.render(this.scene,this.overview.camera)}}say(t,e,n="#ffffff",i=1100){let r=t.human.banner;r.textContent=e,r.style.color=n,r.animate([{opacity:0,transform:"scale(2.2) rotate(-6deg)"},{opacity:1,transform:"scale(1) rotate(-4deg)",offset:.15},{opacity:1,transform:"scale(1.05) rotate(-4deg)",offset:.75},{opacity:0,transform:"scale(0.9) translateY(-20px) rotate(-4deg)"}],{duration:i,easing:"cubic-bezier(.2,.9,.3,1.2)",fill:"forwards"})}emit(t){this.opts.onEvent?.(t)}detectMoments(){for(let t of this.humans){let e=t.human,n=t.state,i=n.config.id;if(n.isFinished)continue;if(e.rankCalm=(e.rankCalm||0)-1,e.lastRank!==void 0&&n.rank<e.lastRank&&e.rankCalm<=0&&(Ze.overtake(),this.say(t,n.rank===1?"TAKE THE LEAD!":"OVERTAKE!","#5ee6c8"),this.emit({type:"overtake",racer:i,rank:n.rank}),e.rankCalm=45),e.lastRank=n.rank,n.bumpedAt&&n.bumpedAt!==e.lastBump&&(e.lastBump=n.bumpedAt,this.emit({type:"bump",racer:i})),n.isDrifting&&n.driftLevel>(e.driftLvl||0)&&Ze.driftLevel(n.driftLevel),n.isDrifting&&(e.driftLvl=n.driftLevel),e.wasDrifting&&!n.isDrifting&&(e.driftLvl||0)>0){let o=e.driftLvl||1;this.say(t,o===3?"ULTRA BOOST!":o===2?"SUPER BOOST!":"BOOST!",o===3?"#c084fc":o===2?"#fb923c":"#38bdf8",800),this.emit({type:"mtboost",racer:i,level:o}),e.driftLvl=0}n.isDrifting&&n.driftLevel>(e.driftLvl===void 0?0:-1),e.wasDrifting=n.isDrifting;let r=this.track.onShortcut(n.position.x,n.position.z)!==null&&this.track.getClosestTrackPoint(n.position.x,n.position.z).distanceToCenter>this.track.roadWidth/2+.5;r&&!e.onDirt&&this.say(t,n.boostTimer>0?"SHORTCUT!":"DIRT! BOOST THROUGH","#ffc83d",900),e.onDirt=r}}toMap(t,e){return[128+(t-this.mapXf.cx)*this.mapXf.k,128+(e-this.mapXf.cz)*this.mapXf.k]}buildMapBase(){let t=this.track.trackPoints,e=1e9,n=-1e9,i=1e9,r=-1e9;for(let d of t)e=Math.min(e,d.x),n=Math.max(n,d.x),i=Math.min(i,d.z),r=Math.max(r,d.z);this.mapXf={cx:(e+n)/2,cz:(i+r)/2,k:220/Math.max(n-e,r-i)};let o=document.createElement("canvas");o.width=o.height=256;let a=o.getContext("2d"),c=()=>{a.beginPath(),t.forEach((d,p)=>{let[x,g]=this.toMap(d.x,d.z);p?a.lineTo(x,g):a.moveTo(x,g)}),a.closePath()};a.lineJoin="round",a.lineCap="round",c(),a.strokeStyle="#1b1b3a",a.lineWidth=22,a.stroke(),c(),a.strokeStyle="#ffffff",a.lineWidth=15,a.stroke(),c(),a.strokeStyle="#c9d3e6",a.lineWidth=9,a.stroke();let l=t[0],[u,f]=this.toMap(l.x,l.z),h=Math.atan2(l.normalZ,l.normalX);a.save(),a.translate(u,f),a.rotate(h);for(let d=-3;d<3;d++)for(let p=0;p<2;p++)a.fillStyle=(d+p)%2?"#1b1b3a":"#ffffff",a.fillRect(d*3,p*3-3,3,3);a.restore(),this.mapBase=o}drawMaps(){this.mapBase||this.buildMapBase();let t=.5+.5*Math.sin(this.elapsed*6),e=[...this.racers].sort((n,i)=>(n.human?1:0)-(i.human?1:0)||i.state.rank-n.state.rank);for(let n of this.humans){let i=n.human.map.getContext("2d");i.clearRect(0,0,256,256),i.drawImage(this.mapBase,0,0);for(let c of e){if(c===n)continue;let[l,u]=this.toMap(c.state.position.x,c.state.position.z),f=c.human?9:6.5;i.beginPath(),i.arc(l,u,f,0,Math.PI*2),i.fillStyle=c.state.config.color,i.fill(),i.lineWidth=c.human?3.5:2.5,i.strokeStyle=c.human?"#ffffff":"#1b1b3a",i.stroke()}let[r,o]=this.toMap(n.state.position.x,n.state.position.z),a=n.state.rotation.y;i.beginPath(),i.arc(r,o,15+t*5,0,Math.PI*2),i.strokeStyle="rgba(255,200,61,"+(.9-t*.6)+")",i.lineWidth=4,i.stroke(),i.save(),i.translate(r,o),i.rotate(Math.atan2(Math.cos(a),Math.sin(a))),i.beginPath(),i.moveTo(21,0),i.lineTo(9,-8),i.lineTo(9,8),i.closePath(),i.fillStyle="#ffc83d",i.fill(),i.lineWidth=2.5,i.strokeStyle="#1b1b3a",i.stroke(),i.restore(),i.beginPath(),i.arc(r,o,11,0,Math.PI*2),i.fillStyle=n.state.config.color,i.fill(),i.lineWidth=4,i.strokeStyle="#ffffff",i.stroke(),i.beginPath(),i.arc(r,o,13.5,0,Math.PI*2),i.lineWidth=2,i.strokeStyle="#1b1b3a",i.stroke()}}drawHud(){let t=this.humans.length>1;for(let e of this.humans){let n=e.state,i=this.items?this.items.held.get(n.config.id):void 0,r=i?Gx[i.shown]:"",o=Math.min(n.currentLap,this.laps),a=o===this.laps&&!n.isFinished&&this.phase==="racing",c=n.isDrifting?["#ffffff","#38bdf8","#fb923c","#c084fc"][n.driftLevel]:"transparent",l=t?64:104,u=n.rank===1?"linear-gradient(#fff6a8,#ffc21a 55%,#e88a00)":n.rank===2?"linear-gradient(#ffffff,#c9d3e6 60%,#8e9bb5)":n.rank===3?"linear-gradient(#ffd9b3,#e08a4c 60%,#a85a2a)":"linear-gradient(#ffffff,#dfe7ff)",f='<div style="display:flex;justify-content:space-between;align-items:flex-start"><div style="width:'+(t?70:100)+"px;height:"+(t?70:100)+"px;border-radius:22px;background:radial-gradient(circle at 50% 40%,#3a4a8a,#141a3a);border:5px solid #fff;box-shadow:0 0 0 4px "+(i&&!i.kind?"#ffc83d":"#1b1b3a")+',0 6px 14px rgba(0,0,0,.45);padding:10px;box-sizing:border-box;position:relative">'+r+(i&&i.kind&&Al[i.kind]?'<div style="position:absolute;left:0;top:100%;margin-top:'+(t?8:12)+'px;white-space:nowrap;text-shadow:0 2px 4px rgba(0,0,0,.8)"><div style="font:900 '+(t?15:20)+'px Inter,sans-serif;color:#fff">'+Al[i.kind][0]+'</div><div style="font:700 '+(t?12:15)+'px Inter,sans-serif;color:#ffc83d">'+Al[i.kind][1]+"</div></div>":"")+(i&&i.kind&&i.count>1?'<span style="position:absolute;right:-12px;bottom:-12px;font:italic 900 '+(t?20:28)+`px 'Space Grotesk',Inter,sans-serif;color:#fff;-webkit-text-stroke:3px #1b1b3a;paint-order:stroke fill">\xD7`+i.count+"</span>":"")+'</div><div style="text-align:right;text-shadow:0 2px 6px rgba(0,0,0,.6)"><div style="font:italic 900 '+(t?24:36)+"px 'Space Grotesk',Inter,sans-serif;color:"+(a?"#ffc83d":"#fff")+";-webkit-text-stroke:"+(t?2:3)+'px #1b1b3a;paint-order:stroke fill;letter-spacing:1px">'+(n.isFinished?"FINISH!":a?"FINAL LAP!":"LAP "+o+"/"+this.laps)+'</div><div style="font:600 '+(t?14:18)+'px Inter,sans-serif;opacity:.9">'+Vx(n.totalRaceTime)+'</div></div></div><div style="display:flex;justify-content:space-between;align-items:flex-end"><div style="display:flex;align-items:center;gap:10px;background:rgba(14,16,32,.6);border-radius:999px;padding:6px 14px 6px 6px"><span style="width:'+(t?22:30)+"px;height:"+(t?22:30)+"px;border-radius:50%;background:"+n.config.color+";box-shadow:0 0 0 3px "+c+'"></span><span style="font:700 '+(t?16:22)+'px Inter,sans-serif">'+Ba(n.config.name)+'</span><span style="display:inline-flex;align-items:center;gap:4px;font:800 '+(t?15:20)+'px Inter,sans-serif;color:#ffc83d"><span style="width:'+(t?14:18)+"px;height:"+(t?14:18)+'px;border-radius:50%;background:#ffc83d;border:2px solid #1b1b3a;box-sizing:border-box"></span>'+(n.coins||0)+'</span></div><div style="position:relative;font:italic 900 '+l+`px/0.9 'Space Grotesk',Inter,sans-serif;transform:skewX(-6deg)"><span style="position:absolute;inset:0;-webkit-text-stroke:`+(t?8:12)+'px #1b1b3a;color:#1b1b3a">'+Qu(n.rank)+'</span><span style="position:relative;background:'+u+';-webkit-background-clip:text;background-clip:text;color:transparent">'+Qu(n.rank)+"</span></div></div>";e.human.hud.innerHTML!==f&&(e.human.hud.innerHTML=f)}}};function Wx(s,t,e){let i=[];for(let o=0;o<22;o++){let a=o/22*Math.PI*2,c=Math.random()<.28?1.35+Math.random()*.55:.78+Math.random()*.28;i.push([s+Math.cos(a)*e*c,t+Math.sin(a)*e*c])}let r="";for(let o=0;o<22;o++){let a=i[(o-1+22)%22],c=i[o],l=i[(o+1)%22],u=i[(o+2)%22];o===0&&(r+="M"+c[0].toFixed(1)+" "+c[1].toFixed(1));let f=c[0]+(l[0]-a[0])/6,h=c[1]+(l[1]-a[1])/6,d=l[0]-(u[0]-c[0])/6,p=l[1]-(u[1]-c[1])/6;r+="C"+f.toFixed(1)+" "+h.toFixed(1)+" "+d.toFixed(1)+" "+p.toFixed(1)+" "+l[0].toFixed(1)+" "+l[1].toFixed(1)}return r+"Z"}function Xx(){let s="";return[[28,38,30],[64,48,36],[46,66,24],[78,26,20],[16,70,18]].forEach(([e,n,i],r)=>{let o=e+(Math.random()-.5)*12,a=n+(Math.random()-.5)*12,c=i*(.85+Math.random()*.35),l="ink"+Math.random().toString(36).slice(2,7),u="";for(let h=0;h<7;h++){let d=Math.random()*Math.PI*2,p=58+Math.random()*30,x=2.5+Math.random()*5;u+='<circle cx="'+(100+Math.cos(d)*p).toFixed(1)+'" cy="'+(100+Math.sin(d)*p).toFixed(1)+'" r="'+x.toFixed(1)+'"/>'}let f="";for(let h=0;h<3;h++){let d=70+Math.random()*60,p=5+Math.random()*6,x=30+Math.random()*60;f+='<g class="drip" style="transform-origin:'+d+'px 120px"><rect x="'+(d-p/2).toFixed(1)+'" y="110" width="'+p.toFixed(1)+'" height="'+x.toFixed(1)+'" rx="'+(p/2).toFixed(1)+'"/><circle cx="'+d.toFixed(1)+'" cy="'+(110+x).toFixed(1)+'" r="'+(p*.8).toFixed(1)+'"/></g>'}s+='<svg class="splat" viewBox="0 0 200 240" style="position:absolute;left:'+o.toFixed(1)+"%;top:"+a.toFixed(1)+"%;width:"+c.toFixed(1)+"%;transform:translate(-50%,-42%) rotate("+Math.round(Math.random()*360)+'deg);filter:drop-shadow(0 6px 8px rgba(0,0,0,.45));opacity:0" data-k="'+r+'"><defs><radialGradient id="'+l+'" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#5b34a3"/><stop offset=".55" stop-color="#34196b"/><stop offset="1" stop-color="#1c0c3f"/></radialGradient></defs><g fill="url(#'+l+')">'+f+'<path d="'+Wx(100,100,52)+'"/>'+u+'</g><ellipse cx="82" cy="76" rx="20" ry="11" fill="#fff" opacity=".22" transform="rotate(-25 82 76)"/><circle cx="104" cy="66" r="5" fill="#fff" opacity=".3"/></svg>'}),s}function qx(s){s.querySelectorAll("svg.splat").forEach(t=>{let e=Number(t.getAttribute("data-k"))||0,n=t.style.transform;t.animate([{opacity:0,transform:n+" scale(0.2)"},{opacity:1,transform:n+" scale(1.18)",offset:.55},{opacity:1,transform:n+" scale(1)"}],{duration:260,delay:e*110,easing:"cubic-bezier(.2,1.4,.4,1)",fill:"forwards"}),t.querySelectorAll("g.drip").forEach(i=>{i.animate([{transform:"scaleY(0.05)"},{transform:"scaleY(1)"}],{duration:2600,delay:400+e*110,easing:"ease-in",fill:"forwards"})})})}function Ba(s){return s.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}var Yx=()=>re.init();["pointerdown","keydown","click","touchstart"].forEach(s=>document.addEventListener(s,Yx,{capture:!0}));function Zx(s,t){t.audioContext&&re.adopt(t.audioContext);let e=new ka(s,t);return e.start(),window.CouchKart.current=e,e}function Jx(){try{let s=document.createElement("canvas");return!!(s.getContext("webgl2")||s.getContext("webgl"))}catch{return!1}}window.CouchKart={start:Zx,supported:Jx,version:1,soundOn:()=>re.running()};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
