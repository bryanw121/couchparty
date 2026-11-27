"use strict";(()=>{var Ku=Object.defineProperty;var $u=(s,e,t)=>e in s?Ku(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var $=(s,e,t)=>$u(s,typeof e!="symbol"?e+"":e,t);var ih=0,Mc=1,sh=2;var tr=1,rh=2,as=3,zn=0,Wt=1,kt=2,In=0,Mi=1,nr=2,bc=3,Sc=4,oh=5;var ti=100,ah=101,ch=102,lh=103,hh=104,uh=200,fh=201,dh=202,ph=203,Zr=204,Jr=205,mh=206,gh=207,xh=208,_h=209,yh=210,vh=211,Mh=212,bh=213,Sh=214,Kr=0,$r=1,jr=2,bi=3,Qr=4,eo=5,to=6,no=7,Ec=0,Eh=1,Th=2,xn=0,Tc=1,wc=2,Ac=3,ir=4,Rc=5,Cc=6,Pc=7;var Ic=300,li=301,Ri=302,Io=303,Lo=304,sr=306,jt=1e3,Tn=1001,io=1002,Ct=1003,wh=1004;var rr=1005;var zt=1006,Do=1007;var hi=1008;var Qt=1009,Lc=1010,Dc=1011,cs=1012,No=1013,_n=1014,yn=1015,Ln=1016,Uo=1017,Fo=1018,ls=1020,Nc=35902,Uc=35899,Fc=1021,Bc=1022,hn=1023,An=1026,ui=1027,or=1028,Bo=1029,fi=1030,Oo=1031;var Ho=1033,ar=33776,cr=33777,lr=33778,hr=33779,ko=35840,zo=35841,Go=35842,Vo=35843,Wo=36196,Xo=37492,qo=37496,Yo=37488,Zo=37489,ur=37490,Jo=37491,Ko=37808,$o=37809,jo=37810,Qo=37811,ea=37812,ta=37813,na=37814,ia=37815,sa=37816,ra=37817,oa=37818,aa=37819,ca=37820,la=37821,ha=36492,ua=36494,fa=36495,da=36283,pa=36284,fr=36285,ma=36286;var Es=2300,so=2301,Yr=2302,ac=2303,cc=2400,lc=2401,hc=2402;var Ah=3200;var dr=0,Rh=1,Wn="",Rt="srgb",Ts="srgb-linear",ws="linear",lt="srgb";var yi=7680;var uc=519,Ch=512,Ph=513,Ih=514,ga=515,Lh=516,Dh=517,xa=518,Nh=519,fc=35044;var Oc="300 es",gn=2e3,Ji=2001;function ju(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Qu(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function As(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Uh(){let s=As("canvas");return s.style.display="block",s}var Rl={},Ki=null;function Hc(...s){let e="THREE."+s.shift();Ki?Ki("log",e,...s):console.log(e,...s)}function Fh(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Oe(...s){s=Fh(s);let e="THREE."+s.shift();if(Ki)Ki("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function ze(...s){s=Fh(s);let e="THREE."+s.shift();if(Ki)Ki("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function vi(...s){let e=s.join(" ");e in Rl||(Rl[e]=!0,Oe(...s))}function Bh(s,e,t){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}var Oh={[Kr]:$r,[jr]:to,[Qr]:no,[bi]:eo,[$r]:Kr,[to]:jr,[no]:Qr,[eo]:bi},Rn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let o=i.indexOf(t);o!==-1&&i.splice(o,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cl=1234567,vs=Math.PI/180,$i=180/Math.PI;function Ci(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[s&255]+qt[s>>8&255]+qt[s>>16&255]+qt[s>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function it(s,e,t){return Math.max(e,Math.min(t,s))}function kc(s,e){return(s%e+e)%e}function ef(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function tf(s,e,t){return s!==e?(t-s)/(e-s):0}function Ms(s,e,t){return(1-t)*s+t*e}function nf(s,e,t,n){return Ms(s,e,1-Math.exp(-t*n))}function sf(s,e=1){return e-Math.abs(kc(s,e*2)-e)}function rf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function of(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function af(s,e){return s+Math.floor(Math.random()*(e-s+1))}function cf(s,e){return s+Math.random()*(e-s)}function lf(s){return s*(.5-Math.random())}function hf(s){s!==void 0&&(Cl=s);let e=Cl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uf(s){return s*vs}function ff(s){return s*$i}function df(s){return(s&s-1)===0&&s!==0}function pf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function mf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function gf(s,e,t,n,i){let o=Math.cos,r=Math.sin,a=o(t/2),l=r(t/2),c=o((e+n)/2),h=r((e+n)/2),u=o((e-n)/2),f=r((e-n)/2),d=o((n-e)/2),p=r((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*d,a*h,a*c);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Yi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Jt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Dt={DEG2RAD:vs,RAD2DEG:$i,generateUUID:Ci,clamp:it,euclideanModulo:kc,mapLinear:ef,inverseLerp:tf,lerp:Ms,damp:nf,pingpong:sf,smoothstep:rf,smootherstep:of,randInt:af,randFloat:cf,randFloatSpread:lf,seededRandom:hf,degToRad:uf,radToDeg:ff,isPowerOfTwo:df,ceilPowerOfTwo:pf,floorPowerOfTwo:mf,setQuaternionFromProperEuler:gf,normalize:Jt,denormalize:Yi},qc=class qc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),o=this.x-e.x,r=this.y-e.y;return this.x=o*n-r*i+e.x,this.y=o*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qc.prototype.isVector2=!0;var le=qc,Cn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,o,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=o[r+0],d=o[r+1],p=o[r+2],_=o[r+3];if(u!==_||l!==f||c!==d||h!==p){let x=l*f+c*d+h*p+u*_;x<0&&(f=-f,d=-d,p=-p,_=-_,x=-x);let m=1-a;if(x<.9995){let v=Math.acos(x),R=Math.sin(v);m=Math.sin(m*v)/R,a=Math.sin(a*v)/R,l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+_*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+p*a,u=u*m+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,o,r){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=o[r],f=o[r+1],d=o[r+2],p=o[r+3];return e[t]=a*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-a*d,e[t+2]=c*p+h*d+a*f-l*u,e[t+3]=h*p-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,o=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(o/2),f=l(n/2),d=l(i/2),p=l(o/2);switch(r){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],o=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(r-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(o+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(o-c)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(r-i)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,o=e._z,r=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*a+i*c-o*l,this._y=i*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-o*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,o=e._z,r=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,o=-o,r=-r,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+o*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+o*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Yc=class Yc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*i,this.y=o[1]*t+o[4]*n+o[7]*i,this.z=o[2]*t+o[5]*n+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,o=e.elements,r=1/(o[3]*t+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*t+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*t+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,o=e.x,r=e.y,a=e.z,l=e.w,c=2*(r*i-a*n),h=2*(a*t-o*i),u=2*(o*n-r*t);return this.x=t+l*c+r*u-a*h,this.y=n+l*h+a*c-o*u,this.z=i+l*u+o*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i,this.y=o[1]*t+o[5]*n+o[9]*i,this.z=o[2]*t+o[6]*n+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,o=e.z,r=t.x,a=t.y,l=t.z;return this.x=i*l-o*a,this.y=o*r-n*l,this.z=n*a-i*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fa.copy(this).projectOnVector(e),this.sub(Fa)}reflect(e){return this.sub(Fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yc.prototype.isVector3=!0;var D=Yc,Fa=new D,Pl=new Cn,Zc=class Zc{constructor(e,t,n,i,o,r,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,o,r,a,l,c)}set(e,t,n,i,o,r,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],_=i[0],x=i[3],m=i[6],v=i[1],R=i[4],S=i[7],C=i[2],y=i[5],T=i[8];return o[0]=r*_+a*v+l*C,o[3]=r*x+a*R+l*y,o[6]=r*m+a*S+l*T,o[1]=c*_+h*v+u*C,o[4]=c*x+h*R+u*y,o[7]=c*m+h*S+u*T,o[2]=f*_+d*v+p*C,o[5]=f*x+d*R+p*y,o[8]=f*m+d*S+p*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*a*c-n*o*h+n*a*l+i*o*c-i*r*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*r-a*c,f=a*l-h*o,d=c*o-r*l,p=t*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*r)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*o-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(r*t-n*o)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,o,r,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+e,-i*c,i*l,-i*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){return vi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ba.makeScale(e,t)),this}rotate(e){return vi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ba.makeRotation(-e)),this}translate(e,t){return vi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zc.prototype.isMatrix3=!0;var Ye=Zc,Ba=new Ye,Il=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ll=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xf(){let s={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(i,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===lt&&(i.r=kn(i.r),i.g=kn(i.g),i.b=kn(i.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===lt&&(i.r=Zi(i.r),i.g=Zi(i.g),i.b=Zi(i.b))),i},workingToColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},colorSpaceToWorking:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Wn?ws:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,r){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,o){return vi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,o)},toWorkingColorSpace:function(i,o){return vi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ts]:{primaries:e,whitePoint:n,transfer:ws,toXYZ:Il,fromXYZ:Ll,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:Il,fromXYZ:Ll,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),s}var rt=xf();function kn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ui,ro=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ui===void 0&&(Ui=As("canvas")),Ui.width=e.width,Ui.height=e.height;let i=Ui.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ui}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=As("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=kn(o[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_f=0,ji=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Oa(i[r].image)):o.push(Oa(i[r]))}else o=Oa(i);n.url=o}return t||(e.images[this.uuid]=n),n}};function Oa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ro.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var yf=0,Ha=new D,Kt=class s extends Rn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Tn,i=Tn,o=zt,r=hi,a=hn,l=Qt,c=s.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Ci(),this.name="",this.source=new ji(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ha).x}get height(){return this.source.getSize(Ha).y}get depth(){return this.source.getSize(Ha).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ic)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jt:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jt:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Ic;Kt.DEFAULT_ANISOTROPY=1;var Jc=class Jc{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,o=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,o,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],_=l[2],x=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(p-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(p+x)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,S=(d+1)/2,C=(m+1)/2,y=(h+f)/4,T=(u+_)/4,g=(p+x)/4;return R>S&&R>C?R<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(R),i=y/n,o=T/n):S>C?S<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(S),n=y/i,o=g/i):C<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(C),n=T/o,i=g/o),this.set(n,i,o,t),this}let v=Math.sqrt((x-p)*(x-p)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(x-p)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jc.prototype.isVector4=!0;var bt=Jc,oo=class extends Rn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},o=new Kt(i),r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ji(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends oo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Rs=class extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ao=class extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Po=class Po{constructor(e,t,n,i,o,r,a,l,c,h,u,f,d,p,_,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,o,r,a,l,c,h,u,f,d,p,_,x)}set(e,t,n,i,o,r,a,l,c,h,u,f,d,p,_,x){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=o,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=_,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Po().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Fi.setFromMatrixColumn(e,0).length(),o=1/Fi.setFromMatrixColumn(e,1).length(),r=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,o=e.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(o),u=Math.sin(o);if(e.order==="XYZ"){let f=r*h,d=r*u,p=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=p+d*c,t[10]=r*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,p=c*h,_=c*u;t[0]=f+_*a,t[4]=p*a-d,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-a,t[2]=d*a-p,t[6]=_+f*a,t[10]=r*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,p=c*h,_=c*u;t[0]=f-_*a,t[4]=-r*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=r*h,t[9]=_-f*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){let f=r*h,d=r*u,p=a*h,_=a*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){let f=r*l,d=r*c,p=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=p*u+d,t[1]=u,t[5]=r*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-_*u}else if(e.order==="XZY"){let f=r*l,d=r*c,p=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=r*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vf,e,Mf)}lookAt(e,t,n){let i=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Zn.crossVectors(n,tn),Zn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Zn.crossVectors(n,tn)),Zn.normalize(),Sr.crossVectors(tn,Zn),i[0]=Zn.x,i[4]=Sr.x,i[8]=tn.x,i[1]=Zn.y,i[5]=Sr.y,i[9]=tn.y,i[2]=Zn.z,i[6]=Sr.z,i[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],_=n[6],x=n[10],m=n[14],v=n[3],R=n[7],S=n[11],C=n[15],y=i[0],T=i[4],g=i[8],b=i[12],E=i[1],w=i[5],L=i[9],U=i[13],H=i[2],I=i[6],N=i[10],B=i[14],q=i[3],K=i[7],te=i[11],se=i[15];return o[0]=r*y+a*E+l*H+c*q,o[4]=r*T+a*w+l*I+c*K,o[8]=r*g+a*L+l*N+c*te,o[12]=r*b+a*U+l*B+c*se,o[1]=h*y+u*E+f*H+d*q,o[5]=h*T+u*w+f*I+d*K,o[9]=h*g+u*L+f*N+d*te,o[13]=h*b+u*U+f*B+d*se,o[2]=p*y+_*E+x*H+m*q,o[6]=p*T+_*w+x*I+m*K,o[10]=p*g+_*L+x*N+m*te,o[14]=p*b+_*U+x*B+m*se,o[3]=v*y+R*E+S*H+C*q,o[7]=v*T+R*w+S*I+C*K,o[11]=v*g+R*L+S*N+C*te,o[15]=v*b+R*U+S*B+C*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],o=e[12],r=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],_=e[7],x=e[11],m=e[15],v=l*d-c*f,R=a*d-c*u,S=a*f-l*u,C=r*d-c*h,y=r*f-l*h,T=r*u-a*h;return t*(_*v-x*R+m*S)-n*(p*v-x*C+m*y)+i*(p*R-_*C+m*T)-o*(p*S-_*y+x*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],o=e[1],r=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(r*h-a*c)-n*(o*h-a*l)+i*(o*c-r*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],_=e[13],x=e[14],m=e[15],v=t*a-n*r,R=t*l-i*r,S=t*c-o*r,C=n*l-i*a,y=n*c-o*a,T=i*c-o*l,g=h*_-u*p,b=h*x-f*p,E=h*m-d*p,w=u*x-f*_,L=u*m-d*_,U=f*m-d*x,H=v*U-R*L+S*w+C*E-y*b+T*g;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/H;return e[0]=(a*U-l*L+c*w)*I,e[1]=(i*L-n*U-o*w)*I,e[2]=(_*T-x*y+m*C)*I,e[3]=(f*y-u*T-d*C)*I,e[4]=(l*E-r*U-c*b)*I,e[5]=(t*U-i*E+o*b)*I,e[6]=(x*S-p*T-m*R)*I,e[7]=(h*T-f*S+d*R)*I,e[8]=(r*L-a*E+c*g)*I,e[9]=(n*E-t*L-o*g)*I,e[10]=(p*y-_*S+m*v)*I,e[11]=(u*S-h*y-d*v)*I,e[12]=(a*b-r*w-l*g)*I,e[13]=(t*w-n*b+i*g)*I,e[14]=(_*R-p*C-x*v)*I,e[15]=(h*C-u*R+f*v)*I,this}scale(e){let t=this.elements,n=e.x,i=e.y,o=e.z;return t[0]*=n,t[4]*=i,t[8]*=o,t[1]*=n,t[5]*=i,t[9]*=o,t[2]*=n,t[6]*=i,t[10]*=o,t[3]*=n,t[7]*=i,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),o=1-n,r=e.x,a=e.y,l=e.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,o,r){return this.set(1,n,o,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,o=t._x,r=t._y,a=t._z,l=t._w,c=o+o,h=r+r,u=a+a,f=o*c,d=o*h,p=o*u,_=r*h,x=r*u,m=a*u,v=l*c,R=l*h,S=l*u,C=n.x,y=n.y,T=n.z;return i[0]=(1-(_+m))*C,i[1]=(d+S)*C,i[2]=(p-R)*C,i[3]=0,i[4]=(d-S)*y,i[5]=(1-(f+m))*y,i[6]=(x+v)*y,i[7]=0,i[8]=(p+R)*T,i[9]=(x-v)*T,i[10]=(1-(f+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),t.identity(),this;let r=Fi.set(i[0],i[1],i[2]).length(),a=Fi.set(i[4],i[5],i[6]).length(),l=Fi.set(i[8],i[9],i[10]).length();o<0&&(r=-r),dn.copy(this);let c=1/r,h=1/a,u=1/l;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=u,dn.elements[9]*=u,dn.elements[10]*=u,t.setFromRotationMatrix(dn),n.x=r,n.y=a,n.z=l,this}makePerspective(e,t,n,i,o,r,a=gn,l=!1){let c=this.elements,h=2*o/(t-e),u=2*o/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),p,_;if(l)p=o/(r-o),_=r*o/(r-o);else if(a===gn)p=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===Ji)p=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,o,r,a=gn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),p,_;if(l)p=1/(r-o),_=r/(r-o);else if(a===gn)p=-2/(r-o),_=-(r+o)/(r-o);else if(a===Ji)p=-1/(r-o),_=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Po.prototype.isMatrix4=!0;var _t=Po,Fi=new D,dn=new _t,vf=new D(0,0,0),Mf=new D(1,1,1),Zn=new D,Sr=new D,tn=new D,Dl=new _t,Nl=new Cn,Gn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,o=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-it(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER="XYZ";var Cs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bf=0,Ul=new D,Bi=new Cn,Un=new _t,Er=new D,ms=new D,Sf=new D,Ef=new Cn,Fl=new D(1,0,0),Bl=new D(0,1,0),Ol=new D(0,0,1),Hl={type:"added"},Tf={type:"removed"},Oi={type:"childadded",child:null},ka={type:"childremoved",child:null},Gt=class s extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new D,t=new Gn,n=new Cn,i=new D(1,1,1);function o(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ye}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(Fl,e)}rotateY(e){return this.rotateOnAxis(Bl,e)}rotateZ(e){return this.rotateOnAxis(Ol,e)}translateOnAxis(e,t){return Ul.copy(e).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fl,e)}translateY(e){return this.translateOnAxis(Bl,e)}translateZ(e){return this.translateOnAxis(Ol,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Er.copy(e):Er.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(ms,Er,this.up):Un.lookAt(Er,ms,this.up),this.quaternion.setFromRotationMatrix(Un),i&&(Un.extractRotation(i.matrixWorld),Bi.setFromRotationMatrix(Un),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tf),ka.child=e,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hl),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,Sf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Ef,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*n-o[8]*i,o[13]+=n-o[1]*t-o[5]*n-o[9]*i,o[14]+=i-o[2]*t-o[6]*n-o[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];o(e.shapes,u)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));i.material=a}else i.material=o(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(o(e.animations,l))}}if(t){let a=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),f=r(e.skeletons),d=r(e.animations),p=r(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function r(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Gt.DEFAULT_UP=new D(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},wf={type:"move"},Qi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,o=null,r=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(let _ of e.hand.values()){let x=t.getJointPose(_,n),m=this._getHandJoint(c,_);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wf)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ke;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function za(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=rt.workingColorSpace){if(e=kc(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+t):n+t-n*t,r=2*n-o;this.r=za(r,o,e+1/3),this.g=za(r,o,e),this.b=za(r,o,e-1/3)}return rt.colorSpaceToWorking(this,i),this}setStyle(e,t=Rt){function n(o){o!==void 0&&parseFloat(o)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(o,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=Hh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return rt.workingToColorSpace(Yt.copy(this),e),Math.round(it(Yt.r*255,0,255))*65536+Math.round(it(Yt.g*255,0,255))*256+Math.round(it(Yt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Yt.copy(this),t);let n=Yt.r,i=Yt.g,o=Yt.b,r=Math.max(n,i,o),a=Math.min(n,i,o),l,c,h=(a+r)/2;if(a===r)l=0,c=0;else{let u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(i-o)/u+(i<o?6:0);break;case i:l=(o-n)/u+2;break;case o:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Rt){rt.workingToColorSpace(Yt.copy(this),e);let t=Yt.r,n=Yt.g,i=Yt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(Tr);let n=Ms(Jn.h,Tr.h,t),i=Ms(Jn.s,Tr.s,t),o=Ms(Jn.l,Tr.l,t);return this.setHSL(n,i,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*i,this.g=o[1]*t+o[4]*n+o[7]*i,this.b=o[2]*t+o[5]*n+o[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new Fe;Fe.NAMES=Hh;var Ps=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Is=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},pn=new D,Fn=new D,Ga=new D,Bn=new D,Hi=new D,ki=new D,kl=new D,Va=new D,Wa=new D,Xa=new D,qa=new bt,Ya=new bt,Za=new bt,ei=class s{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pn.subVectors(e,t),i.cross(pn);let o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,t,n,i,o){pn.subVectors(i,t),Fn.subVectors(n,t),Ga.subVectors(e,t);let r=pn.dot(pn),a=pn.dot(Fn),l=pn.dot(Ga),c=Fn.dot(Fn),h=Fn.dot(Ga),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(r*h-a*l)*f;return o.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,i,o,r,a,l){return this.getBarycoord(e,t,n,i,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Bn.x),l.addScaledVector(r,Bn.y),l.addScaledVector(a,Bn.z),l)}static getInterpolatedAttribute(e,t,n,i,o,r){return qa.setScalar(0),Ya.setScalar(0),Za.setScalar(0),qa.fromBufferAttribute(e,t),Ya.fromBufferAttribute(e,n),Za.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(qa,o.x),r.addScaledVector(Ya,o.y),r.addScaledVector(Za,o.z),r}static isFrontFacing(e,t,n,i){return pn.subVectors(n,t),Fn.subVectors(e,t),pn.cross(Fn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),pn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,o){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,o)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,o=this.c,r,a;Hi.subVectors(i,n),ki.subVectors(o,n),Va.subVectors(e,n);let l=Hi.dot(Va),c=ki.dot(Va);if(l<=0&&c<=0)return t.copy(n);Wa.subVectors(e,i);let h=Hi.dot(Wa),u=ki.dot(Wa);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(Hi,r);Xa.subVectors(e,o);let d=Hi.dot(Xa),p=ki.dot(Xa);if(p>=0&&d<=p)return t.copy(o);let _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(ki,a);let x=h*p-d*u;if(x<=0&&u-h>=0&&d-p>=0)return kl.subVectors(o,i),a=(u-h)/(u-h+(d-p)),t.copy(i).addScaledVector(kl,a);let m=1/(x+_+f);return r=_*m,a=f*m,t.copy(n).addScaledVector(Hi,r).addScaledVector(ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ni=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,mn):mn.fromBufferAttribute(o,r),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(e.matrixWorld),this.union(wr)}let i=e.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),Ar.subVectors(this.max,gs),zi.subVectors(e.a,gs),Gi.subVectors(e.b,gs),Vi.subVectors(e.c,gs),Kn.subVectors(Gi,zi),$n.subVectors(Vi,Gi),mi.subVectors(zi,Vi);let t=[0,-Kn.z,Kn.y,0,-$n.z,$n.y,0,-mi.z,mi.y,Kn.z,0,-Kn.x,$n.z,0,-$n.x,mi.z,0,-mi.x,-Kn.y,Kn.x,0,-$n.y,$n.x,0,-mi.y,mi.x,0];return!Ja(t,zi,Gi,Vi,Ar)||(t=[1,0,0,0,1,0,0,0,1],!Ja(t,zi,Gi,Vi,Ar))?!1:(Rr.crossVectors(Kn,$n),t=[Rr.x,Rr.y,Rr.z],Ja(t,zi,Gi,Vi,Ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},On=[new D,new D,new D,new D,new D,new D,new D,new D],mn=new D,wr=new ni,zi=new D,Gi=new D,Vi=new D,Kn=new D,$n=new D,mi=new D,gs=new D,Ar=new D,Rr=new D,gi=new D;function Ja(s,e,t,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){gi.fromArray(s,o);let a=i.x*Math.abs(gi.x)+i.y*Math.abs(gi.y)+i.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var It=new D,Cr=new le,Af=0,Nt=class extends Rn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Af++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fc,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXY(t,Cr.x,Cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,o){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),n=Jt(n,this.array),i=Jt(i,this.array),o=Jt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ls=class extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ds=class extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ge=class extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Rf=new ni,xs=new D,Ka=new D,Si=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Rf.setFromPoints(e).getCenter(n);let i=0;for(let o=0,r=e.length;o<r;o++)i=Math.max(i,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xs.subVectors(e,this.center);let t=xs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xs.copy(e.center).add(Ka)),this.expandByPoint(xs.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Cf=0,ln=new _t,$a=new Gt,Wi=new D,nn=new ni,_s=new ni,Ot=new D,ht=class s extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ju(e)?Ds:Ls)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new Ye().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return $a.lookAt(e),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,o=e.length;i<o;i++){let r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ge(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let o=e[i];t.setXYZ(i,o.x,o.y,o.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let o=t[n];nn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){let a=t[o];_s.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(nn.min,_s.min),nn.expandByPoint(Ot),Ot.addVectors(nn.max,_s.max),nn.expandByPoint(Ot)):(nn.expandByPoint(_s.min),nn.expandByPoint(_s.max))}nn.getCenter(n);let i=0;for(let o=0,r=e.count;o<r;o++)Ot.fromBufferAttribute(e,o),i=Math.max(i,n.distanceToSquared(Ot));if(t)for(let o=0,r=t.length;o<r;o++){let a=t[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ot.fromBufferAttribute(a,c),l&&(Wi.fromBufferAttribute(e,c),Ot.add(Wi)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,o=t.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new Nt(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));let a=[],l=[];for(let g=0;g<n.count;g++)a[g]=new D,l[g]=new D;let c=new D,h=new D,u=new D,f=new le,d=new le,p=new le,_=new D,x=new D;function m(g,b,E){c.fromBufferAttribute(n,g),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,E),f.fromBufferAttribute(o,g),d.fromBufferAttribute(o,b),p.fromBufferAttribute(o,E),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let w=1/(d.x*p.y-p.x*d.y);isFinite(w)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(w),x.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(w),a[g].add(_),a[b].add(_),a[E].add(_),l[g].add(x),l[b].add(x),l[E].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let g=0,b=v.length;g<b;++g){let E=v[g],w=E.start,L=E.count;for(let U=w,H=w+L;U<H;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let R=new D,S=new D,C=new D,y=new D;function T(g){C.fromBufferAttribute(i,g),y.copy(C);let b=a[g];R.copy(b),R.sub(C.multiplyScalar(C.dot(b))).normalize(),S.crossVectors(y,b);let w=S.dot(l[g])<0?-1:1;r.setXYZW(g,R.x,R.y,R.z,w)}for(let g=0,b=v.length;g<b;++g){let E=v[g],w=E.start,L=E.count;for(let U=w,H=w+L;U<H;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new D,o=new D,r=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),_=e.getX(f+1),x=e.getX(f+2);i.fromBufferAttribute(t,p),o.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let _=0,x=l.length;_<x;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new Nt(f,h,u)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,l=r.length;a<l;a++){let c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let o=e.morphAttributes;for(let c in o){let h=[],u=o[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let c=0,h=r.length;c<h;c++){let u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Pf=0,Pn=class extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=Mi,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zr,this.blendDst=Jr,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zr&&(n.blendSrc=this.blendSrc),this.blendDst!==Jr&&(n.blendDst=this.blendDst),this.blendEquation!==ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){let r=[];for(let a in o){let l=o[a];delete l.metadata,r.push(l)}return r}if(t){let o=i(e.textures),r=i(e.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Hn=new D,ja=new D,Pr=new D,jn=new D,Qa=new D,Ir=new D,ec=new D,Ns=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ja.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(ja);let o=e.distanceTo(t)*.5,r=-this.direction.dot(Pr),a=jn.dot(this.direction),l=-jn.dot(Pr),c=jn.lengthSq(),h=Math.abs(1-r*r),u,f,d,p;if(h>0)if(u=r*l-a,f=r*a-l,p=o*h,u>=0)if(f>=-p)if(f<=p){let _=1/h;u*=_,f*=_,d=u*(u+r*f+2*a)+f*(r*u+f+2*l)+c}else f=o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*l)+c;else f=-o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-r*o+a)),f=u>0?-o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-o,-l),o),d=f*(f+2*l)+c):(u=Math.max(0,-(r*o+a)),f=u>0?o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c);else f=r>0?-o:o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ja).addScaledVector(Pr,f),d}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);let n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,o=e.radius*e.radius;if(i>o)return null;let r=Math.sqrt(o-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,o,r,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(o=(e.min.y-f.y)*h,r=(e.max.y-f.y)*h):(o=(e.max.y-f.y)*h,r=(e.min.y-f.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,i,o){Qa.subVectors(t,e),Ir.subVectors(n,e),ec.crossVectors(Qa,Ir);let r=this.direction.dot(ec),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;jn.subVectors(this.origin,e);let l=a*this.direction.dot(Ir.crossVectors(jn,Ir));if(l<0)return null;let c=a*this.direction.dot(Qa.cross(jn));if(c<0||l+c>r)return null;let h=-a*jn.dot(ec);return h<0?null:this.at(h/r,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lt=class extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},zl=new _t,xi=new Ns,Lr=new Si,Gl=new D,Dr=new D,Nr=new D,Ur=new D,tc=new D,Fr=new D,Vl=new D,Br=new D,ee=class extends Gt{constructor(e=new ht,t=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){let a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(o&&a){Fr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let h=a[l],u=o[l];h!==0&&(tc.fromBufferAttribute(u,e),r?Fr.addScaledVector(tc,h):Fr.addScaledVector(tc.sub(t),h))}t.add(Fr)}return t}raycast(e,t){let n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(o),xi.copy(e.ray).recast(e.near),!(Lr.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Lr,Gl)===null||xi.origin.distanceToSquared(Gl)>(e.far-e.near)**2))&&(zl.copy(o).invert(),xi.copy(e.ray).applyMatrix4(zl),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,n){let i,o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,_=f.length;p<_;p++){let x=f[p],m=r[x.materialIndex],v=Math.max(x.start,d.start),R=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let S=v,C=R;S<C;S+=3){let y=a.getX(S),T=a.getX(S+1),g=a.getX(S+2);i=Or(this,m,e,n,c,h,u,y,T,g),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let x=p,m=_;x<m;x+=3){let v=a.getX(x),R=a.getX(x+1),S=a.getX(x+2);i=Or(this,r,e,n,c,h,u,v,R,S),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,_=f.length;p<_;p++){let x=f[p],m=r[x.materialIndex],v=Math.max(x.start,d.start),R=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let S=v,C=R;S<C;S+=3){let y=S,T=S+1,g=S+2;i=Or(this,m,e,n,c,h,u,y,T,g),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let x=p,m=_;x<m;x+=3){let v=x,R=x+1,S=x+2;i=Or(this,r,e,n,c,h,u,v,R,S),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}};function If(s,e,t,n,i,o,r,a){let l;if(e.side===Wt?l=n.intersectTriangle(r,o,i,!0,a):l=n.intersectTriangle(i,o,r,e.side===zn,a),l===null)return null;Br.copy(a),Br.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Br);return c<t.near||c>t.far?null:{distance:c,point:Br.clone(),object:s}}function Or(s,e,t,n,i,o,r,a,l,c){s.getVertexPosition(a,Dr),s.getVertexPosition(l,Nr),s.getVertexPosition(c,Ur);let h=If(s,e,t,n,Dr,Nr,Ur,Vl);if(h){let u=new D;ei.getBarycoord(Vl,Dr,Nr,Ur,u),i&&(h.uv=ei.getInterpolatedAttribute(i,a,l,c,u,new le)),o&&(h.uv1=ei.getInterpolatedAttribute(o,a,l,c,u,new le)),r&&(h.normal=ei.getInterpolatedAttribute(r,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new D,materialIndex:0};ei.getNormal(Dr,Nr,Ur,f.normal),h.face=f,h.barycoord=u}return h}var es=class extends Kt{constructor(e=null,t=1,n=1,i,o,r,a,l,c=Ct,h=Ct,u,f){super(null,r,a,l,c,h,i,o,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nc=new D,Lf=new D,Df=new Ye,En=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=nc.subVectors(n,t).cross(Lf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(nc),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/o;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Df.getNormalMatrix(e),i=this.coplanarPoint(nc).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_i=new Si,Nf=new le(.5,.5),Hr=new D,ts=class{constructor(e=new En,t=new En,n=new En,i=new En,o=new En,r=new En){this.planes=[e,t,n,i,o,r]}set(e,t,n,i,o,r){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn,n=!1){let i=this.planes,o=e.elements,r=o[0],a=o[1],l=o[2],c=o[3],h=o[4],u=o[5],f=o[6],d=o[7],p=o[8],_=o[9],x=o[10],m=o[11],v=o[12],R=o[13],S=o[14],C=o[15];if(i[0].setComponents(c-r,d-h,m-p,C-v).normalize(),i[1].setComponents(c+r,d+h,m+p,C+v).normalize(),i[2].setComponents(c+a,d+u,m+_,C+R).normalize(),i[3].setComponents(c-a,d-u,m-_,C-R).normalize(),n)i[4].setComponents(l,f,x,S).normalize(),i[5].setComponents(c-l,d-f,m-x,C-S).normalize();else if(i[4].setComponents(c-l,d-f,m-x,C-S).normalize(),t===gn)i[5].setComponents(c+l,d+f,m+x,C+S).normalize();else if(t===Ji)i[5].setComponents(l,f,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){_i.center.set(0,0,0);let t=Nf.distanceTo(e.center);return _i.radius=.7071067811865476+t,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Hr.x=i.normal.x>0?e.max.x:e.min.x,Hr.y=i.normal.y>0?e.max.y:e.min.y,Hr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ns=class extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wl=new _t,dc=new Ns,kr=new Si,zr=new D,Us=class extends Gt{constructor(e=new ht,t=new ns){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,o=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(i),kr.radius+=o,e.ray.intersectsSphere(kr)===!1)return;Wl.copy(i).invert(),dc.copy(e.ray).applyMatrix4(Wl);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let p=f,_=d;p<_;p++){let x=c.getX(p);zr.fromBufferAttribute(u,x),Xl(zr,x,l,i,e,t,this)}}else{let f=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let p=f,_=d;p<_;p++)zr.fromBufferAttribute(u,p),Xl(zr,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){let a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Xl(s,e,t,n,i,o,r){let a=dc.distanceSqToPoint(s);if(a<t){let l=new D;dc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}var Fs=class extends Kt{constructor(e=[],t=li,n,i,o,r,a,l,c,h){super(e,t,n,i,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pt=class extends Kt{constructor(e,t,n,i,o,r,a,l,c){super(e,t,n,i,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Vn=class extends Kt{constructor(e,t,n=_n,i,o,r,a=Ct,l=Ct,c,h=An,u=1){if(h!==An&&h!==ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,i,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ji(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},co=class extends Vn{constructor(e,t=_n,n=li,i,o,r=Ct,a=Ct,l,c=An){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,o,r,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Bs=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ut=class s extends ht{constructor(e=1,t=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};let a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,r,o,0),p("z","y","x",1,-1,n,t,-e,r,o,1),p("x","z","y",1,1,e,n,t,i,r,2),p("x","z","y",1,-1,e,n,-t,i,r,3),p("x","y","z",1,-1,e,t,n,i,o,4),p("x","y","z",-1,-1,e,t,-n,i,o,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2));function p(_,x,m,v,R,S,C,y,T,g,b){let E=S/T,w=C/g,L=S/2,U=C/2,H=y/2,I=T+1,N=g+1,B=0,q=0,K=new D;for(let te=0;te<N;te++){let se=te*w-U;for(let fe=0;fe<I;fe++){let qe=fe*E-L;K[_]=qe*v,K[x]=se*R,K[m]=H,c.push(K.x,K.y,K.z),K[_]=0,K[x]=0,K[m]=y>0?1:-1,h.push(K.x,K.y,K.z),u.push(fe/T),u.push(1-te/g),B+=1}}for(let te=0;te<g;te++)for(let se=0;se<T;se++){let fe=f+se+I*te,qe=f+se+I*(te+1),ct=f+(se+1)+I*(te+1),tt=f+(se+1)+I*te;l.push(fe,qe,tt),l.push(qe,ct,tt),q+=6}a.addGroup(d,q,b),d+=q,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Os=class s extends ht{constructor(e=1,t=1,n=4,i=8,o=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:o},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),o=Math.max(1,Math.floor(o));let r=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,p=n*2+o,_=i+1,x=new D,m=new D;for(let v=0;v<=p;v++){let R=0,S=0,C=0,y=0;if(v<=n){let b=v/n,E=b*Math.PI/2;S=-h-e*Math.cos(E),C=e*Math.sin(E),y=-e*Math.cos(E),R=b*u}else if(v<=n+o){let b=(v-n)/o;S=-h+b*t,C=e,y=0,R=u+b*f}else{let b=(v-n-o)/n,E=b*Math.PI/2;S=h+e*Math.sin(E),C=e*Math.cos(E),y=e*Math.sin(E),R=u+f+b*u}let T=Math.max(0,Math.min(1,R/d)),g=0;v===0?g=.5/i:v===p&&(g=-.5/i);for(let b=0;b<=i;b++){let E=b/i,w=E*Math.PI*2,L=Math.sin(w),U=Math.cos(w);m.x=-C*U,m.y=S,m.z=C*L,a.push(m.x,m.y,m.z),x.set(-C*U,y,C*L),x.normalize(),l.push(x.x,x.y,x.z),c.push(E+g,T)}if(v>0){let b=(v-1)*_;for(let E=0;E<i;E++){let w=b+E,L=b+E+1,U=v*_+E,H=v*_+E+1;r.push(w,L,U),r.push(L,H,U)}}}this.setIndex(r),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ei=class s extends ht{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let o=[],r=[],a=[],l=[],c=new D,h=new le;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[f]/e+1)/2,h.y=(r[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Ge(r,3)),this.setAttribute("normal",new Ge(a,3)),this.setAttribute("uv",new Ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Je=class s extends ht{constructor(e=1,t=1,n=1,i=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),o=Math.floor(o);let h=[],u=[],f=[],d=[],p=0,_=[],x=n/2,m=0;v(),r===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(f,3)),this.setAttribute("uv",new Ge(d,2));function v(){let S=new D,C=new D,y=0,T=(t-e)/n;for(let g=0;g<=o;g++){let b=[],E=g/o,w=E*(t-e)+e;for(let L=0;L<=i;L++){let U=L/i,H=U*l+a,I=Math.sin(H),N=Math.cos(H);C.x=w*I,C.y=-E*n+x,C.z=w*N,u.push(C.x,C.y,C.z),S.set(I,T,N).normalize(),f.push(S.x,S.y,S.z),d.push(U,1-E),b.push(p++)}_.push(b)}for(let g=0;g<i;g++)for(let b=0;b<o;b++){let E=_[b][g],w=_[b+1][g],L=_[b+1][g+1],U=_[b][g+1];(e>0||b!==0)&&(h.push(E,w,U),y+=3),(t>0||b!==o-1)&&(h.push(w,L,U),y+=3)}c.addGroup(m,y,0),m+=y}function R(S){let C=p,y=new le,T=new D,g=0,b=S===!0?e:t,E=S===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,x*E,0),f.push(0,E,0),d.push(.5,.5),p++;let w=p;for(let L=0;L<=i;L++){let H=L/i*l+a,I=Math.cos(H),N=Math.sin(H);T.x=b*N,T.y=x*E,T.z=b*I,u.push(T.x,T.y,T.z),f.push(0,E,0),y.x=I*.5+.5,y.y=N*.5*E+.5,d.push(y.x,y.y),p++}for(let L=0;L<i;L++){let U=C+L,H=w+L;S===!0?h.push(H,H+1,U):h.push(H+1,H,U),g+=3}c.addGroup(m,g,S===!0?1:2),m+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ft=class s extends Je{constructor(e=1,t=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,e,t,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),o=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),o+=n.distanceTo(i),t.push(o),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,o=n.length,r;t?r=t:r=e*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(o-1);let h=n[i],f=n[i+1]-h,d=(r-h)/f;return(i+d)/(o-1)}getTangent(e,t){let i=e-1e-4,o=e+1e-4;i<0&&(i=0),o>1&&(o=1);let r=this.getPoint(i),a=this.getPoint(o),l=t||(r.isVector2?new le:new D);return l.copy(a).sub(r).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,i=[],o=[],r=[],a=new D,l=new _t;for(let d=0;d<=e;d++){let p=d/e;i[d]=this.getTangentAt(p,new D)}o[0]=new D,r[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let d=1;d<=e;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(it(i[d-1].dot(i[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(a,p))}r[d].crossVectors(i[d],o[d])}if(t===!0){let d=Math.acos(it(o[0].dot(o[e]),-1,1));d/=e,i[0].dot(a.crossVectors(o[0],o[e]))>0&&(d=-d);for(let p=1;p<=e;p++)o[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),r[p].crossVectors(i[p],o[p])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},is=class extends rn{constructor(e=0,t=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new le){let n=t,i=Math.PI*2,o=this.aEndAngle-this.aStartAngle,r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);let a=this.aStartAngle+e*o,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},lo=class extends is{constructor(e,t,n,i,o,r){super(e,t,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}};function zc(){let s=0,e=0,t=0,n=0;function i(o,r,a,l){s=o,e=a,t=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){i(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,u){let f=(r-o)/c-(a-o)/(c+h)+(a-r)/h,d=(a-r)/h-(l-r)/(h+u)+(l-a)/u;f*=h,d*=h,i(r,a,f,d)},calc:function(o){let r=o*o,a=r*o;return s+e*o+t*r+n*a}}}var ql=new D,Yl=new D,ic=new zc,sc=new zc,rc=new zc,ii=class extends rn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){let n=t,i=this.points,o=i.length,r=(o-(this.closed?0:1))*e,a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%o]:(Yl.subVectors(i[0],i[1]).add(i[0]),c=Yl);let u=i[a%o],f=i[(a+1)%o];if(this.closed||a+2<o?h=i[(a+2)%o]:(ql.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=ql),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),x<1e-4&&(x=_),ic.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,_,x),sc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,_,x),rc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,_,x)}else this.curveType==="catmullrom"&&(ic.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),sc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),rc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ic.calc(l),sc.calc(l),rc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Zl(s,e,t,n,i){let o=(n-e)*.5,r=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+o+r)*l+(-3*t+3*n-2*o-r)*a+o*s+t}function Uf(s,e){let t=1-s;return t*t*e}function Ff(s,e){return 2*(1-s)*s*e}function Bf(s,e){return s*s*e}function bs(s,e,t,n){return Uf(s,e)+Ff(s,t)+Bf(s,n)}function Of(s,e){let t=1-s;return t*t*t*e}function Hf(s,e){let t=1-s;return 3*t*t*s*e}function kf(s,e){return 3*(1-s)*s*s*e}function zf(s,e){return s*s*s*e}function Ss(s,e,t,n,i){return Of(s,e)+Hf(s,t)+kf(s,n)+zf(s,i)}var Hs=class extends rn{constructor(e=new le,t=new le,n=new le,i=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new le){let n=t,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ss(e,i.x,o.x,r.x,a.x),Ss(e,i.y,o.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ho=class extends rn{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){let n=t,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ss(e,i.x,o.x,r.x,a.x),Ss(e,i.y,o.y,r.y,a.y),Ss(e,i.z,o.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ks=class extends rn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uo=class extends rn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zs=class extends rn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,i=this.v0,o=this.v1,r=this.v2;return n.set(bs(e,i.x,o.x,r.x),bs(e,i.y,o.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ti=class extends rn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,i=this.v0,o=this.v1,r=this.v2;return n.set(bs(e,i.x,o.x,r.x),bs(e,i.y,o.y,r.y),bs(e,i.z,o.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gs=class extends rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,i=this.points,o=(i.length-1)*e,r=Math.floor(o),a=o-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(Zl(a,l.x,c.x,h.x,u.x),Zl(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new le().fromArray(i))}return this}},fo=Object.freeze({__proto__:null,ArcCurve:lo,CatmullRomCurve3:ii,CubicBezierCurve:Hs,CubicBezierCurve3:ho,EllipseCurve:is,LineCurve:ks,LineCurve3:uo,QuadraticBezierCurve:zs,QuadraticBezierCurve3:Ti,SplineCurve:Gs}),po=class extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),o=0;for(;o<i.length;){if(i[o]>=n){let r=i[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,t)}o++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,o=this.curves;i<o.length;i++){let r=o[i],a=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new fo[i.type]().fromJSON(i))}return this}},Vs=class extends po{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ks(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let o=new zs(this.currentPoint.clone(),new le(e,t),new le(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,o,r){let a=new Hs(this.currentPoint.clone(),new le(e,t),new le(n,i),new le(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Gs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,o,r){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,o,r),this}absarc(e,t,n,i,o,r){return this.absellipse(e,t,n,n,i,o,r),this}ellipse(e,t,n,i,o,r,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,o,r,a,l),this}absellipse(e,t,n,i,o,r,a,l){let c=new is(e,t,n,i,o,r,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},$t=class extends Vs{constructor(e){super(e),this.uuid=Ci(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Vs().fromJSON(i))}return this}};function Gf(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,o=kh(s,0,i,t,!0),r=[];if(!o||o.next===o.prev)return r;let a,l,c;if(n&&(o=Yf(s,e,o,t)),s.length>80*t){a=s[0],l=s[1];let h=a,u=l;for(let f=t;f<i;f+=t){let d=s[f],p=s[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ws(o,r,t,a,l,c,0),r}function kh(s,e,t,n,i){let o;if(i===sd(s,e,t,n)>0)for(let r=e;r<t;r+=n)o=Jl(r/n|0,s[r],s[r+1],o);else for(let r=t-n;r>=e;r-=n)o=Jl(r/n|0,s[r],s[r+1],o);return o&&ss(o,o.next)&&(qs(o),o=o.next),o}function wi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(ss(t,t.next)||St(t.prev,t,t.next)===0)){if(qs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ws(s,e,t,n,i,o,r){if(!s)return;!r&&o&&jf(s,n,i,o);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(o?Wf(s,n,i,o):Vf(s)){e.push(l.i,s.i,c.i),qs(s),s=c.next,a=c.next;continue}if(s=c,s===a){r?r===1?(s=Xf(wi(s),e),Ws(s,e,t,n,i,o,2)):r===2&&qf(s,e,t,n,i,o):Ws(wi(s),e,t,n,i,o,1);break}}}function Vf(s){let e=s.prev,t=s,n=s.next;if(St(e,t,n)>=0)return!1;let i=e.x,o=t.x,r=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,o,r),u=Math.min(a,l,c),f=Math.max(i,o,r),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&ys(i,a,o,l,r,c,p.x,p.y)&&St(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Wf(s,e,t,n){let i=s.prev,o=s,r=s.next;if(St(i,o,r)>=0)return!1;let a=i.x,l=o.x,c=r.x,h=i.y,u=o.y,f=r.y,d=Math.min(a,l,c),p=Math.min(h,u,f),_=Math.max(a,l,c),x=Math.max(h,u,f),m=pc(d,p,e,t,n),v=pc(_,x,e,t,n),R=s.prevZ,S=s.nextZ;for(;R&&R.z>=m&&S&&S.z<=v;){if(R.x>=d&&R.x<=_&&R.y>=p&&R.y<=x&&R!==i&&R!==r&&ys(a,h,l,u,c,f,R.x,R.y)&&St(R.prev,R,R.next)>=0||(R=R.prevZ,S.x>=d&&S.x<=_&&S.y>=p&&S.y<=x&&S!==i&&S!==r&&ys(a,h,l,u,c,f,S.x,S.y)&&St(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;R&&R.z>=m;){if(R.x>=d&&R.x<=_&&R.y>=p&&R.y<=x&&R!==i&&R!==r&&ys(a,h,l,u,c,f,R.x,R.y)&&St(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;S&&S.z<=v;){if(S.x>=d&&S.x<=_&&S.y>=p&&S.y<=x&&S!==i&&S!==r&&ys(a,h,l,u,c,f,S.x,S.y)&&St(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Xf(s,e){let t=s;do{let n=t.prev,i=t.next.next;!ss(n,i)&&Gh(n,t,t.next,i)&&Xs(n,i)&&Xs(i,n)&&(e.push(n.i,t.i,i.i),qs(t),qs(t.next),t=s=i),t=t.next}while(t!==s);return wi(t)}function qf(s,e,t,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&td(r,a)){let l=Vh(r,a);r=wi(r,r.next),l=wi(l,l.next),Ws(r,e,t,n,i,o,0),Ws(l,e,t,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function Yf(s,e,t,n){let i=[];for(let o=0,r=e.length;o<r;o++){let a=e[o]*n,l=o<r-1?e[o+1]*n:s.length,c=kh(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(ed(c))}i.sort(Zf);for(let o=0;o<i.length;o++)t=Jf(i[o],t);return t}function Zf(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Jf(s,e){let t=Kf(s,e);if(!t)return e;let n=Vh(t,s);return wi(n,n.next),wi(t,t.next)}function Kf(s,e){let t=e,n=s.x,i=s.y,o=-1/0,r;if(ss(s,t))return t;do{if(ss(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>o&&(o=u,r=t.x<t.next.x?t:t.next,u===n))return r}t=t.next}while(t!==e);if(!r)return null;let a=r,l=r.x,c=r.y,h=1/0;t=r;do{if(n>=t.x&&t.x>=l&&n!==t.x&&zh(i<c?n:o,i,l,c,i<c?o:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);Xs(t,s)&&(u<h||u===h&&(t.x>r.x||t.x===r.x&&$f(r,t)))&&(r=t,h=u)}t=t.next}while(t!==a);return r}function $f(s,e){return St(s.prev,s,e.prev)<0&&St(e.next,s,s.next)<0}function jf(s,e,t,n){let i=s;do i.z===0&&(i.z=pc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Qf(i)}function Qf(s){let e,t=1;do{let n=s,i;s=null;let o=null;for(e=0;n;){e++;let r=n,a=0;for(let c=0;c<t&&(a++,r=r.nextZ,!!r);c++);let l=t;for(;a>0||l>0&&r;)a!==0&&(l===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,a--):(i=r,r=r.nextZ,l--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;n=r}o.nextZ=null,t*=2}while(e>1);return s}function pc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function ed(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function zh(s,e,t,n,i,o,r,a){return(i-r)*(e-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(t-r)*(e-a)&&(t-r)*(o-a)>=(i-r)*(n-a)}function ys(s,e,t,n,i,o,r,a){return!(s===r&&e===a)&&zh(s,e,t,n,i,o,r,a)}function td(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!nd(s,e)&&(Xs(s,e)&&Xs(e,s)&&id(s,e)&&(St(s.prev,s,e.prev)||St(s,e.prev,e))||ss(s,e)&&St(s.prev,s,s.next)>0&&St(e.prev,e,e.next)>0)}function St(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ss(s,e){return s.x===e.x&&s.y===e.y}function Gh(s,e,t,n){let i=Vr(St(s,e,t)),o=Vr(St(s,e,n)),r=Vr(St(t,n,s)),a=Vr(St(t,n,e));return!!(i!==o&&r!==a||i===0&&Gr(s,t,e)||o===0&&Gr(s,n,e)||r===0&&Gr(t,s,n)||a===0&&Gr(t,e,n))}function Gr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Vr(s){return s>0?1:s<0?-1:0}function nd(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Gh(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Xs(s,e){return St(s.prev,s,s.next)<0?St(s,e,s.next)>=0&&St(s,s.prev,e)>=0:St(s,e,s.prev)<0||St(s,s.next,e)<0}function id(s,e){let t=s,n=!1,i=(s.x+e.x)/2,o=(s.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&i<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Vh(s,e){let t=mc(s.i,s.x,s.y),n=mc(e.i,e.x,e.y),i=s.next,o=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function Jl(s,e,t,n){let i=mc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function mc(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sd(s,e,t,n){let i=0;for(let o=e,r=t-n;o<t;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}var gc=class{static triangulate(e,t,n=2){return Gf(e,t,n)}},wn=class s{static area(e){let t=e.length,n=0;for(let i=t-1,o=0;o<t;i=o++)n+=e[i].x*e[o].y-e[o].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],o=[];Kl(e),$l(n,e);let r=e.length;t.forEach(Kl);for(let l=0;l<t.length;l++)i.push(r),r+=t[l].length,$l(n,t[l]);let a=gc.triangulate(n,i);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}};function Kl(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function $l(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var si=class s extends ht{constructor(e=new $t([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];r(c)}this.setAttribute("position",new Ge(i,3)),this.setAttribute("uv",new Ge(o,2)),this.computeVertexNormals();function r(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:rd,R,S=!1,C,y,T,g;if(m){R=m.getSpacedPoints(h),S=!0,f=!1;let ne=m.isCatmullRomCurve3?m.closed:!1;C=m.computeFrenetFrames(h,ne),y=new D,T=new D,g=new D}f||(x=0,d=0,p=0,_=0);let b=a.extractPoints(c),E=b.shape,w=b.holes;if(!wn.isClockWise(E)){E=E.reverse();for(let ne=0,ae=w.length;ne<ae;ne++){let oe=w[ne];wn.isClockWise(oe)&&(w[ne]=oe.reverse())}}function U(ne){let oe=10000000000000001e-36,ve=ne[0];for(let xe=1;xe<=ne.length;xe++){let He=xe%ne.length,Ie=ne[He],We=Ie.x-ve.x,Ze=Ie.y-ve.y,F=We*We+Ze*Ze,pt=Math.max(Math.abs(Ie.x),Math.abs(Ie.y),Math.abs(ve.x),Math.abs(ve.y)),st=oe*pt*pt;if(F<=st){ne.splice(He,1),xe--;continue}ve=Ie}}U(E),w.forEach(U);let H=w.length,I=E;for(let ne=0;ne<H;ne++){let ae=w[ne];E=E.concat(ae)}function N(ne,ae,oe){return ae||ze("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(ae,oe)}let B=E.length;function q(ne,ae,oe){let ve,xe,He,Ie=ne.x-ae.x,We=ne.y-ae.y,Ze=oe.x-ne.x,F=oe.y-ne.y,pt=Ie*Ie+We*We,st=Ie*F-We*Ze;if(Math.abs(st)>Number.EPSILON){let P=Math.sqrt(pt),M=Math.sqrt(Ze*Ze+F*F),z=ae.x-We/P,W=ae.y+Ie/P,Z=oe.x-F/M,he=oe.y+Ze/M,ue=((Z-z)*F-(he-W)*Ze)/(Ie*F-We*Ze);ve=z+Ie*ue-ne.x,xe=W+We*ue-ne.y;let J=ve*ve+xe*xe;if(J<=2)return new le(ve,xe);He=Math.sqrt(J/2)}else{let P=!1;Ie>Number.EPSILON?Ze>Number.EPSILON&&(P=!0):Ie<-Number.EPSILON?Ze<-Number.EPSILON&&(P=!0):Math.sign(We)===Math.sign(F)&&(P=!0),P?(ve=-We,xe=Ie,He=Math.sqrt(pt)):(ve=Ie,xe=We,He=Math.sqrt(pt/2))}return new le(ve/He,xe/He)}let K=[];for(let ne=0,ae=I.length,oe=ae-1,ve=ne+1;ne<ae;ne++,oe++,ve++)oe===ae&&(oe=0),ve===ae&&(ve=0),K[ne]=q(I[ne],I[oe],I[ve]);let te=[],se,fe=K.concat();for(let ne=0,ae=H;ne<ae;ne++){let oe=w[ne];se=[];for(let ve=0,xe=oe.length,He=xe-1,Ie=ve+1;ve<xe;ve++,He++,Ie++)He===xe&&(He=0),Ie===xe&&(Ie=0),se[ve]=q(oe[ve],oe[He],oe[Ie]);te.push(se),fe=fe.concat(se)}let qe;if(x===0)qe=wn.triangulateShape(I,w);else{let ne=[],ae=[];for(let oe=0;oe<x;oe++){let ve=oe/x,xe=d*Math.cos(ve*Math.PI/2),He=p*Math.sin(ve*Math.PI/2)+_;for(let Ie=0,We=I.length;Ie<We;Ie++){let Ze=N(I[Ie],K[Ie],He);we(Ze.x,Ze.y,-xe),ve===0&&ne.push(Ze)}for(let Ie=0,We=H;Ie<We;Ie++){let Ze=w[Ie];se=te[Ie];let F=[];for(let pt=0,st=Ze.length;pt<st;pt++){let P=N(Ze[pt],se[pt],He);we(P.x,P.y,-xe),ve===0&&F.push(P)}ve===0&&ae.push(F)}}qe=wn.triangulateShape(ne,ae)}let ct=qe.length,tt=p+_;for(let ne=0;ne<B;ne++){let ae=f?N(E[ne],fe[ne],tt):E[ne];S?(T.copy(C.normals[0]).multiplyScalar(ae.x),y.copy(C.binormals[0]).multiplyScalar(ae.y),g.copy(R[0]).add(T).add(y),we(g.x,g.y,g.z)):we(ae.x,ae.y,0)}for(let ne=1;ne<=h;ne++)for(let ae=0;ae<B;ae++){let oe=f?N(E[ae],fe[ae],tt):E[ae];S?(T.copy(C.normals[ne]).multiplyScalar(oe.x),y.copy(C.binormals[ne]).multiplyScalar(oe.y),g.copy(R[ne]).add(T).add(y),we(g.x,g.y,g.z)):we(oe.x,oe.y,u/h*ne)}for(let ne=x-1;ne>=0;ne--){let ae=ne/x,oe=d*Math.cos(ae*Math.PI/2),ve=p*Math.sin(ae*Math.PI/2)+_;for(let xe=0,He=I.length;xe<He;xe++){let Ie=N(I[xe],K[xe],ve);we(Ie.x,Ie.y,u+oe)}for(let xe=0,He=w.length;xe<He;xe++){let Ie=w[xe];se=te[xe];for(let We=0,Ze=Ie.length;We<Ze;We++){let F=N(Ie[We],se[We],ve);S?we(F.x,F.y+R[h-1].y,R[h-1].x+oe):we(F.x,F.y,u+oe)}}}Y(),ce();function Y(){let ne=i.length/3;if(f){let ae=0,oe=B*ae;for(let ve=0;ve<ct;ve++){let xe=qe[ve];Ve(xe[2]+oe,xe[1]+oe,xe[0]+oe)}ae=h+x*2,oe=B*ae;for(let ve=0;ve<ct;ve++){let xe=qe[ve];Ve(xe[0]+oe,xe[1]+oe,xe[2]+oe)}}else{for(let ae=0;ae<ct;ae++){let oe=qe[ae];Ve(oe[2],oe[1],oe[0])}for(let ae=0;ae<ct;ae++){let oe=qe[ae];Ve(oe[0]+B*h,oe[1]+B*h,oe[2]+B*h)}}n.addGroup(ne,i.length/3-ne,0)}function ce(){let ne=i.length/3,ae=0;re(I,ae),ae+=I.length;for(let oe=0,ve=w.length;oe<ve;oe++){let xe=w[oe];re(xe,ae),ae+=xe.length}n.addGroup(ne,i.length/3-ne,1)}function re(ne,ae){let oe=ne.length;for(;--oe>=0;){let ve=oe,xe=oe-1;xe<0&&(xe=ne.length-1);for(let He=0,Ie=h+x*2;He<Ie;He++){let We=B*He,Ze=B*(He+1),F=ae+ve+We,pt=ae+xe+We,st=ae+xe+Ze,P=ae+ve+Ze;Ue(F,pt,st,P)}}}function we(ne,ae,oe){l.push(ne),l.push(ae),l.push(oe)}function Ve(ne,ae,oe){at(ne),at(ae),at(oe);let ve=i.length/3,xe=v.generateTopUV(n,i,ve-3,ve-2,ve-1);Xe(xe[0]),Xe(xe[1]),Xe(xe[2])}function Ue(ne,ae,oe,ve){at(ne),at(ae),at(ve),at(ae),at(oe),at(ve);let xe=i.length/3,He=v.generateSideWallUV(n,i,xe-6,xe-3,xe-2,xe-1);Xe(He[0]),Xe(He[1]),Xe(He[3]),Xe(He[1]),Xe(He[2]),Xe(He[3])}function at(ne){i.push(l[ne*3+0]),i.push(l[ne*3+1]),i.push(l[ne*3+2])}function Xe(ne){o.push(ne.x),o.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return od(t,n,e)}static fromJSON(e,t){let n=[];for(let o=0,r=e.shapes.length;o<r;o++){let a=t[e.shapes[o]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new fo[i.type]().fromJSON(i)),new s(n,e.options)}},rd={generateTopUV:function(s,e,t,n,i){let o=e[t*3],r=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new le(o,r),new le(a,l),new le(c,h)]},generateSideWallUV:function(s,e,t,n,i,o){let r=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],_=e[o*3],x=e[o*3+1],m=e[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new le(r,1-l),new le(c,1-u),new le(f,1-p),new le(_,1-m)]:[new le(a,1-l),new le(h,1-u),new le(d,1-p),new le(x,1-m)]}};function od(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let o=s[n];t.shapes.push(o.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ys=class s extends ht{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=it(i,0,Math.PI*2);let o=[],r=[],a=[],l=[],c=[],h=1/t,u=new D,f=new le,d=new D,p=new D,_=new D,x=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:x=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,d.x=m*1,d.y=-x,d.z=m*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:x=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,d.x=m*1,d.y=-x,d.z=m*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(p)}for(let v=0;v<=t;v++){let R=n+v*h*i,S=Math.sin(R),C=Math.cos(R);for(let y=0;y<=e.length-1;y++){u.x=e[y].x*S,u.y=e[y].y,u.z=e[y].x*C,r.push(u.x,u.y,u.z),f.x=v/t,f.y=y/(e.length-1),a.push(f.x,f.y);let T=l[3*y+0]*S,g=l[3*y+1],b=l[3*y+0]*C;c.push(T,g,b)}}for(let v=0;v<t;v++)for(let R=0;R<e.length-1;R++){let S=R+v*e.length,C=S,y=S+e.length,T=S+e.length+1,g=S+1;o.push(C,y,g),o.push(T,g,y)}this.setIndex(o),this.setAttribute("position",new Ge(r,3)),this.setAttribute("uv",new Ge(a,2)),this.setAttribute("normal",new Ge(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Vt=class s extends ht{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let o=e/2,r=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],p=[],_=[],x=[];for(let m=0;m<h;m++){let v=m*f-r;for(let R=0;R<c;R++){let S=R*u-o;p.push(S,-v,0),_.push(0,0,1),x.push(R/a),x.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let R=v+c*m,S=v+c*(m+1),C=v+1+c*(m+1),y=v+1+c*m;d.push(R,S,y),d.push(S,C,y)}this.setIndex(d),this.setAttribute("position",new Ge(p,3)),this.setAttribute("normal",new Ge(_,3)),this.setAttribute("uv",new Ge(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var ri=class s extends ht{constructor(e=new $t([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],o=[],r=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ge(i,3)),this.setAttribute("normal",new Ge(o,3)),this.setAttribute("uv",new Ge(r,2));function c(h){let u=i.length/3,f=h.extractPoints(t),d=f.shape,p=f.holes;wn.isClockWise(d)===!1&&(d=d.reverse());for(let x=0,m=p.length;x<m;x++){let v=p[x];wn.isClockWise(v)===!0&&(p[x]=v.reverse())}let _=wn.triangulateShape(d,p);for(let x=0,m=p.length;x<m;x++){let v=p[x];d=d.concat(v)}for(let x=0,m=d.length;x<m;x++){let v=d[x];i.push(v.x,v.y,0),o.push(0,0,1),r.push(v.x,v.y)}for(let x=0,m=_.length;x<m;x++){let v=_[x],R=v[0]+u,S=v[1]+u,C=v[2]+u;n.push(R,S,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ad(t,e)}static fromJSON(e,t){let n=[];for(let i=0,o=e.shapes.length;i<o;i++){let r=t[e.shapes[i]];n.push(r)}return new s(n,e.curveSegments)}};function ad(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var Qe=class s extends ht{constructor(e=1,t=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(r+a,Math.PI),c=0,h=[],u=new D,f=new D,d=[],p=[],_=[],x=[];for(let m=0;m<=n;m++){let v=[],R=m/n,S=r+R*a,C=e*Math.cos(S),y=Math.sqrt(e*e-C*C),T=0;m===0&&r===0?T=.5/t:m===n&&l===Math.PI&&(T=-.5/t);for(let g=0;g<=t;g++){let b=g/t,E=i+b*o;u.x=-y*Math.cos(E),u.y=C,u.z=y*Math.sin(E),p.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),x.push(b+T,1-R),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let R=h[m][v+1],S=h[m][v],C=h[m+1][v],y=h[m+1][v+1];(m!==0||r>0)&&d.push(R,S,y),(m!==n-1||l<Math.PI)&&d.push(S,C,y)}this.setIndex(d),this.setAttribute("position",new Ge(p,3)),this.setAttribute("normal",new Ge(_,3)),this.setAttribute("uv",new Ge(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ut=class s extends ht{constructor(e=1,t=.4,n=12,i=48,o=Math.PI*2,r=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:o,thetaStart:r,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],f=new D,d=new D,p=new D;for(let _=0;_<=n;_++){let x=r+_/n*a;for(let m=0;m<=i;m++){let v=m/i*o;d.x=(e+t*Math.cos(x))*Math.cos(v),d.y=(e+t*Math.cos(x))*Math.sin(v),d.z=t*Math.sin(x),c.push(d.x,d.y,d.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(m/i),u.push(_/n)}}for(let _=1;_<=n;_++)for(let x=1;x<=i;x++){let m=(i+1)*_+x-1,v=(i+1)*(_-1)+x-1,R=(i+1)*(_-1)+x,S=(i+1)*_+x;l.push(m,v,S),l.push(v,R,S)}this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ai=class s extends ht{constructor(e=new Ti(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:o};let r=e.computeFrenetFrames(t,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let a=new D,l=new D,c=new le,h=new D,u=[],f=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(f,3)),this.setAttribute("uv",new Ge(d,2));function _(){for(let R=0;R<t;R++)x(R);x(o===!1?t:0),v(),m()}function x(R){h=e.getPointAt(R/t,h);let S=r.normals[R],C=r.binormals[R];for(let y=0;y<=i;y++){let T=y/i*Math.PI*2,g=Math.sin(T),b=-Math.cos(T);l.x=b*S.x+g*C.x,l.y=b*S.y+g*C.y,l.z=b*S.z+g*C.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let R=1;R<=t;R++)for(let S=1;S<=i;S++){let C=(i+1)*(R-1)+(S-1),y=(i+1)*R+(S-1),T=(i+1)*R+S,g=(i+1)*(R-1)+S;p.push(C,y,g),p.push(y,T,g)}}function v(){for(let R=0;R<=t;R++)for(let S=0;S<=i;S++)c.x=R/t,c.y=S/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new fo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Pi(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(jl(i))i.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(jl(i[0])){let o=[];for(let r=0,a=i.length;r<a;r++)o[r]=i[r].clone();e[t][n]=o}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Zt(s){let e={};for(let t=0;t<s.length;t++){let n=Pi(s[t]);for(let i in n)e[i]=n[i]}return e}function jl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function cd(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Gc(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var Wh={clone:Pi,merge:Zt},ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ld,this.fragmentShader=hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pi(e.uniforms),this.uniformsGroups=cd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Fe().setHex(i.value);break;case"v2":this.uniforms[n].value=new le().fromArray(i.value);break;case"v3":this.uniforms[n].value=new D().fromArray(i.value);break;case"v4":this.uniforms[n].value=new bt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(i.value);break;case"m4":this.uniforms[n].value=new _t().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},mo=class extends on{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ce=class extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Zs=class extends Pn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var go=class extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xo=class extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Wr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}var oi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],o=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=o)){let a=t[1];e<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=o,o=t[--n-1],e>=o)break e}r=n,n=0;break t}break n}for(;n<r;){let a=n+r>>>1;e<t[a]?r=a:n=a+1}if(i=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,i)}return this.interpolate_(n,o,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=e*i;for(let r=0;r!==i;++r)t[r]=n[o+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_o=class extends oi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cc,endingEnd:cc}}intervalChanged_(e,t,n){let i=this.parameterPositions,o=e-2,r=e+1,a=i[o],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case lc:o=e,a=2*t-n;break;case hc:o=i.length-2,a=t+i[o]-i[o+1];break;default:o=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lc:r=e,l=2*n-t;break;case hc:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=o*h,this._offsetNext=r*h}interpolate_(e,t,n,i){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),_=p*p,x=_*p,m=-f*x+2*f*_-f*p,v=(1+f)*x+(-1.5-2*f)*_+(-.5+f)*p+1,R=(-1-d)*x+(1.5+d)*_+.5*p,S=d*x-d*_;for(let C=0;C!==a;++C)o[C]=m*r[h+C]+v*r[c+C]+R*r[l+C]+S*r[u+C];return o}},yo=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)o[f]=r[c+f]*u+r[l+f]*h;return o}},vo=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Mo=class extends oi{interpolate_(e,t,n,i){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(i-t),_=1-p;for(let x=0;x!==a;++x)o[x]=r[c+x]*_+r[l+x]*p;return o}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let _=r[c+p],x=r[l+p],m=d*f+p*2,v=u[m],R=u[m+1],S=e*f+p*2,C=h[S],y=h[S+1],T=(n-t)/(i-t),g,b,E,w,L;for(let U=0;U<8;U++){g=T*T,b=g*T,E=1-T,w=E*E,L=w*E;let I=L*t+3*w*T*v+3*E*g*C+b*i-n;if(Math.abs(I)<1e-10)break;let N=3*w*(v-t)+6*E*T*(C-v)+3*g*(i-C);if(Math.abs(N)<1e-10)break;T=T-I/N,T=Math.max(0,Math.min(1,T))}o[p]=L*_+3*w*T*R+3*E*g*y+b*x}return o}},an=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wr(t,this.TimeBufferType),this.values=Wr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wr(e.times,Array),values:Wr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Mo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Es:t=this.InterpolantFactoryMethodDiscrete;break;case so:t=this.InterpolantFactoryMethodLinear;break;case Yr:t=this.InterpolantFactoryMethodSmooth;break;case ac:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Oe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return so;case this.InterpolantFactoryMethodSmooth:return Yr;case this.InterpolantFactoryMethodBezier:return ac}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,o=0,r=i-1;for(;o!==i&&n[o]<e;)++o;for(;r!==-1&&n[r]>t;)--r;if(++r,o!==0||r!==i){o>=r&&(r=Math.max(r,1),o=r-1);let a=this.getValueSize();this.times=n.slice(o,r),this.values=this.values.slice(o*a,r*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,o=n.length;o===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==o;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){ze("KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(i!==void 0&&Qu(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Yr,o=e.length-1,r=1;for(let a=1;a<o;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let _=t[u+p];if(_!==t[f+p]||_!==t[d+p]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];let u=a*n,f=r*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++r}}if(o>0){e[r]=e[o];for(let a=o*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[a+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=so;var ai=class extends an{constructor(e,t,n){super(e,t,n)}};ai.prototype.ValueTypeName="bool";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=Es;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends an{constructor(e,t,n,i){super(e,t,n,i)}};bo.prototype.ValueTypeName="color";var So=class extends an{constructor(e,t,n,i){super(e,t,n,i)}};So.prototype.ValueTypeName="number";var Eo=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)Cn.slerpFlat(o,0,r,c-a,r,c,l);return o}},Js=class extends an{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Eo(this.times,this.values,this.getValueSize(),e)}};Js.prototype.ValueTypeName="quaternion";Js.prototype.InterpolantFactoryMethodSmooth=void 0;var ci=class extends an{constructor(e,t,n){super(e,t,n)}};ci.prototype.ValueTypeName="string";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Es;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var To=class extends an{constructor(e,t,n,i){super(e,t,n,i)}};To.prototype.ValueTypeName="vector";var wo=class{constructor(e,t,n){let i=this,o=!1,r=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,o===!1&&i.onStart!==void 0&&i.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xh=new wo,Ao=class{constructor(e){this.manager=e!==void 0?e:Xh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,o){n.load(e,i,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ao.DEFAULT_MATERIAL_NAME="__DEFAULT";var rs=class extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ks=class extends rs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},oc=new _t,Ql=new D,eh=new D,xc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Qt,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ts,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ql.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ql),eh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eh),t.updateMatrixWorld(),oc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ji||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xr=new D,qr=new Cn,Sn=new D,$s=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xr,qr,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xr,qr,Sn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Xr,qr,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xr,qr,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qn=new D,th=new le,nh=new le,Ht=class extends $s{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$i*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,th,nh),t.subVectors(nh,th)}setViewOffset(e,t,n,i,o,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,o=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var os=class extends $s{constructor(e=-1,t=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,o=n-e,r=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},_c=class extends xc{constructor(){super(new os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},js=class extends rs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new _c}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Qs=class extends rs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Xi=-90,qi=1,Ro=class extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ht(Xi,qi,e,t);i.layers=this.layers,this.add(i);let o=new Ht(Xi,qi,e,t);o.layers=this.layers,this.add(o);let r=new Ht(Xi,qi,e,t);r.layers=this.layers,this.add(r);let a=new Ht(Xi,qi,e,t);a.layers=this.layers,this.add(a);let l=new Ht(Xi,qi,e,t);l.layers=this.layers,this.add(l);let c=new Ht(Xi,qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,o,r,a,l]=t;for(let c of t)this.remove(c);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ji)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,r,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,1,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Co=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Vc="\\[\\]\\.:\\/",ud=new RegExp("["+Vc+"]","g"),Wc="[^"+Vc+"]",fd="[^"+Vc.replace("\\.","")+"]",dd=/((?:WC+[\/:])*)/.source.replace("WC",Wc),pd=/(WCOD+)?/.source.replace("WCOD",fd),md=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wc),gd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wc),xd=new RegExp("^"+dd+pd+md+gd+"$"),_d=["material","materials","bones","map"],yc=class{constructor(e,t,n){let i=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,o=n.length;i!==o;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ud,"")}static parseTrackName(e){let t=xd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let o=n.nodeName.substring(i+1);_d.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(o){for(let r=0;r<o.length;r++){let a=o[r];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,o=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let r=e[i];if(r===void 0){let c=t.nodeName;ze("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=o}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=yc;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bx=new Float32Array(1);var er=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Oe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Kc=class Kc{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let o=this.elements;return o[0]=e,o[2]=t,o[1]=n,o[3]=i,this}};Kc.prototype.isMatrix2=!0;var vc=Kc;function Xc(s,e,t,n){let i=yd(n);switch(t){case Fc:return s*e;case or:return s*e/i.components*i.byteLength;case Bo:return s*e/i.components*i.byteLength;case fi:return s*e*2/i.components*i.byteLength;case Oo:return s*e*2/i.components*i.byteLength;case Bc:return s*e*3/i.components*i.byteLength;case hn:return s*e*4/i.components*i.byteLength;case Ho:return s*e*4/i.components*i.byteLength;case ar:case cr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case lr:case hr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zo:case Vo:return Math.max(s,16)*Math.max(e,8)/4;case ko:case Go:return Math.max(s,8)*Math.max(e,8)/2;case Wo:case Xo:case Yo:case Zo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case qo:case ur:case Jo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case jo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ea:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ta:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case na:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ia:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case sa:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ra:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case oa:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case aa:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ca:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case la:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ha:case ua:case fa:return Math.ceil(s/4)*Math.ceil(e/4)*16;case da:case pa:return Math.ceil(s/4)*Math.ceil(e/4)*8;case fr:case ma:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yd(s){switch(s){case Qt:case Lc:return{byteLength:1,components:1};case cs:case Dc:case Ln:return{byteLength:2,components:1};case Uo:case Fo:return{byteLength:2,components:4};case _n:case No:case yn:return{byteLength:4,components:1};case Nc:case Uc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function pu(){let s=null,e=!1,t=null,n=null;function i(o,r){t(o,r),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){s=o}}}function Ad(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],_=u[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let _=u[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:o,update:r}}var Rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cd=`#ifdef USE_ALPHAHASH
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
#endif`,Pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Id=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ld=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nd=`#ifdef USE_AOMAP
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
#endif`,Ud=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fd=`#ifdef USE_BATCHING
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
#endif`,Bd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zd=`#ifdef USE_IRIDESCENCE
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
#endif`,Gd=`#ifdef USE_BUMPMAP
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
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$d=`#define PI 3.141592653589793
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
} // validated`,jd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qd=`vec3 transformedNormal = objectNormal;
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
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sp="gl_FragColor = linearToOutputTexel( gl_FragColor );",rp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,op=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hp=`#ifdef USE_ENVMAP
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
#endif`,up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mp=`#ifdef USE_GRADIENTMAP
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
}`,gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tp=`PhysicalMaterial material;
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
#endif`,wp=`uniform sampler2D dfgLUT;
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
}`,Ap=`
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
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Op=`#if defined( USE_POINTS_UV )
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
#endif`,Hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wp=`#ifdef USE_MORPHTARGETS
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
#endif`,Xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$p=`#ifdef USE_NORMALMAP
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
#endif`,jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,im=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dm=`float getShadowMask() {
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
}`,pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mm=`#ifdef USE_SKINNING
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
#endif`,gm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xm=`#ifdef USE_SKINNING
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
#endif`,_m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bm=`#ifdef USE_TRANSMISSION
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
#endif`,Sm=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cm=`uniform sampler2D t2D;
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`#include <common>
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
}`,Um=`#if DEPTH_PACKING == 3200
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
}`,Fm=`#define DISTANCE
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
}`,Bm=`#define DISTANCE
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`uniform float scale;
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
}`,zm=`uniform vec3 diffuse;
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
}`,Gm=`#include <common>
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Wm=`#define LAMBERT
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
}`,Xm=`#define LAMBERT
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
}`,qm=`#define MATCAP
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
}`,Ym=`#define MATCAP
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
}`,Zm=`#define NORMAL
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
}`,Jm=`#define NORMAL
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
}`,Km=`#define PHONG
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
}`,$m=`#define PHONG
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
}`,jm=`#define STANDARD
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
}`,Qm=`#define STANDARD
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
}`,e0=`#define TOON
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
}`,t0=`#define TOON
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
}`,n0=`uniform float size;
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
}`,i0=`uniform vec3 diffuse;
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
}`,s0=`#include <common>
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
}`,r0=`uniform vec3 color;
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
}`,o0=`uniform float rotation;
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
}`,a0=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Rd,alphahash_pars_fragment:Cd,alphamap_fragment:Pd,alphamap_pars_fragment:Id,alphatest_fragment:Ld,alphatest_pars_fragment:Dd,aomap_fragment:Nd,aomap_pars_fragment:Ud,batching_pars_vertex:Fd,batching_vertex:Bd,begin_vertex:Od,beginnormal_vertex:Hd,bsdfs:kd,iridescence_fragment:zd,bumpmap_pars_fragment:Gd,clipping_planes_fragment:Vd,clipping_planes_pars_fragment:Wd,clipping_planes_pars_vertex:Xd,clipping_planes_vertex:qd,color_fragment:Yd,color_pars_fragment:Zd,color_pars_vertex:Jd,color_vertex:Kd,common:$d,cube_uv_reflection_fragment:jd,defaultnormal_vertex:Qd,displacementmap_pars_vertex:ep,displacementmap_vertex:tp,emissivemap_fragment:np,emissivemap_pars_fragment:ip,colorspace_fragment:sp,colorspace_pars_fragment:rp,envmap_fragment:op,envmap_common_pars_fragment:ap,envmap_pars_fragment:cp,envmap_pars_vertex:lp,envmap_physical_pars_fragment:vp,envmap_vertex:hp,fog_vertex:up,fog_pars_vertex:fp,fog_fragment:dp,fog_pars_fragment:pp,gradientmap_pars_fragment:mp,lightmap_pars_fragment:gp,lights_lambert_fragment:xp,lights_lambert_pars_fragment:_p,lights_pars_begin:yp,lights_toon_fragment:Mp,lights_toon_pars_fragment:bp,lights_phong_fragment:Sp,lights_phong_pars_fragment:Ep,lights_physical_fragment:Tp,lights_physical_pars_fragment:wp,lights_fragment_begin:Ap,lights_fragment_maps:Rp,lights_fragment_end:Cp,lightprobes_pars_fragment:Pp,logdepthbuf_fragment:Ip,logdepthbuf_pars_fragment:Lp,logdepthbuf_pars_vertex:Dp,logdepthbuf_vertex:Np,map_fragment:Up,map_pars_fragment:Fp,map_particle_fragment:Bp,map_particle_pars_fragment:Op,metalnessmap_fragment:Hp,metalnessmap_pars_fragment:kp,morphinstance_vertex:zp,morphcolor_vertex:Gp,morphnormal_vertex:Vp,morphtarget_pars_vertex:Wp,morphtarget_vertex:Xp,normal_fragment_begin:qp,normal_fragment_maps:Yp,normal_pars_fragment:Zp,normal_pars_vertex:Jp,normal_vertex:Kp,normalmap_pars_fragment:$p,clearcoat_normal_fragment_begin:jp,clearcoat_normal_fragment_maps:Qp,clearcoat_pars_fragment:em,iridescence_pars_fragment:tm,opaque_fragment:nm,packing:im,premultiplied_alpha_fragment:sm,project_vertex:rm,dithering_fragment:om,dithering_pars_fragment:am,roughnessmap_fragment:cm,roughnessmap_pars_fragment:lm,shadowmap_pars_fragment:hm,shadowmap_pars_vertex:um,shadowmap_vertex:fm,shadowmask_pars_fragment:dm,skinbase_vertex:pm,skinning_pars_vertex:mm,skinning_vertex:gm,skinnormal_vertex:xm,specularmap_fragment:_m,specularmap_pars_fragment:ym,tonemapping_fragment:vm,tonemapping_pars_fragment:Mm,transmission_fragment:bm,transmission_pars_fragment:Sm,uv_pars_fragment:Em,uv_pars_vertex:Tm,uv_vertex:wm,worldpos_vertex:Am,background_vert:Rm,background_frag:Cm,backgroundCube_vert:Pm,backgroundCube_frag:Im,cube_vert:Lm,cube_frag:Dm,depth_vert:Nm,depth_frag:Um,distance_vert:Fm,distance_frag:Bm,equirect_vert:Om,equirect_frag:Hm,linedashed_vert:km,linedashed_frag:zm,meshbasic_vert:Gm,meshbasic_frag:Vm,meshlambert_vert:Wm,meshlambert_frag:Xm,meshmatcap_vert:qm,meshmatcap_frag:Ym,meshnormal_vert:Zm,meshnormal_frag:Jm,meshphong_vert:Km,meshphong_frag:$m,meshphysical_vert:jm,meshphysical_frag:Qm,meshtoon_vert:e0,meshtoon_frag:t0,points_vert:n0,points_frag:i0,shadow_vert:s0,shadow_frag:r0,sprite_vert:o0,sprite_frag:a0},ye={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Nn={basic:{uniforms:Zt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Zt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Zt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Zt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Zt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Zt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Zt([ye.points,ye.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Zt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Zt([ye.common,ye.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Zt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Zt([ye.sprite,ye.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Zt([ye.common,ye.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Zt([ye.lights,ye.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Nn.physical={uniforms:Zt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var _a={r:0,b:0,g:0},c0=new _t,mu=new Ye;mu.set(-1,0,0,0,1,0,0,0,1);function l0(s,e,t,n,i,o){let r=new Fe(0),a=i===!0?0:1,l,c,h=null,u=0,f=null;function d(v){let R=v.isScene===!0?v.background:null;if(R&&R.isTexture){let S=v.backgroundBlurriness>0;R=e.get(R,S)}return R}function p(v){let R=!1,S=d(v);S===null?x(r,a):S&&S.isColor&&(x(S,1),R=!0);let C=s.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(s.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(v,R){let S=d(R);S&&(S.isCubeTexture||S.mapping===sr)?(c===void 0&&(c=new ee(new ut(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Pi(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(c0.makeRotationFromEuler(R.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mu),c.material.toneMapped=rt.getTransfer(S.colorSpace)!==lt,(h!==S||u!==S.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ee(new Vt(2,2),new on({name:"BackgroundMaterial",uniforms:Pi(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=rt.getTransfer(S.colorSpace)!==lt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function x(v,R){v.getRGB(_a,Gc(s)),t.buffers.color.setClear(_a.r,_a.g,_a.b,R,o)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,R=1){r.set(v),a=R,x(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,x(r,a)},render:p,addToRenderList:_,dispose:m}}function h0(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),o=i,r=!1;function a(w,L,U,H,I){let N=!1,B=u(w,H,U,L);o!==B&&(o=B,c(o.object)),N=d(w,H,U,I),N&&p(w,H,U,I),I!==null&&e.update(I,s.ELEMENT_ARRAY_BUFFER),(N||r)&&(r=!1,S(w,L,U,H),I!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return s.createVertexArray()}function c(w){return s.bindVertexArray(w)}function h(w){return s.deleteVertexArray(w)}function u(w,L,U,H){let I=H.wireframe===!0,N=n[L.id];N===void 0&&(N={},n[L.id]=N);let B=w.isInstancedMesh===!0?w.id:0,q=N[B];q===void 0&&(q={},N[B]=q);let K=q[U.id];K===void 0&&(K={},q[U.id]=K);let te=K[I];return te===void 0&&(te=f(l()),K[I]=te),te}function f(w){let L=[],U=[],H=[];for(let I=0;I<t;I++)L[I]=0,U[I]=0,H[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:H,object:w,attributes:{},index:null}}function d(w,L,U,H){let I=o.attributes,N=L.attributes,B=0,q=U.getAttributes();for(let K in q)if(q[K].location>=0){let se=I[K],fe=N[K];if(fe===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(fe=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(fe=w.instanceColor)),se===void 0||se.attribute!==fe||fe&&se.data!==fe.data)return!0;B++}return o.attributesNum!==B||o.index!==H}function p(w,L,U,H){let I={},N=L.attributes,B=0,q=U.getAttributes();for(let K in q)if(q[K].location>=0){let se=N[K];se===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(se=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(se=w.instanceColor));let fe={};fe.attribute=se,se&&se.data&&(fe.data=se.data),I[K]=fe,B++}o.attributes=I,o.attributesNum=B,o.index=H}function _(){let w=o.newAttributes;for(let L=0,U=w.length;L<U;L++)w[L]=0}function x(w){m(w,0)}function m(w,L){let U=o.newAttributes,H=o.enabledAttributes,I=o.attributeDivisors;U[w]=1,H[w]===0&&(s.enableVertexAttribArray(w),H[w]=1),I[w]!==L&&(s.vertexAttribDivisor(w,L),I[w]=L)}function v(){let w=o.newAttributes,L=o.enabledAttributes;for(let U=0,H=L.length;U<H;U++)L[U]!==w[U]&&(s.disableVertexAttribArray(U),L[U]=0)}function R(w,L,U,H,I,N,B){B===!0?s.vertexAttribIPointer(w,L,U,I,N):s.vertexAttribPointer(w,L,U,H,I,N)}function S(w,L,U,H){_();let I=H.attributes,N=U.getAttributes(),B=L.defaultAttributeValues;for(let q in N){let K=N[q];if(K.location>=0){let te=I[q];if(te===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(te=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(te=w.instanceColor)),te!==void 0){let se=te.normalized,fe=te.itemSize,qe=e.get(te);if(qe===void 0)continue;let ct=qe.buffer,tt=qe.type,Y=qe.bytesPerElement,ce=tt===s.INT||tt===s.UNSIGNED_INT||te.gpuType===No;if(te.isInterleavedBufferAttribute){let re=te.data,we=re.stride,Ve=te.offset;if(re.isInstancedInterleavedBuffer){for(let Ue=0;Ue<K.locationSize;Ue++)m(K.location+Ue,re.meshPerAttribute);w.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ue=0;Ue<K.locationSize;Ue++)x(K.location+Ue);s.bindBuffer(s.ARRAY_BUFFER,ct);for(let Ue=0;Ue<K.locationSize;Ue++)R(K.location+Ue,fe/K.locationSize,tt,se,we*Y,(Ve+fe/K.locationSize*Ue)*Y,ce)}else{if(te.isInstancedBufferAttribute){for(let re=0;re<K.locationSize;re++)m(K.location+re,te.meshPerAttribute);w.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let re=0;re<K.locationSize;re++)x(K.location+re);s.bindBuffer(s.ARRAY_BUFFER,ct);for(let re=0;re<K.locationSize;re++)R(K.location+re,fe/K.locationSize,tt,se,fe*Y,fe/K.locationSize*re*Y,ce)}}else if(B!==void 0){let se=B[q];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(K.location,se);break;case 3:s.vertexAttrib3fv(K.location,se);break;case 4:s.vertexAttrib4fv(K.location,se);break;default:s.vertexAttrib1fv(K.location,se)}}}}v()}function C(){b();for(let w in n){let L=n[w];for(let U in L){let H=L[U];for(let I in H){let N=H[I];for(let B in N)h(N[B].object),delete N[B];delete H[I]}}delete n[w]}}function y(w){if(n[w.id]===void 0)return;let L=n[w.id];for(let U in L){let H=L[U];for(let I in H){let N=H[I];for(let B in N)h(N[B].object),delete N[B];delete H[I]}}delete n[w.id]}function T(w){for(let L in n){let U=n[L];for(let H in U){let I=U[H];if(I[w.id]===void 0)continue;let N=I[w.id];for(let B in N)h(N[B].object),delete N[B];delete I[w.id]}}}function g(w){for(let L in n){let U=n[L],H=w.isInstancedMesh===!0?w.id:0,I=U[H];if(I!==void 0){for(let N in I){let B=I[N];for(let q in B)h(B[q].object),delete B[q];delete I[N]}delete U[H],Object.keys(U).length===0&&delete n[L]}}}function b(){E(),r=!0,o!==i&&(o=i,c(o.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:b,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:y,releaseStatesOfObject:g,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:x,disableUnusedAttributes:v}}function u0(s,e,t){let n;function i(l){n=l}function o(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function r(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a}function f0(s,e,t,n){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){return!(T!==hn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let g=T===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Qt&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==yn&&!g)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Oe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=s.getParameter(s.MAX_SAMPLES),y=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:v,maxVaryings:R,maxFragmentUniforms:S,maxSamples:C,samples:y}}function d0(s){let e=this,t=null,n=0,i=!1,o=!1,r=new En,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,_=u.clipIntersection,x=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||o&&!x)o?h(null):c();else{let v=o?0:n,R=v*4,S=m.clippingState||null;l.value=S,S=h(p,f,R,d);for(let C=0;C!==R;++C)S[C]=t[C];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){let _=u!==null?u.length:0,x=null;if(_!==0){if(x=l.value,p!==!0||x===null){let m=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(x===null||x.length<m)&&(x=new Float32Array(m));for(let R=0,S=d;R!==_;++R,S+=4)r.copy(u[R]).applyMatrix4(v,a),r.normal.toArray(x,S),x[S+3]=r.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,x}}var di=4,qh=[.125,.215,.35,.446,.526,.582],Ii=20,p0=256,pr=new os,Yh=new Fe,$c=null,jc=0,Qc=0,el=!1,m0=new D,va=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,o={}){let{size:r=256,position:a=m0}=o;$c=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($c,jc,Qc),this._renderer.xr.enabled=el,e.scissorTest=!1,hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===li||e.mapping===Ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$c=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Ln,format:hn,colorSpace:Ts,depthBuffer:!1},i=Zh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zh(e,t,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=g0(o)),this._blurMaterial=_0(o,e,t),this._ggxMaterial=x0(o,e,t)}return i}_compileMaterial(e){let t=new ee(new ht,e);this._renderer.compile(t,pr)}_sceneToCubeUV(e,t,n,i,o){let l=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Yh),u.toneMapping=xn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ee(new ut,new Lt({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,x=_.material,m=!1,v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,m=!0):(x.color.copy(Yh),m=!0);for(let R=0;R<6;R++){let S=R%3;S===0?(l.up.set(0,c[R],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+h[R],o.y,o.z)):S===1?(l.up.set(0,0,c[R]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+h[R],o.z)):(l.up.set(0,c[R],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+h[R]));let C=this._cubeSize;hs(i,S*C,R>2?C:0,C,C),u.setRenderTarget(i),m&&u.render(_,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===li||e.mapping===Ri;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jh());let o=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=o;let a=o.uniforms;a.envMap.value=e;let l=this._cubeSize;hs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,pr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let o=1;o<i;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,o=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;let l=r.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,d=u*f,{_lodMax:p}=this,_=this._sizeLods[n],x=3*_*(n>p-di?n-p+di:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,hs(o,x,m,3*_,2*_),i.setRenderTarget(o),i.render(a,pr),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=p-n,hs(e,x,m,3*_,2*_),i.setRenderTarget(e),i.render(a,pr)}_blur(e,t,n,i,o){let r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",o),this._halfBlur(r,e,n,n,i,"longitudinal",o)}_halfBlur(e,t,n,i,o,r,a){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&ze("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[i];u.material=c;let f=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*Ii-1),_=o/p,x=isFinite(o)?1+Math.floor(h*_):Ii;x>Ii&&Oe(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ii}`);let m=[],v=0;for(let T=0;T<Ii;++T){let g=T/_,b=Math.exp(-g*g/2);m.push(b),T===0?v+=b:T<x&&(v+=2*b)}for(let T=0;T<m.length;T++)m[T]=m[T]/v;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=m,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:R}=this;f.dTheta.value=p,f.mipInt.value=R-n;let S=this._sizeLods[i],C=3*S*(i>R-di?i-R+di:0),y=4*(this._cubeSize-S);hs(t,C,y,3*S,2*S),l.setRenderTarget(t),l.render(u,pr)}};function g0(s){let e=[],t=[],n=[],i=s,o=s-di+1+qh.length;for(let r=0;r<o;r++){let a=Math.pow(2,i);e.push(a);let l=1/a;r>s-di?l=qh[r-s+di-1]:r===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,_=3,x=2,m=1,v=new Float32Array(_*p*d),R=new Float32Array(x*p*d),S=new Float32Array(m*p*d);for(let y=0;y<d;y++){let T=y%3*2/3-1,g=y>2?0:-1,b=[T,g,0,T+2/3,g,0,T+2/3,g+1,0,T,g,0,T+2/3,g+1,0,T,g+1,0];v.set(b,_*p*y),R.set(f,x*p*y);let E=[y,y,y,y,y,y];S.set(E,m*p*y)}let C=new ht;C.setAttribute("position",new Nt(v,_)),C.setAttribute("uv",new Nt(R,x)),C.setAttribute("faceIndex",new Nt(S,m)),n.push(new ee(C,null)),i>di&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Zh(s,e,t){let n=new sn(s,e,t);return n.texture.mapping=sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function x0(s,e,t){return new on({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:p0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sa(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function _0(s,e,t){let n=new Float32Array(Ii),i=new D(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Sa(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Jh(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sa(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Kh(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Sa(){return`

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
	`}var Ma=class extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Fs(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ut(5,5,5),o=new on({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:In});o.uniforms.tEquirect.value=t;let r=new ee(i,o),a=t.minFilter;return t.minFilter===hi&&(t.minFilter=zt),new Ro(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let o=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(o)}};function y0(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?r(f):o(f)}function o(f){if(f&&f.isTexture){let d=f.mapping;if(d===Io||d===Lo)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let _=new Ma(p.height);return _.fromEquirectangularTexture(s,f),e.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function r(f){if(f&&f.isTexture){let d=f.mapping,p=d===Io||d===Lo,_=d===li||d===Ri;if(p||_){let x=t.get(f),m=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new va(s)),x=p?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,t.set(f,x),x.texture;if(x!==void 0)return x.texture;{let v=f.image;return p&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new va(s)),x=p?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,t.set(f,x),f.addEventListener("dispose",h),x.texture):null}}}return f}function a(f,d){return d===Io?f.mapping=li:d===Lo&&(f.mapping=Ri),f}function l(f){let d=0,p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function v0(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&vi("WebGLRenderer: "+n+" extension not supported."),i}}}function M0(s,e,t,n){let i={},o=new WeakMap;function r(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",r),delete i[f.id];let d=o.get(f);d&&(e.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,_=0;if(p===void 0)return;if(d!==null){let v=d.array;_=d.version;for(let R=0,S=v.length;R<S;R+=3){let C=v[R+0],y=v[R+1],T=v[R+2];f.push(C,y,y,T,T,C)}}else{let v=p.array;_=p.version;for(let R=0,S=v.length/3-1;R<S;R+=3){let C=R+0,y=R+1,T=R+2;f.push(C,y,y,T,T,C)}}let x=new(p.count>=65535?Ds:Ls)(f,1);x.version=_;let m=o.get(u);m&&e.remove(m),o.set(u,x)}function h(u){let f=o.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function b0(s,e,t){let n;function i(u){n=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function l(u,f){s.drawElements(n,f,o,u*r),t.update(f,n,1)}function c(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,o,u*r,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,u,0,d);let _=0;for(let x=0;x<d;x++)_+=f[x];t.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function S0(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(t.calls++,r){case s.TRIANGLES:t.triangles+=a*(o/3);break;case s.LINES:t.lines+=a*(o/2);break;case s.LINE_STRIP:t.lines+=a*(o-1);break;case s.LINE_LOOP:t.lines+=a*o;break;case s.POINTS:t.points+=a*o;break;default:ze("WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function E0(s,e,t){let n=new WeakMap,i=new bt;function o(r,a,l){let c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let b=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],R=0;d===!0&&(R=1),p===!0&&(R=2),_===!0&&(R=3);let S=a.attributes.position.count*R,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let y=new Float32Array(S*C*4*u),T=new Rs(y,S,C,u);T.type=yn,T.needsUpdate=!0;let g=R*4;for(let E=0;E<u;E++){let w=x[E],L=m[E],U=v[E],H=S*C*4*E;for(let I=0;I<w.count;I++){let N=I*g;d===!0&&(i.fromBufferAttribute(w,I),y[H+N+0]=i.x,y[H+N+1]=i.y,y[H+N+2]=i.z,y[H+N+3]=0),p===!0&&(i.fromBufferAttribute(L,I),y[H+N+4]=i.x,y[H+N+5]=i.y,y[H+N+6]=i.z,y[H+N+7]=0),_===!0&&(i.fromBufferAttribute(U,I),y[H+N+8]=i.x,y[H+N+9]=i.y,y[H+N+10]=i.z,y[H+N+11]=U.itemSize===4?i.w:1)}}f={count:u,texture:T,size:new le(S,C)},n.set(a,f),a.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:o}}function T0(s,e,t,n,i){let o=new WeakMap;function r(c){let h=i.render.frame,u=c.geometry,f=e.get(c,u);if(o.get(f)!==h&&(e.update(f),o.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),o.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;o.get(d)!==h&&(d.update(),o.set(d,h))}return f}function a(){o=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:a}}var w0={[Tc]:"LINEAR_TONE_MAPPING",[wc]:"REINHARD_TONE_MAPPING",[Ac]:"CINEON_TONE_MAPPING",[ir]:"ACES_FILMIC_TONE_MAPPING",[Cc]:"AGX_TONE_MAPPING",[Pc]:"NEUTRAL_TONE_MAPPING",[Rc]:"CUSTOM_TONE_MAPPING"};function A0(s,e,t,n,i,o){let r=new sn(e,t,{type:s,depthBuffer:i,stencilBuffer:o,samples:n?4:0,depthTexture:i?new Vn(e,t):void 0}),a=new sn(e,t,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),l=new ht;l.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ge([0,2,0,0,2,0],2));let c=new mo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ee(l,c),u=new os(-1,1,1,-1,0,1),f=null,d=null,p=!1,_,x=null,m=[],v=!1;this.setSize=function(R,S){r.setSize(R,S),a.setSize(R,S);for(let C=0;C<m.length;C++){let y=m[C];y.setSize&&y.setSize(R,S)}},this.setEffects=function(R){m=R,v=m.length>0&&m[0].isRenderPass===!0;let S=r.width,C=r.height;for(let y=0;y<m.length;y++){let T=m[y];T.setSize&&T.setSize(S,C)}},this.begin=function(R,S){if(p||R.toneMapping===xn&&m.length===0)return!1;if(x=S,S!==null){let C=S.width,y=S.height;(r.width!==C||r.height!==y)&&this.setSize(C,y)}return v===!1&&R.setRenderTarget(r),_=R.toneMapping,R.toneMapping=xn,!0},this.hasRenderPass=function(){return v},this.end=function(R,S){R.toneMapping=_,p=!0;let C=r,y=a;for(let T=0;T<m.length;T++){let g=m[T];if(g.enabled!==!1&&(g.render(R,y,C,S),g.needsSwap!==!1)){let b=C;C=y,y=b}}if(f!==R.outputColorSpace||d!==R.toneMapping){f=R.outputColorSpace,d=R.toneMapping,c.defines={},rt.getTransfer(f)===lt&&(c.defines.SRGB_TRANSFER="");let T=w0[d];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=C.texture,R.setRenderTarget(x),R.render(h,u),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),l.dispose(),c.dispose()}}var gu=new Kt,il=new Vn(1,1),xu=new Rs,_u=new ao,yu=new Fs,$h=[],jh=[],Qh=new Float32Array(16),eu=new Float32Array(9),tu=new Float32Array(4);function fs(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,o=$h[i];if(o===void 0&&(o=new Float32Array(i),$h[i]=o),e!==0){n.toArray(o,0);for(let r=1,a=0;r!==e;++r)a+=t,s[r].toArray(o,a)}return o}function Ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Bt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ea(s,e){let t=jh[e];t===void 0&&(t=new Int32Array(e),jh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function R0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function C0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2fv(this.addr,e),Bt(t,e)}}function P0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;s.uniform3fv(this.addr,e),Bt(t,e)}}function I0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4fv(this.addr,e),Bt(t,e)}}function L0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;tu.set(n),s.uniformMatrix2fv(this.addr,!1,tu),Bt(t,n)}}function D0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;eu.set(n),s.uniformMatrix3fv(this.addr,!1,eu),Bt(t,n)}}function N0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,n))return;Qh.set(n),s.uniformMatrix4fv(this.addr,!1,Qh),Bt(t,n)}}function U0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function F0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2iv(this.addr,e),Bt(t,e)}}function B0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3iv(this.addr,e),Bt(t,e)}}function O0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4iv(this.addr,e),Bt(t,e)}}function H0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function k0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2uiv(this.addr,e),Bt(t,e)}}function z0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3uiv(this.addr,e),Bt(t,e)}}function G0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4uiv(this.addr,e),Bt(t,e)}}function V0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(il.compareFunction=t.isReversedDepthBuffer()?xa:ga,o=il):o=gu,t.setTexture2D(e||o,i)}function W0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||_u,i)}function X0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||yu,i)}function q0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||xu,i)}function Y0(s){switch(s){case 5126:return R0;case 35664:return C0;case 35665:return P0;case 35666:return I0;case 35674:return L0;case 35675:return D0;case 35676:return N0;case 5124:case 35670:return U0;case 35667:case 35671:return F0;case 35668:case 35672:return B0;case 35669:case 35673:return O0;case 5125:return H0;case 36294:return k0;case 36295:return z0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return q0}}function Z0(s,e){s.uniform1fv(this.addr,e)}function J0(s,e){let t=fs(e,this.size,2);s.uniform2fv(this.addr,t)}function K0(s,e){let t=fs(e,this.size,3);s.uniform3fv(this.addr,t)}function $0(s,e){let t=fs(e,this.size,4);s.uniform4fv(this.addr,t)}function j0(s,e){let t=fs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Q0(s,e){let t=fs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function eg(s,e){let t=fs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function tg(s,e){s.uniform1iv(this.addr,e)}function ng(s,e){s.uniform2iv(this.addr,e)}function ig(s,e){s.uniform3iv(this.addr,e)}function sg(s,e){s.uniform4iv(this.addr,e)}function rg(s,e){s.uniform1uiv(this.addr,e)}function og(s,e){s.uniform2uiv(this.addr,e)}function ag(s,e){s.uniform3uiv(this.addr,e)}function cg(s,e){s.uniform4uiv(this.addr,e)}function lg(s,e,t){let n=this.cache,i=e.length,o=Ea(t,i);Ft(n,o)||(s.uniform1iv(this.addr,o),Bt(n,o));let r;this.type===s.SAMPLER_2D_SHADOW?r=il:r=gu;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||r,o[a])}function hg(s,e,t){let n=this.cache,i=e.length,o=Ea(t,i);Ft(n,o)||(s.uniform1iv(this.addr,o),Bt(n,o));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||_u,o[r])}function ug(s,e,t){let n=this.cache,i=e.length,o=Ea(t,i);Ft(n,o)||(s.uniform1iv(this.addr,o),Bt(n,o));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||yu,o[r])}function fg(s,e,t){let n=this.cache,i=e.length,o=Ea(t,i);Ft(n,o)||(s.uniform1iv(this.addr,o),Bt(n,o));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||xu,o[r])}function dg(s){switch(s){case 5126:return Z0;case 35664:return J0;case 35665:return K0;case 35666:return $0;case 35674:return j0;case 35675:return Q0;case 35676:return eg;case 5124:case 35670:return tg;case 35667:case 35671:return ng;case 35668:case 35672:return ig;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return og;case 36295:return ag;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return fg}}var sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Y0(t.type)}},rl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dg(t.type)}},ol=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let o=0,r=i.length;o!==r;++o){let a=i[o];a.setValue(e,t[a.id],n)}}},tl=/(\w+)(\])?(\[|\.)?/g;function nu(s,e){s.seq.push(e),s.map[e.id]=e}function pg(s,e,t){let n=s.name,i=n.length;for(tl.lastIndex=0;;){let o=tl.exec(n),r=tl.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){nu(t,c===void 0?new sl(a,s,e):new rl(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new ol(a),nu(t,u)),t=u}}}var us=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=e.getActiveUniform(t,r),l=e.getUniformLocation(t,a.name);pg(a,l,this)}let i=[],o=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):o.push(r);i.length>0&&(this.seq=i.concat(o))}setValue(e,t,n,i){let o=this.map[t];o!==void 0&&o.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let o=0,r=t.length;o!==r;++o){let a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,o=e.length;i!==o;++i){let r=e[i];r.id in t&&n.push(r)}return n}};function iu(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var mg=37297,gg=0;function xg(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let r=i;r<o;r++){let a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}var su=new Ye;function _g(s){rt._getMatrix(su,rt.workingColorSpace,s);let e=`mat3( ${su.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(s)){case ws:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ru(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),o=(s.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";let r=/ERROR: 0:(\d+)/.exec(o);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+o+`

`+xg(s.getShaderSource(e),a)}else return o}function yg(s,e){let t=_g(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var vg={[Tc]:"Linear",[wc]:"Reinhard",[Ac]:"Cineon",[ir]:"ACESFilmic",[Cc]:"AgX",[Pc]:"Neutral",[Rc]:"Custom"};function Mg(s,e){let t=vg[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ya=new D;function bg(){rt.getLuminanceCoefficients(ya);let s=ya.x.toFixed(4),e=ya.y.toFixed(4),t=ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function Eg(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tg(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let o=s.getActiveAttrib(e,i),r=o.name,a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),t[r]={type:o.type,location:s.getAttribLocation(e,r),locationSize:a}}return t}function gr(s){return s!==""}function ou(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function au(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(s){return s.replace(wg,Rg)}var Ag=new Map;function Rg(s,e){let t=et[e];if(t===void 0){let n=Ag.get(e);if(n!==void 0)t=et[n],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return al(t)}var Cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cu(s){return s.replace(Cg,Pg)}function Pg(s,e,t,n){let i="";for(let o=parseInt(e);o<parseInt(t);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function lu(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Ig={[tr]:"SHADOWMAP_TYPE_PCF",[as]:"SHADOWMAP_TYPE_VSM"};function Lg(s){return Ig[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Dg={[li]:"ENVMAP_TYPE_CUBE",[Ri]:"ENVMAP_TYPE_CUBE",[sr]:"ENVMAP_TYPE_CUBE_UV"};function Ng(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Dg[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ug={[Ri]:"ENVMAP_MODE_REFRACTION"};function Fg(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Ug[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Bg={[Ec]:"ENVMAP_BLENDING_MULTIPLY",[Eh]:"ENVMAP_BLENDING_MIX",[Th]:"ENVMAP_BLENDING_ADD"};function Og(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Bg[s.combine]||"ENVMAP_BLENDING_NONE"}function Hg(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function kg(s,e,t,n){let i=s.getContext(),o=t.defines,r=t.vertexShader,a=t.fragmentShader,l=Lg(t),c=Ng(t),h=Fg(t),u=Og(t),f=Hg(t),d=Sg(t),p=Eg(o),_=i.createProgram(),x,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(gr).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(gr).join(`
`),m.length>0&&(m+=`
`)):(x=[lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),m=[lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?et.tonemapping_pars_fragment:"",t.toneMapping!==xn?Mg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,yg("linearToOutputTexel",t.outputColorSpace),bg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gr).join(`
`)),r=al(r),r=ou(r,t),r=au(r,t),a=al(a),a=ou(a,t),a=au(a,t),r=cu(r),a=cu(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let R=v+x+r,S=v+m+a,C=iu(i,i.VERTEX_SHADER,R),y=iu(i,i.FRAGMENT_SHADER,S);i.attachShader(_,C),i.attachShader(_,y),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(w){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(_)||"",U=i.getShaderInfoLog(C)||"",H=i.getShaderInfoLog(y)||"",I=L.trim(),N=U.trim(),B=H.trim(),q=!0,K=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,C,y);else{let te=ru(i,C,"vertex"),se=ru(i,y,"fragment");ze("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+I+`
`+te+`
`+se)}else I!==""?Oe("WebGLProgram: Program Info Log:",I):(N===""||B==="")&&(K=!1);K&&(w.diagnostics={runnable:q,programLog:I,vertexShader:{log:N,prefix:x},fragmentShader:{log:B,prefix:m}})}i.deleteShader(C),i.deleteShader(y),g=new us(i,_),b=Tg(i,_)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(_,mg)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=y,this}var zg=0,cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ll(e),t.set(e,n)),n}},ll=class{constructor(e){this.id=zg++,this.code=e,this.usedTimes=0}};function Gg(s){return s===fi||s===ur||s===fr}function Vg(s,e,t,n,i,o){let r=new Cs,a=new cl,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,b,E,w,L,U){let H=w.fog,I=L.geometry,N=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?w.environment:null,B=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,q=e.get(g.envMap||N,B),K=q&&q.mapping===sr?q.image.height:null,te=d[g.type];g.precision!==null&&(f=n.getMaxPrecision(g.precision),f!==g.precision&&Oe("WebGLProgram.getParameters:",g.precision,"not supported, using",f,"instead."));let se=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,fe=se!==void 0?se.length:0,qe=0;I.morphAttributes.position!==void 0&&(qe=1),I.morphAttributes.normal!==void 0&&(qe=2),I.morphAttributes.color!==void 0&&(qe=3);let ct,tt,Y,ce;if(te){let Ae=Nn[te];ct=Ae.vertexShader,tt=Ae.fragmentShader}else{ct=g.vertexShader,tt=g.fragmentShader;let Ae=a.getVertexShaderStage(g),Et=a.getFragmentShaderStage(g);a.update(g,Ae,Et),Y=Ae.id,ce=Et.id}let re=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Ve=L.isInstancedMesh===!0,Ue=L.isBatchedMesh===!0,at=!!g.map,Xe=!!g.matcap,ne=!!q,ae=!!g.aoMap,oe=!!g.lightMap,ve=!!g.bumpMap&&g.wireframe===!1,xe=!!g.normalMap,He=!!g.displacementMap,Ie=!!g.emissiveMap,We=!!g.metalnessMap,Ze=!!g.roughnessMap,F=g.anisotropy>0,pt=g.clearcoat>0,st=g.dispersion>0,P=g.iridescence>0,M=g.sheen>0,z=g.transmission>0,W=F&&!!g.anisotropyMap,Z=pt&&!!g.clearcoatMap,he=pt&&!!g.clearcoatNormalMap,ue=pt&&!!g.clearcoatRoughnessMap,J=P&&!!g.iridescenceMap,Q=P&&!!g.iridescenceThicknessMap,pe=M&&!!g.sheenColorMap,Le=M&&!!g.sheenRoughnessMap,_e=!!g.specularMap,me=!!g.specularColorMap,Be=!!g.specularIntensityMap,ke=z&&!!g.transmissionMap,$e=z&&!!g.thicknessMap,O=!!g.gradientMap,de=!!g.alphaMap,j=g.alphaTest>0,ge=!!g.alphaHash,Se=!!g.extensions,ie=xn;g.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ie=s.toneMapping);let Pe={shaderID:te,shaderType:g.type,shaderName:g.name,vertexShader:ct,fragmentShader:tt,defines:g.defines,customVertexShaderID:Y,customFragmentShaderID:ce,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:f,batching:Ue,batchingColor:Ue&&L._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&L.instanceColor!==null,instancingMorph:Ve&&L.morphTexture!==null,outputColorSpace:re===null?s.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:at,matcap:Xe,envMap:ne,envMapMode:ne&&q.mapping,envMapCubeUVHeight:K,aoMap:ae,lightMap:oe,bumpMap:ve,normalMap:xe,displacementMap:He,emissiveMap:Ie,normalMapObjectSpace:xe&&g.normalMapType===Rh,normalMapTangentSpace:xe&&g.normalMapType===dr,packedNormalMap:xe&&g.normalMapType===dr&&Gg(g.normalMap.format),metalnessMap:We,roughnessMap:Ze,anisotropy:F,anisotropyMap:W,clearcoat:pt,clearcoatMap:Z,clearcoatNormalMap:he,clearcoatRoughnessMap:ue,dispersion:st,iridescence:P,iridescenceMap:J,iridescenceThicknessMap:Q,sheen:M,sheenColorMap:pe,sheenRoughnessMap:Le,specularMap:_e,specularColorMap:me,specularIntensityMap:Be,transmission:z,transmissionMap:ke,thicknessMap:$e,gradientMap:O,opaque:g.transparent===!1&&g.blending===Mi&&g.alphaToCoverage===!1,alphaMap:de,alphaTest:j,alphaHash:ge,combine:g.combine,mapUv:at&&p(g.map.channel),aoMapUv:ae&&p(g.aoMap.channel),lightMapUv:oe&&p(g.lightMap.channel),bumpMapUv:ve&&p(g.bumpMap.channel),normalMapUv:xe&&p(g.normalMap.channel),displacementMapUv:He&&p(g.displacementMap.channel),emissiveMapUv:Ie&&p(g.emissiveMap.channel),metalnessMapUv:We&&p(g.metalnessMap.channel),roughnessMapUv:Ze&&p(g.roughnessMap.channel),anisotropyMapUv:W&&p(g.anisotropyMap.channel),clearcoatMapUv:Z&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:he&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&p(g.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:Le&&p(g.sheenRoughnessMap.channel),specularMapUv:_e&&p(g.specularMap.channel),specularColorMapUv:me&&p(g.specularColorMap.channel),specularIntensityMapUv:Be&&p(g.specularIntensityMap.channel),transmissionMapUv:ke&&p(g.transmissionMap.channel),thicknessMapUv:$e&&p(g.thicknessMap.channel),alphaMapUv:de&&p(g.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(xe||F),vertexNormals:!!I.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(at||de),fog:!!H,useFog:g.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||I.attributes.normal===void 0&&xe===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:we,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:qe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&E.length>0,shadowMapType:s.shadowMap.type,toneMapping:ie,decodeVideoTexture:at&&g.map.isVideoTexture===!0&&rt.getTransfer(g.map.colorSpace)===lt,decodeVideoTextureEmissive:Ie&&g.emissiveMap.isVideoTexture===!0&&rt.getTransfer(g.emissiveMap.colorSpace)===lt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===kt,flipSided:g.side===Wt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Se&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&g.extensions.multiDraw===!0||Ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function x(g){let b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(let E in g.defines)b.push(E),b.push(g.defines[E]);return g.isRawShaderMaterial===!1&&(m(b,g),v(b,g),b.push(s.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function m(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function v(g,b){r.disableAll(),b.instancing&&r.enable(0),b.instancingColor&&r.enable(1),b.instancingMorph&&r.enable(2),b.matcap&&r.enable(3),b.envMap&&r.enable(4),b.normalMapObjectSpace&&r.enable(5),b.normalMapTangentSpace&&r.enable(6),b.clearcoat&&r.enable(7),b.iridescence&&r.enable(8),b.alphaTest&&r.enable(9),b.vertexColors&&r.enable(10),b.vertexAlphas&&r.enable(11),b.vertexUv1s&&r.enable(12),b.vertexUv2s&&r.enable(13),b.vertexUv3s&&r.enable(14),b.vertexTangents&&r.enable(15),b.anisotropy&&r.enable(16),b.alphaHash&&r.enable(17),b.batching&&r.enable(18),b.dispersion&&r.enable(19),b.batchingColor&&r.enable(20),b.gradientMap&&r.enable(21),b.packedNormalMap&&r.enable(22),b.vertexNormals&&r.enable(23),g.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reversedDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.decodeVideoTextureEmissive&&r.enable(20),b.alphaToCoverage&&r.enable(21),b.numLightProbeGrids>0&&r.enable(22),b.hasPositionAttribute&&r.enable(23),g.push(r.mask)}function R(g){let b=d[g.type],E;if(b){let w=Nn[b];E=Wh.clone(w.uniforms)}else E=g.uniforms;return E}function S(g,b){let E=h.get(b);return E!==void 0?++E.usedTimes:(E=new kg(s,b,g,i),c.push(E),h.set(b,E)),E}function C(g){if(--g.usedTimes===0){let b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function y(g){a.remove(g)}function T(){a.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:R,acquireProgram:S,releaseProgram:C,releaseShaderCache:y,programs:c,dispose:T}}function Wg(){let s=new WeakMap;function e(r){return s.has(r)}function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,l){s.get(r)[a]=l}function o(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:o}}function Xg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function hu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function uu(){let s=[],e=0,t=[],n=[],i=[];function o(){e=0,t.length=0,n.length=0,i.length=0}function r(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,_,x,m){let v=s[e];return v===void 0?(v={id:f.id,object:f,geometry:d,material:p,materialVariant:r(f),groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},s[e]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=p,v.materialVariant=r(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=x,v.group=m),e++,v}function l(f,d,p,_,x,m){let v=a(f,d,p,_,x,m);p.transmission>0?n.push(v):p.transparent===!0?i.push(v):t.push(v)}function c(f,d,p,_,x,m){let v=a(f,d,p,_,x,m);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function h(f,d,p){t.length>1&&t.sort(f||Xg),n.length>1&&n.sort(d||hu),i.length>1&&i.sort(d||hu),p&&(t.reverse(),n.reverse(),i.reverse())}function u(){for(let f=e,d=s.length;f<d;f++){let p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:o,push:l,unshift:c,finish:u,sort:h}}function qg(){let s=new WeakMap;function e(n,i){let o=s.get(n),r;return o===void 0?(r=new uu,s.set(n,[r])):i>=o.length?(r=new uu,o.push(r)):r=o[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function Yg(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Fe};break;case"SpotLight":t={position:new D,direction:new D,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function Zg(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Jg=0;function Kg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function $g(s){let e=new Yg,t=Zg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let i=new D,o=new _t,r=new _t;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,p=0,_=0,x=0,m=0,v=0,R=0,S=0,C=0,y=0,T=0;c.sort(Kg);for(let b=0,E=c.length;b<E;b++){let w=c[b],L=w.color,U=w.intensity,H=w.distance,I=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===fi?I=w.shadow.map.texture:I=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)h+=L.r*U,u+=L.g*U,f+=L.b*U;else if(w.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(w.sh.coefficients[N],U);T++}else if(w.isDirectionalLight){let N=e.get(w);if(N.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let B=w.shadow,q=t.get(w);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,n.directionalShadow[d]=q,n.directionalShadowMap[d]=I,n.directionalShadowMatrix[d]=w.shadow.matrix,v++}n.directional[d]=N,d++}else if(w.isSpotLight){let N=e.get(w);N.position.setFromMatrixPosition(w.matrixWorld),N.color.copy(L).multiplyScalar(U),N.distance=H,N.coneCos=Math.cos(w.angle),N.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),N.decay=w.decay,n.spot[_]=N;let B=w.shadow;if(w.map&&(n.spotLightMap[C]=w.map,C++,B.updateMatrices(w),w.castShadow&&y++),n.spotLightMatrix[_]=B.matrix,w.castShadow){let q=t.get(w);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=I,S++}_++}else if(w.isRectAreaLight){let N=e.get(w);N.color.copy(L).multiplyScalar(U),N.halfWidth.set(w.width*.5,0,0),N.halfHeight.set(0,w.height*.5,0),n.rectArea[x]=N,x++}else if(w.isPointLight){let N=e.get(w);if(N.color.copy(w.color).multiplyScalar(w.intensity),N.distance=w.distance,N.decay=w.decay,w.castShadow){let B=w.shadow,q=t.get(w);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,q.shadowCameraNear=B.camera.near,q.shadowCameraFar=B.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=I,n.pointShadowMatrix[p]=w.shadow.matrix,R++}n.point[p]=N,p++}else if(w.isHemisphereLight){let N=e.get(w);N.skyColor.copy(w.color).multiplyScalar(U),N.groundColor.copy(w.groundColor).multiplyScalar(U),n.hemi[m]=N,m++}}x>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let g=n.hash;(g.directionalLength!==d||g.pointLength!==p||g.spotLength!==_||g.rectAreaLength!==x||g.hemiLength!==m||g.numDirectionalShadows!==v||g.numPointShadows!==R||g.numSpotShadows!==S||g.numSpotMaps!==C||g.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=x,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=S+C-y,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=T,g.directionalLength=d,g.pointLength=p,g.spotLength=_,g.rectAreaLength=x,g.hemiLength=m,g.numDirectionalShadows=v,g.numPointShadows=R,g.numSpotShadows=S,g.numSpotMaps=C,g.numLightProbes=T,n.version=Jg++)}function l(c,h){let u=0,f=0,d=0,p=0,_=0,x=h.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){let R=c[m];if(R.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(R.matrixWorld),i.setFromMatrixPosition(R.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(x),u++}else if(R.isSpotLight){let S=n.spot[d];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(R.matrixWorld),i.setFromMatrixPosition(R.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(x),d++}else if(R.isRectAreaLight){let S=n.rectArea[p];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(x),r.identity(),o.copy(R.matrixWorld),o.premultiply(x),r.extractRotation(o),S.halfWidth.set(R.width*.5,0,0),S.halfHeight.set(0,R.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),p++}else if(R.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(x),f++}else if(R.isHemisphereLight){let S=n.hemi[_];S.direction.setFromMatrixPosition(R.matrixWorld),S.direction.transformDirection(x),_++}}}return{setup:a,setupView:l,state:n}}function fu(s){let e=new $g(s),t=[],n=[],i=[];function o(f){u.camera=f,t.length=0,n.length=0,i.length=0}function r(f){t.push(f)}function a(f){n.push(f)}function l(f){i.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:u,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:a,pushLightProbeGrid:l}}function jg(s){let e=new WeakMap;function t(i,o=0){let r=e.get(i),a;return r===void 0?(a=new fu(s),e.set(i,[a])):o>=r.length?(a=new fu(s),r.push(a)):a=r[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ex=`uniform sampler2D shadow_pass;
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
}`,tx=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],nx=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],du=new _t,mr=new D,nl=new D;function ix(s,e,t){let n=new ts,i=new le,o=new le,r=new bt,a=new go,l=new xo,c={},h=t.maxTextureSize,u={[zn]:Wt,[Wt]:zn,[kt]:kt},f=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Qg,fragmentShader:ex}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new ht;p.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ee(p,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tr;let m=this.type;this.render=function(y,T,g){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||y.length===0)return;this.type===rh&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tr);let b=s.getRenderTarget(),E=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),L=s.state;L.setBlending(In),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let U=m!==this.type;U&&T.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(I=>I.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,I=y.length;H<I;H++){let N=y[H],B=N.shadow;if(B===void 0){Oe("WebGLShadowMap:",N,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let q=B.getFrameExtents();i.multiply(q),o.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/q.x),i.x=o.x*q.x,B.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/q.y),i.y=o.y*q.y,B.mapSize.y=o.y));let K=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=K,B.map===null||U===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===as){if(N.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new sn(i.x,i.y,{format:fi,type:Ln,minFilter:zt,magFilter:zt,generateMipmaps:!1}),B.map.texture.name=N.name+".shadowMap",B.map.depthTexture=new Vn(i.x,i.y,yn),B.map.depthTexture.name=N.name+".shadowMapDepth",B.map.depthTexture.format=An,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ct,B.map.depthTexture.magFilter=Ct}else N.isPointLight?(B.map=new Ma(i.x),B.map.depthTexture=new co(i.x,_n)):(B.map=new sn(i.x,i.y),B.map.depthTexture=new Vn(i.x,i.y,_n)),B.map.depthTexture.name=N.name+".shadowMap",B.map.depthTexture.format=An,this.type===tr?(B.map.depthTexture.compareFunction=K?xa:ga,B.map.depthTexture.minFilter=zt,B.map.depthTexture.magFilter=zt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ct,B.map.depthTexture.magFilter=Ct);B.camera.updateProjectionMatrix()}let te=B.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<te;se++){if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,se),s.clear();else{se===0&&(s.setRenderTarget(B.map),s.clear());let fe=B.getViewport(se);r.set(o.x*fe.x,o.y*fe.y,o.x*fe.z,o.y*fe.w),L.viewport(r)}if(N.isPointLight){let fe=B.camera,qe=B.matrix,ct=N.distance||fe.far;ct!==fe.far&&(fe.far=ct,fe.updateProjectionMatrix()),mr.setFromMatrixPosition(N.matrixWorld),fe.position.copy(mr),nl.copy(fe.position),nl.add(tx[se]),fe.up.copy(nx[se]),fe.lookAt(nl),fe.updateMatrixWorld(),qe.makeTranslation(-mr.x,-mr.y,-mr.z),du.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),B._frustum.setFromProjectionMatrix(du,fe.coordinateSystem,fe.reversedDepth)}else B.updateMatrices(N);n=B.getFrustum(),S(T,g,B.camera,N,this.type)}B.isPointLightShadow!==!0&&this.type===as&&v(B,g),B.needsUpdate=!1}m=this.type,x.needsUpdate=!1,s.setRenderTarget(b,E,w)};function v(y,T){let g=e.update(_);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new sn(i.x,i.y,{format:fi,type:Ln})),f.uniforms.shadow_pass.value=y.map.depthTexture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(T,null,g,f,_,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(T,null,g,d,_,null)}function R(y,T,g,b){let E=null,w=g.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(w!==void 0)E=w;else if(E=g.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let L=E.uuid,U=T.uuid,H=c[L];H===void 0&&(H={},c[L]=H);let I=H[U];I===void 0&&(I=E.clone(),H[U]=I,T.addEventListener("dispose",C)),E=I}if(E.visible=T.visible,E.wireframe=T.wireframe,b===as?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:u[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,g.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let L=s.properties.get(E);L.light=g}return E}function S(y,T,g,b,E){if(y.visible===!1)return;if(y.layers.test(T.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&E===as)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,y.matrixWorld);let U=e.update(y),H=y.material;if(Array.isArray(H)){let I=U.groups;for(let N=0,B=I.length;N<B;N++){let q=I[N],K=H[q.materialIndex];if(K&&K.visible){let te=R(y,K,b,E);y.onBeforeShadow(s,y,T,g,U,te,q),s.renderBufferDirect(g,null,U,te,y,q),y.onAfterShadow(s,y,T,g,U,te,q)}}}else if(H.visible){let I=R(y,H,b,E);y.onBeforeShadow(s,y,T,g,U,I,null),s.renderBufferDirect(g,null,U,I,y,null),y.onAfterShadow(s,y,T,g,U,I,null)}}let L=y.children;for(let U=0,H=L.length;U<H;U++)S(L[U],T,g,b,E)}function C(y){y.target.removeEventListener("dispose",C);for(let g in c){let b=c[g],E=y.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}function sx(s,e){function t(){let O=!1,de=new bt,j=null,ge=new bt(0,0,0,0);return{setMask:function(Se){j!==Se&&!O&&(s.colorMask(Se,Se,Se,Se),j=Se)},setLocked:function(Se){O=Se},setClear:function(Se,ie,Pe,Ae,Et){Et===!0&&(Se*=Ae,ie*=Ae,Pe*=Ae),de.set(Se,ie,Pe,Ae),ge.equals(de)===!1&&(s.clearColor(Se,ie,Pe,Ae),ge.copy(de))},reset:function(){O=!1,j=null,ge.set(-1,0,0,0)}}}function n(){let O=!1,de=!1,j=null,ge=null,Se=null;return{setReversed:function(ie){if(de!==ie){let Pe=e.get("EXT_clip_control");ie?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),de=ie;let Ae=Se;Se=null,this.setClear(Ae)}},getReversed:function(){return de},setTest:function(ie){ie?re(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(ie){j!==ie&&!O&&(s.depthMask(ie),j=ie)},setFunc:function(ie){if(de&&(ie=Oh[ie]),ge!==ie){switch(ie){case Kr:s.depthFunc(s.NEVER);break;case $r:s.depthFunc(s.ALWAYS);break;case jr:s.depthFunc(s.LESS);break;case bi:s.depthFunc(s.LEQUAL);break;case Qr:s.depthFunc(s.EQUAL);break;case eo:s.depthFunc(s.GEQUAL);break;case to:s.depthFunc(s.GREATER);break;case no:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=ie}},setLocked:function(ie){O=ie},setClear:function(ie){Se!==ie&&(Se=ie,de&&(ie=1-ie),s.clearDepth(ie))},reset:function(){O=!1,j=null,ge=null,Se=null,de=!1}}}function i(){let O=!1,de=null,j=null,ge=null,Se=null,ie=null,Pe=null,Ae=null,Et=null;return{setTest:function(yt){O||(yt?re(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(yt){de!==yt&&!O&&(s.stencilMask(yt),de=yt)},setFunc:function(yt,vn,Mn){(j!==yt||ge!==vn||Se!==Mn)&&(s.stencilFunc(yt,vn,Mn),j=yt,ge=vn,Se=Mn)},setOp:function(yt,vn,Mn){(ie!==yt||Pe!==vn||Ae!==Mn)&&(s.stencilOp(yt,vn,Mn),ie=yt,Pe=vn,Ae=Mn)},setLocked:function(yt){O=yt},setClear:function(yt){Et!==yt&&(s.clearStencil(yt),Et=yt)},reset:function(){O=!1,de=null,j=null,ge=null,Se=null,ie=null,Pe=null,Ae=null,Et=null}}}let o=new t,r=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],_=null,x=!1,m=null,v=null,R=null,S=null,C=null,y=null,T=null,g=new Fe(0,0,0),b=0,E=!1,w=null,L=null,U=null,H=null,I=null,N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,q=0,K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(K)[1]),B=q>=1):K.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),B=q>=2);let te=null,se={},fe=s.getParameter(s.SCISSOR_BOX),qe=s.getParameter(s.VIEWPORT),ct=new bt().fromArray(fe),tt=new bt().fromArray(qe);function Y(O,de,j,ge){let Se=new Uint8Array(4),ie=s.createTexture();s.bindTexture(O,ie),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pe=0;Pe<j;Pe++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(de,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(de+Pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return ie}let ce={};ce[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),re(s.DEPTH_TEST),r.setFunc(bi),ve(!1),xe(Mc),re(s.CULL_FACE),ae(In);function re(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function we(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function Ve(O,de){return f[O]!==de?(s.bindFramebuffer(O,de),f[O]=de,O===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=de),O===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=de),!0):!1}function Ue(O,de){let j=p,ge=!1;if(O){j=d.get(de),j===void 0&&(j=[],d.set(de,j));let Se=O.textures;if(j.length!==Se.length||j[0]!==s.COLOR_ATTACHMENT0){for(let ie=0,Pe=Se.length;ie<Pe;ie++)j[ie]=s.COLOR_ATTACHMENT0+ie;j.length=Se.length,ge=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,ge=!0);ge&&s.drawBuffers(j)}function at(O){return _!==O?(s.useProgram(O),_=O,!0):!1}let Xe={[ti]:s.FUNC_ADD,[ah]:s.FUNC_SUBTRACT,[ch]:s.FUNC_REVERSE_SUBTRACT};Xe[lh]=s.MIN,Xe[hh]=s.MAX;let ne={[uh]:s.ZERO,[fh]:s.ONE,[dh]:s.SRC_COLOR,[Zr]:s.SRC_ALPHA,[yh]:s.SRC_ALPHA_SATURATE,[xh]:s.DST_COLOR,[mh]:s.DST_ALPHA,[ph]:s.ONE_MINUS_SRC_COLOR,[Jr]:s.ONE_MINUS_SRC_ALPHA,[_h]:s.ONE_MINUS_DST_COLOR,[gh]:s.ONE_MINUS_DST_ALPHA,[vh]:s.CONSTANT_COLOR,[Mh]:s.ONE_MINUS_CONSTANT_COLOR,[bh]:s.CONSTANT_ALPHA,[Sh]:s.ONE_MINUS_CONSTANT_ALPHA};function ae(O,de,j,ge,Se,ie,Pe,Ae,Et,yt){if(O===In){x===!0&&(we(s.BLEND),x=!1);return}if(x===!1&&(re(s.BLEND),x=!0),O!==oh){if(O!==m||yt!==E){if((v!==ti||C!==ti)&&(s.blendEquation(s.FUNC_ADD),v=ti,C=ti),yt)switch(O){case Mi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nr:s.blendFunc(s.ONE,s.ONE);break;case bc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ze("WebGLState: Invalid blending: ",O);break}else switch(O){case Mi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case bc:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sc:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",O);break}R=null,S=null,y=null,T=null,g.set(0,0,0),b=0,m=O,E=yt}return}Se=Se||de,ie=ie||j,Pe=Pe||ge,(de!==v||Se!==C)&&(s.blendEquationSeparate(Xe[de],Xe[Se]),v=de,C=Se),(j!==R||ge!==S||ie!==y||Pe!==T)&&(s.blendFuncSeparate(ne[j],ne[ge],ne[ie],ne[Pe]),R=j,S=ge,y=ie,T=Pe),(Ae.equals(g)===!1||Et!==b)&&(s.blendColor(Ae.r,Ae.g,Ae.b,Et),g.copy(Ae),b=Et),m=O,E=!1}function oe(O,de){O.side===kt?we(s.CULL_FACE):re(s.CULL_FACE);let j=O.side===Wt;de&&(j=!j),ve(j),O.blending===Mi&&O.transparent===!1?ae(In):ae(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),o.setMask(O.colorWrite);let ge=O.stencilWrite;a.setTest(ge),ge&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ie(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?re(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function ve(O){w!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),w=O)}function xe(O){O!==ih?(re(s.CULL_FACE),O!==L&&(O===Mc?s.cullFace(s.BACK):O===sh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),L=O}function He(O){O!==U&&(B&&s.lineWidth(O),U=O)}function Ie(O,de,j){O?(re(s.POLYGON_OFFSET_FILL),(H!==de||I!==j)&&(H=de,I=j,r.getReversed()&&(de=-de),s.polygonOffset(de,j))):we(s.POLYGON_OFFSET_FILL)}function We(O){O?re(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function Ze(O){O===void 0&&(O=s.TEXTURE0+N-1),te!==O&&(s.activeTexture(O),te=O)}function F(O,de,j){j===void 0&&(te===null?j=s.TEXTURE0+N-1:j=te);let ge=se[j];ge===void 0&&(ge={type:void 0,texture:void 0},se[j]=ge),(ge.type!==O||ge.texture!==de)&&(te!==j&&(s.activeTexture(j),te=j),s.bindTexture(O,de||ce[O]),ge.type=O,ge.texture=de)}function pt(){let O=se[te];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function st(){try{s.compressedTexImage2D(...arguments)}catch(O){ze("WebGLState:",O)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(O){ze("WebGLState:",O)}}function M(){try{s.texSubImage2D(...arguments)}catch(O){ze("WebGLState:",O)}}function z(){try{s.texSubImage3D(...arguments)}catch(O){ze("WebGLState:",O)}}function W(){try{s.compressedTexSubImage2D(...arguments)}catch(O){ze("WebGLState:",O)}}function Z(){try{s.compressedTexSubImage3D(...arguments)}catch(O){ze("WebGLState:",O)}}function he(){try{s.texStorage2D(...arguments)}catch(O){ze("WebGLState:",O)}}function ue(){try{s.texStorage3D(...arguments)}catch(O){ze("WebGLState:",O)}}function J(){try{s.texImage2D(...arguments)}catch(O){ze("WebGLState:",O)}}function Q(){try{s.texImage3D(...arguments)}catch(O){ze("WebGLState:",O)}}function pe(O){return u[O]!==void 0?u[O]:s.getParameter(O)}function Le(O,de){u[O]!==de&&(s.pixelStorei(O,de),u[O]=de)}function _e(O){ct.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),ct.copy(O))}function me(O){tt.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),tt.copy(O))}function Be(O,de){let j=c.get(de);j===void 0&&(j=new WeakMap,c.set(de,j));let ge=j.get(O);ge===void 0&&(ge=s.getUniformBlockIndex(de,O.name),j.set(O,ge))}function ke(O,de){let ge=c.get(de).get(O);l.get(de)!==ge&&(s.uniformBlockBinding(de,ge,O.__bindingPointIndex),l.set(de,ge))}function $e(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},te=null,se={},f={},d=new WeakMap,p=[],_=null,x=!1,m=null,v=null,R=null,S=null,C=null,y=null,T=null,g=new Fe(0,0,0),b=0,E=!1,w=null,L=null,U=null,H=null,I=null,ct.set(0,0,s.canvas.width,s.canvas.height),tt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:re,disable:we,bindFramebuffer:Ve,drawBuffers:Ue,useProgram:at,setBlending:ae,setMaterial:oe,setFlipSided:ve,setCullFace:xe,setLineWidth:He,setPolygonOffset:Ie,setScissorTest:We,activeTexture:Ze,bindTexture:F,unbindTexture:pt,compressedTexImage2D:st,compressedTexImage3D:P,texImage2D:J,texImage3D:Q,pixelStorei:Le,getParameter:pe,updateUBOMapping:Be,uniformBlockBinding:ke,texStorage2D:he,texStorage3D:ue,texSubImage2D:M,texSubImage3D:z,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:_e,viewport:me,reset:$e}}function rx(s,e,t,n,i,o,r){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,M){return p?new OffscreenCanvas(P,M):As("canvas")}function x(P,M,z){let W=1,Z=st(P);if((Z.width>z||Z.height>z)&&(W=z/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let he=Math.floor(W*Z.width),ue=Math.floor(W*Z.height);f===void 0&&(f=_(he,ue));let J=M?_(he,ue):f;return J.width=he,J.height=ue,J.getContext("2d").drawImage(P,0,0,he,ue),Oe("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+he+"x"+ue+")."),J}else return"data"in P&&Oe("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function m(P){return P.generateMipmaps}function v(P){s.generateMipmap(P)}function R(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(P,M,z,W,Z,he=!1){if(P!==null){if(s[P]!==void 0)return s[P];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue;W&&(ue=e.get("EXT_texture_norm16"),ue||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=M;if(M===s.RED&&(z===s.FLOAT&&(J=s.R32F),z===s.HALF_FLOAT&&(J=s.R16F),z===s.UNSIGNED_BYTE&&(J=s.R8),z===s.UNSIGNED_SHORT&&ue&&(J=ue.R16_EXT),z===s.SHORT&&ue&&(J=ue.R16_SNORM_EXT)),M===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.R8UI),z===s.UNSIGNED_SHORT&&(J=s.R16UI),z===s.UNSIGNED_INT&&(J=s.R32UI),z===s.BYTE&&(J=s.R8I),z===s.SHORT&&(J=s.R16I),z===s.INT&&(J=s.R32I)),M===s.RG&&(z===s.FLOAT&&(J=s.RG32F),z===s.HALF_FLOAT&&(J=s.RG16F),z===s.UNSIGNED_BYTE&&(J=s.RG8),z===s.UNSIGNED_SHORT&&ue&&(J=ue.RG16_EXT),z===s.SHORT&&ue&&(J=ue.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.RG8UI),z===s.UNSIGNED_SHORT&&(J=s.RG16UI),z===s.UNSIGNED_INT&&(J=s.RG32UI),z===s.BYTE&&(J=s.RG8I),z===s.SHORT&&(J=s.RG16I),z===s.INT&&(J=s.RG32I)),M===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.RGB8UI),z===s.UNSIGNED_SHORT&&(J=s.RGB16UI),z===s.UNSIGNED_INT&&(J=s.RGB32UI),z===s.BYTE&&(J=s.RGB8I),z===s.SHORT&&(J=s.RGB16I),z===s.INT&&(J=s.RGB32I)),M===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),z===s.UNSIGNED_INT&&(J=s.RGBA32UI),z===s.BYTE&&(J=s.RGBA8I),z===s.SHORT&&(J=s.RGBA16I),z===s.INT&&(J=s.RGBA32I)),M===s.RGB&&(z===s.UNSIGNED_SHORT&&ue&&(J=ue.RGB16_EXT),z===s.SHORT&&ue&&(J=ue.RGB16_SNORM_EXT),z===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),M===s.RGBA){let Q=he?ws:rt.getTransfer(Z);z===s.FLOAT&&(J=s.RGBA32F),z===s.HALF_FLOAT&&(J=s.RGBA16F),z===s.UNSIGNED_BYTE&&(J=Q===lt?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT&&ue&&(J=ue.RGBA16_EXT),z===s.SHORT&&ue&&(J=ue.RGBA16_SNORM_EXT),z===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function C(P,M){let z;return P?M===null||M===_n||M===ls?z=s.DEPTH24_STENCIL8:M===yn?z=s.DEPTH32F_STENCIL8:M===cs&&(z=s.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===_n||M===ls?z=s.DEPTH_COMPONENT24:M===yn?z=s.DEPTH_COMPONENT32F:M===cs&&(z=s.DEPTH_COMPONENT16),z}function y(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ct&&P.minFilter!==zt?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function T(P){let M=P.target;M.removeEventListener("dispose",T),b(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&u.delete(M)}function g(P){let M=P.target;M.removeEventListener("dispose",g),w(M)}function b(P){let M=n.get(P);if(M.__webglInit===void 0)return;let z=P.source,W=d.get(z);if(W){let Z=W[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(P),Object.keys(W).length===0&&d.delete(z)}n.remove(P)}function E(P){let M=n.get(P);s.deleteTexture(M.__webglTexture);let z=P.source,W=d.get(z);delete W[M.__cacheKey],r.memory.textures--}function w(P){let M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(M.__webglFramebuffer[W]))for(let Z=0;Z<M.__webglFramebuffer[W].length;Z++)s.deleteFramebuffer(M.__webglFramebuffer[W][Z]);else s.deleteFramebuffer(M.__webglFramebuffer[W]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[W])}else{if(Array.isArray(M.__webglFramebuffer))for(let W=0;W<M.__webglFramebuffer.length;W++)s.deleteFramebuffer(M.__webglFramebuffer[W]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let W=0;W<M.__webglColorRenderbuffer.length;W++)M.__webglColorRenderbuffer[W]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[W]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=P.textures;for(let W=0,Z=z.length;W<Z;W++){let he=n.get(z[W]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),r.memory.textures--),n.remove(z[W])}n.remove(P)}let L=0;function U(){L=0}function H(){return L}function I(P){L=P}function N(){let P=L;return P>=i.maxTextures&&Oe("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),L+=1,P}function B(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function q(P,M){let z=n.get(P);if(P.isVideoTexture&&F(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){let W=P.image;if(W===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{we(z,P,M);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+M)}function K(P,M){let z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){we(z,P,M);return}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+M)}function te(P,M){let z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){we(z,P,M);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+M)}function se(P,M){let z=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&z.__version!==P.version){Ve(z,P,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+M)}let fe={[jt]:s.REPEAT,[Tn]:s.CLAMP_TO_EDGE,[io]:s.MIRRORED_REPEAT},qe={[Ct]:s.NEAREST,[wh]:s.NEAREST_MIPMAP_NEAREST,[rr]:s.NEAREST_MIPMAP_LINEAR,[zt]:s.LINEAR,[Do]:s.LINEAR_MIPMAP_NEAREST,[hi]:s.LINEAR_MIPMAP_LINEAR},ct={[Ch]:s.NEVER,[Nh]:s.ALWAYS,[Ph]:s.LESS,[ga]:s.LEQUAL,[Ih]:s.EQUAL,[xa]:s.GEQUAL,[Lh]:s.GREATER,[Dh]:s.NOTEQUAL};function tt(P,M){if(M.type===yn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===zt||M.magFilter===Do||M.magFilter===rr||M.magFilter===hi||M.minFilter===zt||M.minFilter===Do||M.minFilter===rr||M.minFilter===hi)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,fe[M.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,fe[M.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,fe[M.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,qe[M.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,qe[M.minFilter]),M.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ct[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ct||M.minFilter!==rr&&M.minFilter!==hi||M.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Y(P,M){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",T));let W=M.source,Z=d.get(W);Z===void 0&&(Z={},d.set(W,Z));let he=B(M);if(he!==P.__cacheKey){Z[he]===void 0&&(Z[he]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,z=!0),Z[he].usedTimes++;let ue=Z[P.__cacheKey];ue!==void 0&&(Z[P.__cacheKey].usedTimes--,ue.usedTimes===0&&E(M)),P.__cacheKey=he,P.__webglTexture=Z[he].texture}return z}function ce(P,M,z){return Math.floor(Math.floor(P/z)/M)}function re(P,M,z,W){let he=P.updateRanges;if(he.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,z,W,M.data);else{he.sort((Le,_e)=>Le.start-_e.start);let ue=0;for(let Le=1;Le<he.length;Le++){let _e=he[ue],me=he[Le],Be=_e.start+_e.count,ke=ce(me.start,M.width,4),$e=ce(_e.start,M.width,4);me.start<=Be+1&&ke===$e&&ce(me.start+me.count-1,M.width,4)===ke?_e.count=Math.max(_e.count,me.start+me.count-_e.start):(++ue,he[ue]=me)}he.length=ue+1;let J=t.getParameter(s.UNPACK_ROW_LENGTH),Q=t.getParameter(s.UNPACK_SKIP_PIXELS),pe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Le=0,_e=he.length;Le<_e;Le++){let me=he[Le],Be=Math.floor(me.start/4),ke=Math.ceil(me.count/4),$e=Be%M.width,O=Math.floor(Be/M.width),de=ke,j=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(s.UNPACK_SKIP_ROWS,O),t.texSubImage2D(s.TEXTURE_2D,0,$e,O,de,j,z,W,M.data)}P.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,J),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(s.UNPACK_SKIP_ROWS,pe)}}function we(P,M,z){let W=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(W=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(W=s.TEXTURE_3D);let Z=Y(P,M),he=M.source;t.bindTexture(W,P.__webglTexture,s.TEXTURE0+z);let ue=n.get(he);if(he.version!==ue.__version||Z===!0){if(t.activeTexture(s.TEXTURE0+z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let j=rt.getPrimaries(rt.workingColorSpace),ge=M.colorSpace===Wn?null:rt.getPrimaries(M.colorSpace),Se=M.colorSpace===Wn||j===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let Q=x(M.image,!1,i.maxTextureSize);Q=pt(M,Q);let pe=o.convert(M.format,M.colorSpace),Le=o.convert(M.type),_e=S(M.internalFormat,pe,Le,M.normalized,M.colorSpace,M.isVideoTexture);tt(W,M);let me,Be=M.mipmaps,ke=M.isVideoTexture!==!0,$e=ue.__version===void 0||Z===!0,O=he.dataReady,de=y(M,Q);if(M.isDepthTexture)_e=C(M.format===ui,M.type),$e&&(ke?t.texStorage2D(s.TEXTURE_2D,1,_e,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,_e,Q.width,Q.height,0,pe,Le,null));else if(M.isDataTexture)if(Be.length>0){ke&&$e&&t.texStorage2D(s.TEXTURE_2D,de,_e,Be[0].width,Be[0].height);for(let j=0,ge=Be.length;j<ge;j++)me=Be[j],ke?O&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,me.width,me.height,pe,Le,me.data):t.texImage2D(s.TEXTURE_2D,j,_e,me.width,me.height,0,pe,Le,me.data);M.generateMipmaps=!1}else ke?($e&&t.texStorage2D(s.TEXTURE_2D,de,_e,Q.width,Q.height),O&&re(M,Q,pe,Le)):t.texImage2D(s.TEXTURE_2D,0,_e,Q.width,Q.height,0,pe,Le,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ke&&$e&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,_e,Be[0].width,Be[0].height,Q.depth);for(let j=0,ge=Be.length;j<ge;j++)if(me=Be[j],M.format!==hn)if(pe!==null)if(ke){if(O)if(M.layerUpdates.size>0){let Se=Xc(me.width,me.height,M.format,M.type);for(let ie of M.layerUpdates){let Pe=me.data.subarray(ie*Se/me.data.BYTES_PER_ELEMENT,(ie+1)*Se/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,ie,me.width,me.height,1,pe,Pe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,Q.depth,pe,me.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,_e,me.width,me.height,Q.depth,0,me.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?O&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,Q.depth,pe,Le,me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,j,_e,me.width,me.height,Q.depth,0,pe,Le,me.data)}else{ke&&$e&&t.texStorage2D(s.TEXTURE_2D,de,_e,Be[0].width,Be[0].height);for(let j=0,ge=Be.length;j<ge;j++)me=Be[j],M.format!==hn?pe!==null?ke?O&&t.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(s.TEXTURE_2D,j,_e,me.width,me.height,0,me.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?O&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,me.width,me.height,pe,Le,me.data):t.texImage2D(s.TEXTURE_2D,j,_e,me.width,me.height,0,pe,Le,me.data)}else if(M.isDataArrayTexture)if(ke){if($e&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,_e,Q.width,Q.height,Q.depth),O)if(M.layerUpdates.size>0){let j=Xc(Q.width,Q.height,M.format,M.type);for(let ge of M.layerUpdates){let Se=Q.data.subarray(ge*j/Q.data.BYTES_PER_ELEMENT,(ge+1)*j/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ge,Q.width,Q.height,1,pe,Le,Se)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pe,Le,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,Q.width,Q.height,Q.depth,0,pe,Le,Q.data);else if(M.isData3DTexture)ke?($e&&t.texStorage3D(s.TEXTURE_3D,de,_e,Q.width,Q.height,Q.depth),O&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pe,Le,Q.data)):t.texImage3D(s.TEXTURE_3D,0,_e,Q.width,Q.height,Q.depth,0,pe,Le,Q.data);else if(M.isFramebufferTexture){if($e)if(ke)t.texStorage2D(s.TEXTURE_2D,de,_e,Q.width,Q.height);else{let j=Q.width,ge=Q.height;for(let Se=0;Se<de;Se++)t.texImage2D(s.TEXTURE_2D,Se,_e,j,ge,0,pe,Le,null),j>>=1,ge>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){let j=s.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),u.add(M),j.onpaint=ge=>{let Se=ge.changedElements;for(let ie of u)Se.includes(ie.image)&&(ie.needsUpdate=!0)},j.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Q);else{let Se=s.RGBA,ie=s.RGBA,Pe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Se,ie,Pe,Q)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Be.length>0){if(ke&&$e){let j=st(Be[0]);t.texStorage2D(s.TEXTURE_2D,de,_e,j.width,j.height)}for(let j=0,ge=Be.length;j<ge;j++)me=Be[j],ke?O&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,pe,Le,me):t.texImage2D(s.TEXTURE_2D,j,_e,pe,Le,me);M.generateMipmaps=!1}else if(ke){if($e){let j=st(Q);t.texStorage2D(s.TEXTURE_2D,de,_e,j.width,j.height)}O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe,Le,Q)}else t.texImage2D(s.TEXTURE_2D,0,_e,pe,Le,Q);m(M)&&v(W),ue.__version=he.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Ve(P,M,z){if(M.image.length!==6)return;let W=Y(P,M),Z=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+z);let he=n.get(Z);if(Z.version!==he.__version||W===!0){t.activeTexture(s.TEXTURE0+z);let ue=rt.getPrimaries(rt.workingColorSpace),J=M.colorSpace===Wn?null:rt.getPrimaries(M.colorSpace),Q=M.colorSpace===Wn||ue===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let pe=M.isCompressedTexture||M.image[0].isCompressedTexture,Le=M.image[0]&&M.image[0].isDataTexture,_e=[];for(let ie=0;ie<6;ie++)!pe&&!Le?_e[ie]=x(M.image[ie],!0,i.maxCubemapSize):_e[ie]=Le?M.image[ie].image:M.image[ie],_e[ie]=pt(M,_e[ie]);let me=_e[0],Be=o.convert(M.format,M.colorSpace),ke=o.convert(M.type),$e=S(M.internalFormat,Be,ke,M.normalized,M.colorSpace),O=M.isVideoTexture!==!0,de=he.__version===void 0||W===!0,j=Z.dataReady,ge=y(M,me);tt(s.TEXTURE_CUBE_MAP,M);let Se;if(pe){O&&de&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,$e,me.width,me.height);for(let ie=0;ie<6;ie++){Se=_e[ie].mipmaps;for(let Pe=0;Pe<Se.length;Pe++){let Ae=Se[Pe];M.format!==hn?Be!==null?O?j&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,0,0,Ae.width,Ae.height,Be,Ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,$e,Ae.width,Ae.height,0,Ae.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,0,0,Ae.width,Ae.height,Be,ke,Ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe,$e,Ae.width,Ae.height,0,Be,ke,Ae.data)}}}else{if(Se=M.mipmaps,O&&de){Se.length>0&&ge++;let ie=st(_e[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,$e,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Le){O?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,_e[ie].width,_e[ie].height,Be,ke,_e[ie].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,$e,_e[ie].width,_e[ie].height,0,Be,ke,_e[ie].data);for(let Pe=0;Pe<Se.length;Pe++){let Et=Se[Pe].image[ie].image;O?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,0,0,Et.width,Et.height,Be,ke,Et.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,$e,Et.width,Et.height,0,Be,ke,Et.data)}}else{O?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Be,ke,_e[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,$e,Be,ke,_e[ie]);for(let Pe=0;Pe<Se.length;Pe++){let Ae=Se[Pe];O?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,0,0,Be,ke,Ae.image[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe+1,$e,Be,ke,Ae.image[ie])}}}m(M)&&v(s.TEXTURE_CUBE_MAP),he.__version=Z.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function Ue(P,M,z,W,Z,he){let ue=o.convert(z.format,z.colorSpace),J=o.convert(z.type),Q=S(z.internalFormat,ue,J,z.normalized,z.colorSpace),pe=n.get(M),Le=n.get(z);if(Le.__renderTarget=M,!pe.__hasExternalTextures){let _e=Math.max(1,M.width>>he),me=Math.max(1,M.height>>he);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,he,Q,_e,me,M.depth,0,ue,J,null):t.texImage2D(Z,he,Q,_e,me,0,ue,J,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),Ze(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,W,Z,Le.__webglTexture,0,We(M)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,W,Z,Le.__webglTexture,he),t.bindFramebuffer(s.FRAMEBUFFER,null)}function at(P,M,z){if(s.bindRenderbuffer(s.RENDERBUFFER,P),M.depthBuffer){let W=M.depthTexture,Z=W&&W.isDepthTexture?W.type:null,he=C(M.stencilBuffer,Z),ue=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ze(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,We(M),he,M.width,M.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,We(M),he,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,he,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,P)}else{let W=M.textures;for(let Z=0;Z<W.length;Z++){let he=W[Z],ue=o.convert(he.format,he.colorSpace),J=o.convert(he.type),Q=S(he.internalFormat,ue,J,he.normalized,he.colorSpace);Ze(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,We(M),Q,M.width,M.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,We(M),Q,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Q,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Xe(P,M,z){let W=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(M.depthTexture);if(Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,M.depthTexture.addEventListener("dispose",T)),Z.__webglTexture===void 0){Z.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),tt(s.TEXTURE_CUBE_MAP,M.depthTexture);let pe=o.convert(M.depthTexture.format),Le=o.convert(M.depthTexture.type),_e;M.depthTexture.format===An?_e=s.DEPTH_COMPONENT24:M.depthTexture.format===ui&&(_e=s.DEPTH24_STENCIL8);for(let me=0;me<6;me++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,_e,M.width,M.height,0,pe,Le,null)}}else q(M.depthTexture,0);let he=Z.__webglTexture,ue=We(M),J=W?s.TEXTURE_CUBE_MAP_POSITIVE_X+z:s.TEXTURE_2D,Q=M.depthTexture.format===ui?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===An)Ze(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,J,he,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,Q,J,he,0);else if(M.depthTexture.format===ui)Ze(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,J,he,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,Q,J,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(P){let M=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){let W=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),W){let Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=W}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(z)for(let W=0;W<6;W++)Xe(M.__webglFramebuffer[W],P,W);else{let W=P.texture.mipmaps;W&&W.length>0?Xe(M.__webglFramebuffer[0],P,0):Xe(M.__webglFramebuffer,P,0)}else if(z){M.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[W]),M.__webglDepthbuffer[W]===void 0)M.__webglDepthbuffer[W]=s.createRenderbuffer(),at(M.__webglDepthbuffer[W],P,!1);else{let Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer[W];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,he)}}else{let W=P.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),at(M.__webglDepthbuffer,P,!1);else{let Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,he)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ae(P,M,z){let W=n.get(P);M!==void 0&&Ue(W.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&ne(P)}function oe(P){let M=P.texture,z=n.get(P),W=n.get(M);P.addEventListener("dispose",g);let Z=P.textures,he=P.isWebGLCubeRenderTarget===!0,ue=Z.length>1;if(ue||(W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture()),W.__version=M.version,r.memory.textures++),he){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let Q=0;Q<M.mipmaps.length;Q++)z.__webglFramebuffer[J][Q]=s.createFramebuffer()}else z.__webglFramebuffer[J]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<M.mipmaps.length;J++)z.__webglFramebuffer[J]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(ue)for(let J=0,Q=Z.length;J<Q;J++){let pe=n.get(Z[J]);pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture(),r.memory.textures++)}if(P.samples>0&&Ze(P)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let Q=Z[J];z.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[J]);let pe=o.convert(Q.format,Q.colorSpace),Le=o.convert(Q.type),_e=S(Q.internalFormat,pe,Le,Q.normalized,Q.colorSpace,P.isXRRenderTarget===!0),me=We(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,me,_e,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,z.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),at(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),tt(s.TEXTURE_CUBE_MAP,M);for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Ue(z.__webglFramebuffer[J][Q],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else Ue(z.__webglFramebuffer[J],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(M)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let J=0,Q=Z.length;J<Q;J++){let pe=Z[J],Le=n.get(pe),_e=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_e=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(_e,Le.__webglTexture),tt(_e,pe),Ue(z.__webglFramebuffer,P,pe,s.COLOR_ATTACHMENT0+J,_e,0),m(pe)&&v(_e)}t.unbindTexture()}else{let J=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(J=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(J,W.__webglTexture),tt(J,M),M.mipmaps&&M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Ue(z.__webglFramebuffer[Q],P,M,s.COLOR_ATTACHMENT0,J,Q);else Ue(z.__webglFramebuffer,P,M,s.COLOR_ATTACHMENT0,J,0);m(M)&&v(J),t.unbindTexture()}P.depthBuffer&&ne(P)}function ve(P){let M=P.textures;for(let z=0,W=M.length;z<W;z++){let Z=M[z];if(m(Z)){let he=R(P),ue=n.get(Z).__webglTexture;t.bindTexture(he,ue),v(he),t.unbindTexture()}}}let xe=[],He=[];function Ie(P){if(P.samples>0){if(Ze(P)===!1){let M=P.textures,z=P.width,W=P.height,Z=s.COLOR_BUFFER_BIT,he=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=n.get(P),J=M.length>1;if(J)for(let pe=0;pe<M.length;pe++)t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);let Q=P.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let pe=0;pe<M.length;pe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ue.__webglColorRenderbuffer[pe]);let Le=n.get(M[pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Le,0)}s.blitFramebuffer(0,0,z,W,0,0,z,W,Z,s.NEAREST),l===!0&&(xe.length=0,He.length=0,xe.push(s.COLOR_ATTACHMENT0+pe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(xe.push(he),He.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,He)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let pe=0;pe<M.length;pe++){t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,ue.__webglColorRenderbuffer[pe]);let Le=n.get(M[pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,Le,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let M=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function We(P){return Math.min(i.maxSamples,P.samples)}function Ze(P){let M=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function F(P){let M=r.render.frame;h.get(P)!==M&&(h.set(P,M),P.update())}function pt(P,M){let z=P.colorSpace,W=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==Ts&&z!==Wn&&(rt.getTransfer(z)===lt?(W!==hn||Z!==Qt)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",z)),M}function st(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.getTextureUnits=H,this.setTextureUnits=I,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=te,this.setTextureCube=se,this.rebindTextures=ae,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ox(s,e){function t(n,i=Wn){let o,r=rt.getTransfer(i);if(n===Qt)return s.UNSIGNED_BYTE;if(n===Uo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Fo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Nc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Uc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lc)return s.BYTE;if(n===Dc)return s.SHORT;if(n===cs)return s.UNSIGNED_SHORT;if(n===No)return s.INT;if(n===_n)return s.UNSIGNED_INT;if(n===yn)return s.FLOAT;if(n===Ln)return s.HALF_FLOAT;if(n===Fc)return s.ALPHA;if(n===Bc)return s.RGB;if(n===hn)return s.RGBA;if(n===An)return s.DEPTH_COMPONENT;if(n===ui)return s.DEPTH_STENCIL;if(n===or)return s.RED;if(n===Bo)return s.RED_INTEGER;if(n===fi)return s.RG;if(n===Oo)return s.RG_INTEGER;if(n===Ho)return s.RGBA_INTEGER;if(n===ar||n===cr||n===lr||n===hr)if(r===lt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ar)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ar)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ko||n===zo||n===Go||n===Vo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ko)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Go)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===ur||n===Jo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Wo||n===Xo)return r===lt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===qo)return r===lt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yo)return o.COMPRESSED_R11_EAC;if(n===Zo)return o.COMPRESSED_SIGNED_R11_EAC;if(n===ur)return o.COMPRESSED_RG11_EAC;if(n===Jo)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ko||n===$o||n===jo||n===Qo||n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===ca||n===la)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ko)return r===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return r===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jo)return r===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qo)return r===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ea)return r===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ta)return r===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===na)return r===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ia)return r===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sa)return r===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ra)return r===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oa)return r===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===aa)return r===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ca)return r===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===la)return r===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ha||n===ua||n===fa)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===ha)return r===lt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ua)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fa)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===da||n===pa||n===fr||n===ma)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===da)return o.COMPRESSED_RED_RGTC1_EXT;if(n===pa)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ma)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cx=`
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

}`,hl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Bs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new on({vertexShader:ax,fragmentShader:cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ee(new Vt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ul=class extends Rn{constructor(e,t){super();let n=this,i=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,_=typeof XRWebGLBinding<"u",x=new hl,m={},v=t.getContextAttributes(),R=null,S=null,C=[],y=[],T=new le,g=null,b=new Ht;b.viewport=new bt;let E=new Ht;E.viewport=new bt;let w=[b,E],L=new Co,U=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ce=C[Y];return ce===void 0&&(ce=new Qi,C[Y]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Y){let ce=C[Y];return ce===void 0&&(ce=new Qi,C[Y]=ce),ce.getGripSpace()},this.getHand=function(Y){let ce=C[Y];return ce===void 0&&(ce=new Qi,C[Y]=ce),ce.getHandSpace()};function I(Y){let ce=y.indexOf(Y.inputSource);if(ce===-1)return;let re=C[ce];re!==void 0&&(re.update(Y.inputSource,Y.frame,c||r),re.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",B);for(let Y=0;Y<C.length;Y++){let ce=y[Y];ce!==null&&(y[Y]=null,C[Y].disconnect(ce))}U=null,H=null,x.reset();for(let Y in m)delete m[Y];e.setRenderTarget(R),d=null,f=null,u=null,i=null,S=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(g),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,n.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(R=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",N),i.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,we=null,Ve=null;v.depth&&(Ve=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=v.stencil?ui:An,we=v.stencil?ls:_n);let Ue={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:o};u=this.getBinding(),f=u.createProjectionLayer(Ue),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new sn(f.textureWidth,f.textureHeight,{format:hn,type:Qt,depthTexture:new Vn(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let re={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new sn(d.framebufferWidth,d.framebufferHeight,{format:hn,type:Qt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function B(Y){for(let ce=0;ce<Y.removed.length;ce++){let re=Y.removed[ce],we=y.indexOf(re);we>=0&&(y[we]=null,C[we].disconnect(re))}for(let ce=0;ce<Y.added.length;ce++){let re=Y.added[ce],we=y.indexOf(re);if(we===-1){for(let Ue=0;Ue<C.length;Ue++)if(Ue>=y.length){y.push(re),we=Ue;break}else if(y[Ue]===null){y[Ue]=re,we=Ue;break}if(we===-1)break}let Ve=C[we];Ve&&Ve.connect(re)}}let q=new D,K=new D;function te(Y,ce,re){q.setFromMatrixPosition(ce.matrixWorld),K.setFromMatrixPosition(re.matrixWorld);let we=q.distanceTo(K),Ve=ce.projectionMatrix.elements,Ue=re.projectionMatrix.elements,at=Ve[14]/(Ve[10]-1),Xe=Ve[14]/(Ve[10]+1),ne=(Ve[9]+1)/Ve[5],ae=(Ve[9]-1)/Ve[5],oe=(Ve[8]-1)/Ve[0],ve=(Ue[8]+1)/Ue[0],xe=at*oe,He=at*ve,Ie=we/(-oe+ve),We=Ie*-oe;if(ce.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(We),Y.translateZ(Ie),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ve[10]===-1)Y.projectionMatrix.copy(ce.projectionMatrix),Y.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let Ze=at+Ie,F=Xe+Ie,pt=xe-We,st=He+(we-We),P=ne*Xe/F*Ze,M=ae*Xe/F*Ze;Y.projectionMatrix.makePerspective(pt,st,P,M,Ze,F),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function se(Y,ce){ce===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ce.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ce=Y.near,re=Y.far;x.texture!==null&&(x.depthNear>0&&(ce=x.depthNear),x.depthFar>0&&(re=x.depthFar)),L.near=E.near=b.near=ce,L.far=E.far=b.far=re,(U!==L.near||H!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),U=L.near,H=L.far),L.layers.mask=Y.layers.mask|6,b.layers.mask=L.layers.mask&-5,E.layers.mask=L.layers.mask&-3;let we=Y.parent,Ve=L.cameras;se(L,we);for(let Ue=0;Ue<Ve.length;Ue++)se(Ve[Ue],we);Ve.length===2?te(L,b,E):L.projectionMatrix.copy(b.projectionMatrix),fe(Y,L,we)};function fe(Y,ce,re){re===null?Y.matrix.copy(ce.matrixWorld):(Y.matrix.copy(re.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ce.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ce.projectionMatrix),Y.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=$i*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(L)},this.getCameraTexture=function(Y){return m[Y]};let qe=null;function ct(Y,ce){if(h=ce.getViewerPose(c||r),p=ce,h!==null){let re=h.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let we=!1;re.length!==L.cameras.length&&(L.cameras.length=0,we=!0);for(let Xe=0;Xe<re.length;Xe++){let ne=re[Xe],ae=null;if(d!==null)ae=d.getViewport(ne);else{let ve=u.getViewSubImage(f,ne);ae=ve.viewport,Xe===0&&(e.setRenderTargetTextures(S,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(S))}let oe=w[Xe];oe===void 0&&(oe=new Ht,oe.layers.enable(Xe),oe.viewport=new bt,w[Xe]=oe),oe.matrix.fromArray(ne.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(ne.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ae.x,ae.y,ae.width,ae.height),Xe===0&&(L.matrix.copy(oe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),we===!0&&L.cameras.push(oe)}let Ve=i.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let Xe=u.getDepthInformation(re[0]);Xe&&Xe.isValid&&Xe.texture&&x.init(Xe,i.renderState)}if(Ve&&Ve.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let Xe=0;Xe<re.length;Xe++){let ne=re[Xe].camera;if(ne){let ae=m[ne];ae||(ae=new Bs,m[ne]=ae);let oe=u.getCameraImage(ne);ae.sourceTexture=oe}}}}for(let re=0;re<C.length;re++){let we=y[re],Ve=C[re];we!==null&&Ve!==void 0&&Ve.update(we,ce,c||r)}qe&&qe(Y,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),p=null}let tt=new pu;tt.setAnimationLoop(ct),this.setAnimationLoop=function(Y){qe=Y},this.dispose=function(){}}},lx=new _t,vu=new Ye;vu.set(-1,0,0,0,1,0,0,0,1);function hx(s,e){function t(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function n(x,m){m.color.getRGB(x.fogColor.value,Gc(s)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function i(x,m,v,R,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?o(x,m):m.isMeshLambertMaterial?(o(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(o(x,m),u(x,m)):m.isMeshPhongMaterial?(o(x,m),h(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(o(x,m),f(x,m),m.isMeshPhysicalMaterial&&d(x,m,S)):m.isMeshMatcapMaterial?(o(x,m),p(x,m)):m.isMeshDepthMaterial?o(x,m):m.isMeshDistanceMaterial?(o(x,m),_(x,m)):m.isMeshNormalMaterial?o(x,m):m.isLineBasicMaterial?(r(x,m),m.isLineDashedMaterial&&a(x,m)):m.isPointsMaterial?l(x,m,v,R):m.isSpriteMaterial?c(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,t(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===Wt&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,t(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===Wt&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,t(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,t(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let v=e.get(m),R=v.envMap,S=v.envMapRotation;R&&(x.envMap.value=R,x.envMapRotation.value.setFromMatrix4(lx.makeRotationFromEuler(S)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(vu),x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,x.aoMapTransform))}function r(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform))}function a(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function l(x,m,v,R){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*v,x.scale.value=R*.5,m.map&&(x.map.value=m.map,t(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function c(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function u(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function f(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function d(x,m,v){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Wt&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=v.texture,x.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,x.specularIntensityMapTransform))}function p(x,m){m.matcap&&(x.matcap.value=m.matcap)}function _(x,m){let v=e.get(m).light;x.referencePosition.value.setFromMatrixPosition(v.matrixWorld),x.nearDistance.value=v.shadow.camera.near,x.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ux(s,e,t,n){let i={},o={},r=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,C){let y=C.program;n.uniformBlockBinding(S,y)}function c(S,C){let y=i[S.id];y===void 0&&(x(S),y=h(S),i[S.id]=y,S.addEventListener("dispose",v));let T=C.program;n.updateUBOMapping(S,T);let g=e.render.frame;o[S.id]!==g&&(f(S),o[S.id]=g)}function h(S){let C=u();S.__bindingPointIndex=C;let y=s.createBuffer(),T=S.__size,g=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,T,g),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,y),y}function u(){for(let S=0;S<a;S++)if(r.indexOf(S)===-1)return r.push(S),S;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let C=i[S.id],y=S.uniforms,T=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let g=0,b=y.length;g<b;g++){let E=y[g];if(Array.isArray(E))for(let w=0,L=E.length;w<L;w++)d(E[w],g,w,T);else d(E,g,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(S,C,y,T){if(_(S,C,y,T)===!0){let g=S.__offset,b=S.value;if(Array.isArray(b)){let E=0;for(let w=0;w<b.length;w++){let L=b[w],U=m(L);p(L,S.__data,E),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(E+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(b,S.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,g,S.__data)}}function p(S,C,y){typeof S=="number"||typeof S=="boolean"?C[0]=S:S.isMatrix3?(C[0]=S.elements[0],C[1]=S.elements[1],C[2]=S.elements[2],C[3]=0,C[4]=S.elements[3],C[5]=S.elements[4],C[6]=S.elements[5],C[7]=0,C[8]=S.elements[6],C[9]=S.elements[7],C[10]=S.elements[8],C[11]=0):ArrayBuffer.isView(S)?C.set(new S.constructor(S.buffer,S.byteOffset,C.length)):S.toArray(C,y)}function _(S,C,y,T){let g=S.value,b=C+"_"+y;if(T[b]===void 0)return typeof g=="number"||typeof g=="boolean"?T[b]=g:ArrayBuffer.isView(g)?T[b]=g.slice():T[b]=g.clone(),!0;{let E=T[b];if(typeof g=="number"||typeof g=="boolean"){if(E!==g)return T[b]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(E.equals(g)===!1)return E.copy(g),!0}}return!1}function x(S){let C=S.uniforms,y=0,T=16;for(let b=0,E=C.length;b<E;b++){let w=Array.isArray(C[b])?C[b]:[C[b]];for(let L=0,U=w.length;L<U;L++){let H=w[L],I=Array.isArray(H.value)?H.value:[H.value];for(let N=0,B=I.length;N<B;N++){let q=I[N],K=m(q),te=y%T,se=te%K.boundary,fe=te+se;y+=se,fe!==0&&T-fe<K.storage&&(y+=T-fe),H.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=K.storage}}}let g=y%T;return g>0&&(y+=T-g),S.__size=y,S.__cache={},this}function m(S){let C={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(C.boundary=4,C.storage=4):S.isVector2?(C.boundary=8,C.storage=8):S.isVector3||S.isColor?(C.boundary=16,C.storage=12):S.isVector4?(C.boundary=16,C.storage=16):S.isMatrix3?(C.boundary=48,C.storage=48):S.isMatrix4?(C.boundary=64,C.storage=64):S.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(C.boundary=16,C.storage=S.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",S),C}function v(S){let C=S.target;C.removeEventListener("dispose",v);let y=r.indexOf(C.__bindingPointIndex);r.splice(y,1),s.deleteBuffer(i[C.id]),delete i[C.id],delete o[C.id]}function R(){for(let S in i)s.deleteBuffer(i[S]);r=[],i={},o={}}return{bind:l,update:c,dispose:R}}var fx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Dn=null;function dx(){return Dn===null&&(Dn=new es(fx,16,16,fi,Ln),Dn.name="DFG_LUT",Dn.minFilter=zt,Dn.magFilter=zt,Dn.wrapS=Tn,Dn.wrapT=Tn,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}var ba=class{constructor(e={}){let{canvas:t=Uh(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Qt}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;let _=d,x=new Set([Ho,Oo,Bo]),m=new Set([Qt,_n,cs,ls,Uo,Fo]),v=new Uint32Array(4),R=new Int32Array(4),S=new D,C=null,y=null,T=[],g=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,w=!1,L=null,U=null,H=null,I=null;this._outputColorSpace=Rt;let N=0,B=0,q=null,K=-1,te=null,se=new bt,fe=new bt,qe=null,ct=new Fe(0),tt=0,Y=t.width,ce=t.height,re=1,we=null,Ve=null,Ue=new bt(0,0,Y,ce),at=new bt(0,0,Y,ce),Xe=!1,ne=new ts,ae=!1,oe=!1,ve=new _t,xe=new D,He=new bt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function Ze(){return q===null?re:1}let F=n;function pt(A,k){return t.getContext(A,k)}try{let A={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",vn,!1),F===null){let k="webgl2";if(F=pt(k,A),F===null)throw pt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw ze("WebGLRenderer: "+A.message),A}let st,P,M,z,W,Z,he,ue,J,Q,pe,Le,_e,me,Be,ke,$e,O,de,j,ge,Se,ie;function Pe(){st=new v0(F),st.init(),ge=new ox(F,st),P=new f0(F,st,e,ge),M=new sx(F,st),P.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),U=F.createFramebuffer(),H=F.createFramebuffer(),I=F.createFramebuffer(),z=new S0(F),W=new Wg,Z=new rx(F,st,M,W,P,ge,z),he=new y0(E),ue=new Ad(F),Se=new h0(F,ue),J=new M0(F,ue,z,Se),Q=new T0(F,J,ue,Se,z),O=new E0(F,P,Z),Be=new d0(W),pe=new Vg(E,he,st,P,Se,Be),Le=new hx(E,W),_e=new qg,me=new jg(st),$e=new l0(E,he,M,Q,p,l),ke=new ix(E,Q,P),ie=new ux(F,z,P,M),de=new u0(F,st,z),j=new b0(F,st,z),z.programs=pe.programs,E.capabilities=P,E.extensions=st,E.properties=W,E.renderLists=_e,E.shadowMap=ke,E.state=M,E.info=z}Pe(),_!==Qt&&(b=new A0(_,t.width,t.height,a,i,o));let Ae=new ul(E,F);this.xr=Ae,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let A=st.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=st.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(A){A!==void 0&&(re=A,this.setSize(Y,ce,!1))},this.getSize=function(A){return A.set(Y,ce)},this.setSize=function(A,k,X=!0){if(Ae.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,ce=k,t.width=Math.floor(A*re),t.height=Math.floor(k*re),X===!0&&(t.style.width=A+"px",t.style.height=k+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(Y*re,ce*re).floor()},this.setDrawingBufferSize=function(A,k,X){Y=A,ce=k,re=X,t.width=Math.floor(A*X),t.height=Math.floor(k*X),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(_===Qt){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(se)},this.getViewport=function(A){return A.copy(Ue)},this.setViewport=function(A,k,X,G){A.isVector4?Ue.set(A.x,A.y,A.z,A.w):Ue.set(A,k,X,G),M.viewport(se.copy(Ue).multiplyScalar(re).round())},this.getScissor=function(A){return A.copy(at)},this.setScissor=function(A,k,X,G){A.isVector4?at.set(A.x,A.y,A.z,A.w):at.set(A,k,X,G),M.scissor(fe.copy(at).multiplyScalar(re).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(A){M.setScissorTest(Xe=A)},this.setOpaqueSort=function(A){we=A},this.setTransparentSort=function(A){Ve=A},this.getClearColor=function(A){return A.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,X=!0){let G=0;if(A){let V=!1;if(q!==null){let be=q.texture.format;V=x.has(be)}if(V){let be=q.texture.type,Te=m.has(be),Me=$e.getClearColor(),Re=$e.getClearAlpha(),De=Me.r,je=Me.g,nt=Me.b;Te?(v[0]=De,v[1]=je,v[2]=nt,v[3]=Re,F.clearBufferuiv(F.COLOR,0,v)):(R[0]=De,R[1]=je,R[2]=nt,R[3]=Re,F.clearBufferiv(F.COLOR,0,R))}else G|=F.COLOR_BUFFER_BIT}k&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",vn,!1),$e.dispose(),_e.dispose(),me.dispose(),W.dispose(),he.dispose(),Q.dispose(),Se.dispose(),ie.dispose(),pe.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",vl),Ae.removeEventListener("sessionend",Ml),pi.stop()};function Et(A){A.preventDefault(),Hc("WebGLRenderer: Context Lost."),w=!0}function yt(){Hc("WebGLRenderer: Context Restored."),w=!1;let A=z.autoReset,k=ke.enabled,X=ke.autoUpdate,G=ke.needsUpdate,V=ke.type;Pe(),z.autoReset=A,ke.enabled=k,ke.autoUpdate=X,ke.needsUpdate=G,ke.type=V}function vn(A){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Mn(A){let k=A.target;k.removeEventListener("dispose",Mn),Vu(k)}function Vu(A){Wu(A),W.remove(A)}function Wu(A){let k=W.get(A).programs;k!==void 0&&(k.forEach(function(X){pe.releaseProgram(X)}),A.isShaderMaterial&&pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,X,G,V,be){k===null&&(k=Ie);let Te=V.isMesh&&V.matrixWorld.determinantAffine()<0,Me=Yu(A,k,X,G,V);M.setMaterial(G,Te);let Re=X.index,De=1;if(G.wireframe===!0){if(Re=J.getWireframeAttribute(X),Re===void 0)return;De=2}let je=X.drawRange,nt=X.attributes.position,Ne=je.start*De,mt=(je.start+je.count)*De;be!==null&&(Ne=Math.max(Ne,be.start*De),mt=Math.min(mt,(be.start+be.count)*De)),Re!==null?(Ne=Math.max(Ne,0),mt=Math.min(mt,Re.count)):nt!=null&&(Ne=Math.max(Ne,0),mt=Math.min(mt,nt.count));let wt=mt-Ne;if(wt<0||wt===1/0)return;Se.setup(V,G,Me,X,Re);let Tt,gt=de;if(Re!==null&&(Tt=ue.get(Re),gt=j,gt.setIndex(Tt)),V.isMesh)G.wireframe===!0?(M.setLineWidth(G.wireframeLinewidth*Ze()),gt.setMode(F.LINES)):gt.setMode(F.TRIANGLES);else if(V.isLine){let Xt=G.linewidth;Xt===void 0&&(Xt=1),M.setLineWidth(Xt*Ze()),V.isLineSegments?gt.setMode(F.LINES):V.isLineLoop?gt.setMode(F.LINE_LOOP):gt.setMode(F.LINE_STRIP)}else V.isPoints?gt.setMode(F.POINTS):V.isSprite&&gt.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(st.get("WEBGL_multi_draw"))gt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Xt=V._multiDrawStarts,Ee=V._multiDrawCounts,en=V._multiDrawCount,ot=Re?ue.get(Re).bytesPerElement:1,cn=W.get(G).currentProgram.getUniforms();for(let bn=0;bn<en;bn++)cn.setValue(F,"_gl_DrawID",bn),gt.render(Xt[bn]/ot,Ee[bn])}else if(V.isInstancedMesh)gt.renderInstances(Ne,wt,V.count);else if(X.isInstancedBufferGeometry){let Xt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ee=Math.min(X.instanceCount,Xt);gt.renderInstances(Ne,wt,Ee)}else gt.render(Ne,wt)};function yl(A,k,X){A.transparent===!0&&A.side===kt&&A.forceSinglePass===!1?(A.side=Wt,A.needsUpdate=!0,br(A,k,X),A.side=zn,A.needsUpdate=!0,br(A,k,X),A.side=kt):br(A,k,X)}this.compile=function(A,k,X=null){X===null&&(X=A),y=me.get(X),y.init(k),g.push(y),X.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),A!==X&&A.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),y.setupLights();let G=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let be=V.material;if(be)if(Array.isArray(be))for(let Te=0;Te<be.length;Te++){let Me=be[Te];yl(Me,X,V),G.add(Me)}else yl(be,X,V),G.add(be)}),y=g.pop(),G},this.compileAsync=function(A,k,X=null){let G=this.compile(A,k,X);return new Promise(V=>{function be(){if(G.forEach(function(Te){W.get(Te).currentProgram.isReady()&&G.delete(Te)}),G.size===0){V(A);return}setTimeout(be,10)}st.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Na=null;function Xu(A){Na&&Na(A)}function vl(){pi.stop()}function Ml(){pi.start()}let pi=new pu;pi.setAnimationLoop(Xu),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(A){Na=A,Ae.setAnimationLoop(A),A===null?pi.stop():pi.start()},Ae.addEventListener("sessionstart",vl),Ae.addEventListener("sessionend",Ml),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;L!==null&&L.renderStart(A,k);let X=Ae.enabled===!0&&Ae.isPresenting===!0,G=b!==null&&(q===null||X)&&b.begin(E,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(k),k=Ae.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,k,q),y=me.get(A,g.length),y.init(k),y.state.textureUnits=Z.getTextureUnits(),g.push(y),ve.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ne.setFromProjectionMatrix(ve,gn,k.reversedDepth),oe=this.localClippingEnabled,ae=Be.init(this.clippingPlanes,oe),C=_e.get(A,T.length),C.init(),T.push(C),Ae.enabled===!0&&Ae.isPresenting===!0){let Te=E.xr.getDepthSensingMesh();Te!==null&&Ua(Te,k,-1/0,E.sortObjects)}Ua(A,k,0,E.sortObjects),C.finish(),E.sortObjects===!0&&C.sort(we,Ve,k.reversedDepth),We=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,We&&$e.addToRenderList(C,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Be.beginShadows();let V=y.state.shadowsArray;if(ke.render(V,A,k),ae===!0&&Be.endShadows(),(G&&b.hasRenderPass())===!1){let Te=C.opaque,Me=C.transmissive;if(y.setupLights(),k.isArrayCamera){let Re=k.cameras;if(Me.length>0)for(let De=0,je=Re.length;De<je;De++){let nt=Re[De];Sl(Te,Me,A,nt)}We&&$e.render(A);for(let De=0,je=Re.length;De<je;De++){let nt=Re[De];bl(C,A,nt,nt.viewport)}}else Me.length>0&&Sl(Te,Me,A,k),We&&$e.render(A),bl(C,A,k)}q!==null&&B===0&&(Z.updateMultisampleRenderTarget(q),Z.updateRenderTargetMipmap(q)),G&&b.end(E),A.isScene===!0&&A.onAfterRender(E,A,k),Se.resetDefaultState(),K=-1,te=null,g.pop(),g.length>0?(y=g[g.length-1],Z.setTextureUnits(y.state.textureUnits),ae===!0&&Be.setGlobalState(E.clippingPlanes,y.state.camera)):y=null,T.pop(),T.length>0?C=T[T.length-1]:C=null,L!==null&&L.renderEnd()};function Ua(A,k,X,G){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLightProbeGrid)y.pushLightProbeGrid(A);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ne.intersectsSprite(A)){G&&He.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ve);let Te=Q.update(A),Me=A.material;Me.visible&&C.push(A,Te,Me,X,He.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ne.intersectsObject(A))){let Te=Q.update(A),Me=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),He.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),He.copy(Te.boundingSphere.center)),He.applyMatrix4(A.matrixWorld).applyMatrix4(ve)),Array.isArray(Me)){let Re=Te.groups;for(let De=0,je=Re.length;De<je;De++){let nt=Re[De],Ne=Me[nt.materialIndex];Ne&&Ne.visible&&C.push(A,Te,Ne,X,He.z,nt)}}else Me.visible&&C.push(A,Te,Me,X,He.z,null)}}let be=A.children;for(let Te=0,Me=be.length;Te<Me;Te++)Ua(be[Te],k,X,G)}function bl(A,k,X,G){let{opaque:V,transmissive:be,transparent:Te}=A;y.setupLightsView(X),ae===!0&&Be.setGlobalState(E.clippingPlanes,X),G&&M.viewport(se.copy(G)),V.length>0&&Mr(V,k,X),be.length>0&&Mr(be,k,X),Te.length>0&&Mr(Te,k,X),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Sl(A,k,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[G.id]===void 0){let Ne=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[G.id]=new sn(1,1,{generateMipmaps:!0,type:Ne?Ln:Qt,minFilter:hi,samples:Math.max(4,P.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let be=y.state.transmissionRenderTarget[G.id],Te=G.viewport||se;be.setSize(Te.z*E.transmissionResolutionScale,Te.w*E.transmissionResolutionScale);let Me=E.getRenderTarget(),Re=E.getActiveCubeFace(),De=E.getActiveMipmapLevel();E.setRenderTarget(be),E.getClearColor(ct),tt=E.getClearAlpha(),tt<1&&E.setClearColor(16777215,.5),E.clear(),We&&$e.render(X);let je=E.toneMapping;E.toneMapping=xn;let nt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),y.setupLightsView(G),ae===!0&&Be.setGlobalState(E.clippingPlanes,G),Mr(A,X,G),Z.updateMultisampleRenderTarget(be),Z.updateRenderTargetMipmap(be),st.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let mt=0,wt=k.length;mt<wt;mt++){let Tt=k[mt],{object:gt,geometry:Xt,material:Ee,group:en}=Tt;if(Ee.side===kt&&gt.layers.test(G.layers)){let ot=Ee.side;Ee.side=Wt,Ee.needsUpdate=!0,El(gt,X,G,Xt,Ee,en),Ee.side=ot,Ee.needsUpdate=!0,Ne=!0}}Ne===!0&&(Z.updateMultisampleRenderTarget(be),Z.updateRenderTargetMipmap(be))}E.setRenderTarget(Me,Re,De),E.setClearColor(ct,tt),nt!==void 0&&(G.viewport=nt),E.toneMapping=je}function Mr(A,k,X){let G=k.isScene===!0?k.overrideMaterial:null;for(let V=0,be=A.length;V<be;V++){let Te=A[V],{object:Me,geometry:Re,group:De}=Te,je=Te.material;je.allowOverride===!0&&G!==null&&(je=G),Me.layers.test(X.layers)&&El(Me,k,X,Re,je,De)}}function El(A,k,X,G,V,be){A.onBeforeRender(E,k,X,G,V,be),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(E,k,X,G,A,be),V.transparent===!0&&V.side===kt&&V.forceSinglePass===!1?(V.side=Wt,V.needsUpdate=!0,E.renderBufferDirect(X,k,G,V,A,be),V.side=zn,V.needsUpdate=!0,E.renderBufferDirect(X,k,G,V,A,be),V.side=kt):E.renderBufferDirect(X,k,G,V,A,be),A.onAfterRender(E,k,X,G,V,be)}function br(A,k,X){k.isScene!==!0&&(k=Ie);let G=W.get(A),V=y.state.lights,be=y.state.shadowsArray,Te=V.state.version,Me=pe.getParameters(A,V.state,be,k,X,y.state.lightProbeGridArray),Re=pe.getProgramCacheKey(Me),De=G.programs;G.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,G.fog=k.fog;let je=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;G.envMap=he.get(A.envMap||G.environment,je),G.envMapRotation=G.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,De===void 0&&(A.addEventListener("dispose",Mn),De=new Map,G.programs=De);let nt=De.get(Re);if(nt!==void 0){if(G.currentProgram===nt&&G.lightsStateVersion===Te)return wl(A,Me),nt}else Me.uniforms=pe.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,X,Me),A.onBeforeCompile(Me,E),nt=pe.acquireProgram(Me,Re),De.set(Re,nt),G.uniforms=Me.uniforms;let Ne=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ne.clippingPlanes=Be.uniform),wl(A,Me),G.needsLights=Ju(A),G.lightsStateVersion=Te,G.needsLights&&(Ne.ambientLightColor.value=V.state.ambient,Ne.lightProbe.value=V.state.probe,Ne.directionalLights.value=V.state.directional,Ne.directionalLightShadows.value=V.state.directionalShadow,Ne.spotLights.value=V.state.spot,Ne.spotLightShadows.value=V.state.spotShadow,Ne.rectAreaLights.value=V.state.rectArea,Ne.ltc_1.value=V.state.rectAreaLTC1,Ne.ltc_2.value=V.state.rectAreaLTC2,Ne.pointLights.value=V.state.point,Ne.pointLightShadows.value=V.state.pointShadow,Ne.hemisphereLights.value=V.state.hemi,Ne.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ne.spotLightMatrix.value=V.state.spotLightMatrix,Ne.spotLightMap.value=V.state.spotLightMap,Ne.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=y.state.lightProbeGridArray.length>0,G.currentProgram=nt,G.uniformsList=null,nt}function Tl(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=us.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function wl(A,k){let X=W.get(A);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function qu(A,k){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;S.setFromMatrixPosition(k.matrixWorld);for(let X=0,G=A.length;X<G;X++){let V=A[X];if(V.texture!==null&&V.boundingBox.containsPoint(S))return V}return null}function Yu(A,k,X,G,V){k.isScene!==!0&&(k=Ie),Z.resetTextureUnits();let be=k.fog,Te=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?k.environment:null,Me=q===null?E.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:rt.workingColorSpace,Re=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,De=he.get(G.envMap||Te,Re),je=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,nt=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ne=!!X.morphAttributes.position,mt=!!X.morphAttributes.normal,wt=!!X.morphAttributes.color,Tt=xn;G.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Tt=E.toneMapping);let gt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Xt=gt!==void 0?gt.length:0,Ee=W.get(G),en=y.state.lights;if(ae===!0&&(oe===!0||A!==te)){let vt=A===te&&G.id===K;Be.setState(G,A,vt)}let ot=!1;G.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==en.state.version||Ee.outputColorSpace!==Me||V.isBatchedMesh&&Ee.batching===!1||!V.isBatchedMesh&&Ee.batching===!0||V.isBatchedMesh&&Ee.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ee.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ee.instancing===!1||!V.isInstancedMesh&&Ee.instancing===!0||V.isSkinnedMesh&&Ee.skinning===!1||!V.isSkinnedMesh&&Ee.skinning===!0||V.isInstancedMesh&&Ee.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ee.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ee.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ee.instancingMorph===!1&&V.morphTexture!==null||Ee.envMap!==De||G.fog===!0&&Ee.fog!==be||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Be.numPlanes||Ee.numIntersection!==Be.numIntersection)||Ee.vertexAlphas!==je||Ee.vertexTangents!==nt||Ee.morphTargets!==Ne||Ee.morphNormals!==mt||Ee.morphColors!==wt||Ee.toneMapping!==Tt||Ee.morphTargetsCount!==Xt||!!Ee.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,Ee.__version=G.version);let cn=Ee.currentProgram;ot===!0&&(cn=br(G,k,V),L&&G.isNodeMaterial&&L.onUpdateProgram(G,cn,Ee));let bn=!1,Xn=!1,Di=!1,xt=cn.getUniforms(),At=Ee.uniforms;if(M.useProgram(cn.program)&&(bn=!0,Xn=!0,Di=!0),G.id!==K&&(K=G.id,Xn=!0),Ee.needsLights){let vt=qu(y.state.lightProbeGridArray,V);Ee.lightProbeGrid!==vt&&(Ee.lightProbeGrid=vt,Xn=!0)}if(bn||te!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),xt.setValue(F,"projectionMatrix",A.projectionMatrix),xt.setValue(F,"viewMatrix",A.matrixWorldInverse);let Yn=xt.map.cameraPosition;Yn!==void 0&&Yn.setValue(F,xe.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&xt.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xt.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),te!==A&&(te=A,Xn=!0,Di=!0)}if(Ee.needsLights&&(en.state.directionalShadowMap.length>0&&xt.setValue(F,"directionalShadowMap",en.state.directionalShadowMap,Z),en.state.spotShadowMap.length>0&&xt.setValue(F,"spotShadowMap",en.state.spotShadowMap,Z),en.state.pointShadowMap.length>0&&xt.setValue(F,"pointShadowMap",en.state.pointShadowMap,Z)),V.isSkinnedMesh){xt.setOptional(F,V,"bindMatrix"),xt.setOptional(F,V,"bindMatrixInverse");let vt=V.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),xt.setValue(F,"boneTexture",vt.boneTexture,Z))}V.isBatchedMesh&&(xt.setOptional(F,V,"batchingTexture"),xt.setValue(F,"batchingTexture",V._matricesTexture,Z),xt.setOptional(F,V,"batchingIdTexture"),xt.setValue(F,"batchingIdTexture",V._indirectTexture,Z),xt.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&xt.setValue(F,"batchingColorTexture",V._colorsTexture,Z));let qn=X.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&O.update(V,X,cn),(Xn||Ee.receiveShadow!==V.receiveShadow)&&(Ee.receiveShadow=V.receiveShadow,xt.setValue(F,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&k.environment!==null&&(At.envMapIntensity.value=k.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=dx()),Xn){if(xt.setValue(F,"toneMappingExposure",E.toneMappingExposure),Ee.needsLights&&Zu(At,Di),be&&G.fog===!0&&Le.refreshFogUniforms(At,be),Le.refreshMaterialUniforms(At,G,re,ce,y.state.transmissionRenderTarget[A.id]),Ee.needsLights&&Ee.lightProbeGrid){let vt=Ee.lightProbeGrid;At.probesSH.value=vt.texture,At.probesMin.value.copy(vt.boundingBox.min),At.probesMax.value.copy(vt.boundingBox.max),At.probesResolution.value.copy(vt.resolution)}us.upload(F,Tl(Ee),At,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(us.upload(F,Tl(Ee),At,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xt.setValue(F,"center",V.center),xt.setValue(F,"modelViewMatrix",V.modelViewMatrix),xt.setValue(F,"normalMatrix",V.normalMatrix),xt.setValue(F,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){let vt=G.uniformsGroups;for(let Yn=0,Ni=vt.length;Yn<Ni;Yn++){let Al=vt[Yn];ie.update(Al,cn),ie.bind(Al,cn)}}return cn}function Zu(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Ju(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,k,X){let G=W.get(A);G.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),W.get(A.texture).__webglTexture=k,W.get(A.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){let X=W.get(A);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,X=0){q=A,N=k,B=X;let G=null,V=!1,be=!1;if(A){let Me=W.get(A);if(Me.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(F.FRAMEBUFFER,Me.__webglFramebuffer),se.copy(A.viewport),fe.copy(A.scissor),qe=A.scissorTest,M.viewport(se),M.scissor(fe),M.setScissorTest(qe),K=-1;return}else if(Me.__webglFramebuffer===void 0)Z.setupRenderTarget(A);else if(Me.__hasExternalTextures)Z.rebindTextures(A,W.get(A.texture).__webglTexture,W.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let je=A.depthTexture;if(Me.__boundDepthTexture!==je){if(je!==null&&W.has(je)&&(A.width!==je.image.width||A.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(A)}}let Re=A.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(be=!0);let De=W.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(De[k])?G=De[k][X]:G=De[k],V=!0):A.samples>0&&Z.useMultisampledRTT(A)===!1?G=W.get(A).__webglMultisampledFramebuffer:Array.isArray(De)?G=De[X]:G=De,se.copy(A.viewport),fe.copy(A.scissor),qe=A.scissorTest}else se.copy(Ue).multiplyScalar(re).floor(),fe.copy(at).multiplyScalar(re).floor(),qe=Xe;if(X!==0&&(G=U),M.bindFramebuffer(F.FRAMEBUFFER,G)&&M.drawBuffers(A,G),M.viewport(se),M.scissor(fe),M.setScissorTest(qe),V){let Me=W.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Me.__webglTexture,X)}else if(be){let Me=k;for(let Re=0;Re<A.textures.length;Re++){let De=W.get(A.textures[Re]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Re,De.__webglTexture,X,Me)}}else if(A!==null&&X!==0){let Me=W.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Me.__webglTexture,X)}K=-1},this.readRenderTargetPixels=function(A,k,X,G,V,be,Te,Me=0){if(!(A&&A.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){M.bindFramebuffer(F.FRAMEBUFFER,Re);try{let De=A.textures[Me],je=De.format,nt=De.type;if(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Me),!P.textureFormatReadable(je)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(nt)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-G&&X>=0&&X<=A.height-V&&F.readPixels(k,X,G,V,ge.convert(je),ge.convert(nt),be)}finally{let De=q!==null?W.get(q).__webglFramebuffer:null;M.bindFramebuffer(F.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(A,k,X,G,V,be,Te,Me=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re)if(k>=0&&k<=A.width-G&&X>=0&&X<=A.height-V){M.bindFramebuffer(F.FRAMEBUFFER,Re);let De=A.textures[Me],je=De.format,nt=De.type;if(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Me),!P.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ne=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ne),F.bufferData(F.PIXEL_PACK_BUFFER,be.byteLength,F.STREAM_READ),F.readPixels(k,X,G,V,ge.convert(je),ge.convert(nt),0);let mt=q!==null?W.get(q).__webglFramebuffer:null;M.bindFramebuffer(F.FRAMEBUFFER,mt);let wt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Bh(F,wt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ne),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,be),F.deleteBuffer(Ne),F.deleteSync(wt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,X=0){let G=Math.pow(2,-X),V=Math.floor(A.image.width*G),be=Math.floor(A.image.height*G),Te=k!==null?k.x:0,Me=k!==null?k.y:0;Z.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,Te,Me,V,be),M.unbindTexture()},this.copyTextureToTexture=function(A,k,X=null,G=null,V=0,be=0){let Te,Me,Re,De,je,nt,Ne,mt,wt,Tt=A.isCompressedTexture?A.mipmaps[be]:A.image;if(X!==null)Te=X.max.x-X.min.x,Me=X.max.y-X.min.y,Re=X.isBox3?X.max.z-X.min.z:1,De=X.min.x,je=X.min.y,nt=X.isBox3?X.min.z:0;else{let At=Math.pow(2,-V);Te=Math.floor(Tt.width*At),Me=Math.floor(Tt.height*At),A.isDataArrayTexture?Re=Tt.depth:A.isData3DTexture?Re=Math.floor(Tt.depth*At):Re=1,De=0,je=0,nt=0}G!==null?(Ne=G.x,mt=G.y,wt=G.z):(Ne=0,mt=0,wt=0);let gt=ge.convert(k.format),Xt=ge.convert(k.type),Ee;k.isData3DTexture?(Z.setTexture3D(k,0),Ee=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Z.setTexture2DArray(k,0),Ee=F.TEXTURE_2D_ARRAY):(Z.setTexture2D(k,0),Ee=F.TEXTURE_2D),M.activeTexture(F.TEXTURE0),M.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),M.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),M.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);let en=M.getParameter(F.UNPACK_ROW_LENGTH),ot=M.getParameter(F.UNPACK_IMAGE_HEIGHT),cn=M.getParameter(F.UNPACK_SKIP_PIXELS),bn=M.getParameter(F.UNPACK_SKIP_ROWS),Xn=M.getParameter(F.UNPACK_SKIP_IMAGES);M.pixelStorei(F.UNPACK_ROW_LENGTH,Tt.width),M.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Tt.height),M.pixelStorei(F.UNPACK_SKIP_PIXELS,De),M.pixelStorei(F.UNPACK_SKIP_ROWS,je),M.pixelStorei(F.UNPACK_SKIP_IMAGES,nt);let Di=A.isDataArrayTexture||A.isData3DTexture,xt=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){let At=W.get(A),qn=W.get(k),vt=W.get(At.__renderTarget),Yn=W.get(qn.__renderTarget);M.bindFramebuffer(F.READ_FRAMEBUFFER,vt.__webglFramebuffer),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Ni=0;Ni<Re;Ni++)Di&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(A).__webglTexture,V,nt+Ni),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(k).__webglTexture,be,wt+Ni)),F.blitFramebuffer(De,je,Te,Me,Ne,mt,Te,Me,F.DEPTH_BUFFER_BIT,F.NEAREST);M.bindFramebuffer(F.READ_FRAMEBUFFER,null),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||W.has(A)){let At=W.get(A),qn=W.get(k);M.bindFramebuffer(F.READ_FRAMEBUFFER,H),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,I);for(let vt=0;vt<Re;vt++)Di?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,At.__webglTexture,V,nt+vt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,At.__webglTexture,V),xt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qn.__webglTexture,be,wt+vt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,qn.__webglTexture,be),V!==0?F.blitFramebuffer(De,je,Te,Me,Ne,mt,Te,Me,F.COLOR_BUFFER_BIT,F.NEAREST):xt?F.copyTexSubImage3D(Ee,be,Ne,mt,wt+vt,De,je,Te,Me):F.copyTexSubImage2D(Ee,be,Ne,mt,De,je,Te,Me);M.bindFramebuffer(F.READ_FRAMEBUFFER,null),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else xt?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Ee,be,Ne,mt,wt,Te,Me,Re,gt,Xt,Tt.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(Ee,be,Ne,mt,wt,Te,Me,Re,gt,Tt.data):F.texSubImage3D(Ee,be,Ne,mt,wt,Te,Me,Re,gt,Xt,Tt):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,be,Ne,mt,Te,Me,gt,Xt,Tt.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,be,Ne,mt,Tt.width,Tt.height,gt,Tt.data):F.texSubImage2D(F.TEXTURE_2D,be,Ne,mt,Te,Me,gt,Xt,Tt);M.pixelStorei(F.UNPACK_ROW_LENGTH,en),M.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ot),M.pixelStorei(F.UNPACK_SKIP_PIXELS,cn),M.pixelStorei(F.UNPACK_SKIP_ROWS,bn),M.pixelStorei(F.UNPACK_SKIP_IMAGES,Xn),be===0&&k.generateMipmaps&&F.generateMipmap(Ee),M.unbindTexture()},this.initRenderTarget=function(A){W.get(A).__webglFramebuffer===void 0&&Z.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Z.setTextureCube(A,0):A.isData3DTexture?Z.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Z.setTexture2DArray(A,0):Z.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){N=0,B=0,q=null,M.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};var Mu=[[0,0,0],[0,0,-80],[25,2,-140],[75,4,-170],[130,2,-140],[150,0,-80],[135,-2,-20],[95,-3,25],[120,-1,75],[160,2,120],[140,4,180],[80,2,195],[30,0,160],[-35,-1,180],[-95,1,150],[-115,2,105],[-85,1,75],[-45,0,65],[-15,0,45]],bu={meadow:{id:"meadow",shortcut:[142,180],name:"Meadow Loop",points:Mu,theme:{skyTop:3116287,skyMid:8177919,skyLow:14218239,fog:14218239,ground:6082373,trees:[4114766,3126595,8051018,5427578,16751821,16765286],trunk:10115884,ambient:.85,sun:1.7,sunColor:16774368,hemiSky:12575743,clouds:16777215,curbA:"#ef4444",curbB:"#ffffff",padColor:"#ff7a00"}},sunset:{id:"sunset",shortcut:[142,180],name:"Sunset Bay",points:Mu.map(([s,e,t],n)=>[-s,e*1.6+(n%3===0?1.5:0),t]),theme:{skyTop:4930216,skyMid:16747100,skyLow:16766366,fog:16763296,ground:15781766,trees:[3064998,2533018,8115081,16752451],trunk:10512186,ambient:.8,sun:1.6,sunColor:16757370,hemiSky:16761504,clouds:16769232,curbA:"#ff7a00",curbB:"#fff3d6",padColor:"#ff3b8d"}},frosty:{id:"frosty",shortcut:[216,262],name:"Frosty Peaks",points:[[0,0,0],[0,0,-80],[-20,3,-130],[-70,6,-150],[-120,5,-120],[-130,3,-60],[-90,1,-20],[-60,0,30],[-100,2,80],[-80,5,140],[-20,7,160],[45,5,150],[95,3,120],[100,1,75],[60,0,55],[20,0,40]],theme:{skyTop:6990312,skyMid:12575743,skyLow:15924223,fog:15398655,ground:16054527,trees:[15267071,10475720,8370392,13625599],trunk:8018500,ambient:.95,sun:1.4,sunColor:15398143,hemiSky:16777215,clouds:16777215,curbA:"#3b82f6",curbB:"#ffffff",padColor:"#00b4ff"}},neon:{id:"neon",shortcut:[228,262],name:"Neon Night",points:[[0,0,0],[0,0,-80],[10,2,-150],[60,4,-190],[120,3,-170],[140,1,-110],[110,0,-60],[130,-1,0],[180,1,40],[170,3,110],[110,4,140],[50,2,110],[20,0,140],[-40,1,170],[-110,3,155],[-165,4,105],[-130,2,40],[-90,1,55],[-45,0,60],[-12,0,45]],theme:{skyTop:460575,skyMid:2366046,skyLow:7024547,fog:2759518,ground:1911642,trees:[16732120,2746367,10906623,6094749],trunk:3813227,glow:!0,ambient:.55,sun:.9,sunColor:12167423,hemiSky:7035903,clouds:4865423,curbA:"#ff2fd0",curbB:"#2a2a5a",padColor:"#29e7ff"}}};function Ta(s){return bu[s||"meadow"]||bu.meadow}function Su(s){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#f8faf7",t.fillRect(0,0,256,256);let n=419,i=()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296);if(s==="neon"){t.fillStyle="#eef4ff",t.fillRect(0,0,256,256),t.strokeStyle="#a1b5d4",t.lineWidth=1;for(let r=0;r<=256;r+=64)t.beginPath(),t.moveTo(r,0),t.lineTo(r,256),t.stroke(),t.beginPath(),t.moveTo(0,r),t.lineTo(256,r),t.stroke();t.fillStyle="#cfdbed";for(let r=12;r<256;r+=64)for(let a=12;a<256;a+=64)t.fillRect(a,r,40,40)}else if(s==="sunset"){t.strokeStyle="#d9c9a950",t.lineWidth=2;for(let r=0;r<280;r+=24)t.beginPath(),t.moveTo(-12,r),t.bezierCurveTo(60,r-13,170,r+14,268,r),t.stroke()}else if(s==="meadow"){t.fillStyle="#d9e4d25c";for(let r=0;r<256;r+=64)t.fillRect(r,0,32,256)}for(let r=0;r<1e3;r++){let a=i()*256,l=i()*256;t.fillStyle=s==="frosty"?r%3?"#dae8f033":"#ffffff88":"#9ca58e18",t.fillRect(a,l,s==="frosty"?3:1,s==="meadow"?3:1)}let o=new Pt(e);return o.colorSpace=Rt,o.wrapS=o.wrapT=jt,o.repeat.set(18,18),o}function Eu(){let s=document.createElement("canvas");s.width=512,s.height=128;let e=s.getContext("2d"),t=4,n=16,i=s.width/n,o=s.height/t;for(let a=0;a<t;a++)for(let l=0;l<n;l++)e.fillStyle=(a+l)%2===0?"#ffffff":"#18181b",e.fillRect(l*i,a*o,i,o);e.fillStyle="#eab308",e.fillRect(0,0,s.width,6),e.fillRect(0,s.height-6,s.width,6);let r=new Pt(s);return r.wrapS=jt,r.wrapT=jt,r}function Tu(){let s=document.createElement("canvas");s.width=512,s.height=512;let e=s.getContext("2d");e.fillStyle="#41495e",e.fillRect(0,0,512,512);for(let o=0;o<6e3;o++){let r=Math.random()*512,a=Math.random()*512,l=Math.floor(62+Math.random()*12);e.fillStyle=`rgb(${l},${l+7},${l+21})`,e.fillRect(r,a,2,2)}e.fillStyle="#f8fafc";let t=8,n=512/t;for(let o=0;o<t;o++)e.fillRect(250,o*n+12,12,n-24);e.fillStyle="#eab308",e.fillRect(24,0,8,512),e.fillRect(480,0,8,512);let i=new Pt(s);return i.wrapS=jt,i.wrapT=jt,i.repeat.set(1,40),i}function wu(s="#dc2626",e="#ffffff"){let t=document.createElement("canvas");t.width=128,t.height=256;let n=t.getContext("2d"),i=8,o=t.height/i;for(let a=0;a<i;a++)n.fillStyle=a%2===0?s:e,n.fillRect(0,a*o,t.width,o);let r=new Pt(t);return r.wrapS=jt,r.wrapT=jt,r.repeat.set(1,22),r}function xr(s,e,t){let n=document.createElement("canvas");n.width=512,n.height=128;let i=n.getContext("2d");return i.fillStyle=e,i.fillRect(0,0,512,128),i.fillStyle=t,i.fillRect(0,0,512,8),i.fillRect(0,120,512,8),i.font="bold 44px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillStyle=t,i.fillText(s,256,64),new Pt(n)}var wa=class{constructor(e,t){$(this,"scene");$(this,"spline");$(this,"totalLength",0);$(this,"trackPoints",[]);$(this,"trackMesh",null);$(this,"sceneryGroup");$(this,"startingLightsGroup");$(this,"lightMeshes",[]);$(this,"animatedProps",[]);$(this,"roadWidth",18);$(this,"course");$(this,"shortcut",null);this.scene=e,this.course=Ta(t),this.sceneryGroup=new Ke,this.startingLightsGroup=new Ke,this.scene.add(this.sceneryGroup),this.scene.add(this.startingLightsGroup);let n=this.course.points.map(([i,o,r])=>new D(i,o,r));this.spline=new ii(n,!0,"centripetal",.4),this.totalLength=this.spline.getLength(),this.sampleTrackPoints(300),this.buildRoadMesh(),this.findShortcut(),this.buildTerrainAndHills(),this.buildStartGantry(),this.buildScenery(),this.buildBarriers(),this.buildShortcut()}sampleTrackPoints(e){this.trackPoints=[];let t=0,n=this.spline.getPointAt(0);for(let i=0;i<e;i++){let o=i/e,r=this.spline.getPointAt(o),a=this.spline.getTangentAt(o).normalize(),l=new D(0,1,0),c=new D().crossVectors(a,l).normalize();i>0&&(t+=n.distanceTo(r)),n=r,this.trackPoints.push({x:r.x,y:r.y,z:r.z,tangentX:a.x,tangentY:a.y,tangentZ:a.z,normalX:c.x,normalY:c.y,normalZ:c.z,width:this.roadWidth,bank:0,distance:t})}}buildRoadMesh(){let t=this.roadWidth/2,n=new ht,i=[],o=[],r=[],a=[],l=[],c=[],h=[],u=[],f=[],d=2.2;for(let E=0;E<=300;E++){let w=E%300/300,L=this.spline.getPointAt(w),U=this.spline.getTangentAt(w).normalize(),H=new D(-U.z,0,U.x).normalize(),I=L.clone().addScaledVector(H,-t),N=L.clone().addScaledVector(H,t);i.push(I.x,I.y+.05,I.z),i.push(N.x,N.y+.05,N.z);let B=E/300*60;o.push(0,B),o.push(1,B);let q=I.clone().addScaledVector(H,-d);a.push(q.x,q.y+.12,q.z),a.push(I.x,I.y+.06,I.z),l.push(0,B*2),l.push(1,B*2);let K=N.clone().addScaledVector(H,d);if(h.push(N.x,N.y+.06,N.z),h.push(K.x,K.y+.12,K.z),u.push(0,B*2),u.push(1,B*2),E<300){let te=E*2,se=(E+1)*2;r.push(te,te+1,se),r.push(te+1,se+1,se),c.push(te,te+1,se),c.push(te+1,se+1,se),f.push(te,te+1,se),f.push(te+1,se+1,se)}}n.setAttribute("position",new Ge(i,3)),n.setAttribute("uv",new Ge(o,2)),n.setIndex(r),n.computeVertexNormals();let p=Tu(),_=new Ce({map:p,roughness:.85,metalness:.1});this.trackMesh=new ee(n,_),this.trackMesh.receiveShadow=!0,this.sceneryGroup.add(this.trackMesh);let x=wu(this.course.theme.curbA,this.course.theme.curbB),m=new Ce({map:x,roughness:.7}),v=new ht;v.setAttribute("position",new Ge(a,3)),v.setAttribute("uv",new Ge(l,2)),v.setIndex(c),v.computeVertexNormals();let R=new ee(v,m);R.receiveShadow=!0,this.sceneryGroup.add(R);let S=new ht;S.setAttribute("position",new Ge(h,3)),S.setAttribute("uv",new Ge(u,2)),S.setIndex(f),S.computeVertexNormals();let C=new ee(S,m);C.receiveShadow=!0,this.sceneryGroup.add(C);let y=new Vt(this.roadWidth,4),T=Eu(),g=new Ce({map:T,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2}),b=new ee(y,g);b.rotation.x=-Math.PI/2,b.position.set(0,.08,0),this.sceneryGroup.add(b)}buildTerrainAndHills(){let e=new Vt(600,600,128,128);e.rotateX(-Math.PI/2);let t=e.attributes.position;for(let o=0;o<t.count;o++){let r=t.getX(o),a=t.getZ(o),l=this.getTerrainElevation(r,a),c=this.getClosestTrackPointInfo(r,a);c.dist<this.roadWidth*.5+6&&(l=Math.min(l,c.y-.35));let h=this.shortcut?this.segDist(r,a,this.shortcut.ax,this.shortcut.az,this.shortcut.bx,this.shortcut.bz):null;h&&h.d<this.shortcut.w/2+6&&(l=Math.min(l,this.shortcut.ay+(this.shortcut.by-this.shortcut.ay)*h.t-.3)),t.setY(o,l)}e.computeVertexNormals();let n=new Ce({map:Su(this.course.id),color:5078031,roughness:.9,flatShading:!0}),i=new ee(e,n);i.receiveShadow=!0,this.sceneryGroup.add(i)}findShortcut(){let e=this.course.shortcut;if(!e)return;let t=this.trackPoints[e[0]],n=this.trackPoints[e[1]];!t||!n||(this.shortcut={ax:t.x,ay:t.y,az:t.z,bx:n.x,by:n.y,bz:n.z,w:11,ia:e[0],ib:e[1]})}segDist(e,t,n,i,o,r){let a=o-n,l=r-i,c=a*a+l*l||1,h=Math.max(0,Math.min(1,((e-n)*a+(t-i)*l)/c)),u=n+a*h,f=i+l*h;return{d:Math.hypot(e-u,t-f),t:h}}onShortcut(e,t){let n=this.shortcut;if(!n)return null;let i=this.segDist(e,t,n.ax,n.az,n.bx,n.bz);return i.d>n.w/2+.8?null:n.ay+(n.by-n.ay)*i.t}buildShortcut(){let e=this.shortcut;if(!e)return;let t=document.createElement("canvas");t.width=64,t.height=256;let n=t.getContext("2d");n.fillStyle="#c98b4f",n.fillRect(0,0,64,256),n.fillStyle="#ffffff",n.fillRect(0,0,4,256),n.fillRect(60,0,4,256);for(let u=0;u<260;u++)n.fillStyle=Math.random()<.5?"rgba(90,55,25,.35)":"rgba(230,190,140,.35)",n.fillRect(Math.random()*64,Math.random()*256,3,3);n.fillStyle="rgba(70,40,20,.35)",n.fillRect(14,0,6,256),n.fillRect(44,0,6,256);let i=new Pt(t);i.wrapT=jt;let o=Math.hypot(e.bx-e.ax,e.bz-e.az);i.repeat.set(1,o/10);let r=new Vt(e.w,o,1,8),a=new ee(r,new Ce({map:i,roughness:1,polygonOffset:!0,polygonOffsetFactor:1}));a.rotation.x=-Math.PI/2,a.rotation.z=-Math.atan2(e.bx-e.ax,e.bz-e.az)+Math.PI,a.position.set((e.ax+e.bx)/2,(e.ay+e.by)/2-.05,(e.az+e.bz)/2),this.sceneryGroup.add(a);let l=new Ce({color:16742912}),c=(e.bx-e.ax)/o,h=(e.bz-e.az)/o;for(let u=12;u<o-12;u+=9)for(let f of[-1,1]){let d=new ee(new ft(.45,1.2,8),l);d.position.set(e.ax+c*u+-h*f*(e.w/2+.6),e.ay+(e.by-e.ay)*(u/o)+.5,e.az+h*u+c*f*(e.w/2+.6)),this.sceneryGroup.add(d)}for(let[u,f,d,p,_]of[[e.ax,e.ay,e.az,e.bx,e.bz],[e.bx,e.by,e.bz,e.ax,e.az]]){let x=document.createElement("canvas");x.width=256,x.height=96;let m=x.getContext("2d");m.fillStyle="#ffc83d",m.fillRect(0,0,256,96),m.fillStyle="#1b1b3a",m.font="bold 44px sans-serif",m.textAlign="center",m.textBaseline="middle",m.fillText("SHORTCUT",128,50);let v=new Pt(x);v.colorSpace=Rt;let R=new ee(new Vt(4.2,1.6),new Ce({map:v,side:kt})),S=p-u,C=_-d,y=Math.hypot(S,C)||1,T=this.roadWidth/2+7,g=e.w/2+2.2,b=u+S/y*T+-C/y*g,E=d+C/y*T+S/y*g;R.position.set(b,f+2.6,E),R.lookAt(u,f+2.6,d);let w=new ee(new Je(.12,.12,2.6,6),new Ce({color:7031339}));w.position.set(b,f+1.3,E),this.sceneryGroup.add(R,w)}}getClosestTrackPointInfo(e,t){let n=9999,i=0;for(let o=0;o<this.trackPoints.length;o+=4){let r=this.trackPoints[o],a=r.x-e,l=r.z-t,c=Math.sqrt(a*a+l*l);c<n&&(n=c,i=r.y)}return{dist:n,y:i}}getTerrainElevation(e,t){let{dist:n,y:i}=this.getClosestTrackPointInfo(e,t);if(n>25){let o=Math.sin(e*.02)*Math.cos(t*.02)*14+Math.sin(e*.05+t*.04)*6,a=Math.max(0,Math.min(1,(n-25)/(60-25))),l=i-.05,c=Math.max(-2,o-2);return l*(1-a)+c*a}else return i-.05}buildStartGantry(){let e=new Ke;e.position.set(0,0,0);let t=new Ce({color:3359061,roughness:.4,metalness:.7}),n=new Ce({map:xr("KARIO MART","#dc2626","#ffffff")}),i=this.roadWidth/2+2.5,o=9,r=new ut(.8,o,.8),a=new ee(r,t);a.position.set(-i,o/2,0),a.castShadow=!0,e.add(a);let l=new ee(r,t);l.position.set(i,o/2,0),l.castShadow=!0,e.add(l);let c=new ut(this.roadWidth+6,1.4,1.2),h=new ee(c,t);h.position.set(0,o,0),h.castShadow=!0,e.add(h);let u=new Vt(this.roadWidth-2,2.2),f=new ee(u,n);f.position.set(0,o+.3,-.62),f.rotation.y=Math.PI,e.add(f);let d=new ee(u,n);d.position.set(0,o+.3,.62),e.add(d),this.lightMeshes=[];let p=new ut(4.8,1.6,.6),_=new ee(p,new Ce({color:1579035}));_.position.set(0,o-1.2,-.2),e.add(_);let x=[15680580,15680580,15680580];for(let m=0;m<3;m++){let v=new Qe(.4,16,16),R=new Ce({color:2565930,emissive:0,roughness:.2}),S=new ee(v,R);S.position.set((m-1)*1.4,o-1.2,-.5),e.add(S),this.lightMeshes.push(S)}this.startingLightsGroup.add(e)}setStartingLights(e){for(let t=0;t<3;t++){let n=this.lightMeshes[t];if(!n)continue;let i=n.material;e>=1&&e<=3?t<e?(i.color.setHex(15680580),i.emissive.setHex(15680580)):(i.color.setHex(2565930),i.emissive.setHex(0)):e===4?(i.color.setHex(2278750),i.emissive.setHex(2278750)):(i.color.setHex(2565930),i.emissive.setHex(0))}}buildScenery(){let e=new Ce({color:7877903,roughness:.9}),t=new Ce({color:1409085,roughness:.8,flatShading:!0}),n=new Ce({color:1467700,roughness:.8,flatShading:!0}),i=(o,r,a,l)=>{let c=new Ke;c.position.set(o,r,a),c.scale.set(l,l,l);let h=new Je(.3,.45,2.5,6),u=new ee(h,e);u.position.y=1.25,u.castShadow=!0,c.add(u);let f=new ee(new ft(2.2,3.2,6),t);f.position.y=3.5,f.castShadow=!0,c.add(f);let d=new ee(new ft(1.7,2.8,6),n);d.position.y=5.2,d.castShadow=!0,c.add(d);let p=new ee(new ft(1.2,2.2,6),t);return p.position.y=6.6,p.castShadow=!0,c.add(p),c};for(let o=0;o<90;o++){let r=o/90*Math.PI*2,a=60+o%7*22,l=Math.cos(r)*a+(Math.random()-.5)*30,c=Math.sin(r)*a+(Math.random()-.5)*30,{dist:h}=this.getClosestTrackPointInfo(l,c);if(h>this.roadWidth/2+6){let u=.8+Math.random()*.7,f=this.getTerrainElevation(l,c),d=i(l,f,c,u);this.sceneryGroup.add(d)}}this.buildGrandstand(-22,this.getTerrainElevation(-22,-45),-45,Math.PI/2),this.buildGrandstand(22,this.getTerrainElevation(22,-45),-45,-Math.PI/2),this.course.id==="meadow"&&(this.buildHotAirBalloon(60,45,-50,15884931,16769952),this.buildHotAirBalloon(-80,55,60,5619684,16777215));for(let[o,r]of this.course.id==="sunset"?[[120,60],[-110,-100],[200,-150],[-200,120],[60,-240]]:[])this.getClosestTrackPointInfo(o,r).dist>this.roadWidth/2+14&&this.buildWindTurbine(o,this.getTerrainElevation(o,r),r)}buildGrandstand(e,t,n,i){let o=new Ke;o.position.set(e,t,n),o.rotation.y=i;let r=new Ce({color:4674921,roughness:.5}),a=new Ce({color:14427686,roughness:.4}),l=new Ce({color:3900150,roughness:.6}),c=5;for(let _=0;_<c;_++){let x=new ut(24,.8,1.6),m=new ee(x,r);m.position.set(0,(_+1)*.8,_*1.4),m.castShadow=!0,o.add(m);for(let v=0;v<12;v++){let R=new ut(.7,.9,.6),S=[15680580,3900150,15381256,1096065,11032055,16777215],C=new Ce({color:S[Math.floor(Math.random()*S.length)]}),y=new ee(R,C);y.position.set(-10+v*1.8+(Math.random()-.5)*.3,(_+1)*.8+.7,_*1.4),o.add(y)}}let h=new ut(26,.4,9),u=new ee(h,a);u.position.set(0,8,3),u.rotation.x=.15,u.castShadow=!0,o.add(u);let f=new Je(.2,.2,8,8),d=new ee(f,r);d.position.set(-11,4,-1),o.add(d);let p=new ee(f,r);p.position.set(11,4,-1),o.add(p),this.sceneryGroup.add(o)}buildHotAirBalloon(e,t,n,i,o){let r=new Ke;r.position.set(e,t,n);let a=new Qe(7,14,14);a.scale(1,1.4,1);let l=new Ce({color:i,roughness:.4}),c=new ee(a,l);c.castShadow=!0,r.add(c);let h=new Ce({color:o,roughness:.4});for(let x=0;x<8;x++){let m=new ee(new Qe(7.025,4,14,x*Math.PI/4,Math.PI/8),h);m.scale.y=1.4,r.add(m)}let u=new Ce({color:14995623});for(let x of[-1,1])for(let m of[-1,1]){let v=new ee(new Je(.055,.055,3.8,5),u);v.position.set(x*.85,-9.1,m*.85),r.add(v)}let f=new ut(2,1.6,2),d=new Ce({color:7877903,roughness:.9}),p=new ee(f,d);p.position.set(0,-11,0),r.add(p),this.sceneryGroup.add(r);let _=t;this.animatedProps.push({mesh:r,update:x=>{r.position.y=_+Math.sin(x*.8+e)*2.5,r.rotation.y=x*.1}})}buildWindTurbine(e,t,n){let i=new Ke;i.position.set(e,t,n);let o=new Ce({color:15857145,roughness:.3}),r=new Je(.6,1.4,28,10),a=new ee(r,o);a.position.y=14,a.castShadow=!0,i.add(a);let l=new Qe(.9,10,10),c=new ee(l,o);c.position.set(0,28,.8),i.add(c);let h=new Ke;h.position.set(0,28,1.2);for(let u=0;u<3;u++){let f=new ut(.5,11,.1),d=new ee(f,o);d.position.y=5.5;let p=new Ke;p.rotation.z=u*Math.PI*2/3,p.add(d),h.add(p)}i.add(h),this.sceneryGroup.add(i),this.animatedProps.push({mesh:h,update:(u,f)=>{h.rotation.z+=f*1.8}})}buildBarriers(){let e=[xr("\u26A1 TURBO CHARGE \u26A1","#1d4ed8","#ffffff"),xr("\u{1F525} APEX DRIFT \u{1F525}","#ea580c","#ffffff"),xr("\u{1F3C6} CHAMPIONSHIP \u{1F3C6}","#eab308","#000000")],t=[25,45,80,120,160,210,260],n=this.roadWidth/2+1.2;t.forEach((i,o)=>{if(i>=this.trackPoints.length)return;let r=this.trackPoints[i],a=e[o%e.length],l=new Ce({map:a,roughness:.5}),c=new ut(.4,1.8,8),h=new ee(c,l);h.position.set(r.x+r.normalX*n,r.y+.9,r.z+r.normalZ*n),!(this.shortcut&&this.segDist(h.position.x,h.position.z,this.shortcut.ax,this.shortcut.az,this.shortcut.bx,this.shortcut.bz).d<this.shortcut.w+4)&&(h.lookAt(h.position.x+r.tangentX,h.position.y,h.position.z+r.tangentZ),h.castShadow=!0,this.sceneryGroup.add(h))})}getClosestTrackPoint(e,t){let n=1/0,i=0;for(let r=0;r<this.trackPoints.length;r++){let a=this.trackPoints[r],l=a.x-e,c=a.z-t,h=l*l+c*c;h<n&&(n=h,i=r)}return{point:this.trackPoints[i],index:i,distanceToCenter:Math.sqrt(n)}}update(e,t){for(let n of this.animatedProps)n.update(e,t)}};function _r(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),o={},r={},a=s[0].morphTargetsRelative,l=new ht,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in o){let u=Au(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in r){let u=r[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<r[h].length;++_)d.push(r[h][_][f]);let p=Au(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Au(s){let e,t,n,i=-1,o=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*t}let r=new e(o),a=new Nt(r,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<t;p++){let _=h.getComponent(f,p);a.setComponent(f+u,p,_)}}else r.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}var Aa={cap:"mario",cat:"luigi",bow:"peach",bunny:"daisy",horns:"yoshi",antenna:"toad",crown:"bowser",bear:"donkeykong"};function fl(s,e,t="race"){let n=Aa[e.topper||"cap"]||"mario",i=(y,T=.48,g=0)=>{let b=new Ce({color:y,roughness:T,metalness:g});return b.userData.preserveShading=!0,b},o=i(16762266),r=i(16775659,.3),a=i(1514536,.3),l=i(4858902),c=i(16762158,.25,.55),h=i(14822448),u=i(1878598),f=i(2380489),d=new Qe(1,t==="portrait"?28:20,t==="portrait"?20:14),p=(y,T,g,b,E,w,L,U)=>{let H=new ee(d,T);return H.position.set(g,b,E),H.scale.set(w,L,U),H.castShadow=H.receiveShadow=!0,y.add(H),H},_=(y,T,g,b)=>{let E=new ii(g.map(L=>new D(L[0],L[1],L[2]))),w=new ee(new Ai(E,t==="portrait"?20:12,b,t==="portrait"?8:6,!1),T);return w.castShadow=!0,y.add(w),w},x=(y,T,g,b,E=.025)=>{let w=new $t;w.moveTo(g[0][0],g[0][1]),g.slice(1).forEach(U=>w.lineTo(U[0],U[1])),w.closePath();let L=new ee(new si(w,{depth:E,steps:1,bevelEnabled:!0,bevelSegments:3,bevelSize:.008,bevelThickness:.008}),T);return L.position.z=b,L.castShadow=!0,y.add(L),L},m=(y,T,g,b,E,w,L,U=0)=>{let H=new ee(new ft(w,L,16),T);return H.position.set(g,b,E),H.rotation.z=U,H.castShadow=!0,y.add(H),H},v=new Ke;v.name=n+"-head",v.position.set(0,1.05,-.14),s.add(v);let R=(y,T,g,b,E=.074,w=.103,L=2387401)=>{p(y,r,T,g,b,E,w,.047),p(y,i(L,.22),T+.005,g,b+.043,E*.47,w*.65,.015),p(y,a,T+.006,g,b+.057,E*.25,w*.46,.009),p(y,r,T-.005,g+w*.3,b+.066,E*.14,w*.16,.005)},S=(y,T,g,b)=>_(y,i(10173485),[[-b,T+.018,g],[-b*.5,T-.015,g+.018],[0,T-.028,g+.024],[b*.6,T-.01,g+.014],[b,T+.025,g]],.009),C=(y,T=r)=>{for(let g of[-1,1])p(s,y,g*.29,.73,-.02,.13,.19,.14).rotation.z=g*.35,p(s,y,g*.3,.61,.13,.1,.18,.1).rotation.x=-.85,p(s,T,g*.23,.63,.26,.115,.105,.095),p(s,T,g*.17,.65,.29,.05,.065,.065),p(s,l,g*.19,.36,.34,.145,.115,.22)};if(n==="mario"||n==="luigi"){let y=n==="luigi",T=y?u:h;p(s,T,0,.7,-.13,.3,y?.34:.29,.24),p(s,f,0,.5,-.05,.29,.2,.26),p(s,f,0,.65,.075,.2,.19,.08);for(let w of[-1,1])p(s,f,w*.17,.77,.055,.05,.18,.055),p(s,c,w*.17,.7,.125,.039,.041,.016);C(T),p(v,o,0,.015,.005,y?.29:.32,y?.37:.32,.27),p(v,l,0,.045,-.12,.31,.3,.21);for(let w of[-1,1])p(v,o,w*.14,-.105,.13,.18,.16,.16),p(v,o,w*.31,-.01,-.005,.085,.115,.068),p(v,i(15308147),w*.327,-.012,.038,.04,.065,.022),p(v,l,w*.248,.035,.095,.045,.1,.065),R(v,w*.105,.09,.235,.074,y?.12:.105),_(v,l,[[w*.045,.218,.245],[w*.105,.245,.23],[w*.17,.215,.215]],.025);p(v,o,0,-.01,.29,y?.105:.13,.115,.15);let g=new $t;g.moveTo(-.21,-.07),g.quadraticCurveTo(-.12,-.105,0,-.085),g.quadraticCurveTo(.12,-.105,.21,-.07),g.quadraticCurveTo(.215,-.165,.145,-.145),g.quadraticCurveTo(.11,-.195,.07,-.16),g.quadraticCurveTo(.035,-.195,0,-.16),g.quadraticCurveTo(-.035,-.195,-.07,-.16),g.quadraticCurveTo(-.11,-.195,-.145,-.145),g.quadraticCurveTo(-.215,-.165,-.21,-.07);let b=new ee(new si(g,{depth:.03,bevelEnabled:!0,bevelSegments:3,bevelSize:.009,bevelThickness:.009,curveSegments:12}),l);b.position.z=.267,v.add(b),S(v,-.194,.235,.092),p(v,T,0,y?.34:.31,-.015,.35,.2,.31),p(v,T,0,.245,.16,.35,.035,.26),p(v,T,0,.23,.21,.34,.017,.23),p(v,r,0,.355,.279,.09,.079,.018);let E=x(v,T,y?[[-.031,.348],[-.031,.262],[.034,.262],[.034,.28],[-.01,.28],[-.01,.348]]:[[-.052,.267],[-.052,.342],[-.03,.342],[0,.303],[.03,.342],[.052,.342],[.052,.267],[.032,.267],[.032,.311],[0,.279],[-.032,.311],[-.032,.267]],.3,.006);E.position.y=.05}else if(n==="peach"||n==="daisy"){let y=n==="daisy",T=i(y?10174229:16172099),g=i(y?16759585:15891380),b=i(y?15956502:14171782),E=i(y?2537114:2264036,.12,.2);p(s,g,0,.65,-.13,.3,.34,.25),C(g);for(let N of[-1,1])p(s,g,N*.27,.82,-.09,.16,.15,.15);p(s,b,0,.57,.08,.25,.13,.11),p(s,c,0,.7,.13,.074,.095,.035),p(s,E,0,.7,.163,.047,.068,.02),p(v,T,0,.015,-.13,.33,.37,.23);let w=new Qe(1,t==="portrait"?56:32,t==="portrait"?40:24),L=w.attributes.position;for(let N=0;N<L.count;N++){let B=L.getX(N),q=L.getY(N),K=L.getZ(N),te=q<-.15?1-(-q-.15)*.18:1,se=B*.245*te,fe=q*.255+.02,qe=K>0?.033*Math.exp(-((se/.035)**2)-((fe+.012)/.045)**2):0;L.setXYZ(N,se,fe,K*.22+.035+qe)}w.computeVertexNormals();let U=new ee(w,o);U.name="princess-face",U.castShadow=U.receiveShadow=!0,v.add(U);for(let N of[-1,1])p(v,T,N*.257,-.12,-.06,.105,y?.23:.36,.14).rotation.z=N*.15,p(v,T,N*.265,-.31,-.045,.115,.13,.16),R(v,N*.092,.04,.226,.069,.096,y?2139824:2592204),_(v,a,[[N*.04,.108,.248],[N*.09,.141,.247],[N*.15,.113,.236],[N*.18,.135,.218]],.011),_(v,T,[[N*.045,.19,.205],[N*.1,.207,.194],[N*.16,.183,.17]],.012),p(v,i(15965594),N*.156,-.09,.213,.049,.025,.008),p(v,c,N*.257,-.105,.087,.047,.06,.035),p(v,E,N*.257,-.105,.116,.032,.043,.016);let H=i(14306932);p(v,H,-.012,-.11,.24,.019,.009,.007),p(v,H,.012,-.11,.24,.019,.009,.007),p(v,H,0,-.123,.238,.026,.007,.006),p(v,T,-.11,.22,.14,.16,.063,.07).rotation.z=-.35,p(v,T,.115,.215,.13,.15,.073,.07).rotation.z=.45,p(v,T,.025,.145,.225,.062,.1,.042);let I=new ee(new Je(.18,.15,.13,16),c);I.position.set(0,.34,-.025),v.add(I);for(let N=0;N<5;N++){let B=N*Math.PI*2/5;m(v,c,Math.sin(B)*.155,.465,Math.cos(B)*.155-.025,.052,.16),p(v,c,Math.sin(B)*.155,.547,Math.cos(B)*.155-.025,.024,.024,.024)}p(v,i(15810153,.15,.1),0,.356,.159,.045,.055,.018)}else if(n==="toad"){p(s,r,0,.64,-.13,.26,.29,.22);for(let y of[-1,1])p(s,f,y*.185,.74,-.04,.1,.22,.22),_(s,c,[[y*.13,.89,.12],[y*.12,.73,.17],[y*.13,.57,.12]],.016);C(o,o),p(v,o,0,-.07,.015,.28,.27,.24);for(let y of[-1,1])p(v,a,y*.092,-.045,.243,.026,.066,.012),p(v,r,y*.092-.006,-.02,.255,.008,.015,.005);S(v,-.18,.226,.072),p(v,r,0,.24,-.025,.48,.34,.41);for(let[y,T]of[[0,.2],[Math.PI/2,.45],[-Math.PI/2,.45],[Math.PI,.3],[0,1.2]]){let g=new D(Math.sin(y)*Math.cos(T),Math.sin(T),Math.cos(y)*Math.cos(T));p(v,h,g.x*.474,.24+g.y*.336,-.025+g.z*.406,.145,.145,.018).quaternion.setFromUnitVectors(new D(0,0,1),g)}}else if(n==="yoshi"){p(s,u,0,.68,-.15,.31,.33,.27),p(s,r,0,.67,.066,.225,.28,.1),C(u,u),p(v,u,0,.045,-.045,.28,.34,.24);for(let T of[-1,1])p(v,u,T*.135,.2,.03,.15,.22,.15),R(v,T*.124,.21,.151,.082,.129,2106153);p(v,r,0,-.155,.2,.29,.115,.24),p(v,u,0,-.03,.235,.345,.245,.315);for(let T of[-1,1])p(v,i(1604405),T*.12,.045,.513,.026,.018,.009);S(v,-.2,.34,.2);let y=i(15949094);for(let T=0;T<3;T++)m(v,y,0,.3-T*.17,-.22,.075,.17);p(s,h,0,.77,-.365,.23,.1,.16),p(s,u,0,.48,-.42,.17,.14,.32);for(let T of[-1,1])p(s,y,T*.19,.37,.34,.15,.12,.23)}else if(n==="bowser"){let y=i(15312173),T=i(16767886),g=i(2328649),b=i(12071961);p(s,y,0,.69,-.13,.39,.36,.29),p(s,T,0,.63,.11,.28,.29,.12),C(y,y),p(s,g,0,.78,-.38,.4,.4,.18);for(let E of[-1,1])for(let w=0;w<2;w++)m(s,r,E*.23,.88-w*.22,-.51,.055,.18,E*.4);p(v,y,0,0,-.035,.36,.32,.27),p(v,T,0,-.14,.25,.36,.19,.22),p(v,i(6890527),0,-.16,.434,.24,.067,.017);for(let E of[-1,1]){R(v,E*.148,.09,.209,.086,.1,13450273),p(v,b,E*.15,.184,.225,.14,.049,.055).rotation.z=E*.28,m(v,r,E*.3,.29,-.015,.08,.29,-E*.4),p(v,i(10055727),E*.16,-.045,.424,.026,.019,.012),m(v,r,E*.175,-.13,.451,.037,.095,Math.PI),p(s,a,E*.32,.58,.13,.135,.075,.12);for(let w=0;w<3;w++)p(s,r,E*.32+Math.sin(w*2)*.09,.61+Math.cos(w*2)*.06,.22,.025,.028,.03)}for(let E=0;E<5;E++)m(v,b,(E-2)*.067,.44-Math.abs(E-2)*.035,-.07,.073,.25,-(E-2)*.15).rotation.x=-.3}else{let y=i(7616796),T=i(15251328);p(s,y,0,.67,-.12,.4,.38,.3),p(s,T,0,.67,.13,.27,.29,.1),C(y,y),p(v,y,0,.03,-.03,.38,.38,.28);for(let g of[-1,1])p(v,y,g*.34,-.005,-.04,.1,.13,.07),p(v,T,g*.35,0,.012,.05,.07,.025),p(v,T,g*.115,.06,.199,.145,.185,.079),R(v,g*.12,.08,.26,.066,.082,7881759);for(let g of[-1,1])p(v,T,g*.125,.165,.244,.17,.07,.06).rotation.z=g*.16;p(v,T,0,-.15,.24,.31,.2,.19),p(v,y,0,-.045,.4,.105,.059,.035);for(let g of[-1,1])p(v,a,g*.035,-.053,.431,.016,.012,.008);S(v,-.22,.38,.18);for(let g=0;g<3;g++)m(v,y,(g-1)*.085,.415-Math.abs(g-1)*.025,-.06,.09,.21,-(g-1)*.3);_(s,h,[[-.19,.86,.03],[0,.78,.2],[.19,.86,.03]],.034),x(s,h,[[0,.78],[-.085,.62],[0,.4],[.085,.62]],.225,.018)}return v}var yr=new D;function fn(s,e,t,n,i,o){let r=2*Math.PI*i/4,a=Math.max(o-2*i,0),l=Math.PI/4;yr.copy(e),yr[n]=0,yr.normalize();let c=.5*r/(r+a),h=1-yr.angleTo(s)/l;return Math.sign(yr[t])===1?h*c:a/(r+a)+c+c*(1-h)}var ds=class s extends ut{constructor(e=1,t=1,n=1,i=2,o=.1){let r=i*2+1;if(o=Math.min(e/2,t/2,n/2,o),super(1,1,1,r,r,r),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:o},r===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new D,c=new D,h=new D(e,t,n).divideScalar(2).subScalar(o),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,_=new D,x=.5/r;for(let m=0,v=0;m<u.length;m+=3,v+=2)switch(l.fromArray(u,m),c.copy(l),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),u[m+0]=h.x*Math.sign(l.x)+c.x*o,u[m+1]=h.y*Math.sign(l.y)+c.y*o,u[m+2]=h.z*Math.sign(l.z)+c.z*o,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/p)){case 0:_.set(1,0,0),d[v+0]=fn(_,c,"z","y",o,n),d[v+1]=1-fn(_,c,"y","z",o,t);break;case 1:_.set(-1,0,0),d[v+0]=1-fn(_,c,"z","y",o,n),d[v+1]=1-fn(_,c,"y","z",o,t);break;case 2:_.set(0,1,0),d[v+0]=1-fn(_,c,"x","z",o,e),d[v+1]=fn(_,c,"z","x",o,n);break;case 3:_.set(0,-1,0),d[v+0]=1-fn(_,c,"x","z",o,e),d[v+1]=1-fn(_,c,"z","x",o,n);break;case 4:_.set(0,0,1),d[v+0]=1-fn(_,c,"x","y",o,e),d[v+1]=1-fn(_,c,"y","x",o,t);break;case 5:_.set(0,0,-1),d[v+0]=fn(_,c,"x","y",o,e),d[v+1]=1-fn(_,c,"y","x",o,t);break}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.segments,e.radius)}};function Ru(s,e){let t=Aa[e.topper||"cap"]||"mario",n=t==="peach"||t==="daisy",i=t==="bowser"||t==="donkeykong",o=(I,N=.32,B=.15)=>{let q=new Ce({color:I,roughness:N,metalness:B});return q.userData.preserveShading=!0,q},r=o(e.color),a=o(16774366),l=o(2106932,.66,.05),c=o(13098731,.2,.7),h=o(16762434,.25,.6),u=o(t==="mario"||t==="luigi"?2643406:t==="toad"?15746110:t==="yoshi"?16774095:t==="bowser"?2657356:t==="donkeykong"?10313e3:16767093),f=n?h:c,d=new Qe(1,20,14);function p(I,N,B,q,K){let te=new ee(I,N);return te.position.set(B,q,K),te.castShadow=te.receiveShadow=!0,s.add(te),te}function _(I,N,B,q,K,te,se,fe=.08){return p(new ds(K,te,se,2,Math.min(fe,te/2-.001,K/2-.001,se/2-.001)),I,N,B,q)}function x(I,N,B,q,K,te,se){let fe=p(d,I,N,B,q);return fe.scale.set(K,te,se),fe}let m=_(l,0,.23,0,1.25,.14,2.35,.06);m.name="chassis",_(r,0,.38,-.24,1.12,.28,1.52,.13);let v=_(l,0,.67,-.39,.62,.64,.2,.085);v.rotation.x=.12,_(u,0,.83,-.45,.5,.19,.12,.05);for(let I of[-1,1]){let N=x(u,I*.64,.4,-.12,.22,i?.25:.19,.71);N.name="side-pod",_(f,I*.68,.36,-.08,.075,.065,1.03,.03);let B=p(new Ut(.37,.075,8,20,Math.PI),r,I*.77,.34,-.85);B.rotation.y=Math.PI/2}let R=x(r,0,.43,.77,i?.62:.55,n?.23:.21,t==="luigi"?.68:.6);R.name="hood";let S=(I,N,B,q)=>{let K=new D((N-R.position.x)/R.scale.x,0,(B-R.position.z)/R.scale.z);K.y=Math.sqrt(Math.max(0,1-K.x*K.x-K.z*K.z));let te=new D(1,0,0).addScaledVector(K,-K.x).normalize(),se=K.clone().cross(te).normalize(),fe=[],qe=[],ct=Y=>fe.push(R.position.x+Y.x*(R.scale.x+.003),R.position.y+Y.y*(R.scale.y+.003),R.position.z+Y.z*(R.scale.z+.003));ct(K);for(let Y=1;Y<=3;Y++)for(let ce=0;ce<20;ce++){let re=ce*Math.PI/10,we=q/Math.min(R.scale.x,R.scale.z)*Y/3;ct(K.clone().multiplyScalar(Math.cos(we)).addScaledVector(te,Math.cos(re)*Math.sin(we)).addScaledVector(se,Math.sin(re)*Math.sin(we)))}for(let Y=0;Y<20;Y++)qe.push(0,1+Y,1+(Y+1)%20);for(let Y=1;Y<3;Y++)for(let ce=0;ce<20;ce++){let re=1+(Y-1)*20+ce,we=1+(Y-1)*20+(ce+1)%20,Ve=1+Y*20+ce,Ue=1+Y*20+(ce+1)%20;qe.push(re,Ve,Ue,re,Ue,we)}let tt=new ht;tt.setAttribute("position",new Ge(fe,3)),tt.setIndex(qe),tt.computeVertexNormals(),p(tt,I,0,0,0)};if(t==="toad"){R.material=a;for(let[I,N,B]of[[0,.9,.16],[-.3,.64,.105],[.3,.64,.105]])S(u,I,N,B)}else if(t==="yoshi"){R.material=a,R.scale.set(.54,.32,.61),R.position.y=.46;for(let[I,N,B]of[[0,.88,.16],[-.28,.64,.11],[.27,.61,.1]])S(r,I,N,B)}else if(t==="bowser"){R.material=u,R.scale.set(.62,.3,.59);for(let I of[-1,1])for(let N of[.6,1.03]){let B=p(new ft(.075,.22,12),a,I*.39,.7,N);B.rotation.z=-I*.3}_(h,0,.36,1.35,1.36,.16,.15,.07)}else if(t==="donkeykong"){R.visible=!1;let I=o(10048296,.55,.02),N=o(4401433,.45,.15),B=p(new Je(.49,.49,.91,16),I,0,.43,.79);B.rotation.x=Math.PI/2,B.scale.z=.64;for(let q of[.39,.53,1.05,1.19]){let K=p(new Ut(.492,.029,6,24),N,0,.43,q);K.scale.y=.64}for(let q=0;q<10;q++){let K=q*Math.PI*2/10;_(N,Math.sin(K)*.49,.43+Math.cos(K)*.49*.64,.8,.015,.018,.68,.006)}}t!=="bowser"&&_(f,0,.25,1.27,1.4,.16,.25,.07),_(l,0,.39,1.3,.54,.15,.035,.015);for(let I=-2;I<=2;I++)_(c,I*.095,.39,1.324,.025,.1,.012,.005);for(let I of[-1,1]){let N=x(f,I*.48,.49,1.17,.105,.09,.046);N.rotation.y=I*.15,x(a,I*.48,.49,1.212,.073,.06,.025),x(o(16009541),I*.49,.51,-1.08,.085,.046,.033)}_(l,0,.44,-.88,.61,.34,.54,.07);for(let I=0;I<5;I++)_(c,0,.44+I*.052,-.9,.66,.018,.48,.007);for(let I of[-1,1]){let N=p(new Je(.08,.065,.41,12),c,I*.24,.38,-1.24);N.rotation.x=Math.PI/2;let B=p(new Ei(.058,12),l,I*.24,.38,-1.45);B.rotation.y=Math.PI}let C=n?1:i?.88:.81;for(let I of[-1,1])_(f,I*.39,C-.18,-1.04,.055,.34,.06,.02);let y=_(n?r:u,0,C,-1.06,i?1.62:1.43,.095,.35,.04);y.name="rear-wing";for(let I of[-1,1])_(r,I*(i?.79:.69),C+.035,-1.06,.07,.22,.37,.025);if(t==="bowser")for(let I of[-.5,0,.5])p(new ft(.065,.2,12),a,I,C+.14,-1.06);if(t==="peach"||t==="daisy")for(let I of[-1,1])x(h,I*.63,C+.14,-1.04,.047,.047,.047);let T=new Ke;T.name=t+"-emblem",T.position.set(0,.61,1.02),T.rotation.x=-.7,s.add(T),t==="donkeykong"&&(T.position.set(0,.56,1.29),T.rotation.x=0);let g=(I,N,B=0,q=0,K=0)=>{let te=new ee(I,N);return te.position.set(B,q,K),te.castShadow=!0,T.add(te),te},b=g(new Je(.18,.18,.025,24),n?h:a);b.rotation.x=Math.PI/2;let E=(I,N=r)=>{let B=new $t;B.moveTo(I[0][0],I[0][1]),I.slice(1).forEach(q=>B.lineTo(q[0],q[1])),B.closePath(),g(new si(B,{depth:.015,bevelEnabled:!0,bevelSegments:2,bevelSize:.003,bevelThickness:.003}),N,0,0,.02)};if(t==="mario")E([[-.09,-.09],[-.09,.09],[-.05,.09],[0,.015],[.05,.09],[.09,.09],[.09,-.09],[.05,-.09],[.05,.02],[0,-.045],[-.05,.02],[-.05,-.09]]);else if(t==="luigi")E([[-.06,.1],[-.06,-.09],[.07,-.09],[.07,-.05],[-.015,-.05],[-.015,.1]]);else if(t==="peach")E([[-.12,-.06],[-.13,.07],[-.055,.015],[0,.12],[.055,.015],[.13,.07],[.12,-.06]],o(14435980));else if(t==="daisy"){for(let N=0;N<6;N++){let B=N*Math.PI/3,q=g(new Qe(.052,10,8),a,Math.sin(B)*.077,Math.cos(B)*.077,.035);q.scale.z=.3}let I=g(new Qe(.047,10,8),r,0,0,.055);I.scale.z=.3}else if(t==="toad"){let I=g(new Qe(.113,16,10,0,Math.PI*2,0,Math.PI/2),u,0,-.015,.025);I.rotation.x=Math.PI/2;let N=g(new ds(.075,.085,.025,1,.015),a,0,-.07,.035);N.name="mushroom-stem"}else if(t==="yoshi"){g(new Qe(.105,14,10),a,0,0,.035).scale.set(.8,1,.2);let N=g(new Qe(.035,10,8),r,.025,.02,.06);N.scale.z=.25}else t==="bowser"?E([[-.1,-.09],[-.12,.03],[-.055,.02],[-.04,.1],[0,.035],[.04,.1],[.055,.02],[.12,.03],[.1,-.09]],u):E([[-.065,.105],[-.065,-.015],[-.115,-.105],[-.055,-.105],[0,-.05],[.055,-.105],[.115,-.105],[.065,-.015],[.065,.105]],o(13971240));let w=new Ke;w.position.set(0,.59,-1.185),w.rotation.y=Math.PI,s.add(w);let L=new ee(new ds(.25,.18,.024,1,.02),a);w.add(L);let U={1:[1,2],2:[0,1,6,4,3],3:[0,1,6,2,3],4:[5,6,1,2],5:[0,5,6,2,3],6:[0,5,6,4,2,3],7:[0,1,2],8:[0,1,2,3,4,5,6],9:[0,1,2,3,5,6],0:[0,1,2,3,4,5]},H=[[0,.06],[.04,.03],[.04,-.03],[0,-.06],[-.04,-.03],[-.04,.03],[0,0]];for(let I of U[e.number%10]||U[0]){let N=I===0||I===3||I===6,B=new ee(new ut(N?.055:.012,N?.012:.045,.008),l);B.position.set(H[I][0],H[I][1],.018),w.add(B)}return s.userData.character=t,{paint:r,secondary:u,dark:l,chrome:c,trim:f,character:t,heavy:i}}function Cu(s){let e=new Ke,t=new Ke;e.add(t);let n=Ru(t,s);e.name=n.character+"-kart";let i=fl(t,s),o=new ee(new Ut(.15,.025,8,20),n.dark);o.position.set(0,.64,.27),o.rotation.x=-.5,t.add(o);let r=new ee(new Je(.025,.025,.33,8),n.chrome);r.position.set(0,.49,.2),r.rotation.x=.45,t.add(r);let a=new ee(new Qe(.045,10,8),n.trim);a.position.copy(o.position),t.add(a);let l=new Ce({color:1448998,roughness:.85}),c=new Ce({color:3159876,roughness:.9});l.userData.preserveShading=c.userData.preserveShading=!0;function h(_,x){let m=new Ke,v=new Ke;m.add(v);let R=[[_*.58,-x/2-.005],[_*.86,-x/2],[_,-x*.28],[_,x*.28],[_*.86,x/2],[_*.58,x/2+.005]].map(([b,E])=>new le(b,E)),S=new Ys(R,24);S.rotateZ(Math.PI/2);let C=new ee(S,l);C.castShadow=!0,v.add(C);let y=new Je(_*.59,_*.59,x+.012,20);y.rotateZ(Math.PI/2),v.add(new ee(y,n.dark));let T=[],g=[];for(let b of[-1,1]){let E=new ee(new Ut(_*.64,.018,6,24),n.trim);E.rotation.y=Math.PI/2,E.position.x=b*(x/2+.008),v.add(E);let w=new Je(_*.2,_*.2,.025,12);w.rotateZ(Math.PI/2);let L=new ee(w,n.paint);L.position.x=b*(x/2+.027),v.add(L);for(let U=0;U<5;U++){let H=U*Math.PI*2/5,I=new ut(.018,_*.48,.034);I.rotateX(H),I.translate(b*(x/2+.016),Math.cos(H)*_*.36,Math.sin(H)*_*.36),T.push(I)}}v.add(new ee(_r(T),n.chrome)),T.forEach(b=>b.dispose());for(let b=0;b<18;b++){let E=b*Math.PI/9,w=new ut(x*.72,.012,.032);w.rotateX(E),w.translate(0,Math.cos(E)*(_+.001),Math.sin(E)*(_+.001)),g.push(w)}return v.add(new ee(_r(g),c)),g.forEach(b=>b.dispose()),m}let u=h(.26,.22);u.position.set(-.72,.26,.85),e.add(u);let f=h(.26,.22);f.position.set(.72,.26,.85),e.add(f);let d=h(.32,.32);d.position.set(-.76,.32,-.85),e.add(d);let p=h(.32,.32);return p.position.set(.76,.32,-.85),e.add(p),{rootGroup:e,bodyGroup:t,frontLeftWheel:u,frontRightWheel:f,rearLeftWheel:d,rearRightWheel:p,steeringWheel:o,driverHead:i,exhaustLeft:new D(-.24,.38,-1.45),exhaustRight:new D(.24,.38,-1.45),rearLeftSparkPos:new D(-.76,.15,-.95),rearRightSparkPos:new D(.76,.15,-.95)}}var Ra=class{constructor(){$(this,"group");$(this,"maxParticles",600);$(this,"particles",[]);$(this,"geometry");$(this,"material");$(this,"pointsMesh");$(this,"positions");$(this,"colors");$(this,"sizes");this.group=new Ke,this.positions=new Float32Array(this.maxParticles*3),this.colors=new Float32Array(this.maxParticles*3),this.sizes=new Float32Array(this.maxParticles),this.geometry=new ht,this.geometry.setAttribute("position",new Nt(this.positions,3)),this.geometry.setAttribute("color",new Nt(this.colors,3)),this.geometry.setAttribute("size",new Nt(this.sizes,1));let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255, 255, 255, 1.0)"),n.addColorStop(.4,"rgba(255, 255, 255, 0.8)"),n.addColorStop(.8,"rgba(255, 255, 255, 0.2)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let i=new Pt(e);this.material=new ns({size:1,vertexColors:!0,transparent:!0,opacity:.9,blending:nr,depthWrite:!1,map:i}),this.pointsMesh=new Us(this.geometry,this.material),this.pointsMesh.frustumCulled=!1,this.group.add(this.pointsMesh)}emitDriftSparks(e,t,n){let i=2+t,o=new Fe(3718648);t===2&&(o=new Fe(16347926)),t>=3&&(o=new Fe(11032055));for(let r=0;r<i&&!(this.particles.length>=this.maxParticles);r++){let a=(Math.random()-.5)*.4,l=new D(-Math.sin(n)*(1.5+Math.random()*2)+a,.8+Math.random()*1.5,-Math.cos(n)*(1.5+Math.random()*2)+a);this.particles.push({position:e.clone().add(new D((Math.random()-.5)*.3,.1+Math.random()*.2,(Math.random()-.5)*.3)),velocity:l,color:o.clone(),size:.4+Math.random()*.4,maxLife:.35+Math.random()*.2,life:0,opacity:1})}}emitBoostFlames(e,t){let i=[new Fe(3900150),new Fe(440020),new Fe(16777215)];for(let o=0;o<3&&!(this.particles.length>=this.maxParticles);o++){let r=t+Math.PI,a=new D(Math.sin(r)*(4+Math.random()*3),.3+Math.random()*.4,Math.cos(r)*(4+Math.random()*3));this.particles.push({position:e.clone().add(new D((Math.random()-.5)*.2,.1,(Math.random()-.5)*.2)),velocity:a,color:i[Math.floor(Math.random()*i.length)].clone(),size:.6+Math.random()*.5,maxLife:.25+Math.random()*.15,life:0,opacity:1})}}emitTireSmoke(e,t=!1){if(this.particles.length>=this.maxParticles)return;let n=t?new Fe(8702998):new Fe(13948120),i=new D((Math.random()-.5)*.8,.6+Math.random()*.8,(Math.random()-.5)*.8);this.particles.push({position:e.clone().add(new D((Math.random()-.5)*.2,.1,(Math.random()-.5)*.2)),velocity:i,color:n,size:.5+Math.random()*.6,maxLife:.4+Math.random()*.25,life:0,opacity:.6})}update(e){for(let r=this.particles.length-1;r>=0;r--){let a=this.particles[r];if(a.life+=e,a.life>=a.maxLife){this.particles.splice(r,1);continue}a.position.addScaledVector(a.velocity,e),a.velocity.y-=2*e,a.size=Math.max(.01,a.size*(1+e*.8))}let t=this.geometry.attributes.position,n=this.geometry.attributes.color,i=this.geometry.attributes.size,o=this.particles.length;for(let r=0;r<o;r++){let a=this.particles[r],l=1-a.life/a.maxLife;this.positions[r*3]=a.position.x,this.positions[r*3+1]=a.position.y,this.positions[r*3+2]=a.position.z,this.colors[r*3]=a.color.r*l,this.colors[r*3+1]=a.color.g*l,this.colors[r*3+2]=a.color.b*l,this.sizes[r]=a.size}for(let r=o;r<this.maxParticles;r++)this.sizes[r]=0,this.positions[r*3]=0,this.positions[r*3+1]=-999,this.positions[r*3+2]=0;t.needsUpdate=!0,n.needsUpdate=!0,i.needsUpdate=!0}clear(){this.particles=[]}};function Pu(s){let e=new Float32Array(s),t=121,n=0;for(let i=0;i<e.length;i++){t=Math.imul(t,1664525)+1013904223>>>0;let o=t/4294967296*2-1;n=n*.86+o*.14;let r=i*60/s%1,a=Math.exp(-r*13)*Math.sin(r*Math.PI*10),l=Math.sin(r*Math.PI*2)*.32+Math.sin(r*Math.PI*4)*.13+Math.sin(r*Math.PI*6)*.06,c=.95+.05*Math.sin(i/s*Math.PI*8),h=Math.sin(Math.PI*i/(e.length-1))**2;e[i]=(l+a*.52+n*.12*h)*c}return e}function Iu(s,e,t){let n=Math.min(1.6,Math.max(0,Number.isFinite(s)?Math.abs(s):0)),i=n<.34?0:n<.72?1:2,o=[0,.34,.72][i],r=[.34,.72,1.3][i],a=Math.min(1,Math.max(0,(n-o)/(r-o))),l=58+a*72+(e?9:0)+(t?28:0);return{rate:l/60,subHz:l*.5,filter:420+a*1100+(e?220:0)+(t?350:0),gain:.055+n*.035+(e?.035:0),air:e?.008+n*.012:0}}var dl=class{constructor(){$(this,"ctx",null);$(this,"isMuted",!1);$(this,"isInitialized",!1);$(this,"engineGain",null);$(this,"engineSource",null);$(this,"engineSubGain",null);$(this,"intakeGain",null);$(this,"engineOsc2",null);$(this,"engineFilter",null);$(this,"screechGain",null);$(this,"screechFilter",null);$(this,"screechSource",null);$(this,"masterGain",null)}output(){return this.init(),this.ctx&&this.masterGain?{ctx:this.ctx,out:this.masterGain}:null}adopt(e){this.ctx!==e&&(this.isInitialized||(this.ctx=e,this.masterGain=e.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.6,e.currentTime),this.connectOutput(e),this.setupEngineSynth(),this.setupScreechSynth(),this.isInitialized=!0))}connectOutput(e){let t=e.createDynamicsCompressor();t.threshold.value=-15,t.knee.value=12,t.ratio.value=4,t.attack.value=.008,t.release.value=.18,this.masterGain.connect(t).connect(e.destination)}running(){return!!this.ctx&&this.ctx.state==="running"}init(){if(this.isInitialized&&this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{let e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.6,this.ctx.currentTime),this.connectOutput(this.ctx),this.setupEngineSynth(),this.setupScreechSynth(),this.isInitialized=!0}catch(e){console.warn("Web Audio API not supported or blocked:",e)}}setupEngineSynth(){if(!this.ctx||!this.masterGain)return;this.engineGain=this.ctx.createGain(),this.engineGain.gain.value=0,this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=650,this.engineFilter.Q.value=.65;let e=this.ctx.createBuffer(1,this.ctx.sampleRate,this.ctx.sampleRate);e.getChannelData(0).set(Pu(this.ctx.sampleRate)),this.engineSource=this.ctx.createBufferSource(),this.engineSource.buffer=e,this.engineSource.loop=!0,this.engineSource.connect(this.engineFilter).connect(this.engineGain).connect(this.masterGain),this.engineSource.start(),this.engineOsc2=this.ctx.createOscillator(),this.engineOsc2.type="sine",this.engineOsc2.frequency.value=30,this.engineSubGain=this.ctx.createGain(),this.engineSubGain.gain.value=0,this.engineOsc2.connect(this.engineSubGain).connect(this.masterGain),this.engineOsc2.start();let t=this.ctx.createBuffer(1,this.ctx.sampleRate,this.ctx.sampleRate),n=t.getChannelData(0),i=0;for(let a=0;a<n.length;a++)i=i*.8+(Math.random()*2-1)*.2,n[a]=i;let o=this.ctx.createBufferSource();o.buffer=t,o.loop=!0;let r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.value=750,r.Q.value=.6,this.intakeGain=this.ctx.createGain(),this.intakeGain.gain.value=0,o.connect(r).connect(this.intakeGain).connect(this.masterGain),o.start()}setupScreechSynth(){if(!this.ctx||!this.masterGain)return;let e=this.ctx.sampleRate*2,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let i=0;i<e;i++)n[i]=Math.random()*2-1;this.screechSource=this.ctx.createBufferSource(),this.screechSource.buffer=t,this.screechSource.loop=!0,this.screechFilter=this.ctx.createBiquadFilter(),this.screechFilter.type="bandpass",this.screechFilter.frequency.setValueAtTime(1400,this.ctx.currentTime),this.screechFilter.Q.setValueAtTime(1.1,this.ctx.currentTime),this.screechGain=this.ctx.createGain(),this.screechGain.gain.setValueAtTime(0,this.ctx.currentTime),this.screechSource.connect(this.screechFilter),this.screechFilter.connect(this.screechGain),this.screechGain.connect(this.masterGain),this.screechSource.start()}updateEngine(e,t,n){if(!this.ctx||!this.engineGain||!this.engineSource||!this.engineOsc2||!this.engineFilter)return;let i=this.ctx.currentTime,o=Iu(e,t,n);this.engineSource.playbackRate.setTargetAtTime(o.rate,i,.085),this.engineOsc2.frequency.setTargetAtTime(o.subHz,i,.1),this.engineFilter.frequency.setTargetAtTime(o.filter,i,.09),this.engineGain.gain.setTargetAtTime(o.gain,i,.07),this.engineSubGain?.gain.setTargetAtTime(o.gain*.24,i,.09),this.intakeGain?.gain.setTargetAtTime(o.air,i,.08)}updateDriftScreech(e,t,n){if(!this.ctx||!this.screechGain||!this.screechFilter)return;let i=this.ctx.currentTime;if(e&&Math.abs(n)>5){let o=.026+t*.018,r=850+t*240;this.screechGain.gain.setTargetAtTime(o,i,.05),this.screechFilter.frequency.setTargetAtTime(r,i,.05)}else this.screechGain.gain.setTargetAtTime(0,i,.05)}stopEngine(){!this.ctx||!this.engineGain||(this.engineGain.gain.setTargetAtTime(0,this.ctx.currentTime,.1),this.engineSubGain?.gain.setTargetAtTime(0,this.ctx.currentTime,.1),this.intakeGain?.gain.setTargetAtTime(0,this.ctx.currentTime,.1),this.screechGain&&this.screechGain.gain.setTargetAtTime(0,this.ctx.currentTime,.1))}playCountdownBeep(e=!1){if(!this.ctx||!this.masterGain||this.isMuted)return;let t=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();if(e){n.type="triangle",n.frequency.setValueAtTime(1046.5,t),i.gain.setValueAtTime(.3,t),i.gain.exponentialRampToValueAtTime(.001,t+.6);let o=this.ctx.createOscillator(),r=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(1318.5,t),r.gain.setValueAtTime(.2,t),r.gain.exponentialRampToValueAtTime(.001,t+.6),o.connect(r),r.connect(this.masterGain),o.start(t),o.stop(t+.6)}else n.type="square",n.frequency.setValueAtTime(440,t),i.gain.setValueAtTime(.2,t),i.gain.exponentialRampToValueAtTime(.001,t+.25);n.connect(i),i.connect(this.masterGain),n.start(t),n.stop(t+(e?.6:.25))}playBoostSound(){if(!this.ctx||!this.masterGain||this.isMuted)return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(250,e),t.frequency.exponentialRampToValueAtTime(950,e+.35);let i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(1200,e),i.frequency.exponentialRampToValueAtTime(4e3,e+.35),n.gain.setValueAtTime(.25,e),n.gain.exponentialRampToValueAtTime(.001,e+.45),t.connect(i),i.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.45)}playCollisionSound(e=1){if(!this.ctx||!this.masterGain||this.isMuted)return;let t=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(140,t),n.frequency.exponentialRampToValueAtTime(35,t+.18);let o=Math.min(Math.max(e,.2),1);i.gain.setValueAtTime(.4*o,t),i.gain.exponentialRampToValueAtTime(.001,t+.2),n.connect(i),i.connect(this.masterGain),n.start(t),n.stop(t+.2)}playLapChime(e=!1){if(!this.ctx||!this.masterGain||this.isMuted)return;(e?[659.25,880,1174.66]:[587.33,880]).forEach((n,i)=>{if(!this.ctx||!this.masterGain)return;let o=this.ctx.currentTime+i*.08,r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n,o),a.gain.setValueAtTime(.25,o),a.gain.exponentialRampToValueAtTime(.001,o+.5),r.connect(a),a.connect(this.masterGain),r.start(o),r.stop(o+.55)})}playFinishFanfare(){if(!this.ctx||!this.masterGain||this.isMuted)return;let e=[{f:523.25,d:.12},{f:659.25,d:.12},{f:783.99,d:.12},{f:1046.5,d:.25},{f:880,d:.15},{f:1046.5,d:.45}],t=0;e.forEach(n=>{if(!this.ctx||!this.masterGain)return;let i=this.ctx.currentTime+t,o=this.ctx.createOscillator(),r=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(n.f,i),r.gain.setValueAtTime(.3,i),r.gain.exponentialRampToValueAtTime(.001,i+n.d),o.connect(r),r.connect(this.masterGain),o.start(i),o.stop(i+n.d+.05),t+=n.d*.9})}toggleMute(){return this.isMuted=!this.isMuted,this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.6,this.ctx.currentTime),this.isMuted}getMuted(){return this.isMuted}},dt=new dl;var Ca=class{constructor(e,t){$(this,"totalLaps",3);$(this,"track");$(this,"particles");this.track=e,this.particles=t}updateRacer(e,t,n,i,o){if(e.spinOutTimer>0){e.spinOutTimer-=i,e.speed*=Math.max(0,1-i*2),e.rotation.y+=i*12,this.syncMesh(e,n,i);return}if(e.invulnerableTimer>0&&(e.invulnerableTimer-=i),t.respawn){this.respawnOnTrack(e);return}let{config:r}=e,a=!0,l=this.track.getClosestTrackPoint(e.position.x,e.position.z),c=this.track.roadWidth/2,h=this.track.onShortcut(e.position.x,e.position.z),u=h!==null&&l.distanceToCenter>c+.5,f=l.distanceToCenter>c+.5&&!u;e.boostTimer>0&&(e.boostTimer-=i,e.boostTimer<=0&&(e.boostMultiplier=1));let d=r.topSpeed*e.boostMultiplier;e.shrinkTimer&&e.shrinkTimer>0&&(e.shrinkTimer-=i,d*=.72),e.starTimer&&e.starTimer>0&&(e.starTimer-=i,d*=1.18),d*=1+.012*(e.coins||0),e.rideTimer&&e.rideTimer>0&&(e.rideTimer-=i,d*=1.35,e.speed=Math.max(e.speed,r.topSpeed*1.45)),e.ghostTimer&&e.ghostTimer>0&&(e.ghostTimer-=i),e.inkTimer&&e.inkTimer>0&&(e.inkTimer-=i);let p=r.acceleration;if(u&&e.boostTimer<=0&&!(e.starTimer&&e.starTimer>0)&&(d=Math.min(d,r.topSpeed*.66)),f&&(e.boostTimer<=0&&(d=Math.min(d,r.topSpeed*.66)),p*=.8,Math.abs(e.speed)>5&&Math.random()<.4&&this.particles.emitTireSmoke(new D(e.position.x,e.position.y,e.position.z),!0)),t.throttle)if(e.speed<d){let E=Math.max(0,Math.min(1,e.speed/d));e.speed+=p*(1.35-.85*E)*i*(e.boostTimer>0?1.4:1)}else e.speed-=10*i;else if(t.brake)e.speed>0?e.speed-=35*i:e.speed>-12&&(e.speed-=14*i);else{let E=f?13:9;e.speed>0?e.speed=Math.max(0,e.speed-E*i):e.speed<0&&(e.speed=Math.min(0,e.speed+E*i))}let _=Math.abs(e.speed)/r.topSpeed,x=r.handling*.68*Math.min(1,_/.3),m=typeof t.steer=="number"?t.steer:0;t.steerLeft&&(m+=1),t.steerRight&&(m-=1),m=Math.max(-1,Math.min(1,m)),Math.abs(m)<.05&&(m=0),m=Math.sign(m)*(.35*Math.abs(m)+.65*m*m);let v=e.steerSmooth||0,R=Math.abs(m)<Math.abs(v)||Math.sign(m)!==Math.sign(v)?14:9;e.steerSmooth=v+(m-v)*Math.min(1,i*R),Math.abs(e.steerSmooth)<.002&&m===0&&(e.steerSmooth=0);let S=m;m=e.steerSmooth;let C=t.drift&&!e.driftHeld;if(e.driftHeld=t.drift,C&&!e.isDrifting&&(e.hopT||0)<=0&&Math.abs(e.speed)>6&&(e.hopT=.26,e.config.isPlayer&&e.config.audioLead!==!1&&dt.playCollisionSound(.15)),(e.hopT||0)>0&&(e.hopT-=i,e.hopT<=0&&t.drift&&!e.isDrifting&&Math.abs(e.speed)>10&&Math.abs(S)>.15&&(e.isDrifting=!0,e.driftDirection=Math.sign(S),e.driftTime=0,e.driftLevel=0)),e.isDrifting)if(!t.drift||Math.abs(e.speed)<8)e.driftLevel>0&&this.triggerDriftBoost(e),e.isDrifting=!1,e.driftDirection=0,e.driftTime=0,e.driftLevel=0;else{let E=Math.max(-1,Math.min(1,m*e.driftDirection));e.driftTime+=i*(.6+.9*Math.max(0,E)),e.driftTime>2.4?e.driftLevel=3:e.driftTime>1.5?e.driftLevel=2:e.driftTime>.7&&(e.driftLevel=1);let w=Math.max(-1,Math.min(1,m*e.driftDirection)),L=r.handling*.55*(1.25+w*.6)*e.driftDirection;if(e.angularVelocity=Dt.lerp(e.angularVelocity,L,Math.min(1,i*8)),e.rotation.roll=Dt.lerp(e.rotation.roll,-e.driftDirection*.18,i*10),e.driftLevel>0){let U=new D;e.driftDirection>0?n.rearRightWheel.getWorldPosition(U):n.rearLeftWheel.getWorldPosition(U),this.particles.emitDriftSparks(U,e.driftLevel,e.rotation.y)}}else{if(m!==0&&Math.abs(e.speed)>.5){let E=e.speed<0?-1:1;e.angularVelocity=Dt.lerp(e.angularVelocity,m*x*E,Math.min(1,i*12))}else e.angularVelocity=Dt.lerp(e.angularVelocity,0,Math.min(1,i*14));e.rotation.roll=Dt.lerp(e.rotation.roll,-m*.08*_,i*8)}e.rotation.y+=e.angularVelocity*i,e.slideAngle=Dt.lerp(e.slideAngle||0,e.isDrifting?e.driftDirection*.38:0,Math.min(1,i*6));let y=e.rotation.y+e.slideAngle,T=Math.sin(y)*e.speed,g=Math.cos(y)*e.speed;if(e.position.x+=T*i,e.position.z+=g*i,e.bumpX||e.bumpZ){e.position.x+=(e.bumpX||0)*i,e.position.z+=(e.bumpZ||0)*i;let E=Math.exp(-i*6);e.bumpX=(e.bumpX||0)*E,e.bumpZ=(e.bumpZ||0)*E,Math.abs(e.bumpX)+Math.abs(e.bumpZ)<.05&&(e.bumpX=e.bumpZ=0)}e.position.y=Dt.lerp(e.position.y,(u?h:l.point.y)+.1,i*12);let b=c+10;if(l.distanceToCenter>b&&!u){let E=l.point.x-e.position.x,w=l.point.z-e.position.z,L=Math.sqrt(E*E+w*w);if(L>.01){e.position.x+=E/L*(l.distanceToCenter-b),e.position.z+=w/L*(l.distanceToCenter-b),e.speed*=Math.pow(.6,i);let U=performance.now();e.config.isPlayer&&(!e.bumpedAt||U-e.bumpedAt>400)&&dt.playCollisionSound(.35)}}if(this.handleKartCollisions(e,o),e.boostTimer>0){let E=new D;n.rootGroup.getWorldPosition(E),this.particles.emitBoostFlames(E,e.rotation.y)}this.updateProgression(e),this.syncMesh(e,n,i),e.config.isPlayer&&e.config.audioLead!==!1&&(dt.updateEngine(e.speed/r.topSpeed,t.throttle,e.boostTimer>0),dt.updateDriftScreech(e.isDrifting,e.driftLevel,e.speed))}triggerDriftBoost(e){let t=.7,n=1.35;e.driftLevel===2?(t=1.2,n=1.48):e.driftLevel===3&&(t=1.7,n=1.62),e.boostTimer=t,e.boostMultiplier=n,e.speed=Math.max(e.speed,e.config.topSpeed*1.15),e.config.isPlayer&&dt.playBoostSound()}triggerStartBoost(e){e.boostTimer=1.8,e.boostMultiplier=1.45,e.speed=e.config.topSpeed*1.2,e.config.isPlayer&&dt.playBoostSound()}handleKartCollisions(e,t){for(let i of t){if(i.config.id===e.config.id||(e.ghostTimer||0)>0||(i.ghostTimer||0)>0)continue;let o=e.position.x-i.position.x,r=e.position.z-i.position.z,a=Math.sqrt(o*o+r*r);if(a<1.35*2&&a>.001){let l=2.7-a,c=o/a,h=r/a,u=e.config.weight||2,f=i.config.weight||2,d=f/(u+f),p=u/(u+f);e.position.x+=c*l*d,e.position.z+=h*l*d,i.position.x-=c*l*p,i.position.z-=h*l*p;let _=Math.min(30,Math.abs(e.speed-i.speed)+6),x=performance.now();if(!e.bumpedAt||x-e.bumpedAt>250){let v=R=>R.starTimer&&R.starTimer>0?3:1;e.bumpX=(e.bumpX||0)+c*_*.55*d*v(i)/v(e),e.bumpZ=(e.bumpZ||0)+h*_*.55*d*v(i)/v(e),i.bumpX=(i.bumpX||0)-c*_*.55*p*v(e)/v(i),i.bumpZ=(i.bumpZ||0)-h*_*.55*p*v(e)/v(i),e.bumpedAt=i.bumpedAt=x,(e.config.isPlayer||i.config.isPlayer)&&dt.playCollisionSound(.7)}let m=(e.speed*u+i.speed*f)/(u+f);e.speed=Dt.lerp(e.speed,m,.5*d),i.speed=Dt.lerp(i.speed,m,.5*p)}}}updateProgression(e){let t=this.track.getClosestTrackPoint(e.position.x,e.position.z),n=this.track.trackPoints.length,i=t.index,o=e.checkpointIndex,r=(i-o+n)%n;r>0&&r<n/3&&(e.checkpointIndex=i,e.splineProgress=i/n,o>n*.85&&i<n*.15&&(e.currentLap+=1,e.lapTimes.push(e.currentLapTime),(e.bestLapTime===null||e.currentLapTime<e.bestLapTime)&&(e.bestLapTime=e.currentLapTime),e.config.isPlayer&&dt.playLapChime(e.currentLap===(this.totalLaps||3)),e.currentLapTime=0)),e.totalDistance=(e.currentLap-1)*this.track.totalLength+t.point.distance}respawnOnTrack(e){let t=this.track.getClosestTrackPoint(e.position.x,e.position.z);e.position.x=t.point.x,e.position.y=t.point.y+.1,e.position.z=t.point.z,e.rotation.y=Math.atan2(t.point.tangentX,t.point.tangentZ),e.rotation.roll=0,e.rotation.pitch=0,e.speed=0,e.angularVelocity=0,e.isDrifting=!1,e.driftLevel=0,e.boostTimer=0,e.invulnerableTimer=1.5}syncMesh(e,t,n){let{rootGroup:i,bodyGroup:o,frontLeftWheel:r,frontRightWheel:a,rearLeftWheel:l,rearRightWheel:c,steeringWheel:h,driverHead:u}=t,f=(e.hopT||0)>0?Math.sin((1-e.hopT/.26)*Math.PI)*.45:0;i.position.set(e.position.x,e.position.y+f,e.position.z),i.rotation.y=e.rotation.y,o.rotation.z=e.rotation.roll,o.rotation.x=e.rotation.pitch;let d=e.speed/.3*n;r.children[0].rotation.x+=d,a.children[0].rotation.x+=d,l.children[0].rotation.x+=d,c.children[0].rotation.x+=d;let p=e.isDrifting?e.driftDirection*.45:e.angularVelocity/2.5;r.rotation.y=Dt.lerp(r.rotation.y,p,n*15),a.rotation.y=Dt.lerp(a.rotation.y,p,n*15),h.rotation.z=-p*1.8,u.rotation.y=Dt.lerp(u.rotation.y,p*.8,n*10)}};var Li=class{constructor(e,t){$(this,"track");$(this,"me");$(this,"lane",0);$(this,"laneGoal",0);$(this,"laneTimer",0);$(this,"skill");this.track=e,this.me=t,this.skill=t.config.aiAggression||1,this.lane=this.laneGoal=(Math.random()-.5)*.7}wrap(e){for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}roadHeading(e){let t=this.track.trackPoints,n=t[(e%t.length+t.length)%t.length];return Math.atan2(n.tangentX,n.tangentZ)}update(e,t){let n=this.me,i=this.track.trackPoints,o=i.length,r=this.track.totalLength/o,a=this.track.roadWidth/2,l=Math.abs(n.speed),c=this.track.getClosestTrackPoint(n.position.x,n.position.z),h=c.index;this.laneTimer-=e,this.laneTimer<=0&&(this.laneTimer=2+Math.random()*3,this.laneGoal=(Math.random()-.5)*.8);for(let U of t){if(U===n)continue;let H=U.position.x-n.position.x,I=U.position.z-n.position.z,N=H*Math.sin(n.rotation.y)+I*Math.cos(n.rotation.y),B=H*Math.cos(n.rotation.y)-I*Math.sin(n.rotation.y);N>0&&N<9&&Math.abs(B)<2.6&&U.speed<n.speed&&(this.laneGoal=B>0?-.55:.55,this.laneTimer=1.2)}this.lane+=(this.laneGoal-this.lane)*Math.min(1,e*1.5);let u=Math.round((7+l*.32)/r),f=i[(h+u)%o],d=this.wrap(this.roadHeading(h+u+6)-this.roadHeading(h+u-2)),p=Math.max(-.8,Math.min(.8,this.lane+Math.sign(d)*Math.min(.5,Math.abs(d)*1.2))),_=f.x+f.normalX*p*a,x=f.z+f.normalZ*p*a,m=Math.atan2(_-n.position.x,x-n.position.z),v=this.wrap(m-n.rotation.y),R=Math.max(-1,Math.min(1,v*2.4)),S=Math.round((22+l*.5)/r),C=Math.abs(this.wrap(this.roadHeading(h+S)-this.roadHeading(h+2))),y=c.distanceToCenter>a+.5,T=n.config.topSpeed,g=T*(.92+.08*Math.min(1,this.skill));C>1.1?g=T*.62:C>.75&&(g=T*.78),Math.abs(v)>.9&&(g=Math.min(g,T*.5));let b=l<g,E=l>g+8||Math.abs(v)>1.3&&l>14,w=C>.55&&C<1.6&&l>24&&!y&&Math.abs(R)>.35,L=n.isDrifting?C>.3&&Math.sign(R)===n.driftDirection:w;return{throttle:b,brake:E,steerLeft:!1,steerRight:!1,steer:R,drift:L,respawn:!1,cameraToggle:!1}}};var vr=class{constructor(e){$(this,"camera");$(this,"currentView","chase");$(this,"targetPosition",new D);$(this,"targetLookAt",new D);$(this,"baseFOV",68);this.camera=new Ht(this.baseFOV,e,.2,1e3),this.camera.position.set(0,10,20)}setView(e){this.currentView=e}cycleView(){let e=["chase","cockpit","action","topdown"],t=(e.indexOf(this.currentView)+1)%e.length;return this.currentView=e[t],this.currentView}update(e,t){let n=e.rotation.y,i=Math.min(1.5,Math.abs(e.speed)/e.config.topSpeed),o=this.baseFOV;e.boostTimer>0?o=this.baseFOV+16:o=this.baseFOV+i*8,this.camera.fov=Dt.lerp(this.camera.fov,o,t*6),this.camera.updateProjectionMatrix();let r=new D(e.position.x,e.position.y,e.position.z);if(this.currentView==="chase"){let c=e.isDrifting?-e.driftDirection*.9:0,h=new D(-Math.sin(n)*5.8+Math.cos(n)*c,2.4,-Math.cos(n)*5.8-Math.sin(n)*c);this.targetPosition.copy(r).add(h),this.targetLookAt.copy(r).add(new D(Math.sin(n)*14,1.1,Math.cos(n)*14)),this.camera.position.lerp(this.targetPosition,t*10),this.camera.lookAt(this.targetLookAt)}else if(this.currentView==="cockpit"){let a=new D(Math.sin(n)*.4,.95,Math.cos(n)*.4);this.camera.position.copy(r).add(a);let l=r.clone().add(new D(Math.sin(n)*20,.8,Math.cos(n)*20));this.camera.lookAt(l)}else if(this.currentView==="action"){let c=new D(-Math.sin(n)*3.5,1.1,-Math.cos(n)*3.5);this.targetPosition.copy(r).add(c),this.targetLookAt.copy(r).add(new D(Math.sin(n)*8,.8,Math.cos(n)*8)),this.camera.position.lerp(this.targetPosition,t*14),this.camera.lookAt(this.targetLookAt)}else this.currentView==="topdown"&&(this.targetPosition.set(r.x,r.y+40,r.z+10),this.camera.position.lerp(this.targetPosition,t*6),this.camera.lookAt(r))}onResize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}};var Pa=["banana","green","red","blue","boost","star","bolt","fake","coin","horn","bomb","ink","golden","ride","ghost"],pl=["banana","green","red","fake","bomb"],px=["banana","green","red","boost"];function mx(s,e){let t=e<=1?0:(s-1)/(e-1),n={banana:5-4*t,green:3.5-2*t,fake:2.2*(1-t),coin:3*(1-t)+.3,horn:t<.25?1.2:.3,red:t<.1?.4:1+2.5*t,bomb:.4+1.8*t,ink:t>.3?1.2:0,boost:1+3*t,golden:t>.5?2.2*t:0,star:t>.45?2*t:0,ride:t>.7?2.6*t:0,ghost:t>.3?.8:0,blue:t>.5?1:0,bolt:t>.8?.9:0},i=0;for(let r of Pa)i+=n[r];let o=Math.random()*i;for(let r of Pa)if(o-=n[r],o<=0)return r;return"banana"}var gx=["#ff5d8f","#4cc9f0","#ffc83d","#7bd389","#b388ff"];function Du(s){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,128,128);n.addColorStop(0,"#efffff"),n.addColorStop(.3,s),n.addColorStop(1,"#6745cb"),t.fillStyle=n,t.fillRect(0,0,128,128),t.strokeStyle="#e1ffff",t.lineWidth=7,t.strokeRect(5,5,118,118),t.font="900 96px Arial",t.textAlign="center",t.textBaseline="middle",t.lineWidth=5,t.strokeStyle="#4842a0",t.strokeText("?",64,70),t.fillStyle="#ffffff",t.fillText("?",64,70);let i=new Pt(e);return i.colorSpace=Rt,i}function xx(s){return new Ce({color:s,emissive:s,emissiveIntensity:.35,roughness:.25,metalness:.1})}function Lu(s){let e=new Ke;if(s==="bomb"){let t=new ee(new Qe(.55,16,12),new Ce({color:2302778,roughness:.35,metalness:.2}));t.position.y=.6,e.add(t);let n=new ee(new Je(.16,.2,.18,10),new Ce({color:9080744}));n.position.y=1.15,e.add(n);let i=new ee(new Je(.04,.04,.35,6),new Ce({color:13214826}));i.position.set(.06,1.38,0),i.rotation.z=-.4,e.add(i);let o=new ee(new Qe(.12,8,6),new Lt({color:16765773}));o.position.set(.14,1.55,0),o.name="flame",e.add(o);let r=new ee(new Qe(.12,8,6),new Lt({color:16777215}));r.position.set(-.22,.85,.35),e.add(r);for(let a of[-1,1]){let l=new ee(new Qe(.09,8,6),new Lt({color:16777215}));l.scale.set(.65,1.4,.4),l.position.set(a*.16,.65,.52),e.add(l);let c=new ee(new Qe(.2,10,8),new Ce({color:16762941}));c.scale.set(1,.55,1.4),c.position.set(a*.28,.1,.15),e.add(c)}return e}if(s==="fake"){let t=new ee(new ut(1.3,1.3,1.3),new Ce({map:Du("#ff5d8f"),roughness:.35}));return t.position.y=.75,e.add(t),t.rotation.z=Math.PI/9,e}if(s==="banana"){let t=new Ce({color:16767291,roughness:.55}),n=new Ti(new D(-.45,.15,0),new D(0,.05,.25),new D(.45,.15,0)),i=new ee(new Ai(n,12,.13,8,!1),t);e.add(i);for(let r=0;r<3;r++){let a=new ee(new ft(.16,.6,6),t),l=r/3*Math.PI*2;a.position.set(.45+Math.cos(l)*.12,.18,Math.sin(l)*.18),a.rotation.set(Math.sin(l)*1.1,0,-1.2+Math.cos(l)*.3),e.add(a)}let o=new ee(new Qe(.07,6,5),new Ce({color:5913106}));o.position.set(-.5,.17,0),e.add(o)}else{let t=s==="green"?2735457:s==="red"?15747653:4359679,n=new ee(new Qe(.61,20,12,0,Math.PI*2,0,Math.PI/2),xx(t));n.position.y=.32,e.add(n);let i=new ee(new Ut(.59,.105,8,24),new Ce({color:16774101}));i.rotation.x=Math.PI/2,i.position.y=.32,e.add(i);let o=new ee(new Qe(.52,16,8),new Ce({color:15251302}));o.scale.y=.25,o.position.y=.27,e.add(o);let r=new Ce({color:s==="green"?1274942:s==="red"?10692149:2442155});for(let l=0;l<6;l++){let c=new ee(new Ut(.612,.018,4,12,Math.PI/2),r);c.rotation.y=l*Math.PI/3,c.position.y=.32,e.add(c)}let a=new ee(new Ut(.4,.018,4,20),r);if(a.rotation.x=Math.PI/2,a.position.y=.78,e.add(a),s==="blue"){for(let l=0;l<5;l++){let c=l*Math.PI*2/5,h=new ee(new ft(.09,.32,8),new Ce({color:16775401}));h.position.set(Math.sin(c)*.36,.9,Math.cos(c)*.36),e.add(h)}for(let l of[-1,1])for(let c=0;c<3;c++){let h=new ee(new Os(.075,.38-c*.06,4,8),new Ce({color:15398911}));h.position.set(l*(.65+c*.12),.65+c*.1,-c*.08),h.rotation.z=-l*.65,e.add(h)}}}return e}var Ia=class{constructor(e,t){$(this,"scene",e);$(this,"track",t);$(this,"held",new Map);$(this,"onEvent");$(this,"boxes",[]);$(this,"thrown",[]);$(this,"group",new Ke);$(this,"boxGeo",new ut(1.4,1.4,1.4));$(this,"boxMats");$(this,"aiTimers",new Map);$(this,"fx",[]);e.add(this.group),this.boxMats=gx.map(o=>new Ce({map:Du(o),roughness:.35,emissive:16777215,emissiveIntensity:.12}));let n=0,i=t.trackPoints;for(let o of[.16,.42,.68,.88]){let r=i[Math.floor(o*i.length)%i.length],a=t.roadWidth;for(let l of[-.4,-.2,0,.2,.4]){let c=r.x+r.normalX*l*a,h=r.z+r.normalZ*l*a,u=new ee(this.boxGeo,this.boxMats[n++%this.boxMats.length]);u.rotation.z=Math.PI/9,u.position.set(c,r.y+1.2,h),this.group.add(u),this.boxes.push({mesh:u,x:c,y:r.y,z:h,respawn:0})}}}reset(){for(let e of this.thrown)this.group.remove(e.mesh);this.thrown=[];for(let e of this.held.values())for(let t of e.trail)this.group.remove(t);this.held.clear();for(let e of this.boxes)e.respawn=0,e.mesh.visible=!0}update(e,t,n,i,o){for(let r of this.boxes){if(r.respawn>0){r.respawn-=e,r.respawn<=0&&(r.mesh.visible=!0);continue}r.mesh.rotation.y+=e*1.6,r.mesh.rotation.x=Math.sin(t*1.3+r.x)*.3,r.mesh.position.y=r.y+1.2+Math.sin(t*2.2+r.z)*.15;for(let a of n){let l=a.position.x-r.x,c=a.position.z-r.z;if(l*l+c*c<6.5){r.mesh.visible=!1,r.respawn=2.5,this.held.has(a.config.id)||(this.held.set(a.config.id,{kind:null,rollLeft:1.3,shown:"banana",count:1,trailing:!1,trail:[]}),this.onEvent?.({type:"pickup",racer:a.config.id}),a.config.isPlayer&&dt.playLapChime(!1));break}}}for(let[r,a]of this.held)if(!a.kind&&(a.rollLeft-=e,a.shown=Pa[Math.floor(t*14)%Pa.length],a.rollLeft<=0)){let l=n.find(c=>c.config.id===r);a.kind=mx(l?l.rank:n.length,n.length),a.shown=a.kind,px.includes(a.kind)&&Math.random()<.22&&(a.count=3,pl.includes(a.kind)&&this.startTrail(a)),l&&!l.config.isPlayer&&this.aiTimers.set(r,.6+Math.random()*3.5)}for(let[r,a]of this.aiTimers){let l=a-e;l<=0?(this.aiTimers.delete(r),i.add(r)):this.aiTimers.set(r,l)}for(let r of i)this.fire(r,n);for(let[r,a]of this.held)a.kind==="golden"&&a.left!==void 0&&(a.left-=e,a.left<=0?this.held.delete(r):!n.find(l=>l.config.id===r)?.config.isPlayer&&Math.random()<e*3&&i.add(r));this.updateFx(e),this.updateTrails(n),this.updateThrown(e,n,t);for(let r of n){if((r.starTimer||0)>0)for(let a of n){if(a===r||a.spinOutTimer>0||(a.starTimer||0)>0)continue;let l=a.position.x-r.position.x,c=a.position.z-r.position.z;l*l+c*c<5&&this.hit(a,r.config.id,"star")}o(r.config.id,(r.shrinkTimer||0)>0?.6:1)}}press(e,t){let n=this.held.get(e);!n||!n.kind||(pl.includes(n.kind)?n.trailing||this.startTrail(n):this.fire(e,t))}release(e,t){let n=this.held.get(e);n&&n.kind&&n.trailing&&this.fire(e,t)}fire(e,t){let n=this.held.get(e),i=t.find(a=>a.config.id===e);if(!n||!n.kind||!i)return;let o=n.kind;if(o==="golden"){n.left===void 0&&(n.left=7),this.use("boost",i,t);return}n.count--;let r=n.trail.pop();if(r&&this.group.remove(r),n.count<=0){for(let a of n.trail)this.group.remove(a);this.held.delete(e)}else i.config.isPlayer||this.aiTimers.set(e,.8+Math.random()*2);this.use(o,i,t)}startTrail(e){e.trailing=!0;for(let t=e.trail.length;t<e.count;t++){let n=Lu(e.kind);n.scale.setScalar(.85),this.group.add(n),e.trail.push(n)}}ring(e,t,n,i,o){let r=new ee(new Ut(1,.25,8,32),new Lt({color:i,transparent:!0,opacity:.9}));r.rotation.x=Math.PI/2,r.position.set(e,t+.6,n),this.group.add(r),this.fx.push({mesh:r,life:.45,max:.45,grow:o})}boom(e,t,n){let i=new ee(new Qe(1,16,12),new Lt({color:16747039,transparent:!0,opacity:.85}));i.position.set(e,t+1,n),this.group.add(i),this.fx.push({mesh:i,life:.6,max:.6,grow:8})}updateFx(e){for(let t=this.fx.length-1;t>=0;t--){let n=this.fx[t];n.life-=e;let i=1-n.life/n.max;n.mesh.scale.setScalar(.5+i*n.grow),n.mesh.material.opacity=.9*(1-i),n.life<=0&&(this.group.remove(n.mesh),this.fx.splice(t,1))}}explode(e,t){this.boom(e.x,e.y,e.z);for(let n of t){let i=n.position.x-e.x,o=n.position.z-e.z;i*i+o*o<64&&this.hit(n,e.owner,"bomb")}this.onEvent?.({type:"boom",racer:e.owner})}updateTrails(e){for(let[t,n]of this.held){if(!n.trailing)continue;let i=e.find(r=>r.config.id===t);if(!i)continue;let o=i.rotation.y;n.trail.forEach((r,a)=>{let l=1.9+a*1.1,c=Math.sin(performance.now()/120+a)*.15;r.position.set(i.position.x-Math.sin(o)*l+Math.cos(o)*c,i.position.y,i.position.z-Math.cos(o)*l-Math.sin(o)*c),r.rotation.y=o})}}shield(e){let t=this.held.get(e.config.id);if(!t||!t.trailing||t.count<=0)return!1;t.count--;let n=t.trail.pop();if(n&&this.group.remove(n),t.count<=0){for(let i of t.trail)this.group.remove(i);this.held.delete(e.config.id)}return this.onEvent?.({type:"block",racer:e.config.id}),!0}use(e,t,n){this.onEvent?.({type:"use",racer:t.config.id,item:e});let i=t.rotation.y;if(e==="boost"){t.boostTimer=1.4,t.boostMultiplier=1.5,t.speed=Math.max(t.speed,t.config.topSpeed*1.2),t.config.isPlayer&&dt.playBoostSound();return}if(e==="star"){t.starTimer=7,t.invulnerableTimer=7,t.boostTimer=7,t.boostMultiplier=1.15,t.config.isPlayer&&dt.playBoostSound();return}if(e==="bolt"){for(let c of n)c===t||(c.starTimer||0)>0||(c.shrinkTimer=5,c.spinOutTimer=Math.max(c.spinOutTimer,.5),c.speed*=.5);this.onEvent?.({type:"bolt",racer:t.config.id});return}if(e==="coin"){t.coins=Math.min(10,(t.coins||0)+2),t.boostTimer=Math.max(t.boostTimer,.35),t.boostMultiplier=Math.max(t.boostMultiplier,1.15);return}if(e==="horn"){for(let c of n){if(c===t)continue;let h=c.position.x-t.position.x,u=c.position.z-t.position.z;h*h+u*u<90&&this.hit(c,t.config.id,"horn")}for(let c=this.thrown.length-1;c>=0;c--){let h=this.thrown[c],u=h.x-t.position.x,f=h.z-t.position.z;u*u+f*f<180&&(this.group.remove(h.mesh),this.thrown.splice(c,1))}this.ring(t.position.x,t.position.y,t.position.z,16777215,10),this.onEvent?.({type:"horn",racer:t.config.id});return}if(e==="ink"){for(let c of n)c.rank<t.rank&&!((c.starTimer||0)>0)&&(c.inkTimer=4.5,this.onEvent?.({type:"ink",racer:c.config.id,by:t.config.id}));return}if(e==="ride"){t.rideTimer=3.4,t.invulnerableTimer=Math.max(t.invulnerableTimer,3.6),t.boostTimer=3.4,t.boostMultiplier=1.6;return}if(e==="ghost"){t.ghostTimer=5,t.invulnerableTimer=Math.max(t.invulnerableTimer,5);let c=n.filter(u=>u.rank<t.rank&&this.held.get(u.config.id)?.kind),h=c[Math.floor(Math.random()*c.length)];if(h){let u=this.held.get(h.config.id);for(let d of u.trail)this.group.remove(d);this.held.delete(h.config.id);let f={kind:u.kind,rollLeft:0,shown:u.kind,count:u.count,trailing:!1,trail:[]};this.held.set(t.config.id,f),pl.includes(f.kind)&&f.count>1&&this.startTrail(f),t.config.isPlayer||this.aiTimers.set(t.config.id,1+Math.random()*2),this.onEvent?.({type:"steal",racer:h.config.id,by:t.config.id,item:f.kind})}return}let o=Lu(e);this.group.add(o);let r=e==="banana"||e==="fake",a=r?-2.6:2.6,l={kind:e,owner:t.config.id,mesh:o,x:t.position.x+Math.sin(i)*a,y:t.position.y,z:t.position.z+Math.cos(i)*a,heading:i,speed:r?0:e==="bomb"?42:e==="green"?62:58,life:r?60:e==="bomb"?1.3:e==="green"?3.5:8,armed:.4};if(e==="red"){let c=n.filter(h=>h.rank===t.rank-1)[0];l.target=c?c.config.id:void 0,c||(l.kind="green")}if(e==="blue"){let c=n.filter(h=>h.rank===1&&h!==t)[0];l.target=c?c.config.id:void 0}this.thrown.push(l)}updateThrown(e,t,n){let i=this.track.roadWidth/2;for(let o=this.thrown.length-1;o>=0;o--){let r=this.thrown[o];if(r.life-=e,r.armed-=e,r.speed>0){if(r.target){let h=t.find(u=>u.config.id===r.target);if(h){let f=Math.atan2(h.position.x-r.x,h.position.z-r.z)-r.heading;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;let d=(r.kind==="blue"?5:3.2)*e;r.heading+=Math.max(-d,Math.min(d,f))}}else{let h=this.track.getClosestTrackPoint(r.x,r.z);if(h.distanceToCenter>i+2){let u=h.point,f=Math.atan2(u.x-r.x,u.z-r.z);r.heading+=Math.sign(Math.sin(f-r.heading))*3*e}}r.x+=Math.sin(r.heading)*r.speed*e,r.z+=Math.cos(r.heading)*r.speed*e,r.kind==="red"?r.mesh.rotation.y=r.heading:r.kind==="green"?r.mesh.rotation.y+=e*7:r.mesh.rotation.y+=e*3;let c=r.mesh.getObjectByName("flame");c&&c.scale.setScalar(.8+Math.random()*.4)}let a=this.track.getClosestTrackPoint(r.x,r.z).point.y;r.y=Dt.lerp(r.y,a+(r.kind==="blue"?1.4:.1),e*10),r.mesh.position.set(r.x,r.y,r.z),r.kind==="bomb"&&r.speed>0&&(r.speed=Math.max(0,r.speed-30*e));let l=r.life<=0;if(l&&r.kind==="bomb"&&this.explode(r,t),!l)for(let c of t){if(c.config.id===r.owner&&r.armed>0)continue;let h=c.position.x-r.x,u=c.position.z-r.z,f=r.kind==="blue"&&c.config.id===r.target?2.6:1.7;if(h*h+u*u<f*f){if(r.kind==="blue"&&r.target&&c.config.id!==r.target)continue;if(r.kind==="bomb"){this.explode(r,t),l=!0;break}if(r.kind!=="blue"&&c.config.id!==r.owner&&this.shield(c)){l=!0;break}this.hit(c,r.owner,r.kind),l=!0;break}}l&&(this.group.remove(r.mesh),this.thrown.splice(o,1))}}hit(e,t,n){e.invulnerableTimer>0||(e.starTimer||0)>0||(e.ghostTimer||0)>0||(e.rideTimer||0)>0||(e.coins=Math.max(0,(e.coins||0)-3),e.spinOutTimer=n==="blue"?1.8:1.1,e.invulnerableTimer=2.2,e.boostTimer=0,e.boostMultiplier=1,e.isDrifting=!1,this.onEvent?.({type:"hit",racer:e.config.id,by:t,item:n}),e.config.isPlayer&&dt.playCollisionSound(1))}};var _x=[0,2,4,5,7,9,11],Nu=[0,2,3,5,7,8,10],yx=[0,2,4,5,7,9,10],Uu={meadow:{bpm:132,root:60,scale:_x,chords:[1,6,4,5],leadWave:"triangle",padWave:"triangle",lead:"5-3-5-6-5-3-1---2-3-4-3-2---5---6-5-6-a-6-5-3---4-3-2-3-1-------",kick:[0,6,8],snare:[4,12],hat:[2,6,10,14]},sunset:{bpm:116,root:62,scale:yx,chords:[1,4,6,5],leadWave:"triangle",padWave:"sine",swing:.12,lead:"3--5--6-5-3-2---1--2--3-5---3---6--5--3-2-1-2---3-------5-------",kick:[0,10],snare:[4,12],hat:[0,3,6,8,11,14]},frosty:{bpm:140,root:57,scale:Nu,chords:[1,6,3,7],leadWave:"triangle",padWave:"triangle",lead:"1-3-5-a-b-a-5-3-4---3---2---5---1-3-5-a-c-b-a-5-6-5-4-2-1-------",kick:[0,8,11],snare:[4,12],hat:[2,6,10,14]},neon:{bpm:128,root:52,scale:Nu,chords:[1,6,4,5],leadWave:"triangle",padWave:"sine",lead:"1---5---6-5-3---4---3---2-1-2---1---5---a---7---6-5-4-3-2-------",kick:[0,4,8,12],snare:[4,12],hat:[2,6,10,14]}},ps=s=>440*Math.pow(2,(s-69)/12),La=class{constructor(e){$(this,"song");$(this,"ctx",null);$(this,"bus",null);$(this,"timer",null);$(this,"step",0);$(this,"nextAt",0);$(this,"tempo",1);$(this,"noise",null);$(this,"space",null);$(this,"phrase",0);this.song=Uu[e]||Uu.meadow}start(){let e=dt.output();if(!e||this.timer)return;this.ctx=e.ctx,this.bus=this.ctx.createGain(),this.bus.gain.value=.48,this.bus.connect(e.out),this.space=this.ctx.createGain(),this.space.gain.value=.17;let t=this.ctx.createDelay(1);t.delayTime.value=60/this.song.bpm*.75;let n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=2300,this.space.connect(t).connect(n).connect(this.bus),this.step=0,this.phrase=0,this.tempo=1;let i=this.ctx.createBuffer(1,this.ctx.sampleRate*.3,this.ctx.sampleRate),o=i.getChannelData(0);for(let r=0;r<o.length;r++)o[r]=Math.random()*2-1;this.noise=i,this.nextAt=this.ctx.currentTime+.1,this.timer=setInterval(()=>this.pump(),25)}finalLap(){if(!this.ctx||!this.bus)return;let e=this.ctx.currentTime+.05;[0,4,7,12].forEach((t,n)=>this.tone(ps(this.song.root+12+t),e+n*.09,.12,"triangle",.13)),this.tempo=1.2}stop(){if(clearInterval(this.timer),this.timer=null,this.bus&&this.ctx){let e=this.bus;e.gain.setTargetAtTime(0,this.ctx.currentTime,.2),setTimeout(()=>e.disconnect(),1200)}if(this.space){let e=this.space;setTimeout(()=>e.disconnect(),1200)}this.space=null,this.bus=null}pump(){if(!this.ctx)return;let e=60/(this.song.bpm*this.tempo)/4;for(this.nextAt<this.ctx.currentTime-.2&&(this.nextAt=this.ctx.currentTime+.03);this.nextAt<this.ctx.currentTime+.15;){let t=this.song.swing&&this.step%2?e*this.song.swing:0;this.playStep(this.step,this.nextAt+t,e),this.nextAt+=e,this.step=(this.step+1)%128,this.step===0&&this.phrase++}}degree(e,t=0){let n=this.song.scale,i=e-1;return this.song.root+n[(i%7+7)%7]+12*(Math.floor(i/7)+t)}chordNotes(e){let t=this.song.chords.concat([4,5,2,5]),n=t[e%t.length];return[this.degree(n),this.degree(n+2),this.degree(n+4)]}playStep(e,t,n){let i=this.song,o=e%16,r=Math.floor(e/16),a=this.chordNotes(r);if(i.kick.includes(o)&&this.kick(t),i.snare.includes(o)&&this.snare(t),i.hat.includes(o)&&this.hat(t),[0,3,6,8,10,14].includes(o)){let h=o===14?2:o===6||o===10?1:0;this.tone(ps(a[h]-24),t,n*1.5,"triangle",.26)}if([2,6,10,14].includes(o))for(let h of a)this.tone(ps(h),t,n*1.2,i.padWave,.055);o%4===0&&r%2===1&&this.tone(ps(a[o/4%3]+12),t,n*2.5,"sine",.065);let l=e%64,c=i.lead[l];if(c&&c!=="."&&c!=="-"&&!(r===7&&o>9)){let h=1;for(;i.lead[(l+h)%64]==="-"&&h<16;)h++;let u=c>="a"&&c<="g",f=u?c.charCodeAt(0)-96:Number(c);r>=4&&(f=Math.max(1,f+(r%2?-1:2))),this.tone(ps(this.degree(f,u?1:0)),t,n*h*.88,i.leadWave,.19)}r===7&&[11,13,15].includes(o)&&this.snare(t),this.phrase%2&&[7,15].includes(o)&&this.tone(ps(a[2]+12),t,n*2,"sine",.07)}tone(e,t,n,i,o){let r=this.ctx,a=r.createOscillator(),l=r.createGain();a.type=i,a.frequency.value=e,l.gain.setValueAtTime(1e-4,t),l.gain.exponentialRampToValueAtTime(o,t+.01),l.gain.exponentialRampToValueAtTime(o*.5,t+Math.max(.025,n*.3)),l.gain.exponentialRampToValueAtTime(1e-4,t+Math.max(.06,n)+.08);let c=r.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(Math.min(5e3,e*7),t),c.frequency.exponentialRampToValueAtTime(Math.max(350,e*2),t+Math.max(.06,n)),a.connect(c).connect(l),l.connect(this.bus),this.space&&e>250&&l.connect(this.space),a.onended=()=>{a.disconnect(),c.disconnect(),l.disconnect()},a.start(t),a.stop(t+Math.max(.06,n)+.1)}kick(e){let t=this.ctx,n=t.createOscillator(),i=t.createGain();n.frequency.setValueAtTime(140,e),n.frequency.exponentialRampToValueAtTime(45,e+.12),i.gain.setValueAtTime(.5,e),i.gain.exponentialRampToValueAtTime(1e-4,e+.18),n.connect(i).connect(this.bus),n.onended=()=>{n.disconnect(),i.disconnect()},n.start(e),n.stop(e+.2)}noiseHit(e,t,n,i,o){let r=this.ctx,a=r.createBufferSource(),l=r.createBiquadFilter(),c=r.createGain();a.buffer=this.noise,l.type=o,l.frequency.value=i,c.gain.setValueAtTime(n,e),c.gain.exponentialRampToValueAtTime(1e-4,e+t),a.connect(l).connect(c).connect(this.bus),a.onended=()=>{a.disconnect(),l.disconnect(),c.disconnect()},a.start(e),a.stop(e+t+.02)}snare(e){this.noiseHit(e,.1,.12,1800,"bandpass")}hat(e){this.noiseHit(e,.035,.035,6500,"highpass")}};function Fu(s,e){let t=new Ke;t.scale.setScalar(e);let n=(o,r=!1)=>new Ce({color:o,roughness:.7,emissive:r?o:0,emissiveIntensity:.5}),i=(o,r,a,l,c)=>{let h=new ee(o,r);return h.position.set(a,l,c),t.add(h),h};if(s==="sunset"){i(new Je(.35,.6,7,8),n(10183742),0,3.5,0).rotation.z=.1;let o=n(2665597);for(let r=0;r<6;r++){let a=r*Math.PI/3,l=i(new Qe(1,10,6),o,Math.sin(a)*2,7,Math.cos(a)*2);l.scale.set(.75,.25,3),l.rotation.y=a}}else if(s==="frosty"){i(new Je(.3,.5,3,7),n(7427912),0,1.5,0);let o=n(4230531),r=n(15858687);for(let a=0;a<3;a++)i(new ft(2.7-a*.6,4,10),o,0,3.8+a*1.5,0),i(new ft(2.5-a*.6,2.5,10),r,0,4.8+a*1.5,0)}else{i(new Je(.2,.28,8,8),n(2701405),0,4,0);let o=i(new Ut(1.1,.16,6,14),n(3792873,!0),0,7.6,0);o.rotation.x=Math.PI/2,i(new Qe(.5,10,8),n(16739288,!0),0,8,0)}return t}function Bu(s){let e=new Ke;e.name="course-landmarks-"+s.course.id,s.sceneryGroup.add(e);let t=(y,T=!1)=>{let g=new Ce({color:y,roughness:.65,emissive:T?y:0,emissiveIntensity:T?.55:0});return g.userData.preserveShading=!0,g},n=t(16773078),i=t(16764246),o=t(10181687),r=t(15886967),a=t(15989759),l=t(1649747);function c(y,T,g,b,E,w){let L=new ee(T,g);return L.position.set(b,E,w),L.castShadow=L.receiveShadow=!0,y.add(L),L}let h=(y,T,g,b,E,w,L,U)=>c(y,new ut(w,L,U),T,g,b,E),u=(y,T,g,b,E,w)=>c(y,new Qe(w,14,10),T,g,b,E);function f(y,T,g){if(s.trackPoints.some(E=>Math.hypot(E.x-y,E.z-T)<s.roadWidth/2+g+4))return!1;let b=s.shortcut;if(b){let E=b.bx-b.ax,w=b.bz-b.az,L=Math.max(0,Math.min(1,((y-b.ax)*E+(T-b.az)*w)/(E*E+w*w)));if(Math.hypot(y-b.ax-E*L,T-b.az-w*L)<b.w/2+g+4)return!1}return!0}function d(y,T,g,b){if(!f(T,g,b))return null;let E=new Ke;return E.name=y,E.position.set(T,s.getTerrainElevation(T,g),g),E.userData.clearanceRadius=b,e.add(E),E}function p(y,T,g,b,E){c(y,new Je(.12,.12,5,6),i,T,g+2.5,b);let w=new $t;w.moveTo(0,0),w.lineTo(2.4,-.6),w.lineTo(0,-1.2),w.closePath();let L=E.clone();L.side=kt,c(y,new ri(w),L,T,g+4.8,b)}function _(y,T,g,b){c(y,new Je(3.2,3.5,b,16),n,T,b/2,g),c(y,new ft(4.2,6.2,16),r,T,b+3,g),c(y,new Ut(3.4,.25,6,16),i,T,b-.6,g).rotation.x=Math.PI/2;for(let E=0;E<3;E++)h(y,l,T-1.5+E*1.5,b*.6,g+3.16,.7,1.8,.12);p(y,T,b+5.8,g,r)}function x(y,T,g,b=1){let E=new Ke;E.position.set(T,0,g),E.scale.setScalar(b),y.add(E);let w=c(E,new Je(.4,.7,9,9),o,0,4.5,0);w.rotation.z=-.12;let L=t(2533503);for(let U=0;U<7;U++){let H=U*Math.PI*2/7,I=u(E,L,Math.sin(H)*2.6,8.5,Math.cos(H)*2.6,1);I.scale.set(.9,.3,3.8),I.rotation.y=H,I.rotation.x=.18}for(let U=0;U<3;U++)u(E,o,Math.sin(U*2)*.6,7.9,Math.cos(U*2)*.6,.4)}function m(y,T,g,b=1){let E=new Ke;E.position.set(T,0,g),E.scale.setScalar(b),y.add(E),c(E,new Je(.35,.55,3,8),o,0,1.5,0);for(let w=0;w<3;w++)c(E,new ft(3-w*.65,4.5,10),t(3571064),0,4+w*1.6,0),c(E,new ft(2.8-w*.65,2.7,10),a,0,5.1+w*1.6,0)}let v=s.course.id;if(v==="meadow"){let y=d("garden-castle",55,-48,21);if(y){h(y,n,0,5,0,24,10,14),h(y,r,0,11,0,21,2,13);for(let b of[-11,11])for(let E of[-6,6])_(y,b,E,13+(E<0?3:0));let T=c(y,new Je(2.3,2.3,.3,20,1,!1,0,Math.PI),l,0,4,7.2);T.rotation.z=Math.PI/2,h(y,l,0,2.3,7.25,4.6,4.6,.3);let g=h(y,i,0,.15,11,7,.3,8);g.name="castle-steps";for(let b of[-1,1])for(let E=0;E<5;E++){let w=u(y,t(2334045),b*9,1.2,10+E*2,1.4);w.scale.y=.8}}for(let T=0;T<s.trackPoints.length;T+=24){let g=s.trackPoints[T],b=T%48?-1:1,E=g.x+g.normalX*28*b,w=g.z+g.normalZ*28*b,L=d("garden-bed",E,w,5);if(L)if(T%72===0)c(L,new Je(2.1,2.1,4.2,16),t(2602333),0,2.1,0),c(L,new Ut(2.15,.32,8,20),t(4381564),0,4.2,0).rotation.x=Math.PI/2;else for(let U=0;U<7;U++){let H=U*2.4,I=u(L,t([16763474,16745140,15329791][U%3]),Math.sin(H)*3,1.3,Math.cos(H)*3,.62);I.scale.y=.45,c(L,new Je(.08,.08,1.1,5),t(2329926),I.position.x,.55,I.position.z)}}}else if(v==="sunset"){let y=d("harbor-lagoon",62,-42,26);if(y){let g=t(2406862);g.roughness=.2,g.emissive.setHex(1277585),g.emissiveIntensity=.18;let b=c(y,new Je(24,26,4,40),t(15189901),0,0,0);b.scale.z=.7;let E=c(y,new Ei(23.8,48),g,0,2.05,0);E.rotation.x=-Math.PI/2,E.scale.y=.7;for(let U=0;U<10;U++){let H=c(y,new Ut(3+U*1.7,.035,4,40,Math.PI*1.2),n,0,2.1,0);H.rotation.x=Math.PI/2,H.scale.y=.7}for(let U=0;U<7;U++)h(y,o,-16+U*2.2,2.3,9,2.1,.35,7);let w=new $t;w.moveTo(0,0),w.lineTo(0,10),w.lineTo(7,0),w.closePath(),c(y,new Je(.14,.14,11,6),o,4,7,1),c(y,new ri(w),n,4,2.8,1),u(y,r,5,2.5,1,1).scale.set(5,.6,1.6)}for(let g=0;g<s.trackPoints.length;g+=28){let b=s.trackPoints[g],E=g%56?-1:1,w=d("beach-stop",b.x+b.normalX*29*E,b.z+b.normalZ*29*E,7);if(!w)continue;x(w,0,0,.9),x(w,4,-3,.6);let L=c(w,new ft(3.2,1.4,12),t(g%56?16737667:4774876),-3,4,3);c(w,new Je(.1,.1,4,6),n,-3,2,3),L.name="beach-umbrella"}let T=d("lighthouse",-42,-45,9);if(T){c(T,new Je(2.6,4,21,16),n,0,10.5,0);for(let g of[7,15])c(T,new Je(3.5-g*.035,3.5-g*.035,2.5,16),r,0,g,0);c(T,new Je(3.6,3.6,3,16),i,0,22,0),c(T,new ft(4.5,3,16),r,0,25,0)}}else if(v==="frosty"){for(let[y,T,g]of[[-12,-42,23],[35,-95,33],[-58,65,29]]){let b=d("ice-peak",y,T,12);if(!b)continue;let E=t(10084596);E.roughness=.25;for(let w=0;w<4;w++){let L=c(b,new ft(3.7-w*.4,g-w*3,5),E,Math.sin(w*2)*4,(g-w*3)/2,Math.cos(w*2)*4);L.rotation.z=(w-1.5)*.08}}for(let y=0;y<s.trackPoints.length;y+=28){let T=s.trackPoints[y],g=y%56?-1:1,b=d("alpine-cabin",T.x+T.normalX*33*g,T.z+T.normalZ*33*g,8);if(!b)continue;h(b,o,0,2.4,0,7,4.8,6);let E=c(b,new ft(6,3.2,4),a,0,5.9,0);E.rotation.y=Math.PI/4,h(b,i,-1.5,2.8,3.05,1.2,1.3,.12),h(b,i,1.5,2.8,3.05,1.2,1.3,.12),h(b,l,0,1.3,3.07,1.2,2.5,.14),m(b,6,-3,.85),m(b,-5,-4,.65)}}else{let y=t(3729140,!0),T=t(16475860,!0),g=t(2637424),b=d("neon-city-center",55,-45,23);if(b)for(let E=0;E<5;E++){let w=(E%3-1)*11,L=Math.floor(E/3)*12-6,U=23+E*5;h(b,l,w,U/2,L,7,U,7);for(let H of[-1,1])h(b,T,w+H*3.55,U/2,L+3.6,.22,U,.2);for(let H=3;H<U;H+=3.5)for(let I=0;I<2;I++)h(b,y,w-1.7+I*3.4,H,L+3.58,1.6,.8,.15);h(b,T,w,U+.2,L,8,.45,8)}for(let E=0;E<s.trackPoints.length;E+=20){let w=s.trackPoints[E],L=E%40?-1:1,U=d("neon-tower",w.x+w.normalX*36*L,w.z+w.normalZ*36*L,9);if(!U)continue;let H=14+E%5*6;h(U,l,0,H/2,0,9,H,8),h(U,g,0,H/2,4.03,7,H-2,.1);for(let I of[-4.6,4.6])h(U,E%40?y:T,I,H/2,4.15,.22,H,.2);for(let I=3;I<H;I+=3.5)for(let N=0;N<3;N++)h(U,(I+N+E)%3?y:T,-2.5+N*2.5,I,4.14,1.3,.75,.15);h(U,T,0,H+.3,0,10,.45,9),c(U,new ft(2,5,6),y,0,H+3,0)}for(let E of[.035,.31,.62]){let w=s.trackPoints[Math.floor(E*s.trackPoints.length)],L=new Ke;L.name="neon-overhead-gate",L.position.set(w.x,w.y,w.z),L.rotation.y=Math.atan2(w.tangentX,w.tangentZ),e.add(L);for(let U of[-1,1])h(L,l,U*(s.roadWidth/2+2.5),6,0,1.3,12,1.6),h(L,y,U*(s.roadWidth/2+2.5),6,.9,.3,11,.15);h(L,l,0,12,0,s.roadWidth+6,1.5,1.6),h(L,T,0,11.45,.9,s.roadWidth+5,.3,.15)}}e.updateMatrixWorld(!0);let R=e.matrixWorld.clone().invert(),S=new Map,C=[];e.traverse(y=>{let T=y;if(!T.isMesh)return;let g=T.material,b=[g.color.getHex(),g.emissive.getHex(),g.emissiveIntensity,g.roughness,g.metalness,g.side].join(":");S.has(b)||S.set(b,{material:g,geometry:[]});let E=T.geometry.index?T.geometry.toNonIndexed():T.geometry.clone();E.applyMatrix4(new _t().multiplyMatrices(R,T.matrixWorld)),S.get(b).geometry.push(E),C.push(T)});for(let y of C)y.removeFromParent();for(let{material:y,geometry:T}of S.values()){let g=_r(T);if(!g)throw new Error("Unable to batch course scenery");let b=new ee(g,y);b.name="batched-course-art",b.castShadow=b.receiveShadow=!0,e.add(b),T.forEach(E=>E.dispose())}return e.userData.drawCalls=S.size,e}function ml(){let s=new Uint8Array([115,178,222,255]),e=new es(s,s.length,1,or);return e.minFilter=Ct,e.magFilter=Ct,e.generateMipmaps=!1,e.needsUpdate=!0,e}function gl(s,e,t=new Map){s.traverse(n=>{let i=n;if(!i.isMesh||!i.material)return;let o=r=>{if(r.userData.preserveShading)return r;let a=r;if(!a.isMeshStandardMaterial)return r;let l=t.get(r);return l||(l=new Zs({color:a.color.clone().offsetHSL(0,.12,.02),map:a.map,emissive:a.emissive.clone(),emissiveIntensity:a.emissiveIntensity,transparent:a.transparent,opacity:a.opacity,side:a.side,polygonOffset:a.polygonOffset,polygonOffsetFactor:a.polygonOffsetFactor,gradientMap:e}),t.set(r,l)),l};i.material=Array.isArray(i.material)?i.material.map(o):o(i.material)})}function vx(s){let e=new Qe(520,32,16),t=new Fe(s.skyTop),n=new Fe(s.skyMid),i=new Fe(s.skyLow),o=[],r=e.attributes.position;for(let c=0;c<r.count;c++){let h=r.getY(c)/520,u=h>.25?n.clone().lerp(t,Math.min(1,(h-.25)/.6)):i.clone().lerp(n,Math.max(0,(h+.05)/.3));o.push(u.r,u.g,u.b)}e.setAttribute("color",new Ge(o,3));let a=new Lt({vertexColors:!0,side:Wt,fog:!1,depthWrite:!1}),l=new ee(e,a);return l.renderOrder=-1,l}function Mx(s){let e=new Ke,t=new Lt({color:s,fog:!1}),n=4+Math.floor(Math.random()*3);for(let i=0;i<n;i++){let o=6+Math.random()*6,r=new ee(new Qe(o,10,8),t);r.position.set((i-n/2)*8+Math.random()*4,Math.random()*4,Math.random()*6),r.scale.y=.7,e.add(r)}return e}function bx(s,e){let t=new Ke,n=new ee(new Je(.35,.55,3,8),new Ce({color:e.trunk}));n.position.y=1.5,t.add(n);let i=e.trees[Math.floor(Math.random()*e.trees.length)],o=new Ce({color:i,roughness:.8,emissive:e.glow?i:0,emissiveIntensity:e.glow?.55:0}),r=[[0,4.4,0,2.4],[1.3,3.8,.3,1.6],[-1.2,3.9,-.2,1.7],[.2,5.6,.2,1.6]];for(let[a,l,c,h]of r){let u=new ee(new Qe(h,12,10),o);u.position.set(a,l,c),t.add(u)}return t.scale.setScalar(s),t}function Sx(s){let e=document.createElement("canvas");e.width=128,e.height=256;let t=e.getContext("2d");t.fillStyle=s,t.fillRect(0,0,128,256),t.fillStyle="#ffe14d";for(let i=0;i<3;i++){let o=40+i*70;t.beginPath(),t.moveTo(14,o+50),t.lineTo(64,o),t.lineTo(114,o+50),t.lineTo(114,o+74),t.lineTo(64,o+24),t.lineTo(14,o+74),t.closePath(),t.fill()}let n=new Pt(e);return n.colorSpace=Rt,n}function Ou(s,e){let t=e.course.theme;s.background=new Fe(t.skyMid),s.fog=new Ps(t.fog,140,480),s.add(vx(t));let n=[];for(let c=0;c<14;c++){let h=Mx(t.clouds),u=c/14*Math.PI*2,f=260+Math.random()*120;h.position.set(Math.cos(u)*f,70+Math.random()*50,Math.sin(u)*f),h.lookAt(0,h.position.y,0),s.add(h),n.push(h)}let i=[];e.sceneryGroup.children.forEach(c=>{let h=c;h.isGroup&&h.children.length===4&&h.children[1].geometry instanceof ft&&i.push(h)});let o=(c,h)=>{let u=1e9;for(let d=0;d<e.trackPoints.length;d+=3){let p=e.trackPoints[d],_=(p.x-c)**2+(p.z-h)**2;_<u&&(u=_)}if(Math.sqrt(u)<e.roadWidth*.5+9)return!0;let f=e.shortcut;if(f){let d=f.bx-f.ax,p=f.bz-f.az,_=d*d+p*p||1,x=Math.max(0,Math.min(1,((c-f.ax)*d+(h-f.az)*p)/_));if(Math.hypot(c-(f.ax+d*x),h-(f.az+p*x))<f.w/2+6)return!0}return!1};for(let c of i){if(e.sceneryGroup.remove(c),o(c.position.x,c.position.z))continue;let h=c.scale.x*(.75+Math.random()*.35),u=e.course.id==="meadow"?bx(h,t):Fu(e.course.id,h);u.position.copy(c.position),u.rotation.y=Math.random()*Math.PI,e.sceneryGroup.add(u)}e.sceneryGroup.traverse(c=>{let h=c.material;!h||!h.isMeshStandardMaterial||h.color.getHex()===5078031&&(h.color.setHex(t.ground),h.flatShading=!1,h.needsUpdate=!0)});let r=[],a=new Lt({map:Sx(t.padColor),transparent:!0,opacity:.95,polygonOffset:!0,polygonOffsetFactor:-3}),l=e.trackPoints;for(let c of[.06,.3,.55,.8]){let h=Math.floor(c*l.length)%l.length,u=l[h],f=Math.atan2(u.tangentX,u.tangentZ);for(let d of[-.22,.22]){let p=u.x+u.normalX*d*e.roadWidth,_=u.z+u.normalZ*d*e.roadWidth,x=new ee(new Vt(3.4,6),a);x.rotation.x=-Math.PI/2,x.rotation.z=f+Math.PI,x.position.set(p,u.y+.12,_),e.sceneryGroup.add(x),r.push({x:p,z:_,heading:f,mesh:x})}}return Ex(e,o),Bu(e),gl(s,ml()),{pads:r,update:c=>{for(let h=0;h<n.length;h++)n[h].position.y+=Math.sin(c*.3+h)*.01;a.opacity=.75+Math.sin(c*8)*.2}}}function Ex(s,e){let t=s.course.theme,n=h=>new Ce({color:h,roughness:.7}),i=n(16774361),o=n(t.glow?16014817:s.course.id==="frosty"?6670828:16276837),r=new Je(1.1,1.5,4,12),a=new Qe(3.4,16,10,0,Math.PI*2,0,Math.PI/2),l=new Qe(.55,8,6),c=new Qe(1,20,12);for(let h=0;h<12;h++){let u=h*Math.PI/6,f=Math.cos(u)*245,d=Math.sin(u)*245;if(e(f,d))continue;let p=20+h%4*9,_=new ee(c,n(t.trees[h%t.trees.length]));if(_.position.set(f,-5,d),_.scale.set(28+h%3*9,p,28),s.sceneryGroup.add(_),s.course.id==="frosty"){let x=new ee(new Qe(1,12,8,0,Math.PI*2,0,.9),i);x.position.copy(_.position),x.scale.set(28.2+h%3*9,p+.3,28.2),s.sceneryGroup.add(x)}}for(let h=0;s.course.id==="meadow"&&h<s.trackPoints.length;h+=24){let u=s.trackPoints[h],f=h%48?-1:1,d=u.x+u.normalX*(s.roadWidth/2+17)*f,p=u.z+u.normalZ*(s.roadWidth/2+17)*f;if(e(d,p))continue;let _=new Ke;_.position.set(d,u.y-.5,p);let x=new ee(r,i);x.position.y=2,_.add(x);let m=new ee(a,o);m.position.y=3.7,_.add(m);for(let v=0;v<5;v++){let R=v*Math.PI*2/5,S=new ee(l,i);S.position.set(Math.sin(R)*2.35,5.9,Math.cos(R)*2.35),S.scale.y=.4,_.add(S)}_.scale.setScalar(.8+h%3*.25),s.sceneryGroup.add(_)}for(let h of[-1,1])for(let u=0;u<6;u++){let f=s.trackPoints[Math.floor(u*.007*s.trackPoints.length)],d=f.x+f.normalX*(s.roadWidth/2+2.5)*h,p=f.z+f.normalZ*(s.roadWidth/2+2.5)*h,_=new ee(new Je(.09,.09,5.5,6),i);_.position.set(d,f.y+2.75,p),s.sceneryGroup.add(_);let x=new $t;x.moveTo(0,0),x.lineTo(2.3*h,-.5),x.lineTo(0,-1.2),x.closePath();let m=new ee(new ri(x),new Lt({color:t.trees[u%t.trees.length],side:kt}));m.position.set(d,f.y+5.3,p),s.sceneryGroup.add(m)}}function Hu(){let s=document.createElement("canvas");s.width=s.height=64;let e=s.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,32);t.addColorStop(0,"rgba(0,0,0,0.55)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let n=new ee(new Vt(2.6,3.4),new Lt({map:new Pt(s),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));return n.rotation.x=-Math.PI/2,n}var Tx=[{id:"tabby",name:"Luigi",color:"#20A747",accent:"#fff3d6",topper:"cat",spd:3,acc:4,hnd:4},{id:"bunbun",name:"Daisy",color:"#FFBB21",accent:"#fdf2f8",topper:"bunny",spd:2,acc:5,hnd:5},{id:"duke",name:"Bowser",color:"#E9A52D",accent:"#fcd34d",topper:"crown",spd:5,acc:2,hnd:3},{id:"rex",name:"Yoshi",color:"#26B950",accent:"#ecfdf5",topper:"horns",spd:5,acc:3,hnd:2},{id:"lulu",name:"Peach",color:"#F27BB4",accent:"#ffe4ec",topper:"bow",spd:3,acc:5,hnd:4},{id:"zippy",name:"Toad",color:"#3478D8",accent:"#f0f9ff",topper:"antenna",spd:4,acc:4,hnd:3},{id:"ace",name:"Mario",color:"#E22C30",accent:"#fff7d6",topper:"cap",spd:4,acc:3,hnd:4},{id:"grizz",name:"Donkey Kong",color:"#74391C",accent:"#f4f1e6",topper:"bear",spd:5,acc:2,hnd:2}],wx={chill:.8,fast:1,turbo:1.2};function ku(s,e,t,n){return{weight:s>=5?3:e>=5?1:2,topSpeed:(41.5+(s-3)*1.1)*n,acceleration:(30+(e-3)*2.6)*n,handling:(3.2+(t-3)*.18)*(n>1?1.08:1)}}var zu=["cap","cat","bunny","crown","horns","bow","antenna"],Ax=8,Rx={banana:'<svg viewBox="0 0 40 40"><path d="M7 12 C8 30 28 36 35 22 C25 25 15 22 12 9 Z" fill="#ffd93b" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><path d="M12 9 L10 4" stroke="#5a3a12" stroke-width="3" stroke-linecap="round"/><path d="M14 20 C18 26 24 28 30 26" fill="none" stroke="#fff6b0" stroke-width="2" stroke-linecap="round"/></svg>',green:'<svg viewBox="0 0 40 40"><ellipse cx="20" cy="29" rx="16" ry="6" fill="#e5b86b" stroke="#242443" stroke-width="2"/><path d="M5 26C5 3 35 3 35 26Z" fill="#36c971" stroke="#242443" stroke-width="2.5"/><path d="M20 7V26M8 16L20 21L32 16" fill="none" stroke="#242443" stroke-width="2"/><path d="M4 26Q20 33 36 26" fill="none" stroke="#fff5de" stroke-width="5"/></svg>',red:'<svg viewBox="0 0 40 40"><ellipse cx="20" cy="29" rx="16" ry="6" fill="#e5b86b" stroke="#242443" stroke-width="2"/><path d="M5 26C5 3 35 3 35 26Z" fill="#f25754" stroke="#242443" stroke-width="2.5"/><path d="M20 7V26M8 16L20 21L32 16" fill="none" stroke="#242443" stroke-width="2"/><path d="M4 26Q20 33 36 26" fill="none" stroke="#fff5de" stroke-width="5"/></svg>',blue:'<svg viewBox="0 0 40 40"><ellipse cx="20" cy="29" rx="16" ry="6" fill="#e5b86b" stroke="#242443" stroke-width="2"/><path d="M5 26C5 3 35 3 35 26Z" fill="#4e8aff" stroke="#242443" stroke-width="2.5"/><path d="M20 7V26M8 16L20 21L32 16" fill="none" stroke="#242443" stroke-width="2"/><path d="M4 26Q20 33 36 26" fill="none" stroke="#fff5de" stroke-width="5"/><path d="M13 9L14 2L18 8M23 8L28 2L29 12" fill="#fff" stroke="#242443" stroke-width="1.5"/></svg>',boost:'<svg viewBox="0 0 40 40"><rect x="11" y="20" width="18" height="16" rx="7" fill="#fff1ce" stroke="#242443" stroke-width="2.5"/><path d="M3 23C1 0 39 0 37 23Q20 29 3 23Z" fill="#f25754" stroke="#242443" stroke-width="2.5"/><ellipse cx="20" cy="12" rx="6" ry="7" fill="#fff"/><ellipse cx="7" cy="18" rx="3" ry="4" fill="#fff"/><ellipse cx="33" cy="18" rx="3" ry="4" fill="#fff"/><path d="M17 29v4M23 29v4" stroke="#242443" stroke-width="2.5" stroke-linecap="round"/></svg>',star:'<svg viewBox="0 0 40 40"><defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff7ac6"/><stop offset=".5" stop-color="#ffd34d"/><stop offset="1" stop-color="#5ee6c8"/></linearGradient></defs><path d="M20 3 L25 14.5 L37.5 15.5 L28 23.5 L31 36 L20 29.5 L9 36 L12 23.5 L2.5 15.5 L15 14.5 Z" fill="url(#sg)" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="34" cy="6" r="2" fill="#fff"/><circle cx="6" cy="31" r="1.5" fill="#fff"/></svg>',bolt:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="17" fill="#2b2f6b" stroke="#1b1b3a" stroke-width="2"/><path d="M24 4 L9 22 H18 L14 37 L31 16 H22 Z" fill="#fff15a" stroke="#1b1b3a" stroke-width="2" stroke-linejoin="round"/></svg>',fake:'<svg viewBox="0 0 40 40"><rect x="5" y="5" width="30" height="30" rx="4" fill="#e876b4" stroke="#242443" stroke-width="2.5"/><rect x="8" y="8" width="24" height="24" rx="2" fill="none" stroke="#fff0fa" stroke-width="2"/><text x="20" y="29" text-anchor="middle" font-family="Arial,sans-serif" font-weight="900" font-size="27" fill="#fff">?</text></svg>',coin:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="#ffc83d" stroke="#1b1b3a" stroke-width="2.5"/><circle cx="20" cy="20" r="10.5" fill="none" stroke="#e0a400" stroke-width="2"/><path d="M20 12 L22.4 17.2 L28 17.6 L23.8 21.2 L25.1 26.6 L20 23.7 L14.9 26.6 L16.2 21.2 L12 17.6 L17.6 17.2 Z" fill="#fff6c2"/></svg>',horn:'<svg viewBox="0 0 40 40"><path d="M6 17 h6 l12 -9 v24 l-12 -9 h-6 z" fill="#ff5d5d" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><rect x="9" y="23" width="4" height="8" rx="1.5" fill="#c9d3e6" stroke="#1b1b3a" stroke-width="2"/><path d="M29 14 Q33 20 29 26 M32.5 10 Q39 20 32.5 30" fill="none" stroke="#1b1b3a" stroke-width="2.5" stroke-linecap="round"/></svg>',bomb:'<svg viewBox="0 0 40 40"><circle cx="18" cy="24" r="12" fill="#23233a" stroke="#1b1b3a" stroke-width="2.5"/><rect x="15" y="9" width="7" height="5" rx="1.5" fill="#8a8fa8" stroke="#1b1b3a" stroke-width="2"/><path d="M20 9 Q22 4 27 5" fill="none" stroke="#c9a46a" stroke-width="2.5"/><path d="M29 2 l1.5 3 3 0.5 -2.3 2 0.6 3.2 -2.8 -1.6 -2.8 1.6 0.6 -3.2 -2.3 -2 3 -0.5 z" fill="#ffd34d"/><circle cx="13" cy="19" r="3" fill="#fff" opacity=".6"/></svg>',ink:'<svg viewBox="0 0 40 40"><path d="M20 6 C26 6 25 12 30 11 C36 10 36 17 32 19 C37 22 34 29 28 27 C28 33 22 36 18 31 C13 35 7 31 10 26 C4 25 4 18 9 17 C6 12 12 8 15 11 C15 7 17 6 20 6 Z" fill="#7b4cc9" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="34" cy="31" r="2.5" fill="#7b4cc9"/><circle cx="6" cy="9" r="2" fill="#7b4cc9"/><circle cx="16" cy="17" r="3" fill="#fff" opacity=".5"/></svg>',golden:'<svg viewBox="0 0 40 40"><rect x="11" y="20" width="18" height="16" rx="7" fill="#fff1ce" stroke="#242443" stroke-width="2.5"/><path d="M3 23C1 0 39 0 37 23Q20 29 3 23Z" fill="#ffc83d" stroke="#242443" stroke-width="2.5"/><ellipse cx="20" cy="12" rx="6" ry="7" fill="#fff"/><ellipse cx="7" cy="18" rx="3" ry="4" fill="#fff"/><ellipse cx="33" cy="18" rx="3" ry="4" fill="#fff"/><path d="M17 29v4M23 29v4" stroke="#242443" stroke-width="2.5" stroke-linecap="round"/></svg>',ride:'<svg viewBox="0 0 40 40"><g transform="rotate(-35 20 20)"><path d="M20 3 C26 9 26 22 25 29 H15 C14 22 14 9 20 3 Z" fill="#f4f5fa" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="20" cy="15" r="3.5" fill="#4cc9f0" stroke="#1b1b3a" stroke-width="2"/><path d="M15 21 L9 30 L15 28 Z M25 21 L31 30 L25 28 Z" fill="#ff7a00" stroke="#1b1b3a" stroke-width="2" stroke-linejoin="round"/><path d="M16 30 L20 39 L24 30 Z" fill="#ffd34d"/></g></svg>',ghost:'<svg viewBox="0 0 40 40"><path d="M8 34 V18 C8 10 13 5 20 5 C27 5 32 10 32 18 V34 L28 31 L24 34 L20 31 L16 34 L12 31 Z" fill="#f4f5fa" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><ellipse cx="15.5" cy="17" rx="2.5" ry="3.5" fill="#1b1b3a"/><ellipse cx="24.5" cy="17" rx="2.5" ry="3.5" fill="#1b1b3a"/><ellipse cx="20" cy="25" rx="3" ry="2" fill="#1b1b3a"/></svg>'},xl={banana:["Banana","drop behind"],green:["Green shell","fires straight"],red:["Red shell","chases next kart"],blue:["Spiny shell","hits 1st place"],boost:["Turbo","speed burst"],star:["Star power","unstoppable"],bolt:["Lightning","shrinks everyone"],fake:["Decoy box","fake item box"],coin:["Coins","more top speed"],horn:["Air horn","blast nearby"],bomb:["Bomb","throw \xB7 explodes"],ink:["Ink splat","blinds leaders"],golden:["Golden turbo","boost spam 7s"],ride:["Rocket ride","auto-drive fast"],ghost:["Ghost","steal an item"]};function Gu(s){return s+(s===1?"st":s===2?"nd":s===3?"rd":"th")}function Cx(s){if(s==null)return"--";let e=Math.floor(s/60),t=s-e*60;return e+":"+(t<10?"0":"")+t.toFixed(1)}var Da=class{constructor(e,t){$(this,"container",e);$(this,"opts",t);$(this,"renderer");$(this,"scene",new Is);$(this,"track");$(this,"particles",new Ra);$(this,"physics");$(this,"items",null);$(this,"racers",[]);$(this,"humans",[]);$(this,"overview");$(this,"overlay");$(this,"banner");$(this,"clock",new er(!1));$(this,"raf",0);$(this,"phase","countdown");$(this,"countdown",0);$(this,"step",-1);$(this,"laps");$(this,"firstHumanFinishAt",-1);$(this,"elapsed",0);$(this,"disposed",!1);$(this,"finalLapMusic",!1);$(this,"music",null);$(this,"style");$(this,"gradient",ml());$(this,"shadows",new Map);$(this,"padCooldown",new Map);$(this,"onResize",()=>{let e=this.container.clientWidth,t=this.container.clientHeight;this.renderer.setSize(e,t);let n=this.views();this.humans.forEach((i,o)=>{let r=n[o];i.human.cam.onResize(r.w,r.h),Object.assign(i.human.hud.style,{left:r.x+"px",top:t-r.y-r.h+"px",width:r.w+"px",height:r.h+"px"});let a=Math.round(Math.min(r.h*.36,r.w*.2,210)),l=Math.round(Math.min(r.w,r.h)*.03),c=this.humans.length>1?44:60;Object.assign(i.human.ink.style,{left:r.x+"px",top:t-r.y-r.h+"px",width:r.w+"px",height:r.h+"px"}),Object.assign(i.human.banner.style,{left:r.x+"px",width:r.w+"px",top:t-r.y-r.h+r.h*.26+"px",fontSize:Math.round(Math.min(r.h*.13,72))+"px"}),Object.assign(i.human.map.style,{width:a+"px",height:a+"px",left:r.x+l+"px",top:t-r.y-a-l-c+"px"})}),n[3]&&this.humans.length===3&&this.overview.onResize(n[3].w,n[3].h),this.banner.style.fontSize=(this.humans.length>2?80:120)+"px"});$(this,"loop",()=>{if(this.disposed)return;this.raf=requestAnimationFrame(this.loop);let e=Math.min(this.clock.getDelta(),.05);this.elapsed+=e,this.phase==="replay"?this.replayFrame():this.phase==="podium"?this.podiumFrame(e):this.update(e),this.render()});$(this,"frames",[]);$(this,"winnerFrame",-1);$(this,"winnerId","");$(this,"finalOrder",[]);$(this,"cine",new Ht(50,16/9,.1,1500));$(this,"replayAt",0);$(this,"confetti",[]);$(this,"labels",[]);$(this,"recTick",0);$(this,"podiumKarts",[]);$(this,"podiumCenter",new D);$(this,"podiumDir",{fx:0,fz:1});$(this,"mapBase",null);$(this,"mapXf",{cx:0,cz:0,k:1});this.laps=t.laps||3;let n=Math.min(t.players.length,4)>1;this.renderer=new ba({antialias:!n,powerPreference:"high-performance"}),this.renderer.setPixelRatio(t.quality==="high"?Math.min(window.devicePixelRatio,1.5):1),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.shadowMap.enabled=!n&&t.quality==="high",this.renderer.toneMapping=ir,this.renderer.toneMappingExposure=1.05,this.renderer.setScissorTest(!0),e.appendChild(this.renderer.domElement),this.renderer.domElement.style.display="block";let i=Ta(t.course).theme;this.scene.add(new Qs(16777215,i.ambient));let o=new js(i.sunColor,i.sun);o.position.set(100,150,80),o.castShadow=this.renderer.shadowMap.enabled,o.shadow.mapSize.set(1024,1024);let r=160;Object.assign(o.shadow.camera,{left:-r,right:r,top:r,bottom:-r,near:10,far:400}),this.scene.add(o),this.scene.add(new Ks(i.hemiSky,i.ground,.55)),this.track=new wa(this.scene,t.course),this.scene.add(this.particles.group),this.physics=new Ca(this.track,this.particles),this.physics.totalLaps=this.laps,t.items!==!1&&(this.items=new Ia(this.scene,this.track),this.items.onEvent=l=>this.onItemEvent(l)),this.style=Ou(this.scene,this.track);let a=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());this.scene.traverse(l=>{let c=l.material;c&&c.map&&(c.map.anisotropy=a,c.map.needsUpdate=!0)}),this.overview=new vr(1),this.overview.setView("topdown"),this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;pointer-events:none;font-family:Inter,Segoe UI,Roboto,sans-serif;color:#fff",e.style.position=e.style.position||"relative",e.appendChild(this.overlay),this.banner=document.createElement("div"),this.banner.style.cssText='position:absolute;left:50%;top:42%;transform:translate(-50%,-50%);font:900 120px/1 "Space Grotesk",Inter,sans-serif;text-shadow:0 6px 0 rgba(0,0,0,.35),0 0 30px rgba(0,0,0,.4);transition:transform .15s;white-space:nowrap',this.overlay.appendChild(this.banner),this.build(),window.addEventListener("resize",this.onResize)}build(){let e=this.opts.players.slice(0,4),t=[],n=wx[this.opts.speed||"fast"]||1;e.forEach((r,a)=>{let l=r.stats||{spd:3,acc:3,hnd:3};t.push({id:r.id,name:r.name,isPlayer:!0,audioLead:a===0,color:r.color,accentColor:"#ffffff",helmetColor:r.color,visorColor:"#0f172a",number:a+1,...ku(l.spd,l.acc,l.hnd,n),driftMultiplier:1.35,topper:r.topper||zu[a%zu.length]})});let i=new Set(e.map(r=>(r.driver||r.color).toLowerCase()));for(let r of this.opts.cpus===!1?[]:Tx){if(t.length>=Ax)break;if(i.has(r.id)||i.has(r.color.toLowerCase()))continue;let a=ku(r.spd,r.acc,r.hnd,n);t.push({id:"cpu-"+r.id,name:r.name,isPlayer:!1,color:r.color,accentColor:r.accent,helmetColor:r.color,visorColor:"#0f172a",number:t.length+1,topSpeed:a.topSpeed*(.95+Math.random()*.04),acceleration:a.acceleration*.95,handling:a.handling,weight:a.weight,driftMultiplier:1.3,aiAggression:.9+Math.random()*.3,topper:r.topper})}t.filter(r=>!r.isPlayer).concat(t.filter(r=>r.isPlayer)).forEach((r,a)=>{let l=Cu(r);l.driverHead.scale.setScalar(1.18),gl(l.rootGroup,this.gradient),this.scene.add(l.rootGroup);let c=Hu();this.scene.add(c),this.shadows.set(r.id,c);let h={config:r,position:{x:a%2?3.5:-3.5,y:.1,z:-6-a*5.5},rotation:{y:Math.PI,pitch:0,roll:0},speed:0,angularVelocity:0,steerAngle:0,isDrifting:!1,driftDirection:0,driftTime:0,driftLevel:0,boostTimer:0,boostMultiplier:1,currentLap:1,lapDistance:0,totalDistance:0,splineProgress:0,checkpointIndex:0,lapTimes:[],currentLapTime:0,bestLapTime:null,totalRaceTime:0,rank:a+1,isFinished:!1,invulnerableTimer:0,spinOutTimer:0,shrinkTimer:0,starTimer:0},u={state:h,handles:l};if(r.isPlayer){let f=document.createElement("div");f.style.cssText="position:absolute;box-sizing:border-box;padding:2.2vh 2vw;display:flex;flex-direction:column;justify-content:space-between",this.overlay.appendChild(f);let d=document.createElement("canvas");d.width=d.height=256,d.style.cssText="position:absolute;pointer-events:none;filter:drop-shadow(0 4px 8px rgba(0,0,0,.45))",this.overlay.appendChild(d);let p=document.createElement("div");p.style.cssText="position:absolute;pointer-events:none;opacity:0;overflow:hidden",this.overlay.appendChild(p);let _=document.createElement("div");_.style.cssText='position:absolute;pointer-events:none;text-align:center;font:italic 900 64px/1 "Space Grotesk",Inter,sans-serif;color:#fff;-webkit-text-stroke:5px #1b1b3a;paint-order:stroke fill;opacity:0;white-space:nowrap',this.overlay.appendChild(_),u.human={idx:this.humans.length,cam:new vr(1),pad:{steer:0,gas:!1,brake:!1,drift:!1,item:!1},itemWas:!1,gasAt:-1,hud:f,map:d,banner:_,ink:p,finishedShown:!1},this.humans.push(u)}else u.ai=new Li(this.track,h);this.racers.push(u)}),this.onResize()}setInput(e,t){let n=this.humans.find(i=>i.state.config.id===e);!n||!n.human||(t.gas&&!n.human.pad.gas&&(n.human.gasAt=this.countdown),Object.assign(n.human.pad,t))}hudInfo(){return this.humans.map(e=>{let t=this.items?this.items.held.get(e.state.config.id):void 0;return{p:e.state.config.id,rank:e.state.rank,of:this.racers.length,lap:Math.min(e.state.currentLap,this.laps),item:t?t.kind||"rolling":null,n:t&&t.kind?t.count:0,done:e.state.isFinished}})}start(){dt.init(),this.clock.start(),this.loop()}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),dt.stopEngine(),this.music?.stop(),window.removeEventListener("resize",this.onResize),this.renderer.dispose(),this.container.innerHTML=""}views(){let e=this.container.clientWidth,t=this.container.clientHeight,n=this.humans.length;return n<=1?[{x:0,y:0,w:e,h:t}]:n===2?[{x:0,y:t/2,w:e,h:t/2},{x:0,y:0,w:e,h:t/2}]:[{x:0,y:t/2,w:e/2,h:t/2},{x:e/2,y:t/2,w:e/2,h:t/2},{x:0,y:0,w:e/2,h:t/2},{x:e/2,y:0,w:e/2,h:t/2}]}update(e){this.track.update(this.elapsed,e),this.tickCountdown(e);let t=this.racers.map(r=>r.state),n=new Set,i={throttle:!1,brake:!1,steerLeft:!1,steerRight:!1,drift:!1,respawn:!1,cameraToggle:!1};for(let r of this.racers){let a=i;if(this.phase!=="countdown")if((r.state.rideTimer||0)>0)r.ai||(r.ai=new Li(this.track,r.state)),a=r.ai.update(e,t);else if(r.human&&this.opts.autopilot)r.ai||(r.ai=new Li(this.track,r.state)),a=r.ai.update(e,t);else if(r.human){let c=r.human.pad;r.state.isFinished?a=r.ai?r.ai.update(e,t):{...i,throttle:!0}:a={throttle:c.gas,brake:c.brake,steerLeft:!1,steerRight:!1,steer:c.steer,drift:c.drift,respawn:!1,cameraToggle:!1},this.items&&this.phase==="racing"&&(c.item&&!r.human.itemWas&&this.items.press(r.state.config.id,t),!c.item&&r.human.itemWas&&this.items.release(r.state.config.id,t)),r.human.itemWas=c.item}else r.ai&&(a=r.ai.update(e,t),(r.state.inkTimer||0)>0&&(a={...a,steer:(a.steer||0)+Math.sin(this.elapsed*3+r.state.position.x)*.5}));let l=r.state.currentLap;if(this.physics.updateRacer(r.state,a,r.handles,e,t),r.state.starTimer&&r.state.starTimer>0){let c=this.elapsed*2%1;r.handles.bodyGroup.traverse(h=>{let u=h.material;u&&u.emissive&&u.emissive.setHSL(c,1,.45)})}else r.state.starTimer!==void 0&&r.state.starTimer<=0&&r.state.starTimer>-1&&(r.handles.bodyGroup.traverse(c=>{let h=c.material;h&&h.emissive&&h.emissive.setRGB(0,0,0)}),r.state.starTimer=-1);this.phase==="racing"&&!r.state.isFinished&&(r.state.currentLapTime+=e,r.state.totalRaceTime+=e,r.state.currentLap!==l&&r.state.currentLap<=this.laps&&(this.opts.onEvent?.({type:"lap",racer:r.state.config.id,lap:r.state.currentLap,final:r.state.currentLap===this.laps}),r.human&&this.say(r,r.state.currentLap===this.laps?"FINAL LAP!":"LAP "+r.state.currentLap,r.state.currentLap===this.laps?"#ffc83d":"#ffffff",1500),r.human&&r.state.currentLap===this.laps&&!this.finalLapMusic&&(this.finalLapMusic=!0,this.music?.finalLap())),r.state.currentLap>this.laps&&(r.state.isFinished=!0,r.state.finishRank=this.racers.filter(c=>c.state.isFinished).length,r.state.finishRank===1&&(this.winnerFrame=this.frames.length,this.winnerId=r.state.config.id),r.human&&(r.ai||(r.ai=new Li(this.track,r.state)),this.firstHumanFinishAt<0&&(this.firstHumanFinishAt=this.elapsed),this.opts.onEvent?.({type:"finish",racer:r.state.config.id,rank:r.state.finishRank}),this.say(r,r.state.finishRank===1?"1ST PLACE!":"FINISH!",r.state.finishRank===1?"#ffc83d":"#ffffff",2200),dt.playFinishFanfare())))}let o=[...this.racers].sort((r,a)=>{let l=r.state.finishRank||99,c=a.state.finishRank||99;return l!==c?l-c:a.state.totalDistance-r.state.totalDistance});o.forEach((r,a)=>{r.state.rank=a+1}),this.phase==="racing"&&(this.detectMoments(),this.record()),this.items&&this.phase!=="countdown"&&this.items.update(e,this.elapsed,t,n,(r,a)=>{let l=this.racers.find(c=>c.state.config.id===r);l&&l.handles.rootGroup.scale.setScalar(Dt.lerp(l.handles.rootGroup.scale.x,a,e*6))}),this.style.update(this.elapsed);for(let r of this.racers){let a=(r.state.ghostTimer||0)>0;if(a!==!!r.handles.rootGroup.userData.ghost&&(r.handles.rootGroup.userData.ghost=a,r.handles.rootGroup.traverse(h=>{let u=h.material;u&&(u.transparent=a||u.transparent,u.opacity=a?.25:1)})),r.human){let h=(r.state.inkTimer||0)>0,u=r.human.ink;h&&u.style.opacity!=="1"?(u.innerHTML=Ix(),u.style.transition="opacity .1s",u.style.opacity="1",Lx(u)):!h&&u.style.opacity==="1"&&(u.style.transition="opacity .9s",u.style.opacity="0")}let l=this.shadows.get(r.state.config.id);l&&(l.position.set(r.state.position.x,r.state.position.y+.06,r.state.position.z),l.rotation.z=r.state.rotation.y,l.scale.setScalar(r.handles.rootGroup.scale.x));let c=(this.padCooldown.get(r.state.config.id)||0)-e;if(this.padCooldown.set(r.state.config.id,c),c<=0&&this.phase==="racing")for(let h of this.style.pads){let u=r.state.position.x-h.x,f=r.state.position.z-h.z;if(u*u+f*f<7){r.state.boostTimer=Math.max(r.state.boostTimer,1.1),r.state.boostMultiplier=Math.max(r.state.boostMultiplier,1.45),r.state.speed=Math.max(r.state.speed,r.state.config.topSpeed*1.15),this.padCooldown.set(r.state.config.id,.8),r.human&&r.state.config.audioLead&&dt.playBoostSound();break}}}this.particles.update(e);for(let r of this.humans)r.human.cam.update(r.state,e);this.humans.length===3&&this.overview.update(o[0].state,e),this.drawHud(),this.drawMaps(),this.phase==="racing"&&(this.humans.every(a=>a.state.isFinished)||this.firstHumanFinishAt>=0&&this.elapsed-this.firstHumanFinishAt>25)&&this.finish(o)}tickCountdown(e){if(this.phase!=="countdown"&&this.countdown>5)return;this.countdown+=e;let t=this.countdown,n=t<1?0:t<2?1:t<3?2:t<4?3:t<5?4:5;if(n===this.step)return;this.step=n;let i=["","3","2","1","GO!",""][n];if(this.banner.textContent=i,this.banner.style.color=n===4?"#5ee6c8":"#ffffff",this.banner.style.transform="translate(-50%,-50%) scale(1.25)",setTimeout(()=>{this.banner.style.transform="translate(-50%,-50%) scale(1)"},120),n>=1&&n<=3&&(dt.playCountdownBeep(!1),this.track.setStartingLights(n)),n===4){dt.playCountdownBeep(!0),this.track.setStartingLights(4),this.phase="racing",(!this.opts.autopilot||this.opts.music)&&(this.music=new La(this.opts.course||"meadow"),this.music.start());for(let o of this.humans){let r=o.human.gasAt;o.human.pad.gas&&r>=3.5&&r<4.05&&this.physics.triggerStartBoost(o.state)}}n===5&&this.track.setStartingLights(0)}finish(e){this.phase="done";let t=e.map((n,i)=>({id:n.state.config.id,name:n.state.config.name,color:n.state.config.color,human:!!n.human,rank:i+1,time:n.state.isFinished?n.state.totalRaceTime:null,bestLap:n.state.bestLapTime}));this.banner.textContent="FINISH!",this.banner.style.color="#ffc83d",this.finalOrder=e,this.music?.stop(),dt.stopEngine(),setTimeout(()=>this.startReplay(),1800),setTimeout(()=>this.startPodium(),8300),setTimeout(()=>{this.phase="done",this.opts.onFinish?.(t)},15300)}record(){if(++this.recTick%2)return;let e=new Float32Array(this.racers.length*5);this.racers.forEach((t,n)=>{let i=t.state;e.set([i.position.x,i.position.y,i.position.z,i.rotation.y+(i.slideAngle||0)*.6,i.rotation.roll],n*5)}),this.frames.push(e)}hideHud(e){for(let t of this.humans)t.human.hud.style.display=t.human.map.style.display=t.human.banner.style.display=e?"none":""}startReplay(){this.disposed||this.winnerFrame<0||(this.phase="replay",this.replayAt=Math.max(0,this.winnerFrame-120),this.hideHud(!0),this.banner.innerHTML='<span style="font-size:.35em;letter-spacing:.1em;color:#ff5d5d">\u25CF REPLAY</span>',this.banner.style.top="8%",this.banner.style.left="10%")}replayFrame(){let e=Math.min(this.frames.length-1,this.winnerFrame+45),t=Math.min(e,Math.floor(this.replayAt)),n=this.frames[t];if(!n)return;this.racers.forEach((h,u)=>{let f=h.handles.rootGroup;f.position.set(n[u*5],n[u*5+1],n[u*5+2]),f.rotation.y=n[u*5+3],f.rotation.z=n[u*5+4];let d=this.shadows.get(h.state.config.id);d&&(d.position.set(n[u*5],n[u*5+1]+.06,n[u*5+2]),d.rotation.z=n[u*5+3])});let i=this.racers.findIndex(h=>h.state.config.id===this.winnerId),o=n[i*5],r=n[i*5+1],a=n[i*5+2],l=n[i*5+3],c=(t-(this.winnerFrame-120))/165;if(c<.5){let u=3-c*6;this.cine.position.set(o+Math.cos(l)*7-Math.sin(l)*u,r+1.4,a-Math.sin(l)*7-Math.cos(l)*u)}else{let h=this.track.trackPoints,u=h[h.length-6];this.cine.position.set(u.x-u.normalX*15,u.y+3.5,u.z-u.normalZ*15)}this.cine.lookAt(o,r+.8,a),this.replayAt+=.75}startPodium(){if(this.disposed)return;this.phase="podium",dt.playFinishFanfare();let e=this.finalOrder.slice(0,3),t=this.track.trackPoints[Math.floor(this.track.trackPoints.length*.06)],n=new D(t.x,t.y,t.z),i=Math.atan2(t.tangentX,t.tangentZ)+Math.PI,o=Math.sin(i),r=Math.cos(i),a=Math.cos(i),l=-Math.sin(i);this.racers.forEach(f=>{if(!e.includes(f)){f.handles.rootGroup.visible=!1;let d=this.shadows.get(f.state.config.id);d&&(d.visible=!1)}});let c=[[0,2.4,"#ffc83d"],[-4.6,1.6,"#c9d3e6"],[4.6,1,"#e08a4c"]];this.podiumKarts=[],e.forEach((f,d)=>{let[p,_,x]=c[d],m=new ee(new ut(4.2,_,4.2),new Ce({color:x,roughness:.4}));m.position.set(n.x+a*p,n.y+_/2,n.z+l*p),m.rotation.y=i;let v=document.createElement("canvas");v.width=v.height=128;let R=v.getContext("2d");R.fillStyle="#1b1b3a",R.font="italic 900 96px sans-serif",R.textAlign="center",R.textBaseline="middle",R.fillText(String(d+1),64,70);let S=new ee(new Vt(2,2),new Lt({map:new Pt(v),transparent:!0}));S.position.set(m.position.x+o*2.12,n.y+_/2,m.position.z+r*2.12),S.rotation.y=i,this.scene.add(m,S);let C=f.handles.rootGroup;C.visible=!0,C.position.set(m.position.x,n.y+_,m.position.z),C.rotation.set(0,i,0),this.podiumKarts.push({r:f,y:n.y+_,i:d});let y=document.createElement("div");y.style.cssText='position:absolute;transform:translate(-50%,-100%);text-align:center;font:italic 900 34px "Space Grotesk",Inter,sans-serif;color:#fff;-webkit-text-stroke:4px #1b1b3a;paint-order:stroke fill;white-space:nowrap',y.innerHTML='<span style="color:'+["#ffc83d","#dfe7ff","#f0a46b"][d]+'">'+["1ST","2ND","3RD"][d]+"</span> "+_l(f.state.config.name),this.overlay.appendChild(y),this.labels.push(y)}),this.cine.position.set(n.x+o*12,n.y+4.5,n.z+r*12),this.cine.lookAt(n.x,n.y+2,n.z),this.podiumCenter=n,this.podiumDir={fx:o,fz:r};let h=[16735631,16762941,5032432,6219464,10185727,16777215];for(let f=0;f<160;f++){let d=new ee(new Vt(.25,.4),new Lt({color:h[f%h.length],side:kt}));d.position.set(n.x+(Math.random()-.5)*18,n.y+6+Math.random()*10,n.z+(Math.random()-.5)*18),d.userData.v=1.5+Math.random()*2,this.scene.add(d),this.confetti.push(d)}let u=e[0];this.banner.innerHTML=_l(u.state.config.name)+" WINS!",this.banner.style.color="#ffc83d",this.banner.style.top="9%",this.banner.style.left="50%",this.banner.style.fontSize="72px"}podiumFrame(e){let t=this.elapsed;for(let l of this.podiumKarts){let c=l.r.handles.rootGroup,h=l.i===0?Math.abs(Math.sin(t*5))*.9:Math.abs(Math.sin(t*4+l.i))*.4;c.position.y=l.y+h,l.i===0&&(c.rotation.y+=e*(Math.sin(t*.7)>.6?6:0)),l.r.handles.driverHead.rotation.z=Math.sin(t*8+l.i)*.25;let u=c.position.clone();u.y+=3.2,u.project(this.cine);let f=this.container.clientWidth,d=this.container.clientHeight,p=this.labels[l.i];p&&(p.style.left=(u.x*.5+.5)*f+"px",p.style.top=(-u.y*.5+.5)*d+"px")}for(let l of this.confetti)l.position.y-=l.userData.v*e,l.rotation.x+=e*4,l.rotation.y+=e*3,l.position.y<this.podiumCenter.y&&(l.position.y+=16);let n=Math.sin(t*.3)*.35,{fx:i,fz:o}=this.podiumDir,r=i*Math.cos(n)-o*Math.sin(n),a=i*Math.sin(n)+o*Math.cos(n);this.cine.position.set(this.podiumCenter.x+r*12,this.podiumCenter.y+4.5,this.podiumCenter.z+a*12),this.cine.lookAt(this.podiumCenter.x,this.podiumCenter.y+2.2,this.podiumCenter.z)}onItemEvent(e){this.opts.onEvent?.(e);let t=this.humans.find(i=>i.state.config.id===e.racer),n=e.by?this.humans.find(i=>i.state.config.id===e.by):void 0;if(e.type==="hit")t&&this.say(t,e.item==="blue"?"ZAPPED!":"HIT!","#ff5d5d"),n&&n!==t&&this.say(n,"NICE HIT!","#5ee6c8");else if(e.type==="block"&&t)this.say(t,"BLOCKED!","#8fb4ff",900);else if(e.type==="bolt")for(let i of this.humans)i!==t&&!((i.state.starTimer||0)>0)&&this.say(i,"SHRUNK!","#fff15a");else e.type==="use"&&t&&e.item==="star"?this.say(t,"STAR POWER!","#ffd34d"):e.type==="use"&&t&&e.item==="ride"?this.say(t,"ROCKET RIDE!","#ff7a00"):e.type==="use"&&t&&e.item==="ghost"?this.say(t,"GHOST!","#e8ecff"):e.type==="use"&&t&&e.item==="coin"?this.say(t,"+2 COINS","#ffc83d",700):e.type==="use"&&t&&e.item==="golden"?this.say(t,"GOLDEN TURBO!","#ffc83d",700):e.type==="ink"&&t?this.say(t,"SPLAT!","#c9a8ff"):e.type==="steal"?(t&&this.say(t,"STOLEN!","#ff5d5d"),n&&n!==t&&this.say(n,"GOT IT!","#5ee6c8")):e.type==="horn"&&t&&this.say(t,"HONK!","#ffffff",700)}render(){if(this.phase==="replay"||this.phase==="podium"){let t=this.container.clientWidth,n=this.container.clientHeight;this.cine.aspect=t/n,this.cine.updateProjectionMatrix(),this.renderer.setViewport(0,0,t,n),this.renderer.setScissor(0,0,t,n),this.renderer.render(this.scene,this.cine);return}let e=this.views();if(this.humans.forEach((t,n)=>{let i=e[n];this.renderer.setViewport(i.x,i.y,i.w,i.h),this.renderer.setScissor(i.x,i.y,i.w,i.h),this.renderer.render(this.scene,t.human.cam.camera)}),this.humans.length===3){let t=e[3];this.renderer.setViewport(t.x,t.y,t.w,t.h),this.renderer.setScissor(t.x,t.y,t.w,t.h),this.renderer.render(this.scene,this.overview.camera)}}say(e,t,n="#ffffff",i=1100){let o=e.human.banner;o.textContent=t,o.style.color=n,o.animate([{opacity:0,transform:"scale(2.2) rotate(-6deg)"},{opacity:1,transform:"scale(1) rotate(-4deg)",offset:.15},{opacity:1,transform:"scale(1.05) rotate(-4deg)",offset:.75},{opacity:0,transform:"scale(0.9) translateY(-20px) rotate(-4deg)"}],{duration:i,easing:"cubic-bezier(.2,.9,.3,1.2)",fill:"forwards"})}emit(e){this.opts.onEvent?.(e)}detectMoments(){for(let e of this.humans){let t=e.human,n=e.state,i=n.config.id;if(n.isFinished)continue;if(t.rankCalm=(t.rankCalm||0)-1,t.lastRank!==void 0&&n.rank<t.lastRank&&t.rankCalm<=0&&(this.say(e,n.rank===1?"TAKE THE LEAD!":"OVERTAKE!","#5ee6c8"),this.emit({type:"overtake",racer:i,rank:n.rank}),t.rankCalm=45),t.lastRank=n.rank,n.bumpedAt&&n.bumpedAt!==t.lastBump&&(t.lastBump=n.bumpedAt,this.emit({type:"bump",racer:i})),n.isDrifting&&(t.driftLvl=n.driftLevel),t.wasDrifting&&!n.isDrifting&&(t.driftLvl||0)>0){let r=t.driftLvl||1;this.say(e,r===3?"ULTRA BOOST!":r===2?"SUPER BOOST!":"BOOST!",r===3?"#c084fc":r===2?"#fb923c":"#38bdf8",800),this.emit({type:"mtboost",racer:i,level:r}),t.driftLvl=0}n.isDrifting&&n.driftLevel>(t.driftLvl===void 0?0:-1),t.wasDrifting=n.isDrifting;let o=this.track.onShortcut(n.position.x,n.position.z)!==null&&this.track.getClosestTrackPoint(n.position.x,n.position.z).distanceToCenter>this.track.roadWidth/2+.5;o&&!t.onDirt&&this.say(e,n.boostTimer>0?"SHORTCUT!":"DIRT! BOOST THROUGH","#ffc83d",900),t.onDirt=o}}toMap(e,t){return[128+(e-this.mapXf.cx)*this.mapXf.k,128+(t-this.mapXf.cz)*this.mapXf.k]}buildMapBase(){let e=this.track.trackPoints,t=1e9,n=-1e9,i=1e9,o=-1e9;for(let d of e)t=Math.min(t,d.x),n=Math.max(n,d.x),i=Math.min(i,d.z),o=Math.max(o,d.z);this.mapXf={cx:(t+n)/2,cz:(i+o)/2,k:220/Math.max(n-t,o-i)};let r=document.createElement("canvas");r.width=r.height=256;let a=r.getContext("2d"),l=()=>{a.beginPath(),e.forEach((d,p)=>{let[_,x]=this.toMap(d.x,d.z);p?a.lineTo(_,x):a.moveTo(_,x)}),a.closePath()};a.lineJoin="round",a.lineCap="round",l(),a.strokeStyle="#1b1b3a",a.lineWidth=22,a.stroke(),l(),a.strokeStyle="#ffffff",a.lineWidth=15,a.stroke(),l(),a.strokeStyle="#c9d3e6",a.lineWidth=9,a.stroke();let c=e[0],[h,u]=this.toMap(c.x,c.z),f=Math.atan2(c.normalZ,c.normalX);a.save(),a.translate(h,u),a.rotate(f);for(let d=-3;d<3;d++)for(let p=0;p<2;p++)a.fillStyle=(d+p)%2?"#1b1b3a":"#ffffff",a.fillRect(d*3,p*3-3,3,3);a.restore(),this.mapBase=r}drawMaps(){this.mapBase||this.buildMapBase();let e=.5+.5*Math.sin(this.elapsed*6),t=[...this.racers].sort((n,i)=>(n.human?1:0)-(i.human?1:0)||i.state.rank-n.state.rank);for(let n of this.humans){let i=n.human.map.getContext("2d");i.clearRect(0,0,256,256),i.drawImage(this.mapBase,0,0);for(let l of t){if(l===n)continue;let[c,h]=this.toMap(l.state.position.x,l.state.position.z),u=l.human?9:6.5;i.beginPath(),i.arc(c,h,u,0,Math.PI*2),i.fillStyle=l.state.config.color,i.fill(),i.lineWidth=l.human?3.5:2.5,i.strokeStyle=l.human?"#ffffff":"#1b1b3a",i.stroke()}let[o,r]=this.toMap(n.state.position.x,n.state.position.z),a=n.state.rotation.y;i.beginPath(),i.arc(o,r,15+e*5,0,Math.PI*2),i.strokeStyle="rgba(255,200,61,"+(.9-e*.6)+")",i.lineWidth=4,i.stroke(),i.save(),i.translate(o,r),i.rotate(Math.atan2(Math.cos(a),Math.sin(a))),i.beginPath(),i.moveTo(21,0),i.lineTo(9,-8),i.lineTo(9,8),i.closePath(),i.fillStyle="#ffc83d",i.fill(),i.lineWidth=2.5,i.strokeStyle="#1b1b3a",i.stroke(),i.restore(),i.beginPath(),i.arc(o,r,11,0,Math.PI*2),i.fillStyle=n.state.config.color,i.fill(),i.lineWidth=4,i.strokeStyle="#ffffff",i.stroke(),i.beginPath(),i.arc(o,r,13.5,0,Math.PI*2),i.lineWidth=2,i.strokeStyle="#1b1b3a",i.stroke()}}drawHud(){let e=this.humans.length>1;for(let t of this.humans){let n=t.state,i=this.items?this.items.held.get(n.config.id):void 0,o=i?Rx[i.shown]:"",r=Math.min(n.currentLap,this.laps),a=r===this.laps&&!n.isFinished&&this.phase==="racing",l=n.isDrifting?["#ffffff","#38bdf8","#fb923c","#c084fc"][n.driftLevel]:"transparent",c=e?64:104,h=n.rank===1?"linear-gradient(#fff6a8,#ffc21a 55%,#e88a00)":n.rank===2?"linear-gradient(#ffffff,#c9d3e6 60%,#8e9bb5)":n.rank===3?"linear-gradient(#ffd9b3,#e08a4c 60%,#a85a2a)":"linear-gradient(#ffffff,#dfe7ff)",u='<div style="display:flex;justify-content:space-between;align-items:flex-start"><div style="width:'+(e?70:100)+"px;height:"+(e?70:100)+"px;border-radius:22px;background:radial-gradient(circle at 50% 40%,#3a4a8a,#141a3a);border:5px solid #fff;box-shadow:0 0 0 4px "+(i&&!i.kind?"#ffc83d":"#1b1b3a")+',0 6px 14px rgba(0,0,0,.45);padding:10px;box-sizing:border-box;position:relative">'+o+(i&&i.kind&&xl[i.kind]?'<div style="position:absolute;left:0;top:100%;margin-top:'+(e?8:12)+'px;white-space:nowrap;text-shadow:0 2px 4px rgba(0,0,0,.8)"><div style="font:900 '+(e?15:20)+'px Inter,sans-serif;color:#fff">'+xl[i.kind][0]+'</div><div style="font:700 '+(e?12:15)+'px Inter,sans-serif;color:#ffc83d">'+xl[i.kind][1]+"</div></div>":"")+(i&&i.kind&&i.count>1?'<span style="position:absolute;right:-12px;bottom:-12px;font:italic 900 '+(e?20:28)+`px 'Space Grotesk',Inter,sans-serif;color:#fff;-webkit-text-stroke:3px #1b1b3a;paint-order:stroke fill">\xD7`+i.count+"</span>":"")+'</div><div style="text-align:right;text-shadow:0 2px 6px rgba(0,0,0,.6)"><div style="font:italic 900 '+(e?24:36)+"px 'Space Grotesk',Inter,sans-serif;color:"+(a?"#ffc83d":"#fff")+";-webkit-text-stroke:"+(e?2:3)+'px #1b1b3a;paint-order:stroke fill;letter-spacing:1px">'+(n.isFinished?"FINISH!":a?"FINAL LAP!":"LAP "+r+"/"+this.laps)+'</div><div style="font:600 '+(e?14:18)+'px Inter,sans-serif;opacity:.9">'+Cx(n.totalRaceTime)+'</div></div></div><div style="display:flex;justify-content:space-between;align-items:flex-end"><div style="display:flex;align-items:center;gap:10px;background:rgba(14,16,32,.6);border-radius:999px;padding:6px 14px 6px 6px"><span style="width:'+(e?22:30)+"px;height:"+(e?22:30)+"px;border-radius:50%;background:"+n.config.color+";box-shadow:0 0 0 3px "+l+'"></span><span style="font:700 '+(e?16:22)+'px Inter,sans-serif">'+_l(n.config.name)+'</span><span style="display:inline-flex;align-items:center;gap:4px;font:800 '+(e?15:20)+'px Inter,sans-serif;color:#ffc83d"><span style="width:'+(e?14:18)+"px;height:"+(e?14:18)+'px;border-radius:50%;background:#ffc83d;border:2px solid #1b1b3a;box-sizing:border-box"></span>'+(n.coins||0)+'</span></div><div style="position:relative;font:italic 900 '+c+`px/0.9 'Space Grotesk',Inter,sans-serif;transform:skewX(-6deg)"><span style="position:absolute;inset:0;-webkit-text-stroke:`+(e?8:12)+'px #1b1b3a;color:#1b1b3a">'+Gu(n.rank)+'</span><span style="position:relative;background:'+h+';-webkit-background-clip:text;background-clip:text;color:transparent">'+Gu(n.rank)+"</span></div></div>";t.human.hud.innerHTML!==u&&(t.human.hud.innerHTML=u)}}};function Px(s,e,t){let i=[];for(let r=0;r<22;r++){let a=r/22*Math.PI*2,l=Math.random()<.28?1.35+Math.random()*.55:.78+Math.random()*.28;i.push([s+Math.cos(a)*t*l,e+Math.sin(a)*t*l])}let o="";for(let r=0;r<22;r++){let a=i[(r-1+22)%22],l=i[r],c=i[(r+1)%22],h=i[(r+2)%22];r===0&&(o+="M"+l[0].toFixed(1)+" "+l[1].toFixed(1));let u=l[0]+(c[0]-a[0])/6,f=l[1]+(c[1]-a[1])/6,d=c[0]-(h[0]-l[0])/6,p=c[1]-(h[1]-l[1])/6;o+="C"+u.toFixed(1)+" "+f.toFixed(1)+" "+d.toFixed(1)+" "+p.toFixed(1)+" "+c[0].toFixed(1)+" "+c[1].toFixed(1)}return o+"Z"}function Ix(){let s="";return[[28,38,30],[64,48,36],[46,66,24],[78,26,20],[16,70,18]].forEach(([t,n,i],o)=>{let r=t+(Math.random()-.5)*12,a=n+(Math.random()-.5)*12,l=i*(.85+Math.random()*.35),c="ink"+Math.random().toString(36).slice(2,7),h="";for(let f=0;f<7;f++){let d=Math.random()*Math.PI*2,p=58+Math.random()*30,_=2.5+Math.random()*5;h+='<circle cx="'+(100+Math.cos(d)*p).toFixed(1)+'" cy="'+(100+Math.sin(d)*p).toFixed(1)+'" r="'+_.toFixed(1)+'"/>'}let u="";for(let f=0;f<3;f++){let d=70+Math.random()*60,p=5+Math.random()*6,_=30+Math.random()*60;u+='<g class="drip" style="transform-origin:'+d+'px 120px"><rect x="'+(d-p/2).toFixed(1)+'" y="110" width="'+p.toFixed(1)+'" height="'+_.toFixed(1)+'" rx="'+(p/2).toFixed(1)+'"/><circle cx="'+d.toFixed(1)+'" cy="'+(110+_).toFixed(1)+'" r="'+(p*.8).toFixed(1)+'"/></g>'}s+='<svg class="splat" viewBox="0 0 200 240" style="position:absolute;left:'+r.toFixed(1)+"%;top:"+a.toFixed(1)+"%;width:"+l.toFixed(1)+"%;transform:translate(-50%,-42%) rotate("+Math.round(Math.random()*360)+'deg);filter:drop-shadow(0 6px 8px rgba(0,0,0,.45));opacity:0" data-k="'+o+'"><defs><radialGradient id="'+c+'" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#5b34a3"/><stop offset=".55" stop-color="#34196b"/><stop offset="1" stop-color="#1c0c3f"/></radialGradient></defs><g fill="url(#'+c+')">'+u+'<path d="'+Px(100,100,52)+'"/>'+h+'</g><ellipse cx="82" cy="76" rx="20" ry="11" fill="#fff" opacity=".22" transform="rotate(-25 82 76)"/><circle cx="104" cy="66" r="5" fill="#fff" opacity=".3"/></svg>'}),s}function Lx(s){s.querySelectorAll("svg.splat").forEach(e=>{let t=Number(e.getAttribute("data-k"))||0,n=e.style.transform;e.animate([{opacity:0,transform:n+" scale(0.2)"},{opacity:1,transform:n+" scale(1.18)",offset:.55},{opacity:1,transform:n+" scale(1)"}],{duration:260,delay:t*110,easing:"cubic-bezier(.2,1.4,.4,1)",fill:"forwards"}),e.querySelectorAll("g.drip").forEach(i=>{i.animate([{transform:"scaleY(0.05)"},{transform:"scaleY(1)"}],{duration:2600,delay:400+t*110,easing:"ease-in",fill:"forwards"})})})}function _l(s){return s.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}var Dx=()=>dt.init();["pointerdown","keydown","click","touchstart"].forEach(s=>document.addEventListener(s,Dx,{capture:!0}));function Nx(s,e){e.audioContext&&dt.adopt(e.audioContext);let t=new Da(s,e);return t.start(),window.CouchKart.current=t,t}function Ux(){try{let s=document.createElement("canvas");return!!(s.getContext("webgl2")||s.getContext("webgl"))}catch{return!1}}window.CouchKart={start:Nx,supported:Ux,version:1,soundOn:()=>dt.running()};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
