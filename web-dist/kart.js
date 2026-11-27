"use strict";(()=>{var lf=Object.defineProperty;var hf=(s,t,e)=>t in s?lf(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var $=(s,t,e)=>hf(s,typeof t!="symbol"?t+"":t,e);var gs=[{id:"tabby",name:"Luigi",color:"#20A747",topper:"cat",spd:3,acc:4,hnd:4},{id:"bunbun",name:"Daisy",color:"#FFBB21",topper:"bunny",spd:2,acc:5,hnd:5},{id:"duke",name:"Bowser",color:"#E9A52D",topper:"crown",spd:5,acc:2,hnd:3},{id:"rex",name:"Yoshi",color:"#26B950",topper:"horns",spd:5,acc:3,hnd:2},{id:"lulu",name:"Peach",color:"#F27BB4",topper:"bow",spd:3,acc:5,hnd:4},{id:"zippy",name:"Toad",color:"#3478D8",topper:"antenna",spd:4,acc:4,hnd:3},{id:"ace",name:"Mario",color:"#E22C30",topper:"cap",spd:4,acc:3,hnd:4},{id:"grizz",name:"Donkey Kong",color:"#74391C",topper:"bear",spd:5,acc:2,hnd:2}];function Wa(s,t){return gs.find(e=>e.id===s)||gs.find(e=>e.topper===t)||gs.find(e=>e.id==="ace")}var mh=0,Pc=1,gh=2;var sr=1,xh=2,cs=3,Wn=0,Ve=1,je=2,Nn=0,Si=1,rr=2,Ic=3,Lc=4,_h=5;var si=100,yh=101,vh=102,bh=103,Mh=104,Sh=200,Eh=201,Th=202,wh=203,Qr=204,to=205,Ah=206,Rh=207,Ch=208,Ph=209,Ih=210,Lh=211,Dh=212,Nh=213,Uh=214,eo=0,no=1,io=2,Ei=3,so=4,ro=5,oo=6,ao=7,Dc=0,Fh=1,Oh=2,yn=0,Nc=1,Uc=2,Fc=3,or=4,Oc=5,Bc=6,kc=7;var zc=300,hi=301,Ci=302,Oo=303,Bo=304,ar=306,sn=1e3,Rn=1001,co=1002,Ce=1003,Bh=1004;var cr=1005;var ze=1006,ko=1007;var ui=1008;var Qe=1009,Hc=1010,Gc=1011,ls=1012,zo=1013,vn=1014,bn=1015,Un=1016,Ho=1017,Go=1018,hs=1020,Vc=35902,Wc=35899,Xc=1021,qc=1022,un=1023,Cn=1026,fi=1027,lr=1028,Vo=1029,di=1030,Wo=1031;var Xo=1033,hr=33776,ur=33777,fr=33778,dr=33779,qo=35840,Yo=35841,Zo=35842,Jo=35843,Ko=36196,$o=37492,jo=37496,Qo=37488,ta=37489,pr=37490,ea=37491,na=37808,ia=37809,sa=37810,ra=37811,oa=37812,aa=37813,ca=37814,la=37815,ha=37816,ua=37817,fa=37818,da=37819,pa=37820,ma=37821,ga=36492,xa=36494,_a=36495,ya=36283,va=36284,mr=36285,ba=36286;var ws=2300,lo=2301,jr=2302,gc=2303,xc=2400,_c=2401,yc=2402;var kh=3200;var gr=0,zh=1,Yn="",De="srgb",As="srgb-linear",Rs="linear",le="srgb";var vi=7680;var vc=519,Hh=512,Gh=513,Vh=514,Ma=515,Wh=516,Xh=517,Sa=518,qh=519,bc=35044;var Yc="300 es",xn=2e3,Ki=2001;function uf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ff(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Cs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yh(){let s=Cs("canvas");return s.style.display="block",s}var zl={},$i=null;function Zc(...s){let t="THREE."+s.shift();$i?$i("log",t,...s):console.log(t,...s)}function Zh(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Bt(...s){s=Zh(s);let t="THREE."+s.shift();if($i)$i("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Ht(...s){s=Zh(s);let t="THREE."+s.shift();if($i)$i("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Mi(...s){let t=s.join(" ");t in zl||(zl[t]=!0,Bt(...s))}function Jh(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}var Kh={[eo]:no,[io]:oo,[so]:ao,[Ei]:ro,[no]:eo,[oo]:io,[ao]:so,[ro]:Ei},Pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hl=1234567,Ms=Math.PI/180,ji=180/Math.PI;function Pi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[s&255]+Xe[s>>8&255]+Xe[s>>16&255]+Xe[s>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function te(s,t,e){return Math.max(t,Math.min(e,s))}function Jc(s,t){return(s%t+t)%t}function df(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function pf(s,t,e){return s!==t?(e-s)/(t-s):0}function Ss(s,t,e){return(1-e)*s+e*t}function mf(s,t,e,n){return Ss(s,t,1-Math.exp(-e*n))}function gf(s,t=1){return t-Math.abs(Jc(s,t*2)-t)}function xf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function _f(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function yf(s,t){return s+Math.floor(Math.random()*(t-s+1))}function vf(s,t){return s+Math.random()*(t-s)}function bf(s){return s*(.5-Math.random())}function Mf(s){s!==void 0&&(Hl=s);let t=Hl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sf(s){return s*Ms}function Ef(s){return s*ji}function Tf(s){return(s&s-1)===0&&s!==0}function wf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Af(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Rf(s,t,e,n,i){let o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+n)/2),h=r((t+n)/2),f=o((t-n)/2),u=r((t-n)/2),d=o((n-t)/2),p=r((n-t)/2);switch(i){case"XYX":s.set(a*h,c*f,c*u,a*l);break;case"YZY":s.set(c*u,a*h,c*f,a*l);break;case"ZXZ":s.set(c*f,c*u,a*h,a*l);break;case"XZX":s.set(a*h,c*p,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*p,a*l);break;case"ZYZ":s.set(c*p,c*d,a*h,a*l);break;default:Bt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Je(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Le={DEG2RAD:Ms,RAD2DEG:ji,generateUUID:Pi,clamp:te,euclideanModulo:Jc,mapLinear:df,inverseLerp:pf,lerp:Ss,damp:mf,pingpong:gf,smoothstep:xf,smootherstep:_f,randInt:yf,randFloat:vf,randFloatSpread:bf,seededRandom:Mf,degToRad:Sf,radToDeg:Ef,isPowerOfTwo:Tf,ceilPowerOfTwo:wf,floorPowerOfTwo:Af,setQuaternionFromProperEuler:Rf,normalize:Je,denormalize:Zi},el=class el{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};el.prototype.isVector2=!0;var lt=el,In=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let c=n[i+0],l=n[i+1],h=n[i+2],f=n[i+3],u=o[r+0],d=o[r+1],p=o[r+2],_=o[r+3];if(f!==_||c!==u||l!==d||h!==p){let g=c*u+l*d+h*p+f*_;g<0&&(u=-u,d=-d,p=-p,_=-_,g=-g);let m=1-a;if(g<.9995){let y=Math.acos(g),S=Math.sin(y);m=Math.sin(m*y)/S,a=Math.sin(a*y)/S,c=c*m+u*a,l=l*m+d*a,h=h*m+p*a,f=f*m+_*a}else{c=c*m+u*a,l=l*m+d*a,h=h*m+p*a,f=f*m+_*a;let y=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=y,l*=y,h*=y,f*=y}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,o,r){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],f=o[r],u=o[r+1],d=o[r+2],p=o[r+3];return t[e]=a*p+h*f+c*d-l*u,t[e+1]=c*p+h*u+l*f-a*d,t[e+2]=l*p+h*d+a*u-c*f,t[e+3]=h*p-a*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),f=a(o/2),u=c(n/2),d=c(i/2),p=c(o/2);switch(r){case"XYZ":this._x=u*h*f+l*d*p,this._y=l*d*f-u*h*p,this._z=l*h*p+u*d*f,this._w=l*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+l*d*p,this._y=l*d*f-u*h*p,this._z=l*h*p-u*d*f,this._w=l*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-l*d*p,this._y=l*d*f+u*h*p,this._z=l*h*p+u*d*f,this._w=l*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-l*d*p,this._y=l*d*f+u*h*p,this._z=l*h*p-u*d*f,this._w=l*h*f+u*d*p;break;case"YZX":this._x=u*h*f+l*d*p,this._y=l*d*f+u*h*p,this._z=l*h*p-u*d*f,this._w=l*h*f-u*d*p;break;case"XZY":this._x=u*h*f-l*d*p,this._y=l*d*f-u*h*p,this._z=l*h*p+u*d*f,this._w=l*h*f+u*d*p;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(o-l)*d,this._z=(r-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(o+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(o-l)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(r-i)/d,this._x=(o+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+i*l-o*c,this._y=i*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-i*a,this._w=r*h-n*a-i*c-o*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,o=t._z,r=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,o=-o,r=-r,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+o*e,this._w=this._w*c+r*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+o*e,this._w=this._w*c+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},nl=class nl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*i-a*n),h=2*(a*e-o*i),f=2*(o*n-r*e);return this.x=e+c*l+r*f-a*h,this.y=n+c*h+a*l-o*f,this.z=i+c*f+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-o*a,this.y=o*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xa.copy(this).projectOnVector(t),this.sub(Xa)}reflect(t){return this.sub(Xa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nl.prototype.isVector3=!0;var I=nl,Xa=new I,Gl=new In,il=class il{constructor(t,e,n,i,o,r,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l)}set(t,e,n,i,o,r,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],_=i[0],g=i[3],m=i[6],y=i[1],S=i[4],b=i[7],A=i[2],M=i[5],w=i[8];return o[0]=r*_+a*y+c*A,o[3]=r*g+a*S+c*M,o[6]=r*m+a*b+c*w,o[1]=l*_+h*y+f*A,o[4]=l*g+h*S+f*M,o[7]=l*m+h*b+f*w,o[2]=u*_+d*y+p*A,o[5]=u*g+d*S+p*M,o[8]=u*m+d*b+p*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+i*o*l-i*r*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*r-a*l,u=a*c-h*o,d=l*o-r*c,p=e*f+n*u+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=f*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*r)*_,t[3]=u*_,t[4]=(h*e-i*c)*_,t[5]=(i*o-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){let c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-i*l,i*c,-i*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return Mi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qa.makeScale(t,e)),this}rotate(t){return Mi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qa.makeRotation(-t)),this}translate(t,e){return Mi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};il.prototype.isMatrix3=!0;var Yt=il,qa=new Yt,Vl=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wl=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cf(){let s={enabled:!0,workingColorSpace:As,spaces:{},convert:function(i,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===le&&(i.r=Vn(i.r),i.g=Vn(i.g),i.b=Vn(i.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===le&&(i.r=Ji(i.r),i.g=Ji(i.g),i.b=Ji(i.b))),i},workingToColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},colorSpaceToWorking:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Yn?Rs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,r){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,o){return Mi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,o)},toWorkingColorSpace:function(i,o){return Mi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[As]:{primaries:t,whitePoint:n,transfer:Rs,toXYZ:Vl,fromXYZ:Wl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:le,toXYZ:Vl,fromXYZ:Wl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),s}var ne=Cf();function Vn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ji(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Fi,ho=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fi===void 0&&(Fi=Cs("canvas")),Fi.width=t.width,Fi.height=t.height;let i=Fi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Fi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Cs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=Vn(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vn(e[n]/255)*255):e[n]=Vn(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pf=0,Qi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Pi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Ya(i[r].image)):o.push(Ya(i[r]))}else o=Ya(i);n.url=o}return e||(t.images[this.uuid]=n),n}};function Ya(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ho.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}var If=0,Za=new I,Ke=class s extends Pn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Rn,i=Rn,o=ze,r=ui,a=un,c=Qe,l=s.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Pi(),this.name="",this.source=new Qi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Za).x}get height(){return this.source.getSize(Za).y}get depth(){return this.source.getSize(Za).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sn:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case co:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sn:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case co:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=zc;Ke.DEFAULT_ANISOTROPY=1;var sl=class sl{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o,c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(l+1)/2,b=(d+1)/2,A=(m+1)/2,M=(h+u)/4,w=(f+_)/4,x=(p+g)/4;return S>b&&S>A?S<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(S),i=M/n,o=w/n):b>A?b<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(b),n=M/i,o=x/i):A<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(A),n=w/o,i=x/o),this.set(n,i,o,e),this}let y=Math.sqrt((g-p)*(g-p)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(f-_)/y,this.z=(u-h)/y,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sl.prototype.isVector4=!0;var Me=sl,uo=class extends Pn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},o=new Ke(i),r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Qi(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends uo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ps=class extends Ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var fo=class extends Ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fo=class Fo{constructor(t,e,n,i,o,r,a,c,l,h,f,u,d,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l,h,f,u,d,p,_,g)}set(t,e,n,i,o,r,a,c,l,h,f,u,d,p,_,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=o,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Oi.setFromMatrixColumn(t,0).length(),o=1/Oi.setFromMatrixColumn(t,1).length(),r=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){let u=r*h,d=r*f,p=a*h,_=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+p*l,e[5]=u-_*l,e[9]=-a*c,e[2]=_-u*l,e[6]=p+d*l,e[10]=r*c}else if(t.order==="YXZ"){let u=c*h,d=c*f,p=l*h,_=l*f;e[0]=u+_*a,e[4]=p*a-d,e[8]=r*l,e[1]=r*f,e[5]=r*h,e[9]=-a,e[2]=d*a-p,e[6]=_+u*a,e[10]=r*c}else if(t.order==="ZXY"){let u=c*h,d=c*f,p=l*h,_=l*f;e[0]=u-_*a,e[4]=-r*f,e[8]=p+d*a,e[1]=d+p*a,e[5]=r*h,e[9]=_-u*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){let u=r*h,d=r*f,p=a*h,_=a*f;e[0]=c*h,e[4]=p*l-d,e[8]=u*l+_,e[1]=c*f,e[5]=_*l+u,e[9]=d*l-p,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){let u=r*c,d=r*l,p=a*c,_=a*l;e[0]=c*h,e[4]=_-u*f,e[8]=p*f+d,e[1]=f,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*f+p,e[10]=u-_*f}else if(t.order==="XZY"){let u=r*c,d=r*l,p=a*c,_=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+_,e[5]=r*h,e[9]=d*f-p,e[2]=p*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lf,t,Df)}lookAt(t,e,n){let i=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),$n.crossVectors(n,en),$n.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),$n.crossVectors(n,en)),$n.normalize(),Rr.crossVectors(en,$n),i[0]=$n.x,i[4]=Rr.x,i[8]=en.x,i[1]=$n.y,i[5]=Rr.y,i[9]=en.y,i[2]=$n.z,i[6]=Rr.z,i[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],y=n[3],S=n[7],b=n[11],A=n[15],M=i[0],w=i[4],x=i[8],E=i[12],R=i[1],C=i[5],D=i[9],z=i[13],H=i[2],L=i[6],N=i[10],F=i[14],q=i[3],K=i[7],tt=i[11],st=i[15];return o[0]=r*M+a*R+c*H+l*q,o[4]=r*w+a*C+c*L+l*K,o[8]=r*x+a*D+c*N+l*tt,o[12]=r*E+a*z+c*F+l*st,o[1]=h*M+f*R+u*H+d*q,o[5]=h*w+f*C+u*L+d*K,o[9]=h*x+f*D+u*N+d*tt,o[13]=h*E+f*z+u*F+d*st,o[2]=p*M+_*R+g*H+m*q,o[6]=p*w+_*C+g*L+m*K,o[10]=p*x+_*D+g*N+m*tt,o[14]=p*E+_*z+g*F+m*st,o[3]=y*M+S*R+b*H+A*q,o[7]=y*w+S*C+b*L+A*K,o[11]=y*x+S*D+b*N+A*tt,o[15]=y*E+S*z+b*F+A*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],p=t[3],_=t[7],g=t[11],m=t[15],y=c*d-l*u,S=a*d-l*f,b=a*u-c*f,A=r*d-l*h,M=r*u-c*h,w=r*f-a*h;return e*(_*y-g*S+m*b)-n*(p*y-g*A+m*M)+i*(p*S-_*A+m*w)-o*(p*b-_*M+g*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],o=t[1],r=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(r*h-a*l)-n*(o*h-a*c)+i*(o*l-r*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],p=t[12],_=t[13],g=t[14],m=t[15],y=e*a-n*r,S=e*c-i*r,b=e*l-o*r,A=n*c-i*a,M=n*l-o*a,w=i*l-o*c,x=h*_-f*p,E=h*g-u*p,R=h*m-d*p,C=f*g-u*_,D=f*m-d*_,z=u*m-d*g,H=y*z-S*D+b*C+A*R-M*E+w*x;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/H;return t[0]=(a*z-c*D+l*C)*L,t[1]=(i*D-n*z-o*C)*L,t[2]=(_*w-g*M+m*A)*L,t[3]=(u*M-f*w-d*A)*L,t[4]=(c*R-r*z-l*E)*L,t[5]=(e*z-i*R+o*E)*L,t[6]=(g*b-p*w-m*S)*L,t[7]=(h*w-u*b+d*S)*L,t[8]=(r*D-a*R+l*x)*L,t[9]=(n*R-e*D-o*x)*L,t[10]=(p*M-_*b+m*y)*L,t[11]=(f*b-h*M-d*y)*L,t[12]=(a*E-r*C-c*x)*L,t[13]=(e*C-n*E+i*x)*L,t[14]=(_*S-p*A-g*y)*L,t[15]=(h*A-f*S+u*y)*L,this}scale(t){let e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*r,0,l*c-i*a,h*c+i*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,f=a+a,u=o*l,d=o*h,p=o*f,_=r*h,g=r*f,m=a*f,y=c*l,S=c*h,b=c*f,A=n.x,M=n.y,w=n.z;return i[0]=(1-(_+m))*A,i[1]=(d+b)*A,i[2]=(p-S)*A,i[3]=0,i[4]=(d-b)*M,i[5]=(1-(u+m))*M,i[6]=(g+y)*M,i[7]=0,i[8]=(p+S)*w,i[9]=(g-y)*w,i[10]=(1-(u+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let r=Oi.set(i[0],i[1],i[2]).length(),a=Oi.set(i[4],i[5],i[6]).length(),c=Oi.set(i[8],i[9],i[10]).length();o<0&&(r=-r),pn.copy(this);let l=1/r,h=1/a,f=1/c;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,e.setFromRotationMatrix(pn),n.x=r,n.y=a,n.z=c,this}makePerspective(t,e,n,i,o,r,a=xn,c=!1){let l=this.elements,h=2*o/(e-t),f=2*o/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),p,_;if(c)p=o/(r-o),_=r*o/(r-o);else if(a===xn)p=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===Ki)p=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=xn,c=!1){let l=this.elements,h=2/(e-t),f=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i),p,_;if(c)p=1/(r-o),_=r/(r-o);else if(a===xn)p=-2/(r-o),_=-(r+o)/(r-o);else if(a===Ki)p=-1/(r-o),_=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Fo.prototype.isMatrix4=!0;var be=Fo,Oi=new I,pn=new be,Lf=new I(0,0,0),Df=new I(1,1,1),$n=new I,Rr=new I,en=new I,Xl=new be,ql=new In,Xn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,o=i[0],r=i[4],a=i[8],c=i[1],l=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-te(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ql.setFromEuler(this),this.setFromQuaternion(ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";var Is=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Nf=0,Yl=new I,Bi=new In,Bn=new be,Cr=new I,xs=new I,Uf=new I,Ff=new In,Zl=new I(1,0,0),Jl=new I(0,1,0),Kl=new I(0,0,1),$l={type:"added"},Of={type:"removed"},ki={type:"childadded",child:null},Ja={type:"childremoved",child:null},He=class s extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new I,e=new Xn,n=new In,i=new I(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new be},normalMatrix:{value:new Yt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(Zl,t)}rotateY(t){return this.rotateOnAxis(Jl,t)}rotateZ(t){return this.rotateOnAxis(Kl,t)}translateOnAxis(t,e){return Yl.copy(t).applyQuaternion(this.quaternion),this.position.add(Yl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zl,t)}translateY(t){return this.translateOnAxis(Jl,t)}translateZ(t){return this.translateOnAxis(Kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Cr.copy(t):Cr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(xs,Cr,this.up):Bn.lookAt(Cr,xs,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),Bi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($l),ki.child=t,this.dispatchEvent(ki),ki.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Of),Ja.child=t,this.dispatchEvent(Ja),Ja.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($l),ki.child=t,this.dispatchEvent(ki),ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,Uf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Ff,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*i,o[13]+=n-o[1]*e-o[5]*n-o[9]*i,o[14]+=i-o[2]*e-o[6]*n-o[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];o(t.shapes,f)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(o(t.animations,c))}}if(e){let a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),f=r(t.shapes),u=r(t.skeletons),d=r(t.animations),p=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function r(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};He.DEFAULT_UP=new I(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ie=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bf={type:"move"},ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;l.inputState.pinching&&u>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bf)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},$h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function Ka(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=Jc(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Ka(r,o,t+1/3),this.g=Ka(r,o,t),this.b=Ka(r,o,t-1/3)}return ne.colorSpaceToWorking(this,i),this}setStyle(t,e=De){function n(o){o!==void 0&&parseFloat(o)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let n=$h[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return ne.workingToColorSpace(qe.copy(this),t),Math.round(te(qe.r*255,0,255))*65536+Math.round(te(qe.g*255,0,255))*256+Math.round(te(qe.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(qe.copy(this),e);let n=qe.r,i=qe.g,o=qe.b,r=Math.max(n,i,o),a=Math.min(n,i,o),c,l,h=(a+r)/2;if(a===r)c=0,l=0;else{let f=r-a;switch(l=h<=.5?f/(r+a):f/(2-r-a),r){case n:c=(i-o)/f+(i<o?6:0);break;case i:c=(o-n)/f+2;break;case o:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=De){ne.workingToColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,i=qe.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(Pr);let n=Ss(jn.h,Pr.h,e),i=Ss(jn.s,Pr.s,e),o=Ss(jn.l,Pr.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new Ft;Ft.NAMES=$h;var Ls=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ds=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},mn=new I,kn=new I,$a=new I,zn=new I,zi=new I,Hi=new I,jl=new I,ja=new I,Qa=new I,tc=new I,ec=new Me,nc=new Me,ic=new Me,ii=class s{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),mn.subVectors(t,e),i.cross(mn);let o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){mn.subVectors(i,e),kn.subVectors(n,e),$a.subVectors(t,e);let r=mn.dot(mn),a=mn.dot(kn),c=mn.dot($a),l=kn.dot(kn),h=kn.dot($a),f=r*l-a*a;if(f===0)return o.set(0,0,0),null;let u=1/f,d=(l*c-a*h)*u,p=(r*h-a*c)*u;return o.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,i,o,r,a,c){return this.getBarycoord(t,e,n,i,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,zn.x),c.addScaledVector(r,zn.y),c.addScaledVector(a,zn.z),c)}static getInterpolatedAttribute(t,e,n,i,o,r){return ec.setScalar(0),nc.setScalar(0),ic.setScalar(0),ec.fromBufferAttribute(t,e),nc.fromBufferAttribute(t,n),ic.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(ec,o.x),r.addScaledVector(nc,o.y),r.addScaledVector(ic,o.z),r}static isFrontFacing(t,e,n,i){return mn.subVectors(n,e),kn.subVectors(t,e),mn.cross(kn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),mn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,o=this.c,r,a;zi.subVectors(i,n),Hi.subVectors(o,n),ja.subVectors(t,n);let c=zi.dot(ja),l=Hi.dot(ja);if(c<=0&&l<=0)return e.copy(n);Qa.subVectors(t,i);let h=zi.dot(Qa),f=Hi.dot(Qa);if(h>=0&&f<=h)return e.copy(i);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(zi,r);tc.subVectors(t,o);let d=zi.dot(tc),p=Hi.dot(tc);if(p>=0&&d<=p)return e.copy(o);let _=d*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(Hi,a);let g=h*p-d*f;if(g<=0&&f-h>=0&&d-p>=0)return jl.subVectors(o,i),a=(f-h)/(f-h+(d-p)),e.copy(i).addScaledVector(jl,a);let m=1/(g+_+u);return r=_*m,a=u*m,e.copy(n).addScaledVector(zi,r).addScaledVector(Hi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ri=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,gn):gn.fromBufferAttribute(o,r),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}let i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),Lr.subVectors(this.max,_s),Gi.subVectors(t.a,_s),Vi.subVectors(t.b,_s),Wi.subVectors(t.c,_s),Qn.subVectors(Vi,Gi),ti.subVectors(Wi,Vi),gi.subVectors(Gi,Wi);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-gi.z,gi.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,gi.z,0,-gi.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-gi.y,gi.x,0];return!sc(e,Gi,Vi,Wi,Lr)||(e=[1,0,0,0,1,0,0,0,1],!sc(e,Gi,Vi,Wi,Lr))?!1:(Dr.crossVectors(Qn,ti),e=[Dr.x,Dr.y,Dr.z],sc(e,Gi,Vi,Wi,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Hn=[new I,new I,new I,new I,new I,new I,new I,new I],gn=new I,Ir=new ri,Gi=new I,Vi=new I,Wi=new I,Qn=new I,ti=new I,gi=new I,_s=new I,Lr=new I,Dr=new I,xi=new I;function sc(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){xi.fromArray(s,o);let a=i.x*Math.abs(xi.x)+i.y*Math.abs(xi.y)+i.z*Math.abs(xi.z),c=t.dot(xi),l=e.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Pe=new I,Nr=new lt,kf=0,Ne=class extends Pn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bc,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Nr.fromBufferAttribute(this,e),Nr.applyMatrix3(t),this.setXY(e,Nr.x,Nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),i=Je(i,this.array),o=Je(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bc&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ns=class extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Us=class extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Wt=class extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}},zf=new ri,ys=new I,rc=new I,Ti=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zf.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ys.subVectors(t,this.center);let e=ys.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ys,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ys.copy(t.center).add(rc)),this.expandByPoint(ys.copy(t.center).sub(rc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Hf=0,hn=new be,oc=new He,Xi=new I,nn=new ri,vs=new ri,Be=new I,ue=class s extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uf(t)?Us:Ns)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new Yt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return oc.lookAt(t),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,o=t.length;i<o;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Wt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let o=e[n];nn.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){let a=e[o];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(nn.min,vs.min),nn.expandByPoint(Be),Be.addVectors(nn.max,vs.max),nn.expandByPoint(Be)):(nn.expandByPoint(vs.min),nn.expandByPoint(vs.max))}nn.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)Be.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(Be));if(e)for(let o=0,r=e.length;o<r;o++){let a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Be.fromBufferAttribute(a,l),c&&(Xi.fromBufferAttribute(t,l),Be.add(Xi)),i=Math.max(i,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,o=e.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new Ne(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));let a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new I,c[x]=new I;let l=new I,h=new I,f=new I,u=new lt,d=new lt,p=new lt,_=new I,g=new I;function m(x,E,R){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,R),u.fromBufferAttribute(o,x),d.fromBufferAttribute(o,E),p.fromBufferAttribute(o,R),h.sub(l),f.sub(l),d.sub(u),p.sub(u);let C=1/(d.x*p.y-p.x*d.y);isFinite(C)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(C),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(C),a[x].add(_),a[E].add(_),a[R].add(_),c[x].add(g),c[E].add(g),c[R].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let x=0,E=y.length;x<E;++x){let R=y[x],C=R.start,D=R.count;for(let z=C,H=C+D;z<H;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let S=new I,b=new I,A=new I,M=new I;function w(x){A.fromBufferAttribute(i,x),M.copy(A);let E=a[x];S.copy(E),S.sub(A.multiplyScalar(A.dot(E))).normalize(),b.crossVectors(M,E);let C=b.dot(c[x])<0?-1:1;r.setXYZW(x,S.x,S.y,S.z,C)}for(let x=0,E=y.length;x<E;++x){let R=y[x],C=R.start,D=R.count;for(let z=C,H=C+D;z<H;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new I,o=new I,r=new I,a=new I,c=new I,l=new I,h=new I,f=new I;if(t)for(let u=0,d=t.count;u<d;u+=3){let p=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,p),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),h.subVectors(r,o),f.subVectors(i,o),h.cross(f),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),f.subVectors(i,o),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h),d=0,p=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let m=0;m<h;m++)u[p++]=l[d++]}return new Ne(u,h,f)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let o=this.morphAttributes;for(let a in o){let c=[],l=o[a];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=t(u,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,c=r.length;a<c;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},o=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let o=t.morphAttributes;for(let l in o){let h=[],f=o[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,h=r.length;l<h;l++){let f=r[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Gf=0,Ln=class extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=Si,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qr,this.blendDst=to,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=Ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qr&&(n.blendSrc=this.blendSrc),this.blendDst!==to&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ei&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){let r=[];for(let a in o){let c=o[a];delete c.metadata,r.push(c)}return r}if(e){let o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ft().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Gn=new I,ac=new I,Ur=new I,ei=new I,cc=new I,Fr=new I,lc=new I,Fs=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ac.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(ac);let o=t.distanceTo(e)*.5,r=-this.direction.dot(Ur),a=ei.dot(this.direction),c=-ei.dot(Ur),l=ei.lengthSq(),h=Math.abs(1-r*r),f,u,d,p;if(h>0)if(f=r*c-a,u=r*a-c,p=o*h,f>=0)if(u>=-p)if(u<=p){let _=1/h;f*=_,u*=_,d=f*(f+r*u+2*a)+u*(r*f+u+2*c)+l}else u=o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*c)+l;else u=-o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*c)+l;else u<=-p?(f=Math.max(0,-(-r*o+a)),u=f>0?-o:Math.min(Math.max(-o,-c),o),d=-f*f+u*(u+2*c)+l):u<=p?(f=0,u=Math.min(Math.max(-o,-c),o),d=u*(u+2*c)+l):(f=Math.max(0,-(r*o+a)),u=f>0?o:Math.min(Math.max(-o,-c),o),d=-f*f+u*(u+2*c)+l);else u=r>0?-o:o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ac).addScaledVector(Ur,u),d}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);let n=Gn.dot(this.direction),i=Gn.dot(Gn)-n*n,o=t.radius*t.radius;if(i>o)return null;let r=Math.sqrt(o-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),f>=0?(a=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,i,o){cc.subVectors(e,t),Fr.subVectors(n,t),lc.crossVectors(cc,Fr);let r=this.direction.dot(lc),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ei.subVectors(this.origin,t);let c=a*this.direction.dot(Fr.crossVectors(ei,Fr));if(c<0)return null;let l=a*this.direction.dot(cc.cross(ei));if(l<0||c+l>r)return null;let h=-a*ei.dot(lc);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ee=class extends Ln{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ql=new be,_i=new Fs,Or=new Ti,th=new I,Br=new I,kr=new I,zr=new I,hc=new I,Hr=new I,eh=new I,Gr=new I,et=class extends He{constructor(t=new ue,e=new Ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){let a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(o&&a){Hr.set(0,0,0);for(let c=0,l=o.length;c<l;c++){let h=a[c],f=o[c];h!==0&&(hc.fromBufferAttribute(f,t),r?Hr.addScaledVector(hc,h):Hr.addScaledVector(hc.sub(e),h))}e.add(Hr)}return e}raycast(t,e){let n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(o),_i.copy(t.ray).recast(t.near),!(Or.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Or,th)===null||_i.origin.distanceToSquared(th)>(t.far-t.near)**2))&&(Ql.copy(o).invert(),_i.copy(t.ray).applyMatrix4(Ql),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let i,o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,u=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=r[g.materialIndex],y=Math.max(g.start,d.start),S=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let b=y,A=S;b<A;b+=3){let M=a.getX(b),w=a.getX(b+1),x=a.getX(b+2);i=Vr(this,m,t,n,l,h,f,M,w,x),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){let y=a.getX(g),S=a.getX(g+1),b=a.getX(g+2);i=Vr(this,r,t,n,l,h,f,y,S,b),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=r[g.materialIndex],y=Math.max(g.start,d.start),S=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let b=y,A=S;b<A;b+=3){let M=b,w=b+1,x=b+2;i=Vr(this,m,t,n,l,h,f,M,w,x),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){let y=g,S=g+1,b=g+2;i=Vr(this,r,t,n,l,h,f,y,S,b),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Vf(s,t,e,n,i,o,r,a){let c;if(t.side===Ve?c=n.intersectTriangle(r,o,i,!0,a):c=n.intersectTriangle(i,o,r,t.side===Wn,a),c===null)return null;Gr.copy(a),Gr.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Gr);return l<e.near||l>e.far?null:{distance:l,point:Gr.clone(),object:s}}function Vr(s,t,e,n,i,o,r,a,c,l){s.getVertexPosition(a,Br),s.getVertexPosition(c,kr),s.getVertexPosition(l,zr);let h=Vf(s,t,e,n,Br,kr,zr,eh);if(h){let f=new I;ii.getBarycoord(eh,Br,kr,zr,f),i&&(h.uv=ii.getInterpolatedAttribute(i,a,c,l,f,new lt)),o&&(h.uv1=ii.getInterpolatedAttribute(o,a,c,l,f,new lt)),r&&(h.normal=ii.getInterpolatedAttribute(r,a,c,l,f,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new I,materialIndex:0};ii.getNormal(Br,kr,zr,u.normal),h.face=u,h.barycoord=f}return h}var es=class extends Ke{constructor(t=null,e=1,n=1,i,o,r,a,c,l=Ce,h=Ce,f,u){super(null,r,a,c,l,h,i,o,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var uc=new I,Wf=new I,Xf=new Yt,An=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=uc.subVectors(n,e).cross(Wf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(uc),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Xf.getNormalMatrix(t),i=this.coplanarPoint(uc).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},yi=new Ti,qf=new lt(.5,.5),Wr=new I,ns=class{constructor(t=new An,e=new An,n=new An,i=new An,o=new An,r=new An){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn,n=!1){let i=this.planes,o=t.elements,r=o[0],a=o[1],c=o[2],l=o[3],h=o[4],f=o[5],u=o[6],d=o[7],p=o[8],_=o[9],g=o[10],m=o[11],y=o[12],S=o[13],b=o[14],A=o[15];if(i[0].setComponents(l-r,d-h,m-p,A-y).normalize(),i[1].setComponents(l+r,d+h,m+p,A+y).normalize(),i[2].setComponents(l+a,d+f,m+_,A+S).normalize(),i[3].setComponents(l-a,d-f,m-_,A-S).normalize(),n)i[4].setComponents(c,u,g,b).normalize(),i[5].setComponents(l-c,d-u,m-g,A-b).normalize();else if(i[4].setComponents(l-c,d-u,m-g,A-b).normalize(),e===xn)i[5].setComponents(l+c,d+u,m+g,A+b).normalize();else if(e===Ki)i[5].setComponents(c,u,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){yi.center.set(0,0,0);let e=qf.distanceTo(t.center);return yi.radius=.7071067811865476+e,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Wr.x=i.normal.x>0?t.max.x:t.min.x,Wr.y=i.normal.y>0?t.max.y:t.min.y,Wr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var is=class extends Ln{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},nh=new be,Mc=new Fs,Xr=new Ti,qr=new I,Os=class extends He{constructor(t=new ue,e=new is){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(i),Xr.radius+=o,t.ray.intersectsSphere(Xr)===!1)return;nh.copy(i).invert(),Mc.copy(t.ray).applyMatrix4(nh);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let u=Math.max(0,r.start),d=Math.min(l.count,r.start+r.count);for(let p=u,_=d;p<_;p++){let g=l.getX(p);qr.fromBufferAttribute(f,g),ih(qr,g,c,i,t,e,this)}}else{let u=Math.max(0,r.start),d=Math.min(f.count,r.start+r.count);for(let p=u,_=d;p<_;p++)qr.fromBufferAttribute(f,p),ih(qr,p,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){let a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function ih(s,t,e,n,i,o,r){let a=Mc.distanceSqToPoint(s);if(a<e){let c=new I;Mc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var Bs=class extends Ke{constructor(t=[],e=hi,n,i,o,r,a,c,l,h){super(t,e,n,i,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ie=class extends Ke{constructor(t,e,n,i,o,r,a,c,l){super(t,e,n,i,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qn=class extends Ke{constructor(t,e,n=vn,i,o,r,a=Ce,c=Ce,l,h=Cn,f=1){if(h!==Cn&&h!==fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,i,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},po=class extends qn{constructor(t,e=vn,n=hi,i,o,r=Ce,a=Ce,c,l=Cn){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,o,r,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ks=class extends Ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},he=class s extends ue{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};let a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);let c=[],l=[],h=[],f=[],u=0,d=0;p("z","y","x",-1,-1,n,e,t,r,o,0),p("z","y","x",1,-1,n,e,-t,r,o,1),p("x","z","y",1,1,t,n,e,i,r,2),p("x","z","y",1,-1,t,n,-e,i,r,3),p("x","y","z",1,-1,t,e,n,i,o,4),p("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(f,2));function p(_,g,m,y,S,b,A,M,w,x,E){let R=b/w,C=A/x,D=b/2,z=A/2,H=M/2,L=w+1,N=x+1,F=0,q=0,K=new I;for(let tt=0;tt<N;tt++){let st=tt*C-z;for(let ft=0;ft<L;ft++){let qt=ft*R-D;K[_]=qt*y,K[g]=st*S,K[m]=H,l.push(K.x,K.y,K.z),K[_]=0,K[g]=0,K[m]=M>0?1:-1,h.push(K.x,K.y,K.z),f.push(ft/w),f.push(1-tt/x),F+=1}}for(let tt=0;tt<x;tt++)for(let st=0;st<w;st++){let ft=u+st+L*tt,qt=u+st+L*(tt+1),ce=u+(st+1)+L*(tt+1),jt=u+(st+1)+L*tt;c.push(ft,qt,jt),c.push(qt,ce,jt),q+=6}a.addGroup(d,q,E),d+=q,u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var zs=class s extends ue{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let o=[],r=[],a=[],c=[],l=new I,h=new lt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new Wt(r,3)),this.setAttribute("normal",new Wt(a,3)),this.setAttribute("uv",new Wt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ge=class s extends ue{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),o=Math.floor(o);let h=[],f=[],u=[],d=[],p=0,_=[],g=n/2,m=0;y(),r===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Wt(f,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(d,2));function y(){let b=new I,A=new I,M=0,w=(e-t)/n;for(let x=0;x<=o;x++){let E=[],R=x/o,C=R*(e-t)+t;for(let D=0;D<=i;D++){let z=D/i,H=z*c+a,L=Math.sin(H),N=Math.cos(H);A.x=C*L,A.y=-R*n+g,A.z=C*N,f.push(A.x,A.y,A.z),b.set(L,w,N).normalize(),u.push(b.x,b.y,b.z),d.push(z,1-R),E.push(p++)}_.push(E)}for(let x=0;x<i;x++)for(let E=0;E<o;E++){let R=_[E][x],C=_[E+1][x],D=_[E+1][x+1],z=_[E][x+1];(t>0||E!==0)&&(h.push(R,C,z),M+=3),(e>0||E!==o-1)&&(h.push(C,D,z),M+=3)}l.addGroup(m,M,0),m+=M}function S(b){let A=p,M=new lt,w=new I,x=0,E=b===!0?t:e,R=b===!0?1:-1;for(let D=1;D<=i;D++)f.push(0,g*R,0),u.push(0,R,0),d.push(.5,.5),p++;let C=p;for(let D=0;D<=i;D++){let H=D/i*c+a,L=Math.cos(H),N=Math.sin(H);w.x=E*N,w.y=g*R,w.z=E*L,f.push(w.x,w.y,w.z),u.push(0,R,0),M.x=L*.5+.5,M.y=N*.5*R+.5,d.push(M.x,M.y),p++}for(let D=0;D<i;D++){let z=A+D,H=C+D;b===!0?h.push(H,H+1,z):h.push(H+1,H,z),x+=3}l.addGroup(m,x,b===!0?1:2),m+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ue=class s extends ge{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},mo=class s extends ue{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let o=[],r=[];a(i),l(n),h(),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(o.slice(),3)),this.setAttribute("uv",new Wt(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let S=new I,b=new I,A=new I;for(let M=0;M<e.length;M+=3)d(e[M+0],S),d(e[M+1],b),d(e[M+2],A),c(S,b,A,y)}function c(y,S,b,A){let M=A+1,w=[];for(let x=0;x<=M;x++){w[x]=[];let E=y.clone().lerp(b,x/M),R=S.clone().lerp(b,x/M),C=M-x;for(let D=0;D<=C;D++)D===0&&x===M?w[x][D]=E:w[x][D]=E.clone().lerp(R,D/C)}for(let x=0;x<M;x++)for(let E=0;E<2*(M-x)-1;E++){let R=Math.floor(E/2);E%2===0?(u(w[x][R+1]),u(w[x+1][R]),u(w[x][R])):(u(w[x][R+1]),u(w[x+1][R+1]),u(w[x+1][R]))}}function l(y){let S=new I;for(let b=0;b<o.length;b+=3)S.x=o[b+0],S.y=o[b+1],S.z=o[b+2],S.normalize().multiplyScalar(y),o[b+0]=S.x,o[b+1]=S.y,o[b+2]=S.z}function h(){let y=new I;for(let S=0;S<o.length;S+=3){y.x=o[S+0],y.y=o[S+1],y.z=o[S+2];let b=g(y)/2/Math.PI+.5,A=m(y)/Math.PI+.5;r.push(b,1-A)}p(),f()}function f(){for(let y=0;y<r.length;y+=6){let S=r[y+0],b=r[y+2],A=r[y+4],M=Math.max(S,b,A),w=Math.min(S,b,A);M>.9&&w<.1&&(S<.2&&(r[y+0]+=1),b<.2&&(r[y+2]+=1),A<.2&&(r[y+4]+=1))}}function u(y){o.push(y.x,y.y,y.z)}function d(y,S){let b=y*3;S.x=t[b+0],S.y=t[b+1],S.z=t[b+2]}function p(){let y=new I,S=new I,b=new I,A=new I,M=new lt,w=new lt,x=new lt;for(let E=0,R=0;E<o.length;E+=9,R+=6){y.set(o[E+0],o[E+1],o[E+2]),S.set(o[E+3],o[E+4],o[E+5]),b.set(o[E+6],o[E+7],o[E+8]),M.set(r[R+0],r[R+1]),w.set(r[R+2],r[R+3]),x.set(r[R+4],r[R+5]),A.copy(y).add(S).add(b).divideScalar(3);let C=g(A);_(M,R+0,y,C),_(w,R+2,S,C),_(x,R+4,b,C)}}function _(y,S,b,A){A<0&&y.x===1&&(r[S]=y.x-1),b.x===0&&b.z===0&&(r[S]=A/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Bt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,o=n.length,r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(o-1);let h=n[i],u=n[i+1]-h,d=(r-h)/u;return(i+d)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);let r=this.getPoint(i),a=this.getPoint(o),c=e||(r.isVector2?new lt:new I);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,i=[],o=[],r=[],a=new I,c=new be;for(let d=0;d<=t;d++){let p=d/t;i[d]=this.getTangentAt(p,new I)}o[0]=new I,r[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(te(i[d-1].dot(i[d]),-1,1));o[d].applyMatrix4(c.makeRotationAxis(a,p))}r[d].crossVectors(i[d],o[d])}if(e===!0){let d=Math.acos(te(o[0].dot(o[t]),-1,1));d/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let p=1;p<=t;p++)o[p].applyMatrix4(c.makeRotationAxis(i[p],d*p)),r[p].crossVectors(i[p],o[p])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ss=class extends on{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new lt){let n=e,i=Math.PI*2,o=this.aEndAngle-this.aStartAngle,r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);let a=this.aStartAngle+t*o,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},go=class extends ss{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}};function Kc(){let s=0,t=0,e=0,n=0;function i(o,r,a,c){s=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){i(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,f){let u=(r-o)/l-(a-o)/(l+h)+(a-r)/h,d=(a-r)/h-(c-r)/(h+f)+(c-a)/f;u*=h,d*=h,i(r,a,u,d)},calc:function(o){let r=o*o,a=r*o;return s+t*o+e*r+n*a}}}var sh=new I,rh=new I,fc=new Kc,dc=new Kc,pc=new Kc,oi=class extends on{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t,a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%o]:(rh.subVectors(i[0],i[1]).add(i[0]),l=rh);let f=i[a%o],u=i[(a+1)%o];if(this.closed||a+2<o?h=i[(a+2)%o]:(sh.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=sh),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),fc.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,p,_,g),dc.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,p,_,g),pc.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(fc.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),dc.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),pc.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(fc.calc(c),dc.calc(c),pc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function oh(s,t,e,n,i){let o=(n-t)*.5,r=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*s+e}function Yf(s,t){let e=1-s;return e*e*t}function Zf(s,t){return 2*(1-s)*s*t}function Jf(s,t){return s*s*t}function Es(s,t,e,n){return Yf(s,t)+Zf(s,e)+Jf(s,n)}function Kf(s,t){let e=1-s;return e*e*e*t}function $f(s,t){let e=1-s;return 3*e*e*s*t}function jf(s,t){return 3*(1-s)*s*s*t}function Qf(s,t){return s*s*s*t}function Ts(s,t,e,n,i){return Kf(s,t)+$f(s,e)+jf(s,n)+Qf(s,i)}var Hs=class extends on{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){let n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ts(t,i.x,o.x,r.x,a.x),Ts(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xo=class extends on{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ts(t,i.x,o.x,r.x,a.x),Ts(t,i.y,o.y,r.y,a.y),Ts(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Gs=class extends on{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_o=class extends on{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vs=class extends on{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(Es(t,i.x,o.x,r.x),Es(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wi=class extends on{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(Es(t,i.x,o.x,r.x),Es(t,i.y,o.y,r.y),Es(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ws=class extends on{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],f=i[r>i.length-3?i.length-1:r+2];return n.set(oh(a,c.x,l.x,h.x,f.x),oh(a,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new lt().fromArray(i))}return this}},yo=Object.freeze({__proto__:null,ArcCurve:go,CatmullRomCurve3:oi,CubicBezierCurve:Hs,CubicBezierCurve3:xo,EllipseCurve:ss,LineCurve:Gs,LineCurve3:_o,QuadraticBezierCurve:Vs,QuadraticBezierCurve3:wi,SplineCurve:Ws}),vo=class extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),o=0;for(;o<i.length;){if(i[o]>=n){let r=i[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,o=this.curves;i<o.length;i++){let r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new yo[i.type]().fromJSON(i))}return this}},Xs=class extends vo{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Gs(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let o=new Vs(this.currentPoint.clone(),new lt(t,e),new lt(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){let a=new Hs(this.currentPoint.clone(),new lt(t,e),new lt(n,i),new lt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ws(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,o,r,a,c),this}absellipse(t,e,n,i,o,r,a,c){let l=new ss(t,e,n,i,o,r,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},_n=class extends Xs{constructor(t){super(t),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Xs().fromJSON(i))}return this}};function td(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,o=jh(s,0,i,e,!0),r=[];if(!o||o.next===o.prev)return r;let a,c,l;if(n&&(o=rd(s,t,o,e)),s.length>80*e){a=s[0],c=s[1];let h=a,f=c;for(let u=e;u<i;u+=e){let d=s[u],p=s[u+1];d<a&&(a=d),p<c&&(c=p),d>h&&(h=d),p>f&&(f=p)}l=Math.max(h-a,f-c),l=l!==0?32767/l:0}return qs(o,r,e,a,c,l,0),r}function jh(s,t,e,n,i){let o;if(i===gd(s,t,e,n)>0)for(let r=t;r<e;r+=n)o=ah(r/n|0,s[r],s[r+1],o);else for(let r=e-n;r>=t;r-=n)o=ah(r/n|0,s[r],s[r+1],o);return o&&rs(o,o.next)&&(Zs(o),o=o.next),o}function Ai(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(rs(e,e.next)||Se(e.prev,e,e.next)===0)){if(Zs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function qs(s,t,e,n,i,o,r){if(!s)return;!r&&o&&hd(s,n,i,o);let a=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(o?nd(s,n,i,o):ed(s)){t.push(c.i,s.i,l.i),Zs(s),s=l.next,a=l.next;continue}if(s=l,s===a){r?r===1?(s=id(Ai(s),t),qs(s,t,e,n,i,o,2)):r===2&&sd(s,t,e,n,i,o):qs(Ai(s),t,e,n,i,o,1);break}}}function ed(s){let t=s.prev,e=s,n=s.next;if(Se(t,e,n)>=0)return!1;let i=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(i,o,r),f=Math.min(a,c,l),u=Math.max(i,o,r),d=Math.max(a,c,l),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=f&&p.y<=d&&bs(i,a,o,c,r,l,p.x,p.y)&&Se(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function nd(s,t,e,n){let i=s.prev,o=s,r=s.next;if(Se(i,o,r)>=0)return!1;let a=i.x,c=o.x,l=r.x,h=i.y,f=o.y,u=r.y,d=Math.min(a,c,l),p=Math.min(h,f,u),_=Math.max(a,c,l),g=Math.max(h,f,u),m=Sc(d,p,t,e,n),y=Sc(_,g,t,e,n),S=s.prevZ,b=s.nextZ;for(;S&&S.z>=m&&b&&b.z<=y;){if(S.x>=d&&S.x<=_&&S.y>=p&&S.y<=g&&S!==i&&S!==r&&bs(a,h,c,f,l,u,S.x,S.y)&&Se(S.prev,S,S.next)>=0||(S=S.prevZ,b.x>=d&&b.x<=_&&b.y>=p&&b.y<=g&&b!==i&&b!==r&&bs(a,h,c,f,l,u,b.x,b.y)&&Se(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;S&&S.z>=m;){if(S.x>=d&&S.x<=_&&S.y>=p&&S.y<=g&&S!==i&&S!==r&&bs(a,h,c,f,l,u,S.x,S.y)&&Se(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;b&&b.z<=y;){if(b.x>=d&&b.x<=_&&b.y>=p&&b.y<=g&&b!==i&&b!==r&&bs(a,h,c,f,l,u,b.x,b.y)&&Se(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function id(s,t){let e=s;do{let n=e.prev,i=e.next.next;!rs(n,i)&&tu(n,e,e.next,i)&&Ys(n,i)&&Ys(i,n)&&(t.push(n.i,e.i,i.i),Zs(e),Zs(e.next),e=s=i),e=e.next}while(e!==s);return Ai(e)}function sd(s,t,e,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&dd(r,a)){let c=eu(r,a);r=Ai(r,r.next),c=Ai(c,c.next),qs(r,t,e,n,i,o,0),qs(c,t,e,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function rd(s,t,e,n){let i=[];for(let o=0,r=t.length;o<r;o++){let a=t[o]*n,c=o<r-1?t[o+1]*n:s.length,l=jh(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(fd(l))}i.sort(od);for(let o=0;o<i.length;o++)e=ad(i[o],e);return e}function od(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function ad(s,t){let e=cd(s,t);if(!e)return t;let n=eu(e,s);return Ai(n,n.next),Ai(e,e.next)}function cd(s,t){let e=t,n=s.x,i=s.y,o=-1/0,r;if(rs(s,e))return e;do{if(rs(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>o&&(o=f,r=e.x<e.next.x?e:e.next,f===n))return r}e=e.next}while(e!==t);if(!r)return null;let a=r,c=r.x,l=r.y,h=1/0;e=r;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Qh(i<l?n:o,i,c,l,i<l?o:n,i,e.x,e.y)){let f=Math.abs(i-e.y)/(n-e.x);Ys(e,s)&&(f<h||f===h&&(e.x>r.x||e.x===r.x&&ld(r,e)))&&(r=e,h=f)}e=e.next}while(e!==a);return r}function ld(s,t){return Se(s.prev,s,t.prev)<0&&Se(t.next,s,s.next)<0}function hd(s,t,e,n){let i=s;do i.z===0&&(i.z=Sc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ud(i)}function ud(s){let t,e=1;do{let n=s,i;s=null;let o=null;for(t=0;n;){t++;let r=n,a=0;for(let l=0;l<e&&(a++,r=r.nextZ,!!r);l++);let c=e;for(;a>0||c>0&&r;)a!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,a--):(i=r,r=r.nextZ,c--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;n=r}o.nextZ=null,e*=2}while(t>1);return s}function Sc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function fd(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Qh(s,t,e,n,i,o,r,a){return(i-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(i-r)*(n-a)}function bs(s,t,e,n,i,o,r,a){return!(s===r&&t===a)&&Qh(s,t,e,n,i,o,r,a)}function dd(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!pd(s,t)&&(Ys(s,t)&&Ys(t,s)&&md(s,t)&&(Se(s.prev,s,t.prev)||Se(s,t.prev,t))||rs(s,t)&&Se(s.prev,s,s.next)>0&&Se(t.prev,t,t.next)>0)}function Se(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function rs(s,t){return s.x===t.x&&s.y===t.y}function tu(s,t,e,n){let i=Zr(Se(s,t,e)),o=Zr(Se(s,t,n)),r=Zr(Se(e,n,s)),a=Zr(Se(e,n,t));return!!(i!==o&&r!==a||i===0&&Yr(s,e,t)||o===0&&Yr(s,n,t)||r===0&&Yr(e,s,n)||a===0&&Yr(e,t,n))}function Yr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Zr(s){return s>0?1:s<0?-1:0}function pd(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&tu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ys(s,t){return Se(s.prev,s,s.next)<0?Se(s,t,s.next)>=0&&Se(s,s.prev,t)>=0:Se(s,t,s.prev)<0||Se(s,s.next,t)<0}function md(s,t){let e=s,n=!1,i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function eu(s,t){let e=Ec(s.i,s.x,s.y),n=Ec(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function ah(s,t,e,n){let i=Ec(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Zs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ec(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function gd(s,t,e,n){let i=0;for(let o=t,r=e-n;o<e;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}var Tc=class{static triangulate(t,e,n=2){return td(t,e,n)}},bi=class s{static area(t){let e=t.length,n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],o=[];ch(t),lh(n,t);let r=t.length;e.forEach(ch);for(let c=0;c<e.length;c++)i.push(r),r+=e[c].length,lh(n,e[c]);let a=Tc.triangulate(n,i);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}};function ch(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function lh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Dn=class s extends ue{constructor(t=new _n([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],o=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];r(l)}this.setAttribute("position",new Wt(i,3)),this.setAttribute("uv",new Wt(o,2)),this.computeVertexNormals();function r(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:xd,S,b=!1,A,M,w,x;if(m){S=m.getSpacedPoints(h),b=!0,u=!1;let nt=m.isCatmullRomCurve3?m.closed:!1;A=m.computeFrenetFrames(h,nt),M=new I,w=new I,x=new I}u||(g=0,d=0,p=0,_=0);let E=a.extractPoints(l),R=E.shape,C=E.holes;if(!bi.isClockWise(R)){R=R.reverse();for(let nt=0,at=C.length;nt<at;nt++){let ot=C[nt];bi.isClockWise(ot)&&(C[nt]=ot.reverse())}}function z(nt){let ot=10000000000000001e-36,vt=nt[0];for(let xt=1;xt<=nt.length;xt++){let kt=xt%nt.length,Pt=nt[kt],Vt=Pt.x-vt.x,Zt=Pt.y-vt.y,U=Vt*Vt+Zt*Zt,fe=Math.max(Math.abs(Pt.x),Math.abs(Pt.y),Math.abs(vt.x),Math.abs(vt.y)),ee=ot*fe*fe;if(U<=ee){nt.splice(kt,1),xt--;continue}vt=Pt}}z(R),C.forEach(z);let H=C.length,L=R;for(let nt=0;nt<H;nt++){let at=C[nt];R=R.concat(at)}function N(nt,at,ot){return at||Ht("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(at,ot)}let F=R.length;function q(nt,at,ot){let vt,xt,kt,Pt=nt.x-at.x,Vt=nt.y-at.y,Zt=ot.x-nt.x,U=ot.y-nt.y,fe=Pt*Pt+Vt*Vt,ee=Pt*U-Vt*Zt;if(Math.abs(ee)>Number.EPSILON){let P=Math.sqrt(fe),v=Math.sqrt(Zt*Zt+U*U),k=at.x-Vt/P,W=at.y+Pt/P,Z=ot.x-U/v,ht=ot.y+Zt/v,ut=((Z-k)*U-(ht-W)*Zt)/(Pt*U-Vt*Zt);vt=k+Pt*ut-nt.x,xt=W+Vt*ut-nt.y;let J=vt*vt+xt*xt;if(J<=2)return new lt(vt,xt);kt=Math.sqrt(J/2)}else{let P=!1;Pt>Number.EPSILON?Zt>Number.EPSILON&&(P=!0):Pt<-Number.EPSILON?Zt<-Number.EPSILON&&(P=!0):Math.sign(Vt)===Math.sign(U)&&(P=!0),P?(vt=-Vt,xt=Pt,kt=Math.sqrt(fe)):(vt=Pt,xt=Vt,kt=Math.sqrt(fe/2))}return new lt(vt/kt,xt/kt)}let K=[];for(let nt=0,at=L.length,ot=at-1,vt=nt+1;nt<at;nt++,ot++,vt++)ot===at&&(ot=0),vt===at&&(vt=0),K[nt]=q(L[nt],L[ot],L[vt]);let tt=[],st,ft=K.concat();for(let nt=0,at=H;nt<at;nt++){let ot=C[nt];st=[];for(let vt=0,xt=ot.length,kt=xt-1,Pt=vt+1;vt<xt;vt++,kt++,Pt++)kt===xt&&(kt=0),Pt===xt&&(Pt=0),st[vt]=q(ot[vt],ot[kt],ot[Pt]);tt.push(st),ft=ft.concat(st)}let qt;if(g===0)qt=bi.triangulateShape(L,C);else{let nt=[],at=[];for(let ot=0;ot<g;ot++){let vt=ot/g,xt=d*Math.cos(vt*Math.PI/2),kt=p*Math.sin(vt*Math.PI/2)+_;for(let Pt=0,Vt=L.length;Pt<Vt;Pt++){let Zt=N(L[Pt],K[Pt],kt);wt(Zt.x,Zt.y,-xt),vt===0&&nt.push(Zt)}for(let Pt=0,Vt=H;Pt<Vt;Pt++){let Zt=C[Pt];st=tt[Pt];let U=[];for(let fe=0,ee=Zt.length;fe<ee;fe++){let P=N(Zt[fe],st[fe],kt);wt(P.x,P.y,-xt),vt===0&&U.push(P)}vt===0&&at.push(U)}}qt=bi.triangulateShape(nt,at)}let ce=qt.length,jt=p+_;for(let nt=0;nt<F;nt++){let at=u?N(R[nt],ft[nt],jt):R[nt];b?(w.copy(A.normals[0]).multiplyScalar(at.x),M.copy(A.binormals[0]).multiplyScalar(at.y),x.copy(S[0]).add(w).add(M),wt(x.x,x.y,x.z)):wt(at.x,at.y,0)}for(let nt=1;nt<=h;nt++)for(let at=0;at<F;at++){let ot=u?N(R[at],ft[at],jt):R[at];b?(w.copy(A.normals[nt]).multiplyScalar(ot.x),M.copy(A.binormals[nt]).multiplyScalar(ot.y),x.copy(S[nt]).add(w).add(M),wt(x.x,x.y,x.z)):wt(ot.x,ot.y,f/h*nt)}for(let nt=g-1;nt>=0;nt--){let at=nt/g,ot=d*Math.cos(at*Math.PI/2),vt=p*Math.sin(at*Math.PI/2)+_;for(let xt=0,kt=L.length;xt<kt;xt++){let Pt=N(L[xt],K[xt],vt);wt(Pt.x,Pt.y,f+ot)}for(let xt=0,kt=C.length;xt<kt;xt++){let Pt=C[xt];st=tt[xt];for(let Vt=0,Zt=Pt.length;Vt<Zt;Vt++){let U=N(Pt[Vt],st[Vt],vt);b?wt(U.x,U.y+S[h-1].y,S[h-1].x+ot):wt(U.x,U.y,f+ot)}}}Y(),ct();function Y(){let nt=i.length/3;if(u){let at=0,ot=F*at;for(let vt=0;vt<ce;vt++){let xt=qt[vt];Gt(xt[2]+ot,xt[1]+ot,xt[0]+ot)}at=h+g*2,ot=F*at;for(let vt=0;vt<ce;vt++){let xt=qt[vt];Gt(xt[0]+ot,xt[1]+ot,xt[2]+ot)}}else{for(let at=0;at<ce;at++){let ot=qt[at];Gt(ot[2],ot[1],ot[0])}for(let at=0;at<ce;at++){let ot=qt[at];Gt(ot[0]+F*h,ot[1]+F*h,ot[2]+F*h)}}n.addGroup(nt,i.length/3-nt,0)}function ct(){let nt=i.length/3,at=0;rt(L,at),at+=L.length;for(let ot=0,vt=C.length;ot<vt;ot++){let xt=C[ot];rt(xt,at),at+=xt.length}n.addGroup(nt,i.length/3-nt,1)}function rt(nt,at){let ot=nt.length;for(;--ot>=0;){let vt=ot,xt=ot-1;xt<0&&(xt=nt.length-1);for(let kt=0,Pt=h+g*2;kt<Pt;kt++){let Vt=F*kt,Zt=F*(kt+1),U=at+vt+Vt,fe=at+xt+Vt,ee=at+xt+Zt,P=at+vt+Zt;Ut(U,fe,ee,P)}}}function wt(nt,at,ot){c.push(nt),c.push(at),c.push(ot)}function Gt(nt,at,ot){ae(nt),ae(at),ae(ot);let vt=i.length/3,xt=y.generateTopUV(n,i,vt-3,vt-2,vt-1);Xt(xt[0]),Xt(xt[1]),Xt(xt[2])}function Ut(nt,at,ot,vt){ae(nt),ae(at),ae(vt),ae(at),ae(ot),ae(vt);let xt=i.length/3,kt=y.generateSideWallUV(n,i,xt-6,xt-3,xt-2,xt-1);Xt(kt[0]),Xt(kt[1]),Xt(kt[3]),Xt(kt[1]),Xt(kt[2]),Xt(kt[3])}function ae(nt){i.push(c[nt*3+0]),i.push(c[nt*3+1]),i.push(c[nt*3+2])}function Xt(nt){o.push(nt.x),o.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return _d(e,n,t)}static fromJSON(t,e){let n=[];for(let o=0,r=t.shapes.length;o<r;o++){let a=e[t.shapes[o]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new yo[i.type]().fromJSON(i)),new s(n,t.options)}},xd={generateTopUV:function(s,t,e,n,i){let o=t[e*3],r=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new lt(o,r),new lt(a,c),new lt(l,h)]},generateSideWallUV:function(s,t,e,n,i,o){let r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[i*3],d=t[i*3+1],p=t[i*3+2],_=t[o*3],g=t[o*3+1],m=t[o*3+2];return Math.abs(a-h)<Math.abs(r-l)?[new lt(r,1-c),new lt(l,1-f),new lt(u,1-p),new lt(_,1-m)]:[new lt(a,1-c),new lt(h,1-f),new lt(d,1-p),new lt(g,1-m)]}};function _d(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let o=s[n];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Js=class s extends mo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Ks=class s extends ue{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=te(i,0,Math.PI*2);let o=[],r=[],a=[],c=[],l=[],h=1/e,f=new I,u=new lt,d=new I,p=new I,_=new I,g=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-g,d.z=m*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(p)}for(let y=0;y<=e;y++){let S=n+y*h*i,b=Math.sin(S),A=Math.cos(S);for(let M=0;M<=t.length-1;M++){f.x=t[M].x*b,f.y=t[M].y,f.z=t[M].x*A,r.push(f.x,f.y,f.z),u.x=y/e,u.y=M/(t.length-1),a.push(u.x,u.y);let w=c[3*M+0]*b,x=c[3*M+1],E=c[3*M+0]*A;l.push(w,x,E)}}for(let y=0;y<e;y++)for(let S=0;S<t.length-1;S++){let b=S+y*t.length,A=b,M=b+t.length,w=b+t.length+1,x=b+1;o.push(A,M,x),o.push(w,x,M)}this.setIndex(o),this.setAttribute("position",new Wt(r,3)),this.setAttribute("uv",new Wt(a,2)),this.setAttribute("normal",new Wt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Ge=class s extends ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,f=t/a,u=e/c,d=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let y=m*u-r;for(let S=0;S<l;S++){let b=S*f-o;p.push(b,-y,0),_.push(0,0,1),g.push(S/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<a;y++){let S=y+l*m,b=y+l*(m+1),A=y+1+l*(m+1),M=y+1+l*m;d.push(S,b,M),d.push(b,A,M)}this.setIndex(d),this.setAttribute("position",new Wt(p,3)),this.setAttribute("normal",new Wt(_,3)),this.setAttribute("uv",new Wt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var oe=class s extends ue{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(r+a,Math.PI),l=0,h=[],f=new I,u=new I,d=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){let y=[],S=m/n,b=r+S*a,A=t*Math.cos(b),M=Math.sqrt(t*t-A*A),w=0;m===0&&r===0?w=.5/e:m===n&&c===Math.PI&&(w=-.5/e);for(let x=0;x<=e;x++){let E=x/e,R=i+E*o;f.x=-M*Math.cos(R),f.y=A,f.z=M*Math.sin(R),p.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),g.push(E+w,1-S),y.push(l++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){let S=h[m][y+1],b=h[m][y],A=h[m+1][y],M=h[m+1][y+1];(m!==0||r>0)&&d.push(S,b,M),(m!==n-1||c<Math.PI)&&d.push(b,A,M)}this.setIndex(d),this.setAttribute("position",new Wt(p,3)),this.setAttribute("normal",new Wt(_,3)),this.setAttribute("uv",new Wt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var $e=class s extends ue{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2,r=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o,thetaStart:r,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],f=[],u=new I,d=new I,p=new I;for(let _=0;_<=n;_++){let g=r+_/n*a;for(let m=0;m<=i;m++){let y=m/i*o;d.x=(t+e*Math.cos(g))*Math.cos(y),d.y=(t+e*Math.cos(g))*Math.sin(y),d.z=e*Math.sin(g),l.push(d.x,d.y,d.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),p.subVectors(d,u).normalize(),h.push(p.x,p.y,p.z),f.push(m/i),f.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=i;g++){let m=(i+1)*_+g-1,y=(i+1)*(_-1)+g-1,S=(i+1)*(_-1)+g,b=(i+1)*_+g;c.push(m,y,b),c.push(y,S,b)}this.setIndex(c),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ri=class s extends ue{constructor(t=new wi(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o};let r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let a=new I,c=new I,l=new lt,h=new I,f=[],u=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Wt(f,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(d,2));function _(){for(let S=0;S<e;S++)g(S);g(o===!1?e:0),y(),m()}function g(S){h=t.getPointAt(S/e,h);let b=r.normals[S],A=r.binormals[S];for(let M=0;M<=i;M++){let w=M/i*Math.PI*2,x=Math.sin(w),E=-Math.cos(w);c.x=E*b.x+x*A.x,c.y=E*b.y+x*A.y,c.z=E*b.z+x*A.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,f.push(a.x,a.y,a.z)}}function m(){for(let S=1;S<=e;S++)for(let b=1;b<=i;b++){let A=(i+1)*(S-1)+(b-1),M=(i+1)*S+(b-1),w=(i+1)*S+b,x=(i+1)*(S-1)+b;p.push(A,M,x),p.push(M,w,x)}}function y(){for(let S=0;S<=e;S++)for(let b=0;b<=i;b++)l.x=S/e,l.y=b/i,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new yo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ii(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(hh(i))i.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(hh(i[0])){let o=[];for(let r=0,a=i.length;r<a;r++)o[r]=i[r].clone();t[e][n]=o}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Ye(s){let t={};for(let e=0;e<s.length;e++){let n=Ii(s[e]);for(let i in n)t[i]=n[i]}return t}function hh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function yd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function $c(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var nu={clone:Ii,merge:Ye},vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends Ln{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vd,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ii(t.uniforms),this.uniformsGroups=yd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Ft().setHex(i.value);break;case"v2":this.uniforms[n].value=new lt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new I().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new be().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},bo=class extends an{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Dt=class extends Ln{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var $s=class extends Ln{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ft(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Mo=class extends Ln{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},So=class extends Ln{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Jr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}var ai=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],o=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(n=2,o=a);for(let c=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=o,o=e[--n-1],t>=o)break t}r=n,n=0;break e}break n}for(;n<r;){let a=n+r>>>1;t<e[a]?r=a:n=a+1}if(i=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,i)}return this.interpolate_(n,o,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=t*i;for(let r=0;r!==i;++r)e[r]=n[o+r];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Eo=class extends ai{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xc,endingEnd:xc}}intervalChanged_(t,e,n){let i=this.parameterPositions,o=t-2,r=t+1,a=i[o],c=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case _c:o=t,a=2*e-n;break;case yc:o=i.length-2,a=e+i[o]-i[o+1];break;default:o=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case _c:r=t,c=2*n-e;break;case yc:r=1,c=n+i[1]-i[0];break;default:r=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=o*h,this._offsetNext=r*h}interpolate_(t,e,n,i){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),_=p*p,g=_*p,m=-u*g+2*u*_-u*p,y=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*p+1,S=(-1-d)*g+(1.5+d)*_+.5*p,b=d*g-d*_;for(let A=0;A!==a;++A)o[A]=m*r[h+A]+y*r[l+A]+S*r[c+A]+b*r[f+A];return o}},To=class extends ai{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==a;++u)o[u]=r[l+u]*f+r[c+u]*h;return o}},wo=class extends ai{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Ao=class extends ai{interpolate_(t,e,n,i){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-e)/(i-e),_=1-p;for(let g=0;g!==a;++g)o[g]=r[l+g]*_+r[c+g]*p;return o}let u=a*2,d=t-1;for(let p=0;p!==a;++p){let _=r[l+p],g=r[c+p],m=d*u+p*2,y=f[m],S=f[m+1],b=t*u+p*2,A=h[b],M=h[b+1],w=(n-e)/(i-e),x,E,R,C,D;for(let z=0;z<8;z++){x=w*w,E=x*w,R=1-w,C=R*R,D=C*R;let L=D*e+3*C*w*y+3*R*x*A+E*i-n;if(Math.abs(L)<1e-10)break;let N=3*C*(y-e)+6*R*w*(A-y)+3*x*(i-A);if(Math.abs(N)<1e-10)break;w=w-L/N,w=Math.max(0,Math.min(1,w))}o[p]=D*_+3*C*w*S+3*R*x*M+E*g}return o}},cn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Jr(e,this.TimeBufferType),this.values=Jr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Jr(t.times,Array),values:Jr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new wo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new To(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ao(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ws:e=this.InterpolantFactoryMethodDiscrete;break;case lo:e=this.InterpolantFactoryMethodLinear;break;case jr:e=this.InterpolantFactoryMethodSmooth;break;case gc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Bt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ws;case this.InterpolantFactoryMethodLinear:return lo;case this.InterpolantFactoryMethodSmooth:return jr;case this.InterpolantFactoryMethodBezier:return gc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,o=0,r=i-1;for(;o!==i&&n[o]<t;)++o;for(;r!==-1&&n[r]>e;)--r;if(++r,o!==0||r!==i){o>=r&&(r=Math.max(r,1),o=r-1);let a=this.getValueSize();this.times=n.slice(o,r),this.values=this.values.slice(o*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,o=n.length;o===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==o;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ht("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(r!==null&&r>c){Ht("KeyframeTrack: Out of order keys.",this,a,c,r),t=!1;break}r=c}if(i!==void 0&&ff(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){Ht("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===jr,o=t.length-1,r=1;for(let a=1;a<o;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let f=a*n,u=f-n,d=f+n;for(let p=0;p!==n;++p){let _=e[f+p];if(_!==e[u+p]||_!==e[d+p]){c=!0;break}}}if(c){if(a!==r){t[r]=t[a];let f=a*n,u=r*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++r}}if(o>0){t[r]=t[o];for(let a=o*n,c=r*n,l=0;l!==n;++l)e[c+l]=e[a+l];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};cn.prototype.ValueTypeName="";cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=lo;var ci=class extends cn{constructor(t,e,n){super(t,e,n)}};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=ws;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Ro=class extends cn{constructor(t,e,n,i){super(t,e,n,i)}};Ro.prototype.ValueTypeName="color";var Co=class extends cn{constructor(t,e,n,i){super(t,e,n,i)}};Co.prototype.ValueTypeName="number";var Po=class extends ai{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)In.slerpFlat(o,0,r,l-a,r,l,c);return o}},js=class extends cn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Po(this.times,this.values,this.getValueSize(),t)}};js.prototype.ValueTypeName="quaternion";js.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends cn{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=ws;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends cn{constructor(t,e,n,i){super(t,e,n,i)}};Io.prototype.ValueTypeName="vector";var Lo=class{constructor(t,e,n){let i=this,o=!1,r=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,o===!1&&i.onStart!==void 0&&i.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],p=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},iu=new Lo,Do=class{constructor(t){this.manager=t!==void 0?t:iu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,o){n.load(t,i,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Do.DEFAULT_MATERIAL_NAME="__DEFAULT";var os=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Qs=class extends os{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},mc=new be,uh=new I,fh=new I,wc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ns,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;uh.setFromMatrixPosition(t.matrixWorld),e.position.copy(uh),fh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fh),e.updateMatrixWorld(),mc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Ki||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Kr=new I,$r=new In,wn=new I,tr=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Kr,$r,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kr,$r,wn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Kr,$r,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kr,$r,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ni=new I,dh=new lt,ph=new lt,ke=class extends tr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ji*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,dh,ph),e.subVectors(ph,dh)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var as=class extends tr{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,o=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ac=class extends wc{constructor(){super(new as(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},er=class extends os{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new Ac}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},nr=class extends os{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var qi=-90,Yi=1,No=class extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ke(qi,Yi,t,e);i.layers=this.layers,this.add(i);let o=new ke(qi,Yi,t,e);o.layers=this.layers,this.add(o);let r=new ke(qi,Yi,t,e);r.layers=this.layers,this.add(r);let a=new ke(qi,Yi,t,e);a.layers=this.layers,this.add(a);let c=new ke(qi,Yi,t,e);c.layers=this.layers,this.add(c);let l=new ke(qi,Yi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,c]=e;for(let l of e)this.remove(l);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ki)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,r,a,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Uo=class extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var jc="\\[\\]\\.:\\/",Md=new RegExp("["+jc+"]","g"),Qc="[^"+jc+"]",Sd="[^"+jc.replace("\\.","")+"]",Ed=/((?:WC+[\/:])*)/.source.replace("WC",Qc),Td=/(WCOD+)?/.source.replace("WCOD",Sd),wd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qc),Ad=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qc),Rd=new RegExp("^"+Ed+Td+wd+Ad+"$"),Cd=["material","materials","bones","map"],Rc=class{constructor(t,e,n){let i=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,o=n.length;i!==o;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Md,"")}static parseTrackName(t){let e=Rd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let o=n.nodeName.substring(i+1);Cd.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(o){for(let r=0;r<o.length;r++){let a=o[r];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,o=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=o}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=Rc;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qx=new Float32Array(1);var ir=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Bt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var rl=class rl{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=i,this}};rl.prototype.isMatrix2=!0;var Cc=rl;function tl(s,t,e,n){let i=Pd(n);switch(e){case Xc:return s*t;case lr:return s*t/i.components*i.byteLength;case Vo:return s*t/i.components*i.byteLength;case di:return s*t*2/i.components*i.byteLength;case Wo:return s*t*2/i.components*i.byteLength;case qc:return s*t*3/i.components*i.byteLength;case un:return s*t*4/i.components*i.byteLength;case Xo:return s*t*4/i.components*i.byteLength;case hr:case ur:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fr:case dr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yo:case Jo:return Math.max(s,16)*Math.max(t,8)/4;case qo:case Zo:return Math.max(s,8)*Math.max(t,8)/2;case Ko:case $o:case Qo:case ta:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case jo:case pr:case ea:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ia:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case sa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ra:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case oa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case aa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ca:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case la:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ha:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ua:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case fa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case da:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case pa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ma:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ga:case xa:case _a:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ya:case va:return Math.ceil(s/4)*Math.ceil(t/4)*8;case mr:case ba:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Pd(s){switch(s){case Qe:case Hc:return{byteLength:1,components:1};case ls:case Gc:case Un:return{byteLength:2,components:1};case Ho:case Go:return{byteLength:2,components:4};case vn:case zo:case bn:return{byteLength:4,components:1};case Vc:case Wc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function wu(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function Bd(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,f=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let h=c.array,f=c.updateRanges;if(s.bindBuffer(l,a),f.length===0)s.bufferSubData(l,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){let p=f[u],_=f[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){let _=f[d];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:o,update:r}}var kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zd=`#ifdef USE_ALPHAHASH
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
#endif`,Hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xd=`#ifdef USE_AOMAP
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
#endif`,qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yd=`#ifdef USE_BATCHING
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
#endif`,Zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$d=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jd=`#ifdef USE_IRIDESCENCE
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
#endif`,Qd=`#ifdef USE_BUMPMAP
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
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cp=`#define PI 3.141592653589793
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
} // validated`,lp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hp=`vec3 transformedNormal = objectNormal;
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
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",gp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yp=`#ifdef USE_ENVMAP
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
#endif`,vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wp=`#ifdef USE_GRADIENTMAP
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
}`,Ap=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fp=`PhysicalMaterial material;
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
#endif`,Op=`uniform sampler2D dfgLUT;
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
}`,Bp=`
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
#endif`,kp=`#if defined( RE_IndirectDiffuse )
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
#endif`,zp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jp=`#if defined( USE_POINTS_UV )
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
#endif`,Kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`#ifdef USE_MORPHTARGETS
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
#endif`,nm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,im=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cm=`#ifdef USE_NORMALMAP
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
#endif`,lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,um=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Em=`float getShadowMask() {
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
}`,Tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wm=`#ifdef USE_SKINNING
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
#endif`,Am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rm=`#ifdef USE_SKINNING
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
#endif`,Cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dm=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zm=`uniform sampler2D t2D;
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`#include <common>
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
}`,qm=`#if DEPTH_PACKING == 3200
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
}`,Ym=`#define DISTANCE
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
}`,Zm=`#define DISTANCE
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`uniform float scale;
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
}`,jm=`uniform vec3 diffuse;
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
}`,Qm=`#include <common>
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
}`,t0=`uniform vec3 diffuse;
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
}`,e0=`#define LAMBERT
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
}`,n0=`#define LAMBERT
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
}`,i0=`#define MATCAP
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
}`,s0=`#define MATCAP
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
}`,r0=`#define NORMAL
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
}`,o0=`#define NORMAL
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
}`,a0=`#define PHONG
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
}`,c0=`#define PHONG
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
}`,l0=`#define STANDARD
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
}`,h0=`#define STANDARD
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
}`,u0=`#define TOON
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
}`,f0=`#define TOON
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
}`,d0=`uniform float size;
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#include <common>
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
}`,g0=`uniform vec3 color;
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
}`,x0=`uniform float rotation;
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
}`,_0=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:kd,alphahash_pars_fragment:zd,alphamap_fragment:Hd,alphamap_pars_fragment:Gd,alphatest_fragment:Vd,alphatest_pars_fragment:Wd,aomap_fragment:Xd,aomap_pars_fragment:qd,batching_pars_vertex:Yd,batching_vertex:Zd,begin_vertex:Jd,beginnormal_vertex:Kd,bsdfs:$d,iridescence_fragment:jd,bumpmap_pars_fragment:Qd,clipping_planes_fragment:tp,clipping_planes_pars_fragment:ep,clipping_planes_pars_vertex:np,clipping_planes_vertex:ip,color_fragment:sp,color_pars_fragment:rp,color_pars_vertex:op,color_vertex:ap,common:cp,cube_uv_reflection_fragment:lp,defaultnormal_vertex:hp,displacementmap_pars_vertex:up,displacementmap_vertex:fp,emissivemap_fragment:dp,emissivemap_pars_fragment:pp,colorspace_fragment:mp,colorspace_pars_fragment:gp,envmap_fragment:xp,envmap_common_pars_fragment:_p,envmap_pars_fragment:yp,envmap_pars_vertex:vp,envmap_physical_pars_fragment:Ip,envmap_vertex:bp,fog_vertex:Mp,fog_pars_vertex:Sp,fog_fragment:Ep,fog_pars_fragment:Tp,gradientmap_pars_fragment:wp,lightmap_pars_fragment:Ap,lights_lambert_fragment:Rp,lights_lambert_pars_fragment:Cp,lights_pars_begin:Pp,lights_toon_fragment:Lp,lights_toon_pars_fragment:Dp,lights_phong_fragment:Np,lights_phong_pars_fragment:Up,lights_physical_fragment:Fp,lights_physical_pars_fragment:Op,lights_fragment_begin:Bp,lights_fragment_maps:kp,lights_fragment_end:zp,lightprobes_pars_fragment:Hp,logdepthbuf_fragment:Gp,logdepthbuf_pars_fragment:Vp,logdepthbuf_pars_vertex:Wp,logdepthbuf_vertex:Xp,map_fragment:qp,map_pars_fragment:Yp,map_particle_fragment:Zp,map_particle_pars_fragment:Jp,metalnessmap_fragment:Kp,metalnessmap_pars_fragment:$p,morphinstance_vertex:jp,morphcolor_vertex:Qp,morphnormal_vertex:tm,morphtarget_pars_vertex:em,morphtarget_vertex:nm,normal_fragment_begin:im,normal_fragment_maps:sm,normal_pars_fragment:rm,normal_pars_vertex:om,normal_vertex:am,normalmap_pars_fragment:cm,clearcoat_normal_fragment_begin:lm,clearcoat_normal_fragment_maps:hm,clearcoat_pars_fragment:um,iridescence_pars_fragment:fm,opaque_fragment:dm,packing:pm,premultiplied_alpha_fragment:mm,project_vertex:gm,dithering_fragment:xm,dithering_pars_fragment:_m,roughnessmap_fragment:ym,roughnessmap_pars_fragment:vm,shadowmap_pars_fragment:bm,shadowmap_pars_vertex:Mm,shadowmap_vertex:Sm,shadowmask_pars_fragment:Em,skinbase_vertex:Tm,skinning_pars_vertex:wm,skinning_vertex:Am,skinnormal_vertex:Rm,specularmap_fragment:Cm,specularmap_pars_fragment:Pm,tonemapping_fragment:Im,tonemapping_pars_fragment:Lm,transmission_fragment:Dm,transmission_pars_fragment:Nm,uv_pars_fragment:Um,uv_pars_vertex:Fm,uv_vertex:Om,worldpos_vertex:Bm,background_vert:km,background_frag:zm,backgroundCube_vert:Hm,backgroundCube_frag:Gm,cube_vert:Vm,cube_frag:Wm,depth_vert:Xm,depth_frag:qm,distance_vert:Ym,distance_frag:Zm,equirect_vert:Jm,equirect_frag:Km,linedashed_vert:$m,linedashed_frag:jm,meshbasic_vert:Qm,meshbasic_frag:t0,meshlambert_vert:e0,meshlambert_frag:n0,meshmatcap_vert:i0,meshmatcap_frag:s0,meshnormal_vert:r0,meshnormal_frag:o0,meshphong_vert:a0,meshphong_frag:c0,meshphysical_vert:l0,meshphysical_frag:h0,meshtoon_vert:u0,meshtoon_frag:f0,points_vert:d0,points_frag:p0,shadow_vert:m0,shadow_frag:g0,sprite_vert:x0,sprite_frag:_0},yt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},On={basic:{uniforms:Ye([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ye([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ye([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ye([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ye([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ye([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ye([yt.points,yt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ye([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ye([yt.common,yt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ye([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ye([yt.sprite,yt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:Ye([yt.common,yt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:Ye([yt.lights,yt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};On.physical={uniforms:Ye([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var Ea={r:0,b:0,g:0},y0=new be,Au=new Yt;Au.set(-1,0,0,0,1,0,0,0,1);function v0(s,t,e,n,i,o){let r=new Ft(0),a=i===!0?0:1,c,l,h=null,f=0,u=null;function d(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let b=y.backgroundBlurriness>0;S=t.get(S,b)}return S}function p(y){let S=!1,b=d(y);b===null?g(r,a):b&&b.isColor&&(g(b,1),S=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(y,S){let b=d(S);b&&(b.isCubeTexture||b.mapping===ar)?(l===void 0&&(l=new et(new he(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Ii(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(y0.makeRotationFromEuler(S.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Au),l.material.toneMapped=ne.getTransfer(b.colorSpace)!==le,(h!==b||f!==b.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,u=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new et(new Ge(2,2),new an({name:"BackgroundMaterial",uniforms:Ii(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ne.getTransfer(b.colorSpace)!==le,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,u=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,S){y.getRGB(Ea,$c(s)),e.buffers.color.setClear(Ea.r,Ea.g,Ea.b,S,o)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(y,S=1){r.set(y),a=S,g(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(r,a)},render:p,addToRenderList:_,dispose:m}}function b0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),o=i,r=!1;function a(C,D,z,H,L){let N=!1,F=f(C,H,z,D);o!==F&&(o=F,l(o.object)),N=d(C,H,z,L),N&&p(C,H,z,L),L!==null&&t.update(L,s.ELEMENT_ARRAY_BUFFER),(N||r)&&(r=!1,b(C,D,z,H),L!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return s.createVertexArray()}function l(C){return s.bindVertexArray(C)}function h(C){return s.deleteVertexArray(C)}function f(C,D,z,H){let L=H.wireframe===!0,N=n[D.id];N===void 0&&(N={},n[D.id]=N);let F=C.isInstancedMesh===!0?C.id:0,q=N[F];q===void 0&&(q={},N[F]=q);let K=q[z.id];K===void 0&&(K={},q[z.id]=K);let tt=K[L];return tt===void 0&&(tt=u(c()),K[L]=tt),tt}function u(C){let D=[],z=[],H=[];for(let L=0;L<e;L++)D[L]=0,z[L]=0,H[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:H,object:C,attributes:{},index:null}}function d(C,D,z,H){let L=o.attributes,N=D.attributes,F=0,q=z.getAttributes();for(let K in q)if(q[K].location>=0){let st=L[K],ft=N[K];if(ft===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(ft=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(ft=C.instanceColor)),st===void 0||st.attribute!==ft||ft&&st.data!==ft.data)return!0;F++}return o.attributesNum!==F||o.index!==H}function p(C,D,z,H){let L={},N=D.attributes,F=0,q=z.getAttributes();for(let K in q)if(q[K].location>=0){let st=N[K];st===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(st=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(st=C.instanceColor));let ft={};ft.attribute=st,st&&st.data&&(ft.data=st.data),L[K]=ft,F++}o.attributes=L,o.attributesNum=F,o.index=H}function _(){let C=o.newAttributes;for(let D=0,z=C.length;D<z;D++)C[D]=0}function g(C){m(C,0)}function m(C,D){let z=o.newAttributes,H=o.enabledAttributes,L=o.attributeDivisors;z[C]=1,H[C]===0&&(s.enableVertexAttribArray(C),H[C]=1),L[C]!==D&&(s.vertexAttribDivisor(C,D),L[C]=D)}function y(){let C=o.newAttributes,D=o.enabledAttributes;for(let z=0,H=D.length;z<H;z++)D[z]!==C[z]&&(s.disableVertexAttribArray(z),D[z]=0)}function S(C,D,z,H,L,N,F){F===!0?s.vertexAttribIPointer(C,D,z,L,N):s.vertexAttribPointer(C,D,z,H,L,N)}function b(C,D,z,H){_();let L=H.attributes,N=z.getAttributes(),F=D.defaultAttributeValues;for(let q in N){let K=N[q];if(K.location>=0){let tt=L[q];if(tt===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor)),tt!==void 0){let st=tt.normalized,ft=tt.itemSize,qt=t.get(tt);if(qt===void 0)continue;let ce=qt.buffer,jt=qt.type,Y=qt.bytesPerElement,ct=jt===s.INT||jt===s.UNSIGNED_INT||tt.gpuType===zo;if(tt.isInterleavedBufferAttribute){let rt=tt.data,wt=rt.stride,Gt=tt.offset;if(rt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<K.locationSize;Ut++)m(K.location+Ut,rt.meshPerAttribute);C.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ut=0;Ut<K.locationSize;Ut++)g(K.location+Ut);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let Ut=0;Ut<K.locationSize;Ut++)S(K.location+Ut,ft/K.locationSize,jt,st,wt*Y,(Gt+ft/K.locationSize*Ut)*Y,ct)}else{if(tt.isInstancedBufferAttribute){for(let rt=0;rt<K.locationSize;rt++)m(K.location+rt,tt.meshPerAttribute);C.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let rt=0;rt<K.locationSize;rt++)g(K.location+rt);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let rt=0;rt<K.locationSize;rt++)S(K.location+rt,ft/K.locationSize,jt,st,ft*Y,ft/K.locationSize*rt*Y,ct)}}else if(F!==void 0){let st=F[q];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(K.location,st);break;case 3:s.vertexAttrib3fv(K.location,st);break;case 4:s.vertexAttrib4fv(K.location,st);break;default:s.vertexAttrib1fv(K.location,st)}}}}y()}function A(){E();for(let C in n){let D=n[C];for(let z in D){let H=D[z];for(let L in H){let N=H[L];for(let F in N)h(N[F].object),delete N[F];delete H[L]}}delete n[C]}}function M(C){if(n[C.id]===void 0)return;let D=n[C.id];for(let z in D){let H=D[z];for(let L in H){let N=H[L];for(let F in N)h(N[F].object),delete N[F];delete H[L]}}delete n[C.id]}function w(C){for(let D in n){let z=n[D];for(let H in z){let L=z[H];if(L[C.id]===void 0)continue;let N=L[C.id];for(let F in N)h(N[F].object),delete N[F];delete L[C.id]}}}function x(C){for(let D in n){let z=n[D],H=C.isInstancedMesh===!0?C.id:0,L=z[H];if(L!==void 0){for(let N in L){let F=L[N];for(let q in F)h(F[q].object),delete F[q];delete L[N]}delete z[H],Object.keys(z).length===0&&delete n[D]}}}function E(){R(),r=!0,o!==i&&(o=i,l(o.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:M,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function M0(s,t,e){let n;function i(c){n=c}function o(c,l){s.drawArrays(n,c,l),e.update(l,n,1)}function r(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];e.update(u,n,1)}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a}function S0(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(w){return!(w!==un&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let x=w===Un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Qe&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==bn&&!x)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Bt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),M=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:b,maxSamples:A,samples:M}}function E0(s){let t=this,e=null,n=0,i=!1,o=!1,r=new An,a=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let p=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,m=s.get(f);if(!i||p===null||p.length===0||o&&!g)o?h(null):l();else{let y=o?0:n,S=y*4,b=m.clippingState||null;c.value=b,b=h(p,u,S,d);for(let A=0;A!==S;++A)b[A]=e[A];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,p){let _=f!==null?f.length:0,g=null;if(_!==0){if(g=c.value,p!==!0||g===null){let m=d+_*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,b=d;S!==_;++S,b+=4)r.copy(f[S]).applyMatrix4(y,a),r.normal.toArray(g,b),g[b+3]=r.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var pi=4,su=[.125,.215,.35,.446,.526,.582],Li=20,T0=256,xr=new as,ru=new Ft,ol=null,al=0,cl=0,ll=!1,w0=new I,wa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,o={}){let{size:r=256,position:a=w0}=o;ol=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ol,al,cl),this._renderer.xr.enabled=ll,t.scissorTest=!1,us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hi||t.mapping===Ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ol=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:Un,format:un,colorSpace:As,depthBuffer:!1},i=ou(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ou(t,e,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=A0(o)),this._blurMaterial=C0(o,t,e),this._ggxMaterial=R0(o,t,e)}return i}_compileMaterial(t){let e=new et(new ue,t);this._renderer.compile(e,xr)}_sceneToCubeUV(t,e,n,i,o){let c=new ke(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(ru),f.toneMapping=yn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new et(new he,new Ee({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,m=!1,y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,m=!0):(g.color.copy(ru),m=!0);for(let S=0;S<6;S++){let b=S%3;b===0?(c.up.set(0,l[S],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+h[S],o.y,o.z)):b===1?(c.up.set(0,0,l[S]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+h[S],o.z)):(c.up.set(0,l[S],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+h[S]));let A=this._cubeSize;us(i,b*A,S>2?A:0,A,A),f.setRenderTarget(i),m&&f.render(_,c),f.render(t,c)}f.toneMapping=d,f.autoClear=u,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===hi||t.mapping===Ci;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=au());let o=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=o;let a=o.uniforms;a.envMap.value=t;let c=this._cubeSize;us(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,xr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let o=1;o<i;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,o=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;let c=r.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=0+l*1.25,d=f*u,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-pi?n-p+pi:0),m=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=p-e,us(o,g,m,3*_,2*_),i.setRenderTarget(o),i.render(a,xr),c.envMap.value=o.texture,c.roughness.value=0,c.mipInt.value=p-n,us(t,g,m,3*_,2*_),i.setRenderTarget(t),i.render(a,xr)}_blur(t,e,n,i,o){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){let c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Ht("blur direction must be either latitudinal or longitudinal!");let h=3,f=this._lodMeshes[i];f.material=l;let u=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*Li-1),_=o/p,g=isFinite(o)?1+Math.floor(h*_):Li;g>Li&&Bt(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Li}`);let m=[],y=0;for(let w=0;w<Li;++w){let x=w/_,E=Math.exp(-x*x/2);m.push(E),w===0?y+=E:w<g&&(y+=2*E)}for(let w=0;w<m.length;w++)m[w]=m[w]/y;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:S}=this;u.dTheta.value=p,u.mipInt.value=S-n;let b=this._sizeLods[i],A=3*b*(i>S-pi?i-S+pi:0),M=4*(this._cubeSize-b);us(e,A,M,3*b,2*b),c.setRenderTarget(e),c.render(f,xr)}};function A0(s){let t=[],e=[],n=[],i=s,o=s-pi+1+su.length;for(let r=0;r<o;r++){let a=Math.pow(2,i);t.push(a);let c=1/a;r>s-pi?c=su[r-s+pi-1]:r===0&&(c=0),e.push(c);let l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,p=6,_=3,g=2,m=1,y=new Float32Array(_*p*d),S=new Float32Array(g*p*d),b=new Float32Array(m*p*d);for(let M=0;M<d;M++){let w=M%3*2/3-1,x=M>2?0:-1,E=[w,x,0,w+2/3,x,0,w+2/3,x+1,0,w,x,0,w+2/3,x+1,0,w,x+1,0];y.set(E,_*p*M),S.set(u,g*p*M);let R=[M,M,M,M,M,M];b.set(R,m*p*M)}let A=new ue;A.setAttribute("position",new Ne(y,_)),A.setAttribute("uv",new Ne(S,g)),A.setAttribute("faceIndex",new Ne(b,m)),n.push(new et(A,null)),i>pi&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function ou(s,t,e){let n=new rn(s,t,e);return n.texture.mapping=ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function us(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function R0(s,t,e){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:T0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function C0(s,t,e){let n=new Float32Array(Li),i=new I(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function au(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function cu(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ca(){return`

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
	`}var Aa=class extends rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Bs(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new he(5,5,5),o=new an({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Nn});o.uniforms.tEquirect.value=e;let r=new et(i,o),a=e.minFilter;return e.minFilter===ui&&(e.minFilter=ze),new No(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}};function P0(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?r(u):o(u)}function o(u){if(u&&u.isTexture){let d=u.mapping;if(d===Oo||d===Bo)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new Aa(p.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",l),a(_.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let d=u.mapping,p=d===Oo||d===Bo,_=d===hi||d===Ci;if(p||_){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new wa(s)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let y=u.image;return p&&y&&y.height>0||_&&y&&c(y)?(n===null&&(n=new wa(s)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,d){return d===Oo?u.mapping=hi:d===Bo&&(u.mapping=Ci),u}function c(u){let d=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&d++;return d===p}function l(u){let d=u.target;d.removeEventListener("dispose",l);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function I0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Mi("WebGLRenderer: "+n+" extension not supported."),i}}}function L0(s,t,e,n){let i={},o=new WeakMap;function r(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",r),delete i[u.id];let d=o.get(u);d&&(t.remove(d),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function c(f){let u=f.attributes;for(let d in u)t.update(u[d],s.ARRAY_BUFFER)}function l(f){let u=[],d=f.index,p=f.attributes.position,_=0;if(p===void 0)return;if(d!==null){let y=d.array;_=d.version;for(let S=0,b=y.length;S<b;S+=3){let A=y[S+0],M=y[S+1],w=y[S+2];u.push(A,M,M,w,w,A)}}else{let y=p.array;_=p.version;for(let S=0,b=y.length/3-1;S<b;S+=3){let A=S+0,M=S+1,w=S+2;u.push(A,M,M,w,w,A)}}let g=new(p.count>=65535?Us:Ns)(u,1);g.version=_;let m=o.get(f);m&&t.remove(m),o.set(f,g)}function h(f){let u=o.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return o.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function D0(s,t,e){let n;function i(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function c(f,u){s.drawElements(n,u,o,f*r),e.update(u,n,1)}function l(f,u,d){d!==0&&(s.drawElementsInstanced(n,u,o,f*r,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,o,f,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function N0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:Ht("WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function U0(s,t,e){let n=new WeakMap,i=new Me;function o(r,a,c){let l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let E=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],S=0;d===!0&&(S=1),p===!0&&(S=2),_===!0&&(S=3);let b=a.attributes.position.count*S,A=1;b>t.maxTextureSize&&(A=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let M=new Float32Array(b*A*4*f),w=new Ps(M,b,A,f);w.type=bn,w.needsUpdate=!0;let x=S*4;for(let R=0;R<f;R++){let C=g[R],D=m[R],z=y[R],H=b*A*4*R;for(let L=0;L<C.count;L++){let N=L*x;d===!0&&(i.fromBufferAttribute(C,L),M[H+N+0]=i.x,M[H+N+1]=i.y,M[H+N+2]=i.z,M[H+N+3]=0),p===!0&&(i.fromBufferAttribute(D,L),M[H+N+4]=i.x,M[H+N+5]=i.y,M[H+N+6]=i.z,M[H+N+7]=0),_===!0&&(i.fromBufferAttribute(z,L),M[H+N+8]=i.x,M[H+N+9]=i.y,M[H+N+10]=i.z,M[H+N+11]=z.itemSize===4?i.w:1)}}u={count:f,texture:w,size:new lt(b,A)},n.set(a,u),a.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let p=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:o}}function F0(s,t,e,n,i){let o=new WeakMap;function r(l){let h=i.render.frame,f=l.geometry,u=t.get(l,f);if(o.get(u)!==h&&(t.update(u),o.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),o.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),o.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;o.get(d)!==h&&(d.update(),o.set(d,h))}return u}function a(){o=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}var O0={[Nc]:"LINEAR_TONE_MAPPING",[Uc]:"REINHARD_TONE_MAPPING",[Fc]:"CINEON_TONE_MAPPING",[or]:"ACES_FILMIC_TONE_MAPPING",[Bc]:"AGX_TONE_MAPPING",[kc]:"NEUTRAL_TONE_MAPPING",[Oc]:"CUSTOM_TONE_MAPPING"};function B0(s,t,e,n,i,o){let r=new rn(t,e,{type:s,depthBuffer:i,stencilBuffer:o,samples:n?4:0,depthTexture:i?new qn(t,e):void 0}),a=new rn(t,e,{type:Un,depthBuffer:!1,stencilBuffer:!1}),c=new ue;c.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Wt([0,2,0,0,2,0],2));let l=new bo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new et(c,l),f=new as(-1,1,1,-1,0,1),u=null,d=null,p=!1,_,g=null,m=[],y=!1;this.setSize=function(S,b){r.setSize(S,b),a.setSize(S,b);for(let A=0;A<m.length;A++){let M=m[A];M.setSize&&M.setSize(S,b)}},this.setEffects=function(S){m=S,y=m.length>0&&m[0].isRenderPass===!0;let b=r.width,A=r.height;for(let M=0;M<m.length;M++){let w=m[M];w.setSize&&w.setSize(b,A)}},this.begin=function(S,b){if(p||S.toneMapping===yn&&m.length===0)return!1;if(g=b,b!==null){let A=b.width,M=b.height;(r.width!==A||r.height!==M)&&this.setSize(A,M)}return y===!1&&S.setRenderTarget(r),_=S.toneMapping,S.toneMapping=yn,!0},this.hasRenderPass=function(){return y},this.end=function(S,b){S.toneMapping=_,p=!0;let A=r,M=a;for(let w=0;w<m.length;w++){let x=m[w];if(x.enabled!==!1&&(x.render(S,M,A,b),x.needsSwap!==!1)){let E=A;A=M,M=E}}if(u!==S.outputColorSpace||d!==S.toneMapping){u=S.outputColorSpace,d=S.toneMapping,l.defines={},ne.getTransfer(u)===le&&(l.defines.SRGB_TRANSFER="");let w=O0[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=A.texture,S.setRenderTarget(g),S.render(h,f),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),c.dispose(),l.dispose()}}var Ru=new Ke,fl=new qn(1,1),Cu=new Ps,Pu=new fo,Iu=new Bs,lu=[],hu=[],uu=new Float32Array(16),fu=new Float32Array(9),du=new Float32Array(4);function ds(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,o=lu[i];if(o===void 0&&(o=new Float32Array(i),lu[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function Fe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Oe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Pa(s,t){let e=hu[t];e===void 0&&(e=new Int32Array(t),hu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function k0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function z0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2fv(this.addr,t),Oe(e,t)}}function H0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;s.uniform3fv(this.addr,t),Oe(e,t)}}function G0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4fv(this.addr,t),Oe(e,t)}}function V0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;du.set(n),s.uniformMatrix2fv(this.addr,!1,du),Oe(e,n)}}function W0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;fu.set(n),s.uniformMatrix3fv(this.addr,!1,fu),Oe(e,n)}}function X0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;uu.set(n),s.uniformMatrix4fv(this.addr,!1,uu),Oe(e,n)}}function q0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Y0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2iv(this.addr,t),Oe(e,t)}}function Z0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3iv(this.addr,t),Oe(e,t)}}function J0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4iv(this.addr,t),Oe(e,t)}}function K0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function $0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2uiv(this.addr,t),Oe(e,t)}}function j0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3uiv(this.addr,t),Oe(e,t)}}function Q0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4uiv(this.addr,t),Oe(e,t)}}function tg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(fl.compareFunction=e.isReversedDepthBuffer()?Sa:Ma,o=fl):o=Ru,e.setTexture2D(t||o,i)}function eg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Pu,i)}function ng(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Iu,i)}function ig(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Cu,i)}function sg(s){switch(s){case 5126:return k0;case 35664:return z0;case 35665:return H0;case 35666:return G0;case 35674:return V0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return q0;case 35667:case 35671:return Y0;case 35668:case 35672:return Z0;case 35669:case 35673:return J0;case 5125:return K0;case 36294:return $0;case 36295:return j0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}function rg(s,t){s.uniform1fv(this.addr,t)}function og(s,t){let e=ds(t,this.size,2);s.uniform2fv(this.addr,e)}function ag(s,t){let e=ds(t,this.size,3);s.uniform3fv(this.addr,e)}function cg(s,t){let e=ds(t,this.size,4);s.uniform4fv(this.addr,e)}function lg(s,t){let e=ds(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function hg(s,t){let e=ds(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ug(s,t){let e=ds(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function fg(s,t){s.uniform1iv(this.addr,t)}function dg(s,t){s.uniform2iv(this.addr,t)}function pg(s,t){s.uniform3iv(this.addr,t)}function mg(s,t){s.uniform4iv(this.addr,t)}function gg(s,t){s.uniform1uiv(this.addr,t)}function xg(s,t){s.uniform2uiv(this.addr,t)}function _g(s,t){s.uniform3uiv(this.addr,t)}function yg(s,t){s.uniform4uiv(this.addr,t)}function vg(s,t,e){let n=this.cache,i=t.length,o=Pa(e,i);Fe(n,o)||(s.uniform1iv(this.addr,o),Oe(n,o));let r;this.type===s.SAMPLER_2D_SHADOW?r=fl:r=Ru;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||r,o[a])}function bg(s,t,e){let n=this.cache,i=t.length,o=Pa(e,i);Fe(n,o)||(s.uniform1iv(this.addr,o),Oe(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Pu,o[r])}function Mg(s,t,e){let n=this.cache,i=t.length,o=Pa(e,i);Fe(n,o)||(s.uniform1iv(this.addr,o),Oe(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Iu,o[r])}function Sg(s,t,e){let n=this.cache,i=t.length,o=Pa(e,i);Fe(n,o)||(s.uniform1iv(this.addr,o),Oe(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Cu,o[r])}function Eg(s){switch(s){case 5126:return rg;case 35664:return og;case 35665:return ag;case 35666:return cg;case 35674:return lg;case 35675:return hg;case 35676:return ug;case 5124:case 35670:return fg;case 35667:case 35671:return dg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return xg;case 36295:return _g;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return Sg}}var dl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sg(e.type)}},pl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Eg(e.type)}},ml=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let o=0,r=i.length;o!==r;++o){let a=i[o];a.setValue(t,e[a.id],n)}}},hl=/(\w+)(\])?(\[|\.)?/g;function pu(s,t){s.seq.push(t),s.map[t.id]=t}function Tg(s,t,e){let n=s.name,i=n.length;for(hl.lastIndex=0;;){let o=hl.exec(n),r=hl.lastIndex,a=o[1],c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){pu(e,l===void 0?new dl(a,s,t):new pl(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new ml(a),pu(e,f)),e=f}}}var fs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),c=t.getUniformLocation(e,a.name);Tg(a,c,this)}let i=[],o=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(r):o.push(r);i.length>0&&(this.seq=i.concat(o))}setValue(t,e,n,i){let o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){let a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,o=t.length;i!==o;++i){let r=t[i];r.id in e&&n.push(r)}return n}};function mu(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var wg=37297,Ag=0;function Rg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){let a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}var gu=new Yt;function Cg(s){ne._getMatrix(gu,ne.workingColorSpace,s);let t=`mat3( ${gu.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(s)){case Rs:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function xu(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),o=(s.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";let r=/ERROR: 0:(\d+)/.exec(o);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+o+`

`+Rg(s.getShaderSource(t),a)}else return o}function Pg(s,t){let e=Cg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Ig={[Nc]:"Linear",[Uc]:"Reinhard",[Fc]:"Cineon",[or]:"ACESFilmic",[Bc]:"AgX",[kc]:"Neutral",[Oc]:"Custom"};function Lg(s,t){let e=Ig[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ta=new I;function Dg(){ne.getLuminanceCoefficients(Ta);let s=Ta.x.toFixed(4),t=Ta.y.toFixed(4),e=Ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ng(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function Ug(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let o=s.getActiveAttrib(t,i),r=o.name,a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function yr(s){return s!==""}function _u(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Og=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(s){return s.replace(Og,kg)}var Bg=new Map;function kg(s,t){let e=$t[t];if(e===void 0){let n=Bg.get(t);if(n!==void 0)e=$t[n],Bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return gl(e)}var zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(s){return s.replace(zg,Hg)}function Hg(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function bu(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var Gg={[sr]:"SHADOWMAP_TYPE_PCF",[cs]:"SHADOWMAP_TYPE_VSM"};function Vg(s){return Gg[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wg={[hi]:"ENVMAP_TYPE_CUBE",[Ci]:"ENVMAP_TYPE_CUBE",[ar]:"ENVMAP_TYPE_CUBE_UV"};function Xg(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Wg[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var qg={[Ci]:"ENVMAP_MODE_REFRACTION"};function Yg(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":qg[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Zg={[Dc]:"ENVMAP_BLENDING_MULTIPLY",[Fh]:"ENVMAP_BLENDING_MIX",[Oh]:"ENVMAP_BLENDING_ADD"};function Jg(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Zg[s.combine]||"ENVMAP_BLENDING_NONE"}function Kg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $g(s,t,e,n){let i=s.getContext(),o=e.defines,r=e.vertexShader,a=e.fragmentShader,c=Vg(e),l=Xg(e),h=Yg(e),f=Jg(e),u=Kg(e),d=Ng(e),p=Ug(o),_=i.createProgram(),g,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(yr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(yr).join(`
`),m.length>0&&(m+=`
`)):(g=[bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),m=[bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?$t.tonemapping_pars_fragment:"",e.toneMapping!==yn?Lg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Pg("linearToOutputTexel",e.outputColorSpace),Dg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yr).join(`
`)),r=gl(r),r=_u(r,e),r=yu(r,e),a=gl(a),a=_u(a,e),a=yu(a,e),r=vu(r),a=vu(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=y+g+r,b=y+m+a,A=mu(i,i.VERTEX_SHADER,S),M=mu(i,i.FRAGMENT_SHADER,b);i.attachShader(_,A),i.attachShader(_,M),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(C){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(_)||"",z=i.getShaderInfoLog(A)||"",H=i.getShaderInfoLog(M)||"",L=D.trim(),N=z.trim(),F=H.trim(),q=!0,K=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,M);else{let tt=xu(i,A,"vertex"),st=xu(i,M,"fragment");Ht("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+tt+`
`+st)}else L!==""?Bt("WebGLProgram: Program Info Log:",L):(N===""||F==="")&&(K=!1);K&&(C.diagnostics={runnable:q,programLog:L,vertexShader:{log:N,prefix:g},fragmentShader:{log:F,prefix:m}})}i.deleteShader(A),i.deleteShader(M),x=new fs(i,_),E=Fg(i,_)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(_,wg)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ag++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=M,this}var jg=0,xl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new _l(t),e.set(t,n)),n}},_l=class{constructor(t){this.id=jg++,this.code=t,this.usedTimes=0}};function Qg(s){return s===di||s===pr||s===mr}function tx(s,t,e,n,i,o){let r=new Is,a=new xl,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,E,R,C,D,z){let H=C.fog,L=D.geometry,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,q=t.get(x.envMap||N,F),K=q&&q.mapping===ar?q.image.height:null,tt=d[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Bt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let st=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ft=st!==void 0?st.length:0,qt=0;L.morphAttributes.position!==void 0&&(qt=1),L.morphAttributes.normal!==void 0&&(qt=2),L.morphAttributes.color!==void 0&&(qt=3);let ce,jt,Y,ct;if(tt){let At=On[tt];ce=At.vertexShader,jt=At.fragmentShader}else{ce=x.vertexShader,jt=x.fragmentShader;let At=a.getVertexShaderStage(x),Te=a.getFragmentShaderStage(x);a.update(x,At,Te),Y=At.id,ct=Te.id}let rt=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),Gt=D.isInstancedMesh===!0,Ut=D.isBatchedMesh===!0,ae=!!x.map,Xt=!!x.matcap,nt=!!q,at=!!x.aoMap,ot=!!x.lightMap,vt=!!x.bumpMap&&x.wireframe===!1,xt=!!x.normalMap,kt=!!x.displacementMap,Pt=!!x.emissiveMap,Vt=!!x.metalnessMap,Zt=!!x.roughnessMap,U=x.anisotropy>0,fe=x.clearcoat>0,ee=x.dispersion>0,P=x.iridescence>0,v=x.sheen>0,k=x.transmission>0,W=U&&!!x.anisotropyMap,Z=fe&&!!x.clearcoatMap,ht=fe&&!!x.clearcoatNormalMap,ut=fe&&!!x.clearcoatRoughnessMap,J=P&&!!x.iridescenceMap,Q=P&&!!x.iridescenceThicknessMap,pt=v&&!!x.sheenColorMap,It=v&&!!x.sheenRoughnessMap,_t=!!x.specularMap,mt=!!x.specularColorMap,Ot=!!x.specularIntensityMap,zt=k&&!!x.transmissionMap,Jt=k&&!!x.thicknessMap,O=!!x.gradientMap,dt=!!x.alphaMap,j=x.alphaTest>0,gt=!!x.alphaHash,St=!!x.extensions,it=yn;x.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(it=s.toneMapping);let Ct={shaderID:tt,shaderType:x.type,shaderName:x.name,vertexShader:ce,fragmentShader:jt,defines:x.defines,customVertexShaderID:Y,customFragmentShaderID:ct,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Ut,batchingColor:Ut&&D._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&D.instanceColor!==null,instancingMorph:Gt&&D.morphTexture!==null,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ae,matcap:Xt,envMap:nt,envMapMode:nt&&q.mapping,envMapCubeUVHeight:K,aoMap:at,lightMap:ot,bumpMap:vt,normalMap:xt,displacementMap:kt,emissiveMap:Pt,normalMapObjectSpace:xt&&x.normalMapType===zh,normalMapTangentSpace:xt&&x.normalMapType===gr,packedNormalMap:xt&&x.normalMapType===gr&&Qg(x.normalMap.format),metalnessMap:Vt,roughnessMap:Zt,anisotropy:U,anisotropyMap:W,clearcoat:fe,clearcoatMap:Z,clearcoatNormalMap:ht,clearcoatRoughnessMap:ut,dispersion:ee,iridescence:P,iridescenceMap:J,iridescenceThicknessMap:Q,sheen:v,sheenColorMap:pt,sheenRoughnessMap:It,specularMap:_t,specularColorMap:mt,specularIntensityMap:Ot,transmission:k,transmissionMap:zt,thicknessMap:Jt,gradientMap:O,opaque:x.transparent===!1&&x.blending===Si&&x.alphaToCoverage===!1,alphaMap:dt,alphaTest:j,alphaHash:gt,combine:x.combine,mapUv:ae&&p(x.map.channel),aoMapUv:at&&p(x.aoMap.channel),lightMapUv:ot&&p(x.lightMap.channel),bumpMapUv:vt&&p(x.bumpMap.channel),normalMapUv:xt&&p(x.normalMap.channel),displacementMapUv:kt&&p(x.displacementMap.channel),emissiveMapUv:Pt&&p(x.emissiveMap.channel),metalnessMapUv:Vt&&p(x.metalnessMap.channel),roughnessMapUv:Zt&&p(x.roughnessMap.channel),anisotropyMapUv:W&&p(x.anisotropyMap.channel),clearcoatMapUv:Z&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ht&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:It&&p(x.sheenRoughnessMap.channel),specularMapUv:_t&&p(x.specularMap.channel),specularColorMapUv:mt&&p(x.specularColorMap.channel),specularIntensityMapUv:Ot&&p(x.specularIntensityMap.channel),transmissionMapUv:zt&&p(x.transmissionMap.channel),thicknessMapUv:Jt&&p(x.thicknessMap.channel),alphaMapUv:dt&&p(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(xt||U),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(ae||dt),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&xt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:wt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:qt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:ae&&x.map.isVideoTexture===!0&&ne.getTransfer(x.map.colorSpace)===le,decodeVideoTextureEmissive:Pt&&x.emissiveMap.isVideoTexture===!0&&ne.getTransfer(x.emissiveMap.colorSpace)===le,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===je,flipSided:x.side===Ve,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:St&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&x.extensions.multiDraw===!0||Ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function g(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)E.push(R),E.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(E,x),y(E,x),E.push(s.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function m(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function y(x,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),E.packedNormalMap&&r.enable(22),E.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),E.numLightProbeGrids>0&&r.enable(22),E.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function S(x){let E=d[x.type],R;if(E){let C=On[E];R=nu.clone(C.uniforms)}else R=x.uniforms;return R}function b(x,E){let R=h.get(E);return R!==void 0?++R.usedTimes:(R=new $g(s,E,x,i),l.push(R),h.set(E,R)),R}function A(x){if(--x.usedTimes===0){let E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function M(x){a.remove(x)}function w(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:S,acquireProgram:b,releaseProgram:A,releaseShaderCache:M,programs:l,dispose:w}}function ex(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,c){s.get(r)[a]=c}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function nx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Mu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Su(){let s=[],t=0,e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,p,_,g,m){let y=s[t];return y===void 0?(y={id:u.id,object:u,geometry:d,material:p,materialVariant:r(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[t]=y):(y.id=u.id,y.object=u,y.geometry=d,y.material=p,y.materialVariant=r(u),y.groupOrder=_,y.renderOrder=u.renderOrder,y.z=g,y.group=m),t++,y}function c(u,d,p,_,g,m){let y=a(u,d,p,_,g,m);p.transmission>0?n.push(y):p.transparent===!0?i.push(y):e.push(y)}function l(u,d,p,_,g,m){let y=a(u,d,p,_,g,m);p.transmission>0?n.unshift(y):p.transparent===!0?i.unshift(y):e.unshift(y)}function h(u,d,p){e.length>1&&e.sort(u||nx),n.length>1&&n.sort(d||Mu),i.length>1&&i.sort(d||Mu),p&&(e.reverse(),n.reverse(),i.reverse())}function f(){for(let u=t,d=s.length;u<d;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:c,unshift:l,finish:f,sort:h}}function ix(){let s=new WeakMap;function t(n,i){let o=s.get(n),r;return o===void 0?(r=new Su,s.set(n,[r])):i>=o.length?(r=new Su,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function sx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Ft};break;case"SpotLight":e={position:new I,direction:new I,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function rx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var ox=0;function ax(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function cx(s){let t=new sx,e=rx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let i=new I,o=new be,r=new be;function a(l){let h=0,f=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,y=0,S=0,b=0,A=0,M=0,w=0;l.sort(ax);for(let E=0,R=l.length;E<R;E++){let C=l[E],D=C.color,z=C.intensity,H=C.distance,L=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===di?L=C.shadow.map.texture:L=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=D.r*z,f+=D.g*z,u+=D.b*z;else if(C.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(C.sh.coefficients[N],z);w++}else if(C.isDirectionalLight){let N=t.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let F=C.shadow,q=e.get(C);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,n.directionalShadow[d]=q,n.directionalShadowMap[d]=L,n.directionalShadowMatrix[d]=C.shadow.matrix,y++}n.directional[d]=N,d++}else if(C.isSpotLight){let N=t.get(C);N.position.setFromMatrixPosition(C.matrixWorld),N.color.copy(D).multiplyScalar(z),N.distance=H,N.coneCos=Math.cos(C.angle),N.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),N.decay=C.decay,n.spot[_]=N;let F=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,F.updateMatrices(C),C.castShadow&&M++),n.spotLightMatrix[_]=F.matrix,C.castShadow){let q=e.get(C);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=L,b++}_++}else if(C.isRectAreaLight){let N=t.get(C);N.color.copy(D).multiplyScalar(z),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=N,g++}else if(C.isPointLight){let N=t.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),N.distance=C.distance,N.decay=C.decay,C.castShadow){let F=C.shadow,q=e.get(C);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,q.shadowCameraNear=F.camera.near,q.shadowCameraFar=F.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=L,n.pointShadowMatrix[p]=C.shadow.matrix,S++}n.point[p]=N,p++}else if(C.isHemisphereLight){let N=t.get(C);N.skyColor.copy(C.color).multiplyScalar(z),N.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[m]=N,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let x=n.hash;(x.directionalLength!==d||x.pointLength!==p||x.spotLength!==_||x.rectAreaLength!==g||x.hemiLength!==m||x.numDirectionalShadows!==y||x.numPointShadows!==S||x.numSpotShadows!==b||x.numSpotMaps!==A||x.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+A-M,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,x.directionalLength=d,x.pointLength=p,x.spotLength=_,x.rectAreaLength=g,x.hemiLength=m,x.numDirectionalShadows=y,x.numPointShadows=S,x.numSpotShadows=b,x.numSpotMaps=A,x.numLightProbes=w,n.version=ox++)}function c(l,h){let f=0,u=0,d=0,p=0,_=0,g=h.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){let S=l[m];if(S.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),f++}else if(S.isSpotLight){let b=n.spot[d];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),d++}else if(S.isRectAreaLight){let b=n.rectArea[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),r.identity(),o.copy(S.matrixWorld),o.premultiply(g),r.extractRotation(o),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(r),b.halfHeight.applyMatrix4(r),p++}else if(S.isPointLight){let b=n.point[u];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),u++}else if(S.isHemisphereLight){let b=n.hemi[_];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function Eu(s){let t=new cx(s),e=[],n=[],i=[];function o(u){f.camera=u,e.length=0,n.length=0,i.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function c(u){i.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:f,setupLights:l,setupLightsView:h,pushLight:r,pushShadow:a,pushLightProbeGrid:c}}function lx(s){let t=new WeakMap;function e(i,o=0){let r=t.get(i),a;return r===void 0?(a=new Eu(s),t.set(i,[a])):o>=r.length?(a=new Eu(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
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
}`,fx=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],dx=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Tu=new be,_r=new I,ul=new I;function px(s,t,e){let n=new ns,i=new lt,o=new lt,r=new Me,a=new Mo,c=new So,l={},h=e.maxTextureSize,f={[Wn]:Ve,[Ve]:Wn,[je]:je},u=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:hx,fragmentShader:ux}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new ue;p.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new et(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sr;let m=this.type;this.render=function(M,w,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===xh&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=sr);let E=s.getRenderTarget(),R=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Nn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let z=m!==this.type;z&&w.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(L=>L.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,L=M.length;H<L;H++){let N=M[H],F=N.shadow;if(F===void 0){Bt("WebGLShadowMap:",N,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let q=F.getFrameExtents();i.multiply(q),o.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/q.x),i.x=o.x*q.x,F.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/q.y),i.y=o.y*q.y,F.mapSize.y=o.y));let K=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=K,F.map===null||z===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===cs){if(N.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new rn(i.x,i.y,{format:di,type:Un,minFilter:ze,magFilter:ze,generateMipmaps:!1}),F.map.texture.name=N.name+".shadowMap",F.map.depthTexture=new qn(i.x,i.y,bn),F.map.depthTexture.name=N.name+".shadowMapDepth",F.map.depthTexture.format=Cn,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ce,F.map.depthTexture.magFilter=Ce}else N.isPointLight?(F.map=new Aa(i.x),F.map.depthTexture=new po(i.x,vn)):(F.map=new rn(i.x,i.y),F.map.depthTexture=new qn(i.x,i.y,vn)),F.map.depthTexture.name=N.name+".shadowMap",F.map.depthTexture.format=Cn,this.type===sr?(F.map.depthTexture.compareFunction=K?Sa:Ma,F.map.depthTexture.minFilter=ze,F.map.depthTexture.magFilter=ze):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ce,F.map.depthTexture.magFilter=Ce);F.camera.updateProjectionMatrix()}let tt=F.map.isWebGLCubeRenderTarget?6:1;for(let st=0;st<tt;st++){if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,st),s.clear();else{st===0&&(s.setRenderTarget(F.map),s.clear());let ft=F.getViewport(st);r.set(o.x*ft.x,o.y*ft.y,o.x*ft.z,o.y*ft.w),D.viewport(r)}if(N.isPointLight){let ft=F.camera,qt=F.matrix,ce=N.distance||ft.far;ce!==ft.far&&(ft.far=ce,ft.updateProjectionMatrix()),_r.setFromMatrixPosition(N.matrixWorld),ft.position.copy(_r),ul.copy(ft.position),ul.add(fx[st]),ft.up.copy(dx[st]),ft.lookAt(ul),ft.updateMatrixWorld(),qt.makeTranslation(-_r.x,-_r.y,-_r.z),Tu.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Tu,ft.coordinateSystem,ft.reversedDepth)}else F.updateMatrices(N);n=F.getFrustum(),b(w,x,F.camera,N,this.type)}F.isPointLightShadow!==!0&&this.type===cs&&y(F,x),F.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(E,R,C)};function y(M,w){let x=t.update(_);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new rn(i.x,i.y,{format:di,type:Un})),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(w,null,x,u,_,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(w,null,x,d,_,null)}function S(M,w,x,E){let R=null,C=x.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(C!==void 0)R=C;else if(R=x.isPointLight===!0?c:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let D=R.uuid,z=w.uuid,H=l[D];H===void 0&&(H={},l[D]=H);let L=H[z];L===void 0&&(L=R.clone(),H[z]=L,w.addEventListener("dispose",A)),R=L}if(R.visible=w.visible,R.wireframe=w.wireframe,E===cs?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:f[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=s.properties.get(R);D.light=x}return R}function b(M,w,x,E,R){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===cs)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,M.matrixWorld);let z=t.update(M),H=M.material;if(Array.isArray(H)){let L=z.groups;for(let N=0,F=L.length;N<F;N++){let q=L[N],K=H[q.materialIndex];if(K&&K.visible){let tt=S(M,K,E,R);M.onBeforeShadow(s,M,w,x,z,tt,q),s.renderBufferDirect(x,null,z,tt,M,q),M.onAfterShadow(s,M,w,x,z,tt,q)}}}else if(H.visible){let L=S(M,H,E,R);M.onBeforeShadow(s,M,w,x,z,L,null),s.renderBufferDirect(x,null,z,L,M,null),M.onAfterShadow(s,M,w,x,z,L,null)}}let D=M.children;for(let z=0,H=D.length;z<H;z++)b(D[z],w,x,E,R)}function A(M){M.target.removeEventListener("dispose",A);for(let x in l){let E=l[x],R=M.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function mx(s,t){function e(){let O=!1,dt=new Me,j=null,gt=new Me(0,0,0,0);return{setMask:function(St){j!==St&&!O&&(s.colorMask(St,St,St,St),j=St)},setLocked:function(St){O=St},setClear:function(St,it,Ct,At,Te){Te===!0&&(St*=At,it*=At,Ct*=At),dt.set(St,it,Ct,At),gt.equals(dt)===!1&&(s.clearColor(St,it,Ct,At),gt.copy(dt))},reset:function(){O=!1,j=null,gt.set(-1,0,0,0)}}}function n(){let O=!1,dt=!1,j=null,gt=null,St=null;return{setReversed:function(it){if(dt!==it){let Ct=t.get("EXT_clip_control");it?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),dt=it;let At=St;St=null,this.setClear(At)}},getReversed:function(){return dt},setTest:function(it){it?rt(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(it){j!==it&&!O&&(s.depthMask(it),j=it)},setFunc:function(it){if(dt&&(it=Kh[it]),gt!==it){switch(it){case eo:s.depthFunc(s.NEVER);break;case no:s.depthFunc(s.ALWAYS);break;case io:s.depthFunc(s.LESS);break;case Ei:s.depthFunc(s.LEQUAL);break;case so:s.depthFunc(s.EQUAL);break;case ro:s.depthFunc(s.GEQUAL);break;case oo:s.depthFunc(s.GREATER);break;case ao:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=it}},setLocked:function(it){O=it},setClear:function(it){St!==it&&(St=it,dt&&(it=1-it),s.clearDepth(it))},reset:function(){O=!1,j=null,gt=null,St=null,dt=!1}}}function i(){let O=!1,dt=null,j=null,gt=null,St=null,it=null,Ct=null,At=null,Te=null;return{setTest:function(_e){O||(_e?rt(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(_e){dt!==_e&&!O&&(s.stencilMask(_e),dt=_e)},setFunc:function(_e,Sn,En){(j!==_e||gt!==Sn||St!==En)&&(s.stencilFunc(_e,Sn,En),j=_e,gt=Sn,St=En)},setOp:function(_e,Sn,En){(it!==_e||Ct!==Sn||At!==En)&&(s.stencilOp(_e,Sn,En),it=_e,Ct=Sn,At=En)},setLocked:function(_e){O=_e},setClear:function(_e){Te!==_e&&(s.clearStencil(_e),Te=_e)},reset:function(){O=!1,dt=null,j=null,gt=null,St=null,it=null,Ct=null,At=null,Te=null}}}let o=new e,r=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},f={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,y=null,S=null,b=null,A=null,M=null,w=null,x=new Ft(0,0,0),E=0,R=!1,C=null,D=null,z=null,H=null,L=null,N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,q=0,K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(K)[1]),F=q>=1):K.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),F=q>=2);let tt=null,st={},ft=s.getParameter(s.SCISSOR_BOX),qt=s.getParameter(s.VIEWPORT),ce=new Me().fromArray(ft),jt=new Me().fromArray(qt);function Y(O,dt,j,gt){let St=new Uint8Array(4),it=s.createTexture();s.bindTexture(O,it),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ct=0;Ct<j;Ct++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,St):s.texImage2D(dt+Ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,St);return it}let ct={};ct[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),ct[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ct[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),rt(s.DEPTH_TEST),r.setFunc(Ei),vt(!1),xt(Pc),rt(s.CULL_FACE),at(Nn);function rt(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function wt(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function Gt(O,dt){return u[O]!==dt?(s.bindFramebuffer(O,dt),u[O]=dt,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=dt),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function Ut(O,dt){let j=p,gt=!1;if(O){j=d.get(dt),j===void 0&&(j=[],d.set(dt,j));let St=O.textures;if(j.length!==St.length||j[0]!==s.COLOR_ATTACHMENT0){for(let it=0,Ct=St.length;it<Ct;it++)j[it]=s.COLOR_ATTACHMENT0+it;j.length=St.length,gt=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,gt=!0);gt&&s.drawBuffers(j)}function ae(O){return _!==O?(s.useProgram(O),_=O,!0):!1}let Xt={[si]:s.FUNC_ADD,[yh]:s.FUNC_SUBTRACT,[vh]:s.FUNC_REVERSE_SUBTRACT};Xt[bh]=s.MIN,Xt[Mh]=s.MAX;let nt={[Sh]:s.ZERO,[Eh]:s.ONE,[Th]:s.SRC_COLOR,[Qr]:s.SRC_ALPHA,[Ih]:s.SRC_ALPHA_SATURATE,[Ch]:s.DST_COLOR,[Ah]:s.DST_ALPHA,[wh]:s.ONE_MINUS_SRC_COLOR,[to]:s.ONE_MINUS_SRC_ALPHA,[Ph]:s.ONE_MINUS_DST_COLOR,[Rh]:s.ONE_MINUS_DST_ALPHA,[Lh]:s.CONSTANT_COLOR,[Dh]:s.ONE_MINUS_CONSTANT_COLOR,[Nh]:s.CONSTANT_ALPHA,[Uh]:s.ONE_MINUS_CONSTANT_ALPHA};function at(O,dt,j,gt,St,it,Ct,At,Te,_e){if(O===Nn){g===!0&&(wt(s.BLEND),g=!1);return}if(g===!1&&(rt(s.BLEND),g=!0),O!==_h){if(O!==m||_e!==R){if((y!==si||A!==si)&&(s.blendEquation(s.FUNC_ADD),y=si,A=si),_e)switch(O){case Si:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rr:s.blendFunc(s.ONE,s.ONE);break;case Ic:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ht("WebGLState: Invalid blending: ",O);break}else switch(O){case Si:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ic:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lc:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",O);break}S=null,b=null,M=null,w=null,x.set(0,0,0),E=0,m=O,R=_e}return}St=St||dt,it=it||j,Ct=Ct||gt,(dt!==y||St!==A)&&(s.blendEquationSeparate(Xt[dt],Xt[St]),y=dt,A=St),(j!==S||gt!==b||it!==M||Ct!==w)&&(s.blendFuncSeparate(nt[j],nt[gt],nt[it],nt[Ct]),S=j,b=gt,M=it,w=Ct),(At.equals(x)===!1||Te!==E)&&(s.blendColor(At.r,At.g,At.b,Te),x.copy(At),E=Te),m=O,R=!1}function ot(O,dt){O.side===je?wt(s.CULL_FACE):rt(s.CULL_FACE);let j=O.side===Ve;dt&&(j=!j),vt(j),O.blending===Si&&O.transparent===!1?at(Nn):at(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),o.setMask(O.colorWrite);let gt=O.stencilWrite;a.setTest(gt),gt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Pt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(O){C!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),C=O)}function xt(O){O!==mh?(rt(s.CULL_FACE),O!==D&&(O===Pc?s.cullFace(s.BACK):O===gh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),D=O}function kt(O){O!==z&&(F&&s.lineWidth(O),z=O)}function Pt(O,dt,j){O?(rt(s.POLYGON_OFFSET_FILL),(H!==dt||L!==j)&&(H=dt,L=j,r.getReversed()&&(dt=-dt),s.polygonOffset(dt,j))):wt(s.POLYGON_OFFSET_FILL)}function Vt(O){O?rt(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function Zt(O){O===void 0&&(O=s.TEXTURE0+N-1),tt!==O&&(s.activeTexture(O),tt=O)}function U(O,dt,j){j===void 0&&(tt===null?j=s.TEXTURE0+N-1:j=tt);let gt=st[j];gt===void 0&&(gt={type:void 0,texture:void 0},st[j]=gt),(gt.type!==O||gt.texture!==dt)&&(tt!==j&&(s.activeTexture(j),tt=j),s.bindTexture(O,dt||ct[O]),gt.type=O,gt.texture=dt)}function fe(){let O=st[tt];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ee(){try{s.compressedTexImage2D(...arguments)}catch(O){Ht("WebGLState:",O)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(O){Ht("WebGLState:",O)}}function v(){try{s.texSubImage2D(...arguments)}catch(O){Ht("WebGLState:",O)}}function k(){try{s.texSubImage3D(...arguments)}catch(O){Ht("WebGLState:",O)}}function W(){try{s.compressedTexSubImage2D(...arguments)}catch(O){Ht("WebGLState:",O)}}function Z(){try{s.compressedTexSubImage3D(...arguments)}catch(O){Ht("WebGLState:",O)}}function ht(){try{s.texStorage2D(...arguments)}catch(O){Ht("WebGLState:",O)}}function ut(){try{s.texStorage3D(...arguments)}catch(O){Ht("WebGLState:",O)}}function J(){try{s.texImage2D(...arguments)}catch(O){Ht("WebGLState:",O)}}function Q(){try{s.texImage3D(...arguments)}catch(O){Ht("WebGLState:",O)}}function pt(O){return f[O]!==void 0?f[O]:s.getParameter(O)}function It(O,dt){f[O]!==dt&&(s.pixelStorei(O,dt),f[O]=dt)}function _t(O){ce.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),ce.copy(O))}function mt(O){jt.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),jt.copy(O))}function Ot(O,dt){let j=l.get(dt);j===void 0&&(j=new WeakMap,l.set(dt,j));let gt=j.get(O);gt===void 0&&(gt=s.getUniformBlockIndex(dt,O.name),j.set(O,gt))}function zt(O,dt){let gt=l.get(dt).get(O);c.get(dt)!==gt&&(s.uniformBlockBinding(dt,gt,O.__bindingPointIndex),c.set(dt,gt))}function Jt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},tt=null,st={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,y=null,S=null,b=null,A=null,M=null,w=null,x=new Ft(0,0,0),E=0,R=!1,C=null,D=null,z=null,H=null,L=null,ce.set(0,0,s.canvas.width,s.canvas.height),jt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:rt,disable:wt,bindFramebuffer:Gt,drawBuffers:Ut,useProgram:ae,setBlending:at,setMaterial:ot,setFlipSided:vt,setCullFace:xt,setLineWidth:kt,setPolygonOffset:Pt,setScissorTest:Vt,activeTexture:Zt,bindTexture:U,unbindTexture:fe,compressedTexImage2D:ee,compressedTexImage3D:P,texImage2D:J,texImage3D:Q,pixelStorei:It,getParameter:pt,updateUBOMapping:Ot,uniformBlockBinding:zt,texStorage2D:ht,texStorage3D:ut,texSubImage2D:v,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:_t,viewport:mt,reset:Jt}}function gx(s,t,e,n,i,o,r){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,h=new WeakMap,f=new Set,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,v){return p?new OffscreenCanvas(P,v):Cs("canvas")}function g(P,v,k){let W=1,Z=ee(P);if((Z.width>k||Z.height>k)&&(W=k/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ht=Math.floor(W*Z.width),ut=Math.floor(W*Z.height);u===void 0&&(u=_(ht,ut));let J=v?_(ht,ut):u;return J.width=ht,J.height=ut,J.getContext("2d").drawImage(P,0,0,ht,ut),Bt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ht+"x"+ut+")."),J}else return"data"in P&&Bt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function m(P){return P.generateMipmaps}function y(P){s.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(P,v,k,W,Z,ht=!1){if(P!==null){if(s[P]!==void 0)return s[P];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ut;W&&(ut=t.get("EXT_texture_norm16"),ut||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===s.RED&&(k===s.FLOAT&&(J=s.R32F),k===s.HALF_FLOAT&&(J=s.R16F),k===s.UNSIGNED_BYTE&&(J=s.R8),k===s.UNSIGNED_SHORT&&ut&&(J=ut.R16_EXT),k===s.SHORT&&ut&&(J=ut.R16_SNORM_EXT)),v===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.R8UI),k===s.UNSIGNED_SHORT&&(J=s.R16UI),k===s.UNSIGNED_INT&&(J=s.R32UI),k===s.BYTE&&(J=s.R8I),k===s.SHORT&&(J=s.R16I),k===s.INT&&(J=s.R32I)),v===s.RG&&(k===s.FLOAT&&(J=s.RG32F),k===s.HALF_FLOAT&&(J=s.RG16F),k===s.UNSIGNED_BYTE&&(J=s.RG8),k===s.UNSIGNED_SHORT&&ut&&(J=ut.RG16_EXT),k===s.SHORT&&ut&&(J=ut.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.RG8UI),k===s.UNSIGNED_SHORT&&(J=s.RG16UI),k===s.UNSIGNED_INT&&(J=s.RG32UI),k===s.BYTE&&(J=s.RG8I),k===s.SHORT&&(J=s.RG16I),k===s.INT&&(J=s.RG32I)),v===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.RGB8UI),k===s.UNSIGNED_SHORT&&(J=s.RGB16UI),k===s.UNSIGNED_INT&&(J=s.RGB32UI),k===s.BYTE&&(J=s.RGB8I),k===s.SHORT&&(J=s.RGB16I),k===s.INT&&(J=s.RGB32I)),v===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),k===s.UNSIGNED_INT&&(J=s.RGBA32UI),k===s.BYTE&&(J=s.RGBA8I),k===s.SHORT&&(J=s.RGBA16I),k===s.INT&&(J=s.RGBA32I)),v===s.RGB&&(k===s.UNSIGNED_SHORT&&ut&&(J=ut.RGB16_EXT),k===s.SHORT&&ut&&(J=ut.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),v===s.RGBA){let Q=ht?Rs:ne.getTransfer(Z);k===s.FLOAT&&(J=s.RGBA32F),k===s.HALF_FLOAT&&(J=s.RGBA16F),k===s.UNSIGNED_BYTE&&(J=Q===le?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&ut&&(J=ut.RGBA16_EXT),k===s.SHORT&&ut&&(J=ut.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function A(P,v){let k;return P?v===null||v===vn||v===hs?k=s.DEPTH24_STENCIL8:v===bn?k=s.DEPTH32F_STENCIL8:v===ls&&(k=s.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===vn||v===hs?k=s.DEPTH_COMPONENT24:v===bn?k=s.DEPTH_COMPONENT32F:v===ls&&(k=s.DEPTH_COMPONENT16),k}function M(P,v){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ce&&P.minFilter!==ze?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function w(P){let v=P.target;v.removeEventListener("dispose",w),E(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&f.delete(v)}function x(P){let v=P.target;v.removeEventListener("dispose",x),C(v)}function E(P){let v=n.get(P);if(v.__webglInit===void 0)return;let k=P.source,W=d.get(k);if(W){let Z=W[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(P),Object.keys(W).length===0&&d.delete(k)}n.remove(P)}function R(P){let v=n.get(P);s.deleteTexture(v.__webglTexture);let k=P.source,W=d.get(k);delete W[v.__cacheKey],r.memory.textures--}function C(P){let v=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let Z=0;Z<v.__webglFramebuffer[W].length;Z++)s.deleteFramebuffer(v.__webglFramebuffer[W][Z]);else s.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)s.deleteFramebuffer(v.__webglFramebuffer[W]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let k=P.textures;for(let W=0,Z=k.length;W<Z;W++){let ht=n.get(k[W]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),r.memory.textures--),n.remove(k[W])}n.remove(P)}let D=0;function z(){D=0}function H(){return D}function L(P){D=P}function N(){let P=D;return P>=i.maxTextures&&Bt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),D+=1,P}function F(P){let v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.colorSpace),v.join()}function q(P,v){let k=n.get(P);if(P.isVideoTexture&&U(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){let W=P.image;if(W===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(k,P,v);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+v)}function K(P,v){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){wt(k,P,v);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+v)}function tt(P,v){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){wt(k,P,v);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+v)}function st(P,v){let k=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){Gt(k,P,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+v)}let ft={[sn]:s.REPEAT,[Rn]:s.CLAMP_TO_EDGE,[co]:s.MIRRORED_REPEAT},qt={[Ce]:s.NEAREST,[Bh]:s.NEAREST_MIPMAP_NEAREST,[cr]:s.NEAREST_MIPMAP_LINEAR,[ze]:s.LINEAR,[ko]:s.LINEAR_MIPMAP_NEAREST,[ui]:s.LINEAR_MIPMAP_LINEAR},ce={[Hh]:s.NEVER,[qh]:s.ALWAYS,[Gh]:s.LESS,[Ma]:s.LEQUAL,[Vh]:s.EQUAL,[Sa]:s.GEQUAL,[Wh]:s.GREATER,[Xh]:s.NOTEQUAL};function jt(P,v){if(v.type===bn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ze||v.magFilter===ko||v.magFilter===cr||v.magFilter===ui||v.minFilter===ze||v.minFilter===ko||v.minFilter===cr||v.minFilter===ui)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ft[v.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ft[v.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ft[v.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,qt[v.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,qt[v.minFilter]),v.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ce[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ce||v.minFilter!==cr&&v.minFilter!==ui||v.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Y(P,v){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",w));let W=v.source,Z=d.get(W);Z===void 0&&(Z={},d.set(W,Z));let ht=F(v);if(ht!==P.__cacheKey){Z[ht]===void 0&&(Z[ht]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,k=!0),Z[ht].usedTimes++;let ut=Z[P.__cacheKey];ut!==void 0&&(Z[P.__cacheKey].usedTimes--,ut.usedTimes===0&&R(v)),P.__cacheKey=ht,P.__webglTexture=Z[ht].texture}return k}function ct(P,v,k){return Math.floor(Math.floor(P/k)/v)}function rt(P,v,k,W){let ht=P.updateRanges;if(ht.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,k,W,v.data);else{ht.sort((It,_t)=>It.start-_t.start);let ut=0;for(let It=1;It<ht.length;It++){let _t=ht[ut],mt=ht[It],Ot=_t.start+_t.count,zt=ct(mt.start,v.width,4),Jt=ct(_t.start,v.width,4);mt.start<=Ot+1&&zt===Jt&&ct(mt.start+mt.count-1,v.width,4)===zt?_t.count=Math.max(_t.count,mt.start+mt.count-_t.start):(++ut,ht[ut]=mt)}ht.length=ut+1;let J=e.getParameter(s.UNPACK_ROW_LENGTH),Q=e.getParameter(s.UNPACK_SKIP_PIXELS),pt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let It=0,_t=ht.length;It<_t;It++){let mt=ht[It],Ot=Math.floor(mt.start/4),zt=Math.ceil(mt.count/4),Jt=Ot%v.width,O=Math.floor(Ot/v.width),dt=zt,j=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(s.UNPACK_SKIP_ROWS,O),e.texSubImage2D(s.TEXTURE_2D,0,Jt,O,dt,j,k,W,v.data)}P.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,J),e.pixelStorei(s.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(s.UNPACK_SKIP_ROWS,pt)}}function wt(P,v,k){let W=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=s.TEXTURE_3D);let Z=Y(P,v),ht=v.source;e.bindTexture(W,P.__webglTexture,s.TEXTURE0+k);let ut=n.get(ht);if(ht.version!==ut.__version||Z===!0){if(e.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let j=ne.getPrimaries(ne.workingColorSpace),gt=v.colorSpace===Yn?null:ne.getPrimaries(v.colorSpace),St=v.colorSpace===Yn||j===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let Q=g(v.image,!1,i.maxTextureSize);Q=fe(v,Q);let pt=o.convert(v.format,v.colorSpace),It=o.convert(v.type),_t=b(v.internalFormat,pt,It,v.normalized,v.colorSpace,v.isVideoTexture);jt(W,v);let mt,Ot=v.mipmaps,zt=v.isVideoTexture!==!0,Jt=ut.__version===void 0||Z===!0,O=ht.dataReady,dt=M(v,Q);if(v.isDepthTexture)_t=A(v.format===fi,v.type),Jt&&(zt?e.texStorage2D(s.TEXTURE_2D,1,_t,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,_t,Q.width,Q.height,0,pt,It,null));else if(v.isDataTexture)if(Ot.length>0){zt&&Jt&&e.texStorage2D(s.TEXTURE_2D,dt,_t,Ot[0].width,Ot[0].height);for(let j=0,gt=Ot.length;j<gt;j++)mt=Ot[j],zt?O&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,mt.width,mt.height,pt,It,mt.data):e.texImage2D(s.TEXTURE_2D,j,_t,mt.width,mt.height,0,pt,It,mt.data);v.generateMipmaps=!1}else zt?(Jt&&e.texStorage2D(s.TEXTURE_2D,dt,_t,Q.width,Q.height),O&&rt(v,Q,pt,It)):e.texImage2D(s.TEXTURE_2D,0,_t,Q.width,Q.height,0,pt,It,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){zt&&Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,_t,Ot[0].width,Ot[0].height,Q.depth);for(let j=0,gt=Ot.length;j<gt;j++)if(mt=Ot[j],v.format!==un)if(pt!==null)if(zt){if(O)if(v.layerUpdates.size>0){let St=tl(mt.width,mt.height,v.format,v.type);for(let it of v.layerUpdates){let Ct=mt.data.subarray(it*St/mt.data.BYTES_PER_ELEMENT,(it+1)*St/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,it,mt.width,mt.height,1,pt,Ct)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,mt.width,mt.height,Q.depth,pt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,_t,mt.width,mt.height,Q.depth,0,mt.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?O&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,mt.width,mt.height,Q.depth,pt,It,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,_t,mt.width,mt.height,Q.depth,0,pt,It,mt.data)}else{zt&&Jt&&e.texStorage2D(s.TEXTURE_2D,dt,_t,Ot[0].width,Ot[0].height);for(let j=0,gt=Ot.length;j<gt;j++)mt=Ot[j],v.format!==un?pt!==null?zt?O&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,j,_t,mt.width,mt.height,0,mt.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?O&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,mt.width,mt.height,pt,It,mt.data):e.texImage2D(s.TEXTURE_2D,j,_t,mt.width,mt.height,0,pt,It,mt.data)}else if(v.isDataArrayTexture)if(zt){if(Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,_t,Q.width,Q.height,Q.depth),O)if(v.layerUpdates.size>0){let j=tl(Q.width,Q.height,v.format,v.type);for(let gt of v.layerUpdates){let St=Q.data.subarray(gt*j/Q.data.BYTES_PER_ELEMENT,(gt+1)*j/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,Q.width,Q.height,1,pt,It,St)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,It,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,_t,Q.width,Q.height,Q.depth,0,pt,It,Q.data);else if(v.isData3DTexture)zt?(Jt&&e.texStorage3D(s.TEXTURE_3D,dt,_t,Q.width,Q.height,Q.depth),O&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,It,Q.data)):e.texImage3D(s.TEXTURE_3D,0,_t,Q.width,Q.height,Q.depth,0,pt,It,Q.data);else if(v.isFramebufferTexture){if(Jt)if(zt)e.texStorage2D(s.TEXTURE_2D,dt,_t,Q.width,Q.height);else{let j=Q.width,gt=Q.height;for(let St=0;St<dt;St++)e.texImage2D(s.TEXTURE_2D,St,_t,j,gt,0,pt,It,null),j>>=1,gt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){let j=s.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),f.add(v),j.onpaint=gt=>{let St=gt.changedElements;for(let it of f)St.includes(it.image)&&(it.needsUpdate=!0)},j.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Q);else{let St=s.RGBA,it=s.RGBA,Ct=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,St,it,Ct,Q)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(zt&&Jt){let j=ee(Ot[0]);e.texStorage2D(s.TEXTURE_2D,dt,_t,j.width,j.height)}for(let j=0,gt=Ot.length;j<gt;j++)mt=Ot[j],zt?O&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,pt,It,mt):e.texImage2D(s.TEXTURE_2D,j,_t,pt,It,mt);v.generateMipmaps=!1}else if(zt){if(Jt){let j=ee(Q);e.texStorage2D(s.TEXTURE_2D,dt,_t,j.width,j.height)}O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,pt,It,Q)}else e.texImage2D(s.TEXTURE_2D,0,_t,pt,It,Q);m(v)&&y(W),ut.__version=ht.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function Gt(P,v,k){if(v.image.length!==6)return;let W=Y(P,v),Z=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+k);let ht=n.get(Z);if(Z.version!==ht.__version||W===!0){e.activeTexture(s.TEXTURE0+k);let ut=ne.getPrimaries(ne.workingColorSpace),J=v.colorSpace===Yn?null:ne.getPrimaries(v.colorSpace),Q=v.colorSpace===Yn||ut===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let pt=v.isCompressedTexture||v.image[0].isCompressedTexture,It=v.image[0]&&v.image[0].isDataTexture,_t=[];for(let it=0;it<6;it++)!pt&&!It?_t[it]=g(v.image[it],!0,i.maxCubemapSize):_t[it]=It?v.image[it].image:v.image[it],_t[it]=fe(v,_t[it]);let mt=_t[0],Ot=o.convert(v.format,v.colorSpace),zt=o.convert(v.type),Jt=b(v.internalFormat,Ot,zt,v.normalized,v.colorSpace),O=v.isVideoTexture!==!0,dt=ht.__version===void 0||W===!0,j=Z.dataReady,gt=M(v,mt);jt(s.TEXTURE_CUBE_MAP,v);let St;if(pt){O&&dt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Jt,mt.width,mt.height);for(let it=0;it<6;it++){St=_t[it].mipmaps;for(let Ct=0;Ct<St.length;Ct++){let At=St[Ct];v.format!==un?Ot!==null?O?j&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct,0,0,At.width,At.height,Ot,At.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct,Jt,At.width,At.height,0,At.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct,0,0,At.width,At.height,Ot,zt,At.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct,Jt,At.width,At.height,0,Ot,zt,At.data)}}}else{if(St=v.mipmaps,O&&dt){St.length>0&&gt++;let it=ee(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Jt,it.width,it.height)}for(let it=0;it<6;it++)if(It){O?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,_t[it].width,_t[it].height,Ot,zt,_t[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Jt,_t[it].width,_t[it].height,0,Ot,zt,_t[it].data);for(let Ct=0;Ct<St.length;Ct++){let Te=St[Ct].image[it].image;O?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct+1,0,0,Te.width,Te.height,Ot,zt,Te.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct+1,Jt,Te.width,Te.height,0,Ot,zt,Te.data)}}else{O?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ot,zt,_t[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Jt,Ot,zt,_t[it]);for(let Ct=0;Ct<St.length;Ct++){let At=St[Ct];O?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct+1,0,0,Ot,zt,At.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct+1,Jt,Ot,zt,At.image[it])}}}m(v)&&y(s.TEXTURE_CUBE_MAP),ht.__version=Z.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function Ut(P,v,k,W,Z,ht){let ut=o.convert(k.format,k.colorSpace),J=o.convert(k.type),Q=b(k.internalFormat,ut,J,k.normalized,k.colorSpace),pt=n.get(v),It=n.get(k);if(It.__renderTarget=v,!pt.__hasExternalTextures){let _t=Math.max(1,v.width>>ht),mt=Math.max(1,v.height>>ht);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,ht,Q,_t,mt,v.depth,0,ut,J,null):e.texImage2D(Z,ht,Q,_t,mt,0,ut,J,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),Zt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,W,Z,It.__webglTexture,0,Vt(v)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,W,Z,It.__webglTexture,ht),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ae(P,v,k){if(s.bindRenderbuffer(s.RENDERBUFFER,P),v.depthBuffer){let W=v.depthTexture,Z=W&&W.isDepthTexture?W.type:null,ht=A(v.stencilBuffer,Z),ut=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Zt(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt(v),ht,v.width,v.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt(v),ht,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ht,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ut,s.RENDERBUFFER,P)}else{let W=v.textures;for(let Z=0;Z<W.length;Z++){let ht=W[Z],ut=o.convert(ht.format,ht.colorSpace),J=o.convert(ht.type),Q=b(ht.internalFormat,ut,J,ht.normalized,ht.colorSpace);Zt(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt(v),Q,v.width,v.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt(v),Q,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Q,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Xt(P,v,k){let W=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),Z.__webglTexture===void 0){Z.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),jt(s.TEXTURE_CUBE_MAP,v.depthTexture);let pt=o.convert(v.depthTexture.format),It=o.convert(v.depthTexture.type),_t;v.depthTexture.format===Cn?_t=s.DEPTH_COMPONENT24:v.depthTexture.format===fi&&(_t=s.DEPTH24_STENCIL8);for(let mt=0;mt<6;mt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,_t,v.width,v.height,0,pt,It,null)}}else q(v.depthTexture,0);let ht=Z.__webglTexture,ut=Vt(v),J=W?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,Q=v.depthTexture.format===fi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===Cn)Zt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,J,ht,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,Q,J,ht,0);else if(v.depthTexture.format===fi)Zt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,J,ht,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,Q,J,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(P){let v=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==P.depthTexture){let W=P.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){let Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=W}if(P.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)Xt(v.__webglFramebuffer[W],P,W);else{let W=P.texture.mipmaps;W&&W.length>0?Xt(v.__webglFramebuffer[0],P,0):Xt(v.__webglFramebuffer,P,0)}else if(k){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=s.createRenderbuffer(),ae(v.__webglDepthbuffer[W],P,!1);else{let Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=v.__webglDepthbuffer[W];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,ht)}}else{let W=P.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),ae(v.__webglDepthbuffer,P,!1);else{let Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,ht)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(P,v,k){let W=n.get(P);v!==void 0&&Ut(W.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&nt(P)}function ot(P){let v=P.texture,k=n.get(P),W=n.get(v);P.addEventListener("dispose",x);let Z=P.textures,ht=P.isWebGLCubeRenderTarget===!0,ut=Z.length>1;if(ut||(W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture()),W.__version=v.version,r.memory.textures++),ht){k.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[J]=[];for(let Q=0;Q<v.mipmaps.length;Q++)k.__webglFramebuffer[J][Q]=s.createFramebuffer()}else k.__webglFramebuffer[J]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)k.__webglFramebuffer[J]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(ut)for(let J=0,Q=Z.length;J<Q;J++){let pt=n.get(Z[J]);pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture(),r.memory.textures++)}if(P.samples>0&&Zt(P)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let Q=Z[J];k.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[J]);let pt=o.convert(Q.format,Q.colorSpace),It=o.convert(Q.type),_t=b(Q.internalFormat,pt,It,Q.normalized,Q.colorSpace,P.isXRRenderTarget===!0),mt=Vt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,_t,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,k.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),ae(k.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),jt(s.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)Ut(k.__webglFramebuffer[J][Q],P,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else Ut(k.__webglFramebuffer[J],P,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(v)&&y(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let J=0,Q=Z.length;J<Q;J++){let pt=Z[J],It=n.get(pt),_t=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_t=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(_t,It.__webglTexture),jt(_t,pt),Ut(k.__webglFramebuffer,P,pt,s.COLOR_ATTACHMENT0+J,_t,0),m(pt)&&y(_t)}e.unbindTexture()}else{let J=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(J=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(J,W.__webglTexture),jt(J,v),v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)Ut(k.__webglFramebuffer[Q],P,v,s.COLOR_ATTACHMENT0,J,Q);else Ut(k.__webglFramebuffer,P,v,s.COLOR_ATTACHMENT0,J,0);m(v)&&y(J),e.unbindTexture()}P.depthBuffer&&nt(P)}function vt(P){let v=P.textures;for(let k=0,W=v.length;k<W;k++){let Z=v[k];if(m(Z)){let ht=S(P),ut=n.get(Z).__webglTexture;e.bindTexture(ht,ut),y(ht),e.unbindTexture()}}}let xt=[],kt=[];function Pt(P){if(P.samples>0){if(Zt(P)===!1){let v=P.textures,k=P.width,W=P.height,Z=s.COLOR_BUFFER_BIT,ht=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=n.get(P),J=v.length>1;if(J)for(let pt=0;pt<v.length;pt++)e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let Q=P.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let pt=0;pt<v.length;pt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ut.__webglColorRenderbuffer[pt]);let It=n.get(v[pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,It,0)}s.blitFramebuffer(0,0,k,W,0,0,k,W,Z,s.NEAREST),c===!0&&(xt.length=0,kt.length=0,xt.push(s.COLOR_ATTACHMENT0+pt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(xt.push(ht),kt.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,kt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let pt=0;pt<v.length;pt++){e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,ut.__webglColorRenderbuffer[pt]);let It=n.get(v[pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,It,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let v=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Vt(P){return Math.min(i.maxSamples,P.samples)}function Zt(P){let v=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(P){let v=r.render.frame;h.get(P)!==v&&(h.set(P,v),P.update())}function fe(P,v){let k=P.colorSpace,W=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==As&&k!==Yn&&(ne.getTransfer(k)===le?(W!==un||Z!==Qe)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",k)),v}function ee(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=z,this.getTextureUnits=H,this.setTextureUnits=L,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=tt,this.setTextureCube=st,this.rebindTextures=at,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function xx(s,t){function e(n,i=Yn){let o,r=ne.getTransfer(i);if(n===Qe)return s.UNSIGNED_BYTE;if(n===Ho)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Go)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Vc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Wc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hc)return s.BYTE;if(n===Gc)return s.SHORT;if(n===ls)return s.UNSIGNED_SHORT;if(n===zo)return s.INT;if(n===vn)return s.UNSIGNED_INT;if(n===bn)return s.FLOAT;if(n===Un)return s.HALF_FLOAT;if(n===Xc)return s.ALPHA;if(n===qc)return s.RGB;if(n===un)return s.RGBA;if(n===Cn)return s.DEPTH_COMPONENT;if(n===fi)return s.DEPTH_STENCIL;if(n===lr)return s.RED;if(n===Vo)return s.RED_INTEGER;if(n===di)return s.RG;if(n===Wo)return s.RG_INTEGER;if(n===Xo)return s.RGBA_INTEGER;if(n===hr||n===ur||n===fr||n===dr)if(r===le)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===hr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===hr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qo||n===Yo||n===Zo||n===Jo)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===qo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ko||n===$o||n===jo||n===Qo||n===ta||n===pr||n===ea)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Ko||n===$o)return r===le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===jo)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Qo)return o.COMPRESSED_R11_EAC;if(n===ta)return o.COMPRESSED_SIGNED_R11_EAC;if(n===pr)return o.COMPRESSED_RG11_EAC;if(n===ea)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===ca||n===la||n===ha||n===ua||n===fa||n===da||n===pa||n===ma)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===na)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ia)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sa)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ra)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oa)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===aa)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ca)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===la)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ha)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ua)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fa)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===da)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pa)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ma)return r===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ga||n===xa||n===_a)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===ga)return r===le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xa)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_a)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ya||n===va||n===mr||n===ba)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===ya)return o.COMPRESSED_RED_RGTC1_EXT;if(n===va)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ba)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var _x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yx=`
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

}`,yl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ks(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new an({vertexShader:_x,fragmentShader:yx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new et(new Ge(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vl=class extends Pn{constructor(t,e){super();let n=this,i=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,p=null,_=typeof XRWebGLBinding<"u",g=new yl,m={},y=e.getContextAttributes(),S=null,b=null,A=[],M=[],w=new lt,x=null,E=new ke;E.viewport=new Me;let R=new ke;R.viewport=new Me;let C=[E,R],D=new Uo,z=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ct=A[Y];return ct===void 0&&(ct=new ts,A[Y]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(Y){let ct=A[Y];return ct===void 0&&(ct=new ts,A[Y]=ct),ct.getGripSpace()},this.getHand=function(Y){let ct=A[Y];return ct===void 0&&(ct=new ts,A[Y]=ct),ct.getHandSpace()};function L(Y){let ct=M.indexOf(Y.inputSource);if(ct===-1)return;let rt=A[ct];rt!==void 0&&(rt.update(Y.inputSource,Y.frame,l||r),rt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",F);for(let Y=0;Y<A.length;Y++){let ct=M[Y];ct!==null&&(M[Y]=null,A[Y].disconnect(ct))}z=null,H=null,g.reset();for(let Y in m)delete m[Y];t.setRenderTarget(S),d=null,u=null,f=null,i=null,b=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",N),i.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,wt=null,Gt=null;y.depth&&(Gt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=y.stencil?fi:Cn,wt=y.stencil?hs:vn);let Ut={colorFormat:e.RGBA8,depthFormat:Gt,scaleFactor:o};f=this.getBinding(),u=f.createProjectionLayer(Ut),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new rn(u.textureWidth,u.textureHeight,{format:un,type:Qe,depthTexture:new qn(u.textureWidth,u.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let rt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(i,e,rt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new rn(d.framebufferWidth,d.framebufferHeight,{format:un,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),jt.setContext(i),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function F(Y){for(let ct=0;ct<Y.removed.length;ct++){let rt=Y.removed[ct],wt=M.indexOf(rt);wt>=0&&(M[wt]=null,A[wt].disconnect(rt))}for(let ct=0;ct<Y.added.length;ct++){let rt=Y.added[ct],wt=M.indexOf(rt);if(wt===-1){for(let Ut=0;Ut<A.length;Ut++)if(Ut>=M.length){M.push(rt),wt=Ut;break}else if(M[Ut]===null){M[Ut]=rt,wt=Ut;break}if(wt===-1)break}let Gt=A[wt];Gt&&Gt.connect(rt)}}let q=new I,K=new I;function tt(Y,ct,rt){q.setFromMatrixPosition(ct.matrixWorld),K.setFromMatrixPosition(rt.matrixWorld);let wt=q.distanceTo(K),Gt=ct.projectionMatrix.elements,Ut=rt.projectionMatrix.elements,ae=Gt[14]/(Gt[10]-1),Xt=Gt[14]/(Gt[10]+1),nt=(Gt[9]+1)/Gt[5],at=(Gt[9]-1)/Gt[5],ot=(Gt[8]-1)/Gt[0],vt=(Ut[8]+1)/Ut[0],xt=ae*ot,kt=ae*vt,Pt=wt/(-ot+vt),Vt=Pt*-ot;if(ct.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Vt),Y.translateZ(Pt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Gt[10]===-1)Y.projectionMatrix.copy(ct.projectionMatrix),Y.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{let Zt=ae+Pt,U=Xt+Pt,fe=xt-Vt,ee=kt+(wt-Vt),P=nt*Xt/U*Zt,v=at*Xt/U*Zt;Y.projectionMatrix.makePerspective(fe,ee,P,v,Zt,U),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,ct){ct===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ct.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ct=Y.near,rt=Y.far;g.texture!==null&&(g.depthNear>0&&(ct=g.depthNear),g.depthFar>0&&(rt=g.depthFar)),D.near=R.near=E.near=ct,D.far=R.far=E.far=rt,(z!==D.near||H!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),z=D.near,H=D.far),D.layers.mask=Y.layers.mask|6,E.layers.mask=D.layers.mask&-5,R.layers.mask=D.layers.mask&-3;let wt=Y.parent,Gt=D.cameras;st(D,wt);for(let Ut=0;Ut<Gt.length;Ut++)st(Gt[Ut],wt);Gt.length===2?tt(D,E,R):D.projectionMatrix.copy(E.projectionMatrix),ft(Y,D,wt)};function ft(Y,ct,rt){rt===null?Y.matrix.copy(ct.matrixWorld):(Y.matrix.copy(rt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ct.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ct.projectionMatrix),Y.projectionMatrixInverse.copy(ct.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ji*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(Y){return m[Y]};let qt=null;function ce(Y,ct){if(h=ct.getViewerPose(l||r),p=ct,h!==null){let rt=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let wt=!1;rt.length!==D.cameras.length&&(D.cameras.length=0,wt=!0);for(let Xt=0;Xt<rt.length;Xt++){let nt=rt[Xt],at=null;if(d!==null)at=d.getViewport(nt);else{let vt=f.getViewSubImage(u,nt);at=vt.viewport,Xt===0&&(t.setRenderTargetTextures(b,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(b))}let ot=C[Xt];ot===void 0&&(ot=new ke,ot.layers.enable(Xt),ot.viewport=new Me,C[Xt]=ot),ot.matrix.fromArray(nt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(nt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(at.x,at.y,at.width,at.height),Xt===0&&(D.matrix.copy(ot.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),wt===!0&&D.cameras.push(ot)}let Gt=i.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let Xt=f.getDepthInformation(rt[0]);Xt&&Xt.isValid&&Xt.texture&&g.init(Xt,i.renderState)}if(Gt&&Gt.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let Xt=0;Xt<rt.length;Xt++){let nt=rt[Xt].camera;if(nt){let at=m[nt];at||(at=new ks,m[nt]=at);let ot=f.getCameraImage(nt);at.sourceTexture=ot}}}}for(let rt=0;rt<A.length;rt++){let wt=M[rt],Gt=A[rt];wt!==null&&Gt!==void 0&&Gt.update(wt,ct,l||r)}qt&&qt(Y,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),p=null}let jt=new wu;jt.setAnimationLoop(ce),this.setAnimationLoop=function(Y){qt=Y},this.dispose=function(){}}},vx=new be,Lu=new Yt;Lu.set(-1,0,0,0,1,0,0,0,1);function bx(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,$c(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,y,S,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?o(g,m):m.isMeshLambertMaterial?(o(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(o(g,m),f(g,m)):m.isMeshPhongMaterial?(o(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(o(g,m),u(g,m),m.isMeshPhysicalMaterial&&d(g,m,b)):m.isMeshMatcapMaterial?(o(g,m),p(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),_(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,y,S):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ve&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ve&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=t.get(m),S=y.envMap,b=y.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(vx.makeRotationFromEuler(b)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Lu),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,y,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=S*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ve&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Mx(s,t,e,n){let i={},o={},r=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,A){let M=A.program;n.uniformBlockBinding(b,M)}function l(b,A){let M=i[b.id];M===void 0&&(g(b),M=h(b),i[b.id]=M,b.addEventListener("dispose",y));let w=A.program;n.updateUBOMapping(b,w);let x=t.render.frame;o[b.id]!==x&&(u(b),o[b.id]=x)}function h(b){let A=f();b.__bindingPointIndex=A;let M=s.createBuffer(),w=b.__size,x=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,w,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,M),M}function f(){for(let b=0;b<a;b++)if(r.indexOf(b)===-1)return r.push(b),b;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let A=i[b.id],M=b.uniforms,w=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let x=0,E=M.length;x<E;x++){let R=M[x];if(Array.isArray(R))for(let C=0,D=R.length;C<D;C++)d(R[C],x,C,w);else d(R,x,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(b,A,M,w){if(_(b,A,M,w)===!0){let x=b.__offset,E=b.value;if(Array.isArray(E)){let R=0;for(let C=0;C<E.length;C++){let D=E[C],z=m(D);p(D,b.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,b.__data)}}function p(b,A,M){typeof b=="number"||typeof b=="boolean"?A[0]=b:b.isMatrix3?(A[0]=b.elements[0],A[1]=b.elements[1],A[2]=b.elements[2],A[3]=0,A[4]=b.elements[3],A[5]=b.elements[4],A[6]=b.elements[5],A[7]=0,A[8]=b.elements[6],A[9]=b.elements[7],A[10]=b.elements[8],A[11]=0):ArrayBuffer.isView(b)?A.set(new b.constructor(b.buffer,b.byteOffset,A.length)):b.toArray(A,M)}function _(b,A,M,w){let x=b.value,E=A+"_"+M;if(w[E]===void 0)return typeof x=="number"||typeof x=="boolean"?w[E]=x:ArrayBuffer.isView(x)?w[E]=x.slice():w[E]=x.clone(),!0;{let R=w[E];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return w[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(b){let A=b.uniforms,M=0,w=16;for(let E=0,R=A.length;E<R;E++){let C=Array.isArray(A[E])?A[E]:[A[E]];for(let D=0,z=C.length;D<z;D++){let H=C[D],L=Array.isArray(H.value)?H.value:[H.value];for(let N=0,F=L.length;N<F;N++){let q=L[N],K=m(q),tt=M%w,st=tt%K.boundary,ft=tt+st;M+=st,ft!==0&&w-ft<K.storage&&(M+=w-ft),H.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=K.storage}}}let x=M%w;return x>0&&(M+=w-x),b.__size=M,b.__cache={},this}function m(b){let A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(A.boundary=16,A.storage=b.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",b),A}function y(b){let A=b.target;A.removeEventListener("dispose",y);let M=r.indexOf(A.__bindingPointIndex);r.splice(M,1),s.deleteBuffer(i[A.id]),delete i[A.id],delete o[A.id]}function S(){for(let b in i)s.deleteBuffer(i[b]);r=[],i={},o={}}return{bind:c,update:l,dispose:S}}var Sx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fn=null;function Ex(){return Fn===null&&(Fn=new es(Sx,16,16,di,Un),Fn.name="DFG_LUT",Fn.minFilter=ze,Fn.magFilter=ze,Fn.wrapS=Rn,Fn.wrapT=Rn,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}var Ra=class{constructor(t={}){let{canvas:e=Yh(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Qe}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;let _=d,g=new Set([Xo,Wo,Vo]),m=new Set([Qe,vn,ls,hs,Ho,Go]),y=new Uint32Array(4),S=new Int32Array(4),b=new I,A=null,M=null,w=[],x=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,C=!1,D=null,z=null,H=null,L=null;this._outputColorSpace=De;let N=0,F=0,q=null,K=-1,tt=null,st=new Me,ft=new Me,qt=null,ce=new Ft(0),jt=0,Y=e.width,ct=e.height,rt=1,wt=null,Gt=null,Ut=new Me(0,0,Y,ct),ae=new Me(0,0,Y,ct),Xt=!1,nt=new ns,at=!1,ot=!1,vt=new be,xt=new I,kt=new Me,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function Zt(){return q===null?rt:1}let U=n;function fe(T,B){return e.getContext(T,B)}try{let T={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",Sn,!1),U===null){let B="webgl2";if(U=fe(B,T),U===null)throw fe(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Ht("WebGLRenderer: "+T.message),T}let ee,P,v,k,W,Z,ht,ut,J,Q,pt,It,_t,mt,Ot,zt,Jt,O,dt,j,gt,St,it;function Ct(){ee=new I0(U),ee.init(),gt=new xx(U,ee),P=new S0(U,ee,t,gt),v=new mx(U,ee),P.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),z=U.createFramebuffer(),H=U.createFramebuffer(),L=U.createFramebuffer(),k=new N0(U),W=new ex,Z=new gx(U,ee,v,W,P,gt,k),ht=new P0(R),ut=new Bd(U),St=new b0(U,ut),J=new L0(U,ut,k,St),Q=new F0(U,J,ut,St,k),O=new U0(U,P,Z),Ot=new E0(W),pt=new tx(R,ht,ee,P,St,Ot),It=new bx(R,W),_t=new ix,mt=new lx(ee),Jt=new v0(R,ht,v,Q,p,c),zt=new px(R,Q,P),it=new Mx(U,k,P,v),dt=new M0(U,ee,k),j=new D0(U,ee,k),k.programs=pt.programs,R.capabilities=P,R.extensions=ee,R.properties=W,R.renderLists=_t,R.shadowMap=zt,R.state=v,R.info=k}Ct(),_!==Qe&&(E=new B0(_,e.width,e.height,a,i,o));let At=new vl(R,U);this.xr=At,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let T=ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(T){T!==void 0&&(rt=T,this.setSize(Y,ct,!1))},this.getSize=function(T){return T.set(Y,ct)},this.setSize=function(T,B,X=!0){if(At.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,ct=B,e.width=Math.floor(T*rt),e.height=Math.floor(B*rt),X===!0&&(e.style.width=T+"px",e.style.height=B+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(Y*rt,ct*rt).floor()},this.setDrawingBufferSize=function(T,B,X){Y=T,ct=B,rt=X,e.width=Math.floor(T*X),e.height=Math.floor(B*X),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(_===Qe){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(st)},this.getViewport=function(T){return T.copy(Ut)},this.setViewport=function(T,B,X,G){T.isVector4?Ut.set(T.x,T.y,T.z,T.w):Ut.set(T,B,X,G),v.viewport(st.copy(Ut).multiplyScalar(rt).round())},this.getScissor=function(T){return T.copy(ae)},this.setScissor=function(T,B,X,G){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,B,X,G),v.scissor(ft.copy(ae).multiplyScalar(rt).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(T){v.setScissorTest(Xt=T)},this.setOpaqueSort=function(T){wt=T},this.setTransparentSort=function(T){Gt=T},this.getClearColor=function(T){return T.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,X=!0){let G=0;if(T){let V=!1;if(q!==null){let Mt=q.texture.format;V=g.has(Mt)}if(V){let Mt=q.texture.type,Tt=m.has(Mt),bt=Jt.getClearColor(),Rt=Jt.getClearAlpha(),Lt=bt.r,Kt=bt.g,Qt=bt.b;Tt?(y[0]=Lt,y[1]=Kt,y[2]=Qt,y[3]=Rt,U.clearBufferuiv(U.COLOR,0,y)):(S[0]=Lt,S[1]=Kt,S[2]=Qt,S[3]=Rt,U.clearBufferiv(U.COLOR,0,S))}else G|=U.COLOR_BUFFER_BIT}B&&(G|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),Jt.dispose(),_t.dispose(),mt.dispose(),W.dispose(),ht.dispose(),Q.dispose(),St.dispose(),it.dispose(),pt.dispose(),At.dispose(),At.removeEventListener("sessionstart",Ll),At.removeEventListener("sessionend",Dl),mi.stop()};function Te(T){T.preventDefault(),Zc("WebGLRenderer: Context Lost."),C=!0}function _e(){Zc("WebGLRenderer: Context Restored."),C=!1;let T=k.autoReset,B=zt.enabled,X=zt.autoUpdate,G=zt.needsUpdate,V=zt.type;Ct(),k.autoReset=T,zt.enabled=B,zt.autoUpdate=X,zt.needsUpdate=G,zt.type=V}function Sn(T){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function En(T){let B=T.target;B.removeEventListener("dispose",En),ef(B)}function ef(T){nf(T),W.remove(T)}function nf(T){let B=W.get(T).programs;B!==void 0&&(B.forEach(function(X){pt.releaseProgram(X)}),T.isShaderMaterial&&pt.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,X,G,V,Mt){B===null&&(B=Pt);let Tt=V.isMesh&&V.matrixWorld.determinantAffine()<0,bt=of(T,B,X,G,V);v.setMaterial(G,Tt);let Rt=X.index,Lt=1;if(G.wireframe===!0){if(Rt=J.getWireframeAttribute(X),Rt===void 0)return;Lt=2}let Kt=X.drawRange,Qt=X.attributes.position,Nt=Kt.start*Lt,de=(Kt.start+Kt.count)*Lt;Mt!==null&&(Nt=Math.max(Nt,Mt.start*Lt),de=Math.min(de,(Mt.start+Mt.count)*Lt)),Rt!==null?(Nt=Math.max(Nt,0),de=Math.min(de,Rt.count)):Qt!=null&&(Nt=Math.max(Nt,0),de=Math.min(de,Qt.count));let Ae=de-Nt;if(Ae<0||Ae===1/0)return;St.setup(V,G,bt,X,Rt);let we,pe=dt;if(Rt!==null&&(we=ut.get(Rt),pe=j,pe.setIndex(we)),V.isMesh)G.wireframe===!0?(v.setLineWidth(G.wireframeLinewidth*Zt()),pe.setMode(U.LINES)):pe.setMode(U.TRIANGLES);else if(V.isLine){let We=G.linewidth;We===void 0&&(We=1),v.setLineWidth(We*Zt()),V.isLineSegments?pe.setMode(U.LINES):V.isLineLoop?pe.setMode(U.LINE_LOOP):pe.setMode(U.LINE_STRIP)}else V.isPoints?pe.setMode(U.POINTS):V.isSprite&&pe.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))pe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let We=V._multiDrawStarts,Et=V._multiDrawCounts,tn=V._multiDrawCount,re=Rt?ut.get(Rt).bytesPerElement:1,ln=W.get(G).currentProgram.getUniforms();for(let Tn=0;Tn<tn;Tn++)ln.setValue(U,"_gl_DrawID",Tn),pe.render(We[Tn]/re,Et[Tn])}else if(V.isInstancedMesh)pe.renderInstances(Nt,Ae,V.count);else if(X.isInstancedBufferGeometry){let We=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Et=Math.min(X.instanceCount,We);pe.renderInstances(Nt,Ae,Et)}else pe.render(Nt,Ae)};function Il(T,B,X){T.transparent===!0&&T.side===je&&T.forceSinglePass===!1?(T.side=Ve,T.needsUpdate=!0,Ar(T,B,X),T.side=Wn,T.needsUpdate=!0,Ar(T,B,X),T.side=je):Ar(T,B,X)}this.compile=function(T,B,X=null){X===null&&(X=T),M=mt.get(X),M.init(B),x.push(M),X.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(M.pushLight(V),V.castShadow&&M.pushShadow(V))}),T!==X&&T.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(M.pushLight(V),V.castShadow&&M.pushShadow(V))}),M.setupLights();let G=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Mt=V.material;if(Mt)if(Array.isArray(Mt))for(let Tt=0;Tt<Mt.length;Tt++){let bt=Mt[Tt];Il(bt,X,V),G.add(bt)}else Il(Mt,X,V),G.add(Mt)}),M=x.pop(),G},this.compileAsync=function(T,B,X=null){let G=this.compile(T,B,X);return new Promise(V=>{function Mt(){if(G.forEach(function(Tt){W.get(Tt).currentProgram.isReady()&&G.delete(Tt)}),G.size===0){V(T);return}setTimeout(Mt,10)}ee.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Ga=null;function sf(T){Ga&&Ga(T)}function Ll(){mi.stop()}function Dl(){mi.start()}let mi=new wu;mi.setAnimationLoop(sf),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(T){Ga=T,At.setAnimationLoop(T),T===null?mi.stop():mi.start()},At.addEventListener("sessionstart",Ll),At.addEventListener("sessionend",Dl),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;D!==null&&D.renderStart(T,B);let X=At.enabled===!0&&At.isPresenting===!0,G=E!==null&&(q===null||X)&&E.begin(R,q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(B),B=At.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,B,q),M=mt.get(T,x.length),M.init(B),M.state.textureUnits=Z.getTextureUnits(),x.push(M),vt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),nt.setFromProjectionMatrix(vt,xn,B.reversedDepth),ot=this.localClippingEnabled,at=Ot.init(this.clippingPlanes,ot),A=_t.get(T,w.length),A.init(),w.push(A),At.enabled===!0&&At.isPresenting===!0){let Tt=R.xr.getDepthSensingMesh();Tt!==null&&Va(Tt,B,-1/0,R.sortObjects)}Va(T,B,0,R.sortObjects),A.finish(),R.sortObjects===!0&&A.sort(wt,Gt,B.reversedDepth),Vt=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Vt&&Jt.addToRenderList(A,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Ot.beginShadows();let V=M.state.shadowsArray;if(zt.render(V,T,B),at===!0&&Ot.endShadows(),(G&&E.hasRenderPass())===!1){let Tt=A.opaque,bt=A.transmissive;if(M.setupLights(),B.isArrayCamera){let Rt=B.cameras;if(bt.length>0)for(let Lt=0,Kt=Rt.length;Lt<Kt;Lt++){let Qt=Rt[Lt];Ul(Tt,bt,T,Qt)}Vt&&Jt.render(T);for(let Lt=0,Kt=Rt.length;Lt<Kt;Lt++){let Qt=Rt[Lt];Nl(A,T,Qt,Qt.viewport)}}else bt.length>0&&Ul(Tt,bt,T,B),Vt&&Jt.render(T),Nl(A,T,B)}q!==null&&F===0&&(Z.updateMultisampleRenderTarget(q),Z.updateRenderTargetMipmap(q)),G&&E.end(R),T.isScene===!0&&T.onAfterRender(R,T,B),St.resetDefaultState(),K=-1,tt=null,x.pop(),x.length>0?(M=x[x.length-1],Z.setTextureUnits(M.state.textureUnits),at===!0&&Ot.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?A=w[w.length-1]:A=null,D!==null&&D.renderEnd()};function Va(T,B,X,G){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLightProbeGrid)M.pushLightProbeGrid(T);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||nt.intersectsSprite(T)){G&&kt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(vt);let Tt=Q.update(T),bt=T.material;bt.visible&&A.push(T,Tt,bt,X,kt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||nt.intersectsObject(T))){let Tt=Q.update(T),bt=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),kt.copy(T.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),kt.copy(Tt.boundingSphere.center)),kt.applyMatrix4(T.matrixWorld).applyMatrix4(vt)),Array.isArray(bt)){let Rt=Tt.groups;for(let Lt=0,Kt=Rt.length;Lt<Kt;Lt++){let Qt=Rt[Lt],Nt=bt[Qt.materialIndex];Nt&&Nt.visible&&A.push(T,Tt,Nt,X,kt.z,Qt)}}else bt.visible&&A.push(T,Tt,bt,X,kt.z,null)}}let Mt=T.children;for(let Tt=0,bt=Mt.length;Tt<bt;Tt++)Va(Mt[Tt],B,X,G)}function Nl(T,B,X,G){let{opaque:V,transmissive:Mt,transparent:Tt}=T;M.setupLightsView(X),at===!0&&Ot.setGlobalState(R.clippingPlanes,X),G&&v.viewport(st.copy(G)),V.length>0&&wr(V,B,X),Mt.length>0&&wr(Mt,B,X),Tt.length>0&&wr(Tt,B,X),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Ul(T,B,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[G.id]===void 0){let Nt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[G.id]=new rn(1,1,{generateMipmaps:!0,type:Nt?Un:Qe,minFilter:ui,samples:Math.max(4,P.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let Mt=M.state.transmissionRenderTarget[G.id],Tt=G.viewport||st;Mt.setSize(Tt.z*R.transmissionResolutionScale,Tt.w*R.transmissionResolutionScale);let bt=R.getRenderTarget(),Rt=R.getActiveCubeFace(),Lt=R.getActiveMipmapLevel();R.setRenderTarget(Mt),R.getClearColor(ce),jt=R.getClearAlpha(),jt<1&&R.setClearColor(16777215,.5),R.clear(),Vt&&Jt.render(X);let Kt=R.toneMapping;R.toneMapping=yn;let Qt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),M.setupLightsView(G),at===!0&&Ot.setGlobalState(R.clippingPlanes,G),wr(T,X,G),Z.updateMultisampleRenderTarget(Mt),Z.updateRenderTargetMipmap(Mt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let de=0,Ae=B.length;de<Ae;de++){let we=B[de],{object:pe,geometry:We,material:Et,group:tn}=we;if(Et.side===je&&pe.layers.test(G.layers)){let re=Et.side;Et.side=Ve,Et.needsUpdate=!0,Fl(pe,X,G,We,Et,tn),Et.side=re,Et.needsUpdate=!0,Nt=!0}}Nt===!0&&(Z.updateMultisampleRenderTarget(Mt),Z.updateRenderTargetMipmap(Mt))}R.setRenderTarget(bt,Rt,Lt),R.setClearColor(ce,jt),Qt!==void 0&&(G.viewport=Qt),R.toneMapping=Kt}function wr(T,B,X){let G=B.isScene===!0?B.overrideMaterial:null;for(let V=0,Mt=T.length;V<Mt;V++){let Tt=T[V],{object:bt,geometry:Rt,group:Lt}=Tt,Kt=Tt.material;Kt.allowOverride===!0&&G!==null&&(Kt=G),bt.layers.test(X.layers)&&Fl(bt,B,X,Rt,Kt,Lt)}}function Fl(T,B,X,G,V,Mt){T.onBeforeRender(R,B,X,G,V,Mt),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(R,B,X,G,T,Mt),V.transparent===!0&&V.side===je&&V.forceSinglePass===!1?(V.side=Ve,V.needsUpdate=!0,R.renderBufferDirect(X,B,G,V,T,Mt),V.side=Wn,V.needsUpdate=!0,R.renderBufferDirect(X,B,G,V,T,Mt),V.side=je):R.renderBufferDirect(X,B,G,V,T,Mt),T.onAfterRender(R,B,X,G,V,Mt)}function Ar(T,B,X){B.isScene!==!0&&(B=Pt);let G=W.get(T),V=M.state.lights,Mt=M.state.shadowsArray,Tt=V.state.version,bt=pt.getParameters(T,V.state,Mt,B,X,M.state.lightProbeGridArray),Rt=pt.getProgramCacheKey(bt),Lt=G.programs;G.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,G.fog=B.fog;let Kt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;G.envMap=ht.get(T.envMap||G.environment,Kt),G.envMapRotation=G.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Lt===void 0&&(T.addEventListener("dispose",En),Lt=new Map,G.programs=Lt);let Qt=Lt.get(Rt);if(Qt!==void 0){if(G.currentProgram===Qt&&G.lightsStateVersion===Tt)return Bl(T,bt),Qt}else bt.uniforms=pt.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,X,bt),T.onBeforeCompile(bt,R),Qt=pt.acquireProgram(bt,Rt),Lt.set(Rt,Qt),G.uniforms=bt.uniforms;let Nt=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Nt.clippingPlanes=Ot.uniform),Bl(T,bt),G.needsLights=cf(T),G.lightsStateVersion=Tt,G.needsLights&&(Nt.ambientLightColor.value=V.state.ambient,Nt.lightProbe.value=V.state.probe,Nt.directionalLights.value=V.state.directional,Nt.directionalLightShadows.value=V.state.directionalShadow,Nt.spotLights.value=V.state.spot,Nt.spotLightShadows.value=V.state.spotShadow,Nt.rectAreaLights.value=V.state.rectArea,Nt.ltc_1.value=V.state.rectAreaLTC1,Nt.ltc_2.value=V.state.rectAreaLTC2,Nt.pointLights.value=V.state.point,Nt.pointLightShadows.value=V.state.pointShadow,Nt.hemisphereLights.value=V.state.hemi,Nt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Nt.spotLightMatrix.value=V.state.spotLightMatrix,Nt.spotLightMap.value=V.state.spotLightMap,Nt.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=M.state.lightProbeGridArray.length>0,G.currentProgram=Qt,G.uniformsList=null,Qt}function Ol(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=fs.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Bl(T,B){let X=W.get(T);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function rf(T,B){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;b.setFromMatrixPosition(B.matrixWorld);for(let X=0,G=T.length;X<G;X++){let V=T[X];if(V.texture!==null&&V.boundingBox.containsPoint(b))return V}return null}function of(T,B,X,G,V){B.isScene!==!0&&(B=Pt),Z.resetTextureUnits();let Mt=B.fog,Tt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?B.environment:null,bt=q===null?R.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ne.workingColorSpace,Rt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Lt=ht.get(G.envMap||Tt,Rt),Kt=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Qt=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Nt=!!X.morphAttributes.position,de=!!X.morphAttributes.normal,Ae=!!X.morphAttributes.color,we=yn;G.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(we=R.toneMapping);let pe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,We=pe!==void 0?pe.length:0,Et=W.get(G),tn=M.state.lights;if(at===!0&&(ot===!0||T!==tt)){let ye=T===tt&&G.id===K;Ot.setState(G,T,ye)}let re=!1;G.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==tn.state.version||Et.outputColorSpace!==bt||V.isBatchedMesh&&Et.batching===!1||!V.isBatchedMesh&&Et.batching===!0||V.isBatchedMesh&&Et.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Et.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Et.instancing===!1||!V.isInstancedMesh&&Et.instancing===!0||V.isSkinnedMesh&&Et.skinning===!1||!V.isSkinnedMesh&&Et.skinning===!0||V.isInstancedMesh&&Et.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Et.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Et.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Et.instancingMorph===!1&&V.morphTexture!==null||Et.envMap!==Lt||G.fog===!0&&Et.fog!==Mt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Ot.numPlanes||Et.numIntersection!==Ot.numIntersection)||Et.vertexAlphas!==Kt||Et.vertexTangents!==Qt||Et.morphTargets!==Nt||Et.morphNormals!==de||Et.morphColors!==Ae||Et.toneMapping!==we||Et.morphTargetsCount!==We||!!Et.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,Et.__version=G.version);let ln=Et.currentProgram;re===!0&&(ln=Ar(G,B,V),D&&G.isNodeMaterial&&D.onUpdateProgram(G,ln,Et));let Tn=!1,Zn=!1,Ni=!1,me=ln.getUniforms(),Re=Et.uniforms;if(v.useProgram(ln.program)&&(Tn=!0,Zn=!0,Ni=!0),G.id!==K&&(K=G.id,Zn=!0),Et.needsLights){let ye=rf(M.state.lightProbeGridArray,V);Et.lightProbeGrid!==ye&&(Et.lightProbeGrid=ye,Zn=!0)}if(Tn||tt!==T){v.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),me.setValue(U,"projectionMatrix",T.projectionMatrix),me.setValue(U,"viewMatrix",T.matrixWorldInverse);let Kn=me.map.cameraPosition;Kn!==void 0&&Kn.setValue(U,xt.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&me.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&me.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),tt!==T&&(tt=T,Zn=!0,Ni=!0)}if(Et.needsLights&&(tn.state.directionalShadowMap.length>0&&me.setValue(U,"directionalShadowMap",tn.state.directionalShadowMap,Z),tn.state.spotShadowMap.length>0&&me.setValue(U,"spotShadowMap",tn.state.spotShadowMap,Z),tn.state.pointShadowMap.length>0&&me.setValue(U,"pointShadowMap",tn.state.pointShadowMap,Z)),V.isSkinnedMesh){me.setOptional(U,V,"bindMatrix"),me.setOptional(U,V,"bindMatrixInverse");let ye=V.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),me.setValue(U,"boneTexture",ye.boneTexture,Z))}V.isBatchedMesh&&(me.setOptional(U,V,"batchingTexture"),me.setValue(U,"batchingTexture",V._matricesTexture,Z),me.setOptional(U,V,"batchingIdTexture"),me.setValue(U,"batchingIdTexture",V._indirectTexture,Z),me.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&me.setValue(U,"batchingColorTexture",V._colorsTexture,Z));let Jn=X.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&O.update(V,X,ln),(Zn||Et.receiveShadow!==V.receiveShadow)&&(Et.receiveShadow=V.receiveShadow,me.setValue(U,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&B.environment!==null&&(Re.envMapIntensity.value=B.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=Ex()),Zn){if(me.setValue(U,"toneMappingExposure",R.toneMappingExposure),Et.needsLights&&af(Re,Ni),Mt&&G.fog===!0&&It.refreshFogUniforms(Re,Mt),It.refreshMaterialUniforms(Re,G,rt,ct,M.state.transmissionRenderTarget[T.id]),Et.needsLights&&Et.lightProbeGrid){let ye=Et.lightProbeGrid;Re.probesSH.value=ye.texture,Re.probesMin.value.copy(ye.boundingBox.min),Re.probesMax.value.copy(ye.boundingBox.max),Re.probesResolution.value.copy(ye.resolution)}fs.upload(U,Ol(Et),Re,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(fs.upload(U,Ol(Et),Re,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&me.setValue(U,"center",V.center),me.setValue(U,"modelViewMatrix",V.modelViewMatrix),me.setValue(U,"normalMatrix",V.normalMatrix),me.setValue(U,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){let ye=G.uniformsGroups;for(let Kn=0,Ui=ye.length;Kn<Ui;Kn++){let kl=ye[Kn];it.update(kl,ln),it.bind(kl,ln)}}return ln}function af(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function cf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(T,B,X){let G=W.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),W.get(T.texture).__webglTexture=B,W.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){let X=W.get(T);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,X=0){q=T,N=B,F=X;let G=null,V=!1,Mt=!1;if(T){let bt=W.get(T);if(bt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(U.FRAMEBUFFER,bt.__webglFramebuffer),st.copy(T.viewport),ft.copy(T.scissor),qt=T.scissorTest,v.viewport(st),v.scissor(ft),v.setScissorTest(qt),K=-1;return}else if(bt.__webglFramebuffer===void 0)Z.setupRenderTarget(T);else if(bt.__hasExternalTextures)Z.rebindTextures(T,W.get(T.texture).__webglTexture,W.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Kt=T.depthTexture;if(bt.__boundDepthTexture!==Kt){if(Kt!==null&&W.has(Kt)&&(T.width!==Kt.image.width||T.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(T)}}let Rt=T.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(Mt=!0);let Lt=W.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Lt[B])?G=Lt[B][X]:G=Lt[B],V=!0):T.samples>0&&Z.useMultisampledRTT(T)===!1?G=W.get(T).__webglMultisampledFramebuffer:Array.isArray(Lt)?G=Lt[X]:G=Lt,st.copy(T.viewport),ft.copy(T.scissor),qt=T.scissorTest}else st.copy(Ut).multiplyScalar(rt).floor(),ft.copy(ae).multiplyScalar(rt).floor(),qt=Xt;if(X!==0&&(G=z),v.bindFramebuffer(U.FRAMEBUFFER,G)&&v.drawBuffers(T,G),v.viewport(st),v.scissor(ft),v.setScissorTest(qt),V){let bt=W.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,bt.__webglTexture,X)}else if(Mt){let bt=B;for(let Rt=0;Rt<T.textures.length;Rt++){let Lt=W.get(T.textures[Rt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Rt,Lt.__webglTexture,X,bt)}}else if(T!==null&&X!==0){let bt=W.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,bt.__webglTexture,X)}K=-1},this.readRenderTargetPixels=function(T,B,X,G,V,Mt,Tt,bt=0){if(!(T&&T.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=W.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt){v.bindFramebuffer(U.FRAMEBUFFER,Rt);try{let Lt=T.textures[bt],Kt=Lt.format,Qt=Lt.type;if(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+bt),!P.textureFormatReadable(Kt)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(Qt)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-G&&X>=0&&X<=T.height-V&&U.readPixels(B,X,G,V,gt.convert(Kt),gt.convert(Qt),Mt)}finally{let Lt=q!==null?W.get(q).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(T,B,X,G,V,Mt,Tt,bt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=W.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt)if(B>=0&&B<=T.width-G&&X>=0&&X<=T.height-V){v.bindFramebuffer(U.FRAMEBUFFER,Rt);let Lt=T.textures[bt],Kt=Lt.format,Qt=Lt.type;if(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+bt),!P.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Nt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Nt),U.bufferData(U.PIXEL_PACK_BUFFER,Mt.byteLength,U.STREAM_READ),U.readPixels(B,X,G,V,gt.convert(Kt),gt.convert(Qt),0);let de=q!==null?W.get(q).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,de);let Ae=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Jh(U,Ae,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Nt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Mt),U.deleteBuffer(Nt),U.deleteSync(Ae),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,X=0){let G=Math.pow(2,-X),V=Math.floor(T.image.width*G),Mt=Math.floor(T.image.height*G),Tt=B!==null?B.x:0,bt=B!==null?B.y:0;Z.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,Tt,bt,V,Mt),v.unbindTexture()},this.copyTextureToTexture=function(T,B,X=null,G=null,V=0,Mt=0){let Tt,bt,Rt,Lt,Kt,Qt,Nt,de,Ae,we=T.isCompressedTexture?T.mipmaps[Mt]:T.image;if(X!==null)Tt=X.max.x-X.min.x,bt=X.max.y-X.min.y,Rt=X.isBox3?X.max.z-X.min.z:1,Lt=X.min.x,Kt=X.min.y,Qt=X.isBox3?X.min.z:0;else{let Re=Math.pow(2,-V);Tt=Math.floor(we.width*Re),bt=Math.floor(we.height*Re),T.isDataArrayTexture?Rt=we.depth:T.isData3DTexture?Rt=Math.floor(we.depth*Re):Rt=1,Lt=0,Kt=0,Qt=0}G!==null?(Nt=G.x,de=G.y,Ae=G.z):(Nt=0,de=0,Ae=0);let pe=gt.convert(B.format),We=gt.convert(B.type),Et;B.isData3DTexture?(Z.setTexture3D(B,0),Et=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Z.setTexture2DArray(B,0),Et=U.TEXTURE_2D_ARRAY):(Z.setTexture2D(B,0),Et=U.TEXTURE_2D),v.activeTexture(U.TEXTURE0),v.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),v.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),v.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let tn=v.getParameter(U.UNPACK_ROW_LENGTH),re=v.getParameter(U.UNPACK_IMAGE_HEIGHT),ln=v.getParameter(U.UNPACK_SKIP_PIXELS),Tn=v.getParameter(U.UNPACK_SKIP_ROWS),Zn=v.getParameter(U.UNPACK_SKIP_IMAGES);v.pixelStorei(U.UNPACK_ROW_LENGTH,we.width),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,we.height),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Lt),v.pixelStorei(U.UNPACK_SKIP_ROWS,Kt),v.pixelStorei(U.UNPACK_SKIP_IMAGES,Qt);let Ni=T.isDataArrayTexture||T.isData3DTexture,me=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){let Re=W.get(T),Jn=W.get(B),ye=W.get(Re.__renderTarget),Kn=W.get(Jn.__renderTarget);v.bindFramebuffer(U.READ_FRAMEBUFFER,ye.__webglFramebuffer),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Ui=0;Ui<Rt;Ui++)Ni&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(T).__webglTexture,V,Qt+Ui),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(B).__webglTexture,Mt,Ae+Ui)),U.blitFramebuffer(Lt,Kt,Tt,bt,Nt,de,Tt,bt,U.DEPTH_BUFFER_BIT,U.NEAREST);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||W.has(T)){let Re=W.get(T),Jn=W.get(B);v.bindFramebuffer(U.READ_FRAMEBUFFER,H),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,L);for(let ye=0;ye<Rt;ye++)Ni?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.__webglTexture,V,Qt+ye):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Re.__webglTexture,V),me?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Jn.__webglTexture,Mt,Ae+ye):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Jn.__webglTexture,Mt),V!==0?U.blitFramebuffer(Lt,Kt,Tt,bt,Nt,de,Tt,bt,U.COLOR_BUFFER_BIT,U.NEAREST):me?U.copyTexSubImage3D(Et,Mt,Nt,de,Ae+ye,Lt,Kt,Tt,bt):U.copyTexSubImage2D(Et,Mt,Nt,de,Lt,Kt,Tt,bt);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else me?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Et,Mt,Nt,de,Ae,Tt,bt,Rt,pe,We,we.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Et,Mt,Nt,de,Ae,Tt,bt,Rt,pe,we.data):U.texSubImage3D(Et,Mt,Nt,de,Ae,Tt,bt,Rt,pe,We,we):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Mt,Nt,de,Tt,bt,pe,We,we.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Mt,Nt,de,we.width,we.height,pe,we.data):U.texSubImage2D(U.TEXTURE_2D,Mt,Nt,de,Tt,bt,pe,We,we);v.pixelStorei(U.UNPACK_ROW_LENGTH,tn),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,re),v.pixelStorei(U.UNPACK_SKIP_PIXELS,ln),v.pixelStorei(U.UNPACK_SKIP_ROWS,Tn),v.pixelStorei(U.UNPACK_SKIP_IMAGES,Zn),Mt===0&&B.generateMipmaps&&U.generateMipmap(Et),v.unbindTexture()},this.initRenderTarget=function(T){W.get(T).__webglFramebuffer===void 0&&Z.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Z.setTextureCube(T,0):T.isData3DTexture?Z.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Z.setTexture2DArray(T,0):Z.setTexture2D(T,0),v.unbindTexture()},this.resetState=function(){N=0,F=0,q=null,v.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var Du=[[0,0,0],[0,0,-80],[25,2,-140],[75,4,-170],[130,2,-140],[150,0,-80],[135,-2,-20],[95,-3,25],[120,-1,75],[160,2,120],[140,4,180],[80,2,195],[30,0,160],[-35,-1,180],[-95,1,150],[-115,2,105],[-85,1,75],[-45,0,65],[-15,0,45]],Nu={meadow:{id:"meadow",shortcut:[142,180],name:"Meadow Loop",points:Du,theme:{skyTop:3116287,skyMid:8177919,skyLow:14218239,fog:14218239,ground:6082373,trees:[4114766,3126595,8051018,5427578,16751821,16765286],trunk:10115884,ambient:.85,sun:1.7,sunColor:16774368,hemiSky:12575743,clouds:16777215,curbA:"#ef4444",curbB:"#ffffff",padColor:"#ff7a00"}},sunset:{id:"sunset",shortcut:[142,180],name:"Sunset Bay",points:Du.map(([s,t,e],n)=>[-s,t*1.6+(n%3===0?1.5:0),e]),theme:{skyTop:4930216,skyMid:16747100,skyLow:16766366,fog:16763296,ground:15781766,trees:[3064998,2533018,8115081,16752451],trunk:10512186,ambient:.8,sun:1.6,sunColor:16757370,hemiSky:16761504,clouds:16769232,curbA:"#ff7a00",curbB:"#fff3d6",padColor:"#ff3b8d"}},frosty:{id:"frosty",shortcut:[216,262],name:"Frosty Peaks",points:[[0,0,0],[0,0,-80],[-20,3,-130],[-70,6,-150],[-120,5,-120],[-130,3,-60],[-90,1,-20],[-60,0,30],[-100,2,80],[-80,5,140],[-20,7,160],[45,5,150],[95,3,120],[100,1,75],[60,0,55],[20,0,40]],theme:{skyTop:6990312,skyMid:12575743,skyLow:15924223,fog:15398655,ground:16054527,trees:[15267071,10475720,8370392,13625599],trunk:8018500,ambient:.95,sun:1.4,sunColor:15398143,hemiSky:16777215,clouds:16777215,curbA:"#3b82f6",curbB:"#ffffff",padColor:"#00b4ff"}},neon:{id:"neon",shortcut:[228,262],name:"Neon Night",points:[[0,0,0],[0,0,-80],[10,2,-150],[60,4,-190],[120,3,-170],[140,1,-110],[110,0,-60],[130,-1,0],[180,1,40],[170,3,110],[110,4,140],[50,2,110],[20,0,140],[-40,1,170],[-110,3,155],[-165,4,105],[-130,2,40],[-90,1,55],[-45,0,60],[-12,0,45]],theme:{skyTop:460575,skyMid:2366046,skyLow:7024547,fog:2759518,ground:1911642,trees:[16732120,2746367,10906623,6094749],trunk:3813227,glow:!0,ambient:.55,sun:.9,sunColor:12167423,hemiSky:7035903,clouds:4865423,curbA:"#ff2fd0",curbB:"#2a2a5a",padColor:"#29e7ff"}}};function vr(s){return Nu[s||"meadow"]||Nu.meadow}function Uu(){let s=document.createElement("canvas");s.width=512,s.height=128;let t=s.getContext("2d"),e=4,n=16,i=s.width/n,o=s.height/e;for(let a=0;a<e;a++)for(let c=0;c<n;c++)t.fillStyle=(a+c)%2===0?"#ffffff":"#18181b",t.fillRect(c*i,a*o,i,o);t.fillStyle="#eab308",t.fillRect(0,0,s.width,6),t.fillRect(0,s.height-6,s.width,6);let r=new Ie(s);return r.wrapS=sn,r.wrapT=sn,r}function Fu(){let s=document.createElement("canvas");s.width=512,s.height=512;let t=s.getContext("2d");t.fillStyle="#27272a",t.fillRect(0,0,512,512);for(let o=0;o<6e3;o++){let r=Math.random()*512,a=Math.random()*512,c=Math.floor(35+Math.random()*15);t.fillStyle=`rgb(${c},${c},${c})`,t.fillRect(r,a,2,2)}t.fillStyle="#f8fafc";let e=8,n=512/e;for(let o=0;o<e;o++)t.fillRect(250,o*n+12,12,n-24);t.fillStyle="#eab308",t.fillRect(24,0,8,512),t.fillRect(480,0,8,512);let i=new Ie(s);return i.wrapS=sn,i.wrapT=sn,i.repeat.set(1,40),i}function Ou(s="#dc2626",t="#ffffff"){let e=document.createElement("canvas");e.width=128,e.height=256;let n=e.getContext("2d"),i=8,o=e.height/i;for(let a=0;a<i;a++)n.fillStyle=a%2===0?s:t,n.fillRect(0,a*o,e.width,o);let r=new Ie(e);return r.wrapS=sn,r.wrapT=sn,r.repeat.set(1,22),r}function br(s,t,e){let n=document.createElement("canvas");n.width=512,n.height=128;let i=n.getContext("2d");return i.fillStyle=t,i.fillRect(0,0,512,128),i.fillStyle=e,i.fillRect(0,0,512,8),i.fillRect(0,120,512,8),i.font="bold 44px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillStyle=e,i.fillText(s,256,64),new Ie(n)}var Ia=class{constructor(t,e){$(this,"scene");$(this,"spline");$(this,"totalLength",0);$(this,"trackPoints",[]);$(this,"trackMesh",null);$(this,"sceneryGroup");$(this,"startingLightsGroup");$(this,"lightMeshes",[]);$(this,"animatedProps",[]);$(this,"roadWidth",18);$(this,"course");$(this,"shortcut",null);this.scene=t,this.course=vr(e),this.sceneryGroup=new ie,this.startingLightsGroup=new ie,this.scene.add(this.sceneryGroup),this.scene.add(this.startingLightsGroup);let n=this.course.points.map(([i,o,r])=>new I(i,o,r));this.spline=new oi(n,!0,"centripetal",.4),this.totalLength=this.spline.getLength(),this.sampleTrackPoints(300),this.buildRoadMesh(),this.findShortcut(),this.buildTerrainAndHills(),this.buildStartGantry(),this.buildScenery(),this.buildBarriers(),this.buildShortcut()}sampleTrackPoints(t){this.trackPoints=[];let e=0,n=this.spline.getPointAt(0);for(let i=0;i<t;i++){let o=i/t,r=this.spline.getPointAt(o),a=this.spline.getTangentAt(o).normalize(),c=new I(0,1,0),l=new I().crossVectors(a,c).normalize();i>0&&(e+=n.distanceTo(r)),n=r,this.trackPoints.push({x:r.x,y:r.y,z:r.z,tangentX:a.x,tangentY:a.y,tangentZ:a.z,normalX:l.x,normalY:l.y,normalZ:l.z,width:this.roadWidth,bank:0,distance:e})}}buildRoadMesh(){let e=this.roadWidth/2,n=new ue,i=[],o=[],r=[],a=[],c=[],l=[],h=[],f=[],u=[],d=2.2;for(let R=0;R<=300;R++){let C=R%300/300,D=this.spline.getPointAt(C),z=this.spline.getTangentAt(C).normalize(),H=new I(-z.z,0,z.x).normalize(),L=D.clone().addScaledVector(H,-e),N=D.clone().addScaledVector(H,e);i.push(L.x,L.y+.05,L.z),i.push(N.x,N.y+.05,N.z);let F=R/300*60;o.push(0,F),o.push(1,F);let q=L.clone().addScaledVector(H,-d);a.push(q.x,q.y+.12,q.z),a.push(L.x,L.y+.06,L.z),c.push(0,F*2),c.push(1,F*2);let K=N.clone().addScaledVector(H,d);if(h.push(N.x,N.y+.06,N.z),h.push(K.x,K.y+.12,K.z),f.push(0,F*2),f.push(1,F*2),R<300){let tt=R*2,st=(R+1)*2;r.push(tt,tt+1,st),r.push(tt+1,st+1,st),l.push(tt,tt+1,st),l.push(tt+1,st+1,st),u.push(tt,tt+1,st),u.push(tt+1,st+1,st)}}n.setAttribute("position",new Wt(i,3)),n.setAttribute("uv",new Wt(o,2)),n.setIndex(r),n.computeVertexNormals();let p=Fu(),_=new Dt({map:p,roughness:.85,metalness:.1});this.trackMesh=new et(n,_),this.trackMesh.receiveShadow=!0,this.sceneryGroup.add(this.trackMesh);let g=Ou(this.course.theme.curbA,this.course.theme.curbB),m=new Dt({map:g,roughness:.7}),y=new ue;y.setAttribute("position",new Wt(a,3)),y.setAttribute("uv",new Wt(c,2)),y.setIndex(l),y.computeVertexNormals();let S=new et(y,m);S.receiveShadow=!0,this.sceneryGroup.add(S);let b=new ue;b.setAttribute("position",new Wt(h,3)),b.setAttribute("uv",new Wt(f,2)),b.setIndex(u),b.computeVertexNormals();let A=new et(b,m);A.receiveShadow=!0,this.sceneryGroup.add(A);let M=new Ge(this.roadWidth,4),w=Uu(),x=new Dt({map:w,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2}),E=new et(M,x);E.rotation.x=-Math.PI/2,E.position.set(0,.08,0),this.sceneryGroup.add(E)}buildTerrainAndHills(){let t=new Ge(600,600,128,128);t.rotateX(-Math.PI/2);let e=t.attributes.position;for(let o=0;o<e.count;o++){let r=e.getX(o),a=e.getZ(o),c=this.getTerrainElevation(r,a),l=this.getClosestTrackPointInfo(r,a);l.dist<this.roadWidth*.5+6&&(c=Math.min(c,l.y-.35));let h=this.shortcut?this.segDist(r,a,this.shortcut.ax,this.shortcut.az,this.shortcut.bx,this.shortcut.bz):null;h&&h.d<this.shortcut.w/2+6&&(c=Math.min(c,this.shortcut.ay+(this.shortcut.by-this.shortcut.ay)*h.t-.3)),e.setY(o,c)}t.computeVertexNormals();let n=new Dt({color:5078031,roughness:.9,flatShading:!0}),i=new et(t,n);i.receiveShadow=!0,this.sceneryGroup.add(i)}findShortcut(){let t=this.course.shortcut;if(!t)return;let e=this.trackPoints[t[0]],n=this.trackPoints[t[1]];!e||!n||(this.shortcut={ax:e.x,ay:e.y,az:e.z,bx:n.x,by:n.y,bz:n.z,w:11,ia:t[0],ib:t[1]})}segDist(t,e,n,i,o,r){let a=o-n,c=r-i,l=a*a+c*c||1,h=Math.max(0,Math.min(1,((t-n)*a+(e-i)*c)/l)),f=n+a*h,u=i+c*h;return{d:Math.hypot(t-f,e-u),t:h}}onShortcut(t,e){let n=this.shortcut;if(!n)return null;let i=this.segDist(t,e,n.ax,n.az,n.bx,n.bz);return i.d>n.w/2+.8?null:n.ay+(n.by-n.ay)*i.t}buildShortcut(){let t=this.shortcut;if(!t)return;let e=document.createElement("canvas");e.width=64,e.height=256;let n=e.getContext("2d");n.fillStyle="#c98b4f",n.fillRect(0,0,64,256),n.fillStyle="#ffffff",n.fillRect(0,0,4,256),n.fillRect(60,0,4,256);for(let f=0;f<260;f++)n.fillStyle=Math.random()<.5?"rgba(90,55,25,.35)":"rgba(230,190,140,.35)",n.fillRect(Math.random()*64,Math.random()*256,3,3);n.fillStyle="rgba(70,40,20,.35)",n.fillRect(14,0,6,256),n.fillRect(44,0,6,256);let i=new Ie(e);i.wrapT=sn;let o=Math.hypot(t.bx-t.ax,t.bz-t.az);i.repeat.set(1,o/10);let r=new Ge(t.w,o,1,8),a=new et(r,new Dt({map:i,roughness:1,polygonOffset:!0,polygonOffsetFactor:1}));a.rotation.x=-Math.PI/2,a.rotation.z=-Math.atan2(t.bx-t.ax,t.bz-t.az)+Math.PI,a.position.set((t.ax+t.bx)/2,(t.ay+t.by)/2-.05,(t.az+t.bz)/2),this.sceneryGroup.add(a);let c=new Dt({color:16742912}),l=(t.bx-t.ax)/o,h=(t.bz-t.az)/o;for(let f=12;f<o-12;f+=9)for(let u of[-1,1]){let d=new et(new Ue(.45,1.2,8),c);d.position.set(t.ax+l*f+-h*u*(t.w/2+.6),t.ay+(t.by-t.ay)*(f/o)+.5,t.az+h*f+l*u*(t.w/2+.6)),this.sceneryGroup.add(d)}for(let[f,u,d,p,_]of[[t.ax,t.ay,t.az,t.bx,t.bz],[t.bx,t.by,t.bz,t.ax,t.az]]){let g=document.createElement("canvas");g.width=256,g.height=96;let m=g.getContext("2d");m.fillStyle="#ffc83d",m.fillRect(0,0,256,96),m.fillStyle="#1b1b3a",m.font="bold 44px sans-serif",m.textAlign="center",m.textBaseline="middle",m.fillText("SHORTCUT",128,50);let y=new Ie(g);y.colorSpace=De;let S=new et(new Ge(4.2,1.6),new Dt({map:y,side:je})),b=p-f,A=_-d,M=Math.hypot(b,A)||1,w=this.roadWidth/2+7,x=t.w/2+2.2,E=f+b/M*w+-A/M*x,R=d+A/M*w+b/M*x;S.position.set(E,u+2.6,R),S.lookAt(f,u+2.6,d);let C=new et(new ge(.12,.12,2.6,6),new Dt({color:7031339}));C.position.set(E,u+1.3,R),this.sceneryGroup.add(S,C)}}getClosestTrackPointInfo(t,e){let n=9999,i=0;for(let o=0;o<this.trackPoints.length;o+=4){let r=this.trackPoints[o],a=r.x-t,c=r.z-e,l=Math.sqrt(a*a+c*c);l<n&&(n=l,i=r.y)}return{dist:n,y:i}}getTerrainElevation(t,e){let{dist:n,y:i}=this.getClosestTrackPointInfo(t,e);if(n>25){let o=Math.sin(t*.02)*Math.cos(e*.02)*14+Math.sin(t*.05+e*.04)*6,a=Math.max(0,Math.min(1,(n-25)/(60-25))),c=i-.05,l=Math.max(-2,o-2);return c*(1-a)+l*a}else return i-.05}buildStartGantry(){let t=new ie;t.position.set(0,0,0);let e=new Dt({color:3359061,roughness:.4,metalness:.7}),n=new Dt({map:br("\u{1F3C1} SUPER ARCADE GP \u{1F3C1}","#dc2626","#ffffff")}),i=this.roadWidth/2+2.5,o=9,r=new he(.8,o,.8),a=new et(r,e);a.position.set(-i,o/2,0),a.castShadow=!0,t.add(a);let c=new et(r,e);c.position.set(i,o/2,0),c.castShadow=!0,t.add(c);let l=new he(this.roadWidth+6,1.4,1.2),h=new et(l,e);h.position.set(0,o,0),h.castShadow=!0,t.add(h);let f=new Ge(this.roadWidth-2,2.2),u=new et(f,n);u.position.set(0,o+.3,-.62),u.rotation.y=Math.PI,t.add(u);let d=new et(f,n);d.position.set(0,o+.3,.62),t.add(d),this.lightMeshes=[];let p=new he(4.8,1.6,.6),_=new et(p,new Dt({color:1579035}));_.position.set(0,o-1.2,-.2),t.add(_);let g=[15680580,15680580,15680580];for(let m=0;m<3;m++){let y=new oe(.4,16,16),S=new Dt({color:2565930,emissive:0,roughness:.2}),b=new et(y,S);b.position.set((m-1)*1.4,o-1.2,-.5),t.add(b),this.lightMeshes.push(b)}this.startingLightsGroup.add(t)}setStartingLights(t){for(let e=0;e<3;e++){let n=this.lightMeshes[e];if(!n)continue;let i=n.material;t>=1&&t<=3?e<t?(i.color.setHex(15680580),i.emissive.setHex(15680580)):(i.color.setHex(2565930),i.emissive.setHex(0)):t===4?(i.color.setHex(2278750),i.emissive.setHex(2278750)):(i.color.setHex(2565930),i.emissive.setHex(0))}}buildScenery(){let t=new Dt({color:7877903,roughness:.9}),e=new Dt({color:1409085,roughness:.8,flatShading:!0}),n=new Dt({color:1467700,roughness:.8,flatShading:!0}),i=(o,r,a,c)=>{let l=new ie;l.position.set(o,r,a),l.scale.set(c,c,c);let h=new ge(.3,.45,2.5,6),f=new et(h,t);f.position.y=1.25,f.castShadow=!0,l.add(f);let u=new et(new Ue(2.2,3.2,6),e);u.position.y=3.5,u.castShadow=!0,l.add(u);let d=new et(new Ue(1.7,2.8,6),n);d.position.y=5.2,d.castShadow=!0,l.add(d);let p=new et(new Ue(1.2,2.2,6),e);return p.position.y=6.6,p.castShadow=!0,l.add(p),l};for(let o=0;o<90;o++){let r=o/90*Math.PI*2,a=60+o%7*22,c=Math.cos(r)*a+(Math.random()-.5)*30,l=Math.sin(r)*a+(Math.random()-.5)*30,{dist:h}=this.getClosestTrackPointInfo(c,l);if(h>this.roadWidth/2+6){let f=.8+Math.random()*.7,u=this.getTerrainElevation(c,l),d=i(c,u,l,f);this.sceneryGroup.add(d)}}this.buildGrandstand(-22,this.getTerrainElevation(-22,-45),-45,Math.PI/2),this.buildGrandstand(22,this.getTerrainElevation(22,-45),-45,-Math.PI/2),this.buildHotAirBalloon(60,45,-50,15680580,16436245),this.buildHotAirBalloon(-80,55,60,3900150,16777215);for(let[o,r]of[[120,60],[-110,-100],[200,-150],[-200,120],[60,-240]])this.getClosestTrackPointInfo(o,r).dist>this.roadWidth/2+14&&this.buildWindTurbine(o,this.getTerrainElevation(o,r),r)}buildGrandstand(t,e,n,i){let o=new ie;o.position.set(t,e,n),o.rotation.y=i;let r=new Dt({color:4674921,roughness:.5}),a=new Dt({color:14427686,roughness:.4}),c=new Dt({color:3900150,roughness:.6}),l=5;for(let _=0;_<l;_++){let g=new he(24,.8,1.6),m=new et(g,r);m.position.set(0,(_+1)*.8,_*1.4),m.castShadow=!0,o.add(m);for(let y=0;y<12;y++){let S=new he(.7,.9,.6),b=[15680580,3900150,15381256,1096065,11032055,16777215],A=new Dt({color:b[Math.floor(Math.random()*b.length)]}),M=new et(S,A);M.position.set(-10+y*1.8+(Math.random()-.5)*.3,(_+1)*.8+.7,_*1.4),o.add(M)}}let h=new he(26,.4,9),f=new et(h,a);f.position.set(0,8,3),f.rotation.x=.15,f.castShadow=!0,o.add(f);let u=new ge(.2,.2,8,8),d=new et(u,r);d.position.set(-11,4,-1),o.add(d);let p=new et(u,r);p.position.set(11,4,-1),o.add(p),this.sceneryGroup.add(o)}buildHotAirBalloon(t,e,n,i,o){let r=new ie;r.position.set(t,e,n);let a=new oe(7,14,14);a.scale(1,1.4,1);let c=new Dt({color:i,roughness:.4}),l=new et(a,c);l.castShadow=!0,r.add(l);let h=new he(2,1.6,2),f=new Dt({color:7877903,roughness:.9}),u=new et(h,f);u.position.set(0,-11,0),r.add(u),this.sceneryGroup.add(r);let d=e;this.animatedProps.push({mesh:r,update:p=>{r.position.y=d+Math.sin(p*.8+t)*2.5,r.rotation.y=p*.1}})}buildWindTurbine(t,e,n){let i=new ie;i.position.set(t,e,n);let o=new Dt({color:15857145,roughness:.3}),r=new ge(.6,1.4,28,10),a=new et(r,o);a.position.y=14,a.castShadow=!0,i.add(a);let c=new oe(.9,10,10),l=new et(c,o);l.position.set(0,28,.8),i.add(l);let h=new ie;h.position.set(0,28,1.2);for(let f=0;f<3;f++){let u=new he(.5,11,.1),d=new et(u,o);d.position.y=5.5;let p=new ie;p.rotation.z=f*Math.PI*2/3,p.add(d),h.add(p)}i.add(h),this.sceneryGroup.add(i),this.animatedProps.push({mesh:h,update:(f,u)=>{h.rotation.z+=u*1.8}})}buildBarriers(){let t=[br("\u26A1 TURBO CHARGE \u26A1","#1d4ed8","#ffffff"),br("\u{1F525} APEX DRIFT \u{1F525}","#ea580c","#ffffff"),br("\u{1F3C6} CHAMPIONSHIP \u{1F3C6}","#eab308","#000000")],e=[25,45,80,120,160,210,260],n=this.roadWidth/2+1.2;e.forEach((i,o)=>{if(i>=this.trackPoints.length)return;let r=this.trackPoints[i],a=t[o%t.length],c=new Dt({map:a,roughness:.5}),l=new he(.4,1.8,8),h=new et(l,c);h.position.set(r.x+r.normalX*n,r.y+.9,r.z+r.normalZ*n),!(this.shortcut&&this.segDist(h.position.x,h.position.z,this.shortcut.ax,this.shortcut.az,this.shortcut.bx,this.shortcut.bz).d<this.shortcut.w+4)&&(h.lookAt(h.position.x+r.tangentX,h.position.y,h.position.z+r.tangentZ),h.castShadow=!0,this.sceneryGroup.add(h))})}getClosestTrackPoint(t,e){let n=1/0,i=0;for(let r=0;r<this.trackPoints.length;r++){let a=this.trackPoints[r],c=a.x-t,l=a.z-e,h=c*c+l*l;h<n&&(n=h,i=r)}return{point:this.trackPoints[i],index:i,distanceToCenter:Math.sqrt(n)}}update(t,e){for(let n of this.animatedProps)n.update(t,e)}};function bl(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),o={},r={},a=s[0].morphTargetsRelative,c=new ue,l=0;for(let h=0;h<s.length;++h){let f=s[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,f=[];for(let u=0;u<s.length;++u){let d=s[u].index;for(let p=0;p<d.count;++p)f.push(d.getX(p)+h);h+=s[u].attributes.position.count}c.setIndex(f)}for(let h in o){let f=Bu(o[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in r){let f=r[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let _=0;_<r[h].length;++_)d.push(r[h][_][u]);let p=Bu(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function Bu(s){let t,e,n,i=-1,o=0;for(let l=0;l<s.length;++l){let h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}let r=new t(o),a=new Ne(r,e,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let f=c/e;for(let u=0,d=h.count;u<d;u++)for(let p=0;p<e;p++){let _=h.getComponent(u,p);a.setComponent(u+f,p,_)}}else r.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}var La={cap:"mario",cat:"luigi",bow:"peach",bunny:"daisy",horns:"yoshi",antenna:"toad",crown:"bowser",bear:"donkeykong"};function Ml(s,t,e="race"){let n=La[t.topper||"cap"]||"mario",i=(M,w=.48,x=0)=>{let E=new Dt({color:M,roughness:w,metalness:x});return E.userData.preserveShading=!0,E},o=i(16762266),r=i(16775659,.3),a=i(1514536,.3),c=i(4858902),l=i(16762158,.25,.55),h=i(14822448),f=i(1878598),u=i(2380489),d=new oe(1,e==="portrait"?28:20,e==="portrait"?20:14),p=(M,w,x,E,R,C,D,z)=>{let H=new et(d,w);return H.position.set(x,E,R),H.scale.set(C,D,z),H.castShadow=H.receiveShadow=!0,M.add(H),H},_=(M,w,x,E)=>{let R=new oi(x.map(D=>new I(D[0],D[1],D[2]))),C=new et(new Ri(R,e==="portrait"?20:12,E,e==="portrait"?8:6,!1),w);return C.castShadow=!0,M.add(C),C},g=(M,w,x,E,R=.025)=>{let C=new _n;C.moveTo(x[0][0],x[0][1]),x.slice(1).forEach(z=>C.lineTo(z[0],z[1])),C.closePath();let D=new et(new Dn(C,{depth:R,steps:1,bevelEnabled:!0,bevelSegments:3,bevelSize:.008,bevelThickness:.008}),w);return D.position.z=E,D.castShadow=!0,M.add(D),D},m=(M,w,x,E,R,C,D,z=0)=>{let H=new et(new Ue(C,D,16),w);return H.position.set(x,E,R),H.rotation.z=z,H.castShadow=!0,M.add(H),H},y=new ie;y.name=n+"-head",y.position.set(0,1.05,-.14),s.add(y);let S=(M,w,x,E,R=.074,C=.103,D=2387401)=>{p(M,r,w,x,E,R,C,.047),p(M,i(D,.22),w+.005,x,E+.043,R*.47,C*.65,.015),p(M,a,w+.006,x,E+.057,R*.25,C*.46,.009),p(M,r,w-.005,x+C*.3,E+.066,R*.14,C*.16,.005)},b=(M,w,x,E)=>_(M,i(10173485),[[-E,w+.018,x],[-E*.5,w-.015,x+.018],[0,w-.028,x+.024],[E*.6,w-.01,x+.014],[E,w+.025,x]],.009),A=(M,w=r)=>{for(let x of[-1,1])p(s,M,x*.29,.73,-.02,.13,.19,.14).rotation.z=x*.35,p(s,M,x*.3,.61,.13,.1,.18,.1).rotation.x=-.85,p(s,w,x*.23,.63,.26,.115,.105,.095),p(s,w,x*.17,.65,.29,.05,.065,.065),p(s,c,x*.19,.36,.34,.145,.115,.22)};if(n==="mario"||n==="luigi"){let M=n==="luigi",w=M?f:h;p(s,w,0,.7,-.13,.3,M?.34:.29,.24),p(s,u,0,.5,-.05,.29,.2,.26),p(s,u,0,.65,.075,.2,.19,.08);for(let C of[-1,1])p(s,u,C*.17,.77,.055,.05,.18,.055),p(s,l,C*.17,.7,.125,.039,.041,.016);A(w),p(y,o,0,.015,.005,M?.29:.32,M?.37:.32,.27),p(y,c,0,.045,-.12,.31,.3,.21);for(let C of[-1,1])p(y,o,C*.14,-.105,.13,.18,.16,.16),p(y,o,C*.31,-.01,-.005,.085,.115,.068),p(y,i(15308147),C*.327,-.012,.038,.04,.065,.022),p(y,c,C*.248,.035,.095,.045,.1,.065),S(y,C*.105,.09,.235,.074,M?.12:.105),_(y,c,[[C*.045,.218,.245],[C*.105,.245,.23],[C*.17,.215,.215]],.025);p(y,o,0,-.01,.29,M?.105:.13,.115,.15);let x=new _n;x.moveTo(-.21,-.07),x.quadraticCurveTo(-.12,-.105,0,-.085),x.quadraticCurveTo(.12,-.105,.21,-.07),x.quadraticCurveTo(.215,-.165,.145,-.145),x.quadraticCurveTo(.11,-.195,.07,-.16),x.quadraticCurveTo(.035,-.195,0,-.16),x.quadraticCurveTo(-.035,-.195,-.07,-.16),x.quadraticCurveTo(-.11,-.195,-.145,-.145),x.quadraticCurveTo(-.215,-.165,-.21,-.07);let E=new et(new Dn(x,{depth:.03,bevelEnabled:!0,bevelSegments:3,bevelSize:.009,bevelThickness:.009,curveSegments:12}),c);E.position.z=.267,y.add(E),b(y,-.194,.235,.092),p(y,w,0,M?.34:.31,-.015,.35,.2,.31),p(y,w,0,.245,.16,.35,.035,.26),p(y,w,0,.23,.21,.34,.017,.23),p(y,r,0,.355,.279,.09,.079,.018);let R=g(y,w,M?[[-.031,.348],[-.031,.262],[.034,.262],[.034,.28],[-.01,.28],[-.01,.348]]:[[-.052,.267],[-.052,.342],[-.03,.342],[0,.303],[.03,.342],[.052,.342],[.052,.267],[.032,.267],[.032,.311],[0,.279],[-.032,.311],[-.032,.267]],.3,.006);R.position.y=.05}else if(n==="peach"||n==="daisy"){let M=n==="daisy",w=i(M?10174229:16172099),x=i(M?16759585:15891380),E=i(M?15956502:14171782),R=i(M?2537114:2264036,.12,.2);p(s,x,0,.65,-.13,.3,.34,.25),A(x);for(let N of[-1,1])p(s,x,N*.27,.82,-.09,.16,.15,.15);p(s,E,0,.57,.08,.25,.13,.11),p(s,l,0,.7,.13,.074,.095,.035),p(s,R,0,.7,.163,.047,.068,.02),p(y,w,0,.015,-.13,.33,.37,.23);let C=new oe(1,e==="portrait"?56:32,e==="portrait"?40:24),D=C.attributes.position;for(let N=0;N<D.count;N++){let F=D.getX(N),q=D.getY(N),K=D.getZ(N),tt=q<-.15?1-(-q-.15)*.18:1,st=F*.245*tt,ft=q*.255+.02,qt=K>0?.033*Math.exp(-((st/.035)**2)-((ft+.012)/.045)**2):0;D.setXYZ(N,st,ft,K*.22+.035+qt)}C.computeVertexNormals();let z=new et(C,o);z.name="princess-face",z.castShadow=z.receiveShadow=!0,y.add(z);for(let N of[-1,1])p(y,w,N*.257,-.12,-.06,.105,M?.23:.36,.14).rotation.z=N*.15,p(y,w,N*.265,-.31,-.045,.115,.13,.16),S(y,N*.092,.04,.226,.069,.096,M?2139824:2592204),_(y,a,[[N*.04,.108,.248],[N*.09,.141,.247],[N*.15,.113,.236],[N*.18,.135,.218]],.011),_(y,w,[[N*.045,.19,.205],[N*.1,.207,.194],[N*.16,.183,.17]],.012),p(y,i(15965594),N*.156,-.09,.213,.049,.025,.008),p(y,l,N*.257,-.105,.087,.047,.06,.035),p(y,R,N*.257,-.105,.116,.032,.043,.016);let H=i(14306932);p(y,H,-.012,-.11,.24,.019,.009,.007),p(y,H,.012,-.11,.24,.019,.009,.007),p(y,H,0,-.123,.238,.026,.007,.006),p(y,w,-.11,.22,.14,.16,.063,.07).rotation.z=-.35,p(y,w,.115,.215,.13,.15,.073,.07).rotation.z=.45,p(y,w,.025,.145,.225,.062,.1,.042);let L=new et(new ge(.18,.15,.13,16),l);L.position.set(0,.34,-.025),y.add(L);for(let N=0;N<5;N++){let F=N*Math.PI*2/5;m(y,l,Math.sin(F)*.155,.465,Math.cos(F)*.155-.025,.052,.16),p(y,l,Math.sin(F)*.155,.547,Math.cos(F)*.155-.025,.024,.024,.024)}p(y,i(15810153,.15,.1),0,.356,.159,.045,.055,.018)}else if(n==="toad"){p(s,r,0,.64,-.13,.26,.29,.22);for(let M of[-1,1])p(s,u,M*.185,.74,-.04,.1,.22,.22),_(s,l,[[M*.13,.89,.12],[M*.12,.73,.17],[M*.13,.57,.12]],.016);A(o,o),p(y,o,0,-.07,.015,.28,.27,.24);for(let M of[-1,1])p(y,a,M*.092,-.045,.243,.026,.066,.012),p(y,r,M*.092-.006,-.02,.255,.008,.015,.005);b(y,-.18,.226,.072),p(y,r,0,.24,-.025,.48,.34,.41);for(let[M,w]of[[0,.2],[Math.PI/2,.45],[-Math.PI/2,.45],[Math.PI,.3],[0,1.2]]){let x=new I(Math.sin(M)*Math.cos(w),Math.sin(w),Math.cos(M)*Math.cos(w));p(y,h,x.x*.474,.24+x.y*.336,-.025+x.z*.406,.145,.145,.018).quaternion.setFromUnitVectors(new I(0,0,1),x)}}else if(n==="yoshi"){p(s,f,0,.68,-.15,.31,.33,.27),p(s,r,0,.67,.066,.225,.28,.1),A(f,f),p(y,f,0,.045,-.045,.28,.34,.24);for(let w of[-1,1])p(y,f,w*.135,.2,.03,.15,.22,.15),S(y,w*.124,.21,.151,.082,.129,2106153);p(y,r,0,-.155,.2,.29,.115,.24),p(y,f,0,-.03,.235,.345,.245,.315);for(let w of[-1,1])p(y,i(1604405),w*.12,.045,.513,.026,.018,.009);b(y,-.2,.34,.2);let M=i(15949094);for(let w=0;w<3;w++)m(y,M,0,.3-w*.17,-.22,.075,.17);p(s,h,0,.77,-.365,.23,.1,.16),p(s,f,0,.48,-.42,.17,.14,.32);for(let w of[-1,1])p(s,M,w*.19,.37,.34,.15,.12,.23)}else if(n==="bowser"){let M=i(15312173),w=i(16767886),x=i(2328649),E=i(12071961);p(s,M,0,.69,-.13,.39,.36,.29),p(s,w,0,.63,.11,.28,.29,.12),A(M,M),p(s,x,0,.78,-.38,.4,.4,.18);for(let R of[-1,1])for(let C=0;C<2;C++)m(s,r,R*.23,.88-C*.22,-.51,.055,.18,R*.4);p(y,M,0,0,-.035,.36,.32,.27),p(y,w,0,-.14,.25,.36,.19,.22),p(y,i(6890527),0,-.16,.434,.24,.067,.017);for(let R of[-1,1]){S(y,R*.148,.09,.209,.086,.1,13450273),p(y,E,R*.15,.184,.225,.14,.049,.055).rotation.z=R*.28,m(y,r,R*.3,.29,-.015,.08,.29,-R*.4),p(y,i(10055727),R*.16,-.045,.424,.026,.019,.012),m(y,r,R*.175,-.13,.451,.037,.095,Math.PI),p(s,a,R*.32,.58,.13,.135,.075,.12);for(let C=0;C<3;C++)p(s,r,R*.32+Math.sin(C*2)*.09,.61+Math.cos(C*2)*.06,.22,.025,.028,.03)}for(let R=0;R<5;R++)m(y,E,(R-2)*.067,.44-Math.abs(R-2)*.035,-.07,.073,.25,-(R-2)*.15).rotation.x=-.3}else{let M=i(7616796),w=i(15251328);p(s,M,0,.67,-.12,.4,.38,.3),p(s,w,0,.67,.13,.27,.29,.1),A(M,M),p(y,M,0,.03,-.03,.38,.38,.28);for(let x of[-1,1])p(y,M,x*.34,-.005,-.04,.1,.13,.07),p(y,w,x*.35,0,.012,.05,.07,.025),p(y,w,x*.115,.06,.199,.145,.185,.079),S(y,x*.12,.08,.26,.066,.082,7881759);for(let x of[-1,1])p(y,w,x*.125,.165,.244,.17,.07,.06).rotation.z=x*.16;p(y,w,0,-.15,.24,.31,.2,.19),p(y,M,0,-.045,.4,.105,.059,.035);for(let x of[-1,1])p(y,a,x*.035,-.053,.431,.016,.012,.008);b(y,-.22,.38,.18);for(let x=0;x<3;x++)m(y,M,(x-1)*.085,.415-Math.abs(x-1)*.025,-.06,.09,.21,-(x-1)*.3);_(s,h,[[-.19,.86,.03],[0,.78,.2],[.19,.86,.03]],.034),g(s,h,[[0,.78],[-.085,.62],[0,.4],[.085,.62]],.225,.018)}return y}var Mr=new I;function fn(s,t,e,n,i,o){let r=2*Math.PI*i/4,a=Math.max(o-2*i,0),c=Math.PI/4;Mr.copy(t),Mr[n]=0,Mr.normalize();let l=.5*r/(r+a),h=1-Mr.angleTo(s)/c;return Math.sign(Mr[e])===1?h*l:a/(r+a)+l+l*(1-h)}var ps=class s extends he{constructor(t=1,e=1,n=1,i=2,o=.1){let r=i*2+1;if(o=Math.min(t/2,e/2,n/2,o),super(1,1,1,r,r,r),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:o},r===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new I,l=new I,h=new I(t,e,n).divideScalar(2).subScalar(o),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=f.length/6,_=new I,g=.5/r;for(let m=0,y=0;m<f.length;m+=3,y+=2)switch(c.fromArray(f,m),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),f[m+0]=h.x*Math.sign(c.x)+l.x*o,f[m+1]=h.y*Math.sign(c.y)+l.y*o,f[m+2]=h.z*Math.sign(c.z)+l.z*o,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/p)){case 0:_.set(1,0,0),d[y+0]=fn(_,l,"z","y",o,n),d[y+1]=1-fn(_,l,"y","z",o,e);break;case 1:_.set(-1,0,0),d[y+0]=1-fn(_,l,"z","y",o,n),d[y+1]=1-fn(_,l,"y","z",o,e);break;case 2:_.set(0,1,0),d[y+0]=1-fn(_,l,"x","z",o,t),d[y+1]=fn(_,l,"z","x",o,n);break;case 3:_.set(0,-1,0),d[y+0]=1-fn(_,l,"x","z",o,t),d[y+1]=1-fn(_,l,"z","x",o,n);break;case 4:_.set(0,0,1),d[y+0]=1-fn(_,l,"x","y",o,t),d[y+1]=1-fn(_,l,"y","x",o,e);break;case 5:_.set(0,0,-1),d[y+0]=fn(_,l,"x","y",o,t),d[y+1]=1-fn(_,l,"y","x",o,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};function ku(s,t){let e=La[t.topper||"cap"]||"mario",n=e==="peach"||e==="daisy",i=e==="bowser"||e==="donkeykong",o=(L,N=.32,F=.15)=>{let q=new Dt({color:L,roughness:N,metalness:F});return q.userData.preserveShading=!0,q},r=o(t.color),a=o(16774366),c=o(2106932,.66,.05),l=o(13098731,.2,.7),h=o(16762434,.25,.6),f=o(e==="mario"||e==="luigi"?2643406:e==="toad"?15746110:e==="yoshi"?16774095:e==="bowser"?2657356:e==="donkeykong"?10313e3:16767093),u=n?h:l,d=new oe(1,20,14);function p(L,N,F,q,K){let tt=new et(L,N);return tt.position.set(F,q,K),tt.castShadow=tt.receiveShadow=!0,s.add(tt),tt}function _(L,N,F,q,K,tt,st,ft=.08){return p(new ps(K,tt,st,2,Math.min(ft,tt/2-.001,K/2-.001,st/2-.001)),L,N,F,q)}function g(L,N,F,q,K,tt,st){let ft=p(d,L,N,F,q);return ft.scale.set(K,tt,st),ft}let m=_(c,0,.23,0,1.25,.14,2.35,.06);m.name="chassis",_(r,0,.38,-.24,1.12,.28,1.52,.13);let y=_(c,0,.67,-.39,.62,.64,.2,.085);y.rotation.x=.12,_(f,0,.83,-.45,.5,.19,.12,.05);for(let L of[-1,1]){let N=g(f,L*.64,.4,-.12,.22,i?.25:.19,.71);N.name="side-pod",_(u,L*.68,.36,-.08,.075,.065,1.03,.03);let F=p(new $e(.37,.075,8,20,Math.PI),r,L*.77,.34,-.85);F.rotation.y=Math.PI/2}let S=g(r,0,.43,.77,i?.62:.55,n?.23:.21,e==="luigi"?.68:.6);S.name="hood";let b=(L,N,F,q)=>{let K=new I((N-S.position.x)/S.scale.x,0,(F-S.position.z)/S.scale.z);K.y=Math.sqrt(Math.max(0,1-K.x*K.x-K.z*K.z));let tt=new I(1,0,0).addScaledVector(K,-K.x).normalize(),st=K.clone().cross(tt).normalize(),ft=[],qt=[],ce=Y=>ft.push(S.position.x+Y.x*(S.scale.x+.003),S.position.y+Y.y*(S.scale.y+.003),S.position.z+Y.z*(S.scale.z+.003));ce(K);for(let Y=1;Y<=3;Y++)for(let ct=0;ct<20;ct++){let rt=ct*Math.PI/10,wt=q/Math.min(S.scale.x,S.scale.z)*Y/3;ce(K.clone().multiplyScalar(Math.cos(wt)).addScaledVector(tt,Math.cos(rt)*Math.sin(wt)).addScaledVector(st,Math.sin(rt)*Math.sin(wt)))}for(let Y=0;Y<20;Y++)qt.push(0,1+Y,1+(Y+1)%20);for(let Y=1;Y<3;Y++)for(let ct=0;ct<20;ct++){let rt=1+(Y-1)*20+ct,wt=1+(Y-1)*20+(ct+1)%20,Gt=1+Y*20+ct,Ut=1+Y*20+(ct+1)%20;qt.push(rt,Gt,Ut,rt,Ut,wt)}let jt=new ue;jt.setAttribute("position",new Wt(ft,3)),jt.setIndex(qt),jt.computeVertexNormals(),p(jt,L,0,0,0)};if(e==="toad"){S.material=a;for(let[L,N,F]of[[0,.9,.16],[-.3,.64,.105],[.3,.64,.105]])b(f,L,N,F)}else if(e==="yoshi"){S.material=a,S.scale.set(.54,.32,.61),S.position.y=.46;for(let[L,N,F]of[[0,.88,.16],[-.28,.64,.11],[.27,.61,.1]])b(r,L,N,F)}else if(e==="bowser"){S.material=f,S.scale.set(.62,.3,.59);for(let L of[-1,1])for(let N of[.6,1.03]){let F=p(new Ue(.075,.22,12),a,L*.39,.7,N);F.rotation.z=-L*.3}_(h,0,.36,1.35,1.36,.16,.15,.07)}else if(e==="donkeykong"){S.visible=!1;let L=o(10048296,.55,.02),N=o(4401433,.45,.15),F=p(new ge(.49,.49,.91,16),L,0,.43,.79);F.rotation.x=Math.PI/2,F.scale.z=.64;for(let q of[.39,.53,1.05,1.19]){let K=p(new $e(.492,.029,6,24),N,0,.43,q);K.scale.y=.64}for(let q=0;q<10;q++){let K=q*Math.PI*2/10;_(N,Math.sin(K)*.49,.43+Math.cos(K)*.49*.64,.8,.015,.018,.68,.006)}}e!=="bowser"&&_(u,0,.25,1.27,1.4,.16,.25,.07),_(c,0,.39,1.3,.54,.15,.035,.015);for(let L=-2;L<=2;L++)_(l,L*.095,.39,1.324,.025,.1,.012,.005);for(let L of[-1,1]){let N=g(u,L*.48,.49,1.17,.105,.09,.046);N.rotation.y=L*.15,g(a,L*.48,.49,1.212,.073,.06,.025),g(o(16009541),L*.49,.51,-1.08,.085,.046,.033)}_(c,0,.44,-.88,.61,.34,.54,.07);for(let L=0;L<5;L++)_(l,0,.44+L*.052,-.9,.66,.018,.48,.007);for(let L of[-1,1]){let N=p(new ge(.08,.065,.41,12),l,L*.24,.38,-1.24);N.rotation.x=Math.PI/2;let F=p(new zs(.058,12),c,L*.24,.38,-1.45);F.rotation.y=Math.PI}let A=n?1:i?.88:.81;for(let L of[-1,1])_(u,L*.39,A-.18,-1.04,.055,.34,.06,.02);let M=_(n?r:f,0,A,-1.06,i?1.62:1.43,.095,.35,.04);M.name="rear-wing";for(let L of[-1,1])_(r,L*(i?.79:.69),A+.035,-1.06,.07,.22,.37,.025);if(e==="bowser")for(let L of[-.5,0,.5])p(new Ue(.065,.2,12),a,L,A+.14,-1.06);if(e==="peach"||e==="daisy")for(let L of[-1,1])g(h,L*.63,A+.14,-1.04,.047,.047,.047);let w=new ie;w.name=e+"-emblem",w.position.set(0,.61,1.02),w.rotation.x=-.7,s.add(w),e==="donkeykong"&&(w.position.set(0,.56,1.29),w.rotation.x=0);let x=(L,N,F=0,q=0,K=0)=>{let tt=new et(L,N);return tt.position.set(F,q,K),tt.castShadow=!0,w.add(tt),tt},E=x(new ge(.18,.18,.025,24),n?h:a);E.rotation.x=Math.PI/2;let R=(L,N=r)=>{let F=new _n;F.moveTo(L[0][0],L[0][1]),L.slice(1).forEach(q=>F.lineTo(q[0],q[1])),F.closePath(),x(new Dn(F,{depth:.015,bevelEnabled:!0,bevelSegments:2,bevelSize:.003,bevelThickness:.003}),N,0,0,.02)};if(e==="mario")R([[-.09,-.09],[-.09,.09],[-.05,.09],[0,.015],[.05,.09],[.09,.09],[.09,-.09],[.05,-.09],[.05,.02],[0,-.045],[-.05,.02],[-.05,-.09]]);else if(e==="luigi")R([[-.06,.1],[-.06,-.09],[.07,-.09],[.07,-.05],[-.015,-.05],[-.015,.1]]);else if(e==="peach")R([[-.12,-.06],[-.13,.07],[-.055,.015],[0,.12],[.055,.015],[.13,.07],[.12,-.06]],o(14435980));else if(e==="daisy"){for(let N=0;N<6;N++){let F=N*Math.PI/3,q=x(new oe(.052,10,8),a,Math.sin(F)*.077,Math.cos(F)*.077,.035);q.scale.z=.3}let L=x(new oe(.047,10,8),r,0,0,.055);L.scale.z=.3}else if(e==="toad"){let L=x(new oe(.113,16,10,0,Math.PI*2,0,Math.PI/2),f,0,-.015,.025);L.rotation.x=Math.PI/2;let N=x(new ps(.075,.085,.025,1,.015),a,0,-.07,.035);N.name="mushroom-stem"}else if(e==="yoshi"){x(new oe(.105,14,10),a,0,0,.035).scale.set(.8,1,.2);let N=x(new oe(.035,10,8),r,.025,.02,.06);N.scale.z=.25}else e==="bowser"?R([[-.1,-.09],[-.12,.03],[-.055,.02],[-.04,.1],[0,.035],[.04,.1],[.055,.02],[.12,.03],[.1,-.09]],f):R([[-.065,.105],[-.065,-.015],[-.115,-.105],[-.055,-.105],[0,-.05],[.055,-.105],[.115,-.105],[.065,-.015],[.065,.105]],o(13971240));let C=new ie;C.position.set(0,.59,-1.185),C.rotation.y=Math.PI,s.add(C);let D=new et(new ps(.25,.18,.024,1,.02),a);C.add(D);let z={1:[1,2],2:[0,1,6,4,3],3:[0,1,6,2,3],4:[5,6,1,2],5:[0,5,6,2,3],6:[0,5,6,4,2,3],7:[0,1,2],8:[0,1,2,3,4,5,6],9:[0,1,2,3,5,6],0:[0,1,2,3,4,5]},H=[[0,.06],[.04,.03],[.04,-.03],[0,-.06],[-.04,-.03],[-.04,.03],[0,0]];for(let L of z[t.number%10]||z[0]){let N=L===0||L===3||L===6,F=new et(new he(N?.055:.012,N?.012:.045,.008),c);F.position.set(H[L][0],H[L][1],.018),C.add(F)}return s.userData.character=e,{paint:r,secondary:f,dark:c,chrome:l,trim:u,character:e,heavy:i}}function zu(s){let t=new ie,e=new ie;t.add(e);let n=ku(e,s);t.name=n.character+"-kart";let i=Ml(e,s),o=new et(new $e(.15,.025,8,20),n.dark);o.position.set(0,.64,.27),o.rotation.x=-.5,e.add(o);let r=new et(new ge(.025,.025,.33,8),n.chrome);r.position.set(0,.49,.2),r.rotation.x=.45,e.add(r);let a=new et(new oe(.045,10,8),n.trim);a.position.copy(o.position),e.add(a);let c=new Dt({color:1448998,roughness:.85}),l=new Dt({color:3159876,roughness:.9});c.userData.preserveShading=l.userData.preserveShading=!0;function h(_,g){let m=new ie,y=new ie;m.add(y);let S=[[_*.58,-g/2-.005],[_*.86,-g/2],[_,-g*.28],[_,g*.28],[_*.86,g/2],[_*.58,g/2+.005]].map(([E,R])=>new lt(E,R)),b=new Ks(S,24);b.rotateZ(Math.PI/2);let A=new et(b,c);A.castShadow=!0,y.add(A);let M=new ge(_*.59,_*.59,g+.012,20);M.rotateZ(Math.PI/2),y.add(new et(M,n.dark));let w=[],x=[];for(let E of[-1,1]){let R=new et(new $e(_*.64,.018,6,24),n.trim);R.rotation.y=Math.PI/2,R.position.x=E*(g/2+.008),y.add(R);let C=new ge(_*.2,_*.2,.025,12);C.rotateZ(Math.PI/2);let D=new et(C,n.paint);D.position.x=E*(g/2+.027),y.add(D);for(let z=0;z<5;z++){let H=z*Math.PI*2/5,L=new he(.018,_*.48,.034);L.rotateX(H),L.translate(E*(g/2+.016),Math.cos(H)*_*.36,Math.sin(H)*_*.36),w.push(L)}}y.add(new et(bl(w),n.chrome)),w.forEach(E=>E.dispose());for(let E=0;E<18;E++){let R=E*Math.PI/9,C=new he(g*.72,.012,.032);C.rotateX(R),C.translate(0,Math.cos(R)*(_+.001),Math.sin(R)*(_+.001)),x.push(C)}return y.add(new et(bl(x),l)),x.forEach(E=>E.dispose()),m}let f=h(.26,.22);f.position.set(-.72,.26,.85),t.add(f);let u=h(.26,.22);u.position.set(.72,.26,.85),t.add(u);let d=h(.32,.32);d.position.set(-.76,.32,-.85),t.add(d);let p=h(.32,.32);return p.position.set(.76,.32,-.85),t.add(p),{rootGroup:t,bodyGroup:e,frontLeftWheel:f,frontRightWheel:u,rearLeftWheel:d,rearRightWheel:p,steeringWheel:o,driverHead:i,exhaustLeft:new I(-.24,.38,-1.45),exhaustRight:new I(.24,.38,-1.45),rearLeftSparkPos:new I(-.76,.15,-.95),rearRightSparkPos:new I(.76,.15,-.95)}}var Da=class{constructor(){$(this,"group");$(this,"maxParticles",600);$(this,"particles",[]);$(this,"geometry");$(this,"material");$(this,"pointsMesh");$(this,"positions");$(this,"colors");$(this,"sizes");this.group=new ie,this.positions=new Float32Array(this.maxParticles*3),this.colors=new Float32Array(this.maxParticles*3),this.sizes=new Float32Array(this.maxParticles),this.geometry=new ue,this.geometry.setAttribute("position",new Ne(this.positions,3)),this.geometry.setAttribute("color",new Ne(this.colors,3)),this.geometry.setAttribute("size",new Ne(this.sizes,1));let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255, 255, 255, 1.0)"),n.addColorStop(.4,"rgba(255, 255, 255, 0.8)"),n.addColorStop(.8,"rgba(255, 255, 255, 0.2)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let i=new Ie(t);this.material=new is({size:1,vertexColors:!0,transparent:!0,opacity:.9,blending:rr,depthWrite:!1,map:i}),this.pointsMesh=new Os(this.geometry,this.material),this.pointsMesh.frustumCulled=!1,this.group.add(this.pointsMesh)}emitDriftSparks(t,e,n){let i=2+e,o=new Ft(3718648);e===2&&(o=new Ft(16347926)),e>=3&&(o=new Ft(11032055));for(let r=0;r<i&&!(this.particles.length>=this.maxParticles);r++){let a=(Math.random()-.5)*.4,c=new I(-Math.sin(n)*(1.5+Math.random()*2)+a,.8+Math.random()*1.5,-Math.cos(n)*(1.5+Math.random()*2)+a);this.particles.push({position:t.clone().add(new I((Math.random()-.5)*.3,.1+Math.random()*.2,(Math.random()-.5)*.3)),velocity:c,color:o.clone(),size:.4+Math.random()*.4,maxLife:.35+Math.random()*.2,life:0,opacity:1})}}emitBoostFlames(t,e){let i=[new Ft(3900150),new Ft(440020),new Ft(16777215)];for(let o=0;o<3&&!(this.particles.length>=this.maxParticles);o++){let r=e+Math.PI,a=new I(Math.sin(r)*(4+Math.random()*3),.3+Math.random()*.4,Math.cos(r)*(4+Math.random()*3));this.particles.push({position:t.clone().add(new I((Math.random()-.5)*.2,.1,(Math.random()-.5)*.2)),velocity:a,color:i[Math.floor(Math.random()*i.length)].clone(),size:.6+Math.random()*.5,maxLife:.25+Math.random()*.15,life:0,opacity:1})}}emitTireSmoke(t,e=!1){if(this.particles.length>=this.maxParticles)return;let n=e?new Ft(8702998):new Ft(13948120),i=new I((Math.random()-.5)*.8,.6+Math.random()*.8,(Math.random()-.5)*.8);this.particles.push({position:t.clone().add(new I((Math.random()-.5)*.2,.1,(Math.random()-.5)*.2)),velocity:i,color:n,size:.5+Math.random()*.6,maxLife:.4+Math.random()*.25,life:0,opacity:.6})}update(t){for(let r=this.particles.length-1;r>=0;r--){let a=this.particles[r];if(a.life+=t,a.life>=a.maxLife){this.particles.splice(r,1);continue}a.position.addScaledVector(a.velocity,t),a.velocity.y-=2*t,a.size=Math.max(.01,a.size*(1+t*.8))}let e=this.geometry.attributes.position,n=this.geometry.attributes.color,i=this.geometry.attributes.size,o=this.particles.length;for(let r=0;r<o;r++){let a=this.particles[r],c=1-a.life/a.maxLife;this.positions[r*3]=a.position.x,this.positions[r*3+1]=a.position.y,this.positions[r*3+2]=a.position.z,this.colors[r*3]=a.color.r*c,this.colors[r*3+1]=a.color.g*c,this.colors[r*3+2]=a.color.b*c,this.sizes[r]=a.size}for(let r=o;r<this.maxParticles;r++)this.sizes[r]=0,this.positions[r*3]=0,this.positions[r*3+1]=-999,this.positions[r*3+2]=0;e.needsUpdate=!0,n.needsUpdate=!0,i.needsUpdate=!0}clear(){this.particles=[]}};var Sl=class{constructor(){$(this,"ctx",null);$(this,"isMuted",!1);$(this,"isInitialized",!1);$(this,"engineGain",null);$(this,"engineOsc1",null);$(this,"engineOsc2",null);$(this,"engineFilter",null);$(this,"screechGain",null);$(this,"screechFilter",null);$(this,"screechSource",null);$(this,"masterGain",null)}output(){return this.init(),this.ctx&&this.masterGain?{ctx:this.ctx,out:this.masterGain}:null}adopt(t){this.ctx!==t&&(this.isInitialized||(this.ctx=t,this.masterGain=t.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:1,t.currentTime),this.masterGain.connect(t.destination),this.setupEngineSynth(),this.setupScreechSynth(),this.isInitialized=!0))}running(){return!!this.ctx&&this.ctx.state==="running"}init(){if(this.isInitialized&&this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:1,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.setupEngineSynth(),this.setupScreechSynth(),this.isInitialized=!0}catch(t){console.warn("Web Audio API not supported or blocked:",t)}}setupEngineSynth(){!this.ctx||!this.masterGain||(this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(0,this.ctx.currentTime),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(600,this.ctx.currentTime),this.engineFilter.Q.setValueAtTime(2.5,this.ctx.currentTime),this.engineOsc1=this.ctx.createOscillator(),this.engineOsc1.type="sawtooth",this.engineOsc1.frequency.setValueAtTime(55,this.ctx.currentTime),this.engineOsc2=this.ctx.createOscillator(),this.engineOsc2.type="triangle",this.engineOsc2.frequency.setValueAtTime(110,this.ctx.currentTime),this.engineOsc1.connect(this.engineFilter),this.engineOsc2.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.engineOsc1.start(),this.engineOsc2.start())}setupScreechSynth(){if(!this.ctx||!this.masterGain)return;let t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);for(let i=0;i<t;i++)n[i]=Math.random()*2-1;this.screechSource=this.ctx.createBufferSource(),this.screechSource.buffer=e,this.screechSource.loop=!0,this.screechFilter=this.ctx.createBiquadFilter(),this.screechFilter.type="bandpass",this.screechFilter.frequency.setValueAtTime(1400,this.ctx.currentTime),this.screechFilter.Q.setValueAtTime(3,this.ctx.currentTime),this.screechGain=this.ctx.createGain(),this.screechGain.gain.setValueAtTime(0,this.ctx.currentTime),this.screechSource.connect(this.screechFilter),this.screechFilter.connect(this.screechGain),this.screechGain.connect(this.masterGain),this.screechSource.start()}updateEngine(t,e,n){this.ctx&&this.engineGain&&this.engineGain.gain.setTargetAtTime(0,this.ctx.currentTime,.05)}updateDriftScreech(t,e,n){if(!this.ctx||!this.screechGain||!this.screechFilter)return;let i=this.ctx.currentTime;if(t&&Math.abs(n)>5){let o=.05+e*.04,r=1200+e*500;this.screechGain.gain.setTargetAtTime(o,i,.05),this.screechFilter.frequency.setTargetAtTime(r,i,.05)}else this.screechGain.gain.setTargetAtTime(0,i,.05)}stopEngine(){!this.ctx||!this.engineGain||(this.engineGain.gain.setTargetAtTime(0,this.ctx.currentTime,.1),this.screechGain&&this.screechGain.gain.setTargetAtTime(0,this.ctx.currentTime,.1))}playCountdownBeep(t=!1){if(!this.ctx||!this.masterGain||this.isMuted)return;let e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();if(t){n.type="triangle",n.frequency.setValueAtTime(1046.5,e),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.001,e+.6);let o=this.ctx.createOscillator(),r=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(1318.5,e),r.gain.setValueAtTime(.2,e),r.gain.exponentialRampToValueAtTime(.001,e+.6),o.connect(r),r.connect(this.masterGain),o.start(e),o.stop(e+.6)}else n.type="square",n.frequency.setValueAtTime(440,e),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.001,e+.25);n.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+(t?.6:.25))}playBoostSound(){if(!this.ctx||!this.masterGain||this.isMuted)return;let t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(250,t),e.frequency.exponentialRampToValueAtTime(950,t+.35);let i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(1200,t),i.frequency.exponentialRampToValueAtTime(4e3,t+.35),n.gain.setValueAtTime(.1,t),n.gain.exponentialRampToValueAtTime(.001,t+.45),e.connect(i),i.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.45)}playCollisionSound(t=1){if(!this.ctx||!this.masterGain||this.isMuted)return;let e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(140,e),n.frequency.exponentialRampToValueAtTime(35,e+.18);let o=Math.min(Math.max(t,.2),1);i.gain.setValueAtTime(.4*o,e),i.gain.exponentialRampToValueAtTime(.001,e+.2),n.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+.2)}playCoin(){if(!this.ctx||!this.masterGain||this.isMuted)return;let t=this.ctx.currentTime;[988,1319].forEach((e,n)=>{let i=this.ctx.createOscillator(),o=this.ctx.createGain();i.type="square",i.frequency.value=e,o.gain.setValueAtTime(1e-4,t+n*.07),o.gain.exponentialRampToValueAtTime(.06,t+n*.07+.01),o.gain.exponentialRampToValueAtTime(1e-4,t+n*.07+.14),i.connect(o).connect(this.masterGain),i.start(t+n*.07),i.stop(t+n*.07+.16)})}playLapChime(t=!1){if(!this.ctx||!this.masterGain||this.isMuted)return;(t?[659.25,880,1174.66]:[587.33,880]).forEach((n,i)=>{if(!this.ctx||!this.masterGain)return;let o=this.ctx.currentTime+i*.08,r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n,o),a.gain.setValueAtTime(.25,o),a.gain.exponentialRampToValueAtTime(.001,o+.5),r.connect(a),a.connect(this.masterGain),r.start(o),r.stop(o+.55)})}playFinishFanfare(){if(!this.ctx||!this.masterGain||this.isMuted)return;let t=[{f:523.25,d:.12},{f:659.25,d:.12},{f:783.99,d:.12},{f:1046.5,d:.25},{f:880,d:.15},{f:1046.5,d:.45}],e=0;t.forEach(n=>{if(!this.ctx||!this.masterGain)return;let i=this.ctx.currentTime+e,o=this.ctx.createOscillator(),r=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(n.f,i),r.gain.setValueAtTime(.3,i),r.gain.exponentialRampToValueAtTime(.001,i+n.d),o.connect(r),r.connect(this.masterGain),o.start(i),o.stop(i+n.d+.05),e+=n.d*.9})}toggleMute(){return this.isMuted=!this.isMuted,this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:1,this.ctx.currentTime),this.isMuted}getMuted(){return this.isMuted}},se=new Sl;var Tx={cat:330,bunny:400,crown:210,horns:190,bow:370,antenna:290,cap:300,bear:150},Hu={a:[800,1150,2800],o:[450,800,2830],u:[325,700,2530],e:[400,2e3,2550],i:[300,2300,3e3],h:[600,1400,2600]},Sr=null,Gu=0;function Ua(){let s=se.output();return!s||s.ctx.state!=="running"?null:s}function wx(s){if(!Sr||Sr.sampleRate!==s.sampleRate){Sr=s.createBuffer(1,s.sampleRate,s.sampleRate);let t=Sr.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}return Sr}function xe(s,t,e,n,i,o,r=0){let a=Ua();if(!a)return;let c=a.ctx,l=c.currentTime+n,h=c.createOscillator(),f=c.createGain();h.type=s,h.frequency.setValueAtTime(t,l),h.frequency.exponentialRampToValueAtTime(Math.max(20,e),l+i),f.gain.setValueAtTime(1e-4,l),f.gain.exponentialRampToValueAtTime(o,l+.012),f.gain.exponentialRampToValueAtTime(1e-4,l+i);let u=h;if(r){let d=c.createBiquadFilter();d.type="lowpass",d.frequency.value=r,h.connect(d),u=d}u.connect(f).connect(a.out),h.start(l),h.stop(l+i+.05)}function dn(s,t,e,n,i,o,r=1){let a=Ua();if(!a)return;let c=a.ctx,l=c.currentTime+s,h=c.createBufferSource(),f=c.createBiquadFilter(),u=c.createGain();h.buffer=wx(c),f.type=n,f.Q.value=r,f.frequency.setValueAtTime(i,l),f.frequency.exponentialRampToValueAtTime(Math.max(30,o),l+t),u.gain.setValueAtTime(1e-4,l),u.gain.exponentialRampToValueAtTime(e,l+.01),u.gain.exponentialRampToValueAtTime(1e-4,l+t),h.connect(f).connect(u).connect(a.out),h.start(l,Math.random()*.5),h.stop(l+t+.05)}function Na(s,t,e,n,i,o,r){let a=Ua();if(!a)return;let c=a.ctx,l=c.currentTime+s,h=c.createOscillator(),f=c.createOscillator(),u=c.createGain(),d=c.createGain();h.type="sawtooth",h.frequency.setValueAtTime(e,l),h.frequency.exponentialRampToValueAtTime(n,l+t),f.frequency.value=6,u.gain.value=e*.025,f.connect(u).connect(h.frequency),d.gain.setValueAtTime(1e-4,l),d.gain.exponentialRampToValueAtTime(r,l+.03),d.gain.setValueAtTime(r,l+t*.7),d.gain.exponentialRampToValueAtTime(1e-4,l+t),d.connect(a.out);let p=Hu[i],_=Hu[o];p.forEach((g,m)=>{let y=c.createBiquadFilter(),S=c.createGain();y.type="bandpass",y.Q.value=9,y.frequency.setValueAtTime(g,l),y.frequency.linearRampToValueAtTime(_[m],l+t*.6),S.gain.value=[1,.6,.25][m]*3,h.connect(y).connect(S).connect(d)}),h.start(l),f.start(l),h.stop(l+t+.05),f.stop(l+t+.05)}var Vu=s=>(Tx[s||"cap"]||280)*(.97+Math.random()*.06),Ze={cheer(s){let t=Vu(s);Na(0,.16,t*1.1,t*1.35,"i","a",.22),Na(.17,.42,t*1.6,t*1.25,"h","u",.24),[0,4,7,12].forEach((e,n)=>xe("triangle",880*Math.pow(2,e/12),880*Math.pow(2,e/12),.08+n*.06,.18,.05))},ouch(s){let t=Vu(s);dn(0,.35,.35,"lowpass",1800,200),xe("sine",160,40,0,.3,.45),Na(.1,.22,t*1.4,t*1.2,"o","a",.2),Na(.33,.4,t*1.15,t*.7,"o","u",.2),xe("sine",1400,300,.15,.7,.07)},throwItem(s,t){if(s==="banana"||s==="fake"){t?(xe("sine",420,140,0,.14,.18),dn(.02,.08,.08,"bandpass",900,500,2)):(dn(0,.25,.12,"bandpass",600,2400,2),xe("sine",300,700,0,.22,.1));return}if(s==="bomb"){dn(0,.6,.08,"highpass",3e3,5e3,1),xe("square",220,330,0,.12,.05,1200);return}if(s==="red"||s==="blue"){dn(0,.45,.16,"bandpass",500,2600,1.5),xe("sawtooth",140,420,0,.45,.06,1400);return}dn(0,.2,.14,"bandpass",900,2600,2),xe("triangle",500,900,0,.12,.08)},pickup(){[0,3,7,10,14].forEach((s,t)=>xe("square",660*Math.pow(2,s/12),660*Math.pow(2,s/12),t*.035,.08,.035,3e3))},block(){xe("square",1400,1100,0,.12,.08,4e3),xe("triangle",2100,2100,.02,.2,.06),dn(0,.1,.1,"highpass",3e3,3e3,1)},bump(){xe("sine",220,70,0,.16,.35),xe("square",180,120,0,.08,.06,900)},wall(){xe("sine",120,45,0,.2,.45),dn(0,.18,.18,"bandpass",700,300,1.5),xe("triangle",900,860,0,.18,.05)},boom(){xe("sine",90,30,0,.7,.6),dn(0,.9,.45,"lowpass",2500,120)},zap(){for(let s=0;s<5;s++)dn(s*.05,.08,.2,"bandpass",3e3-s*300,1200,6);xe("sawtooth",1200,80,0,.6,.08,3e3)},horn(){xe("square",233,233,0,.5,.12,1600),xe("square",294,294,0,.5,.1,1600)},splat(){dn(0,.25,.3,"lowpass",1400,200),xe("sine",300,90,0,.18,.2)},steal(){dn(0,.3,.15,"bandpass",2400,600,3),xe("triangle",900,1600,.05,.15,.06)},star(){[0,4,7,11,14,19].forEach((s,t)=>xe("triangle",784*Math.pow(2,s/12),784*Math.pow(2,s/12),t*.05,.2,.05))},driftLevel(s){let t=[0,880,1175,1568][s]||1568;xe("triangle",t,t,0,.12,.07),xe("triangle",t*1.5,t*1.5,.05,.12,.05)},overtake(){xe("square",784,784,0,.07,.04,3e3),xe("square",1175,1175,.07,.12,.04,3e3)},reverse(){let s=Ua();if(!s)return;let t=s.ctx.currentTime;t-Gu<.6||(Gu=t,xe("square",1046,1046,0,.22,.05,2500))}};var Fa=class{constructor(t,e){$(this,"totalLaps",3);$(this,"track");$(this,"particles");this.track=t,this.particles=e}updateRacer(t,e,n,i,o){if(t.spinOutTimer>0){t.spinOutTimer-=i,t.speed*=Math.max(0,1-i*2),t.rotation.y+=i*12,this.syncMesh(t,n,i);return}if(t.invulnerableTimer>0&&(t.invulnerableTimer-=i),e.respawn){this.respawnOnTrack(t);return}let{config:r}=t,a=!0,c=this.track.getClosestTrackPoint(t.position.x,t.position.z),l=this.track.roadWidth/2,h=this.track.onShortcut(t.position.x,t.position.z),f=h!==null&&c.distanceToCenter>l+.5,u=c.distanceToCenter>l+.5&&!f;t.boostTimer>0&&(t.boostTimer-=i,t.boostTimer<=0&&(t.boostMultiplier=1));let d=r.topSpeed*t.boostMultiplier;t.shrinkTimer&&t.shrinkTimer>0&&(t.shrinkTimer-=i,d*=.72),t.starTimer&&t.starTimer>0&&(t.starTimer-=i,d*=1.18),d*=1+.012*(t.coins||0),t.rideTimer&&t.rideTimer>0&&(t.rideTimer-=i,d*=1.35,t.speed=Math.max(t.speed,r.topSpeed*1.45)),t.ghostTimer&&t.ghostTimer>0&&(t.ghostTimer-=i),t.inkTimer&&t.inkTimer>0&&(t.inkTimer-=i);let p=r.acceleration;if(f&&t.boostTimer<=0&&!(t.starTimer&&t.starTimer>0)&&(d=Math.min(d,r.topSpeed*.66)),u&&(t.boostTimer<=0&&(d=Math.min(d,r.topSpeed*.66)),p*=.8,Math.abs(t.speed)>5&&Math.random()<.4&&this.particles.emitTireSmoke(new I(t.position.x,t.position.y,t.position.z),!0)),e.throttle)if(t.speed<d){let R=Math.max(0,Math.min(1,t.speed/d));t.speed+=p*(1.35-.85*R)*i*(t.boostTimer>0?1.4:1)}else t.speed-=10*i;else if(e.brake)t.speed>0?t.speed-=35*i:t.speed>-12&&(t.speed-=14*i);else{let R=u?13:9;t.speed>0?t.speed=Math.max(0,t.speed-R*i):t.speed<0&&(t.speed=Math.min(0,t.speed+R*i))}let _=Math.abs(t.speed)/r.topSpeed,g=r.handling*.68*Math.min(1,_/.3),m=typeof e.steer=="number"?e.steer:0;e.steerLeft&&(m+=1),e.steerRight&&(m-=1),m=Math.max(-1,Math.min(1,m)),Math.abs(m)<.05&&(m=0),m=Math.sign(m)*(.35*Math.abs(m)+.65*m*m);let y=t.steerSmooth||0,S=Math.abs(m)<Math.abs(y)||Math.sign(m)!==Math.sign(y)?14:9;t.steerSmooth=y+(m-y)*Math.min(1,i*S),Math.abs(t.steerSmooth)<.002&&m===0&&(t.steerSmooth=0);let b=m;m=t.steerSmooth;let A=e.drift&&!t.driftHeld;if(t.driftHeld=e.drift,A&&!t.isDrifting&&(t.hopT||0)<=0&&Math.abs(t.speed)>6&&(t.hopT=.26,t.config.isPlayer&&t.config.audioLead!==!1&&se.playCollisionSound(.15)),(t.hopT||0)>0&&(t.hopT-=i,t.hopT<=0&&e.drift&&!t.isDrifting&&Math.abs(t.speed)>10&&Math.abs(b)>.15&&(t.isDrifting=!0,t.driftDirection=Math.sign(b),t.driftTime=0,t.driftLevel=0)),t.isDrifting)if(!e.drift||Math.abs(t.speed)<8)t.driftLevel>0&&this.triggerDriftBoost(t),t.isDrifting=!1,t.driftDirection=0,t.driftTime=0,t.driftLevel=0;else{let R=Math.max(-1,Math.min(1,m*t.driftDirection));t.driftTime+=i*(.6+.9*Math.max(0,R)),t.driftTime>2.4?t.driftLevel=3:t.driftTime>1.5?t.driftLevel=2:t.driftTime>.7&&(t.driftLevel=1);let C=Math.max(-1,Math.min(1,m*t.driftDirection)),D=r.handling*.5*(1.05+C*.4)*t.driftDirection;if(t.angularVelocity=Le.lerp(t.angularVelocity,D,Math.min(1,i*8)),t.rotation.roll=Le.lerp(t.rotation.roll,-t.driftDirection*.18,i*10),t.driftLevel>0){let z=new I;t.driftDirection>0?n.rearRightWheel.getWorldPosition(z):n.rearLeftWheel.getWorldPosition(z),this.particles.emitDriftSparks(z,t.driftLevel,t.rotation.y)}}else{if(m!==0&&Math.abs(t.speed)>.5){let R=t.speed<0?-1:1;t.angularVelocity=Le.lerp(t.angularVelocity,m*g*R,Math.min(1,i*12))}else t.angularVelocity=Le.lerp(t.angularVelocity,0,Math.min(1,i*14));t.rotation.roll=Le.lerp(t.rotation.roll,-m*.08*_,i*8)}t.rotation.y+=t.angularVelocity*i,t.slideAngle=Le.lerp(t.slideAngle||0,t.isDrifting?t.driftDirection*.26:0,Math.min(1,i*6));let M=t.rotation.y+t.slideAngle,w=Math.sin(M)*t.speed,x=Math.cos(M)*t.speed;if(t.position.x+=w*i,t.position.z+=x*i,t.bumpX||t.bumpZ){t.position.x+=(t.bumpX||0)*i,t.position.z+=(t.bumpZ||0)*i;let R=Math.exp(-i*6);t.bumpX=(t.bumpX||0)*R,t.bumpZ=(t.bumpZ||0)*R,Math.abs(t.bumpX)+Math.abs(t.bumpZ)<.05&&(t.bumpX=t.bumpZ=0)}t.position.y=Le.lerp(t.position.y,(f?h:c.point.y)+.1,i*12);let E=l+10;if(c.distanceToCenter>E&&!f){let R=c.point.x-t.position.x,C=c.point.z-t.position.z,D=Math.sqrt(R*R+C*C);if(D>.01){t.position.x+=R/D*(c.distanceToCenter-E),t.position.z+=C/D*(c.distanceToCenter-E),t.speed*=Math.pow(.6,i);let z=performance.now();t.config.isPlayer&&!t.isFinished&&(!t.bumpedAt||z-t.bumpedAt>400)&&(Ze.wall(),t.bumpedAt=z)}}if(this.handleKartCollisions(t,o),t.boostTimer>0){let R=new I;n.rootGroup.getWorldPosition(R),this.particles.emitBoostFlames(R,t.rotation.y)}if(this.updateProgression(t),this.syncMesh(t,n,i),t.config.isPlayer&&!t.isFinished&&t.speed<-2&&Ze.reverse(),t.config.isPlayer&&t.config.audioLead!==!1){if(t.isFinished){se.stopEngine();return}se.updateEngine(t.speed/r.topSpeed,e.throttle,t.boostTimer>0),se.updateDriftScreech(t.isDrifting,t.driftLevel,t.speed)}}triggerDriftBoost(t){let e=.7,n=1.35;t.driftLevel===2?(e=1.2,n=1.48):t.driftLevel===3&&(e=1.7,n=1.62),t.boostTimer=e,t.boostMultiplier=n,t.speed=Math.max(t.speed,t.config.topSpeed*1.15),t.config.isPlayer&&se.playBoostSound()}triggerStartBoost(t){t.boostTimer=1.8,t.boostMultiplier=1.45,t.speed=t.config.topSpeed*1.2,t.config.isPlayer&&se.playBoostSound()}handleKartCollisions(t,e){for(let i of e){if(i.config.id===t.config.id||(t.ghostTimer||0)>0||(i.ghostTimer||0)>0)continue;let o=t.position.x-i.position.x,r=t.position.z-i.position.z,a=Math.sqrt(o*o+r*r);if(a<1.35*2&&a>.001){let c=2.7-a,l=o/a,h=r/a,f=t.config.weight||2,u=i.config.weight||2,d=u/(f+u),p=f/(f+u);t.position.x+=l*c*d,t.position.z+=h*c*d,i.position.x-=l*c*p,i.position.z-=h*c*p;let _=Math.min(30,Math.abs(t.speed-i.speed)+6),g=performance.now();if(!t.bumpedAt||g-t.bumpedAt>250){let y=S=>S.starTimer&&S.starTimer>0?3:1;t.bumpX=(t.bumpX||0)+l*_*.55*d*y(i)/y(t),t.bumpZ=(t.bumpZ||0)+h*_*.55*d*y(i)/y(t),i.bumpX=(i.bumpX||0)-l*_*.55*p*y(t)/y(i),i.bumpZ=(i.bumpZ||0)-h*_*.55*p*y(t)/y(i),t.bumpedAt=i.bumpedAt=g,(t.config.isPlayer&&!t.isFinished||i.config.isPlayer&&!i.isFinished)&&Ze.bump()}let m=(t.speed*f+i.speed*u)/(f+u);t.speed=Le.lerp(t.speed,m,.5*d),i.speed=Le.lerp(i.speed,m,.5*p)}}}updateProgression(t){let e=this.track.getClosestTrackPoint(t.position.x,t.position.z),n=this.track.trackPoints.length,i=e.index,o=t.checkpointIndex,r=(i-o+n)%n;r>0&&r<n/3&&(t.checkpointIndex=i,t.splineProgress=i/n,o>n*.85&&i<n*.15&&(t.currentLap+=1,t.lapTimes.push(t.currentLapTime),(t.bestLapTime===null||t.currentLapTime<t.bestLapTime)&&(t.bestLapTime=t.currentLapTime),t.config.isPlayer&&se.playLapChime(t.currentLap===(this.totalLaps||3)),t.currentLapTime=0)),t.totalDistance=(t.currentLap-1)*this.track.totalLength+e.point.distance}respawnOnTrack(t){let e=this.track.getClosestTrackPoint(t.position.x,t.position.z);t.position.x=e.point.x,t.position.y=e.point.y+.1,t.position.z=e.point.z,t.rotation.y=Math.atan2(e.point.tangentX,e.point.tangentZ),t.rotation.roll=0,t.rotation.pitch=0,t.speed=0,t.angularVelocity=0,t.isDrifting=!1,t.driftLevel=0,t.boostTimer=0,t.invulnerableTimer=1.5}syncMesh(t,e,n){let{rootGroup:i,bodyGroup:o,frontLeftWheel:r,frontRightWheel:a,rearLeftWheel:c,rearRightWheel:l,steeringWheel:h,driverHead:f}=e,u=(t.hopT||0)>0?Math.sin((1-t.hopT/.26)*Math.PI)*.45:0;i.position.set(t.position.x,t.position.y+u,t.position.z),i.rotation.y=t.rotation.y,o.rotation.z=t.rotation.roll,o.rotation.x=t.rotation.pitch;let d=t.speed/.3*n;r.children[0].rotation.x+=d,a.children[0].rotation.x+=d,c.children[0].rotation.x+=d,l.children[0].rotation.x+=d;let p=t.isDrifting?t.driftDirection*.45:t.angularVelocity/2.5;r.rotation.y=Le.lerp(r.rotation.y,p,n*15),a.rotation.y=Le.lerp(a.rotation.y,p,n*15),h.rotation.z=-p*1.8,f.rotation.y=Le.lerp(f.rotation.y,p*.8,n*10)}};var Di=class{constructor(t,e){$(this,"track");$(this,"me");$(this,"lane",0);$(this,"laneGoal",0);$(this,"laneTimer",0);$(this,"skill");this.track=t,this.me=e,this.skill=e.config.aiAggression||1,this.lane=this.laneGoal=(Math.random()-.5)*.7}wrap(t){for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}roadHeading(t){let e=this.track.trackPoints,n=e[(t%e.length+e.length)%e.length];return Math.atan2(n.tangentX,n.tangentZ)}update(t,e){let n=this.me,i=this.track.trackPoints,o=i.length,r=this.track.totalLength/o,a=this.track.roadWidth/2,c=Math.abs(n.speed),l=this.track.getClosestTrackPoint(n.position.x,n.position.z),h=l.index;this.laneTimer-=t,this.laneTimer<=0&&(this.laneTimer=2+Math.random()*3,this.laneGoal=(Math.random()-.5)*.8);for(let z of e){if(z===n)continue;let H=z.position.x-n.position.x,L=z.position.z-n.position.z,N=H*Math.sin(n.rotation.y)+L*Math.cos(n.rotation.y),F=H*Math.cos(n.rotation.y)-L*Math.sin(n.rotation.y);N>0&&N<9&&Math.abs(F)<2.6&&z.speed<n.speed&&(this.laneGoal=F>0?-.55:.55,this.laneTimer=1.2)}this.lane+=(this.laneGoal-this.lane)*Math.min(1,t*1.5);let f=Math.round((7+c*.32)/r),u=i[(h+f)%o],d=this.wrap(this.roadHeading(h+f+6)-this.roadHeading(h+f-2)),p=Math.max(-.8,Math.min(.8,this.lane+Math.sign(d)*Math.min(.5,Math.abs(d)*1.2))),_=u.x+u.normalX*p*a,g=u.z+u.normalZ*p*a,m=Math.atan2(_-n.position.x,g-n.position.z),y=this.wrap(m-n.rotation.y),S=Math.max(-1,Math.min(1,y*2.4)),b=Math.round((22+c*.5)/r),A=Math.abs(this.wrap(this.roadHeading(h+b)-this.roadHeading(h+2))),M=l.distanceToCenter>a+.5,w=n.config.topSpeed,x=w*(.92+.08*Math.min(1,this.skill));A>1.1?x=w*.62:A>.75&&(x=w*.78),Math.abs(y)>.9&&(x=Math.min(x,w*.5));let E=c<x,R=c>x+8||Math.abs(y)>1.3&&c>14,C=A>.55&&A<1.6&&c>24&&!M&&Math.abs(S)>.35,D=n.isDrifting?A>.3&&Math.sign(S)===n.driftDirection:C;return{throttle:E,brake:R,steerLeft:!1,steerRight:!1,steer:S,drift:D,respawn:!1,cameraToggle:!1}}};var Er=class{constructor(t){$(this,"camera");$(this,"currentView","chase");$(this,"targetPosition",new I);$(this,"targetLookAt",new I);$(this,"baseFOV",68);this.camera=new ke(this.baseFOV,t,.2,1e3),this.camera.position.set(0,10,20)}setView(t){this.currentView=t}cycleView(){let t=["chase","cockpit","action","topdown"],e=(t.indexOf(this.currentView)+1)%t.length;return this.currentView=t[e],this.currentView}update(t,e){let n=t.rotation.y,i=Math.min(1.5,Math.abs(t.speed)/t.config.topSpeed),o=this.baseFOV;t.boostTimer>0?o=this.baseFOV+16:o=this.baseFOV+i*8,this.camera.fov=Le.lerp(this.camera.fov,o,e*6),this.camera.updateProjectionMatrix();let r=new I(t.position.x,t.position.y,t.position.z);if(this.currentView==="chase"){let l=t.isDrifting?-t.driftDirection*.9:0,h=new I(-Math.sin(n)*5.8+Math.cos(n)*l,2.4,-Math.cos(n)*5.8-Math.sin(n)*l);this.targetPosition.copy(r).add(h),this.targetLookAt.copy(r).add(new I(Math.sin(n)*14,1.1,Math.cos(n)*14)),this.camera.position.lerp(this.targetPosition,e*10),this.camera.lookAt(this.targetLookAt)}else if(this.currentView==="cockpit"){let a=new I(Math.sin(n)*.4,.95,Math.cos(n)*.4);this.camera.position.copy(r).add(a);let c=r.clone().add(new I(Math.sin(n)*20,.8,Math.cos(n)*20));this.camera.lookAt(c)}else if(this.currentView==="action"){let l=new I(-Math.sin(n)*3.5,1.1,-Math.cos(n)*3.5);this.targetPosition.copy(r).add(l),this.targetLookAt.copy(r).add(new I(Math.sin(n)*8,.8,Math.cos(n)*8)),this.camera.position.lerp(this.targetPosition,e*14),this.camera.lookAt(this.targetLookAt)}else this.currentView==="topdown"&&(this.targetPosition.set(r.x,r.y+40,r.z+10),this.camera.position.lerp(this.targetPosition,e*6),this.camera.lookAt(r))}onResize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}};var Oa=["banana","green","red","blue","boost","star","bolt","fake","coin","horn","bomb","ink","golden","ride","ghost"],El=["banana","green","red","fake","bomb"],Ax=["banana","green","red","boost"];function Rx(s,t){let e=t<=1?0:(s-1)/(t-1),n={banana:5-4*e,green:3.5-2*e,fake:2.2*(1-e),coin:3*(1-e)+.3,horn:e<.25?1.2:.3,red:e<.1?.4:1+2.5*e,bomb:.4+1.8*e,ink:e>.3?1.2:0,boost:1+3*e,golden:e>.5?2.2*e:0,star:e>.45?2*e:0,ride:e>.7?2.6*e:0,ghost:e>.3?.8:0,blue:e>.5?1:0,bolt:e>.8?.9:0},i=0;for(let r of Oa)i+=n[r];let o=Math.random()*i;for(let r of Oa)if(o-=n[r],o<=0)return r;return"banana"}var Cx=["#ff5d8f","#4cc9f0","#ffc83d","#7bd389","#b388ff"];function Xu(s){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d");e.fillStyle=s,e.fillRect(0,0,128,128),e.fillStyle="rgba(255,255,255,0.35)";for(let i=10;i<128;i+=26)for(let o=i/26%2?22:9;o<128;o+=26)e.beginPath(),e.arc(o,i,4,0,Math.PI*2),e.fill();e.fillStyle="#ffffff",e.fillRect(52,0,24,128),e.fillRect(0,52,128,24),e.fillStyle="rgba(0,0,0,0.12)",e.fillRect(52,0,4,128),e.fillRect(0,52,128,4);let n=new Ie(t);return n.colorSpace=De,n}function Px(s){let t=new Dt({color:16777215,roughness:.35});for(let n of[-1,1]){let i=new et(new $e(.22,.08,8,14),t);i.position.set(n*.22,.82,0),i.rotation.set(0,Math.PI/2,n*.5),i.scale.set(1,1,.6),s.add(i)}let e=new et(new oe(.11,10,8),t);e.position.y=.78,s.add(e)}function Ix(s){return new Dt({color:s,emissive:s,emissiveIntensity:.35,roughness:.25,metalness:.1})}function Wu(s){let t=new ie;if(s==="bomb"){let e=new et(new oe(.55,16,12),new Dt({color:2302778,roughness:.35,metalness:.2}));e.position.y=.6,t.add(e);let n=new et(new ge(.16,.2,.18,10),new Dt({color:9080744}));n.position.y=1.15,t.add(n);let i=new et(new ge(.04,.04,.35,6),new Dt({color:13214826}));i.position.set(.06,1.38,0),i.rotation.z=-.4,t.add(i);let o=new et(new oe(.12,8,6),new Ee({color:16765773}));o.position.set(.14,1.55,0),o.name="flame",t.add(o);let r=new et(new oe(.12,8,6),new Ee({color:16777215}));return r.position.set(-.22,.85,.35),t.add(r),t}if(s==="fake"){let e=new et(new he(1.3,1.3,1.3),new Dt({map:Xu("#ff5d8f"),roughness:.35}));e.position.y=.75,t.add(e);let n=new Dt({color:14035001}),i=new et(new $e(.2,.07,8,12),n);return i.position.y=1.5,i.rotation.y=Math.PI/2,t.add(i),t}if(s==="banana"){let e=new Dt({color:16767291,roughness:.55}),n=new wi(new I(-.45,.15,0),new I(0,.05,.25),new I(.45,.15,0)),i=new et(new Ri(n,12,.13,8,!1),e);t.add(i);for(let r=0;r<3;r++){let a=new et(new Ue(.16,.6,6),e),c=r/3*Math.PI*2;a.position.set(.45+Math.cos(c)*.12,.18,Math.sin(c)*.18),a.rotation.set(Math.sin(c)*1.1,0,-1.2+Math.cos(c)*.3),t.add(a)}let o=new et(new oe(.07,6,5),new Dt({color:5913106}));o.position.set(-.5,.17,0),t.add(o)}else if(s==="green"){let e=new et(new oe(.5,18,14),new Dt({color:4054148,roughness:.15,transparent:!0,opacity:.92,emissive:1735236,emissiveIntensity:.25}));e.position.y=.5,e.name="body",t.add(e);let n=new et(new oe(.13,8,6),new Ee({color:16777215}));n.position.set(-.18,.78,.3),t.add(n);let i=new Ee({color:1776442});for(let o of[-1,1]){let r=new et(new oe(.07,8,6),i);r.position.set(o*.15,.58,.45),t.add(r)}}else if(s==="red"){let e=new et(new ge(.22,.26,1,12),Ix(16726843));e.rotation.x=Math.PI/2;let n=new et(new Ue(.22,.45,12),new Dt({color:16777215,roughness:.3}));n.rotation.x=Math.PI/2,n.position.z=.72;let i=new et(new ge(.235,.235,.12,12),new Dt({color:16762941}));i.rotation.x=Math.PI/2,i.position.z=.25,t.add(e,n,i);let o=new Dt({color:16777215,roughness:.4});for(let a=0;a<3;a++){let c=new et(new he(.04,.32,.3),o),l=a/3*Math.PI*2;c.position.set(Math.sin(l)*.28,Math.cos(l)*.28,-.4),c.rotation.z=-l,t.add(c)}let r=new et(new Ue(.18,.6,10),new Ee({color:16753434,transparent:!0,opacity:.85}));r.rotation.x=-Math.PI/2,r.position.z=-.8,r.name="flame",t.add(r),t.children.forEach(a=>a.position.y+=.45)}else{let e=new Dt({color:5991382,roughness:.6,emissive:2767514,emissiveIntensity:.4});for(let[r,a,c]of[[0,0,.45],[-.42,-.08,.32],[.42,-.06,.34],[.12,.22,.32]]){let l=new et(new oe(c,12,10),e);l.position.set(r,a,0),t.add(l)}let n=new _n;n.moveTo(.05,0),n.lineTo(-.15,-.35),n.lineTo(0,-.35),n.lineTo(-.1,-.7),n.lineTo(.2,-.25),n.lineTo(.05,-.25),n.lineTo(.2,0);let i=new et(new Dn(n,{depth:.06,bevelEnabled:!1}),new Ee({color:16773466}));i.position.set(0,-.3,0),i.name="flame",t.add(i);let o=new Ee({color:16777215});for(let r of[-1,1]){let a=new et(new he(.16,.06,.04),o);a.position.set(r*.15,.05,.44),a.rotation.z=r*.35,t.add(a)}}return t}var Ba=class{constructor(t,e){$(this,"scene",t);$(this,"track",e);$(this,"held",new Map);$(this,"onEvent");$(this,"boxes",[]);$(this,"coinsOnTrack",[]);$(this,"thrown",[]);$(this,"group",new ie);$(this,"boxGeo",new he(1.4,1.4,1.4));$(this,"boxMats");$(this,"aiTimers",new Map);$(this,"fx",[]);t.add(this.group),this.boxMats=Cx.map(c=>new Dt({map:Xu(c),roughness:.35,emissive:16777215,emissiveIntensity:.12}));let n=0,i=e.trackPoints;for(let c of[.16,.42,.68,.88]){let l=i[Math.floor(c*i.length)%i.length],h=e.roadWidth;for(let f of[-.4,-.2,0,.2,.4]){let u=l.x+l.normalX*f*h,d=l.z+l.normalZ*f*h,p=new et(this.boxGeo,this.boxMats[n++%this.boxMats.length]);Px(p),p.position.set(u,l.y+1.2,d),this.group.add(p),this.boxes.push({mesh:p,x:u,y:l.y,z:d,respawn:0})}}let o=new ge(.55,.55,.14,18);o.rotateX(Math.PI/2);let r=new Dt({color:16762941,emissive:11565056,emissiveIntensity:.45,metalness:.6,roughness:.25}),a=new Dt({color:14722048,metalness:.6,roughness:.3});for(let c of[.07,.29,.53,.77]){let l=(Math.random()-.5)*.6;for(let h=0;h<5;h++){let f=i[(Math.floor(c*i.length)+h*2)%i.length],u=f.x+f.normalX*l*e.roadWidth,d=f.z+f.normalZ*l*e.roadWidth,p=new et(o,r),_=new et(new $e(.55,.06,6,18),a);p.add(_),p.position.set(u,f.y+1,d),this.group.add(p),this.coinsOnTrack.push({mesh:p,x:u,y:f.y,z:d,respawn:0})}}}reset(){for(let t of this.thrown)this.group.remove(t.mesh);this.thrown=[];for(let t of this.held.values())for(let e of t.trail)this.group.remove(e);this.held.clear();for(let t of this.boxes)t.respawn=0,t.mesh.visible=!0;for(let t of this.coinsOnTrack)t.respawn=0,t.mesh.visible=!0}update(t,e,n,i,o){for(let r of this.coinsOnTrack){if(r.respawn>0){r.respawn-=t,r.respawn<=0&&(r.mesh.visible=!0);continue}r.mesh.rotation.y+=t*3,r.mesh.position.y=r.y+1+Math.sin(e*3+r.x)*.12;for(let a of n){let c=a.position.x-r.x,l=a.position.z-r.z;if(c*c+l*l<4.5){r.mesh.visible=!1,r.respawn=10,(a.coins||0)<10&&(a.coins=(a.coins||0)+1,a.config.isPlayer&&a.config.audioLead!==!1&&se.playCoin()),this.onEvent?.({type:"coin",racer:a.config.id});break}}}for(let r of this.boxes){if(r.respawn>0){r.respawn-=t,r.respawn<=0&&(r.mesh.visible=!0);continue}r.mesh.rotation.y+=t*1.6,r.mesh.rotation.x=Math.sin(e*1.3+r.x)*.3,r.mesh.position.y=r.y+1.2+Math.sin(e*2.2+r.z)*.15;for(let a of n){let c=a.position.x-r.x,l=a.position.z-r.z;if(c*c+l*l<6.5){r.mesh.visible=!1,r.respawn=2.5,this.held.has(a.config.id)||(this.held.set(a.config.id,{kind:null,rollLeft:1.3,shown:"banana",count:1,trailing:!1,trail:[]}),this.onEvent?.({type:"pickup",racer:a.config.id}),a.config.isPlayer&&se.playLapChime(!1));break}}}for(let[r,a]of this.held)if(!a.kind&&(a.rollLeft-=t,a.shown=Oa[Math.floor(e*14)%Oa.length],a.rollLeft<=0)){let c=n.find(l=>l.config.id===r);a.kind=Rx(c?c.rank:n.length,n.length),a.shown=a.kind,Ax.includes(a.kind)&&Math.random()<.22&&(a.count=3,El.includes(a.kind)&&this.startTrail(a)),c&&!c.config.isPlayer&&this.aiTimers.set(r,.6+Math.random()*3.5)}for(let[r,a]of this.aiTimers){let c=a-t;c<=0?(this.aiTimers.delete(r),i.add(r)):this.aiTimers.set(r,c)}for(let r of i)this.fire(r,n);for(let[r,a]of this.held)a.kind==="golden"&&a.left!==void 0&&(a.left-=t,a.left<=0?this.held.delete(r):!n.find(c=>c.config.id===r)?.config.isPlayer&&Math.random()<t*3&&i.add(r));this.updateFx(t),this.updateTrails(n),this.updateThrown(t,n,e);for(let r of n){if((r.starTimer||0)>0)for(let a of n){if(a===r||a.spinOutTimer>0||(a.starTimer||0)>0)continue;let c=a.position.x-r.position.x,l=a.position.z-r.position.z;c*c+l*l<5&&this.hit(a,r.config.id,"star")}o(r.config.id,(r.shrinkTimer||0)>0?.6:1)}}press(t,e,n){let i=this.held.get(t);!i||!i.kind||(El.includes(i.kind)?i.trailing||this.startTrail(i):this.fire(t,e,n))}release(t,e,n){let i=this.held.get(t);i&&i.kind&&i.trailing&&this.fire(t,e,n)}fire(t,e,n){let i=this.held.get(t),o=e.find(c=>c.config.id===t);if(!i||!i.kind||!o)return;let r=i.kind;if(r==="golden"){i.left===void 0&&(i.left=7),this.use("boost",o,e);return}i.count--;let a=i.trail.pop();if(a&&this.group.remove(a),i.count<=0){for(let c of i.trail)this.group.remove(c);this.held.delete(t)}else o.config.isPlayer||this.aiTimers.set(t,.8+Math.random()*2);this.use(r,o,e,n)}startTrail(t){t.trailing=!0;for(let e=t.trail.length;e<t.count;e++){let n=Wu(t.kind);n.scale.setScalar(.85),this.group.add(n),t.trail.push(n)}}ring(t,e,n,i,o){let r=new et(new $e(1,.25,8,32),new Ee({color:i,transparent:!0,opacity:.9}));r.rotation.x=Math.PI/2,r.position.set(t,e+.6,n),this.group.add(r),this.fx.push({mesh:r,life:.45,max:.45,grow:o})}boom(t,e,n){let i=new et(new oe(1,16,12),new Ee({color:16747039,transparent:!0,opacity:.85}));i.position.set(t,e+1,n),this.group.add(i),this.fx.push({mesh:i,life:.6,max:.6,grow:8})}updateFx(t){for(let e=this.fx.length-1;e>=0;e--){let n=this.fx[e];n.life-=t;let i=1-n.life/n.max;n.mesh.scale.setScalar(.5+i*n.grow),n.mesh.material.opacity=.9*(1-i),n.life<=0&&(this.group.remove(n.mesh),this.fx.splice(e,1))}}explode(t,e){this.boom(t.x,t.y,t.z);for(let n of e){let i=n.position.x-t.x,o=n.position.z-t.z;i*i+o*o<64&&this.hit(n,t.owner,"bomb")}this.onEvent?.({type:"boom",racer:t.owner})}updateTrails(t){for(let[e,n]of this.held){if(!n.trailing)continue;let i=t.find(r=>r.config.id===e);if(!i)continue;let o=i.rotation.y;n.trail.forEach((r,a)=>{let c=1.9+a*1.1,l=Math.sin(performance.now()/120+a)*.15;r.position.set(i.position.x-Math.sin(o)*c+Math.cos(o)*l,i.position.y,i.position.z-Math.cos(o)*c-Math.sin(o)*l),r.rotation.y=o})}}shield(t){let e=this.held.get(t.config.id);if(!e||!e.trailing||e.count<=0)return!1;e.count--;let n=e.trail.pop();if(n&&this.group.remove(n),e.count<=0){for(let i of e.trail)this.group.remove(i);this.held.delete(t.config.id)}return this.onEvent?.({type:"block",racer:t.config.id}),!0}use(t,e,n,i){this.onEvent?.({type:"use",racer:e.config.id,item:t,aim:i});let o=e.rotation.y;if(t==="boost"){e.boostTimer=1.4,e.boostMultiplier=1.5,e.speed=Math.max(e.speed,e.config.topSpeed*1.2),e.config.isPlayer&&se.playBoostSound();return}if(t==="star"){e.starTimer=7,e.invulnerableTimer=7,e.boostTimer=7,e.boostMultiplier=1.15,e.config.isPlayer&&se.playBoostSound();return}if(t==="bolt"){for(let u of n)u===e||(u.starTimer||0)>0||(u.shrinkTimer=5,u.spinOutTimer=Math.max(u.spinOutTimer,.5),u.speed*=.5);this.onEvent?.({type:"bolt",racer:e.config.id});return}if(t==="coin"){e.coins=Math.min(10,(e.coins||0)+2),e.boostTimer=Math.max(e.boostTimer,.35),e.boostMultiplier=Math.max(e.boostMultiplier,1.15);return}if(t==="horn"){for(let u of n){if(u===e)continue;let d=u.position.x-e.position.x,p=u.position.z-e.position.z;d*d+p*p<90&&this.hit(u,e.config.id,"horn")}for(let u=this.thrown.length-1;u>=0;u--){let d=this.thrown[u],p=d.x-e.position.x,_=d.z-e.position.z;p*p+_*_<180&&(this.group.remove(d.mesh),this.thrown.splice(u,1))}this.ring(e.position.x,e.position.y,e.position.z,16777215,10),this.onEvent?.({type:"horn",racer:e.config.id});return}if(t==="ink"){for(let u of n)u.rank<e.rank&&!((u.starTimer||0)>0)&&(u.inkTimer=4.5,this.onEvent?.({type:"ink",racer:u.config.id,by:e.config.id}));return}if(t==="ride"){e.rideTimer=3.4,e.invulnerableTimer=Math.max(e.invulnerableTimer,3.6),e.boostTimer=3.4,e.boostMultiplier=1.6;return}if(t==="ghost"){e.ghostTimer=5,e.invulnerableTimer=Math.max(e.invulnerableTimer,5);let u=n.filter(p=>p.rank<e.rank&&this.held.get(p.config.id)?.kind),d=u[Math.floor(Math.random()*u.length)];if(d){let p=this.held.get(d.config.id);for(let g of p.trail)this.group.remove(g);this.held.delete(d.config.id);let _={kind:p.kind,rollLeft:0,shown:p.kind,count:p.count,trailing:!1,trail:[]};this.held.set(e.config.id,_),El.includes(_.kind)&&_.count>1&&this.startTrail(_),e.config.isPlayer||this.aiTimers.set(e.config.id,1+Math.random()*2),this.onEvent?.({type:"steal",racer:d.config.id,by:e.config.id,item:_.kind})}return}let r=Wu(t);this.group.add(r);let a=t==="banana"||t==="fake",c=i?i==="back":a,l=a&&!c,h=c?-2.6:2.6,f={kind:t,owner:e.config.id,mesh:r,x:e.position.x+Math.sin(o)*h,y:e.position.y,z:e.position.z+Math.cos(o)*h,heading:c&&!a?o+Math.PI:o,speed:l?46:a?0:t==="bomb"?c?14:42:t==="green"?62:58,life:a?60:t==="bomb"?1.3:t==="green"?3.5:8,armed:.4,drag:l?1:void 0};if(t==="red"&&c)f.kind="green";else if(t==="red"){let u=n.filter(d=>d.rank===e.rank-1)[0];f.target=u?u.config.id:void 0,u||(f.kind="green")}if(t==="blue"){let u=n.filter(d=>d.rank===1&&d!==e)[0];f.target=u?u.config.id:void 0}this.thrown.push(f)}updateThrown(t,e,n){let i=this.track.roadWidth/2;for(let o=this.thrown.length-1;o>=0;o--){let r=this.thrown[o];if(r.life-=t,r.armed-=t,r.speed>0){if(r.target){let h=e.find(f=>f.config.id===r.target);if(h){let u=Math.atan2(h.position.x-r.x,h.position.z-r.z)-r.heading;for(;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2;let d=(r.kind==="blue"?5:3.2)*t;r.heading+=Math.max(-d,Math.min(d,u))}}else{let h=this.track.getClosestTrackPoint(r.x,r.z);if(h.distanceToCenter>i+2){let f=h.point,u=Math.atan2(f.x-r.x,f.z-r.z);r.heading+=Math.sign(Math.sin(u-r.heading))*3*t}}if(r.x+=Math.sin(r.heading)*r.speed*t,r.z+=Math.cos(r.heading)*r.speed*t,r.kind==="red")r.mesh.rotation.y=r.heading;else if(r.kind==="green"){r.mesh.rotation.y=r.heading;let h=r.mesh.getObjectByName("body");if(h){let f=Math.abs(Math.sin(n*9));h.position.y=.5+f*.35,h.scale.set(1+(1-f)*.15,1-(1-f)*.15,1+(1-f)*.15)}}else r.mesh.rotation.y+=t*3;let l=r.mesh.getObjectByName("flame");l&&l.scale.setScalar(.8+Math.random()*.4)}let a=this.track.getClosestTrackPoint(r.x,r.z).point.y;r.y=Le.lerp(r.y,a+(r.kind==="blue"?1.4:.1),t*10),r.mesh.position.set(r.x,r.y,r.z),r.kind==="bomb"&&r.speed>0&&(r.speed=Math.max(0,r.speed-30*t)),r.drag&&r.speed>0&&(r.speed=Math.max(0,r.speed-55*t),r.speed===0&&(r.mesh.rotation.y=r.heading));let c=r.life<=0;if(c&&r.kind==="bomb"&&this.explode(r,e),!c)for(let l of e){if(l.config.id===r.owner&&r.armed>0)continue;let h=l.position.x-r.x,f=l.position.z-r.z,u=r.kind==="blue"&&l.config.id===r.target?2.6:1.7;if(h*h+f*f<u*u){if(r.kind==="blue"&&r.target&&l.config.id!==r.target)continue;if(r.kind==="bomb"){this.explode(r,e),c=!0;break}if(r.kind!=="blue"&&l.config.id!==r.owner&&this.shield(l)){c=!0;break}this.hit(l,r.owner,r.kind),c=!0;break}}c&&(this.group.remove(r.mesh),this.thrown.splice(o,1))}}hit(t,e,n){t.invulnerableTimer>0||(t.starTimer||0)>0||(t.ghostTimer||0)>0||(t.rideTimer||0)>0||(t.coins=Math.max(0,(t.coins||0)-3),t.spinOutTimer=n==="blue"?1.8:1.1,t.invulnerableTimer=2.2,t.boostTimer=0,t.boostMultiplier=1,t.isDrifting=!1,this.onEvent?.({type:"hit",racer:t.config.id,by:e,item:n}),t.config.isPlayer&&se.playCollisionSound(1))}};var Lx=[0,2,4,5,7,9,11],qu=[0,2,3,5,7,8,10],Dx=[0,2,4,5,7,9,10],Yu=["k.h.s.h.k.k.s.h.","k.h.s.h.k.hks.ho"],Tl=["k.h.k.h.k.h.k.ho","k.hsk.h.k.hsk.hs"],Nx=["k...h...s...h...","k...h.k.s...h.hh"],Zu=["k..h.hs..h.hk.hh","k..h.hs..hkhs.ho"],wl={meadow:{bpm:140,root:60,scale:Lx,lead:"square",verse:{chords:[1,5,6,4],leadOct:1,arp:!0,pad:!0,bass:"R.R.5.R.R.8.5.R.",lead:"1-3-5-3-6-5-3---2-4-6-4-5---3---1-3-5-a-6-5-3-2-1-------5-------",drums:Yu},chorus:{chords:[4,5,3,6],leadOct:1,arp:!0,pad:!0,bass:"R.8.R.8.R.8.5.8.",lead:"a---b-a-6-5-6---5---6-5-3-2-3---6-5-6-a-b-a-6-5-a-------6---5---",drums:Tl}},sunset:{bpm:118,root:62,scale:Dx,swing:.14,lead:"triangle",verse:{chords:[1,7,4,1],leadOct:1,arp:!1,pad:!0,bass:"R..R..5.R..8..5.",lead:"5--3--1-2-3-----4--3--2-1-2-----5--6--b-a-6-----5-------3-------",drums:Zu},chorus:{chords:[4,1,7,5],leadOct:1,arp:!0,pad:!0,bass:"R..R..5.R..R..8.",lead:"a--b--a-6-5-6---b--a--6-5-3-----a--b--c-b-a-6---5-------a-------",drums:Zu}},frosty:{bpm:150,root:57,scale:qu,lead:"triangle",verse:{chords:[1,6,4,5],leadOct:1,arp:!0,pad:!1,bass:"R.R.R.R.5.5.R.R.",lead:"1-5-a-5-3-5-a-5-6-a-c-a-5-a-c-a-4-6-b-6-3-5-a-5-7-2-5-2-7-------",drums:Yu},chorus:{chords:[6,7,3,5],leadOct:1,arp:!0,pad:!0,bass:"R.8.R.8.5.8.R.8.",lead:"a---c---b-a-5---6---a---c-b-a---b---a---6-5-4---5---7---b-------",drums:Tl}},neon:{bpm:112,root:52,scale:qu,lead:"sawtooth",verse:{chords:[1,6,3,7],leadOct:1,arp:!0,pad:!0,bass:"R.RR.RR.R.RR.R8.",lead:"1-------5---3---4-------3---2---1-------7---5---6-------5-------",drums:Nx},chorus:{chords:[6,4,1,5],leadOct:1,arp:!0,pad:!0,bass:"R.RR.RR.R.RR.R8.",lead:"a---b---c---b---a---6---5---6---a---b---c---e---d-------b-------",drums:Tl}}},ms=s=>440*Math.pow(2,(s-69)/12),Al=class{constructor(t){$(this,"song");$(this,"ctx",null);$(this,"bus",null);$(this,"fxSend",null);$(this,"timer",null);$(this,"step",0);$(this,"nextAt",0);$(this,"tempo",1);$(this,"noise",null);this.song=wl[t]||wl.meadow}start(){let t=se.output();if(!t||this.timer)return;let e=this.ctx=t.ctx;this.bus=e.createGain(),this.bus.gain.value=.55,this.bus.connect(t.out),this.fxSend=e.createGain(),this.fxSend.gain.value=.35;let n=e.createDelay(1);n.delayTime.value=60/this.song.bpm*.75;let i=e.createGain();i.gain.value=.32;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=2600,this.fxSend.connect(n),n.connect(o),o.connect(i),i.connect(n),o.connect(this.bus);let r=e.createConvolver(),a=e.sampleRate*1.4,c=e.createBuffer(2,a,e.sampleRate);for(let u=0;u<2;u++){let d=c.getChannelData(u);for(let p=0;p<a;p++)d[p]=(Math.random()*2-1)*Math.pow(1-p/a,2.6)}r.buffer=c;let l=e.createGain();l.gain.value=.5,this.fxSend.connect(r),r.connect(l),l.connect(this.bus);let h=e.createBuffer(1,e.sampleRate*.4,e.sampleRate),f=h.getChannelData(0);for(let u=0;u<f.length;u++)f[u]=Math.random()*2-1;this.noise=h,this.nextAt=e.currentTime+.1,this.timer=setInterval(()=>this.pump(),25)}finalLap(){if(!this.ctx||!this.bus)return;let t=this.ctx.currentTime+.05;[0,4,7,12,16].forEach((e,n)=>this.voice(ms(this.song.root+12+e),t+n*.08,.16,"square",.12,!0)),this.tempo=1.15,this.step=128}stop(){if(clearInterval(this.timer),this.timer=null,this.bus&&this.ctx){let t=this.bus;t.gain.setTargetAtTime(0,this.ctx.currentTime,.25),setTimeout(()=>t.disconnect(),1500)}this.bus=null}pump(){if(!this.ctx)return;let t=60/(this.song.bpm*this.tempo)/4;for(;this.nextAt<this.ctx.currentTime+.15;){let e=this.song.swing&&this.step%2?t*this.song.swing:0;this.playStep(this.step,this.nextAt+e,t),this.nextAt+=t,this.step=(this.step+1)%256}}deg(t,e=0){let n=this.song.scale,i=t-1;return this.song.root+n[(i%7+7)%7]+12*(Math.floor(i/7)+e)}playStep(t,e,n){let i=t>=128,o=i?this.song.chorus:this.song.verse,r=t%128,a=Math.floor(r/16),c=r%16,l=o.chords[a%o.chords.length],h=[this.deg(l),this.deg(l+2),this.deg(l+4)],u=o.drums[a%4===3?1:0][c];u==="k"&&this.kick(e),u==="s"&&this.snare(e),u==="h"&&this.hat(e,!1),u==="o"&&this.hat(e,!0),i&&c%4===2&&u!=="s"&&this.hat(e,!1);let d=o.bass[c];d&&d!=="."&&this.bassNote(ms(h[0]-24+(d==="5"?7:d==="8"?12:0)),e,n*1.6),o.pad&&c===0&&h.forEach((_,g)=>this.pad(ms(_+0),e,n*16)),o.arp&&c%2===0&&this.voice(ms(h[c/2%3]+12),e,n*1.2,"square",.035,!1);let p=o.lead[r%64];if(p&&p!=="."&&p!=="-"){let _=1;for(;o.lead[(r+_)%64]==="-"&&_<16;)_++;let g=p>="a"&&p<="g",m=g?p.charCodeAt(0)-96:Number(p);this.lead(ms(this.deg(m,o.leadOct+(g?1:0))),e,n*_*.95,i)}}env(t,e,n,i,o){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(i,e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+Math.max(n+.02,o))}voice(t,e,n,i,o,r){let a=this.ctx,c=a.createOscillator(),l=a.createGain();c.type=i,c.frequency.value=t,this.env(l,e,.005,o,n),c.connect(l),l.connect(this.bus),r&&l.connect(this.fxSend),c.start(e),c.stop(e+n+.05)}lead(t,e,n,i){let o=this.ctx,r=o.createGain(),a=o.createBiquadFilter();a.type="lowpass",a.frequency.value=i?3800:2400,a.Q.value=2;let c=o.createOscillator(),l=o.createGain();c.frequency.value=5.5,l.gain.value=t*.006,c.connect(l);for(let h of[-6,6]){let f=o.createOscillator();f.type=this.song.lead,f.frequency.value=t,f.detune.value=h,l.connect(f.frequency),f.connect(a),f.start(e),f.stop(e+n+.1)}c.start(e),c.stop(e+n+.1),this.env(r,e,.015,this.song.lead==="sawtooth"?.07:.1,n),a.connect(r),r.connect(this.bus),r.connect(this.fxSend)}bassNote(t,e,n){let i=this.ctx,o=i.createOscillator(),r=i.createGain(),a=i.createBiquadFilter();o.type="sawtooth",o.frequency.value=t,a.type="lowpass",a.Q.value=6,a.frequency.setValueAtTime(1200,e),a.frequency.exponentialRampToValueAtTime(220,e+n),this.env(r,e,.005,.22,n),o.connect(a).connect(r).connect(this.bus),o.start(e),o.stop(e+n+.05)}pad(t,e,n){let i=this.ctx,o=i.createGain(),r=i.createBiquadFilter();r.type="lowpass",r.frequency.value=1100;for(let a of[-9,9]){let c=i.createOscillator();c.type="sawtooth",c.frequency.value=t,c.detune.value=a,c.connect(r),c.start(e),c.stop(e+n+.3)}o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(.025,e+.25),o.gain.setValueAtTime(.025,e+n*.8),o.gain.linearRampToValueAtTime(1e-4,e+n+.25),r.connect(o),o.connect(this.bus),o.connect(this.fxSend)}kick(t){let e=this.ctx,n=e.createOscillator(),i=e.createGain();n.frequency.setValueAtTime(150,t),n.frequency.exponentialRampToValueAtTime(42,t+.14),this.env(i,t,.002,.7,.22),n.connect(i).connect(this.bus),n.start(t),n.stop(t+.25),this.noiseHit(t,.015,.12,3e3,"highpass")}noiseHit(t,e,n,i,o,r=!1){let a=this.ctx,c=a.createBufferSource(),l=a.createBiquadFilter(),h=a.createGain();c.buffer=this.noise,l.type=o,l.frequency.value=i,this.env(h,t,.002,n,e),c.connect(l).connect(h),h.connect(this.bus),r&&h.connect(this.fxSend),c.start(t),c.stop(t+e+.02)}snare(t){this.noiseHit(t,.18,.3,1700,"bandpass",!0);let e=this.ctx,n=e.createOscillator(),i=e.createGain();n.type="triangle",n.frequency.setValueAtTime(220,t),n.frequency.exponentialRampToValueAtTime(140,t+.08),this.env(i,t,.002,.18,.1),n.connect(i).connect(this.bus),n.start(t),n.stop(t+.12)}hat(t,e){this.noiseHit(t,e?.22:.045,e?.08:.06,8e3,"highpass")}},Ux="https://cdn.jsdelivr.net/gh/bryanw121/couchparty@main/audio/",Tr={};function Ju(s,t){return Tr[t]||(Tr[t]=fetch(Ux+t+".mp3").then(e=>{if(!e.ok)throw new Error("http "+e.status);return e.arrayBuffer()}).then(e=>new Promise((n,i)=>s.decodeAudioData(e,n,i))),Tr[t].catch(()=>delete Tr[t])),Tr[t]}function Ku(s){let t=se.output();t&&Ju(t.ctx,"kart-"+s).catch(()=>{})}var ka=class{constructor(t){$(this,"course");$(this,"ctx",null);$(this,"gain",null);$(this,"src",null);$(this,"synth",null);$(this,"stopped",!1);$(this,"fast",!1);this.course=wl[t]?t:"meadow"}start(){let t=se.output();if(!t)return;this.ctx=t.ctx,this.gain=t.ctx.createGain(),this.gain.gain.value=.42,this.gain.connect(t.out);let e=setTimeout(()=>this.useSynth(),6e3);Ju(t.ctx,"kart-"+this.course).then(n=>{if(clearTimeout(e),this.stopped||this.synth||!this.ctx||!this.gain)return;let i=this.ctx.createBufferSource();i.buffer=n,i.loop=!0,this.fast&&(i.playbackRate.value=1.12),i.connect(this.gain),this.gain.gain.setValueAtTime(0,this.ctx.currentTime),this.gain.gain.linearRampToValueAtTime(.42,this.ctx.currentTime+.6),i.start(),this.src=i}).catch(()=>{clearTimeout(e),this.useSynth()})}useSynth(){this.stopped||this.src||this.synth||(this.synth=new Al(this.course),this.synth.start(),this.fast&&this.synth.finalLap())}finalLap(){if(this.fast=!0,this.synth){this.synth.finalLap();return}if(!this.ctx||!this.src||!this.gain)return;let t=this.ctx,e=t.currentTime;this.gain.gain.setValueAtTime(.42,e),this.gain.gain.linearRampToValueAtTime(.12,e+.15),[0,4,7,12,16].forEach((n,i)=>{let o=t.createOscillator(),r=t.createGain();o.type="square",o.frequency.value=ms(72+n),r.gain.setValueAtTime(1e-4,e+i*.09),r.gain.linearRampToValueAtTime(.1,e+i*.09+.01),r.gain.exponentialRampToValueAtTime(1e-4,e+i*.09+(i===4?.5:.14)),o.connect(r).connect(se.output().out),o.start(e+i*.09),o.stop(e+i*.09+.6)}),this.src.playbackRate.setValueAtTime(1,e+.7),this.src.playbackRate.linearRampToValueAtTime(1.12,e+1.2),this.gain.gain.linearRampToValueAtTime(.46,e+1.2)}stop(){if(this.stopped=!0,this.synth?.stop(),this.gain&&this.ctx){let t=this.gain,e=this.src;t.gain.setTargetAtTime(0,this.ctx.currentTime,.25),setTimeout(()=>{try{e?.stop()}catch{}t.disconnect()},1500)}this.gain=null,this.src=null}};function Rl(){let s=new Uint8Array([90,170,255]),t=new es(s,s.length,1,lr);return t.minFilter=Ce,t.magFilter=Ce,t.generateMipmaps=!1,t.needsUpdate=!0,t}function Cl(s,t,e=new Map){s.traverse(n=>{let i=n;if(!i.isMesh||!i.material)return;let o=r=>{if(r.userData.preserveShading)return r;let a=r;if(!a.isMeshStandardMaterial)return r;let c=e.get(r);return c||(c=new $s({color:a.color.clone().offsetHSL(0,.12,.02),map:a.map,emissive:a.emissive.clone(),emissiveIntensity:a.emissiveIntensity,transparent:a.transparent,opacity:a.opacity,side:a.side,polygonOffset:a.polygonOffset,polygonOffsetFactor:a.polygonOffsetFactor,gradientMap:t}),e.set(r,c)),c};i.material=Array.isArray(i.material)?i.material.map(o):o(i.material)})}function Fx(s){let t=new oe(520,32,16),e=new Ft(s.skyTop),n=new Ft(s.skyMid),i=new Ft(s.skyLow),o=[],r=t.attributes.position;for(let l=0;l<r.count;l++){let h=r.getY(l)/520,f=h>.25?n.clone().lerp(e,Math.min(1,(h-.25)/.6)):i.clone().lerp(n,Math.max(0,(h+.05)/.3));o.push(f.r,f.g,f.b)}t.setAttribute("color",new Wt(o,3));let a=new Ee({vertexColors:!0,side:Ve,fog:!1,depthWrite:!1}),c=new et(t,a);return c.renderOrder=-1,c}function Ox(s){let t=new ie,e=new Ee({color:s,fog:!1}),n=4+Math.floor(Math.random()*3);for(let i=0;i<n;i++){let o=6+Math.random()*6,r=new et(new oe(o,10,8),e);r.position.set((i-n/2)*8+Math.random()*4,Math.random()*4,Math.random()*6),r.scale.y=.7,t.add(r)}return t}function Bx(s,t){let e=new ie,n=new et(new ge(.35,.55,3,8),new Dt({color:t.trunk}));n.position.y=1.5,e.add(n);let i=t.trees[Math.floor(Math.random()*t.trees.length)],o=new Dt({color:i,roughness:.8,emissive:t.glow?i:0,emissiveIntensity:t.glow?.55:0}),r=[[0,4.4,0,2.4],[1.3,3.8,.3,1.6],[-1.2,3.9,-.2,1.7],[.2,5.6,.2,1.6]];for(let[a,c,l,h]of r){let f=new et(new Js(h,1),o);f.position.set(a,c,l),e.add(f)}return e.scale.setScalar(s),e}function kx(s){let t=document.createElement("canvas");t.width=128,t.height=256;let e=t.getContext("2d");e.fillStyle=s,e.fillRect(0,0,128,256),e.fillStyle="#ffe14d";for(let i=0;i<3;i++){let o=40+i*70;e.beginPath(),e.moveTo(14,o+50),e.lineTo(64,o),e.lineTo(114,o+50),e.lineTo(114,o+74),e.lineTo(64,o+24),e.lineTo(14,o+74),e.closePath(),e.fill()}let n=new Ie(t);return n.colorSpace=De,n}function $u(s,t){let e=t.course.theme;s.background=new Ft(e.skyMid),s.fog=new Ls(e.fog,140,480),s.add(Fx(e));let n=[];for(let l=0;l<14;l++){let h=Ox(e.clouds),f=l/14*Math.PI*2,u=260+Math.random()*120;h.position.set(Math.cos(f)*u,70+Math.random()*50,Math.sin(f)*u),h.lookAt(0,h.position.y,0),s.add(h),n.push(h)}let i=[];t.sceneryGroup.children.forEach(l=>{let h=l;h.isGroup&&h.children.length===4&&h.children[1].geometry instanceof Ue&&i.push(h)});let o=(l,h)=>{let f=1e9;for(let d=0;d<t.trackPoints.length;d+=3){let p=t.trackPoints[d],_=(p.x-l)**2+(p.z-h)**2;_<f&&(f=_)}if(Math.sqrt(f)<t.roadWidth*.5+9)return!0;let u=t.shortcut;if(u){let d=u.bx-u.ax,p=u.bz-u.az,_=d*d+p*p||1,g=Math.max(0,Math.min(1,((l-u.ax)*d+(h-u.az)*p)/_));if(Math.hypot(l-(u.ax+d*g),h-(u.az+p*g))<u.w/2+6)return!0}return!1};for(let l of i){if(t.sceneryGroup.remove(l),o(l.position.x,l.position.z))continue;let h=Bx(l.scale.x*(.75+Math.random()*.35),e);h.position.copy(l.position),h.rotation.y=Math.random()*Math.PI,t.sceneryGroup.add(h)}t.sceneryGroup.traverse(l=>{let h=l.material;!h||!h.isMeshStandardMaterial||h.color.getHex()===5078031&&(h.color.setHex(e.ground),h.flatShading=!1,h.needsUpdate=!0)});let r=[],a=new Ee({map:kx(e.padColor),transparent:!0,opacity:.95,polygonOffset:!0,polygonOffsetFactor:-3}),c=t.trackPoints;for(let l of[.06,.3,.55,.8]){let h=Math.floor(l*c.length)%c.length,f=c[h],u=Math.atan2(f.tangentX,f.tangentZ);for(let d of[-.22,.22]){let p=f.x+f.normalX*d*t.roadWidth,_=f.z+f.normalZ*d*t.roadWidth,g=new et(new Ge(3.4,6),a);g.rotation.x=-Math.PI/2,g.rotation.z=u+Math.PI,g.position.set(p,f.y+.12,_),t.sceneryGroup.add(g),r.push({x:p,z:_,heading:u,mesh:g})}}return Cl(s,Rl()),{pads:r,update:l=>{for(let h=0;h<n.length;h++)n[h].position.y+=Math.sin(l*.3+h)*.01;a.opacity=.75+Math.sin(l*8)*.2}}}function ju(){let s=document.createElement("canvas");s.width=s.height=64;let t=s.getContext("2d"),e=t.createRadialGradient(32,32,4,32,32,32);e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);let n=new et(new Ge(2.6,3.4),new Ee({map:new Ie(s),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));return n.rotation.x=-Math.PI/2,n}var zx=gs.map(s=>({...s,accent:"#ffffff"})),Hx={chill:.8,fast:1,turbo:1.2};function Qu(s,t,e,n){return{weight:s>=5?3:t>=5?1:2,topSpeed:(41.5+(s-3)*1.1)*n,acceleration:(30+(t-3)*2.6)*n,handling:(3.2+(e-3)*.18)*(n>1?1.08:1)}}var Gx=8,Vx={banana:'<svg viewBox="0 0 40 40"><path d="M7 12 C8 30 28 36 35 22 C25 25 15 22 12 9 Z" fill="#ffd93b" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><path d="M12 9 L10 4" stroke="#5a3a12" stroke-width="3" stroke-linecap="round"/><path d="M14 20 C18 26 24 28 30 26" fill="none" stroke="#fff6b0" stroke-width="2" stroke-linecap="round"/></svg>',green:'<svg viewBox="0 0 40 40"><ellipse cx="20" cy="36" rx="10" ry="2.5" fill="rgba(0,0,0,.35)"/><circle cx="20" cy="20" r="14" fill="#3ddc84" stroke="#1b1b3a" stroke-width="2.5"/><circle cx="14" cy="14" r="4" fill="#fff" opacity=".85"/><circle cx="16" cy="21" r="2.2" fill="#1b1b3a"/><circle cx="24" cy="21" r="2.2" fill="#1b1b3a"/><path d="M16 26 Q20 29 24 26" fill="none" stroke="#1b1b3a" stroke-width="2" stroke-linecap="round"/></svg>',red:'<svg viewBox="0 0 40 40"><g transform="rotate(45 20 20)"><path d="M20 3 C26 9 26 22 25 28 H15 C14 22 14 9 20 3 Z" fill="#ff3b3b" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><path d="M20 3 C23 6 24.5 9 25 12 H15 C15.5 9 17 6 20 3 Z" fill="#fff" stroke="#1b1b3a" stroke-width="2" stroke-linejoin="round"/><rect x="15" y="17" width="10" height="3" fill="#ffc83d"/><path d="M15 22 L10 30 L15 28 Z M25 22 L30 30 L25 28 Z" fill="#fff" stroke="#1b1b3a" stroke-width="2" stroke-linejoin="round"/><path d="M17 29 L20 37 L23 29 Z" fill="#ffa31a"/></g></svg>',blue:'<svg viewBox="0 0 40 40"><path d="M10 24 A6 6 0 0 1 11 13 A8 8 0 0 1 26 10 A7 7 0 0 1 31 24 Z" fill="#5b6bd6" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><path d="M15 17 L18 18.5 M25 17 L22 18.5" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/><path d="M21 24 L16 31 H20 L17 38 L25 28 H21 L23 24 Z" fill="#fff15a" stroke="#1b1b3a" stroke-width="1.5" stroke-linejoin="round"/></svg>',boost:'<svg viewBox="0 0 40 40"><rect x="12" y="8" width="16" height="24" rx="5" fill="#ff7a00" stroke="#1b1b3a" stroke-width="2.5"/><rect x="15" y="4" width="10" height="5" rx="2" fill="#c9d3e6" stroke="#1b1b3a" stroke-width="2"/><path d="M21 12 L15 21 H19 L17 28 L25 18 H21 Z" fill="#ffe14d" stroke="#1b1b3a" stroke-width="1.5" stroke-linejoin="round"/><path d="M15 33 L20 39 L25 33 Z" fill="#ffd34d"/></svg>',star:'<svg viewBox="0 0 40 40"><defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff7ac6"/><stop offset=".5" stop-color="#ffd34d"/><stop offset="1" stop-color="#5ee6c8"/></linearGradient></defs><path d="M20 3 L25 14.5 L37.5 15.5 L28 23.5 L31 36 L20 29.5 L9 36 L12 23.5 L2.5 15.5 L15 14.5 Z" fill="url(#sg)" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="34" cy="6" r="2" fill="#fff"/><circle cx="6" cy="31" r="1.5" fill="#fff"/></svg>',bolt:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="17" fill="#2b2f6b" stroke="#1b1b3a" stroke-width="2"/><path d="M24 4 L9 22 H18 L14 37 L31 16 H22 Z" fill="#fff15a" stroke="#1b1b3a" stroke-width="2" stroke-linejoin="round"/></svg>',fake:'<svg viewBox="0 0 40 40"><rect x="7" y="13" width="26" height="22" rx="3" fill="#ff5d8f" stroke="#1b1b3a" stroke-width="2.5"/><rect x="17.5" y="13" width="5" height="22" fill="#d62839"/><rect x="7" y="21" width="26" height="5" fill="#d62839"/><path d="M20 13 C14 4 8 9 14 13 M20 13 C26 4 32 9 26 13" fill="none" stroke="#d62839" stroke-width="3" stroke-linecap="round"/><text x="20" y="31" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="9" fill="#fff">!</text></svg>',coin:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="#ffc83d" stroke="#1b1b3a" stroke-width="2.5"/><circle cx="20" cy="20" r="10.5" fill="none" stroke="#e0a400" stroke-width="2"/><path d="M20 12 L22.4 17.2 L28 17.6 L23.8 21.2 L25.1 26.6 L20 23.7 L14.9 26.6 L16.2 21.2 L12 17.6 L17.6 17.2 Z" fill="#fff6c2"/></svg>',horn:'<svg viewBox="0 0 40 40"><path d="M6 17 h6 l12 -9 v24 l-12 -9 h-6 z" fill="#ff5d5d" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><rect x="9" y="23" width="4" height="8" rx="1.5" fill="#c9d3e6" stroke="#1b1b3a" stroke-width="2"/><path d="M29 14 Q33 20 29 26 M32.5 10 Q39 20 32.5 30" fill="none" stroke="#1b1b3a" stroke-width="2.5" stroke-linecap="round"/></svg>',bomb:'<svg viewBox="0 0 40 40"><circle cx="18" cy="24" r="12" fill="#23233a" stroke="#1b1b3a" stroke-width="2.5"/><rect x="15" y="9" width="7" height="5" rx="1.5" fill="#8a8fa8" stroke="#1b1b3a" stroke-width="2"/><path d="M20 9 Q22 4 27 5" fill="none" stroke="#c9a46a" stroke-width="2.5"/><path d="M29 2 l1.5 3 3 0.5 -2.3 2 0.6 3.2 -2.8 -1.6 -2.8 1.6 0.6 -3.2 -2.3 -2 3 -0.5 z" fill="#ffd34d"/><circle cx="13" cy="19" r="3" fill="#fff" opacity=".6"/></svg>',ink:'<svg viewBox="0 0 40 40"><path d="M20 6 C26 6 25 12 30 11 C36 10 36 17 32 19 C37 22 34 29 28 27 C28 33 22 36 18 31 C13 35 7 31 10 26 C4 25 4 18 9 17 C6 12 12 8 15 11 C15 7 17 6 20 6 Z" fill="#7b4cc9" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="34" cy="31" r="2.5" fill="#7b4cc9"/><circle cx="6" cy="9" r="2" fill="#7b4cc9"/><circle cx="16" cy="17" r="3" fill="#fff" opacity=".5"/></svg>',golden:'<svg viewBox="0 0 40 40"><rect x="12" y="8" width="16" height="24" rx="5" fill="#ffc83d" stroke="#1b1b3a" stroke-width="2.5"/><rect x="15" y="4" width="10" height="5" rx="2" fill="#fff1a8" stroke="#1b1b3a" stroke-width="2"/><path d="M21 12 L15 21 H19 L17 28 L25 18 H21 Z" fill="#fff" stroke="#1b1b3a" stroke-width="1.5" stroke-linejoin="round"/><path d="M33 8 l1 2.5 2.5 1 -2.5 1 -1 2.5 -1 -2.5 -2.5 -1 2.5 -1 z M7 26 l0.8 2 2 0.8 -2 0.8 -0.8 2 -0.8 -2 -2 -0.8 2 -0.8 z" fill="#fff"/><path d="M15 33 L20 39 L25 33 Z" fill="#ff7a00"/></svg>',ride:'<svg viewBox="0 0 40 40"><g transform="rotate(-35 20 20)"><path d="M20 3 C26 9 26 22 25 29 H15 C14 22 14 9 20 3 Z" fill="#f4f5fa" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="20" cy="15" r="3.5" fill="#4cc9f0" stroke="#1b1b3a" stroke-width="2"/><path d="M15 21 L9 30 L15 28 Z M25 21 L31 30 L25 28 Z" fill="#ff7a00" stroke="#1b1b3a" stroke-width="2" stroke-linejoin="round"/><path d="M16 30 L20 39 L24 30 Z" fill="#ffd34d"/></g></svg>',ghost:'<svg viewBox="0 0 40 40"><path d="M8 34 V18 C8 10 13 5 20 5 C27 5 32 10 32 18 V34 L28 31 L24 34 L20 31 L16 34 L12 31 Z" fill="#f4f5fa" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><ellipse cx="15.5" cy="17" rx="2.5" ry="3.5" fill="#1b1b3a"/><ellipse cx="24.5" cy="17" rx="2.5" ry="3.5" fill="#1b1b3a"/><ellipse cx="20" cy="25" rx="3" ry="2" fill="#1b1b3a"/></svg>'},Pl={banana:["Banana","drop behind"],green:["Bouncer","fires straight"],red:["Homing rocket","chases next kart"],blue:["Leader zapper","hits 1st place"],boost:["Turbo","speed burst"],star:["Star power","unstoppable"],bolt:["Lightning","shrinks everyone"],fake:["Decoy box","fake item box"],coin:["Coins","more top speed"],horn:["Air horn","blast nearby"],bomb:["Bomb","throw \xB7 explodes"],ink:["Ink splat","blinds leaders"],golden:["Golden turbo","boost spam 7s"],ride:["Rocket ride","auto-drive fast"],ghost:["Ghost","steal an item"]};function tf(s){return s+(s===1?"st":s===2?"nd":s===3?"rd":"th")}function Wx(s){if(s==null)return"--";let t=Math.floor(s/60),e=s-t*60;return t+":"+(e<10?"0":"")+e.toFixed(1)}var Ha=class{constructor(t,e){$(this,"container",t);$(this,"opts",e);$(this,"renderer");$(this,"scene",new Ds);$(this,"track");$(this,"particles",new Da);$(this,"physics");$(this,"items",null);$(this,"racers",[]);$(this,"humans",[]);$(this,"overview");$(this,"overlay");$(this,"banner");$(this,"clock",new ir(!1));$(this,"raf",0);$(this,"phase","intro");$(this,"introT",0);$(this,"countdown",0);$(this,"step",-1);$(this,"laps");$(this,"firstHumanFinishAt",-1);$(this,"elapsed",0);$(this,"disposed",!1);$(this,"finalLapMusic",!1);$(this,"music",null);$(this,"style");$(this,"gradient",Rl());$(this,"shadows",new Map);$(this,"padCooldown",new Map);$(this,"onResize",()=>{let t=this.container.clientWidth,e=this.container.clientHeight;this.renderer.setSize(t,e);let n=this.views();this.humans.forEach((i,o)=>{let r=n[o];i.human.cam.onResize(r.w,r.h),Object.assign(i.human.hud.style,{left:r.x+"px",top:e-r.y-r.h+"px",width:r.w+"px",height:r.h+"px"});let a=Math.round(Math.min(r.h*.36,r.w*.2,210)),c=Math.round(Math.min(r.w,r.h)*.03),l=this.humans.length>1?44:60;Object.assign(i.human.ink.style,{left:r.x+"px",top:e-r.y-r.h+"px",width:r.w+"px",height:r.h+"px"}),Object.assign(i.human.banner.style,{left:r.x+"px",width:r.w+"px",top:e-r.y-r.h+r.h*.26+"px",fontSize:Math.round(Math.min(r.h*.13,72))+"px"}),Object.assign(i.human.map.style,{width:a+"px",height:a+"px",left:r.x+c+"px",top:e-r.y-a-c-l+"px"})}),n[3]&&this.humans.length===3&&this.overview.onResize(n[3].w,n[3].h),this.banner.style.fontSize=(this.humans.length>2?80:120)+"px"});$(this,"loop",()=>{if(this.disposed)return;this.raf=requestAnimationFrame(this.loop);let t=Math.min(this.clock.getDelta(),.05);this.elapsed+=t,this.phase==="intro"?(this.update(t),this.introFrame(t)):this.phase==="replay"?this.replayFrame():this.phase==="podium"?this.podiumFrame(t):this.update(t),this.render()});$(this,"frames",[]);$(this,"winnerFrame",-1);$(this,"winnerId","");$(this,"finalOrder",[]);$(this,"cine",new ke(50,16/9,.1,1500));$(this,"replayAt",0);$(this,"confetti",[]);$(this,"labels",[]);$(this,"recTick",0);$(this,"podiumKarts",[]);$(this,"podiumCenter",new I);$(this,"podiumDir",{fx:0,fz:1});$(this,"mapBase",null);$(this,"mapXf",{cx:0,cz:0,k:1});(!e.autopilot||e.music)&&Ku(e.course||"meadow"),this.laps=e.laps||3;let n=Math.min(e.players.length,4)>1;this.renderer=new Ra({antialias:!n,powerPreference:"high-performance"}),this.renderer.setPixelRatio(e.quality==="high"?Math.min(window.devicePixelRatio,1.5):1),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.shadowMap.enabled=!n&&e.quality==="high",this.renderer.toneMapping=or,this.renderer.toneMappingExposure=1.05,this.renderer.setScissorTest(!0),t.appendChild(this.renderer.domElement),this.renderer.domElement.style.display="block";let i=vr(e.course).theme;this.scene.add(new nr(16777215,i.ambient));let o=new er(i.sunColor,i.sun);o.position.set(100,150,80),o.castShadow=this.renderer.shadowMap.enabled,o.shadow.mapSize.set(1024,1024);let r=160;Object.assign(o.shadow.camera,{left:-r,right:r,top:r,bottom:-r,near:10,far:400}),this.scene.add(o),this.scene.add(new Qs(i.hemiSky,i.ground,.55)),this.track=new Ia(this.scene,e.course),this.scene.add(this.particles.group),this.physics=new Fa(this.track,this.particles),this.physics.totalLaps=this.laps,e.items!==!1&&(this.items=new Ba(this.scene,this.track),this.items.onEvent=c=>this.onItemEvent(c)),this.style=$u(this.scene,this.track);let a=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());this.scene.traverse(c=>{let l=c.material;l&&l.map&&(l.map.anisotropy=a,l.map.needsUpdate=!0)}),this.overview=new Er(1),this.overview.setView("topdown"),this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;pointer-events:none;font-family:Inter,Segoe UI,Roboto,sans-serif;color:#fff",t.style.position=t.style.position||"relative",t.appendChild(this.overlay),this.banner=document.createElement("div"),this.banner.style.cssText='position:absolute;left:50%;top:42%;transform:translate(-50%,-50%);font:900 120px/1 "Space Grotesk",Inter,sans-serif;text-shadow:0 6px 0 rgba(0,0,0,.35),0 0 30px rgba(0,0,0,.4);transition:transform .15s;white-space:nowrap',this.overlay.appendChild(this.banner),this.build(),window.addEventListener("resize",this.onResize)}build(){let t=this.opts.players.slice(0,4),e=[],n=Hx[this.opts.speed||"fast"]||1;t.forEach((r,a)=>{let c=Wa(r.driver,r.topper),l=r.stats||c;e.push({id:r.id,name:r.name,isPlayer:!0,audioLead:a===0,color:c.color,accentColor:"#ffffff",helmetColor:c.color,visorColor:"#0f172a",number:a+1,...Qu(l.spd,l.acc,l.hnd,n),driftMultiplier:1.35,topper:c.topper})});let i=new Set(t.map(r=>Wa(r.driver,r.topper).id));for(let r of this.opts.cpus===!1?[]:zx){if(e.length>=Gx)break;if(i.has(r.id)||i.has(r.color.toLowerCase()))continue;let a=Qu(r.spd,r.acc,r.hnd,n);e.push({id:"cpu-"+r.id,name:r.name,isPlayer:!1,color:r.color,accentColor:r.accent,helmetColor:r.color,visorColor:"#0f172a",number:e.length+1,topSpeed:a.topSpeed*(.95+Math.random()*.04),acceleration:a.acceleration*.95,handling:a.handling,weight:a.weight,driftMultiplier:1.3,aiAggression:.9+Math.random()*.3,topper:r.topper})}e.filter(r=>!r.isPlayer).concat(e.filter(r=>r.isPlayer)).forEach((r,a)=>{let c=zu(r);c.driverHead.scale.setScalar(1.18),Cl(c.rootGroup,this.gradient),this.scene.add(c.rootGroup);let l=ju();this.scene.add(l),this.shadows.set(r.id,l);let h={config:r,position:{x:a%2?3.5:-3.5,y:.1,z:-6-a*5.5},rotation:{y:Math.PI,pitch:0,roll:0},speed:0,angularVelocity:0,steerAngle:0,isDrifting:!1,driftDirection:0,driftTime:0,driftLevel:0,boostTimer:0,boostMultiplier:1,currentLap:1,lapDistance:0,totalDistance:0,splineProgress:0,checkpointIndex:0,lapTimes:[],currentLapTime:0,bestLapTime:null,totalRaceTime:0,rank:a+1,isFinished:!1,invulnerableTimer:0,spinOutTimer:0,shrinkTimer:0,starTimer:0},f={state:h,handles:c};if(r.isPlayer){let u=document.createElement("div");u.style.cssText="position:absolute;box-sizing:border-box;padding:2.2vh 2vw;display:flex;flex-direction:column;justify-content:space-between",this.overlay.appendChild(u);let d=document.createElement("canvas");d.width=d.height=256,d.style.cssText="position:absolute;pointer-events:none;filter:drop-shadow(0 4px 8px rgba(0,0,0,.45))",this.overlay.appendChild(d);let p=document.createElement("div");p.style.cssText="position:absolute;pointer-events:none;opacity:0;overflow:hidden",this.overlay.appendChild(p);let _=document.createElement("div");_.style.cssText='position:absolute;pointer-events:none;text-align:center;font:italic 900 64px/1 "Space Grotesk",Inter,sans-serif;color:#fff;-webkit-text-stroke:5px #1b1b3a;paint-order:stroke fill;opacity:0;white-space:nowrap',this.overlay.appendChild(_),f.human={idx:this.humans.length,cam:new Er(1),pad:{steer:0,gas:!1,brake:!1,drift:!1,item:!1},itemWas:!1,gasAt:-1,hud:u,map:d,banner:_,ink:p,finishedShown:!1},this.humans.push(f)}else f.ai=new Di(this.track,h);this.racers.push(f)}),this.onResize()}setInput(t,e){let n=this.humans.find(i=>i.state.config.id===t);!n||!n.human||(e.gas&&!n.human.pad.gas&&(n.human.gasAt=this.countdown),Object.assign(n.human.pad,e))}hudInfo(){return this.humans.map(t=>{let e=this.items?this.items.held.get(t.state.config.id):void 0;return{p:t.state.config.id,rank:t.state.rank,of:this.racers.length,lap:Math.min(t.state.currentLap,this.laps),item:e?e.kind||"rolling":null,n:e&&e.kind?e.count:0,done:t.state.isFinished}})}start(){se.init(),this.clock.start(),this.loop()}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),se.stopEngine(),this.music?.stop(),window.removeEventListener("resize",this.onResize),this.renderer.dispose(),this.container.innerHTML=""}views(){let t=this.container.clientWidth,e=this.container.clientHeight,n=this.humans.length;return n<=1?[{x:0,y:0,w:t,h:e}]:n===2?[{x:0,y:e/2,w:t,h:e/2},{x:0,y:0,w:t,h:e/2}]:[{x:0,y:e/2,w:t/2,h:e/2},{x:t/2,y:e/2,w:t/2,h:e/2},{x:0,y:0,w:t/2,h:e/2},{x:t/2,y:0,w:t/2,h:e/2}]}update(t){this.track.update(this.elapsed,t),this.tickCountdown(t);let e=this.racers.map(r=>r.state),n=new Set,i={throttle:!1,brake:!1,steerLeft:!1,steerRight:!1,drift:!1,respawn:!1,cameraToggle:!1};for(let r of this.racers){let a=i;if(this.phase!=="countdown"&&this.phase!=="intro")if((r.state.rideTimer||0)>0)r.ai||(r.ai=new Di(this.track,r.state)),a=r.ai.update(t,e);else if(r.human&&this.opts.autopilot)r.ai||(r.ai=new Di(this.track,r.state)),a=r.ai.update(t,e);else if(r.human){let l=r.human.pad;r.state.isFinished?a=r.ai?r.ai.update(t,e):{...i,throttle:!0}:a={throttle:l.gas,brake:l.brake,steerLeft:!1,steerRight:!1,steer:l.steer,drift:l.drift,respawn:!1,cameraToggle:!1},this.items&&this.phase==="racing"&&(l.item&&!r.human.itemWas&&this.items.press(r.state.config.id,e,l.aim),!l.item&&r.human.itemWas&&this.items.release(r.state.config.id,e,l.aim)),r.human.itemWas=l.item}else r.ai&&(a=r.ai.update(t,e),(r.state.inkTimer||0)>0&&(a={...a,steer:(a.steer||0)+Math.sin(this.elapsed*3+r.state.position.x)*.5}));let c=r.state.currentLap;if(this.physics.updateRacer(r.state,a,r.handles,t,e),r.state.starTimer&&r.state.starTimer>0){let l=this.elapsed*2%1;r.handles.bodyGroup.traverse(h=>{let f=h.material;f&&f.emissive&&f.emissive.setHSL(l,1,.45)})}else r.state.starTimer!==void 0&&r.state.starTimer<=0&&r.state.starTimer>-1&&(r.handles.bodyGroup.traverse(l=>{let h=l.material;h&&h.emissive&&h.emissive.setRGB(0,0,0)}),r.state.starTimer=-1);this.phase==="racing"&&!r.state.isFinished&&(r.state.currentLapTime+=t,r.state.totalRaceTime+=t,r.state.currentLap!==c&&r.state.currentLap<=this.laps&&(this.opts.onEvent?.({type:"lap",racer:r.state.config.id,lap:r.state.currentLap,final:r.state.currentLap===this.laps}),r.human&&this.say(r,r.state.currentLap===this.laps?"FINAL LAP!":"LAP "+r.state.currentLap,r.state.currentLap===this.laps?"#ffc83d":"#ffffff",1500),r.human&&r.state.currentLap===this.laps&&!this.finalLapMusic&&(this.finalLapMusic=!0,this.music?.finalLap())),r.state.currentLap>this.laps&&(r.state.isFinished=!0,r.state.finishRank=this.racers.filter(l=>l.state.isFinished).length,r.state.finishRank===1&&(this.winnerFrame=this.frames.length,this.winnerId=r.state.config.id),r.human&&(r.ai||(r.ai=new Di(this.track,r.state)),this.firstHumanFinishAt<0&&(this.firstHumanFinishAt=this.elapsed),this.opts.onEvent?.({type:"finish",racer:r.state.config.id,rank:r.state.finishRank}),this.say(r,r.state.finishRank===1?"1ST PLACE!":"FINISH!",r.state.finishRank===1?"#ffc83d":"#ffffff",2200),se.playFinishFanfare())))}let o=[...this.racers].sort((r,a)=>{let c=r.state.finishRank||99,l=a.state.finishRank||99;return c!==l?c-l:a.state.totalDistance-r.state.totalDistance});o.forEach((r,a)=>{r.state.rank=a+1}),this.phase==="racing"&&(this.detectMoments(),this.record()),this.items&&this.phase!=="countdown"&&this.phase!=="intro"&&this.items.update(t,this.elapsed,e,n,(r,a)=>{let c=this.racers.find(l=>l.state.config.id===r);c&&c.handles.rootGroup.scale.setScalar(Le.lerp(c.handles.rootGroup.scale.x,a,t*6))}),this.style.update(this.elapsed);for(let r of this.racers){let a=(r.state.ghostTimer||0)>0;if(a!==!!r.handles.rootGroup.userData.ghost&&(r.handles.rootGroup.userData.ghost=a,r.handles.rootGroup.traverse(h=>{let f=h.material;f&&(f.transparent=a||f.transparent,f.opacity=a?.25:1)})),r.human){let h=(r.state.inkTimer||0)>0,f=r.human.ink;h&&f.style.opacity!=="1"?(f.innerHTML=qx(),f.style.transition="opacity .1s",f.style.opacity="1",Yx(f)):!h&&f.style.opacity==="1"&&(f.style.transition="opacity .9s",f.style.opacity="0")}let c=this.shadows.get(r.state.config.id);c&&(c.position.set(r.state.position.x,r.state.position.y+.06,r.state.position.z),c.rotation.z=r.state.rotation.y,c.scale.setScalar(r.handles.rootGroup.scale.x));let l=(this.padCooldown.get(r.state.config.id)||0)-t;if(this.padCooldown.set(r.state.config.id,l),l<=0&&this.phase==="racing")for(let h of this.style.pads){let f=r.state.position.x-h.x,u=r.state.position.z-h.z;if(f*f+u*u<7){r.state.boostTimer=Math.max(r.state.boostTimer,1.1),r.state.boostMultiplier=Math.max(r.state.boostMultiplier,1.45),r.state.speed=Math.max(r.state.speed,r.state.config.topSpeed*1.15),this.padCooldown.set(r.state.config.id,.8),r.human&&r.state.config.audioLead&&se.playBoostSound();break}}}this.particles.update(t);for(let r of this.humans)r.human.cam.update(r.state,t);this.humans.length===3&&this.overview.update(o[0].state,t),this.drawHud(),this.drawMaps(),this.phase==="racing"&&(this.humans.every(a=>a.state.isFinished)||this.firstHumanFinishAt>=0&&this.elapsed-this.firstHumanFinishAt>25)&&this.finish(o)}introFrame(t){if(this.introT===0){this.hideHud(!0);let d=vr(this.opts.course);this.banner.innerHTML='<div style="font-size:.85em">'+za(d.name.toUpperCase())+'</div><div style="font-size:.35em;letter-spacing:.08em;color:#ffc83d;margin-top:.3em">'+this.laps+" LAPS \xB7 "+this.racers.length+" KARTS</div>",this.banner.style.color="#ffffff",this.banner.style.top="18%"}this.introT+=t;let n=this.track.trackPoints,i=1e9,o=-1e9,r=1e9,a=-1e9;for(let d of n)i=Math.min(i,d.x),o=Math.max(o,d.x),r=Math.min(r,d.z),a=Math.max(a,d.z);let c=(i+o)/2,l=(r+a)/2,h=Math.max(o-i,a-r)*.75,f=Math.min(1,this.introT/5.5),u=this.humans[0]||this.racers[0];if(f<.75){let d=f/.75,p=-Math.PI/2+d*Math.PI*1.1;this.cine.position.set(c+Math.cos(p)*h,150-d*70,l+Math.sin(p)*h),this.cine.lookAt(c,0,l)}else{let d=(f-.75)/.25,p=d*d*(3-2*d),_=u.state,g=_.rotation.y,m=new I(c+Math.cos(-Math.PI/2+Math.PI*1.1)*h,80,l+Math.sin(-Math.PI/2+Math.PI*1.1)*h),y=new I(_.position.x-Math.sin(g)*9,_.position.y+4,_.position.z-Math.cos(g)*9);this.cine.position.lerpVectors(m,y,p);let S=new I(c,0,l).lerp(new I(_.position.x+Math.sin(g)*10,_.position.y,_.position.z+Math.cos(g)*10),p);this.cine.lookAt(S)}this.introT>=5.5&&(this.phase="countdown",this.hideHud(!1),this.banner.innerHTML="",this.banner.style.top="42%")}tickCountdown(t){if(this.phase==="intro"||this.phase!=="countdown"&&this.countdown>5)return;this.countdown+=t;let e=this.countdown,n=e<1?0:e<2?1:e<3?2:e<4?3:e<5?4:5;if(n===this.step)return;this.step=n;let i=["","3","2","1","GO!",""][n];if(this.banner.textContent=i,this.banner.style.color=n===4?"#5ee6c8":"#ffffff",this.banner.style.transform="translate(-50%,-50%) scale(1.25)",setTimeout(()=>{this.banner.style.transform="translate(-50%,-50%) scale(1)"},120),n>=1&&n<=3&&(se.playCountdownBeep(!1),this.track.setStartingLights(n)),n===4){se.playCountdownBeep(!0),this.track.setStartingLights(4),this.phase="racing",(!this.opts.autopilot||this.opts.music)&&(this.music=new ka(this.opts.course||"meadow"),this.music.start());for(let o of this.humans){let r=o.human.gasAt;o.human.pad.gas&&r>=3.5&&r<4.05&&this.physics.triggerStartBoost(o.state)}}n===5&&this.track.setStartingLights(0)}finish(t){this.phase="done";let e=t.map((n,i)=>({id:n.state.config.id,name:n.state.config.name,color:n.state.config.color,human:!!n.human,rank:i+1,time:n.state.isFinished?n.state.totalRaceTime:null,bestLap:n.state.bestLapTime}));this.banner.textContent="FINISH!",this.banner.style.color="#ffc83d",this.finalOrder=t,this.music?.stop(),se.stopEngine(),setTimeout(()=>this.startReplay(),1800),setTimeout(()=>this.startPodium(),8300),setTimeout(()=>{this.phase="done",this.opts.onFinish?.(e)},15300)}record(){if(++this.recTick%2)return;let t=new Float32Array(this.racers.length*5);this.racers.forEach((e,n)=>{let i=e.state;t.set([i.position.x,i.position.y,i.position.z,i.rotation.y+(i.slideAngle||0)*.6,i.rotation.roll],n*5)}),this.frames.push(t)}hideHud(t){for(let e of this.humans)e.human.hud.style.display=e.human.map.style.display=e.human.banner.style.display=t?"none":""}startReplay(){this.disposed||this.winnerFrame<0||(this.phase="replay",this.replayAt=Math.max(0,this.winnerFrame-120),this.hideHud(!0),this.banner.innerHTML='<span style="font-size:.35em;letter-spacing:.1em;color:#ff5d5d">\u25CF REPLAY</span>',this.banner.style.top="8%",this.banner.style.left="10%")}replayFrame(){let t=Math.min(this.frames.length-1,this.winnerFrame+45),e=Math.min(t,Math.floor(this.replayAt)),n=this.frames[e];if(!n)return;this.racers.forEach((h,f)=>{let u=h.handles.rootGroup;u.position.set(n[f*5],n[f*5+1],n[f*5+2]),u.rotation.y=n[f*5+3],u.rotation.z=n[f*5+4];let d=this.shadows.get(h.state.config.id);d&&(d.position.set(n[f*5],n[f*5+1]+.06,n[f*5+2]),d.rotation.z=n[f*5+3])});let i=this.racers.findIndex(h=>h.state.config.id===this.winnerId),o=n[i*5],r=n[i*5+1],a=n[i*5+2],c=n[i*5+3],l=(e-(this.winnerFrame-120))/165;if(l<.5){let f=3-l*6;this.cine.position.set(o+Math.cos(c)*7-Math.sin(c)*f,r+1.4,a-Math.sin(c)*7-Math.cos(c)*f)}else{let h=this.track.trackPoints,f=h[h.length-6];this.cine.position.set(f.x-f.normalX*15,f.y+3.5,f.z-f.normalZ*15)}this.cine.lookAt(o,r+.8,a),this.replayAt+=.75}startPodium(){if(this.disposed)return;this.phase="podium",se.playFinishFanfare();let t=this.finalOrder.slice(0,3),e=this.track.trackPoints[Math.floor(this.track.trackPoints.length*.06)],n=new I(e.x,e.y,e.z),i=Math.atan2(e.tangentX,e.tangentZ)+Math.PI,o=Math.sin(i),r=Math.cos(i),a=Math.cos(i),c=-Math.sin(i);this.racers.forEach(u=>{if(!t.includes(u)){u.handles.rootGroup.visible=!1;let d=this.shadows.get(u.state.config.id);d&&(d.visible=!1)}});let l=[[0,2.4,"#ffc83d"],[-4.6,1.6,"#c9d3e6"],[4.6,1,"#e08a4c"]];this.podiumKarts=[],t.forEach((u,d)=>{let[p,_,g]=l[d],m=new et(new he(4.2,_,4.2),new Dt({color:g,roughness:.4}));m.position.set(n.x+a*p,n.y+_/2,n.z+c*p),m.rotation.y=i;let y=document.createElement("canvas");y.width=y.height=128;let S=y.getContext("2d");S.fillStyle="#1b1b3a",S.font="italic 900 96px sans-serif",S.textAlign="center",S.textBaseline="middle",S.fillText(String(d+1),64,70);let b=new et(new Ge(2,2),new Ee({map:new Ie(y),transparent:!0}));b.position.set(m.position.x+o*2.12,n.y+_/2,m.position.z+r*2.12),b.rotation.y=i,this.scene.add(m,b);let A=u.handles.rootGroup;A.visible=!0,A.position.set(m.position.x,n.y+_,m.position.z),A.rotation.set(0,i,0),this.podiumKarts.push({r:u,y:n.y+_,i:d});let M=document.createElement("div");M.style.cssText='position:absolute;transform:translate(-50%,-100%);text-align:center;font:italic 900 34px "Space Grotesk",Inter,sans-serif;color:#fff;-webkit-text-stroke:4px #1b1b3a;paint-order:stroke fill;white-space:nowrap',M.innerHTML='<span style="color:'+["#ffc83d","#dfe7ff","#f0a46b"][d]+'">'+["1ST","2ND","3RD"][d]+"</span> "+za(u.state.config.name),this.overlay.appendChild(M),this.labels.push(M)}),this.cine.position.set(n.x+o*12,n.y+4.5,n.z+r*12),this.cine.lookAt(n.x,n.y+2,n.z),this.podiumCenter=n,this.podiumDir={fx:o,fz:r};let h=[16735631,16762941,5032432,6219464,10185727,16777215];for(let u=0;u<160;u++){let d=new et(new Ge(.25,.4),new Ee({color:h[u%h.length],side:je}));d.position.set(n.x+(Math.random()-.5)*18,n.y+6+Math.random()*10,n.z+(Math.random()-.5)*18),d.userData.v=1.5+Math.random()*2,this.scene.add(d),this.confetti.push(d)}let f=t[0];this.banner.innerHTML=za(f.state.config.name)+" WINS!",this.banner.style.color="#ffc83d",this.banner.style.top="9%",this.banner.style.left="50%",this.banner.style.fontSize="72px"}podiumFrame(t){let e=this.elapsed;for(let c of this.podiumKarts){let l=c.r.handles.rootGroup,h=c.i===0?Math.abs(Math.sin(e*5))*.9:Math.abs(Math.sin(e*4+c.i))*.4;l.position.y=c.y+h,c.i===0&&(l.rotation.y+=t*(Math.sin(e*.7)>.6?6:0)),c.r.handles.driverHead.rotation.z=Math.sin(e*8+c.i)*.25;let f=l.position.clone();f.y+=3.2,f.project(this.cine);let u=this.container.clientWidth,d=this.container.clientHeight,p=this.labels[c.i];p&&(p.style.left=(f.x*.5+.5)*u+"px",p.style.top=(-f.y*.5+.5)*d+"px")}for(let c of this.confetti)c.position.y-=c.userData.v*t,c.rotation.x+=t*4,c.rotation.y+=t*3,c.position.y<this.podiumCenter.y&&(c.position.y+=16);let n=Math.sin(e*.3)*.35,{fx:i,fz:o}=this.podiumDir,r=i*Math.cos(n)-o*Math.sin(n),a=i*Math.sin(n)+o*Math.cos(n);this.cine.position.set(this.podiumCenter.x+r*12,this.podiumCenter.y+4.5,this.podiumCenter.z+a*12),this.cine.lookAt(this.podiumCenter.x,this.podiumCenter.y+2.2,this.podiumCenter.z)}onItemEvent(t){this.opts.onEvent?.(t);let e=this.humans.find(r=>r.state.config.id===t.racer),n=t.by?this.humans.find(r=>r.state.config.id===t.by):void 0,i=r=>r&&r.state.config.topper,o=r=>!!r&&!r.state.isFinished;if(t.type==="hit")e&&(this.say(e,t.item==="blue"?"ZAPPED!":"HIT!","#ff5d5d"),o(e)&&Ze.ouch(i(e))),n&&n!==e&&(this.say(n,"NICE HIT!","#5ee6c8"),setTimeout(()=>Ze.cheer(i(n)),e?450:0));else if(t.type==="use"&&o(e)&&["banana","fake","green","red","blue","bomb"].includes(t.item||""))Ze.throwItem(t.item,t.aim==="back"||(t.item==="banana"||t.item==="fake")&&t.aim!=="front");else if(t.type==="pickup"&&o(e))Ze.pickup();else if(t.type==="block"&&e)this.say(e,"BLOCKED!","#8fb4ff",900);else if(t.type==="bolt")for(let r of this.humans)r!==e&&!((r.state.starTimer||0)>0)&&this.say(r,"SHRUNK!","#fff15a");else t.type==="use"&&e&&t.item==="star"?(this.say(e,"STAR POWER!","#ffd34d"),Ze.star()):t.type==="use"&&e&&t.item==="ride"?this.say(e,"ROCKET RIDE!","#ff7a00"):t.type==="use"&&e&&t.item==="ghost"?this.say(e,"GHOST!","#e8ecff"):t.type==="use"&&e&&t.item==="coin"?this.say(e,"+2 COINS","#ffc83d",700):t.type==="use"&&e&&t.item==="golden"?this.say(e,"GOLDEN TURBO!","#ffc83d",700):t.type==="ink"&&e?(this.say(e,"SPLAT!","#c9a8ff"),Ze.splat()):t.type==="steal"?((e||n)&&Ze.steal(),e&&this.say(e,"STOLEN!","#ff5d5d"),n&&n!==e&&this.say(n,"GOT IT!","#5ee6c8")):t.type==="horn"&&e?(this.say(e,"HONK!","#ffffff",700),Ze.horn()):t.type==="boom"&&Ze.boom()}render(){if(this.phase==="replay"||this.phase==="podium"||this.phase==="intro"){let e=this.container.clientWidth,n=this.container.clientHeight;this.cine.aspect=e/n,this.cine.updateProjectionMatrix(),this.renderer.setViewport(0,0,e,n),this.renderer.setScissor(0,0,e,n),this.renderer.render(this.scene,this.cine);return}let t=this.views();if(this.humans.forEach((e,n)=>{let i=t[n];this.renderer.setViewport(i.x,i.y,i.w,i.h),this.renderer.setScissor(i.x,i.y,i.w,i.h),this.renderer.render(this.scene,e.human.cam.camera)}),this.humans.length===3){let e=t[3];this.renderer.setViewport(e.x,e.y,e.w,e.h),this.renderer.setScissor(e.x,e.y,e.w,e.h),this.renderer.render(this.scene,this.overview.camera)}}say(t,e,n="#ffffff",i=1100){let o=t.human.banner;o.textContent=e,o.style.color=n,o.animate([{opacity:0,transform:"scale(2.2) rotate(-6deg)"},{opacity:1,transform:"scale(1) rotate(-4deg)",offset:.15},{opacity:1,transform:"scale(1.05) rotate(-4deg)",offset:.75},{opacity:0,transform:"scale(0.9) translateY(-20px) rotate(-4deg)"}],{duration:i,easing:"cubic-bezier(.2,.9,.3,1.2)",fill:"forwards"})}emit(t){this.opts.onEvent?.(t)}detectMoments(){for(let t of this.humans){let e=t.human,n=t.state,i=n.config.id;if(n.isFinished)continue;if(e.rankCalm=(e.rankCalm||0)-1,e.lastRank!==void 0&&n.rank<e.lastRank&&e.rankCalm<=0&&(Ze.overtake(),this.say(t,n.rank===1?"TAKE THE LEAD!":"OVERTAKE!","#5ee6c8"),this.emit({type:"overtake",racer:i,rank:n.rank}),e.rankCalm=45),e.lastRank=n.rank,n.bumpedAt&&n.bumpedAt!==e.lastBump&&(e.lastBump=n.bumpedAt,this.emit({type:"bump",racer:i})),n.isDrifting&&n.driftLevel>(e.driftLvl||0)&&Ze.driftLevel(n.driftLevel),n.isDrifting&&(e.driftLvl=n.driftLevel),e.wasDrifting&&!n.isDrifting&&(e.driftLvl||0)>0){let r=e.driftLvl||1;this.say(t,r===3?"ULTRA BOOST!":r===2?"SUPER BOOST!":"BOOST!",r===3?"#c084fc":r===2?"#fb923c":"#38bdf8",800),this.emit({type:"mtboost",racer:i,level:r}),e.driftLvl=0}n.isDrifting&&n.driftLevel>(e.driftLvl===void 0?0:-1),e.wasDrifting=n.isDrifting;let o=this.track.onShortcut(n.position.x,n.position.z)!==null&&this.track.getClosestTrackPoint(n.position.x,n.position.z).distanceToCenter>this.track.roadWidth/2+.5;o&&!e.onDirt&&this.say(t,n.boostTimer>0?"SHORTCUT!":"DIRT! BOOST THROUGH","#ffc83d",900),e.onDirt=o}}toMap(t,e){return[128+(t-this.mapXf.cx)*this.mapXf.k,128+(e-this.mapXf.cz)*this.mapXf.k]}buildMapBase(){let t=this.track.trackPoints,e=1e9,n=-1e9,i=1e9,o=-1e9;for(let d of t)e=Math.min(e,d.x),n=Math.max(n,d.x),i=Math.min(i,d.z),o=Math.max(o,d.z);this.mapXf={cx:(e+n)/2,cz:(i+o)/2,k:220/Math.max(n-e,o-i)};let r=document.createElement("canvas");r.width=r.height=256;let a=r.getContext("2d"),c=()=>{a.beginPath(),t.forEach((d,p)=>{let[_,g]=this.toMap(d.x,d.z);p?a.lineTo(_,g):a.moveTo(_,g)}),a.closePath()};a.lineJoin="round",a.lineCap="round",c(),a.strokeStyle="#1b1b3a",a.lineWidth=22,a.stroke(),c(),a.strokeStyle="#ffffff",a.lineWidth=15,a.stroke(),c(),a.strokeStyle="#c9d3e6",a.lineWidth=9,a.stroke();let l=t[0],[h,f]=this.toMap(l.x,l.z),u=Math.atan2(l.normalZ,l.normalX);a.save(),a.translate(h,f),a.rotate(u);for(let d=-3;d<3;d++)for(let p=0;p<2;p++)a.fillStyle=(d+p)%2?"#1b1b3a":"#ffffff",a.fillRect(d*3,p*3-3,3,3);a.restore(),this.mapBase=r}drawMaps(){this.mapBase||this.buildMapBase();let t=.5+.5*Math.sin(this.elapsed*6),e=[...this.racers].sort((n,i)=>(n.human?1:0)-(i.human?1:0)||i.state.rank-n.state.rank);for(let n of this.humans){let i=n.human.map.getContext("2d");i.clearRect(0,0,256,256),i.drawImage(this.mapBase,0,0);for(let c of e){if(c===n)continue;let[l,h]=this.toMap(c.state.position.x,c.state.position.z),f=c.human?9:6.5;i.beginPath(),i.arc(l,h,f,0,Math.PI*2),i.fillStyle=c.state.config.color,i.fill(),i.lineWidth=c.human?3.5:2.5,i.strokeStyle=c.human?"#ffffff":"#1b1b3a",i.stroke()}let[o,r]=this.toMap(n.state.position.x,n.state.position.z),a=n.state.rotation.y;i.beginPath(),i.arc(o,r,15+t*5,0,Math.PI*2),i.strokeStyle="rgba(255,200,61,"+(.9-t*.6)+")",i.lineWidth=4,i.stroke(),i.save(),i.translate(o,r),i.rotate(Math.atan2(Math.cos(a),Math.sin(a))),i.beginPath(),i.moveTo(21,0),i.lineTo(9,-8),i.lineTo(9,8),i.closePath(),i.fillStyle="#ffc83d",i.fill(),i.lineWidth=2.5,i.strokeStyle="#1b1b3a",i.stroke(),i.restore(),i.beginPath(),i.arc(o,r,11,0,Math.PI*2),i.fillStyle=n.state.config.color,i.fill(),i.lineWidth=4,i.strokeStyle="#ffffff",i.stroke(),i.beginPath(),i.arc(o,r,13.5,0,Math.PI*2),i.lineWidth=2,i.strokeStyle="#1b1b3a",i.stroke()}}drawHud(){let t=this.humans.length>1;for(let e of this.humans){let n=e.state,i=this.items?this.items.held.get(n.config.id):void 0,o=i?Vx[i.shown]:"",r=Math.min(n.currentLap,this.laps),a=r===this.laps&&!n.isFinished&&this.phase==="racing",c=n.isDrifting?["#ffffff","#38bdf8","#fb923c","#c084fc"][n.driftLevel]:"transparent",l=t?64:104,h=n.rank===1?"linear-gradient(#fff6a8,#ffc21a 55%,#e88a00)":n.rank===2?"linear-gradient(#ffffff,#c9d3e6 60%,#8e9bb5)":n.rank===3?"linear-gradient(#ffd9b3,#e08a4c 60%,#a85a2a)":"linear-gradient(#ffffff,#dfe7ff)",f='<div style="display:flex;justify-content:space-between;align-items:flex-start"><div style="width:'+(t?70:100)+"px;height:"+(t?70:100)+"px;border-radius:22px;background:radial-gradient(circle at 50% 40%,#3a4a8a,#141a3a);border:5px solid #fff;box-shadow:0 0 0 4px "+(i&&!i.kind?"#ffc83d":"#1b1b3a")+',0 6px 14px rgba(0,0,0,.45);padding:10px;box-sizing:border-box;position:relative">'+o+(i&&i.kind&&Pl[i.kind]?'<div style="position:absolute;left:0;top:100%;margin-top:'+(t?8:12)+'px;white-space:nowrap;text-shadow:0 2px 4px rgba(0,0,0,.8)"><div style="font:900 '+(t?15:20)+'px Inter,sans-serif;color:#fff">'+Pl[i.kind][0]+'</div><div style="font:700 '+(t?12:15)+'px Inter,sans-serif;color:#ffc83d">'+Pl[i.kind][1]+"</div></div>":"")+(i&&i.kind&&i.count>1?'<span style="position:absolute;right:-12px;bottom:-12px;font:italic 900 '+(t?20:28)+`px 'Space Grotesk',Inter,sans-serif;color:#fff;-webkit-text-stroke:3px #1b1b3a;paint-order:stroke fill">\xD7`+i.count+"</span>":"")+'</div><div style="text-align:right;text-shadow:0 2px 6px rgba(0,0,0,.6)"><div style="font:italic 900 '+(t?24:36)+"px 'Space Grotesk',Inter,sans-serif;color:"+(a?"#ffc83d":"#fff")+";-webkit-text-stroke:"+(t?2:3)+'px #1b1b3a;paint-order:stroke fill;letter-spacing:1px">'+(n.isFinished?"FINISH!":a?"FINAL LAP!":"LAP "+r+"/"+this.laps)+'</div><div style="font:600 '+(t?14:18)+'px Inter,sans-serif;opacity:.9">'+Wx(n.totalRaceTime)+'</div></div></div><div style="display:flex;justify-content:space-between;align-items:flex-end"><div style="display:flex;align-items:center;gap:10px;background:rgba(14,16,32,.6);border-radius:999px;padding:6px 14px 6px 6px"><span style="width:'+(t?22:30)+"px;height:"+(t?22:30)+"px;border-radius:50%;background:"+n.config.color+";box-shadow:0 0 0 3px "+c+'"></span><span style="font:700 '+(t?16:22)+'px Inter,sans-serif">'+za(n.config.name)+'</span><span style="display:inline-flex;align-items:center;gap:4px;font:800 '+(t?15:20)+'px Inter,sans-serif;color:#ffc83d"><span style="width:'+(t?14:18)+"px;height:"+(t?14:18)+'px;border-radius:50%;background:#ffc83d;border:2px solid #1b1b3a;box-sizing:border-box"></span>'+(n.coins||0)+'</span></div><div style="position:relative;font:italic 900 '+l+`px/0.9 'Space Grotesk',Inter,sans-serif;transform:skewX(-6deg)"><span style="position:absolute;inset:0;-webkit-text-stroke:`+(t?8:12)+'px #1b1b3a;color:#1b1b3a">'+tf(n.rank)+'</span><span style="position:relative;background:'+h+';-webkit-background-clip:text;background-clip:text;color:transparent">'+tf(n.rank)+"</span></div></div>";e.human.hud.innerHTML!==f&&(e.human.hud.innerHTML=f)}}};function Xx(s,t,e){let i=[];for(let r=0;r<22;r++){let a=r/22*Math.PI*2,c=Math.random()<.28?1.35+Math.random()*.55:.78+Math.random()*.28;i.push([s+Math.cos(a)*e*c,t+Math.sin(a)*e*c])}let o="";for(let r=0;r<22;r++){let a=i[(r-1+22)%22],c=i[r],l=i[(r+1)%22],h=i[(r+2)%22];r===0&&(o+="M"+c[0].toFixed(1)+" "+c[1].toFixed(1));let f=c[0]+(l[0]-a[0])/6,u=c[1]+(l[1]-a[1])/6,d=l[0]-(h[0]-c[0])/6,p=l[1]-(h[1]-c[1])/6;o+="C"+f.toFixed(1)+" "+u.toFixed(1)+" "+d.toFixed(1)+" "+p.toFixed(1)+" "+l[0].toFixed(1)+" "+l[1].toFixed(1)}return o+"Z"}function qx(){let s="";return[[28,38,30],[64,48,36],[46,66,24],[78,26,20],[16,70,18]].forEach(([e,n,i],o)=>{let r=e+(Math.random()-.5)*12,a=n+(Math.random()-.5)*12,c=i*(.85+Math.random()*.35),l="ink"+Math.random().toString(36).slice(2,7),h="";for(let u=0;u<7;u++){let d=Math.random()*Math.PI*2,p=58+Math.random()*30,_=2.5+Math.random()*5;h+='<circle cx="'+(100+Math.cos(d)*p).toFixed(1)+'" cy="'+(100+Math.sin(d)*p).toFixed(1)+'" r="'+_.toFixed(1)+'"/>'}let f="";for(let u=0;u<3;u++){let d=70+Math.random()*60,p=5+Math.random()*6,_=30+Math.random()*60;f+='<g class="drip" style="transform-origin:'+d+'px 120px"><rect x="'+(d-p/2).toFixed(1)+'" y="110" width="'+p.toFixed(1)+'" height="'+_.toFixed(1)+'" rx="'+(p/2).toFixed(1)+'"/><circle cx="'+d.toFixed(1)+'" cy="'+(110+_).toFixed(1)+'" r="'+(p*.8).toFixed(1)+'"/></g>'}s+='<svg class="splat" viewBox="0 0 200 240" style="position:absolute;left:'+r.toFixed(1)+"%;top:"+a.toFixed(1)+"%;width:"+c.toFixed(1)+"%;transform:translate(-50%,-42%) rotate("+Math.round(Math.random()*360)+'deg);filter:drop-shadow(0 6px 8px rgba(0,0,0,.45));opacity:0" data-k="'+o+'"><defs><radialGradient id="'+l+'" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#5b34a3"/><stop offset=".55" stop-color="#34196b"/><stop offset="1" stop-color="#1c0c3f"/></radialGradient></defs><g fill="url(#'+l+')">'+f+'<path d="'+Xx(100,100,52)+'"/>'+h+'</g><ellipse cx="82" cy="76" rx="20" ry="11" fill="#fff" opacity=".22" transform="rotate(-25 82 76)"/><circle cx="104" cy="66" r="5" fill="#fff" opacity=".3"/></svg>'}),s}function Yx(s){s.querySelectorAll("svg.splat").forEach(t=>{let e=Number(t.getAttribute("data-k"))||0,n=t.style.transform;t.animate([{opacity:0,transform:n+" scale(0.2)"},{opacity:1,transform:n+" scale(1.18)",offset:.55},{opacity:1,transform:n+" scale(1)"}],{duration:260,delay:e*110,easing:"cubic-bezier(.2,1.4,.4,1)",fill:"forwards"}),t.querySelectorAll("g.drip").forEach(i=>{i.animate([{transform:"scaleY(0.05)"},{transform:"scaleY(1)"}],{duration:2600,delay:400+e*110,easing:"ease-in",fill:"forwards"})})})}function za(s){return s.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}var Zx=()=>se.init();["pointerdown","keydown","click","touchstart"].forEach(s=>document.addEventListener(s,Zx,{capture:!0}));function Jx(s,t){t.audioContext&&se.adopt(t.audioContext);let e=new Ha(s,t);return e.start(),window.CouchKart.current=e,e}function Kx(){try{let s=document.createElement("canvas");return!!(s.getContext("webgl2")||s.getContext("webgl"))}catch{return!1}}window.CouchKart={start:Jx,supported:Kx,version:1,soundOn:()=>se.running()};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
