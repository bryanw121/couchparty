"use strict";(()=>{var Xu=Object.defineProperty;var qu=(s,t,e)=>t in s?Xu(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var $=(s,t,e)=>qu(s,typeof t!="symbol"?t+"":t,e);var ih=0,vc=1,sh=2;var er=1,rh=2,rs=3,Hn=0,Ge=1,qe=2,In=0,vi=1,nr=2,Mc=3,bc=4,oh=5;var ei=100,ah=101,ch=102,lh=103,hh=104,uh=200,fh=201,dh=202,ph=203,Yr=204,Zr=205,mh=206,gh=207,xh=208,_h=209,yh=210,vh=211,Mh=212,bh=213,Sh=214,Jr=0,Kr=1,$r=2,Mi=3,jr=4,Qr=5,to=6,eo=7,Sc=0,Eh=1,Th=2,gn=0,Ec=1,Tc=2,wc=3,ir=4,Ac=5,Rc=6,Cc=7;var Pc=300,ci=301,wi=302,Po=303,Io=304,sr=306,en=1e3,Tn=1001,no=1002,Ae=1003,wh=1004;var rr=1005;var ke=1006,Lo=1007;var li=1008;var $e=1009,Ic=1010,Lc=1011,os=1012,Do=1013,xn=1014,_n=1015,Ln=1016,No=1017,Uo=1018,as=1020,Dc=35902,Nc=35899,Uc=1021,Fc=1022,hn=1023,An=1026,hi=1027,or=1028,Fo=1029,ui=1030,Oo=1031;var Bo=1033,ar=33776,cr=33777,lr=33778,hr=33779,ko=35840,zo=35841,Ho=35842,Go=35843,Vo=36196,Wo=37492,Xo=37496,qo=37488,Yo=37489,ur=37490,Zo=37491,Jo=37808,Ko=37809,$o=37810,jo=37811,Qo=37812,ta=37813,ea=37814,na=37815,ia=37816,sa=37817,ra=37818,oa=37819,aa=37820,ca=37821,la=36492,ha=36494,ua=36495,fa=36283,da=36284,fr=36285,pa=36286;var bs=2300,io=2301,qr=2302,oc=2303,ac=2400,cc=2401,lc=2402;var Ah=3200;var dr=0,Rh=1,Wn="",Le="srgb",Ss="srgb-linear",Es="linear",ce="srgb";var _i=7680;var hc=519,Ch=512,Ph=513,Ih=514,ma=515,Lh=516,Dh=517,ga=518,Nh=519,uc=35044;var Oc="300 es",mn=2e3,Yi=2001;function Yu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Zu(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ts(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Uh(){let s=Ts("canvas");return s.style.display="block",s}var Rl={},Zi=null;function Bc(...s){let t="THREE."+s.shift();Zi?Zi("log",t,...s):console.log(t,...s)}function Fh(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Bt(...s){s=Fh(s);let t="THREE."+s.shift();if(Zi)Zi("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Ht(...s){s=Fh(s);let t="THREE."+s.shift();if(Zi)Zi("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function yi(...s){let t=s.join(" ");t in Rl||(Rl[t]=!0,Bt(...s))}function Oh(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}var Bh={[Jr]:Kr,[$r]:to,[jr]:eo,[Mi]:Qr,[Kr]:Jr,[to]:$r,[eo]:jr,[Qr]:Mi},Rn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cl=1234567,_s=Math.PI/180,Ji=180/Math.PI;function Ai(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[s&255]+We[s>>8&255]+We[s>>16&255]+We[s>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function te(s,t,e){return Math.max(t,Math.min(e,s))}function kc(s,t){return(s%t+t)%t}function Ju(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Ku(s,t,e){return s!==t?(e-s)/(t-s):0}function ys(s,t,e){return(1-e)*s+e*t}function $u(s,t,e,n){return ys(s,t,1-Math.exp(-e*n))}function ju(s,t=1){return t-Math.abs(kc(s,t*2)-t)}function Qu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function tf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function ef(s,t){return s+Math.floor(Math.random()*(t-s+1))}function nf(s,t){return s+Math.random()*(t-s)}function sf(s){return s*(.5-Math.random())}function rf(s){s!==void 0&&(Cl=s);let t=Cl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function of(s){return s*_s}function af(s){return s*Ji}function cf(s){return(s&s-1)===0&&s!==0}function lf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function hf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function uf(s,t,e,n,i){let o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+n)/2),h=r((t+n)/2),u=o((t-n)/2),f=r((t-n)/2),d=o((n-t)/2),p=r((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*p,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*p,a*l);break;case"ZYZ":s.set(c*p,c*d,a*h,a*l);break;default:Bt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Xi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ze(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ie={DEG2RAD:_s,RAD2DEG:Ji,generateUUID:Ai,clamp:te,euclideanModulo:kc,mapLinear:Ju,inverseLerp:Ku,lerp:ys,damp:$u,pingpong:ju,smoothstep:Qu,smootherstep:tf,randInt:ef,randFloat:nf,randFloatSpread:sf,seededRandom:rf,degToRad:of,radToDeg:af,isPowerOfTwo:cf,ceilPowerOfTwo:lf,floorPowerOfTwo:hf,setQuaternionFromProperEuler:uf,normalize:Ze,denormalize:Xi},Xc=class Xc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xc.prototype.isVector2=!0;var lt=Xc,Cn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=o[r+0],d=o[r+1],p=o[r+2],_=o[r+3];if(u!==_||c!==f||l!==d||h!==p){let g=c*f+l*d+h*p+u*_;g<0&&(f=-f,d=-d,p=-p,_=-_,g=-g);let m=1-a;if(g<.9995){let v=Math.acos(g),T=Math.sin(v);m=Math.sin(m*v)/T,a=Math.sin(a*v)/T,c=c*m+f*a,l=l*m+d*a,h=h*m+p*a,u=u*m+_*a}else{c=c*m+f*a,l=l*m+d*a,h=h*m+p*a,u=u*m+_*a;let v=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=v,l*=v,h*=v,u*=v}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,o,r){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=o[r],f=o[r+1],d=o[r+2],p=o[r+3];return t[e]=a*p+h*u+c*d-l*f,t[e+1]=c*p+h*f+l*u-a*d,t[e+2]=l*p+h*d+a*f-c*u,t[e+3]=h*p-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(o/2),f=c(n/2),d=c(i/2),p=c(o/2);switch(r){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(o-l)*d,this._z=(r-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(o+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(o-l)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(r-i)/d,this._x=(o+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+i*l-o*c,this._y=i*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-i*a,this._w=r*h-n*a-i*c-o*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,o=t._z,r=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,o=-o,r=-r,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+o*e,this._w=this._w*c+r*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+o*e,this._w=this._w*c+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},qc=class qc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*i-a*n),h=2*(a*e-o*i),u=2*(o*n-r*e);return this.x=e+c*l+r*u-a*h,this.y=n+c*h+a*l-o*u,this.z=i+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-o*a,this.y=o*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ua.copy(this).projectOnVector(t),this.sub(Ua)}reflect(t){return this.sub(Ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qc.prototype.isVector3=!0;var I=qc,Ua=new I,Pl=new Cn,Yc=class Yc{constructor(t,e,n,i,o,r,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l)}set(t,e,n,i,o,r,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],_=i[0],g=i[3],m=i[6],v=i[1],T=i[4],M=i[7],R=i[2],b=i[5],w=i[8];return o[0]=r*_+a*v+c*R,o[3]=r*g+a*T+c*b,o[6]=r*m+a*M+c*w,o[1]=l*_+h*v+u*R,o[4]=l*g+h*T+u*b,o[7]=l*m+h*M+u*w,o[2]=f*_+d*v+p*R,o[5]=f*g+d*T+p*b,o[8]=f*m+d*M+p*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+i*o*l-i*r*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,f=a*c-h*o,d=l*o-r*c,p=e*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*r)*_,t[3]=f*_,t[4]=(h*e-i*c)*_,t[5]=(i*o-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){let c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-i*l,i*c,-i*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fa.makeScale(t,e)),this}rotate(t){return yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fa.makeRotation(-t)),this}translate(t,e){return yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Yc.prototype.isMatrix3=!0;var Yt=Yc,Fa=new Yt,Il=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ll=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ff(){let s={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(i,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===ce&&(i.r=zn(i.r),i.g=zn(i.g),i.b=zn(i.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ce&&(i.r=qi(i.r),i.g=qi(i.g),i.b=qi(i.b))),i},workingToColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},colorSpaceToWorking:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Wn?Es:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,r){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,o){return yi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,o)},toWorkingColorSpace:function(i,o){return yi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ss]:{primaries:t,whitePoint:n,transfer:Es,toXYZ:Il,fromXYZ:Ll,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:Il,fromXYZ:Ll,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),s}var ie=ff();function zn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Di,so=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Di===void 0&&(Di=Ts("canvas")),Di.width=t.width,Di.height=t.height;let i=Di.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Di}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ts("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=zn(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zn(e[n]/255)*255):e[n]=zn(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},df=0,Ki=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Oa(i[r].image)):o.push(Oa(i[r]))}else o=Oa(i);n.url=o}return e||(t.images[this.uuid]=n),n}};function Oa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?so.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}var pf=0,Ba=new I,Je=class s extends Rn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Tn,i=Tn,o=ke,r=li,a=hn,c=$e,l=s.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Ai(),this.name="",this.source=new Ki(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ba).x}get height(){return this.source.getSize(Ba).y}get depth(){return this.source.getSize(Ba).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case en:t.x=t.x-Math.floor(t.x);break;case Tn:t.x=t.x<0?0:1;break;case no:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case en:t.y=t.y-Math.floor(t.y);break;case Tn:t.y=t.y<0?0:1;break;case no:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Pc;Je.DEFAULT_ANISOTROPY=1;var Zc=class Zc{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(l+1)/2,M=(d+1)/2,R=(m+1)/2,b=(h+f)/4,w=(u+_)/4,x=(p+g)/4;return T>M&&T>R?T<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(T),i=b/n,o=w/n):M>R?M<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(M),n=b/i,o=x/i):R<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(R),n=w/o,i=x/o),this.set(n,i,o,e),this}let v=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zc.prototype.isVector4=!0;var Me=Zc,ro=class extends Rn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},o=new Je(i),r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ki(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends ro{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ws=class extends Je{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var oo=class extends Je{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Co=class Co{constructor(t,e,n,i,o,r,a,c,l,h,u,f,d,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l,h,u,f,d,p,_,g)}set(t,e,n,i,o,r,a,c,l,h,u,f,d,p,_,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=o,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Co().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Ni.setFromMatrixColumn(t,0).length(),o=1/Ni.setFromMatrixColumn(t,1).length(),r=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){let f=r*h,d=r*u,p=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+p*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=p+d*l,e[10]=r*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,p=l*h,_=l*u;e[0]=f+_*a,e[4]=p*a-d,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=d*a-p,e[6]=_+f*a,e[10]=r*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,p=l*h,_=l*u;e[0]=f-_*a,e[4]=-r*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=r*h,e[9]=_-f*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){let f=r*h,d=r*u,p=a*h,_=a*u;e[0]=c*h,e[4]=p*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-p,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){let f=r*c,d=r*l,p=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=p*u+d,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+p,e[10]=f-_*u}else if(t.order==="XZY"){let f=r*c,d=r*l,p=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=r*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mf,t,gf)}lookAt(t,e,n){let i=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),Zn.crossVectors(n,Qe),Zn.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),Zn.crossVectors(n,Qe)),Zn.normalize(),br.crossVectors(Qe,Zn),i[0]=Zn.x,i[4]=br.x,i[8]=Qe.x,i[1]=Zn.y,i[5]=br.y,i[9]=Qe.y,i[2]=Zn.z,i[6]=br.z,i[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],v=n[3],T=n[7],M=n[11],R=n[15],b=i[0],w=i[4],x=i[8],E=i[12],A=i[1],C=i[5],D=i[9],k=i[13],H=i[2],L=i[6],N=i[10],F=i[14],q=i[3],K=i[7],tt=i[11],st=i[15];return o[0]=r*b+a*A+c*H+l*q,o[4]=r*w+a*C+c*L+l*K,o[8]=r*x+a*D+c*N+l*tt,o[12]=r*E+a*k+c*F+l*st,o[1]=h*b+u*A+f*H+d*q,o[5]=h*w+u*C+f*L+d*K,o[9]=h*x+u*D+f*N+d*tt,o[13]=h*E+u*k+f*F+d*st,o[2]=p*b+_*A+g*H+m*q,o[6]=p*w+_*C+g*L+m*K,o[10]=p*x+_*D+g*N+m*tt,o[14]=p*E+_*k+g*F+m*st,o[3]=v*b+T*A+M*H+R*q,o[7]=v*w+T*C+M*L+R*K,o[11]=v*x+T*D+M*N+R*tt,o[15]=v*E+T*k+M*F+R*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],_=t[7],g=t[11],m=t[15],v=c*d-l*f,T=a*d-l*u,M=a*f-c*u,R=r*d-l*h,b=r*f-c*h,w=r*u-a*h;return e*(_*v-g*T+m*M)-n*(p*v-g*R+m*b)+i*(p*T-_*R+m*w)-o*(p*M-_*b+g*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],o=t[1],r=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(r*h-a*l)-n*(o*h-a*c)+i*(o*l-r*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],_=t[13],g=t[14],m=t[15],v=e*a-n*r,T=e*c-i*r,M=e*l-o*r,R=n*c-i*a,b=n*l-o*a,w=i*l-o*c,x=h*_-u*p,E=h*g-f*p,A=h*m-d*p,C=u*g-f*_,D=u*m-d*_,k=f*m-d*g,H=v*k-T*D+M*C+R*A-b*E+w*x;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/H;return t[0]=(a*k-c*D+l*C)*L,t[1]=(i*D-n*k-o*C)*L,t[2]=(_*w-g*b+m*R)*L,t[3]=(f*b-u*w-d*R)*L,t[4]=(c*A-r*k-l*E)*L,t[5]=(e*k-i*A+o*E)*L,t[6]=(g*M-p*w-m*T)*L,t[7]=(h*w-f*M+d*T)*L,t[8]=(r*D-a*A+l*x)*L,t[9]=(n*A-e*D-o*x)*L,t[10]=(p*b-_*M+m*v)*L,t[11]=(u*M-h*b-d*v)*L,t[12]=(a*E-r*C-c*x)*L,t[13]=(e*C-n*E+i*x)*L,t[14]=(_*T-p*R-g*v)*L,t[15]=(h*R-u*T+f*v)*L,this}scale(t){let e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*r,0,l*c-i*a,h*c+i*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,f=o*l,d=o*h,p=o*u,_=r*h,g=r*u,m=a*u,v=c*l,T=c*h,M=c*u,R=n.x,b=n.y,w=n.z;return i[0]=(1-(_+m))*R,i[1]=(d+M)*R,i[2]=(p-T)*R,i[3]=0,i[4]=(d-M)*b,i[5]=(1-(f+m))*b,i[6]=(g+v)*b,i[7]=0,i[8]=(p+T)*w,i[9]=(g-v)*w,i[10]=(1-(f+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let r=Ni.set(i[0],i[1],i[2]).length(),a=Ni.set(i[4],i[5],i[6]).length(),c=Ni.set(i[8],i[9],i[10]).length();o<0&&(r=-r),fn.copy(this);let l=1/r,h=1/a,u=1/c;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,e.setFromRotationMatrix(fn),n.x=r,n.y=a,n.z=c,this}makePerspective(t,e,n,i,o,r,a=mn,c=!1){let l=this.elements,h=2*o/(e-t),u=2*o/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i),p,_;if(c)p=o/(r-o),_=r*o/(r-o);else if(a===mn)p=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===Yi)p=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=mn,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i),p,_;if(c)p=1/(r-o),_=r/(r-o);else if(a===mn)p=-2/(r-o),_=-(r+o)/(r-o);else if(a===Yi)p=-1/(r-o),_=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Co.prototype.isMatrix4=!0;var ve=Co,Ni=new I,fn=new ve,mf=new I(0,0,0),gf=new I(1,1,1),Zn=new I,br=new I,Qe=new I,Dl=new ve,Nl=new Cn,Gn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,o=i[0],r=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-te(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER="XYZ";var As=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xf=0,Ul=new I,Ui=new Cn,Un=new ve,Sr=new I,ds=new I,_f=new I,yf=new Cn,Fl=new I(1,0,0),Ol=new I(0,1,0),Bl=new I(0,0,1),kl={type:"added"},vf={type:"removed"},Fi={type:"childadded",child:null},ka={type:"childremoved",child:null},ze=class s extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new I,e=new Gn,n=new Cn,i=new I(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ve},normalMatrix:{value:new Yt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new As,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(Fl,t)}rotateY(t){return this.rotateOnAxis(Ol,t)}rotateZ(t){return this.rotateOnAxis(Bl,t)}translateOnAxis(t,e){return Ul.copy(t).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fl,t)}translateY(t){return this.translateOnAxis(Ol,t)}translateZ(t){return this.translateOnAxis(Bl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(ds,Sr,this.up):Un.lookAt(Sr,ds,this.up),this.quaternion.setFromRotationMatrix(Un),i&&(Un.extractRotation(i.matrixWorld),Ui.setFromRotationMatrix(Un),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kl),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vf),ka.child=t,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kl),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,t,_f),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,yf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*i,o[13]+=n-o[1]*e-o[5]*n-o[9]*i,o[14]+=i-o[2]*e-o[6]*n-o[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(o(t.animations,c))}}if(e){let a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),f=r(t.skeletons),d=r(t.animations),p=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function r(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ze.DEFAULT_UP=new I(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var se=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mf={type:"move"},$i=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mf)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Er={h:0,s:0,l:0};function za(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=kc(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=za(r,o,t+1/3),this.g=za(r,o,t),this.b=za(r,o,t-1/3)}return ie.colorSpaceToWorking(this,i),this}setStyle(t,e=Le){function n(o){o!==void 0&&parseFloat(o)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){let n=kh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zn(t.r),this.g=zn(t.g),this.b=zn(t.b),this}copyLinearToSRGB(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return ie.workingToColorSpace(Xe.copy(this),t),Math.round(te(Xe.r*255,0,255))*65536+Math.round(te(Xe.g*255,0,255))*256+Math.round(te(Xe.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(Xe.copy(this),e);let n=Xe.r,i=Xe.g,o=Xe.b,r=Math.max(n,i,o),a=Math.min(n,i,o),c,l,h=(a+r)/2;if(a===r)c=0,l=0;else{let u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case n:c=(i-o)/u+(i<o?6:0);break;case i:c=(o-n)/u+2;break;case o:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Le){ie.workingToColorSpace(Xe.copy(this),t);let e=Xe.r,n=Xe.g,i=Xe.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(Er);let n=ys(Jn.h,Er.h,e),i=ys(Jn.s,Er.s,e),o=ys(Jn.l,Er.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xe=new Ut;Ut.NAMES=kh;var Rs=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Cs=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},dn=new I,Fn=new I,Ha=new I,On=new I,Oi=new I,Bi=new I,zl=new I,Ga=new I,Va=new I,Wa=new I,Xa=new Me,qa=new Me,Ya=new Me,ti=class s{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),dn.subVectors(t,e),i.cross(dn);let o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){dn.subVectors(i,e),Fn.subVectors(n,e),Ha.subVectors(t,e);let r=dn.dot(dn),a=dn.dot(Fn),c=dn.dot(Ha),l=Fn.dot(Fn),h=Fn.dot(Ha),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,p=(r*h-a*c)*f;return o.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,i,o,r,a,c){return this.getBarycoord(t,e,n,i,On)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,On.x),c.addScaledVector(r,On.y),c.addScaledVector(a,On.z),c)}static getInterpolatedAttribute(t,e,n,i,o,r){return Xa.setScalar(0),qa.setScalar(0),Ya.setScalar(0),Xa.fromBufferAttribute(t,e),qa.fromBufferAttribute(t,n),Ya.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Xa,o.x),r.addScaledVector(qa,o.y),r.addScaledVector(Ya,o.z),r}static isFrontFacing(t,e,n,i){return dn.subVectors(n,e),Fn.subVectors(t,e),dn.cross(Fn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),dn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,o=this.c,r,a;Oi.subVectors(i,n),Bi.subVectors(o,n),Ga.subVectors(t,n);let c=Oi.dot(Ga),l=Bi.dot(Ga);if(c<=0&&l<=0)return e.copy(n);Va.subVectors(t,i);let h=Oi.dot(Va),u=Bi.dot(Va);if(h>=0&&u<=h)return e.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(Oi,r);Wa.subVectors(t,o);let d=Oi.dot(Wa),p=Bi.dot(Wa);if(p>=0&&d<=p)return e.copy(o);let _=d*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(Bi,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return zl.subVectors(o,i),a=(u-h)/(u-h+(d-p)),e.copy(i).addScaledVector(zl,a);let m=1/(g+_+f);return r=_*m,a=f*m,e.copy(n).addScaledVector(Oi,r).addScaledVector(Bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ni=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,pn):pn.fromBufferAttribute(o,r),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}let i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ps),wr.subVectors(this.max,ps),ki.subVectors(t.a,ps),zi.subVectors(t.b,ps),Hi.subVectors(t.c,ps),Kn.subVectors(zi,ki),$n.subVectors(Hi,zi),pi.subVectors(ki,Hi);let e=[0,-Kn.z,Kn.y,0,-$n.z,$n.y,0,-pi.z,pi.y,Kn.z,0,-Kn.x,$n.z,0,-$n.x,pi.z,0,-pi.x,-Kn.y,Kn.x,0,-$n.y,$n.x,0,-pi.y,pi.x,0];return!Za(e,ki,zi,Hi,wr)||(e=[1,0,0,0,1,0,0,0,1],!Za(e,ki,zi,Hi,wr))?!1:(Ar.crossVectors(Kn,$n),e=[Ar.x,Ar.y,Ar.z],Za(e,ki,zi,Hi,wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Bn=[new I,new I,new I,new I,new I,new I,new I,new I],pn=new I,Tr=new ni,ki=new I,zi=new I,Hi=new I,Kn=new I,$n=new I,pi=new I,ps=new I,wr=new I,Ar=new I,mi=new I;function Za(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){mi.fromArray(s,o);let a=i.x*Math.abs(mi.x)+i.y*Math.abs(mi.y)+i.z*Math.abs(mi.z),c=t.dot(mi),l=e.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Re=new I,Rr=new lt,bf=0,De=class extends Rn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uc,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Rr.fromBufferAttribute(this,e),Rr.applyMatrix3(t),this.setXY(e,Rr.x,Rr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),i=Ze(i,this.array),o=Ze(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uc&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ps=class extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Is=class extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Gt=class extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}},Sf=new ni,ms=new I,Ja=new I,bi=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Sf.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ms.subVectors(t,this.center);let e=ms.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ms,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ms.copy(t.center).add(Ja)),this.expandByPoint(ms.copy(t.center).sub(Ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ef=0,cn=new ve,Ka=new ze,Gi=new I,tn=new ni,gs=new ni,Fe=new I,le=class s extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yu(t)?Is:Ps)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new Yt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return Ka.lookAt(t),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,o=t.length;i<o;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Gt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let o=e[n];tn.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){let a=e[o];gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(tn.min,gs.min),tn.expandByPoint(Fe),Fe.addVectors(tn.max,gs.max),tn.expandByPoint(Fe)):(tn.expandByPoint(gs.min),tn.expandByPoint(gs.max))}tn.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)Fe.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(Fe));if(e)for(let o=0,r=e.length;o<r;o++){let a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Fe.fromBufferAttribute(a,l),c&&(Gi.fromBufferAttribute(t,l),Fe.add(Gi)),i=Math.max(i,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,o=e.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new De(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));let a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new I,c[x]=new I;let l=new I,h=new I,u=new I,f=new lt,d=new lt,p=new lt,_=new I,g=new I;function m(x,E,A){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,A),f.fromBufferAttribute(o,x),d.fromBufferAttribute(o,E),p.fromBufferAttribute(o,A),h.sub(l),u.sub(l),d.sub(f),p.sub(f);let C=1/(d.x*p.y-p.x*d.y);isFinite(C)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(C),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(C),a[x].add(_),a[E].add(_),a[A].add(_),c[x].add(g),c[E].add(g),c[A].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let x=0,E=v.length;x<E;++x){let A=v[x],C=A.start,D=A.count;for(let k=C,H=C+D;k<H;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let T=new I,M=new I,R=new I,b=new I;function w(x){R.fromBufferAttribute(i,x),b.copy(R);let E=a[x];T.copy(E),T.sub(R.multiplyScalar(R.dot(E))).normalize(),M.crossVectors(b,E);let C=M.dot(c[x])<0?-1:1;r.setXYZW(x,T.x,T.y,T.z,C)}for(let x=0,E=v.length;x<E;++x){let A=v[x],C=A.start,D=A.count;for(let k=C,H=C+D;k<H;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new I,o=new I,r=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,p),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,p=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let m=0;m<h;m++)f[p++]=l[d++]}return new De(f,h,u)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let o=this.morphAttributes;for(let a in o){let c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,c=r.length;a<c;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},o=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let o=t.morphAttributes;for(let l in o){let h=[],u=o[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,h=r.length;l<h;l++){let u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Tf=0,Pn=class extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=vi,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yr,this.blendDst=Zr,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yr&&(n.blendSrc=this.blendSrc),this.blendDst!==Zr&&(n.blendDst=this.blendDst),this.blendEquation!==ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){let r=[];for(let a in o){let c=o[a];delete c.metadata,r.push(c)}return r}if(e){let o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var kn=new I,$a=new I,Cr=new I,jn=new I,ja=new I,Pr=new I,Qa=new I,Ls=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){$a.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),jn.copy(this.origin).sub($a);let o=t.distanceTo(e)*.5,r=-this.direction.dot(Cr),a=jn.dot(this.direction),c=-jn.dot(Cr),l=jn.lengthSq(),h=Math.abs(1-r*r),u,f,d,p;if(h>0)if(u=r*c-a,f=r*a-c,p=o*h,u>=0)if(f>=-p)if(f<=p){let _=1/h;u*=_,f*=_,d=u*(u+r*f+2*a)+f*(r*u+f+2*c)+l}else f=o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*c)+l;else f=-o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-r*o+a)),f=u>0?-o:Math.min(Math.max(-o,-c),o),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-o,-c),o),d=f*(f+2*c)+l):(u=Math.max(0,-(r*o+a)),f=u>0?o:Math.min(Math.max(-o,-c),o),d=-u*u+f*(f+2*c)+l);else f=r>0?-o:o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy($a).addScaledVector(Cr,f),d}intersectSphere(t,e){kn.subVectors(t.center,this.origin);let n=kn.dot(this.direction),i=kn.dot(kn)-n*n,o=t.radius*t.radius;if(i>o)return null;let r=Math.sqrt(o-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(o=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,i,o){ja.subVectors(e,t),Pr.subVectors(n,t),Qa.crossVectors(ja,Pr);let r=this.direction.dot(Qa),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;jn.subVectors(this.origin,t);let c=a*this.direction.dot(Pr.crossVectors(jn,Pr));if(c<0)return null;let l=a*this.direction.dot(ja.cross(jn));if(l<0||c+l>r)return null;let h=-a*jn.dot(Qa);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class extends Pn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Hl=new ve,gi=new Ls,Ir=new bi,Gl=new I,Lr=new I,Dr=new I,Nr=new I,tc=new I,Ur=new I,Vl=new I,Fr=new I,et=class extends ze{constructor(t=new le,e=new Ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){let a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(o&&a){Ur.set(0,0,0);for(let c=0,l=o.length;c<l;c++){let h=a[c],u=o[c];h!==0&&(tc.fromBufferAttribute(u,t),r?Ur.addScaledVector(tc,h):Ur.addScaledVector(tc.sub(e),h))}e.add(Ur)}return e}raycast(t,e){let n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(o),gi.copy(t.ray).recast(t.near),!(Ir.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Ir,Gl)===null||gi.origin.distanceToSquared(Gl)>(t.far-t.near)**2))&&(Hl.copy(o).invert(),gi.copy(t.ray).applyMatrix4(Hl),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let i,o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,_=f.length;p<_;p++){let g=f[p],m=r[g.materialIndex],v=Math.max(g.start,d.start),T=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let M=v,R=T;M<R;M+=3){let b=a.getX(M),w=a.getX(M+1),x=a.getX(M+2);i=Or(this,m,t,n,l,h,u,b,w,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){let v=a.getX(g),T=a.getX(g+1),M=a.getX(g+2);i=Or(this,r,t,n,l,h,u,v,T,M),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let p=0,_=f.length;p<_;p++){let g=f[p],m=r[g.materialIndex],v=Math.max(g.start,d.start),T=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let M=v,R=T;M<R;M+=3){let b=M,w=M+1,x=M+2;i=Or(this,m,t,n,l,h,u,b,w,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){let v=g,T=g+1,M=g+2;i=Or(this,r,t,n,l,h,u,v,T,M),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function wf(s,t,e,n,i,o,r,a){let c;if(t.side===Ge?c=n.intersectTriangle(r,o,i,!0,a):c=n.intersectTriangle(i,o,r,t.side===Hn,a),c===null)return null;Fr.copy(a),Fr.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Fr);return l<e.near||l>e.far?null:{distance:l,point:Fr.clone(),object:s}}function Or(s,t,e,n,i,o,r,a,c,l){s.getVertexPosition(a,Lr),s.getVertexPosition(c,Dr),s.getVertexPosition(l,Nr);let h=wf(s,t,e,n,Lr,Dr,Nr,Vl);if(h){let u=new I;ti.getBarycoord(Vl,Lr,Dr,Nr,u),i&&(h.uv=ti.getInterpolatedAttribute(i,a,c,l,u,new lt)),o&&(h.uv1=ti.getInterpolatedAttribute(o,a,c,l,u,new lt)),r&&(h.normal=ti.getInterpolatedAttribute(r,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new I,materialIndex:0};ti.getNormal(Lr,Dr,Nr,f.normal),h.face=f,h.barycoord=u}return h}var ji=class extends Je{constructor(t=null,e=1,n=1,i,o,r,a,c,l=Ae,h=Ae,u,f){super(null,r,a,c,l,h,i,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ec=new I,Af=new I,Rf=new Yt,En=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ec.subVectors(n,e).cross(Af.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(ec),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Rf.getNormalMatrix(t),i=this.coplanarPoint(ec).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},xi=new bi,Cf=new lt(.5,.5),Br=new I,Qi=class{constructor(t=new En,e=new En,n=new En,i=new En,o=new En,r=new En){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn,n=!1){let i=this.planes,o=t.elements,r=o[0],a=o[1],c=o[2],l=o[3],h=o[4],u=o[5],f=o[6],d=o[7],p=o[8],_=o[9],g=o[10],m=o[11],v=o[12],T=o[13],M=o[14],R=o[15];if(i[0].setComponents(l-r,d-h,m-p,R-v).normalize(),i[1].setComponents(l+r,d+h,m+p,R+v).normalize(),i[2].setComponents(l+a,d+u,m+_,R+T).normalize(),i[3].setComponents(l-a,d-u,m-_,R-T).normalize(),n)i[4].setComponents(c,f,g,M).normalize(),i[5].setComponents(l-c,d-f,m-g,R-M).normalize();else if(i[4].setComponents(l-c,d-f,m-g,R-M).normalize(),e===mn)i[5].setComponents(l+c,d+f,m+g,R+M).normalize();else if(e===Yi)i[5].setComponents(c,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){xi.center.set(0,0,0);let e=Cf.distanceTo(t.center);return xi.radius=.7071067811865476+e,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Br.x=i.normal.x>0?t.max.x:t.min.x,Br.y=i.normal.y>0?t.max.y:t.min.y,Br.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Br)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ts=class extends Pn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Wl=new ve,fc=new Ls,kr=new bi,zr=new I,Ds=class extends ze{constructor(t=new le,e=new ts){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(i),kr.radius+=o,t.ray.intersectsSphere(kr)===!1)return;Wl.copy(i).invert(),fc.copy(t.ray).applyMatrix4(Wl);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,r.start),d=Math.min(l.count,r.start+r.count);for(let p=f,_=d;p<_;p++){let g=l.getX(p);zr.fromBufferAttribute(u,g),Xl(zr,g,c,i,t,e,this)}}else{let f=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let p=f,_=d;p<_;p++)zr.fromBufferAttribute(u,p),Xl(zr,p,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){let a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Xl(s,t,e,n,i,o,r){let a=fc.distanceSqToPoint(s);if(a<e){let c=new I;fc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var Ns=class extends Je{constructor(t=[],e=ci,n,i,o,r,a,c,l,h){super(t,e,n,i,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Pe=class extends Je{constructor(t,e,n,i,o,r,a,c,l){super(t,e,n,i,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Vn=class extends Je{constructor(t,e,n=xn,i,o,r,a=Ae,c=Ae,l,h=An,u=1){if(h!==An&&h!==hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,i,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ki(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ao=class extends Vn{constructor(t,e=xn,n=ci,i,o,r=Ae,a=Ae,c,l=An){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,o,r,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Us=class extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},de=class s extends le{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};let a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);let c=[],l=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,r,o,0),p("z","y","x",1,-1,n,e,-t,r,o,1),p("x","z","y",1,1,t,n,e,i,r,2),p("x","z","y",1,-1,t,n,-e,i,r,3),p("x","y","z",1,-1,t,e,n,i,o,4),p("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(u,2));function p(_,g,m,v,T,M,R,b,w,x,E){let A=M/w,C=R/x,D=M/2,k=R/2,H=b/2,L=w+1,N=x+1,F=0,q=0,K=new I;for(let tt=0;tt<N;tt++){let st=tt*C-k;for(let ft=0;ft<L;ft++){let qt=ft*A-D;K[_]=qt*v,K[g]=st*T,K[m]=H,l.push(K.x,K.y,K.z),K[_]=0,K[g]=0,K[m]=b>0?1:-1,h.push(K.x,K.y,K.z),u.push(ft/w),u.push(1-tt/x),F+=1}}for(let tt=0;tt<x;tt++)for(let st=0;st<w;st++){let ft=f+st+L*tt,qt=f+st+L*(tt+1),ae=f+(st+1)+L*(tt+1),jt=f+(st+1)+L*tt;c.push(ft,qt,jt),c.push(qt,ae,jt),q+=6}a.addGroup(d,q,E),d+=q,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Fs=class s extends le{constructor(t=1,e=1,n=4,i=8,o=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:o},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),o=Math.max(1,Math.floor(o));let r=[],a=[],c=[],l=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,p=n*2+o,_=i+1,g=new I,m=new I;for(let v=0;v<=p;v++){let T=0,M=0,R=0,b=0;if(v<=n){let E=v/n,A=E*Math.PI/2;M=-h-t*Math.cos(A),R=t*Math.sin(A),b=-t*Math.cos(A),T=E*u}else if(v<=n+o){let E=(v-n)/o;M=-h+E*e,R=t,b=0,T=u+E*f}else{let E=(v-n-o)/n,A=E*Math.PI/2;M=h+t*Math.sin(A),R=t*Math.cos(A),b=t*Math.sin(A),T=u+f+E*u}let w=Math.max(0,Math.min(1,T/d)),x=0;v===0?x=.5/i:v===p&&(x=-.5/i);for(let E=0;E<=i;E++){let A=E/i,C=A*Math.PI*2,D=Math.sin(C),k=Math.cos(C);m.x=-R*k,m.y=M,m.z=R*D,a.push(m.x,m.y,m.z),g.set(-R*k,b,R*D),g.normalize(),c.push(g.x,g.y,g.z),l.push(A+x,w)}if(v>0){let E=(v-1)*_;for(let A=0;A<i;A++){let C=E+A,D=E+A+1,k=v*_+A,H=v*_+A+1;r.push(C,D,k),r.push(D,H,k)}}}this.setIndex(r),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Os=class s extends le{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let o=[],r=[],a=[],c=[],l=new I,h=new lt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[f]/t+1)/2,h.y=(r[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Gt(r,3)),this.setAttribute("normal",new Gt(a,3)),this.setAttribute("uv",new Gt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},_e=class s extends le{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),o=Math.floor(o);let h=[],u=[],f=[],d=[],p=0,_=[],g=n/2,m=0;v(),r===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(d,2));function v(){let M=new I,R=new I,b=0,w=(e-t)/n;for(let x=0;x<=o;x++){let E=[],A=x/o,C=A*(e-t)+t;for(let D=0;D<=i;D++){let k=D/i,H=k*c+a,L=Math.sin(H),N=Math.cos(H);R.x=C*L,R.y=-A*n+g,R.z=C*N,u.push(R.x,R.y,R.z),M.set(L,w,N).normalize(),f.push(M.x,M.y,M.z),d.push(k,1-A),E.push(p++)}_.push(E)}for(let x=0;x<i;x++)for(let E=0;E<o;E++){let A=_[E][x],C=_[E+1][x],D=_[E+1][x+1],k=_[E][x+1];(t>0||E!==0)&&(h.push(A,C,k),b+=3),(e>0||E!==o-1)&&(h.push(C,D,k),b+=3)}l.addGroup(m,b,0),m+=b}function T(M){let R=p,b=new lt,w=new I,x=0,E=M===!0?t:e,A=M===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,g*A,0),f.push(0,A,0),d.push(.5,.5),p++;let C=p;for(let D=0;D<=i;D++){let H=D/i*c+a,L=Math.cos(H),N=Math.sin(H);w.x=E*N,w.y=g*A,w.z=E*L,u.push(w.x,w.y,w.z),f.push(0,A,0),b.x=L*.5+.5,b.y=N*.5*A+.5,d.push(b.x,b.y),p++}for(let D=0;D<i;D++){let k=R+D,H=C+D;M===!0?h.push(H,H+1,k):h.push(H+1,H,k),x+=3}l.addGroup(m,x,M===!0?1:2),m+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Be=class s extends _e{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Bt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,o=n.length,r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(o-1);let h=n[i],f=n[i+1]-h,d=(r-h)/f;return(i+d)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);let r=this.getPoint(i),a=this.getPoint(o),c=e||(r.isVector2?new lt:new I);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,i=[],o=[],r=[],a=new I,c=new ve;for(let d=0;d<=t;d++){let p=d/t;i[d]=this.getTangentAt(p,new I)}o[0]=new I,r[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(te(i[d-1].dot(i[d]),-1,1));o[d].applyMatrix4(c.makeRotationAxis(a,p))}r[d].crossVectors(i[d],o[d])}if(e===!0){let d=Math.acos(te(o[0].dot(o[t]),-1,1));d/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let p=1;p<=t;p++)o[p].applyMatrix4(c.makeRotationAxis(i[p],d*p)),r[p].crossVectors(i[p],o[p])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},es=class extends sn{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new lt){let n=e,i=Math.PI*2,o=this.aEndAngle-this.aStartAngle,r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);let a=this.aStartAngle+t*o,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},co=class extends es{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}};function zc(){let s=0,t=0,e=0,n=0;function i(o,r,a,c){s=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){i(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let f=(r-o)/l-(a-o)/(l+h)+(a-r)/h,d=(a-r)/h-(c-r)/(h+u)+(c-a)/u;f*=h,d*=h,i(r,a,f,d)},calc:function(o){let r=o*o,a=r*o;return s+t*o+e*r+n*a}}}var ql=new I,Yl=new I,nc=new zc,ic=new zc,sc=new zc,ii=class extends sn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t,a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%o]:(Yl.subVectors(i[0],i[1]).add(i[0]),l=Yl);let u=i[a%o],f=i[(a+1)%o];if(this.closed||a+2<o?h=i[(a+2)%o]:(ql.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=ql),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),nc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,p,_,g),ic.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,p,_,g),sc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(nc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),ic.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),sc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(nc.calc(c),ic.calc(c),sc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zl(s,t,e,n,i){let o=(n-t)*.5,r=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*s+e}function Pf(s,t){let e=1-s;return e*e*t}function If(s,t){return 2*(1-s)*s*t}function Lf(s,t){return s*s*t}function vs(s,t,e,n){return Pf(s,t)+If(s,e)+Lf(s,n)}function Df(s,t){let e=1-s;return e*e*e*t}function Nf(s,t){let e=1-s;return 3*e*e*s*t}function Uf(s,t){return 3*(1-s)*s*s*t}function Ff(s,t){return s*s*s*t}function Ms(s,t,e,n,i){return Df(s,t)+Nf(s,e)+Uf(s,n)+Ff(s,i)}var Bs=class extends sn{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){let n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ms(t,i.x,o.x,r.x,a.x),Ms(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lo=class extends sn{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ms(t,i.x,o.x,r.x,a.x),Ms(t,i.y,o.y,r.y,a.y),Ms(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ks=class extends sn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ho=class extends sn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zs=class extends sn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(vs(t,i.x,o.x,r.x),vs(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Si=class extends sn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(vs(t,i.x,o.x,r.x),vs(t,i.y,o.y,r.y),vs(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hs=class extends sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(Zl(a,c.x,l.x,h.x,u.x),Zl(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new lt().fromArray(i))}return this}},uo=Object.freeze({__proto__:null,ArcCurve:co,CatmullRomCurve3:ii,CubicBezierCurve:Bs,CubicBezierCurve3:lo,EllipseCurve:es,LineCurve:ks,LineCurve3:ho,QuadraticBezierCurve:zs,QuadraticBezierCurve3:Si,SplineCurve:Hs}),fo=class extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),o=0;for(;o<i.length;){if(i[o]>=n){let r=i[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,o=this.curves;i<o.length;i++){let r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new uo[i.type]().fromJSON(i))}return this}},Gs=class extends fo{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ks(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let o=new zs(this.currentPoint.clone(),new lt(t,e),new lt(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){let a=new Bs(this.currentPoint.clone(),new lt(t,e),new lt(n,i),new lt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Hs(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,o,r,a,c),this}absellipse(t,e,n,i,o,r,a,c){let l=new es(t,e,n,i,o,r,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ln=class extends Gs{constructor(t){super(t),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Gs().fromJSON(i))}return this}};function Of(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,o=zh(s,0,i,e,!0),r=[];if(!o||o.next===o.prev)return r;let a,c,l;if(n&&(o=Gf(s,t,o,e)),s.length>80*e){a=s[0],c=s[1];let h=a,u=c;for(let f=e;f<i;f+=e){let d=s[f],p=s[f+1];d<a&&(a=d),p<c&&(c=p),d>h&&(h=d),p>u&&(u=p)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Vs(o,r,e,a,c,l,0),r}function zh(s,t,e,n,i){let o;if(i===Qf(s,t,e,n)>0)for(let r=t;r<e;r+=n)o=Jl(r/n|0,s[r],s[r+1],o);else for(let r=e-n;r>=t;r-=n)o=Jl(r/n|0,s[r],s[r+1],o);return o&&ns(o,o.next)&&(Xs(o),o=o.next),o}function Ei(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ns(e,e.next)||be(e.prev,e,e.next)===0)){if(Xs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Vs(s,t,e,n,i,o,r){if(!s)return;!r&&o&&Yf(s,n,i,o);let a=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(o?kf(s,n,i,o):Bf(s)){t.push(c.i,s.i,l.i),Xs(s),s=l.next,a=l.next;continue}if(s=l,s===a){r?r===1?(s=zf(Ei(s),t),Vs(s,t,e,n,i,o,2)):r===2&&Hf(s,t,e,n,i,o):Vs(Ei(s),t,e,n,i,o,1);break}}}function Bf(s){let t=s.prev,e=s,n=s.next;if(be(t,e,n)>=0)return!1;let i=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(i,o,r),u=Math.min(a,c,l),f=Math.max(i,o,r),d=Math.max(a,c,l),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&xs(i,a,o,c,r,l,p.x,p.y)&&be(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function kf(s,t,e,n){let i=s.prev,o=s,r=s.next;if(be(i,o,r)>=0)return!1;let a=i.x,c=o.x,l=r.x,h=i.y,u=o.y,f=r.y,d=Math.min(a,c,l),p=Math.min(h,u,f),_=Math.max(a,c,l),g=Math.max(h,u,f),m=dc(d,p,t,e,n),v=dc(_,g,t,e,n),T=s.prevZ,M=s.nextZ;for(;T&&T.z>=m&&M&&M.z<=v;){if(T.x>=d&&T.x<=_&&T.y>=p&&T.y<=g&&T!==i&&T!==r&&xs(a,h,c,u,l,f,T.x,T.y)&&be(T.prev,T,T.next)>=0||(T=T.prevZ,M.x>=d&&M.x<=_&&M.y>=p&&M.y<=g&&M!==i&&M!==r&&xs(a,h,c,u,l,f,M.x,M.y)&&be(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;T&&T.z>=m;){if(T.x>=d&&T.x<=_&&T.y>=p&&T.y<=g&&T!==i&&T!==r&&xs(a,h,c,u,l,f,T.x,T.y)&&be(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;M&&M.z<=v;){if(M.x>=d&&M.x<=_&&M.y>=p&&M.y<=g&&M!==i&&M!==r&&xs(a,h,c,u,l,f,M.x,M.y)&&be(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function zf(s,t){let e=s;do{let n=e.prev,i=e.next.next;!ns(n,i)&&Gh(n,e,e.next,i)&&Ws(n,i)&&Ws(i,n)&&(t.push(n.i,e.i,i.i),Xs(e),Xs(e.next),e=s=i),e=e.next}while(e!==s);return Ei(e)}function Hf(s,t,e,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Kf(r,a)){let c=Vh(r,a);r=Ei(r,r.next),c=Ei(c,c.next),Vs(r,t,e,n,i,o,0),Vs(c,t,e,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function Gf(s,t,e,n){let i=[];for(let o=0,r=t.length;o<r;o++){let a=t[o]*n,c=o<r-1?t[o+1]*n:s.length,l=zh(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(Jf(l))}i.sort(Vf);for(let o=0;o<i.length;o++)e=Wf(i[o],e);return e}function Vf(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Wf(s,t){let e=Xf(s,t);if(!e)return t;let n=Vh(e,s);return Ei(n,n.next),Ei(e,e.next)}function Xf(s,t){let e=t,n=s.x,i=s.y,o=-1/0,r;if(ns(s,e))return e;do{if(ns(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>o&&(o=u,r=e.x<e.next.x?e:e.next,u===n))return r}e=e.next}while(e!==t);if(!r)return null;let a=r,c=r.x,l=r.y,h=1/0;e=r;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Hh(i<l?n:o,i,c,l,i<l?o:n,i,e.x,e.y)){let u=Math.abs(i-e.y)/(n-e.x);Ws(e,s)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&qf(r,e)))&&(r=e,h=u)}e=e.next}while(e!==a);return r}function qf(s,t){return be(s.prev,s,t.prev)<0&&be(t.next,s,s.next)<0}function Yf(s,t,e,n){let i=s;do i.z===0&&(i.z=dc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Zf(i)}function Zf(s){let t,e=1;do{let n=s,i;s=null;let o=null;for(t=0;n;){t++;let r=n,a=0;for(let l=0;l<e&&(a++,r=r.nextZ,!!r);l++);let c=e;for(;a>0||c>0&&r;)a!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,a--):(i=r,r=r.nextZ,c--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;n=r}o.nextZ=null,e*=2}while(t>1);return s}function dc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Jf(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Hh(s,t,e,n,i,o,r,a){return(i-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(i-r)*(n-a)}function xs(s,t,e,n,i,o,r,a){return!(s===r&&t===a)&&Hh(s,t,e,n,i,o,r,a)}function Kf(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!$f(s,t)&&(Ws(s,t)&&Ws(t,s)&&jf(s,t)&&(be(s.prev,s,t.prev)||be(s,t.prev,t))||ns(s,t)&&be(s.prev,s,s.next)>0&&be(t.prev,t,t.next)>0)}function be(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ns(s,t){return s.x===t.x&&s.y===t.y}function Gh(s,t,e,n){let i=Gr(be(s,t,e)),o=Gr(be(s,t,n)),r=Gr(be(e,n,s)),a=Gr(be(e,n,t));return!!(i!==o&&r!==a||i===0&&Hr(s,e,t)||o===0&&Hr(s,n,t)||r===0&&Hr(e,s,n)||a===0&&Hr(e,t,n))}function Hr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Gr(s){return s>0?1:s<0?-1:0}function $f(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Gh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ws(s,t){return be(s.prev,s,s.next)<0?be(s,t,s.next)>=0&&be(s,s.prev,t)>=0:be(s,t,s.prev)<0||be(s,s.next,t)<0}function jf(s,t){let e=s,n=!1,i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Vh(s,t){let e=pc(s.i,s.x,s.y),n=pc(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Jl(s,t,e,n){let i=pc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Xs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function pc(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qf(s,t,e,n){let i=0;for(let o=t,r=e-n;o<e;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}var mc=class{static triangulate(t,e,n=2){return Of(t,e,n)}},wn=class s{static area(t){let e=t.length,n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],o=[];Kl(t),$l(n,t);let r=t.length;e.forEach(Kl);for(let c=0;c<e.length;c++)i.push(r),r+=e[c].length,$l(n,e[c]);let a=mc.triangulate(n,i);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}};function Kl(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function $l(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var si=class s extends le{constructor(t=new ln([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],o=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];r(l)}this.setAttribute("position",new Gt(i,3)),this.setAttribute("uv",new Gt(o,2)),this.computeVertexNormals();function r(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:td,T,M=!1,R,b,w,x;if(m){T=m.getSpacedPoints(h),M=!0,f=!1;let nt=m.isCatmullRomCurve3?m.closed:!1;R=m.computeFrenetFrames(h,nt),b=new I,w=new I,x=new I}f||(g=0,d=0,p=0,_=0);let E=a.extractPoints(l),A=E.shape,C=E.holes;if(!wn.isClockWise(A)){A=A.reverse();for(let nt=0,at=C.length;nt<at;nt++){let ot=C[nt];wn.isClockWise(ot)&&(C[nt]=ot.reverse())}}function k(nt){let ot=10000000000000001e-36,vt=nt[0];for(let xt=1;xt<=nt.length;xt++){let kt=xt%nt.length,Pt=nt[kt],Wt=Pt.x-vt.x,Zt=Pt.y-vt.y,U=Wt*Wt+Zt*Zt,ue=Math.max(Math.abs(Pt.x),Math.abs(Pt.y),Math.abs(vt.x),Math.abs(vt.y)),ee=ot*ue*ue;if(U<=ee){nt.splice(kt,1),xt--;continue}vt=Pt}}k(A),C.forEach(k);let H=C.length,L=A;for(let nt=0;nt<H;nt++){let at=C[nt];A=A.concat(at)}function N(nt,at,ot){return at||Ht("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(at,ot)}let F=A.length;function q(nt,at,ot){let vt,xt,kt,Pt=nt.x-at.x,Wt=nt.y-at.y,Zt=ot.x-nt.x,U=ot.y-nt.y,ue=Pt*Pt+Wt*Wt,ee=Pt*U-Wt*Zt;if(Math.abs(ee)>Number.EPSILON){let P=Math.sqrt(ue),y=Math.sqrt(Zt*Zt+U*U),z=at.x-Wt/P,W=at.y+Pt/P,Z=ot.x-U/y,ht=ot.y+Zt/y,ut=((Z-z)*U-(ht-W)*Zt)/(Pt*U-Wt*Zt);vt=z+Pt*ut-nt.x,xt=W+Wt*ut-nt.y;let J=vt*vt+xt*xt;if(J<=2)return new lt(vt,xt);kt=Math.sqrt(J/2)}else{let P=!1;Pt>Number.EPSILON?Zt>Number.EPSILON&&(P=!0):Pt<-Number.EPSILON?Zt<-Number.EPSILON&&(P=!0):Math.sign(Wt)===Math.sign(U)&&(P=!0),P?(vt=-Wt,xt=Pt,kt=Math.sqrt(ue)):(vt=Pt,xt=Wt,kt=Math.sqrt(ue/2))}return new lt(vt/kt,xt/kt)}let K=[];for(let nt=0,at=L.length,ot=at-1,vt=nt+1;nt<at;nt++,ot++,vt++)ot===at&&(ot=0),vt===at&&(vt=0),K[nt]=q(L[nt],L[ot],L[vt]);let tt=[],st,ft=K.concat();for(let nt=0,at=H;nt<at;nt++){let ot=C[nt];st=[];for(let vt=0,xt=ot.length,kt=xt-1,Pt=vt+1;vt<xt;vt++,kt++,Pt++)kt===xt&&(kt=0),Pt===xt&&(Pt=0),st[vt]=q(ot[vt],ot[kt],ot[Pt]);tt.push(st),ft=ft.concat(st)}let qt;if(g===0)qt=wn.triangulateShape(L,C);else{let nt=[],at=[];for(let ot=0;ot<g;ot++){let vt=ot/g,xt=d*Math.cos(vt*Math.PI/2),kt=p*Math.sin(vt*Math.PI/2)+_;for(let Pt=0,Wt=L.length;Pt<Wt;Pt++){let Zt=N(L[Pt],K[Pt],kt);wt(Zt.x,Zt.y,-xt),vt===0&&nt.push(Zt)}for(let Pt=0,Wt=H;Pt<Wt;Pt++){let Zt=C[Pt];st=tt[Pt];let U=[];for(let ue=0,ee=Zt.length;ue<ee;ue++){let P=N(Zt[ue],st[ue],kt);wt(P.x,P.y,-xt),vt===0&&U.push(P)}vt===0&&at.push(U)}}qt=wn.triangulateShape(nt,at)}let ae=qt.length,jt=p+_;for(let nt=0;nt<F;nt++){let at=f?N(A[nt],ft[nt],jt):A[nt];M?(w.copy(R.normals[0]).multiplyScalar(at.x),b.copy(R.binormals[0]).multiplyScalar(at.y),x.copy(T[0]).add(w).add(b),wt(x.x,x.y,x.z)):wt(at.x,at.y,0)}for(let nt=1;nt<=h;nt++)for(let at=0;at<F;at++){let ot=f?N(A[at],ft[at],jt):A[at];M?(w.copy(R.normals[nt]).multiplyScalar(ot.x),b.copy(R.binormals[nt]).multiplyScalar(ot.y),x.copy(T[nt]).add(w).add(b),wt(x.x,x.y,x.z)):wt(ot.x,ot.y,u/h*nt)}for(let nt=g-1;nt>=0;nt--){let at=nt/g,ot=d*Math.cos(at*Math.PI/2),vt=p*Math.sin(at*Math.PI/2)+_;for(let xt=0,kt=L.length;xt<kt;xt++){let Pt=N(L[xt],K[xt],vt);wt(Pt.x,Pt.y,u+ot)}for(let xt=0,kt=C.length;xt<kt;xt++){let Pt=C[xt];st=tt[xt];for(let Wt=0,Zt=Pt.length;Wt<Zt;Wt++){let U=N(Pt[Wt],st[Wt],vt);M?wt(U.x,U.y+T[h-1].y,T[h-1].x+ot):wt(U.x,U.y,u+ot)}}}Y(),ct();function Y(){let nt=i.length/3;if(f){let at=0,ot=F*at;for(let vt=0;vt<ae;vt++){let xt=qt[vt];Vt(xt[2]+ot,xt[1]+ot,xt[0]+ot)}at=h+g*2,ot=F*at;for(let vt=0;vt<ae;vt++){let xt=qt[vt];Vt(xt[0]+ot,xt[1]+ot,xt[2]+ot)}}else{for(let at=0;at<ae;at++){let ot=qt[at];Vt(ot[2],ot[1],ot[0])}for(let at=0;at<ae;at++){let ot=qt[at];Vt(ot[0]+F*h,ot[1]+F*h,ot[2]+F*h)}}n.addGroup(nt,i.length/3-nt,0)}function ct(){let nt=i.length/3,at=0;rt(L,at),at+=L.length;for(let ot=0,vt=C.length;ot<vt;ot++){let xt=C[ot];rt(xt,at),at+=xt.length}n.addGroup(nt,i.length/3-nt,1)}function rt(nt,at){let ot=nt.length;for(;--ot>=0;){let vt=ot,xt=ot-1;xt<0&&(xt=nt.length-1);for(let kt=0,Pt=h+g*2;kt<Pt;kt++){let Wt=F*kt,Zt=F*(kt+1),U=at+vt+Wt,ue=at+xt+Wt,ee=at+xt+Zt,P=at+vt+Zt;Nt(U,ue,ee,P)}}}function wt(nt,at,ot){c.push(nt),c.push(at),c.push(ot)}function Vt(nt,at,ot){oe(nt),oe(at),oe(ot);let vt=i.length/3,xt=v.generateTopUV(n,i,vt-3,vt-2,vt-1);Xt(xt[0]),Xt(xt[1]),Xt(xt[2])}function Nt(nt,at,ot,vt){oe(nt),oe(at),oe(vt),oe(at),oe(ot),oe(vt);let xt=i.length/3,kt=v.generateSideWallUV(n,i,xt-6,xt-3,xt-2,xt-1);Xt(kt[0]),Xt(kt[1]),Xt(kt[3]),Xt(kt[1]),Xt(kt[2]),Xt(kt[3])}function oe(nt){i.push(c[nt*3+0]),i.push(c[nt*3+1]),i.push(c[nt*3+2])}function Xt(nt){o.push(nt.x),o.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ed(e,n,t)}static fromJSON(t,e){let n=[];for(let o=0,r=t.shapes.length;o<r;o++){let a=e[t.shapes[o]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new uo[i.type]().fromJSON(i)),new s(n,t.options)}},td={generateTopUV:function(s,t,e,n,i){let o=t[e*3],r=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new lt(o,r),new lt(a,c),new lt(l,h)]},generateSideWallUV:function(s,t,e,n,i,o){let r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],p=t[i*3+2],_=t[o*3],g=t[o*3+1],m=t[o*3+2];return Math.abs(a-h)<Math.abs(r-l)?[new lt(r,1-c),new lt(l,1-u),new lt(f,1-p),new lt(_,1-m)]:[new lt(a,1-c),new lt(h,1-u),new lt(d,1-p),new lt(g,1-m)]}};function ed(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let o=s[n];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var qs=class s extends le{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=te(i,0,Math.PI*2);let o=[],r=[],a=[],c=[],l=[],h=1/e,u=new I,f=new lt,d=new I,p=new I,_=new I,g=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,d.x=m*1,d.y=-g,d.z=m*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(p)}for(let v=0;v<=e;v++){let T=n+v*h*i,M=Math.sin(T),R=Math.cos(T);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*M,u.y=t[b].y,u.z=t[b].x*R,r.push(u.x,u.y,u.z),f.x=v/e,f.y=b/(t.length-1),a.push(f.x,f.y);let w=c[3*b+0]*M,x=c[3*b+1],E=c[3*b+0]*R;l.push(w,x,E)}}for(let v=0;v<e;v++)for(let T=0;T<t.length-1;T++){let M=T+v*t.length,R=M,b=M+t.length,w=M+t.length+1,x=M+1;o.push(R,b,x),o.push(w,x,b)}this.setIndex(o),this.setAttribute("position",new Gt(r,3)),this.setAttribute("uv",new Gt(a,2)),this.setAttribute("normal",new Gt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var He=class s extends le{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,d=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let v=m*f-r;for(let T=0;T<l;T++){let M=T*u-o;p.push(M,-v,0),_.push(0,0,1),g.push(T/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){let T=v+l*m,M=v+l*(m+1),R=v+1+l*(m+1),b=v+1+l*m;d.push(T,M,b),d.push(M,R,b)}this.setIndex(d),this.setAttribute("position",new Gt(p,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ys=class s extends le{constructor(t=new ln([new lt(0,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],o=[],r=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Gt(i,3)),this.setAttribute("normal",new Gt(o,3)),this.setAttribute("uv",new Gt(r,2));function l(h){let u=i.length/3,f=h.extractPoints(e),d=f.shape,p=f.holes;wn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){let v=p[g];wn.isClockWise(v)===!0&&(p[g]=v.reverse())}let _=wn.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){let v=p[g];d=d.concat(v)}for(let g=0,m=d.length;g<m;g++){let v=d[g];i.push(v.x,v.y,0),o.push(0,0,1),r.push(v.x,v.y)}for(let g=0,m=_.length;g<m;g++){let v=_[g],T=v[0]+u,M=v[1]+u,R=v[2]+u;n.push(T,M,R),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return nd(e,t)}static fromJSON(t,e){let n=[];for(let i=0,o=t.shapes.length;i<o;i++){let r=e[t.shapes[i]];n.push(r)}return new s(n,t.curveSegments)}};function nd(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var ne=class s extends le{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(r+a,Math.PI),l=0,h=[],u=new I,f=new I,d=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){let v=[],T=m/n,M=r+T*a,R=t*Math.cos(M),b=Math.sqrt(t*t-R*R),w=0;m===0&&r===0?w=.5/e:m===n&&c===Math.PI&&(w=-.5/e);for(let x=0;x<=e;x++){let E=x/e,A=i+E*o;u.x=-b*Math.cos(A),u.y=R,u.z=b*Math.sin(A),p.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(E+w,1-T),v.push(l++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){let T=h[m][v+1],M=h[m][v],R=h[m+1][v],b=h[m+1][v+1];(m!==0||r>0)&&d.push(T,M,b),(m!==n-1||c<Math.PI)&&d.push(M,R,b)}this.setIndex(d),this.setAttribute("position",new Gt(p,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ke=class s extends le{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2,r=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o,thetaStart:r,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],u=[],f=new I,d=new I,p=new I;for(let _=0;_<=n;_++){let g=r+_/n*a;for(let m=0;m<=i;m++){let v=m/i*o;d.x=(t+e*Math.cos(g))*Math.cos(v),d.y=(t+e*Math.cos(g))*Math.sin(v),d.z=e*Math.sin(g),l.push(d.x,d.y,d.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(m/i),u.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=i;g++){let m=(i+1)*_+g-1,v=(i+1)*(_-1)+g-1,T=(i+1)*(_-1)+g,M=(i+1)*_+g;c.push(m,v,M),c.push(v,T,M)}this.setIndex(c),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ti=class s extends le{constructor(t=new Si(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o};let r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let a=new I,c=new I,l=new lt,h=new I,u=[],f=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(d,2));function _(){for(let T=0;T<e;T++)g(T);g(o===!1?e:0),v(),m()}function g(T){h=t.getPointAt(T/e,h);let M=r.normals[T],R=r.binormals[T];for(let b=0;b<=i;b++){let w=b/i*Math.PI*2,x=Math.sin(w),E=-Math.cos(w);c.x=E*M.x+x*R.x,c.y=E*M.y+x*R.y,c.z=E*M.z+x*R.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function m(){for(let T=1;T<=e;T++)for(let M=1;M<=i;M++){let R=(i+1)*(T-1)+(M-1),b=(i+1)*T+(M-1),w=(i+1)*T+M,x=(i+1)*(T-1)+M;p.push(R,b,x),p.push(b,w,x)}}function v(){for(let T=0;T<=e;T++)for(let M=0;M<=i;M++)l.x=T/e,l.y=M/i,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new uo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ri(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(jl(i))i.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(jl(i[0])){let o=[];for(let r=0,a=i.length;r<a;r++)o[r]=i[r].clone();t[e][n]=o}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Ye(s){let t={};for(let e=0;e<s.length;e++){let n=Ri(s[e]);for(let i in n)t[i]=n[i]}return t}function jl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function id(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Hc(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var Wh={clone:Ri,merge:Ye},sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends Pn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sd,this.fragmentShader=rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ri(t.uniforms),this.uniformsGroups=id(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Ut().setHex(i.value);break;case"v2":this.uniforms[n].value=new lt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new I().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ve().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},po=class extends rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ft=class extends Pn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dr,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Zs=class extends Pn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ut(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dr,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var mo=class extends Pn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},go=class extends Pn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Vr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}var ri=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],o=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(n=2,o=a);for(let c=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=o,o=e[--n-1],t>=o)break t}r=n,n=0;break e}break n}for(;n<r;){let a=n+r>>>1;t<e[a]?r=a:n=a+1}if(i=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,i)}return this.interpolate_(n,o,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=t*i;for(let r=0;r!==i;++r)e[r]=n[o+r];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xo=class extends ri{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ac,endingEnd:ac}}intervalChanged_(t,e,n){let i=this.parameterPositions,o=t-2,r=t+1,a=i[o],c=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case cc:o=t,a=2*e-n;break;case lc:o=i.length-2,a=e+i[o]-i[o+1];break;default:o=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case cc:r=t,c=2*n-e;break;case lc:r=1,c=n+i[1]-i[0];break;default:r=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=o*h,this._offsetNext=r*h}interpolate_(t,e,n,i){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),_=p*p,g=_*p,m=-f*g+2*f*_-f*p,v=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*p+1,T=(-1-d)*g+(1.5+d)*_+.5*p,M=d*g-d*_;for(let R=0;R!==a;++R)o[R]=m*r[h+R]+v*r[l+R]+T*r[c+R]+M*r[u+R];return o}},_o=class extends ri{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)o[f]=r[l+f]*u+r[c+f]*h;return o}},yo=class extends ri{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},vo=class extends ri{interpolate_(t,e,n,i){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(i-e),_=1-p;for(let g=0;g!==a;++g)o[g]=r[l+g]*_+r[c+g]*p;return o}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let _=r[l+p],g=r[c+p],m=d*f+p*2,v=u[m],T=u[m+1],M=t*f+p*2,R=h[M],b=h[M+1],w=(n-e)/(i-e),x,E,A,C,D;for(let k=0;k<8;k++){x=w*w,E=x*w,A=1-w,C=A*A,D=C*A;let L=D*e+3*C*w*v+3*A*x*R+E*i-n;if(Math.abs(L)<1e-10)break;let N=3*C*(v-e)+6*A*w*(R-v)+3*x*(i-R);if(Math.abs(N)<1e-10)break;w=w-L/N,w=Math.max(0,Math.min(1,w))}o[p]=D*_+3*C*w*T+3*A*x*b+E*g}return o}},on=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vr(e,this.TimeBufferType),this.values=Vr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vr(t.times,Array),values:Vr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new vo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case bs:e=this.InterpolantFactoryMethodDiscrete;break;case io:e=this.InterpolantFactoryMethodLinear;break;case qr:e=this.InterpolantFactoryMethodSmooth;break;case oc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Bt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bs;case this.InterpolantFactoryMethodLinear:return io;case this.InterpolantFactoryMethodSmooth:return qr;case this.InterpolantFactoryMethodBezier:return oc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,o=0,r=i-1;for(;o!==i&&n[o]<t;)++o;for(;r!==-1&&n[r]>e;)--r;if(++r,o!==0||r!==i){o>=r&&(r=Math.max(r,1),o=r-1);let a=this.getValueSize();this.times=n.slice(o,r),this.values=this.values.slice(o*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,o=n.length;o===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==o;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ht("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(r!==null&&r>c){Ht("KeyframeTrack: Out of order keys.",this,a,c,r),t=!1;break}r=c}if(i!==void 0&&Zu(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){Ht("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===qr,o=t.length-1,r=1;for(let a=1;a<o;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let _=e[u+p];if(_!==e[f+p]||_!==e[d+p]){c=!0;break}}}if(c){if(a!==r){t[r]=t[a];let u=a*n,f=r*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++r}}if(o>0){t[r]=t[o];for(let a=o*n,c=r*n,l=0;l!==n;++l)e[c+l]=e[a+l];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};on.prototype.ValueTypeName="";on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=io;var oi=class extends on{constructor(t,e,n){super(t,e,n)}};oi.prototype.ValueTypeName="bool";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=bs;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Mo=class extends on{constructor(t,e,n,i){super(t,e,n,i)}};Mo.prototype.ValueTypeName="color";var bo=class extends on{constructor(t,e,n,i){super(t,e,n,i)}};bo.prototype.ValueTypeName="number";var So=class extends ri{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)Cn.slerpFlat(o,0,r,l-a,r,l,c);return o}},Js=class extends on{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new So(this.times,this.values,this.getValueSize(),t)}};Js.prototype.ValueTypeName="quaternion";Js.prototype.InterpolantFactoryMethodSmooth=void 0;var ai=class extends on{constructor(t,e,n){super(t,e,n)}};ai.prototype.ValueTypeName="string";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=bs;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends on{constructor(t,e,n,i){super(t,e,n,i)}};Eo.prototype.ValueTypeName="vector";var To=class{constructor(t,e,n){let i=this,o=!1,r=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,o===!1&&i.onStart!==void 0&&i.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xh=new To,wo=class{constructor(t){this.manager=t!==void 0?t:Xh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,o){n.load(t,i,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};wo.DEFAULT_MATERIAL_NAME="__DEFAULT";var is=class extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ks=class extends is{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},rc=new ve,Ql=new I,th=new I,gc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=$e,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qi,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ql.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ql),th.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(th),e.updateMatrixWorld(),rc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rc,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Yi||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Wr=new I,Xr=new Cn,Sn=new I,$s=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Wr,Xr,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wr,Xr,Sn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Wr,Xr,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wr,Xr,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qn=new I,eh=new lt,nh=new lt,Oe=class extends $s{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ji*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,eh,nh),e.subVectors(nh,eh)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_s*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ss=class extends $s{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,o=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},xc=class extends gc{constructor(){super(new ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},js=class extends is{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new xc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Qs=class extends is{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Vi=-90,Wi=1,Ao=class extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Oe(Vi,Wi,t,e);i.layers=this.layers,this.add(i);let o=new Oe(Vi,Wi,t,e);o.layers=this.layers,this.add(o);let r=new Oe(Vi,Wi,t,e);r.layers=this.layers,this.add(r);let a=new Oe(Vi,Wi,t,e);a.layers=this.layers,this.add(a);let c=new Oe(Vi,Wi,t,e);c.layers=this.layers,this.add(c);let l=new Oe(Vi,Wi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,c]=e;for(let l of e)this.remove(l);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Yi)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ro=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Gc="\\[\\]\\.:\\/",od=new RegExp("["+Gc+"]","g"),Vc="[^"+Gc+"]",ad="[^"+Gc.replace("\\.","")+"]",cd=/((?:WC+[\/:])*)/.source.replace("WC",Vc),ld=/(WCOD+)?/.source.replace("WCOD",ad),hd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vc),ud=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vc),fd=new RegExp("^"+cd+ld+hd+ud+"$"),dd=["material","materials","bones","map"],_c=class{constructor(t,e,n){let i=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,o=n.length;i!==o;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(od,"")}static parseTrackName(t){let e=fd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let o=n.nodeName.substring(i+1);dd.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(o){for(let r=0;r<o.length;r++){let a=o[r];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,o=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=o}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=_c;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Lx=new Float32Array(1);var tr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Bt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Jc=class Jc{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=i,this}};Jc.prototype.isMatrix2=!0;var yc=Jc;function Wc(s,t,e,n){let i=pd(n);switch(e){case Uc:return s*t;case or:return s*t/i.components*i.byteLength;case Fo:return s*t/i.components*i.byteLength;case ui:return s*t*2/i.components*i.byteLength;case Oo:return s*t*2/i.components*i.byteLength;case Fc:return s*t*3/i.components*i.byteLength;case hn:return s*t*4/i.components*i.byteLength;case Bo:return s*t*4/i.components*i.byteLength;case ar:case cr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case lr:case hr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zo:case Go:return Math.max(s,16)*Math.max(t,8)/4;case ko:case Ho:return Math.max(s,8)*Math.max(t,8)/2;case Vo:case Wo:case qo:case Yo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xo:case ur:case Zo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ko:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case $o:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case jo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ta:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ea:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case na:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ia:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case sa:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ra:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case oa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case aa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ca:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case la:case ha:case ua:return Math.ceil(s/4)*Math.ceil(t/4)*16;case fa:case da:return Math.ceil(s/4)*Math.ceil(t/4)*8;case fr:case pa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pd(s){switch(s){case $e:case Ic:return{byteLength:1,components:1};case os:case Lc:case Ln:return{byteLength:2,components:1};case No:case Uo:return{byteLength:2,components:4};case xn:case Do:case _n:return{byteLength:4,components:1};case Dc:case Nc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function pu(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function bd(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],_=u[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let _=u[d];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:o,update:r}}var Sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ed=`#ifdef USE_ALPHAHASH
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
#endif`,Td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ad=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cd=`#ifdef USE_AOMAP
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
#endif`,Pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Id=`#ifdef USE_BATCHING
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
#endif`,Ld=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ud=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fd=`#ifdef USE_IRIDESCENCE
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
#endif`,Od=`#ifdef USE_BUMPMAP
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
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qd=`#define PI 3.141592653589793
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
} // validated`,Yd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zd=`vec3 transformedNormal = objectNormal;
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
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ep=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hp=`#ifdef USE_GRADIENTMAP
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
}`,up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vp=`PhysicalMaterial material;
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
#endif`,Mp=`uniform sampler2D dfgLUT;
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
}`,bp=`
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
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ap=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dp=`#if defined( USE_POINTS_UV )
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
#endif`,Np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Up=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`#ifdef USE_MORPHTARGETS
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
#endif`,zp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qp=`#ifdef USE_NORMALMAP
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
#endif`,Yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cm=`float getShadowMask() {
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
}`,lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hm=`#ifdef USE_SKINNING
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
#endif`,um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fm=`#ifdef USE_SKINNING
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
#endif`,dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xm=`#ifdef USE_TRANSMISSION
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
#endif`,_m=`#ifdef USE_TRANSMISSION
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Em=`uniform sampler2D t2D;
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`#include <common>
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
}`,Pm=`#if DEPTH_PACKING == 3200
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
}`,Im=`#define DISTANCE
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
}`,Lm=`#define DISTANCE
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
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`uniform float scale;
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Om=`#include <common>
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
}`,Bm=`uniform vec3 diffuse;
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
}`,km=`#define LAMBERT
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
}`,zm=`#define LAMBERT
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
}`,Hm=`#define MATCAP
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
}`,Gm=`#define MATCAP
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
}`,Vm=`#define NORMAL
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
}`,Wm=`#define NORMAL
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
}`,Xm=`#define PHONG
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
}`,qm=`#define PHONG
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
}`,Ym=`#define STANDARD
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
}`,Zm=`#define STANDARD
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
}`,Jm=`#define TOON
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
}`,Km=`#define TOON
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
}`,$m=`uniform float size;
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
}`,jm=`uniform vec3 diffuse;
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
}`,Qm=`#include <common>
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
}`,t0=`uniform vec3 color;
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
}`,e0=`uniform float rotation;
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
}`,n0=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Sd,alphahash_pars_fragment:Ed,alphamap_fragment:Td,alphamap_pars_fragment:wd,alphatest_fragment:Ad,alphatest_pars_fragment:Rd,aomap_fragment:Cd,aomap_pars_fragment:Pd,batching_pars_vertex:Id,batching_vertex:Ld,begin_vertex:Dd,beginnormal_vertex:Nd,bsdfs:Ud,iridescence_fragment:Fd,bumpmap_pars_fragment:Od,clipping_planes_fragment:Bd,clipping_planes_pars_fragment:kd,clipping_planes_pars_vertex:zd,clipping_planes_vertex:Hd,color_fragment:Gd,color_pars_fragment:Vd,color_pars_vertex:Wd,color_vertex:Xd,common:qd,cube_uv_reflection_fragment:Yd,defaultnormal_vertex:Zd,displacementmap_pars_vertex:Jd,displacementmap_vertex:Kd,emissivemap_fragment:$d,emissivemap_pars_fragment:jd,colorspace_fragment:Qd,colorspace_pars_fragment:tp,envmap_fragment:ep,envmap_common_pars_fragment:np,envmap_pars_fragment:ip,envmap_pars_vertex:sp,envmap_physical_pars_fragment:mp,envmap_vertex:rp,fog_vertex:op,fog_pars_vertex:ap,fog_fragment:cp,fog_pars_fragment:lp,gradientmap_pars_fragment:hp,lightmap_pars_fragment:up,lights_lambert_fragment:fp,lights_lambert_pars_fragment:dp,lights_pars_begin:pp,lights_toon_fragment:gp,lights_toon_pars_fragment:xp,lights_phong_fragment:_p,lights_phong_pars_fragment:yp,lights_physical_fragment:vp,lights_physical_pars_fragment:Mp,lights_fragment_begin:bp,lights_fragment_maps:Sp,lights_fragment_end:Ep,lightprobes_pars_fragment:Tp,logdepthbuf_fragment:wp,logdepthbuf_pars_fragment:Ap,logdepthbuf_pars_vertex:Rp,logdepthbuf_vertex:Cp,map_fragment:Pp,map_pars_fragment:Ip,map_particle_fragment:Lp,map_particle_pars_fragment:Dp,metalnessmap_fragment:Np,metalnessmap_pars_fragment:Up,morphinstance_vertex:Fp,morphcolor_vertex:Op,morphnormal_vertex:Bp,morphtarget_pars_vertex:kp,morphtarget_vertex:zp,normal_fragment_begin:Hp,normal_fragment_maps:Gp,normal_pars_fragment:Vp,normal_pars_vertex:Wp,normal_vertex:Xp,normalmap_pars_fragment:qp,clearcoat_normal_fragment_begin:Yp,clearcoat_normal_fragment_maps:Zp,clearcoat_pars_fragment:Jp,iridescence_pars_fragment:Kp,opaque_fragment:$p,packing:jp,premultiplied_alpha_fragment:Qp,project_vertex:tm,dithering_fragment:em,dithering_pars_fragment:nm,roughnessmap_fragment:im,roughnessmap_pars_fragment:sm,shadowmap_pars_fragment:rm,shadowmap_pars_vertex:om,shadowmap_vertex:am,shadowmask_pars_fragment:cm,skinbase_vertex:lm,skinning_pars_vertex:hm,skinning_vertex:um,skinnormal_vertex:fm,specularmap_fragment:dm,specularmap_pars_fragment:pm,tonemapping_fragment:mm,tonemapping_pars_fragment:gm,transmission_fragment:xm,transmission_pars_fragment:_m,uv_pars_fragment:ym,uv_pars_vertex:vm,uv_vertex:Mm,worldpos_vertex:bm,background_vert:Sm,background_frag:Em,backgroundCube_vert:Tm,backgroundCube_frag:wm,cube_vert:Am,cube_frag:Rm,depth_vert:Cm,depth_frag:Pm,distance_vert:Im,distance_frag:Lm,equirect_vert:Dm,equirect_frag:Nm,linedashed_vert:Um,linedashed_frag:Fm,meshbasic_vert:Om,meshbasic_frag:Bm,meshlambert_vert:km,meshlambert_frag:zm,meshmatcap_vert:Hm,meshmatcap_frag:Gm,meshnormal_vert:Vm,meshnormal_frag:Wm,meshphong_vert:Xm,meshphong_frag:qm,meshphysical_vert:Ym,meshphysical_frag:Zm,meshtoon_vert:Jm,meshtoon_frag:Km,points_vert:$m,points_frag:jm,shadow_vert:Qm,shadow_frag:t0,sprite_vert:e0,sprite_frag:n0},yt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Nn={basic:{uniforms:Ye([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ye([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ye([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ye([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ye([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ye([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ye([yt.points,yt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ye([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ye([yt.common,yt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ye([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ye([yt.sprite,yt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:Ye([yt.common,yt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:Ye([yt.lights,yt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Nn.physical={uniforms:Ye([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var xa={r:0,b:0,g:0},i0=new ve,mu=new Yt;mu.set(-1,0,0,0,1,0,0,0,1);function s0(s,t,e,n,i,o){let r=new Ut(0),a=i===!0?0:1,c,l,h=null,u=0,f=null;function d(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let M=v.backgroundBlurriness>0;T=t.get(T,M)}return T}function p(v){let T=!1,M=d(v);M===null?g(r,a):M&&M.isColor&&(g(M,1),T=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(s.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(v,T){let M=d(T);M&&(M.isCubeTexture||M.mapping===sr)?(l===void 0&&(l=new et(new de(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Ri(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(i0.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(mu),l.material.toneMapped=ie.getTransfer(M.colorSpace)!==ce,(h!==M||u!==M.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new et(new He(2,2),new rn({name:"BackgroundMaterial",uniforms:Ri(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ie.getTransfer(M.colorSpace)!==ce,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function g(v,T){v.getRGB(xa,Hc(s)),e.buffers.color.setClear(xa.r,xa.g,xa.b,T,o)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,T=1){r.set(v),a=T,g(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(r,a)},render:p,addToRenderList:_,dispose:m}}function r0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),o=i,r=!1;function a(C,D,k,H,L){let N=!1,F=u(C,H,k,D);o!==F&&(o=F,l(o.object)),N=d(C,H,k,L),N&&p(C,H,k,L),L!==null&&t.update(L,s.ELEMENT_ARRAY_BUFFER),(N||r)&&(r=!1,M(C,D,k,H),L!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return s.createVertexArray()}function l(C){return s.bindVertexArray(C)}function h(C){return s.deleteVertexArray(C)}function u(C,D,k,H){let L=H.wireframe===!0,N=n[D.id];N===void 0&&(N={},n[D.id]=N);let F=C.isInstancedMesh===!0?C.id:0,q=N[F];q===void 0&&(q={},N[F]=q);let K=q[k.id];K===void 0&&(K={},q[k.id]=K);let tt=K[L];return tt===void 0&&(tt=f(c()),K[L]=tt),tt}function f(C){let D=[],k=[],H=[];for(let L=0;L<e;L++)D[L]=0,k[L]=0,H[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:H,object:C,attributes:{},index:null}}function d(C,D,k,H){let L=o.attributes,N=D.attributes,F=0,q=k.getAttributes();for(let K in q)if(q[K].location>=0){let st=L[K],ft=N[K];if(ft===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(ft=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(ft=C.instanceColor)),st===void 0||st.attribute!==ft||ft&&st.data!==ft.data)return!0;F++}return o.attributesNum!==F||o.index!==H}function p(C,D,k,H){let L={},N=D.attributes,F=0,q=k.getAttributes();for(let K in q)if(q[K].location>=0){let st=N[K];st===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(st=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(st=C.instanceColor));let ft={};ft.attribute=st,st&&st.data&&(ft.data=st.data),L[K]=ft,F++}o.attributes=L,o.attributesNum=F,o.index=H}function _(){let C=o.newAttributes;for(let D=0,k=C.length;D<k;D++)C[D]=0}function g(C){m(C,0)}function m(C,D){let k=o.newAttributes,H=o.enabledAttributes,L=o.attributeDivisors;k[C]=1,H[C]===0&&(s.enableVertexAttribArray(C),H[C]=1),L[C]!==D&&(s.vertexAttribDivisor(C,D),L[C]=D)}function v(){let C=o.newAttributes,D=o.enabledAttributes;for(let k=0,H=D.length;k<H;k++)D[k]!==C[k]&&(s.disableVertexAttribArray(k),D[k]=0)}function T(C,D,k,H,L,N,F){F===!0?s.vertexAttribIPointer(C,D,k,L,N):s.vertexAttribPointer(C,D,k,H,L,N)}function M(C,D,k,H){_();let L=H.attributes,N=k.getAttributes(),F=D.defaultAttributeValues;for(let q in N){let K=N[q];if(K.location>=0){let tt=L[q];if(tt===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor)),tt!==void 0){let st=tt.normalized,ft=tt.itemSize,qt=t.get(tt);if(qt===void 0)continue;let ae=qt.buffer,jt=qt.type,Y=qt.bytesPerElement,ct=jt===s.INT||jt===s.UNSIGNED_INT||tt.gpuType===Do;if(tt.isInterleavedBufferAttribute){let rt=tt.data,wt=rt.stride,Vt=tt.offset;if(rt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<K.locationSize;Nt++)m(K.location+Nt,rt.meshPerAttribute);C.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Nt=0;Nt<K.locationSize;Nt++)g(K.location+Nt);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let Nt=0;Nt<K.locationSize;Nt++)T(K.location+Nt,ft/K.locationSize,jt,st,wt*Y,(Vt+ft/K.locationSize*Nt)*Y,ct)}else{if(tt.isInstancedBufferAttribute){for(let rt=0;rt<K.locationSize;rt++)m(K.location+rt,tt.meshPerAttribute);C.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let rt=0;rt<K.locationSize;rt++)g(K.location+rt);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let rt=0;rt<K.locationSize;rt++)T(K.location+rt,ft/K.locationSize,jt,st,ft*Y,ft/K.locationSize*rt*Y,ct)}}else if(F!==void 0){let st=F[q];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(K.location,st);break;case 3:s.vertexAttrib3fv(K.location,st);break;case 4:s.vertexAttrib4fv(K.location,st);break;default:s.vertexAttrib1fv(K.location,st)}}}}v()}function R(){E();for(let C in n){let D=n[C];for(let k in D){let H=D[k];for(let L in H){let N=H[L];for(let F in N)h(N[F].object),delete N[F];delete H[L]}}delete n[C]}}function b(C){if(n[C.id]===void 0)return;let D=n[C.id];for(let k in D){let H=D[k];for(let L in H){let N=H[L];for(let F in N)h(N[F].object),delete N[F];delete H[L]}}delete n[C.id]}function w(C){for(let D in n){let k=n[D];for(let H in k){let L=k[H];if(L[C.id]===void 0)continue;let N=L[C.id];for(let F in N)h(N[F].object),delete N[F];delete L[C.id]}}}function x(C){for(let D in n){let k=n[D],H=C.isInstancedMesh===!0?C.id:0,L=k[H];if(L!==void 0){for(let N in L){let F=L[N];for(let q in F)h(F[q].object),delete F[q];delete L[N]}delete k[H],Object.keys(k).length===0&&delete n[D]}}}function E(){A(),r=!0,o!==i&&(o=i,l(o.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:A,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function o0(s,t,e){let n;function i(c){n=c}function o(c,l){s.drawArrays(n,c,l),e.update(l,n,1)}function r(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];e.update(f,n,1)}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a}function a0(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(w){return!(w!==hn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let x=w===Ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==$e&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==_n&&!x)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Bt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:M,maxSamples:R,samples:b}}function c0(s){let t=this,e=null,n=0,i=!1,o=!1,r=new En,a=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||o&&!g)o?h(null):l();else{let v=o?0:n,T=v*4,M=m.clippingState||null;c.value=M,M=h(p,f,T,d);for(let R=0;R!==T;++R)M[R]=e[R];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=c.value,p!==!0||g===null){let m=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,M=d;T!==_;++T,M+=4)r.copy(u[T]).applyMatrix4(v,a),r.normal.toArray(g,M),g[M+3]=r.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var fi=4,qh=[.125,.215,.35,.446,.526,.582],Ci=20,l0=256,pr=new ss,Yh=new Ut,Kc=null,$c=0,jc=0,Qc=!1,h0=new I,ya=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,o={}){let{size:r=256,position:a=h0}=o;Kc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Kc,$c,jc),this._renderer.xr.enabled=Qc,t.scissorTest=!1,cs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ci||t.mapping===wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Ln,format:hn,colorSpace:Ss,depthBuffer:!1},i=Zh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zh(t,e,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=u0(o)),this._blurMaterial=d0(o,t,e),this._ggxMaterial=f0(o,t,e)}return i}_compileMaterial(t){let e=new et(new le,t);this._renderer.compile(e,pr)}_sceneToCubeUV(t,e,n,i,o){let c=new Oe(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Yh),u.toneMapping=gn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new et(new de,new Ce({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,m=!1,v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,m=!0):(g.color.copy(Yh),m=!0);for(let T=0;T<6;T++){let M=T%3;M===0?(c.up.set(0,l[T],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+h[T],o.y,o.z)):M===1?(c.up.set(0,0,l[T]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+h[T],o.z)):(c.up.set(0,l[T],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+h[T]));let R=this._cubeSize;cs(i,M*R,T>2?R:0,R,R),u.setRenderTarget(i),m&&u.render(_,c),u.render(t,c)}u.toneMapping=d,u.autoClear=f,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ci||t.mapping===wi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jh());let o=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=o;let a=o.uniforms;a.envMap.value=t;let c=this._cubeSize;cs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,pr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let o=1;o<i;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,o=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;let c=r.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=0+l*1.25,d=u*f,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-fi?n-p+fi:0),m=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=p-e,cs(o,g,m,3*_,2*_),i.setRenderTarget(o),i.render(a,pr),c.envMap.value=o.texture,c.roughness.value=0,c.mipInt.value=p-n,cs(t,g,m,3*_,2*_),i.setRenderTarget(t),i.render(a,pr)}_blur(t,e,n,i,o){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){let c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Ht("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[i];u.material=l;let f=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*Ci-1),_=o/p,g=isFinite(o)?1+Math.floor(h*_):Ci;g>Ci&&Bt(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ci}`);let m=[],v=0;for(let w=0;w<Ci;++w){let x=w/_,E=Math.exp(-x*x/2);m.push(E),w===0?v+=E:w<g&&(v+=2*E)}for(let w=0;w<m.length;w++)m[w]=m[w]/v;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:T}=this;f.dTheta.value=p,f.mipInt.value=T-n;let M=this._sizeLods[i],R=3*M*(i>T-fi?i-T+fi:0),b=4*(this._cubeSize-M);cs(e,R,b,3*M,2*M),c.setRenderTarget(e),c.render(u,pr)}};function u0(s){let t=[],e=[],n=[],i=s,o=s-fi+1+qh.length;for(let r=0;r<o;r++){let a=Math.pow(2,i);t.push(a);let c=1/a;r>s-fi?c=qh[r-s+fi-1]:r===0&&(c=0),e.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,_=3,g=2,m=1,v=new Float32Array(_*p*d),T=new Float32Array(g*p*d),M=new Float32Array(m*p*d);for(let b=0;b<d;b++){let w=b%3*2/3-1,x=b>2?0:-1,E=[w,x,0,w+2/3,x,0,w+2/3,x+1,0,w,x,0,w+2/3,x+1,0,w,x+1,0];v.set(E,_*p*b),T.set(f,g*p*b);let A=[b,b,b,b,b,b];M.set(A,m*p*b)}let R=new le;R.setAttribute("position",new De(v,_)),R.setAttribute("uv",new De(T,g)),R.setAttribute("faceIndex",new De(M,m)),n.push(new et(R,null)),i>fi&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Zh(s,t,e){let n=new nn(s,t,e);return n.texture.mapping=sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function f0(s,t,e){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:l0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ba(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function d0(s,t,e){let n=new Float32Array(Ci),i=new I(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ba(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Jh(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ba(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Kh(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function ba(){return`

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
	`}var va=class extends nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ns(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new de(5,5,5),o=new rn({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:In});o.uniforms.tEquirect.value=e;let r=new et(i,o),a=e.minFilter;return e.minFilter===li&&(e.minFilter=ke),new Ao(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}};function p0(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?r(f):o(f)}function o(f){if(f&&f.isTexture){let d=f.mapping;if(d===Po||d===Io)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let _=new va(p.height);return _.fromEquirectangularTexture(s,f),t.set(f,_),f.addEventListener("dispose",l),a(_.texture,f.mapping)}else return null}}return f}function r(f){if(f&&f.isTexture){let d=f.mapping,p=d===Po||d===Io,_=d===ci||d===wi;if(p||_){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new ya(s)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let v=f.image;return p&&v&&v.height>0||_&&v&&c(v)?(n===null&&(n=new ya(s)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===Po?f.mapping=ci:d===Io&&(f.mapping=wi),f}function c(f){let d=0,p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function l(f){let d=f.target;d.removeEventListener("dispose",l);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function m0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&yi("WebGLRenderer: "+n+" extension not supported."),i}}}function g0(s,t,e,n){let i={},o=new WeakMap;function r(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",r),delete i[f.id];let d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)t.update(f[d],s.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,p=u.attributes.position,_=0;if(p===void 0)return;if(d!==null){let v=d.array;_=d.version;for(let T=0,M=v.length;T<M;T+=3){let R=v[T+0],b=v[T+1],w=v[T+2];f.push(R,b,b,w,w,R)}}else{let v=p.array;_=p.version;for(let T=0,M=v.length/3-1;T<M;T+=3){let R=T+0,b=T+1,w=T+2;f.push(R,b,b,w,w,R)}}let g=new(p.count>=65535?Is:Ps)(f,1);g.version=_;let m=o.get(u);m&&t.remove(m),o.set(u,g)}function h(u){let f=o.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function x0(s,t,e){let n;function i(u){n=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function c(u,f){s.drawElements(n,f,o,u*r),e.update(f,n,1)}function l(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,o,u*r,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,u,0,d);let _=0;for(let g=0;g<d;g++)_+=f[g];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function _0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:Ht("WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function y0(s,t,e){let n=new WeakMap,i=new Me;function o(r,a,c){let l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let E=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],T=0;d===!0&&(T=1),p===!0&&(T=2),_===!0&&(T=3);let M=a.attributes.position.count*T,R=1;M>t.maxTextureSize&&(R=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let b=new Float32Array(M*R*4*u),w=new ws(b,M,R,u);w.type=_n,w.needsUpdate=!0;let x=T*4;for(let A=0;A<u;A++){let C=g[A],D=m[A],k=v[A],H=M*R*4*A;for(let L=0;L<C.count;L++){let N=L*x;d===!0&&(i.fromBufferAttribute(C,L),b[H+N+0]=i.x,b[H+N+1]=i.y,b[H+N+2]=i.z,b[H+N+3]=0),p===!0&&(i.fromBufferAttribute(D,L),b[H+N+4]=i.x,b[H+N+5]=i.y,b[H+N+6]=i.z,b[H+N+7]=0),_===!0&&(i.fromBufferAttribute(k,L),b[H+N+8]=i.x,b[H+N+9]=i.y,b[H+N+10]=i.z,b[H+N+11]=k.itemSize===4?i.w:1)}}f={count:u,texture:w,size:new lt(M,R)},n.set(a,f),a.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let p=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:o}}function v0(s,t,e,n,i){let o=new WeakMap;function r(l){let h=i.render.frame,u=l.geometry,f=t.get(l,u);if(o.get(f)!==h&&(t.update(f),o.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),o.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),o.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;o.get(d)!==h&&(d.update(),o.set(d,h))}return f}function a(){o=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}var M0={[Ec]:"LINEAR_TONE_MAPPING",[Tc]:"REINHARD_TONE_MAPPING",[wc]:"CINEON_TONE_MAPPING",[ir]:"ACES_FILMIC_TONE_MAPPING",[Rc]:"AGX_TONE_MAPPING",[Cc]:"NEUTRAL_TONE_MAPPING",[Ac]:"CUSTOM_TONE_MAPPING"};function b0(s,t,e,n,i,o){let r=new nn(t,e,{type:s,depthBuffer:i,stencilBuffer:o,samples:n?4:0,depthTexture:i?new Vn(t,e):void 0}),a=new nn(t,e,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),c=new le;c.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Gt([0,2,0,0,2,0],2));let l=new po({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new et(c,l),u=new ss(-1,1,1,-1,0,1),f=null,d=null,p=!1,_,g=null,m=[],v=!1;this.setSize=function(T,M){r.setSize(T,M),a.setSize(T,M);for(let R=0;R<m.length;R++){let b=m[R];b.setSize&&b.setSize(T,M)}},this.setEffects=function(T){m=T,v=m.length>0&&m[0].isRenderPass===!0;let M=r.width,R=r.height;for(let b=0;b<m.length;b++){let w=m[b];w.setSize&&w.setSize(M,R)}},this.begin=function(T,M){if(p||T.toneMapping===gn&&m.length===0)return!1;if(g=M,M!==null){let R=M.width,b=M.height;(r.width!==R||r.height!==b)&&this.setSize(R,b)}return v===!1&&T.setRenderTarget(r),_=T.toneMapping,T.toneMapping=gn,!0},this.hasRenderPass=function(){return v},this.end=function(T,M){T.toneMapping=_,p=!0;let R=r,b=a;for(let w=0;w<m.length;w++){let x=m[w];if(x.enabled!==!1&&(x.render(T,b,R,M),x.needsSwap!==!1)){let E=R;R=b,b=E}}if(f!==T.outputColorSpace||d!==T.toneMapping){f=T.outputColorSpace,d=T.toneMapping,l.defines={},ie.getTransfer(f)===ce&&(l.defines.SRGB_TRANSFER="");let w=M0[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=R.texture,T.setRenderTarget(g),T.render(h,u),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),c.dispose(),l.dispose()}}var gu=new Je,nl=new Vn(1,1),xu=new ws,_u=new oo,yu=new Ns,$h=[],jh=[],Qh=new Float32Array(16),tu=new Float32Array(9),eu=new Float32Array(4);function hs(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,o=$h[i];if(o===void 0&&(o=new Float32Array(i),$h[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function Ne(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ue(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Sa(s,t){let e=jh[t];e===void 0&&(e=new Int32Array(t),jh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function S0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function E0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;s.uniform2fv(this.addr,t),Ue(e,t)}}function T0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;s.uniform3fv(this.addr,t),Ue(e,t)}}function w0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;s.uniform4fv(this.addr,t),Ue(e,t)}}function A0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;eu.set(n),s.uniformMatrix2fv(this.addr,!1,eu),Ue(e,n)}}function R0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;tu.set(n),s.uniformMatrix3fv(this.addr,!1,tu),Ue(e,n)}}function C0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Qh.set(n),s.uniformMatrix4fv(this.addr,!1,Qh),Ue(e,n)}}function P0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function I0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;s.uniform2iv(this.addr,t),Ue(e,t)}}function L0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;s.uniform3iv(this.addr,t),Ue(e,t)}}function D0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;s.uniform4iv(this.addr,t),Ue(e,t)}}function N0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function U0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;s.uniform2uiv(this.addr,t),Ue(e,t)}}function F0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;s.uniform3uiv(this.addr,t),Ue(e,t)}}function O0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;s.uniform4uiv(this.addr,t),Ue(e,t)}}function B0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(nl.compareFunction=e.isReversedDepthBuffer()?ga:ma,o=nl):o=gu,e.setTexture2D(t||o,i)}function k0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||_u,i)}function z0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||yu,i)}function H0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||xu,i)}function G0(s){switch(s){case 5126:return S0;case 35664:return E0;case 35665:return T0;case 35666:return w0;case 35674:return A0;case 35675:return R0;case 35676:return C0;case 5124:case 35670:return P0;case 35667:case 35671:return I0;case 35668:case 35672:return L0;case 35669:case 35673:return D0;case 5125:return N0;case 36294:return U0;case 36295:return F0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return B0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return H0}}function V0(s,t){s.uniform1fv(this.addr,t)}function W0(s,t){let e=hs(t,this.size,2);s.uniform2fv(this.addr,e)}function X0(s,t){let e=hs(t,this.size,3);s.uniform3fv(this.addr,e)}function q0(s,t){let e=hs(t,this.size,4);s.uniform4fv(this.addr,e)}function Y0(s,t){let e=hs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Z0(s,t){let e=hs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function J0(s,t){let e=hs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function K0(s,t){s.uniform1iv(this.addr,t)}function $0(s,t){s.uniform2iv(this.addr,t)}function j0(s,t){s.uniform3iv(this.addr,t)}function Q0(s,t){s.uniform4iv(this.addr,t)}function tg(s,t){s.uniform1uiv(this.addr,t)}function eg(s,t){s.uniform2uiv(this.addr,t)}function ng(s,t){s.uniform3uiv(this.addr,t)}function ig(s,t){s.uniform4uiv(this.addr,t)}function sg(s,t,e){let n=this.cache,i=t.length,o=Sa(e,i);Ne(n,o)||(s.uniform1iv(this.addr,o),Ue(n,o));let r;this.type===s.SAMPLER_2D_SHADOW?r=nl:r=gu;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||r,o[a])}function rg(s,t,e){let n=this.cache,i=t.length,o=Sa(e,i);Ne(n,o)||(s.uniform1iv(this.addr,o),Ue(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||_u,o[r])}function og(s,t,e){let n=this.cache,i=t.length,o=Sa(e,i);Ne(n,o)||(s.uniform1iv(this.addr,o),Ue(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||yu,o[r])}function ag(s,t,e){let n=this.cache,i=t.length,o=Sa(e,i);Ne(n,o)||(s.uniform1iv(this.addr,o),Ue(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||xu,o[r])}function cg(s){switch(s){case 5126:return V0;case 35664:return W0;case 35665:return X0;case 35666:return q0;case 35674:return Y0;case 35675:return Z0;case 35676:return J0;case 5124:case 35670:return K0;case 35667:case 35671:return $0;case 35668:case 35672:return j0;case 35669:case 35673:return Q0;case 5125:return tg;case 36294:return eg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return ag}}var il=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=G0(e.type)}},sl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cg(e.type)}},rl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let o=0,r=i.length;o!==r;++o){let a=i[o];a.setValue(t,e[a.id],n)}}},tl=/(\w+)(\])?(\[|\.)?/g;function nu(s,t){s.seq.push(t),s.map[t.id]=t}function lg(s,t,e){let n=s.name,i=n.length;for(tl.lastIndex=0;;){let o=tl.exec(n),r=tl.lastIndex,a=o[1],c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){nu(e,l===void 0?new il(a,s,t):new sl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new rl(a),nu(e,u)),e=u}}}var ls=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),c=t.getUniformLocation(e,a.name);lg(a,c,this)}let i=[],o=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(r):o.push(r);i.length>0&&(this.seq=i.concat(o))}setValue(t,e,n,i){let o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){let a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,o=t.length;i!==o;++i){let r=t[i];r.id in e&&n.push(r)}return n}};function iu(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var hg=37297,ug=0;function fg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){let a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}var su=new Yt;function dg(s){ie._getMatrix(su,ie.workingColorSpace,s);let t=`mat3( ${su.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(s)){case Es:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ru(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),o=(s.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";let r=/ERROR: 0:(\d+)/.exec(o);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+o+`

`+fg(s.getShaderSource(t),a)}else return o}function pg(s,t){let e=dg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var mg={[Ec]:"Linear",[Tc]:"Reinhard",[wc]:"Cineon",[ir]:"ACESFilmic",[Rc]:"AgX",[Cc]:"Neutral",[Ac]:"Custom"};function gg(s,t){let e=mg[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _a=new I;function xg(){ie.getLuminanceCoefficients(_a);let s=_a.x.toFixed(4),t=_a.y.toFixed(4),e=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _g(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function yg(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let o=s.getActiveAttrib(t,i),r=o.name,a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function gr(s){return s!==""}function ou(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function au(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Mg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(s){return s.replace(Mg,Sg)}var bg=new Map;function Sg(s,t){let e=$t[t];if(e===void 0){let n=bg.get(t);if(n!==void 0)e=$t[n],Bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ol(e)}var Eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cu(s){return s.replace(Eg,Tg)}function Tg(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function lu(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var wg={[er]:"SHADOWMAP_TYPE_PCF",[rs]:"SHADOWMAP_TYPE_VSM"};function Ag(s){return wg[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Rg={[ci]:"ENVMAP_TYPE_CUBE",[wi]:"ENVMAP_TYPE_CUBE",[sr]:"ENVMAP_TYPE_CUBE_UV"};function Cg(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Rg[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Pg={[wi]:"ENVMAP_MODE_REFRACTION"};function Ig(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Pg[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Lg={[Sc]:"ENVMAP_BLENDING_MULTIPLY",[Eh]:"ENVMAP_BLENDING_MIX",[Th]:"ENVMAP_BLENDING_ADD"};function Dg(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Lg[s.combine]||"ENVMAP_BLENDING_NONE"}function Ng(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ug(s,t,e,n){let i=s.getContext(),o=e.defines,r=e.vertexShader,a=e.fragmentShader,c=Ag(e),l=Cg(e),h=Ig(e),u=Dg(e),f=Ng(e),d=_g(e),p=yg(o),_=i.createProgram(),g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(gr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(gr).join(`
`),m.length>0&&(m+=`
`)):(g=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),m=[lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gn?"#define TONE_MAPPING":"",e.toneMapping!==gn?$t.tonemapping_pars_fragment:"",e.toneMapping!==gn?gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,pg("linearToOutputTexel",e.outputColorSpace),xg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gr).join(`
`)),r=ol(r),r=ou(r,e),r=au(r,e),a=ol(a),a=ou(a,e),a=au(a,e),r=cu(r),a=cu(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let T=v+g+r,M=v+m+a,R=iu(i,i.VERTEX_SHADER,T),b=iu(i,i.FRAGMENT_SHADER,M);i.attachShader(_,R),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(C){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(_)||"",k=i.getShaderInfoLog(R)||"",H=i.getShaderInfoLog(b)||"",L=D.trim(),N=k.trim(),F=H.trim(),q=!0,K=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,b);else{let tt=ru(i,R,"vertex"),st=ru(i,b,"fragment");Ht("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+tt+`
`+st)}else L!==""?Bt("WebGLProgram: Program Info Log:",L):(N===""||F==="")&&(K=!1);K&&(C.diagnostics={runnable:q,programLog:L,vertexShader:{log:N,prefix:g},fragmentShader:{log:F,prefix:m}})}i.deleteShader(R),i.deleteShader(b),x=new ls(i,_),E=vg(i,_)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(_,hg)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ug++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=b,this}var Fg=0,al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new cl(t),e.set(t,n)),n}},cl=class{constructor(t){this.id=Fg++,this.code=t,this.usedTimes=0}};function Og(s){return s===ui||s===ur||s===fr}function Bg(s,t,e,n,i,o){let r=new As,a=new al,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,E,A,C,D,k){let H=C.fog,L=D.geometry,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,q=t.get(x.envMap||N,F),K=q&&q.mapping===sr?q.image.height:null,tt=d[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&Bt("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let st=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ft=st!==void 0?st.length:0,qt=0;L.morphAttributes.position!==void 0&&(qt=1),L.morphAttributes.normal!==void 0&&(qt=2),L.morphAttributes.color!==void 0&&(qt=3);let ae,jt,Y,ct;if(tt){let At=Nn[tt];ae=At.vertexShader,jt=At.fragmentShader}else{ae=x.vertexShader,jt=x.fragmentShader;let At=a.getVertexShaderStage(x),Se=a.getFragmentShaderStage(x);a.update(x,At,Se),Y=At.id,ct=Se.id}let rt=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),Vt=D.isInstancedMesh===!0,Nt=D.isBatchedMesh===!0,oe=!!x.map,Xt=!!x.matcap,nt=!!q,at=!!x.aoMap,ot=!!x.lightMap,vt=!!x.bumpMap&&x.wireframe===!1,xt=!!x.normalMap,kt=!!x.displacementMap,Pt=!!x.emissiveMap,Wt=!!x.metalnessMap,Zt=!!x.roughnessMap,U=x.anisotropy>0,ue=x.clearcoat>0,ee=x.dispersion>0,P=x.iridescence>0,y=x.sheen>0,z=x.transmission>0,W=U&&!!x.anisotropyMap,Z=ue&&!!x.clearcoatMap,ht=ue&&!!x.clearcoatNormalMap,ut=ue&&!!x.clearcoatRoughnessMap,J=P&&!!x.iridescenceMap,Q=P&&!!x.iridescenceThicknessMap,pt=y&&!!x.sheenColorMap,It=y&&!!x.sheenRoughnessMap,_t=!!x.specularMap,mt=!!x.specularColorMap,Ot=!!x.specularIntensityMap,zt=z&&!!x.transmissionMap,Jt=z&&!!x.thicknessMap,O=!!x.gradientMap,dt=!!x.alphaMap,j=x.alphaTest>0,gt=!!x.alphaHash,St=!!x.extensions,it=gn;x.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(it=s.toneMapping);let Ct={shaderID:tt,shaderType:x.type,shaderName:x.name,vertexShader:ae,fragmentShader:jt,defines:x.defines,customVertexShaderID:Y,customFragmentShaderID:ct,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Nt,batchingColor:Nt&&D._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&D.instanceColor!==null,instancingMorph:Vt&&D.morphTexture!==null,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:oe,matcap:Xt,envMap:nt,envMapMode:nt&&q.mapping,envMapCubeUVHeight:K,aoMap:at,lightMap:ot,bumpMap:vt,normalMap:xt,displacementMap:kt,emissiveMap:Pt,normalMapObjectSpace:xt&&x.normalMapType===Rh,normalMapTangentSpace:xt&&x.normalMapType===dr,packedNormalMap:xt&&x.normalMapType===dr&&Og(x.normalMap.format),metalnessMap:Wt,roughnessMap:Zt,anisotropy:U,anisotropyMap:W,clearcoat:ue,clearcoatMap:Z,clearcoatNormalMap:ht,clearcoatRoughnessMap:ut,dispersion:ee,iridescence:P,iridescenceMap:J,iridescenceThicknessMap:Q,sheen:y,sheenColorMap:pt,sheenRoughnessMap:It,specularMap:_t,specularColorMap:mt,specularIntensityMap:Ot,transmission:z,transmissionMap:zt,thicknessMap:Jt,gradientMap:O,opaque:x.transparent===!1&&x.blending===vi&&x.alphaToCoverage===!1,alphaMap:dt,alphaTest:j,alphaHash:gt,combine:x.combine,mapUv:oe&&p(x.map.channel),aoMapUv:at&&p(x.aoMap.channel),lightMapUv:ot&&p(x.lightMap.channel),bumpMapUv:vt&&p(x.bumpMap.channel),normalMapUv:xt&&p(x.normalMap.channel),displacementMapUv:kt&&p(x.displacementMap.channel),emissiveMapUv:Pt&&p(x.emissiveMap.channel),metalnessMapUv:Wt&&p(x.metalnessMap.channel),roughnessMapUv:Zt&&p(x.roughnessMap.channel),anisotropyMapUv:W&&p(x.anisotropyMap.channel),clearcoatMapUv:Z&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ht&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:It&&p(x.sheenRoughnessMap.channel),specularMapUv:_t&&p(x.specularMap.channel),specularColorMapUv:mt&&p(x.specularColorMap.channel),specularIntensityMapUv:Ot&&p(x.specularIntensityMap.channel),transmissionMapUv:zt&&p(x.transmissionMap.channel),thicknessMapUv:Jt&&p(x.thicknessMap.channel),alphaMapUv:dt&&p(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(xt||U),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(oe||dt),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&xt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:wt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:qt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:oe&&x.map.isVideoTexture===!0&&ie.getTransfer(x.map.colorSpace)===ce,decodeVideoTextureEmissive:Pt&&x.emissiveMap.isVideoTexture===!0&&ie.getTransfer(x.emissiveMap.colorSpace)===ce,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===qe,flipSided:x.side===Ge,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:St&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&x.extensions.multiDraw===!0||Nt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function g(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let A in x.defines)E.push(A),E.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(m(E,x),v(E,x),E.push(s.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function m(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function v(x,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),E.packedNormalMap&&r.enable(22),E.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),E.numLightProbeGrids>0&&r.enable(22),E.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function T(x){let E=d[x.type],A;if(E){let C=Nn[E];A=Wh.clone(C.uniforms)}else A=x.uniforms;return A}function M(x,E){let A=h.get(E);return A!==void 0?++A.usedTimes:(A=new Ug(s,E,x,i),l.push(A),h.set(E,A)),A}function R(x){if(--x.usedTimes===0){let E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function w(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:T,acquireProgram:M,releaseProgram:R,releaseShaderCache:b,programs:l,dispose:w}}function kg(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,c){s.get(r)[a]=c}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function zg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function hu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function uu(){let s=[],t=0,e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,_,g,m){let v=s[t];return v===void 0?(v={id:f.id,object:f,geometry:d,material:p,materialVariant:r(f),groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},s[t]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=p,v.materialVariant=r(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=g,v.group=m),t++,v}function c(f,d,p,_,g,m){let v=a(f,d,p,_,g,m);p.transmission>0?n.push(v):p.transparent===!0?i.push(v):e.push(v)}function l(f,d,p,_,g,m){let v=a(f,d,p,_,g,m);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):e.unshift(v)}function h(f,d,p){e.length>1&&e.sort(f||zg),n.length>1&&n.sort(d||hu),i.length>1&&i.sort(d||hu),p&&(e.reverse(),n.reverse(),i.reverse())}function u(){for(let f=t,d=s.length;f<d;f++){let p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:c,unshift:l,finish:u,sort:h}}function Hg(){let s=new WeakMap;function t(n,i){let o=s.get(n),r;return o===void 0?(r=new uu,s.set(n,[r])):i>=o.length?(r=new uu,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function Gg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Ut};break;case"SpotLight":e={position:new I,direction:new I,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function Vg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Wg=0;function Xg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function qg(s){let t=new Gg,e=Vg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let i=new I,o=new ve,r=new ve;function a(l){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,v=0,T=0,M=0,R=0,b=0,w=0;l.sort(Xg);for(let E=0,A=l.length;E<A;E++){let C=l[E],D=C.color,k=C.intensity,H=C.distance,L=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ui?L=C.shadow.map.texture:L=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=D.r*k,u+=D.g*k,f+=D.b*k;else if(C.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(C.sh.coefficients[N],k);w++}else if(C.isDirectionalLight){let N=t.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let F=C.shadow,q=e.get(C);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,n.directionalShadow[d]=q,n.directionalShadowMap[d]=L,n.directionalShadowMatrix[d]=C.shadow.matrix,v++}n.directional[d]=N,d++}else if(C.isSpotLight){let N=t.get(C);N.position.setFromMatrixPosition(C.matrixWorld),N.color.copy(D).multiplyScalar(k),N.distance=H,N.coneCos=Math.cos(C.angle),N.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),N.decay=C.decay,n.spot[_]=N;let F=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,F.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[_]=F.matrix,C.castShadow){let q=e.get(C);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=L,M++}_++}else if(C.isRectAreaLight){let N=t.get(C);N.color.copy(D).multiplyScalar(k),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=N,g++}else if(C.isPointLight){let N=t.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),N.distance=C.distance,N.decay=C.decay,C.castShadow){let F=C.shadow,q=e.get(C);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,q.shadowCameraNear=F.camera.near,q.shadowCameraFar=F.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=L,n.pointShadowMatrix[p]=C.shadow.matrix,T++}n.point[p]=N,p++}else if(C.isHemisphereLight){let N=t.get(C);N.skyColor.copy(C.color).multiplyScalar(k),N.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[m]=N,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let x=n.hash;(x.directionalLength!==d||x.pointLength!==p||x.spotLength!==_||x.rectAreaLength!==g||x.hemiLength!==m||x.numDirectionalShadows!==v||x.numPointShadows!==T||x.numSpotShadows!==M||x.numSpotMaps!==R||x.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=M+R-b,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,x.directionalLength=d,x.pointLength=p,x.spotLength=_,x.rectAreaLength=g,x.hemiLength=m,x.numDirectionalShadows=v,x.numPointShadows=T,x.numSpotShadows=M,x.numSpotMaps=R,x.numLightProbes=w,n.version=Wg++)}function c(l,h){let u=0,f=0,d=0,p=0,_=0,g=h.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){let T=l[m];if(T.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),u++}else if(T.isSpotLight){let M=n.spot[d];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),d++}else if(T.isRectAreaLight){let M=n.rectArea[p];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),r.identity(),o.copy(T.matrixWorld),o.premultiply(g),r.extractRotation(o),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),p++}else if(T.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(g),f++}else if(T.isHemisphereLight){let M=n.hemi[_];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function fu(s){let t=new qg(s),e=[],n=[],i=[];function o(f){u.camera=f,e.length=0,n.length=0,i.length=0}function r(f){e.push(f)}function a(f){n.push(f)}function c(f){i.push(f)}function l(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:u,setupLights:l,setupLightsView:h,pushLight:r,pushShadow:a,pushLightProbeGrid:c}}function Yg(s){let t=new WeakMap;function e(i,o=0){let r=t.get(i),a;return r===void 0?(a=new fu(s),t.set(i,[a])):o>=r.length?(a=new fu(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Zg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jg=`uniform sampler2D shadow_pass;
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
}`,Kg=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],$g=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],du=new ve,mr=new I,el=new I;function jg(s,t,e){let n=new Qi,i=new lt,o=new lt,r=new Me,a=new mo,c=new go,l={},h=e.maxTextureSize,u={[Hn]:Ge,[Ge]:Hn,[qe]:qe},f=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Zg,fragmentShader:Jg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new le;p.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new et(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=er;let m=this.type;this.render=function(b,w,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===rh&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=er);let E=s.getRenderTarget(),A=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),D=s.state;D.setBlending(In),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let k=m!==this.type;k&&w.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(L=>L.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,L=b.length;H<L;H++){let N=b[H],F=N.shadow;if(F===void 0){Bt("WebGLShadowMap:",N,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let q=F.getFrameExtents();i.multiply(q),o.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/q.x),i.x=o.x*q.x,F.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/q.y),i.y=o.y*q.y,F.mapSize.y=o.y));let K=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=K,F.map===null||k===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===rs){if(N.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new nn(i.x,i.y,{format:ui,type:Ln,minFilter:ke,magFilter:ke,generateMipmaps:!1}),F.map.texture.name=N.name+".shadowMap",F.map.depthTexture=new Vn(i.x,i.y,_n),F.map.depthTexture.name=N.name+".shadowMapDepth",F.map.depthTexture.format=An,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ae,F.map.depthTexture.magFilter=Ae}else N.isPointLight?(F.map=new va(i.x),F.map.depthTexture=new ao(i.x,xn)):(F.map=new nn(i.x,i.y),F.map.depthTexture=new Vn(i.x,i.y,xn)),F.map.depthTexture.name=N.name+".shadowMap",F.map.depthTexture.format=An,this.type===er?(F.map.depthTexture.compareFunction=K?ga:ma,F.map.depthTexture.minFilter=ke,F.map.depthTexture.magFilter=ke):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ae,F.map.depthTexture.magFilter=Ae);F.camera.updateProjectionMatrix()}let tt=F.map.isWebGLCubeRenderTarget?6:1;for(let st=0;st<tt;st++){if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,st),s.clear();else{st===0&&(s.setRenderTarget(F.map),s.clear());let ft=F.getViewport(st);r.set(o.x*ft.x,o.y*ft.y,o.x*ft.z,o.y*ft.w),D.viewport(r)}if(N.isPointLight){let ft=F.camera,qt=F.matrix,ae=N.distance||ft.far;ae!==ft.far&&(ft.far=ae,ft.updateProjectionMatrix()),mr.setFromMatrixPosition(N.matrixWorld),ft.position.copy(mr),el.copy(ft.position),el.add(Kg[st]),ft.up.copy($g[st]),ft.lookAt(el),ft.updateMatrixWorld(),qt.makeTranslation(-mr.x,-mr.y,-mr.z),du.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse),F._frustum.setFromProjectionMatrix(du,ft.coordinateSystem,ft.reversedDepth)}else F.updateMatrices(N);n=F.getFrustum(),M(w,x,F.camera,N,this.type)}F.isPointLightShadow!==!0&&this.type===rs&&v(F,x),F.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(E,A,C)};function v(b,w){let x=t.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new nn(i.x,i.y,{format:ui,type:Ln})),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(w,null,x,f,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(w,null,x,d,_,null)}function T(b,w,x,E){let A=null,C=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)A=C;else if(A=x.isPointLight===!0?c:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let D=A.uuid,k=w.uuid,H=l[D];H===void 0&&(H={},l[D]=H);let L=H[k];L===void 0&&(L=A.clone(),H[k]=L,w.addEventListener("dispose",R)),A=L}if(A.visible=w.visible,A.wireframe=w.wireframe,E===rs?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:u[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,x.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=s.properties.get(A);D.light=x}return A}function M(b,w,x,E,A){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===rs)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let k=t.update(b),H=b.material;if(Array.isArray(H)){let L=k.groups;for(let N=0,F=L.length;N<F;N++){let q=L[N],K=H[q.materialIndex];if(K&&K.visible){let tt=T(b,K,E,A);b.onBeforeShadow(s,b,w,x,k,tt,q),s.renderBufferDirect(x,null,k,tt,b,q),b.onAfterShadow(s,b,w,x,k,tt,q)}}}else if(H.visible){let L=T(b,H,E,A);b.onBeforeShadow(s,b,w,x,k,L,null),s.renderBufferDirect(x,null,k,L,b,null),b.onAfterShadow(s,b,w,x,k,L,null)}}let D=b.children;for(let k=0,H=D.length;k<H;k++)M(D[k],w,x,E,A)}function R(b){b.target.removeEventListener("dispose",R);for(let x in l){let E=l[x],A=b.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function Qg(s,t){function e(){let O=!1,dt=new Me,j=null,gt=new Me(0,0,0,0);return{setMask:function(St){j!==St&&!O&&(s.colorMask(St,St,St,St),j=St)},setLocked:function(St){O=St},setClear:function(St,it,Ct,At,Se){Se===!0&&(St*=At,it*=At,Ct*=At),dt.set(St,it,Ct,At),gt.equals(dt)===!1&&(s.clearColor(St,it,Ct,At),gt.copy(dt))},reset:function(){O=!1,j=null,gt.set(-1,0,0,0)}}}function n(){let O=!1,dt=!1,j=null,gt=null,St=null;return{setReversed:function(it){if(dt!==it){let Ct=t.get("EXT_clip_control");it?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),dt=it;let At=St;St=null,this.setClear(At)}},getReversed:function(){return dt},setTest:function(it){it?rt(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(it){j!==it&&!O&&(s.depthMask(it),j=it)},setFunc:function(it){if(dt&&(it=Bh[it]),gt!==it){switch(it){case Jr:s.depthFunc(s.NEVER);break;case Kr:s.depthFunc(s.ALWAYS);break;case $r:s.depthFunc(s.LESS);break;case Mi:s.depthFunc(s.LEQUAL);break;case jr:s.depthFunc(s.EQUAL);break;case Qr:s.depthFunc(s.GEQUAL);break;case to:s.depthFunc(s.GREATER);break;case eo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=it}},setLocked:function(it){O=it},setClear:function(it){St!==it&&(St=it,dt&&(it=1-it),s.clearDepth(it))},reset:function(){O=!1,j=null,gt=null,St=null,dt=!1}}}function i(){let O=!1,dt=null,j=null,gt=null,St=null,it=null,Ct=null,At=null,Se=null;return{setTest:function(ge){O||(ge?rt(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(ge){dt!==ge&&!O&&(s.stencilMask(ge),dt=ge)},setFunc:function(ge,vn,Mn){(j!==ge||gt!==vn||St!==Mn)&&(s.stencilFunc(ge,vn,Mn),j=ge,gt=vn,St=Mn)},setOp:function(ge,vn,Mn){(it!==ge||Ct!==vn||At!==Mn)&&(s.stencilOp(ge,vn,Mn),it=ge,Ct=vn,At=Mn)},setLocked:function(ge){O=ge},setClear:function(ge){Se!==ge&&(s.clearStencil(ge),Se=ge)},reset:function(){O=!1,dt=null,j=null,gt=null,St=null,it=null,Ct=null,At=null,Se=null}}}let o=new e,r=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],_=null,g=!1,m=null,v=null,T=null,M=null,R=null,b=null,w=null,x=new Ut(0,0,0),E=0,A=!1,C=null,D=null,k=null,H=null,L=null,N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,q=0,K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(K)[1]),F=q>=1):K.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),F=q>=2);let tt=null,st={},ft=s.getParameter(s.SCISSOR_BOX),qt=s.getParameter(s.VIEWPORT),ae=new Me().fromArray(ft),jt=new Me().fromArray(qt);function Y(O,dt,j,gt){let St=new Uint8Array(4),it=s.createTexture();s.bindTexture(O,it),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ct=0;Ct<j;Ct++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,St):s.texImage2D(dt+Ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,St);return it}let ct={};ct[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),ct[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ct[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),rt(s.DEPTH_TEST),r.setFunc(Mi),vt(!1),xt(vc),rt(s.CULL_FACE),at(In);function rt(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function wt(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function Vt(O,dt){return f[O]!==dt?(s.bindFramebuffer(O,dt),f[O]=dt,O===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=dt),O===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function Nt(O,dt){let j=p,gt=!1;if(O){j=d.get(dt),j===void 0&&(j=[],d.set(dt,j));let St=O.textures;if(j.length!==St.length||j[0]!==s.COLOR_ATTACHMENT0){for(let it=0,Ct=St.length;it<Ct;it++)j[it]=s.COLOR_ATTACHMENT0+it;j.length=St.length,gt=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,gt=!0);gt&&s.drawBuffers(j)}function oe(O){return _!==O?(s.useProgram(O),_=O,!0):!1}let Xt={[ei]:s.FUNC_ADD,[ah]:s.FUNC_SUBTRACT,[ch]:s.FUNC_REVERSE_SUBTRACT};Xt[lh]=s.MIN,Xt[hh]=s.MAX;let nt={[uh]:s.ZERO,[fh]:s.ONE,[dh]:s.SRC_COLOR,[Yr]:s.SRC_ALPHA,[yh]:s.SRC_ALPHA_SATURATE,[xh]:s.DST_COLOR,[mh]:s.DST_ALPHA,[ph]:s.ONE_MINUS_SRC_COLOR,[Zr]:s.ONE_MINUS_SRC_ALPHA,[_h]:s.ONE_MINUS_DST_COLOR,[gh]:s.ONE_MINUS_DST_ALPHA,[vh]:s.CONSTANT_COLOR,[Mh]:s.ONE_MINUS_CONSTANT_COLOR,[bh]:s.CONSTANT_ALPHA,[Sh]:s.ONE_MINUS_CONSTANT_ALPHA};function at(O,dt,j,gt,St,it,Ct,At,Se,ge){if(O===In){g===!0&&(wt(s.BLEND),g=!1);return}if(g===!1&&(rt(s.BLEND),g=!0),O!==oh){if(O!==m||ge!==A){if((v!==ei||R!==ei)&&(s.blendEquation(s.FUNC_ADD),v=ei,R=ei),ge)switch(O){case vi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nr:s.blendFunc(s.ONE,s.ONE);break;case Mc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case bc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ht("WebGLState: Invalid blending: ",O);break}else switch(O){case vi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case nr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Mc:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bc:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",O);break}T=null,M=null,b=null,w=null,x.set(0,0,0),E=0,m=O,A=ge}return}St=St||dt,it=it||j,Ct=Ct||gt,(dt!==v||St!==R)&&(s.blendEquationSeparate(Xt[dt],Xt[St]),v=dt,R=St),(j!==T||gt!==M||it!==b||Ct!==w)&&(s.blendFuncSeparate(nt[j],nt[gt],nt[it],nt[Ct]),T=j,M=gt,b=it,w=Ct),(At.equals(x)===!1||Se!==E)&&(s.blendColor(At.r,At.g,At.b,Se),x.copy(At),E=Se),m=O,A=!1}function ot(O,dt){O.side===qe?wt(s.CULL_FACE):rt(s.CULL_FACE);let j=O.side===Ge;dt&&(j=!j),vt(j),O.blending===vi&&O.transparent===!1?at(In):at(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),o.setMask(O.colorWrite);let gt=O.stencilWrite;a.setTest(gt),gt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Pt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(O){C!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),C=O)}function xt(O){O!==ih?(rt(s.CULL_FACE),O!==D&&(O===vc?s.cullFace(s.BACK):O===sh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),D=O}function kt(O){O!==k&&(F&&s.lineWidth(O),k=O)}function Pt(O,dt,j){O?(rt(s.POLYGON_OFFSET_FILL),(H!==dt||L!==j)&&(H=dt,L=j,r.getReversed()&&(dt=-dt),s.polygonOffset(dt,j))):wt(s.POLYGON_OFFSET_FILL)}function Wt(O){O?rt(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function Zt(O){O===void 0&&(O=s.TEXTURE0+N-1),tt!==O&&(s.activeTexture(O),tt=O)}function U(O,dt,j){j===void 0&&(tt===null?j=s.TEXTURE0+N-1:j=tt);let gt=st[j];gt===void 0&&(gt={type:void 0,texture:void 0},st[j]=gt),(gt.type!==O||gt.texture!==dt)&&(tt!==j&&(s.activeTexture(j),tt=j),s.bindTexture(O,dt||ct[O]),gt.type=O,gt.texture=dt)}function ue(){let O=st[tt];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ee(){try{s.compressedTexImage2D(...arguments)}catch(O){Ht("WebGLState:",O)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(O){Ht("WebGLState:",O)}}function y(){try{s.texSubImage2D(...arguments)}catch(O){Ht("WebGLState:",O)}}function z(){try{s.texSubImage3D(...arguments)}catch(O){Ht("WebGLState:",O)}}function W(){try{s.compressedTexSubImage2D(...arguments)}catch(O){Ht("WebGLState:",O)}}function Z(){try{s.compressedTexSubImage3D(...arguments)}catch(O){Ht("WebGLState:",O)}}function ht(){try{s.texStorage2D(...arguments)}catch(O){Ht("WebGLState:",O)}}function ut(){try{s.texStorage3D(...arguments)}catch(O){Ht("WebGLState:",O)}}function J(){try{s.texImage2D(...arguments)}catch(O){Ht("WebGLState:",O)}}function Q(){try{s.texImage3D(...arguments)}catch(O){Ht("WebGLState:",O)}}function pt(O){return u[O]!==void 0?u[O]:s.getParameter(O)}function It(O,dt){u[O]!==dt&&(s.pixelStorei(O,dt),u[O]=dt)}function _t(O){ae.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),ae.copy(O))}function mt(O){jt.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),jt.copy(O))}function Ot(O,dt){let j=l.get(dt);j===void 0&&(j=new WeakMap,l.set(dt,j));let gt=j.get(O);gt===void 0&&(gt=s.getUniformBlockIndex(dt,O.name),j.set(O,gt))}function zt(O,dt){let gt=l.get(dt).get(O);c.get(dt)!==gt&&(s.uniformBlockBinding(dt,gt,O.__bindingPointIndex),c.set(dt,gt))}function Jt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},tt=null,st={},f={},d=new WeakMap,p=[],_=null,g=!1,m=null,v=null,T=null,M=null,R=null,b=null,w=null,x=new Ut(0,0,0),E=0,A=!1,C=null,D=null,k=null,H=null,L=null,ae.set(0,0,s.canvas.width,s.canvas.height),jt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:rt,disable:wt,bindFramebuffer:Vt,drawBuffers:Nt,useProgram:oe,setBlending:at,setMaterial:ot,setFlipSided:vt,setCullFace:xt,setLineWidth:kt,setPolygonOffset:Pt,setScissorTest:Wt,activeTexture:Zt,bindTexture:U,unbindTexture:ue,compressedTexImage2D:ee,compressedTexImage3D:P,texImage2D:J,texImage3D:Q,pixelStorei:It,getParameter:pt,updateUBOMapping:Ot,uniformBlockBinding:zt,texStorage2D:ht,texStorage3D:ut,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:_t,viewport:mt,reset:Jt}}function tx(s,t,e,n,i,o,r){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,y){return p?new OffscreenCanvas(P,y):Ts("canvas")}function g(P,y,z){let W=1,Z=ee(P);if((Z.width>z||Z.height>z)&&(W=z/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ht=Math.floor(W*Z.width),ut=Math.floor(W*Z.height);f===void 0&&(f=_(ht,ut));let J=y?_(ht,ut):f;return J.width=ht,J.height=ut,J.getContext("2d").drawImage(P,0,0,ht,ut),Bt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ht+"x"+ut+")."),J}else return"data"in P&&Bt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function m(P){return P.generateMipmaps}function v(P){s.generateMipmap(P)}function T(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(P,y,z,W,Z,ht=!1){if(P!==null){if(s[P]!==void 0)return s[P];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ut;W&&(ut=t.get("EXT_texture_norm16"),ut||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=y;if(y===s.RED&&(z===s.FLOAT&&(J=s.R32F),z===s.HALF_FLOAT&&(J=s.R16F),z===s.UNSIGNED_BYTE&&(J=s.R8),z===s.UNSIGNED_SHORT&&ut&&(J=ut.R16_EXT),z===s.SHORT&&ut&&(J=ut.R16_SNORM_EXT)),y===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.R8UI),z===s.UNSIGNED_SHORT&&(J=s.R16UI),z===s.UNSIGNED_INT&&(J=s.R32UI),z===s.BYTE&&(J=s.R8I),z===s.SHORT&&(J=s.R16I),z===s.INT&&(J=s.R32I)),y===s.RG&&(z===s.FLOAT&&(J=s.RG32F),z===s.HALF_FLOAT&&(J=s.RG16F),z===s.UNSIGNED_BYTE&&(J=s.RG8),z===s.UNSIGNED_SHORT&&ut&&(J=ut.RG16_EXT),z===s.SHORT&&ut&&(J=ut.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.RG8UI),z===s.UNSIGNED_SHORT&&(J=s.RG16UI),z===s.UNSIGNED_INT&&(J=s.RG32UI),z===s.BYTE&&(J=s.RG8I),z===s.SHORT&&(J=s.RG16I),z===s.INT&&(J=s.RG32I)),y===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.RGB8UI),z===s.UNSIGNED_SHORT&&(J=s.RGB16UI),z===s.UNSIGNED_INT&&(J=s.RGB32UI),z===s.BYTE&&(J=s.RGB8I),z===s.SHORT&&(J=s.RGB16I),z===s.INT&&(J=s.RGB32I)),y===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),z===s.UNSIGNED_INT&&(J=s.RGBA32UI),z===s.BYTE&&(J=s.RGBA8I),z===s.SHORT&&(J=s.RGBA16I),z===s.INT&&(J=s.RGBA32I)),y===s.RGB&&(z===s.UNSIGNED_SHORT&&ut&&(J=ut.RGB16_EXT),z===s.SHORT&&ut&&(J=ut.RGB16_SNORM_EXT),z===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),y===s.RGBA){let Q=ht?Es:ie.getTransfer(Z);z===s.FLOAT&&(J=s.RGBA32F),z===s.HALF_FLOAT&&(J=s.RGBA16F),z===s.UNSIGNED_BYTE&&(J=Q===ce?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT&&ut&&(J=ut.RGBA16_EXT),z===s.SHORT&&ut&&(J=ut.RGBA16_SNORM_EXT),z===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function R(P,y){let z;return P?y===null||y===xn||y===as?z=s.DEPTH24_STENCIL8:y===_n?z=s.DEPTH32F_STENCIL8:y===os&&(z=s.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===xn||y===as?z=s.DEPTH_COMPONENT24:y===_n?z=s.DEPTH_COMPONENT32F:y===os&&(z=s.DEPTH_COMPONENT16),z}function b(P,y){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ae&&P.minFilter!==ke?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function w(P){let y=P.target;y.removeEventListener("dispose",w),E(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&u.delete(y)}function x(P){let y=P.target;y.removeEventListener("dispose",x),C(y)}function E(P){let y=n.get(P);if(y.__webglInit===void 0)return;let z=P.source,W=d.get(z);if(W){let Z=W[y.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&A(P),Object.keys(W).length===0&&d.delete(z)}n.remove(P)}function A(P){let y=n.get(P);s.deleteTexture(y.__webglTexture);let z=P.source,W=d.get(z);delete W[y.__cacheKey],r.memory.textures--}function C(P){let y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let Z=0;Z<y.__webglFramebuffer[W].length;Z++)s.deleteFramebuffer(y.__webglFramebuffer[W][Z]);else s.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)s.deleteFramebuffer(y.__webglFramebuffer[W]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=P.textures;for(let W=0,Z=z.length;W<Z;W++){let ht=n.get(z[W]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),r.memory.textures--),n.remove(z[W])}n.remove(P)}let D=0;function k(){D=0}function H(){return D}function L(P){D=P}function N(){let P=D;return P>=i.maxTextures&&Bt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),D+=1,P}function F(P){let y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function q(P,y){let z=n.get(P);if(P.isVideoTexture&&U(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){let W=P.image;if(W===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(z,P,y);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+y)}function K(P,y){let z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){wt(z,P,y);return}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+y)}function tt(P,y){let z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){wt(z,P,y);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+y)}function st(P,y){let z=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&z.__version!==P.version){Vt(z,P,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+y)}let ft={[en]:s.REPEAT,[Tn]:s.CLAMP_TO_EDGE,[no]:s.MIRRORED_REPEAT},qt={[Ae]:s.NEAREST,[wh]:s.NEAREST_MIPMAP_NEAREST,[rr]:s.NEAREST_MIPMAP_LINEAR,[ke]:s.LINEAR,[Lo]:s.LINEAR_MIPMAP_NEAREST,[li]:s.LINEAR_MIPMAP_LINEAR},ae={[Ch]:s.NEVER,[Nh]:s.ALWAYS,[Ph]:s.LESS,[ma]:s.LEQUAL,[Ih]:s.EQUAL,[ga]:s.GEQUAL,[Lh]:s.GREATER,[Dh]:s.NOTEQUAL};function jt(P,y){if(y.type===_n&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===ke||y.magFilter===Lo||y.magFilter===rr||y.magFilter===li||y.minFilter===ke||y.minFilter===Lo||y.minFilter===rr||y.minFilter===li)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ft[y.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ft[y.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ft[y.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,qt[y.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,qt[y.minFilter]),y.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ae[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ae||y.minFilter!==rr&&y.minFilter!==li||y.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Y(P,y){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",w));let W=y.source,Z=d.get(W);Z===void 0&&(Z={},d.set(W,Z));let ht=F(y);if(ht!==P.__cacheKey){Z[ht]===void 0&&(Z[ht]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,z=!0),Z[ht].usedTimes++;let ut=Z[P.__cacheKey];ut!==void 0&&(Z[P.__cacheKey].usedTimes--,ut.usedTimes===0&&A(y)),P.__cacheKey=ht,P.__webglTexture=Z[ht].texture}return z}function ct(P,y,z){return Math.floor(Math.floor(P/z)/y)}function rt(P,y,z,W){let ht=P.updateRanges;if(ht.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,z,W,y.data);else{ht.sort((It,_t)=>It.start-_t.start);let ut=0;for(let It=1;It<ht.length;It++){let _t=ht[ut],mt=ht[It],Ot=_t.start+_t.count,zt=ct(mt.start,y.width,4),Jt=ct(_t.start,y.width,4);mt.start<=Ot+1&&zt===Jt&&ct(mt.start+mt.count-1,y.width,4)===zt?_t.count=Math.max(_t.count,mt.start+mt.count-_t.start):(++ut,ht[ut]=mt)}ht.length=ut+1;let J=e.getParameter(s.UNPACK_ROW_LENGTH),Q=e.getParameter(s.UNPACK_SKIP_PIXELS),pt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let It=0,_t=ht.length;It<_t;It++){let mt=ht[It],Ot=Math.floor(mt.start/4),zt=Math.ceil(mt.count/4),Jt=Ot%y.width,O=Math.floor(Ot/y.width),dt=zt,j=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(s.UNPACK_SKIP_ROWS,O),e.texSubImage2D(s.TEXTURE_2D,0,Jt,O,dt,j,z,W,y.data)}P.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,J),e.pixelStorei(s.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(s.UNPACK_SKIP_ROWS,pt)}}function wt(P,y,z){let W=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=s.TEXTURE_3D);let Z=Y(P,y),ht=y.source;e.bindTexture(W,P.__webglTexture,s.TEXTURE0+z);let ut=n.get(ht);if(ht.version!==ut.__version||Z===!0){if(e.activeTexture(s.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let j=ie.getPrimaries(ie.workingColorSpace),gt=y.colorSpace===Wn?null:ie.getPrimaries(y.colorSpace),St=y.colorSpace===Wn||j===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}e.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let Q=g(y.image,!1,i.maxTextureSize);Q=ue(y,Q);let pt=o.convert(y.format,y.colorSpace),It=o.convert(y.type),_t=M(y.internalFormat,pt,It,y.normalized,y.colorSpace,y.isVideoTexture);jt(W,y);let mt,Ot=y.mipmaps,zt=y.isVideoTexture!==!0,Jt=ut.__version===void 0||Z===!0,O=ht.dataReady,dt=b(y,Q);if(y.isDepthTexture)_t=R(y.format===hi,y.type),Jt&&(zt?e.texStorage2D(s.TEXTURE_2D,1,_t,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,_t,Q.width,Q.height,0,pt,It,null));else if(y.isDataTexture)if(Ot.length>0){zt&&Jt&&e.texStorage2D(s.TEXTURE_2D,dt,_t,Ot[0].width,Ot[0].height);for(let j=0,gt=Ot.length;j<gt;j++)mt=Ot[j],zt?O&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,mt.width,mt.height,pt,It,mt.data):e.texImage2D(s.TEXTURE_2D,j,_t,mt.width,mt.height,0,pt,It,mt.data);y.generateMipmaps=!1}else zt?(Jt&&e.texStorage2D(s.TEXTURE_2D,dt,_t,Q.width,Q.height),O&&rt(y,Q,pt,It)):e.texImage2D(s.TEXTURE_2D,0,_t,Q.width,Q.height,0,pt,It,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){zt&&Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,_t,Ot[0].width,Ot[0].height,Q.depth);for(let j=0,gt=Ot.length;j<gt;j++)if(mt=Ot[j],y.format!==hn)if(pt!==null)if(zt){if(O)if(y.layerUpdates.size>0){let St=Wc(mt.width,mt.height,y.format,y.type);for(let it of y.layerUpdates){let Ct=mt.data.subarray(it*St/mt.data.BYTES_PER_ELEMENT,(it+1)*St/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,it,mt.width,mt.height,1,pt,Ct)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,mt.width,mt.height,Q.depth,pt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,_t,mt.width,mt.height,Q.depth,0,mt.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?O&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,mt.width,mt.height,Q.depth,pt,It,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,_t,mt.width,mt.height,Q.depth,0,pt,It,mt.data)}else{zt&&Jt&&e.texStorage2D(s.TEXTURE_2D,dt,_t,Ot[0].width,Ot[0].height);for(let j=0,gt=Ot.length;j<gt;j++)mt=Ot[j],y.format!==hn?pt!==null?zt?O&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,j,_t,mt.width,mt.height,0,mt.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?O&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,mt.width,mt.height,pt,It,mt.data):e.texImage2D(s.TEXTURE_2D,j,_t,mt.width,mt.height,0,pt,It,mt.data)}else if(y.isDataArrayTexture)if(zt){if(Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,_t,Q.width,Q.height,Q.depth),O)if(y.layerUpdates.size>0){let j=Wc(Q.width,Q.height,y.format,y.type);for(let gt of y.layerUpdates){let St=Q.data.subarray(gt*j/Q.data.BYTES_PER_ELEMENT,(gt+1)*j/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,Q.width,Q.height,1,pt,It,St)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,It,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,_t,Q.width,Q.height,Q.depth,0,pt,It,Q.data);else if(y.isData3DTexture)zt?(Jt&&e.texStorage3D(s.TEXTURE_3D,dt,_t,Q.width,Q.height,Q.depth),O&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,It,Q.data)):e.texImage3D(s.TEXTURE_3D,0,_t,Q.width,Q.height,Q.depth,0,pt,It,Q.data);else if(y.isFramebufferTexture){if(Jt)if(zt)e.texStorage2D(s.TEXTURE_2D,dt,_t,Q.width,Q.height);else{let j=Q.width,gt=Q.height;for(let St=0;St<dt;St++)e.texImage2D(s.TEXTURE_2D,St,_t,j,gt,0,pt,It,null),j>>=1,gt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){let j=s.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),u.add(y),j.onpaint=gt=>{let St=gt.changedElements;for(let it of u)St.includes(it.image)&&(it.needsUpdate=!0)},j.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Q);else{let St=s.RGBA,it=s.RGBA,Ct=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,St,it,Ct,Q)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(zt&&Jt){let j=ee(Ot[0]);e.texStorage2D(s.TEXTURE_2D,dt,_t,j.width,j.height)}for(let j=0,gt=Ot.length;j<gt;j++)mt=Ot[j],zt?O&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,pt,It,mt):e.texImage2D(s.TEXTURE_2D,j,_t,pt,It,mt);y.generateMipmaps=!1}else if(zt){if(Jt){let j=ee(Q);e.texStorage2D(s.TEXTURE_2D,dt,_t,j.width,j.height)}O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,pt,It,Q)}else e.texImage2D(s.TEXTURE_2D,0,_t,pt,It,Q);m(y)&&v(W),ut.__version=ht.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Vt(P,y,z){if(y.image.length!==6)return;let W=Y(P,y),Z=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+z);let ht=n.get(Z);if(Z.version!==ht.__version||W===!0){e.activeTexture(s.TEXTURE0+z);let ut=ie.getPrimaries(ie.workingColorSpace),J=y.colorSpace===Wn?null:ie.getPrimaries(y.colorSpace),Q=y.colorSpace===Wn||ut===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let pt=y.isCompressedTexture||y.image[0].isCompressedTexture,It=y.image[0]&&y.image[0].isDataTexture,_t=[];for(let it=0;it<6;it++)!pt&&!It?_t[it]=g(y.image[it],!0,i.maxCubemapSize):_t[it]=It?y.image[it].image:y.image[it],_t[it]=ue(y,_t[it]);let mt=_t[0],Ot=o.convert(y.format,y.colorSpace),zt=o.convert(y.type),Jt=M(y.internalFormat,Ot,zt,y.normalized,y.colorSpace),O=y.isVideoTexture!==!0,dt=ht.__version===void 0||W===!0,j=Z.dataReady,gt=b(y,mt);jt(s.TEXTURE_CUBE_MAP,y);let St;if(pt){O&&dt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Jt,mt.width,mt.height);for(let it=0;it<6;it++){St=_t[it].mipmaps;for(let Ct=0;Ct<St.length;Ct++){let At=St[Ct];y.format!==hn?Ot!==null?O?j&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct,0,0,At.width,At.height,Ot,At.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct,Jt,At.width,At.height,0,At.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct,0,0,At.width,At.height,Ot,zt,At.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct,Jt,At.width,At.height,0,Ot,zt,At.data)}}}else{if(St=y.mipmaps,O&&dt){St.length>0&&gt++;let it=ee(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Jt,it.width,it.height)}for(let it=0;it<6;it++)if(It){O?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,_t[it].width,_t[it].height,Ot,zt,_t[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Jt,_t[it].width,_t[it].height,0,Ot,zt,_t[it].data);for(let Ct=0;Ct<St.length;Ct++){let Se=St[Ct].image[it].image;O?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct+1,0,0,Se.width,Se.height,Ot,zt,Se.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct+1,Jt,Se.width,Se.height,0,Ot,zt,Se.data)}}else{O?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ot,zt,_t[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Jt,Ot,zt,_t[it]);for(let Ct=0;Ct<St.length;Ct++){let At=St[Ct];O?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct+1,0,0,Ot,zt,At.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ct+1,Jt,Ot,zt,At.image[it])}}}m(y)&&v(s.TEXTURE_CUBE_MAP),ht.__version=Z.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Nt(P,y,z,W,Z,ht){let ut=o.convert(z.format,z.colorSpace),J=o.convert(z.type),Q=M(z.internalFormat,ut,J,z.normalized,z.colorSpace),pt=n.get(y),It=n.get(z);if(It.__renderTarget=y,!pt.__hasExternalTextures){let _t=Math.max(1,y.width>>ht),mt=Math.max(1,y.height>>ht);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,ht,Q,_t,mt,y.depth,0,ut,J,null):e.texImage2D(Z,ht,Q,_t,mt,0,ut,J,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),Zt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,W,Z,It.__webglTexture,0,Wt(y)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,W,Z,It.__webglTexture,ht),e.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(P,y,z){if(s.bindRenderbuffer(s.RENDERBUFFER,P),y.depthBuffer){let W=y.depthTexture,Z=W&&W.isDepthTexture?W.type:null,ht=R(y.stencilBuffer,Z),ut=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Zt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(y),ht,y.width,y.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(y),ht,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ht,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ut,s.RENDERBUFFER,P)}else{let W=y.textures;for(let Z=0;Z<W.length;Z++){let ht=W[Z],ut=o.convert(ht.format,ht.colorSpace),J=o.convert(ht.type),Q=M(ht.internalFormat,ut,J,ht.normalized,ht.colorSpace);Zt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(y),Q,y.width,y.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(y),Q,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Q,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Xt(P,y,z){let W=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(y.depthTexture);if(Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,y.depthTexture.addEventListener("dispose",w)),Z.__webglTexture===void 0){Z.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),jt(s.TEXTURE_CUBE_MAP,y.depthTexture);let pt=o.convert(y.depthTexture.format),It=o.convert(y.depthTexture.type),_t;y.depthTexture.format===An?_t=s.DEPTH_COMPONENT24:y.depthTexture.format===hi&&(_t=s.DEPTH24_STENCIL8);for(let mt=0;mt<6;mt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,_t,y.width,y.height,0,pt,It,null)}}else q(y.depthTexture,0);let ht=Z.__webglTexture,ut=Wt(y),J=W?s.TEXTURE_CUBE_MAP_POSITIVE_X+z:s.TEXTURE_2D,Q=y.depthTexture.format===hi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===An)Zt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,J,ht,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,Q,J,ht,0);else if(y.depthTexture.format===hi)Zt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,J,ht,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,Q,J,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(P){let y=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){let W=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){let Z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),y.__depthDisposeCallback=Z}y.__boundDepthTexture=W}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let W=0;W<6;W++)Xt(y.__webglFramebuffer[W],P,W);else{let W=P.texture.mipmaps;W&&W.length>0?Xt(y.__webglFramebuffer[0],P,0):Xt(y.__webglFramebuffer,P,0)}else if(z){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=s.createRenderbuffer(),oe(y.__webglDepthbuffer[W],P,!1);else{let Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=y.__webglDepthbuffer[W];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,ht)}}else{let W=P.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),oe(y.__webglDepthbuffer,P,!1);else{let Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,ht)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(P,y,z){let W=n.get(P);y!==void 0&&Nt(W.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&nt(P)}function ot(P){let y=P.texture,z=n.get(P),W=n.get(y);P.addEventListener("dispose",x);let Z=P.textures,ht=P.isWebGLCubeRenderTarget===!0,ut=Z.length>1;if(ut||(W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture()),W.__version=y.version,r.memory.textures++),ht){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let Q=0;Q<y.mipmaps.length;Q++)z.__webglFramebuffer[J][Q]=s.createFramebuffer()}else z.__webglFramebuffer[J]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)z.__webglFramebuffer[J]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(ut)for(let J=0,Q=Z.length;J<Q;J++){let pt=n.get(Z[J]);pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture(),r.memory.textures++)}if(P.samples>0&&Zt(P)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let Q=Z[J];z.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[J]);let pt=o.convert(Q.format,Q.colorSpace),It=o.convert(Q.type),_t=M(Q.internalFormat,pt,It,Q.normalized,Q.colorSpace,P.isXRRenderTarget===!0),mt=Wt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,_t,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,z.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),oe(z.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),jt(s.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)Nt(z.__webglFramebuffer[J][Q],P,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else Nt(z.__webglFramebuffer[J],P,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(y)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let J=0,Q=Z.length;J<Q;J++){let pt=Z[J],It=n.get(pt),_t=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_t=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(_t,It.__webglTexture),jt(_t,pt),Nt(z.__webglFramebuffer,P,pt,s.COLOR_ATTACHMENT0+J,_t,0),m(pt)&&v(_t)}e.unbindTexture()}else{let J=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(J=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(J,W.__webglTexture),jt(J,y),y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)Nt(z.__webglFramebuffer[Q],P,y,s.COLOR_ATTACHMENT0,J,Q);else Nt(z.__webglFramebuffer,P,y,s.COLOR_ATTACHMENT0,J,0);m(y)&&v(J),e.unbindTexture()}P.depthBuffer&&nt(P)}function vt(P){let y=P.textures;for(let z=0,W=y.length;z<W;z++){let Z=y[z];if(m(Z)){let ht=T(P),ut=n.get(Z).__webglTexture;e.bindTexture(ht,ut),v(ht),e.unbindTexture()}}}let xt=[],kt=[];function Pt(P){if(P.samples>0){if(Zt(P)===!1){let y=P.textures,z=P.width,W=P.height,Z=s.COLOR_BUFFER_BIT,ht=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=n.get(P),J=y.length>1;if(J)for(let pt=0;pt<y.length;pt++)e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let Q=P.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let pt=0;pt<y.length;pt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ut.__webglColorRenderbuffer[pt]);let It=n.get(y[pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,It,0)}s.blitFramebuffer(0,0,z,W,0,0,z,W,Z,s.NEAREST),c===!0&&(xt.length=0,kt.length=0,xt.push(s.COLOR_ATTACHMENT0+pt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(xt.push(ht),kt.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,kt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let pt=0;pt<y.length;pt++){e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,ut.__webglColorRenderbuffer[pt]);let It=n.get(y[pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,It,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let y=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Wt(P){return Math.min(i.maxSamples,P.samples)}function Zt(P){let y=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function U(P){let y=r.render.frame;h.get(P)!==y&&(h.set(P,y),P.update())}function ue(P,y){let z=P.colorSpace,W=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==Ss&&z!==Wn&&(ie.getTransfer(z)===ce?(W!==hn||Z!==$e)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",z)),y}function ee(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=k,this.getTextureUnits=H,this.setTextureUnits=L,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=tt,this.setTextureCube=st,this.rebindTextures=at,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ex(s,t){function e(n,i=Wn){let o,r=ie.getTransfer(i);if(n===$e)return s.UNSIGNED_BYTE;if(n===No)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Uo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Dc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Nc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ic)return s.BYTE;if(n===Lc)return s.SHORT;if(n===os)return s.UNSIGNED_SHORT;if(n===Do)return s.INT;if(n===xn)return s.UNSIGNED_INT;if(n===_n)return s.FLOAT;if(n===Ln)return s.HALF_FLOAT;if(n===Uc)return s.ALPHA;if(n===Fc)return s.RGB;if(n===hn)return s.RGBA;if(n===An)return s.DEPTH_COMPONENT;if(n===hi)return s.DEPTH_STENCIL;if(n===or)return s.RED;if(n===Fo)return s.RED_INTEGER;if(n===ui)return s.RG;if(n===Oo)return s.RG_INTEGER;if(n===Bo)return s.RGBA_INTEGER;if(n===ar||n===cr||n===lr||n===hr)if(r===ce)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ar)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ar)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ko||n===zo||n===Ho||n===Go)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ko)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ho)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Go)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vo||n===Wo||n===Xo||n===qo||n===Yo||n===ur||n===Zo)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Vo||n===Wo)return r===ce?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Xo)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===qo)return o.COMPRESSED_R11_EAC;if(n===Yo)return o.COMPRESSED_SIGNED_R11_EAC;if(n===ur)return o.COMPRESSED_RG11_EAC;if(n===Zo)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Jo||n===Ko||n===$o||n===jo||n===Qo||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===ca)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Jo)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ko)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$o)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jo)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qo)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ta)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ea)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===na)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ia)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sa)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ra)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oa)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===aa)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ca)return r===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===la||n===ha||n===ua)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===la)return r===ce?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ha)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ua)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fa||n===da||n===fr||n===pa)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===fa)return o.COMPRESSED_RED_RGTC1_EXT;if(n===da)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===as?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ix=`
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

}`,ll=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Us(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new rn({vertexShader:nx,fragmentShader:ix,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new et(new He(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hl=class extends Rn{constructor(t,e){super();let n=this,i=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null,_=typeof XRWebGLBinding<"u",g=new ll,m={},v=e.getContextAttributes(),T=null,M=null,R=[],b=[],w=new lt,x=null,E=new Oe;E.viewport=new Me;let A=new Oe;A.viewport=new Me;let C=[E,A],D=new Ro,k=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ct=R[Y];return ct===void 0&&(ct=new $i,R[Y]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(Y){let ct=R[Y];return ct===void 0&&(ct=new $i,R[Y]=ct),ct.getGripSpace()},this.getHand=function(Y){let ct=R[Y];return ct===void 0&&(ct=new $i,R[Y]=ct),ct.getHandSpace()};function L(Y){let ct=b.indexOf(Y.inputSource);if(ct===-1)return;let rt=R[ct];rt!==void 0&&(rt.update(Y.inputSource,Y.frame,l||r),rt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",F);for(let Y=0;Y<R.length;Y++){let ct=b[Y];ct!==null&&(b[Y]=null,R[Y].disconnect(ct))}k=null,H=null,g.reset();for(let Y in m)delete m[Y];t.setRenderTarget(T),d=null,f=null,u=null,i=null,M=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",N),i.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,wt=null,Vt=null;v.depth&&(Vt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=v.stencil?hi:An,wt=v.stencil?as:xn);let Nt={colorFormat:e.RGBA8,depthFormat:Vt,scaleFactor:o};u=this.getBinding(),f=u.createProjectionLayer(Nt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new nn(f.textureWidth,f.textureHeight,{format:hn,type:$e,depthTexture:new Vn(f.textureWidth,f.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let rt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(i,e,rt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new nn(d.framebufferWidth,d.framebufferHeight,{format:hn,type:$e,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),jt.setContext(i),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function F(Y){for(let ct=0;ct<Y.removed.length;ct++){let rt=Y.removed[ct],wt=b.indexOf(rt);wt>=0&&(b[wt]=null,R[wt].disconnect(rt))}for(let ct=0;ct<Y.added.length;ct++){let rt=Y.added[ct],wt=b.indexOf(rt);if(wt===-1){for(let Nt=0;Nt<R.length;Nt++)if(Nt>=b.length){b.push(rt),wt=Nt;break}else if(b[Nt]===null){b[Nt]=rt,wt=Nt;break}if(wt===-1)break}let Vt=R[wt];Vt&&Vt.connect(rt)}}let q=new I,K=new I;function tt(Y,ct,rt){q.setFromMatrixPosition(ct.matrixWorld),K.setFromMatrixPosition(rt.matrixWorld);let wt=q.distanceTo(K),Vt=ct.projectionMatrix.elements,Nt=rt.projectionMatrix.elements,oe=Vt[14]/(Vt[10]-1),Xt=Vt[14]/(Vt[10]+1),nt=(Vt[9]+1)/Vt[5],at=(Vt[9]-1)/Vt[5],ot=(Vt[8]-1)/Vt[0],vt=(Nt[8]+1)/Nt[0],xt=oe*ot,kt=oe*vt,Pt=wt/(-ot+vt),Wt=Pt*-ot;if(ct.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Wt),Y.translateZ(Pt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Vt[10]===-1)Y.projectionMatrix.copy(ct.projectionMatrix),Y.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{let Zt=oe+Pt,U=Xt+Pt,ue=xt-Wt,ee=kt+(wt-Wt),P=nt*Xt/U*Zt,y=at*Xt/U*Zt;Y.projectionMatrix.makePerspective(ue,ee,P,y,Zt,U),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,ct){ct===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ct.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ct=Y.near,rt=Y.far;g.texture!==null&&(g.depthNear>0&&(ct=g.depthNear),g.depthFar>0&&(rt=g.depthFar)),D.near=A.near=E.near=ct,D.far=A.far=E.far=rt,(k!==D.near||H!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),k=D.near,H=D.far),D.layers.mask=Y.layers.mask|6,E.layers.mask=D.layers.mask&-5,A.layers.mask=D.layers.mask&-3;let wt=Y.parent,Vt=D.cameras;st(D,wt);for(let Nt=0;Nt<Vt.length;Nt++)st(Vt[Nt],wt);Vt.length===2?tt(D,E,A):D.projectionMatrix.copy(E.projectionMatrix),ft(Y,D,wt)};function ft(Y,ct,rt){rt===null?Y.matrix.copy(ct.matrixWorld):(Y.matrix.copy(rt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ct.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ct.projectionMatrix),Y.projectionMatrixInverse.copy(ct.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ji*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(Y){return m[Y]};let qt=null;function ae(Y,ct){if(h=ct.getViewerPose(l||r),p=ct,h!==null){let rt=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let wt=!1;rt.length!==D.cameras.length&&(D.cameras.length=0,wt=!0);for(let Xt=0;Xt<rt.length;Xt++){let nt=rt[Xt],at=null;if(d!==null)at=d.getViewport(nt);else{let vt=u.getViewSubImage(f,nt);at=vt.viewport,Xt===0&&(t.setRenderTargetTextures(M,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(M))}let ot=C[Xt];ot===void 0&&(ot=new Oe,ot.layers.enable(Xt),ot.viewport=new Me,C[Xt]=ot),ot.matrix.fromArray(nt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(nt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(at.x,at.y,at.width,at.height),Xt===0&&(D.matrix.copy(ot.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),wt===!0&&D.cameras.push(ot)}let Vt=i.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let Xt=u.getDepthInformation(rt[0]);Xt&&Xt.isValid&&Xt.texture&&g.init(Xt,i.renderState)}if(Vt&&Vt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let Xt=0;Xt<rt.length;Xt++){let nt=rt[Xt].camera;if(nt){let at=m[nt];at||(at=new Us,m[nt]=at);let ot=u.getCameraImage(nt);at.sourceTexture=ot}}}}for(let rt=0;rt<R.length;rt++){let wt=b[rt],Vt=R[rt];wt!==null&&Vt!==void 0&&Vt.update(wt,ct,l||r)}qt&&qt(Y,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),p=null}let jt=new pu;jt.setAnimationLoop(ae),this.setAnimationLoop=function(Y){qt=Y},this.dispose=function(){}}},sx=new ve,vu=new Yt;vu.set(-1,0,0,0,1,0,0,0,1);function rx(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Hc(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,v,T,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?o(g,m):m.isMeshLambertMaterial?(o(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(o(g,m),u(g,m)):m.isMeshPhongMaterial?(o(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(o(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,M)):m.isMeshMatcapMaterial?(o(g,m),p(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),_(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,v,T):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ge&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ge&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=t.get(m),T=v.envMap,M=v.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(sx.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(vu),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,v,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=T*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ge&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ox(s,t,e,n){let i={},o={},r=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,R){let b=R.program;n.uniformBlockBinding(M,b)}function l(M,R){let b=i[M.id];b===void 0&&(g(M),b=h(M),i[M.id]=b,M.addEventListener("dispose",v));let w=R.program;n.updateUBOMapping(M,w);let x=t.render.frame;o[M.id]!==x&&(f(M),o[M.id]=x)}function h(M){let R=u();M.__bindingPointIndex=R;let b=s.createBuffer(),w=M.__size,x=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,w,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,b),b}function u(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let R=i[M.id],b=M.uniforms,w=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let x=0,E=b.length;x<E;x++){let A=b[x];if(Array.isArray(A))for(let C=0,D=A.length;C<D;C++)d(A[C],x,C,w);else d(A,x,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,R,b,w){if(_(M,R,b,w)===!0){let x=M.__offset,E=M.value;if(Array.isArray(E)){let A=0;for(let C=0;C<E.length;C++){let D=E[C],k=m(D);p(D,M.__data,A),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(A+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,M.__data)}}function p(M,R,b){typeof M=="number"||typeof M=="boolean"?R[0]=M:M.isMatrix3?(R[0]=M.elements[0],R[1]=M.elements[1],R[2]=M.elements[2],R[3]=0,R[4]=M.elements[3],R[5]=M.elements[4],R[6]=M.elements[5],R[7]=0,R[8]=M.elements[6],R[9]=M.elements[7],R[10]=M.elements[8],R[11]=0):ArrayBuffer.isView(M)?R.set(new M.constructor(M.buffer,M.byteOffset,R.length)):M.toArray(R,b)}function _(M,R,b,w){let x=M.value,E=R+"_"+b;if(w[E]===void 0)return typeof x=="number"||typeof x=="boolean"?w[E]=x:ArrayBuffer.isView(x)?w[E]=x.slice():w[E]=x.clone(),!0;{let A=w[E];if(typeof x=="number"||typeof x=="boolean"){if(A!==x)return w[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(A.equals(x)===!1)return A.copy(x),!0}}return!1}function g(M){let R=M.uniforms,b=0,w=16;for(let E=0,A=R.length;E<A;E++){let C=Array.isArray(R[E])?R[E]:[R[E]];for(let D=0,k=C.length;D<k;D++){let H=C[D],L=Array.isArray(H.value)?H.value:[H.value];for(let N=0,F=L.length;N<F;N++){let q=L[N],K=m(q),tt=b%w,st=tt%K.boundary,ft=tt+st;b+=st,ft!==0&&w-ft<K.storage&&(b+=w-ft),H.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=K.storage}}}let x=b%w;return x>0&&(b+=w-x),M.__size=b,M.__cache={},this}function m(M){let R={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(R.boundary=4,R.storage=4):M.isVector2?(R.boundary=8,R.storage=8):M.isVector3||M.isColor?(R.boundary=16,R.storage=12):M.isVector4?(R.boundary=16,R.storage=16):M.isMatrix3?(R.boundary=48,R.storage=48):M.isMatrix4?(R.boundary=64,R.storage=64):M.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(R.boundary=16,R.storage=M.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",M),R}function v(M){let R=M.target;R.removeEventListener("dispose",v);let b=r.indexOf(R.__bindingPointIndex);r.splice(b,1),s.deleteBuffer(i[R.id]),delete i[R.id],delete o[R.id]}function T(){for(let M in i)s.deleteBuffer(i[M]);r=[],i={},o={}}return{bind:c,update:l,dispose:T}}var ax=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Dn=null;function cx(){return Dn===null&&(Dn=new ji(ax,16,16,ui,Ln),Dn.name="DFG_LUT",Dn.minFilter=ke,Dn.magFilter=ke,Dn.wrapS=Tn,Dn.wrapT=Tn,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}var Ma=class{constructor(t={}){let{canvas:e=Uh(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=$e}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;let _=d,g=new Set([Bo,Oo,Fo]),m=new Set([$e,xn,os,as,No,Uo]),v=new Uint32Array(4),T=new Int32Array(4),M=new I,R=null,b=null,w=[],x=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,C=!1,D=null,k=null,H=null,L=null;this._outputColorSpace=Le;let N=0,F=0,q=null,K=-1,tt=null,st=new Me,ft=new Me,qt=null,ae=new Ut(0),jt=0,Y=e.width,ct=e.height,rt=1,wt=null,Vt=null,Nt=new Me(0,0,Y,ct),oe=new Me(0,0,Y,ct),Xt=!1,nt=new Qi,at=!1,ot=!1,vt=new ve,xt=new I,kt=new Me,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function Zt(){return q===null?rt:1}let U=n;function ue(S,B){return e.getContext(S,B)}try{let S={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",vn,!1),U===null){let B="webgl2";if(U=ue(B,S),U===null)throw ue(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw Ht("WebGLRenderer: "+S.message),S}let ee,P,y,z,W,Z,ht,ut,J,Q,pt,It,_t,mt,Ot,zt,Jt,O,dt,j,gt,St,it;function Ct(){ee=new m0(U),ee.init(),gt=new ex(U,ee),P=new a0(U,ee,t,gt),y=new Qg(U,ee),P.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),k=U.createFramebuffer(),H=U.createFramebuffer(),L=U.createFramebuffer(),z=new _0(U),W=new kg,Z=new tx(U,ee,y,W,P,gt,z),ht=new p0(A),ut=new bd(U),St=new r0(U,ut),J=new g0(U,ut,z,St),Q=new v0(U,J,ut,St,z),O=new y0(U,P,Z),Ot=new c0(W),pt=new Bg(A,ht,ee,P,St,Ot),It=new rx(A,W),_t=new Hg,mt=new Yg(ee),Jt=new s0(A,ht,y,Q,p,c),zt=new jg(A,Q,P),it=new ox(U,z,P,y),dt=new o0(U,ee,z),j=new x0(U,ee,z),z.programs=pt.programs,A.capabilities=P,A.extensions=ee,A.properties=W,A.renderLists=_t,A.shadowMap=zt,A.state=y,A.info=z}Ct(),_!==$e&&(E=new b0(_,e.width,e.height,a,i,o));let At=new hl(A,U);this.xr=At,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=ee.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ee.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(S){S!==void 0&&(rt=S,this.setSize(Y,ct,!1))},this.getSize=function(S){return S.set(Y,ct)},this.setSize=function(S,B,X=!0){if(At.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=S,ct=B,e.width=Math.floor(S*rt),e.height=Math.floor(B*rt),X===!0&&(e.style.width=S+"px",e.style.height=B+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(Y*rt,ct*rt).floor()},this.setDrawingBufferSize=function(S,B,X){Y=S,ct=B,rt=X,e.width=Math.floor(S*X),e.height=Math.floor(B*X),this.setViewport(0,0,S,B)},this.setEffects=function(S){if(_===$e){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let B=0;B<S.length;B++)if(S[B].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(st)},this.getViewport=function(S){return S.copy(Nt)},this.setViewport=function(S,B,X,G){S.isVector4?Nt.set(S.x,S.y,S.z,S.w):Nt.set(S,B,X,G),y.viewport(st.copy(Nt).multiplyScalar(rt).round())},this.getScissor=function(S){return S.copy(oe)},this.setScissor=function(S,B,X,G){S.isVector4?oe.set(S.x,S.y,S.z,S.w):oe.set(S,B,X,G),y.scissor(ft.copy(oe).multiplyScalar(rt).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(S){y.setScissorTest(Xt=S)},this.setOpaqueSort=function(S){wt=S},this.setTransparentSort=function(S){Vt=S},this.getClearColor=function(S){return S.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(S=!0,B=!0,X=!0){let G=0;if(S){let V=!1;if(q!==null){let bt=q.texture.format;V=g.has(bt)}if(V){let bt=q.texture.type,Tt=m.has(bt),Mt=Jt.getClearColor(),Rt=Jt.getClearAlpha(),Lt=Mt.r,Kt=Mt.g,Qt=Mt.b;Tt?(v[0]=Lt,v[1]=Kt,v[2]=Qt,v[3]=Rt,U.clearBufferuiv(U.COLOR,0,v)):(T[0]=Lt,T[1]=Kt,T[2]=Qt,T[3]=Rt,U.clearBufferiv(U.COLOR,0,T))}else G|=U.COLOR_BUFFER_BIT}B&&(G|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),D=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",vn,!1),Jt.dispose(),_t.dispose(),mt.dispose(),W.dispose(),ht.dispose(),Q.dispose(),St.dispose(),it.dispose(),pt.dispose(),At.dispose(),At.removeEventListener("sessionstart",vl),At.removeEventListener("sessionend",Ml),di.stop()};function Se(S){S.preventDefault(),Bc("WebGLRenderer: Context Lost."),C=!0}function ge(){Bc("WebGLRenderer: Context Restored."),C=!1;let S=z.autoReset,B=zt.enabled,X=zt.autoUpdate,G=zt.needsUpdate,V=zt.type;Ct(),z.autoReset=S,zt.enabled=B,zt.autoUpdate=X,zt.needsUpdate=G,zt.type=V}function vn(S){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Mn(S){let B=S.target;B.removeEventListener("dispose",Mn),Bu(B)}function Bu(S){ku(S),W.remove(S)}function ku(S){let B=W.get(S).programs;B!==void 0&&(B.forEach(function(X){pt.releaseProgram(X)}),S.isShaderMaterial&&pt.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,X,G,V,bt){B===null&&(B=Pt);let Tt=V.isMesh&&V.matrixWorld.determinantAffine()<0,Mt=Gu(S,B,X,G,V);y.setMaterial(G,Tt);let Rt=X.index,Lt=1;if(G.wireframe===!0){if(Rt=J.getWireframeAttribute(X),Rt===void 0)return;Lt=2}let Kt=X.drawRange,Qt=X.attributes.position,Dt=Kt.start*Lt,fe=(Kt.start+Kt.count)*Lt;bt!==null&&(Dt=Math.max(Dt,bt.start*Lt),fe=Math.min(fe,(bt.start+bt.count)*Lt)),Rt!==null?(Dt=Math.max(Dt,0),fe=Math.min(fe,Rt.count)):Qt!=null&&(Dt=Math.max(Dt,0),fe=Math.min(fe,Qt.count));let Te=fe-Dt;if(Te<0||Te===1/0)return;St.setup(V,G,Mt,X,Rt);let Ee,pe=dt;if(Rt!==null&&(Ee=ut.get(Rt),pe=j,pe.setIndex(Ee)),V.isMesh)G.wireframe===!0?(y.setLineWidth(G.wireframeLinewidth*Zt()),pe.setMode(U.LINES)):pe.setMode(U.TRIANGLES);else if(V.isLine){let Ve=G.linewidth;Ve===void 0&&(Ve=1),y.setLineWidth(Ve*Zt()),V.isLineSegments?pe.setMode(U.LINES):V.isLineLoop?pe.setMode(U.LINE_LOOP):pe.setMode(U.LINE_STRIP)}else V.isPoints?pe.setMode(U.POINTS):V.isSprite&&pe.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))pe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Ve=V._multiDrawStarts,Et=V._multiDrawCounts,je=V._multiDrawCount,re=Rt?ut.get(Rt).bytesPerElement:1,an=W.get(G).currentProgram.getUniforms();for(let bn=0;bn<je;bn++)an.setValue(U,"_gl_DrawID",bn),pe.render(Ve[bn]/re,Et[bn])}else if(V.isInstancedMesh)pe.renderInstances(Dt,Te,V.count);else if(X.isInstancedBufferGeometry){let Ve=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Et=Math.min(X.instanceCount,Ve);pe.renderInstances(Dt,Te,Et)}else pe.render(Dt,Te)};function yl(S,B,X){S.transparent===!0&&S.side===qe&&S.forceSinglePass===!1?(S.side=Ge,S.needsUpdate=!0,Mr(S,B,X),S.side=Hn,S.needsUpdate=!0,Mr(S,B,X),S.side=qe):Mr(S,B,X)}this.compile=function(S,B,X=null){X===null&&(X=S),b=mt.get(X),b.init(B),x.push(b),X.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),S!==X&&S.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights();let G=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let bt=V.material;if(bt)if(Array.isArray(bt))for(let Tt=0;Tt<bt.length;Tt++){let Mt=bt[Tt];yl(Mt,X,V),G.add(Mt)}else yl(bt,X,V),G.add(bt)}),b=x.pop(),G},this.compileAsync=function(S,B,X=null){let G=this.compile(S,B,X);return new Promise(V=>{function bt(){if(G.forEach(function(Tt){W.get(Tt).currentProgram.isReady()&&G.delete(Tt)}),G.size===0){V(S);return}setTimeout(bt,10)}ee.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Da=null;function zu(S){Da&&Da(S)}function vl(){di.stop()}function Ml(){di.start()}let di=new pu;di.setAnimationLoop(zu),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(S){Da=S,At.setAnimationLoop(S),S===null?di.stop():di.start()},At.addEventListener("sessionstart",vl),At.addEventListener("sessionend",Ml),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;D!==null&&D.renderStart(S,B);let X=At.enabled===!0&&At.isPresenting===!0,G=E!==null&&(q===null||X)&&E.begin(A,q);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(B),B=At.getCamera()),S.isScene===!0&&S.onBeforeRender(A,S,B,q),b=mt.get(S,x.length),b.init(B),b.state.textureUnits=Z.getTextureUnits(),x.push(b),vt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),nt.setFromProjectionMatrix(vt,mn,B.reversedDepth),ot=this.localClippingEnabled,at=Ot.init(this.clippingPlanes,ot),R=_t.get(S,w.length),R.init(),w.push(R),At.enabled===!0&&At.isPresenting===!0){let Tt=A.xr.getDepthSensingMesh();Tt!==null&&Na(Tt,B,-1/0,A.sortObjects)}Na(S,B,0,A.sortObjects),R.finish(),A.sortObjects===!0&&R.sort(wt,Vt,B.reversedDepth),Wt=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Wt&&Jt.addToRenderList(R,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Ot.beginShadows();let V=b.state.shadowsArray;if(zt.render(V,S,B),at===!0&&Ot.endShadows(),(G&&E.hasRenderPass())===!1){let Tt=R.opaque,Mt=R.transmissive;if(b.setupLights(),B.isArrayCamera){let Rt=B.cameras;if(Mt.length>0)for(let Lt=0,Kt=Rt.length;Lt<Kt;Lt++){let Qt=Rt[Lt];Sl(Tt,Mt,S,Qt)}Wt&&Jt.render(S);for(let Lt=0,Kt=Rt.length;Lt<Kt;Lt++){let Qt=Rt[Lt];bl(R,S,Qt,Qt.viewport)}}else Mt.length>0&&Sl(Tt,Mt,S,B),Wt&&Jt.render(S),bl(R,S,B)}q!==null&&F===0&&(Z.updateMultisampleRenderTarget(q),Z.updateRenderTargetMipmap(q)),G&&E.end(A),S.isScene===!0&&S.onAfterRender(A,S,B),St.resetDefaultState(),K=-1,tt=null,x.pop(),x.length>0?(b=x[x.length-1],Z.setTextureUnits(b.state.textureUnits),at===!0&&Ot.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?R=w[w.length-1]:R=null,D!==null&&D.renderEnd()};function Na(S,B,X,G){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLightProbeGrid)b.pushLightProbeGrid(S);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||nt.intersectsSprite(S)){G&&kt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(vt);let Tt=Q.update(S),Mt=S.material;Mt.visible&&R.push(S,Tt,Mt,X,kt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||nt.intersectsObject(S))){let Tt=Q.update(S),Mt=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),kt.copy(S.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),kt.copy(Tt.boundingSphere.center)),kt.applyMatrix4(S.matrixWorld).applyMatrix4(vt)),Array.isArray(Mt)){let Rt=Tt.groups;for(let Lt=0,Kt=Rt.length;Lt<Kt;Lt++){let Qt=Rt[Lt],Dt=Mt[Qt.materialIndex];Dt&&Dt.visible&&R.push(S,Tt,Dt,X,kt.z,Qt)}}else Mt.visible&&R.push(S,Tt,Mt,X,kt.z,null)}}let bt=S.children;for(let Tt=0,Mt=bt.length;Tt<Mt;Tt++)Na(bt[Tt],B,X,G)}function bl(S,B,X,G){let{opaque:V,transmissive:bt,transparent:Tt}=S;b.setupLightsView(X),at===!0&&Ot.setGlobalState(A.clippingPlanes,X),G&&y.viewport(st.copy(G)),V.length>0&&vr(V,B,X),bt.length>0&&vr(bt,B,X),Tt.length>0&&vr(Tt,B,X),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Sl(S,B,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){let Dt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new nn(1,1,{generateMipmaps:!0,type:Dt?Ln:$e,minFilter:li,samples:Math.max(4,P.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace})}let bt=b.state.transmissionRenderTarget[G.id],Tt=G.viewport||st;bt.setSize(Tt.z*A.transmissionResolutionScale,Tt.w*A.transmissionResolutionScale);let Mt=A.getRenderTarget(),Rt=A.getActiveCubeFace(),Lt=A.getActiveMipmapLevel();A.setRenderTarget(bt),A.getClearColor(ae),jt=A.getClearAlpha(),jt<1&&A.setClearColor(16777215,.5),A.clear(),Wt&&Jt.render(X);let Kt=A.toneMapping;A.toneMapping=gn;let Qt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),at===!0&&Ot.setGlobalState(A.clippingPlanes,G),vr(S,X,G),Z.updateMultisampleRenderTarget(bt),Z.updateRenderTargetMipmap(bt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let fe=0,Te=B.length;fe<Te;fe++){let Ee=B[fe],{object:pe,geometry:Ve,material:Et,group:je}=Ee;if(Et.side===qe&&pe.layers.test(G.layers)){let re=Et.side;Et.side=Ge,Et.needsUpdate=!0,El(pe,X,G,Ve,Et,je),Et.side=re,Et.needsUpdate=!0,Dt=!0}}Dt===!0&&(Z.updateMultisampleRenderTarget(bt),Z.updateRenderTargetMipmap(bt))}A.setRenderTarget(Mt,Rt,Lt),A.setClearColor(ae,jt),Qt!==void 0&&(G.viewport=Qt),A.toneMapping=Kt}function vr(S,B,X){let G=B.isScene===!0?B.overrideMaterial:null;for(let V=0,bt=S.length;V<bt;V++){let Tt=S[V],{object:Mt,geometry:Rt,group:Lt}=Tt,Kt=Tt.material;Kt.allowOverride===!0&&G!==null&&(Kt=G),Mt.layers.test(X.layers)&&El(Mt,B,X,Rt,Kt,Lt)}}function El(S,B,X,G,V,bt){S.onBeforeRender(A,B,X,G,V,bt),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(A,B,X,G,S,bt),V.transparent===!0&&V.side===qe&&V.forceSinglePass===!1?(V.side=Ge,V.needsUpdate=!0,A.renderBufferDirect(X,B,G,V,S,bt),V.side=Hn,V.needsUpdate=!0,A.renderBufferDirect(X,B,G,V,S,bt),V.side=qe):A.renderBufferDirect(X,B,G,V,S,bt),S.onAfterRender(A,B,X,G,V,bt)}function Mr(S,B,X){B.isScene!==!0&&(B=Pt);let G=W.get(S),V=b.state.lights,bt=b.state.shadowsArray,Tt=V.state.version,Mt=pt.getParameters(S,V.state,bt,B,X,b.state.lightProbeGridArray),Rt=pt.getProgramCacheKey(Mt),Lt=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?B.environment:null,G.fog=B.fog;let Kt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=ht.get(S.envMap||G.environment,Kt),G.envMapRotation=G.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,Lt===void 0&&(S.addEventListener("dispose",Mn),Lt=new Map,G.programs=Lt);let Qt=Lt.get(Rt);if(Qt!==void 0){if(G.currentProgram===Qt&&G.lightsStateVersion===Tt)return wl(S,Mt),Qt}else Mt.uniforms=pt.getUniforms(S),D!==null&&S.isNodeMaterial&&D.build(S,X,Mt),S.onBeforeCompile(Mt,A),Qt=pt.acquireProgram(Mt,Rt),Lt.set(Rt,Qt),G.uniforms=Mt.uniforms;let Dt=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Dt.clippingPlanes=Ot.uniform),wl(S,Mt),G.needsLights=Wu(S),G.lightsStateVersion=Tt,G.needsLights&&(Dt.ambientLightColor.value=V.state.ambient,Dt.lightProbe.value=V.state.probe,Dt.directionalLights.value=V.state.directional,Dt.directionalLightShadows.value=V.state.directionalShadow,Dt.spotLights.value=V.state.spot,Dt.spotLightShadows.value=V.state.spotShadow,Dt.rectAreaLights.value=V.state.rectArea,Dt.ltc_1.value=V.state.rectAreaLTC1,Dt.ltc_2.value=V.state.rectAreaLTC2,Dt.pointLights.value=V.state.point,Dt.pointLightShadows.value=V.state.pointShadow,Dt.hemisphereLights.value=V.state.hemi,Dt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Dt.spotLightMatrix.value=V.state.spotLightMatrix,Dt.spotLightMap.value=V.state.spotLightMap,Dt.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=Qt,G.uniformsList=null,Qt}function Tl(S){if(S.uniformsList===null){let B=S.currentProgram.getUniforms();S.uniformsList=ls.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function wl(S,B){let X=W.get(S);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Hu(S,B){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(B.matrixWorld);for(let X=0,G=S.length;X<G;X++){let V=S[X];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function Gu(S,B,X,G,V){B.isScene!==!0&&(B=Pt),Z.resetTextureUnits();let bt=B.fog,Tt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?B.environment:null,Mt=q===null?A.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ie.workingColorSpace,Rt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Lt=ht.get(G.envMap||Tt,Rt),Kt=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Qt=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Dt=!!X.morphAttributes.position,fe=!!X.morphAttributes.normal,Te=!!X.morphAttributes.color,Ee=gn;G.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ee=A.toneMapping);let pe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ve=pe!==void 0?pe.length:0,Et=W.get(G),je=b.state.lights;if(at===!0&&(ot===!0||S!==tt)){let xe=S===tt&&G.id===K;Ot.setState(G,S,xe)}let re=!1;G.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==je.state.version||Et.outputColorSpace!==Mt||V.isBatchedMesh&&Et.batching===!1||!V.isBatchedMesh&&Et.batching===!0||V.isBatchedMesh&&Et.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Et.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Et.instancing===!1||!V.isInstancedMesh&&Et.instancing===!0||V.isSkinnedMesh&&Et.skinning===!1||!V.isSkinnedMesh&&Et.skinning===!0||V.isInstancedMesh&&Et.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Et.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Et.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Et.instancingMorph===!1&&V.morphTexture!==null||Et.envMap!==Lt||G.fog===!0&&Et.fog!==bt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Ot.numPlanes||Et.numIntersection!==Ot.numIntersection)||Et.vertexAlphas!==Kt||Et.vertexTangents!==Qt||Et.morphTargets!==Dt||Et.morphNormals!==fe||Et.morphColors!==Te||Et.toneMapping!==Ee||Et.morphTargetsCount!==Ve||!!Et.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,Et.__version=G.version);let an=Et.currentProgram;re===!0&&(an=Mr(G,B,V),D&&G.isNodeMaterial&&D.onUpdateProgram(G,an,Et));let bn=!1,Xn=!1,Ii=!1,me=an.getUniforms(),we=Et.uniforms;if(y.useProgram(an.program)&&(bn=!0,Xn=!0,Ii=!0),G.id!==K&&(K=G.id,Xn=!0),Et.needsLights){let xe=Hu(b.state.lightProbeGridArray,V);Et.lightProbeGrid!==xe&&(Et.lightProbeGrid=xe,Xn=!0)}if(bn||tt!==S){y.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),me.setValue(U,"projectionMatrix",S.projectionMatrix),me.setValue(U,"viewMatrix",S.matrixWorldInverse);let Yn=me.map.cameraPosition;Yn!==void 0&&Yn.setValue(U,xt.setFromMatrixPosition(S.matrixWorld)),P.logarithmicDepthBuffer&&me.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&me.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),tt!==S&&(tt=S,Xn=!0,Ii=!0)}if(Et.needsLights&&(je.state.directionalShadowMap.length>0&&me.setValue(U,"directionalShadowMap",je.state.directionalShadowMap,Z),je.state.spotShadowMap.length>0&&me.setValue(U,"spotShadowMap",je.state.spotShadowMap,Z),je.state.pointShadowMap.length>0&&me.setValue(U,"pointShadowMap",je.state.pointShadowMap,Z)),V.isSkinnedMesh){me.setOptional(U,V,"bindMatrix"),me.setOptional(U,V,"bindMatrixInverse");let xe=V.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),me.setValue(U,"boneTexture",xe.boneTexture,Z))}V.isBatchedMesh&&(me.setOptional(U,V,"batchingTexture"),me.setValue(U,"batchingTexture",V._matricesTexture,Z),me.setOptional(U,V,"batchingIdTexture"),me.setValue(U,"batchingIdTexture",V._indirectTexture,Z),me.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&me.setValue(U,"batchingColorTexture",V._colorsTexture,Z));let qn=X.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&O.update(V,X,an),(Xn||Et.receiveShadow!==V.receiveShadow)&&(Et.receiveShadow=V.receiveShadow,me.setValue(U,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&B.environment!==null&&(we.envMapIntensity.value=B.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=cx()),Xn){if(me.setValue(U,"toneMappingExposure",A.toneMappingExposure),Et.needsLights&&Vu(we,Ii),bt&&G.fog===!0&&It.refreshFogUniforms(we,bt),It.refreshMaterialUniforms(we,G,rt,ct,b.state.transmissionRenderTarget[S.id]),Et.needsLights&&Et.lightProbeGrid){let xe=Et.lightProbeGrid;we.probesSH.value=xe.texture,we.probesMin.value.copy(xe.boundingBox.min),we.probesMax.value.copy(xe.boundingBox.max),we.probesResolution.value.copy(xe.resolution)}ls.upload(U,Tl(Et),we,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ls.upload(U,Tl(Et),we,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&me.setValue(U,"center",V.center),me.setValue(U,"modelViewMatrix",V.modelViewMatrix),me.setValue(U,"normalMatrix",V.normalMatrix),me.setValue(U,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){let xe=G.uniformsGroups;for(let Yn=0,Li=xe.length;Yn<Li;Yn++){let Al=xe[Yn];it.update(Al,an),it.bind(Al,an)}}return an}function Vu(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function Wu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(S,B,X){let G=W.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),W.get(S.texture).__webglTexture=B,W.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,B){let X=W.get(S);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,X=0){q=S,N=B,F=X;let G=null,V=!1,bt=!1;if(S){let Mt=W.get(S);if(Mt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(U.FRAMEBUFFER,Mt.__webglFramebuffer),st.copy(S.viewport),ft.copy(S.scissor),qt=S.scissorTest,y.viewport(st),y.scissor(ft),y.setScissorTest(qt),K=-1;return}else if(Mt.__webglFramebuffer===void 0)Z.setupRenderTarget(S);else if(Mt.__hasExternalTextures)Z.rebindTextures(S,W.get(S.texture).__webglTexture,W.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Kt=S.depthTexture;if(Mt.__boundDepthTexture!==Kt){if(Kt!==null&&W.has(Kt)&&(S.width!==Kt.image.width||S.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(S)}}let Rt=S.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(bt=!0);let Lt=W.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Lt[B])?G=Lt[B][X]:G=Lt[B],V=!0):S.samples>0&&Z.useMultisampledRTT(S)===!1?G=W.get(S).__webglMultisampledFramebuffer:Array.isArray(Lt)?G=Lt[X]:G=Lt,st.copy(S.viewport),ft.copy(S.scissor),qt=S.scissorTest}else st.copy(Nt).multiplyScalar(rt).floor(),ft.copy(oe).multiplyScalar(rt).floor(),qt=Xt;if(X!==0&&(G=k),y.bindFramebuffer(U.FRAMEBUFFER,G)&&y.drawBuffers(S,G),y.viewport(st),y.scissor(ft),y.setScissorTest(qt),V){let Mt=W.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Mt.__webglTexture,X)}else if(bt){let Mt=B;for(let Rt=0;Rt<S.textures.length;Rt++){let Lt=W.get(S.textures[Rt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Rt,Lt.__webglTexture,X,Mt)}}else if(S!==null&&X!==0){let Mt=W.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Mt.__webglTexture,X)}K=-1},this.readRenderTargetPixels=function(S,B,X,G,V,bt,Tt,Mt=0){if(!(S&&S.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt){y.bindFramebuffer(U.FRAMEBUFFER,Rt);try{let Lt=S.textures[Mt],Kt=Lt.format,Qt=Lt.type;if(S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Mt),!P.textureFormatReadable(Kt)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(Qt)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-G&&X>=0&&X<=S.height-V&&U.readPixels(B,X,G,V,gt.convert(Kt),gt.convert(Qt),bt)}finally{let Lt=q!==null?W.get(q).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(S,B,X,G,V,bt,Tt,Mt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt)if(B>=0&&B<=S.width-G&&X>=0&&X<=S.height-V){y.bindFramebuffer(U.FRAMEBUFFER,Rt);let Lt=S.textures[Mt],Kt=Lt.format,Qt=Lt.type;if(S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Mt),!P.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Dt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Dt),U.bufferData(U.PIXEL_PACK_BUFFER,bt.byteLength,U.STREAM_READ),U.readPixels(B,X,G,V,gt.convert(Kt),gt.convert(Qt),0);let fe=q!==null?W.get(q).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,fe);let Te=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Oh(U,Te,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Dt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,bt),U.deleteBuffer(Dt),U.deleteSync(Te),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,B=null,X=0){let G=Math.pow(2,-X),V=Math.floor(S.image.width*G),bt=Math.floor(S.image.height*G),Tt=B!==null?B.x:0,Mt=B!==null?B.y:0;Z.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,Tt,Mt,V,bt),y.unbindTexture()},this.copyTextureToTexture=function(S,B,X=null,G=null,V=0,bt=0){let Tt,Mt,Rt,Lt,Kt,Qt,Dt,fe,Te,Ee=S.isCompressedTexture?S.mipmaps[bt]:S.image;if(X!==null)Tt=X.max.x-X.min.x,Mt=X.max.y-X.min.y,Rt=X.isBox3?X.max.z-X.min.z:1,Lt=X.min.x,Kt=X.min.y,Qt=X.isBox3?X.min.z:0;else{let we=Math.pow(2,-V);Tt=Math.floor(Ee.width*we),Mt=Math.floor(Ee.height*we),S.isDataArrayTexture?Rt=Ee.depth:S.isData3DTexture?Rt=Math.floor(Ee.depth*we):Rt=1,Lt=0,Kt=0,Qt=0}G!==null?(Dt=G.x,fe=G.y,Te=G.z):(Dt=0,fe=0,Te=0);let pe=gt.convert(B.format),Ve=gt.convert(B.type),Et;B.isData3DTexture?(Z.setTexture3D(B,0),Et=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Z.setTexture2DArray(B,0),Et=U.TEXTURE_2D_ARRAY):(Z.setTexture2D(B,0),Et=U.TEXTURE_2D),y.activeTexture(U.TEXTURE0),y.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),y.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),y.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let je=y.getParameter(U.UNPACK_ROW_LENGTH),re=y.getParameter(U.UNPACK_IMAGE_HEIGHT),an=y.getParameter(U.UNPACK_SKIP_PIXELS),bn=y.getParameter(U.UNPACK_SKIP_ROWS),Xn=y.getParameter(U.UNPACK_SKIP_IMAGES);y.pixelStorei(U.UNPACK_ROW_LENGTH,Ee.width),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ee.height),y.pixelStorei(U.UNPACK_SKIP_PIXELS,Lt),y.pixelStorei(U.UNPACK_SKIP_ROWS,Kt),y.pixelStorei(U.UNPACK_SKIP_IMAGES,Qt);let Ii=S.isDataArrayTexture||S.isData3DTexture,me=B.isDataArrayTexture||B.isData3DTexture;if(S.isDepthTexture){let we=W.get(S),qn=W.get(B),xe=W.get(we.__renderTarget),Yn=W.get(qn.__renderTarget);y.bindFramebuffer(U.READ_FRAMEBUFFER,xe.__webglFramebuffer),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Li=0;Li<Rt;Li++)Ii&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(S).__webglTexture,V,Qt+Li),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(B).__webglTexture,bt,Te+Li)),U.blitFramebuffer(Lt,Kt,Tt,Mt,Dt,fe,Tt,Mt,U.DEPTH_BUFFER_BIT,U.NEAREST);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||W.has(S)){let we=W.get(S),qn=W.get(B);y.bindFramebuffer(U.READ_FRAMEBUFFER,H),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,L);for(let xe=0;xe<Rt;xe++)Ii?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,we.__webglTexture,V,Qt+xe):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,we.__webglTexture,V),me?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,qn.__webglTexture,bt,Te+xe):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,qn.__webglTexture,bt),V!==0?U.blitFramebuffer(Lt,Kt,Tt,Mt,Dt,fe,Tt,Mt,U.COLOR_BUFFER_BIT,U.NEAREST):me?U.copyTexSubImage3D(Et,bt,Dt,fe,Te+xe,Lt,Kt,Tt,Mt):U.copyTexSubImage2D(Et,bt,Dt,fe,Lt,Kt,Tt,Mt);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else me?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(Et,bt,Dt,fe,Te,Tt,Mt,Rt,pe,Ve,Ee.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Et,bt,Dt,fe,Te,Tt,Mt,Rt,pe,Ee.data):U.texSubImage3D(Et,bt,Dt,fe,Te,Tt,Mt,Rt,pe,Ve,Ee):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,bt,Dt,fe,Tt,Mt,pe,Ve,Ee.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,bt,Dt,fe,Ee.width,Ee.height,pe,Ee.data):U.texSubImage2D(U.TEXTURE_2D,bt,Dt,fe,Tt,Mt,pe,Ve,Ee);y.pixelStorei(U.UNPACK_ROW_LENGTH,je),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,re),y.pixelStorei(U.UNPACK_SKIP_PIXELS,an),y.pixelStorei(U.UNPACK_SKIP_ROWS,bn),y.pixelStorei(U.UNPACK_SKIP_IMAGES,Xn),bt===0&&B.generateMipmaps&&U.generateMipmap(Et),y.unbindTexture()},this.initRenderTarget=function(S){W.get(S).__webglFramebuffer===void 0&&Z.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Z.setTextureCube(S,0):S.isData3DTexture?Z.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Z.setTexture2DArray(S,0):Z.setTexture2D(S,0),y.unbindTexture()},this.resetState=function(){N=0,F=0,q=null,y.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var Mu=[[0,0,0],[0,0,-80],[25,2,-140],[75,4,-170],[130,2,-140],[150,0,-80],[135,-2,-20],[95,-3,25],[120,-1,75],[160,2,120],[140,4,180],[80,2,195],[30,0,160],[-35,-1,180],[-95,1,150],[-115,2,105],[-85,1,75],[-45,0,65],[-15,0,45]],bu={meadow:{id:"meadow",shortcut:[142,180],name:"Meadow Loop",points:Mu,theme:{skyTop:3116287,skyMid:8177919,skyLow:14218239,fog:14218239,ground:6082373,trees:[4114766,3126595,8051018,5427578,16751821,16765286],trunk:10115884,ambient:.85,sun:1.7,sunColor:16774368,hemiSky:12575743,clouds:16777215,curbA:"#ef4444",curbB:"#ffffff",padColor:"#ff7a00"}},sunset:{id:"sunset",shortcut:[142,180],name:"Sunset Bay",points:Mu.map(([s,t,e],n)=>[-s,t*1.6+(n%3===0?1.5:0),e]),theme:{skyTop:4930216,skyMid:16747100,skyLow:16766366,fog:16763296,ground:15781766,trees:[3064998,2533018,8115081,16752451],trunk:10512186,ambient:.8,sun:1.6,sunColor:16757370,hemiSky:16761504,clouds:16769232,curbA:"#ff7a00",curbB:"#fff3d6",padColor:"#ff3b8d"}},frosty:{id:"frosty",shortcut:[216,262],name:"Frosty Peaks",points:[[0,0,0],[0,0,-80],[-20,3,-130],[-70,6,-150],[-120,5,-120],[-130,3,-60],[-90,1,-20],[-60,0,30],[-100,2,80],[-80,5,140],[-20,7,160],[45,5,150],[95,3,120],[100,1,75],[60,0,55],[20,0,40]],theme:{skyTop:6990312,skyMid:12575743,skyLow:15924223,fog:15398655,ground:16054527,trees:[15267071,10475720,8370392,13625599],trunk:8018500,ambient:.95,sun:1.4,sunColor:15398143,hemiSky:16777215,clouds:16777215,curbA:"#3b82f6",curbB:"#ffffff",padColor:"#00b4ff"}},neon:{id:"neon",shortcut:[228,262],name:"Neon Night",points:[[0,0,0],[0,0,-80],[10,2,-150],[60,4,-190],[120,3,-170],[140,1,-110],[110,0,-60],[130,-1,0],[180,1,40],[170,3,110],[110,4,140],[50,2,110],[20,0,140],[-40,1,170],[-110,3,155],[-165,4,105],[-130,2,40],[-90,1,55],[-45,0,60],[-12,0,45]],theme:{skyTop:460575,skyMid:2366046,skyLow:7024547,fog:2759518,ground:1911642,trees:[16732120,2746367,10906623,6094749],trunk:3813227,glow:!0,ambient:.55,sun:.9,sunColor:12167423,hemiSky:7035903,clouds:4865423,curbA:"#ff2fd0",curbB:"#2a2a5a",padColor:"#29e7ff"}}};function Ea(s){return bu[s||"meadow"]||bu.meadow}function Su(){let s=document.createElement("canvas");s.width=512,s.height=128;let t=s.getContext("2d"),e=4,n=16,i=s.width/n,o=s.height/e;for(let a=0;a<e;a++)for(let c=0;c<n;c++)t.fillStyle=(a+c)%2===0?"#ffffff":"#18181b",t.fillRect(c*i,a*o,i,o);t.fillStyle="#eab308",t.fillRect(0,0,s.width,6),t.fillRect(0,s.height-6,s.width,6);let r=new Pe(s);return r.wrapS=en,r.wrapT=en,r}function Eu(){let s=document.createElement("canvas");s.width=512,s.height=512;let t=s.getContext("2d");t.fillStyle="#41495e",t.fillRect(0,0,512,512);for(let o=0;o<6e3;o++){let r=Math.random()*512,a=Math.random()*512,c=Math.floor(62+Math.random()*12);t.fillStyle=`rgb(${c},${c+7},${c+21})`,t.fillRect(r,a,2,2)}t.fillStyle="#f8fafc";let e=8,n=512/e;for(let o=0;o<e;o++)t.fillRect(250,o*n+12,12,n-24);t.fillStyle="#eab308",t.fillRect(24,0,8,512),t.fillRect(480,0,8,512);let i=new Pe(s);return i.wrapS=en,i.wrapT=en,i.repeat.set(1,40),i}function Tu(s="#dc2626",t="#ffffff"){let e=document.createElement("canvas");e.width=128,e.height=256;let n=e.getContext("2d"),i=8,o=e.height/i;for(let a=0;a<i;a++)n.fillStyle=a%2===0?s:t,n.fillRect(0,a*o,e.width,o);let r=new Pe(e);return r.wrapS=en,r.wrapT=en,r.repeat.set(1,22),r}function xr(s,t,e){let n=document.createElement("canvas");n.width=512,n.height=128;let i=n.getContext("2d");return i.fillStyle=t,i.fillRect(0,0,512,128),i.fillStyle=e,i.fillRect(0,0,512,8),i.fillRect(0,120,512,8),i.font="bold 44px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillStyle=e,i.fillText(s,256,64),new Pe(n)}var Ta=class{constructor(t,e){$(this,"scene");$(this,"spline");$(this,"totalLength",0);$(this,"trackPoints",[]);$(this,"trackMesh",null);$(this,"sceneryGroup");$(this,"startingLightsGroup");$(this,"lightMeshes",[]);$(this,"animatedProps",[]);$(this,"roadWidth",18);$(this,"course");$(this,"shortcut",null);this.scene=t,this.course=Ea(e),this.sceneryGroup=new se,this.startingLightsGroup=new se,this.scene.add(this.sceneryGroup),this.scene.add(this.startingLightsGroup);let n=this.course.points.map(([i,o,r])=>new I(i,o,r));this.spline=new ii(n,!0,"centripetal",.4),this.totalLength=this.spline.getLength(),this.sampleTrackPoints(300),this.buildRoadMesh(),this.findShortcut(),this.buildTerrainAndHills(),this.buildStartGantry(),this.buildScenery(),this.buildBarriers(),this.buildShortcut()}sampleTrackPoints(t){this.trackPoints=[];let e=0,n=this.spline.getPointAt(0);for(let i=0;i<t;i++){let o=i/t,r=this.spline.getPointAt(o),a=this.spline.getTangentAt(o).normalize(),c=new I(0,1,0),l=new I().crossVectors(a,c).normalize();i>0&&(e+=n.distanceTo(r)),n=r,this.trackPoints.push({x:r.x,y:r.y,z:r.z,tangentX:a.x,tangentY:a.y,tangentZ:a.z,normalX:l.x,normalY:l.y,normalZ:l.z,width:this.roadWidth,bank:0,distance:e})}}buildRoadMesh(){let e=this.roadWidth/2,n=new le,i=[],o=[],r=[],a=[],c=[],l=[],h=[],u=[],f=[],d=2.2;for(let A=0;A<=300;A++){let C=A%300/300,D=this.spline.getPointAt(C),k=this.spline.getTangentAt(C).normalize(),H=new I(-k.z,0,k.x).normalize(),L=D.clone().addScaledVector(H,-e),N=D.clone().addScaledVector(H,e);i.push(L.x,L.y+.05,L.z),i.push(N.x,N.y+.05,N.z);let F=A/300*60;o.push(0,F),o.push(1,F);let q=L.clone().addScaledVector(H,-d);a.push(q.x,q.y+.12,q.z),a.push(L.x,L.y+.06,L.z),c.push(0,F*2),c.push(1,F*2);let K=N.clone().addScaledVector(H,d);if(h.push(N.x,N.y+.06,N.z),h.push(K.x,K.y+.12,K.z),u.push(0,F*2),u.push(1,F*2),A<300){let tt=A*2,st=(A+1)*2;r.push(tt,tt+1,st),r.push(tt+1,st+1,st),l.push(tt,tt+1,st),l.push(tt+1,st+1,st),f.push(tt,tt+1,st),f.push(tt+1,st+1,st)}}n.setAttribute("position",new Gt(i,3)),n.setAttribute("uv",new Gt(o,2)),n.setIndex(r),n.computeVertexNormals();let p=Eu(),_=new Ft({map:p,roughness:.85,metalness:.1});this.trackMesh=new et(n,_),this.trackMesh.receiveShadow=!0,this.sceneryGroup.add(this.trackMesh);let g=Tu(this.course.theme.curbA,this.course.theme.curbB),m=new Ft({map:g,roughness:.7}),v=new le;v.setAttribute("position",new Gt(a,3)),v.setAttribute("uv",new Gt(c,2)),v.setIndex(l),v.computeVertexNormals();let T=new et(v,m);T.receiveShadow=!0,this.sceneryGroup.add(T);let M=new le;M.setAttribute("position",new Gt(h,3)),M.setAttribute("uv",new Gt(u,2)),M.setIndex(f),M.computeVertexNormals();let R=new et(M,m);R.receiveShadow=!0,this.sceneryGroup.add(R);let b=new He(this.roadWidth,4),w=Su(),x=new Ft({map:w,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2}),E=new et(b,x);E.rotation.x=-Math.PI/2,E.position.set(0,.08,0),this.sceneryGroup.add(E)}buildTerrainAndHills(){let t=new He(600,600,128,128);t.rotateX(-Math.PI/2);let e=t.attributes.position;for(let o=0;o<e.count;o++){let r=e.getX(o),a=e.getZ(o),c=this.getTerrainElevation(r,a),l=this.getClosestTrackPointInfo(r,a);l.dist<this.roadWidth*.5+6&&(c=Math.min(c,l.y-.35));let h=this.shortcut?this.segDist(r,a,this.shortcut.ax,this.shortcut.az,this.shortcut.bx,this.shortcut.bz):null;h&&h.d<this.shortcut.w/2+6&&(c=Math.min(c,this.shortcut.ay+(this.shortcut.by-this.shortcut.ay)*h.t-.3)),e.setY(o,c)}t.computeVertexNormals();let n=new Ft({color:5078031,roughness:.9,flatShading:!0}),i=new et(t,n);i.receiveShadow=!0,this.sceneryGroup.add(i)}findShortcut(){let t=this.course.shortcut;if(!t)return;let e=this.trackPoints[t[0]],n=this.trackPoints[t[1]];!e||!n||(this.shortcut={ax:e.x,ay:e.y,az:e.z,bx:n.x,by:n.y,bz:n.z,w:11,ia:t[0],ib:t[1]})}segDist(t,e,n,i,o,r){let a=o-n,c=r-i,l=a*a+c*c||1,h=Math.max(0,Math.min(1,((t-n)*a+(e-i)*c)/l)),u=n+a*h,f=i+c*h;return{d:Math.hypot(t-u,e-f),t:h}}onShortcut(t,e){let n=this.shortcut;if(!n)return null;let i=this.segDist(t,e,n.ax,n.az,n.bx,n.bz);return i.d>n.w/2+.8?null:n.ay+(n.by-n.ay)*i.t}buildShortcut(){let t=this.shortcut;if(!t)return;let e=document.createElement("canvas");e.width=64,e.height=256;let n=e.getContext("2d");n.fillStyle="#c98b4f",n.fillRect(0,0,64,256),n.fillStyle="#ffffff",n.fillRect(0,0,4,256),n.fillRect(60,0,4,256);for(let u=0;u<260;u++)n.fillStyle=Math.random()<.5?"rgba(90,55,25,.35)":"rgba(230,190,140,.35)",n.fillRect(Math.random()*64,Math.random()*256,3,3);n.fillStyle="rgba(70,40,20,.35)",n.fillRect(14,0,6,256),n.fillRect(44,0,6,256);let i=new Pe(e);i.wrapT=en;let o=Math.hypot(t.bx-t.ax,t.bz-t.az);i.repeat.set(1,o/10);let r=new He(t.w,o,1,8),a=new et(r,new Ft({map:i,roughness:1,polygonOffset:!0,polygonOffsetFactor:1}));a.rotation.x=-Math.PI/2,a.rotation.z=-Math.atan2(t.bx-t.ax,t.bz-t.az)+Math.PI,a.position.set((t.ax+t.bx)/2,(t.ay+t.by)/2-.05,(t.az+t.bz)/2),this.sceneryGroup.add(a);let c=new Ft({color:16742912}),l=(t.bx-t.ax)/o,h=(t.bz-t.az)/o;for(let u=12;u<o-12;u+=9)for(let f of[-1,1]){let d=new et(new Be(.45,1.2,8),c);d.position.set(t.ax+l*u+-h*f*(t.w/2+.6),t.ay+(t.by-t.ay)*(u/o)+.5,t.az+h*u+l*f*(t.w/2+.6)),this.sceneryGroup.add(d)}for(let[u,f,d,p,_]of[[t.ax,t.ay,t.az,t.bx,t.bz],[t.bx,t.by,t.bz,t.ax,t.az]]){let g=document.createElement("canvas");g.width=256,g.height=96;let m=g.getContext("2d");m.fillStyle="#ffc83d",m.fillRect(0,0,256,96),m.fillStyle="#1b1b3a",m.font="bold 44px sans-serif",m.textAlign="center",m.textBaseline="middle",m.fillText("SHORTCUT",128,50);let v=new Pe(g);v.colorSpace=Le;let T=new et(new He(4.2,1.6),new Ft({map:v,side:qe})),M=p-u,R=_-d,b=Math.hypot(M,R)||1,w=this.roadWidth/2+7,x=t.w/2+2.2,E=u+M/b*w+-R/b*x,A=d+R/b*w+M/b*x;T.position.set(E,f+2.6,A),T.lookAt(u,f+2.6,d);let C=new et(new _e(.12,.12,2.6,6),new Ft({color:7031339}));C.position.set(E,f+1.3,A),this.sceneryGroup.add(T,C)}}getClosestTrackPointInfo(t,e){let n=9999,i=0;for(let o=0;o<this.trackPoints.length;o+=4){let r=this.trackPoints[o],a=r.x-t,c=r.z-e,l=Math.sqrt(a*a+c*c);l<n&&(n=l,i=r.y)}return{dist:n,y:i}}getTerrainElevation(t,e){let{dist:n,y:i}=this.getClosestTrackPointInfo(t,e);if(n>25){let o=Math.sin(t*.02)*Math.cos(e*.02)*14+Math.sin(t*.05+e*.04)*6,a=Math.max(0,Math.min(1,(n-25)/(60-25))),c=i-.05,l=Math.max(-2,o-2);return c*(1-a)+l*a}else return i-.05}buildStartGantry(){let t=new se;t.position.set(0,0,0);let e=new Ft({color:3359061,roughness:.4,metalness:.7}),n=new Ft({map:xr("KARIO MART","#dc2626","#ffffff")}),i=this.roadWidth/2+2.5,o=9,r=new de(.8,o,.8),a=new et(r,e);a.position.set(-i,o/2,0),a.castShadow=!0,t.add(a);let c=new et(r,e);c.position.set(i,o/2,0),c.castShadow=!0,t.add(c);let l=new de(this.roadWidth+6,1.4,1.2),h=new et(l,e);h.position.set(0,o,0),h.castShadow=!0,t.add(h);let u=new He(this.roadWidth-2,2.2),f=new et(u,n);f.position.set(0,o+.3,-.62),f.rotation.y=Math.PI,t.add(f);let d=new et(u,n);d.position.set(0,o+.3,.62),t.add(d),this.lightMeshes=[];let p=new de(4.8,1.6,.6),_=new et(p,new Ft({color:1579035}));_.position.set(0,o-1.2,-.2),t.add(_);let g=[15680580,15680580,15680580];for(let m=0;m<3;m++){let v=new ne(.4,16,16),T=new Ft({color:2565930,emissive:0,roughness:.2}),M=new et(v,T);M.position.set((m-1)*1.4,o-1.2,-.5),t.add(M),this.lightMeshes.push(M)}this.startingLightsGroup.add(t)}setStartingLights(t){for(let e=0;e<3;e++){let n=this.lightMeshes[e];if(!n)continue;let i=n.material;t>=1&&t<=3?e<t?(i.color.setHex(15680580),i.emissive.setHex(15680580)):(i.color.setHex(2565930),i.emissive.setHex(0)):t===4?(i.color.setHex(2278750),i.emissive.setHex(2278750)):(i.color.setHex(2565930),i.emissive.setHex(0))}}buildScenery(){let t=new Ft({color:7877903,roughness:.9}),e=new Ft({color:1409085,roughness:.8,flatShading:!0}),n=new Ft({color:1467700,roughness:.8,flatShading:!0}),i=(o,r,a,c)=>{let l=new se;l.position.set(o,r,a),l.scale.set(c,c,c);let h=new _e(.3,.45,2.5,6),u=new et(h,t);u.position.y=1.25,u.castShadow=!0,l.add(u);let f=new et(new Be(2.2,3.2,6),e);f.position.y=3.5,f.castShadow=!0,l.add(f);let d=new et(new Be(1.7,2.8,6),n);d.position.y=5.2,d.castShadow=!0,l.add(d);let p=new et(new Be(1.2,2.2,6),e);return p.position.y=6.6,p.castShadow=!0,l.add(p),l};for(let o=0;o<90;o++){let r=o/90*Math.PI*2,a=60+o%7*22,c=Math.cos(r)*a+(Math.random()-.5)*30,l=Math.sin(r)*a+(Math.random()-.5)*30,{dist:h}=this.getClosestTrackPointInfo(c,l);if(h>this.roadWidth/2+6){let u=.8+Math.random()*.7,f=this.getTerrainElevation(c,l),d=i(c,f,l,u);this.sceneryGroup.add(d)}}this.buildGrandstand(-22,this.getTerrainElevation(-22,-45),-45,Math.PI/2),this.buildGrandstand(22,this.getTerrainElevation(22,-45),-45,-Math.PI/2),this.buildHotAirBalloon(60,45,-50,15680580,16436245),this.buildHotAirBalloon(-80,55,60,3900150,16777215);for(let[o,r]of[[120,60],[-110,-100],[200,-150],[-200,120],[60,-240]])this.getClosestTrackPointInfo(o,r).dist>this.roadWidth/2+14&&this.buildWindTurbine(o,this.getTerrainElevation(o,r),r)}buildGrandstand(t,e,n,i){let o=new se;o.position.set(t,e,n),o.rotation.y=i;let r=new Ft({color:4674921,roughness:.5}),a=new Ft({color:14427686,roughness:.4}),c=new Ft({color:3900150,roughness:.6}),l=5;for(let _=0;_<l;_++){let g=new de(24,.8,1.6),m=new et(g,r);m.position.set(0,(_+1)*.8,_*1.4),m.castShadow=!0,o.add(m);for(let v=0;v<12;v++){let T=new de(.7,.9,.6),M=[15680580,3900150,15381256,1096065,11032055,16777215],R=new Ft({color:M[Math.floor(Math.random()*M.length)]}),b=new et(T,R);b.position.set(-10+v*1.8+(Math.random()-.5)*.3,(_+1)*.8+.7,_*1.4),o.add(b)}}let h=new de(26,.4,9),u=new et(h,a);u.position.set(0,8,3),u.rotation.x=.15,u.castShadow=!0,o.add(u);let f=new _e(.2,.2,8,8),d=new et(f,r);d.position.set(-11,4,-1),o.add(d);let p=new et(f,r);p.position.set(11,4,-1),o.add(p),this.sceneryGroup.add(o)}buildHotAirBalloon(t,e,n,i,o){let r=new se;r.position.set(t,e,n);let a=new ne(7,14,14);a.scale(1,1.4,1);let c=new Ft({color:i,roughness:.4}),l=new et(a,c);l.castShadow=!0,r.add(l);let h=new de(2,1.6,2),u=new Ft({color:7877903,roughness:.9}),f=new et(h,u);f.position.set(0,-11,0),r.add(f),this.sceneryGroup.add(r);let d=e;this.animatedProps.push({mesh:r,update:p=>{r.position.y=d+Math.sin(p*.8+t)*2.5,r.rotation.y=p*.1}})}buildWindTurbine(t,e,n){let i=new se;i.position.set(t,e,n);let o=new Ft({color:15857145,roughness:.3}),r=new _e(.6,1.4,28,10),a=new et(r,o);a.position.y=14,a.castShadow=!0,i.add(a);let c=new ne(.9,10,10),l=new et(c,o);l.position.set(0,28,.8),i.add(l);let h=new se;h.position.set(0,28,1.2);for(let u=0;u<3;u++){let f=new de(.5,11,.1),d=new et(f,o);d.position.y=5.5;let p=new se;p.rotation.z=u*Math.PI*2/3,p.add(d),h.add(p)}i.add(h),this.sceneryGroup.add(i),this.animatedProps.push({mesh:h,update:(u,f)=>{h.rotation.z+=f*1.8}})}buildBarriers(){let t=[xr("\u26A1 TURBO CHARGE \u26A1","#1d4ed8","#ffffff"),xr("\u{1F525} APEX DRIFT \u{1F525}","#ea580c","#ffffff"),xr("\u{1F3C6} CHAMPIONSHIP \u{1F3C6}","#eab308","#000000")],e=[25,45,80,120,160,210,260],n=this.roadWidth/2+1.2;e.forEach((i,o)=>{if(i>=this.trackPoints.length)return;let r=this.trackPoints[i],a=t[o%t.length],c=new Ft({map:a,roughness:.5}),l=new de(.4,1.8,8),h=new et(l,c);h.position.set(r.x+r.normalX*n,r.y+.9,r.z+r.normalZ*n),!(this.shortcut&&this.segDist(h.position.x,h.position.z,this.shortcut.ax,this.shortcut.az,this.shortcut.bx,this.shortcut.bz).d<this.shortcut.w+4)&&(h.lookAt(h.position.x+r.tangentX,h.position.y,h.position.z+r.tangentZ),h.castShadow=!0,this.sceneryGroup.add(h))})}getClosestTrackPoint(t,e){let n=1/0,i=0;for(let r=0;r<this.trackPoints.length;r++){let a=this.trackPoints[r],c=a.x-t,l=a.z-e,h=c*c+l*l;h<n&&(n=h,i=r)}return{point:this.trackPoints[i],index:i,distanceToCenter:Math.sqrt(n)}}update(t,e){for(let n of this.animatedProps)n.update(t,e)}};function ul(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),o={},r={},a=s[0].morphTargetsRelative,c=new le,l=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(let h in o){let u=wu(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in r){let u=r[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<r[h].length;++_)d.push(r[h][_][f]);let p=wu(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function wu(s){let t,e,n,i=-1,o=0;for(let l=0;l<s.length;++l){let h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}let r=new t(o),a=new De(r,e,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<e;p++){let _=h.getComponent(f,p);a.setComponent(f+u,p,_)}}else r.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}var wa={cap:"mario",cat:"luigi",bow:"peach",bunny:"daisy",horns:"yoshi",antenna:"toad",crown:"bowser",bear:"donkeykong"};function fl(s,t,e="race"){let n=wa[t.topper||"cap"]||"mario",i=(b,w=.48,x=0)=>{let E=new Ft({color:b,roughness:w,metalness:x});return E.userData.preserveShading=!0,E},o=i(16762266),r=i(16775659,.3),a=i(1514536,.3),c=i(4858902),l=i(16762158,.25,.55),h=i(14822448),u=i(1878598),f=i(2380489),d=new ne(1,e==="portrait"?28:20,e==="portrait"?20:14),p=(b,w,x,E,A,C,D,k)=>{let H=new et(d,w);return H.position.set(x,E,A),H.scale.set(C,D,k),H.castShadow=H.receiveShadow=!0,b.add(H),H},_=(b,w,x,E)=>{let A=new ii(x.map(D=>new I(D[0],D[1],D[2]))),C=new et(new Ti(A,e==="portrait"?20:12,E,e==="portrait"?8:6,!1),w);return C.castShadow=!0,b.add(C),C},g=(b,w,x,E,A=.025)=>{let C=new ln;C.moveTo(x[0][0],x[0][1]),x.slice(1).forEach(k=>C.lineTo(k[0],k[1])),C.closePath();let D=new et(new si(C,{depth:A,steps:1,bevelEnabled:!0,bevelSegments:3,bevelSize:.008,bevelThickness:.008}),w);return D.position.z=E,D.castShadow=!0,b.add(D),D},m=(b,w,x,E,A,C,D,k=0)=>{let H=new et(new Be(C,D,16),w);return H.position.set(x,E,A),H.rotation.z=k,H.castShadow=!0,b.add(H),H},v=new se;v.name=n+"-head",v.position.set(0,1.05,-.14),s.add(v);let T=(b,w,x,E,A=.074,C=.103,D=2387401)=>{p(b,r,w,x,E,A,C,.047),p(b,i(D,.22),w+.005,x,E+.043,A*.47,C*.65,.015),p(b,a,w+.006,x,E+.057,A*.25,C*.46,.009),p(b,r,w-.005,x+C*.3,E+.066,A*.14,C*.16,.005)},M=(b,w,x,E)=>_(b,i(10173485),[[-E,w+.018,x],[-E*.5,w-.015,x+.018],[0,w-.028,x+.024],[E*.6,w-.01,x+.014],[E,w+.025,x]],.009),R=(b,w=r)=>{for(let x of[-1,1])p(s,b,x*.29,.73,-.02,.13,.19,.14).rotation.z=x*.35,p(s,b,x*.3,.61,.13,.1,.18,.1).rotation.x=-.85,p(s,w,x*.23,.63,.26,.115,.105,.095),p(s,w,x*.17,.65,.29,.05,.065,.065),p(s,c,x*.19,.36,.34,.145,.115,.22)};if(n==="mario"||n==="luigi"){let b=n==="luigi",w=b?u:h;p(s,w,0,.7,-.13,.3,b?.34:.29,.24),p(s,f,0,.5,-.05,.29,.2,.26),p(s,f,0,.65,.075,.2,.19,.08);for(let C of[-1,1])p(s,f,C*.17,.77,.055,.05,.18,.055),p(s,l,C*.17,.7,.125,.039,.041,.016);R(w),p(v,o,0,.015,.005,b?.29:.32,b?.37:.32,.27),p(v,c,0,.045,-.12,.31,.3,.21);for(let C of[-1,1])p(v,o,C*.14,-.105,.13,.18,.16,.16),p(v,o,C*.31,-.01,-.005,.085,.115,.068),p(v,i(15308147),C*.327,-.012,.038,.04,.065,.022),p(v,c,C*.248,.035,.095,.045,.1,.065),T(v,C*.105,.09,.235,.074,b?.12:.105),_(v,c,[[C*.045,.218,.245],[C*.105,.245,.23],[C*.17,.215,.215]],.025);p(v,o,0,-.01,.29,b?.105:.13,.115,.15);let x=new ln;x.moveTo(-.21,-.07),x.quadraticCurveTo(-.12,-.105,0,-.085),x.quadraticCurveTo(.12,-.105,.21,-.07),x.quadraticCurveTo(.215,-.165,.145,-.145),x.quadraticCurveTo(.11,-.195,.07,-.16),x.quadraticCurveTo(.035,-.195,0,-.16),x.quadraticCurveTo(-.035,-.195,-.07,-.16),x.quadraticCurveTo(-.11,-.195,-.145,-.145),x.quadraticCurveTo(-.215,-.165,-.21,-.07);let E=new et(new si(x,{depth:.03,bevelEnabled:!0,bevelSegments:3,bevelSize:.009,bevelThickness:.009,curveSegments:12}),c);E.position.z=.267,v.add(E),M(v,-.194,.235,.092),p(v,w,0,b?.34:.31,-.015,.35,.2,.31),p(v,w,0,.245,.16,.35,.035,.26),p(v,w,0,.23,.21,.34,.017,.23),p(v,r,0,.355,.279,.09,.079,.018);let A=g(v,w,b?[[-.031,.348],[-.031,.262],[.034,.262],[.034,.28],[-.01,.28],[-.01,.348]]:[[-.052,.267],[-.052,.342],[-.03,.342],[0,.303],[.03,.342],[.052,.342],[.052,.267],[.032,.267],[.032,.311],[0,.279],[-.032,.311],[-.032,.267]],.3,.006);A.position.y=.05}else if(n==="peach"||n==="daisy"){let b=n==="daisy",w=i(b?10174229:16172099),x=i(b?16759585:15891380),E=i(b?15956502:14171782),A=i(b?2537114:2264036,.12,.2);p(s,x,0,.65,-.13,.3,.34,.25),R(x);for(let N of[-1,1])p(s,x,N*.27,.82,-.09,.16,.15,.15);p(s,E,0,.57,.08,.25,.13,.11),p(s,l,0,.7,.13,.074,.095,.035),p(s,A,0,.7,.163,.047,.068,.02),p(v,w,0,.015,-.13,.33,.37,.23);let C=new ne(1,e==="portrait"?56:32,e==="portrait"?40:24),D=C.attributes.position;for(let N=0;N<D.count;N++){let F=D.getX(N),q=D.getY(N),K=D.getZ(N),tt=q<-.15?1-(-q-.15)*.18:1,st=F*.245*tt,ft=q*.255+.02,qt=K>0?.033*Math.exp(-((st/.035)**2)-((ft+.012)/.045)**2):0;D.setXYZ(N,st,ft,K*.22+.035+qt)}C.computeVertexNormals();let k=new et(C,o);k.name="princess-face",k.castShadow=k.receiveShadow=!0,v.add(k);for(let N of[-1,1])p(v,w,N*.257,-.12,-.06,.105,b?.23:.36,.14).rotation.z=N*.15,p(v,w,N*.265,-.31,-.045,.115,.13,.16),T(v,N*.092,.04,.226,.069,.096,b?2139824:2592204),_(v,a,[[N*.04,.108,.248],[N*.09,.141,.247],[N*.15,.113,.236],[N*.18,.135,.218]],.011),_(v,w,[[N*.045,.19,.205],[N*.1,.207,.194],[N*.16,.183,.17]],.012),p(v,i(15965594),N*.156,-.09,.213,.049,.025,.008),p(v,l,N*.257,-.105,.087,.047,.06,.035),p(v,A,N*.257,-.105,.116,.032,.043,.016);let H=i(14306932);p(v,H,-.012,-.11,.24,.019,.009,.007),p(v,H,.012,-.11,.24,.019,.009,.007),p(v,H,0,-.123,.238,.026,.007,.006),p(v,w,-.11,.22,.14,.16,.063,.07).rotation.z=-.35,p(v,w,.115,.215,.13,.15,.073,.07).rotation.z=.45,p(v,w,.025,.145,.225,.062,.1,.042);let L=new et(new _e(.18,.15,.13,16),l);L.position.set(0,.34,-.025),v.add(L);for(let N=0;N<5;N++){let F=N*Math.PI*2/5;m(v,l,Math.sin(F)*.155,.465,Math.cos(F)*.155-.025,.052,.16),p(v,l,Math.sin(F)*.155,.547,Math.cos(F)*.155-.025,.024,.024,.024)}p(v,i(15810153,.15,.1),0,.356,.159,.045,.055,.018)}else if(n==="toad"){p(s,r,0,.64,-.13,.26,.29,.22);for(let b of[-1,1])p(s,f,b*.185,.74,-.04,.1,.22,.22),_(s,l,[[b*.13,.89,.12],[b*.12,.73,.17],[b*.13,.57,.12]],.016);R(o,o),p(v,o,0,-.07,.015,.28,.27,.24);for(let b of[-1,1])p(v,a,b*.092,-.045,.243,.026,.066,.012),p(v,r,b*.092-.006,-.02,.255,.008,.015,.005);M(v,-.18,.226,.072),p(v,r,0,.24,-.025,.48,.34,.41);for(let[b,w]of[[0,.2],[Math.PI/2,.45],[-Math.PI/2,.45],[Math.PI,.3],[0,1.2]]){let x=new I(Math.sin(b)*Math.cos(w),Math.sin(w),Math.cos(b)*Math.cos(w));p(v,h,x.x*.474,.24+x.y*.336,-.025+x.z*.406,.145,.145,.018).quaternion.setFromUnitVectors(new I(0,0,1),x)}}else if(n==="yoshi"){p(s,u,0,.68,-.15,.31,.33,.27),p(s,r,0,.67,.066,.225,.28,.1),R(u,u),p(v,u,0,.045,-.045,.28,.34,.24);for(let w of[-1,1])p(v,u,w*.135,.2,.03,.15,.22,.15),T(v,w*.124,.21,.151,.082,.129,2106153);p(v,r,0,-.155,.2,.29,.115,.24),p(v,u,0,-.03,.235,.345,.245,.315);for(let w of[-1,1])p(v,i(1604405),w*.12,.045,.513,.026,.018,.009);M(v,-.2,.34,.2);let b=i(15949094);for(let w=0;w<3;w++)m(v,b,0,.3-w*.17,-.22,.075,.17);p(s,h,0,.77,-.365,.23,.1,.16),p(s,u,0,.48,-.42,.17,.14,.32);for(let w of[-1,1])p(s,b,w*.19,.37,.34,.15,.12,.23)}else if(n==="bowser"){let b=i(15312173),w=i(16767886),x=i(2328649),E=i(12071961);p(s,b,0,.69,-.13,.39,.36,.29),p(s,w,0,.63,.11,.28,.29,.12),R(b,b),p(s,x,0,.78,-.38,.4,.4,.18);for(let A of[-1,1])for(let C=0;C<2;C++)m(s,r,A*.23,.88-C*.22,-.51,.055,.18,A*.4);p(v,b,0,0,-.035,.36,.32,.27),p(v,w,0,-.14,.25,.36,.19,.22),p(v,i(6890527),0,-.16,.434,.24,.067,.017);for(let A of[-1,1]){T(v,A*.148,.09,.209,.086,.1,13450273),p(v,E,A*.15,.184,.225,.14,.049,.055).rotation.z=A*.28,m(v,r,A*.3,.29,-.015,.08,.29,-A*.4),p(v,i(10055727),A*.16,-.045,.424,.026,.019,.012),m(v,r,A*.175,-.13,.451,.037,.095,Math.PI),p(s,a,A*.32,.58,.13,.135,.075,.12);for(let C=0;C<3;C++)p(s,r,A*.32+Math.sin(C*2)*.09,.61+Math.cos(C*2)*.06,.22,.025,.028,.03)}for(let A=0;A<5;A++)m(v,E,(A-2)*.067,.44-Math.abs(A-2)*.035,-.07,.073,.25,-(A-2)*.15).rotation.x=-.3}else{let b=i(7616796),w=i(15251328);p(s,b,0,.67,-.12,.4,.38,.3),p(s,w,0,.67,.13,.27,.29,.1),R(b,b),p(v,b,0,.03,-.03,.38,.38,.28);for(let x of[-1,1])p(v,b,x*.34,-.005,-.04,.1,.13,.07),p(v,w,x*.35,0,.012,.05,.07,.025),p(v,w,x*.115,.06,.199,.145,.185,.079),T(v,x*.12,.08,.26,.066,.082,7881759);for(let x of[-1,1])p(v,w,x*.125,.165,.244,.17,.07,.06).rotation.z=x*.16;p(v,w,0,-.15,.24,.31,.2,.19),p(v,b,0,-.045,.4,.105,.059,.035);for(let x of[-1,1])p(v,a,x*.035,-.053,.431,.016,.012,.008);M(v,-.22,.38,.18);for(let x=0;x<3;x++)m(v,b,(x-1)*.085,.415-Math.abs(x-1)*.025,-.06,.09,.21,-(x-1)*.3);_(s,h,[[-.19,.86,.03],[0,.78,.2],[.19,.86,.03]],.034),g(s,h,[[0,.78],[-.085,.62],[0,.4],[.085,.62]],.225,.018)}return v}var _r=new I;function un(s,t,e,n,i,o){let r=2*Math.PI*i/4,a=Math.max(o-2*i,0),c=Math.PI/4;_r.copy(t),_r[n]=0,_r.normalize();let l=.5*r/(r+a),h=1-_r.angleTo(s)/c;return Math.sign(_r[e])===1?h*l:a/(r+a)+l+l*(1-h)}var us=class s extends de{constructor(t=1,e=1,n=1,i=2,o=.1){let r=i*2+1;if(o=Math.min(t/2,e/2,n/2,o),super(1,1,1,r,r,r),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:o},r===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new I,l=new I,h=new I(t,e,n).divideScalar(2).subScalar(o),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,_=new I,g=.5/r;for(let m=0,v=0;m<u.length;m+=3,v+=2)switch(c.fromArray(u,m),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[m+0]=h.x*Math.sign(c.x)+l.x*o,u[m+1]=h.y*Math.sign(c.y)+l.y*o,u[m+2]=h.z*Math.sign(c.z)+l.z*o,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/p)){case 0:_.set(1,0,0),d[v+0]=un(_,l,"z","y",o,n),d[v+1]=1-un(_,l,"y","z",o,e);break;case 1:_.set(-1,0,0),d[v+0]=1-un(_,l,"z","y",o,n),d[v+1]=1-un(_,l,"y","z",o,e);break;case 2:_.set(0,1,0),d[v+0]=1-un(_,l,"x","z",o,t),d[v+1]=un(_,l,"z","x",o,n);break;case 3:_.set(0,-1,0),d[v+0]=1-un(_,l,"x","z",o,t),d[v+1]=1-un(_,l,"z","x",o,n);break;case 4:_.set(0,0,1),d[v+0]=1-un(_,l,"x","y",o,t),d[v+1]=1-un(_,l,"y","x",o,e);break;case 5:_.set(0,0,-1),d[v+0]=un(_,l,"x","y",o,t),d[v+1]=1-un(_,l,"y","x",o,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};function Au(s,t){let e=wa[t.topper||"cap"]||"mario",n=e==="peach"||e==="daisy",i=e==="bowser"||e==="donkeykong",o=(L,N=.32,F=.15)=>{let q=new Ft({color:L,roughness:N,metalness:F});return q.userData.preserveShading=!0,q},r=o(t.color),a=o(16774366),c=o(2106932,.66,.05),l=o(13098731,.2,.7),h=o(16762434,.25,.6),u=o(e==="mario"||e==="luigi"?2643406:e==="toad"?15746110:e==="yoshi"?16774095:e==="bowser"?2657356:e==="donkeykong"?10313e3:16767093),f=n?h:l,d=new ne(1,20,14);function p(L,N,F,q,K){let tt=new et(L,N);return tt.position.set(F,q,K),tt.castShadow=tt.receiveShadow=!0,s.add(tt),tt}function _(L,N,F,q,K,tt,st,ft=.08){return p(new us(K,tt,st,2,Math.min(ft,tt/2-.001,K/2-.001,st/2-.001)),L,N,F,q)}function g(L,N,F,q,K,tt,st){let ft=p(d,L,N,F,q);return ft.scale.set(K,tt,st),ft}let m=_(c,0,.23,0,1.25,.14,2.35,.06);m.name="chassis",_(r,0,.38,-.24,1.12,.28,1.52,.13);let v=_(c,0,.67,-.39,.62,.64,.2,.085);v.rotation.x=.12,_(u,0,.83,-.45,.5,.19,.12,.05);for(let L of[-1,1]){let N=g(u,L*.64,.4,-.12,.22,i?.25:.19,.71);N.name="side-pod",_(f,L*.68,.36,-.08,.075,.065,1.03,.03);let F=p(new Ke(.37,.075,8,20,Math.PI),r,L*.77,.34,-.85);F.rotation.y=Math.PI/2}let T=g(r,0,.43,.77,i?.62:.55,n?.23:.21,e==="luigi"?.68:.6);T.name="hood";let M=(L,N,F,q)=>{let K=new I((N-T.position.x)/T.scale.x,0,(F-T.position.z)/T.scale.z);K.y=Math.sqrt(Math.max(0,1-K.x*K.x-K.z*K.z));let tt=new I(1,0,0).addScaledVector(K,-K.x).normalize(),st=K.clone().cross(tt).normalize(),ft=[],qt=[],ae=Y=>ft.push(T.position.x+Y.x*(T.scale.x+.003),T.position.y+Y.y*(T.scale.y+.003),T.position.z+Y.z*(T.scale.z+.003));ae(K);for(let Y=1;Y<=3;Y++)for(let ct=0;ct<20;ct++){let rt=ct*Math.PI/10,wt=q/Math.min(T.scale.x,T.scale.z)*Y/3;ae(K.clone().multiplyScalar(Math.cos(wt)).addScaledVector(tt,Math.cos(rt)*Math.sin(wt)).addScaledVector(st,Math.sin(rt)*Math.sin(wt)))}for(let Y=0;Y<20;Y++)qt.push(0,1+Y,1+(Y+1)%20);for(let Y=1;Y<3;Y++)for(let ct=0;ct<20;ct++){let rt=1+(Y-1)*20+ct,wt=1+(Y-1)*20+(ct+1)%20,Vt=1+Y*20+ct,Nt=1+Y*20+(ct+1)%20;qt.push(rt,Vt,Nt,rt,Nt,wt)}let jt=new le;jt.setAttribute("position",new Gt(ft,3)),jt.setIndex(qt),jt.computeVertexNormals(),p(jt,L,0,0,0)};if(e==="toad"){T.material=a;for(let[L,N,F]of[[0,.9,.16],[-.3,.64,.105],[.3,.64,.105]])M(u,L,N,F)}else if(e==="yoshi"){T.material=a,T.scale.set(.54,.32,.61),T.position.y=.46;for(let[L,N,F]of[[0,.88,.16],[-.28,.64,.11],[.27,.61,.1]])M(r,L,N,F)}else if(e==="bowser"){T.material=u,T.scale.set(.62,.3,.59);for(let L of[-1,1])for(let N of[.6,1.03]){let F=p(new Be(.075,.22,12),a,L*.39,.7,N);F.rotation.z=-L*.3}_(h,0,.36,1.35,1.36,.16,.15,.07)}else if(e==="donkeykong"){T.visible=!1;let L=o(10048296,.55,.02),N=o(4401433,.45,.15),F=p(new _e(.49,.49,.91,16),L,0,.43,.79);F.rotation.x=Math.PI/2,F.scale.z=.64;for(let q of[.39,.53,1.05,1.19]){let K=p(new Ke(.492,.029,6,24),N,0,.43,q);K.scale.y=.64}for(let q=0;q<10;q++){let K=q*Math.PI*2/10;_(N,Math.sin(K)*.49,.43+Math.cos(K)*.49*.64,.8,.015,.018,.68,.006)}}e!=="bowser"&&_(f,0,.25,1.27,1.4,.16,.25,.07),_(c,0,.39,1.3,.54,.15,.035,.015);for(let L=-2;L<=2;L++)_(l,L*.095,.39,1.324,.025,.1,.012,.005);for(let L of[-1,1]){let N=g(f,L*.48,.49,1.17,.105,.09,.046);N.rotation.y=L*.15,g(a,L*.48,.49,1.212,.073,.06,.025),g(o(16009541),L*.49,.51,-1.08,.085,.046,.033)}_(c,0,.44,-.88,.61,.34,.54,.07);for(let L=0;L<5;L++)_(l,0,.44+L*.052,-.9,.66,.018,.48,.007);for(let L of[-1,1]){let N=p(new _e(.08,.065,.41,12),l,L*.24,.38,-1.24);N.rotation.x=Math.PI/2;let F=p(new Os(.058,12),c,L*.24,.38,-1.45);F.rotation.y=Math.PI}let R=n?1:i?.88:.81;for(let L of[-1,1])_(f,L*.39,R-.18,-1.04,.055,.34,.06,.02);let b=_(n?r:u,0,R,-1.06,i?1.62:1.43,.095,.35,.04);b.name="rear-wing";for(let L of[-1,1])_(r,L*(i?.79:.69),R+.035,-1.06,.07,.22,.37,.025);if(e==="bowser")for(let L of[-.5,0,.5])p(new Be(.065,.2,12),a,L,R+.14,-1.06);if(e==="peach"||e==="daisy")for(let L of[-1,1])g(h,L*.63,R+.14,-1.04,.047,.047,.047);let w=new se;w.name=e+"-emblem",w.position.set(0,.61,1.02),w.rotation.x=-.7,s.add(w),e==="donkeykong"&&(w.position.set(0,.56,1.29),w.rotation.x=0);let x=(L,N,F=0,q=0,K=0)=>{let tt=new et(L,N);return tt.position.set(F,q,K),tt.castShadow=!0,w.add(tt),tt},E=x(new _e(.18,.18,.025,24),n?h:a);E.rotation.x=Math.PI/2;let A=(L,N=r)=>{let F=new ln;F.moveTo(L[0][0],L[0][1]),L.slice(1).forEach(q=>F.lineTo(q[0],q[1])),F.closePath(),x(new si(F,{depth:.015,bevelEnabled:!0,bevelSegments:2,bevelSize:.003,bevelThickness:.003}),N,0,0,.02)};if(e==="mario")A([[-.09,-.09],[-.09,.09],[-.05,.09],[0,.015],[.05,.09],[.09,.09],[.09,-.09],[.05,-.09],[.05,.02],[0,-.045],[-.05,.02],[-.05,-.09]]);else if(e==="luigi")A([[-.06,.1],[-.06,-.09],[.07,-.09],[.07,-.05],[-.015,-.05],[-.015,.1]]);else if(e==="peach")A([[-.12,-.06],[-.13,.07],[-.055,.015],[0,.12],[.055,.015],[.13,.07],[.12,-.06]],o(14435980));else if(e==="daisy"){for(let N=0;N<6;N++){let F=N*Math.PI/3,q=x(new ne(.052,10,8),a,Math.sin(F)*.077,Math.cos(F)*.077,.035);q.scale.z=.3}let L=x(new ne(.047,10,8),r,0,0,.055);L.scale.z=.3}else if(e==="toad"){let L=x(new ne(.113,16,10,0,Math.PI*2,0,Math.PI/2),u,0,-.015,.025);L.rotation.x=Math.PI/2;let N=x(new us(.075,.085,.025,1,.015),a,0,-.07,.035);N.name="mushroom-stem"}else if(e==="yoshi"){x(new ne(.105,14,10),a,0,0,.035).scale.set(.8,1,.2);let N=x(new ne(.035,10,8),r,.025,.02,.06);N.scale.z=.25}else e==="bowser"?A([[-.1,-.09],[-.12,.03],[-.055,.02],[-.04,.1],[0,.035],[.04,.1],[.055,.02],[.12,.03],[.1,-.09]],u):A([[-.065,.105],[-.065,-.015],[-.115,-.105],[-.055,-.105],[0,-.05],[.055,-.105],[.115,-.105],[.065,-.015],[.065,.105]],o(13971240));let C=new se;C.position.set(0,.59,-1.185),C.rotation.y=Math.PI,s.add(C);let D=new et(new us(.25,.18,.024,1,.02),a);C.add(D);let k={1:[1,2],2:[0,1,6,4,3],3:[0,1,6,2,3],4:[5,6,1,2],5:[0,5,6,2,3],6:[0,5,6,4,2,3],7:[0,1,2],8:[0,1,2,3,4,5,6],9:[0,1,2,3,5,6],0:[0,1,2,3,4,5]},H=[[0,.06],[.04,.03],[.04,-.03],[0,-.06],[-.04,-.03],[-.04,.03],[0,0]];for(let L of k[t.number%10]||k[0]){let N=L===0||L===3||L===6,F=new et(new de(N?.055:.012,N?.012:.045,.008),c);F.position.set(H[L][0],H[L][1],.018),C.add(F)}return s.userData.character=e,{paint:r,secondary:u,dark:c,chrome:l,trim:f,character:e,heavy:i}}function Ru(s){let t=new se,e=new se;t.add(e);let n=Au(e,s);t.name=n.character+"-kart";let i=fl(e,s),o=new et(new Ke(.15,.025,8,20),n.dark);o.position.set(0,.64,.27),o.rotation.x=-.5,e.add(o);let r=new et(new _e(.025,.025,.33,8),n.chrome);r.position.set(0,.49,.2),r.rotation.x=.45,e.add(r);let a=new et(new ne(.045,10,8),n.trim);a.position.copy(o.position),e.add(a);let c=new Ft({color:1448998,roughness:.85}),l=new Ft({color:3159876,roughness:.9});c.userData.preserveShading=l.userData.preserveShading=!0;function h(_,g){let m=new se,v=new se;m.add(v);let T=[[_*.58,-g/2-.005],[_*.86,-g/2],[_,-g*.28],[_,g*.28],[_*.86,g/2],[_*.58,g/2+.005]].map(([E,A])=>new lt(E,A)),M=new qs(T,24);M.rotateZ(Math.PI/2);let R=new et(M,c);R.castShadow=!0,v.add(R);let b=new _e(_*.59,_*.59,g+.012,20);b.rotateZ(Math.PI/2),v.add(new et(b,n.dark));let w=[],x=[];for(let E of[-1,1]){let A=new et(new Ke(_*.64,.018,6,24),n.trim);A.rotation.y=Math.PI/2,A.position.x=E*(g/2+.008),v.add(A);let C=new _e(_*.2,_*.2,.025,12);C.rotateZ(Math.PI/2);let D=new et(C,n.paint);D.position.x=E*(g/2+.027),v.add(D);for(let k=0;k<5;k++){let H=k*Math.PI*2/5,L=new de(.018,_*.48,.034);L.rotateX(H),L.translate(E*(g/2+.016),Math.cos(H)*_*.36,Math.sin(H)*_*.36),w.push(L)}}v.add(new et(ul(w),n.chrome)),w.forEach(E=>E.dispose());for(let E=0;E<18;E++){let A=E*Math.PI/9,C=new de(g*.72,.012,.032);C.rotateX(A),C.translate(0,Math.cos(A)*(_+.001),Math.sin(A)*(_+.001)),x.push(C)}return v.add(new et(ul(x),l)),x.forEach(E=>E.dispose()),m}let u=h(.26,.22);u.position.set(-.72,.26,.85),t.add(u);let f=h(.26,.22);f.position.set(.72,.26,.85),t.add(f);let d=h(.32,.32);d.position.set(-.76,.32,-.85),t.add(d);let p=h(.32,.32);return p.position.set(.76,.32,-.85),t.add(p),{rootGroup:t,bodyGroup:e,frontLeftWheel:u,frontRightWheel:f,rearLeftWheel:d,rearRightWheel:p,steeringWheel:o,driverHead:i,exhaustLeft:new I(-.24,.38,-1.45),exhaustRight:new I(.24,.38,-1.45),rearLeftSparkPos:new I(-.76,.15,-.95),rearRightSparkPos:new I(.76,.15,-.95)}}var Aa=class{constructor(){$(this,"group");$(this,"maxParticles",600);$(this,"particles",[]);$(this,"geometry");$(this,"material");$(this,"pointsMesh");$(this,"positions");$(this,"colors");$(this,"sizes");this.group=new se,this.positions=new Float32Array(this.maxParticles*3),this.colors=new Float32Array(this.maxParticles*3),this.sizes=new Float32Array(this.maxParticles),this.geometry=new le,this.geometry.setAttribute("position",new De(this.positions,3)),this.geometry.setAttribute("color",new De(this.colors,3)),this.geometry.setAttribute("size",new De(this.sizes,1));let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255, 255, 255, 1.0)"),n.addColorStop(.4,"rgba(255, 255, 255, 0.8)"),n.addColorStop(.8,"rgba(255, 255, 255, 0.2)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let i=new Pe(t);this.material=new ts({size:1,vertexColors:!0,transparent:!0,opacity:.9,blending:nr,depthWrite:!1,map:i}),this.pointsMesh=new Ds(this.geometry,this.material),this.pointsMesh.frustumCulled=!1,this.group.add(this.pointsMesh)}emitDriftSparks(t,e,n){let i=2+e,o=new Ut(3718648);e===2&&(o=new Ut(16347926)),e>=3&&(o=new Ut(11032055));for(let r=0;r<i&&!(this.particles.length>=this.maxParticles);r++){let a=(Math.random()-.5)*.4,c=new I(-Math.sin(n)*(1.5+Math.random()*2)+a,.8+Math.random()*1.5,-Math.cos(n)*(1.5+Math.random()*2)+a);this.particles.push({position:t.clone().add(new I((Math.random()-.5)*.3,.1+Math.random()*.2,(Math.random()-.5)*.3)),velocity:c,color:o.clone(),size:.4+Math.random()*.4,maxLife:.35+Math.random()*.2,life:0,opacity:1})}}emitBoostFlames(t,e){let i=[new Ut(3900150),new Ut(440020),new Ut(16777215)];for(let o=0;o<3&&!(this.particles.length>=this.maxParticles);o++){let r=e+Math.PI,a=new I(Math.sin(r)*(4+Math.random()*3),.3+Math.random()*.4,Math.cos(r)*(4+Math.random()*3));this.particles.push({position:t.clone().add(new I((Math.random()-.5)*.2,.1,(Math.random()-.5)*.2)),velocity:a,color:i[Math.floor(Math.random()*i.length)].clone(),size:.6+Math.random()*.5,maxLife:.25+Math.random()*.15,life:0,opacity:1})}}emitTireSmoke(t,e=!1){if(this.particles.length>=this.maxParticles)return;let n=e?new Ut(8702998):new Ut(13948120),i=new I((Math.random()-.5)*.8,.6+Math.random()*.8,(Math.random()-.5)*.8);this.particles.push({position:t.clone().add(new I((Math.random()-.5)*.2,.1,(Math.random()-.5)*.2)),velocity:i,color:n,size:.5+Math.random()*.6,maxLife:.4+Math.random()*.25,life:0,opacity:.6})}update(t){for(let r=this.particles.length-1;r>=0;r--){let a=this.particles[r];if(a.life+=t,a.life>=a.maxLife){this.particles.splice(r,1);continue}a.position.addScaledVector(a.velocity,t),a.velocity.y-=2*t,a.size=Math.max(.01,a.size*(1+t*.8))}let e=this.geometry.attributes.position,n=this.geometry.attributes.color,i=this.geometry.attributes.size,o=this.particles.length;for(let r=0;r<o;r++){let a=this.particles[r],c=1-a.life/a.maxLife;this.positions[r*3]=a.position.x,this.positions[r*3+1]=a.position.y,this.positions[r*3+2]=a.position.z,this.colors[r*3]=a.color.r*c,this.colors[r*3+1]=a.color.g*c,this.colors[r*3+2]=a.color.b*c,this.sizes[r]=a.size}for(let r=o;r<this.maxParticles;r++)this.sizes[r]=0,this.positions[r*3]=0,this.positions[r*3+1]=-999,this.positions[r*3+2]=0;e.needsUpdate=!0,n.needsUpdate=!0,i.needsUpdate=!0}clear(){this.particles=[]}};var dl=class{constructor(){$(this,"ctx",null);$(this,"isMuted",!1);$(this,"isInitialized",!1);$(this,"engineGain",null);$(this,"engineOsc1",null);$(this,"engineOsc2",null);$(this,"engineFilter",null);$(this,"screechGain",null);$(this,"screechFilter",null);$(this,"screechSource",null);$(this,"masterGain",null)}output(){return this.init(),this.ctx&&this.masterGain?{ctx:this.ctx,out:this.masterGain}:null}adopt(t){this.ctx!==t&&(this.isInitialized||(this.ctx=t,this.masterGain=t.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.6,t.currentTime),this.connectOutput(t),this.setupEngineSynth(),this.setupScreechSynth(),this.isInitialized=!0))}connectOutput(t){let e=t.createDynamicsCompressor();e.threshold.value=-15,e.knee.value=12,e.ratio.value=4,e.attack.value=.008,e.release.value=.18,this.masterGain.connect(e).connect(t.destination)}running(){return!!this.ctx&&this.ctx.state==="running"}init(){if(this.isInitialized&&this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.6,this.ctx.currentTime),this.connectOutput(this.ctx),this.setupEngineSynth(),this.setupScreechSynth(),this.isInitialized=!0}catch(t){console.warn("Web Audio API not supported or blocked:",t)}}setupEngineSynth(){!this.ctx||!this.masterGain||(this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(0,this.ctx.currentTime),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(600,this.ctx.currentTime),this.engineFilter.Q.setValueAtTime(.7,this.ctx.currentTime),this.engineOsc1=this.ctx.createOscillator(),this.engineOsc1.type="triangle",this.engineOsc1.frequency.setValueAtTime(55,this.ctx.currentTime),this.engineOsc2=this.ctx.createOscillator(),this.engineOsc2.type="triangle",this.engineOsc2.frequency.setValueAtTime(110,this.ctx.currentTime),this.engineOsc1.connect(this.engineFilter),this.engineOsc2.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.engineOsc1.start(),this.engineOsc2.start())}setupScreechSynth(){if(!this.ctx||!this.masterGain)return;let t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);for(let i=0;i<t;i++)n[i]=Math.random()*2-1;this.screechSource=this.ctx.createBufferSource(),this.screechSource.buffer=e,this.screechSource.loop=!0,this.screechFilter=this.ctx.createBiquadFilter(),this.screechFilter.type="bandpass",this.screechFilter.frequency.setValueAtTime(1400,this.ctx.currentTime),this.screechFilter.Q.setValueAtTime(3,this.ctx.currentTime),this.screechGain=this.ctx.createGain(),this.screechGain.gain.setValueAtTime(0,this.ctx.currentTime),this.screechSource.connect(this.screechFilter),this.screechFilter.connect(this.screechGain),this.screechGain.connect(this.masterGain),this.screechSource.start()}updateEngine(t,e,n){if(!this.ctx||!this.engineGain||!this.engineOsc1||!this.engineOsc2||!this.engineFilter)return;let i=this.ctx.currentTime,o=Math.abs(t),r=55+Math.min(o,1.6)*120;e&&(r+=25),n&&(r+=80);let a=400+o*1200+(e?400:0),c=.025+Math.min(o,1.6)*.065+(e?.025:0);this.engineOsc1.frequency.setTargetAtTime(r,i,.08),this.engineOsc2.frequency.setTargetAtTime(r*2.005,i,.08),this.engineFilter.frequency.setTargetAtTime(a,i,.08),this.engineGain.gain.setTargetAtTime(c,i,.08)}updateDriftScreech(t,e,n){if(!this.ctx||!this.screechGain||!this.screechFilter)return;let i=this.ctx.currentTime;if(t&&Math.abs(n)>5){let o=.04+e*.025,r=1200+e*500;this.screechGain.gain.setTargetAtTime(o,i,.05),this.screechFilter.frequency.setTargetAtTime(r,i,.05)}else this.screechGain.gain.setTargetAtTime(0,i,.05)}stopEngine(){!this.ctx||!this.engineGain||(this.engineGain.gain.setTargetAtTime(0,this.ctx.currentTime,.1),this.screechGain&&this.screechGain.gain.setTargetAtTime(0,this.ctx.currentTime,.1))}playCountdownBeep(t=!1){if(!this.ctx||!this.masterGain||this.isMuted)return;let e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();if(t){n.type="triangle",n.frequency.setValueAtTime(1046.5,e),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.001,e+.6);let o=this.ctx.createOscillator(),r=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(1318.5,e),r.gain.setValueAtTime(.2,e),r.gain.exponentialRampToValueAtTime(.001,e+.6),o.connect(r),r.connect(this.masterGain),o.start(e),o.stop(e+.6)}else n.type="square",n.frequency.setValueAtTime(440,e),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.001,e+.25);n.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+(t?.6:.25))}playBoostSound(){if(!this.ctx||!this.masterGain||this.isMuted)return;let t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(250,t),e.frequency.exponentialRampToValueAtTime(950,t+.35);let i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(1200,t),i.frequency.exponentialRampToValueAtTime(4e3,t+.35),n.gain.setValueAtTime(.25,t),n.gain.exponentialRampToValueAtTime(.001,t+.45),e.connect(i),i.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.45)}playCollisionSound(t=1){if(!this.ctx||!this.masterGain||this.isMuted)return;let e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(140,e),n.frequency.exponentialRampToValueAtTime(35,e+.18);let o=Math.min(Math.max(t,.2),1);i.gain.setValueAtTime(.4*o,e),i.gain.exponentialRampToValueAtTime(.001,e+.2),n.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+.2)}playLapChime(t=!1){if(!this.ctx||!this.masterGain||this.isMuted)return;(t?[659.25,880,1174.66]:[587.33,880]).forEach((n,i)=>{if(!this.ctx||!this.masterGain)return;let o=this.ctx.currentTime+i*.08,r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n,o),a.gain.setValueAtTime(.25,o),a.gain.exponentialRampToValueAtTime(.001,o+.5),r.connect(a),a.connect(this.masterGain),r.start(o),r.stop(o+.55)})}playFinishFanfare(){if(!this.ctx||!this.masterGain||this.isMuted)return;let t=[{f:523.25,d:.12},{f:659.25,d:.12},{f:783.99,d:.12},{f:1046.5,d:.25},{f:880,d:.15},{f:1046.5,d:.45}],e=0;t.forEach(n=>{if(!this.ctx||!this.masterGain)return;let i=this.ctx.currentTime+e,o=this.ctx.createOscillator(),r=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(n.f,i),r.gain.setValueAtTime(.3,i),r.gain.exponentialRampToValueAtTime(.001,i+n.d),o.connect(r),r.connect(this.masterGain),o.start(i),o.stop(i+n.d+.05),e+=n.d*.9})}toggleMute(){return this.isMuted=!this.isMuted,this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.6,this.ctx.currentTime),this.isMuted}getMuted(){return this.isMuted}},he=new dl;var Ra=class{constructor(t,e){$(this,"totalLaps",3);$(this,"track");$(this,"particles");this.track=t,this.particles=e}updateRacer(t,e,n,i,o){if(t.spinOutTimer>0){t.spinOutTimer-=i,t.speed*=Math.max(0,1-i*2),t.rotation.y+=i*12,this.syncMesh(t,n,i);return}if(t.invulnerableTimer>0&&(t.invulnerableTimer-=i),e.respawn){this.respawnOnTrack(t);return}let{config:r}=t,a=!0,c=this.track.getClosestTrackPoint(t.position.x,t.position.z),l=this.track.roadWidth/2,h=this.track.onShortcut(t.position.x,t.position.z),u=h!==null&&c.distanceToCenter>l+.5,f=c.distanceToCenter>l+.5&&!u;t.boostTimer>0&&(t.boostTimer-=i,t.boostTimer<=0&&(t.boostMultiplier=1));let d=r.topSpeed*t.boostMultiplier;t.shrinkTimer&&t.shrinkTimer>0&&(t.shrinkTimer-=i,d*=.72),t.starTimer&&t.starTimer>0&&(t.starTimer-=i,d*=1.18),d*=1+.012*(t.coins||0),t.rideTimer&&t.rideTimer>0&&(t.rideTimer-=i,d*=1.35,t.speed=Math.max(t.speed,r.topSpeed*1.45)),t.ghostTimer&&t.ghostTimer>0&&(t.ghostTimer-=i),t.inkTimer&&t.inkTimer>0&&(t.inkTimer-=i);let p=r.acceleration;if(u&&t.boostTimer<=0&&!(t.starTimer&&t.starTimer>0)&&(d=Math.min(d,r.topSpeed*.66)),f&&(t.boostTimer<=0&&(d=Math.min(d,r.topSpeed*.66)),p*=.8,Math.abs(t.speed)>5&&Math.random()<.4&&this.particles.emitTireSmoke(new I(t.position.x,t.position.y,t.position.z),!0)),e.throttle)if(t.speed<d){let A=Math.max(0,Math.min(1,t.speed/d));t.speed+=p*(1.35-.85*A)*i*(t.boostTimer>0?1.4:1)}else t.speed-=10*i;else if(e.brake)t.speed>0?t.speed-=35*i:t.speed>-12&&(t.speed-=14*i);else{let A=f?13:9;t.speed>0?t.speed=Math.max(0,t.speed-A*i):t.speed<0&&(t.speed=Math.min(0,t.speed+A*i))}let _=Math.abs(t.speed)/r.topSpeed,g=r.handling*.68*Math.min(1,_/.3),m=typeof e.steer=="number"?e.steer:0;e.steerLeft&&(m+=1),e.steerRight&&(m-=1),m=Math.max(-1,Math.min(1,m)),Math.abs(m)<.05&&(m=0),m=Math.sign(m)*(.35*Math.abs(m)+.65*m*m);let v=t.steerSmooth||0,T=Math.abs(m)<Math.abs(v)||Math.sign(m)!==Math.sign(v)?14:9;t.steerSmooth=v+(m-v)*Math.min(1,i*T),Math.abs(t.steerSmooth)<.002&&m===0&&(t.steerSmooth=0);let M=m;m=t.steerSmooth;let R=e.drift&&!t.driftHeld;if(t.driftHeld=e.drift,R&&!t.isDrifting&&(t.hopT||0)<=0&&Math.abs(t.speed)>6&&(t.hopT=.26,t.config.isPlayer&&t.config.audioLead!==!1&&he.playCollisionSound(.15)),(t.hopT||0)>0&&(t.hopT-=i,t.hopT<=0&&e.drift&&!t.isDrifting&&Math.abs(t.speed)>10&&Math.abs(M)>.15&&(t.isDrifting=!0,t.driftDirection=Math.sign(M),t.driftTime=0,t.driftLevel=0)),t.isDrifting)if(!e.drift||Math.abs(t.speed)<8)t.driftLevel>0&&this.triggerDriftBoost(t),t.isDrifting=!1,t.driftDirection=0,t.driftTime=0,t.driftLevel=0;else{let A=Math.max(-1,Math.min(1,m*t.driftDirection));t.driftTime+=i*(.6+.9*Math.max(0,A)),t.driftTime>2.4?t.driftLevel=3:t.driftTime>1.5?t.driftLevel=2:t.driftTime>.7&&(t.driftLevel=1);let C=Math.max(-1,Math.min(1,m*t.driftDirection)),D=r.handling*.55*(1.25+C*.6)*t.driftDirection;if(t.angularVelocity=Ie.lerp(t.angularVelocity,D,Math.min(1,i*8)),t.rotation.roll=Ie.lerp(t.rotation.roll,-t.driftDirection*.18,i*10),t.driftLevel>0){let k=new I;t.driftDirection>0?n.rearRightWheel.getWorldPosition(k):n.rearLeftWheel.getWorldPosition(k),this.particles.emitDriftSparks(k,t.driftLevel,t.rotation.y)}}else{if(m!==0&&Math.abs(t.speed)>.5){let A=t.speed<0?-1:1;t.angularVelocity=Ie.lerp(t.angularVelocity,m*g*A,Math.min(1,i*12))}else t.angularVelocity=Ie.lerp(t.angularVelocity,0,Math.min(1,i*14));t.rotation.roll=Ie.lerp(t.rotation.roll,-m*.08*_,i*8)}t.rotation.y+=t.angularVelocity*i,t.slideAngle=Ie.lerp(t.slideAngle||0,t.isDrifting?t.driftDirection*.38:0,Math.min(1,i*6));let b=t.rotation.y+t.slideAngle,w=Math.sin(b)*t.speed,x=Math.cos(b)*t.speed;if(t.position.x+=w*i,t.position.z+=x*i,t.bumpX||t.bumpZ){t.position.x+=(t.bumpX||0)*i,t.position.z+=(t.bumpZ||0)*i;let A=Math.exp(-i*6);t.bumpX=(t.bumpX||0)*A,t.bumpZ=(t.bumpZ||0)*A,Math.abs(t.bumpX)+Math.abs(t.bumpZ)<.05&&(t.bumpX=t.bumpZ=0)}t.position.y=Ie.lerp(t.position.y,(u?h:c.point.y)+.1,i*12);let E=l+10;if(c.distanceToCenter>E&&!u){let A=c.point.x-t.position.x,C=c.point.z-t.position.z,D=Math.sqrt(A*A+C*C);if(D>.01){t.position.x+=A/D*(c.distanceToCenter-E),t.position.z+=C/D*(c.distanceToCenter-E),t.speed*=Math.pow(.6,i);let k=performance.now();t.config.isPlayer&&(!t.bumpedAt||k-t.bumpedAt>400)&&he.playCollisionSound(.35)}}if(this.handleKartCollisions(t,o),t.boostTimer>0){let A=new I;n.rootGroup.getWorldPosition(A),this.particles.emitBoostFlames(A,t.rotation.y)}this.updateProgression(t),this.syncMesh(t,n,i),t.config.isPlayer&&t.config.audioLead!==!1&&(he.updateEngine(t.speed/r.topSpeed,e.throttle,t.boostTimer>0),he.updateDriftScreech(t.isDrifting,t.driftLevel,t.speed))}triggerDriftBoost(t){let e=.7,n=1.35;t.driftLevel===2?(e=1.2,n=1.48):t.driftLevel===3&&(e=1.7,n=1.62),t.boostTimer=e,t.boostMultiplier=n,t.speed=Math.max(t.speed,t.config.topSpeed*1.15),t.config.isPlayer&&he.playBoostSound()}triggerStartBoost(t){t.boostTimer=1.8,t.boostMultiplier=1.45,t.speed=t.config.topSpeed*1.2,t.config.isPlayer&&he.playBoostSound()}handleKartCollisions(t,e){for(let i of e){if(i.config.id===t.config.id||(t.ghostTimer||0)>0||(i.ghostTimer||0)>0)continue;let o=t.position.x-i.position.x,r=t.position.z-i.position.z,a=Math.sqrt(o*o+r*r);if(a<1.35*2&&a>.001){let c=2.7-a,l=o/a,h=r/a,u=t.config.weight||2,f=i.config.weight||2,d=f/(u+f),p=u/(u+f);t.position.x+=l*c*d,t.position.z+=h*c*d,i.position.x-=l*c*p,i.position.z-=h*c*p;let _=Math.min(30,Math.abs(t.speed-i.speed)+6),g=performance.now();if(!t.bumpedAt||g-t.bumpedAt>250){let v=T=>T.starTimer&&T.starTimer>0?3:1;t.bumpX=(t.bumpX||0)+l*_*.55*d*v(i)/v(t),t.bumpZ=(t.bumpZ||0)+h*_*.55*d*v(i)/v(t),i.bumpX=(i.bumpX||0)-l*_*.55*p*v(t)/v(i),i.bumpZ=(i.bumpZ||0)-h*_*.55*p*v(t)/v(i),t.bumpedAt=i.bumpedAt=g,(t.config.isPlayer||i.config.isPlayer)&&he.playCollisionSound(.7)}let m=(t.speed*u+i.speed*f)/(u+f);t.speed=Ie.lerp(t.speed,m,.5*d),i.speed=Ie.lerp(i.speed,m,.5*p)}}}updateProgression(t){let e=this.track.getClosestTrackPoint(t.position.x,t.position.z),n=this.track.trackPoints.length,i=e.index,o=t.checkpointIndex,r=(i-o+n)%n;r>0&&r<n/3&&(t.checkpointIndex=i,t.splineProgress=i/n,o>n*.85&&i<n*.15&&(t.currentLap+=1,t.lapTimes.push(t.currentLapTime),(t.bestLapTime===null||t.currentLapTime<t.bestLapTime)&&(t.bestLapTime=t.currentLapTime),t.config.isPlayer&&he.playLapChime(t.currentLap===(this.totalLaps||3)),t.currentLapTime=0)),t.totalDistance=(t.currentLap-1)*this.track.totalLength+e.point.distance}respawnOnTrack(t){let e=this.track.getClosestTrackPoint(t.position.x,t.position.z);t.position.x=e.point.x,t.position.y=e.point.y+.1,t.position.z=e.point.z,t.rotation.y=Math.atan2(e.point.tangentX,e.point.tangentZ),t.rotation.roll=0,t.rotation.pitch=0,t.speed=0,t.angularVelocity=0,t.isDrifting=!1,t.driftLevel=0,t.boostTimer=0,t.invulnerableTimer=1.5}syncMesh(t,e,n){let{rootGroup:i,bodyGroup:o,frontLeftWheel:r,frontRightWheel:a,rearLeftWheel:c,rearRightWheel:l,steeringWheel:h,driverHead:u}=e,f=(t.hopT||0)>0?Math.sin((1-t.hopT/.26)*Math.PI)*.45:0;i.position.set(t.position.x,t.position.y+f,t.position.z),i.rotation.y=t.rotation.y,o.rotation.z=t.rotation.roll,o.rotation.x=t.rotation.pitch;let d=t.speed/.3*n;r.children[0].rotation.x+=d,a.children[0].rotation.x+=d,c.children[0].rotation.x+=d,l.children[0].rotation.x+=d;let p=t.isDrifting?t.driftDirection*.45:t.angularVelocity/2.5;r.rotation.y=Ie.lerp(r.rotation.y,p,n*15),a.rotation.y=Ie.lerp(a.rotation.y,p,n*15),h.rotation.z=-p*1.8,u.rotation.y=Ie.lerp(u.rotation.y,p*.8,n*10)}};var Pi=class{constructor(t,e){$(this,"track");$(this,"me");$(this,"lane",0);$(this,"laneGoal",0);$(this,"laneTimer",0);$(this,"skill");this.track=t,this.me=e,this.skill=e.config.aiAggression||1,this.lane=this.laneGoal=(Math.random()-.5)*.7}wrap(t){for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}roadHeading(t){let e=this.track.trackPoints,n=e[(t%e.length+e.length)%e.length];return Math.atan2(n.tangentX,n.tangentZ)}update(t,e){let n=this.me,i=this.track.trackPoints,o=i.length,r=this.track.totalLength/o,a=this.track.roadWidth/2,c=Math.abs(n.speed),l=this.track.getClosestTrackPoint(n.position.x,n.position.z),h=l.index;this.laneTimer-=t,this.laneTimer<=0&&(this.laneTimer=2+Math.random()*3,this.laneGoal=(Math.random()-.5)*.8);for(let k of e){if(k===n)continue;let H=k.position.x-n.position.x,L=k.position.z-n.position.z,N=H*Math.sin(n.rotation.y)+L*Math.cos(n.rotation.y),F=H*Math.cos(n.rotation.y)-L*Math.sin(n.rotation.y);N>0&&N<9&&Math.abs(F)<2.6&&k.speed<n.speed&&(this.laneGoal=F>0?-.55:.55,this.laneTimer=1.2)}this.lane+=(this.laneGoal-this.lane)*Math.min(1,t*1.5);let u=Math.round((7+c*.32)/r),f=i[(h+u)%o],d=this.wrap(this.roadHeading(h+u+6)-this.roadHeading(h+u-2)),p=Math.max(-.8,Math.min(.8,this.lane+Math.sign(d)*Math.min(.5,Math.abs(d)*1.2))),_=f.x+f.normalX*p*a,g=f.z+f.normalZ*p*a,m=Math.atan2(_-n.position.x,g-n.position.z),v=this.wrap(m-n.rotation.y),T=Math.max(-1,Math.min(1,v*2.4)),M=Math.round((22+c*.5)/r),R=Math.abs(this.wrap(this.roadHeading(h+M)-this.roadHeading(h+2))),b=l.distanceToCenter>a+.5,w=n.config.topSpeed,x=w*(.92+.08*Math.min(1,this.skill));R>1.1?x=w*.62:R>.75&&(x=w*.78),Math.abs(v)>.9&&(x=Math.min(x,w*.5));let E=c<x,A=c>x+8||Math.abs(v)>1.3&&c>14,C=R>.55&&R<1.6&&c>24&&!b&&Math.abs(T)>.35,D=n.isDrifting?R>.3&&Math.sign(T)===n.driftDirection:C;return{throttle:E,brake:A,steerLeft:!1,steerRight:!1,steer:T,drift:D,respawn:!1,cameraToggle:!1}}};var yr=class{constructor(t){$(this,"camera");$(this,"currentView","chase");$(this,"targetPosition",new I);$(this,"targetLookAt",new I);$(this,"baseFOV",68);this.camera=new Oe(this.baseFOV,t,.2,1e3),this.camera.position.set(0,10,20)}setView(t){this.currentView=t}cycleView(){let t=["chase","cockpit","action","topdown"],e=(t.indexOf(this.currentView)+1)%t.length;return this.currentView=t[e],this.currentView}update(t,e){let n=t.rotation.y,i=Math.min(1.5,Math.abs(t.speed)/t.config.topSpeed),o=this.baseFOV;t.boostTimer>0?o=this.baseFOV+16:o=this.baseFOV+i*8,this.camera.fov=Ie.lerp(this.camera.fov,o,e*6),this.camera.updateProjectionMatrix();let r=new I(t.position.x,t.position.y,t.position.z);if(this.currentView==="chase"){let l=t.isDrifting?-t.driftDirection*.9:0,h=new I(-Math.sin(n)*5.8+Math.cos(n)*l,2.4,-Math.cos(n)*5.8-Math.sin(n)*l);this.targetPosition.copy(r).add(h),this.targetLookAt.copy(r).add(new I(Math.sin(n)*14,1.1,Math.cos(n)*14)),this.camera.position.lerp(this.targetPosition,e*10),this.camera.lookAt(this.targetLookAt)}else if(this.currentView==="cockpit"){let a=new I(Math.sin(n)*.4,.95,Math.cos(n)*.4);this.camera.position.copy(r).add(a);let c=r.clone().add(new I(Math.sin(n)*20,.8,Math.cos(n)*20));this.camera.lookAt(c)}else if(this.currentView==="action"){let l=new I(-Math.sin(n)*3.5,1.1,-Math.cos(n)*3.5);this.targetPosition.copy(r).add(l),this.targetLookAt.copy(r).add(new I(Math.sin(n)*8,.8,Math.cos(n)*8)),this.camera.position.lerp(this.targetPosition,e*14),this.camera.lookAt(this.targetLookAt)}else this.currentView==="topdown"&&(this.targetPosition.set(r.x,r.y+40,r.z+10),this.camera.position.lerp(this.targetPosition,e*6),this.camera.lookAt(r))}onResize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}};var Ca=["banana","green","red","blue","boost","star","bolt","fake","coin","horn","bomb","ink","golden","ride","ghost"],pl=["banana","green","red","fake","bomb"],lx=["banana","green","red","boost"];function hx(s,t){let e=t<=1?0:(s-1)/(t-1),n={banana:5-4*e,green:3.5-2*e,fake:2.2*(1-e),coin:3*(1-e)+.3,horn:e<.25?1.2:.3,red:e<.1?.4:1+2.5*e,bomb:.4+1.8*e,ink:e>.3?1.2:0,boost:1+3*e,golden:e>.5?2.2*e:0,star:e>.45?2*e:0,ride:e>.7?2.6*e:0,ghost:e>.3?.8:0,blue:e>.5?1:0,bolt:e>.8?.9:0},i=0;for(let r of Ca)i+=n[r];let o=Math.random()*i;for(let r of Ca)if(o-=n[r],o<=0)return r;return"banana"}var ux=["#ff5d8f","#4cc9f0","#ffc83d","#7bd389","#b388ff"];function Pu(s){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createLinearGradient(0,0,128,128);n.addColorStop(0,"#efffff"),n.addColorStop(.3,s),n.addColorStop(1,"#6745cb"),e.fillStyle=n,e.fillRect(0,0,128,128),e.strokeStyle="#e1ffff",e.lineWidth=7,e.strokeRect(5,5,118,118),e.font="900 96px Arial",e.textAlign="center",e.textBaseline="middle",e.lineWidth=5,e.strokeStyle="#4842a0",e.strokeText("?",64,70),e.fillStyle="#ffffff",e.fillText("?",64,70);let i=new Pe(t);return i.colorSpace=Le,i}function fx(s){return new Ft({color:s,emissive:s,emissiveIntensity:.35,roughness:.25,metalness:.1})}function Cu(s){let t=new se;if(s==="bomb"){let e=new et(new ne(.55,16,12),new Ft({color:2302778,roughness:.35,metalness:.2}));e.position.y=.6,t.add(e);let n=new et(new _e(.16,.2,.18,10),new Ft({color:9080744}));n.position.y=1.15,t.add(n);let i=new et(new _e(.04,.04,.35,6),new Ft({color:13214826}));i.position.set(.06,1.38,0),i.rotation.z=-.4,t.add(i);let o=new et(new ne(.12,8,6),new Ce({color:16765773}));o.position.set(.14,1.55,0),o.name="flame",t.add(o);let r=new et(new ne(.12,8,6),new Ce({color:16777215}));r.position.set(-.22,.85,.35),t.add(r);for(let a of[-1,1]){let c=new et(new ne(.09,8,6),new Ce({color:16777215}));c.scale.set(.65,1.4,.4),c.position.set(a*.16,.65,.52),t.add(c);let l=new et(new ne(.2,10,8),new Ft({color:16762941}));l.scale.set(1,.55,1.4),l.position.set(a*.28,.1,.15),t.add(l)}return t}if(s==="fake"){let e=new et(new de(1.3,1.3,1.3),new Ft({map:Pu("#ff5d8f"),roughness:.35}));return e.position.y=.75,t.add(e),e.rotation.z=Math.PI/9,t}if(s==="banana"){let e=new Ft({color:16767291,roughness:.55}),n=new Si(new I(-.45,.15,0),new I(0,.05,.25),new I(.45,.15,0)),i=new et(new Ti(n,12,.13,8,!1),e);t.add(i);for(let r=0;r<3;r++){let a=new et(new Be(.16,.6,6),e),c=r/3*Math.PI*2;a.position.set(.45+Math.cos(c)*.12,.18,Math.sin(c)*.18),a.rotation.set(Math.sin(c)*1.1,0,-1.2+Math.cos(c)*.3),t.add(a)}let o=new et(new ne(.07,6,5),new Ft({color:5913106}));o.position.set(-.5,.17,0),t.add(o)}else{let e=s==="green"?2735457:s==="red"?15747653:4359679,n=new et(new ne(.61,20,12,0,Math.PI*2,0,Math.PI/2),fx(e));n.position.y=.32,t.add(n);let i=new et(new Ke(.59,.105,8,24),new Ft({color:16774101}));i.rotation.x=Math.PI/2,i.position.y=.32,t.add(i);let o=new et(new ne(.52,16,8),new Ft({color:15251302}));o.scale.y=.25,o.position.y=.27,t.add(o);let r=new Ft({color:s==="green"?1274942:s==="red"?10692149:2442155});for(let c=0;c<6;c++){let l=new et(new Ke(.612,.018,4,12,Math.PI/2),r);l.rotation.y=c*Math.PI/3,l.position.y=.32,t.add(l)}let a=new et(new Ke(.4,.018,4,20),r);if(a.rotation.x=Math.PI/2,a.position.y=.78,t.add(a),s==="blue"){for(let c=0;c<5;c++){let l=c*Math.PI*2/5,h=new et(new Be(.09,.32,8),new Ft({color:16775401}));h.position.set(Math.sin(l)*.36,.9,Math.cos(l)*.36),t.add(h)}for(let c of[-1,1])for(let l=0;l<3;l++){let h=new et(new Fs(.075,.38-l*.06,4,8),new Ft({color:15398911}));h.position.set(c*(.65+l*.12),.65+l*.1,-l*.08),h.rotation.z=-c*.65,t.add(h)}}}return t}var Pa=class{constructor(t,e){$(this,"scene",t);$(this,"track",e);$(this,"held",new Map);$(this,"onEvent");$(this,"boxes",[]);$(this,"thrown",[]);$(this,"group",new se);$(this,"boxGeo",new de(1.4,1.4,1.4));$(this,"boxMats");$(this,"aiTimers",new Map);$(this,"fx",[]);t.add(this.group),this.boxMats=ux.map(o=>new Ft({map:Pu(o),roughness:.35,emissive:16777215,emissiveIntensity:.12}));let n=0,i=e.trackPoints;for(let o of[.16,.42,.68,.88]){let r=i[Math.floor(o*i.length)%i.length],a=e.roadWidth;for(let c of[-.4,-.2,0,.2,.4]){let l=r.x+r.normalX*c*a,h=r.z+r.normalZ*c*a,u=new et(this.boxGeo,this.boxMats[n++%this.boxMats.length]);u.rotation.z=Math.PI/9,u.position.set(l,r.y+1.2,h),this.group.add(u),this.boxes.push({mesh:u,x:l,y:r.y,z:h,respawn:0})}}}reset(){for(let t of this.thrown)this.group.remove(t.mesh);this.thrown=[];for(let t of this.held.values())for(let e of t.trail)this.group.remove(e);this.held.clear();for(let t of this.boxes)t.respawn=0,t.mesh.visible=!0}update(t,e,n,i,o){for(let r of this.boxes){if(r.respawn>0){r.respawn-=t,r.respawn<=0&&(r.mesh.visible=!0);continue}r.mesh.rotation.y+=t*1.6,r.mesh.rotation.x=Math.sin(e*1.3+r.x)*.3,r.mesh.position.y=r.y+1.2+Math.sin(e*2.2+r.z)*.15;for(let a of n){let c=a.position.x-r.x,l=a.position.z-r.z;if(c*c+l*l<6.5){r.mesh.visible=!1,r.respawn=2.5,this.held.has(a.config.id)||(this.held.set(a.config.id,{kind:null,rollLeft:1.3,shown:"banana",count:1,trailing:!1,trail:[]}),this.onEvent?.({type:"pickup",racer:a.config.id}),a.config.isPlayer&&he.playLapChime(!1));break}}}for(let[r,a]of this.held)if(!a.kind&&(a.rollLeft-=t,a.shown=Ca[Math.floor(e*14)%Ca.length],a.rollLeft<=0)){let c=n.find(l=>l.config.id===r);a.kind=hx(c?c.rank:n.length,n.length),a.shown=a.kind,lx.includes(a.kind)&&Math.random()<.22&&(a.count=3,pl.includes(a.kind)&&this.startTrail(a)),c&&!c.config.isPlayer&&this.aiTimers.set(r,.6+Math.random()*3.5)}for(let[r,a]of this.aiTimers){let c=a-t;c<=0?(this.aiTimers.delete(r),i.add(r)):this.aiTimers.set(r,c)}for(let r of i)this.fire(r,n);for(let[r,a]of this.held)a.kind==="golden"&&a.left!==void 0&&(a.left-=t,a.left<=0?this.held.delete(r):!n.find(c=>c.config.id===r)?.config.isPlayer&&Math.random()<t*3&&i.add(r));this.updateFx(t),this.updateTrails(n),this.updateThrown(t,n,e);for(let r of n){if((r.starTimer||0)>0)for(let a of n){if(a===r||a.spinOutTimer>0||(a.starTimer||0)>0)continue;let c=a.position.x-r.position.x,l=a.position.z-r.position.z;c*c+l*l<5&&this.hit(a,r.config.id,"star")}o(r.config.id,(r.shrinkTimer||0)>0?.6:1)}}press(t,e){let n=this.held.get(t);!n||!n.kind||(pl.includes(n.kind)?n.trailing||this.startTrail(n):this.fire(t,e))}release(t,e){let n=this.held.get(t);n&&n.kind&&n.trailing&&this.fire(t,e)}fire(t,e){let n=this.held.get(t),i=e.find(a=>a.config.id===t);if(!n||!n.kind||!i)return;let o=n.kind;if(o==="golden"){n.left===void 0&&(n.left=7),this.use("boost",i,e);return}n.count--;let r=n.trail.pop();if(r&&this.group.remove(r),n.count<=0){for(let a of n.trail)this.group.remove(a);this.held.delete(t)}else i.config.isPlayer||this.aiTimers.set(t,.8+Math.random()*2);this.use(o,i,e)}startTrail(t){t.trailing=!0;for(let e=t.trail.length;e<t.count;e++){let n=Cu(t.kind);n.scale.setScalar(.85),this.group.add(n),t.trail.push(n)}}ring(t,e,n,i,o){let r=new et(new Ke(1,.25,8,32),new Ce({color:i,transparent:!0,opacity:.9}));r.rotation.x=Math.PI/2,r.position.set(t,e+.6,n),this.group.add(r),this.fx.push({mesh:r,life:.45,max:.45,grow:o})}boom(t,e,n){let i=new et(new ne(1,16,12),new Ce({color:16747039,transparent:!0,opacity:.85}));i.position.set(t,e+1,n),this.group.add(i),this.fx.push({mesh:i,life:.6,max:.6,grow:8})}updateFx(t){for(let e=this.fx.length-1;e>=0;e--){let n=this.fx[e];n.life-=t;let i=1-n.life/n.max;n.mesh.scale.setScalar(.5+i*n.grow),n.mesh.material.opacity=.9*(1-i),n.life<=0&&(this.group.remove(n.mesh),this.fx.splice(e,1))}}explode(t,e){this.boom(t.x,t.y,t.z);for(let n of e){let i=n.position.x-t.x,o=n.position.z-t.z;i*i+o*o<64&&this.hit(n,t.owner,"bomb")}this.onEvent?.({type:"boom",racer:t.owner})}updateTrails(t){for(let[e,n]of this.held){if(!n.trailing)continue;let i=t.find(r=>r.config.id===e);if(!i)continue;let o=i.rotation.y;n.trail.forEach((r,a)=>{let c=1.9+a*1.1,l=Math.sin(performance.now()/120+a)*.15;r.position.set(i.position.x-Math.sin(o)*c+Math.cos(o)*l,i.position.y,i.position.z-Math.cos(o)*c-Math.sin(o)*l),r.rotation.y=o})}}shield(t){let e=this.held.get(t.config.id);if(!e||!e.trailing||e.count<=0)return!1;e.count--;let n=e.trail.pop();if(n&&this.group.remove(n),e.count<=0){for(let i of e.trail)this.group.remove(i);this.held.delete(t.config.id)}return this.onEvent?.({type:"block",racer:t.config.id}),!0}use(t,e,n){this.onEvent?.({type:"use",racer:e.config.id,item:t});let i=e.rotation.y;if(t==="boost"){e.boostTimer=1.4,e.boostMultiplier=1.5,e.speed=Math.max(e.speed,e.config.topSpeed*1.2),e.config.isPlayer&&he.playBoostSound();return}if(t==="star"){e.starTimer=7,e.invulnerableTimer=7,e.boostTimer=7,e.boostMultiplier=1.15,e.config.isPlayer&&he.playBoostSound();return}if(t==="bolt"){for(let l of n)l===e||(l.starTimer||0)>0||(l.shrinkTimer=5,l.spinOutTimer=Math.max(l.spinOutTimer,.5),l.speed*=.5);this.onEvent?.({type:"bolt",racer:e.config.id});return}if(t==="coin"){e.coins=Math.min(10,(e.coins||0)+2),e.boostTimer=Math.max(e.boostTimer,.35),e.boostMultiplier=Math.max(e.boostMultiplier,1.15);return}if(t==="horn"){for(let l of n){if(l===e)continue;let h=l.position.x-e.position.x,u=l.position.z-e.position.z;h*h+u*u<90&&this.hit(l,e.config.id,"horn")}for(let l=this.thrown.length-1;l>=0;l--){let h=this.thrown[l],u=h.x-e.position.x,f=h.z-e.position.z;u*u+f*f<180&&(this.group.remove(h.mesh),this.thrown.splice(l,1))}this.ring(e.position.x,e.position.y,e.position.z,16777215,10),this.onEvent?.({type:"horn",racer:e.config.id});return}if(t==="ink"){for(let l of n)l.rank<e.rank&&!((l.starTimer||0)>0)&&(l.inkTimer=4.5,this.onEvent?.({type:"ink",racer:l.config.id,by:e.config.id}));return}if(t==="ride"){e.rideTimer=3.4,e.invulnerableTimer=Math.max(e.invulnerableTimer,3.6),e.boostTimer=3.4,e.boostMultiplier=1.6;return}if(t==="ghost"){e.ghostTimer=5,e.invulnerableTimer=Math.max(e.invulnerableTimer,5);let l=n.filter(u=>u.rank<e.rank&&this.held.get(u.config.id)?.kind),h=l[Math.floor(Math.random()*l.length)];if(h){let u=this.held.get(h.config.id);for(let d of u.trail)this.group.remove(d);this.held.delete(h.config.id);let f={kind:u.kind,rollLeft:0,shown:u.kind,count:u.count,trailing:!1,trail:[]};this.held.set(e.config.id,f),pl.includes(f.kind)&&f.count>1&&this.startTrail(f),e.config.isPlayer||this.aiTimers.set(e.config.id,1+Math.random()*2),this.onEvent?.({type:"steal",racer:h.config.id,by:e.config.id,item:f.kind})}return}let o=Cu(t);this.group.add(o);let r=t==="banana"||t==="fake",a=r?-2.6:2.6,c={kind:t,owner:e.config.id,mesh:o,x:e.position.x+Math.sin(i)*a,y:e.position.y,z:e.position.z+Math.cos(i)*a,heading:i,speed:r?0:t==="bomb"?42:t==="green"?62:58,life:r?60:t==="bomb"?1.3:t==="green"?3.5:8,armed:.4};if(t==="red"){let l=n.filter(h=>h.rank===e.rank-1)[0];c.target=l?l.config.id:void 0,l||(c.kind="green")}if(t==="blue"){let l=n.filter(h=>h.rank===1&&h!==e)[0];c.target=l?l.config.id:void 0}this.thrown.push(c)}updateThrown(t,e,n){let i=this.track.roadWidth/2;for(let o=this.thrown.length-1;o>=0;o--){let r=this.thrown[o];if(r.life-=t,r.armed-=t,r.speed>0){if(r.target){let h=e.find(u=>u.config.id===r.target);if(h){let f=Math.atan2(h.position.x-r.x,h.position.z-r.z)-r.heading;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;let d=(r.kind==="blue"?5:3.2)*t;r.heading+=Math.max(-d,Math.min(d,f))}}else{let h=this.track.getClosestTrackPoint(r.x,r.z);if(h.distanceToCenter>i+2){let u=h.point,f=Math.atan2(u.x-r.x,u.z-r.z);r.heading+=Math.sign(Math.sin(f-r.heading))*3*t}}r.x+=Math.sin(r.heading)*r.speed*t,r.z+=Math.cos(r.heading)*r.speed*t,r.kind==="red"?r.mesh.rotation.y=r.heading:r.kind==="green"?r.mesh.rotation.y+=t*7:r.mesh.rotation.y+=t*3;let l=r.mesh.getObjectByName("flame");l&&l.scale.setScalar(.8+Math.random()*.4)}let a=this.track.getClosestTrackPoint(r.x,r.z).point.y;r.y=Ie.lerp(r.y,a+(r.kind==="blue"?1.4:.1),t*10),r.mesh.position.set(r.x,r.y,r.z),r.kind==="bomb"&&r.speed>0&&(r.speed=Math.max(0,r.speed-30*t));let c=r.life<=0;if(c&&r.kind==="bomb"&&this.explode(r,e),!c)for(let l of e){if(l.config.id===r.owner&&r.armed>0)continue;let h=l.position.x-r.x,u=l.position.z-r.z,f=r.kind==="blue"&&l.config.id===r.target?2.6:1.7;if(h*h+u*u<f*f){if(r.kind==="blue"&&r.target&&l.config.id!==r.target)continue;if(r.kind==="bomb"){this.explode(r,e),c=!0;break}if(r.kind!=="blue"&&l.config.id!==r.owner&&this.shield(l)){c=!0;break}this.hit(l,r.owner,r.kind),c=!0;break}}c&&(this.group.remove(r.mesh),this.thrown.splice(o,1))}}hit(t,e,n){t.invulnerableTimer>0||(t.starTimer||0)>0||(t.ghostTimer||0)>0||(t.rideTimer||0)>0||(t.coins=Math.max(0,(t.coins||0)-3),t.spinOutTimer=n==="blue"?1.8:1.1,t.invulnerableTimer=2.2,t.boostTimer=0,t.boostMultiplier=1,t.isDrifting=!1,this.onEvent?.({type:"hit",racer:t.config.id,by:e,item:n}),t.config.isPlayer&&he.playCollisionSound(1))}};var dx=[0,2,4,5,7,9,11],Iu=[0,2,3,5,7,8,10],px=[0,2,4,5,7,9,10],Lu={meadow:{bpm:132,root:60,scale:dx,chords:[1,6,4,5],leadWave:"triangle",padWave:"triangle",lead:"5-3-5-6-5-3-1---2-3-4-3-2---5---6-5-6-a-6-5-3---4-3-2-3-1-------",kick:[0,6,8],snare:[4,12],hat:[2,6,10,14]},sunset:{bpm:116,root:62,scale:px,chords:[1,4,6,5],leadWave:"triangle",padWave:"sine",swing:.12,lead:"3--5--6-5-3-2---1--2--3-5---3---6--5--3-2-1-2---3-------5-------",kick:[0,10],snare:[4,12],hat:[0,3,6,8,11,14]},frosty:{bpm:140,root:57,scale:Iu,chords:[1,6,3,7],leadWave:"triangle",padWave:"triangle",lead:"1-3-5-a-b-a-5-3-4---3---2---5---1-3-5-a-c-b-a-5-6-5-4-2-1-------",kick:[0,8,11],snare:[4,12],hat:[2,6,10,14]},neon:{bpm:128,root:52,scale:Iu,chords:[1,6,4,5],leadWave:"triangle",padWave:"sine",lead:"1---5---6-5-3---4---3---2-1-2---1---5---a---7---6-5-4-3-2-------",kick:[0,4,8,12],snare:[4,12],hat:[2,6,10,14]}},fs=s=>440*Math.pow(2,(s-69)/12),Ia=class{constructor(t){$(this,"song");$(this,"ctx",null);$(this,"bus",null);$(this,"timer",null);$(this,"step",0);$(this,"nextAt",0);$(this,"tempo",1);$(this,"noise",null);$(this,"space",null);$(this,"phrase",0);this.song=Lu[t]||Lu.meadow}start(){let t=he.output();if(!t||this.timer)return;this.ctx=t.ctx,this.bus=this.ctx.createGain(),this.bus.gain.value=.48,this.bus.connect(t.out),this.space=this.ctx.createGain(),this.space.gain.value=.17;let e=this.ctx.createDelay(1);e.delayTime.value=60/this.song.bpm*.75;let n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=2300,this.space.connect(e).connect(n).connect(this.bus),this.step=0,this.phrase=0,this.tempo=1;let i=this.ctx.createBuffer(1,this.ctx.sampleRate*.3,this.ctx.sampleRate),o=i.getChannelData(0);for(let r=0;r<o.length;r++)o[r]=Math.random()*2-1;this.noise=i,this.nextAt=this.ctx.currentTime+.1,this.timer=setInterval(()=>this.pump(),25)}finalLap(){if(!this.ctx||!this.bus)return;let t=this.ctx.currentTime+.05;[0,4,7,12].forEach((e,n)=>this.tone(fs(this.song.root+12+e),t+n*.09,.12,"triangle",.13)),this.tempo=1.2}stop(){if(clearInterval(this.timer),this.timer=null,this.bus&&this.ctx){let t=this.bus;t.gain.setTargetAtTime(0,this.ctx.currentTime,.2),setTimeout(()=>t.disconnect(),1200)}if(this.space){let t=this.space;setTimeout(()=>t.disconnect(),1200)}this.space=null,this.bus=null}pump(){if(!this.ctx)return;let t=60/(this.song.bpm*this.tempo)/4;for(this.nextAt<this.ctx.currentTime-.2&&(this.nextAt=this.ctx.currentTime+.03);this.nextAt<this.ctx.currentTime+.15;){let e=this.song.swing&&this.step%2?t*this.song.swing:0;this.playStep(this.step,this.nextAt+e,t),this.nextAt+=t,this.step=(this.step+1)%128,this.step===0&&this.phrase++}}degree(t,e=0){let n=this.song.scale,i=t-1;return this.song.root+n[(i%7+7)%7]+12*(Math.floor(i/7)+e)}chordNotes(t){let e=this.song.chords.concat([4,5,2,5]),n=e[t%e.length];return[this.degree(n),this.degree(n+2),this.degree(n+4)]}playStep(t,e,n){let i=this.song,o=t%16,r=Math.floor(t/16),a=this.chordNotes(r);if(i.kick.includes(o)&&this.kick(e),i.snare.includes(o)&&this.snare(e),i.hat.includes(o)&&this.hat(e),[0,3,6,8,10,14].includes(o)){let h=o===14?2:o===6||o===10?1:0;this.tone(fs(a[h]-24),e,n*1.5,"triangle",.26)}if([2,6,10,14].includes(o))for(let h of a)this.tone(fs(h),e,n*1.2,i.padWave,.055);o%4===0&&r%2===1&&this.tone(fs(a[o/4%3]+12),e,n*2.5,"sine",.065);let c=t%64,l=i.lead[c];if(l&&l!=="."&&l!=="-"&&!(r===7&&o>9)){let h=1;for(;i.lead[(c+h)%64]==="-"&&h<16;)h++;let u=l>="a"&&l<="g",f=u?l.charCodeAt(0)-96:Number(l);r>=4&&(f=Math.max(1,f+(r%2?-1:2))),this.tone(fs(this.degree(f,u?1:0)),e,n*h*.88,i.leadWave,.19)}r===7&&[11,13,15].includes(o)&&this.snare(e),this.phrase%2&&[7,15].includes(o)&&this.tone(fs(a[2]+12),e,n*2,"sine",.07)}tone(t,e,n,i,o){let r=this.ctx,a=r.createOscillator(),c=r.createGain();a.type=i,a.frequency.value=t,c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(o,e+.01),c.gain.exponentialRampToValueAtTime(o*.5,e+Math.max(.025,n*.3)),c.gain.exponentialRampToValueAtTime(1e-4,e+Math.max(.06,n)+.08);let l=r.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(Math.min(5e3,t*7),e),l.frequency.exponentialRampToValueAtTime(Math.max(350,t*2),e+Math.max(.06,n)),a.connect(l).connect(c),c.connect(this.bus),this.space&&t>250&&c.connect(this.space),a.onended=()=>{a.disconnect(),l.disconnect(),c.disconnect()},a.start(e),a.stop(e+Math.max(.06,n)+.1)}kick(t){let e=this.ctx,n=e.createOscillator(),i=e.createGain();n.frequency.setValueAtTime(140,t),n.frequency.exponentialRampToValueAtTime(45,t+.12),i.gain.setValueAtTime(.5,t),i.gain.exponentialRampToValueAtTime(1e-4,t+.18),n.connect(i).connect(this.bus),n.onended=()=>{n.disconnect(),i.disconnect()},n.start(t),n.stop(t+.2)}noiseHit(t,e,n,i,o){let r=this.ctx,a=r.createBufferSource(),c=r.createBiquadFilter(),l=r.createGain();a.buffer=this.noise,c.type=o,c.frequency.value=i,l.gain.setValueAtTime(n,t),l.gain.exponentialRampToValueAtTime(1e-4,t+e),a.connect(c).connect(l).connect(this.bus),a.onended=()=>{a.disconnect(),c.disconnect(),l.disconnect()},a.start(t),a.stop(t+e+.02)}snare(t){this.noiseHit(t,.1,.12,1800,"bandpass")}hat(t){this.noiseHit(t,.035,.035,6500,"highpass")}};function ml(){let s=new Uint8Array([115,178,222,255]),t=new ji(s,s.length,1,or);return t.minFilter=Ae,t.magFilter=Ae,t.generateMipmaps=!1,t.needsUpdate=!0,t}function gl(s,t,e=new Map){s.traverse(n=>{let i=n;if(!i.isMesh||!i.material)return;let o=r=>{if(r.userData.preserveShading)return r;let a=r;if(!a.isMeshStandardMaterial)return r;let c=e.get(r);return c||(c=new Zs({color:a.color.clone().offsetHSL(0,.12,.02),map:a.map,emissive:a.emissive.clone(),emissiveIntensity:a.emissiveIntensity,transparent:a.transparent,opacity:a.opacity,side:a.side,polygonOffset:a.polygonOffset,polygonOffsetFactor:a.polygonOffsetFactor,gradientMap:t}),e.set(r,c)),c};i.material=Array.isArray(i.material)?i.material.map(o):o(i.material)})}function mx(s){let t=new ne(520,32,16),e=new Ut(s.skyTop),n=new Ut(s.skyMid),i=new Ut(s.skyLow),o=[],r=t.attributes.position;for(let l=0;l<r.count;l++){let h=r.getY(l)/520,u=h>.25?n.clone().lerp(e,Math.min(1,(h-.25)/.6)):i.clone().lerp(n,Math.max(0,(h+.05)/.3));o.push(u.r,u.g,u.b)}t.setAttribute("color",new Gt(o,3));let a=new Ce({vertexColors:!0,side:Ge,fog:!1,depthWrite:!1}),c=new et(t,a);return c.renderOrder=-1,c}function gx(s){let t=new se,e=new Ce({color:s,fog:!1}),n=4+Math.floor(Math.random()*3);for(let i=0;i<n;i++){let o=6+Math.random()*6,r=new et(new ne(o,10,8),e);r.position.set((i-n/2)*8+Math.random()*4,Math.random()*4,Math.random()*6),r.scale.y=.7,t.add(r)}return t}function xx(s,t){let e=new se,n=new et(new _e(.35,.55,3,8),new Ft({color:t.trunk}));n.position.y=1.5,e.add(n);let i=t.trees[Math.floor(Math.random()*t.trees.length)],o=new Ft({color:i,roughness:.8,emissive:t.glow?i:0,emissiveIntensity:t.glow?.55:0}),r=[[0,4.4,0,2.4],[1.3,3.8,.3,1.6],[-1.2,3.9,-.2,1.7],[.2,5.6,.2,1.6]];for(let[a,c,l,h]of r){let u=new et(new ne(h,12,10),o);u.position.set(a,c,l),e.add(u)}return e.scale.setScalar(s),e}function _x(s){let t=document.createElement("canvas");t.width=128,t.height=256;let e=t.getContext("2d");e.fillStyle=s,e.fillRect(0,0,128,256),e.fillStyle="#ffe14d";for(let i=0;i<3;i++){let o=40+i*70;e.beginPath(),e.moveTo(14,o+50),e.lineTo(64,o),e.lineTo(114,o+50),e.lineTo(114,o+74),e.lineTo(64,o+24),e.lineTo(14,o+74),e.closePath(),e.fill()}let n=new Pe(t);return n.colorSpace=Le,n}function Du(s,t){let e=t.course.theme;s.background=new Ut(e.skyMid),s.fog=new Rs(e.fog,140,480),s.add(mx(e));let n=[];for(let l=0;l<14;l++){let h=gx(e.clouds),u=l/14*Math.PI*2,f=260+Math.random()*120;h.position.set(Math.cos(u)*f,70+Math.random()*50,Math.sin(u)*f),h.lookAt(0,h.position.y,0),s.add(h),n.push(h)}let i=[];t.sceneryGroup.children.forEach(l=>{let h=l;h.isGroup&&h.children.length===4&&h.children[1].geometry instanceof Be&&i.push(h)});let o=(l,h)=>{let u=1e9;for(let d=0;d<t.trackPoints.length;d+=3){let p=t.trackPoints[d],_=(p.x-l)**2+(p.z-h)**2;_<u&&(u=_)}if(Math.sqrt(u)<t.roadWidth*.5+9)return!0;let f=t.shortcut;if(f){let d=f.bx-f.ax,p=f.bz-f.az,_=d*d+p*p||1,g=Math.max(0,Math.min(1,((l-f.ax)*d+(h-f.az)*p)/_));if(Math.hypot(l-(f.ax+d*g),h-(f.az+p*g))<f.w/2+6)return!0}return!1};for(let l of i){if(t.sceneryGroup.remove(l),o(l.position.x,l.position.z))continue;let h=xx(l.scale.x*(.75+Math.random()*.35),e);h.position.copy(l.position),h.rotation.y=Math.random()*Math.PI,t.sceneryGroup.add(h)}t.sceneryGroup.traverse(l=>{let h=l.material;!h||!h.isMeshStandardMaterial||h.color.getHex()===5078031&&(h.color.setHex(e.ground),h.flatShading=!1,h.needsUpdate=!0)});let r=[],a=new Ce({map:_x(e.padColor),transparent:!0,opacity:.95,polygonOffset:!0,polygonOffsetFactor:-3}),c=t.trackPoints;for(let l of[.06,.3,.55,.8]){let h=Math.floor(l*c.length)%c.length,u=c[h],f=Math.atan2(u.tangentX,u.tangentZ);for(let d of[-.22,.22]){let p=u.x+u.normalX*d*t.roadWidth,_=u.z+u.normalZ*d*t.roadWidth,g=new et(new He(3.4,6),a);g.rotation.x=-Math.PI/2,g.rotation.z=f+Math.PI,g.position.set(p,u.y+.12,_),t.sceneryGroup.add(g),r.push({x:p,z:_,heading:f,mesh:g})}}return yx(t,o),gl(s,ml()),{pads:r,update:l=>{for(let h=0;h<n.length;h++)n[h].position.y+=Math.sin(l*.3+h)*.01;a.opacity=.75+Math.sin(l*8)*.2}}}function yx(s,t){let e=s.course.theme,n=h=>new Ft({color:h,roughness:.7}),i=n(16774361),o=n(e.glow?16014817:s.course.id==="frosty"?6670828:16276837),r=new _e(1.1,1.5,4,12),a=new ne(3.4,16,10,0,Math.PI*2,0,Math.PI/2),c=new ne(.55,8,6),l=new ne(1,20,12);for(let h=0;h<12;h++){let u=h*Math.PI/6,f=Math.cos(u)*245,d=Math.sin(u)*245;if(t(f,d))continue;let p=20+h%4*9,_=new et(l,n(e.trees[h%e.trees.length]));if(_.position.set(f,-5,d),_.scale.set(28+h%3*9,p,28),s.sceneryGroup.add(_),s.course.id==="frosty"){let g=new et(new ne(1,12,8,0,Math.PI*2,0,.9),i);g.position.copy(_.position),g.scale.set(28.2+h%3*9,p+.3,28.2),s.sceneryGroup.add(g)}}for(let h=0;h<s.trackPoints.length;h+=24){let u=s.trackPoints[h],f=h%48?-1:1,d=u.x+u.normalX*(s.roadWidth/2+17)*f,p=u.z+u.normalZ*(s.roadWidth/2+17)*f;if(t(d,p))continue;let _=new se;_.position.set(d,u.y-.5,p);let g=new et(r,i);g.position.y=2,_.add(g);let m=new et(a,o);m.position.y=3.7,_.add(m);for(let v=0;v<5;v++){let T=v*Math.PI*2/5,M=new et(c,i);M.position.set(Math.sin(T)*2.35,5.9,Math.cos(T)*2.35),M.scale.y=.4,_.add(M)}_.scale.setScalar(.8+h%3*.25),s.sceneryGroup.add(_)}for(let h of[-1,1])for(let u=0;u<6;u++){let f=s.trackPoints[Math.floor(u*.007*s.trackPoints.length)],d=f.x+f.normalX*(s.roadWidth/2+2.5)*h,p=f.z+f.normalZ*(s.roadWidth/2+2.5)*h,_=new et(new _e(.09,.09,5.5,6),i);_.position.set(d,f.y+2.75,p),s.sceneryGroup.add(_);let g=new ln;g.moveTo(0,0),g.lineTo(2.3*h,-.5),g.lineTo(0,-1.2),g.closePath();let m=new et(new Ys(g),new Ce({color:e.trees[u%e.trees.length],side:qe}));m.position.set(d,f.y+5.3,p),s.sceneryGroup.add(m)}}function Nu(){let s=document.createElement("canvas");s.width=s.height=64;let t=s.getContext("2d"),e=t.createRadialGradient(32,32,4,32,32,32);e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);let n=new et(new He(2.6,3.4),new Ce({map:new Pe(s),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));return n.rotation.x=-Math.PI/2,n}var vx=[{id:"tabby",name:"Luigi",color:"#20A747",accent:"#fff3d6",topper:"cat",spd:3,acc:4,hnd:4},{id:"bunbun",name:"Daisy",color:"#FFBB21",accent:"#fdf2f8",topper:"bunny",spd:2,acc:5,hnd:5},{id:"duke",name:"Bowser",color:"#E9A52D",accent:"#fcd34d",topper:"crown",spd:5,acc:2,hnd:3},{id:"rex",name:"Yoshi",color:"#26B950",accent:"#ecfdf5",topper:"horns",spd:5,acc:3,hnd:2},{id:"lulu",name:"Peach",color:"#F27BB4",accent:"#ffe4ec",topper:"bow",spd:3,acc:5,hnd:4},{id:"zippy",name:"Toad",color:"#3478D8",accent:"#f0f9ff",topper:"antenna",spd:4,acc:4,hnd:3},{id:"ace",name:"Mario",color:"#E22C30",accent:"#fff7d6",topper:"cap",spd:4,acc:3,hnd:4},{id:"grizz",name:"Donkey Kong",color:"#74391C",accent:"#f4f1e6",topper:"bear",spd:5,acc:2,hnd:2}],Mx={chill:.8,fast:1,turbo:1.2};function Uu(s,t,e,n){return{weight:s>=5?3:t>=5?1:2,topSpeed:(41.5+(s-3)*1.1)*n,acceleration:(30+(t-3)*2.6)*n,handling:(3.2+(e-3)*.18)*(n>1?1.08:1)}}var Fu=["cap","cat","bunny","crown","horns","bow","antenna"],bx=8,Sx={banana:'<svg viewBox="0 0 40 40"><path d="M7 12 C8 30 28 36 35 22 C25 25 15 22 12 9 Z" fill="#ffd93b" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><path d="M12 9 L10 4" stroke="#5a3a12" stroke-width="3" stroke-linecap="round"/><path d="M14 20 C18 26 24 28 30 26" fill="none" stroke="#fff6b0" stroke-width="2" stroke-linecap="round"/></svg>',green:'<svg viewBox="0 0 40 40"><ellipse cx="20" cy="29" rx="16" ry="6" fill="#e5b86b" stroke="#242443" stroke-width="2"/><path d="M5 26C5 3 35 3 35 26Z" fill="#36c971" stroke="#242443" stroke-width="2.5"/><path d="M20 7V26M8 16L20 21L32 16" fill="none" stroke="#242443" stroke-width="2"/><path d="M4 26Q20 33 36 26" fill="none" stroke="#fff5de" stroke-width="5"/></svg>',red:'<svg viewBox="0 0 40 40"><ellipse cx="20" cy="29" rx="16" ry="6" fill="#e5b86b" stroke="#242443" stroke-width="2"/><path d="M5 26C5 3 35 3 35 26Z" fill="#f25754" stroke="#242443" stroke-width="2.5"/><path d="M20 7V26M8 16L20 21L32 16" fill="none" stroke="#242443" stroke-width="2"/><path d="M4 26Q20 33 36 26" fill="none" stroke="#fff5de" stroke-width="5"/></svg>',blue:'<svg viewBox="0 0 40 40"><ellipse cx="20" cy="29" rx="16" ry="6" fill="#e5b86b" stroke="#242443" stroke-width="2"/><path d="M5 26C5 3 35 3 35 26Z" fill="#4e8aff" stroke="#242443" stroke-width="2.5"/><path d="M20 7V26M8 16L20 21L32 16" fill="none" stroke="#242443" stroke-width="2"/><path d="M4 26Q20 33 36 26" fill="none" stroke="#fff5de" stroke-width="5"/><path d="M13 9L14 2L18 8M23 8L28 2L29 12" fill="#fff" stroke="#242443" stroke-width="1.5"/></svg>',boost:'<svg viewBox="0 0 40 40"><rect x="11" y="20" width="18" height="16" rx="7" fill="#fff1ce" stroke="#242443" stroke-width="2.5"/><path d="M3 23C1 0 39 0 37 23Q20 29 3 23Z" fill="#f25754" stroke="#242443" stroke-width="2.5"/><ellipse cx="20" cy="12" rx="6" ry="7" fill="#fff"/><ellipse cx="7" cy="18" rx="3" ry="4" fill="#fff"/><ellipse cx="33" cy="18" rx="3" ry="4" fill="#fff"/><path d="M17 29v4M23 29v4" stroke="#242443" stroke-width="2.5" stroke-linecap="round"/></svg>',star:'<svg viewBox="0 0 40 40"><defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff7ac6"/><stop offset=".5" stop-color="#ffd34d"/><stop offset="1" stop-color="#5ee6c8"/></linearGradient></defs><path d="M20 3 L25 14.5 L37.5 15.5 L28 23.5 L31 36 L20 29.5 L9 36 L12 23.5 L2.5 15.5 L15 14.5 Z" fill="url(#sg)" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="34" cy="6" r="2" fill="#fff"/><circle cx="6" cy="31" r="1.5" fill="#fff"/></svg>',bolt:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="17" fill="#2b2f6b" stroke="#1b1b3a" stroke-width="2"/><path d="M24 4 L9 22 H18 L14 37 L31 16 H22 Z" fill="#fff15a" stroke="#1b1b3a" stroke-width="2" stroke-linejoin="round"/></svg>',fake:'<svg viewBox="0 0 40 40"><rect x="5" y="5" width="30" height="30" rx="4" fill="#e876b4" stroke="#242443" stroke-width="2.5"/><rect x="8" y="8" width="24" height="24" rx="2" fill="none" stroke="#fff0fa" stroke-width="2"/><text x="20" y="29" text-anchor="middle" font-family="Arial,sans-serif" font-weight="900" font-size="27" fill="#fff">?</text></svg>',coin:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="#ffc83d" stroke="#1b1b3a" stroke-width="2.5"/><circle cx="20" cy="20" r="10.5" fill="none" stroke="#e0a400" stroke-width="2"/><path d="M20 12 L22.4 17.2 L28 17.6 L23.8 21.2 L25.1 26.6 L20 23.7 L14.9 26.6 L16.2 21.2 L12 17.6 L17.6 17.2 Z" fill="#fff6c2"/></svg>',horn:'<svg viewBox="0 0 40 40"><path d="M6 17 h6 l12 -9 v24 l-12 -9 h-6 z" fill="#ff5d5d" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><rect x="9" y="23" width="4" height="8" rx="1.5" fill="#c9d3e6" stroke="#1b1b3a" stroke-width="2"/><path d="M29 14 Q33 20 29 26 M32.5 10 Q39 20 32.5 30" fill="none" stroke="#1b1b3a" stroke-width="2.5" stroke-linecap="round"/></svg>',bomb:'<svg viewBox="0 0 40 40"><circle cx="18" cy="24" r="12" fill="#23233a" stroke="#1b1b3a" stroke-width="2.5"/><rect x="15" y="9" width="7" height="5" rx="1.5" fill="#8a8fa8" stroke="#1b1b3a" stroke-width="2"/><path d="M20 9 Q22 4 27 5" fill="none" stroke="#c9a46a" stroke-width="2.5"/><path d="M29 2 l1.5 3 3 0.5 -2.3 2 0.6 3.2 -2.8 -1.6 -2.8 1.6 0.6 -3.2 -2.3 -2 3 -0.5 z" fill="#ffd34d"/><circle cx="13" cy="19" r="3" fill="#fff" opacity=".6"/></svg>',ink:'<svg viewBox="0 0 40 40"><path d="M20 6 C26 6 25 12 30 11 C36 10 36 17 32 19 C37 22 34 29 28 27 C28 33 22 36 18 31 C13 35 7 31 10 26 C4 25 4 18 9 17 C6 12 12 8 15 11 C15 7 17 6 20 6 Z" fill="#7b4cc9" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="34" cy="31" r="2.5" fill="#7b4cc9"/><circle cx="6" cy="9" r="2" fill="#7b4cc9"/><circle cx="16" cy="17" r="3" fill="#fff" opacity=".5"/></svg>',golden:'<svg viewBox="0 0 40 40"><rect x="11" y="20" width="18" height="16" rx="7" fill="#fff1ce" stroke="#242443" stroke-width="2.5"/><path d="M3 23C1 0 39 0 37 23Q20 29 3 23Z" fill="#ffc83d" stroke="#242443" stroke-width="2.5"/><ellipse cx="20" cy="12" rx="6" ry="7" fill="#fff"/><ellipse cx="7" cy="18" rx="3" ry="4" fill="#fff"/><ellipse cx="33" cy="18" rx="3" ry="4" fill="#fff"/><path d="M17 29v4M23 29v4" stroke="#242443" stroke-width="2.5" stroke-linecap="round"/></svg>',ride:'<svg viewBox="0 0 40 40"><g transform="rotate(-35 20 20)"><path d="M20 3 C26 9 26 22 25 29 H15 C14 22 14 9 20 3 Z" fill="#f4f5fa" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="20" cy="15" r="3.5" fill="#4cc9f0" stroke="#1b1b3a" stroke-width="2"/><path d="M15 21 L9 30 L15 28 Z M25 21 L31 30 L25 28 Z" fill="#ff7a00" stroke="#1b1b3a" stroke-width="2" stroke-linejoin="round"/><path d="M16 30 L20 39 L24 30 Z" fill="#ffd34d"/></g></svg>',ghost:'<svg viewBox="0 0 40 40"><path d="M8 34 V18 C8 10 13 5 20 5 C27 5 32 10 32 18 V34 L28 31 L24 34 L20 31 L16 34 L12 31 Z" fill="#f4f5fa" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><ellipse cx="15.5" cy="17" rx="2.5" ry="3.5" fill="#1b1b3a"/><ellipse cx="24.5" cy="17" rx="2.5" ry="3.5" fill="#1b1b3a"/><ellipse cx="20" cy="25" rx="3" ry="2" fill="#1b1b3a"/></svg>'},xl={banana:["Banana","drop behind"],green:["Green shell","fires straight"],red:["Red shell","chases next kart"],blue:["Spiny shell","hits 1st place"],boost:["Turbo","speed burst"],star:["Star power","unstoppable"],bolt:["Lightning","shrinks everyone"],fake:["Decoy box","fake item box"],coin:["Coins","more top speed"],horn:["Air horn","blast nearby"],bomb:["Bomb","throw \xB7 explodes"],ink:["Ink splat","blinds leaders"],golden:["Golden turbo","boost spam 7s"],ride:["Rocket ride","auto-drive fast"],ghost:["Ghost","steal an item"]};function Ou(s){return s+(s===1?"st":s===2?"nd":s===3?"rd":"th")}function Ex(s){if(s==null)return"--";let t=Math.floor(s/60),e=s-t*60;return t+":"+(e<10?"0":"")+e.toFixed(1)}var La=class{constructor(t,e){$(this,"container",t);$(this,"opts",e);$(this,"renderer");$(this,"scene",new Cs);$(this,"track");$(this,"particles",new Aa);$(this,"physics");$(this,"items",null);$(this,"racers",[]);$(this,"humans",[]);$(this,"overview");$(this,"overlay");$(this,"banner");$(this,"clock",new tr(!1));$(this,"raf",0);$(this,"phase","countdown");$(this,"countdown",0);$(this,"step",-1);$(this,"laps");$(this,"firstHumanFinishAt",-1);$(this,"elapsed",0);$(this,"disposed",!1);$(this,"finalLapMusic",!1);$(this,"music",null);$(this,"style");$(this,"gradient",ml());$(this,"shadows",new Map);$(this,"padCooldown",new Map);$(this,"onResize",()=>{let t=this.container.clientWidth,e=this.container.clientHeight;this.renderer.setSize(t,e);let n=this.views();this.humans.forEach((i,o)=>{let r=n[o];i.human.cam.onResize(r.w,r.h),Object.assign(i.human.hud.style,{left:r.x+"px",top:e-r.y-r.h+"px",width:r.w+"px",height:r.h+"px"});let a=Math.round(Math.min(r.h*.36,r.w*.2,210)),c=Math.round(Math.min(r.w,r.h)*.03),l=this.humans.length>1?44:60;Object.assign(i.human.ink.style,{left:r.x+"px",top:e-r.y-r.h+"px",width:r.w+"px",height:r.h+"px"}),Object.assign(i.human.banner.style,{left:r.x+"px",width:r.w+"px",top:e-r.y-r.h+r.h*.26+"px",fontSize:Math.round(Math.min(r.h*.13,72))+"px"}),Object.assign(i.human.map.style,{width:a+"px",height:a+"px",left:r.x+c+"px",top:e-r.y-a-c-l+"px"})}),n[3]&&this.humans.length===3&&this.overview.onResize(n[3].w,n[3].h),this.banner.style.fontSize=(this.humans.length>2?80:120)+"px"});$(this,"loop",()=>{if(this.disposed)return;this.raf=requestAnimationFrame(this.loop);let t=Math.min(this.clock.getDelta(),.05);this.elapsed+=t,this.phase==="replay"?this.replayFrame():this.phase==="podium"?this.podiumFrame(t):this.update(t),this.render()});$(this,"frames",[]);$(this,"winnerFrame",-1);$(this,"winnerId","");$(this,"finalOrder",[]);$(this,"cine",new Oe(50,16/9,.1,1500));$(this,"replayAt",0);$(this,"confetti",[]);$(this,"labels",[]);$(this,"recTick",0);$(this,"podiumKarts",[]);$(this,"podiumCenter",new I);$(this,"podiumDir",{fx:0,fz:1});$(this,"mapBase",null);$(this,"mapXf",{cx:0,cz:0,k:1});this.laps=e.laps||3;let n=Math.min(e.players.length,4)>1;this.renderer=new Ma({antialias:!n,powerPreference:"high-performance"}),this.renderer.setPixelRatio(e.quality==="high"?Math.min(window.devicePixelRatio,1.5):1),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.shadowMap.enabled=!n&&e.quality==="high",this.renderer.toneMapping=ir,this.renderer.toneMappingExposure=1.05,this.renderer.setScissorTest(!0),t.appendChild(this.renderer.domElement),this.renderer.domElement.style.display="block";let i=Ea(e.course).theme;this.scene.add(new Qs(16777215,i.ambient));let o=new js(i.sunColor,i.sun);o.position.set(100,150,80),o.castShadow=this.renderer.shadowMap.enabled,o.shadow.mapSize.set(1024,1024);let r=160;Object.assign(o.shadow.camera,{left:-r,right:r,top:r,bottom:-r,near:10,far:400}),this.scene.add(o),this.scene.add(new Ks(i.hemiSky,i.ground,.55)),this.track=new Ta(this.scene,e.course),this.scene.add(this.particles.group),this.physics=new Ra(this.track,this.particles),this.physics.totalLaps=this.laps,e.items!==!1&&(this.items=new Pa(this.scene,this.track),this.items.onEvent=c=>this.onItemEvent(c)),this.style=Du(this.scene,this.track);let a=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());this.scene.traverse(c=>{let l=c.material;l&&l.map&&(l.map.anisotropy=a,l.map.needsUpdate=!0)}),this.overview=new yr(1),this.overview.setView("topdown"),this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;pointer-events:none;font-family:Inter,Segoe UI,Roboto,sans-serif;color:#fff",t.style.position=t.style.position||"relative",t.appendChild(this.overlay),this.banner=document.createElement("div"),this.banner.style.cssText='position:absolute;left:50%;top:42%;transform:translate(-50%,-50%);font:900 120px/1 "Space Grotesk",Inter,sans-serif;text-shadow:0 6px 0 rgba(0,0,0,.35),0 0 30px rgba(0,0,0,.4);transition:transform .15s;white-space:nowrap',this.overlay.appendChild(this.banner),this.build(),window.addEventListener("resize",this.onResize)}build(){let t=this.opts.players.slice(0,4),e=[],n=Mx[this.opts.speed||"fast"]||1;t.forEach((r,a)=>{let c=r.stats||{spd:3,acc:3,hnd:3};e.push({id:r.id,name:r.name,isPlayer:!0,audioLead:a===0,color:r.color,accentColor:"#ffffff",helmetColor:r.color,visorColor:"#0f172a",number:a+1,...Uu(c.spd,c.acc,c.hnd,n),driftMultiplier:1.35,topper:r.topper||Fu[a%Fu.length]})});let i=new Set(t.map(r=>(r.driver||r.color).toLowerCase()));for(let r of this.opts.cpus===!1?[]:vx){if(e.length>=bx)break;if(i.has(r.id)||i.has(r.color.toLowerCase()))continue;let a=Uu(r.spd,r.acc,r.hnd,n);e.push({id:"cpu-"+r.id,name:r.name,isPlayer:!1,color:r.color,accentColor:r.accent,helmetColor:r.color,visorColor:"#0f172a",number:e.length+1,topSpeed:a.topSpeed*(.95+Math.random()*.04),acceleration:a.acceleration*.95,handling:a.handling,weight:a.weight,driftMultiplier:1.3,aiAggression:.9+Math.random()*.3,topper:r.topper})}e.filter(r=>!r.isPlayer).concat(e.filter(r=>r.isPlayer)).forEach((r,a)=>{let c=Ru(r);c.driverHead.scale.setScalar(1.18),gl(c.rootGroup,this.gradient),this.scene.add(c.rootGroup);let l=Nu();this.scene.add(l),this.shadows.set(r.id,l);let h={config:r,position:{x:a%2?3.5:-3.5,y:.1,z:-6-a*5.5},rotation:{y:Math.PI,pitch:0,roll:0},speed:0,angularVelocity:0,steerAngle:0,isDrifting:!1,driftDirection:0,driftTime:0,driftLevel:0,boostTimer:0,boostMultiplier:1,currentLap:1,lapDistance:0,totalDistance:0,splineProgress:0,checkpointIndex:0,lapTimes:[],currentLapTime:0,bestLapTime:null,totalRaceTime:0,rank:a+1,isFinished:!1,invulnerableTimer:0,spinOutTimer:0,shrinkTimer:0,starTimer:0},u={state:h,handles:c};if(r.isPlayer){let f=document.createElement("div");f.style.cssText="position:absolute;box-sizing:border-box;padding:2.2vh 2vw;display:flex;flex-direction:column;justify-content:space-between",this.overlay.appendChild(f);let d=document.createElement("canvas");d.width=d.height=256,d.style.cssText="position:absolute;pointer-events:none;filter:drop-shadow(0 4px 8px rgba(0,0,0,.45))",this.overlay.appendChild(d);let p=document.createElement("div");p.style.cssText="position:absolute;pointer-events:none;opacity:0;overflow:hidden",this.overlay.appendChild(p);let _=document.createElement("div");_.style.cssText='position:absolute;pointer-events:none;text-align:center;font:italic 900 64px/1 "Space Grotesk",Inter,sans-serif;color:#fff;-webkit-text-stroke:5px #1b1b3a;paint-order:stroke fill;opacity:0;white-space:nowrap',this.overlay.appendChild(_),u.human={idx:this.humans.length,cam:new yr(1),pad:{steer:0,gas:!1,brake:!1,drift:!1,item:!1},itemWas:!1,gasAt:-1,hud:f,map:d,banner:_,ink:p,finishedShown:!1},this.humans.push(u)}else u.ai=new Pi(this.track,h);this.racers.push(u)}),this.onResize()}setInput(t,e){let n=this.humans.find(i=>i.state.config.id===t);!n||!n.human||(e.gas&&!n.human.pad.gas&&(n.human.gasAt=this.countdown),Object.assign(n.human.pad,e))}hudInfo(){return this.humans.map(t=>{let e=this.items?this.items.held.get(t.state.config.id):void 0;return{p:t.state.config.id,rank:t.state.rank,of:this.racers.length,lap:Math.min(t.state.currentLap,this.laps),item:e?e.kind||"rolling":null,n:e&&e.kind?e.count:0,done:t.state.isFinished}})}start(){he.init(),this.clock.start(),this.loop()}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),he.stopEngine(),this.music?.stop(),window.removeEventListener("resize",this.onResize),this.renderer.dispose(),this.container.innerHTML=""}views(){let t=this.container.clientWidth,e=this.container.clientHeight,n=this.humans.length;return n<=1?[{x:0,y:0,w:t,h:e}]:n===2?[{x:0,y:e/2,w:t,h:e/2},{x:0,y:0,w:t,h:e/2}]:[{x:0,y:e/2,w:t/2,h:e/2},{x:t/2,y:e/2,w:t/2,h:e/2},{x:0,y:0,w:t/2,h:e/2},{x:t/2,y:0,w:t/2,h:e/2}]}update(t){this.track.update(this.elapsed,t),this.tickCountdown(t);let e=this.racers.map(r=>r.state),n=new Set,i={throttle:!1,brake:!1,steerLeft:!1,steerRight:!1,drift:!1,respawn:!1,cameraToggle:!1};for(let r of this.racers){let a=i;if(this.phase!=="countdown")if((r.state.rideTimer||0)>0)r.ai||(r.ai=new Pi(this.track,r.state)),a=r.ai.update(t,e);else if(r.human&&this.opts.autopilot)r.ai||(r.ai=new Pi(this.track,r.state)),a=r.ai.update(t,e);else if(r.human){let l=r.human.pad;r.state.isFinished?a=r.ai?r.ai.update(t,e):{...i,throttle:!0}:a={throttle:l.gas,brake:l.brake,steerLeft:!1,steerRight:!1,steer:l.steer,drift:l.drift,respawn:!1,cameraToggle:!1},this.items&&this.phase==="racing"&&(l.item&&!r.human.itemWas&&this.items.press(r.state.config.id,e),!l.item&&r.human.itemWas&&this.items.release(r.state.config.id,e)),r.human.itemWas=l.item}else r.ai&&(a=r.ai.update(t,e),(r.state.inkTimer||0)>0&&(a={...a,steer:(a.steer||0)+Math.sin(this.elapsed*3+r.state.position.x)*.5}));let c=r.state.currentLap;if(this.physics.updateRacer(r.state,a,r.handles,t,e),r.state.starTimer&&r.state.starTimer>0){let l=this.elapsed*2%1;r.handles.bodyGroup.traverse(h=>{let u=h.material;u&&u.emissive&&u.emissive.setHSL(l,1,.45)})}else r.state.starTimer!==void 0&&r.state.starTimer<=0&&r.state.starTimer>-1&&(r.handles.bodyGroup.traverse(l=>{let h=l.material;h&&h.emissive&&h.emissive.setRGB(0,0,0)}),r.state.starTimer=-1);this.phase==="racing"&&!r.state.isFinished&&(r.state.currentLapTime+=t,r.state.totalRaceTime+=t,r.state.currentLap!==c&&r.state.currentLap<=this.laps&&(this.opts.onEvent?.({type:"lap",racer:r.state.config.id,lap:r.state.currentLap,final:r.state.currentLap===this.laps}),r.human&&this.say(r,r.state.currentLap===this.laps?"FINAL LAP!":"LAP "+r.state.currentLap,r.state.currentLap===this.laps?"#ffc83d":"#ffffff",1500),r.human&&r.state.currentLap===this.laps&&!this.finalLapMusic&&(this.finalLapMusic=!0,this.music?.finalLap())),r.state.currentLap>this.laps&&(r.state.isFinished=!0,r.state.finishRank=this.racers.filter(l=>l.state.isFinished).length,r.state.finishRank===1&&(this.winnerFrame=this.frames.length,this.winnerId=r.state.config.id),r.human&&(r.ai||(r.ai=new Pi(this.track,r.state)),this.firstHumanFinishAt<0&&(this.firstHumanFinishAt=this.elapsed),this.opts.onEvent?.({type:"finish",racer:r.state.config.id,rank:r.state.finishRank}),this.say(r,r.state.finishRank===1?"1ST PLACE!":"FINISH!",r.state.finishRank===1?"#ffc83d":"#ffffff",2200),he.playFinishFanfare())))}let o=[...this.racers].sort((r,a)=>{let c=r.state.finishRank||99,l=a.state.finishRank||99;return c!==l?c-l:a.state.totalDistance-r.state.totalDistance});o.forEach((r,a)=>{r.state.rank=a+1}),this.phase==="racing"&&(this.detectMoments(),this.record()),this.items&&this.phase!=="countdown"&&this.items.update(t,this.elapsed,e,n,(r,a)=>{let c=this.racers.find(l=>l.state.config.id===r);c&&c.handles.rootGroup.scale.setScalar(Ie.lerp(c.handles.rootGroup.scale.x,a,t*6))}),this.style.update(this.elapsed);for(let r of this.racers){let a=(r.state.ghostTimer||0)>0;if(a!==!!r.handles.rootGroup.userData.ghost&&(r.handles.rootGroup.userData.ghost=a,r.handles.rootGroup.traverse(h=>{let u=h.material;u&&(u.transparent=a||u.transparent,u.opacity=a?.25:1)})),r.human){let h=(r.state.inkTimer||0)>0,u=r.human.ink;h&&u.style.opacity!=="1"?(u.innerHTML=wx(),u.style.transition="opacity .1s",u.style.opacity="1",Ax(u)):!h&&u.style.opacity==="1"&&(u.style.transition="opacity .9s",u.style.opacity="0")}let c=this.shadows.get(r.state.config.id);c&&(c.position.set(r.state.position.x,r.state.position.y+.06,r.state.position.z),c.rotation.z=r.state.rotation.y,c.scale.setScalar(r.handles.rootGroup.scale.x));let l=(this.padCooldown.get(r.state.config.id)||0)-t;if(this.padCooldown.set(r.state.config.id,l),l<=0&&this.phase==="racing")for(let h of this.style.pads){let u=r.state.position.x-h.x,f=r.state.position.z-h.z;if(u*u+f*f<7){r.state.boostTimer=Math.max(r.state.boostTimer,1.1),r.state.boostMultiplier=Math.max(r.state.boostMultiplier,1.45),r.state.speed=Math.max(r.state.speed,r.state.config.topSpeed*1.15),this.padCooldown.set(r.state.config.id,.8),r.human&&r.state.config.audioLead&&he.playBoostSound();break}}}this.particles.update(t);for(let r of this.humans)r.human.cam.update(r.state,t);this.humans.length===3&&this.overview.update(o[0].state,t),this.drawHud(),this.drawMaps(),this.phase==="racing"&&(this.humans.every(a=>a.state.isFinished)||this.firstHumanFinishAt>=0&&this.elapsed-this.firstHumanFinishAt>25)&&this.finish(o)}tickCountdown(t){if(this.phase!=="countdown"&&this.countdown>5)return;this.countdown+=t;let e=this.countdown,n=e<1?0:e<2?1:e<3?2:e<4?3:e<5?4:5;if(n===this.step)return;this.step=n;let i=["","3","2","1","GO!",""][n];if(this.banner.textContent=i,this.banner.style.color=n===4?"#5ee6c8":"#ffffff",this.banner.style.transform="translate(-50%,-50%) scale(1.25)",setTimeout(()=>{this.banner.style.transform="translate(-50%,-50%) scale(1)"},120),n>=1&&n<=3&&(he.playCountdownBeep(!1),this.track.setStartingLights(n)),n===4){he.playCountdownBeep(!0),this.track.setStartingLights(4),this.phase="racing",(!this.opts.autopilot||this.opts.music)&&(this.music=new Ia(this.opts.course||"meadow"),this.music.start());for(let o of this.humans){let r=o.human.gasAt;o.human.pad.gas&&r>=3.5&&r<4.05&&this.physics.triggerStartBoost(o.state)}}n===5&&this.track.setStartingLights(0)}finish(t){this.phase="done";let e=t.map((n,i)=>({id:n.state.config.id,name:n.state.config.name,color:n.state.config.color,human:!!n.human,rank:i+1,time:n.state.isFinished?n.state.totalRaceTime:null,bestLap:n.state.bestLapTime}));this.banner.textContent="FINISH!",this.banner.style.color="#ffc83d",this.finalOrder=t,this.music?.stop(),he.stopEngine(),setTimeout(()=>this.startReplay(),1800),setTimeout(()=>this.startPodium(),8300),setTimeout(()=>{this.phase="done",this.opts.onFinish?.(e)},15300)}record(){if(++this.recTick%2)return;let t=new Float32Array(this.racers.length*5);this.racers.forEach((e,n)=>{let i=e.state;t.set([i.position.x,i.position.y,i.position.z,i.rotation.y+(i.slideAngle||0)*.6,i.rotation.roll],n*5)}),this.frames.push(t)}hideHud(t){for(let e of this.humans)e.human.hud.style.display=e.human.map.style.display=e.human.banner.style.display=t?"none":""}startReplay(){this.disposed||this.winnerFrame<0||(this.phase="replay",this.replayAt=Math.max(0,this.winnerFrame-120),this.hideHud(!0),this.banner.innerHTML='<span style="font-size:.35em;letter-spacing:.1em;color:#ff5d5d">\u25CF REPLAY</span>',this.banner.style.top="8%",this.banner.style.left="10%")}replayFrame(){let t=Math.min(this.frames.length-1,this.winnerFrame+45),e=Math.min(t,Math.floor(this.replayAt)),n=this.frames[e];if(!n)return;this.racers.forEach((h,u)=>{let f=h.handles.rootGroup;f.position.set(n[u*5],n[u*5+1],n[u*5+2]),f.rotation.y=n[u*5+3],f.rotation.z=n[u*5+4];let d=this.shadows.get(h.state.config.id);d&&(d.position.set(n[u*5],n[u*5+1]+.06,n[u*5+2]),d.rotation.z=n[u*5+3])});let i=this.racers.findIndex(h=>h.state.config.id===this.winnerId),o=n[i*5],r=n[i*5+1],a=n[i*5+2],c=n[i*5+3],l=(e-(this.winnerFrame-120))/165;if(l<.5){let u=3-l*6;this.cine.position.set(o+Math.cos(c)*7-Math.sin(c)*u,r+1.4,a-Math.sin(c)*7-Math.cos(c)*u)}else{let h=this.track.trackPoints,u=h[h.length-6];this.cine.position.set(u.x-u.normalX*15,u.y+3.5,u.z-u.normalZ*15)}this.cine.lookAt(o,r+.8,a),this.replayAt+=.75}startPodium(){if(this.disposed)return;this.phase="podium",he.playFinishFanfare();let t=this.finalOrder.slice(0,3),e=this.track.trackPoints[Math.floor(this.track.trackPoints.length*.06)],n=new I(e.x,e.y,e.z),i=Math.atan2(e.tangentX,e.tangentZ)+Math.PI,o=Math.sin(i),r=Math.cos(i),a=Math.cos(i),c=-Math.sin(i);this.racers.forEach(f=>{if(!t.includes(f)){f.handles.rootGroup.visible=!1;let d=this.shadows.get(f.state.config.id);d&&(d.visible=!1)}});let l=[[0,2.4,"#ffc83d"],[-4.6,1.6,"#c9d3e6"],[4.6,1,"#e08a4c"]];this.podiumKarts=[],t.forEach((f,d)=>{let[p,_,g]=l[d],m=new et(new de(4.2,_,4.2),new Ft({color:g,roughness:.4}));m.position.set(n.x+a*p,n.y+_/2,n.z+c*p),m.rotation.y=i;let v=document.createElement("canvas");v.width=v.height=128;let T=v.getContext("2d");T.fillStyle="#1b1b3a",T.font="italic 900 96px sans-serif",T.textAlign="center",T.textBaseline="middle",T.fillText(String(d+1),64,70);let M=new et(new He(2,2),new Ce({map:new Pe(v),transparent:!0}));M.position.set(m.position.x+o*2.12,n.y+_/2,m.position.z+r*2.12),M.rotation.y=i,this.scene.add(m,M);let R=f.handles.rootGroup;R.visible=!0,R.position.set(m.position.x,n.y+_,m.position.z),R.rotation.set(0,i,0),this.podiumKarts.push({r:f,y:n.y+_,i:d});let b=document.createElement("div");b.style.cssText='position:absolute;transform:translate(-50%,-100%);text-align:center;font:italic 900 34px "Space Grotesk",Inter,sans-serif;color:#fff;-webkit-text-stroke:4px #1b1b3a;paint-order:stroke fill;white-space:nowrap',b.innerHTML='<span style="color:'+["#ffc83d","#dfe7ff","#f0a46b"][d]+'">'+["1ST","2ND","3RD"][d]+"</span> "+_l(f.state.config.name),this.overlay.appendChild(b),this.labels.push(b)}),this.cine.position.set(n.x+o*12,n.y+4.5,n.z+r*12),this.cine.lookAt(n.x,n.y+2,n.z),this.podiumCenter=n,this.podiumDir={fx:o,fz:r};let h=[16735631,16762941,5032432,6219464,10185727,16777215];for(let f=0;f<160;f++){let d=new et(new He(.25,.4),new Ce({color:h[f%h.length],side:qe}));d.position.set(n.x+(Math.random()-.5)*18,n.y+6+Math.random()*10,n.z+(Math.random()-.5)*18),d.userData.v=1.5+Math.random()*2,this.scene.add(d),this.confetti.push(d)}let u=t[0];this.banner.innerHTML=_l(u.state.config.name)+" WINS!",this.banner.style.color="#ffc83d",this.banner.style.top="9%",this.banner.style.left="50%",this.banner.style.fontSize="72px"}podiumFrame(t){let e=this.elapsed;for(let c of this.podiumKarts){let l=c.r.handles.rootGroup,h=c.i===0?Math.abs(Math.sin(e*5))*.9:Math.abs(Math.sin(e*4+c.i))*.4;l.position.y=c.y+h,c.i===0&&(l.rotation.y+=t*(Math.sin(e*.7)>.6?6:0)),c.r.handles.driverHead.rotation.z=Math.sin(e*8+c.i)*.25;let u=l.position.clone();u.y+=3.2,u.project(this.cine);let f=this.container.clientWidth,d=this.container.clientHeight,p=this.labels[c.i];p&&(p.style.left=(u.x*.5+.5)*f+"px",p.style.top=(-u.y*.5+.5)*d+"px")}for(let c of this.confetti)c.position.y-=c.userData.v*t,c.rotation.x+=t*4,c.rotation.y+=t*3,c.position.y<this.podiumCenter.y&&(c.position.y+=16);let n=Math.sin(e*.3)*.35,{fx:i,fz:o}=this.podiumDir,r=i*Math.cos(n)-o*Math.sin(n),a=i*Math.sin(n)+o*Math.cos(n);this.cine.position.set(this.podiumCenter.x+r*12,this.podiumCenter.y+4.5,this.podiumCenter.z+a*12),this.cine.lookAt(this.podiumCenter.x,this.podiumCenter.y+2.2,this.podiumCenter.z)}onItemEvent(t){this.opts.onEvent?.(t);let e=this.humans.find(i=>i.state.config.id===t.racer),n=t.by?this.humans.find(i=>i.state.config.id===t.by):void 0;if(t.type==="hit")e&&this.say(e,t.item==="blue"?"ZAPPED!":"HIT!","#ff5d5d"),n&&n!==e&&this.say(n,"NICE HIT!","#5ee6c8");else if(t.type==="block"&&e)this.say(e,"BLOCKED!","#8fb4ff",900);else if(t.type==="bolt")for(let i of this.humans)i!==e&&!((i.state.starTimer||0)>0)&&this.say(i,"SHRUNK!","#fff15a");else t.type==="use"&&e&&t.item==="star"?this.say(e,"STAR POWER!","#ffd34d"):t.type==="use"&&e&&t.item==="ride"?this.say(e,"ROCKET RIDE!","#ff7a00"):t.type==="use"&&e&&t.item==="ghost"?this.say(e,"GHOST!","#e8ecff"):t.type==="use"&&e&&t.item==="coin"?this.say(e,"+2 COINS","#ffc83d",700):t.type==="use"&&e&&t.item==="golden"?this.say(e,"GOLDEN TURBO!","#ffc83d",700):t.type==="ink"&&e?this.say(e,"SPLAT!","#c9a8ff"):t.type==="steal"?(e&&this.say(e,"STOLEN!","#ff5d5d"),n&&n!==e&&this.say(n,"GOT IT!","#5ee6c8")):t.type==="horn"&&e&&this.say(e,"HONK!","#ffffff",700)}render(){if(this.phase==="replay"||this.phase==="podium"){let e=this.container.clientWidth,n=this.container.clientHeight;this.cine.aspect=e/n,this.cine.updateProjectionMatrix(),this.renderer.setViewport(0,0,e,n),this.renderer.setScissor(0,0,e,n),this.renderer.render(this.scene,this.cine);return}let t=this.views();if(this.humans.forEach((e,n)=>{let i=t[n];this.renderer.setViewport(i.x,i.y,i.w,i.h),this.renderer.setScissor(i.x,i.y,i.w,i.h),this.renderer.render(this.scene,e.human.cam.camera)}),this.humans.length===3){let e=t[3];this.renderer.setViewport(e.x,e.y,e.w,e.h),this.renderer.setScissor(e.x,e.y,e.w,e.h),this.renderer.render(this.scene,this.overview.camera)}}say(t,e,n="#ffffff",i=1100){let o=t.human.banner;o.textContent=e,o.style.color=n,o.animate([{opacity:0,transform:"scale(2.2) rotate(-6deg)"},{opacity:1,transform:"scale(1) rotate(-4deg)",offset:.15},{opacity:1,transform:"scale(1.05) rotate(-4deg)",offset:.75},{opacity:0,transform:"scale(0.9) translateY(-20px) rotate(-4deg)"}],{duration:i,easing:"cubic-bezier(.2,.9,.3,1.2)",fill:"forwards"})}emit(t){this.opts.onEvent?.(t)}detectMoments(){for(let t of this.humans){let e=t.human,n=t.state,i=n.config.id;if(n.isFinished)continue;if(e.rankCalm=(e.rankCalm||0)-1,e.lastRank!==void 0&&n.rank<e.lastRank&&e.rankCalm<=0&&(this.say(t,n.rank===1?"TAKE THE LEAD!":"OVERTAKE!","#5ee6c8"),this.emit({type:"overtake",racer:i,rank:n.rank}),e.rankCalm=45),e.lastRank=n.rank,n.bumpedAt&&n.bumpedAt!==e.lastBump&&(e.lastBump=n.bumpedAt,this.emit({type:"bump",racer:i})),n.isDrifting&&(e.driftLvl=n.driftLevel),e.wasDrifting&&!n.isDrifting&&(e.driftLvl||0)>0){let r=e.driftLvl||1;this.say(t,r===3?"ULTRA BOOST!":r===2?"SUPER BOOST!":"BOOST!",r===3?"#c084fc":r===2?"#fb923c":"#38bdf8",800),this.emit({type:"mtboost",racer:i,level:r}),e.driftLvl=0}n.isDrifting&&n.driftLevel>(e.driftLvl===void 0?0:-1),e.wasDrifting=n.isDrifting;let o=this.track.onShortcut(n.position.x,n.position.z)!==null&&this.track.getClosestTrackPoint(n.position.x,n.position.z).distanceToCenter>this.track.roadWidth/2+.5;o&&!e.onDirt&&this.say(t,n.boostTimer>0?"SHORTCUT!":"DIRT! BOOST THROUGH","#ffc83d",900),e.onDirt=o}}toMap(t,e){return[128+(t-this.mapXf.cx)*this.mapXf.k,128+(e-this.mapXf.cz)*this.mapXf.k]}buildMapBase(){let t=this.track.trackPoints,e=1e9,n=-1e9,i=1e9,o=-1e9;for(let d of t)e=Math.min(e,d.x),n=Math.max(n,d.x),i=Math.min(i,d.z),o=Math.max(o,d.z);this.mapXf={cx:(e+n)/2,cz:(i+o)/2,k:220/Math.max(n-e,o-i)};let r=document.createElement("canvas");r.width=r.height=256;let a=r.getContext("2d"),c=()=>{a.beginPath(),t.forEach((d,p)=>{let[_,g]=this.toMap(d.x,d.z);p?a.lineTo(_,g):a.moveTo(_,g)}),a.closePath()};a.lineJoin="round",a.lineCap="round",c(),a.strokeStyle="#1b1b3a",a.lineWidth=22,a.stroke(),c(),a.strokeStyle="#ffffff",a.lineWidth=15,a.stroke(),c(),a.strokeStyle="#c9d3e6",a.lineWidth=9,a.stroke();let l=t[0],[h,u]=this.toMap(l.x,l.z),f=Math.atan2(l.normalZ,l.normalX);a.save(),a.translate(h,u),a.rotate(f);for(let d=-3;d<3;d++)for(let p=0;p<2;p++)a.fillStyle=(d+p)%2?"#1b1b3a":"#ffffff",a.fillRect(d*3,p*3-3,3,3);a.restore(),this.mapBase=r}drawMaps(){this.mapBase||this.buildMapBase();let t=.5+.5*Math.sin(this.elapsed*6),e=[...this.racers].sort((n,i)=>(n.human?1:0)-(i.human?1:0)||i.state.rank-n.state.rank);for(let n of this.humans){let i=n.human.map.getContext("2d");i.clearRect(0,0,256,256),i.drawImage(this.mapBase,0,0);for(let c of e){if(c===n)continue;let[l,h]=this.toMap(c.state.position.x,c.state.position.z),u=c.human?9:6.5;i.beginPath(),i.arc(l,h,u,0,Math.PI*2),i.fillStyle=c.state.config.color,i.fill(),i.lineWidth=c.human?3.5:2.5,i.strokeStyle=c.human?"#ffffff":"#1b1b3a",i.stroke()}let[o,r]=this.toMap(n.state.position.x,n.state.position.z),a=n.state.rotation.y;i.beginPath(),i.arc(o,r,15+t*5,0,Math.PI*2),i.strokeStyle="rgba(255,200,61,"+(.9-t*.6)+")",i.lineWidth=4,i.stroke(),i.save(),i.translate(o,r),i.rotate(Math.atan2(Math.cos(a),Math.sin(a))),i.beginPath(),i.moveTo(21,0),i.lineTo(9,-8),i.lineTo(9,8),i.closePath(),i.fillStyle="#ffc83d",i.fill(),i.lineWidth=2.5,i.strokeStyle="#1b1b3a",i.stroke(),i.restore(),i.beginPath(),i.arc(o,r,11,0,Math.PI*2),i.fillStyle=n.state.config.color,i.fill(),i.lineWidth=4,i.strokeStyle="#ffffff",i.stroke(),i.beginPath(),i.arc(o,r,13.5,0,Math.PI*2),i.lineWidth=2,i.strokeStyle="#1b1b3a",i.stroke()}}drawHud(){let t=this.humans.length>1;for(let e of this.humans){let n=e.state,i=this.items?this.items.held.get(n.config.id):void 0,o=i?Sx[i.shown]:"",r=Math.min(n.currentLap,this.laps),a=r===this.laps&&!n.isFinished&&this.phase==="racing",c=n.isDrifting?["#ffffff","#38bdf8","#fb923c","#c084fc"][n.driftLevel]:"transparent",l=t?64:104,h=n.rank===1?"linear-gradient(#fff6a8,#ffc21a 55%,#e88a00)":n.rank===2?"linear-gradient(#ffffff,#c9d3e6 60%,#8e9bb5)":n.rank===3?"linear-gradient(#ffd9b3,#e08a4c 60%,#a85a2a)":"linear-gradient(#ffffff,#dfe7ff)",u='<div style="display:flex;justify-content:space-between;align-items:flex-start"><div style="width:'+(t?70:100)+"px;height:"+(t?70:100)+"px;border-radius:22px;background:radial-gradient(circle at 50% 40%,#3a4a8a,#141a3a);border:5px solid #fff;box-shadow:0 0 0 4px "+(i&&!i.kind?"#ffc83d":"#1b1b3a")+',0 6px 14px rgba(0,0,0,.45);padding:10px;box-sizing:border-box;position:relative">'+o+(i&&i.kind&&xl[i.kind]?'<div style="position:absolute;left:0;top:100%;margin-top:'+(t?8:12)+'px;white-space:nowrap;text-shadow:0 2px 4px rgba(0,0,0,.8)"><div style="font:900 '+(t?15:20)+'px Inter,sans-serif;color:#fff">'+xl[i.kind][0]+'</div><div style="font:700 '+(t?12:15)+'px Inter,sans-serif;color:#ffc83d">'+xl[i.kind][1]+"</div></div>":"")+(i&&i.kind&&i.count>1?'<span style="position:absolute;right:-12px;bottom:-12px;font:italic 900 '+(t?20:28)+`px 'Space Grotesk',Inter,sans-serif;color:#fff;-webkit-text-stroke:3px #1b1b3a;paint-order:stroke fill">\xD7`+i.count+"</span>":"")+'</div><div style="text-align:right;text-shadow:0 2px 6px rgba(0,0,0,.6)"><div style="font:italic 900 '+(t?24:36)+"px 'Space Grotesk',Inter,sans-serif;color:"+(a?"#ffc83d":"#fff")+";-webkit-text-stroke:"+(t?2:3)+'px #1b1b3a;paint-order:stroke fill;letter-spacing:1px">'+(n.isFinished?"FINISH!":a?"FINAL LAP!":"LAP "+r+"/"+this.laps)+'</div><div style="font:600 '+(t?14:18)+'px Inter,sans-serif;opacity:.9">'+Ex(n.totalRaceTime)+'</div></div></div><div style="display:flex;justify-content:space-between;align-items:flex-end"><div style="display:flex;align-items:center;gap:10px;background:rgba(14,16,32,.6);border-radius:999px;padding:6px 14px 6px 6px"><span style="width:'+(t?22:30)+"px;height:"+(t?22:30)+"px;border-radius:50%;background:"+n.config.color+";box-shadow:0 0 0 3px "+c+'"></span><span style="font:700 '+(t?16:22)+'px Inter,sans-serif">'+_l(n.config.name)+'</span><span style="display:inline-flex;align-items:center;gap:4px;font:800 '+(t?15:20)+'px Inter,sans-serif;color:#ffc83d"><span style="width:'+(t?14:18)+"px;height:"+(t?14:18)+'px;border-radius:50%;background:#ffc83d;border:2px solid #1b1b3a;box-sizing:border-box"></span>'+(n.coins||0)+'</span></div><div style="position:relative;font:italic 900 '+l+`px/0.9 'Space Grotesk',Inter,sans-serif;transform:skewX(-6deg)"><span style="position:absolute;inset:0;-webkit-text-stroke:`+(t?8:12)+'px #1b1b3a;color:#1b1b3a">'+Ou(n.rank)+'</span><span style="position:relative;background:'+h+';-webkit-background-clip:text;background-clip:text;color:transparent">'+Ou(n.rank)+"</span></div></div>";e.human.hud.innerHTML!==u&&(e.human.hud.innerHTML=u)}}};function Tx(s,t,e){let i=[];for(let r=0;r<22;r++){let a=r/22*Math.PI*2,c=Math.random()<.28?1.35+Math.random()*.55:.78+Math.random()*.28;i.push([s+Math.cos(a)*e*c,t+Math.sin(a)*e*c])}let o="";for(let r=0;r<22;r++){let a=i[(r-1+22)%22],c=i[r],l=i[(r+1)%22],h=i[(r+2)%22];r===0&&(o+="M"+c[0].toFixed(1)+" "+c[1].toFixed(1));let u=c[0]+(l[0]-a[0])/6,f=c[1]+(l[1]-a[1])/6,d=l[0]-(h[0]-c[0])/6,p=l[1]-(h[1]-c[1])/6;o+="C"+u.toFixed(1)+" "+f.toFixed(1)+" "+d.toFixed(1)+" "+p.toFixed(1)+" "+l[0].toFixed(1)+" "+l[1].toFixed(1)}return o+"Z"}function wx(){let s="";return[[28,38,30],[64,48,36],[46,66,24],[78,26,20],[16,70,18]].forEach(([e,n,i],o)=>{let r=e+(Math.random()-.5)*12,a=n+(Math.random()-.5)*12,c=i*(.85+Math.random()*.35),l="ink"+Math.random().toString(36).slice(2,7),h="";for(let f=0;f<7;f++){let d=Math.random()*Math.PI*2,p=58+Math.random()*30,_=2.5+Math.random()*5;h+='<circle cx="'+(100+Math.cos(d)*p).toFixed(1)+'" cy="'+(100+Math.sin(d)*p).toFixed(1)+'" r="'+_.toFixed(1)+'"/>'}let u="";for(let f=0;f<3;f++){let d=70+Math.random()*60,p=5+Math.random()*6,_=30+Math.random()*60;u+='<g class="drip" style="transform-origin:'+d+'px 120px"><rect x="'+(d-p/2).toFixed(1)+'" y="110" width="'+p.toFixed(1)+'" height="'+_.toFixed(1)+'" rx="'+(p/2).toFixed(1)+'"/><circle cx="'+d.toFixed(1)+'" cy="'+(110+_).toFixed(1)+'" r="'+(p*.8).toFixed(1)+'"/></g>'}s+='<svg class="splat" viewBox="0 0 200 240" style="position:absolute;left:'+r.toFixed(1)+"%;top:"+a.toFixed(1)+"%;width:"+c.toFixed(1)+"%;transform:translate(-50%,-42%) rotate("+Math.round(Math.random()*360)+'deg);filter:drop-shadow(0 6px 8px rgba(0,0,0,.45));opacity:0" data-k="'+o+'"><defs><radialGradient id="'+l+'" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#5b34a3"/><stop offset=".55" stop-color="#34196b"/><stop offset="1" stop-color="#1c0c3f"/></radialGradient></defs><g fill="url(#'+l+')">'+u+'<path d="'+Tx(100,100,52)+'"/>'+h+'</g><ellipse cx="82" cy="76" rx="20" ry="11" fill="#fff" opacity=".22" transform="rotate(-25 82 76)"/><circle cx="104" cy="66" r="5" fill="#fff" opacity=".3"/></svg>'}),s}function Ax(s){s.querySelectorAll("svg.splat").forEach(t=>{let e=Number(t.getAttribute("data-k"))||0,n=t.style.transform;t.animate([{opacity:0,transform:n+" scale(0.2)"},{opacity:1,transform:n+" scale(1.18)",offset:.55},{opacity:1,transform:n+" scale(1)"}],{duration:260,delay:e*110,easing:"cubic-bezier(.2,1.4,.4,1)",fill:"forwards"}),t.querySelectorAll("g.drip").forEach(i=>{i.animate([{transform:"scaleY(0.05)"},{transform:"scaleY(1)"}],{duration:2600,delay:400+e*110,easing:"ease-in",fill:"forwards"})})})}function _l(s){return s.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}var Rx=()=>he.init();["pointerdown","keydown","click","touchstart"].forEach(s=>document.addEventListener(s,Rx,{capture:!0}));function Cx(s,t){t.audioContext&&he.adopt(t.audioContext);let e=new La(s,t);return e.start(),window.CouchKart.current=e,e}function Px(){try{let s=document.createElement("canvas");return!!(s.getContext("webgl2")||s.getContext("webgl"))}catch{return!1}}window.CouchKart={start:Cx,supported:Px,version:1,soundOn:()=>he.running()};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
