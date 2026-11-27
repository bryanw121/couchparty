"use strict";(()=>{var Hu=Object.defineProperty;var Gu=(s,t,e)=>t in s?Hu(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Z=(s,t,e)=>Gu(s,typeof t!="symbol"?t+"":t,e);var Ql=0,xc=1,jl=2;var js=1,th=2,is=3,kn=0,ze=1,Xe=2,Rn=0,gi=1,tr=2,_c=3,yc=4,eh=5;var jn=100,nh=101,ih=102,sh=103,rh=104,oh=200,ah=201,ch=202,lh=203,Xr=204,qr=205,hh=206,uh=207,dh=208,fh=209,ph=210,mh=211,gh=212,xh=213,_h=214,Yr=0,Zr=1,Jr=2,xi=3,Kr=4,$r=5,Qr=6,jr=7,vc=0,yh=1,vh=2,pn=0,Mc=1,bc=2,Sc=3,er=4,Ec=5,Tc=6,wc=7;var Ac=300,si=301,Mi=302,Ao=303,Ro=304,nr=306,tn=1e3,bn=1001,to=1002,Ae=1003,Mh=1004;var ir=1005;var Be=1006,Co=1007;var ri=1008;var Ke=1009,Rc=1010,Cc=1011,ss=1012,Po=1013,mn=1014,gn=1015,Cn=1016,Io=1017,Lo=1018,rs=1020,Pc=35902,Ic=35899,Lc=1021,Dc=1022,cn=1023,Sn=1026,oi=1027,sr=1028,Do=1029,ai=1030,No=1031;var Uo=1033,rr=33776,or=33777,ar=33778,cr=33779,Fo=35840,Oo=35841,Bo=35842,ko=35843,zo=36196,Ho=37492,Go=37496,Vo=37488,Wo=37489,lr=37490,Xo=37491,qo=37808,Yo=37809,Zo=37810,Jo=37811,Ko=37812,$o=37813,Qo=37814,jo=37815,ta=37816,ea=37817,na=37818,ia=37819,sa=37820,ra=37821,oa=36492,aa=36494,ca=36495,la=36283,ha=36284,hr=36285,ua=36286;var vs=2300,eo=2301,Wr=2302,nc=2303,ic=2400,sc=2401,rc=2402;var bh=3200;var ur=0,Sh=1,Gn="",Ie="srgb",Ms="srgb-linear",bs="linear",Qt="srgb";var pi=7680;var oc=519,Eh=512,Th=513,wh=514,da=515,Ah=516,Rh=517,fa=518,Ch=519,ac=35044;var Nc="300 es",fn=2e3,Vi=2001;function Vu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Wu(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ss(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ph(){let s=Ss("canvas");return s.style.display="block",s}var Sl={},Wi=null;function Uc(...s){let t="THREE."+s.shift();Wi?Wi("log",t,...s):console.log(t,...s)}function Ih(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function It(...s){s=Ih(s);let t="THREE."+s.shift();if(Wi)Wi("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Nt(...s){s=Ih(s);let t="THREE."+s.shift();if(Wi)Wi("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function mi(...s){let t=s.join(" ");t in Sl||(Sl[t]=!0,It(...s))}function Lh(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}var Dh={[Yr]:Zr,[Jr]:Qr,[Kr]:jr,[xi]:$r,[Zr]:Yr,[Qr]:Jr,[jr]:Kr,[$r]:xi},En=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],El=1234567,gs=Math.PI/180,Xi=180/Math.PI;function bi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[s&255]+Ge[s>>8&255]+Ge[s>>16&255]+Ge[s>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Wt(s,t,e){return Math.max(t,Math.min(e,s))}function Fc(s,t){return(s%t+t)%t}function Xu(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function qu(s,t,e){return s!==t?(e-s)/(t-s):0}function xs(s,t,e){return(1-e)*s+e*t}function Yu(s,t,e,n){return xs(s,t,1-Math.exp(-e*n))}function Zu(s,t=1){return t-Math.abs(Fc(s,t*2)-t)}function Ju(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Ku(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function $u(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Qu(s,t){return s+Math.random()*(t-s)}function ju(s){return s*(.5-Math.random())}function td(s){s!==void 0&&(El=s);let t=El+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ed(s){return s*gs}function nd(s){return s*Xi}function id(s){return(s&s-1)===0&&s!==0}function sd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function rd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function od(s,t,e,n,i){let o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+n)/2),h=r((t+n)/2),d=o((t-n)/2),u=r((t-n)/2),f=o((n-t)/2),p=r((n-t)/2);switch(i){case"XYX":s.set(a*h,c*d,c*u,a*l);break;case"YZY":s.set(c*u,a*h,c*d,a*l);break;case"ZXZ":s.set(c*d,c*u,a*h,a*l);break;case"XZX":s.set(a*h,c*p,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*p,a*l);break;case"ZYZ":s.set(c*p,c*f,a*h,a*l);break;default:It("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function zi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ye(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Pe={DEG2RAD:gs,RAD2DEG:Xi,generateUUID:bi,clamp:Wt,euclideanModulo:Fc,mapLinear:Xu,inverseLerp:qu,lerp:xs,damp:Yu,pingpong:Zu,smoothstep:Ju,smootherstep:Ku,randInt:$u,randFloat:Qu,randFloatSpread:ju,seededRandom:td,degToRad:ed,radToDeg:nd,isPowerOfTwo:id,ceilPowerOfTwo:sd,floorPowerOfTwo:rd,setQuaternionFromProperEuler:od,normalize:Ye,denormalize:zi},Gc=class Gc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gc.prototype.isVector2=!0;var vt=Gc,Tn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=o[r+0],f=o[r+1],p=o[r+2],_=o[r+3];if(d!==_||c!==u||l!==f||h!==p){let g=c*u+l*f+h*p+d*_;g<0&&(u=-u,f=-f,p=-p,_=-_,g=-g);let m=1-a;if(g<.9995){let b=Math.acos(g),S=Math.sin(b);m=Math.sin(m*b)/S,a=Math.sin(a*b)/S,c=c*m+u*a,l=l*m+f*a,h=h*m+p*a,d=d*m+_*a}else{c=c*m+u*a,l=l*m+f*a,h=h*m+p*a,d=d*m+_*a;let b=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=b,l*=b,h*=b,d*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,o,r){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=o[r],u=o[r+1],f=o[r+2],p=o[r+3];return t[e]=a*p+h*d+c*f-l*u,t[e+1]=c*p+h*u+l*d-a*f,t[e+2]=l*p+h*f+a*u-c*d,t[e+3]=h*p-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(o/2),u=c(n/2),f=c(i/2),p=c(o/2);switch(r){case"XYZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"YZX":this._x=u*h*d+l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d-u*f*p;break;case"XZY":this._x=u*h*d-l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d+u*f*p;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(o-l)*f,this._z=(r-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(o+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(o-l)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(r-i)/f,this._x=(o+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+i*l-o*c,this._y=i*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-i*a,this._w=r*h-n*a-i*c-o*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,o=t._z,r=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,o=-o,r=-r,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+o*e,this._w=this._w*c+r*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+o*e,this._w=this._w*c+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Vc=class Vc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*i-a*n),h=2*(a*e-o*i),d=2*(o*n-r*e);return this.x=e+c*l+r*d-a*h,this.y=n+c*h+a*l-o*d,this.z=i+c*d+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-o*a,this.y=o*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ia.copy(this).projectOnVector(t),this.sub(Ia)}reflect(t){return this.sub(Ia.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vc.prototype.isVector3=!0;var P=Vc,Ia=new P,Tl=new Tn,Wc=class Wc{constructor(t,e,n,i,o,r,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l)}set(t,e,n,i,o,r,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],_=i[0],g=i[3],m=i[6],b=i[1],S=i[4],v=i[7],w=i[2],E=i[5],C=i[8];return o[0]=r*_+a*b+c*w,o[3]=r*g+a*S+c*E,o[6]=r*m+a*v+c*C,o[1]=l*_+h*b+d*w,o[4]=l*g+h*S+d*E,o[7]=l*m+h*v+d*C,o[2]=u*_+f*b+p*w,o[5]=u*g+f*S+p*E,o[8]=u*m+f*v+p*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+i*o*l-i*r*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*r-a*l,u=a*c-h*o,f=l*o-r*c,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=d*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*r)*_,t[3]=u*_,t[4]=(h*e-i*c)*_,t[5]=(i*o-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){let c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-i*l,i*c,-i*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return mi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(La.makeScale(t,e)),this}rotate(t){return mi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(La.makeRotation(-t)),this}translate(t,e){return mi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(La.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Wc.prototype.isMatrix3=!0;var Ft=Wc,La=new Ft,wl=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Al=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ad(){let s={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(i,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===Qt&&(i.r=Bn(i.r),i.g=Bn(i.g),i.b=Bn(i.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Qt&&(i.r=Hi(i.r),i.g=Hi(i.g),i.b=Hi(i.b))),i},workingToColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},colorSpaceToWorking:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gn?bs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,r){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,o){return mi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,o)},toWorkingColorSpace:function(i,o){return mi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ms]:{primaries:t,whitePoint:n,transfer:bs,toXYZ:wl,fromXYZ:Al,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:Qt,toXYZ:wl,fromXYZ:Al,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),s}var Xt=ad();function Bn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ri,no=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ri===void 0&&(Ri=Ss("canvas")),Ri.width=t.width,Ri.height=t.height;let i=Ri.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ri}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ss("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=Bn(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bn(e[n]/255)*255):e[n]=Bn(e[n]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cd=0,qi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=bi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Da(i[r].image)):o.push(Da(i[r]))}else o=Da(i);n.url=o}return e||(t.images[this.uuid]=n),n}};function Da(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?no.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}var ld=0,Na=new P,Ze=class s extends En{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=bn,i=bn,o=Be,r=ri,a=cn,c=Ke,l=s.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=bi(),this.name="",this.source=new qi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Na).x}get height(){return this.source.getSize(Na).y}get depth(){return this.source.getSize(Na).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){It(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){It(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ac)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tn:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case to:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tn:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case to:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Ac;Ze.DEFAULT_ANISOTROPY=1;var Xc=class Xc{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(l+1)/2,v=(f+1)/2,w=(m+1)/2,E=(h+u)/4,C=(d+_)/4,y=(p+g)/4;return S>v&&S>w?S<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(S),i=E/n,o=C/n):v>w?v<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(v),n=E/i,o=y/i):w<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(w),n=C/o,i=y/o),this.set(n,i,o,e),this}let b=Math.sqrt((g-p)*(g-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(g-p)/b,this.y=(d-_)/b,this.z=(u-h)/b,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xc.prototype.isVector4=!0;var fe=Xc,io=class extends En{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},o=new Ze(i),r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new qi(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends io{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Es=class extends Ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var so=class extends Ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wo=class wo{constructor(t,e,n,i,o,r,a,c,l,h,d,u,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l,h,d,u,f,p,_,g)}set(t,e,n,i,o,r,a,c,l,h,d,u,f,p,_,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=o,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Ci.setFromMatrixColumn(t,0).length(),o=1/Ci.setFromMatrixColumn(t,1).length(),r=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){let u=r*h,f=r*d,p=a*h,_=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+p*l,e[5]=u-_*l,e[9]=-a*c,e[2]=_-u*l,e[6]=p+f*l,e[10]=r*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,p=l*h,_=l*d;e[0]=u+_*a,e[4]=p*a-f,e[8]=r*l,e[1]=r*d,e[5]=r*h,e[9]=-a,e[2]=f*a-p,e[6]=_+u*a,e[10]=r*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,p=l*h,_=l*d;e[0]=u-_*a,e[4]=-r*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=r*h,e[9]=_-u*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){let u=r*h,f=r*d,p=a*h,_=a*d;e[0]=c*h,e[4]=p*l-f,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=f*l-p,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){let u=r*c,f=r*l,p=a*c,_=a*l;e[0]=c*h,e[4]=_-u*d,e[8]=p*d+f,e[1]=d,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+p,e[10]=u-_*d}else if(t.order==="XZY"){let u=r*c,f=r*l,p=a*c,_=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=r*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hd,t,ud)}lookAt(t,e,n){let i=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),qn.crossVectors(n,Qe),qn.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),qn.crossVectors(n,Qe)),qn.normalize(),vr.crossVectors(Qe,qn),i[0]=qn.x,i[4]=vr.x,i[8]=Qe.x,i[1]=qn.y,i[5]=vr.y,i[9]=Qe.y,i[2]=qn.z,i[6]=vr.z,i[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],b=n[3],S=n[7],v=n[11],w=n[15],E=i[0],C=i[4],y=i[8],T=i[12],R=i[1],I=i[5],L=i[9],z=i[13],X=i[2],F=i[6],V=i[10],G=i[14],Q=i[3],et=i[7],it=i[11],rt=i[15];return o[0]=r*E+a*R+c*X+l*Q,o[4]=r*C+a*I+c*F+l*et,o[8]=r*y+a*L+c*V+l*it,o[12]=r*T+a*z+c*G+l*rt,o[1]=h*E+d*R+u*X+f*Q,o[5]=h*C+d*I+u*F+f*et,o[9]=h*y+d*L+u*V+f*it,o[13]=h*T+d*z+u*G+f*rt,o[2]=p*E+_*R+g*X+m*Q,o[6]=p*C+_*I+g*F+m*et,o[10]=p*y+_*L+g*V+m*it,o[14]=p*T+_*z+g*G+m*rt,o[3]=b*E+S*R+v*X+w*Q,o[7]=b*C+S*I+v*F+w*et,o[11]=b*y+S*L+v*V+w*it,o[15]=b*T+S*z+v*G+w*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15],b=c*f-l*u,S=a*f-l*d,v=a*u-c*d,w=r*f-l*h,E=r*u-c*h,C=r*d-a*h;return e*(_*b-g*S+m*v)-n*(p*b-g*w+m*E)+i*(p*S-_*w+m*C)-o*(p*v-_*E+g*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],o=t[1],r=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(r*h-a*l)-n*(o*h-a*c)+i*(o*l-r*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],b=e*a-n*r,S=e*c-i*r,v=e*l-o*r,w=n*c-i*a,E=n*l-o*a,C=i*l-o*c,y=h*_-d*p,T=h*g-u*p,R=h*m-f*p,I=d*g-u*_,L=d*m-f*_,z=u*m-f*g,X=b*z-S*L+v*I+w*R-E*T+C*y;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/X;return t[0]=(a*z-c*L+l*I)*F,t[1]=(i*L-n*z-o*I)*F,t[2]=(_*C-g*E+m*w)*F,t[3]=(u*E-d*C-f*w)*F,t[4]=(c*R-r*z-l*T)*F,t[5]=(e*z-i*R+o*T)*F,t[6]=(g*v-p*C-m*S)*F,t[7]=(h*C-u*v+f*S)*F,t[8]=(r*L-a*R+l*y)*F,t[9]=(n*R-e*L-o*y)*F,t[10]=(p*E-_*v+m*b)*F,t[11]=(d*v-h*E-f*b)*F,t[12]=(a*T-r*I-c*y)*F,t[13]=(e*I-n*T+i*y)*F,t[14]=(_*S-p*w-g*b)*F,t[15]=(h*w-d*S+u*b)*F,this}scale(t){let e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*r,0,l*c-i*a,h*c+i*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,d=a+a,u=o*l,f=o*h,p=o*d,_=r*h,g=r*d,m=a*d,b=c*l,S=c*h,v=c*d,w=n.x,E=n.y,C=n.z;return i[0]=(1-(_+m))*w,i[1]=(f+v)*w,i[2]=(p-S)*w,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(u+m))*E,i[6]=(g+b)*E,i[7]=0,i[8]=(p+S)*C,i[9]=(g-b)*C,i[10]=(1-(u+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let r=Ci.set(i[0],i[1],i[2]).length(),a=Ci.set(i[4],i[5],i[6]).length(),c=Ci.set(i[8],i[9],i[10]).length();o<0&&(r=-r),hn.copy(this);let l=1/r,h=1/a,d=1/c;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=d,hn.elements[9]*=d,hn.elements[10]*=d,e.setFromRotationMatrix(hn),n.x=r,n.y=a,n.z=c,this}makePerspective(t,e,n,i,o,r,a=fn,c=!1){let l=this.elements,h=2*o/(e-t),d=2*o/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,_;if(c)p=o/(r-o),_=r*o/(r-o);else if(a===fn)p=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(a===Vi)p=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=fn,c=!1){let l=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),p,_;if(c)p=1/(r-o),_=r/(r-o);else if(a===fn)p=-2/(r-o),_=-(r+o)/(r-o);else if(a===Vi)p=-1/(r-o),_=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};wo.prototype.isMatrix4=!0;var de=wo,Ci=new P,hn=new de,hd=new P(0,0,0),ud=new P(1,1,1),qn=new P,vr=new P,Qe=new P,Rl=new de,Cl=new Tn,zn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,o=i[0],r=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Wt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var Ts=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},dd=0,Pl=new P,Pi=new Tn,Dn=new de,Mr=new P,us=new P,fd=new P,pd=new Tn,Il=new P(1,0,0),Ll=new P(0,1,0),Dl=new P(0,0,1),Nl={type:"added"},md={type:"removed"},Ii={type:"childadded",child:null},Ua={type:"childremoved",child:null},ke=class s extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new P,e=new zn,n=new Tn,i=new P(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new de},normalMatrix:{value:new Ft}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(Il,t)}rotateY(t){return this.rotateOnAxis(Ll,t)}rotateZ(t){return this.rotateOnAxis(Dl,t)}translateOnAxis(t,e){return Pl.copy(t).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Il,t)}translateY(t){return this.translateOnAxis(Ll,t)}translateZ(t){return this.translateOnAxis(Dl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Mr.copy(t):Mr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(us,Mr,this.up):Dn.lookAt(Mr,us,this.up),this.quaternion.setFromRotationMatrix(Dn),i&&(Dn.extractRotation(i.matrixWorld),Pi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Nt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nl),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(md),Ua.child=t,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nl),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,fd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,pd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*i,o[13]+=n-o[1]*e-o[5]*n-o[9]*i,o[14]+=i-o[2]*e-o[6]*n-o[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];o(t.shapes,d)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(o(t.animations,c))}}if(e){let a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),f=r(t.animations),p=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function r(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ke.DEFAULT_UP=new P(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kt=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},gd={type:"move"},Yi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;l.inputState.pinching&&u>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gd)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},br={h:0,s:0,l:0};function Fa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var St=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Xt.workingColorSpace){if(t=Fc(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Fa(r,o,t+1/3),this.g=Fa(r,o,t),this.b=Fa(r,o,t-1/3)}return Xt.colorSpaceToWorking(this,i),this}setStyle(t,e=Ie){function n(o){o!==void 0&&parseFloat(o)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=Nh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return Xt.workingToColorSpace(Ve.copy(this),t),Math.round(Wt(Ve.r*255,0,255))*65536+Math.round(Wt(Ve.g*255,0,255))*256+Math.round(Wt(Ve.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.workingToColorSpace(Ve.copy(this),e);let n=Ve.r,i=Ve.g,o=Ve.b,r=Math.max(n,i,o),a=Math.min(n,i,o),c,l,h=(a+r)/2;if(a===r)c=0,l=0;else{let d=r-a;switch(l=h<=.5?d/(r+a):d/(2-r-a),r){case n:c=(i-o)/d+(i<o?6:0);break;case i:c=(o-n)/d+2;break;case o:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Ie){Xt.workingToColorSpace(Ve.copy(this),t);let e=Ve.r,n=Ve.g,i=Ve.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(br);let n=xs(Yn.h,br.h,e),i=xs(Yn.s,br.s,e),o=xs(Yn.l,br.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new St;St.NAMES=Nh;var ws=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new St(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},As=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},un=new P,Nn=new P,Oa=new P,Un=new P,Li=new P,Di=new P,Ul=new P,Ba=new P,ka=new P,za=new P,Ha=new fe,Ga=new fe,Va=new fe,Qn=class s{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),un.subVectors(t,e),i.cross(un);let o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){un.subVectors(i,e),Nn.subVectors(n,e),Oa.subVectors(t,e);let r=un.dot(un),a=un.dot(Nn),c=un.dot(Oa),l=Nn.dot(Nn),h=Nn.dot(Oa),d=r*l-a*a;if(d===0)return o.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,p=(r*h-a*c)*u;return o.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,i,o,r,a,c){return this.getBarycoord(t,e,n,i,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Un.x),c.addScaledVector(r,Un.y),c.addScaledVector(a,Un.z),c)}static getInterpolatedAttribute(t,e,n,i,o,r){return Ha.setScalar(0),Ga.setScalar(0),Va.setScalar(0),Ha.fromBufferAttribute(t,e),Ga.fromBufferAttribute(t,n),Va.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Ha,o.x),r.addScaledVector(Ga,o.y),r.addScaledVector(Va,o.z),r}static isFrontFacing(t,e,n,i){return un.subVectors(n,e),Nn.subVectors(t,e),un.cross(Nn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),un.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,o=this.c,r,a;Li.subVectors(i,n),Di.subVectors(o,n),Ba.subVectors(t,n);let c=Li.dot(Ba),l=Di.dot(Ba);if(c<=0&&l<=0)return e.copy(n);ka.subVectors(t,i);let h=Li.dot(ka),d=Di.dot(ka);if(h>=0&&d<=h)return e.copy(i);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(Li,r);za.subVectors(t,o);let f=Li.dot(za),p=Di.dot(za);if(p>=0&&f<=p)return e.copy(o);let _=f*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(Di,a);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return Ul.subVectors(o,i),a=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(Ul,a);let m=1/(g+_+u);return r=_*m,a=u*m,e.copy(n).addScaledVector(Li,r).addScaledVector(Di,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ti=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,dn):dn.fromBufferAttribute(o,r),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sr.copy(n.boundingBox)),Sr.applyMatrix4(t.matrixWorld),this.union(Sr)}let i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),Er.subVectors(this.max,ds),Ni.subVectors(t.a,ds),Ui.subVectors(t.b,ds),Fi.subVectors(t.c,ds),Zn.subVectors(Ui,Ni),Jn.subVectors(Fi,Ui),hi.subVectors(Ni,Fi);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-hi.z,hi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,hi.z,0,-hi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-hi.y,hi.x,0];return!Wa(e,Ni,Ui,Fi,Er)||(e=[1,0,0,0,1,0,0,0,1],!Wa(e,Ni,Ui,Fi,Er))?!1:(Tr.crossVectors(Zn,Jn),e=[Tr.x,Tr.y,Tr.z],Wa(e,Ni,Ui,Fi,Er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Fn=[new P,new P,new P,new P,new P,new P,new P,new P],dn=new P,Sr=new ti,Ni=new P,Ui=new P,Fi=new P,Zn=new P,Jn=new P,hi=new P,ds=new P,Er=new P,Tr=new P,ui=new P;function Wa(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){ui.fromArray(s,o);let a=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),c=t.dot(ui),l=e.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Ce=new P,wr=new vt,xd=0,Oe=class extends En{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ac,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wr.fromBufferAttribute(this,e),wr.applyMatrix3(t),this.setXY(e,wr.x,wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),i=Ye(i,this.array),o=Ye(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ac&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var Rs=class extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Cs=class extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var kt=class extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}},_d=new ti,fs=new P,Xa=new P,_i=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_d.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);let e=fs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(fs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(Xa)),this.expandByPoint(fs.copy(t.center).sub(Xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},yd=0,an=new de,qa=new ke,Oi=new P,je=new ti,ps=new ti,Ue=new P,pe=class s extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vu(t)?Cs:Rs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new Ft().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return qa.lookAt(t),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,o=t.length;i<o;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new kt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let o=e[n];je.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){let a=e[o];ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(je.min,ps.min),je.expandByPoint(Ue),Ue.addVectors(je.max,ps.max),je.expandByPoint(Ue)):(je.expandByPoint(ps.min),je.expandByPoint(ps.max))}je.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)Ue.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(Ue));if(e)for(let o=0,r=e.length;o<r;o++){let a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ue.fromBufferAttribute(a,l),c&&(Oi.fromBufferAttribute(t,l),Ue.add(Oi)),i=Math.max(i,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,o=e.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new Oe(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));let a=[],c=[];for(let y=0;y<n.count;y++)a[y]=new P,c[y]=new P;let l=new P,h=new P,d=new P,u=new vt,f=new vt,p=new vt,_=new P,g=new P;function m(y,T,R){l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,R),u.fromBufferAttribute(o,y),f.fromBufferAttribute(o,T),p.fromBufferAttribute(o,R),h.sub(l),d.sub(l),f.sub(u),p.sub(u);let I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(I),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(I),a[y].add(_),a[T].add(_),a[R].add(_),c[y].add(g),c[T].add(g),c[R].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let y=0,T=b.length;y<T;++y){let R=b[y],I=R.start,L=R.count;for(let z=I,X=I+L;z<X;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let S=new P,v=new P,w=new P,E=new P;function C(y){w.fromBufferAttribute(i,y),E.copy(w);let T=a[y];S.copy(T),S.sub(w.multiplyScalar(w.dot(T))).normalize(),v.crossVectors(E,T);let I=v.dot(c[y])<0?-1:1;r.setXYZW(y,S.x,S.y,S.z,I)}for(let y=0,T=b.length;y<T;++y){let R=b[y],I=R.start,L=R.count;for(let z=I,X=I+L;z<X;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new P,o=new P,r=new P,a=new P,c=new P,l=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,p),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),h.subVectors(r,o),d.subVectors(i,o),h.cross(d),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),d.subVectors(i,o),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,p=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let m=0;m<h;m++)u[p++]=l[f++]}return new Oe(u,h,d)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let o=this.morphAttributes;for(let a in o){let c=[],l=o[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,c=r.length;a<c;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},o=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let o=t.morphAttributes;for(let l in o){let h=[],d=o[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,h=r.length;l<h;l++){let d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var vd=0,wn=class extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=gi,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xr,this.blendDst=qr,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xr&&(n.blendSrc=this.blendSrc),this.blendDst!==qr&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){let r=[];for(let a in o){let c=o[a];delete c.metadata,r.push(c)}return r}if(e){let o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new St().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new vt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var On=new P,Ya=new P,Ar=new P,Kn=new P,Za=new P,Rr=new P,Ja=new P,Ps=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ya.copy(t).add(e).multiplyScalar(.5),Ar.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(Ya);let o=t.distanceTo(e)*.5,r=-this.direction.dot(Ar),a=Kn.dot(this.direction),c=-Kn.dot(Ar),l=Kn.lengthSq(),h=Math.abs(1-r*r),d,u,f,p;if(h>0)if(d=r*c-a,u=r*a-c,p=o*h,d>=0)if(u>=-p)if(u<=p){let _=1/h;d*=_,u*=_,f=d*(d+r*u+2*a)+u*(r*d+u+2*c)+l}else u=o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*c)+l;else u=-o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-p?(d=Math.max(0,-(-r*o+a)),u=d>0?-o:Math.min(Math.max(-o,-c),o),f=-d*d+u*(u+2*c)+l):u<=p?(d=0,u=Math.min(Math.max(-o,-c),o),f=u*(u+2*c)+l):(d=Math.max(0,-(r*o+a)),u=d>0?o:Math.min(Math.max(-o,-c),o),f=-d*d+u*(u+2*c)+l);else u=r>0?-o:o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ya).addScaledVector(Ar,u),f}intersectSphere(t,e){On.subVectors(t.center,this.origin);let n=On.dot(this.direction),i=On.dot(On)-n*n,o=t.radius*t.radius;if(i>o)return null;let r=Math.sqrt(o-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,i,o){Za.subVectors(e,t),Rr.subVectors(n,t),Ja.crossVectors(Za,Rr);let r=this.direction.dot(Ja),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Kn.subVectors(this.origin,t);let c=a*this.direction.dot(Rr.crossVectors(Kn,Rr));if(c<0)return null;let l=a*this.direction.dot(Za.cross(Kn));if(l<0||c+l>r)return null;let h=-a*Kn.dot(Ja);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class extends wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Fl=new de,di=new Ps,Cr=new _i,Ol=new P,Pr=new P,Ir=new P,Lr=new P,Ka=new P,Dr=new P,Bl=new P,Nr=new P,j=class extends ke{constructor(t=new pe,e=new ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){let a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(o&&a){Dr.set(0,0,0);for(let c=0,l=o.length;c<l;c++){let h=a[c],d=o[c];h!==0&&(Ka.fromBufferAttribute(d,t),r?Dr.addScaledVector(Ka,h):Dr.addScaledVector(Ka.sub(e),h))}e.add(Dr)}return e}raycast(t,e){let n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(o),di.copy(t.ray).recast(t.near),!(Cr.containsPoint(di.origin)===!1&&(di.intersectSphere(Cr,Ol)===null||di.origin.distanceToSquared(Ol)>(t.far-t.near)**2))&&(Fl.copy(o).invert(),di.copy(t.ray).applyMatrix4(Fl),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let i,o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,u=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=r[g.materialIndex],b=Math.max(g.start,f.start),S=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,w=S;v<w;v+=3){let E=a.getX(v),C=a.getX(v+1),y=a.getX(v+2);i=Ur(this,m,t,n,l,h,d,E,C,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let b=a.getX(g),S=a.getX(g+1),v=a.getX(g+2);i=Ur(this,r,t,n,l,h,d,b,S,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=r[g.materialIndex],b=Math.max(g.start,f.start),S=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,w=S;v<w;v+=3){let E=v,C=v+1,y=v+2;i=Ur(this,m,t,n,l,h,d,E,C,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let b=g,S=g+1,v=g+2;i=Ur(this,r,t,n,l,h,d,b,S,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Md(s,t,e,n,i,o,r,a){let c;if(t.side===ze?c=n.intersectTriangle(r,o,i,!0,a):c=n.intersectTriangle(i,o,r,t.side===kn,a),c===null)return null;Nr.copy(a),Nr.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Nr);return l<e.near||l>e.far?null:{distance:l,point:Nr.clone(),object:s}}function Ur(s,t,e,n,i,o,r,a,c,l){s.getVertexPosition(a,Pr),s.getVertexPosition(c,Ir),s.getVertexPosition(l,Lr);let h=Md(s,t,e,n,Pr,Ir,Lr,Bl);if(h){let d=new P;Qn.getBarycoord(Bl,Pr,Ir,Lr,d),i&&(h.uv=Qn.getInterpolatedAttribute(i,a,c,l,d,new vt)),o&&(h.uv1=Qn.getInterpolatedAttribute(o,a,c,l,d,new vt)),r&&(h.normal=Qn.getInterpolatedAttribute(r,a,c,l,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new P,materialIndex:0};Qn.getNormal(Pr,Ir,Lr,u.normal),h.face=u,h.barycoord=d}return h}var Zi=class extends Ze{constructor(t=null,e=1,n=1,i,o,r,a,c,l=Ae,h=Ae,d,u){super(null,r,a,c,l,h,i,o,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $a=new P,bd=new P,Sd=new Ft,Mn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=$a.subVectors(n,e).cross(bd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta($a),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Sd.getNormalMatrix(t),i=this.coplanarPoint($a).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},fi=new _i,Ed=new vt(.5,.5),Fr=new P,Ji=class{constructor(t=new Mn,e=new Mn,n=new Mn,i=new Mn,o=new Mn,r=new Mn){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn,n=!1){let i=this.planes,o=t.elements,r=o[0],a=o[1],c=o[2],l=o[3],h=o[4],d=o[5],u=o[6],f=o[7],p=o[8],_=o[9],g=o[10],m=o[11],b=o[12],S=o[13],v=o[14],w=o[15];if(i[0].setComponents(l-r,f-h,m-p,w-b).normalize(),i[1].setComponents(l+r,f+h,m+p,w+b).normalize(),i[2].setComponents(l+a,f+d,m+_,w+S).normalize(),i[3].setComponents(l-a,f-d,m-_,w-S).normalize(),n)i[4].setComponents(c,u,g,v).normalize(),i[5].setComponents(l-c,f-u,m-g,w-v).normalize();else if(i[4].setComponents(l-c,f-u,m-g,w-v).normalize(),e===fn)i[5].setComponents(l+c,f+u,m+g,w+v).normalize();else if(e===Vi)i[5].setComponents(c,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){fi.center.set(0,0,0);let e=Ed.distanceTo(t.center);return fi.radius=.7071067811865476+e,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Fr.x=i.normal.x>0?t.max.x:t.min.x,Fr.y=i.normal.y>0?t.max.y:t.min.y,Fr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ki=class extends wn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},kl=new de,cc=new Ps,Or=new _i,Br=new P,Is=class extends ke{constructor(t=new pe,e=new Ki){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(i),Or.radius+=o,t.ray.intersectsSphere(Or)===!1)return;kl.copy(i).invert(),cc.copy(t.ray).applyMatrix4(kl);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let p=u,_=f;p<_;p++){let g=l.getX(p);Br.fromBufferAttribute(d,g),zl(Br,g,c,i,t,e,this)}}else{let u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let p=u,_=f;p<_;p++)Br.fromBufferAttribute(d,p),zl(Br,p,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){let a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function zl(s,t,e,n,i,o,r){let a=cc.distanceSqToPoint(s);if(a<e){let c=new P;cc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var Ls=class extends Ze{constructor(t=[],e=si,n,i,o,r,a,c,l,h){super(t,e,n,i,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Me=class extends Ze{constructor(t,e,n,i,o,r,a,c,l){super(t,e,n,i,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hn=class extends Ze{constructor(t,e,n=mn,i,o,r,a=Ae,c=Ae,l,h=Sn,d=1){if(h!==Sn&&h!==oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ro=class extends Hn{constructor(t,e=mn,n=si,i,o,r=Ae,a=Ae,c,l=Sn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,o,r,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ds=class extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},te=class s extends pe{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};let a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);let c=[],l=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,r,o,0),p("z","y","x",1,-1,n,e,-t,r,o,1),p("x","z","y",1,1,t,n,e,i,r,2),p("x","z","y",1,-1,t,n,-e,i,r,3),p("x","y","z",1,-1,t,e,n,i,o,4),p("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(d,2));function p(_,g,m,b,S,v,w,E,C,y,T){let R=v/C,I=w/y,L=v/2,z=w/2,X=E/2,F=C+1,V=y+1,G=0,Q=0,et=new P;for(let it=0;it<V;it++){let rt=it*I-z;for(let _t=0;_t<F;_t++){let Yt=_t*R-L;et[_]=Yt*b,et[g]=rt*S,et[m]=X,l.push(et.x,et.y,et.z),et[_]=0,et[g]=0,et[m]=E>0?1:-1,h.push(et.x,et.y,et.z),d.push(_t/C),d.push(1-it/y),G+=1}}for(let it=0;it<y;it++)for(let rt=0;rt<C;rt++){let _t=u+rt+F*it,Yt=u+rt+F*(it+1),ie=u+(rt+1)+F*(it+1),Zt=u+(rt+1)+F*it;c.push(_t,Yt,Zt),c.push(Yt,ie,Zt),Q+=6}a.addGroup(f,Q,T),f+=Q,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ns=class s extends pe{constructor(t=1,e=1,n=4,i=8,o=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:o},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),o=Math.max(1,Math.floor(o));let r=[],a=[],c=[],l=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,p=n*2+o,_=i+1,g=new P,m=new P;for(let b=0;b<=p;b++){let S=0,v=0,w=0,E=0;if(b<=n){let T=b/n,R=T*Math.PI/2;v=-h-t*Math.cos(R),w=t*Math.sin(R),E=-t*Math.cos(R),S=T*d}else if(b<=n+o){let T=(b-n)/o;v=-h+T*e,w=t,E=0,S=d+T*u}else{let T=(b-n-o)/n,R=T*Math.PI/2;v=h+t*Math.sin(R),w=t*Math.cos(R),E=t*Math.sin(R),S=d+u+T*d}let C=Math.max(0,Math.min(1,S/f)),y=0;b===0?y=.5/i:b===p&&(y=-.5/i);for(let T=0;T<=i;T++){let R=T/i,I=R*Math.PI*2,L=Math.sin(I),z=Math.cos(I);m.x=-w*z,m.y=v,m.z=w*L,a.push(m.x,m.y,m.z),g.set(-w*z,E,w*L),g.normalize(),c.push(g.x,g.y,g.z),l.push(R+y,C)}if(b>0){let T=(b-1)*_;for(let R=0;R<i;R++){let I=T+R,L=T+R+1,z=b*_+R,X=b*_+R+1;r.push(I,L,z),r.push(L,X,z)}}}this.setIndex(r),this.setAttribute("position",new kt(a,3)),this.setAttribute("normal",new kt(c,3)),this.setAttribute("uv",new kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Us=class s extends pe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let o=[],r=[],a=[],c=[],l=new P,h=new vt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new kt(r,3)),this.setAttribute("normal",new kt(a,3)),this.setAttribute("uv",new kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},be=class s extends pe{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),o=Math.floor(o);let h=[],d=[],u=[],f=[],p=0,_=[],g=n/2,m=0;b(),r===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new kt(d,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(f,2));function b(){let v=new P,w=new P,E=0,C=(e-t)/n;for(let y=0;y<=o;y++){let T=[],R=y/o,I=R*(e-t)+t;for(let L=0;L<=i;L++){let z=L/i,X=z*c+a,F=Math.sin(X),V=Math.cos(X);w.x=I*F,w.y=-R*n+g,w.z=I*V,d.push(w.x,w.y,w.z),v.set(F,C,V).normalize(),u.push(v.x,v.y,v.z),f.push(z,1-R),T.push(p++)}_.push(T)}for(let y=0;y<i;y++)for(let T=0;T<o;T++){let R=_[T][y],I=_[T+1][y],L=_[T+1][y+1],z=_[T][y+1];(t>0||T!==0)&&(h.push(R,I,z),E+=3),(e>0||T!==o-1)&&(h.push(I,L,z),E+=3)}l.addGroup(m,E,0),m+=E}function S(v){let w=p,E=new vt,C=new P,y=0,T=v===!0?t:e,R=v===!0?1:-1;for(let L=1;L<=i;L++)d.push(0,g*R,0),u.push(0,R,0),f.push(.5,.5),p++;let I=p;for(let L=0;L<=i;L++){let X=L/i*c+a,F=Math.cos(X),V=Math.sin(X);C.x=T*V,C.y=g*R,C.z=T*F,d.push(C.x,C.y,C.z),u.push(0,R,0),E.x=F*.5+.5,E.y=V*.5*R+.5,f.push(E.x,E.y),p++}for(let L=0;L<i;L++){let z=w+L,X=I+L;v===!0?h.push(X,X+1,z):h.push(X+1,X,z),y+=3}l.addGroup(m,y,v===!0?1:2),m+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},We=class s extends be{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){It("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,o=n.length,r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(o-1);let h=n[i],u=n[i+1]-h,f=(r-h)/u;return(i+f)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);let r=this.getPoint(i),a=this.getPoint(o),c=e||(r.isVector2?new vt:new P);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new P,i=[],o=[],r=[],a=new P,c=new de;for(let f=0;f<=t;f++){let p=f/t;i[f]=this.getTangentAt(p,new P)}o[0]=new P,r[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Wt(i[f-1].dot(i[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,p))}r[f].crossVectors(i[f],o[f])}if(e===!0){let f=Math.acos(Wt(o[0].dot(o[t]),-1,1));f/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let p=1;p<=t;p++)o[p].applyMatrix4(c.makeRotationAxis(i[p],f*p)),r[p].crossVectors(i[p],o[p])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},$i=class extends nn{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new vt){let n=e,i=Math.PI*2,o=this.aEndAngle-this.aStartAngle,r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);let a=this.aStartAngle+t*o,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},oo=class extends $i{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}};function Oc(){let s=0,t=0,e=0,n=0;function i(o,r,a,c){s=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){i(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,d){let u=(r-o)/l-(a-o)/(l+h)+(a-r)/h,f=(a-r)/h-(c-r)/(h+d)+(c-a)/d;u*=h,f*=h,i(r,a,u,f)},calc:function(o){let r=o*o,a=r*o;return s+t*o+e*r+n*a}}}var Hl=new P,Gl=new P,Qa=new Oc,ja=new Oc,tc=new Oc,Qi=class extends nn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){let n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t,a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%o]:(Gl.subVectors(i[0],i[1]).add(i[0]),l=Gl);let d=i[a%o],u=i[(a+1)%o];if(this.closed||a+2<o?h=i[(a+2)%o]:(Hl.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=Hl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Qa.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,p,_,g),ja.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,p,_,g),tc.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(Qa.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),ja.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),tc.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Qa.calc(c),ja.calc(c),tc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Vl(s,t,e,n,i){let o=(n-t)*.5,r=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*s+e}function Td(s,t){let e=1-s;return e*e*t}function wd(s,t){return 2*(1-s)*s*t}function Ad(s,t){return s*s*t}function _s(s,t,e,n){return Td(s,t)+wd(s,e)+Ad(s,n)}function Rd(s,t){let e=1-s;return e*e*e*t}function Cd(s,t){let e=1-s;return 3*e*e*s*t}function Pd(s,t){return 3*(1-s)*s*s*t}function Id(s,t){return s*s*s*t}function ys(s,t,e,n,i){return Rd(s,t)+Cd(s,e)+Pd(s,n)+Id(s,i)}var Fs=class extends nn{constructor(t=new vt,e=new vt,n=new vt,i=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new vt){let n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(ys(t,i.x,o.x,r.x,a.x),ys(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ao=class extends nn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){let n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(ys(t,i.x,o.x,r.x,a.x),ys(t,i.y,o.y,r.y,a.y),ys(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Os=class extends nn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},co=class extends nn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bs=class extends nn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){let n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(_s(t,i.x,o.x,r.x),_s(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yi=class extends nn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(_s(t,i.x,o.x,r.x),_s(t,i.y,o.y,r.y),_s(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ks=class extends nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){let n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],d=i[r>i.length-3?i.length-1:r+2];return n.set(Vl(a,c.x,l.x,h.x,d.x),Vl(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new vt().fromArray(i))}return this}},lc=Object.freeze({__proto__:null,ArcCurve:oo,CatmullRomCurve3:Qi,CubicBezierCurve:Fs,CubicBezierCurve3:ao,EllipseCurve:$i,LineCurve:Os,LineCurve3:co,QuadraticBezierCurve:Bs,QuadraticBezierCurve3:yi,SplineCurve:ks}),lo=class extends nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new lc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),o=0;for(;o<i.length;){if(i[o]>=n){let r=i[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,o=this.curves;i<o.length;i++){let r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new lc[i.type]().fromJSON(i))}return this}},zs=class extends lo{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Os(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let o=new Bs(this.currentPoint.clone(),new vt(t,e),new vt(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){let a=new Fs(this.currentPoint.clone(),new vt(t,e),new vt(n,i),new vt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ks(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,o,r,a,c),this}absellipse(t,e,n,i,o,r,a,c){let l=new $i(t,e,n,i,o,r,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ji=class extends zs{constructor(t){super(t),this.uuid=bi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new zs().fromJSON(i))}return this}};function Ld(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,o=Uh(s,0,i,e,!0),r=[];if(!o||o.next===o.prev)return r;let a,c,l;if(n&&(o=Od(s,t,o,e)),s.length>80*e){a=s[0],c=s[1];let h=a,d=c;for(let u=e;u<i;u+=e){let f=s[u],p=s[u+1];f<a&&(a=f),p<c&&(c=p),f>h&&(h=f),p>d&&(d=p)}l=Math.max(h-a,d-c),l=l!==0?32767/l:0}return Hs(o,r,e,a,c,l,0),r}function Uh(s,t,e,n,i){let o;if(i===Zd(s,t,e,n)>0)for(let r=t;r<e;r+=n)o=Wl(r/n|0,s[r],s[r+1],o);else for(let r=e-n;r>=t;r-=n)o=Wl(r/n|0,s[r],s[r+1],o);return o&&ts(o,o.next)&&(Vs(o),o=o.next),o}function vi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ts(e,e.next)||ge(e.prev,e,e.next)===0)){if(Vs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Hs(s,t,e,n,i,o,r){if(!s)return;!r&&o&&Gd(s,n,i,o);let a=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(o?Nd(s,n,i,o):Dd(s)){t.push(c.i,s.i,l.i),Vs(s),s=l.next,a=l.next;continue}if(s=l,s===a){r?r===1?(s=Ud(vi(s),t),Hs(s,t,e,n,i,o,2)):r===2&&Fd(s,t,e,n,i,o):Hs(vi(s),t,e,n,i,o,1);break}}}function Dd(s){let t=s.prev,e=s,n=s.next;if(ge(t,e,n)>=0)return!1;let i=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(i,o,r),d=Math.min(a,c,l),u=Math.max(i,o,r),f=Math.max(a,c,l),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&ms(i,a,o,c,r,l,p.x,p.y)&&ge(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Nd(s,t,e,n){let i=s.prev,o=s,r=s.next;if(ge(i,o,r)>=0)return!1;let a=i.x,c=o.x,l=r.x,h=i.y,d=o.y,u=r.y,f=Math.min(a,c,l),p=Math.min(h,d,u),_=Math.max(a,c,l),g=Math.max(h,d,u),m=hc(f,p,t,e,n),b=hc(_,g,t,e,n),S=s.prevZ,v=s.nextZ;for(;S&&S.z>=m&&v&&v.z<=b;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=g&&S!==i&&S!==r&&ms(a,h,c,d,l,u,S.x,S.y)&&ge(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==r&&ms(a,h,c,d,l,u,v.x,v.y)&&ge(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=m;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=g&&S!==i&&S!==r&&ms(a,h,c,d,l,u,S.x,S.y)&&ge(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=b;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=g&&v!==i&&v!==r&&ms(a,h,c,d,l,u,v.x,v.y)&&ge(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ud(s,t){let e=s;do{let n=e.prev,i=e.next.next;!ts(n,i)&&Oh(n,e,e.next,i)&&Gs(n,i)&&Gs(i,n)&&(t.push(n.i,e.i,i.i),Vs(e),Vs(e.next),e=s=i),e=e.next}while(e!==s);return vi(e)}function Fd(s,t,e,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Xd(r,a)){let c=Bh(r,a);r=vi(r,r.next),c=vi(c,c.next),Hs(r,t,e,n,i,o,0),Hs(c,t,e,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function Od(s,t,e,n){let i=[];for(let o=0,r=t.length;o<r;o++){let a=t[o]*n,c=o<r-1?t[o+1]*n:s.length,l=Uh(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(Wd(l))}i.sort(Bd);for(let o=0;o<i.length;o++)e=kd(i[o],e);return e}function Bd(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function kd(s,t){let e=zd(s,t);if(!e)return t;let n=Bh(e,s);return vi(n,n.next),vi(e,e.next)}function zd(s,t){let e=t,n=s.x,i=s.y,o=-1/0,r;if(ts(s,e))return e;do{if(ts(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>o&&(o=d,r=e.x<e.next.x?e:e.next,d===n))return r}e=e.next}while(e!==t);if(!r)return null;let a=r,c=r.x,l=r.y,h=1/0;e=r;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Fh(i<l?n:o,i,c,l,i<l?o:n,i,e.x,e.y)){let d=Math.abs(i-e.y)/(n-e.x);Gs(e,s)&&(d<h||d===h&&(e.x>r.x||e.x===r.x&&Hd(r,e)))&&(r=e,h=d)}e=e.next}while(e!==a);return r}function Hd(s,t){return ge(s.prev,s,t.prev)<0&&ge(t.next,s,s.next)<0}function Gd(s,t,e,n){let i=s;do i.z===0&&(i.z=hc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Vd(i)}function Vd(s){let t,e=1;do{let n=s,i;s=null;let o=null;for(t=0;n;){t++;let r=n,a=0;for(let l=0;l<e&&(a++,r=r.nextZ,!!r);l++);let c=e;for(;a>0||c>0&&r;)a!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,a--):(i=r,r=r.nextZ,c--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;n=r}o.nextZ=null,e*=2}while(t>1);return s}function hc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Wd(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Fh(s,t,e,n,i,o,r,a){return(i-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(i-r)*(n-a)}function ms(s,t,e,n,i,o,r,a){return!(s===r&&t===a)&&Fh(s,t,e,n,i,o,r,a)}function Xd(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!qd(s,t)&&(Gs(s,t)&&Gs(t,s)&&Yd(s,t)&&(ge(s.prev,s,t.prev)||ge(s,t.prev,t))||ts(s,t)&&ge(s.prev,s,s.next)>0&&ge(t.prev,t,t.next)>0)}function ge(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ts(s,t){return s.x===t.x&&s.y===t.y}function Oh(s,t,e,n){let i=zr(ge(s,t,e)),o=zr(ge(s,t,n)),r=zr(ge(e,n,s)),a=zr(ge(e,n,t));return!!(i!==o&&r!==a||i===0&&kr(s,e,t)||o===0&&kr(s,n,t)||r===0&&kr(e,s,n)||a===0&&kr(e,t,n))}function kr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function zr(s){return s>0?1:s<0?-1:0}function qd(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Oh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Gs(s,t){return ge(s.prev,s,s.next)<0?ge(s,t,s.next)>=0&&ge(s,s.prev,t)>=0:ge(s,t,s.prev)<0||ge(s,s.next,t)<0}function Yd(s,t){let e=s,n=!1,i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Bh(s,t){let e=uc(s.i,s.x,s.y),n=uc(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Wl(s,t,e,n){let i=uc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Vs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function uc(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zd(s,t,e,n){let i=0;for(let o=t,r=e-n;o<e;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}var dc=class{static triangulate(t,e,n=2){return Ld(t,e,n)}},Gi=class s{static area(t){let e=t.length,n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],o=[];Xl(t),ql(n,t);let r=t.length;e.forEach(Xl);for(let c=0;c<e.length;c++)i.push(r),r+=e[c].length,ql(n,e[c]);let a=dc.triangulate(n,i);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}};function Xl(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function ql(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Le=class s extends pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=t/a,u=e/c,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let b=m*u-r;for(let S=0;S<l;S++){let v=S*d-o;p.push(v,-b,0),_.push(0,0,1),g.push(S/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<a;b++){let S=b+l*m,v=b+l*(m+1),w=b+1+l*(m+1),E=b+1+l*m;f.push(S,v,E),f.push(v,w,E)}this.setIndex(f),this.setAttribute("position",new kt(p,3)),this.setAttribute("normal",new kt(_,3)),this.setAttribute("uv",new kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ws=class s extends pe{constructor(t=new ji([new vt(0,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],o=[],r=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new kt(i,3)),this.setAttribute("normal",new kt(o,3)),this.setAttribute("uv",new kt(r,2));function l(h){let d=i.length/3,u=h.extractPoints(e),f=u.shape,p=u.holes;Gi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let b=p[g];Gi.isClockWise(b)===!0&&(p[g]=b.reverse())}let _=Gi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let b=p[g];f=f.concat(b)}for(let g=0,m=f.length;g<m;g++){let b=f[g];i.push(b.x,b.y,0),o.push(0,0,1),r.push(b.x,b.y)}for(let g=0,m=_.length;g<m;g++){let b=_[g],S=b[0]+d,v=b[1]+d,w=b[2]+d;n.push(S,v,w),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Jd(e,t)}static fromJSON(t,e){let n=[];for(let i=0,o=t.shapes.length;i<o;i++){let r=e[t.shapes[i]];n.push(r)}return new s(n,t.curveSegments)}};function Jd(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var oe=class s extends pe{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(r+a,Math.PI),l=0,h=[],d=new P,u=new P,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){let b=[],S=m/n,v=r+S*a,w=t*Math.cos(v),E=Math.sqrt(t*t-w*w),C=0;m===0&&r===0?C=.5/e:m===n&&c===Math.PI&&(C=-.5/e);for(let y=0;y<=e;y++){let T=y/e,R=i+T*o;d.x=-E*Math.cos(R),d.y=w,d.z=E*Math.sin(R),p.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(T+C,1-S),b.push(l++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){let S=h[m][b+1],v=h[m][b],w=h[m+1][b],E=h[m+1][b+1];(m!==0||r>0)&&f.push(S,v,E),(m!==n-1||c<Math.PI)&&f.push(v,w,E)}this.setIndex(f),this.setAttribute("position",new kt(p,3)),this.setAttribute("normal",new kt(_,3)),this.setAttribute("uv",new kt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var An=class s extends pe{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2,r=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o,thetaStart:r,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],d=[],u=new P,f=new P,p=new P;for(let _=0;_<=n;_++){let g=r+_/n*a;for(let m=0;m<=i;m++){let b=m/i*o;f.x=(t+e*Math.cos(g))*Math.cos(b),f.y=(t+e*Math.cos(g))*Math.sin(b),f.z=e*Math.sin(g),l.push(f.x,f.y,f.z),u.x=t*Math.cos(b),u.y=t*Math.sin(b),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=i;g++){let m=(i+1)*_+g-1,b=(i+1)*(_-1)+g-1,S=(i+1)*(_-1)+g,v=(i+1)*_+g;c.push(m,b,v),c.push(b,S,v)}this.setIndex(c),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Xs=class s extends pe{constructor(t=new yi(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o};let r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let a=new P,c=new P,l=new vt,h=new P,d=[],u=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new kt(d,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(f,2));function _(){for(let S=0;S<e;S++)g(S);g(o===!1?e:0),b(),m()}function g(S){h=t.getPointAt(S/e,h);let v=r.normals[S],w=r.binormals[S];for(let E=0;E<=i;E++){let C=E/i*Math.PI*2,y=Math.sin(C),T=-Math.cos(C);c.x=T*v.x+y*w.x,c.y=T*v.y+y*w.y,c.z=T*v.z+y*w.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function m(){for(let S=1;S<=e;S++)for(let v=1;v<=i;v++){let w=(i+1)*(S-1)+(v-1),E=(i+1)*S+(v-1),C=(i+1)*S+v,y=(i+1)*(S-1)+v;p.push(w,E,y),p.push(E,C,y)}}function b(){for(let S=0;S<=e;S++)for(let v=0;v<=i;v++)l.x=S/e,l.y=v/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new lc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Si(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Yl(i))i.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Yl(i[0])){let o=[];for(let r=0,a=i.length;r<a;r++)o[r]=i[r].clone();t[e][n]=o}else t[e][n]=i.slice();else t[e][n]=i}}return t}function qe(s){let t={};for(let e=0;e<s.length;e++){let n=Si(s[e]);for(let i in n)t[i]=n[i]}return t}function Yl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Kd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Bc(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}var kh={clone:Si,merge:qe},$d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$d,this.fragmentShader=Qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Si(t.uniforms),this.uniformsGroups=Kd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new St().setHex(i.value);break;case"v2":this.uniforms[n].value=new vt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new P().fromArray(i.value);break;case"v4":this.uniforms[n].value=new fe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ft().fromArray(i.value);break;case"m4":this.uniforms[n].value=new de().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ho=class extends sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},At=class extends wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ur,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var qs=class extends wn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new St(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ur,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var uo=class extends wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fo=class extends wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Hr(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}var ei=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],o=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(n=2,o=a);for(let c=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=o,o=e[--n-1],t>=o)break t}r=n,n=0;break e}break n}for(;n<r;){let a=n+r>>>1;t<e[a]?r=a:n=a+1}if(i=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,i)}return this.interpolate_(n,o,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=t*i;for(let r=0;r!==i;++r)e[r]=n[o+r];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},po=class extends ei{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ic,endingEnd:ic}}intervalChanged_(t,e,n){let i=this.parameterPositions,o=t-2,r=t+1,a=i[o],c=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case sc:o=t,a=2*e-n;break;case rc:o=i.length-2,a=e+i[o]-i[o+1];break;default:o=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case sc:r=t,c=2*n-e;break;case rc:r=1,c=n+i[1]-i[0];break;default:r=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=o*h,this._offsetNext=r*h}interpolate_(t,e,n,i){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),_=p*p,g=_*p,m=-u*g+2*u*_-u*p,b=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*p+1,S=(-1-f)*g+(1.5+f)*_+.5*p,v=f*g-f*_;for(let w=0;w!==a;++w)o[w]=m*r[h+w]+b*r[l+w]+S*r[c+w]+v*r[d+w];return o}},mo=class extends ei{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)o[u]=r[l+u]*d+r[c+u]*h;return o}},go=class extends ei{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},xo=class extends ei{interpolate_(t,e,n,i){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(i-e),_=1-p;for(let g=0;g!==a;++g)o[g]=r[l+g]*_+r[c+g]*p;return o}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let _=r[l+p],g=r[c+p],m=f*u+p*2,b=d[m],S=d[m+1],v=t*u+p*2,w=h[v],E=h[v+1],C=(n-e)/(i-e),y,T,R,I,L;for(let z=0;z<8;z++){y=C*C,T=y*C,R=1-C,I=R*R,L=I*R;let F=L*e+3*I*C*b+3*R*y*w+T*i-n;if(Math.abs(F)<1e-10)break;let V=3*I*(b-e)+6*R*C*(w-b)+3*y*(i-w);if(Math.abs(V)<1e-10)break;C=C-F/V,C=Math.max(0,Math.min(1,C))}o[p]=L*_+3*I*C*S+3*R*y*E+T*g}return o}},rn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Hr(e,this.TimeBufferType),this.values=Hr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Hr(t.times,Array),values:Hr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new go(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new mo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new xo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case vs:e=this.InterpolantFactoryMethodDiscrete;break;case eo:e=this.InterpolantFactoryMethodLinear;break;case Wr:e=this.InterpolantFactoryMethodSmooth;break;case nc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return It("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vs;case this.InterpolantFactoryMethodLinear:return eo;case this.InterpolantFactoryMethodSmooth:return Wr;case this.InterpolantFactoryMethodBezier:return nc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,o=0,r=i-1;for(;o!==i&&n[o]<t;)++o;for(;r!==-1&&n[r]>e;)--r;if(++r,o!==0||r!==i){o>=r&&(r=Math.max(r,1),o=r-1);let a=this.getValueSize();this.times=n.slice(o,r),this.values=this.values.slice(o*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Nt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,o=n.length;o===0&&(Nt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==o;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Nt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(r!==null&&r>c){Nt("KeyframeTrack: Out of order keys.",this,a,c,r),t=!1;break}r=c}if(i!==void 0&&Wu(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){Nt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Wr,o=t.length-1,r=1;for(let a=1;a<o;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let _=e[d+p];if(_!==e[u+p]||_!==e[f+p]){c=!0;break}}}if(c){if(a!==r){t[r]=t[a];let d=a*n,u=r*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++r}}if(o>0){t[r]=t[o];for(let a=o*n,c=r*n,l=0;l!==n;++l)e[c+l]=e[a+l];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=eo;var ni=class extends rn{constructor(t,e,n){super(t,e,n)}};ni.prototype.ValueTypeName="bool";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=vs;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var _o=class extends rn{constructor(t,e,n,i){super(t,e,n,i)}};_o.prototype.ValueTypeName="color";var yo=class extends rn{constructor(t,e,n,i){super(t,e,n,i)}};yo.prototype.ValueTypeName="number";var vo=class extends ei{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)Tn.slerpFlat(o,0,r,l-a,r,l,c);return o}},Ys=class extends rn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new vo(this.times,this.values,this.getValueSize(),t)}};Ys.prototype.ValueTypeName="quaternion";Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends rn{constructor(t,e,n){super(t,e,n)}};ii.prototype.ValueTypeName="string";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=vs;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Mo=class extends rn{constructor(t,e,n,i){super(t,e,n,i)}};Mo.prototype.ValueTypeName="vector";var bo=class{constructor(t,e,n){let i=this,o=!1,r=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,o===!1&&i.onStart!==void 0&&i.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],p=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zh=new bo,So=class{constructor(t){this.manager=t!==void 0?t:zh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,o){n.load(t,i,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};So.DEFAULT_MATERIAL_NAME="__DEFAULT";var es=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Zs=class extends es{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ec=new de,Zl=new P,Jl=new P,fc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=Ke,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ji,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Zl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zl),Jl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jl),e.updateMatrixWorld(),ec.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Vi||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ec)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Gr=new P,Vr=new Tn,vn=new P,Js=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Gr,Vr,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gr,Vr,vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Gr,Vr,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gr,Vr,vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$n=new P,Kl=new vt,$l=new vt,Fe=class extends Js{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xi*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,Kl,$l),e.subVectors($l,Kl)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ns=class extends Js{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,o=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},pc=class extends fc{constructor(){super(new ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ks=class extends es{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new pc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},$s=class extends es{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Bi=-90,ki=1,Eo=class extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Fe(Bi,ki,t,e);i.layers=this.layers,this.add(i);let o=new Fe(Bi,ki,t,e);o.layers=this.layers,this.add(o);let r=new Fe(Bi,ki,t,e);r.layers=this.layers,this.add(r);let a=new Fe(Bi,ki,t,e);a.layers=this.layers,this.add(a);let c=new Fe(Bi,ki,t,e);c.layers=this.layers,this.add(c);let l=new Fe(Bi,ki,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,c]=e;for(let l of e)this.remove(l);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Vi)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,r,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},To=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var kc="\\[\\]\\.:\\/",jd=new RegExp("["+kc+"]","g"),zc="[^"+kc+"]",tf="[^"+kc.replace("\\.","")+"]",ef=/((?:WC+[\/:])*)/.source.replace("WC",zc),nf=/(WCOD+)?/.source.replace("WCOD",tf),sf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc),rf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc),of=new RegExp("^"+ef+nf+sf+rf+"$"),af=["material","materials","bones","map"],mc=class{constructor(t,e,n){let i=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,o=n.length;i!==o;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(jd,"")}static parseTrackName(t){let e=of.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let o=n.nodeName.substring(i+1);af.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(o){for(let r=0;r<o.length;r++){let a=o[r];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,o=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){It("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;Nt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=o}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=mc;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vx=new Float32Array(1);var Qs=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,It("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var qc=class qc{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=i,this}};qc.prototype.isMatrix2=!0;var gc=qc;function Hc(s,t,e,n){let i=cf(n);switch(e){case Lc:return s*t;case sr:return s*t/i.components*i.byteLength;case Do:return s*t/i.components*i.byteLength;case ai:return s*t*2/i.components*i.byteLength;case No:return s*t*2/i.components*i.byteLength;case Dc:return s*t*3/i.components*i.byteLength;case cn:return s*t*4/i.components*i.byteLength;case Uo:return s*t*4/i.components*i.byteLength;case rr:case or:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ar:case cr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Oo:case ko:return Math.max(s,16)*Math.max(t,8)/4;case Fo:case Bo:return Math.max(s,8)*Math.max(t,8)/2;case zo:case Ho:case Vo:case Wo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Go:case lr:case Xo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case qo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Zo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case $o:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case jo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ta:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ea:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case na:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ia:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case sa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ra:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case oa:case aa:case ca:return Math.ceil(s/4)*Math.ceil(t/4)*16;case la:case ha:return Math.ceil(s/4)*Math.ceil(t/4)*8;case hr:case ua:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cf(s){switch(s){case Ke:case Rc:return{byteLength:1,components:1};case ss:case Cc:case Cn:return{byteLength:2,components:1};case Io:case Lo:return{byteLength:2,components:4};case mn:case Po:case gn:return{byteLength:4,components:1};case Pc:case Ic:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function lu(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function hf(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(s.bindBuffer(l,a),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let _=d[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:o,update:r}}var uf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,df=`#ifdef USE_ALPHAHASH
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
#endif`,ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xf=`#ifdef USE_AOMAP
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
#endif`,_f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yf=`#ifdef USE_BATCHING
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
#endif`,vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ef=`#ifdef USE_IRIDESCENCE
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
#endif`,Tf=`#ifdef USE_BUMPMAP
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
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,If=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Nf=`#define PI 3.141592653589793
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
} // validated`,Uf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ff=`vec3 transformedNormal = objectNormal;
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
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$f=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qf=`#ifdef USE_GRADIENTMAP
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
}`,jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,np=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cp=`PhysicalMaterial material;
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
#endif`,lp=`uniform sampler2D dfgLUT;
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
}`,hp=`
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
#endif`,up=`#if defined( RE_IndirectDiffuse )
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,pp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mp=`#if defined( USE_POINTS_UV )
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
#endif`,bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ep=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`#ifdef USE_MORPHTARGETS
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
#endif`,Rp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Np=`#ifdef USE_NORMALMAP
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
#endif`,Up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kp=`float getShadowMask() {
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
}`,$p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rm=`#ifdef USE_TRANSMISSION
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
#endif`,om=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dm=`uniform sampler2D t2D;
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`#include <common>
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
}`,_m=`#if DEPTH_PACKING == 3200
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
}`,ym=`#define DISTANCE
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
}`,vm=`#define DISTANCE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`uniform float scale;
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
}`,Em=`uniform vec3 diffuse;
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
}`,Tm=`#include <common>
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
}`,wm=`uniform vec3 diffuse;
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
}`,Am=`#define LAMBERT
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
}`,Rm=`#define LAMBERT
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
}`,Cm=`#define MATCAP
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
}`,Pm=`#define MATCAP
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
}`,Im=`#define NORMAL
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
}`,Lm=`#define NORMAL
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
}`,Dm=`#define PHONG
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
}`,Nm=`#define PHONG
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
}`,Um=`#define STANDARD
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
}`,Fm=`#define STANDARD
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
}`,Om=`#define TOON
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
}`,Bm=`#define TOON
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
}`,km=`uniform float size;
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
}`,zm=`uniform vec3 diffuse;
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
}`,Hm=`#include <common>
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
}`,Gm=`uniform vec3 color;
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
}`,Vm=`uniform float rotation;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:uf,alphahash_pars_fragment:df,alphamap_fragment:ff,alphamap_pars_fragment:pf,alphatest_fragment:mf,alphatest_pars_fragment:gf,aomap_fragment:xf,aomap_pars_fragment:_f,batching_pars_vertex:yf,batching_vertex:vf,begin_vertex:Mf,beginnormal_vertex:bf,bsdfs:Sf,iridescence_fragment:Ef,bumpmap_pars_fragment:Tf,clipping_planes_fragment:wf,clipping_planes_pars_fragment:Af,clipping_planes_pars_vertex:Rf,clipping_planes_vertex:Cf,color_fragment:Pf,color_pars_fragment:If,color_pars_vertex:Lf,color_vertex:Df,common:Nf,cube_uv_reflection_fragment:Uf,defaultnormal_vertex:Ff,displacementmap_pars_vertex:Of,displacementmap_vertex:Bf,emissivemap_fragment:kf,emissivemap_pars_fragment:zf,colorspace_fragment:Hf,colorspace_pars_fragment:Gf,envmap_fragment:Vf,envmap_common_pars_fragment:Wf,envmap_pars_fragment:Xf,envmap_pars_vertex:qf,envmap_physical_pars_fragment:ip,envmap_vertex:Yf,fog_vertex:Zf,fog_pars_vertex:Jf,fog_fragment:Kf,fog_pars_fragment:$f,gradientmap_pars_fragment:Qf,lightmap_pars_fragment:jf,lights_lambert_fragment:tp,lights_lambert_pars_fragment:ep,lights_pars_begin:np,lights_toon_fragment:sp,lights_toon_pars_fragment:rp,lights_phong_fragment:op,lights_phong_pars_fragment:ap,lights_physical_fragment:cp,lights_physical_pars_fragment:lp,lights_fragment_begin:hp,lights_fragment_maps:up,lights_fragment_end:dp,lightprobes_pars_fragment:fp,logdepthbuf_fragment:pp,logdepthbuf_pars_fragment:mp,logdepthbuf_pars_vertex:gp,logdepthbuf_vertex:xp,map_fragment:_p,map_pars_fragment:yp,map_particle_fragment:vp,map_particle_pars_fragment:Mp,metalnessmap_fragment:bp,metalnessmap_pars_fragment:Sp,morphinstance_vertex:Ep,morphcolor_vertex:Tp,morphnormal_vertex:wp,morphtarget_pars_vertex:Ap,morphtarget_vertex:Rp,normal_fragment_begin:Cp,normal_fragment_maps:Pp,normal_pars_fragment:Ip,normal_pars_vertex:Lp,normal_vertex:Dp,normalmap_pars_fragment:Np,clearcoat_normal_fragment_begin:Up,clearcoat_normal_fragment_maps:Fp,clearcoat_pars_fragment:Op,iridescence_pars_fragment:Bp,opaque_fragment:kp,packing:zp,premultiplied_alpha_fragment:Hp,project_vertex:Gp,dithering_fragment:Vp,dithering_pars_fragment:Wp,roughnessmap_fragment:Xp,roughnessmap_pars_fragment:qp,shadowmap_pars_fragment:Yp,shadowmap_pars_vertex:Zp,shadowmap_vertex:Jp,shadowmask_pars_fragment:Kp,skinbase_vertex:$p,skinning_pars_vertex:Qp,skinning_vertex:jp,skinnormal_vertex:tm,specularmap_fragment:em,specularmap_pars_fragment:nm,tonemapping_fragment:im,tonemapping_pars_fragment:sm,transmission_fragment:rm,transmission_pars_fragment:om,uv_pars_fragment:am,uv_pars_vertex:cm,uv_vertex:lm,worldpos_vertex:hm,background_vert:um,background_frag:dm,backgroundCube_vert:fm,backgroundCube_frag:pm,cube_vert:mm,cube_frag:gm,depth_vert:xm,depth_frag:_m,distance_vert:ym,distance_frag:vm,equirect_vert:Mm,equirect_frag:bm,linedashed_vert:Sm,linedashed_frag:Em,meshbasic_vert:Tm,meshbasic_frag:wm,meshlambert_vert:Am,meshlambert_frag:Rm,meshmatcap_vert:Cm,meshmatcap_frag:Pm,meshnormal_vert:Im,meshnormal_frag:Lm,meshphong_vert:Dm,meshphong_frag:Nm,meshphysical_vert:Um,meshphysical_frag:Fm,meshtoon_vert:Om,meshtoon_frag:Bm,points_vert:km,points_frag:zm,shadow_vert:Hm,shadow_frag:Gm,sprite_vert:Vm,sprite_frag:Wm},ft={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},In={basic:{uniforms:qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new St(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:qe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:qe([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:qe([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new St(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:qe([ft.points,ft.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:qe([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:qe([ft.common,ft.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:qe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:qe([ft.sprite,ft.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:qe([ft.common,ft.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:qe([ft.lights,ft.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};In.physical={uniforms:qe([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var pa={r:0,b:0,g:0},Xm=new de,hu=new Ft;hu.set(-1,0,0,0,1,0,0,0,1);function qm(s,t,e,n,i,o){let r=new St(0),a=i===!0?0:1,c,l,h=null,d=0,u=null;function f(b){let S=b.isScene===!0?b.background:null;if(S&&S.isTexture){let v=b.backgroundBlurriness>0;S=t.get(S,v)}return S}function p(b){let S=!1,v=f(b);v===null?g(r,a):v&&v.isColor&&(g(v,1),S=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(b,S){let v=f(S);v&&(v.isCubeTexture||v.mapping===nr)?(l===void 0&&(l=new j(new te(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Si(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(hu),l.material.toneMapped=Xt.getTransfer(v.colorSpace)!==Qt,(h!==v||d!==v.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new j(new Le(2,2),new sn({name:"BackgroundMaterial",uniforms:Si(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(v.colorSpace)!==Qt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function g(b,S){b.getRGB(pa,Bc(s)),e.buffers.color.setClear(pa.r,pa.g,pa.b,S,o)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(b,S=1){r.set(b),a=S,g(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,g(r,a)},render:p,addToRenderList:_,dispose:m}}function Ym(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),o=i,r=!1;function a(I,L,z,X,F){let V=!1,G=d(I,X,z,L);o!==G&&(o=G,l(o.object)),V=f(I,X,z,F),V&&p(I,X,z,F),F!==null&&t.update(F,s.ELEMENT_ARRAY_BUFFER),(V||r)&&(r=!1,v(I,L,z,X),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return s.createVertexArray()}function l(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function d(I,L,z,X){let F=X.wireframe===!0,V=n[L.id];V===void 0&&(V={},n[L.id]=V);let G=I.isInstancedMesh===!0?I.id:0,Q=V[G];Q===void 0&&(Q={},V[G]=Q);let et=Q[z.id];et===void 0&&(et={},Q[z.id]=et);let it=et[F];return it===void 0&&(it=u(c()),et[F]=it),it}function u(I){let L=[],z=[],X=[];for(let F=0;F<e;F++)L[F]=0,z[F]=0,X[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:X,object:I,attributes:{},index:null}}function f(I,L,z,X){let F=o.attributes,V=L.attributes,G=0,Q=z.getAttributes();for(let et in Q)if(Q[et].location>=0){let rt=F[et],_t=V[et];if(_t===void 0&&(et==="instanceMatrix"&&I.instanceMatrix&&(_t=I.instanceMatrix),et==="instanceColor"&&I.instanceColor&&(_t=I.instanceColor)),rt===void 0||rt.attribute!==_t||_t&&rt.data!==_t.data)return!0;G++}return o.attributesNum!==G||o.index!==X}function p(I,L,z,X){let F={},V=L.attributes,G=0,Q=z.getAttributes();for(let et in Q)if(Q[et].location>=0){let rt=V[et];rt===void 0&&(et==="instanceMatrix"&&I.instanceMatrix&&(rt=I.instanceMatrix),et==="instanceColor"&&I.instanceColor&&(rt=I.instanceColor));let _t={};_t.attribute=rt,rt&&rt.data&&(_t.data=rt.data),F[et]=_t,G++}o.attributes=F,o.attributesNum=G,o.index=X}function _(){let I=o.newAttributes;for(let L=0,z=I.length;L<z;L++)I[L]=0}function g(I){m(I,0)}function m(I,L){let z=o.newAttributes,X=o.enabledAttributes,F=o.attributeDivisors;z[I]=1,X[I]===0&&(s.enableVertexAttribArray(I),X[I]=1),F[I]!==L&&(s.vertexAttribDivisor(I,L),F[I]=L)}function b(){let I=o.newAttributes,L=o.enabledAttributes;for(let z=0,X=L.length;z<X;z++)L[z]!==I[z]&&(s.disableVertexAttribArray(z),L[z]=0)}function S(I,L,z,X,F,V,G){G===!0?s.vertexAttribIPointer(I,L,z,F,V):s.vertexAttribPointer(I,L,z,X,F,V)}function v(I,L,z,X){_();let F=X.attributes,V=z.getAttributes(),G=L.defaultAttributeValues;for(let Q in V){let et=V[Q];if(et.location>=0){let it=F[Q];if(it===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(it=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(it=I.instanceColor)),it!==void 0){let rt=it.normalized,_t=it.itemSize,Yt=t.get(it);if(Yt===void 0)continue;let ie=Yt.buffer,Zt=Yt.type,K=Yt.bytesPerElement,ot=Zt===s.INT||Zt===s.UNSIGNED_INT||it.gpuType===Po;if(it.isInterleavedBufferAttribute){let nt=it.data,Lt=nt.stride,Ut=it.offset;if(nt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<et.locationSize;Ct++)m(et.location+Ct,nt.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Ct=0;Ct<et.locationSize;Ct++)g(et.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let Ct=0;Ct<et.locationSize;Ct++)S(et.location+Ct,_t/et.locationSize,Zt,rt,Lt*K,(Ut+_t/et.locationSize*Ct)*K,ot)}else{if(it.isInstancedBufferAttribute){for(let nt=0;nt<et.locationSize;nt++)m(et.location+nt,it.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let nt=0;nt<et.locationSize;nt++)g(et.location+nt);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let nt=0;nt<et.locationSize;nt++)S(et.location+nt,_t/et.locationSize,Zt,rt,_t*K,_t/et.locationSize*nt*K,ot)}}else if(G!==void 0){let rt=G[Q];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(et.location,rt);break;case 3:s.vertexAttrib3fv(et.location,rt);break;case 4:s.vertexAttrib4fv(et.location,rt);break;default:s.vertexAttrib1fv(et.location,rt)}}}}b()}function w(){T();for(let I in n){let L=n[I];for(let z in L){let X=L[z];for(let F in X){let V=X[F];for(let G in V)h(V[G].object),delete V[G];delete X[F]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let L=n[I.id];for(let z in L){let X=L[z];for(let F in X){let V=X[F];for(let G in V)h(V[G].object),delete V[G];delete X[F]}}delete n[I.id]}function C(I){for(let L in n){let z=n[L];for(let X in z){let F=z[X];if(F[I.id]===void 0)continue;let V=F[I.id];for(let G in V)h(V[G].object),delete V[G];delete F[I.id]}}}function y(I){for(let L in n){let z=n[L],X=I.isInstancedMesh===!0?I.id:0,F=z[X];if(F!==void 0){for(let V in F){let G=F[V];for(let Q in G)h(G[Q].object),delete G[Q];delete F[V]}delete z[X],Object.keys(z).length===0&&delete n[L]}}}function T(){R(),r=!0,o!==i&&(o=i,l(o.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:b}}function Zm(s,t,e){let n;function i(c){n=c}function o(c,l){s.drawArrays(n,c,l),e.update(l,n,1)}function r(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,n,1)}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a}function Jm(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){return!(C!==cn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let y=C===Cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ke&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==gn&&!y)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(It("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:v,maxSamples:w,samples:E}}function Km(s){let t=this,e=null,n=0,i=!1,o=!1,r=new Mn,a=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||p===null||p.length===0||o&&!g)o?h(null):l();else{let b=o?0:n,S=b*4,v=m.clippingState||null;c.value=v,v=h(p,u,S,f);for(let w=0;w!==S;++w)v[w]=e[w];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=c.value,p!==!0||g===null){let m=f+_*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,v=f;S!==_;++S,v+=4)r.copy(d[S]).applyMatrix4(b,a),r.normal.toArray(g,v),g[v+3]=r.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var ci=4,Hh=[.125,.215,.35,.446,.526,.582],Ei=20,$m=256,dr=new ns,Gh=new St,Yc=null,Zc=0,Jc=0,Kc=!1,Qm=new P,ga=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,o={}){let{size:r=256,position:a=Qm}=o;Yc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yc,Zc,Jc),this._renderer.xr.enabled=Kc,t.scissorTest=!1,os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===si||t.mapping===Mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:Cn,format:cn,colorSpace:Ms,depthBuffer:!1},i=Vh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vh(t,e,n);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jm(o)),this._blurMaterial=e0(o,t,e),this._ggxMaterial=t0(o,t,e)}return i}_compileMaterial(t){let e=new j(new pe,t);this._renderer.compile(e,dr)}_sceneToCubeUV(t,e,n,i,o){let c=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Gh),d.toneMapping=pn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new j(new te,new ve({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,m=!1,b=t.background;b?b.isColor&&(g.color.copy(b),t.background=null,m=!0):(g.color.copy(Gh),m=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(c.up.set(0,l[S],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+h[S],o.y,o.z)):v===1?(c.up.set(0,0,l[S]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+h[S],o.z)):(c.up.set(0,l[S],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+h[S]));let w=this._cubeSize;os(i,v*w,S>2?w:0,w,w),d.setRenderTarget(i),m&&d.render(_,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===si||t.mapping===Mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wh());let o=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=o;let a=o.uniforms;a.envMap.value=t;let c=this._cubeSize;os(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,dr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let o=1;o<i;o++)this._applyGGXFilter(t,o-1,o);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,o=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;let c=r.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=0+l*1.25,f=d*u,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-ci?n-p+ci:0),m=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=p-e,os(o,g,m,3*_,2*_),i.setRenderTarget(o),i.render(a,dr),c.envMap.value=o.texture,c.roughness.value=0,c.mipInt.value=p-n,os(t,g,m,3*_,2*_),i.setRenderTarget(t),i.render(a,dr)}_blur(t,e,n,i,o){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){let c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[i];d.material=l;let u=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Ei-1),_=o/p,g=isFinite(o)?1+Math.floor(h*_):Ei;g>Ei&&It(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ei}`);let m=[],b=0;for(let C=0;C<Ei;++C){let y=C/_,T=Math.exp(-y*y/2);m.push(T),C===0?b+=T:C<g&&(b+=2*T)}for(let C=0;C<m.length;C++)m[C]=m[C]/b;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:S}=this;u.dTheta.value=p,u.mipInt.value=S-n;let v=this._sizeLods[i],w=3*v*(i>S-ci?i-S+ci:0),E=4*(this._cubeSize-v);os(e,w,E,3*v,2*v),c.setRenderTarget(e),c.render(d,dr)}};function jm(s){let t=[],e=[],n=[],i=s,o=s-ci+1+Hh.length;for(let r=0;r<o;r++){let a=Math.pow(2,i);t.push(a);let c=1/a;r>s-ci?c=Hh[r-s+ci-1]:r===0&&(c=0),e.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,p=6,_=3,g=2,m=1,b=new Float32Array(_*p*f),S=new Float32Array(g*p*f),v=new Float32Array(m*p*f);for(let E=0;E<f;E++){let C=E%3*2/3-1,y=E>2?0:-1,T=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];b.set(T,_*p*E),S.set(u,g*p*E);let R=[E,E,E,E,E,E];v.set(R,m*p*E)}let w=new pe;w.setAttribute("position",new Oe(b,_)),w.setAttribute("uv",new Oe(S,g)),w.setAttribute("faceIndex",new Oe(v,m)),n.push(new j(w,null)),i>ci&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Vh(s,t,e){let n=new en(s,t,e);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function os(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function t0(s,t,e){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$m,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ya(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function e0(s,t,e){let n=new Float32Array(Ei),i=new P(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ya(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Wh(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ya(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Xh(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ya(){return`

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
	`}var xa=class extends en{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ls(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new te(5,5,5),o=new sn({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Rn});o.uniforms.tEquirect.value=e;let r=new j(i,o),a=e.minFilter;return e.minFilter===ri&&(e.minFilter=Be),new Eo(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}};function n0(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?r(u):o(u)}function o(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ao||f===Ro)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new xa(p.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",l),a(_.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let f=u.mapping,p=f===Ao||f===Ro,_=f===si||f===Mi;if(p||_){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new ga(s)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let b=u.image;return p&&b&&b.height>0||_&&b&&c(b)?(n===null&&(n=new ga(s)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===Ao?u.mapping=si:f===Ro&&(u.mapping=Mi),u}function c(u){let f=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&f++;return f===p}function l(u){let f=u.target;f.removeEventListener("dispose",l);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function i0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&mi("WebGLRenderer: "+n+" extension not supported."),i}}}function s0(s,t,e,n){let i={},o=new WeakMap;function r(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",r),delete i[u.id];let f=o.get(u);f&&(t.remove(f),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)t.update(u[f],s.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,p=d.attributes.position,_=0;if(p===void 0)return;if(f!==null){let b=f.array;_=f.version;for(let S=0,v=b.length;S<v;S+=3){let w=b[S+0],E=b[S+1],C=b[S+2];u.push(w,E,E,C,C,w)}}else{let b=p.array;_=p.version;for(let S=0,v=b.length/3-1;S<v;S+=3){let w=S+0,E=S+1,C=S+2;u.push(w,E,E,C,C,w)}}let g=new(p.count>=65535?Cs:Rs)(u,1);g.version=_;let m=o.get(d);m&&t.remove(m),o.set(d,g)}function h(d){let u=o.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function r0(s,t,e){let n;function i(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,u){s.drawElements(n,u,o,d*r),e.update(u,n,1)}function l(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,o,d*r,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,o,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function o0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:Nt("WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function a0(s,t,e){let n=new WeakMap,i=new fe;function o(r,a,c){let l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let T=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),_===!0&&(S=3);let v=a.attributes.position.count*S,w=1;v>t.maxTextureSize&&(w=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*w*4*d),C=new Es(E,v,w,d);C.type=gn,C.needsUpdate=!0;let y=S*4;for(let R=0;R<d;R++){let I=g[R],L=m[R],z=b[R],X=v*w*4*R;for(let F=0;F<I.count;F++){let V=F*y;f===!0&&(i.fromBufferAttribute(I,F),E[X+V+0]=i.x,E[X+V+1]=i.y,E[X+V+2]=i.z,E[X+V+3]=0),p===!0&&(i.fromBufferAttribute(L,F),E[X+V+4]=i.x,E[X+V+5]=i.y,E[X+V+6]=i.z,E[X+V+7]=0),_===!0&&(i.fromBufferAttribute(z,F),E[X+V+8]=i.x,E[X+V+9]=i.y,E[X+V+10]=i.z,E[X+V+11]=z.itemSize===4?i.w:1)}}u={count:d,texture:C,size:new vt(v,w)},n.set(a,u),a.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:o}}function c0(s,t,e,n,i){let o=new WeakMap;function r(l){let h=i.render.frame,d=l.geometry,u=t.get(l,d);if(o.get(u)!==h&&(t.update(u),o.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),o.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),o.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;o.get(f)!==h&&(f.update(),o.set(f,h))}return u}function a(){o=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}var l0={[Mc]:"LINEAR_TONE_MAPPING",[bc]:"REINHARD_TONE_MAPPING",[Sc]:"CINEON_TONE_MAPPING",[er]:"ACES_FILMIC_TONE_MAPPING",[Tc]:"AGX_TONE_MAPPING",[wc]:"NEUTRAL_TONE_MAPPING",[Ec]:"CUSTOM_TONE_MAPPING"};function h0(s,t,e,n,i,o){let r=new en(t,e,{type:s,depthBuffer:i,stencilBuffer:o,samples:n?4:0,depthTexture:i?new Hn(t,e):void 0}),a=new en(t,e,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),c=new pe;c.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new kt([0,2,0,0,2,0],2));let l=new ho({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new j(c,l),d=new ns(-1,1,1,-1,0,1),u=null,f=null,p=!1,_,g=null,m=[],b=!1;this.setSize=function(S,v){r.setSize(S,v),a.setSize(S,v);for(let w=0;w<m.length;w++){let E=m[w];E.setSize&&E.setSize(S,v)}},this.setEffects=function(S){m=S,b=m.length>0&&m[0].isRenderPass===!0;let v=r.width,w=r.height;for(let E=0;E<m.length;E++){let C=m[E];C.setSize&&C.setSize(v,w)}},this.begin=function(S,v){if(p||S.toneMapping===pn&&m.length===0)return!1;if(g=v,v!==null){let w=v.width,E=v.height;(r.width!==w||r.height!==E)&&this.setSize(w,E)}return b===!1&&S.setRenderTarget(r),_=S.toneMapping,S.toneMapping=pn,!0},this.hasRenderPass=function(){return b},this.end=function(S,v){S.toneMapping=_,p=!0;let w=r,E=a;for(let C=0;C<m.length;C++){let y=m[C];if(y.enabled!==!1&&(y.render(S,E,w,v),y.needsSwap!==!1)){let T=w;w=E,E=T}}if(u!==S.outputColorSpace||f!==S.toneMapping){u=S.outputColorSpace,f=S.toneMapping,l.defines={},Xt.getTransfer(u)===Qt&&(l.defines.SRGB_TRANSFER="");let C=l0[f];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,S.setRenderTarget(g),S.render(h,d),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),c.dispose(),l.dispose()}}var uu=new Ze,jc=new Hn(1,1),du=new Es,fu=new so,pu=new Ls,qh=[],Yh=[],Zh=new Float32Array(16),Jh=new Float32Array(9),Kh=new Float32Array(4);function cs(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,o=qh[i];if(o===void 0&&(o=new Float32Array(i),qh[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function De(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ne(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function va(s,t){let e=Yh[t];e===void 0&&(e=new Int32Array(t),Yh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function u0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function d0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2fv(this.addr,t),Ne(e,t)}}function f0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;s.uniform3fv(this.addr,t),Ne(e,t)}}function p0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4fv(this.addr,t),Ne(e,t)}}function m0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;Kh.set(n),s.uniformMatrix2fv(this.addr,!1,Kh),Ne(e,n)}}function g0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;Jh.set(n),s.uniformMatrix3fv(this.addr,!1,Jh),Ne(e,n)}}function x0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;Zh.set(n),s.uniformMatrix4fv(this.addr,!1,Zh),Ne(e,n)}}function _0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function y0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2iv(this.addr,t),Ne(e,t)}}function v0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3iv(this.addr,t),Ne(e,t)}}function M0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4iv(this.addr,t),Ne(e,t)}}function b0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function S0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2uiv(this.addr,t),Ne(e,t)}}function E0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3uiv(this.addr,t),Ne(e,t)}}function T0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4uiv(this.addr,t),Ne(e,t)}}function w0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(jc.compareFunction=e.isReversedDepthBuffer()?fa:da,o=jc):o=uu,e.setTexture2D(t||o,i)}function A0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||fu,i)}function R0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||pu,i)}function C0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||du,i)}function P0(s){switch(s){case 5126:return u0;case 35664:return d0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return x0;case 5124:case 35670:return _0;case 35667:case 35671:return y0;case 35668:case 35672:return v0;case 35669:case 35673:return M0;case 5125:return b0;case 36294:return S0;case 36295:return E0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return C0}}function I0(s,t){s.uniform1fv(this.addr,t)}function L0(s,t){let e=cs(t,this.size,2);s.uniform2fv(this.addr,e)}function D0(s,t){let e=cs(t,this.size,3);s.uniform3fv(this.addr,e)}function N0(s,t){let e=cs(t,this.size,4);s.uniform4fv(this.addr,e)}function U0(s,t){let e=cs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function F0(s,t){let e=cs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function O0(s,t){let e=cs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function B0(s,t){s.uniform1iv(this.addr,t)}function k0(s,t){s.uniform2iv(this.addr,t)}function z0(s,t){s.uniform3iv(this.addr,t)}function H0(s,t){s.uniform4iv(this.addr,t)}function G0(s,t){s.uniform1uiv(this.addr,t)}function V0(s,t){s.uniform2uiv(this.addr,t)}function W0(s,t){s.uniform3uiv(this.addr,t)}function X0(s,t){s.uniform4uiv(this.addr,t)}function q0(s,t,e){let n=this.cache,i=t.length,o=va(e,i);De(n,o)||(s.uniform1iv(this.addr,o),Ne(n,o));let r;this.type===s.SAMPLER_2D_SHADOW?r=jc:r=uu;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||r,o[a])}function Y0(s,t,e){let n=this.cache,i=t.length,o=va(e,i);De(n,o)||(s.uniform1iv(this.addr,o),Ne(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||fu,o[r])}function Z0(s,t,e){let n=this.cache,i=t.length,o=va(e,i);De(n,o)||(s.uniform1iv(this.addr,o),Ne(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||pu,o[r])}function J0(s,t,e){let n=this.cache,i=t.length,o=va(e,i);De(n,o)||(s.uniform1iv(this.addr,o),Ne(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||du,o[r])}function K0(s){switch(s){case 5126:return I0;case 35664:return L0;case 35665:return D0;case 35666:return N0;case 35674:return U0;case 35675:return F0;case 35676:return O0;case 5124:case 35670:return B0;case 35667:case 35671:return k0;case 35668:case 35672:return z0;case 35669:case 35673:return H0;case 5125:return G0;case 36294:return V0;case 36295:return W0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return q0;case 35679:case 36299:case 36307:return Y0;case 35680:case 36300:case 36308:case 36293:return Z0;case 36289:case 36303:case 36311:case 36292:return J0}}var tl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=P0(e.type)}},el=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=K0(e.type)}},nl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let o=0,r=i.length;o!==r;++o){let a=i[o];a.setValue(t,e[a.id],n)}}},$c=/(\w+)(\])?(\[|\.)?/g;function $h(s,t){s.seq.push(t),s.map[t.id]=t}function $0(s,t,e){let n=s.name,i=n.length;for($c.lastIndex=0;;){let o=$c.exec(n),r=$c.lastIndex,a=o[1],c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){$h(e,l===void 0?new tl(a,s,t):new el(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new nl(a),$h(e,d)),e=d}}}var as=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),c=t.getUniformLocation(e,a.name);$0(a,c,this)}let i=[],o=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(r):o.push(r);i.length>0&&(this.seq=i.concat(o))}setValue(t,e,n,i){let o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){let a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,o=t.length;i!==o;++i){let r=t[i];r.id in e&&n.push(r)}return n}};function Qh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Q0=37297,j0=0;function tg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){let a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}var jh=new Ft;function eg(s){Xt._getMatrix(jh,Xt.workingColorSpace,s);let t=`mat3( ${jh.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(s)){case bs:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function tu(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),o=(s.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";let r=/ERROR: 0:(\d+)/.exec(o);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+o+`

`+tg(s.getShaderSource(t),a)}else return o}function ng(s,t){let e=eg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var ig={[Mc]:"Linear",[bc]:"Reinhard",[Sc]:"Cineon",[er]:"ACESFilmic",[Tc]:"AgX",[wc]:"Neutral",[Ec]:"Custom"};function sg(s,t){let e=ig[t];return e===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ma=new P;function rg(){Xt.getLuminanceCoefficients(ma);let s=ma.x.toFixed(4),t=ma.y.toFixed(4),e=ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function og(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function ag(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let o=s.getActiveAttrib(t,i),r=o.name,a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function pr(s){return s!==""}function eu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(s){return s.replace(lg,ug)}var hg=new Map;function ug(s,t){let e=Ht[t];if(e===void 0){let n=hg.get(t);if(n!==void 0)e=Ht[n],It('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return il(e)}var dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function iu(s){return s.replace(dg,fg)}function fg(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function su(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var pg={[js]:"SHADOWMAP_TYPE_PCF",[is]:"SHADOWMAP_TYPE_VSM"};function mg(s){return pg[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var gg={[si]:"ENVMAP_TYPE_CUBE",[Mi]:"ENVMAP_TYPE_CUBE",[nr]:"ENVMAP_TYPE_CUBE_UV"};function xg(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":gg[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var _g={[Mi]:"ENVMAP_MODE_REFRACTION"};function yg(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":_g[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vg={[vc]:"ENVMAP_BLENDING_MULTIPLY",[yh]:"ENVMAP_BLENDING_MIX",[vh]:"ENVMAP_BLENDING_ADD"};function Mg(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":vg[s.combine]||"ENVMAP_BLENDING_NONE"}function bg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Sg(s,t,e,n){let i=s.getContext(),o=e.defines,r=e.vertexShader,a=e.fragmentShader,c=mg(e),l=xg(e),h=yg(e),d=Mg(e),u=bg(e),f=og(e),p=ag(o),_=i.createProgram(),g,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(pr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(pr).join(`
`),m.length>0&&(m+=`
`)):(g=[su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),m=[su(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pn?"#define TONE_MAPPING":"",e.toneMapping!==pn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==pn?sg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,ng("linearToOutputTexel",e.outputColorSpace),rg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),r=il(r),r=eu(r,e),r=nu(r,e),a=il(a),a=eu(a,e),a=nu(a,e),r=iu(r),a=iu(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=b+g+r,v=b+m+a,w=Qh(i,i.VERTEX_SHADER,S),E=Qh(i,i.FRAGMENT_SHADER,v);i.attachShader(_,w),i.attachShader(_,E),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(I){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(_)||"",z=i.getShaderInfoLog(w)||"",X=i.getShaderInfoLog(E)||"",F=L.trim(),V=z.trim(),G=X.trim(),Q=!0,et=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,w,E);else{let it=tu(i,w,"vertex"),rt=tu(i,E,"fragment");Nt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+it+`
`+rt)}else F!==""?It("WebGLProgram: Program Info Log:",F):(V===""||G==="")&&(et=!1);et&&(I.diagnostics={runnable:Q,programLog:F,vertexShader:{log:V,prefix:g},fragmentShader:{log:G,prefix:m}})}i.deleteShader(w),i.deleteShader(E),y=new as(i,_),T=cg(i,_)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(_,Q0)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=j0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=E,this}var Eg=0,sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rl(t),e.set(t,n)),n}},rl=class{constructor(t){this.id=Eg++,this.code=t,this.usedTimes=0}};function Tg(s){return s===ai||s===lr||s===hr}function wg(s,t,e,n,i,o){let r=new Ts,a=new sl,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function _(y,T,R,I,L,z){let X=I.fog,F=L.geometry,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,Q=t.get(y.envMap||V,G),et=Q&&Q.mapping===nr?Q.image.height:null,it=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&It("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let rt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,_t=rt!==void 0?rt.length:0,Yt=0;F.morphAttributes.position!==void 0&&(Yt=1),F.morphAttributes.normal!==void 0&&(Yt=2),F.morphAttributes.color!==void 0&&(Yt=3);let ie,Zt,K,ot;if(it){let Mt=In[it];ie=Mt.vertexShader,Zt=Mt.fragmentShader}else{ie=y.vertexShader,Zt=y.fragmentShader;let Mt=a.getVertexShaderStage(y),_e=a.getFragmentShaderStage(y);a.update(y,Mt,_e),K=Mt.id,ot=_e.id}let nt=s.getRenderTarget(),Lt=s.state.buffers.depth.getReversed(),Ut=L.isInstancedMesh===!0,Ct=L.isBatchedMesh===!0,he=!!y.map,zt=!!y.matcap,$t=!!Q,qt=!!y.aoMap,Vt=!!y.lightMap,me=!!y.bumpMap&&y.wireframe===!1,xe=!!y.normalMap,Se=!!y.displacementMap,Ee=!!y.emissiveMap,ae=!!y.metalnessMap,Re=!!y.roughnessMap,N=y.anisotropy>0,Je=y.clearcoat>0,jt=y.dispersion>0,A=y.iridescence>0,x=y.sheen>0,O=y.transmission>0,H=N&&!!y.anisotropyMap,q=Je&&!!y.clearcoatMap,st=Je&&!!y.clearcoatNormalMap,ct=Je&&!!y.clearcoatRoughnessMap,Y=A&&!!y.iridescenceMap,$=A&&!!y.iridescenceThicknessMap,lt=x&&!!y.sheenColorMap,Tt=x&&!!y.sheenRoughnessMap,dt=!!y.specularMap,ht=!!y.specularColorMap,Pt=!!y.specularIntensityMap,Dt=O&&!!y.transmissionMap,Ot=O&&!!y.thicknessMap,D=!!y.gradientMap,at=!!y.alphaMap,J=y.alphaTest>0,ut=!!y.alphaHash,gt=!!y.extensions,tt=pn;y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(tt=s.toneMapping);let Et={shaderID:it,shaderType:y.type,shaderName:y.name,vertexShader:ie,fragmentShader:Zt,defines:y.defines,customVertexShaderID:K,customFragmentShaderID:ot,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Ct,batchingColor:Ct&&L._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&L.instanceColor!==null,instancingMorph:Ut&&L.morphTexture!==null,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Xt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:he,matcap:zt,envMap:$t,envMapMode:$t&&Q.mapping,envMapCubeUVHeight:et,aoMap:qt,lightMap:Vt,bumpMap:me,normalMap:xe,displacementMap:Se,emissiveMap:Ee,normalMapObjectSpace:xe&&y.normalMapType===Sh,normalMapTangentSpace:xe&&y.normalMapType===ur,packedNormalMap:xe&&y.normalMapType===ur&&Tg(y.normalMap.format),metalnessMap:ae,roughnessMap:Re,anisotropy:N,anisotropyMap:H,clearcoat:Je,clearcoatMap:q,clearcoatNormalMap:st,clearcoatRoughnessMap:ct,dispersion:jt,iridescence:A,iridescenceMap:Y,iridescenceThicknessMap:$,sheen:x,sheenColorMap:lt,sheenRoughnessMap:Tt,specularMap:dt,specularColorMap:ht,specularIntensityMap:Pt,transmission:O,transmissionMap:Dt,thicknessMap:Ot,gradientMap:D,opaque:y.transparent===!1&&y.blending===gi&&y.alphaToCoverage===!1,alphaMap:at,alphaTest:J,alphaHash:ut,combine:y.combine,mapUv:he&&p(y.map.channel),aoMapUv:qt&&p(y.aoMap.channel),lightMapUv:Vt&&p(y.lightMap.channel),bumpMapUv:me&&p(y.bumpMap.channel),normalMapUv:xe&&p(y.normalMap.channel),displacementMapUv:Se&&p(y.displacementMap.channel),emissiveMapUv:Ee&&p(y.emissiveMap.channel),metalnessMapUv:ae&&p(y.metalnessMap.channel),roughnessMapUv:Re&&p(y.roughnessMap.channel),anisotropyMapUv:H&&p(y.anisotropyMap.channel),clearcoatMapUv:q&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:st&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:$&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&p(y.sheenRoughnessMap.channel),specularMapUv:dt&&p(y.specularMap.channel),specularColorMapUv:ht&&p(y.specularColorMap.channel),specularIntensityMapUv:Pt&&p(y.specularIntensityMap.channel),transmissionMapUv:Dt&&p(y.transmissionMap.channel),thicknessMapUv:Ot&&p(y.thicknessMap.channel),alphaMapUv:at&&p(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(xe||N),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(he||at),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&xe===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Lt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Yt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:tt,decodeVideoTexture:he&&y.map.isVideoTexture===!0&&Xt.getTransfer(y.map.colorSpace)===Qt,decodeVideoTextureEmissive:Ee&&y.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(y.emissiveMap.colorSpace)===Qt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Xe,flipSided:y.side===ze,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:gt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&y.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function g(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)T.push(R),T.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(m(T,y),b(T,y),T.push(s.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function m(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function b(y,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),y.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),T.hasPositionAttribute&&r.enable(23),y.push(r.mask)}function S(y){let T=f[y.type],R;if(T){let I=In[T];R=kh.clone(I.uniforms)}else R=y.uniforms;return R}function v(y,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new Sg(s,T,y,i),l.push(R),h.set(T,R)),R}function w(y){if(--y.usedTimes===0){let T=l.indexOf(y);l[T]=l[l.length-1],l.pop(),h.delete(y.cacheKey),y.destroy()}}function E(y){a.remove(y)}function C(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:S,acquireProgram:v,releaseProgram:w,releaseShaderCache:E,programs:l,dispose:C}}function Ag(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,c){s.get(r)[a]=c}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function Rg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function ru(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ou(){let s=[],t=0,e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,_,g,m){let b=s[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:p,materialVariant:r(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=p,b.materialVariant=r(u),b.groupOrder=_,b.renderOrder=u.renderOrder,b.z=g,b.group=m),t++,b}function c(u,f,p,_,g,m){let b=a(u,f,p,_,g,m);p.transmission>0?n.push(b):p.transparent===!0?i.push(b):e.push(b)}function l(u,f,p,_,g,m){let b=a(u,f,p,_,g,m);p.transmission>0?n.unshift(b):p.transparent===!0?i.unshift(b):e.unshift(b)}function h(u,f,p){e.length>1&&e.sort(u||Rg),n.length>1&&n.sort(f||ru),i.length>1&&i.sort(f||ru),p&&(e.reverse(),n.reverse(),i.reverse())}function d(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:c,unshift:l,finish:d,sort:h}}function Cg(){let s=new WeakMap;function t(n,i){let o=s.get(n),r;return o===void 0?(r=new ou,s.set(n,[r])):i>=o.length?(r=new ou,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function Pg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new St};break;case"SpotLight":e={position:new P,direction:new P,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function Ig(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Lg=0;function Dg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ng(s){let t=new Pg,e=Ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let i=new P,o=new de,r=new de;function a(l){let h=0,d=0,u=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,b=0,S=0,v=0,w=0,E=0,C=0;l.sort(Dg);for(let T=0,R=l.length;T<R;T++){let I=l[T],L=I.color,z=I.intensity,X=I.distance,F=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ai?F=I.shadow.map.texture:F=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=L.r*z,d+=L.g*z,u+=L.b*z;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],z);C++}else if(I.isDirectionalLight){let V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let G=I.shadow,Q=e.get(I);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=I.shadow.matrix,b++}n.directional[f]=V,f++}else if(I.isSpotLight){let V=t.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(L).multiplyScalar(z),V.distance=X,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[_]=V;let G=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,G.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[_]=G.matrix,I.castShadow){let Q=e.get(I);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=F,v++}_++}else if(I.isRectAreaLight){let V=t.get(I);V.color.copy(L).multiplyScalar(z),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=V,g++}else if(I.isPointLight){let V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){let G=I.shadow,Q=e.get(I);Q.shadowIntensity=G.intensity,Q.shadowBias=G.bias,Q.shadowNormalBias=G.normalBias,Q.shadowRadius=G.radius,Q.shadowMapSize=G.mapSize,Q.shadowCameraNear=G.camera.near,Q.shadowCameraFar=G.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=F,n.pointShadowMatrix[p]=I.shadow.matrix,S++}n.point[p]=V,p++}else if(I.isHemisphereLight){let V=t.get(I);V.skyColor.copy(I.color).multiplyScalar(z),V.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[m]=V,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let y=n.hash;(y.directionalLength!==f||y.pointLength!==p||y.spotLength!==_||y.rectAreaLength!==g||y.hemiLength!==m||y.numDirectionalShadows!==b||y.numPointShadows!==S||y.numSpotShadows!==v||y.numSpotMaps!==w||y.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,y.directionalLength=f,y.pointLength=p,y.spotLength=_,y.rectAreaLength=g,y.hemiLength=m,y.numDirectionalShadows=b,y.numPointShadows=S,y.numSpotShadows=v,y.numSpotMaps=w,y.numLightProbes=C,n.version=Lg++)}function c(l,h){let d=0,u=0,f=0,p=0,_=0,g=h.matrixWorldInverse;for(let m=0,b=l.length;m<b;m++){let S=l[m];if(S.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),d++}else if(S.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),f++}else if(S.isRectAreaLight){let v=n.rectArea[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),r.identity(),o.copy(S.matrixWorld),o.premultiply(g),r.extractRotation(o),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),p++}else if(S.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),u++}else if(S.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function au(s){let t=new Ng(s),e=[],n=[],i=[];function o(u){d.camera=u,e.length=0,n.length=0,i.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function c(u){i.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:d,setupLights:l,setupLightsView:h,pushLight:r,pushShadow:a,pushLightProbeGrid:c}}function Ug(s){let t=new WeakMap;function e(i,o=0){let r=t.get(i),a;return r===void 0?(a=new au(s),t.set(i,[a])):o>=r.length?(a=new au(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Og=`uniform sampler2D shadow_pass;
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
}`,Bg=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],kg=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],cu=new de,fr=new P,Qc=new P;function zg(s,t,e){let n=new Ji,i=new vt,o=new vt,r=new fe,a=new uo,c=new fo,l={},h=e.maxTextureSize,d={[kn]:ze,[ze]:kn,[Xe]:Xe},u=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:Fg,fragmentShader:Og}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new pe;p.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new j(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let m=this.type;this.render=function(E,C,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===th&&(It("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=js);let T=s.getRenderTarget(),R=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Rn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let z=m!==this.type;z&&C.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(F=>F.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,F=E.length;X<F;X++){let V=E[X],G=V.shadow;if(G===void 0){It("WebGLShadowMap:",V,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let Q=G.getFrameExtents();i.multiply(Q),o.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/Q.x),i.x=o.x*Q.x,G.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/Q.y),i.y=o.y*Q.y,G.mapSize.y=o.y));let et=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=et,G.map===null||z===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===is){if(V.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new en(i.x,i.y,{format:ai,type:Cn,minFilter:Be,magFilter:Be,generateMipmaps:!1}),G.map.texture.name=V.name+".shadowMap",G.map.depthTexture=new Hn(i.x,i.y,gn),G.map.depthTexture.name=V.name+".shadowMapDepth",G.map.depthTexture.format=Sn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ae,G.map.depthTexture.magFilter=Ae}else V.isPointLight?(G.map=new xa(i.x),G.map.depthTexture=new ro(i.x,mn)):(G.map=new en(i.x,i.y),G.map.depthTexture=new Hn(i.x,i.y,mn)),G.map.depthTexture.name=V.name+".shadowMap",G.map.depthTexture.format=Sn,this.type===js?(G.map.depthTexture.compareFunction=et?fa:da,G.map.depthTexture.minFilter=Be,G.map.depthTexture.magFilter=Be):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ae,G.map.depthTexture.magFilter=Ae);G.camera.updateProjectionMatrix()}let it=G.map.isWebGLCubeRenderTarget?6:1;for(let rt=0;rt<it;rt++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,rt),s.clear();else{rt===0&&(s.setRenderTarget(G.map),s.clear());let _t=G.getViewport(rt);r.set(o.x*_t.x,o.y*_t.y,o.x*_t.z,o.y*_t.w),L.viewport(r)}if(V.isPointLight){let _t=G.camera,Yt=G.matrix,ie=V.distance||_t.far;ie!==_t.far&&(_t.far=ie,_t.updateProjectionMatrix()),fr.setFromMatrixPosition(V.matrixWorld),_t.position.copy(fr),Qc.copy(_t.position),Qc.add(Bg[rt]),_t.up.copy(kg[rt]),_t.lookAt(Qc),_t.updateMatrixWorld(),Yt.makeTranslation(-fr.x,-fr.y,-fr.z),cu.multiplyMatrices(_t.projectionMatrix,_t.matrixWorldInverse),G._frustum.setFromProjectionMatrix(cu,_t.coordinateSystem,_t.reversedDepth)}else G.updateMatrices(V);n=G.getFrustum(),v(C,y,G.camera,V,this.type)}G.isPointLightShadow!==!0&&this.type===is&&b(G,y),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(T,R,I)};function b(E,C){let y=t.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new en(i.x,i.y,{format:ai,type:Cn})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(C,null,y,u,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(C,null,y,f,_,null)}function S(E,C,y,T){let R=null,I=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)R=I;else if(R=y.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let L=R.uuid,z=C.uuid,X=l[L];X===void 0&&(X={},l[L]=X);let F=X[z];F===void 0&&(F=R.clone(),X[z]=F,C.addEventListener("dispose",w)),R=F}if(R.visible=C.visible,R.wireframe=C.wireframe,T===is?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:d[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=s.properties.get(R);L.light=y}return R}function v(E,C,y,T,R){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===is)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let z=t.update(E),X=E.material;if(Array.isArray(X)){let F=z.groups;for(let V=0,G=F.length;V<G;V++){let Q=F[V],et=X[Q.materialIndex];if(et&&et.visible){let it=S(E,et,T,R);E.onBeforeShadow(s,E,C,y,z,it,Q),s.renderBufferDirect(y,null,z,it,E,Q),E.onAfterShadow(s,E,C,y,z,it,Q)}}}else if(X.visible){let F=S(E,X,T,R);E.onBeforeShadow(s,E,C,y,z,F,null),s.renderBufferDirect(y,null,z,F,E,null),E.onAfterShadow(s,E,C,y,z,F,null)}}let L=E.children;for(let z=0,X=L.length;z<X;z++)v(L[z],C,y,T,R)}function w(E){E.target.removeEventListener("dispose",w);for(let y in l){let T=l[y],R=E.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function Hg(s,t){function e(){let D=!1,at=new fe,J=null,ut=new fe(0,0,0,0);return{setMask:function(gt){J!==gt&&!D&&(s.colorMask(gt,gt,gt,gt),J=gt)},setLocked:function(gt){D=gt},setClear:function(gt,tt,Et,Mt,_e){_e===!0&&(gt*=Mt,tt*=Mt,Et*=Mt),at.set(gt,tt,Et,Mt),ut.equals(at)===!1&&(s.clearColor(gt,tt,Et,Mt),ut.copy(at))},reset:function(){D=!1,J=null,ut.set(-1,0,0,0)}}}function n(){let D=!1,at=!1,J=null,ut=null,gt=null;return{setReversed:function(tt){if(at!==tt){let Et=t.get("EXT_clip_control");tt?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),at=tt;let Mt=gt;gt=null,this.setClear(Mt)}},getReversed:function(){return at},setTest:function(tt){tt?nt(s.DEPTH_TEST):Lt(s.DEPTH_TEST)},setMask:function(tt){J!==tt&&!D&&(s.depthMask(tt),J=tt)},setFunc:function(tt){if(at&&(tt=Dh[tt]),ut!==tt){switch(tt){case Yr:s.depthFunc(s.NEVER);break;case Zr:s.depthFunc(s.ALWAYS);break;case Jr:s.depthFunc(s.LESS);break;case xi:s.depthFunc(s.LEQUAL);break;case Kr:s.depthFunc(s.EQUAL);break;case $r:s.depthFunc(s.GEQUAL);break;case Qr:s.depthFunc(s.GREATER);break;case jr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ut=tt}},setLocked:function(tt){D=tt},setClear:function(tt){gt!==tt&&(gt=tt,at&&(tt=1-tt),s.clearDepth(tt))},reset:function(){D=!1,J=null,ut=null,gt=null,at=!1}}}function i(){let D=!1,at=null,J=null,ut=null,gt=null,tt=null,Et=null,Mt=null,_e=null;return{setTest:function(ce){D||(ce?nt(s.STENCIL_TEST):Lt(s.STENCIL_TEST))},setMask:function(ce){at!==ce&&!D&&(s.stencilMask(ce),at=ce)},setFunc:function(ce,xn,_n){(J!==ce||ut!==xn||gt!==_n)&&(s.stencilFunc(ce,xn,_n),J=ce,ut=xn,gt=_n)},setOp:function(ce,xn,_n){(tt!==ce||Et!==xn||Mt!==_n)&&(s.stencilOp(ce,xn,_n),tt=ce,Et=xn,Mt=_n)},setLocked:function(ce){D=ce},setClear:function(ce){_e!==ce&&(s.clearStencil(ce),_e=ce)},reset:function(){D=!1,at=null,J=null,ut=null,gt=null,tt=null,Et=null,Mt=null,_e=null}}}let o=new e,r=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],_=null,g=!1,m=null,b=null,S=null,v=null,w=null,E=null,C=null,y=new St(0,0,0),T=0,R=!1,I=null,L=null,z=null,X=null,F=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Q=0,et=s.getParameter(s.VERSION);et.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(et)[1]),G=Q>=1):et.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),G=Q>=2);let it=null,rt={},_t=s.getParameter(s.SCISSOR_BOX),Yt=s.getParameter(s.VIEWPORT),ie=new fe().fromArray(_t),Zt=new fe().fromArray(Yt);function K(D,at,J,ut){let gt=new Uint8Array(4),tt=s.createTexture();s.bindTexture(D,tt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Et=0;Et<J;Et++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,ut,0,s.RGBA,s.UNSIGNED_BYTE,gt):s.texImage2D(at+Et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,gt);return tt}let ot={};ot[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),ot[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ot[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),nt(s.DEPTH_TEST),r.setFunc(xi),me(!1),xe(xc),nt(s.CULL_FACE),qt(Rn);function nt(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Lt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Ut(D,at){return u[D]!==at?(s.bindFramebuffer(D,at),u[D]=at,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=at),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=at),!0):!1}function Ct(D,at){let J=p,ut=!1;if(D){J=f.get(at),J===void 0&&(J=[],f.set(at,J));let gt=D.textures;if(J.length!==gt.length||J[0]!==s.COLOR_ATTACHMENT0){for(let tt=0,Et=gt.length;tt<Et;tt++)J[tt]=s.COLOR_ATTACHMENT0+tt;J.length=gt.length,ut=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,ut=!0);ut&&s.drawBuffers(J)}function he(D){return _!==D?(s.useProgram(D),_=D,!0):!1}let zt={[jn]:s.FUNC_ADD,[nh]:s.FUNC_SUBTRACT,[ih]:s.FUNC_REVERSE_SUBTRACT};zt[sh]=s.MIN,zt[rh]=s.MAX;let $t={[oh]:s.ZERO,[ah]:s.ONE,[ch]:s.SRC_COLOR,[Xr]:s.SRC_ALPHA,[ph]:s.SRC_ALPHA_SATURATE,[dh]:s.DST_COLOR,[hh]:s.DST_ALPHA,[lh]:s.ONE_MINUS_SRC_COLOR,[qr]:s.ONE_MINUS_SRC_ALPHA,[fh]:s.ONE_MINUS_DST_COLOR,[uh]:s.ONE_MINUS_DST_ALPHA,[mh]:s.CONSTANT_COLOR,[gh]:s.ONE_MINUS_CONSTANT_COLOR,[xh]:s.CONSTANT_ALPHA,[_h]:s.ONE_MINUS_CONSTANT_ALPHA};function qt(D,at,J,ut,gt,tt,Et,Mt,_e,ce){if(D===Rn){g===!0&&(Lt(s.BLEND),g=!1);return}if(g===!1&&(nt(s.BLEND),g=!0),D!==eh){if(D!==m||ce!==R){if((b!==jn||w!==jn)&&(s.blendEquation(s.FUNC_ADD),b=jn,w=jn),ce)switch(D){case gi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tr:s.blendFunc(s.ONE,s.ONE);break;case _c:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Nt("WebGLState: Invalid blending: ",D);break}else switch(D){case gi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case _c:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yc:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",D);break}S=null,v=null,E=null,C=null,y.set(0,0,0),T=0,m=D,R=ce}return}gt=gt||at,tt=tt||J,Et=Et||ut,(at!==b||gt!==w)&&(s.blendEquationSeparate(zt[at],zt[gt]),b=at,w=gt),(J!==S||ut!==v||tt!==E||Et!==C)&&(s.blendFuncSeparate($t[J],$t[ut],$t[tt],$t[Et]),S=J,v=ut,E=tt,C=Et),(Mt.equals(y)===!1||_e!==T)&&(s.blendColor(Mt.r,Mt.g,Mt.b,_e),y.copy(Mt),T=_e),m=D,R=!1}function Vt(D,at){D.side===Xe?Lt(s.CULL_FACE):nt(s.CULL_FACE);let J=D.side===ze;at&&(J=!J),me(J),D.blending===gi&&D.transparent===!1?qt(Rn):qt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),o.setMask(D.colorWrite);let ut=D.stencilWrite;a.setTest(ut),ut&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ee(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):Lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function me(D){I!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),I=D)}function xe(D){D!==Ql?(nt(s.CULL_FACE),D!==L&&(D===xc?s.cullFace(s.BACK):D===jl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Lt(s.CULL_FACE),L=D}function Se(D){D!==z&&(G&&s.lineWidth(D),z=D)}function Ee(D,at,J){D?(nt(s.POLYGON_OFFSET_FILL),(X!==at||F!==J)&&(X=at,F=J,r.getReversed()&&(at=-at),s.polygonOffset(at,J))):Lt(s.POLYGON_OFFSET_FILL)}function ae(D){D?nt(s.SCISSOR_TEST):Lt(s.SCISSOR_TEST)}function Re(D){D===void 0&&(D=s.TEXTURE0+V-1),it!==D&&(s.activeTexture(D),it=D)}function N(D,at,J){J===void 0&&(it===null?J=s.TEXTURE0+V-1:J=it);let ut=rt[J];ut===void 0&&(ut={type:void 0,texture:void 0},rt[J]=ut),(ut.type!==D||ut.texture!==at)&&(it!==J&&(s.activeTexture(J),it=J),s.bindTexture(D,at||ot[D]),ut.type=D,ut.texture=at)}function Je(){let D=rt[it];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function jt(){try{s.compressedTexImage2D(...arguments)}catch(D){Nt("WebGLState:",D)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(D){Nt("WebGLState:",D)}}function x(){try{s.texSubImage2D(...arguments)}catch(D){Nt("WebGLState:",D)}}function O(){try{s.texSubImage3D(...arguments)}catch(D){Nt("WebGLState:",D)}}function H(){try{s.compressedTexSubImage2D(...arguments)}catch(D){Nt("WebGLState:",D)}}function q(){try{s.compressedTexSubImage3D(...arguments)}catch(D){Nt("WebGLState:",D)}}function st(){try{s.texStorage2D(...arguments)}catch(D){Nt("WebGLState:",D)}}function ct(){try{s.texStorage3D(...arguments)}catch(D){Nt("WebGLState:",D)}}function Y(){try{s.texImage2D(...arguments)}catch(D){Nt("WebGLState:",D)}}function $(){try{s.texImage3D(...arguments)}catch(D){Nt("WebGLState:",D)}}function lt(D){return d[D]!==void 0?d[D]:s.getParameter(D)}function Tt(D,at){d[D]!==at&&(s.pixelStorei(D,at),d[D]=at)}function dt(D){ie.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ie.copy(D))}function ht(D){Zt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Zt.copy(D))}function Pt(D,at){let J=l.get(at);J===void 0&&(J=new WeakMap,l.set(at,J));let ut=J.get(D);ut===void 0&&(ut=s.getUniformBlockIndex(at,D.name),J.set(D,ut))}function Dt(D,at){let ut=l.get(at).get(D);c.get(at)!==ut&&(s.uniformBlockBinding(at,ut,D.__bindingPointIndex),c.set(at,ut))}function Ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},it=null,rt={},u={},f=new WeakMap,p=[],_=null,g=!1,m=null,b=null,S=null,v=null,w=null,E=null,C=null,y=new St(0,0,0),T=0,R=!1,I=null,L=null,z=null,X=null,F=null,ie.set(0,0,s.canvas.width,s.canvas.height),Zt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:nt,disable:Lt,bindFramebuffer:Ut,drawBuffers:Ct,useProgram:he,setBlending:qt,setMaterial:Vt,setFlipSided:me,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ee,setScissorTest:ae,activeTexture:Re,bindTexture:N,unbindTexture:Je,compressedTexImage2D:jt,compressedTexImage3D:A,texImage2D:Y,texImage3D:$,pixelStorei:Tt,getParameter:lt,updateUBOMapping:Pt,uniformBlockBinding:Dt,texStorage2D:st,texStorage3D:ct,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:H,compressedTexSubImage3D:q,scissor:dt,viewport:ht,reset:Ot}}function Gg(s,t,e,n,i,o,r){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return p?new OffscreenCanvas(A,x):Ss("canvas")}function g(A,x,O){let H=1,q=jt(A);if((q.width>O||q.height>O)&&(H=O/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let st=Math.floor(H*q.width),ct=Math.floor(H*q.height);u===void 0&&(u=_(st,ct));let Y=x?_(st,ct):u;return Y.width=st,Y.height=ct,Y.getContext("2d").drawImage(A,0,0,st,ct),It("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+st+"x"+ct+")."),Y}else return"data"in A&&It("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),A;return A}function m(A){return A.generateMipmaps}function b(A){s.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(A,x,O,H,q,st=!1){if(A!==null){if(s[A]!==void 0)return s[A];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ct;H&&(ct=t.get("EXT_texture_norm16"),ct||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===s.RED&&(O===s.FLOAT&&(Y=s.R32F),O===s.HALF_FLOAT&&(Y=s.R16F),O===s.UNSIGNED_BYTE&&(Y=s.R8),O===s.UNSIGNED_SHORT&&ct&&(Y=ct.R16_EXT),O===s.SHORT&&ct&&(Y=ct.R16_SNORM_EXT)),x===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.R8UI),O===s.UNSIGNED_SHORT&&(Y=s.R16UI),O===s.UNSIGNED_INT&&(Y=s.R32UI),O===s.BYTE&&(Y=s.R8I),O===s.SHORT&&(Y=s.R16I),O===s.INT&&(Y=s.R32I)),x===s.RG&&(O===s.FLOAT&&(Y=s.RG32F),O===s.HALF_FLOAT&&(Y=s.RG16F),O===s.UNSIGNED_BYTE&&(Y=s.RG8),O===s.UNSIGNED_SHORT&&ct&&(Y=ct.RG16_EXT),O===s.SHORT&&ct&&(Y=ct.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RG8UI),O===s.UNSIGNED_SHORT&&(Y=s.RG16UI),O===s.UNSIGNED_INT&&(Y=s.RG32UI),O===s.BYTE&&(Y=s.RG8I),O===s.SHORT&&(Y=s.RG16I),O===s.INT&&(Y=s.RG32I)),x===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),O===s.UNSIGNED_INT&&(Y=s.RGB32UI),O===s.BYTE&&(Y=s.RGB8I),O===s.SHORT&&(Y=s.RGB16I),O===s.INT&&(Y=s.RGB32I)),x===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),O===s.UNSIGNED_INT&&(Y=s.RGBA32UI),O===s.BYTE&&(Y=s.RGBA8I),O===s.SHORT&&(Y=s.RGBA16I),O===s.INT&&(Y=s.RGBA32I)),x===s.RGB&&(O===s.UNSIGNED_SHORT&&ct&&(Y=ct.RGB16_EXT),O===s.SHORT&&ct&&(Y=ct.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),x===s.RGBA){let $=st?bs:Xt.getTransfer(q);O===s.FLOAT&&(Y=s.RGBA32F),O===s.HALF_FLOAT&&(Y=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Y=$===Qt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&ct&&(Y=ct.RGBA16_EXT),O===s.SHORT&&ct&&(Y=ct.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function w(A,x){let O;return A?x===null||x===mn||x===rs?O=s.DEPTH24_STENCIL8:x===gn?O=s.DEPTH32F_STENCIL8:x===ss&&(O=s.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===mn||x===rs?O=s.DEPTH_COMPONENT24:x===gn?O=s.DEPTH_COMPONENT32F:x===ss&&(O=s.DEPTH_COMPONENT16),O}function E(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ae&&A.minFilter!==Be?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){let x=A.target;x.removeEventListener("dispose",C),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function y(A){let x=A.target;x.removeEventListener("dispose",y),I(x)}function T(A){let x=n.get(A);if(x.__webglInit===void 0)return;let O=A.source,H=f.get(O);if(H){let q=H[x.__cacheKey];q.usedTimes--,q.usedTimes===0&&R(A),Object.keys(H).length===0&&f.delete(O)}n.remove(A)}function R(A){let x=n.get(A);s.deleteTexture(x.__webglTexture);let O=A.source,H=f.get(O);delete H[x.__cacheKey],r.memory.textures--}function I(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let q=0;q<x.__webglFramebuffer[H].length;q++)s.deleteFramebuffer(x.__webglFramebuffer[H][q]);else s.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)s.deleteFramebuffer(x.__webglFramebuffer[H]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let O=A.textures;for(let H=0,q=O.length;H<q;H++){let st=n.get(O[H]);st.__webglTexture&&(s.deleteTexture(st.__webglTexture),r.memory.textures--),n.remove(O[H])}n.remove(A)}let L=0;function z(){L=0}function X(){return L}function F(A){L=A}function V(){let A=L;return A>=i.maxTextures&&It("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),L+=1,A}function G(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function Q(A,x){let O=n.get(A);if(A.isVideoTexture&&N(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){let H=A.image;if(H===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(O,A,x);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+x)}function et(A,x){let O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Lt(O,A,x);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+x)}function it(A,x){let O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Lt(O,A,x);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+x)}function rt(A,x){let O=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){Ut(O,A,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+x)}let _t={[tn]:s.REPEAT,[bn]:s.CLAMP_TO_EDGE,[to]:s.MIRRORED_REPEAT},Yt={[Ae]:s.NEAREST,[Mh]:s.NEAREST_MIPMAP_NEAREST,[ir]:s.NEAREST_MIPMAP_LINEAR,[Be]:s.LINEAR,[Co]:s.LINEAR_MIPMAP_NEAREST,[ri]:s.LINEAR_MIPMAP_LINEAR},ie={[Eh]:s.NEVER,[Ch]:s.ALWAYS,[Th]:s.LESS,[da]:s.LEQUAL,[wh]:s.EQUAL,[fa]:s.GEQUAL,[Ah]:s.GREATER,[Rh]:s.NOTEQUAL};function Zt(A,x){if(x.type===gn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Be||x.magFilter===Co||x.magFilter===ir||x.magFilter===ri||x.minFilter===Be||x.minFilter===Co||x.minFilter===ir||x.minFilter===ri)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,_t[x.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,_t[x.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,_t[x.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Yt[x.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Yt[x.minFilter]),x.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ie[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ae||x.minFilter!==ir&&x.minFilter!==ri||x.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function K(A,x){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));let H=x.source,q=f.get(H);q===void 0&&(q={},f.set(H,q));let st=G(x);if(st!==A.__cacheKey){q[st]===void 0&&(q[st]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,O=!0),q[st].usedTimes++;let ct=q[A.__cacheKey];ct!==void 0&&(q[A.__cacheKey].usedTimes--,ct.usedTimes===0&&R(x)),A.__cacheKey=st,A.__webglTexture=q[st].texture}return O}function ot(A,x,O){return Math.floor(Math.floor(A/O)/x)}function nt(A,x,O,H){let st=A.updateRanges;if(st.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,O,H,x.data);else{st.sort((Tt,dt)=>Tt.start-dt.start);let ct=0;for(let Tt=1;Tt<st.length;Tt++){let dt=st[ct],ht=st[Tt],Pt=dt.start+dt.count,Dt=ot(ht.start,x.width,4),Ot=ot(dt.start,x.width,4);ht.start<=Pt+1&&Dt===Ot&&ot(ht.start+ht.count-1,x.width,4)===Dt?dt.count=Math.max(dt.count,ht.start+ht.count-dt.start):(++ct,st[ct]=ht)}st.length=ct+1;let Y=e.getParameter(s.UNPACK_ROW_LENGTH),$=e.getParameter(s.UNPACK_SKIP_PIXELS),lt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let Tt=0,dt=st.length;Tt<dt;Tt++){let ht=st[Tt],Pt=Math.floor(ht.start/4),Dt=Math.ceil(ht.count/4),Ot=Pt%x.width,D=Math.floor(Pt/x.width),at=Dt,J=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Ot),e.pixelStorei(s.UNPACK_SKIP_ROWS,D),e.texSubImage2D(s.TEXTURE_2D,0,Ot,D,at,J,O,H,x.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Y),e.pixelStorei(s.UNPACK_SKIP_PIXELS,$),e.pixelStorei(s.UNPACK_SKIP_ROWS,lt)}}function Lt(A,x,O){let H=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=s.TEXTURE_3D);let q=K(A,x),st=x.source;e.bindTexture(H,A.__webglTexture,s.TEXTURE0+O);let ct=n.get(st);if(st.version!==ct.__version||q===!0){if(e.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let J=Xt.getPrimaries(Xt.workingColorSpace),ut=x.colorSpace===Gn?null:Xt.getPrimaries(x.colorSpace),gt=x.colorSpace===Gn||J===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt)}e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let $=g(x.image,!1,i.maxTextureSize);$=Je(x,$);let lt=o.convert(x.format,x.colorSpace),Tt=o.convert(x.type),dt=v(x.internalFormat,lt,Tt,x.normalized,x.colorSpace,x.isVideoTexture);Zt(H,x);let ht,Pt=x.mipmaps,Dt=x.isVideoTexture!==!0,Ot=ct.__version===void 0||q===!0,D=st.dataReady,at=E(x,$);if(x.isDepthTexture)dt=w(x.format===oi,x.type),Ot&&(Dt?e.texStorage2D(s.TEXTURE_2D,1,dt,$.width,$.height):e.texImage2D(s.TEXTURE_2D,0,dt,$.width,$.height,0,lt,Tt,null));else if(x.isDataTexture)if(Pt.length>0){Dt&&Ot&&e.texStorage2D(s.TEXTURE_2D,at,dt,Pt[0].width,Pt[0].height);for(let J=0,ut=Pt.length;J<ut;J++)ht=Pt[J],Dt?D&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,ht.width,ht.height,lt,Tt,ht.data):e.texImage2D(s.TEXTURE_2D,J,dt,ht.width,ht.height,0,lt,Tt,ht.data);x.generateMipmaps=!1}else Dt?(Ot&&e.texStorage2D(s.TEXTURE_2D,at,dt,$.width,$.height),D&&nt(x,$,lt,Tt)):e.texImage2D(s.TEXTURE_2D,0,dt,$.width,$.height,0,lt,Tt,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Dt&&Ot&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,dt,Pt[0].width,Pt[0].height,$.depth);for(let J=0,ut=Pt.length;J<ut;J++)if(ht=Pt[J],x.format!==cn)if(lt!==null)if(Dt){if(D)if(x.layerUpdates.size>0){let gt=Hc(ht.width,ht.height,x.format,x.type);for(let tt of x.layerUpdates){let Et=ht.data.subarray(tt*gt/ht.data.BYTES_PER_ELEMENT,(tt+1)*gt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,tt,ht.width,ht.height,1,lt,Et)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,ht.width,ht.height,$.depth,lt,ht.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,dt,ht.width,ht.height,$.depth,0,ht.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,ht.width,ht.height,$.depth,lt,Tt,ht.data):e.texImage3D(s.TEXTURE_2D_ARRAY,J,dt,ht.width,ht.height,$.depth,0,lt,Tt,ht.data)}else{Dt&&Ot&&e.texStorage2D(s.TEXTURE_2D,at,dt,Pt[0].width,Pt[0].height);for(let J=0,ut=Pt.length;J<ut;J++)ht=Pt[J],x.format!==cn?lt!==null?Dt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,ht.width,ht.height,lt,ht.data):e.compressedTexImage2D(s.TEXTURE_2D,J,dt,ht.width,ht.height,0,ht.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?D&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,ht.width,ht.height,lt,Tt,ht.data):e.texImage2D(s.TEXTURE_2D,J,dt,ht.width,ht.height,0,lt,Tt,ht.data)}else if(x.isDataArrayTexture)if(Dt){if(Ot&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,dt,$.width,$.height,$.depth),D)if(x.layerUpdates.size>0){let J=Hc($.width,$.height,x.format,x.type);for(let ut of x.layerUpdates){let gt=$.data.subarray(ut*J/$.data.BYTES_PER_ELEMENT,(ut+1)*J/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ut,$.width,$.height,1,lt,Tt,gt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,lt,Tt,$.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,dt,$.width,$.height,$.depth,0,lt,Tt,$.data);else if(x.isData3DTexture)Dt?(Ot&&e.texStorage3D(s.TEXTURE_3D,at,dt,$.width,$.height,$.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,lt,Tt,$.data)):e.texImage3D(s.TEXTURE_3D,0,dt,$.width,$.height,$.depth,0,lt,Tt,$.data);else if(x.isFramebufferTexture){if(Ot)if(Dt)e.texStorage2D(s.TEXTURE_2D,at,dt,$.width,$.height);else{let J=$.width,ut=$.height;for(let gt=0;gt<at;gt++)e.texImage2D(s.TEXTURE_2D,gt,dt,J,ut,0,lt,Tt,null),J>>=1,ut>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){let J=s.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),$.parentNode!==J){J.appendChild($),d.add(x),J.onpaint=ut=>{let gt=ut.changedElements;for(let tt of d)gt.includes(tt.image)&&(tt.needsUpdate=!0)},J.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,$);else{let gt=s.RGBA,tt=s.RGBA,Et=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,gt,tt,Et,$)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Pt.length>0){if(Dt&&Ot){let J=jt(Pt[0]);e.texStorage2D(s.TEXTURE_2D,at,dt,J.width,J.height)}for(let J=0,ut=Pt.length;J<ut;J++)ht=Pt[J],Dt?D&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,lt,Tt,ht):e.texImage2D(s.TEXTURE_2D,J,dt,lt,Tt,ht);x.generateMipmaps=!1}else if(Dt){if(Ot){let J=jt($);e.texStorage2D(s.TEXTURE_2D,at,dt,J.width,J.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt,Tt,$)}else e.texImage2D(s.TEXTURE_2D,0,dt,lt,Tt,$);m(x)&&b(H),ct.__version=st.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Ut(A,x,O){if(x.image.length!==6)return;let H=K(A,x),q=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+O);let st=n.get(q);if(q.version!==st.__version||H===!0){e.activeTexture(s.TEXTURE0+O);let ct=Xt.getPrimaries(Xt.workingColorSpace),Y=x.colorSpace===Gn?null:Xt.getPrimaries(x.colorSpace),$=x.colorSpace===Gn||ct===Y?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let lt=x.isCompressedTexture||x.image[0].isCompressedTexture,Tt=x.image[0]&&x.image[0].isDataTexture,dt=[];for(let tt=0;tt<6;tt++)!lt&&!Tt?dt[tt]=g(x.image[tt],!0,i.maxCubemapSize):dt[tt]=Tt?x.image[tt].image:x.image[tt],dt[tt]=Je(x,dt[tt]);let ht=dt[0],Pt=o.convert(x.format,x.colorSpace),Dt=o.convert(x.type),Ot=v(x.internalFormat,Pt,Dt,x.normalized,x.colorSpace),D=x.isVideoTexture!==!0,at=st.__version===void 0||H===!0,J=q.dataReady,ut=E(x,ht);Zt(s.TEXTURE_CUBE_MAP,x);let gt;if(lt){D&&at&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Ot,ht.width,ht.height);for(let tt=0;tt<6;tt++){gt=dt[tt].mipmaps;for(let Et=0;Et<gt.length;Et++){let Mt=gt[Et];x.format!==cn?Pt!==null?D?J&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,0,0,Mt.width,Mt.height,Pt,Mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,Ot,Mt.width,Mt.height,0,Mt.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,0,0,Mt.width,Mt.height,Pt,Dt,Mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,Ot,Mt.width,Mt.height,0,Pt,Dt,Mt.data)}}}else{if(gt=x.mipmaps,D&&at){gt.length>0&&ut++;let tt=jt(dt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Ot,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(Tt){D?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,dt[tt].width,dt[tt].height,Pt,Dt,dt[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ot,dt[tt].width,dt[tt].height,0,Pt,Dt,dt[tt].data);for(let Et=0;Et<gt.length;Et++){let _e=gt[Et].image[tt].image;D?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,0,0,_e.width,_e.height,Pt,Dt,_e.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,Ot,_e.width,_e.height,0,Pt,Dt,_e.data)}}else{D?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Pt,Dt,dt[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ot,Pt,Dt,dt[tt]);for(let Et=0;Et<gt.length;Et++){let Mt=gt[Et];D?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,0,0,Pt,Dt,Mt.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,Ot,Pt,Dt,Mt.image[tt])}}}m(x)&&b(s.TEXTURE_CUBE_MAP),st.__version=q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Ct(A,x,O,H,q,st){let ct=o.convert(O.format,O.colorSpace),Y=o.convert(O.type),$=v(O.internalFormat,ct,Y,O.normalized,O.colorSpace),lt=n.get(x),Tt=n.get(O);if(Tt.__renderTarget=x,!lt.__hasExternalTextures){let dt=Math.max(1,x.width>>st),ht=Math.max(1,x.height>>st);q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?e.texImage3D(q,st,$,dt,ht,x.depth,0,ct,Y,null):e.texImage2D(q,st,$,dt,ht,0,ct,Y,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Re(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,H,q,Tt.__webglTexture,0,ae(x)):(q===s.TEXTURE_2D||q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,H,q,Tt.__webglTexture,st),e.bindFramebuffer(s.FRAMEBUFFER,null)}function he(A,x,O){if(s.bindRenderbuffer(s.RENDERBUFFER,A),x.depthBuffer){let H=x.depthTexture,q=H&&H.isDepthTexture?H.type:null,st=w(x.stencilBuffer,q),ct=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Re(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae(x),st,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ae(x),st,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,st,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,A)}else{let H=x.textures;for(let q=0;q<H.length;q++){let st=H[q],ct=o.convert(st.format,st.colorSpace),Y=o.convert(st.type),$=v(st.internalFormat,ct,Y,st.normalized,st.colorSpace);Re(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae(x),$,x.width,x.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ae(x),$,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,$,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function zt(A,x,O){let H=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(x.depthTexture);if(q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H){if(q.__webglInit===void 0&&(q.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),q.__webglTexture===void 0){q.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Zt(s.TEXTURE_CUBE_MAP,x.depthTexture);let lt=o.convert(x.depthTexture.format),Tt=o.convert(x.depthTexture.type),dt;x.depthTexture.format===Sn?dt=s.DEPTH_COMPONENT24:x.depthTexture.format===oi&&(dt=s.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,dt,x.width,x.height,0,lt,Tt,null)}}else Q(x.depthTexture,0);let st=q.__webglTexture,ct=ae(x),Y=H?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,$=x.depthTexture.format===oi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===Sn)Re(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Y,st,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,$,Y,st,0);else if(x.depthTexture.format===oi)Re(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Y,st,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,$,Y,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $t(A){let x=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let H=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){let q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),x.__depthDisposeCallback=q}x.__boundDepthTexture=H}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let H=0;H<6;H++)zt(x.__webglFramebuffer[H],A,H);else{let H=A.texture.mipmaps;H&&H.length>0?zt(x.__webglFramebuffer[0],A,0):zt(x.__webglFramebuffer,A,0)}else if(O){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=s.createRenderbuffer(),he(x.__webglDepthbuffer[H],A,!1);else{let q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=x.__webglDepthbuffer[H];s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,st)}}else{let H=A.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),he(x.__webglDepthbuffer,A,!1);else{let q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,st)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(A,x,O){let H=n.get(A);x!==void 0&&Ct(H.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&$t(A)}function Vt(A){let x=A.texture,O=n.get(A),H=n.get(x);A.addEventListener("dispose",y);let q=A.textures,st=A.isWebGLCubeRenderTarget===!0,ct=q.length>1;if(ct||(H.__webglTexture===void 0&&(H.__webglTexture=s.createTexture()),H.__version=x.version,r.memory.textures++),st){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let $=0;$<x.mipmaps.length;$++)O.__webglFramebuffer[Y][$]=s.createFramebuffer()}else O.__webglFramebuffer[Y]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)O.__webglFramebuffer[Y]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(ct)for(let Y=0,$=q.length;Y<$;Y++){let lt=n.get(q[Y]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),r.memory.textures++)}if(A.samples>0&&Re(A)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<q.length;Y++){let $=q[Y];O.__webglColorRenderbuffer[Y]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);let lt=o.convert($.format,$.colorSpace),Tt=o.convert($.type),dt=v($.internalFormat,lt,Tt,$.normalized,$.colorSpace,A.isXRRenderTarget===!0),ht=ae(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,dt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),he(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(st){e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture),Zt(s.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)Ct(O.__webglFramebuffer[Y][$],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$);else Ct(O.__webglFramebuffer[Y],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);m(x)&&b(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let Y=0,$=q.length;Y<$;Y++){let lt=q[Y],Tt=n.get(lt),dt=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,Tt.__webglTexture),Zt(dt,lt),Ct(O.__webglFramebuffer,A,lt,s.COLOR_ATTACHMENT0+Y,dt,0),m(lt)&&b(dt)}e.unbindTexture()}else{let Y=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Y,H.__webglTexture),Zt(Y,x),x.mipmaps&&x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)Ct(O.__webglFramebuffer[$],A,x,s.COLOR_ATTACHMENT0,Y,$);else Ct(O.__webglFramebuffer,A,x,s.COLOR_ATTACHMENT0,Y,0);m(x)&&b(Y),e.unbindTexture()}A.depthBuffer&&$t(A)}function me(A){let x=A.textures;for(let O=0,H=x.length;O<H;O++){let q=x[O];if(m(q)){let st=S(A),ct=n.get(q).__webglTexture;e.bindTexture(st,ct),b(st),e.unbindTexture()}}}let xe=[],Se=[];function Ee(A){if(A.samples>0){if(Re(A)===!1){let x=A.textures,O=A.width,H=A.height,q=s.COLOR_BUFFER_BIT,st=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=n.get(A),Y=x.length>1;if(Y)for(let lt=0;lt<x.length;lt++)e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let $=A.texture.mipmaps;$&&$.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let lt=0;lt<x.length;lt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(q|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(q|=s.STENCIL_BUFFER_BIT)),Y){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ct.__webglColorRenderbuffer[lt]);let Tt=n.get(x[lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Tt,0)}s.blitFramebuffer(0,0,O,H,0,0,O,H,q,s.NEAREST),c===!0&&(xe.length=0,Se.length=0,xe.push(s.COLOR_ATTACHMENT0+lt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(xe.push(st),Se.push(st),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Se)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Y)for(let lt=0;lt<x.length;lt++){e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,ct.__webglColorRenderbuffer[lt]);let Tt=n.get(x[lt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,Tt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let x=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function ae(A){return Math.min(i.maxSamples,A.samples)}function Re(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function N(A){let x=r.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function Je(A,x){let O=A.colorSpace,H=A.format,q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Ms&&O!==Gn&&(Xt.getTransfer(O)===Qt?(H!==cn||q!==Ke)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",O)),x}function jt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.getTextureUnits=X,this.setTextureUnits=F,this.setTexture2D=Q,this.setTexture2DArray=et,this.setTexture3D=it,this.setTextureCube=rt,this.rebindTextures=qt,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Re,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Vg(s,t){function e(n,i=Gn){let o,r=Xt.getTransfer(i);if(n===Ke)return s.UNSIGNED_BYTE;if(n===Io)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Lo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Pc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ic)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rc)return s.BYTE;if(n===Cc)return s.SHORT;if(n===ss)return s.UNSIGNED_SHORT;if(n===Po)return s.INT;if(n===mn)return s.UNSIGNED_INT;if(n===gn)return s.FLOAT;if(n===Cn)return s.HALF_FLOAT;if(n===Lc)return s.ALPHA;if(n===Dc)return s.RGB;if(n===cn)return s.RGBA;if(n===Sn)return s.DEPTH_COMPONENT;if(n===oi)return s.DEPTH_STENCIL;if(n===sr)return s.RED;if(n===Do)return s.RED_INTEGER;if(n===ai)return s.RG;if(n===No)return s.RG_INTEGER;if(n===Uo)return s.RGBA_INTEGER;if(n===rr||n===or||n===ar||n===cr)if(r===Qt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===rr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===or)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ar)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===rr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===or)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ar)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fo||n===Oo||n===Bo||n===ko)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Fo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ko)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zo||n===Ho||n===Go||n===Vo||n===Wo||n===lr||n===Xo)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===zo||n===Ho)return r===Qt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Go)return r===Qt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Vo)return o.COMPRESSED_R11_EAC;if(n===Wo)return o.COMPRESSED_SIGNED_R11_EAC;if(n===lr)return o.COMPRESSED_RG11_EAC;if(n===Xo)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qo||n===Yo||n===Zo||n===Jo||n===Ko||n===$o||n===Qo||n===jo||n===ta||n===ea||n===na||n===ia||n===sa||n===ra)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===qo)return r===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yo)return r===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zo)return r===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jo)return r===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ko)return r===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$o)return r===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qo)return r===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jo)return r===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ta)return r===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ea)return r===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===na)return r===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ia)return r===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sa)return r===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ra)return r===Qt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oa||n===aa||n===ca)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===oa)return r===Qt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===aa)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ca)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===la||n===ha||n===hr||n===ua)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===la)return o.COMPRESSED_RED_RGTC1_EXT;if(n===ha)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ua)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Wg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xg=`
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

}`,ol=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ds(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new sn({vertexShader:Wg,fragmentShader:Xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new j(new Le(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},al=class extends En{constructor(t,e){super();let n=this,i=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,p=null,_=typeof XRWebGLBinding<"u",g=new ol,m={},b=e.getContextAttributes(),S=null,v=null,w=[],E=[],C=new vt,y=null,T=new Fe;T.viewport=new fe;let R=new Fe;R.viewport=new fe;let I=[T,R],L=new To,z=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ot=w[K];return ot===void 0&&(ot=new Yi,w[K]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(K){let ot=w[K];return ot===void 0&&(ot=new Yi,w[K]=ot),ot.getGripSpace()},this.getHand=function(K){let ot=w[K];return ot===void 0&&(ot=new Yi,w[K]=ot),ot.getHandSpace()};function F(K){let ot=E.indexOf(K.inputSource);if(ot===-1)return;let nt=w[ot];nt!==void 0&&(nt.update(K.inputSource,K.frame,l||r),nt.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",G);for(let K=0;K<w.length;K++){let ot=E[K];ot!==null&&(E[K]=null,w[K].disconnect(ot))}z=null,X=null,g.reset();for(let K in m)delete m[K];t.setRenderTarget(S),f=null,u=null,d=null,i=null,v=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){o=K,n.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",V),i.addEventListener("inputsourceschange",G),b.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,Lt=null,Ut=null;b.depth&&(Ut=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=b.stencil?oi:Sn,Lt=b.stencil?rs:mn);let Ct={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:o};d=this.getBinding(),u=d.createProjectionLayer(Ct),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new en(u.textureWidth,u.textureHeight,{format:cn,type:Ke,depthTexture:new Hn(u.textureWidth,u.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let nt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new en(f.framebufferWidth,f.framebufferHeight,{format:cn,type:Ke,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),Zt.setContext(i),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(K){for(let ot=0;ot<K.removed.length;ot++){let nt=K.removed[ot],Lt=E.indexOf(nt);Lt>=0&&(E[Lt]=null,w[Lt].disconnect(nt))}for(let ot=0;ot<K.added.length;ot++){let nt=K.added[ot],Lt=E.indexOf(nt);if(Lt===-1){for(let Ct=0;Ct<w.length;Ct++)if(Ct>=E.length){E.push(nt),Lt=Ct;break}else if(E[Ct]===null){E[Ct]=nt,Lt=Ct;break}if(Lt===-1)break}let Ut=w[Lt];Ut&&Ut.connect(nt)}}let Q=new P,et=new P;function it(K,ot,nt){Q.setFromMatrixPosition(ot.matrixWorld),et.setFromMatrixPosition(nt.matrixWorld);let Lt=Q.distanceTo(et),Ut=ot.projectionMatrix.elements,Ct=nt.projectionMatrix.elements,he=Ut[14]/(Ut[10]-1),zt=Ut[14]/(Ut[10]+1),$t=(Ut[9]+1)/Ut[5],qt=(Ut[9]-1)/Ut[5],Vt=(Ut[8]-1)/Ut[0],me=(Ct[8]+1)/Ct[0],xe=he*Vt,Se=he*me,Ee=Lt/(-Vt+me),ae=Ee*-Vt;if(ot.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ae),K.translateZ(Ee),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ut[10]===-1)K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let Re=he+Ee,N=zt+Ee,Je=xe-ae,jt=Se+(Lt-ae),A=$t*zt/N*Re,x=qt*zt/N*Re;K.projectionMatrix.makePerspective(Je,jt,A,x,Re,N),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function rt(K,ot){ot===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ot.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ot=K.near,nt=K.far;g.texture!==null&&(g.depthNear>0&&(ot=g.depthNear),g.depthFar>0&&(nt=g.depthFar)),L.near=R.near=T.near=ot,L.far=R.far=T.far=nt,(z!==L.near||X!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),z=L.near,X=L.far),L.layers.mask=K.layers.mask|6,T.layers.mask=L.layers.mask&-5,R.layers.mask=L.layers.mask&-3;let Lt=K.parent,Ut=L.cameras;rt(L,Lt);for(let Ct=0;Ct<Ut.length;Ct++)rt(Ut[Ct],Lt);Ut.length===2?it(L,T,R):L.projectionMatrix.copy(T.projectionMatrix),_t(K,L,Lt)};function _t(K,ot,nt){nt===null?K.matrix.copy(ot.matrixWorld):(K.matrix.copy(nt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ot.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Xi*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(K){return m[K]};let Yt=null;function ie(K,ot){if(h=ot.getViewerPose(l||r),p=ot,h!==null){let nt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Lt=!1;nt.length!==L.cameras.length&&(L.cameras.length=0,Lt=!0);for(let zt=0;zt<nt.length;zt++){let $t=nt[zt],qt=null;if(f!==null)qt=f.getViewport($t);else{let me=d.getViewSubImage(u,$t);qt=me.viewport,zt===0&&(t.setRenderTargetTextures(v,me.colorTexture,me.depthStencilTexture),t.setRenderTarget(v))}let Vt=I[zt];Vt===void 0&&(Vt=new Fe,Vt.layers.enable(zt),Vt.viewport=new fe,I[zt]=Vt),Vt.matrix.fromArray($t.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray($t.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(qt.x,qt.y,qt.width,qt.height),zt===0&&(L.matrix.copy(Vt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Lt===!0&&L.cameras.push(Vt)}let Ut=i.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let zt=d.getDepthInformation(nt[0]);zt&&zt.isValid&&zt.texture&&g.init(zt,i.renderState)}if(Ut&&Ut.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let zt=0;zt<nt.length;zt++){let $t=nt[zt].camera;if($t){let qt=m[$t];qt||(qt=new Ds,m[$t]=qt);let Vt=d.getCameraImage($t);qt.sourceTexture=Vt}}}}for(let nt=0;nt<w.length;nt++){let Lt=E[nt],Ut=w[nt];Lt!==null&&Ut!==void 0&&Ut.update(Lt,ot,l||r)}Yt&&Yt(K,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),p=null}let Zt=new lu;Zt.setAnimationLoop(ie),this.setAnimationLoop=function(K){Yt=K},this.dispose=function(){}}},qg=new de,mu=new Ft;mu.set(-1,0,0,0,1,0,0,0,1);function Yg(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Bc(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,b,S,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?o(g,m):m.isMeshLambertMaterial?(o(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(o(g,m),d(g,m)):m.isMeshPhongMaterial?(o(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(o(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(o(g,m),p(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),_(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,b,S):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ze&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ze&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=t.get(m),S=b.envMap,v=b.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(qg.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(mu),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,b,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=S*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ze&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let b=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Zg(s,t,e,n){let i={},o={},r=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,w){let E=w.program;n.uniformBlockBinding(v,E)}function l(v,w){let E=i[v.id];E===void 0&&(g(v),E=h(v),i[v.id]=E,v.addEventListener("dispose",b));let C=w.program;n.updateUBOMapping(v,C);let y=t.render.frame;o[v.id]!==y&&(u(v),o[v.id]=y)}function h(v){let w=d();v.__bindingPointIndex=w;let E=s.createBuffer(),C=v.__size,y=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,C,y),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,E),E}function d(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let w=i[v.id],E=v.uniforms,C=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let y=0,T=E.length;y<T;y++){let R=E[y];if(Array.isArray(R))for(let I=0,L=R.length;I<L;I++)f(R[I],y,I,C);else f(R,y,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,w,E,C){if(_(v,w,E,C)===!0){let y=v.__offset,T=v.value;if(Array.isArray(T)){let R=0;for(let I=0;I<T.length;I++){let L=T[I],z=m(L);p(L,v.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,v.__data)}}function p(v,w,E){typeof v=="number"||typeof v=="boolean"?w[0]=v:v.isMatrix3?(w[0]=v.elements[0],w[1]=v.elements[1],w[2]=v.elements[2],w[3]=0,w[4]=v.elements[3],w[5]=v.elements[4],w[6]=v.elements[5],w[7]=0,w[8]=v.elements[6],w[9]=v.elements[7],w[10]=v.elements[8],w[11]=0):ArrayBuffer.isView(v)?w.set(new v.constructor(v.buffer,v.byteOffset,w.length)):v.toArray(w,E)}function _(v,w,E,C){let y=v.value,T=w+"_"+E;if(C[T]===void 0)return typeof y=="number"||typeof y=="boolean"?C[T]=y:ArrayBuffer.isView(y)?C[T]=y.slice():C[T]=y.clone(),!0;{let R=C[T];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return C[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function g(v){let w=v.uniforms,E=0,C=16;for(let T=0,R=w.length;T<R;T++){let I=Array.isArray(w[T])?w[T]:[w[T]];for(let L=0,z=I.length;L<z;L++){let X=I[L],F=Array.isArray(X.value)?X.value:[X.value];for(let V=0,G=F.length;V<G;V++){let Q=F[V],et=m(Q),it=E%C,rt=it%et.boundary,_t=it+rt;E+=rt,_t!==0&&C-_t<et.storage&&(E+=C-_t),X.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=E,E+=et.storage}}}let y=E%C;return y>0&&(E+=C-y),v.__size=E,v.__cache={},this}function m(v){let w={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(w.boundary=4,w.storage=4):v.isVector2?(w.boundary=8,w.storage=8):v.isVector3||v.isColor?(w.boundary=16,w.storage=12):v.isVector4?(w.boundary=16,w.storage=16):v.isMatrix3?(w.boundary=48,w.storage=48):v.isMatrix4?(w.boundary=64,w.storage=64):v.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(w.boundary=16,w.storage=v.byteLength):It("WebGLRenderer: Unsupported uniform value type.",v),w}function b(v){let w=v.target;w.removeEventListener("dispose",b);let E=r.indexOf(w.__bindingPointIndex);r.splice(E,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete o[w.id]}function S(){for(let v in i)s.deleteBuffer(i[v]);r=[],i={},o={}}return{bind:c,update:l,dispose:S}}var Jg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pn=null;function Kg(){return Pn===null&&(Pn=new Zi(Jg,16,16,ai,Cn),Pn.name="DFG_LUT",Pn.minFilter=Be,Pn.magFilter=Be,Pn.wrapS=bn,Pn.wrapT=bn,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}var _a=class{constructor(t={}){let{canvas:e=Ph(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Ke}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;let _=f,g=new Set([Uo,No,Do]),m=new Set([Ke,mn,ss,rs,Io,Lo]),b=new Uint32Array(4),S=new Int32Array(4),v=new P,w=null,E=null,C=[],y=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,L=null,z=null,X=null,F=null;this._outputColorSpace=Ie;let V=0,G=0,Q=null,et=-1,it=null,rt=new fe,_t=new fe,Yt=null,ie=new St(0),Zt=0,K=e.width,ot=e.height,nt=1,Lt=null,Ut=null,Ct=new fe(0,0,K,ot),he=new fe(0,0,K,ot),zt=!1,$t=new Ji,qt=!1,Vt=!1,me=new de,xe=new P,Se=new fe,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function Re(){return Q===null?nt:1}let N=n;function Je(M,U){return e.getContext(M,U)}try{let M={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",xn,!1),N===null){let U="webgl2";if(N=Je(U,M),N===null)throw Je(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw Nt("WebGLRenderer: "+M.message),M}let jt,A,x,O,H,q,st,ct,Y,$,lt,Tt,dt,ht,Pt,Dt,Ot,D,at,J,ut,gt,tt;function Et(){jt=new i0(N),jt.init(),ut=new Vg(N,jt),A=new Jm(N,jt,t,ut),x=new Hg(N,jt),A.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),z=N.createFramebuffer(),X=N.createFramebuffer(),F=N.createFramebuffer(),O=new o0(N),H=new Ag,q=new Gg(N,jt,x,H,A,ut,O),st=new n0(R),ct=new hf(N),gt=new Ym(N,ct),Y=new s0(N,ct,O,gt),$=new c0(N,Y,ct,gt,O),D=new a0(N,A,q),Pt=new Km(H),lt=new wg(R,st,jt,A,gt,Pt),Tt=new Yg(R,H),dt=new Cg,ht=new Ug(jt),Ot=new qm(R,st,x,$,p,c),Dt=new zg(R,$,A),tt=new Zg(N,O,A,x),at=new Zm(N,jt,O),J=new r0(N,jt,O),O.programs=lt.programs,R.capabilities=A,R.extensions=jt,R.properties=H,R.renderLists=dt,R.shadowMap=Dt,R.state=x,R.info=O}Et(),_!==Ke&&(T=new h0(_,e.width,e.height,a,i,o));let Mt=new al(R,N);this.xr=Mt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let M=jt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=jt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(M){M!==void 0&&(nt=M,this.setSize(K,ot,!1))},this.getSize=function(M){return M.set(K,ot)},this.setSize=function(M,U,W=!0){if(Mt.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}K=M,ot=U,e.width=Math.floor(M*nt),e.height=Math.floor(U*nt),W===!0&&(e.style.width=M+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(K*nt,ot*nt).floor()},this.setDrawingBufferSize=function(M,U,W){K=M,ot=U,nt=W,e.width=Math.floor(M*W),e.height=Math.floor(U*W),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(_===Ke){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(rt)},this.getViewport=function(M){return M.copy(Ct)},this.setViewport=function(M,U,W,B){M.isVector4?Ct.set(M.x,M.y,M.z,M.w):Ct.set(M,U,W,B),x.viewport(rt.copy(Ct).multiplyScalar(nt).round())},this.getScissor=function(M){return M.copy(he)},this.setScissor=function(M,U,W,B){M.isVector4?he.set(M.x,M.y,M.z,M.w):he.set(M,U,W,B),x.scissor(_t.copy(he).multiplyScalar(nt).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(M){x.setScissorTest(zt=M)},this.setOpaqueSort=function(M){Lt=M},this.setTransparentSort=function(M){Ut=M},this.getClearColor=function(M){return M.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,W=!0){let B=0;if(M){let k=!1;if(Q!==null){let mt=Q.texture.format;k=g.has(mt)}if(k){let mt=Q.texture.type,yt=m.has(mt),pt=Ot.getClearColor(),bt=Ot.getClearAlpha(),wt=pt.r,Bt=pt.g,Gt=pt.b;yt?(b[0]=wt,b[1]=Bt,b[2]=Gt,b[3]=bt,N.clearBufferuiv(N.COLOR,0,b)):(S[0]=wt,S[1]=Bt,S[2]=Gt,S[3]=bt,N.clearBufferiv(N.COLOR,0,S))}else B|=N.COLOR_BUFFER_BIT}U&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),L=M},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",xn,!1),Ot.dispose(),dt.dispose(),ht.dispose(),H.dispose(),st.dispose(),$.dispose(),gt.dispose(),tt.dispose(),lt.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",ml),Mt.removeEventListener("sessionend",gl),li.stop()};function _e(M){M.preventDefault(),Uc("WebGLRenderer: Context Lost."),I=!0}function ce(){Uc("WebGLRenderer: Context Restored."),I=!1;let M=O.autoReset,U=Dt.enabled,W=Dt.autoUpdate,B=Dt.needsUpdate,k=Dt.type;Et(),O.autoReset=M,Dt.enabled=U,Dt.autoUpdate=W,Dt.needsUpdate=B,Dt.type=k}function xn(M){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function _n(M){let U=M.target;U.removeEventListener("dispose",_n),Nu(U)}function Nu(M){Uu(M),H.remove(M)}function Uu(M){let U=H.get(M).programs;U!==void 0&&(U.forEach(function(W){lt.releaseProgram(W)}),M.isShaderMaterial&&lt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,W,B,k,mt){U===null&&(U=Ee);let yt=k.isMesh&&k.matrixWorld.determinantAffine()<0,pt=Bu(M,U,W,B,k);x.setMaterial(B,yt);let bt=W.index,wt=1;if(B.wireframe===!0){if(bt=Y.getWireframeAttribute(W),bt===void 0)return;wt=2}let Bt=W.drawRange,Gt=W.attributes.position,Rt=Bt.start*wt,ne=(Bt.start+Bt.count)*wt;mt!==null&&(Rt=Math.max(Rt,mt.start*wt),ne=Math.min(ne,(mt.start+mt.count)*wt)),bt!==null?(Rt=Math.max(Rt,0),ne=Math.min(ne,bt.count)):Gt!=null&&(Rt=Math.max(Rt,0),ne=Math.min(ne,Gt.count));let Te=ne-Rt;if(Te<0||Te===1/0)return;gt.setup(k,B,pt,W,bt);let ye,se=at;if(bt!==null&&(ye=ct.get(bt),se=J,se.setIndex(ye)),k.isMesh)B.wireframe===!0?(x.setLineWidth(B.wireframeLinewidth*Re()),se.setMode(N.LINES)):se.setMode(N.TRIANGLES);else if(k.isLine){let He=B.linewidth;He===void 0&&(He=1),x.setLineWidth(He*Re()),k.isLineSegments?se.setMode(N.LINES):k.isLineLoop?se.setMode(N.LINE_LOOP):se.setMode(N.LINE_STRIP)}else k.isPoints?se.setMode(N.POINTS):k.isSprite&&se.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))se.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let He=k._multiDrawStarts,xt=k._multiDrawCounts,$e=k._multiDrawCount,Jt=bt?ct.get(bt).bytesPerElement:1,on=H.get(B).currentProgram.getUniforms();for(let yn=0;yn<$e;yn++)on.setValue(N,"_gl_DrawID",yn),se.render(He[yn]/Jt,xt[yn])}else if(k.isInstancedMesh)se.renderInstances(Rt,Te,k.count);else if(W.isInstancedBufferGeometry){let He=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,xt=Math.min(W.instanceCount,He);se.renderInstances(Rt,Te,xt)}else se.render(Rt,Te)};function pl(M,U,W){M.transparent===!0&&M.side===Xe&&M.forceSinglePass===!1?(M.side=ze,M.needsUpdate=!0,yr(M,U,W),M.side=kn,M.needsUpdate=!0,yr(M,U,W),M.side=Xe):yr(M,U,W)}this.compile=function(M,U,W=null){W===null&&(W=M),E=ht.get(W),E.init(U),y.push(E),W.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),M!==W&&M.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),E.setupLights();let B=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let mt=k.material;if(mt)if(Array.isArray(mt))for(let yt=0;yt<mt.length;yt++){let pt=mt[yt];pl(pt,W,k),B.add(pt)}else pl(mt,W,k),B.add(mt)}),E=y.pop(),B},this.compileAsync=function(M,U,W=null){let B=this.compile(M,U,W);return new Promise(k=>{function mt(){if(B.forEach(function(yt){H.get(yt).currentProgram.isReady()&&B.delete(yt)}),B.size===0){k(M);return}setTimeout(mt,10)}jt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Ca=null;function Fu(M){Ca&&Ca(M)}function ml(){li.stop()}function gl(){li.start()}let li=new lu;li.setAnimationLoop(Fu),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(M){Ca=M,Mt.setAnimationLoop(M),M===null?li.stop():li.start()},Mt.addEventListener("sessionstart",ml),Mt.addEventListener("sessionend",gl),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(M,U);let W=Mt.enabled===!0&&Mt.isPresenting===!0,B=T!==null&&(Q===null||W)&&T.begin(R,Q);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(U),U=Mt.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,U,Q),E=ht.get(M,y.length),E.init(U),E.state.textureUnits=q.getTextureUnits(),y.push(E),me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$t.setFromProjectionMatrix(me,fn,U.reversedDepth),Vt=this.localClippingEnabled,qt=Pt.init(this.clippingPlanes,Vt),w=dt.get(M,C.length),w.init(),C.push(w),Mt.enabled===!0&&Mt.isPresenting===!0){let yt=R.xr.getDepthSensingMesh();yt!==null&&Pa(yt,U,-1/0,R.sortObjects)}Pa(M,U,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(Lt,Ut,U.reversedDepth),ae=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,ae&&Ot.addToRenderList(w,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qt===!0&&Pt.beginShadows();let k=E.state.shadowsArray;if(Dt.render(k,M,U),qt===!0&&Pt.endShadows(),(B&&T.hasRenderPass())===!1){let yt=w.opaque,pt=w.transmissive;if(E.setupLights(),U.isArrayCamera){let bt=U.cameras;if(pt.length>0)for(let wt=0,Bt=bt.length;wt<Bt;wt++){let Gt=bt[wt];_l(yt,pt,M,Gt)}ae&&Ot.render(M);for(let wt=0,Bt=bt.length;wt<Bt;wt++){let Gt=bt[wt];xl(w,M,Gt,Gt.viewport)}}else pt.length>0&&_l(yt,pt,M,U),ae&&Ot.render(M),xl(w,M,U)}Q!==null&&G===0&&(q.updateMultisampleRenderTarget(Q),q.updateRenderTargetMipmap(Q)),B&&T.end(R),M.isScene===!0&&M.onAfterRender(R,M,U),gt.resetDefaultState(),et=-1,it=null,y.pop(),y.length>0?(E=y[y.length-1],q.setTextureUnits(E.state.textureUnits),qt===!0&&Pt.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,L!==null&&L.renderEnd()};function Pa(M,U,W,B){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||$t.intersectsSprite(M)){B&&Se.setFromMatrixPosition(M.matrixWorld).applyMatrix4(me);let yt=$.update(M),pt=M.material;pt.visible&&w.push(M,yt,pt,W,Se.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||$t.intersectsObject(M))){let yt=$.update(M),pt=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Se.copy(M.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Se.copy(yt.boundingSphere.center)),Se.applyMatrix4(M.matrixWorld).applyMatrix4(me)),Array.isArray(pt)){let bt=yt.groups;for(let wt=0,Bt=bt.length;wt<Bt;wt++){let Gt=bt[wt],Rt=pt[Gt.materialIndex];Rt&&Rt.visible&&w.push(M,yt,Rt,W,Se.z,Gt)}}else pt.visible&&w.push(M,yt,pt,W,Se.z,null)}}let mt=M.children;for(let yt=0,pt=mt.length;yt<pt;yt++)Pa(mt[yt],U,W,B)}function xl(M,U,W,B){let{opaque:k,transmissive:mt,transparent:yt}=M;E.setupLightsView(W),qt===!0&&Pt.setGlobalState(R.clippingPlanes,W),B&&x.viewport(rt.copy(B)),k.length>0&&_r(k,U,W),mt.length>0&&_r(mt,U,W),yt.length>0&&_r(yt,U,W),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function _l(M,U,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){let Rt=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new en(1,1,{generateMipmaps:!0,type:Rt?Cn:Ke,minFilter:ri,samples:Math.max(4,A.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace})}let mt=E.state.transmissionRenderTarget[B.id],yt=B.viewport||rt;mt.setSize(yt.z*R.transmissionResolutionScale,yt.w*R.transmissionResolutionScale);let pt=R.getRenderTarget(),bt=R.getActiveCubeFace(),wt=R.getActiveMipmapLevel();R.setRenderTarget(mt),R.getClearColor(ie),Zt=R.getClearAlpha(),Zt<1&&R.setClearColor(16777215,.5),R.clear(),ae&&Ot.render(W);let Bt=R.toneMapping;R.toneMapping=pn;let Gt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),qt===!0&&Pt.setGlobalState(R.clippingPlanes,B),_r(M,W,B),q.updateMultisampleRenderTarget(mt),q.updateRenderTargetMipmap(mt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let ne=0,Te=U.length;ne<Te;ne++){let ye=U[ne],{object:se,geometry:He,material:xt,group:$e}=ye;if(xt.side===Xe&&se.layers.test(B.layers)){let Jt=xt.side;xt.side=ze,xt.needsUpdate=!0,yl(se,W,B,He,xt,$e),xt.side=Jt,xt.needsUpdate=!0,Rt=!0}}Rt===!0&&(q.updateMultisampleRenderTarget(mt),q.updateRenderTargetMipmap(mt))}R.setRenderTarget(pt,bt,wt),R.setClearColor(ie,Zt),Gt!==void 0&&(B.viewport=Gt),R.toneMapping=Bt}function _r(M,U,W){let B=U.isScene===!0?U.overrideMaterial:null;for(let k=0,mt=M.length;k<mt;k++){let yt=M[k],{object:pt,geometry:bt,group:wt}=yt,Bt=yt.material;Bt.allowOverride===!0&&B!==null&&(Bt=B),pt.layers.test(W.layers)&&yl(pt,U,W,bt,Bt,wt)}}function yl(M,U,W,B,k,mt){M.onBeforeRender(R,U,W,B,k,mt),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(R,U,W,B,M,mt),k.transparent===!0&&k.side===Xe&&k.forceSinglePass===!1?(k.side=ze,k.needsUpdate=!0,R.renderBufferDirect(W,U,B,k,M,mt),k.side=kn,k.needsUpdate=!0,R.renderBufferDirect(W,U,B,k,M,mt),k.side=Xe):R.renderBufferDirect(W,U,B,k,M,mt),M.onAfterRender(R,U,W,B,k,mt)}function yr(M,U,W){U.isScene!==!0&&(U=Ee);let B=H.get(M),k=E.state.lights,mt=E.state.shadowsArray,yt=k.state.version,pt=lt.getParameters(M,k.state,mt,U,W,E.state.lightProbeGridArray),bt=lt.getProgramCacheKey(pt),wt=B.programs;B.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;let Bt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;B.envMap=st.get(M.envMap||B.environment,Bt),B.envMapRotation=B.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,wt===void 0&&(M.addEventListener("dispose",_n),wt=new Map,B.programs=wt);let Gt=wt.get(bt);if(Gt!==void 0){if(B.currentProgram===Gt&&B.lightsStateVersion===yt)return Ml(M,pt),Gt}else pt.uniforms=lt.getUniforms(M),L!==null&&M.isNodeMaterial&&L.build(M,W,pt),M.onBeforeCompile(pt,R),Gt=lt.acquireProgram(pt,bt),wt.set(bt,Gt),B.uniforms=pt.uniforms;let Rt=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Rt.clippingPlanes=Pt.uniform),Ml(M,pt),B.needsLights=zu(M),B.lightsStateVersion=yt,B.needsLights&&(Rt.ambientLightColor.value=k.state.ambient,Rt.lightProbe.value=k.state.probe,Rt.directionalLights.value=k.state.directional,Rt.directionalLightShadows.value=k.state.directionalShadow,Rt.spotLights.value=k.state.spot,Rt.spotLightShadows.value=k.state.spotShadow,Rt.rectAreaLights.value=k.state.rectArea,Rt.ltc_1.value=k.state.rectAreaLTC1,Rt.ltc_2.value=k.state.rectAreaLTC2,Rt.pointLights.value=k.state.point,Rt.pointLightShadows.value=k.state.pointShadow,Rt.hemisphereLights.value=k.state.hemi,Rt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Rt.spotLightMatrix.value=k.state.spotLightMatrix,Rt.spotLightMap.value=k.state.spotLightMap,Rt.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=E.state.lightProbeGridArray.length>0,B.currentProgram=Gt,B.uniformsList=null,Gt}function vl(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=as.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Ml(M,U){let W=H.get(M);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Ou(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let W=0,B=M.length;W<B;W++){let k=M[W];if(k.texture!==null&&k.boundingBox.containsPoint(v))return k}return null}function Bu(M,U,W,B,k){U.isScene!==!0&&(U=Ee),q.resetTextureUnits();let mt=U.fog,yt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,pt=Q===null?R.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Xt.workingColorSpace,bt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,wt=st.get(B.envMap||yt,bt),Bt=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Gt=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Rt=!!W.morphAttributes.position,ne=!!W.morphAttributes.normal,Te=!!W.morphAttributes.color,ye=pn;B.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ye=R.toneMapping);let se=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,He=se!==void 0?se.length:0,xt=H.get(B),$e=E.state.lights;if(qt===!0&&(Vt===!0||M!==it)){let le=M===it&&B.id===et;Pt.setState(B,M,le)}let Jt=!1;B.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==$e.state.version||xt.outputColorSpace!==pt||k.isBatchedMesh&&xt.batching===!1||!k.isBatchedMesh&&xt.batching===!0||k.isBatchedMesh&&xt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&xt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&xt.instancing===!1||!k.isInstancedMesh&&xt.instancing===!0||k.isSkinnedMesh&&xt.skinning===!1||!k.isSkinnedMesh&&xt.skinning===!0||k.isInstancedMesh&&xt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&xt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&xt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&xt.instancingMorph===!1&&k.morphTexture!==null||xt.envMap!==wt||B.fog===!0&&xt.fog!==mt||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==Pt.numPlanes||xt.numIntersection!==Pt.numIntersection)||xt.vertexAlphas!==Bt||xt.vertexTangents!==Gt||xt.morphTargets!==Rt||xt.morphNormals!==ne||xt.morphColors!==Te||xt.toneMapping!==ye||xt.morphTargetsCount!==He||!!xt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Jt=!0):(Jt=!0,xt.__version=B.version);let on=xt.currentProgram;Jt===!0&&(on=yr(B,U,k),L&&B.isNodeMaterial&&L.onUpdateProgram(B,on,xt));let yn=!1,Vn=!1,wi=!1,re=on.getUniforms(),we=xt.uniforms;if(x.useProgram(on.program)&&(yn=!0,Vn=!0,wi=!0),B.id!==et&&(et=B.id,Vn=!0),xt.needsLights){let le=Ou(E.state.lightProbeGridArray,k);xt.lightProbeGrid!==le&&(xt.lightProbeGrid=le,Vn=!0)}if(yn||it!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),re.setValue(N,"projectionMatrix",M.projectionMatrix),re.setValue(N,"viewMatrix",M.matrixWorldInverse);let Xn=re.map.cameraPosition;Xn!==void 0&&Xn.setValue(N,xe.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&re.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&re.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),it!==M&&(it=M,Vn=!0,wi=!0)}if(xt.needsLights&&($e.state.directionalShadowMap.length>0&&re.setValue(N,"directionalShadowMap",$e.state.directionalShadowMap,q),$e.state.spotShadowMap.length>0&&re.setValue(N,"spotShadowMap",$e.state.spotShadowMap,q),$e.state.pointShadowMap.length>0&&re.setValue(N,"pointShadowMap",$e.state.pointShadowMap,q)),k.isSkinnedMesh){re.setOptional(N,k,"bindMatrix"),re.setOptional(N,k,"bindMatrixInverse");let le=k.skeleton;le&&(le.boneTexture===null&&le.computeBoneTexture(),re.setValue(N,"boneTexture",le.boneTexture,q))}k.isBatchedMesh&&(re.setOptional(N,k,"batchingTexture"),re.setValue(N,"batchingTexture",k._matricesTexture,q),re.setOptional(N,k,"batchingIdTexture"),re.setValue(N,"batchingIdTexture",k._indirectTexture,q),re.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&re.setValue(N,"batchingColorTexture",k._colorsTexture,q));let Wn=W.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&D.update(k,W,on),(Vn||xt.receiveShadow!==k.receiveShadow)&&(xt.receiveShadow=k.receiveShadow,re.setValue(N,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(we.envMapIntensity.value=U.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=Kg()),Vn){if(re.setValue(N,"toneMappingExposure",R.toneMappingExposure),xt.needsLights&&ku(we,wi),mt&&B.fog===!0&&Tt.refreshFogUniforms(we,mt),Tt.refreshMaterialUniforms(we,B,nt,ot,E.state.transmissionRenderTarget[M.id]),xt.needsLights&&xt.lightProbeGrid){let le=xt.lightProbeGrid;we.probesSH.value=le.texture,we.probesMin.value.copy(le.boundingBox.min),we.probesMax.value.copy(le.boundingBox.max),we.probesResolution.value.copy(le.resolution)}as.upload(N,vl(xt),we,q)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(as.upload(N,vl(xt),we,q),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&re.setValue(N,"center",k.center),re.setValue(N,"modelViewMatrix",k.modelViewMatrix),re.setValue(N,"normalMatrix",k.normalMatrix),re.setValue(N,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let le=B.uniformsGroups;for(let Xn=0,Ai=le.length;Xn<Ai;Xn++){let bl=le[Xn];tt.update(bl,on),tt.bind(bl,on)}}return on}function ku(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function zu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(M,U,W){let B=H.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),H.get(M.texture).__webglTexture=U,H.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let W=H.get(M);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,W=0){Q=M,V=U,G=W;let B=null,k=!1,mt=!1;if(M){let pt=H.get(M);if(pt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(N.FRAMEBUFFER,pt.__webglFramebuffer),rt.copy(M.viewport),_t.copy(M.scissor),Yt=M.scissorTest,x.viewport(rt),x.scissor(_t),x.setScissorTest(Yt),et=-1;return}else if(pt.__webglFramebuffer===void 0)q.setupRenderTarget(M);else if(pt.__hasExternalTextures)q.rebindTextures(M,H.get(M.texture).__webglTexture,H.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Bt=M.depthTexture;if(pt.__boundDepthTexture!==Bt){if(Bt!==null&&H.has(Bt)&&(M.width!==Bt.image.width||M.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(M)}}let bt=M.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(mt=!0);let wt=H.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(wt[U])?B=wt[U][W]:B=wt[U],k=!0):M.samples>0&&q.useMultisampledRTT(M)===!1?B=H.get(M).__webglMultisampledFramebuffer:Array.isArray(wt)?B=wt[W]:B=wt,rt.copy(M.viewport),_t.copy(M.scissor),Yt=M.scissorTest}else rt.copy(Ct).multiplyScalar(nt).floor(),_t.copy(he).multiplyScalar(nt).floor(),Yt=zt;if(W!==0&&(B=z),x.bindFramebuffer(N.FRAMEBUFFER,B)&&x.drawBuffers(M,B),x.viewport(rt),x.scissor(_t),x.setScissorTest(Yt),k){let pt=H.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,pt.__webglTexture,W)}else if(mt){let pt=U;for(let bt=0;bt<M.textures.length;bt++){let wt=H.get(M.textures[bt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+bt,wt.__webglTexture,W,pt)}}else if(M!==null&&W!==0){let pt=H.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pt.__webglTexture,W)}et=-1},this.readRenderTargetPixels=function(M,U,W,B,k,mt,yt,pt=0){if(!(M&&M.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&yt!==void 0&&(bt=bt[yt]),bt){x.bindFramebuffer(N.FRAMEBUFFER,bt);try{let wt=M.textures[pt],Bt=wt.format,Gt=wt.type;if(M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pt),!A.textureFormatReadable(Bt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(Gt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-B&&W>=0&&W<=M.height-k&&N.readPixels(U,W,B,k,ut.convert(Bt),ut.convert(Gt),mt)}finally{let wt=Q!==null?H.get(Q).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(M,U,W,B,k,mt,yt,pt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&yt!==void 0&&(bt=bt[yt]),bt)if(U>=0&&U<=M.width-B&&W>=0&&W<=M.height-k){x.bindFramebuffer(N.FRAMEBUFFER,bt);let wt=M.textures[pt],Bt=wt.format,Gt=wt.type;if(M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pt),!A.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Rt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Rt),N.bufferData(N.PIXEL_PACK_BUFFER,mt.byteLength,N.STREAM_READ),N.readPixels(U,W,B,k,ut.convert(Bt),ut.convert(Gt),0);let ne=Q!==null?H.get(Q).__webglFramebuffer:null;x.bindFramebuffer(N.FRAMEBUFFER,ne);let Te=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Lh(N,Te,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Rt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,mt),N.deleteBuffer(Rt),N.deleteSync(Te),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,W=0){let B=Math.pow(2,-W),k=Math.floor(M.image.width*B),mt=Math.floor(M.image.height*B),yt=U!==null?U.x:0,pt=U!==null?U.y:0;q.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,yt,pt,k,mt),x.unbindTexture()},this.copyTextureToTexture=function(M,U,W=null,B=null,k=0,mt=0){let yt,pt,bt,wt,Bt,Gt,Rt,ne,Te,ye=M.isCompressedTexture?M.mipmaps[mt]:M.image;if(W!==null)yt=W.max.x-W.min.x,pt=W.max.y-W.min.y,bt=W.isBox3?W.max.z-W.min.z:1,wt=W.min.x,Bt=W.min.y,Gt=W.isBox3?W.min.z:0;else{let we=Math.pow(2,-k);yt=Math.floor(ye.width*we),pt=Math.floor(ye.height*we),M.isDataArrayTexture?bt=ye.depth:M.isData3DTexture?bt=Math.floor(ye.depth*we):bt=1,wt=0,Bt=0,Gt=0}B!==null?(Rt=B.x,ne=B.y,Te=B.z):(Rt=0,ne=0,Te=0);let se=ut.convert(U.format),He=ut.convert(U.type),xt;U.isData3DTexture?(q.setTexture3D(U,0),xt=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(q.setTexture2DArray(U,0),xt=N.TEXTURE_2D_ARRAY):(q.setTexture2D(U,0),xt=N.TEXTURE_2D),x.activeTexture(N.TEXTURE0),x.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let $e=x.getParameter(N.UNPACK_ROW_LENGTH),Jt=x.getParameter(N.UNPACK_IMAGE_HEIGHT),on=x.getParameter(N.UNPACK_SKIP_PIXELS),yn=x.getParameter(N.UNPACK_SKIP_ROWS),Vn=x.getParameter(N.UNPACK_SKIP_IMAGES);x.pixelStorei(N.UNPACK_ROW_LENGTH,ye.width),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ye.height),x.pixelStorei(N.UNPACK_SKIP_PIXELS,wt),x.pixelStorei(N.UNPACK_SKIP_ROWS,Bt),x.pixelStorei(N.UNPACK_SKIP_IMAGES,Gt);let wi=M.isDataArrayTexture||M.isData3DTexture,re=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let we=H.get(M),Wn=H.get(U),le=H.get(we.__renderTarget),Xn=H.get(Wn.__renderTarget);x.bindFramebuffer(N.READ_FRAMEBUFFER,le.__webglFramebuffer),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let Ai=0;Ai<bt;Ai++)wi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,H.get(M).__webglTexture,k,Gt+Ai),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,H.get(U).__webglTexture,mt,Te+Ai)),N.blitFramebuffer(wt,Bt,yt,pt,Rt,ne,yt,pt,N.DEPTH_BUFFER_BIT,N.NEAREST);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||H.has(M)){let we=H.get(M),Wn=H.get(U);x.bindFramebuffer(N.READ_FRAMEBUFFER,X),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,F);for(let le=0;le<bt;le++)wi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,we.__webglTexture,k,Gt+le):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,we.__webglTexture,k),re?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Wn.__webglTexture,mt,Te+le):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Wn.__webglTexture,mt),k!==0?N.blitFramebuffer(wt,Bt,yt,pt,Rt,ne,yt,pt,N.COLOR_BUFFER_BIT,N.NEAREST):re?N.copyTexSubImage3D(xt,mt,Rt,ne,Te+le,wt,Bt,yt,pt):N.copyTexSubImage2D(xt,mt,Rt,ne,wt,Bt,yt,pt);x.bindFramebuffer(N.READ_FRAMEBUFFER,null),x.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else re?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(xt,mt,Rt,ne,Te,yt,pt,bt,se,He,ye.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(xt,mt,Rt,ne,Te,yt,pt,bt,se,ye.data):N.texSubImage3D(xt,mt,Rt,ne,Te,yt,pt,bt,se,He,ye):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,mt,Rt,ne,yt,pt,se,He,ye.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,mt,Rt,ne,ye.width,ye.height,se,ye.data):N.texSubImage2D(N.TEXTURE_2D,mt,Rt,ne,yt,pt,se,He,ye);x.pixelStorei(N.UNPACK_ROW_LENGTH,$e),x.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Jt),x.pixelStorei(N.UNPACK_SKIP_PIXELS,on),x.pixelStorei(N.UNPACK_SKIP_ROWS,yn),x.pixelStorei(N.UNPACK_SKIP_IMAGES,Vn),mt===0&&U.generateMipmaps&&N.generateMipmap(xt),x.unbindTexture()},this.initRenderTarget=function(M){H.get(M).__webglFramebuffer===void 0&&q.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?q.setTextureCube(M,0):M.isData3DTexture?q.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?q.setTexture2DArray(M,0):q.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){V=0,G=0,Q=null,x.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}};var gu=[[0,0,0],[0,0,-80],[25,2,-140],[75,4,-170],[130,2,-140],[150,0,-80],[135,-2,-20],[95,-3,25],[120,-1,75],[160,2,120],[140,4,180],[80,2,195],[30,0,160],[-35,-1,180],[-95,1,150],[-115,2,105],[-85,1,75],[-45,0,65],[-15,0,45]],xu={meadow:{id:"meadow",shortcut:[142,180],name:"Meadow Loop",points:gu,theme:{skyTop:3116287,skyMid:8177919,skyLow:14218239,fog:14218239,ground:6082373,trees:[4114766,3126595,8051018,5427578,16751821,16765286],trunk:10115884,ambient:.85,sun:1.7,sunColor:16774368,hemiSky:12575743,clouds:16777215,curbA:"#ef4444",curbB:"#ffffff",padColor:"#ff7a00"}},sunset:{id:"sunset",shortcut:[142,180],name:"Sunset Bay",points:gu.map(([s,t,e],n)=>[-s,t*1.6+(n%3===0?1.5:0),e]),theme:{skyTop:4930216,skyMid:16747100,skyLow:16766366,fog:16763296,ground:15781766,trees:[3064998,2533018,8115081,16752451],trunk:10512186,ambient:.8,sun:1.6,sunColor:16757370,hemiSky:16761504,clouds:16769232,curbA:"#ff7a00",curbB:"#fff3d6",padColor:"#ff3b8d"}},frosty:{id:"frosty",shortcut:[216,262],name:"Frosty Peaks",points:[[0,0,0],[0,0,-80],[-20,3,-130],[-70,6,-150],[-120,5,-120],[-130,3,-60],[-90,1,-20],[-60,0,30],[-100,2,80],[-80,5,140],[-20,7,160],[45,5,150],[95,3,120],[100,1,75],[60,0,55],[20,0,40]],theme:{skyTop:6990312,skyMid:12575743,skyLow:15924223,fog:15398655,ground:16054527,trees:[15267071,10475720,8370392,13625599],trunk:8018500,ambient:.95,sun:1.4,sunColor:15398143,hemiSky:16777215,clouds:16777215,curbA:"#3b82f6",curbB:"#ffffff",padColor:"#00b4ff"}},neon:{id:"neon",shortcut:[228,262],name:"Neon Night",points:[[0,0,0],[0,0,-80],[10,2,-150],[60,4,-190],[120,3,-170],[140,1,-110],[110,0,-60],[130,-1,0],[180,1,40],[170,3,110],[110,4,140],[50,2,110],[20,0,140],[-40,1,170],[-110,3,155],[-165,4,105],[-130,2,40],[-90,1,55],[-45,0,60],[-12,0,45]],theme:{skyTop:460575,skyMid:2366046,skyLow:7024547,fog:2759518,ground:1911642,trees:[16732120,2746367,10906623,6094749],trunk:3813227,glow:!0,ambient:.55,sun:.9,sunColor:12167423,hemiSky:7035903,clouds:4865423,curbA:"#ff2fd0",curbB:"#2a2a5a",padColor:"#29e7ff"}}};function Ma(s){return xu[s||"meadow"]||xu.meadow}function _u(){let s=document.createElement("canvas");s.width=512,s.height=128;let t=s.getContext("2d"),e=4,n=16,i=s.width/n,o=s.height/e;for(let a=0;a<e;a++)for(let c=0;c<n;c++)t.fillStyle=(a+c)%2===0?"#ffffff":"#18181b",t.fillRect(c*i,a*o,i,o);t.fillStyle="#eab308",t.fillRect(0,0,s.width,6),t.fillRect(0,s.height-6,s.width,6);let r=new Me(s);return r.wrapS=tn,r.wrapT=tn,r}function yu(){let s=document.createElement("canvas");s.width=512,s.height=512;let t=s.getContext("2d");t.fillStyle="#41495e",t.fillRect(0,0,512,512);for(let o=0;o<6e3;o++){let r=Math.random()*512,a=Math.random()*512,c=Math.floor(62+Math.random()*12);t.fillStyle=`rgb(${c},${c+7},${c+21})`,t.fillRect(r,a,2,2)}t.fillStyle="#f8fafc";let e=8,n=512/e;for(let o=0;o<e;o++)t.fillRect(250,o*n+12,12,n-24);t.fillStyle="#eab308",t.fillRect(24,0,8,512),t.fillRect(480,0,8,512);let i=new Me(s);return i.wrapS=tn,i.wrapT=tn,i.repeat.set(1,40),i}function vu(s="#dc2626",t="#ffffff"){let e=document.createElement("canvas");e.width=128,e.height=256;let n=e.getContext("2d"),i=8,o=e.height/i;for(let a=0;a<i;a++)n.fillStyle=a%2===0?s:t,n.fillRect(0,a*o,e.width,o);let r=new Me(e);return r.wrapS=tn,r.wrapT=tn,r.repeat.set(1,22),r}function mr(s,t,e){let n=document.createElement("canvas");n.width=512,n.height=128;let i=n.getContext("2d");return i.fillStyle=t,i.fillRect(0,0,512,128),i.fillStyle=e,i.fillRect(0,0,512,8),i.fillRect(0,120,512,8),i.font="bold 44px sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillStyle=e,i.fillText(s,256,64),new Me(n)}function Mu(){let s=document.createElement("canvas");s.width=256,s.height=256;let t=s.getContext("2d");t.fillStyle="#18181b",t.fillRect(0,0,256,256),t.beginPath(),t.arc(128,128,90,0,Math.PI*2),t.fillStyle="#3f3f46",t.fill(),t.beginPath(),t.arc(128,128,70,0,Math.PI*2),t.fillStyle="#e4e4e7",t.fill(),t.strokeStyle="#18181b",t.lineWidth=14;for(let e=0;e<5;e++){let n=e*Math.PI*2/5;t.beginPath(),t.moveTo(128,128),t.lineTo(128+Math.cos(n)*70,128+Math.sin(n)*70),t.stroke()}return t.beginPath(),t.arc(128,128,22,0,Math.PI*2),t.fillStyle="#eab308",t.fill(),new Me(s)}function bu(s,t){let e=document.createElement("canvas");e.width=128,e.height=128;let n=e.getContext("2d");return n.fillStyle="#ffffff",n.beginPath(),n.arc(64,64,56,0,Math.PI*2),n.fill(),n.lineWidth=6,n.strokeStyle=t,n.stroke(),n.fillStyle="#09090b",n.font="900 64px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(String(s),64,68),new Me(e)}var ba=class{constructor(t,e){Z(this,"scene");Z(this,"spline");Z(this,"totalLength",0);Z(this,"trackPoints",[]);Z(this,"trackMesh",null);Z(this,"sceneryGroup");Z(this,"startingLightsGroup");Z(this,"lightMeshes",[]);Z(this,"animatedProps",[]);Z(this,"roadWidth",18);Z(this,"course");Z(this,"shortcut",null);this.scene=t,this.course=Ma(e),this.sceneryGroup=new Kt,this.startingLightsGroup=new Kt,this.scene.add(this.sceneryGroup),this.scene.add(this.startingLightsGroup);let n=this.course.points.map(([i,o,r])=>new P(i,o,r));this.spline=new Qi(n,!0,"centripetal",.4),this.totalLength=this.spline.getLength(),this.sampleTrackPoints(300),this.buildRoadMesh(),this.findShortcut(),this.buildTerrainAndHills(),this.buildStartGantry(),this.buildScenery(),this.buildBarriers(),this.buildShortcut()}sampleTrackPoints(t){this.trackPoints=[];let e=0,n=this.spline.getPointAt(0);for(let i=0;i<t;i++){let o=i/t,r=this.spline.getPointAt(o),a=this.spline.getTangentAt(o).normalize(),c=new P(0,1,0),l=new P().crossVectors(a,c).normalize();i>0&&(e+=n.distanceTo(r)),n=r,this.trackPoints.push({x:r.x,y:r.y,z:r.z,tangentX:a.x,tangentY:a.y,tangentZ:a.z,normalX:l.x,normalY:l.y,normalZ:l.z,width:this.roadWidth,bank:0,distance:e})}}buildRoadMesh(){let e=this.roadWidth/2,n=new pe,i=[],o=[],r=[],a=[],c=[],l=[],h=[],d=[],u=[],f=2.2;for(let R=0;R<=300;R++){let I=R%300/300,L=this.spline.getPointAt(I),z=this.spline.getTangentAt(I).normalize(),X=new P(-z.z,0,z.x).normalize(),F=L.clone().addScaledVector(X,-e),V=L.clone().addScaledVector(X,e);i.push(F.x,F.y+.05,F.z),i.push(V.x,V.y+.05,V.z);let G=R/300*60;o.push(0,G),o.push(1,G);let Q=F.clone().addScaledVector(X,-f);a.push(Q.x,Q.y+.12,Q.z),a.push(F.x,F.y+.06,F.z),c.push(0,G*2),c.push(1,G*2);let et=V.clone().addScaledVector(X,f);if(h.push(V.x,V.y+.06,V.z),h.push(et.x,et.y+.12,et.z),d.push(0,G*2),d.push(1,G*2),R<300){let it=R*2,rt=(R+1)*2;r.push(it,it+1,rt),r.push(it+1,rt+1,rt),l.push(it,it+1,rt),l.push(it+1,rt+1,rt),u.push(it,it+1,rt),u.push(it+1,rt+1,rt)}}n.setAttribute("position",new kt(i,3)),n.setAttribute("uv",new kt(o,2)),n.setIndex(r),n.computeVertexNormals();let p=yu(),_=new At({map:p,roughness:.85,metalness:.1});this.trackMesh=new j(n,_),this.trackMesh.receiveShadow=!0,this.sceneryGroup.add(this.trackMesh);let g=vu(this.course.theme.curbA,this.course.theme.curbB),m=new At({map:g,roughness:.7}),b=new pe;b.setAttribute("position",new kt(a,3)),b.setAttribute("uv",new kt(c,2)),b.setIndex(l),b.computeVertexNormals();let S=new j(b,m);S.receiveShadow=!0,this.sceneryGroup.add(S);let v=new pe;v.setAttribute("position",new kt(h,3)),v.setAttribute("uv",new kt(d,2)),v.setIndex(u),v.computeVertexNormals();let w=new j(v,m);w.receiveShadow=!0,this.sceneryGroup.add(w);let E=new Le(this.roadWidth,4),C=_u(),y=new At({map:C,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2}),T=new j(E,y);T.rotation.x=-Math.PI/2,T.position.set(0,.08,0),this.sceneryGroup.add(T)}buildTerrainAndHills(){let t=new Le(600,600,128,128);t.rotateX(-Math.PI/2);let e=t.attributes.position;for(let o=0;o<e.count;o++){let r=e.getX(o),a=e.getZ(o),c=this.getTerrainElevation(r,a),l=this.getClosestTrackPointInfo(r,a);l.dist<this.roadWidth*.5+6&&(c=Math.min(c,l.y-.35));let h=this.shortcut?this.segDist(r,a,this.shortcut.ax,this.shortcut.az,this.shortcut.bx,this.shortcut.bz):null;h&&h.d<this.shortcut.w/2+6&&(c=Math.min(c,this.shortcut.ay+(this.shortcut.by-this.shortcut.ay)*h.t-.3)),e.setY(o,c)}t.computeVertexNormals();let n=new At({color:5078031,roughness:.9,flatShading:!0}),i=new j(t,n);i.receiveShadow=!0,this.sceneryGroup.add(i)}findShortcut(){let t=this.course.shortcut;if(!t)return;let e=this.trackPoints[t[0]],n=this.trackPoints[t[1]];!e||!n||(this.shortcut={ax:e.x,ay:e.y,az:e.z,bx:n.x,by:n.y,bz:n.z,w:11,ia:t[0],ib:t[1]})}segDist(t,e,n,i,o,r){let a=o-n,c=r-i,l=a*a+c*c||1,h=Math.max(0,Math.min(1,((t-n)*a+(e-i)*c)/l)),d=n+a*h,u=i+c*h;return{d:Math.hypot(t-d,e-u),t:h}}onShortcut(t,e){let n=this.shortcut;if(!n)return null;let i=this.segDist(t,e,n.ax,n.az,n.bx,n.bz);return i.d>n.w/2+.8?null:n.ay+(n.by-n.ay)*i.t}buildShortcut(){let t=this.shortcut;if(!t)return;let e=document.createElement("canvas");e.width=64,e.height=256;let n=e.getContext("2d");n.fillStyle="#c98b4f",n.fillRect(0,0,64,256),n.fillStyle="#ffffff",n.fillRect(0,0,4,256),n.fillRect(60,0,4,256);for(let d=0;d<260;d++)n.fillStyle=Math.random()<.5?"rgba(90,55,25,.35)":"rgba(230,190,140,.35)",n.fillRect(Math.random()*64,Math.random()*256,3,3);n.fillStyle="rgba(70,40,20,.35)",n.fillRect(14,0,6,256),n.fillRect(44,0,6,256);let i=new Me(e);i.wrapT=tn;let o=Math.hypot(t.bx-t.ax,t.bz-t.az);i.repeat.set(1,o/10);let r=new Le(t.w,o,1,8),a=new j(r,new At({map:i,roughness:1,polygonOffset:!0,polygonOffsetFactor:1}));a.rotation.x=-Math.PI/2,a.rotation.z=-Math.atan2(t.bx-t.ax,t.bz-t.az)+Math.PI,a.position.set((t.ax+t.bx)/2,(t.ay+t.by)/2-.05,(t.az+t.bz)/2),this.sceneryGroup.add(a);let c=new At({color:16742912}),l=(t.bx-t.ax)/o,h=(t.bz-t.az)/o;for(let d=12;d<o-12;d+=9)for(let u of[-1,1]){let f=new j(new We(.45,1.2,8),c);f.position.set(t.ax+l*d+-h*u*(t.w/2+.6),t.ay+(t.by-t.ay)*(d/o)+.5,t.az+h*d+l*u*(t.w/2+.6)),this.sceneryGroup.add(f)}for(let[d,u,f,p,_]of[[t.ax,t.ay,t.az,t.bx,t.bz],[t.bx,t.by,t.bz,t.ax,t.az]]){let g=document.createElement("canvas");g.width=256,g.height=96;let m=g.getContext("2d");m.fillStyle="#ffc83d",m.fillRect(0,0,256,96),m.fillStyle="#1b1b3a",m.font="bold 44px sans-serif",m.textAlign="center",m.textBaseline="middle",m.fillText("SHORTCUT",128,50);let b=new Me(g);b.colorSpace=Ie;let S=new j(new Le(4.2,1.6),new At({map:b,side:Xe})),v=p-d,w=_-f,E=Math.hypot(v,w)||1,C=this.roadWidth/2+7,y=t.w/2+2.2,T=d+v/E*C+-w/E*y,R=f+w/E*C+v/E*y;S.position.set(T,u+2.6,R),S.lookAt(d,u+2.6,f);let I=new j(new be(.12,.12,2.6,6),new At({color:7031339}));I.position.set(T,u+1.3,R),this.sceneryGroup.add(S,I)}}getClosestTrackPointInfo(t,e){let n=9999,i=0;for(let o=0;o<this.trackPoints.length;o+=4){let r=this.trackPoints[o],a=r.x-t,c=r.z-e,l=Math.sqrt(a*a+c*c);l<n&&(n=l,i=r.y)}return{dist:n,y:i}}getTerrainElevation(t,e){let{dist:n,y:i}=this.getClosestTrackPointInfo(t,e);if(n>25){let o=Math.sin(t*.02)*Math.cos(e*.02)*14+Math.sin(t*.05+e*.04)*6,a=Math.max(0,Math.min(1,(n-25)/(60-25))),c=i-.05,l=Math.max(-2,o-2);return c*(1-a)+l*a}else return i-.05}buildStartGantry(){let t=new Kt;t.position.set(0,0,0);let e=new At({color:3359061,roughness:.4,metalness:.7}),n=new At({map:mr("KARIO MART","#dc2626","#ffffff")}),i=this.roadWidth/2+2.5,o=9,r=new te(.8,o,.8),a=new j(r,e);a.position.set(-i,o/2,0),a.castShadow=!0,t.add(a);let c=new j(r,e);c.position.set(i,o/2,0),c.castShadow=!0,t.add(c);let l=new te(this.roadWidth+6,1.4,1.2),h=new j(l,e);h.position.set(0,o,0),h.castShadow=!0,t.add(h);let d=new Le(this.roadWidth-2,2.2),u=new j(d,n);u.position.set(0,o+.3,-.62),u.rotation.y=Math.PI,t.add(u);let f=new j(d,n);f.position.set(0,o+.3,.62),t.add(f),this.lightMeshes=[];let p=new te(4.8,1.6,.6),_=new j(p,new At({color:1579035}));_.position.set(0,o-1.2,-.2),t.add(_);let g=[15680580,15680580,15680580];for(let m=0;m<3;m++){let b=new oe(.4,16,16),S=new At({color:2565930,emissive:0,roughness:.2}),v=new j(b,S);v.position.set((m-1)*1.4,o-1.2,-.5),t.add(v),this.lightMeshes.push(v)}this.startingLightsGroup.add(t)}setStartingLights(t){for(let e=0;e<3;e++){let n=this.lightMeshes[e];if(!n)continue;let i=n.material;t>=1&&t<=3?e<t?(i.color.setHex(15680580),i.emissive.setHex(15680580)):(i.color.setHex(2565930),i.emissive.setHex(0)):t===4?(i.color.setHex(2278750),i.emissive.setHex(2278750)):(i.color.setHex(2565930),i.emissive.setHex(0))}}buildScenery(){let t=new At({color:7877903,roughness:.9}),e=new At({color:1409085,roughness:.8,flatShading:!0}),n=new At({color:1467700,roughness:.8,flatShading:!0}),i=(o,r,a,c)=>{let l=new Kt;l.position.set(o,r,a),l.scale.set(c,c,c);let h=new be(.3,.45,2.5,6),d=new j(h,t);d.position.y=1.25,d.castShadow=!0,l.add(d);let u=new j(new We(2.2,3.2,6),e);u.position.y=3.5,u.castShadow=!0,l.add(u);let f=new j(new We(1.7,2.8,6),n);f.position.y=5.2,f.castShadow=!0,l.add(f);let p=new j(new We(1.2,2.2,6),e);return p.position.y=6.6,p.castShadow=!0,l.add(p),l};for(let o=0;o<90;o++){let r=o/90*Math.PI*2,a=60+o%7*22,c=Math.cos(r)*a+(Math.random()-.5)*30,l=Math.sin(r)*a+(Math.random()-.5)*30,{dist:h}=this.getClosestTrackPointInfo(c,l);if(h>this.roadWidth/2+6){let d=.8+Math.random()*.7,u=this.getTerrainElevation(c,l),f=i(c,u,l,d);this.sceneryGroup.add(f)}}this.buildGrandstand(-22,this.getTerrainElevation(-22,-45),-45,Math.PI/2),this.buildGrandstand(22,this.getTerrainElevation(22,-45),-45,-Math.PI/2),this.buildHotAirBalloon(60,45,-50,15680580,16436245),this.buildHotAirBalloon(-80,55,60,3900150,16777215);for(let[o,r]of[[120,60],[-110,-100],[200,-150],[-200,120],[60,-240]])this.getClosestTrackPointInfo(o,r).dist>this.roadWidth/2+14&&this.buildWindTurbine(o,this.getTerrainElevation(o,r),r)}buildGrandstand(t,e,n,i){let o=new Kt;o.position.set(t,e,n),o.rotation.y=i;let r=new At({color:4674921,roughness:.5}),a=new At({color:14427686,roughness:.4}),c=new At({color:3900150,roughness:.6}),l=5;for(let _=0;_<l;_++){let g=new te(24,.8,1.6),m=new j(g,r);m.position.set(0,(_+1)*.8,_*1.4),m.castShadow=!0,o.add(m);for(let b=0;b<12;b++){let S=new te(.7,.9,.6),v=[15680580,3900150,15381256,1096065,11032055,16777215],w=new At({color:v[Math.floor(Math.random()*v.length)]}),E=new j(S,w);E.position.set(-10+b*1.8+(Math.random()-.5)*.3,(_+1)*.8+.7,_*1.4),o.add(E)}}let h=new te(26,.4,9),d=new j(h,a);d.position.set(0,8,3),d.rotation.x=.15,d.castShadow=!0,o.add(d);let u=new be(.2,.2,8,8),f=new j(u,r);f.position.set(-11,4,-1),o.add(f);let p=new j(u,r);p.position.set(11,4,-1),o.add(p),this.sceneryGroup.add(o)}buildHotAirBalloon(t,e,n,i,o){let r=new Kt;r.position.set(t,e,n);let a=new oe(7,14,14);a.scale(1,1.4,1);let c=new At({color:i,roughness:.4}),l=new j(a,c);l.castShadow=!0,r.add(l);let h=new te(2,1.6,2),d=new At({color:7877903,roughness:.9}),u=new j(h,d);u.position.set(0,-11,0),r.add(u),this.sceneryGroup.add(r);let f=e;this.animatedProps.push({mesh:r,update:p=>{r.position.y=f+Math.sin(p*.8+t)*2.5,r.rotation.y=p*.1}})}buildWindTurbine(t,e,n){let i=new Kt;i.position.set(t,e,n);let o=new At({color:15857145,roughness:.3}),r=new be(.6,1.4,28,10),a=new j(r,o);a.position.y=14,a.castShadow=!0,i.add(a);let c=new oe(.9,10,10),l=new j(c,o);l.position.set(0,28,.8),i.add(l);let h=new Kt;h.position.set(0,28,1.2);for(let d=0;d<3;d++){let u=new te(.5,11,.1),f=new j(u,o);f.position.y=5.5;let p=new Kt;p.rotation.z=d*Math.PI*2/3,p.add(f),h.add(p)}i.add(h),this.sceneryGroup.add(i),this.animatedProps.push({mesh:h,update:(d,u)=>{h.rotation.z+=u*1.8}})}buildBarriers(){let t=[mr("\u26A1 TURBO CHARGE \u26A1","#1d4ed8","#ffffff"),mr("\u{1F525} APEX DRIFT \u{1F525}","#ea580c","#ffffff"),mr("\u{1F3C6} CHAMPIONSHIP \u{1F3C6}","#eab308","#000000")],e=[25,45,80,120,160,210,260],n=this.roadWidth/2+1.2;e.forEach((i,o)=>{if(i>=this.trackPoints.length)return;let r=this.trackPoints[i],a=t[o%t.length],c=new At({map:a,roughness:.5}),l=new te(.4,1.8,8),h=new j(l,c);h.position.set(r.x+r.normalX*n,r.y+.9,r.z+r.normalZ*n),!(this.shortcut&&this.segDist(h.position.x,h.position.z,this.shortcut.ax,this.shortcut.az,this.shortcut.bx,this.shortcut.bz).d<this.shortcut.w+4)&&(h.lookAt(h.position.x+r.tangentX,h.position.y,h.position.z+r.tangentZ),h.castShadow=!0,this.sceneryGroup.add(h))})}getClosestTrackPoint(t,e){let n=1/0,i=0;for(let r=0;r<this.trackPoints.length;r++){let a=this.trackPoints[r],c=a.x-t,l=a.z-e,h=c*c+l*l;h<n&&(n=h,i=r)}return{point:this.trackPoints[i],index:i,distanceToCenter:Math.sqrt(n)}}update(t,e){for(let n of this.animatedProps)n.update(t,e)}};function Su(s,t){let e=t.topper||"cap",n=["cap","crown","bow"].includes(e),i=e==="bear"?9523502:e==="horns"?4769884:e==="bunny"?16773867:t.color,o=p=>new At({color:p,roughness:.48}),r=o(n?16764830:i),a=o(t.color),c=o(16775401),l=o(2106173),h=o(e==="cap"?6500893:16104260),d=o(16764728),u=(p,_,g,m,b,S,v,w)=>{let E=new j(new oe(1,16,12),_);return E.position.set(g,m,b),E.scale.set(S,v,w),E.castShadow=!0,p.add(E),E};if(u(s,a,0,.65,-.16,.29,.34,.22),e==="cap"){let p=o(2644960);u(s,p,0,.53,-.04,.26,.2,.23);for(let _ of[-1,1])u(s,p,_*.14,.76,.035,.045,.16,.04),u(s,d,_*.14,.68,.09,.035,.035,.025)}for(let p of[-1,1]){let _=u(s,a,p*.28,.68,.02,.11,.19,.12);_.rotation.x=-.65,u(s,c,p*.22,.63,.21,.105,.1,.095),u(s,e==="bear"?r:o(6503216),p*.17,.38,.3,.12,.1,.19)}let f=new Kt;if(f.position.set(0,1.03,-.16),s.add(f),u(f,r,0,0,0,.27,e==="bear"?.28:.3,.255),n){u(f,h,0,.04,-.14,.28,.28,.17);for(let p of[-1,1])u(f,r,p*.26,-.01,0,.065,.09,.065)}if(e==="crown"||e==="bow")for(let p of[-1,1])u(f,h,p*.24,-.13,-.08,.09,.29,.13),u(f,d,p*.27,-.1,.06,.04,.045,.035);if(["horns","bear","cat","bunny"].includes(e)){u(f,e==="horns"?r:c,0,-.09,.2,e==="horns"?.25:.18,.14,.17);for(let p of[-1,1])u(f,l,p*.08,-.055,.35,.022,.018,.015)}else u(f,r,0,-.025,.25,.085,.09,.1);for(let p of[-1,1])if(u(f,c,p*.105,.065,.215,.073,.1,.04),u(f,o(e==="horns"?8204585:2511264),p*.105,.06,.249,.037,.061,.02),u(f,l,p*.105,.06,.265,.021,.045,.012),u(f,c,p*.105-.012,.085,.277,.012,.017,.008),e==="cap"){let _=u(f,h,p*.075,-.11,.265,.095,.035,.035);_.rotation.z=p*.25}if(e==="cap")u(f,a,0,.22,-.025,.29,.15,.27),u(f,a,0,.16,.23,.29,.035,.19),u(f,c,0,.25,.22,.085,.075,.025),u(f,d,0,.25,.246,.04,.042,.012);else if(e==="antenna"){f.children[0].material=c,u(f,a,0,.24,-.02,.4,.24,.34);for(let p of[-1,0,1])u(f,c,p*.23,.3,p===0?.29:.23,.085,.09,.03)}else if(e==="crown"){let p=new j(new be(.2,.16,.13,10),d);p.position.y=.3,f.add(p);for(let _=0;_<5;_++){let g=_*Math.PI*2/5,m=new j(new We(.055,.14,6),d);m.position.set(Math.sin(g)*.17,.42,Math.cos(g)*.17),f.add(m)}u(f,o(15945607),0,.32,.19,.055,.06,.025)}else if(e==="bow"){for(let p of[-1,1])u(f,a,p*.1,.3,0,.14,.1,.07);u(f,d,0,.3,.07,.045,.05,.035)}else{for(let p of[-1,1])if(e==="horns"||e==="cat"){let _=new j(new We(e==="horns"?.075:.12,.25,8),e==="horns"?c:a);_.position.set(p*.21,.29,0),_.rotation.z=-p*.4,f.add(_)}else u(f,r,p*.2,e==="bunny"?.38:.22,-.03,.085,e==="bunny"?.27:.1,.065),u(f,o(16361644),p*.2,e==="bunny"?.39:.22,.025,.045,e==="bunny"?.19:.055,.025);if(e==="horns"){for(let p=0;p<3;p++)u(f,o(15956038),0,.26-p*.14,-.22,.055,.1,.08);u(s,r,0,.58,-.45,.16,.16,.32)}}return f}var gr=new P;function ln(s,t,e,n,i,o){let r=2*Math.PI*i/4,a=Math.max(o-2*i,0),c=Math.PI/4;gr.copy(t),gr[n]=0,gr.normalize();let l=.5*r/(r+a),h=1-gr.angleTo(s)/c;return Math.sign(gr[e])===1?h*l:a/(r+a)+l+l*(1-h)}var ls=class s extends te{constructor(t=1,e=1,n=1,i=2,o=.1){let r=i*2+1;if(o=Math.min(t/2,e/2,n/2,o),super(1,1,1,r,r,r),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:o},r===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new P,l=new P,h=new P(t,e,n).divideScalar(2).subScalar(o),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,_=new P,g=.5/r;for(let m=0,b=0;m<d.length;m+=3,b+=2)switch(c.fromArray(d,m),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),d[m+0]=h.x*Math.sign(c.x)+l.x*o,d[m+1]=h.y*Math.sign(c.y)+l.y*o,d[m+2]=h.z*Math.sign(c.z)+l.z*o,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/p)){case 0:_.set(1,0,0),f[b+0]=ln(_,l,"z","y",o,n),f[b+1]=1-ln(_,l,"y","z",o,e);break;case 1:_.set(-1,0,0),f[b+0]=1-ln(_,l,"z","y",o,n),f[b+1]=1-ln(_,l,"y","z",o,e);break;case 2:_.set(0,1,0),f[b+0]=1-ln(_,l,"x","z",o,t),f[b+1]=ln(_,l,"z","x",o,n);break;case 3:_.set(0,-1,0),f[b+0]=1-ln(_,l,"x","z",o,t),f[b+1]=1-ln(_,l,"z","x",o,n);break;case 4:_.set(0,0,1),f[b+0]=1-ln(_,l,"x","y",o,t),f[b+1]=1-ln(_,l,"y","x",o,e);break;case 5:_.set(0,0,-1),f[b+0]=ln(_,l,"x","y",o,t),f[b+1]=1-ln(_,l,"y","x",o,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};function Eu(s){let t=new Kt,e=new Kt;t.add(e);let n=new St(s.color),i=new St(s.accentColor),o=new St(1976635),r=new St(9741240),a=new At({color:n,roughness:.35,metalness:.25}),c=new At({color:i,roughness:.3,metalness:.3}),l=new At({color:o,roughness:.7,metalness:.1}),h=new At({color:r,roughness:.15,metalness:.85}),d=new te(1.3,.12,2.4),u=new j(d,l);u.position.set(0,.25,0),u.castShadow=!0,e.add(u);let f=new ls(1.1,.32,1,2,.13),p=new j(f,a);p.position.set(0,.36,.7),p.rotation.x=-.12,p.castShadow=!0,e.add(p);let _=new ls(1.5,.18,.4,2,.08),g=new j(_,c);g.position.set(0,.2,1.25),g.castShadow=!0,e.add(g);let m=new ls(.36,.4,1.2,2,.12),b=new j(m,a);b.position.set(-.68,.35,-.1),b.castShadow=!0,e.add(b);let S=new j(m,a);S.position.set(.68,.35,-.1),S.castShadow=!0,e.add(S);let v=new te(.7,.6,.15),w=new j(v,l);w.position.set(0,.62,-.32),w.rotation.x=.15,e.add(w);let E=bu(s.number,s.color),C=new ve({map:E,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-1}),y=new Le(.42,.42),T=new j(y,C);T.rotation.x=-Math.PI/2-.12,T.position.set(0,.48,.7),e.add(T);let R=new te(.65,.45,.6),I=new j(R,h);I.position.set(0,.48,-.85),I.castShadow=!0,e.add(I);let L=new be(.08,.08,.35,8),z=new j(L,l);z.position.set(-.16,.78,-.82),e.add(z);let X=new j(L,l);X.position.set(.16,.78,-.82),e.add(X);let F=new be(.06,.07,.4,8),V=new j(F,h);V.rotation.x=Math.PI/2,V.position.set(-.24,.38,-1.25),e.add(V);let G=new j(F,h);G.rotation.x=Math.PI/2,G.position.set(.24,.38,-1.25),e.add(G);let Q=new te(1.5,.08,.35),et=new j(Q,c);et.position.set(0,.88,-1.05),et.castShadow=!0,e.add(et);let it=new te(.06,.35,.06),rt=new j(it,l);rt.position.set(-.35,.68,-1.05),e.add(rt);let _t=new j(it,l);_t.position.set(.35,.68,-1.05),e.add(_t);let Yt=new An(.14,.03,6,12),ie=new j(Yt,l);ie.position.set(0,.58,.2),ie.rotation.x=-.5,e.add(ie);let Zt=Su(e,s),K=Mu(),ot=new At({color:1579035,roughness:.8}),nt=new At({map:K,roughness:.3,metalness:.4});function Lt($t,qt){let Vt=new Kt,me=new be($t,$t,qt,14);me.rotateZ(Math.PI/2);let xe=new j(me,ot);xe.castShadow=!0,Vt.add(xe);let Se=new Us($t*.72,12),Ee=new j(Se,nt);Ee.position.x=qt/2+.005,Ee.rotation.y=Math.PI/2,Vt.add(Ee);let ae=new j(Se,nt);return ae.position.x=-qt/2-.005,ae.rotation.y=-Math.PI/2,Vt.add(ae),Vt}let Ut=Lt(.26,.22);Ut.position.set(-.72,.26,.85),t.add(Ut);let Ct=Lt(.26,.22);Ct.position.set(.72,.26,.85),t.add(Ct);let he=Lt(.32,.32);he.position.set(-.76,.32,-.85),t.add(he);let zt=Lt(.32,.32);return zt.position.set(.76,.32,-.85),t.add(zt),{rootGroup:t,bodyGroup:e,frontLeftWheel:Ut,frontRightWheel:Ct,rearLeftWheel:he,rearRightWheel:zt,steeringWheel:ie,driverHead:Zt,exhaustLeft:new P(-.24,.38,-1.45),exhaustRight:new P(.24,.38,-1.45),rearLeftSparkPos:new P(-.76,.15,-.95),rearRightSparkPos:new P(.76,.15,-.95)}}var Sa=class{constructor(){Z(this,"group");Z(this,"maxParticles",600);Z(this,"particles",[]);Z(this,"geometry");Z(this,"material");Z(this,"pointsMesh");Z(this,"positions");Z(this,"colors");Z(this,"sizes");this.group=new Kt,this.positions=new Float32Array(this.maxParticles*3),this.colors=new Float32Array(this.maxParticles*3),this.sizes=new Float32Array(this.maxParticles),this.geometry=new pe,this.geometry.setAttribute("position",new Oe(this.positions,3)),this.geometry.setAttribute("color",new Oe(this.colors,3)),this.geometry.setAttribute("size",new Oe(this.sizes,1));let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255, 255, 255, 1.0)"),n.addColorStop(.4,"rgba(255, 255, 255, 0.8)"),n.addColorStop(.8,"rgba(255, 255, 255, 0.2)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let i=new Me(t);this.material=new Ki({size:1,vertexColors:!0,transparent:!0,opacity:.9,blending:tr,depthWrite:!1,map:i}),this.pointsMesh=new Is(this.geometry,this.material),this.pointsMesh.frustumCulled=!1,this.group.add(this.pointsMesh)}emitDriftSparks(t,e,n){let i=2+e,o=new St(3718648);e===2&&(o=new St(16347926)),e>=3&&(o=new St(11032055));for(let r=0;r<i&&!(this.particles.length>=this.maxParticles);r++){let a=(Math.random()-.5)*.4,c=new P(-Math.sin(n)*(1.5+Math.random()*2)+a,.8+Math.random()*1.5,-Math.cos(n)*(1.5+Math.random()*2)+a);this.particles.push({position:t.clone().add(new P((Math.random()-.5)*.3,.1+Math.random()*.2,(Math.random()-.5)*.3)),velocity:c,color:o.clone(),size:.4+Math.random()*.4,maxLife:.35+Math.random()*.2,life:0,opacity:1})}}emitBoostFlames(t,e){let i=[new St(3900150),new St(440020),new St(16777215)];for(let o=0;o<3&&!(this.particles.length>=this.maxParticles);o++){let r=e+Math.PI,a=new P(Math.sin(r)*(4+Math.random()*3),.3+Math.random()*.4,Math.cos(r)*(4+Math.random()*3));this.particles.push({position:t.clone().add(new P((Math.random()-.5)*.2,.1,(Math.random()-.5)*.2)),velocity:a,color:i[Math.floor(Math.random()*i.length)].clone(),size:.6+Math.random()*.5,maxLife:.25+Math.random()*.15,life:0,opacity:1})}}emitTireSmoke(t,e=!1){if(this.particles.length>=this.maxParticles)return;let n=e?new St(8702998):new St(13948120),i=new P((Math.random()-.5)*.8,.6+Math.random()*.8,(Math.random()-.5)*.8);this.particles.push({position:t.clone().add(new P((Math.random()-.5)*.2,.1,(Math.random()-.5)*.2)),velocity:i,color:n,size:.5+Math.random()*.6,maxLife:.4+Math.random()*.25,life:0,opacity:.6})}update(t){for(let r=this.particles.length-1;r>=0;r--){let a=this.particles[r];if(a.life+=t,a.life>=a.maxLife){this.particles.splice(r,1);continue}a.position.addScaledVector(a.velocity,t),a.velocity.y-=2*t,a.size=Math.max(.01,a.size*(1+t*.8))}let e=this.geometry.attributes.position,n=this.geometry.attributes.color,i=this.geometry.attributes.size,o=this.particles.length;for(let r=0;r<o;r++){let a=this.particles[r],c=1-a.life/a.maxLife;this.positions[r*3]=a.position.x,this.positions[r*3+1]=a.position.y,this.positions[r*3+2]=a.position.z,this.colors[r*3]=a.color.r*c,this.colors[r*3+1]=a.color.g*c,this.colors[r*3+2]=a.color.b*c,this.sizes[r]=a.size}for(let r=o;r<this.maxParticles;r++)this.sizes[r]=0,this.positions[r*3]=0,this.positions[r*3+1]=-999,this.positions[r*3+2]=0;e.needsUpdate=!0,n.needsUpdate=!0,i.needsUpdate=!0}clear(){this.particles=[]}};var cl=class{constructor(){Z(this,"ctx",null);Z(this,"isMuted",!1);Z(this,"isInitialized",!1);Z(this,"engineGain",null);Z(this,"engineOsc1",null);Z(this,"engineOsc2",null);Z(this,"engineFilter",null);Z(this,"screechGain",null);Z(this,"screechFilter",null);Z(this,"screechSource",null);Z(this,"masterGain",null)}output(){return this.init(),this.ctx&&this.masterGain?{ctx:this.ctx,out:this.masterGain}:null}adopt(t){this.ctx!==t&&(this.isInitialized||(this.ctx=t,this.masterGain=t.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.6,t.currentTime),this.connectOutput(t),this.setupEngineSynth(),this.setupScreechSynth(),this.isInitialized=!0))}connectOutput(t){let e=t.createDynamicsCompressor();e.threshold.value=-15,e.knee.value=12,e.ratio.value=4,e.attack.value=.008,e.release.value=.18,this.masterGain.connect(e).connect(t.destination)}running(){return!!this.ctx&&this.ctx.state==="running"}init(){if(this.isInitialized&&this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}try{let t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.6,this.ctx.currentTime),this.connectOutput(this.ctx),this.setupEngineSynth(),this.setupScreechSynth(),this.isInitialized=!0}catch(t){console.warn("Web Audio API not supported or blocked:",t)}}setupEngineSynth(){!this.ctx||!this.masterGain||(this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(0,this.ctx.currentTime),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(600,this.ctx.currentTime),this.engineFilter.Q.setValueAtTime(.7,this.ctx.currentTime),this.engineOsc1=this.ctx.createOscillator(),this.engineOsc1.type="triangle",this.engineOsc1.frequency.setValueAtTime(55,this.ctx.currentTime),this.engineOsc2=this.ctx.createOscillator(),this.engineOsc2.type="triangle",this.engineOsc2.frequency.setValueAtTime(110,this.ctx.currentTime),this.engineOsc1.connect(this.engineFilter),this.engineOsc2.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.engineOsc1.start(),this.engineOsc2.start())}setupScreechSynth(){if(!this.ctx||!this.masterGain)return;let t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);for(let i=0;i<t;i++)n[i]=Math.random()*2-1;this.screechSource=this.ctx.createBufferSource(),this.screechSource.buffer=e,this.screechSource.loop=!0,this.screechFilter=this.ctx.createBiquadFilter(),this.screechFilter.type="bandpass",this.screechFilter.frequency.setValueAtTime(1400,this.ctx.currentTime),this.screechFilter.Q.setValueAtTime(3,this.ctx.currentTime),this.screechGain=this.ctx.createGain(),this.screechGain.gain.setValueAtTime(0,this.ctx.currentTime),this.screechSource.connect(this.screechFilter),this.screechFilter.connect(this.screechGain),this.screechGain.connect(this.masterGain),this.screechSource.start()}updateEngine(t,e,n){if(!this.ctx||!this.engineGain||!this.engineOsc1||!this.engineOsc2||!this.engineFilter)return;let i=this.ctx.currentTime,o=Math.abs(t),r=55+Math.min(o,1.6)*120;e&&(r+=25),n&&(r+=80);let a=400+o*1200+(e?400:0),c=.025+Math.min(o,1.6)*.065+(e?.025:0);this.engineOsc1.frequency.setTargetAtTime(r,i,.08),this.engineOsc2.frequency.setTargetAtTime(r*2.005,i,.08),this.engineFilter.frequency.setTargetAtTime(a,i,.08),this.engineGain.gain.setTargetAtTime(c,i,.08)}updateDriftScreech(t,e,n){if(!this.ctx||!this.screechGain||!this.screechFilter)return;let i=this.ctx.currentTime;if(t&&Math.abs(n)>5){let o=.04+e*.025,r=1200+e*500;this.screechGain.gain.setTargetAtTime(o,i,.05),this.screechFilter.frequency.setTargetAtTime(r,i,.05)}else this.screechGain.gain.setTargetAtTime(0,i,.05)}stopEngine(){!this.ctx||!this.engineGain||(this.engineGain.gain.setTargetAtTime(0,this.ctx.currentTime,.1),this.screechGain&&this.screechGain.gain.setTargetAtTime(0,this.ctx.currentTime,.1))}playCountdownBeep(t=!1){if(!this.ctx||!this.masterGain||this.isMuted)return;let e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();if(t){n.type="triangle",n.frequency.setValueAtTime(1046.5,e),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.001,e+.6);let o=this.ctx.createOscillator(),r=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(1318.5,e),r.gain.setValueAtTime(.2,e),r.gain.exponentialRampToValueAtTime(.001,e+.6),o.connect(r),r.connect(this.masterGain),o.start(e),o.stop(e+.6)}else n.type="square",n.frequency.setValueAtTime(440,e),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.001,e+.25);n.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+(t?.6:.25))}playBoostSound(){if(!this.ctx||!this.masterGain||this.isMuted)return;let t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(250,t),e.frequency.exponentialRampToValueAtTime(950,t+.35);let i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(1200,t),i.frequency.exponentialRampToValueAtTime(4e3,t+.35),n.gain.setValueAtTime(.25,t),n.gain.exponentialRampToValueAtTime(.001,t+.45),e.connect(i),i.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.45)}playCollisionSound(t=1){if(!this.ctx||!this.masterGain||this.isMuted)return;let e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(140,e),n.frequency.exponentialRampToValueAtTime(35,e+.18);let o=Math.min(Math.max(t,.2),1);i.gain.setValueAtTime(.4*o,e),i.gain.exponentialRampToValueAtTime(.001,e+.2),n.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+.2)}playLapChime(t=!1){if(!this.ctx||!this.masterGain||this.isMuted)return;(t?[659.25,880,1174.66]:[587.33,880]).forEach((n,i)=>{if(!this.ctx||!this.masterGain)return;let o=this.ctx.currentTime+i*.08,r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n,o),a.gain.setValueAtTime(.25,o),a.gain.exponentialRampToValueAtTime(.001,o+.5),r.connect(a),a.connect(this.masterGain),r.start(o),r.stop(o+.55)})}playFinishFanfare(){if(!this.ctx||!this.masterGain||this.isMuted)return;let t=[{f:523.25,d:.12},{f:659.25,d:.12},{f:783.99,d:.12},{f:1046.5,d:.25},{f:880,d:.15},{f:1046.5,d:.45}],e=0;t.forEach(n=>{if(!this.ctx||!this.masterGain)return;let i=this.ctx.currentTime+e,o=this.ctx.createOscillator(),r=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(n.f,i),r.gain.setValueAtTime(.3,i),r.gain.exponentialRampToValueAtTime(.001,i+n.d),o.connect(r),r.connect(this.masterGain),o.start(i),o.stop(i+n.d+.05),e+=n.d*.9})}toggleMute(){return this.isMuted=!this.isMuted,this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.6,this.ctx.currentTime),this.isMuted}getMuted(){return this.isMuted}},ee=new cl;var Ea=class{constructor(t,e){Z(this,"totalLaps",3);Z(this,"track");Z(this,"particles");this.track=t,this.particles=e}updateRacer(t,e,n,i,o){if(t.spinOutTimer>0){t.spinOutTimer-=i,t.speed*=Math.max(0,1-i*2),t.rotation.y+=i*12,this.syncMesh(t,n,i);return}if(t.invulnerableTimer>0&&(t.invulnerableTimer-=i),e.respawn){this.respawnOnTrack(t);return}let{config:r}=t,a=!0,c=this.track.getClosestTrackPoint(t.position.x,t.position.z),l=this.track.roadWidth/2,h=this.track.onShortcut(t.position.x,t.position.z),d=h!==null&&c.distanceToCenter>l+.5,u=c.distanceToCenter>l+.5&&!d;t.boostTimer>0&&(t.boostTimer-=i,t.boostTimer<=0&&(t.boostMultiplier=1));let f=r.topSpeed*t.boostMultiplier;t.shrinkTimer&&t.shrinkTimer>0&&(t.shrinkTimer-=i,f*=.72),t.starTimer&&t.starTimer>0&&(t.starTimer-=i,f*=1.18),f*=1+.012*(t.coins||0),t.rideTimer&&t.rideTimer>0&&(t.rideTimer-=i,f*=1.35,t.speed=Math.max(t.speed,r.topSpeed*1.45)),t.ghostTimer&&t.ghostTimer>0&&(t.ghostTimer-=i),t.inkTimer&&t.inkTimer>0&&(t.inkTimer-=i);let p=r.acceleration;if(d&&t.boostTimer<=0&&!(t.starTimer&&t.starTimer>0)&&(f=Math.min(f,r.topSpeed*.66)),u&&(t.boostTimer<=0&&(f=Math.min(f,r.topSpeed*.66)),p*=.8,Math.abs(t.speed)>5&&Math.random()<.4&&this.particles.emitTireSmoke(new P(t.position.x,t.position.y,t.position.z),!0)),e.throttle)if(t.speed<f){let R=Math.max(0,Math.min(1,t.speed/f));t.speed+=p*(1.35-.85*R)*i*(t.boostTimer>0?1.4:1)}else t.speed-=10*i;else if(e.brake)t.speed>0?t.speed-=35*i:t.speed>-12&&(t.speed-=14*i);else{let R=u?13:9;t.speed>0?t.speed=Math.max(0,t.speed-R*i):t.speed<0&&(t.speed=Math.min(0,t.speed+R*i))}let _=Math.abs(t.speed)/r.topSpeed,g=r.handling*.68*Math.min(1,_/.3),m=typeof e.steer=="number"?e.steer:0;e.steerLeft&&(m+=1),e.steerRight&&(m-=1),m=Math.max(-1,Math.min(1,m)),Math.abs(m)<.05&&(m=0),m=Math.sign(m)*(.35*Math.abs(m)+.65*m*m);let b=t.steerSmooth||0,S=Math.abs(m)<Math.abs(b)||Math.sign(m)!==Math.sign(b)?14:9;t.steerSmooth=b+(m-b)*Math.min(1,i*S),Math.abs(t.steerSmooth)<.002&&m===0&&(t.steerSmooth=0);let v=m;m=t.steerSmooth;let w=e.drift&&!t.driftHeld;if(t.driftHeld=e.drift,w&&!t.isDrifting&&(t.hopT||0)<=0&&Math.abs(t.speed)>6&&(t.hopT=.26,t.config.isPlayer&&t.config.audioLead!==!1&&ee.playCollisionSound(.15)),(t.hopT||0)>0&&(t.hopT-=i,t.hopT<=0&&e.drift&&!t.isDrifting&&Math.abs(t.speed)>10&&Math.abs(v)>.15&&(t.isDrifting=!0,t.driftDirection=Math.sign(v),t.driftTime=0,t.driftLevel=0)),t.isDrifting)if(!e.drift||Math.abs(t.speed)<8)t.driftLevel>0&&this.triggerDriftBoost(t),t.isDrifting=!1,t.driftDirection=0,t.driftTime=0,t.driftLevel=0;else{let R=Math.max(-1,Math.min(1,m*t.driftDirection));t.driftTime+=i*(.6+.9*Math.max(0,R)),t.driftTime>2.4?t.driftLevel=3:t.driftTime>1.5?t.driftLevel=2:t.driftTime>.7&&(t.driftLevel=1);let I=Math.max(-1,Math.min(1,m*t.driftDirection)),L=r.handling*.55*(1.25+I*.6)*t.driftDirection;if(t.angularVelocity=Pe.lerp(t.angularVelocity,L,Math.min(1,i*8)),t.rotation.roll=Pe.lerp(t.rotation.roll,-t.driftDirection*.18,i*10),t.driftLevel>0){let z=new P;t.driftDirection>0?n.rearRightWheel.getWorldPosition(z):n.rearLeftWheel.getWorldPosition(z),this.particles.emitDriftSparks(z,t.driftLevel,t.rotation.y)}}else{if(m!==0&&Math.abs(t.speed)>.5){let R=t.speed<0?-1:1;t.angularVelocity=Pe.lerp(t.angularVelocity,m*g*R,Math.min(1,i*12))}else t.angularVelocity=Pe.lerp(t.angularVelocity,0,Math.min(1,i*14));t.rotation.roll=Pe.lerp(t.rotation.roll,-m*.08*_,i*8)}t.rotation.y+=t.angularVelocity*i,t.slideAngle=Pe.lerp(t.slideAngle||0,t.isDrifting?t.driftDirection*.38:0,Math.min(1,i*6));let E=t.rotation.y+t.slideAngle,C=Math.sin(E)*t.speed,y=Math.cos(E)*t.speed;if(t.position.x+=C*i,t.position.z+=y*i,t.bumpX||t.bumpZ){t.position.x+=(t.bumpX||0)*i,t.position.z+=(t.bumpZ||0)*i;let R=Math.exp(-i*6);t.bumpX=(t.bumpX||0)*R,t.bumpZ=(t.bumpZ||0)*R,Math.abs(t.bumpX)+Math.abs(t.bumpZ)<.05&&(t.bumpX=t.bumpZ=0)}t.position.y=Pe.lerp(t.position.y,(d?h:c.point.y)+.1,i*12);let T=l+10;if(c.distanceToCenter>T&&!d){let R=c.point.x-t.position.x,I=c.point.z-t.position.z,L=Math.sqrt(R*R+I*I);if(L>.01){t.position.x+=R/L*(c.distanceToCenter-T),t.position.z+=I/L*(c.distanceToCenter-T),t.speed*=Math.pow(.6,i);let z=performance.now();t.config.isPlayer&&(!t.bumpedAt||z-t.bumpedAt>400)&&ee.playCollisionSound(.35)}}if(this.handleKartCollisions(t,o),t.boostTimer>0){let R=new P;n.rootGroup.getWorldPosition(R),this.particles.emitBoostFlames(R,t.rotation.y)}this.updateProgression(t),this.syncMesh(t,n,i),t.config.isPlayer&&t.config.audioLead!==!1&&(ee.updateEngine(t.speed/r.topSpeed,e.throttle,t.boostTimer>0),ee.updateDriftScreech(t.isDrifting,t.driftLevel,t.speed))}triggerDriftBoost(t){let e=.7,n=1.35;t.driftLevel===2?(e=1.2,n=1.48):t.driftLevel===3&&(e=1.7,n=1.62),t.boostTimer=e,t.boostMultiplier=n,t.speed=Math.max(t.speed,t.config.topSpeed*1.15),t.config.isPlayer&&ee.playBoostSound()}triggerStartBoost(t){t.boostTimer=1.8,t.boostMultiplier=1.45,t.speed=t.config.topSpeed*1.2,t.config.isPlayer&&ee.playBoostSound()}handleKartCollisions(t,e){for(let i of e){if(i.config.id===t.config.id||(t.ghostTimer||0)>0||(i.ghostTimer||0)>0)continue;let o=t.position.x-i.position.x,r=t.position.z-i.position.z,a=Math.sqrt(o*o+r*r);if(a<1.35*2&&a>.001){let c=2.7-a,l=o/a,h=r/a,d=t.config.weight||2,u=i.config.weight||2,f=u/(d+u),p=d/(d+u);t.position.x+=l*c*f,t.position.z+=h*c*f,i.position.x-=l*c*p,i.position.z-=h*c*p;let _=Math.min(30,Math.abs(t.speed-i.speed)+6),g=performance.now();if(!t.bumpedAt||g-t.bumpedAt>250){let b=S=>S.starTimer&&S.starTimer>0?3:1;t.bumpX=(t.bumpX||0)+l*_*.55*f*b(i)/b(t),t.bumpZ=(t.bumpZ||0)+h*_*.55*f*b(i)/b(t),i.bumpX=(i.bumpX||0)-l*_*.55*p*b(t)/b(i),i.bumpZ=(i.bumpZ||0)-h*_*.55*p*b(t)/b(i),t.bumpedAt=i.bumpedAt=g,(t.config.isPlayer||i.config.isPlayer)&&ee.playCollisionSound(.7)}let m=(t.speed*d+i.speed*u)/(d+u);t.speed=Pe.lerp(t.speed,m,.5*f),i.speed=Pe.lerp(i.speed,m,.5*p)}}}updateProgression(t){let e=this.track.getClosestTrackPoint(t.position.x,t.position.z),n=this.track.trackPoints.length,i=e.index,o=t.checkpointIndex,r=(i-o+n)%n;r>0&&r<n/3&&(t.checkpointIndex=i,t.splineProgress=i/n,o>n*.85&&i<n*.15&&(t.currentLap+=1,t.lapTimes.push(t.currentLapTime),(t.bestLapTime===null||t.currentLapTime<t.bestLapTime)&&(t.bestLapTime=t.currentLapTime),t.config.isPlayer&&ee.playLapChime(t.currentLap===(this.totalLaps||3)),t.currentLapTime=0)),t.totalDistance=(t.currentLap-1)*this.track.totalLength+e.point.distance}respawnOnTrack(t){let e=this.track.getClosestTrackPoint(t.position.x,t.position.z);t.position.x=e.point.x,t.position.y=e.point.y+.1,t.position.z=e.point.z,t.rotation.y=Math.atan2(e.point.tangentX,e.point.tangentZ),t.rotation.roll=0,t.rotation.pitch=0,t.speed=0,t.angularVelocity=0,t.isDrifting=!1,t.driftLevel=0,t.boostTimer=0,t.invulnerableTimer=1.5}syncMesh(t,e,n){let{rootGroup:i,bodyGroup:o,frontLeftWheel:r,frontRightWheel:a,rearLeftWheel:c,rearRightWheel:l,steeringWheel:h,driverHead:d}=e,u=(t.hopT||0)>0?Math.sin((1-t.hopT/.26)*Math.PI)*.45:0;i.position.set(t.position.x,t.position.y+u,t.position.z),i.rotation.y=t.rotation.y,o.rotation.z=t.rotation.roll,o.rotation.x=t.rotation.pitch;let f=t.speed/.3*n;r.children[0].rotation.x+=f,a.children[0].rotation.x+=f,c.children[0].rotation.x+=f,l.children[0].rotation.x+=f;let p=t.isDrifting?t.driftDirection*.45:t.angularVelocity/2.5;r.rotation.y=Pe.lerp(r.rotation.y,p,n*15),a.rotation.y=Pe.lerp(a.rotation.y,p,n*15),h.rotation.z=-p*1.8,d.rotation.y=Pe.lerp(d.rotation.y,p*.8,n*10)}};var Ti=class{constructor(t,e){Z(this,"track");Z(this,"me");Z(this,"lane",0);Z(this,"laneGoal",0);Z(this,"laneTimer",0);Z(this,"skill");this.track=t,this.me=e,this.skill=e.config.aiAggression||1,this.lane=this.laneGoal=(Math.random()-.5)*.7}wrap(t){for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}roadHeading(t){let e=this.track.trackPoints,n=e[(t%e.length+e.length)%e.length];return Math.atan2(n.tangentX,n.tangentZ)}update(t,e){let n=this.me,i=this.track.trackPoints,o=i.length,r=this.track.totalLength/o,a=this.track.roadWidth/2,c=Math.abs(n.speed),l=this.track.getClosestTrackPoint(n.position.x,n.position.z),h=l.index;this.laneTimer-=t,this.laneTimer<=0&&(this.laneTimer=2+Math.random()*3,this.laneGoal=(Math.random()-.5)*.8);for(let z of e){if(z===n)continue;let X=z.position.x-n.position.x,F=z.position.z-n.position.z,V=X*Math.sin(n.rotation.y)+F*Math.cos(n.rotation.y),G=X*Math.cos(n.rotation.y)-F*Math.sin(n.rotation.y);V>0&&V<9&&Math.abs(G)<2.6&&z.speed<n.speed&&(this.laneGoal=G>0?-.55:.55,this.laneTimer=1.2)}this.lane+=(this.laneGoal-this.lane)*Math.min(1,t*1.5);let d=Math.round((7+c*.32)/r),u=i[(h+d)%o],f=this.wrap(this.roadHeading(h+d+6)-this.roadHeading(h+d-2)),p=Math.max(-.8,Math.min(.8,this.lane+Math.sign(f)*Math.min(.5,Math.abs(f)*1.2))),_=u.x+u.normalX*p*a,g=u.z+u.normalZ*p*a,m=Math.atan2(_-n.position.x,g-n.position.z),b=this.wrap(m-n.rotation.y),S=Math.max(-1,Math.min(1,b*2.4)),v=Math.round((22+c*.5)/r),w=Math.abs(this.wrap(this.roadHeading(h+v)-this.roadHeading(h+2))),E=l.distanceToCenter>a+.5,C=n.config.topSpeed,y=C*(.92+.08*Math.min(1,this.skill));w>1.1?y=C*.62:w>.75&&(y=C*.78),Math.abs(b)>.9&&(y=Math.min(y,C*.5));let T=c<y,R=c>y+8||Math.abs(b)>1.3&&c>14,I=w>.55&&w<1.6&&c>24&&!E&&Math.abs(S)>.35,L=n.isDrifting?w>.3&&Math.sign(S)===n.driftDirection:I;return{throttle:T,brake:R,steerLeft:!1,steerRight:!1,steer:S,drift:L,respawn:!1,cameraToggle:!1}}};var xr=class{constructor(t){Z(this,"camera");Z(this,"currentView","chase");Z(this,"targetPosition",new P);Z(this,"targetLookAt",new P);Z(this,"baseFOV",68);this.camera=new Fe(this.baseFOV,t,.2,1e3),this.camera.position.set(0,10,20)}setView(t){this.currentView=t}cycleView(){let t=["chase","cockpit","action","topdown"],e=(t.indexOf(this.currentView)+1)%t.length;return this.currentView=t[e],this.currentView}update(t,e){let n=t.rotation.y,i=Math.min(1.5,Math.abs(t.speed)/t.config.topSpeed),o=this.baseFOV;t.boostTimer>0?o=this.baseFOV+16:o=this.baseFOV+i*8,this.camera.fov=Pe.lerp(this.camera.fov,o,e*6),this.camera.updateProjectionMatrix();let r=new P(t.position.x,t.position.y,t.position.z);if(this.currentView==="chase"){let l=t.isDrifting?-t.driftDirection*.9:0,h=new P(-Math.sin(n)*5.8+Math.cos(n)*l,2.4,-Math.cos(n)*5.8-Math.sin(n)*l);this.targetPosition.copy(r).add(h),this.targetLookAt.copy(r).add(new P(Math.sin(n)*14,1.1,Math.cos(n)*14)),this.camera.position.lerp(this.targetPosition,e*10),this.camera.lookAt(this.targetLookAt)}else if(this.currentView==="cockpit"){let a=new P(Math.sin(n)*.4,.95,Math.cos(n)*.4);this.camera.position.copy(r).add(a);let c=r.clone().add(new P(Math.sin(n)*20,.8,Math.cos(n)*20));this.camera.lookAt(c)}else if(this.currentView==="action"){let l=new P(-Math.sin(n)*3.5,1.1,-Math.cos(n)*3.5);this.targetPosition.copy(r).add(l),this.targetLookAt.copy(r).add(new P(Math.sin(n)*8,.8,Math.cos(n)*8)),this.camera.position.lerp(this.targetPosition,e*14),this.camera.lookAt(this.targetLookAt)}else this.currentView==="topdown"&&(this.targetPosition.set(r.x,r.y+40,r.z+10),this.camera.position.lerp(this.targetPosition,e*6),this.camera.lookAt(r))}onResize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}};var Ta=["banana","green","red","blue","boost","star","bolt","fake","coin","horn","bomb","ink","golden","ride","ghost"],ll=["banana","green","red","fake","bomb"],$g=["banana","green","red","boost"];function Qg(s,t){let e=t<=1?0:(s-1)/(t-1),n={banana:5-4*e,green:3.5-2*e,fake:2.2*(1-e),coin:3*(1-e)+.3,horn:e<.25?1.2:.3,red:e<.1?.4:1+2.5*e,bomb:.4+1.8*e,ink:e>.3?1.2:0,boost:1+3*e,golden:e>.5?2.2*e:0,star:e>.45?2*e:0,ride:e>.7?2.6*e:0,ghost:e>.3?.8:0,blue:e>.5?1:0,bolt:e>.8?.9:0},i=0;for(let r of Ta)i+=n[r];let o=Math.random()*i;for(let r of Ta)if(o-=n[r],o<=0)return r;return"banana"}var jg=["#ff5d8f","#4cc9f0","#ffc83d","#7bd389","#b388ff"];function wu(s){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createLinearGradient(0,0,128,128);n.addColorStop(0,"#efffff"),n.addColorStop(.3,s),n.addColorStop(1,"#6745cb"),e.fillStyle=n,e.fillRect(0,0,128,128),e.strokeStyle="#e1ffff",e.lineWidth=7,e.strokeRect(5,5,118,118),e.font="900 96px Arial",e.textAlign="center",e.textBaseline="middle",e.lineWidth=5,e.strokeStyle="#4842a0",e.strokeText("?",64,70),e.fillStyle="#ffffff",e.fillText("?",64,70);let i=new Me(t);return i.colorSpace=Ie,i}function tx(s){return new At({color:s,emissive:s,emissiveIntensity:.35,roughness:.25,metalness:.1})}function Tu(s){let t=new Kt;if(s==="bomb"){let e=new j(new oe(.55,16,12),new At({color:2302778,roughness:.35,metalness:.2}));e.position.y=.6,t.add(e);let n=new j(new be(.16,.2,.18,10),new At({color:9080744}));n.position.y=1.15,t.add(n);let i=new j(new be(.04,.04,.35,6),new At({color:13214826}));i.position.set(.06,1.38,0),i.rotation.z=-.4,t.add(i);let o=new j(new oe(.12,8,6),new ve({color:16765773}));o.position.set(.14,1.55,0),o.name="flame",t.add(o);let r=new j(new oe(.12,8,6),new ve({color:16777215}));r.position.set(-.22,.85,.35),t.add(r);for(let a of[-1,1]){let c=new j(new oe(.09,8,6),new ve({color:16777215}));c.scale.set(.65,1.4,.4),c.position.set(a*.16,.65,.52),t.add(c);let l=new j(new oe(.2,10,8),new At({color:16762941}));l.scale.set(1,.55,1.4),l.position.set(a*.28,.1,.15),t.add(l)}return t}if(s==="fake"){let e=new j(new te(1.3,1.3,1.3),new At({map:wu("#ff5d8f"),roughness:.35}));return e.position.y=.75,t.add(e),e.rotation.z=Math.PI/9,t}if(s==="banana"){let e=new At({color:16767291,roughness:.55}),n=new yi(new P(-.45,.15,0),new P(0,.05,.25),new P(.45,.15,0)),i=new j(new Xs(n,12,.13,8,!1),e);t.add(i);for(let r=0;r<3;r++){let a=new j(new We(.16,.6,6),e),c=r/3*Math.PI*2;a.position.set(.45+Math.cos(c)*.12,.18,Math.sin(c)*.18),a.rotation.set(Math.sin(c)*1.1,0,-1.2+Math.cos(c)*.3),t.add(a)}let o=new j(new oe(.07,6,5),new At({color:5913106}));o.position.set(-.5,.17,0),t.add(o)}else{let e=s==="green"?2735457:s==="red"?15747653:4359679,n=new j(new oe(.61,20,12,0,Math.PI*2,0,Math.PI/2),tx(e));n.position.y=.32,t.add(n);let i=new j(new An(.59,.105,8,24),new At({color:16774101}));i.rotation.x=Math.PI/2,i.position.y=.32,t.add(i);let o=new j(new oe(.52,16,8),new At({color:15251302}));o.scale.y=.25,o.position.y=.27,t.add(o);let r=new At({color:s==="green"?1274942:s==="red"?10692149:2442155});for(let c=0;c<6;c++){let l=new j(new An(.612,.018,4,12,Math.PI/2),r);l.rotation.y=c*Math.PI/3,l.position.y=.32,t.add(l)}let a=new j(new An(.4,.018,4,20),r);if(a.rotation.x=Math.PI/2,a.position.y=.78,t.add(a),s==="blue"){for(let c=0;c<5;c++){let l=c*Math.PI*2/5,h=new j(new We(.09,.32,8),new At({color:16775401}));h.position.set(Math.sin(l)*.36,.9,Math.cos(l)*.36),t.add(h)}for(let c of[-1,1])for(let l=0;l<3;l++){let h=new j(new Ns(.075,.38-l*.06,4,8),new At({color:15398911}));h.position.set(c*(.65+l*.12),.65+l*.1,-l*.08),h.rotation.z=-c*.65,t.add(h)}}}return t}var wa=class{constructor(t,e){Z(this,"scene",t);Z(this,"track",e);Z(this,"held",new Map);Z(this,"onEvent");Z(this,"boxes",[]);Z(this,"thrown",[]);Z(this,"group",new Kt);Z(this,"boxGeo",new te(1.4,1.4,1.4));Z(this,"boxMats");Z(this,"aiTimers",new Map);Z(this,"fx",[]);t.add(this.group),this.boxMats=jg.map(o=>new At({map:wu(o),roughness:.35,emissive:16777215,emissiveIntensity:.12}));let n=0,i=e.trackPoints;for(let o of[.16,.42,.68,.88]){let r=i[Math.floor(o*i.length)%i.length],a=e.roadWidth;for(let c of[-.4,-.2,0,.2,.4]){let l=r.x+r.normalX*c*a,h=r.z+r.normalZ*c*a,d=new j(this.boxGeo,this.boxMats[n++%this.boxMats.length]);d.rotation.z=Math.PI/9,d.position.set(l,r.y+1.2,h),this.group.add(d),this.boxes.push({mesh:d,x:l,y:r.y,z:h,respawn:0})}}}reset(){for(let t of this.thrown)this.group.remove(t.mesh);this.thrown=[];for(let t of this.held.values())for(let e of t.trail)this.group.remove(e);this.held.clear();for(let t of this.boxes)t.respawn=0,t.mesh.visible=!0}update(t,e,n,i,o){for(let r of this.boxes){if(r.respawn>0){r.respawn-=t,r.respawn<=0&&(r.mesh.visible=!0);continue}r.mesh.rotation.y+=t*1.6,r.mesh.rotation.x=Math.sin(e*1.3+r.x)*.3,r.mesh.position.y=r.y+1.2+Math.sin(e*2.2+r.z)*.15;for(let a of n){let c=a.position.x-r.x,l=a.position.z-r.z;if(c*c+l*l<6.5){r.mesh.visible=!1,r.respawn=2.5,this.held.has(a.config.id)||(this.held.set(a.config.id,{kind:null,rollLeft:1.3,shown:"banana",count:1,trailing:!1,trail:[]}),this.onEvent?.({type:"pickup",racer:a.config.id}),a.config.isPlayer&&ee.playLapChime(!1));break}}}for(let[r,a]of this.held)if(!a.kind&&(a.rollLeft-=t,a.shown=Ta[Math.floor(e*14)%Ta.length],a.rollLeft<=0)){let c=n.find(l=>l.config.id===r);a.kind=Qg(c?c.rank:n.length,n.length),a.shown=a.kind,$g.includes(a.kind)&&Math.random()<.22&&(a.count=3,ll.includes(a.kind)&&this.startTrail(a)),c&&!c.config.isPlayer&&this.aiTimers.set(r,.6+Math.random()*3.5)}for(let[r,a]of this.aiTimers){let c=a-t;c<=0?(this.aiTimers.delete(r),i.add(r)):this.aiTimers.set(r,c)}for(let r of i)this.fire(r,n);for(let[r,a]of this.held)a.kind==="golden"&&a.left!==void 0&&(a.left-=t,a.left<=0?this.held.delete(r):!n.find(c=>c.config.id===r)?.config.isPlayer&&Math.random()<t*3&&i.add(r));this.updateFx(t),this.updateTrails(n),this.updateThrown(t,n,e);for(let r of n){if((r.starTimer||0)>0)for(let a of n){if(a===r||a.spinOutTimer>0||(a.starTimer||0)>0)continue;let c=a.position.x-r.position.x,l=a.position.z-r.position.z;c*c+l*l<5&&this.hit(a,r.config.id,"star")}o(r.config.id,(r.shrinkTimer||0)>0?.6:1)}}press(t,e){let n=this.held.get(t);!n||!n.kind||(ll.includes(n.kind)?n.trailing||this.startTrail(n):this.fire(t,e))}release(t,e){let n=this.held.get(t);n&&n.kind&&n.trailing&&this.fire(t,e)}fire(t,e){let n=this.held.get(t),i=e.find(a=>a.config.id===t);if(!n||!n.kind||!i)return;let o=n.kind;if(o==="golden"){n.left===void 0&&(n.left=7),this.use("boost",i,e);return}n.count--;let r=n.trail.pop();if(r&&this.group.remove(r),n.count<=0){for(let a of n.trail)this.group.remove(a);this.held.delete(t)}else i.config.isPlayer||this.aiTimers.set(t,.8+Math.random()*2);this.use(o,i,e)}startTrail(t){t.trailing=!0;for(let e=t.trail.length;e<t.count;e++){let n=Tu(t.kind);n.scale.setScalar(.85),this.group.add(n),t.trail.push(n)}}ring(t,e,n,i,o){let r=new j(new An(1,.25,8,32),new ve({color:i,transparent:!0,opacity:.9}));r.rotation.x=Math.PI/2,r.position.set(t,e+.6,n),this.group.add(r),this.fx.push({mesh:r,life:.45,max:.45,grow:o})}boom(t,e,n){let i=new j(new oe(1,16,12),new ve({color:16747039,transparent:!0,opacity:.85}));i.position.set(t,e+1,n),this.group.add(i),this.fx.push({mesh:i,life:.6,max:.6,grow:8})}updateFx(t){for(let e=this.fx.length-1;e>=0;e--){let n=this.fx[e];n.life-=t;let i=1-n.life/n.max;n.mesh.scale.setScalar(.5+i*n.grow),n.mesh.material.opacity=.9*(1-i),n.life<=0&&(this.group.remove(n.mesh),this.fx.splice(e,1))}}explode(t,e){this.boom(t.x,t.y,t.z);for(let n of e){let i=n.position.x-t.x,o=n.position.z-t.z;i*i+o*o<64&&this.hit(n,t.owner,"bomb")}this.onEvent?.({type:"boom",racer:t.owner})}updateTrails(t){for(let[e,n]of this.held){if(!n.trailing)continue;let i=t.find(r=>r.config.id===e);if(!i)continue;let o=i.rotation.y;n.trail.forEach((r,a)=>{let c=1.9+a*1.1,l=Math.sin(performance.now()/120+a)*.15;r.position.set(i.position.x-Math.sin(o)*c+Math.cos(o)*l,i.position.y,i.position.z-Math.cos(o)*c-Math.sin(o)*l),r.rotation.y=o})}}shield(t){let e=this.held.get(t.config.id);if(!e||!e.trailing||e.count<=0)return!1;e.count--;let n=e.trail.pop();if(n&&this.group.remove(n),e.count<=0){for(let i of e.trail)this.group.remove(i);this.held.delete(t.config.id)}return this.onEvent?.({type:"block",racer:t.config.id}),!0}use(t,e,n){this.onEvent?.({type:"use",racer:e.config.id,item:t});let i=e.rotation.y;if(t==="boost"){e.boostTimer=1.4,e.boostMultiplier=1.5,e.speed=Math.max(e.speed,e.config.topSpeed*1.2),e.config.isPlayer&&ee.playBoostSound();return}if(t==="star"){e.starTimer=7,e.invulnerableTimer=7,e.boostTimer=7,e.boostMultiplier=1.15,e.config.isPlayer&&ee.playBoostSound();return}if(t==="bolt"){for(let l of n)l===e||(l.starTimer||0)>0||(l.shrinkTimer=5,l.spinOutTimer=Math.max(l.spinOutTimer,.5),l.speed*=.5);this.onEvent?.({type:"bolt",racer:e.config.id});return}if(t==="coin"){e.coins=Math.min(10,(e.coins||0)+2),e.boostTimer=Math.max(e.boostTimer,.35),e.boostMultiplier=Math.max(e.boostMultiplier,1.15);return}if(t==="horn"){for(let l of n){if(l===e)continue;let h=l.position.x-e.position.x,d=l.position.z-e.position.z;h*h+d*d<90&&this.hit(l,e.config.id,"horn")}for(let l=this.thrown.length-1;l>=0;l--){let h=this.thrown[l],d=h.x-e.position.x,u=h.z-e.position.z;d*d+u*u<180&&(this.group.remove(h.mesh),this.thrown.splice(l,1))}this.ring(e.position.x,e.position.y,e.position.z,16777215,10),this.onEvent?.({type:"horn",racer:e.config.id});return}if(t==="ink"){for(let l of n)l.rank<e.rank&&!((l.starTimer||0)>0)&&(l.inkTimer=4.5,this.onEvent?.({type:"ink",racer:l.config.id,by:e.config.id}));return}if(t==="ride"){e.rideTimer=3.4,e.invulnerableTimer=Math.max(e.invulnerableTimer,3.6),e.boostTimer=3.4,e.boostMultiplier=1.6;return}if(t==="ghost"){e.ghostTimer=5,e.invulnerableTimer=Math.max(e.invulnerableTimer,5);let l=n.filter(d=>d.rank<e.rank&&this.held.get(d.config.id)?.kind),h=l[Math.floor(Math.random()*l.length)];if(h){let d=this.held.get(h.config.id);for(let f of d.trail)this.group.remove(f);this.held.delete(h.config.id);let u={kind:d.kind,rollLeft:0,shown:d.kind,count:d.count,trailing:!1,trail:[]};this.held.set(e.config.id,u),ll.includes(u.kind)&&u.count>1&&this.startTrail(u),e.config.isPlayer||this.aiTimers.set(e.config.id,1+Math.random()*2),this.onEvent?.({type:"steal",racer:h.config.id,by:e.config.id,item:u.kind})}return}let o=Tu(t);this.group.add(o);let r=t==="banana"||t==="fake",a=r?-2.6:2.6,c={kind:t,owner:e.config.id,mesh:o,x:e.position.x+Math.sin(i)*a,y:e.position.y,z:e.position.z+Math.cos(i)*a,heading:i,speed:r?0:t==="bomb"?42:t==="green"?62:58,life:r?60:t==="bomb"?1.3:t==="green"?3.5:8,armed:.4};if(t==="red"){let l=n.filter(h=>h.rank===e.rank-1)[0];c.target=l?l.config.id:void 0,l||(c.kind="green")}if(t==="blue"){let l=n.filter(h=>h.rank===1&&h!==e)[0];c.target=l?l.config.id:void 0}this.thrown.push(c)}updateThrown(t,e,n){let i=this.track.roadWidth/2;for(let o=this.thrown.length-1;o>=0;o--){let r=this.thrown[o];if(r.life-=t,r.armed-=t,r.speed>0){if(r.target){let h=e.find(d=>d.config.id===r.target);if(h){let u=Math.atan2(h.position.x-r.x,h.position.z-r.z)-r.heading;for(;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2;let f=(r.kind==="blue"?5:3.2)*t;r.heading+=Math.max(-f,Math.min(f,u))}}else{let h=this.track.getClosestTrackPoint(r.x,r.z);if(h.distanceToCenter>i+2){let d=h.point,u=Math.atan2(d.x-r.x,d.z-r.z);r.heading+=Math.sign(Math.sin(u-r.heading))*3*t}}r.x+=Math.sin(r.heading)*r.speed*t,r.z+=Math.cos(r.heading)*r.speed*t,r.kind==="red"?r.mesh.rotation.y=r.heading:r.kind==="green"?r.mesh.rotation.y+=t*7:r.mesh.rotation.y+=t*3;let l=r.mesh.getObjectByName("flame");l&&l.scale.setScalar(.8+Math.random()*.4)}let a=this.track.getClosestTrackPoint(r.x,r.z).point.y;r.y=Pe.lerp(r.y,a+(r.kind==="blue"?1.4:.1),t*10),r.mesh.position.set(r.x,r.y,r.z),r.kind==="bomb"&&r.speed>0&&(r.speed=Math.max(0,r.speed-30*t));let c=r.life<=0;if(c&&r.kind==="bomb"&&this.explode(r,e),!c)for(let l of e){if(l.config.id===r.owner&&r.armed>0)continue;let h=l.position.x-r.x,d=l.position.z-r.z,u=r.kind==="blue"&&l.config.id===r.target?2.6:1.7;if(h*h+d*d<u*u){if(r.kind==="blue"&&r.target&&l.config.id!==r.target)continue;if(r.kind==="bomb"){this.explode(r,e),c=!0;break}if(r.kind!=="blue"&&l.config.id!==r.owner&&this.shield(l)){c=!0;break}this.hit(l,r.owner,r.kind),c=!0;break}}c&&(this.group.remove(r.mesh),this.thrown.splice(o,1))}}hit(t,e,n){t.invulnerableTimer>0||(t.starTimer||0)>0||(t.ghostTimer||0)>0||(t.rideTimer||0)>0||(t.coins=Math.max(0,(t.coins||0)-3),t.spinOutTimer=n==="blue"?1.8:1.1,t.invulnerableTimer=2.2,t.boostTimer=0,t.boostMultiplier=1,t.isDrifting=!1,this.onEvent?.({type:"hit",racer:t.config.id,by:e,item:n}),t.config.isPlayer&&ee.playCollisionSound(1))}};var ex=[0,2,4,5,7,9,11],Au=[0,2,3,5,7,8,10],nx=[0,2,4,5,7,9,10],Ru={meadow:{bpm:132,root:60,scale:ex,chords:[1,6,4,5],leadWave:"triangle",padWave:"triangle",lead:"5-3-5-6-5-3-1---2-3-4-3-2---5---6-5-6-a-6-5-3---4-3-2-3-1-------",kick:[0,6,8],snare:[4,12],hat:[2,6,10,14]},sunset:{bpm:116,root:62,scale:nx,chords:[1,4,6,5],leadWave:"triangle",padWave:"sine",swing:.12,lead:"3--5--6-5-3-2---1--2--3-5---3---6--5--3-2-1-2---3-------5-------",kick:[0,10],snare:[4,12],hat:[0,3,6,8,11,14]},frosty:{bpm:140,root:57,scale:Au,chords:[1,6,3,7],leadWave:"triangle",padWave:"triangle",lead:"1-3-5-a-b-a-5-3-4---3---2---5---1-3-5-a-c-b-a-5-6-5-4-2-1-------",kick:[0,8,11],snare:[4,12],hat:[2,6,10,14]},neon:{bpm:128,root:52,scale:Au,chords:[1,6,4,5],leadWave:"triangle",padWave:"sine",lead:"1---5---6-5-3---4---3---2-1-2---1---5---a---7---6-5-4-3-2-------",kick:[0,4,8,12],snare:[4,12],hat:[2,6,10,14]}},hs=s=>440*Math.pow(2,(s-69)/12),Aa=class{constructor(t){Z(this,"song");Z(this,"ctx",null);Z(this,"bus",null);Z(this,"timer",null);Z(this,"step",0);Z(this,"nextAt",0);Z(this,"tempo",1);Z(this,"noise",null);Z(this,"space",null);Z(this,"phrase",0);this.song=Ru[t]||Ru.meadow}start(){let t=ee.output();if(!t||this.timer)return;this.ctx=t.ctx,this.bus=this.ctx.createGain(),this.bus.gain.value=.48,this.bus.connect(t.out),this.space=this.ctx.createGain(),this.space.gain.value=.17;let e=this.ctx.createDelay(1);e.delayTime.value=60/this.song.bpm*.75;let n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=2300,this.space.connect(e).connect(n).connect(this.bus),this.step=0,this.phrase=0,this.tempo=1;let i=this.ctx.createBuffer(1,this.ctx.sampleRate*.3,this.ctx.sampleRate),o=i.getChannelData(0);for(let r=0;r<o.length;r++)o[r]=Math.random()*2-1;this.noise=i,this.nextAt=this.ctx.currentTime+.1,this.timer=setInterval(()=>this.pump(),25)}finalLap(){if(!this.ctx||!this.bus)return;let t=this.ctx.currentTime+.05;[0,4,7,12].forEach((e,n)=>this.tone(hs(this.song.root+12+e),t+n*.09,.12,"triangle",.13)),this.tempo=1.2}stop(){if(clearInterval(this.timer),this.timer=null,this.bus&&this.ctx){let t=this.bus;t.gain.setTargetAtTime(0,this.ctx.currentTime,.2),setTimeout(()=>t.disconnect(),1200)}if(this.space){let t=this.space;setTimeout(()=>t.disconnect(),1200)}this.space=null,this.bus=null}pump(){if(!this.ctx)return;let t=60/(this.song.bpm*this.tempo)/4;for(this.nextAt<this.ctx.currentTime-.2&&(this.nextAt=this.ctx.currentTime+.03);this.nextAt<this.ctx.currentTime+.15;){let e=this.song.swing&&this.step%2?t*this.song.swing:0;this.playStep(this.step,this.nextAt+e,t),this.nextAt+=t,this.step=(this.step+1)%128,this.step===0&&this.phrase++}}degree(t,e=0){let n=this.song.scale,i=t-1;return this.song.root+n[(i%7+7)%7]+12*(Math.floor(i/7)+e)}chordNotes(t){let e=this.song.chords.concat([4,5,2,5]),n=e[t%e.length];return[this.degree(n),this.degree(n+2),this.degree(n+4)]}playStep(t,e,n){let i=this.song,o=t%16,r=Math.floor(t/16),a=this.chordNotes(r);if(i.kick.includes(o)&&this.kick(e),i.snare.includes(o)&&this.snare(e),i.hat.includes(o)&&this.hat(e),[0,3,6,8,10,14].includes(o)){let h=o===14?2:o===6||o===10?1:0;this.tone(hs(a[h]-24),e,n*1.5,"triangle",.26)}if([2,6,10,14].includes(o))for(let h of a)this.tone(hs(h),e,n*1.2,i.padWave,.055);o%4===0&&r%2===1&&this.tone(hs(a[o/4%3]+12),e,n*2.5,"sine",.065);let c=t%64,l=i.lead[c];if(l&&l!=="."&&l!=="-"&&!(r===7&&o>9)){let h=1;for(;i.lead[(c+h)%64]==="-"&&h<16;)h++;let d=l>="a"&&l<="g",u=d?l.charCodeAt(0)-96:Number(l);r>=4&&(u=Math.max(1,u+(r%2?-1:2))),this.tone(hs(this.degree(u,d?1:0)),e,n*h*.88,i.leadWave,.19)}r===7&&[11,13,15].includes(o)&&this.snare(e),this.phrase%2&&[7,15].includes(o)&&this.tone(hs(a[2]+12),e,n*2,"sine",.07)}tone(t,e,n,i,o){let r=this.ctx,a=r.createOscillator(),c=r.createGain();a.type=i,a.frequency.value=t,c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(o,e+.01),c.gain.exponentialRampToValueAtTime(o*.5,e+Math.max(.025,n*.3)),c.gain.exponentialRampToValueAtTime(1e-4,e+Math.max(.06,n)+.08);let l=r.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(Math.min(5e3,t*7),e),l.frequency.exponentialRampToValueAtTime(Math.max(350,t*2),e+Math.max(.06,n)),a.connect(l).connect(c),c.connect(this.bus),this.space&&t>250&&c.connect(this.space),a.onended=()=>{a.disconnect(),l.disconnect(),c.disconnect()},a.start(e),a.stop(e+Math.max(.06,n)+.1)}kick(t){let e=this.ctx,n=e.createOscillator(),i=e.createGain();n.frequency.setValueAtTime(140,t),n.frequency.exponentialRampToValueAtTime(45,t+.12),i.gain.setValueAtTime(.5,t),i.gain.exponentialRampToValueAtTime(1e-4,t+.18),n.connect(i).connect(this.bus),n.onended=()=>{n.disconnect(),i.disconnect()},n.start(t),n.stop(t+.2)}noiseHit(t,e,n,i,o){let r=this.ctx,a=r.createBufferSource(),c=r.createBiquadFilter(),l=r.createGain();a.buffer=this.noise,c.type=o,c.frequency.value=i,l.gain.setValueAtTime(n,t),l.gain.exponentialRampToValueAtTime(1e-4,t+e),a.connect(c).connect(l).connect(this.bus),a.onended=()=>{a.disconnect(),c.disconnect(),l.disconnect()},a.start(t),a.stop(t+e+.02)}snare(t){this.noiseHit(t,.1,.12,1800,"bandpass")}hat(t){this.noiseHit(t,.035,.035,6500,"highpass")}};function hl(){let s=new Uint8Array([115,178,222,255]),t=new Zi(s,s.length,1,sr);return t.minFilter=Ae,t.magFilter=Ae,t.generateMipmaps=!1,t.needsUpdate=!0,t}function ul(s,t,e=new Map){s.traverse(n=>{let i=n;if(!i.isMesh||!i.material)return;let o=r=>{let a=r;if(!a.isMeshStandardMaterial)return r;let c=e.get(r);return c||(c=new qs({color:a.color.clone().offsetHSL(0,.12,.02),map:a.map,emissive:a.emissive.clone(),emissiveIntensity:a.emissiveIntensity,transparent:a.transparent,opacity:a.opacity,side:a.side,polygonOffset:a.polygonOffset,polygonOffsetFactor:a.polygonOffsetFactor,gradientMap:t}),e.set(r,c)),c};i.material=Array.isArray(i.material)?i.material.map(o):o(i.material)})}function ix(s){let t=new oe(520,32,16),e=new St(s.skyTop),n=new St(s.skyMid),i=new St(s.skyLow),o=[],r=t.attributes.position;for(let l=0;l<r.count;l++){let h=r.getY(l)/520,d=h>.25?n.clone().lerp(e,Math.min(1,(h-.25)/.6)):i.clone().lerp(n,Math.max(0,(h+.05)/.3));o.push(d.r,d.g,d.b)}t.setAttribute("color",new kt(o,3));let a=new ve({vertexColors:!0,side:ze,fog:!1,depthWrite:!1}),c=new j(t,a);return c.renderOrder=-1,c}function sx(s){let t=new Kt,e=new ve({color:s,fog:!1}),n=4+Math.floor(Math.random()*3);for(let i=0;i<n;i++){let o=6+Math.random()*6,r=new j(new oe(o,10,8),e);r.position.set((i-n/2)*8+Math.random()*4,Math.random()*4,Math.random()*6),r.scale.y=.7,t.add(r)}return t}function rx(s,t){let e=new Kt,n=new j(new be(.35,.55,3,8),new At({color:t.trunk}));n.position.y=1.5,e.add(n);let i=t.trees[Math.floor(Math.random()*t.trees.length)],o=new At({color:i,roughness:.8,emissive:t.glow?i:0,emissiveIntensity:t.glow?.55:0}),r=[[0,4.4,0,2.4],[1.3,3.8,.3,1.6],[-1.2,3.9,-.2,1.7],[.2,5.6,.2,1.6]];for(let[a,c,l,h]of r){let d=new j(new oe(h,12,10),o);d.position.set(a,c,l),e.add(d)}return e.scale.setScalar(s),e}function ox(s){let t=document.createElement("canvas");t.width=128,t.height=256;let e=t.getContext("2d");e.fillStyle=s,e.fillRect(0,0,128,256),e.fillStyle="#ffe14d";for(let i=0;i<3;i++){let o=40+i*70;e.beginPath(),e.moveTo(14,o+50),e.lineTo(64,o),e.lineTo(114,o+50),e.lineTo(114,o+74),e.lineTo(64,o+24),e.lineTo(14,o+74),e.closePath(),e.fill()}let n=new Me(t);return n.colorSpace=Ie,n}function Cu(s,t){let e=t.course.theme;s.background=new St(e.skyMid),s.fog=new ws(e.fog,140,480),s.add(ix(e));let n=[];for(let l=0;l<14;l++){let h=sx(e.clouds),d=l/14*Math.PI*2,u=260+Math.random()*120;h.position.set(Math.cos(d)*u,70+Math.random()*50,Math.sin(d)*u),h.lookAt(0,h.position.y,0),s.add(h),n.push(h)}let i=[];t.sceneryGroup.children.forEach(l=>{let h=l;h.isGroup&&h.children.length===4&&h.children[1].geometry instanceof We&&i.push(h)});let o=(l,h)=>{let d=1e9;for(let f=0;f<t.trackPoints.length;f+=3){let p=t.trackPoints[f],_=(p.x-l)**2+(p.z-h)**2;_<d&&(d=_)}if(Math.sqrt(d)<t.roadWidth*.5+9)return!0;let u=t.shortcut;if(u){let f=u.bx-u.ax,p=u.bz-u.az,_=f*f+p*p||1,g=Math.max(0,Math.min(1,((l-u.ax)*f+(h-u.az)*p)/_));if(Math.hypot(l-(u.ax+f*g),h-(u.az+p*g))<u.w/2+6)return!0}return!1};for(let l of i){if(t.sceneryGroup.remove(l),o(l.position.x,l.position.z))continue;let h=rx(l.scale.x*(.75+Math.random()*.35),e);h.position.copy(l.position),h.rotation.y=Math.random()*Math.PI,t.sceneryGroup.add(h)}t.sceneryGroup.traverse(l=>{let h=l.material;!h||!h.isMeshStandardMaterial||h.color.getHex()===5078031&&(h.color.setHex(e.ground),h.flatShading=!1,h.needsUpdate=!0)});let r=[],a=new ve({map:ox(e.padColor),transparent:!0,opacity:.95,polygonOffset:!0,polygonOffsetFactor:-3}),c=t.trackPoints;for(let l of[.06,.3,.55,.8]){let h=Math.floor(l*c.length)%c.length,d=c[h],u=Math.atan2(d.tangentX,d.tangentZ);for(let f of[-.22,.22]){let p=d.x+d.normalX*f*t.roadWidth,_=d.z+d.normalZ*f*t.roadWidth,g=new j(new Le(3.4,6),a);g.rotation.x=-Math.PI/2,g.rotation.z=u+Math.PI,g.position.set(p,d.y+.12,_),t.sceneryGroup.add(g),r.push({x:p,z:_,heading:u,mesh:g})}}return ax(t,o),ul(s,hl()),{pads:r,update:l=>{for(let h=0;h<n.length;h++)n[h].position.y+=Math.sin(l*.3+h)*.01;a.opacity=.75+Math.sin(l*8)*.2}}}function ax(s,t){let e=s.course.theme,n=h=>new At({color:h,roughness:.7}),i=n(16774361),o=n(e.glow?16014817:s.course.id==="frosty"?6670828:16276837),r=new be(1.1,1.5,4,12),a=new oe(3.4,16,10,0,Math.PI*2,0,Math.PI/2),c=new oe(.55,8,6),l=new oe(1,20,12);for(let h=0;h<12;h++){let d=h*Math.PI/6,u=Math.cos(d)*245,f=Math.sin(d)*245;if(t(u,f))continue;let p=20+h%4*9,_=new j(l,n(e.trees[h%e.trees.length]));if(_.position.set(u,-5,f),_.scale.set(28+h%3*9,p,28),s.sceneryGroup.add(_),s.course.id==="frosty"){let g=new j(new oe(1,12,8,0,Math.PI*2,0,.9),i);g.position.copy(_.position),g.scale.set(28.2+h%3*9,p+.3,28.2),s.sceneryGroup.add(g)}}for(let h=0;h<s.trackPoints.length;h+=24){let d=s.trackPoints[h],u=h%48?-1:1,f=d.x+d.normalX*(s.roadWidth/2+17)*u,p=d.z+d.normalZ*(s.roadWidth/2+17)*u;if(t(f,p))continue;let _=new Kt;_.position.set(f,d.y-.5,p);let g=new j(r,i);g.position.y=2,_.add(g);let m=new j(a,o);m.position.y=3.7,_.add(m);for(let b=0;b<5;b++){let S=b*Math.PI*2/5,v=new j(c,i);v.position.set(Math.sin(S)*2.35,5.9,Math.cos(S)*2.35),v.scale.y=.4,_.add(v)}_.scale.setScalar(.8+h%3*.25),s.sceneryGroup.add(_)}for(let h of[-1,1])for(let d=0;d<6;d++){let u=s.trackPoints[Math.floor(d*.007*s.trackPoints.length)],f=u.x+u.normalX*(s.roadWidth/2+2.5)*h,p=u.z+u.normalZ*(s.roadWidth/2+2.5)*h,_=new j(new be(.09,.09,5.5,6),i);_.position.set(f,u.y+2.75,p),s.sceneryGroup.add(_);let g=new ji;g.moveTo(0,0),g.lineTo(2.3*h,-.5),g.lineTo(0,-1.2),g.closePath();let m=new j(new Ws(g),new ve({color:e.trees[d%e.trees.length],side:Xe}));m.position.set(f,u.y+5.3,p),s.sceneryGroup.add(m)}}function Pu(){let s=document.createElement("canvas");s.width=s.height=64;let t=s.getContext("2d"),e=t.createRadialGradient(32,32,4,32,32,32);e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);let n=new j(new Le(2.6,3.4),new ve({map:new Me(s),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));return n.rotation.x=-Math.PI/2,n}var cx=[{id:"tabby",name:"Tabby",color:"#FF9F43",accent:"#fff3d6",topper:"cat",spd:3,acc:4,hnd:4},{id:"bunbun",name:"Bun Bun",color:"#FF7AC6",accent:"#fdf2f8",topper:"bunny",spd:2,acc:5,hnd:5},{id:"duke",name:"Duke",color:"#9B6BFF",accent:"#fcd34d",topper:"crown",spd:5,acc:2,hnd:3},{id:"rex",name:"Rex",color:"#3DDC84",accent:"#ecfdf5",topper:"horns",spd:5,acc:3,hnd:2},{id:"lulu",name:"Lulu",color:"#FF5D8F",accent:"#ffe4ec",topper:"bow",spd:3,acc:5,hnd:4},{id:"zippy",name:"Zippy",color:"#4CC9F0",accent:"#f0f9ff",topper:"antenna",spd:4,acc:4,hnd:3},{id:"ace",name:"Ace",color:"#FFC83D",accent:"#fff7d6",topper:"cap",spd:4,acc:3,hnd:4},{id:"grizz",name:"Grizz",color:"#B07A4F",accent:"#f4f1e6",topper:"bear",spd:5,acc:2,hnd:2}],lx={chill:.8,fast:1,turbo:1.2};function Iu(s,t,e,n){return{weight:s>=5?3:t>=5?1:2,topSpeed:(41.5+(s-3)*1.1)*n,acceleration:(30+(t-3)*2.6)*n,handling:(3.2+(e-3)*.18)*(n>1?1.08:1)}}var Lu=["cap","cat","bunny","crown","horns","bow","antenna"],hx=8,ux={banana:'<svg viewBox="0 0 40 40"><path d="M7 12 C8 30 28 36 35 22 C25 25 15 22 12 9 Z" fill="#ffd93b" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><path d="M12 9 L10 4" stroke="#5a3a12" stroke-width="3" stroke-linecap="round"/><path d="M14 20 C18 26 24 28 30 26" fill="none" stroke="#fff6b0" stroke-width="2" stroke-linecap="round"/></svg>',green:'<svg viewBox="0 0 40 40"><ellipse cx="20" cy="29" rx="16" ry="6" fill="#e5b86b" stroke="#242443" stroke-width="2"/><path d="M5 26C5 3 35 3 35 26Z" fill="#36c971" stroke="#242443" stroke-width="2.5"/><path d="M20 7V26M8 16L20 21L32 16" fill="none" stroke="#242443" stroke-width="2"/><path d="M4 26Q20 33 36 26" fill="none" stroke="#fff5de" stroke-width="5"/></svg>',red:'<svg viewBox="0 0 40 40"><ellipse cx="20" cy="29" rx="16" ry="6" fill="#e5b86b" stroke="#242443" stroke-width="2"/><path d="M5 26C5 3 35 3 35 26Z" fill="#f25754" stroke="#242443" stroke-width="2.5"/><path d="M20 7V26M8 16L20 21L32 16" fill="none" stroke="#242443" stroke-width="2"/><path d="M4 26Q20 33 36 26" fill="none" stroke="#fff5de" stroke-width="5"/></svg>',blue:'<svg viewBox="0 0 40 40"><ellipse cx="20" cy="29" rx="16" ry="6" fill="#e5b86b" stroke="#242443" stroke-width="2"/><path d="M5 26C5 3 35 3 35 26Z" fill="#4e8aff" stroke="#242443" stroke-width="2.5"/><path d="M20 7V26M8 16L20 21L32 16" fill="none" stroke="#242443" stroke-width="2"/><path d="M4 26Q20 33 36 26" fill="none" stroke="#fff5de" stroke-width="5"/><path d="M13 9L14 2L18 8M23 8L28 2L29 12" fill="#fff" stroke="#242443" stroke-width="1.5"/></svg>',boost:'<svg viewBox="0 0 40 40"><rect x="11" y="20" width="18" height="16" rx="7" fill="#fff1ce" stroke="#242443" stroke-width="2.5"/><path d="M3 23C1 0 39 0 37 23Q20 29 3 23Z" fill="#f25754" stroke="#242443" stroke-width="2.5"/><ellipse cx="20" cy="12" rx="6" ry="7" fill="#fff"/><ellipse cx="7" cy="18" rx="3" ry="4" fill="#fff"/><ellipse cx="33" cy="18" rx="3" ry="4" fill="#fff"/><path d="M17 29v4M23 29v4" stroke="#242443" stroke-width="2.5" stroke-linecap="round"/></svg>',star:'<svg viewBox="0 0 40 40"><defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff7ac6"/><stop offset=".5" stop-color="#ffd34d"/><stop offset="1" stop-color="#5ee6c8"/></linearGradient></defs><path d="M20 3 L25 14.5 L37.5 15.5 L28 23.5 L31 36 L20 29.5 L9 36 L12 23.5 L2.5 15.5 L15 14.5 Z" fill="url(#sg)" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="34" cy="6" r="2" fill="#fff"/><circle cx="6" cy="31" r="1.5" fill="#fff"/></svg>',bolt:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="17" fill="#2b2f6b" stroke="#1b1b3a" stroke-width="2"/><path d="M24 4 L9 22 H18 L14 37 L31 16 H22 Z" fill="#fff15a" stroke="#1b1b3a" stroke-width="2" stroke-linejoin="round"/></svg>',fake:'<svg viewBox="0 0 40 40"><rect x="5" y="5" width="30" height="30" rx="4" fill="#e876b4" stroke="#242443" stroke-width="2.5"/><rect x="8" y="8" width="24" height="24" rx="2" fill="none" stroke="#fff0fa" stroke-width="2"/><text x="20" y="29" text-anchor="middle" font-family="Arial,sans-serif" font-weight="900" font-size="27" fill="#fff">?</text></svg>',coin:'<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="#ffc83d" stroke="#1b1b3a" stroke-width="2.5"/><circle cx="20" cy="20" r="10.5" fill="none" stroke="#e0a400" stroke-width="2"/><path d="M20 12 L22.4 17.2 L28 17.6 L23.8 21.2 L25.1 26.6 L20 23.7 L14.9 26.6 L16.2 21.2 L12 17.6 L17.6 17.2 Z" fill="#fff6c2"/></svg>',horn:'<svg viewBox="0 0 40 40"><path d="M6 17 h6 l12 -9 v24 l-12 -9 h-6 z" fill="#ff5d5d" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><rect x="9" y="23" width="4" height="8" rx="1.5" fill="#c9d3e6" stroke="#1b1b3a" stroke-width="2"/><path d="M29 14 Q33 20 29 26 M32.5 10 Q39 20 32.5 30" fill="none" stroke="#1b1b3a" stroke-width="2.5" stroke-linecap="round"/></svg>',bomb:'<svg viewBox="0 0 40 40"><circle cx="18" cy="24" r="12" fill="#23233a" stroke="#1b1b3a" stroke-width="2.5"/><rect x="15" y="9" width="7" height="5" rx="1.5" fill="#8a8fa8" stroke="#1b1b3a" stroke-width="2"/><path d="M20 9 Q22 4 27 5" fill="none" stroke="#c9a46a" stroke-width="2.5"/><path d="M29 2 l1.5 3 3 0.5 -2.3 2 0.6 3.2 -2.8 -1.6 -2.8 1.6 0.6 -3.2 -2.3 -2 3 -0.5 z" fill="#ffd34d"/><circle cx="13" cy="19" r="3" fill="#fff" opacity=".6"/></svg>',ink:'<svg viewBox="0 0 40 40"><path d="M20 6 C26 6 25 12 30 11 C36 10 36 17 32 19 C37 22 34 29 28 27 C28 33 22 36 18 31 C13 35 7 31 10 26 C4 25 4 18 9 17 C6 12 12 8 15 11 C15 7 17 6 20 6 Z" fill="#7b4cc9" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="34" cy="31" r="2.5" fill="#7b4cc9"/><circle cx="6" cy="9" r="2" fill="#7b4cc9"/><circle cx="16" cy="17" r="3" fill="#fff" opacity=".5"/></svg>',golden:'<svg viewBox="0 0 40 40"><rect x="11" y="20" width="18" height="16" rx="7" fill="#fff1ce" stroke="#242443" stroke-width="2.5"/><path d="M3 23C1 0 39 0 37 23Q20 29 3 23Z" fill="#ffc83d" stroke="#242443" stroke-width="2.5"/><ellipse cx="20" cy="12" rx="6" ry="7" fill="#fff"/><ellipse cx="7" cy="18" rx="3" ry="4" fill="#fff"/><ellipse cx="33" cy="18" rx="3" ry="4" fill="#fff"/><path d="M17 29v4M23 29v4" stroke="#242443" stroke-width="2.5" stroke-linecap="round"/></svg>',ride:'<svg viewBox="0 0 40 40"><g transform="rotate(-35 20 20)"><path d="M20 3 C26 9 26 22 25 29 H15 C14 22 14 9 20 3 Z" fill="#f4f5fa" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><circle cx="20" cy="15" r="3.5" fill="#4cc9f0" stroke="#1b1b3a" stroke-width="2"/><path d="M15 21 L9 30 L15 28 Z M25 21 L31 30 L25 28 Z" fill="#ff7a00" stroke="#1b1b3a" stroke-width="2" stroke-linejoin="round"/><path d="M16 30 L20 39 L24 30 Z" fill="#ffd34d"/></g></svg>',ghost:'<svg viewBox="0 0 40 40"><path d="M8 34 V18 C8 10 13 5 20 5 C27 5 32 10 32 18 V34 L28 31 L24 34 L20 31 L16 34 L12 31 Z" fill="#f4f5fa" stroke="#1b1b3a" stroke-width="2.5" stroke-linejoin="round"/><ellipse cx="15.5" cy="17" rx="2.5" ry="3.5" fill="#1b1b3a"/><ellipse cx="24.5" cy="17" rx="2.5" ry="3.5" fill="#1b1b3a"/><ellipse cx="20" cy="25" rx="3" ry="2" fill="#1b1b3a"/></svg>'},dl={banana:["Banana","drop behind"],green:["Green shell","fires straight"],red:["Red shell","chases next kart"],blue:["Spiny shell","hits 1st place"],boost:["Turbo","speed burst"],star:["Star power","unstoppable"],bolt:["Lightning","shrinks everyone"],fake:["Decoy box","fake item box"],coin:["Coins","more top speed"],horn:["Air horn","blast nearby"],bomb:["Bomb","throw \xB7 explodes"],ink:["Ink splat","blinds leaders"],golden:["Golden turbo","boost spam 7s"],ride:["Rocket ride","auto-drive fast"],ghost:["Ghost","steal an item"]};function Du(s){return s+(s===1?"st":s===2?"nd":s===3?"rd":"th")}function dx(s){if(s==null)return"--";let t=Math.floor(s/60),e=s-t*60;return t+":"+(e<10?"0":"")+e.toFixed(1)}var Ra=class{constructor(t,e){Z(this,"container",t);Z(this,"opts",e);Z(this,"renderer");Z(this,"scene",new As);Z(this,"track");Z(this,"particles",new Sa);Z(this,"physics");Z(this,"items",null);Z(this,"racers",[]);Z(this,"humans",[]);Z(this,"overview");Z(this,"overlay");Z(this,"banner");Z(this,"clock",new Qs(!1));Z(this,"raf",0);Z(this,"phase","countdown");Z(this,"countdown",0);Z(this,"step",-1);Z(this,"laps");Z(this,"firstHumanFinishAt",-1);Z(this,"elapsed",0);Z(this,"disposed",!1);Z(this,"finalLapMusic",!1);Z(this,"music",null);Z(this,"style");Z(this,"gradient",hl());Z(this,"shadows",new Map);Z(this,"padCooldown",new Map);Z(this,"onResize",()=>{let t=this.container.clientWidth,e=this.container.clientHeight;this.renderer.setSize(t,e);let n=this.views();this.humans.forEach((i,o)=>{let r=n[o];i.human.cam.onResize(r.w,r.h),Object.assign(i.human.hud.style,{left:r.x+"px",top:e-r.y-r.h+"px",width:r.w+"px",height:r.h+"px"});let a=Math.round(Math.min(r.h*.36,r.w*.2,210)),c=Math.round(Math.min(r.w,r.h)*.03),l=this.humans.length>1?44:60;Object.assign(i.human.ink.style,{left:r.x+"px",top:e-r.y-r.h+"px",width:r.w+"px",height:r.h+"px"}),Object.assign(i.human.banner.style,{left:r.x+"px",width:r.w+"px",top:e-r.y-r.h+r.h*.26+"px",fontSize:Math.round(Math.min(r.h*.13,72))+"px"}),Object.assign(i.human.map.style,{width:a+"px",height:a+"px",left:r.x+c+"px",top:e-r.y-a-c-l+"px"})}),n[3]&&this.humans.length===3&&this.overview.onResize(n[3].w,n[3].h),this.banner.style.fontSize=(this.humans.length>2?80:120)+"px"});Z(this,"loop",()=>{if(this.disposed)return;this.raf=requestAnimationFrame(this.loop);let t=Math.min(this.clock.getDelta(),.05);this.elapsed+=t,this.phase==="replay"?this.replayFrame():this.phase==="podium"?this.podiumFrame(t):this.update(t),this.render()});Z(this,"frames",[]);Z(this,"winnerFrame",-1);Z(this,"winnerId","");Z(this,"finalOrder",[]);Z(this,"cine",new Fe(50,16/9,.1,1500));Z(this,"replayAt",0);Z(this,"confetti",[]);Z(this,"labels",[]);Z(this,"recTick",0);Z(this,"podiumKarts",[]);Z(this,"podiumCenter",new P);Z(this,"podiumDir",{fx:0,fz:1});Z(this,"mapBase",null);Z(this,"mapXf",{cx:0,cz:0,k:1});this.laps=e.laps||3;let n=Math.min(e.players.length,4)>1;this.renderer=new _a({antialias:!n,powerPreference:"high-performance"}),this.renderer.setPixelRatio(e.quality==="high"?Math.min(window.devicePixelRatio,1.5):1),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.shadowMap.enabled=!n&&e.quality==="high",this.renderer.toneMapping=er,this.renderer.toneMappingExposure=1.05,this.renderer.setScissorTest(!0),t.appendChild(this.renderer.domElement),this.renderer.domElement.style.display="block";let i=Ma(e.course).theme;this.scene.add(new $s(16777215,i.ambient));let o=new Ks(i.sunColor,i.sun);o.position.set(100,150,80),o.castShadow=this.renderer.shadowMap.enabled,o.shadow.mapSize.set(1024,1024);let r=160;Object.assign(o.shadow.camera,{left:-r,right:r,top:r,bottom:-r,near:10,far:400}),this.scene.add(o),this.scene.add(new Zs(i.hemiSky,i.ground,.55)),this.track=new ba(this.scene,e.course),this.scene.add(this.particles.group),this.physics=new Ea(this.track,this.particles),this.physics.totalLaps=this.laps,e.items!==!1&&(this.items=new wa(this.scene,this.track),this.items.onEvent=c=>this.onItemEvent(c)),this.style=Cu(this.scene,this.track);let a=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());this.scene.traverse(c=>{let l=c.material;l&&l.map&&(l.map.anisotropy=a,l.map.needsUpdate=!0)}),this.overview=new xr(1),this.overview.setView("topdown"),this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;pointer-events:none;font-family:Inter,Segoe UI,Roboto,sans-serif;color:#fff",t.style.position=t.style.position||"relative",t.appendChild(this.overlay),this.banner=document.createElement("div"),this.banner.style.cssText='position:absolute;left:50%;top:42%;transform:translate(-50%,-50%);font:900 120px/1 "Space Grotesk",Inter,sans-serif;text-shadow:0 6px 0 rgba(0,0,0,.35),0 0 30px rgba(0,0,0,.4);transition:transform .15s;white-space:nowrap',this.overlay.appendChild(this.banner),this.build(),window.addEventListener("resize",this.onResize)}build(){let t=this.opts.players.slice(0,4),e=[],n=lx[this.opts.speed||"fast"]||1;t.forEach((r,a)=>{let c=r.stats||{spd:3,acc:3,hnd:3};e.push({id:r.id,name:r.name,isPlayer:!0,audioLead:a===0,color:r.color,accentColor:"#ffffff",helmetColor:r.color,visorColor:"#0f172a",number:a+1,...Iu(c.spd,c.acc,c.hnd,n),driftMultiplier:1.35,topper:r.topper||Lu[a%Lu.length]})});let i=new Set(t.map(r=>(r.driver||r.color).toLowerCase()));for(let r of this.opts.cpus===!1?[]:cx){if(e.length>=hx)break;if(i.has(r.id)||i.has(r.color.toLowerCase()))continue;let a=Iu(r.spd,r.acc,r.hnd,n);e.push({id:"cpu-"+r.id,name:r.name,isPlayer:!1,color:r.color,accentColor:r.accent,helmetColor:r.color,visorColor:"#0f172a",number:e.length+1,topSpeed:a.topSpeed*(.95+Math.random()*.04),acceleration:a.acceleration*.95,handling:a.handling,weight:a.weight,driftMultiplier:1.3,aiAggression:.9+Math.random()*.3,topper:r.topper})}e.filter(r=>!r.isPlayer).concat(e.filter(r=>r.isPlayer)).forEach((r,a)=>{let c=Eu(r);c.driverHead.scale.setScalar(1.18),ul(c.rootGroup,this.gradient),this.scene.add(c.rootGroup);let l=Pu();this.scene.add(l),this.shadows.set(r.id,l);let h={config:r,position:{x:a%2?3.5:-3.5,y:.1,z:-6-a*5.5},rotation:{y:Math.PI,pitch:0,roll:0},speed:0,angularVelocity:0,steerAngle:0,isDrifting:!1,driftDirection:0,driftTime:0,driftLevel:0,boostTimer:0,boostMultiplier:1,currentLap:1,lapDistance:0,totalDistance:0,splineProgress:0,checkpointIndex:0,lapTimes:[],currentLapTime:0,bestLapTime:null,totalRaceTime:0,rank:a+1,isFinished:!1,invulnerableTimer:0,spinOutTimer:0,shrinkTimer:0,starTimer:0},d={state:h,handles:c};if(r.isPlayer){let u=document.createElement("div");u.style.cssText="position:absolute;box-sizing:border-box;padding:2.2vh 2vw;display:flex;flex-direction:column;justify-content:space-between",this.overlay.appendChild(u);let f=document.createElement("canvas");f.width=f.height=256,f.style.cssText="position:absolute;pointer-events:none;filter:drop-shadow(0 4px 8px rgba(0,0,0,.45))",this.overlay.appendChild(f);let p=document.createElement("div");p.style.cssText="position:absolute;pointer-events:none;opacity:0;overflow:hidden",this.overlay.appendChild(p);let _=document.createElement("div");_.style.cssText='position:absolute;pointer-events:none;text-align:center;font:italic 900 64px/1 "Space Grotesk",Inter,sans-serif;color:#fff;-webkit-text-stroke:5px #1b1b3a;paint-order:stroke fill;opacity:0;white-space:nowrap',this.overlay.appendChild(_),d.human={idx:this.humans.length,cam:new xr(1),pad:{steer:0,gas:!1,brake:!1,drift:!1,item:!1},itemWas:!1,gasAt:-1,hud:u,map:f,banner:_,ink:p,finishedShown:!1},this.humans.push(d)}else d.ai=new Ti(this.track,h);this.racers.push(d)}),this.onResize()}setInput(t,e){let n=this.humans.find(i=>i.state.config.id===t);!n||!n.human||(e.gas&&!n.human.pad.gas&&(n.human.gasAt=this.countdown),Object.assign(n.human.pad,e))}hudInfo(){return this.humans.map(t=>{let e=this.items?this.items.held.get(t.state.config.id):void 0;return{p:t.state.config.id,rank:t.state.rank,of:this.racers.length,lap:Math.min(t.state.currentLap,this.laps),item:e?e.kind||"rolling":null,n:e&&e.kind?e.count:0,done:t.state.isFinished}})}start(){ee.init(),this.clock.start(),this.loop()}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),ee.stopEngine(),this.music?.stop(),window.removeEventListener("resize",this.onResize),this.renderer.dispose(),this.container.innerHTML=""}views(){let t=this.container.clientWidth,e=this.container.clientHeight,n=this.humans.length;return n<=1?[{x:0,y:0,w:t,h:e}]:n===2?[{x:0,y:e/2,w:t,h:e/2},{x:0,y:0,w:t,h:e/2}]:[{x:0,y:e/2,w:t/2,h:e/2},{x:t/2,y:e/2,w:t/2,h:e/2},{x:0,y:0,w:t/2,h:e/2},{x:t/2,y:0,w:t/2,h:e/2}]}update(t){this.track.update(this.elapsed,t),this.tickCountdown(t);let e=this.racers.map(r=>r.state),n=new Set,i={throttle:!1,brake:!1,steerLeft:!1,steerRight:!1,drift:!1,respawn:!1,cameraToggle:!1};for(let r of this.racers){let a=i;if(this.phase!=="countdown")if((r.state.rideTimer||0)>0)r.ai||(r.ai=new Ti(this.track,r.state)),a=r.ai.update(t,e);else if(r.human&&this.opts.autopilot)r.ai||(r.ai=new Ti(this.track,r.state)),a=r.ai.update(t,e);else if(r.human){let l=r.human.pad;r.state.isFinished?a=r.ai?r.ai.update(t,e):{...i,throttle:!0}:a={throttle:l.gas,brake:l.brake,steerLeft:!1,steerRight:!1,steer:l.steer,drift:l.drift,respawn:!1,cameraToggle:!1},this.items&&this.phase==="racing"&&(l.item&&!r.human.itemWas&&this.items.press(r.state.config.id,e),!l.item&&r.human.itemWas&&this.items.release(r.state.config.id,e)),r.human.itemWas=l.item}else r.ai&&(a=r.ai.update(t,e),(r.state.inkTimer||0)>0&&(a={...a,steer:(a.steer||0)+Math.sin(this.elapsed*3+r.state.position.x)*.5}));let c=r.state.currentLap;if(this.physics.updateRacer(r.state,a,r.handles,t,e),r.state.starTimer&&r.state.starTimer>0){let l=this.elapsed*2%1;r.handles.bodyGroup.traverse(h=>{let d=h.material;d&&d.emissive&&d.emissive.setHSL(l,1,.45)})}else r.state.starTimer!==void 0&&r.state.starTimer<=0&&r.state.starTimer>-1&&(r.handles.bodyGroup.traverse(l=>{let h=l.material;h&&h.emissive&&h.emissive.setRGB(0,0,0)}),r.state.starTimer=-1);this.phase==="racing"&&!r.state.isFinished&&(r.state.currentLapTime+=t,r.state.totalRaceTime+=t,r.state.currentLap!==c&&r.state.currentLap<=this.laps&&(this.opts.onEvent?.({type:"lap",racer:r.state.config.id,lap:r.state.currentLap,final:r.state.currentLap===this.laps}),r.human&&this.say(r,r.state.currentLap===this.laps?"FINAL LAP!":"LAP "+r.state.currentLap,r.state.currentLap===this.laps?"#ffc83d":"#ffffff",1500),r.human&&r.state.currentLap===this.laps&&!this.finalLapMusic&&(this.finalLapMusic=!0,this.music?.finalLap())),r.state.currentLap>this.laps&&(r.state.isFinished=!0,r.state.finishRank=this.racers.filter(l=>l.state.isFinished).length,r.state.finishRank===1&&(this.winnerFrame=this.frames.length,this.winnerId=r.state.config.id),r.human&&(r.ai||(r.ai=new Ti(this.track,r.state)),this.firstHumanFinishAt<0&&(this.firstHumanFinishAt=this.elapsed),this.opts.onEvent?.({type:"finish",racer:r.state.config.id,rank:r.state.finishRank}),this.say(r,r.state.finishRank===1?"1ST PLACE!":"FINISH!",r.state.finishRank===1?"#ffc83d":"#ffffff",2200),ee.playFinishFanfare())))}let o=[...this.racers].sort((r,a)=>{let c=r.state.finishRank||99,l=a.state.finishRank||99;return c!==l?c-l:a.state.totalDistance-r.state.totalDistance});o.forEach((r,a)=>{r.state.rank=a+1}),this.phase==="racing"&&(this.detectMoments(),this.record()),this.items&&this.phase!=="countdown"&&this.items.update(t,this.elapsed,e,n,(r,a)=>{let c=this.racers.find(l=>l.state.config.id===r);c&&c.handles.rootGroup.scale.setScalar(Pe.lerp(c.handles.rootGroup.scale.x,a,t*6))}),this.style.update(this.elapsed);for(let r of this.racers){let a=(r.state.ghostTimer||0)>0;if(a!==!!r.handles.rootGroup.userData.ghost&&(r.handles.rootGroup.userData.ghost=a,r.handles.rootGroup.traverse(h=>{let d=h.material;d&&(d.transparent=a||d.transparent,d.opacity=a?.25:1)})),r.human){let h=(r.state.inkTimer||0)>0,d=r.human.ink;h&&d.style.opacity!=="1"?(d.innerHTML=px(),d.style.transition="opacity .1s",d.style.opacity="1",mx(d)):!h&&d.style.opacity==="1"&&(d.style.transition="opacity .9s",d.style.opacity="0")}let c=this.shadows.get(r.state.config.id);c&&(c.position.set(r.state.position.x,r.state.position.y+.06,r.state.position.z),c.rotation.z=r.state.rotation.y,c.scale.setScalar(r.handles.rootGroup.scale.x));let l=(this.padCooldown.get(r.state.config.id)||0)-t;if(this.padCooldown.set(r.state.config.id,l),l<=0&&this.phase==="racing")for(let h of this.style.pads){let d=r.state.position.x-h.x,u=r.state.position.z-h.z;if(d*d+u*u<7){r.state.boostTimer=Math.max(r.state.boostTimer,1.1),r.state.boostMultiplier=Math.max(r.state.boostMultiplier,1.45),r.state.speed=Math.max(r.state.speed,r.state.config.topSpeed*1.15),this.padCooldown.set(r.state.config.id,.8),r.human&&r.state.config.audioLead&&ee.playBoostSound();break}}}this.particles.update(t);for(let r of this.humans)r.human.cam.update(r.state,t);this.humans.length===3&&this.overview.update(o[0].state,t),this.drawHud(),this.drawMaps(),this.phase==="racing"&&(this.humans.every(a=>a.state.isFinished)||this.firstHumanFinishAt>=0&&this.elapsed-this.firstHumanFinishAt>25)&&this.finish(o)}tickCountdown(t){if(this.phase!=="countdown"&&this.countdown>5)return;this.countdown+=t;let e=this.countdown,n=e<1?0:e<2?1:e<3?2:e<4?3:e<5?4:5;if(n===this.step)return;this.step=n;let i=["","3","2","1","GO!",""][n];if(this.banner.textContent=i,this.banner.style.color=n===4?"#5ee6c8":"#ffffff",this.banner.style.transform="translate(-50%,-50%) scale(1.25)",setTimeout(()=>{this.banner.style.transform="translate(-50%,-50%) scale(1)"},120),n>=1&&n<=3&&(ee.playCountdownBeep(!1),this.track.setStartingLights(n)),n===4){ee.playCountdownBeep(!0),this.track.setStartingLights(4),this.phase="racing",(!this.opts.autopilot||this.opts.music)&&(this.music=new Aa(this.opts.course||"meadow"),this.music.start());for(let o of this.humans){let r=o.human.gasAt;o.human.pad.gas&&r>=3.5&&r<4.05&&this.physics.triggerStartBoost(o.state)}}n===5&&this.track.setStartingLights(0)}finish(t){this.phase="done";let e=t.map((n,i)=>({id:n.state.config.id,name:n.state.config.name,color:n.state.config.color,human:!!n.human,rank:i+1,time:n.state.isFinished?n.state.totalRaceTime:null,bestLap:n.state.bestLapTime}));this.banner.textContent="FINISH!",this.banner.style.color="#ffc83d",this.finalOrder=t,this.music?.stop(),ee.stopEngine(),setTimeout(()=>this.startReplay(),1800),setTimeout(()=>this.startPodium(),8300),setTimeout(()=>{this.phase="done",this.opts.onFinish?.(e)},15300)}record(){if(++this.recTick%2)return;let t=new Float32Array(this.racers.length*5);this.racers.forEach((e,n)=>{let i=e.state;t.set([i.position.x,i.position.y,i.position.z,i.rotation.y+(i.slideAngle||0)*.6,i.rotation.roll],n*5)}),this.frames.push(t)}hideHud(t){for(let e of this.humans)e.human.hud.style.display=e.human.map.style.display=e.human.banner.style.display=t?"none":""}startReplay(){this.disposed||this.winnerFrame<0||(this.phase="replay",this.replayAt=Math.max(0,this.winnerFrame-120),this.hideHud(!0),this.banner.innerHTML='<span style="font-size:.35em;letter-spacing:.1em;color:#ff5d5d">\u25CF REPLAY</span>',this.banner.style.top="8%",this.banner.style.left="10%")}replayFrame(){let t=Math.min(this.frames.length-1,this.winnerFrame+45),e=Math.min(t,Math.floor(this.replayAt)),n=this.frames[e];if(!n)return;this.racers.forEach((h,d)=>{let u=h.handles.rootGroup;u.position.set(n[d*5],n[d*5+1],n[d*5+2]),u.rotation.y=n[d*5+3],u.rotation.z=n[d*5+4];let f=this.shadows.get(h.state.config.id);f&&(f.position.set(n[d*5],n[d*5+1]+.06,n[d*5+2]),f.rotation.z=n[d*5+3])});let i=this.racers.findIndex(h=>h.state.config.id===this.winnerId),o=n[i*5],r=n[i*5+1],a=n[i*5+2],c=n[i*5+3],l=(e-(this.winnerFrame-120))/165;if(l<.5){let d=3-l*6;this.cine.position.set(o+Math.cos(c)*7-Math.sin(c)*d,r+1.4,a-Math.sin(c)*7-Math.cos(c)*d)}else{let h=this.track.trackPoints,d=h[h.length-6];this.cine.position.set(d.x-d.normalX*15,d.y+3.5,d.z-d.normalZ*15)}this.cine.lookAt(o,r+.8,a),this.replayAt+=.75}startPodium(){if(this.disposed)return;this.phase="podium",ee.playFinishFanfare();let t=this.finalOrder.slice(0,3),e=this.track.trackPoints[Math.floor(this.track.trackPoints.length*.06)],n=new P(e.x,e.y,e.z),i=Math.atan2(e.tangentX,e.tangentZ)+Math.PI,o=Math.sin(i),r=Math.cos(i),a=Math.cos(i),c=-Math.sin(i);this.racers.forEach(u=>{if(!t.includes(u)){u.handles.rootGroup.visible=!1;let f=this.shadows.get(u.state.config.id);f&&(f.visible=!1)}});let l=[[0,2.4,"#ffc83d"],[-4.6,1.6,"#c9d3e6"],[4.6,1,"#e08a4c"]];this.podiumKarts=[],t.forEach((u,f)=>{let[p,_,g]=l[f],m=new j(new te(4.2,_,4.2),new At({color:g,roughness:.4}));m.position.set(n.x+a*p,n.y+_/2,n.z+c*p),m.rotation.y=i;let b=document.createElement("canvas");b.width=b.height=128;let S=b.getContext("2d");S.fillStyle="#1b1b3a",S.font="italic 900 96px sans-serif",S.textAlign="center",S.textBaseline="middle",S.fillText(String(f+1),64,70);let v=new j(new Le(2,2),new ve({map:new Me(b),transparent:!0}));v.position.set(m.position.x+o*2.12,n.y+_/2,m.position.z+r*2.12),v.rotation.y=i,this.scene.add(m,v);let w=u.handles.rootGroup;w.visible=!0,w.position.set(m.position.x,n.y+_,m.position.z),w.rotation.set(0,i,0),this.podiumKarts.push({r:u,y:n.y+_,i:f});let E=document.createElement("div");E.style.cssText='position:absolute;transform:translate(-50%,-100%);text-align:center;font:italic 900 34px "Space Grotesk",Inter,sans-serif;color:#fff;-webkit-text-stroke:4px #1b1b3a;paint-order:stroke fill;white-space:nowrap',E.innerHTML='<span style="color:'+["#ffc83d","#dfe7ff","#f0a46b"][f]+'">'+["1ST","2ND","3RD"][f]+"</span> "+fl(u.state.config.name),this.overlay.appendChild(E),this.labels.push(E)}),this.cine.position.set(n.x+o*12,n.y+4.5,n.z+r*12),this.cine.lookAt(n.x,n.y+2,n.z),this.podiumCenter=n,this.podiumDir={fx:o,fz:r};let h=[16735631,16762941,5032432,6219464,10185727,16777215];for(let u=0;u<160;u++){let f=new j(new Le(.25,.4),new ve({color:h[u%h.length],side:Xe}));f.position.set(n.x+(Math.random()-.5)*18,n.y+6+Math.random()*10,n.z+(Math.random()-.5)*18),f.userData.v=1.5+Math.random()*2,this.scene.add(f),this.confetti.push(f)}let d=t[0];this.banner.innerHTML=fl(d.state.config.name)+" WINS!",this.banner.style.color="#ffc83d",this.banner.style.top="9%",this.banner.style.left="50%",this.banner.style.fontSize="72px"}podiumFrame(t){let e=this.elapsed;for(let c of this.podiumKarts){let l=c.r.handles.rootGroup,h=c.i===0?Math.abs(Math.sin(e*5))*.9:Math.abs(Math.sin(e*4+c.i))*.4;l.position.y=c.y+h,c.i===0&&(l.rotation.y+=t*(Math.sin(e*.7)>.6?6:0)),c.r.handles.driverHead.rotation.z=Math.sin(e*8+c.i)*.25;let d=l.position.clone();d.y+=3.2,d.project(this.cine);let u=this.container.clientWidth,f=this.container.clientHeight,p=this.labels[c.i];p&&(p.style.left=(d.x*.5+.5)*u+"px",p.style.top=(-d.y*.5+.5)*f+"px")}for(let c of this.confetti)c.position.y-=c.userData.v*t,c.rotation.x+=t*4,c.rotation.y+=t*3,c.position.y<this.podiumCenter.y&&(c.position.y+=16);let n=Math.sin(e*.3)*.35,{fx:i,fz:o}=this.podiumDir,r=i*Math.cos(n)-o*Math.sin(n),a=i*Math.sin(n)+o*Math.cos(n);this.cine.position.set(this.podiumCenter.x+r*12,this.podiumCenter.y+4.5,this.podiumCenter.z+a*12),this.cine.lookAt(this.podiumCenter.x,this.podiumCenter.y+2.2,this.podiumCenter.z)}onItemEvent(t){this.opts.onEvent?.(t);let e=this.humans.find(i=>i.state.config.id===t.racer),n=t.by?this.humans.find(i=>i.state.config.id===t.by):void 0;if(t.type==="hit")e&&this.say(e,t.item==="blue"?"ZAPPED!":"HIT!","#ff5d5d"),n&&n!==e&&this.say(n,"NICE HIT!","#5ee6c8");else if(t.type==="block"&&e)this.say(e,"BLOCKED!","#8fb4ff",900);else if(t.type==="bolt")for(let i of this.humans)i!==e&&!((i.state.starTimer||0)>0)&&this.say(i,"SHRUNK!","#fff15a");else t.type==="use"&&e&&t.item==="star"?this.say(e,"STAR POWER!","#ffd34d"):t.type==="use"&&e&&t.item==="ride"?this.say(e,"ROCKET RIDE!","#ff7a00"):t.type==="use"&&e&&t.item==="ghost"?this.say(e,"GHOST!","#e8ecff"):t.type==="use"&&e&&t.item==="coin"?this.say(e,"+2 COINS","#ffc83d",700):t.type==="use"&&e&&t.item==="golden"?this.say(e,"GOLDEN TURBO!","#ffc83d",700):t.type==="ink"&&e?this.say(e,"SPLAT!","#c9a8ff"):t.type==="steal"?(e&&this.say(e,"STOLEN!","#ff5d5d"),n&&n!==e&&this.say(n,"GOT IT!","#5ee6c8")):t.type==="horn"&&e&&this.say(e,"HONK!","#ffffff",700)}render(){if(this.phase==="replay"||this.phase==="podium"){let e=this.container.clientWidth,n=this.container.clientHeight;this.cine.aspect=e/n,this.cine.updateProjectionMatrix(),this.renderer.setViewport(0,0,e,n),this.renderer.setScissor(0,0,e,n),this.renderer.render(this.scene,this.cine);return}let t=this.views();if(this.humans.forEach((e,n)=>{let i=t[n];this.renderer.setViewport(i.x,i.y,i.w,i.h),this.renderer.setScissor(i.x,i.y,i.w,i.h),this.renderer.render(this.scene,e.human.cam.camera)}),this.humans.length===3){let e=t[3];this.renderer.setViewport(e.x,e.y,e.w,e.h),this.renderer.setScissor(e.x,e.y,e.w,e.h),this.renderer.render(this.scene,this.overview.camera)}}say(t,e,n="#ffffff",i=1100){let o=t.human.banner;o.textContent=e,o.style.color=n,o.animate([{opacity:0,transform:"scale(2.2) rotate(-6deg)"},{opacity:1,transform:"scale(1) rotate(-4deg)",offset:.15},{opacity:1,transform:"scale(1.05) rotate(-4deg)",offset:.75},{opacity:0,transform:"scale(0.9) translateY(-20px) rotate(-4deg)"}],{duration:i,easing:"cubic-bezier(.2,.9,.3,1.2)",fill:"forwards"})}emit(t){this.opts.onEvent?.(t)}detectMoments(){for(let t of this.humans){let e=t.human,n=t.state,i=n.config.id;if(n.isFinished)continue;if(e.rankCalm=(e.rankCalm||0)-1,e.lastRank!==void 0&&n.rank<e.lastRank&&e.rankCalm<=0&&(this.say(t,n.rank===1?"TAKE THE LEAD!":"OVERTAKE!","#5ee6c8"),this.emit({type:"overtake",racer:i,rank:n.rank}),e.rankCalm=45),e.lastRank=n.rank,n.bumpedAt&&n.bumpedAt!==e.lastBump&&(e.lastBump=n.bumpedAt,this.emit({type:"bump",racer:i})),n.isDrifting&&(e.driftLvl=n.driftLevel),e.wasDrifting&&!n.isDrifting&&(e.driftLvl||0)>0){let r=e.driftLvl||1;this.say(t,r===3?"ULTRA BOOST!":r===2?"SUPER BOOST!":"BOOST!",r===3?"#c084fc":r===2?"#fb923c":"#38bdf8",800),this.emit({type:"mtboost",racer:i,level:r}),e.driftLvl=0}n.isDrifting&&n.driftLevel>(e.driftLvl===void 0?0:-1),e.wasDrifting=n.isDrifting;let o=this.track.onShortcut(n.position.x,n.position.z)!==null&&this.track.getClosestTrackPoint(n.position.x,n.position.z).distanceToCenter>this.track.roadWidth/2+.5;o&&!e.onDirt&&this.say(t,n.boostTimer>0?"SHORTCUT!":"DIRT! BOOST THROUGH","#ffc83d",900),e.onDirt=o}}toMap(t,e){return[128+(t-this.mapXf.cx)*this.mapXf.k,128+(e-this.mapXf.cz)*this.mapXf.k]}buildMapBase(){let t=this.track.trackPoints,e=1e9,n=-1e9,i=1e9,o=-1e9;for(let f of t)e=Math.min(e,f.x),n=Math.max(n,f.x),i=Math.min(i,f.z),o=Math.max(o,f.z);this.mapXf={cx:(e+n)/2,cz:(i+o)/2,k:220/Math.max(n-e,o-i)};let r=document.createElement("canvas");r.width=r.height=256;let a=r.getContext("2d"),c=()=>{a.beginPath(),t.forEach((f,p)=>{let[_,g]=this.toMap(f.x,f.z);p?a.lineTo(_,g):a.moveTo(_,g)}),a.closePath()};a.lineJoin="round",a.lineCap="round",c(),a.strokeStyle="#1b1b3a",a.lineWidth=22,a.stroke(),c(),a.strokeStyle="#ffffff",a.lineWidth=15,a.stroke(),c(),a.strokeStyle="#c9d3e6",a.lineWidth=9,a.stroke();let l=t[0],[h,d]=this.toMap(l.x,l.z),u=Math.atan2(l.normalZ,l.normalX);a.save(),a.translate(h,d),a.rotate(u);for(let f=-3;f<3;f++)for(let p=0;p<2;p++)a.fillStyle=(f+p)%2?"#1b1b3a":"#ffffff",a.fillRect(f*3,p*3-3,3,3);a.restore(),this.mapBase=r}drawMaps(){this.mapBase||this.buildMapBase();let t=.5+.5*Math.sin(this.elapsed*6),e=[...this.racers].sort((n,i)=>(n.human?1:0)-(i.human?1:0)||i.state.rank-n.state.rank);for(let n of this.humans){let i=n.human.map.getContext("2d");i.clearRect(0,0,256,256),i.drawImage(this.mapBase,0,0);for(let c of e){if(c===n)continue;let[l,h]=this.toMap(c.state.position.x,c.state.position.z),d=c.human?9:6.5;i.beginPath(),i.arc(l,h,d,0,Math.PI*2),i.fillStyle=c.state.config.color,i.fill(),i.lineWidth=c.human?3.5:2.5,i.strokeStyle=c.human?"#ffffff":"#1b1b3a",i.stroke()}let[o,r]=this.toMap(n.state.position.x,n.state.position.z),a=n.state.rotation.y;i.beginPath(),i.arc(o,r,15+t*5,0,Math.PI*2),i.strokeStyle="rgba(255,200,61,"+(.9-t*.6)+")",i.lineWidth=4,i.stroke(),i.save(),i.translate(o,r),i.rotate(Math.atan2(Math.cos(a),Math.sin(a))),i.beginPath(),i.moveTo(21,0),i.lineTo(9,-8),i.lineTo(9,8),i.closePath(),i.fillStyle="#ffc83d",i.fill(),i.lineWidth=2.5,i.strokeStyle="#1b1b3a",i.stroke(),i.restore(),i.beginPath(),i.arc(o,r,11,0,Math.PI*2),i.fillStyle=n.state.config.color,i.fill(),i.lineWidth=4,i.strokeStyle="#ffffff",i.stroke(),i.beginPath(),i.arc(o,r,13.5,0,Math.PI*2),i.lineWidth=2,i.strokeStyle="#1b1b3a",i.stroke()}}drawHud(){let t=this.humans.length>1;for(let e of this.humans){let n=e.state,i=this.items?this.items.held.get(n.config.id):void 0,o=i?ux[i.shown]:"",r=Math.min(n.currentLap,this.laps),a=r===this.laps&&!n.isFinished&&this.phase==="racing",c=n.isDrifting?["#ffffff","#38bdf8","#fb923c","#c084fc"][n.driftLevel]:"transparent",l=t?64:104,h=n.rank===1?"linear-gradient(#fff6a8,#ffc21a 55%,#e88a00)":n.rank===2?"linear-gradient(#ffffff,#c9d3e6 60%,#8e9bb5)":n.rank===3?"linear-gradient(#ffd9b3,#e08a4c 60%,#a85a2a)":"linear-gradient(#ffffff,#dfe7ff)",d='<div style="display:flex;justify-content:space-between;align-items:flex-start"><div style="width:'+(t?70:100)+"px;height:"+(t?70:100)+"px;border-radius:22px;background:radial-gradient(circle at 50% 40%,#3a4a8a,#141a3a);border:5px solid #fff;box-shadow:0 0 0 4px "+(i&&!i.kind?"#ffc83d":"#1b1b3a")+',0 6px 14px rgba(0,0,0,.45);padding:10px;box-sizing:border-box;position:relative">'+o+(i&&i.kind&&dl[i.kind]?'<div style="position:absolute;left:0;top:100%;margin-top:'+(t?8:12)+'px;white-space:nowrap;text-shadow:0 2px 4px rgba(0,0,0,.8)"><div style="font:900 '+(t?15:20)+'px Inter,sans-serif;color:#fff">'+dl[i.kind][0]+'</div><div style="font:700 '+(t?12:15)+'px Inter,sans-serif;color:#ffc83d">'+dl[i.kind][1]+"</div></div>":"")+(i&&i.kind&&i.count>1?'<span style="position:absolute;right:-12px;bottom:-12px;font:italic 900 '+(t?20:28)+`px 'Space Grotesk',Inter,sans-serif;color:#fff;-webkit-text-stroke:3px #1b1b3a;paint-order:stroke fill">\xD7`+i.count+"</span>":"")+'</div><div style="text-align:right;text-shadow:0 2px 6px rgba(0,0,0,.6)"><div style="font:italic 900 '+(t?24:36)+"px 'Space Grotesk',Inter,sans-serif;color:"+(a?"#ffc83d":"#fff")+";-webkit-text-stroke:"+(t?2:3)+'px #1b1b3a;paint-order:stroke fill;letter-spacing:1px">'+(n.isFinished?"FINISH!":a?"FINAL LAP!":"LAP "+r+"/"+this.laps)+'</div><div style="font:600 '+(t?14:18)+'px Inter,sans-serif;opacity:.9">'+dx(n.totalRaceTime)+'</div></div></div><div style="display:flex;justify-content:space-between;align-items:flex-end"><div style="display:flex;align-items:center;gap:10px;background:rgba(14,16,32,.6);border-radius:999px;padding:6px 14px 6px 6px"><span style="width:'+(t?22:30)+"px;height:"+(t?22:30)+"px;border-radius:50%;background:"+n.config.color+";box-shadow:0 0 0 3px "+c+'"></span><span style="font:700 '+(t?16:22)+'px Inter,sans-serif">'+fl(n.config.name)+'</span><span style="display:inline-flex;align-items:center;gap:4px;font:800 '+(t?15:20)+'px Inter,sans-serif;color:#ffc83d"><span style="width:'+(t?14:18)+"px;height:"+(t?14:18)+'px;border-radius:50%;background:#ffc83d;border:2px solid #1b1b3a;box-sizing:border-box"></span>'+(n.coins||0)+'</span></div><div style="position:relative;font:italic 900 '+l+`px/0.9 'Space Grotesk',Inter,sans-serif;transform:skewX(-6deg)"><span style="position:absolute;inset:0;-webkit-text-stroke:`+(t?8:12)+'px #1b1b3a;color:#1b1b3a">'+Du(n.rank)+'</span><span style="position:relative;background:'+h+';-webkit-background-clip:text;background-clip:text;color:transparent">'+Du(n.rank)+"</span></div></div>";e.human.hud.innerHTML!==d&&(e.human.hud.innerHTML=d)}}};function fx(s,t,e){let i=[];for(let r=0;r<22;r++){let a=r/22*Math.PI*2,c=Math.random()<.28?1.35+Math.random()*.55:.78+Math.random()*.28;i.push([s+Math.cos(a)*e*c,t+Math.sin(a)*e*c])}let o="";for(let r=0;r<22;r++){let a=i[(r-1+22)%22],c=i[r],l=i[(r+1)%22],h=i[(r+2)%22];r===0&&(o+="M"+c[0].toFixed(1)+" "+c[1].toFixed(1));let d=c[0]+(l[0]-a[0])/6,u=c[1]+(l[1]-a[1])/6,f=l[0]-(h[0]-c[0])/6,p=l[1]-(h[1]-c[1])/6;o+="C"+d.toFixed(1)+" "+u.toFixed(1)+" "+f.toFixed(1)+" "+p.toFixed(1)+" "+l[0].toFixed(1)+" "+l[1].toFixed(1)}return o+"Z"}function px(){let s="";return[[28,38,30],[64,48,36],[46,66,24],[78,26,20],[16,70,18]].forEach(([e,n,i],o)=>{let r=e+(Math.random()-.5)*12,a=n+(Math.random()-.5)*12,c=i*(.85+Math.random()*.35),l="ink"+Math.random().toString(36).slice(2,7),h="";for(let u=0;u<7;u++){let f=Math.random()*Math.PI*2,p=58+Math.random()*30,_=2.5+Math.random()*5;h+='<circle cx="'+(100+Math.cos(f)*p).toFixed(1)+'" cy="'+(100+Math.sin(f)*p).toFixed(1)+'" r="'+_.toFixed(1)+'"/>'}let d="";for(let u=0;u<3;u++){let f=70+Math.random()*60,p=5+Math.random()*6,_=30+Math.random()*60;d+='<g class="drip" style="transform-origin:'+f+'px 120px"><rect x="'+(f-p/2).toFixed(1)+'" y="110" width="'+p.toFixed(1)+'" height="'+_.toFixed(1)+'" rx="'+(p/2).toFixed(1)+'"/><circle cx="'+f.toFixed(1)+'" cy="'+(110+_).toFixed(1)+'" r="'+(p*.8).toFixed(1)+'"/></g>'}s+='<svg class="splat" viewBox="0 0 200 240" style="position:absolute;left:'+r.toFixed(1)+"%;top:"+a.toFixed(1)+"%;width:"+c.toFixed(1)+"%;transform:translate(-50%,-42%) rotate("+Math.round(Math.random()*360)+'deg);filter:drop-shadow(0 6px 8px rgba(0,0,0,.45));opacity:0" data-k="'+o+'"><defs><radialGradient id="'+l+'" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#5b34a3"/><stop offset=".55" stop-color="#34196b"/><stop offset="1" stop-color="#1c0c3f"/></radialGradient></defs><g fill="url(#'+l+')">'+d+'<path d="'+fx(100,100,52)+'"/>'+h+'</g><ellipse cx="82" cy="76" rx="20" ry="11" fill="#fff" opacity=".22" transform="rotate(-25 82 76)"/><circle cx="104" cy="66" r="5" fill="#fff" opacity=".3"/></svg>'}),s}function mx(s){s.querySelectorAll("svg.splat").forEach(t=>{let e=Number(t.getAttribute("data-k"))||0,n=t.style.transform;t.animate([{opacity:0,transform:n+" scale(0.2)"},{opacity:1,transform:n+" scale(1.18)",offset:.55},{opacity:1,transform:n+" scale(1)"}],{duration:260,delay:e*110,easing:"cubic-bezier(.2,1.4,.4,1)",fill:"forwards"}),t.querySelectorAll("g.drip").forEach(i=>{i.animate([{transform:"scaleY(0.05)"},{transform:"scaleY(1)"}],{duration:2600,delay:400+e*110,easing:"ease-in",fill:"forwards"})})})}function fl(s){return s.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}var gx=()=>ee.init();["pointerdown","keydown","click","touchstart"].forEach(s=>document.addEventListener(s,gx,{capture:!0}));function xx(s,t){t.audioContext&&ee.adopt(t.audioContext);let e=new Ra(s,t);return e.start(),window.CouchKart.current=e,e}function _x(){try{let s=document.createElement("canvas");return!!(s.getContext("webgl2")||s.getContext("webgl"))}catch{return!1}}window.CouchKart={start:xx,supported:_x,version:1,soundOn:()=>ee.running()};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
