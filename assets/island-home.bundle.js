(()=>{var Si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sc=0,Uo=1,rc=2;var ni=1,ac=2,vs=3,Ei=0,Ze=1,bn=2,ki=0,Ms=1,Fo=2,Oo=3,Bo=4,oc=5;var Vi=100,lc=101,cc=102,hc=103,uc=104,dc=200,fc=201,pc=202,mc=203,zo=204,Ho=205,gc=206,_c=207,xc=208,yc=209,vc=210,Mc=211,Sc=212,bc=213,Ec=214,Fr=0,Or=1,Br=2,cs=3,zr=4,Hr=5,Gr=6,kr=7,Go=0,wc=1,Tc=2,On=0,ko=1,Vo=2,Wo=3,Wi=4,Xo=5,qo=6,Yo=7;var Zo=300,Xi=301,Ss=302,da=303,fa=304,Vr=1e3,Un=1001,Wr=1002,Ve=1003,Ac=1004;var nr=1005;var rn=1006,pa=1007;var ii=1008;var cn=1009,Jo=1010,$o=1011,bs=1012,ma=1013,Rn=1014,Cn=1015,In=1016,ga=1017,_a=1018,qi=1020,Ko=35902,jo=35899,Qo=1021,tl=1022,Pn=1023,Kn=1026,si=1027,el=1028,xa=1029,wi=1030,ya=1031;var va=1033,ir=33776,sr=33777,rr=33778,ar=33779,Ma=35840,Sa=35841,ba=35842,Ea=35843,wa=36196,Ta=37492,Aa=37496,Ra=37488,Ca=37489,or=37490,Ia=37491,Pa=37808,La=37809,Da=37810,Na=37811,Ua=37812,Fa=37813,Oa=37814,Ba=37815,za=37816,Ha=37817,Ga=37818,ka=37819,Va=37820,Wa=37821,Xa=36492,qa=36494,Ya=36495,Za=36283,Ja=36284,lr=36285,$a=36286;var zs=2300,Xr=2301,Nr=2302,To=2303,Ao=2400,Ro=2401,Co=2402;var Rc=3200;var Ka=0,Cc=1,ri="",Ye="srgb",Hs="srgb-linear",Gs="linear",pe="srgb";var Ur=7680;var Ic=519,Pc=512,Lc=513,Dc=514,nl=515,Nc=516,Uc=517,il=518,sl=519,Fc=35044;var rl="300 es",Mn=2e3,hs=2001;function Uh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Fh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Oc(){let i=ks("canvas");return i.style.display="block",i}var Ll={},us=null;function al(...i){let t="THREE."+i.shift();us?us("log",t,...i):console.log(t,...i)}function Bc(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Zt(...i){i=Bc(i);let t="THREE."+i.shift();if(us)us("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Qt(...i){i=Bc(i);let t="THREE."+i.shift();if(us)us("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Fs(...i){let t=i.join(" ");t in Ll||(Ll[t]=!0,Zt(...i))}function zc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Hc={[Fr]:Fr,[Br]:Gr,[zr]:zr,[cs]:Hr,[Or]:Or,[Gr]:Br,[kr]:kr,[Hr]:cs},An=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dl=1234567,Os=Math.PI/180,ds=180/Math.PI;function Es(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function oe(i,t,e){return Math.max(t,Math.min(e,i))}function ol(i,t){return(i%t+t)%t}function Oh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Bh(i,t,e){return i!==t?(e-i)/(t-i):0}function Bs(i,t,e){return(1-e)*i+e*t}function zh(i,t,e,n){return Bs(i,t,1-Math.exp(-e*n))}function Hh(i,t=1){return t-Math.abs(ol(i,t*2)-t)}function Gh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function kh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Vh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Wh(i,t){return i+Math.random()*(t-i)}function Xh(i){return i*(.5-Math.random())}function qh(i){i!==void 0&&(Dl=i);let t=Dl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yh(i){return i*Os}function Zh(i){return i*ds}function Jh(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function $h(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ll(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kh(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),g=r((t-n)/2),f=a((t-n)/2),u=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*g,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*g,o*c);break;case"ZXZ":i.set(l*g,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*u,o*c);break;case"YXY":i.set(l*u,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*u,o*h,o*c);break;default:Zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function cl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Gc(i,t){if(t.constructor===Float32Array)return i;let e=cl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function kc(i,t){if(t.constructor===Float32Array)return i;let e=cl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var cr={DEG2RAD:Os,RAD2DEG:ds,generateUUID:Es,clamp:oe,euclideanModulo:ol,mapLinear:Oh,inverseLerp:Bh,lerp:Bs,damp:zh,pingpong:Hh,smoothstep:Gh,smootherstep:kh,randInt:Vh,randFloat:Wh,randFloatSpread:Xh,seededRandom:qh,degToRad:Yh,radToDeg:Zh,isPowerOfTwo:Jh,ceilPowerOfTwo:$h,floorPowerOfTwo:ll,setQuaternionFromProperEuler:Kh,normalize:kc,denormalize:Gc},pl=class pl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pl.prototype.isVector2=!0;var kt=pl,mn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],g=n[s+3],f=r[a+0],u=r[a+1],m=r[a+2],E=r[a+3];if(g!==E||l!==f||c!==u||h!==m){let p=l*f+c*u+h*m+g*E;p<0&&(f=-f,u=-u,m=-m,E=-E,p=-p);let d=1-o;if(p<.9995){let v=Math.acos(p),L=Math.sin(v);d=Math.sin(d*v)/L,o=Math.sin(o*v)/L,l=l*d+f*o,c=c*d+u*o,h=h*d+m*o,g=g*d+E*o}else{l=l*d+f*o,c=c*d+u*o,h=h*d+m*o,g=g*d+E*o;let v=1/Math.sqrt(l*l+c*c+h*h+g*g);l*=v,c*=v,h*=v,g*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=g}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],g=r[a],f=r[a+1],u=r[a+2],m=r[a+3];return t[e]=o*m+h*g+l*u-c*f,t[e+1]=l*m+h*f+c*g-o*u,t[e+2]=c*m+h*u+o*f-l*g,t[e+3]=h*m-o*g-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),g=o(r/2),f=l(n/2),u=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*g+c*u*m,this._y=c*u*g-f*h*m,this._z=c*h*m+f*u*g,this._w=c*h*g-f*u*m;break;case"YXZ":this._x=f*h*g+c*u*m,this._y=c*u*g-f*h*m,this._z=c*h*m-f*u*g,this._w=c*h*g+f*u*m;break;case"ZXY":this._x=f*h*g-c*u*m,this._y=c*u*g+f*h*m,this._z=c*h*m+f*u*g,this._w=c*h*g-f*u*m;break;case"ZYX":this._x=f*h*g-c*u*m,this._y=c*u*g+f*h*m,this._z=c*h*m-f*u*g,this._w=c*h*g+f*u*m;break;case"YZX":this._x=f*h*g+c*u*m,this._y=c*u*g+f*h*m,this._z=c*h*m-f*u*g,this._w=c*h*g-f*u*m;break;case"XZY":this._x=f*h*g-c*u*m,this._y=c*u*g-f*h*m,this._z=c*h*m+f*u*g,this._w=c*h*g+f*u*m;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],g=e[10],f=n+o+g;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>g){let u=2*Math.sqrt(1+n-o-g);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>g){let u=2*Math.sqrt(1+o-n-g);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+g-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ml=class ml{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),g=2*(r*n-a*e);return this.x=e+l*c+a*g-o*h,this.y=n+l*h+o*c-r*g,this.z=s+l*g+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ro.copy(this).projectOnVector(t),this.sub(ro)}reflect(t){return this.sub(ro.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ml.prototype.isVector3=!0;var W=ml,ro=new W,Nl=new mn,gl=class gl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],g=n[7],f=n[2],u=n[5],m=n[8],E=s[0],p=s[3],d=s[6],v=s[1],L=s[4],w=s[7],T=s[2],R=s[5],_=s[8];return r[0]=a*E+o*v+l*T,r[3]=a*p+o*L+l*R,r[6]=a*d+o*w+l*_,r[1]=c*E+h*v+g*T,r[4]=c*p+h*L+g*R,r[7]=c*d+h*w+g*_,r[2]=f*E+u*v+m*T,r[5]=f*p+u*L+m*R,r[8]=f*d+u*w+m*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],g=h*a-o*c,f=o*l-h*r,u=c*r-a*l,m=e*g+n*f+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/m;return t[0]=g*E,t[1]=(s*c-h*n)*E,t[2]=(o*n-s*a)*E,t[3]=f*E,t[4]=(h*e-s*l)*E,t[5]=(s*r-o*e)*E,t[6]=u*E,t[7]=(n*l-c*e)*E,t[8]=(a*e-n*r)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ao.makeScale(t,e)),this}rotate(t){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ao.makeRotation(-t)),this}translate(t,e){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ao.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};gl.prototype.isMatrix3=!0;var te=gl,ao=new te,Ul=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fl=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jh(){let i={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pe&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pe&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ri?Gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hs]:{primaries:t,whitePoint:n,transfer:Gs,toXYZ:Ul,fromXYZ:Fl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Ul,fromXYZ:Fl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}}),i}var le=jh();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ji,qr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ji===void 0&&(Ji=ks("canvas")),Ji.width=t.width,Ji.height=t.height;let s=Ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ks("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=$n(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qh=0,fs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Es(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(oo(s[a].image)):r.push(oo(s[a]))}else r=oo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function oo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var tu=0,lo=new W,on=class i extends An{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Un,s=Un,r=rn,a=ii,o=Pn,l=cn,c=i.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Es(),this.name="",this.source=new fs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(lo).x}get height(){return this.source.getSize(lo).y}get depth(){return this.source.getSize(lo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vr:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case Wr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vr:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case Wr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Zo;on.DEFAULT_ANISOTROPY=1;var _l=class _l{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],g=l[8],f=l[1],u=l[5],m=l[9],E=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(g-E)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(g+E)<.1&&Math.abs(m+p)<.1&&Math.abs(c+u+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let L=(c+1)/2,w=(u+1)/2,T=(d+1)/2,R=(h+f)/4,_=(g+E)/4,b=(m+p)/4;return L>w&&L>T?L<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(L),s=R/n,r=_/n):w>T?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=R/s,r=b/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=_/r,s=b/r),this.set(n,s,r,e),this}let v=Math.sqrt((p-m)*(p-m)+(g-E)*(g-E)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(g-E)/v,this.z=(f-h)/v,this.w=Math.acos((c+u+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_l.prototype.isVector4=!0;var Pe=_l,Yr=class extends An{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new on({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new fs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends Yr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Vs=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zr=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ua=class ua{constructor(t,e,n,s,r,a,o,l,c,h,g,f,u,m,E,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,g,f,u,m,E,p)}set(t,e,n,s,r,a,o,l,c,h,g,f,u,m,E,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=g,d[14]=f,d[3]=u,d[7]=m,d[11]=E,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ua().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),a=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),g=Math.sin(r);if(t.order==="XYZ"){let f=a*h,u=a*g,m=o*h,E=o*g;e[0]=l*h,e[4]=-l*g,e[8]=c,e[1]=u+m*c,e[5]=f-E*c,e[9]=-o*l,e[2]=E-f*c,e[6]=m+u*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,u=l*g,m=c*h,E=c*g;e[0]=f+E*o,e[4]=m*o-u,e[8]=a*c,e[1]=a*g,e[5]=a*h,e[9]=-o,e[2]=u*o-m,e[6]=E+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,u=l*g,m=c*h,E=c*g;e[0]=f-E*o,e[4]=-a*g,e[8]=m+u*o,e[1]=u+m*o,e[5]=a*h,e[9]=E-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,u=a*g,m=o*h,E=o*g;e[0]=l*h,e[4]=m*c-u,e[8]=f*c+E,e[1]=l*g,e[5]=E*c+f,e[9]=u*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,u=a*c,m=o*l,E=o*c;e[0]=l*h,e[4]=E-f*g,e[8]=m*g+u,e[1]=g,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*g+m,e[10]=f-E*g}else if(t.order==="XZY"){let f=a*l,u=a*c,m=o*l,E=o*c;e[0]=l*h,e[4]=-g,e[8]=c*h,e[1]=f*g+E,e[5]=a*h,e[9]=u*g-m,e[2]=m*g-u,e[6]=o*h,e[10]=E*g+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eu,t,nu)}lookAt(t,e,n){let s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),ci.crossVectors(n,dn),ci.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),ci.crossVectors(n,dn)),ci.normalize(),pr.crossVectors(dn,ci),s[0]=ci.x,s[4]=pr.x,s[8]=dn.x,s[1]=ci.y,s[5]=pr.y,s[9]=dn.y,s[2]=ci.z,s[6]=pr.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],g=n[5],f=n[9],u=n[13],m=n[2],E=n[6],p=n[10],d=n[14],v=n[3],L=n[7],w=n[11],T=n[15],R=s[0],_=s[4],b=s[8],z=s[12],N=s[1],k=s[5],J=s[9],st=s[13],F=s[2],et=s[6],ct=s[10],at=s[14],vt=s[3],U=s[7],mt=s[11],yt=s[15];return r[0]=a*R+o*N+l*F+c*vt,r[4]=a*_+o*k+l*et+c*U,r[8]=a*b+o*J+l*ct+c*mt,r[12]=a*z+o*st+l*at+c*yt,r[1]=h*R+g*N+f*F+u*vt,r[5]=h*_+g*k+f*et+u*U,r[9]=h*b+g*J+f*ct+u*mt,r[13]=h*z+g*st+f*at+u*yt,r[2]=m*R+E*N+p*F+d*vt,r[6]=m*_+E*k+p*et+d*U,r[10]=m*b+E*J+p*ct+d*mt,r[14]=m*z+E*st+p*at+d*yt,r[3]=v*R+L*N+w*F+T*vt,r[7]=v*_+L*k+w*et+T*U,r[11]=v*b+L*J+w*ct+T*mt,r[15]=v*z+L*st+w*at+T*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],g=t[6],f=t[10],u=t[14],m=t[3],E=t[7],p=t[11],d=t[15],v=l*u-c*f,L=o*u-c*g,w=o*f-l*g,T=a*u-c*h,R=a*f-l*h,_=a*g-o*h;return e*(E*v-p*L+d*w)-n*(m*v-p*T+d*R)+s*(m*L-E*T+d*_)-r*(m*w-E*R+p*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],g=t[9],f=t[10],u=t[11],m=t[12],E=t[13],p=t[14],d=t[15],v=e*o-n*a,L=e*l-s*a,w=e*c-r*a,T=n*l-s*o,R=n*c-r*o,_=s*c-r*l,b=h*E-g*m,z=h*p-f*m,N=h*d-u*m,k=g*p-f*E,J=g*d-u*E,st=f*d-u*p,F=v*st-L*J+w*k+T*N-R*z+_*b;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let et=1/F;return t[0]=(o*st-l*J+c*k)*et,t[1]=(s*J-n*st-r*k)*et,t[2]=(E*_-p*R+d*T)*et,t[3]=(f*R-g*_-u*T)*et,t[4]=(l*N-a*st-c*z)*et,t[5]=(e*st-s*N+r*z)*et,t[6]=(p*w-m*_-d*L)*et,t[7]=(h*_-f*w+u*L)*et,t[8]=(a*J-o*N+c*b)*et,t[9]=(n*N-e*J-r*b)*et,t[10]=(m*R-E*w+d*v)*et,t[11]=(g*w-h*R-u*v)*et,t[12]=(o*z-a*k-l*b)*et,t[13]=(e*k-n*z+s*b)*et,t[14]=(E*L-m*T-p*v)*et,t[15]=(h*T-g*L+f*v)*et,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,g=o+o,f=r*c,u=r*h,m=r*g,E=a*h,p=a*g,d=o*g,v=l*c,L=l*h,w=l*g,T=n.x,R=n.y,_=n.z;return s[0]=(1-(E+d))*T,s[1]=(u+w)*T,s[2]=(m-L)*T,s[3]=0,s[4]=(u-w)*R,s[5]=(1-(f+d))*R,s[6]=(p+v)*R,s[7]=0,s[8]=(m+L)*_,s[9]=(p-v)*_,s[10]=(1-(f+E))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=$i.set(s[0],s[1],s[2]).length(),o=$i.set(s[4],s[5],s[6]).length(),l=$i.set(s[8],s[9],s[10]).length();r<0&&(a=-a),En.copy(this);let c=1/a,h=1/o,g=1/l;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=g,En.elements[9]*=g,En.elements[10]*=g,e.setFromRotationMatrix(En),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Mn,l=!1){let c=this.elements,h=2*r/(e-t),g=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s),m,E;if(l)m=r/(a-r),E=a*r/(a-r);else if(o===Mn)m=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===hs)m=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=g,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Mn,l=!1){let c=this.elements,h=2/(e-t),g=2/(n-s),f=-(e+t)/(e-t),u=-(n+s)/(n-s),m,E;if(l)m=1/(a-r),E=a/(a-r);else if(o===Mn)m=-2/(a-r),E=-(a+r)/(a-r);else if(o===hs)m=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=g,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ua.prototype.isMatrix4=!0;var me=ua,$i=new W,En=new me,eu=new W(0,0,0),nu=new W(1,1,1),ci=new W,pr=new W,dn=new W,Ol=new me,Bl=new mn,jn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],g=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-g,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-oe(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ol,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bl.setFromEuler(this),this.setFromQuaternion(Bl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jn.DEFAULT_ORDER="XYZ";var ps=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},iu=0,zl=new W,Ki=new mn,Xn=new me,mr=new W,Ls=new W,su=new W,ru=new mn,Hl=new W(1,0,0),Gl=new W(0,1,0),kl=new W(0,0,1),Vl={type:"added"},au={type:"removed"},ji={type:"childadded",child:null},co={type:"childremoved",child:null},We=class i extends An{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new W,e=new jn,n=new mn,s=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new te}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(Hl,t)}rotateY(t){return this.rotateOnAxis(Gl,t)}rotateZ(t){return this.rotateOnAxis(kl,t)}translateOnAxis(t,e){return zl.copy(t).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hl,t)}translateY(t){return this.translateOnAxis(Gl,t)}translateZ(t){return this.translateOnAxis(kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?mr.copy(t):mr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Ls,mr,this.up):Xn.lookAt(mr,Ls,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Xn),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vl),ji.child=t,this.dispatchEvent(ji),ji.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(au),co.child=t,this.dispatchEvent(co),co.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vl),ji.child=t,this.dispatchEvent(ji),ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,su),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,ru,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let g=l[c];r(t.shapes,g)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),g=a(t.shapes),f=a(t.skeletons),u=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),g.length>0&&(n.shapes=g),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};We.DEFAULT_UP=new W(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ce=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},ou={type:"move"},ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let E of t.hand.values()){let p=e.getJointPose(E,n),d=this._getHandJoint(c,E);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],g=c.joints["thumb-tip"],f=h.position.distanceTo(g.position),u=.02,m=.005;c.inputState.pinching&&f>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ou)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},gr={h:0,s:0,l:0};function ho(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ee=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=ol(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ho(a,r,t+1/3),this.g=ho(a,r,t),this.b=ho(a,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){let n=Vc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return le.workingToColorSpace(tn.copy(this),t),Math.round(oe(tn.r*255,0,255))*65536+Math.round(oe(tn.g*255,0,255))*256+Math.round(oe(tn.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(tn.copy(this),e);let n=tn.r,s=tn.g,r=tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let g=a-o;switch(c=h<=.5?g/(a+o):g/(2-a-o),a){case n:l=(s-r)/g+(s<r?6:0);break;case s:l=(r-n)/g+2;break;case r:l=(n-s)/g+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=Ye){le.workingToColorSpace(tn.copy(this),t);let e=tn.r,n=tn.g,s=tn.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(gr);let n=Bs(hi.h,gr.h,e),s=Bs(hi.s,gr.s,e),r=Bs(hi.l,gr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new ee;ee.NAMES=Vc;var Li=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ee(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Di=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},wn=new W,qn=new W,uo=new W,Yn=new W,Qi=new W,ts=new W,Wl=new W,fo=new W,po=new W,mo=new W,go=new Pe,_o=new Pe,xo=new Pe,pi=class i{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),qn.subVectors(n,e),uo.subVectors(t,e);let a=wn.dot(wn),o=wn.dot(qn),l=wn.dot(uo),c=qn.dot(qn),h=qn.dot(uo),g=a*c-o*o;if(g===0)return r.set(0,0,0),null;let f=1/g,u=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return go.setScalar(0),_o.setScalar(0),xo.setScalar(0),go.fromBufferAttribute(t,e),_o.fromBufferAttribute(t,n),xo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(go,r.x),a.addScaledVector(_o,r.y),a.addScaledVector(xo,r.z),a}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),qn.subVectors(t,e),wn.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),wn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Qi.subVectors(s,n),ts.subVectors(r,n),fo.subVectors(t,n);let l=Qi.dot(fo),c=ts.dot(fo);if(l<=0&&c<=0)return e.copy(n);po.subVectors(t,s);let h=Qi.dot(po),g=ts.dot(po);if(h>=0&&g<=h)return e.copy(s);let f=l*g-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(Qi,a);mo.subVectors(t,r);let u=Qi.dot(mo),m=ts.dot(mo);if(m>=0&&u<=m)return e.copy(r);let E=u*c-l*m;if(E<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(ts,o);let p=h*m-u*g;if(p<=0&&g-h>=0&&u-m>=0)return Wl.subVectors(r,s),o=(g-h)/(g-h+(u-m)),e.copy(s).addScaledVector(Wl,o);let d=1/(p+E+f);return a=E*d,o=f*d,e.copy(n).addScaledVector(Qi,a).addScaledVector(ts,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},mi=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(t.matrixWorld),this.union(_r)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ds),xr.subVectors(this.max,Ds),es.subVectors(t.a,Ds),ns.subVectors(t.b,Ds),is.subVectors(t.c,Ds),ui.subVectors(ns,es),di.subVectors(is,ns),Ri.subVectors(es,is);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ri.z,Ri.y,ui.z,0,-ui.x,di.z,0,-di.x,Ri.z,0,-Ri.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ri.y,Ri.x,0];return!yo(e,es,ns,is,xr)||(e=[1,0,0,0,1,0,0,0,1],!yo(e,es,ns,is,xr))?!1:(yr.crossVectors(ui,di),e=[yr.x,yr.y,yr.z],yo(e,es,ns,is,xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Zn=[new W,new W,new W,new W,new W,new W,new W,new W],Tn=new W,_r=new mi,es=new W,ns=new W,is=new W,ui=new W,di=new W,Ri=new W,Ds=new W,xr=new W,yr=new W,Ci=new W;function yo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ci.fromArray(i,r);let o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=t.dot(Ci),c=e.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ue=new W,vr=new kt,lu=0,Fn=class extends An{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fc,this.updateRanges=[],this.gpuType=Cn,this.version=0,this._normalizationScale=t!==void 0?cl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vr.fromBufferAttribute(this,e),vr.applyMatrix3(t),this.setXY(e,vr.x,vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Gc(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):kc(t,this.array)}};var Ws=class extends Fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Xs=class extends Fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var be=class extends Fn{constructor(t,e,n){super(new Float32Array(t),e,n)}},cu=new mi,Ns=new W,vo=new W,gs=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ns.subVectors(t,this.center);let e=Ns.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ns,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ns.copy(t.center).add(vo)),this.expandByPoint(Ns.copy(t.center).sub(vo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},hu=0,vn=new me,Mo=new We,ss=new W,fn=new mi,Us=new mi,Ge=new W,_n=class i extends An{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uh(t)?Xs:Ws)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return Mo.lookAt(t),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new be(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(fn.min,Us.min),fn.expandByPoint(Ge),Ge.addVectors(fn.max,Us.max),fn.expandByPoint(Ge)):(fn.expandByPoint(Us.min),fn.expandByPoint(Us.max))}fn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ge));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ge.fromBufferAttribute(o,c),l&&(ss.fromBufferAttribute(t,c),Ge.add(ss)),s=Math.max(s,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Fn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let z=0;z<n.count;z++)o[z]=new W,l[z]=new W;let h=new W,g=new W,f=new W,u=new kt,m=new kt,E=new kt,p=new W,d=new W;function v(z,N,k){c[z]=c[N]=c[k]=1,h.fromBufferAttribute(n,z),g.fromBufferAttribute(n,N),f.fromBufferAttribute(n,k),u.fromBufferAttribute(r,z),m.fromBufferAttribute(r,N),E.fromBufferAttribute(r,k),g.sub(h),f.sub(h),m.sub(u),E.sub(u);let J=1/(m.x*E.y-E.x*m.y);isFinite(J)&&(p.copy(g).multiplyScalar(E.y).addScaledVector(f,-m.y).multiplyScalar(J),d.copy(f).multiplyScalar(m.x).addScaledVector(g,-E.x).multiplyScalar(J),o[z].add(p),o[N].add(p),o[k].add(p),l[z].add(d),l[N].add(d),l[k].add(d))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let z=0,N=L.length;z<N;++z){let k=L[z],J=k.start,st=k.count;for(let F=J,et=J+st;F<et;F+=3)v(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let w=new W,T=new W,R=new W,_=new W;function b(z){R.fromBufferAttribute(s,z),_.copy(R);let N=o[z];w.copy(N),w.sub(R.multiplyScalar(R.dot(N))).normalize(),T.crossVectors(_,N);let J=T.dot(l[z])<0?-1:1;a.setXYZW(z,w.x,w.y,w.z,J)}for(let z=0,N=n.count;z<N;++z)c[z]&&b(z);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let s=new W,r=new W,a=new W,o=new W,l=new W,c=new W,h=new W,g=new W;if(t)for(let f=0,u=t.count;f<u;f+=3){let m=t.getX(f+0),E=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,E),a.fromBufferAttribute(e,p),h.subVectors(a,r),g.subVectors(s,r),h.cross(g),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),g.subVectors(s,r),h.cross(g),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,g=o.normalized,f=new c.constructor(l.length*h),u=0,m=0;for(let E=0,p=l.length;E<p;E++){o.isInterleavedBufferAttribute?u=l[E]*o.data.stride+o.offset:u=l[E]*h;for(let d=0;d<h;d++)f[m++]=c[u++]}return new Fn(f,h,g)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,g=c.length;h<g;h++){let f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let g=0,f=c.length;g<f;g++){let u=c[g];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],g=r[c];for(let f=0,u=g.length;f<u;f++)h.push(g[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let g=a[c];this.addGroup(g.start,g.count,g.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var So=new W,uu=new W,du=new te,pn=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=So.subVectors(n,e).cross(uu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(So),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||du.getNormalMatrix(t),s=this.coplanarPoint(So).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},fu=0,gi=class extends An{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=Ms,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zo,this.blendDst=Ho,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ee().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new pn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new kt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new kt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Jn=new W,bo=new W,Mr=new W,Sr=new W,Ni=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){bo.copy(t).add(e).multiplyScalar(.5),Mr.copy(e).sub(t).normalize(),Sr.copy(this.origin).sub(bo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Mr),o=Sr.dot(this.direction),l=-Sr.dot(Mr),c=Sr.lengthSq(),h=Math.abs(1-a*a),g,f,u,m;if(h>0)if(g=a*l-o,f=a*o-l,m=r*h,g>=0)if(f>=-m)if(f<=m){let E=1/h;g*=E,f*=E,u=g*(g+a*f+2*o)+f*(a*g+f+2*l)+c}else f=r,g=Math.max(0,-(a*f+o)),u=-g*g+f*(f+2*l)+c;else f=-r,g=Math.max(0,-(a*f+o)),u=-g*g+f*(f+2*l)+c;else f<=-m?(g=Math.max(0,-(-a*r+o)),f=g>0?-r:Math.min(Math.max(-r,-l),r),u=-g*g+f*(f+2*l)+c):f<=m?(g=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(g=Math.max(0,-(a*r+o)),f=g>0?r:Math.min(Math.max(-r,-l),r),u=-g*g+f*(f+2*l)+c);else f=a>0?-r:r,g=Math.max(0,-(a*f+o)),u=-g*g+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(bo).addScaledVector(Mr,f),u}intersectSphere(t,e){if(t.radius<0)return null;Jn.subVectors(t.center,this.origin);let n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,g=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),g>=0?(o=(t.min.z-f.z)*g,l=(t.max.z-f.z)*g):(o=(t.max.z-f.z)*g,l=(t.min.z-f.z)*g),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,g=t.x-a.x,f=t.y-a.y,u=t.z-a.z,m=e.x-a.x,E=e.y-a.y,p=e.z-a.z,d=n.x-a.x,v=n.y-a.y,L=n.z-a.z,w=Math.abs(l),T=Math.abs(c),R=Math.abs(h),_,b,z,N,k,J,st,F,et,ct,at,vt;if(w>=T&&w>=R?(z=l,J=g,et=m,vt=d,l>=0?(_=c,b=h,N=f,k=u,st=E,F=p,ct=v,at=L):(_=h,b=c,N=u,k=f,st=p,F=E,ct=L,at=v)):T>=R?(z=c,J=f,et=E,vt=v,c>=0?(_=h,b=l,N=u,k=g,st=p,F=m,ct=L,at=d):(_=l,b=h,N=g,k=u,st=m,F=p,ct=d,at=L)):(z=h,J=u,et=p,vt=L,h>=0?(_=l,b=c,N=g,k=f,st=m,F=E,ct=d,at=v):(_=c,b=l,N=f,k=g,st=E,F=m,ct=v,at=d)),z===0)return null;let U=_/z,mt=b/z,yt=1/z,Ht=N-U*J,Jt=k-mt*J,ft=st-U*et,It=F-mt*et,Ft=ct-U*vt,Lt=at-mt*vt,bt=Ft*It-Lt*ft,Yt=Ht*Lt-Jt*Ft,ge=ft*Jt-It*Ht;if(s){if(bt<0||Yt<0||ge<0)return null}else if((bt<0||Yt<0||ge<0)&&(bt>0||Yt>0||ge>0))return null;let Xt=bt+Yt+ge;if(Xt===0)return null;let se=yt*(bt*J+Yt*et+ge*vt);return(Xt>0?se<0:se>0)?null:this.at(se/Xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_s=class extends gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Xl=new me,Ii=new Ni,br=new gs,ql=new W,Er=new W,wr=new W,Tr=new W,Eo=new W,Ar=new W,Yl=new W,Rr=new W,Le=class extends We{constructor(t=new _n,e=new _s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ar.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],g=r[l];h!==0&&(Eo.fromBufferAttribute(g,t),a?Ar.addScaledVector(Eo,h):Ar.addScaledVector(Eo.sub(e),h))}e.add(Ar)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(br.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(br,ql)===null||Ii.origin.distanceToSquared(ql)>(t.far-t.near)**2))&&(Xl.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(Xl),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,g=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,E=f.length;m<E;m++){let p=f[m],d=a[p.materialIndex],v=Math.max(p.start,u.start),L=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let w=v,T=L;w<T;w+=3){let R=o.getX(w),_=o.getX(w+1),b=o.getX(w+2);s=Cr(this,d,t,n,c,h,g,R,_,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,u.start),E=Math.min(o.count,u.start+u.count);for(let p=m,d=E;p<d;p+=3){let v=o.getX(p),L=o.getX(p+1),w=o.getX(p+2);s=Cr(this,a,t,n,c,h,g,v,L,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,E=f.length;m<E;m++){let p=f[m],d=a[p.materialIndex],v=Math.max(p.start,u.start),L=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let w=v,T=L;w<T;w+=3){let R=w,_=w+1,b=w+2;s=Cr(this,d,t,n,c,h,g,R,_,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,u.start),E=Math.min(l.count,u.start+u.count);for(let p=m,d=E;p<d;p+=3){let v=p,L=p+1,w=p+2;s=Cr(this,a,t,n,c,h,g,v,L,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function pu(i,t,e,n,s,r,a,o){let l;if(t.side===Ze?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ei,o),l===null)return null;Rr.copy(o),Rr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Rr);return c<e.near||c>e.far?null:{distance:c,point:Rr.clone(),object:i}}function Cr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Er),i.getVertexPosition(l,wr),i.getVertexPosition(c,Tr);let h=pu(i,t,e,n,Er,wr,Tr,Yl);if(h){let g=new W;pi.getBarycoord(Yl,Er,wr,Tr,g),s&&(h.uv=pi.getInterpolatedAttribute(s,o,l,c,g,new kt)),r&&(h.uv1=pi.getInterpolatedAttribute(r,o,l,c,g,new kt)),a&&(h.normal=pi.getInterpolatedAttribute(a,o,l,c,g,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new W,materialIndex:0};pi.getNormal(Er,wr,Tr,f.normal),h.face=f,h.barycoord=g}return h}var Jr=class extends on{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ve,h=Ve,g,f){super(null,a,o,l,c,h,s,r,g,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pi=new gs,mu=new kt(.5,.5),Ir=new W,_i=class{constructor(t=new pn,e=new pn,n=new pn,s=new pn,r=new pn,a=new pn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],g=r[5],f=r[6],u=r[7],m=r[8],E=r[9],p=r[10],d=r[11],v=r[12],L=r[13],w=r[14],T=r[15];if(s[0].setComponents(c-a,u-h,d-m,T-v).normalize(),s[1].setComponents(c+a,u+h,d+m,T+v).normalize(),s[2].setComponents(c+o,u+g,d+E,T+L).normalize(),s[3].setComponents(c-o,u-g,d-E,T-L).normalize(),n)s[4].setComponents(l,f,p,w).normalize(),s[5].setComponents(c-l,u-f,d-p,T-w).normalize();else if(s[4].setComponents(c-l,u-f,d-p,T-w).normalize(),e===Mn)s[5].setComponents(c+l,u+f,d+p,T+w).normalize();else if(e===hs)s[5].setComponents(l,f,p,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){Pi.center.set(0,0,0);let e=mu.distanceTo(t.center);return Pi.radius=.7071067811865476+e,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ir.x=s.normal.x>0?t.max.x:t.min.x,Ir.y=s.normal.y>0?t.max.y:t.min.y,Ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Zl=new me,$r=class i{constructor(){this.coordinateSystem=Mn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Zl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new _i),n[s].setFromProjectionMatrix(Zl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new _i),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var qs=class extends on{constructor(t=[],e=Xi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Qn=class extends on{constructor(t,e,n=Rn,s,r,a,o=Ve,l=Ve,c,h=Kn,g=1){if(h!==Kn&&h!==si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:g};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ys=class extends Qn{constructor(t,e=Rn,n=Xi,s,r,a=Ve,o=Ve,l,c=Kn){let h={width:t,height:t,depth:1},g=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Zs=class extends on{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},St=class i extends _n{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],g=[],f=0,u=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(g,2));function m(E,p,d,v,L,w,T,R,_,b,z){let N=w/_,k=T/b,J=w/2,st=T/2,F=R/2,et=_+1,ct=b+1,at=0,vt=0,U=new W;for(let mt=0;mt<ct;mt++){let yt=mt*k-st;for(let Ht=0;Ht<et;Ht++){let Jt=Ht*N-J;U[E]=Jt*v,U[p]=yt*L,U[d]=F,c.push(U.x,U.y,U.z),U[E]=0,U[p]=0,U[d]=R>0?1:-1,h.push(U.x,U.y,U.z),g.push(Ht/_),g.push(1-mt/b),at+=1}}for(let mt=0;mt<b;mt++)for(let yt=0;yt<_;yt++){let Ht=f+yt+et*mt,Jt=f+yt+et*(mt+1),ft=f+(yt+1)+et*(mt+1),It=f+(yt+1)+et*mt;l.push(Ht,Jt,It),l.push(Jt,ft,It),vt+=6}o.addGroup(u,vt,z),u+=vt,f+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ui=class i extends _n{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,g=Math.PI/2*t,f=e,u=2*g+f,m=n*2+r,E=s+1,p=new W,d=new W;for(let v=0;v<=m;v++){let L=0,w=0,T=0,R=0;if(v<=n){let z=v/n,N=z*Math.PI/2;w=-h-t*Math.cos(N),T=t*Math.sin(N),R=-t*Math.cos(N),L=z*g}else if(v<=n+r){let z=(v-n)/r;w=-h+z*e,T=t,R=0,L=g+z*f}else{let z=(v-n-r)/n,N=z*Math.PI/2;w=h+t*Math.sin(N),T=t*Math.cos(N),R=t*Math.sin(N),L=g+f+z*g}let _=Math.max(0,Math.min(1,L/u)),b=0;v===0?b=.5/s:v===m&&(b=-.5/s);for(let z=0;z<=s;z++){let N=z/s,k=N*Math.PI*2,J=Math.sin(k),st=Math.cos(k);d.x=-T*st,d.y=w,d.z=T*J,o.push(d.x,d.y,d.z),p.set(-T*st,R,T*J),p.normalize(),l.push(p.x,p.y,p.z),c.push(N+b,_)}if(v>0){let z=(v-1)*E;for(let N=0;N<s;N++){let k=z+N,J=z+N+1,st=v*E+N,F=v*E+N+1;a.push(k,J,st),a.push(J,F,st)}}}this.setIndex(a),this.setAttribute("position",new be(o,3)),this.setAttribute("normal",new be(l,3)),this.setAttribute("uv",new be(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},xi=class i extends _n{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new W,h=new kt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let g=0,f=3;g<=e;g++,f+=3){let u=n+g/e*s;c.x=t*Math.cos(u),c.y=t*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let g=1;g<=e;g++)r.push(g,g+1,0);this.setIndex(r),this.setAttribute("position",new be(a,3)),this.setAttribute("normal",new be(o,3)),this.setAttribute("uv",new be(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Vt=class i extends _n{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],g=[],f=[],u=[],m=0,E=[],p=n/2,d=0;v(),a===!1&&(t>0&&L(!0),e>0&&L(!1)),this.setIndex(h),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(f,3)),this.setAttribute("uv",new be(u,2));function v(){let w=new W,T=new W,R=0,_=(e-t)/n;for(let b=0;b<=r;b++){let z=[],N=b/r,k=N*(e-t)+t;for(let J=0;J<=s;J++){let st=J/s,F=st*l+o,et=Math.sin(F),ct=Math.cos(F);T.x=k*et,T.y=-N*n+p,T.z=k*ct,g.push(T.x,T.y,T.z),w.set(et,_,ct).normalize(),f.push(w.x,w.y,w.z),u.push(st,1-N),z.push(m++)}E.push(z)}for(let b=0;b<s;b++)for(let z=0;z<r;z++){let N=E[z][b],k=E[z+1][b],J=E[z+1][b+1],st=E[z][b+1];(t>0||z!==0)&&(h.push(N,k,st),R+=3),(e>0||z!==r-1)&&(h.push(k,J,st),R+=3)}c.addGroup(d,R,0),d+=R}function L(w){let T=m,R=new kt,_=new W,b=0,z=w===!0?t:e,N=w===!0?1:-1;for(let J=1;J<=s;J++)g.push(0,p*N,0),f.push(0,N,0),u.push(.5,.5),m++;let k=m;for(let J=0;J<=s;J++){let F=J/s*l+o,et=Math.cos(F),ct=Math.sin(F);_.x=z*ct,_.y=p*N,_.z=z*et,g.push(_.x,_.y,_.z),f.push(0,N,0),R.x=et*.5+.5,R.y=ct*.5*N+.5,u.push(R.x,R.y),m++}for(let J=0;J<s;J++){let st=T+J,F=k+J;w===!0?h.push(F,F+1,st):h.push(F+1,F,st),b+=3}c.addGroup(d,b,w===!0?1:2),d+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},an=class i extends Vt{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Js=class i extends _n{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new be(r,3)),this.setAttribute("normal",new be(r.slice(),3)),this.setAttribute("uv",new be(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let L=new W,w=new W,T=new W;for(let R=0;R<e.length;R+=3)u(e[R+0],L),u(e[R+1],w),u(e[R+2],T),l(L,w,T,v)}function l(v,L,w,T){let R=T+1,_=[];for(let b=0;b<=R;b++){_[b]=[];let z=v.clone().lerp(w,b/R),N=L.clone().lerp(w,b/R),k=R-b;for(let J=0;J<=k;J++)J===0&&b===R?_[b][J]=z:_[b][J]=z.clone().lerp(N,J/k)}for(let b=0;b<R;b++)for(let z=0;z<2*(R-b)-1;z++){let N=Math.floor(z/2);z%2===0?(f(_[b][N+1]),f(_[b+1][N]),f(_[b][N])):(f(_[b][N+1]),f(_[b+1][N+1]),f(_[b+1][N]))}}function c(v){let L=new W;for(let w=0;w<r.length;w+=3)L.x=r[w+0],L.y=r[w+1],L.z=r[w+2],L.normalize().multiplyScalar(v),r[w+0]=L.x,r[w+1]=L.y,r[w+2]=L.z}function h(){let v=new W;for(let L=0;L<r.length;L+=3){v.x=r[L+0],v.y=r[L+1],v.z=r[L+2];let w=p(v)/2/Math.PI+.5,T=d(v)/Math.PI+.5;a.push(w,1-T)}m(),g()}function g(){for(let v=0;v<a.length;v+=6){let L=a[v+0],w=a[v+2],T=a[v+4],R=Math.max(L,w,T),_=Math.min(L,w,T);R>.9&&_<.1&&(L<.2&&(a[v+0]+=1),w<.2&&(a[v+2]+=1),T<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function u(v,L){let w=v*3;L.x=t[w+0],L.y=t[w+1],L.z=t[w+2]}function m(){let v=new W,L=new W,w=new W,T=new W,R=new kt,_=new kt,b=new kt;for(let z=0,N=0;z<r.length;z+=9,N+=6){v.set(r[z+0],r[z+1],r[z+2]),L.set(r[z+3],r[z+4],r[z+5]),w.set(r[z+6],r[z+7],r[z+8]),R.set(a[N+0],a[N+1]),_.set(a[N+2],a[N+3]),b.set(a[N+4],a[N+5]),T.copy(v).add(L).add(w).divideScalar(3);let k=p(T);E(R,N+0,v,k),E(_,N+2,L,k),E(b,N+4,w,k)}}function E(v,L,w,T){T<0&&v.x===1&&(a[L]=v.x-1),w.x===0&&w.z===0&&(a[L]=T/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Sn=class i extends Js{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Fi=class i extends Js{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var $s=class i extends _n{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,g=t/o,f=e/l,u=[],m=[],E=[],p=[];for(let d=0;d<h;d++){let v=d*f-a;for(let L=0;L<c;L++){let w=L*g-r;m.push(w,-v,0),E.push(0,0,1),p.push(L/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){let L=v+c*d,w=v+c*(d+1),T=v+1+c*(d+1),R=v+1+c*d;u.push(L,w,R),u.push(w,T,R)}this.setIndex(u),this.setAttribute("position",new be(m,3)),this.setAttribute("normal",new be(E,3)),this.setAttribute("uv",new be(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Re=class i extends _n{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],g=new W,f=new W,u=[],m=[],E=[],p=[];for(let d=0;d<=n;d++){let v=[],L=d/n,w=a+L*o,T=t*Math.cos(w),R=Math.sqrt(t*t-T*T),_=0;d===0&&a===0?_=.5/e:d===n&&l===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){let z=b/e,N=s+z*r;g.x=-R*Math.cos(N),g.y=T,g.z=R*Math.sin(N),m.push(g.x,g.y,g.z),f.copy(g).normalize(),E.push(f.x,f.y,f.z),p.push(z+_,1-L),v.push(c++)}h.push(v)}for(let d=0;d<n;d++)for(let v=0;v<e;v++){let L=h[d][v+1],w=h[d][v],T=h[d+1][v],R=h[d+1][v+1];(d!==0||a>0)&&u.push(L,w,R),(d!==n-1||l<Math.PI)&&u.push(w,T,R)}this.setIndex(u),this.setAttribute("position",new be(m,3)),this.setAttribute("normal",new be(E,3)),this.setAttribute("uv",new be(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Yi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Jl(s))s.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Jl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function en(i){let t={};for(let e=0;e<i.length;e++){let n=Yi(i[e]);for(let s in n)t[s]=n[s]}return t}function Jl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function gu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function hl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var Wc={clone:Yi,merge:en},_u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yi(t.uniforms),this.uniformsGroups=gu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ee().setHex(s.value);break;case"v2":this.uniforms[n].value=new kt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new W().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Pe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new te().fromArray(s.value);break;case"m4":this.uniforms[n].value=new me().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Kr=class extends ln{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ti=class extends gi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ka,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var jr=class extends gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Qr=class extends gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function rs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Pr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var yi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ta=class extends yi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ao,endingEnd:Ao}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ro:r=t,o=2*e-n;break;case Co:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ro:a=t,l=2*n-e;break;case Co:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,g=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(n-e)/(s-e),E=m*m,p=E*m,d=-f*p+2*f*E-f*m,v=(1+f)*p+(-1.5-2*f)*E+(-.5+f)*m+1,L=(-1-u)*p+(1.5+u)*E+.5*m,w=u*p-u*E;for(let T=0;T!==o;++T)r[T]=d*a[h+T]+v*a[c+T]+L*a[l+T]+w*a[g+T];return r}},ea=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),g=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*g+a[l+f]*h;return r}},na=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ia=class extends yi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,g=this.outTangents;if(!h||!g){let m=(n-e)/(s-e),E=1-m;for(let p=0;p!==o;++p)r[p]=a[c+p]*E+a[l+p]*m;return r}let f=o*2,u=t-1;for(let m=0;m!==o;++m){let E=a[c+m],p=a[l+m],d=u*f+m*2,v=g[d],L=g[d+1],w=t*f+m*2,T=h[w],R=h[w+1],_=vu(n,e,v,T,s);r[m]=Xc(_,E,L,R,p)}return r}};function Xc(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function yu(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function vu(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Xc(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=yu(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var xn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=rs(e,this.TimeBufferType),this.values=rs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:rs(t.times,Array),values:rs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Pr(t.settings)&&(n.settings={inTangents:rs(t.settings.inTangents,Array),outTangents:rs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ia(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case zs:e=this.InterpolantFactoryMethodDiscrete;break;case Xr:e=this.InterpolantFactoryMethodLinear;break;case Nr:e=this.InterpolantFactoryMethodSmooth;break;case To:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zs;case this.InterpolantFactoryMethodLinear:return Xr;case this.InterpolantFactoryMethodSmooth:return Nr;case this.InterpolantFactoryMethodBezier:return To}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Pr(this.settings)&&($l(this.settings.inTangents,t),$l(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Pr(this.settings)&&(Kl(this.settings.inTangents,t),Kl(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Qt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Qt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Fh(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Qt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Nr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let g=o*n,f=g-n,u=g+n;for(let m=0;m!==n;++m){let E=e[g+m];if(E!==e[f+m]||E!==e[u+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let g=o*n,f=a*n;for(let u=0;u!==n;++u)e[f+u]=e[g+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Pr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function $l(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Kl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=Xr;var vi=class extends xn{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=zs;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}};sa.prototype.ValueTypeName="color";var ra=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}};ra.prototype.ValueTypeName="number";var aa=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)mn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ks=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new aa(this.times,this.values,this.getValueSize(),t)}};Ks.prototype.ValueTypeName="quaternion";Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends xn{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=zs;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var oa=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}};oa.prototype.ValueTypeName="vector";var la=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,g){return c.push(h,g),this},this.removeHandler=function(h){let g=c.indexOf(h);return g!==-1&&c.splice(g,2),this},this.getHandler=function(h){for(let g=0,f=c.length;g<f;g+=2){let u=c[g],m=c[g+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qc=new la,ca=class{constructor(t){this.manager=t!==void 0?t:qc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ca.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oi=class extends We{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Bi=class extends Oi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},wo=new me,jl=new W,Ql=new W,js=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _i,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;jl.setFromMatrixPosition(t.matrixWorld),e.position.copy(jl),Ql.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ql),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(wo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===hs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Lr=new W,Dr=new mn,Nn=new W,Qs=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Lr,Dr,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lr,Dr,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Lr,Dr,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lr,Dr,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fi=new W,tc=new kt,ec=new kt,ke=class extends Qs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,tc,ec),e.subVectors(ec,tc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Os*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Io=class extends js{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0}},zi=class extends Oi{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Io}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},tr=class extends Qs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Po=class extends js{constructor(){super(new tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ei=class extends Oi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new Po}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Hi=class extends Oi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var as=-90,os=1,xs=class extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ke(as,os,t,e);s.layers=this.layers,this.add(s);let r=new ke(as,os,t,e);r.layers=this.layers,this.add(r);let a=new ke(as,os,t,e);a.layers=this.layers,this.add(a);let o=new ke(as,os,t,e);o.layers=this.layers,this.add(o);let l=new ke(as,os,t,e);l.layers=this.layers,this.add(l);let c=new ke(as,os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,g=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let E=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=E,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(g,f,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ha=class extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var ul="\\[\\]\\.:\\/",Mu=new RegExp("["+ul+"]","g"),dl="[^"+ul+"]",Su="[^"+ul.replace("\\.","")+"]",bu=/((?:WC+[\/:])*)/.source.replace("WC",dl),Eu=/(WCOD+)?/.source.replace("WCOD",Su),wu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dl),Tu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dl),Au=new RegExp("^"+bu+Eu+wu+Tu+"$"),Ru=["material","materials","bones","map"],Lo=class{constructor(t,e,n){let s=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Mu,"")}static parseTrackName(t){let e=Au.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ru.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Qt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Lo;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ig=new Float32Array(1);var nc=new me,Gi=class{constructor(t,e,n=0,s=1/0){this.ray=new Ni(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ps,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nc),this}intersectObject(t,e=!0,n=[]){return Do(t,this,n,e),n.sort(ic),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Do(t[s],this,n,e);return n.sort(ic),n}};function ic(i,t){return i.distance-t.distance}function Do(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Do(r[a],t,e,!0)}}var ys=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=oe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(oe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var xl=class xl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};xl.prototype.isMatrix2=!0;var No=xl;var er=class extends An{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function fl(i,t,e,n){let s=Cu(n);switch(e){case Qo:return i*t;case el:return i*t/s.components*s.byteLength;case xa:return i*t/s.components*s.byteLength;case wi:return i*t*2/s.components*s.byteLength;case ya:return i*t*2/s.components*s.byteLength;case tl:return i*t*3/s.components*s.byteLength;case Pn:return i*t*4/s.components*s.byteLength;case va:return i*t*4/s.components*s.byteLength;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rr:case ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:case Ea:return Math.max(i,16)*Math.max(t,8)/4;case Ma:case ba:return Math.max(i,8)*Math.max(t,8)/2;case wa:case Ta:case Ra:case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Aa:case or:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xa:case qa:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Za:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*8;case lr:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cu(i){switch(i){case cn:case Jo:return{byteLength:1,components:1};case bs:case $o:case In:return{byteLength:2,components:1};case ga:case _a:return{byteLength:2,components:4};case Rn:case ma:case Cn:return{byteLength:4,components:1};case Ko:case jo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ph(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Pu(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,g=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:g}}function n(o,l,c){let h=l.array,g=l.updateRanges;if(i.bindBuffer(c,o),g.length===0)i.bufferSubData(c,0,h);else{g.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<g.length;u++){let m=g[f],E=g[u];E.start<=m.start+m.count+1?m.count=Math.max(m.count,E.start+E.count-m.start):(++f,g[f]=E)}g.length=f+1;for(let u=0,m=g.length;u<m;u++){let E=g[u];i.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Lu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Du=`#ifdef USE_ALPHAHASH
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
#endif`,Nu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ou=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bu=`#ifdef USE_AOMAP
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
#endif`,zu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hu=`#ifdef USE_BATCHING
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
#endif`,Gu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ku=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xu=`#ifdef USE_IRIDESCENCE
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
#endif`,qu=`#ifdef USE_BUMPMAP
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
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ku=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,td=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ed=`#define PI 3.141592653589793
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
} // validated`,nd=`vec3 transformedNormal = objectNormal;
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
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,od="gl_FragColor = linearToOutputTexel( gl_FragColor );",ld=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cd=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
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
#endif`,pd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,md=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xd=`#ifdef USE_GRADIENTMAP
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
}`,yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sd=`uniform bool receiveShadow;
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,bd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ed=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,Cd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,Id=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ld=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dd=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
#endif`,Nd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ud=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Od=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gd=`#if defined( USE_POINTS_UV )
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
#endif`,kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xd=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yd=`#ifdef USE_MORPHTARGETS
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
#endif`,Zd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$d=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tf=`#ifdef USE_NORMALMAP
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
#endif`,ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,af=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,of=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,gf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,_f=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,xf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yf=`#ifdef USE_SKINNING
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
#endif`,vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mf=`#ifdef USE_SKINNING
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
#endif`,Sf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ef=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tf=`#ifdef USE_TRANSMISSION
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
#endif`,Af=`#ifdef USE_TRANSMISSION
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
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,Pf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Df=`uniform sampler2D t2D;
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
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uf=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Of=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`#include <common>
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
}`,zf=`#if DEPTH_PACKING == 3200
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
}`,Hf=`#define DISTANCE
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
}`,Gf=`#define DISTANCE
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
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`uniform float scale;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,qf=`#include <common>
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
}`,Yf=`uniform vec3 diffuse;
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
}`,Zf=`#define LAMBERT
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
}`,Jf=`#define LAMBERT
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
}`,$f=`#define MATCAP
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
}`,Kf=`#define MATCAP
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
}`,jf=`#define NORMAL
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
}`,Qf=`#define NORMAL
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
}`,tp=`#define PHONG
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
}`,ep=`#define PHONG
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
}`,np=`#define STANDARD
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
}`,ip=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,sp=`#define TOON
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
}`,rp=`#define TOON
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
}`,ap=`uniform float size;
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
}`,op=`uniform vec3 diffuse;
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
}`,lp=`#include <common>
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
}`,cp=`uniform vec3 color;
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
}`,hp=`uniform float rotation;
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
}`,up=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:Lu,alphahash_pars_fragment:Du,alphamap_fragment:Nu,alphamap_pars_fragment:Uu,alphatest_fragment:Fu,alphatest_pars_fragment:Ou,aomap_fragment:Bu,aomap_pars_fragment:zu,batching_pars_vertex:Hu,batching_vertex:Gu,begin_vertex:ku,beginnormal_vertex:Vu,bsdfs:Wu,iridescence_fragment:Xu,bumpmap_pars_fragment:qu,clipping_planes_fragment:Yu,clipping_planes_pars_fragment:Zu,clipping_planes_pars_vertex:Ju,clipping_planes_vertex:$u,color_fragment:Ku,color_pars_fragment:ju,color_pars_vertex:Qu,color_vertex:td,common:ed,defaultnormal_vertex:nd,displacementmap_pars_vertex:id,displacementmap_vertex:sd,emissivemap_fragment:rd,emissivemap_pars_fragment:ad,colorspace_fragment:od,colorspace_pars_fragment:ld,envmap_fragment:cd,envmap_common_pars_fragment:hd,envmap_pars_fragment:ud,envmap_pars_vertex:dd,envmap_physical_pars_fragment:bd,envmap_vertex:fd,fog_vertex:pd,fog_pars_vertex:md,fog_fragment:gd,fog_pars_fragment:_d,gradientmap_pars_fragment:xd,lightmap_pars_fragment:yd,lights_lambert_fragment:vd,lights_lambert_pars_fragment:Md,lights_pars_begin:Sd,lights_toon_fragment:Ed,lights_toon_pars_fragment:wd,lights_phong_fragment:Td,lights_phong_pars_fragment:Ad,lights_physical_fragment:Rd,lights_physical_pars_fragment:Cd,lights_fragment_begin:Id,lights_fragment_maps:Pd,lights_fragment_end:Ld,lightprobes_pars_fragment:Dd,logdepthbuf_fragment:Nd,logdepthbuf_pars_fragment:Ud,logdepthbuf_pars_vertex:Fd,logdepthbuf_vertex:Od,map_fragment:Bd,map_pars_fragment:zd,map_particle_fragment:Hd,map_particle_pars_fragment:Gd,metalnessmap_fragment:kd,metalnessmap_pars_fragment:Vd,morphinstance_vertex:Wd,morphcolor_vertex:Xd,morphnormal_vertex:qd,morphtarget_pars_vertex:Yd,morphtarget_vertex:Zd,normal_fragment_begin:Jd,normal_fragment_maps:$d,normal_pars_fragment:Kd,normal_pars_vertex:jd,normal_vertex:Qd,normalmap_pars_fragment:tf,clearcoat_normal_fragment_begin:ef,clearcoat_normal_fragment_maps:nf,clearcoat_pars_fragment:sf,iridescence_pars_fragment:rf,opaque_fragment:af,packing:of,premultiplied_alpha_fragment:lf,project_vertex:cf,dithering_fragment:hf,dithering_pars_fragment:uf,roughnessmap_fragment:df,roughnessmap_pars_fragment:ff,shadowmap_pars_fragment:pf,shadowmap_pars_vertex:mf,shadowmap_vertex:gf,shadowmask_pars_fragment:_f,skinbase_vertex:xf,skinning_pars_vertex:yf,skinning_vertex:vf,skinnormal_vertex:Mf,specularmap_fragment:Sf,specularmap_pars_fragment:bf,tonemapping_fragment:Ef,tonemapping_pars_fragment:wf,transmission_fragment:Tf,transmission_pars_fragment:Af,uv_pars_fragment:Rf,uv_pars_vertex:Cf,uv_vertex:If,worldpos_vertex:Pf,background_vert:Lf,background_frag:Df,backgroundCube_vert:Nf,backgroundCube_frag:Uf,cube_vert:Ff,cube_frag:Of,depth_vert:Bf,depth_frag:zf,distance_vert:Hf,distance_frag:Gf,equirect_vert:kf,equirect_frag:Vf,linedashed_vert:Wf,linedashed_frag:Xf,meshbasic_vert:qf,meshbasic_frag:Yf,meshlambert_vert:Zf,meshlambert_frag:Jf,meshmatcap_vert:$f,meshmatcap_frag:Kf,meshnormal_vert:jf,meshnormal_frag:Qf,meshphong_vert:tp,meshphong_frag:ep,meshphysical_vert:np,meshphysical_frag:ip,meshtoon_vert:sp,meshtoon_frag:rp,points_vert:ap,points_frag:op,shadow_vert:lp,shadow_frag:cp,sprite_vert:hp,sprite_frag:up},Ut={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},zn={basic:{uniforms:en([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:en([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:en([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:en([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:en([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new ee(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:en([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:en([Ut.points,Ut.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:en([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:en([Ut.common,Ut.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:en([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:en([Ut.sprite,Ut.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:en([Ut.common,Ut.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:en([Ut.lights,Ut.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};zn.physical={uniforms:en([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var ja={r:0,b:0,g:0},dp=new me,mh=new te;mh.set(-1,0,0,0,1,0,0,0,1);function fp(i,t,e,n,s,r){let a=new ee(0),o=s===!0?0:1,l,c,h=null,g=0,f=null;function u(v){let L=v.isScene===!0?v.background:null;if(L&&L.isTexture){let w=v.backgroundBlurriness>0;L=t.get(L,w)}return L}function m(v){let L=!1,w=u(v);w===null?p(a,o):w&&w.isColor&&(p(w,1),L=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(v,L){let w=u(L);w&&w.isCubeTexture?(c===void 0&&(c=new Le(new St(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Yi(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,R,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(dp.makeRotationFromEuler(L.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mh),c.material.toneMapped=le.getTransfer(w.colorSpace)!==pe,(h!==w||g!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,g=w.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Le(new $s(2,2),new ln({name:"BackgroundMaterial",uniforms:Yi(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.toneMapped=le.getTransfer(w.colorSpace)!==pe,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||g!==w.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=w,g=w.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,L){v.getRGB(ja,hl(i)),e.buffers.color.setClear(ja.r,ja.g,ja.b,L,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,L=1){a.set(v),o=L,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:m,addToRenderList:E,dispose:d}}function pp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(k,J,st,F,et){let ct=!1,at=g(k,F,st,J);r!==at&&(r=at,c(r.object)),ct=u(k,F,st,et),ct&&m(k,F,st,et),et!==null&&t.update(et,i.ELEMENT_ARRAY_BUFFER),(ct||a)&&(a=!1,w(k,J,st,F),et!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function l(){return i.createVertexArray()}function c(k){return i.bindVertexArray(k)}function h(k){return i.deleteVertexArray(k)}function g(k,J,st,F){let et=F.wireframe===!0,ct=n[J.id];ct===void 0&&(ct={},n[J.id]=ct);let at=k.isInstancedMesh===!0?k.id:0,vt=ct[at];vt===void 0&&(vt={},ct[at]=vt);let U=vt[st.id];U===void 0&&(U={},vt[st.id]=U);let mt=U[et];return mt===void 0&&(mt=f(l()),U[et]=mt),mt}function f(k){let J=[],st=[],F=[];for(let et=0;et<e;et++)J[et]=0,st[et]=0,F[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:st,attributeDivisors:F,object:k,attributes:{},index:null}}function u(k,J,st,F){let et=r.attributes,ct=J.attributes,at=0,vt=st.getAttributes();for(let U in vt)if(vt[U].location>=0){let yt=et[U],Ht=ct[U];if(Ht===void 0&&(U==="instanceMatrix"&&k.instanceMatrix&&(Ht=k.instanceMatrix),U==="instanceColor"&&k.instanceColor&&(Ht=k.instanceColor)),yt===void 0||yt.attribute!==Ht||Ht&&yt.data!==Ht.data)return!0;at++}return r.attributesNum!==at||r.index!==F}function m(k,J,st,F){let et={},ct=J.attributes,at=0,vt=st.getAttributes();for(let U in vt)if(vt[U].location>=0){let yt=ct[U];yt===void 0&&(U==="instanceMatrix"&&k.instanceMatrix&&(yt=k.instanceMatrix),U==="instanceColor"&&k.instanceColor&&(yt=k.instanceColor));let Ht={};Ht.attribute=yt,yt&&yt.data&&(Ht.data=yt.data),et[U]=Ht,at++}r.attributes=et,r.attributesNum=at,r.index=F}function E(){let k=r.newAttributes;for(let J=0,st=k.length;J<st;J++)k[J]=0}function p(k){d(k,0)}function d(k,J){let st=r.newAttributes,F=r.enabledAttributes,et=r.attributeDivisors;st[k]=1,F[k]===0&&(i.enableVertexAttribArray(k),F[k]=1),et[k]!==J&&(i.vertexAttribDivisor(k,J),et[k]=J)}function v(){let k=r.newAttributes,J=r.enabledAttributes;for(let st=0,F=J.length;st<F;st++)J[st]!==k[st]&&(i.disableVertexAttribArray(st),J[st]=0)}function L(k,J,st,F,et,ct,at){at===!0?i.vertexAttribIPointer(k,J,st,et,ct):i.vertexAttribPointer(k,J,st,F,et,ct)}function w(k,J,st,F){E();let et=F.attributes,ct=st.getAttributes(),at=J.defaultAttributeValues;for(let vt in ct){let U=ct[vt];if(U.location>=0){let mt=et[vt];if(mt===void 0&&(vt==="instanceMatrix"&&k.instanceMatrix&&(mt=k.instanceMatrix),vt==="instanceColor"&&k.instanceColor&&(mt=k.instanceColor)),mt!==void 0){let yt=mt.normalized,Ht=mt.itemSize,Jt=t.get(mt);if(Jt===void 0)continue;let ft=Jt.buffer,It=Jt.type,Ft=Jt.bytesPerElement,Lt=It===i.INT||It===i.UNSIGNED_INT||mt.gpuType===ma;if(mt.isInterleavedBufferAttribute){let bt=mt.data,Yt=bt.isInterleavedBuffer===!0?bt.stride:bt.itemSize,ge=mt.offset;if(bt.isInstancedInterleavedBuffer||bt.isInstancedBufferAttribute){for(let Xt=0;Xt<U.locationSize;Xt++)d(U.location+Xt,bt.meshPerAttribute);k.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Xt=0;Xt<U.locationSize;Xt++)p(U.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let Xt=0;Xt<U.locationSize;Xt++)L(U.location+Xt,Ht/U.locationSize,It,yt,Yt*Ft,(ge+Ht/U.locationSize*Xt)*Ft,Lt)}else{if(mt.isInstancedBufferAttribute){for(let bt=0;bt<U.locationSize;bt++)d(U.location+bt,mt.meshPerAttribute);k.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let bt=0;bt<U.locationSize;bt++)p(U.location+bt);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let bt=0;bt<U.locationSize;bt++)L(U.location+bt,Ht/U.locationSize,It,yt,Ht*Ft,Ht/U.locationSize*bt*Ft,Lt)}}else if(at!==void 0){let yt=at[vt];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv(U.location,yt);break;case 3:i.vertexAttrib3fv(U.location,yt);break;case 4:i.vertexAttrib4fv(U.location,yt);break;default:i.vertexAttrib1fv(U.location,yt)}}}}v()}function T(){z();for(let k in n){let J=n[k];for(let st in J){let F=J[st];for(let et in F){let ct=F[et];for(let at in ct)h(ct[at].object),delete ct[at];delete F[et]}}delete n[k]}}function R(k){if(n[k.id]===void 0)return;let J=n[k.id];for(let st in J){let F=J[st];for(let et in F){let ct=F[et];for(let at in ct)h(ct[at].object),delete ct[at];delete F[et]}}delete n[k.id]}function _(k){for(let J in n){let st=n[J];for(let F in st){let et=st[F];if(et[k.id]===void 0)continue;let ct=et[k.id];for(let at in ct)h(ct[at].object),delete ct[at];delete et[k.id]}}}function b(k){for(let J in n){let st=n[J],F=k.isInstancedMesh===!0?k.id:0,et=st[F];if(et!==void 0){for(let ct in et){let at=et[ct];for(let vt in at)h(at[vt].object),delete at[vt];delete et[ct]}delete st[F],Object.keys(st).length===0&&delete n[J]}}}function z(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:z,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:E,enableAttribute:p,disableUnusedAttributes:v}}function mp(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function gp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Pn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===In&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==cn&&_!==Cn&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&g===!1;e.reversedDepthBuffer===!0&&g===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&g===!0&&Zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:g,maxTextures:u,maxVertexTextures:m,maxTextureSize:E,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:v,maxVaryings:L,maxFragmentUniforms:w,maxSamples:T,samples:R}}function _p(i){let t=this,e=null,n=0,s=!1,r=!1,a=new pn,o=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,f){let u=g.length!==0||f||n!==0||s;return s=f,n=g.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,f){e=h(g,f,0)},this.setState=function(g,f,u){let m=g.clippingPlanes,E=g.clipIntersection,p=g.clipShadows,d=i.get(g);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let v=r?0:n,L=v*4,w=d.clippingState||null;l.value=w,w=h(m,f,L,u);for(let T=0;T!==L;++T)w[T]=e[T];d.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(g,f,u,m){let E=g!==null?g.length:0,p=null;if(E!==0){if(p=l.value,m!==!0||p===null){let d=u+E*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<d)&&(p=new Float32Array(d));for(let L=0,w=u;L!==E;++L,w+=4)a.copy(g[L]).applyMatrix4(v,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,p}}var dr=class extends gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new qs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new St(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:ki});r.uniforms.tEquirect.value=e;let a=new Le(s,r),o=e.minFilter;return e.minFilter===ii&&(e.minFilter=rn),new xs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Yc=256,xp=3,yp=20,gh=256,_h=16,vp=3,Mp=new W,Sp=new ee,to=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new xs(1,10,null),this._boxMesh=new Le(new St(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Mp}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let g=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,m=l.autoClearStencil,E=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,E===null&&(t.background=l.getClearColor(Sp));let p=new xs(n,s,h);return p.position.copy(o),p.update(l,t),l.autoClear=g,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=m,t.background=E,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Yc,ll(t))}_fromTexture(t,e){t.mapping===Xi||t.mapping===Ss?this._setSize(t.image.length===0?Yc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Zc(t,!1,!1),n=Math.log2(t)-xp;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Zc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Xi||t.mapping===Ss?(this._cubemapMaterial===null&&(this._cubemapMaterial=$c()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Jc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=bp(),this._integrationMaterial=Ep());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/_h);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-vp)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(gh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=wp());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Zc(i,t,e){return new dr(i,{minFilter:ii,generateMipmaps:t,type:In,colorSpace:Hs,depthBuffer:e})}function fr(i,t,e){return new ln({name:i,uniforms:t,vertexShader:ae.cube_vert,fragmentShader:e,side:Ze,blending:ki,depthTest:!1,depthWrite:!1})}function bp(){return fr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${gh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ep(){return fr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:_h}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function wp(){return fr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${yp}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Jc(){return fr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function $c(){return fr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Tp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,u=!1){return f==null?null:u?a(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===da||u===fa)if(t.has(f)){let m=t.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let E=new dr(m.height);return E.fromEquirectangularTexture(i,f),t.set(f,E),f.addEventListener("dispose",c),o(E.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,m=u===da||u===fa,E=u===Xi||u===Ss;if(m||E){let p=e.get(f),d=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new to(i)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let v=f.image;return m&&v&&v.height>0||E&&v&&l(v)?(n===null&&(n=new to(i)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,u){return u===da?f.mapping=Xi:u===fa&&(f.mapping=Ss),f}function l(f){let u=0,m=6;for(let E=0;E<m;E++)f[E]!==void 0&&u++;return u===m}function c(f){let u=f.target;u.removeEventListener("dispose",c);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function g(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function Ap(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Fs("WebGLRenderer: "+n+" extension not supported."),s}}}function Rp(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let E=r.get(m);E&&(t.remove(E),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,E){return s[E.id]!==void 0||(E.addEventListener("dispose",o),s[E.id]=new WeakRef(E),a.register(E,E.id,E),e.memory.geometries++),E}function h(m){let E=m.attributes;for(let p in E)t.update(E[p],i.ARRAY_BUFFER)}function g(m){let E=m.index,p=m.attributes.position,d=0;if(p===void 0)return;let v=E!==null?E.array.length:p.array.length/3-1,L=p.count>=65535?Xs:Ws,w=new L(Math.ceil(v/3)*6,1),T=w.array;if(E!==null){let _=E.array;d=E.version;for(let b=0,z=0;b<v;b+=3){let N=_[b+0],k=_[b+1],J=_[b+2];T[z++]=N,T[z++]=k,T[z++]=k,T[z++]=J,T[z++]=J,T[z++]=N}}else{d=p.version;for(let _=0,b=0;_<v;_+=3){let z=_+0,N=_+1,k=_+2;T[b++]=z,T[b++]=N,T[b++]=N,T[b++]=k,T[b++]=k,T[b++]=z}}w.version=d;let R=r.get(m);R&&t.remove(R),r.set(m,w)}function f(m){let E=r.get(m);if(E){let p=m.index;p!==null&&E.version<p.version&&g(m)}else g(m);return r.get(m)}function u(){for(let m in s){let E=s[m].deref();E!==void 0&&l(E)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function Cp(i,t,e){let n;function s(g){n=g}let r,a;function o(g){r=g.type,a=g.bytesPerElement}function l(g,f){i.drawElements(n,f,r,g*a),e.update(f,n,1)}function c(g,f,u){u!==0&&(i.drawElementsInstanced(n,f,r,g*a,u),e.update(f,n,u))}function h(g,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,g,0,u);let E=0;for(let p=0;p<u;p++)E+=f[p];e.update(E,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ip(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Qt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Pp(i,t,e){let n=new WeakMap,s=new Pe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==g){let z=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",z)};f!==void 0&&f.texture.dispose();let u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],L=0;u===!0&&(L=1),m===!0&&(L=2),E===!0&&(L=3);let w=o.attributes.position.count*L,T=1;w>t.maxTextureSize&&(T=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let R=new Float32Array(w*T*4*g),_=new Vs(R,w,T,g);_.type=Cn,_.needsUpdate=!0;let b=L*4;for(let N=0;N<g;N++){let k=p[N],J=d[N],st=v[N],F=w*T*4*N;for(let et=0;et<k.count;et++){let ct=et*b;u===!0&&(s.fromBufferAttribute(k,et),R[F+ct+0]=s.x,R[F+ct+1]=s.y,R[F+ct+2]=s.z,R[F+ct+3]=0),m===!0&&(s.fromBufferAttribute(J,et),R[F+ct+4]=s.x,R[F+ct+5]=s.y,R[F+ct+6]=s.z,R[F+ct+7]=0),E===!0&&(s.fromBufferAttribute(st,et),R[F+ct+8]=s.x,R[F+ct+9]=s.y,R[F+ct+10]=s.z,R[F+ct+11]=st.itemSize===4?s.w:1)}}f={count:g,texture:_,size:new kt(w,T)},n.set(o,f),o.addEventListener("dispose",z)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let E=0;E<c.length;E++)u+=c[E];let m=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Lp(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,g=c.geometry,f=t.get(c,g);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Dp={[ko]:"LINEAR_TONE_MAPPING",[Vo]:"REINHARD_TONE_MAPPING",[Wo]:"CINEON_TONE_MAPPING",[Wi]:"ACES_FILMIC_TONE_MAPPING",[qo]:"AGX_TONE_MAPPING",[Yo]:"NEUTRAL_TONE_MAPPING",[Xo]:"CUSTOM_TONE_MAPPING"};function Np(i,t,e,n,s,r){let a=new gn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new _n;h.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new be([0,2,0,0,2,0],2));let g=new Kr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Le(h,g),u=new tr(-1,1,1,-1,0,1),m=null,E=null,p=!1,d,v=null,L=[],w=!1;this.setSize=function(T,R){a.setSize(T,R),o!==null&&o.setSize(T,R),l!==null&&l.setSize(T,R);for(let _=0;_<L.length;_++){let b=L[_];b.setSize&&b.setSize(T,R)}},this.setEffects=function(T){L=T,w=L.length>0&&L[0].isRenderPass===!0;let R=a.width,_=a.height;L.length>0&&o===null&&(o=new gn(R,_,{type:In,depthBuffer:!1,stencilBuffer:!1}),l=new gn(R,_,{type:In,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&L.some(z=>z.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Qn(R,_),r===!0&&(c.format=si,c.type=qi)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let z=0;z<L.length;z++){let N=L[z];N.setSize&&N.setSize(R,_),b&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(T,R){if(p||T.toneMapping===On&&L.length===0)return!1;if(v=R,R!==null){let _=R.width,b=R.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return w===!1&&T.setRenderTarget(a),d=T.toneMapping,T.toneMapping=On,!0},this.hasRenderPass=function(){return w},this.end=function(T,R){T.toneMapping=d,p=!0;let _=a,b=o;for(let z=0;z<L.length;z++){let N=L[z];N.enabled!==!1&&(N.render(T,b,_,R),N.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(m!==T.outputColorSpace||E!==T.toneMapping){m=T.outputColorSpace,E=T.toneMapping,g.defines={},le.getTransfer(m)===pe&&(g.defines.SRGB_TRANSFER="");let z=Dp[E];z&&(g.defines[z]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(v),T.render(f,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),g.dispose()}}var xh=new on,yh=new Qn(1,1),vh=new Ys(1),Mh=new Vs,Sh=new Zr,bh=new qs,Kc=[],jc=[],Qc=new Float32Array(16),th=new Float32Array(9),eh=new Float32Array(4);function As(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Kc[s];if(r===void 0&&(r=new Float32Array(s),Kc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function eo(i,t){let e=jc[t];e===void 0&&(e=new Int32Array(t),jc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Up(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function Op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function Bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function zp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;eh.set(n),i.uniformMatrix2fv(this.addr,!1,eh),ze(e,n)}}function Hp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;th.set(n),i.uniformMatrix3fv(this.addr,!1,th),ze(e,n)}}function Gp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,n))return;Qc.set(n),i.uniformMatrix4fv(this.addr,!1,Qc),ze(e,n)}}function kp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function Wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function Xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function qp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Yp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function Zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function Jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function no(i){return i.version===0&&(i.compareFunction=sl,i.needsUpdate=!0),i}function $p(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=no(yh):r=xh,e.setTexture2D(t||r,s)}function Kp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Sh,s)}function jp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=no(vh):r=bh,e.setTextureCube(t||r,s)}function Qp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Mh,s)}function tm(i){switch(i){case 5126:return Up;case 35664:return Fp;case 35665:return Op;case 35666:return Bp;case 35674:return zp;case 35675:return Hp;case 35676:return Gp;case 5124:case 35670:return kp;case 35667:case 35671:return Vp;case 35668:case 35672:return Wp;case 35669:case 35673:return Xp;case 5125:return qp;case 36294:return Yp;case 36295:return Zp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return Kp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return Qp}}function em(i,t){i.uniform1fv(this.addr,t)}function nm(i,t){let e=As(t,this.size,2);i.uniform2fv(this.addr,e)}function im(i,t){let e=As(t,this.size,3);i.uniform3fv(this.addr,e)}function sm(i,t){let e=As(t,this.size,4);i.uniform4fv(this.addr,e)}function rm(i,t){let e=As(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function am(i,t){let e=As(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function om(i,t){let e=As(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function lm(i,t){i.uniform1iv(this.addr,t)}function cm(i,t){i.uniform2iv(this.addr,t)}function hm(i,t){i.uniform3iv(this.addr,t)}function um(i,t){i.uniform4iv(this.addr,t)}function dm(i,t){i.uniform1uiv(this.addr,t)}function fm(i,t){i.uniform2uiv(this.addr,t)}function pm(i,t){i.uniform3uiv(this.addr,t)}function mm(i,t){i.uniform4uiv(this.addr,t)}function gm(i,t,e){let n=this.cache,s=t.length,r=eo(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=no(yh):a=xh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function _m(i,t,e){let n=this.cache,s=t.length,r=eo(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Sh,r[a])}function xm(i,t,e){let n=this.cache,s=t.length,r=eo(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=no(vh):a=bh;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function ym(i,t,e){let n=this.cache,s=t.length,r=eo(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Mh,r[a])}function vm(i){switch(i){case 5126:return em;case 35664:return nm;case 35665:return im;case 35666:return sm;case 35674:return rm;case 35675:return am;case 35676:return om;case 5124:case 35670:return lm;case 35667:case 35671:return cm;case 35668:case 35672:return hm;case 35669:case 35673:return um;case 5125:return dm;case 36294:return fm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return gm;case 35679:case 36299:case 36307:return _m;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return ym}}var Ml=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=tm(e.type)}},Sl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vm(e.type)}},bl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},yl=/(\w+)(\])?(\[|\.)?/g;function nh(i,t){i.seq.push(t),i.map[t.id]=t}function Mm(i,t,e){let n=i.name,s=n.length;for(yl.lastIndex=0;;){let r=yl.exec(n),a=yl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){nh(e,c===void 0?new Ml(o,i,t):new Sl(o,i,t));break}else{let g=e.map[o];g===void 0&&(g=new bl(o),nh(e,g)),e=g}}}var ws=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Mm(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ih(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Sm=37297,bm=0;function Em(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var sh=new te;function wm(i){le._getMatrix(sh,le.workingColorSpace,i);let t=`mat3( ${sh.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case Gs:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function rh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Em(i.getShaderSource(t),o)}else return r}function Tm(i,t){let e=wm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Am={[ko]:"Linear",[Vo]:"Reinhard",[Wo]:"Cineon",[Wi]:"ACESFilmic",[qo]:"AgX",[Yo]:"Neutral",[Xo]:"Custom"};function Rm(i,t){let e=Am[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Qa=new W;function Cm(){le.getLuminanceCoefficients(Qa);let i=Qa.x.toFixed(4),t=Qa.y.toFixed(4),e=Qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Im(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function Pm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ur(i){return i!==""}function ah(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function oh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function El(i){return i.replace(Dm,Nm)}function Nm(i,t){let e=ae[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return El(e)}var Um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lh(i){return i.replace(Um,Fm)}function Fm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ch(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Om={[ni]:"SHADOWMAP_TYPE_PCF",[vs]:"SHADOWMAP_TYPE_VSM"};function Bm(i){return Om[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var zm={[Ss]:"ENVMAP_MODE_REFRACTION"};function Hm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":zm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Gm={[Go]:"ENVMAP_BLENDING_MULTIPLY",[wc]:"ENVMAP_BLENDING_MIX",[Tc]:"ENVMAP_BLENDING_ADD"};function km(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Gm[i.combine]||"ENVMAP_BLENDING_NONE"}function Vm(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Bm(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Hm(e),g=km(e),f=Im(e),u=Pm(r),m=s.createProgram(),E,p,d=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(E=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(ur).join(`
`),E.length>0&&(E+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(ur).join(`
`),p.length>0&&(p+=`
`)):(E=[ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),p=[ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+g:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?ae.tonemapping_pars_fragment:"",e.toneMapping!==On?Rm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,Tm("linearToOutputTexel",e.outputColorSpace),Cm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ur).join(`
`)),a=El(a),a=ah(a,e),a=oh(a,e),o=El(o),o=ah(o,e),o=oh(o,e),a=lh(a),o=lh(o),e.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,E=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,p=["#define varying in",e.glslVersion===rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=d+E+a,L=d+p+o,w=ih(s,s.VERTEX_SHADER,v),T=ih(s,s.FRAGMENT_SHADER,L);s.attachShader(m,w),s.attachShader(m,T),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function R(N){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(m)||"",J=s.getShaderInfoLog(w)||"",st=s.getShaderInfoLog(T)||"",F=k.trim(),et=J.trim(),ct=st.trim(),at=!0,vt=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,w,T);else{let U=rh(s,w,"vertex"),mt=rh(s,T,"fragment");Qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+F+`
`+U+`
`+mt)}else F!==""?Zt("WebGLProgram: Program Info Log:",F):(et===""||ct==="")&&(vt=!1);vt&&(N.diagnostics={runnable:at,programLog:F,vertexShader:{log:et,prefix:E},fragmentShader:{log:ct,prefix:p}})}s.deleteShader(w),s.deleteShader(T),_=new ws(s,m),b=Lm(s,m)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(m,Sm)),z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bm++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=T,this}var Wm=0,wl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Tl(t),e.set(t,n)),n}},Tl=class{constructor(t){this.id=Wm++,this.code=t,this.usedTimes=0}};function Xm(i){return i===wi||i===or||i===lr}function qm(i,t,e,n,s,r){let a=new ps,o=new wl,l=new Set,c=[],h=new Map,g=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,b,z,N,k,J){let st=N.fog,F=k.geometry,et=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,ct=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,at=t.get(_.envMap||et,ct),vt=f[_.type],U=n.precision;_.precision!==null&&(U=n.getMaxPrecision(_.precision),U!==_.precision&&Zt("WebGLProgram.getParameters:",_.precision,"not supported, using",U,"instead."));let mt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,yt=mt!==void 0?mt.length:0,Ht=0;F.morphAttributes.position!==void 0&&(Ht=1),F.morphAttributes.normal!==void 0&&(Ht=2),F.morphAttributes.color!==void 0&&(Ht=3);let Jt,ft,It,Ft;if(vt){let Et=zn[vt];Jt=Et.vertexShader,ft=Et.fragmentShader}else{Jt=_.vertexShader,ft=_.fragmentShader;let Et=o.getVertexShaderStage(_),Bt=o.getFragmentShaderStage(_);o.update(_,Et,Bt),It=Et.id,Ft=Bt.id}let Lt=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Yt=k.isInstancedMesh===!0,ge=k.isBatchedMesh===!0,Xt=!!_.map,se=!!_.matcap,ne=!!at,re=ne&&at.isPMREMTexture===!0,Ce=!!_.aoMap,Me=!!_.lightMap,Fe=!!_.bumpMap&&_.wireframe===!1,xe=!!_.normalMap,he=!!_.displacementMap,De=!!_.emissiveMap,Je=!!_.metalnessMap,$e=!!_.roughnessMap,Ke=_.anisotropy>0,Z=_.clearcoat>0,Ne=_.diffuseRoughness>0,ye=_.dispersion>0,ve=_.retroreflectivity>0,Pt=_.iridescence>0,Ee=_.sheen>0,Wt=_.transmission>0,$t=Ke&&!!_.anisotropyMap,P=Z&&!!_.clearcoatMap,y=Z&&!!_.clearcoatNormalMap,j=Z&&!!_.clearcoatRoughnessMap,xt=Ne&&!!_.diffuseRoughnessMap,pt=Pt&&!!_.iridescenceMap,Tt=Pt&&!!_.iridescenceThicknessMap,Rt=Ee&&!!_.sheenColorMap,lt=Ee&&!!_.sheenRoughnessMap,ht=!!_.specularMap,At=!!_.specularColorMap,O=!!_.specularIntensityMap,dt=Wt&&!!_.transmissionMap,ot=Wt&&!!_.thicknessMap,Ct=!!_.gradientMap,wt=!!_.alphaMap,gt=_.alphaTest>0,zt=!!_.alphaHash,ie=!!_.extensions,Mt=On;_.toneMapped&&(Lt===null||Lt.isXRRenderTarget===!0)&&(Mt=i.toneMapping);let Gt=re?at.isCompressedCubeTexture?at.image[0].mipmaps:at.mipmaps:null,Kt={shaderID:vt,shaderType:_.type,shaderName:_.name,vertexShader:Jt,fragmentShader:ft,defines:_.defines,customVertexShaderID:It,customFragmentShaderID:Ft,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:U,batching:ge,batchingColor:ge&&k._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&k.instanceColor!==null,instancingMorph:Yt&&k.morphTexture!==null,outputColorSpace:Lt===null?i.outputColorSpace:Lt.isXRRenderTarget===!0?Lt.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Xt,matcap:se,envMap:ne,envMapMode:ne&&at.mapping,envMapPMREM:re,envMapMaxLod:re?Gt.length-1:null,envMapSize:re?Gt[0].width:null,aoMap:Ce,lightMap:Me,bumpMap:Fe,normalMap:xe,displacementMap:he,emissiveMap:De,normalMapObjectSpace:xe&&_.normalMapType===Cc,normalMapTangentSpace:xe&&_.normalMapType===Ka,packedNormalMap:xe&&_.normalMapType===Ka&&Xm(_.normalMap.format),metalnessMap:Je,roughnessMap:$e,anisotropy:Ke,anisotropyMap:$t,clearcoat:Z,clearcoatMap:P,clearcoatNormalMap:y,clearcoatRoughnessMap:j,diffuseRoughness:Ne,diffuseRoughnessMap:xt,dispersion:ye,retroreflection:ve,iridescence:Pt,iridescenceMap:pt,iridescenceThicknessMap:Tt,sheen:Ee,sheenColorMap:Rt,sheenRoughnessMap:lt,specularMap:ht,specularColorMap:At,specularIntensityMap:O,transmission:Wt,transmissionMap:dt,thicknessMap:ot,gradientMap:Ct,opaque:_.transparent===!1&&_.blending===Ms&&_.alphaToCoverage===!1,alphaMap:wt,alphaTest:gt,alphaHash:zt,combine:_.combine,mapUv:Xt&&u(_.map.channel),aoMapUv:Ce&&u(_.aoMap.channel),lightMapUv:Me&&u(_.lightMap.channel),bumpMapUv:Fe&&u(_.bumpMap.channel),normalMapUv:xe&&u(_.normalMap.channel),displacementMapUv:he&&u(_.displacementMap.channel),emissiveMapUv:De&&u(_.emissiveMap.channel),metalnessMapUv:Je&&u(_.metalnessMap.channel),roughnessMapUv:$e&&u(_.roughnessMap.channel),anisotropyMapUv:$t&&u(_.anisotropyMap.channel),clearcoatMapUv:P&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:y&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:xt&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:pt&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:lt&&u(_.sheenRoughnessMap.channel),specularMapUv:ht&&u(_.specularMap.channel),specularColorMapUv:At&&u(_.specularColorMap.channel),specularIntensityMapUv:O&&u(_.specularIntensityMap.channel),transmissionMapUv:dt&&u(_.transmissionMap.channel),thicknessMapUv:ot&&u(_.thicknessMap.channel),alphaMapUv:wt&&u(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(xe||Ke),vertexNormals:!!F.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!F.attributes.uv&&(Xt||wt),fog:!!st,useFog:_.fog===!0,fogExp2:!!st&&st.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||F.attributes.normal===void 0&&xe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:bt,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Ht,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:J.filter(Et=>Et.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:Xt&&_.map.isVideoTexture===!0&&le.getTransfer(_.map.colorSpace)===pe,decodeVideoTextureEmissive:De&&_.emissiveMap.isVideoTexture===!0&&le.getTransfer(_.emissiveMap.colorSpace)===pe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===bn,flipSided:_.side===Ze,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ie&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&_.extensions.multiDraw===!0||ge)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Kt.vertexUv1s=l.has(1),Kt.vertexUv2s=l.has(2),Kt.vertexUv3s=l.has(3),l.clear(),Kt}function E(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let z in _.defines)b.push(z),b.push(_.defines[z]);return _.isRawShaderMaterial===!1&&(p(b,_),d(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function d(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let b=f[_.type],z;if(b){let N=zn[b];z=Wc.clone(N.uniforms)}else z=_.uniforms;return z}function L(_,b){let z=h.get(b);return z!==void 0?++z.usedTimes:(z=new Vm(i,b,_,s),c.push(z),h.set(b,z)),z}function w(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function R(){o.dispose()}return{getParameters:m,getProgramCacheKey:E,getUniforms:v,acquireProgram:L,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:R}}function Ym(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Zm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function hh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function uh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,m,E,p,d){let v=i[t];return v===void 0?(v={id:f.id,object:f,geometry:u,material:m,materialVariant:a(f),groupOrder:E,renderOrder:f.renderOrder,z:p,group:d},i[t]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=m,v.materialVariant=a(f),v.groupOrder=E,v.renderOrder=f.renderOrder,v.z=p,v.group=d),t++,v}function l(f,u,m,E,p,d,v){v.reversedDepth===!0&&(p=-p);let L=o(f,u,m,E,p,d);m.transmission>0?n.push(L):m.transparent===!0?s.push(L):e.push(L)}function c(f,u,m,E,p,d){let v=o(f,u,m,E,p,d);m.transmission>0?n.unshift(v):m.transparent===!0?s.unshift(v):e.unshift(v)}function h(f,u){e.length>1&&e.sort(f||Zm),n.length>1&&n.sort(u||hh),s.length>1&&s.sort(u||hh)}function g(){for(let f=t,u=i.length;f<u;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:g,sort:h}}function Jm(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new uh,i.set(n,[a])):s>=r.length?(a=new uh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function $m(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new ee};break;case"SpotLight":e={position:new W,direction:new W,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function Km(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var jm=0;function Qm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tg(i){let t=new $m,e=Km(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);let s=new W,r=new me,a=new me;function o(c){let h=0,g=0,f=0;for(let J=0;J<9;J++)n.probe[J].set(0,0,0);let u=0,m=0,E=0,p=0,d=0,v=0,L=0,w=0,T=0,R=0,_=0,b=0,z=0,N=0;c.sort(Qm);for(let J=0,st=c.length;J<st;J++){let F=c[J],et=F.color,ct=F.intensity,at=F.distance,vt=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===wi?vt=F.shadow.map.texture:vt=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=et.r*ct,g+=et.g*ct,f+=et.b*ct;else if(F.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(F.sh.coefficients[U],ct);N++}else if(F.isSunLight){let U=t.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let mt=F.shadow,yt=e.get(F);yt.shadowIntensity=mt.intensity,yt.shadowBias=mt.bias,yt.shadowNormalBias=mt.normalBias,yt.shadowRadius=mt.radius,yt.shadowMapSize.copy(mt.mapSize).multiply(mt.getFrameExtents()),n.sunShadow[m]=yt,n.sunShadowMap[m]=vt;let Ht=mt.getViewportCount();for(let Jt=0;Jt<Ht;Jt++)n.sunShadowMatrix[E+Jt]=mt.getMatrix(Jt),n.sunShadowCascade[E+Jt]=mt._cascadeData[Jt];E+=Ht,m++}n.sun[u]=U,u++}else if(F.isDirectionalLight){let U=t.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let mt=F.shadow,yt=e.get(F);yt.shadowIntensity=mt.intensity,yt.shadowBias=mt.bias,yt.shadowNormalBias=mt.normalBias,yt.shadowRadius=mt.radius,yt.shadowMapSize=mt.mapSize,n.directionalShadow[p]=yt,n.directionalShadowMap[p]=vt,n.directionalShadowMatrix[p]=F.shadow.matrix,T++}n.directional[p]=U,p++}else if(F.isSpotLight){let U=t.get(F);U.position.setFromMatrixPosition(F.matrixWorld),U.color.copy(et).multiplyScalar(ct),U.distance=at,U.coneCos=Math.cos(F.angle),U.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),U.decay=F.decay,n.spot[v]=U;let mt=F.shadow;if(F.map&&(n.spotLightMap[b]=F.map,b++,mt.updateMatrices(F),F.castShadow&&z++),n.spotLightMatrix[v]=mt.matrix,F.castShadow){let yt=e.get(F);yt.shadowIntensity=mt.intensity,yt.shadowBias=mt.bias,yt.shadowNormalBias=mt.normalBias,yt.shadowRadius=mt.radius,yt.shadowMapSize=mt.mapSize,n.spotShadow[v]=yt,n.spotShadowMap[v]=vt,_++}v++}else if(F.isRectAreaLight){let U=t.get(F);U.color.copy(et).multiplyScalar(ct),U.halfWidth.set(F.width*.5,0,0),U.halfHeight.set(0,F.height*.5,0),n.rectArea[L]=U,L++}else if(F.isPointLight){let U=t.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity),U.distance=F.distance,U.decay=F.decay,F.castShadow){let mt=F.shadow,yt=e.get(F);yt.shadowIntensity=mt.intensity,yt.shadowBias=mt.bias,yt.shadowNormalBias=mt.normalBias,yt.shadowRadius=mt.radius,yt.shadowMapSize=mt.mapSize,yt.shadowCameraNear=mt.camera.near,yt.shadowCameraFar=mt.camera.far,n.pointShadow[d]=yt,n.pointShadowMap[d]=vt,n.pointShadowMatrix[d]=F.shadow.matrix,R++}n.point[d]=U,d++}else if(F.isHemisphereLight){let U=t.get(F);U.skyColor.copy(F.color).multiplyScalar(ct),U.groundColor.copy(F.groundColor).multiplyScalar(ct),n.hemi[w]=U,w++}}L>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=g,n.ambient[2]=f;let k=n.hash;(k.sunLength!==u||k.directionalLength!==p||k.pointLength!==d||k.spotLength!==v||k.rectAreaLength!==L||k.hemiLength!==w||k.numSunShadows!==m||k.numDirectionalShadows!==T||k.numPointShadows!==R||k.numSpotShadows!==_||k.numSpotMaps!==b||k.numLightProbes!==N)&&(n.sun.length=u,n.directional.length=p,n.spot.length=v,n.rectArea.length=L,n.point.length=d,n.hemi.length=w,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=E,n.sunShadowCascade.length=E,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-z,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=z,n.numLightProbes=N,k.sunLength=u,k.directionalLength=p,k.pointLength=d,k.spotLength=v,k.rectAreaLength=L,k.hemiLength=w,k.numSunShadows=m,k.numDirectionalShadows=T,k.numPointShadows=R,k.numSpotShadows=_,k.numSpotMaps=b,k.numLightProbes=N,n.version=jm++)}function l(c,h){let g=0,f=0,u=0,m=0,E=0,p=0,d=h.matrixWorldInverse;for(let v=0,L=c.length;v<L;v++){let w=c[v];if(w.isSunLight){let T=n.sun[g];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(d),g++}else if(w.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),f++}else if(w.isSpotLight){let T=n.spot[m];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),m++}else if(w.isRectAreaLight){let T=n.rectArea[E];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(d),a.identity(),r.copy(w.matrixWorld),r.premultiply(d),a.extractRotation(r),T.halfWidth.set(w.width*.5,0,0),T.halfHeight.set(0,w.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),E++}else if(w.isPointLight){let T=n.point[u];T.position.setFromMatrixPosition(w.matrixWorld),T.position.applyMatrix4(d),u++}else if(w.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(w.matrixWorld),T.direction.transformDirection(d),p++}}}return{setup:o,setupView:l,state:n}}function dh(i){let t=new tg(i),e=[],n=[],s=[];function r(g){h.camera=g,e.length=0,n.length=0,s.length=0}function a(g){g.isLightProbeGrid?s.push(g):e.push(g)}function o(g){n.push(g)}function l(){t.setup(e),s.sort((g,f)=>g.priority-f.priority||g.id-f.id)}function c(g){t.setupView(e,g)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function eg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new dh(i),t.set(s,[o])):r>=a.length?(o=new dh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ig=`uniform sampler2D shadow_pass;
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
}`,sg=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],rg=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],fh=new me,hr=new W,vl=new W;function ag(i,t,e){let n=new _i,s=new kt,r=new kt,a=new Pe,o=new jr,l=new Qr,c={},h=e.maxTextureSize,g={[Ei]:Ze,[Ze]:Ei,[bn]:bn},f=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let m=new _n;m.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new Le(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ni;let d=this.type;this.render=function(R,_,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;this.type===ac&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ni);let z=i.getRenderTarget(),N=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),J=i.state;J.setBlending(ki),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let st=d!==this.type;st&&_.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(et=>et.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,et=R.length;F<et;F++){let ct=R[F],at=ct.shadow;if(at===void 0){Zt("WebGLShadowMap:",ct,"has no shadow.");continue}if(at.autoUpdate===!1&&at.needsUpdate===!1)continue;s.copy(at.mapSize);let vt=at.getFrameExtents();s.multiply(vt),r.copy(at.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/vt.x),s.x=r.x*vt.x,at.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/vt.y),s.y=r.y*vt.y,at.mapSize.y=r.y));let U=i.state.buffers.depth.getReversed();if(at.camera._reversedDepth=U,at.map===null||st===!0){if(at.map!==null&&(at.map.depthTexture!==null&&(at.map.depthTexture.dispose(),at.map.depthTexture=null),at.map.dispose()),this.type===vs){if(ct.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}at.map=new gn(s.x,s.y,{format:wi,type:In,minFilter:rn,magFilter:rn,generateMipmaps:!1}),at.map.texture.name=ct.name+".shadowMap",at.map.depthTexture=new Qn(s.x,s.y,Cn),at.map.depthTexture.name=ct.name+".shadowMapDepth",at.map.depthTexture.format=Kn,at.map.depthTexture.compareFunction=null,at.map.depthTexture.minFilter=Ve,at.map.depthTexture.magFilter=Ve}else ct.isPointLight?(at.map=new dr(s.x),at.map.depthTexture=new Ys(s.x,Rn)):(at.map=new gn(s.x,s.y),at.map.depthTexture=new Qn(s.x,s.y,Rn)),at.map.depthTexture.name=ct.name+".shadowMap",at.map.depthTexture.format=Kn,this.type===ni?(at.map.depthTexture.compareFunction=U?il:nl,at.map.depthTexture.minFilter=rn,at.map.depthTexture.magFilter=rn):(at.map.depthTexture.compareFunction=null,at.map.depthTexture.minFilter=Ve,at.map.depthTexture.magFilter=Ve);at.camera.updateProjectionMatrix()}at.map.isWebGLCubeRenderTarget!==!0&&(at.map.width!==s.x||at.map.height!==s.y)&&at.map.setSize(s.x,s.y);let mt=at.map.isWebGLCubeRenderTarget?6:at.getViewportCount();ct.isPointLight!==!0&&at.updateMatrices(ct,b);let yt=(at.camera.layers.mask&4294967294)!==0?at.camera.layers:b.layers;for(let Ht=0;Ht<mt;Ht++){let Jt=at.getCamera(Ht);if(ct.isPointLight){let ft=at.camera,It=at.matrix,Ft=ct.distance||ft.far;Ft!==ft.far&&(ft.far=Ft,ft.updateProjectionMatrix()),hr.setFromMatrixPosition(ct.matrixWorld),ft.position.copy(hr),vl.copy(ft.position),vl.add(sg[Ht]),ft.up.copy(rg[Ht]),ft.lookAt(vl),ft.updateMatrixWorld(),It.makeTranslation(-hr.x,-hr.y,-hr.z),fh.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse),at._frustum.setFromProjectionMatrix(fh,ft.coordinateSystem,ft.reversedDepth)}if(at.map.isWebGLCubeRenderTarget)i.setRenderTarget(at.map,Ht),i.clear();else{Ht===0&&(i.setRenderTarget(at.map),i.clear());let ft=at.getViewport(Ht);a.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),J.viewport(a)}n=at.getFrustum(Ht),w(_,b,Jt,ct,yt,this.type)}at.isPointLightShadow!==!0&&this.type===vs&&v(at,b),at.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(z,N,k)};function v(R,_){let b=t.update(E);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,u.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),R.mapPass===null?R.mapPass=new gn(s.x,s.y,{format:wi,type:In}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(_,null,b,f,E,null),u.uniforms.shadow_pass.value=R.mapPass.texture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(_,null,b,u,E,null)}function L(R,_,b,z){let N=null,k=b.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(k!==void 0)N=k;else if(N=b.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let J=N.uuid,st=_.uuid,F=c[J];F===void 0&&(F={},c[J]=F);let et=F[st];et===void 0&&(et=N.clone(),F[st]=et,_.addEventListener("dispose",T)),N=et}if(N.visible=_.visible,N.wireframe=_.wireframe,z===vs?N.side=_.shadowSide!==null?_.shadowSide:_.side:N.side=_.shadowSide!==null?_.shadowSide:g[_.side],N.alphaMap=_.alphaMap,N.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,N.map=_.map,N.clipShadows=_.clipShadows,N.clippingPlanes=_.clippingPlanes,N.clipIntersection=_.clipIntersection,N.displacementMap=_.displacementMap,N.displacementScale=_.displacementScale,N.displacementBias=_.displacementBias,N.wireframeLinewidth=_.wireframeLinewidth,N.linewidth=_.linewidth,b.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let J=i.properties.get(N);J.light=b}return N}function w(R,_,b,z,N,k){if(R.visible===!1)return;if(R.layers.test(N)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&k===vs)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,R.matrixWorld);let F=t.update(R),et=R.material;if(Array.isArray(et)){let ct=F.groups;for(let at=0,vt=ct.length;at<vt;at++){let U=ct[at],mt=et[U.materialIndex];if(mt&&mt.visible){let yt=L(R,mt,z,k);R.onBeforeShadow(i,R,_,b,F,yt,U),i.renderBufferDirect(b,null,F,yt,R,U),R.onAfterShadow(i,R,_,b,F,yt,U)}}}else if(et.visible){let ct=L(R,et,z,k);R.onBeforeShadow(i,R,_,b,F,ct,null),i.renderBufferDirect(b,null,F,ct,R,null),R.onAfterShadow(i,R,_,b,F,ct,null)}}let st=R.children;for(let F=0,et=st.length;F<et;F++)w(st[F],_,b,z,N,k)}function T(R){R.target.removeEventListener("dispose",T);for(let b in c){let z=c[b],N=R.target.uuid;N in z&&(z[N].dispose(),delete z[N])}}}function og(i,t){function e(){let O=!1,dt=new Pe,ot=null,Ct=new Pe(0,0,0,0);return{setMask:function(wt){ot!==wt&&!O&&(i.colorMask(wt,wt,wt,wt),ot=wt)},setLocked:function(wt){O=wt},setClear:function(wt,gt,zt,ie,Mt){Mt===!0&&(wt*=ie,gt*=ie,zt*=ie),dt.set(wt,gt,zt,ie),Ct.equals(dt)===!1&&(i.clearColor(wt,gt,zt,ie),Ct.copy(dt))},reset:function(){O=!1,ot=null,Ct.set(-1,0,0,0)}}}function n(){let O=!1,dt=!1,ot=null,Ct=null,wt=null;return{setReversed:function(gt){if(dt!==gt){let zt=t.get("EXT_clip_control");gt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),dt=gt;let ie=wt;wt=null,this.setClear(ie)}},getReversed:function(){return dt},setTest:function(gt){gt?bt(i.DEPTH_TEST):Yt(i.DEPTH_TEST)},setMask:function(gt){ot!==gt&&!O&&(i.depthMask(gt),ot=gt)},setFunc:function(gt){if(dt&&(gt=Hc[gt]),Ct!==gt){switch(gt){case Fr:i.depthFunc(i.NEVER);break;case Or:i.depthFunc(i.ALWAYS);break;case Br:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case zr:i.depthFunc(i.EQUAL);break;case Hr:i.depthFunc(i.GEQUAL);break;case Gr:i.depthFunc(i.GREATER);break;case kr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ct=gt}},setLocked:function(gt){O=gt},setClear:function(gt){wt!==gt&&(wt=gt,dt&&(gt=1-gt),i.clearDepth(gt))},reset:function(){O=!1,ot=null,Ct=null,wt=null,dt=!1}}}function s(){let O=!1,dt=null,ot=null,Ct=null,wt=null,gt=null,zt=null,ie=null,Mt=null;return{setTest:function(Gt){O||(Gt?bt(i.STENCIL_TEST):Yt(i.STENCIL_TEST))},setMask:function(Gt){dt!==Gt&&!O&&(i.stencilMask(Gt),dt=Gt)},setFunc:function(Gt,Kt,Et){(ot!==Gt||Ct!==Kt||wt!==Et)&&(i.stencilFunc(Gt,Kt,Et),ot=Gt,Ct=Kt,wt=Et)},setOp:function(Gt,Kt,Et){(gt!==Gt||zt!==Kt||ie!==Et)&&(i.stencilOp(Gt,Kt,Et),gt=Gt,zt=Kt,ie=Et)},setLocked:function(Gt){O=Gt},setClear:function(Gt){Mt!==Gt&&(i.clearStencil(Gt),Mt=Gt)},reset:function(){O=!1,dt=null,ot=null,Ct=null,wt=null,gt=null,zt=null,ie=null,Mt=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},g={},f={},u=new WeakMap,m=[],E=null,p=!1,d=null,v=null,L=null,w=null,T=null,R=null,_=null,b=new ee(0,0,0),z=0,N=!1,k=null,J=null,st=null,F=null,et=null,ct=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),at=!1,vt=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(vt=parseFloat(/^WebGL (\d)/.exec(U)[1]),at=vt>=1):U.indexOf("OpenGL ES")!==-1&&(vt=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),at=vt>=2);let mt=null,yt={},Ht=i.getParameter(i.SCISSOR_BOX),Jt=i.getParameter(i.VIEWPORT),ft=new Pe().fromArray(Ht),It=new Pe().fromArray(Jt);function Ft(O,dt,ot,Ct){let wt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(O,gt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<ot;zt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,Ct,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(dt+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return gt}let Lt={};Lt[i.TEXTURE_2D]=Ft(i.TEXTURE_2D,i.TEXTURE_2D,1),Lt[i.TEXTURE_CUBE_MAP]=Ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Lt[i.TEXTURE_2D_ARRAY]=Ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Lt[i.TEXTURE_3D]=Ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),bt(i.DEPTH_TEST),a.setFunc(cs),Fe(!1),xe(Uo),bt(i.CULL_FACE),Ce(ki);function bt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Yt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function ge(O,dt){return f[O]!==dt?(i.bindFramebuffer(O,dt),f[O]=dt,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=dt),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function Xt(O,dt){let ot=m,Ct=!1;if(O){ot=u.get(dt),ot===void 0&&(ot=[],u.set(dt,ot));let wt=O.textures;if(ot.length!==wt.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,zt=wt.length;gt<zt;gt++)ot[gt]=i.COLOR_ATTACHMENT0+gt;ot.length=wt.length,Ct=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,Ct=!0);Ct&&i.drawBuffers(ot)}function se(O){return E!==O?(i.useProgram(O),E=O,!0):!1}let ne={[Vi]:i.FUNC_ADD,[lc]:i.FUNC_SUBTRACT,[cc]:i.FUNC_REVERSE_SUBTRACT};ne[hc]=i.MIN,ne[uc]=i.MAX;let re={[dc]:i.ZERO,[fc]:i.ONE,[pc]:i.SRC_COLOR,[zo]:i.SRC_ALPHA,[vc]:i.SRC_ALPHA_SATURATE,[xc]:i.DST_COLOR,[gc]:i.DST_ALPHA,[mc]:i.ONE_MINUS_SRC_COLOR,[Ho]:i.ONE_MINUS_SRC_ALPHA,[yc]:i.ONE_MINUS_DST_COLOR,[_c]:i.ONE_MINUS_DST_ALPHA,[Mc]:i.CONSTANT_COLOR,[Sc]:i.ONE_MINUS_CONSTANT_COLOR,[bc]:i.CONSTANT_ALPHA,[Ec]:i.ONE_MINUS_CONSTANT_ALPHA};function Ce(O,dt,ot,Ct,wt,gt,zt,ie,Mt,Gt){if(O===ki){p===!0&&(Yt(i.BLEND),p=!1);return}if(p===!1&&(bt(i.BLEND),p=!0),O!==oc){if(O!==d||Gt!==N){if((v!==Vi||T!==Vi)&&(i.blendEquation(i.FUNC_ADD),v=Vi,T=Vi),Gt)switch(O){case Ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fo:i.blendFunc(i.ONE,i.ONE);break;case Oo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qt("WebGLState: Invalid blending: ",O);break}else switch(O){case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Oo:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bo:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",O);break}L=null,w=null,R=null,_=null,b.set(0,0,0),z=0,d=O,N=Gt}return}wt=wt||dt,gt=gt||ot,zt=zt||Ct,(dt!==v||wt!==T)&&(i.blendEquationSeparate(ne[dt],ne[wt]),v=dt,T=wt),(ot!==L||Ct!==w||gt!==R||zt!==_)&&(i.blendFuncSeparate(re[ot],re[Ct],re[gt],re[zt]),L=ot,w=Ct,R=gt,_=zt),(ie.equals(b)===!1||Mt!==z)&&(i.blendColor(ie.r,ie.g,ie.b,Mt),b.copy(ie),z=Mt),d=O,N=!1}function Me(O,dt){O.side===bn?Yt(i.CULL_FACE):bt(i.CULL_FACE);let ot=O.side===Ze;dt&&(ot=!ot),Fe(ot),O.blending===Ms&&O.transparent===!1?Ce(ki):Ce(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let Ct=O.stencilWrite;o.setTest(Ct),Ct&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),De(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?bt(i.SAMPLE_ALPHA_TO_COVERAGE):Yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(O){k!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),k=O)}function xe(O){O!==sc?(bt(i.CULL_FACE),O!==J&&(O===Uo?i.cullFace(i.BACK):O===rc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Yt(i.CULL_FACE),J=O}function he(O){O!==st&&(at&&i.lineWidth(O),st=O)}function De(O,dt,ot){O?(bt(i.POLYGON_OFFSET_FILL),(F!==dt||et!==ot)&&(F=dt,et=ot,a.getReversed()&&(dt=-dt,ot=-ot),i.polygonOffset(dt,ot))):Yt(i.POLYGON_OFFSET_FILL)}function Je(O){O?bt(i.SCISSOR_TEST):Yt(i.SCISSOR_TEST)}function $e(O){O===void 0&&(O=i.TEXTURE0+ct-1),mt!==O&&(i.activeTexture(O),mt=O)}function Ke(O,dt,ot){ot===void 0&&(mt===null?ot=i.TEXTURE0+ct-1:ot=mt);let Ct=yt[ot];Ct===void 0&&(Ct={type:void 0,texture:void 0},yt[ot]=Ct),(Ct.type!==O||Ct.texture!==dt)&&(mt!==ot&&(i.activeTexture(ot),mt=ot),i.bindTexture(O,dt||Lt[O]),Ct.type=O,Ct.texture=dt)}function Z(){let O=yt[mt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Ne(){try{i.compressedTexImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function ye(){try{i.compressedTexImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function ve(){try{i.texSubImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Pt(){try{i.texSubImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Ee(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Wt(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function $t(){try{i.texStorage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function P(){try{i.texStorage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function y(){try{i.texImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function j(){try{i.texImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function xt(O){return g[O]!==void 0?g[O]:i.getParameter(O)}function pt(O,dt){g[O]!==dt&&(i.pixelStorei(O,dt),g[O]=dt)}function Tt(O){ft.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ft.copy(O))}function Rt(O){It.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),It.copy(O))}function lt(O,dt){let ot=c.get(dt);ot===void 0&&(ot=new WeakMap,c.set(dt,ot));let Ct=ot.get(O);Ct===void 0&&(Ct=i.getUniformBlockIndex(dt,O.name),i.uniformBlockBinding(dt,Ct,Ct),ot.set(O,Ct))}function ht(O,dt,ot){let wt=c.get(dt).get(O);l[wt]!==ot&&(i.bindBufferBase(i.UNIFORM_BUFFER,wt,ot),l[wt]=ot)}function At(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},g={},mt=null,yt={},f={},l={},u=new WeakMap,m=[],E=null,p=!1,d=null,v=null,L=null,w=null,T=null,R=null,_=null,b=new ee(0,0,0),z=0,N=!1,k=null,J=null,st=null,F=null,et=null,ft.set(0,0,i.canvas.width,i.canvas.height),It.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:bt,disable:Yt,bindFramebuffer:ge,drawBuffers:Xt,useProgram:se,setBlending:Ce,setMaterial:Me,setFlipSided:Fe,setCullFace:xe,setLineWidth:he,setPolygonOffset:De,setScissorTest:Je,activeTexture:$e,bindTexture:Ke,unbindTexture:Z,compressedTexImage2D:Ne,compressedTexImage3D:ye,texImage2D:y,texImage3D:j,pixelStorei:pt,getParameter:xt,updateUBOMapping:lt,uniformBlockBinding:ht,texStorage2D:$t,texStorage3D:P,texSubImage2D:ve,texSubImage3D:Pt,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Wt,scissor:Tt,viewport:Rt,reset:At}}function lg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new kt,h=new WeakMap,g=new Set,f,u=new WeakMap,m=new Set,E=new FinalizationRegistry(P=>m.delete(P)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(P,y){return p?new OffscreenCanvas(P,y):ks("canvas")}function v(P,y,j){let xt=1,pt=$t(P);if((pt.width>j||pt.height>j)&&(xt=j/Math.max(pt.width,pt.height)),xt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Tt=Math.floor(xt*pt.width),Rt=Math.floor(xt*pt.height);f===void 0&&(f=d(Tt,Rt));let lt=y?d(Tt,Rt):f;return lt.width=Tt,lt.height=Rt,lt.getContext("2d").drawImage(P,0,0,Tt,Rt),Zt("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+Tt+"x"+Rt+")."),lt}else return"data"in P&&Zt("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),P;return P}function L(P){return P.generateMipmaps}function w(P){i.generateMipmap(P)}function T(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(P,y,j,xt,pt,Tt=!1){if(P!==null){if(i[P]!==void 0)return i[P];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Rt;xt&&(Rt=t.get("EXT_texture_norm16"),Rt||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=y;if(y===i.RED&&(j===i.FLOAT&&(lt=i.R32F),j===i.HALF_FLOAT&&(lt=i.R16F),j===i.UNSIGNED_BYTE&&(lt=i.R8),j===i.UNSIGNED_SHORT&&Rt&&(lt=Rt.R16_EXT),j===i.SHORT&&Rt&&(lt=Rt.R16_SNORM_EXT)),y===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(lt=i.R8UI),j===i.UNSIGNED_SHORT&&(lt=i.R16UI),j===i.UNSIGNED_INT&&(lt=i.R32UI),j===i.BYTE&&(lt=i.R8I),j===i.SHORT&&(lt=i.R16I),j===i.INT&&(lt=i.R32I)),y===i.RG&&(j===i.FLOAT&&(lt=i.RG32F),j===i.HALF_FLOAT&&(lt=i.RG16F),j===i.UNSIGNED_BYTE&&(lt=i.RG8),j===i.UNSIGNED_SHORT&&Rt&&(lt=Rt.RG16_EXT),j===i.SHORT&&Rt&&(lt=Rt.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(lt=i.RG8UI),j===i.UNSIGNED_SHORT&&(lt=i.RG16UI),j===i.UNSIGNED_INT&&(lt=i.RG32UI),j===i.BYTE&&(lt=i.RG8I),j===i.SHORT&&(lt=i.RG16I),j===i.INT&&(lt=i.RG32I)),y===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(lt=i.RGB8UI),j===i.UNSIGNED_SHORT&&(lt=i.RGB16UI),j===i.UNSIGNED_INT&&(lt=i.RGB32UI),j===i.BYTE&&(lt=i.RGB8I),j===i.SHORT&&(lt=i.RGB16I),j===i.INT&&(lt=i.RGB32I)),y===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(lt=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(lt=i.RGBA16UI),j===i.UNSIGNED_INT&&(lt=i.RGBA32UI),j===i.BYTE&&(lt=i.RGBA8I),j===i.SHORT&&(lt=i.RGBA16I),j===i.INT&&(lt=i.RGBA32I)),y===i.RGB&&(j===i.UNSIGNED_SHORT&&Rt&&(lt=Rt.RGB16_EXT),j===i.SHORT&&Rt&&(lt=Rt.RGB16_SNORM_EXT),j===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(lt=i.R11F_G11F_B10F)),y===i.RGBA){let ht=Tt?Gs:le.getTransfer(pt);j===i.FLOAT&&(lt=i.RGBA32F),j===i.HALF_FLOAT&&(lt=i.RGBA16F),j===i.UNSIGNED_BYTE&&(lt=ht===pe?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT&&Rt&&(lt=Rt.RGBA16_EXT),j===i.SHORT&&Rt&&(lt=Rt.RGBA16_SNORM_EXT),j===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function _(P,y){let j;return P?y===null||y===Rn||y===qi?j=i.DEPTH24_STENCIL8:y===Cn?j=i.DEPTH32F_STENCIL8:y===bs&&(j=i.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Rn||y===qi?j=i.DEPTH_COMPONENT24:y===Cn?j=i.DEPTH_COMPONENT32F:y===bs&&(j=i.DEPTH_COMPONENT16),j}function b(P,y){return L(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ve&&P.minFilter!==rn?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function z(P){let y=new WeakRef(P);n.get(P).__ref=y,m.add(y),E.register(P,y,y)}function N(P){let y=n.get(P).__ref;y!==void 0&&(m.delete(y),E.unregister(y))}function k(P){st(P.target)}function J(P){F(P.target)}function st(P){P.removeEventListener("dispose",k),N(P),ct(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&g.delete(P)}function F(P){P.removeEventListener("dispose",J),N(P),vt(P)}function et(){for(let P of m){let y=P.deref();y!==void 0&&(y.isRenderTarget===!0?F(y):st(y))}m.clear(),g.clear()}function ct(P){let y=n.get(P);if(y.__webglInit===void 0)return;let j=P.source,xt=u.get(j);if(xt){let pt=xt[y.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&at(P),Object.keys(xt).length===0&&u.delete(j)}n.remove(P)}function at(P){let y=n.get(P);i.deleteTexture(y.__webglTexture);let j=P.source,xt=u.get(j);delete xt[y.__cacheKey],a.memory.textures--}function vt(P){let y=n.get(P);y.__depthDisposeCallback&&y.__depthDisposeCallback();let j=P.depthTexture;if(j&&j.renderTarget===P&&st(j),P.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(y.__webglFramebuffer[pt]))for(let Tt=0;Tt<y.__webglFramebuffer[pt].length;Tt++)i.deleteFramebuffer(y.__webglFramebuffer[pt][Tt]);else i.deleteFramebuffer(y.__webglFramebuffer[pt]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[pt])}else{if(Array.isArray(y.__webglFramebuffer))for(let pt=0;pt<y.__webglFramebuffer.length;pt++)i.deleteFramebuffer(y.__webglFramebuffer[pt]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let pt=0;pt<y.__webglColorRenderbuffer.length;pt++)y.__webglColorRenderbuffer[pt]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[pt]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let xt=P.textures;for(let pt=0,Tt=xt.length;pt<Tt;pt++){let Rt=n.get(xt[pt]);Rt.__webglTexture&&(i.deleteTexture(Rt.__webglTexture),a.memory.textures--),n.remove(xt[pt])}n.remove(P)}let U=0;function mt(){U=0}function yt(){return U}function Ht(P){U=P}function Jt(){let P=U;return P>=s.maxTextures&&Zt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,P}function ft(P){let y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.mipmapsAutoUpdate),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function It(P,y){let j=n.get(P);if(P.isVideoTexture&&Ee(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&j.__version!==P.version){let xt=P.image;if(xt===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(j,P,y);return}}else P.isExternalTexture&&(j.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+y)}function Ft(P,y){let j=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){Me(j,P,y);return}else P.isExternalTexture&&(j.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+y)}function Lt(P,y){let j=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){Me(j,P,y);return}e.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+y)}function bt(P,y){let j=n.get(P);if(P.version>0&&j.__version!==P.version){Fe(j,P,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+y)}let Yt={[Vr]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[Wr]:i.MIRRORED_REPEAT},ge={[Ve]:i.NEAREST,[Ac]:i.NEAREST_MIPMAP_NEAREST,[nr]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[pa]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},Xt={[Pc]:i.NEVER,[sl]:i.ALWAYS,[Lc]:i.LESS,[nl]:i.LEQUAL,[Dc]:i.EQUAL,[il]:i.GEQUAL,[Nc]:i.GREATER,[Uc]:i.NOTEQUAL};function se(P,y){if(y.type===Cn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===rn||y.magFilter===pa||y.magFilter===nr||y.magFilter===ii||y.minFilter===rn||y.minFilter===pa||y.minFilter===nr||y.minFilter===ii)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Yt[y.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Yt[y.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Yt[y.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ge[y.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ge[y.minFilter]),y.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Xt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ve||y.minFilter!==nr&&y.minFilter!==ii||y.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let j=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ne(P,y){let j=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",k),z(y));let xt=y.source,pt=u.get(xt);pt===void 0&&(pt={},u.set(xt,pt));let Tt=ft(y);if(Tt!==P.__cacheKey){pt[Tt]===void 0&&(pt[Tt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),pt[Tt].usedTimes++;let Rt=pt[P.__cacheKey];Rt!==void 0&&(pt[P.__cacheKey].usedTimes--,Rt.usedTimes===0&&at(y)),P.__cacheKey=Tt,P.__webglTexture=pt[Tt].texture}return j}function re(P,y,j){return Math.floor(Math.floor(P/j)/y)}function Ce(P,y,j,xt){let Tt=P.updateRanges;if(Tt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,j,xt,y.data);else{Tt.sort((O,dt)=>O.start-dt.start);let Rt=0;for(let O=1;O<Tt.length;O++){let dt=Tt[Rt],ot=Tt[O],Ct=dt.start+dt.count,wt=re(ot.start,y.width,4),gt=re(dt.start,y.width,4);ot.start<=Ct+1&&wt===gt&&re(ot.start+ot.count-1,y.width,4)===wt?dt.count=Math.max(dt.count,ot.start+ot.count-dt.start):(++Rt,Tt[Rt]=ot)}Tt.length=Rt+1;let lt=e.getParameter(i.UNPACK_ROW_LENGTH),ht=e.getParameter(i.UNPACK_SKIP_PIXELS),At=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let O=0,dt=Tt.length;O<dt;O++){let ot=Tt[O],Ct=Math.floor(ot.start/4),wt=Math.ceil(ot.count/4),gt=Ct%y.width,zt=Math.floor(Ct/y.width),ie=wt,Mt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(i.UNPACK_SKIP_ROWS,zt),e.texSubImage2D(i.TEXTURE_2D,0,gt,zt,ie,Mt,j,xt,y.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,lt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,At)}}function Me(P,y,j){let xt=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(xt=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(xt=i.TEXTURE_3D);let pt=ne(P,y),Tt=y.source;e.bindTexture(xt,P.__webglTexture,i.TEXTURE0+j);let Rt=n.get(Tt);if(Tt.version!==Rt.__version||pt===!0){if(e.activeTexture(i.TEXTURE0+j),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let Mt=le.getPrimaries(le.workingColorSpace),Gt=y.colorSpace===ri?null:le.getPrimaries(y.colorSpace),Kt=y.colorSpace===ri||Mt===Gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let ht=v(y.image,!1,s.maxTextureSize);ht=Wt(y,ht);let At=r.convert(y.format,y.colorSpace),O=r.convert(y.type),dt=R(y.internalFormat,At,O,y.normalized,y.colorSpace,y.isVideoTexture);se(xt,y);let ot,Ct=y.mipmaps,wt=y.isVideoTexture!==!0,gt=Rt.__version===void 0||pt===!0,zt=Tt.dataReady,ie=b(y,ht);if(y.isDepthTexture)dt=_(y.format===si,y.type),gt&&(wt?e.texStorage2D(i.TEXTURE_2D,1,dt,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,dt,ht.width,ht.height,0,At,O,null));else if(y.isDataTexture)if(Ct.length>0){wt&&gt&&e.texStorage2D(i.TEXTURE_2D,ie,dt,Ct[0].width,Ct[0].height);for(let Mt=0,Gt=Ct.length;Mt<Gt;Mt++)ot=Ct[Mt],wt?zt&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,ot.width,ot.height,At,O,ot.data):e.texImage2D(i.TEXTURE_2D,Mt,dt,ot.width,ot.height,0,At,O,ot.data);y.generateMipmaps=!1}else wt?(gt&&e.texStorage2D(i.TEXTURE_2D,ie,dt,ht.width,ht.height),zt&&Ce(y,ht,At,O)):e.texImage2D(i.TEXTURE_2D,0,dt,ht.width,ht.height,0,At,O,ht.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){wt&&gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ie,dt,Ct[0].width,Ct[0].height,ht.depth);for(let Mt=0,Gt=Ct.length;Mt<Gt;Mt++)if(ot=Ct[Mt],y.format!==Pn)if(At!==null)if(wt){if(zt)if(y.layerUpdates.size>0){let Kt=fl(ot.width,ot.height,y.format,y.type);for(let Et of y.layerUpdates){let Bt=ot.data.subarray(Et*Kt/ot.data.BYTES_PER_ELEMENT,(Et+1)*Kt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,Et,ot.width,ot.height,1,At,Bt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,ot.width,ot.height,ht.depth,At,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Mt,dt,ot.width,ot.height,ht.depth,0,ot.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else wt?zt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,ot.width,ot.height,ht.depth,At,O,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Mt,dt,ot.width,ot.height,ht.depth,0,At,O,ot.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{wt&&gt&&e.texStorage2D(i.TEXTURE_2D,ie,dt,Ct[0].width,Ct[0].height);for(let Mt=0,Gt=Ct.length;Mt<Gt;Mt++)ot=Ct[Mt],y.format!==Pn?At!==null?wt?zt&&e.compressedTexSubImage2D(i.TEXTURE_2D,Mt,0,0,ot.width,ot.height,At,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,Mt,dt,ot.width,ot.height,0,ot.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?zt&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,ot.width,ot.height,At,O,ot.data):e.texImage2D(i.TEXTURE_2D,Mt,dt,ot.width,ot.height,0,At,O,ot.data)}else if(y.isDataArrayTexture)if(wt){if(gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ie,dt,ht.width,ht.height,ht.depth),zt)if(y.layerUpdates.size>0){let Mt=fl(ht.width,ht.height,y.format,y.type);for(let Gt of y.layerUpdates){let Kt=ht.data.subarray(Gt*Mt/ht.data.BYTES_PER_ELEMENT,(Gt+1)*Mt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Gt,ht.width,ht.height,1,At,O,Kt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,At,O,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,dt,ht.width,ht.height,ht.depth,0,At,O,ht.data);else if(y.isData3DTexture)wt?(gt&&e.texStorage3D(i.TEXTURE_3D,ie,dt,ht.width,ht.height,ht.depth),zt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,At,O,ht.data)):e.texImage3D(i.TEXTURE_3D,0,dt,ht.width,ht.height,ht.depth,0,At,O,ht.data);else if(y.isFramebufferTexture){if(gt)if(wt)e.texStorage2D(i.TEXTURE_2D,ie,dt,ht.width,ht.height);else{let Mt=ht.width,Gt=ht.height;for(let Kt=0;Kt<ie;Kt++)e.texImage2D(i.TEXTURE_2D,Kt,dt,Mt,Gt,0,At,O,null),Mt>>=1,Gt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let Mt=i.canvas;if(Mt.hasAttribute("layoutsubtree")||Mt.setAttribute("layoutsubtree","true"),ht.parentNode!==Mt){Mt.appendChild(ht),g.add(y),Mt.onpaint=Gt=>{let Kt=Gt.changedElements;for(let Et of g)Kt.includes(Et.image)&&(Et.needsUpdate=!0)},Mt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ht);else{let Kt=i.RGBA,Et=i.RGBA,Bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Kt,Et,Bt,ht)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ct.length>0){if(wt&&gt){let Mt=$t(Ct[0]);e.texStorage2D(i.TEXTURE_2D,ie,dt,Mt.width,Mt.height)}for(let Mt=0,Gt=Ct.length;Mt<Gt;Mt++)ot=Ct[Mt],wt?zt&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,At,O,ot):e.texImage2D(i.TEXTURE_2D,Mt,dt,At,O,ot);y.generateMipmaps=!1}else if(wt){if(gt){let Mt=$t(ht);e.texStorage2D(i.TEXTURE_2D,ie,dt,Mt.width,Mt.height)}zt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,O,ht)}else e.texImage2D(i.TEXTURE_2D,0,dt,At,O,ht);L(y)&&y.mipmapsAutoUpdate===!0&&w(xt),Rt.__version=Tt.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Fe(P,y,j){if(y.image.length!==6)return;let xt=ne(P,y),pt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+j);let Tt=n.get(pt);if(pt.version!==Tt.__version||xt===!0){e.activeTexture(i.TEXTURE0+j);let Rt=le.getPrimaries(le.workingColorSpace),lt=y.colorSpace===ri?null:le.getPrimaries(y.colorSpace),ht=y.colorSpace===ri||Rt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let At=y.isCompressedTexture||y.image[0].isCompressedTexture,O=y.image[0]&&y.image[0].isDataTexture,dt=[];for(let Et=0;Et<6;Et++)!At&&!O?dt[Et]=v(y.image[Et],!0,s.maxCubemapSize):dt[Et]=O?y.image[Et].image:y.image[Et],dt[Et]=Wt(y,dt[Et]);let ot=dt[0],Ct=r.convert(y.format,y.colorSpace),wt=r.convert(y.type),gt=R(y.internalFormat,Ct,wt,y.normalized,y.colorSpace),zt=y.isVideoTexture!==!0,ie=Tt.__version===void 0||xt===!0,Mt=pt.dataReady,Gt=b(y,ot);se(i.TEXTURE_CUBE_MAP,y);let Kt;if(y.isDepthTexture){if(gt=_(y.format===si,y.type),ie)if(zt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,gt,ot.width,ot.height);else for(let Et=0;Et<6;Et++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,gt,ot.width,ot.height,0,Ct,wt,null)}else if(At){zt&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,gt,ot.width,ot.height);for(let Et=0;Et<6;Et++){Kt=dt[Et].mipmaps;for(let Bt=0;Bt<Kt.length;Bt++){let we=Kt[Bt];y.format!==Pn?Ct!==null?zt?Mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Bt,0,0,we.width,we.height,Ct,we.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Bt,gt,we.width,we.height,0,we.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Bt,0,0,we.width,we.height,Ct,wt,we.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Bt,gt,we.width,we.height,0,Ct,wt,we.data)}}}else{if(Kt=y.mipmaps,zt&&ie){Kt.length>0&&Gt++;let Et=$t(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,gt,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(O){zt?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,dt[Et].width,dt[Et].height,Ct,wt,dt[Et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,gt,dt[Et].width,dt[Et].height,0,Ct,wt,dt[Et].data);for(let Bt=0;Bt<Kt.length;Bt++){let nn=Kt[Bt].image[Et].image;zt?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Bt+1,0,0,nn.width,nn.height,Ct,wt,nn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Bt+1,gt,nn.width,nn.height,0,Ct,wt,nn.data)}}else{zt?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Ct,wt,dt[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,gt,Ct,wt,dt[Et]);for(let Bt=0;Bt<Kt.length;Bt++){let we=Kt[Bt];zt?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Bt+1,0,0,Ct,wt,we.image[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Bt+1,gt,Ct,wt,we.image[Et])}}}L(y)&&y.mipmapsAutoUpdate===!0&&w(i.TEXTURE_CUBE_MAP),Tt.__version=pt.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function xe(P,y,j,xt,pt,Tt){let Rt=r.convert(j.format,j.colorSpace),lt=r.convert(j.type),ht=R(j.internalFormat,Rt,lt,j.normalized,j.colorSpace),At=n.get(y),O=n.get(j);if(O.__renderTarget=y,!At.__hasExternalTextures){let dt=Math.max(1,y.width>>Tt),ot=Math.max(1,y.height>>Tt);pt===i.TEXTURE_3D||pt===i.TEXTURE_2D_ARRAY?e.texImage3D(pt,Tt,ht,dt,ot,y.depth,0,Rt,lt,null):e.texImage2D(pt,Tt,ht,dt,ot,0,Rt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Pt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,pt,O.__webglTexture,0,ve(y)):(pt===i.TEXTURE_2D||pt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xt,pt,O.__webglTexture,Tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function he(P,y,j){if(i.bindRenderbuffer(i.RENDERBUFFER,P),y.depthBuffer){let xt=y.depthTexture,pt=xt&&xt.isDepthTexture?xt.type:null,Tt=_(y.stencilBuffer,pt),Rt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Pt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(y),Tt,y.width,y.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(y),Tt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,P)}else{let xt=y.textures;for(let pt=0;pt<xt.length;pt++){let Tt=xt[pt],Rt=r.convert(Tt.format,Tt.colorSpace),lt=r.convert(Tt.type),ht=R(Tt.internalFormat,Rt,lt,Tt.normalized,Tt.colorSpace);Pt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(y),ht,y.width,y.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(y),ht,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ht,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(P,y,j){let xt=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let pt=n.get(y.depthTexture);pt.__renderTarget=y;let Tt=xt?y.depthTexture.image[0]:y.depthTexture.image;(!pt.__webglTexture||Tt.width!==y.width||Tt.height!==y.height)&&(Tt.width=y.width,Tt.height=y.height,y.depthTexture.needsUpdate=!0),xt?bt(y.depthTexture,0):It(y.depthTexture,0);let Rt=pt.__webglTexture,lt=ve(y),ht=xt?i.TEXTURE_CUBE_MAP_POSITIVE_X+j:i.TEXTURE_2D,At=y.depthTexture.format===si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Kn)Pt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,At,ht,Rt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,At,ht,Rt,0);else if(y.depthTexture.format===si)Pt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,At,ht,Rt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,At,ht,Rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Je(P){let y=n.get(P),j=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){let xt=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),xt){let pt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,xt.removeEventListener("dispose",pt)};xt.addEventListener("dispose",pt),y.__depthDisposeCallback=pt}y.__boundDepthTexture=xt}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(j)for(let xt=0;xt<6;xt++)De(y.__webglFramebuffer[xt],P,xt);else P.texture.mipmaps.length>0?De(y.__webglFramebuffer[0],P,0):De(y.__webglFramebuffer,P,0);else if(j){y.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[xt]),y.__webglDepthbuffer[xt]===void 0)y.__webglDepthbuffer[xt]=i.createRenderbuffer(),he(y.__webglDepthbuffer[xt],P,!1);else{let pt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=y.__webglDepthbuffer[xt];i.bindRenderbuffer(i.RENDERBUFFER,Tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,Tt)}}else if(P.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),he(y.__webglDepthbuffer,P,!1);else{let pt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,Tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(P,y,j){let xt=n.get(P);y!==void 0&&xe(xt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&Je(P)}function Ke(P){let y=P.texture,j=n.get(P),xt=n.get(y);P.addEventListener("dispose",J),z(P);let pt=P.textures,Tt=P.isWebGLCubeRenderTarget===!0,Rt=pt.length>1;if(Rt||(xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture()),xt.__version=y.version,a.memory.textures++),Tt){j.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(y.mipmaps.length>0){j.__webglFramebuffer[lt]=[];for(let ht=0;ht<y.mipmaps.length;ht++)j.__webglFramebuffer[lt][ht]=i.createFramebuffer()}else j.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(y.mipmaps.length>0){j.__webglFramebuffer=[];for(let lt=0;lt<y.mipmaps.length;lt++)j.__webglFramebuffer[lt]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let lt=0,ht=pt.length;lt<ht;lt++){let At=n.get(pt[lt]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Pt(P)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let lt=0;lt<pt.length;lt++){let ht=pt[lt];j.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[lt]);let At=r.convert(ht.format,ht.colorSpace),O=r.convert(ht.type),dt=R(ht.internalFormat,At,O,ht.normalized,ht.colorSpace,P.isXRRenderTarget===!0),ot=ve(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,dt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,j.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),he(j.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Tt){e.bindTexture(i.TEXTURE_CUBE_MAP,xt.__webglTexture),se(i.TEXTURE_CUBE_MAP,y);for(let lt=0;lt<6;lt++)if(y.mipmaps.length>0)for(let ht=0;ht<y.mipmaps.length;ht++)xe(j.__webglFramebuffer[lt][ht],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ht);else xe(j.__webglFramebuffer[lt],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);L(y)?w(i.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}else if(Rt){for(let lt=0,ht=pt.length;lt<ht;lt++){let At=pt[lt],O=n.get(At),dt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(dt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,O.__webglTexture),se(dt,At),xe(j.__webglFramebuffer,P,At,i.COLOR_ATTACHMENT0+lt,dt,0),L(At)&&w(dt)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(lt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,xt.__webglTexture),se(lt,y),y.mipmaps.length>0)for(let ht=0;ht<y.mipmaps.length;ht++)xe(j.__webglFramebuffer[ht],P,y,i.COLOR_ATTACHMENT0,lt,ht);else xe(j.__webglFramebuffer,P,y,i.COLOR_ATTACHMENT0,lt,0);L(y)?w(lt):y.mipmaps.length>0&&i.texParameteri(lt,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}P.depthBuffer&&Je(P)}function Z(P){let y=P.textures;for(let j=0,xt=y.length;j<xt;j++){let pt=y[j];if(L(pt)&&pt.mipmapsAutoUpdate===!0){let Tt=T(P),Rt=n.get(pt).__webglTexture;e.bindTexture(Tt,Rt),w(Tt),e.unbindTexture()}}}let Ne=[];function ye(P){if(P.samples>0){if(Pt(P)===!1){let y=P.textures,j=P.width,xt=P.height,pt=i.COLOR_BUFFER_BIT,Tt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(P),lt=y.length>1;if(lt)for(let At=0;At<y.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let At=0;At<y.length;At++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(pt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(pt|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[At]);let O=n.get(y[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,O,0)}i.blitFramebuffer(0,0,j,xt,0,0,j,xt,pt,i.NEAREST),l===!0&&(Ne.length=0,Ne.push(i.COLOR_ATTACHMENT0+At),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Ne.push(Tt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ne))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let At=0;At<y.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[At]);let O=n.get(y[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,O,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function ve(P){return Math.min(s.maxSamples,P.samples)}function Pt(P){let y=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ee(P){let y=a.render.frame;h.get(P)!==y&&(h.set(P,y),P.update())}function Wt(P,y){let j=P.colorSpace,xt=P.format,pt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||j!==Hs&&j!==ri&&(le.getTransfer(j)===pe?(xt!==Pn||pt!==cn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",j)),y}function $t(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Jt,this.resetTextureUnits=mt,this.getTextureUnits=yt,this.setTextureUnits=Ht,this.setTexture2D=It,this.setTexture2DArray=Ft,this.setTexture3D=Lt,this.setTextureCube=bt,this.rebindTextures=$e,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Pt,this.dispose=et}function cg(i,t){function e(n,s=ri){let r,a=le.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===ga)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ko)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jo)return i.BYTE;if(n===$o)return i.SHORT;if(n===bs)return i.UNSIGNED_SHORT;if(n===ma)return i.INT;if(n===Rn)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===In)return i.HALF_FLOAT;if(n===Qo)return i.ALPHA;if(n===tl)return i.RGB;if(n===Pn)return i.RGBA;if(n===Kn)return i.DEPTH_COMPONENT;if(n===si)return i.DEPTH_STENCIL;if(n===el)return i.RED;if(n===xa)return i.RED_INTEGER;if(n===wi)return i.RG;if(n===ya)return i.RG_INTEGER;if(n===va)return i.RGBA_INTEGER;if(n===ir||n===sr||n===rr||n===ar)if(a===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===Sa||n===ba||n===Ea)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===or||n===Ia)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wa||n===Ta)return a===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Aa)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ra)return r.COMPRESSED_R11_EAC;if(n===Ca)return r.COMPRESSED_SIGNED_R11_EAC;if(n===or)return r.COMPRESSED_RG11_EAC;if(n===Ia)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Pa||n===La||n===Da||n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===za||n===Ha||n===Ga||n===ka||n===Va||n===Wa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pa)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===La)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ua)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fa)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oa)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ba)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ha)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ga)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ka)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Va)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wa)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xa||n===qa||n===Ya)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xa)return a===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Za||n===Ja||n===lr||n===$a)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ug=`
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

}`,Al=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Zs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ln({vertexShader:hg,fragmentShader:ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Le(new $s(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rl=class extends An{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,g=null,f=null,u=null,m=null,E=typeof XRWebGLBinding<"u",p=new Al,d={},v=e.getContextAttributes(),L=null,w=null,T=[],R=[],_=new kt,b=null,z=null,N=new ke;N.viewport=new Pe;let k=new ke;k.viewport=new Pe;let J=[N,k],st=new ha,F=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ft){let It=T[ft];return It===void 0&&(It=new ms,T[ft]=It),It.getTargetRaySpace()},this.getControllerGrip=function(ft){let It=T[ft];return It===void 0&&(It=new ms,T[ft]=It),It.getGripSpace()},this.getHand=function(ft){let It=T[ft];return It===void 0&&(It=new ms,T[ft]=It),It.getHandSpace()};function ct(ft){let It=R.indexOf(ft.inputSource);if(It===-1)return;let Ft=T[It];Ft!==void 0&&(Ft.update(ft.inputSource,ft.frame,c||a),Ft.dispatchEvent({type:ft.type,data:ft.inputSource}))}function at(){s.removeEventListener("select",ct),s.removeEventListener("selectstart",ct),s.removeEventListener("selectend",ct),s.removeEventListener("squeeze",ct),s.removeEventListener("squeezestart",ct),s.removeEventListener("squeezeend",ct),s.removeEventListener("end",at),s.removeEventListener("inputsourceschange",vt);for(let ft=0;ft<T.length;ft++){let It=R[ft];It!==null&&(R[ft]=null,T[ft].disconnect(It))}F=null,et=null,p.reset();for(let ft in d)delete d[ft];if(t.setRenderTarget(L),u=null,f=null,g=null,s=null,w=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),z!==null){let ft=z.camera;ft.fov=z.fov,ft.zoom=z.zoom,ft.updateProjectionMatrix(),z=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ft){r=ft,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ft){o=ft,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ft){c=ft},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(s,e)),g},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(ft){if(s=ft,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",ct),s.addEventListener("selectstart",ct),s.addEventListener("selectend",ct),s.addEventListener("squeeze",ct),s.addEventListener("squeezestart",ct),s.addEventListener("squeezeend",ct),s.addEventListener("end",at),s.addEventListener("inputsourceschange",vt),v.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ft=null,Lt=null,bt=null;v.depth&&(bt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ft=v.stencil?si:Kn,Lt=v.stencil?qi:Rn);let Yt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};g=this.getBinding(),f=g.createProjectionLayer(Yt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new gn(f.textureWidth,f.textureHeight,{format:Pn,type:cn,depthTexture:new Qn(f.textureWidth,f.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,Ft),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ft={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,Ft),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),w=new gn(u.framebufferWidth,u.framebufferHeight,{format:Pn,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function vt(ft){for(let It=0;It<ft.removed.length;It++){let Ft=ft.removed[It],Lt=R.indexOf(Ft);Lt>=0&&(R[Lt]=null,T[Lt].disconnect(Ft))}for(let It=0;It<ft.added.length;It++){let Ft=ft.added[It],Lt=R.indexOf(Ft);if(Lt===-1){for(let Yt=0;Yt<T.length;Yt++)if(Yt>=R.length){R.push(Ft),Lt=Yt;break}else if(R[Yt]===null){R[Yt]=Ft,Lt=Yt;break}if(Lt===-1)break}let bt=T[Lt];bt&&bt.connect(Ft)}}function U(ft,It){It===null?ft.matrixWorld.copy(ft.matrix):ft.matrixWorld.multiplyMatrices(It.matrixWorld,ft.matrix),ft.matrixWorldInverse.copy(ft.matrixWorld).invert()}this.updateCamera=function(ft){if(s===null)return;let It=ft.near,Ft=ft.far;p.texture!==null&&(p.depthNear>0&&(It=p.depthNear),p.depthFar>0&&(Ft=p.depthFar)),st.near=k.near=N.near=It,st.far=k.far=N.far=Ft,(F!==st.near||et!==st.far)&&(s.updateRenderState({depthNear:st.near,depthFar:st.far}),F=st.near,et=st.far),st.layers.mask=ft.layers.mask|6,N.layers.mask=st.layers.mask&-5,k.layers.mask=st.layers.mask&-3;let Lt=ft.parent,bt=st.cameras;U(st,Lt);for(let Yt=0;Yt<bt.length;Yt++)U(bt[Yt],Lt);st.projectionMatrix.copy(N.projectionMatrix),st.projectionMatrixInverse.copy(N.projectionMatrixInverse),z===null&&ft.isPerspectiveCamera&&(z={camera:ft,fov:ft.fov,zoom:ft.zoom}),mt(ft,st,Lt)};function mt(ft,It,Ft){Ft===null?ft.matrix.copy(It.matrixWorld):(ft.matrix.copy(Ft.matrixWorld),ft.matrix.invert(),ft.matrix.multiply(It.matrixWorld)),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.updateMatrixWorld(!0),ft.projectionMatrix.copy(It.projectionMatrix),ft.projectionMatrixInverse.copy(It.projectionMatrixInverse),ft.isPerspectiveCamera&&(ft.fov=ds*2*Math.atan(1/ft.projectionMatrix.elements[5]),ft.zoom=1)}this.getCamera=function(){return st},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(ft){l=ft,f!==null&&(f.fixedFoveation=ft),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=ft)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(st)},this.getCameraTexture=function(ft){return d[ft]};let yt=null;function Ht(ft,It){if(h=It.getViewerPose(c||a),m=It,h!==null){let Ft=h.views;u!==null&&(t.setRenderTargetFramebuffer(w,u.framebuffer),t.setRenderTarget(w));let Lt=!1;Ft.length!==st.cameras.length&&(st.cameras.length=0,Lt=!0);for(let Xt=0;Xt<Ft.length;Xt++){let se=Ft[Xt],ne=null;if(u!==null)ne=u.getViewport(se);else{let Ce=g.getViewSubImage(f,se);ne=Ce.viewport,Xt===0&&(t.setRenderTargetTextures(w,Ce.colorTexture,Ce.depthStencilTexture),t.setRenderTarget(w))}let re=J[Xt];re===void 0&&(re=new ke,re.layers.enable(Xt),re.viewport=new Pe,J[Xt]=re),re.matrix.fromArray(se.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(se.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(ne.x,ne.y,ne.width,ne.height),Xt===0&&(st.matrix.copy(re.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale)),Lt===!0&&st.cameras.push(re)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){g=n.getBinding();let Xt=g.getDepthInformation(Ft[0]);Xt&&Xt.isValid&&Xt.texture&&p.init(Xt,s.renderState)}if(bt&&bt.includes("camera-access")&&E){t.state.unbindTexture(),g=n.getBinding();for(let Xt=0;Xt<Ft.length;Xt++){let se=Ft[Xt].camera;if(se){let ne=d[se];ne||(ne=new Zs,d[se]=ne);let re=g.getCameraImage(se);ne.sourceTexture=re}}}}for(let Ft=0;Ft<T.length;Ft++){let Lt=R[Ft],bt=T[Ft];Lt!==null&&bt!==void 0&&bt.update(Lt,It,c||a)}yt&&yt(ft,It),It.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:It}),m=null}let Jt=new ph;Jt.setAnimationLoop(Ht),this.setAnimationLoop=function(ft){yt=ft},this.dispose=function(){}}},dg=new me,Eh=new te;Eh.set(-1,0,0,0,1,0,0,0,1);function fg(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,hl(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,v,L,w){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),g(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&u(p,d,w)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),E(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,v,L):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ze&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ze&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let v=t.get(d),L=v.envMap,w=v.envMapRotation;L&&(p.envMap.value=L,p.envMapRotation.value.setFromMatrix4(dg.makeRotationFromEuler(w)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Eh),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,v,L){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*v,p.scale.value=L*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function g(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function u(p,d,v){p.ior.value=d.ior,d.diffuseRoughness>0&&(p.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=d.diffuseRoughnessMap,e(d.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ze&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function E(p,d){let v=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function pg(i,t,e,n){let s={},r={};function a(v,L){let w=L.program;n.uniformBlockBinding(v,w,s[v.id])}function o(v,L){let w=s[v.id];w===void 0&&(m(v),w=l(v),s[v.id]=w,v.addEventListener("dispose",p));let T=L.program;n.updateUBOMapping(v,T);let R=t.render.frame;r[v.id]!==R&&(c(v),r[v.id]=R)}function l(v){let L=i.createBuffer(),w=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,w,T),i.bindBuffer(i.UNIFORM_BUFFER,null),L}function c(v){let L=s[v.id],w=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let R=0,_=w.length;R<_;R++){let b=w[R];if(Array.isArray(b))for(let z=0,N=b.length;z<N;z++)h(b[z],R,z,T);else h(b,R,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,L,w,T){if(f(v,L,w,T)===!0){let R=v.__offset,_=v.value;if(Array.isArray(_)){let b=0;for(let z=0;z<_.length;z++){let N=_[z],k=E(N,!0);g(N,v.__data,b),b+=k.storage/Float32Array.BYTES_PER_ELEMENT}}else g(_,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,R,v.__data)}}function g(v,L,w){typeof v=="number"||typeof v=="boolean"?L[w]=v:v.isMatrix3?(L[w]=v.elements[0],L[w+1]=v.elements[1],L[w+2]=v.elements[2],L[w+3]=0,L[w+4]=v.elements[3],L[w+5]=v.elements[4],L[w+6]=v.elements[5],L[w+7]=0,L[w+8]=v.elements[6],L[w+9]=v.elements[7],L[w+10]=v.elements[8],L[w+11]=0):ArrayBuffer.isView(v)?L.set(v.subarray(0,L.length-w),w):v.toArray(L,w)}function f(v,L,w,T){let R=v.value,_=L+"_"+w;if(Array.isArray(R)){T[_]===void 0&&(T[_]=[]);let b=T[_],z=!1;for(let N=0;N<R.length;N++)u(R[N],b,N)===!0&&(z=!0);return z}return u(R,T,_)}function u(v,L,w){if(L[w]===void 0)return typeof v=="number"||typeof v=="boolean"?L[w]=v:ArrayBuffer.isView(v)?L[w]=v.slice():L[w]=v.clone(),!0;{let T=L[w];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return L[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function m(v){let L=v.uniforms,w=0,T=16;for(let _=0,b=L.length;_<b;_++){let z=Array.isArray(L[_])?L[_]:[L[_]];for(let N=0,k=z.length;N<k;N++){let J=z[N],st=Array.isArray(J.value)?J.value:[J.value],F=Array.isArray(L[_])||Array.isArray(J.value),et=w;for(let at=0,vt=st.length;at<vt;at++){let U=st[at],mt=E(U,F),yt=w%T,Ht=yt%mt.boundary,Jt=yt+Ht;w+=Ht,Jt!==0&&T-Jt<mt.storage&&(w+=T-Jt),at===0&&(et=w),w+=mt.storage}let ct=J.type==="int"?Int32Array:J.type==="uint"?Uint32Array:Float32Array;J.__data=new ct((w-et)/Float32Array.BYTES_PER_ELEMENT),J.__offset=et}}let R=w%T;return R>0&&(w+=T-R),v.__size=w,v.__cache={},this}function E(v,L){let w={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(w.boundary=4,w.storage=4):v.isVector2?(w.boundary=8,w.storage=8):v.isVector3||v.isColor?(w.boundary=16,w.storage=12):v.isVector4?(w.boundary=16,w.storage=16):v.isMatrix3?(w.boundary=16,w.storage=48):v.isMatrix4?(w.boundary=16,w.storage=64):v.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(w.boundary=16,w.storage=v.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",v),L===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}function p(v){let L=v.target;L.removeEventListener("dispose",p),i.deleteBuffer(s[L.id]),delete s[L.id],delete r[L.id]}function d(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:d}}var mg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bn=null;function gg(){return Bn===null&&(Bn=new Jr(mg,16,16,wi,In),Bn.name="DFG_LUT",Bn.minFilter=rn,Bn.magFilter=rn,Bn.wrapS=Un,Bn.wrapT=Un,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}var Ts=class{constructor(t={}){let{canvas:e=Oc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:f=!1,outputBufferType:u=cn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let E=u,p=new Set([va,ya,xa]),d=new Set([cn,Rn,bs,qi,ga,_a]),v=new Uint32Array(4),L=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]},T=null,R=null,_=[],b=[],z=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,k=!1,J=null,st=null,F=null,et=null;this._outputColorSpace=Ye;let ct=0,at=0,vt=null,U=-1,mt=null,yt=new Pe,Ht=new Pe,Jt=null,ft=new ee(0),It=0,Ft=e.width,Lt=e.height,bt=1,Yt=null,ge=null,Xt=new Pe(0,0,Ft,Lt),se=new Pe(0,0,Ft,Lt),ne=!1,re=new _i,Ce=new $r,Me=!1,Fe=!1,xe=new me,he=new W,De=new Pe,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function Ke(){return vt===null?bt:1}let Z=n;function Ne(M,H){return e.getContext(M,H)}let ye,ve,Pt,Ee,Wt,$t,P,y,j,xt,pt,Tt,Rt,lt,ht,At,O,dt,ot,Ct,wt,gt,zt;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Gt,!1),e.addEventListener("webglcontextrestored",Kt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),Z===null){let H="webgl2";if(Z=Ne(H,M),Z===null)throw Ne(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ie()}catch(M){throw e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",Kt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),Qt("WebGLRenderer: "+M.message),M}function ie(){ye=new Ap(Z),ye.init(),wt=new cg(Z,ye),ve=new gp(Z,ye,t,wt),Pt=new og(Z,ye),ve.reversedDepthBuffer&&f&&Pt.buffers.depth.setReversed(!0),st=Z.createFramebuffer(),F=Z.createFramebuffer(),et=Z.createFramebuffer(),Ee=new Ip(Z),Wt=new Ym,$t=new lg(Z,ye,Pt,Wt,ve,wt,Ee),P=new Tp(N),y=new Pu(Z),gt=new pp(Z,y),j=new Rp(Z,y,Ee,gt),xt=new Lp(Z,j,y,gt,Ee),dt=new Pp(Z,ve,$t),ht=new _p(Wt),pt=new qm(N,P,ye,ve,gt,ht),Tt=new fg(N,Wt),Rt=new Jm,lt=new eg(ye),O=new fp(N,P,Pt,xt,m,l),At=new ag(N,xt,ve),zt=new pg(Z,Ee,ve,Pt),ot=new mp(Z,ye,Ee),Ct=new Cp(Z,ye,Ee),Ee.programs=pt.programs,N.capabilities=ve,N.extensions=ye,N.properties=Wt,N.renderLists=Rt,N.shadowMap=At,N.state=Pt,N.info=Ee}E!==cn&&(z=new Np(E,e.width,e.height,o,s,r));let Mt=new Rl(N,Z);this.xr=Mt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let M=ye.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ye.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return bt},this.setPixelRatio=function(M){M!==void 0&&(bt=M,this.setSize(Ft,Lt,!1))},this.getSize=function(M){return M.set(Ft,Lt)},this.setSize=function(M,H,it=!0){if(Mt.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ft=M,Lt=H,e.width=Math.floor(M*bt),e.height=Math.floor(H*bt),it===!0&&(e.style.width=M+"px",e.style.height=H+"px"),z!==null&&z.setSize(e.width,e.height),this.setViewport(0,0,M,H)},this.getDrawingBufferSize=function(M){return M.set(Ft*bt,Lt*bt).floor()},this.setDrawingBufferSize=function(M,H,it){Ft=M,Lt=H,bt=it,e.width=Math.floor(M*it),e.height=Math.floor(H*it),this.setViewport(0,0,M,H)},this.setEffects=function(M){if(E===cn){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let H=0;H<M.length;H++)if(M[H].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(yt)},this.getViewport=function(M){return M.copy(Xt)},this.setViewport=function(M,H,it,K){M.isVector4?Xt.set(M.x,M.y,M.z,M.w):Xt.set(M,H,it,K),Pt.viewport(yt.copy(Xt).multiplyScalar(Ke()).round())},this.getScissor=function(M){return M.copy(se)},this.setScissor=function(M,H,it,K){M.isVector4?se.set(M.x,M.y,M.z,M.w):se.set(M,H,it,K),Pt.scissor(Ht.copy(se).multiplyScalar(Ke()).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(M){Pt.setScissorTest(ne=M)},this.setOpaqueSort=function(M){Yt=M},this.setTransparentSort=function(M){ge=M},this.getClearColor=function(M){return M.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(M=!0,H=!0,it=!0){let K=0;if(M){let tt=!1;if(vt!==null){let S=vt.texture.format;tt=p.has(S)}if(tt){let S=vt.texture.type,D=d.has(S),C=O.getClearColor(),B=O.getClearAlpha(),$=C.r,Q=C.g,V=C.b;D?(v[0]=$,v[1]=Q,v[2]=V,v[3]=B,Z.clearBufferuiv(Z.COLOR,0,v)):(L[0]=$,L[1]=Q,L[2]=V,L[3]=B,Z.clearBufferiv(Z.COLOR,0,L))}else K|=Z.COLOR_BUFFER_BIT}H&&(K|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&(K|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&Z.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),J=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",Kt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),O.dispose(),Rt.dispose(),lt.dispose(),$t.dispose(),Wt.dispose(),P.dispose(),xt.dispose(),j.dispose(),gt.dispose(),zt.dispose(),pt.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",Hn),Mt.removeEventListener("sessionend",Oe),sn.stop()};function Gt(M){M.preventDefault(),al("WebGLRenderer: Context Lost."),k=!0}function Kt(){al("WebGLRenderer: Context Restored."),k=!1;let M=Ee.autoReset,H=At.enabled,it=At.autoUpdate,K=At.needsUpdate,tt=At.type;ie(),Ee.autoReset=M,At.enabled=H,At.autoUpdate=it,At.needsUpdate=K,At.type=tt}function Et(M){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Bt(M){let H=M.target;H.removeEventListener("dispose",Bt),we(H)}function we(M){nn(M),Wt.remove(M)}function nn(M){let H=Wt.get(M).programs;H!==void 0&&(H.forEach(function(it){pt.releaseProgram(it)}),M.isShaderMaterial&&pt.releaseShaderCache(M))}this.renderBufferDirect=function(M,H,it,K,tt,S){H===null&&(H=Je);let D=tt.isMesh&&tt.matrixWorld.determinantAffine()<0,C=Zi(M,H,it,K,tt);Pt.setMaterial(K,D);let B=it.index,$=1;if(K.wireframe===!0){if(B=j.getWireframeAttribute(it),B===void 0)return;$=2}let Q=it.drawRange,V=it.attributes.position,ut=Q.start*$,x=(Q.start+Q.count)*$;S!==null&&(ut=Math.max(ut,S.start*$),x=Math.min(x,(S.start+S.count)*$)),B!==null?(ut=Math.max(ut,0),x=Math.min(x,B.count)):V!=null&&(ut=Math.max(ut,0),x=Math.min(x,V.count));let I=x-ut;if(I<0||I===1/0)return;gt.setup(tt,K,C,it,B);let A,G=ot;if(B!==null&&(A=y.get(B),G=Ct,G.setIndex(A)),tt.isMesh)K.wireframe===!0?(Pt.setLineWidth(K.wireframeLinewidth*Ke()),G.setMode(Z.LINES)):G.setMode(Z.TRIANGLES);else if(tt.isLine){let nt=K.linewidth;nt===void 0&&(nt=1),Pt.setLineWidth(nt*Ke()),tt.isLineSegments?G.setMode(Z.LINES):tt.isLineLoop?G.setMode(Z.LINE_LOOP):G.setMode(Z.LINE_STRIP)}else tt.isPoints?G.setMode(Z.POINTS):tt.isSprite&&G.setMode(Z.TRIANGLES);if(tt.isBatchedMesh)if(ye.get("WEBGL_multi_draw"))G.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let nt=tt._multiDrawStarts,q=tt._multiDrawCounts,Y=tt._multiDrawCount,X=B?y.get(B).bytesPerElement:1,rt=Wt.get(K).currentProgram.getUniforms();for(let Dt=0;Dt<Y;Dt++)rt.setValue(Z,"_gl_DrawID",Dt),G.render(nt[Dt]/X,q[Dt])}else if(tt.isInstancedMesh)G.renderInstances(ut,I,tt.count);else if(it.isInstancedBufferGeometry){let nt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,q=Math.min(it.instanceCount,nt);G.renderInstances(ut,I,q)}else G.render(ut,I)};function ai(M,H,it,K){J!==null&&M.isNodeMaterial&&J.setObject(K,M),Me===!0&&ht.setState(M,it,!1),M.transparent===!0&&M.side===bn&&M.forceSinglePass===!1?(M.side=Ze,M.needsUpdate=!0,yn(M,H,K),M.side=Ei,M.needsUpdate=!0,yn(M,H,K),M.side=bn):yn(M,H,K)}this.compile=function(M,H,it=null){it===null&&(it=M),J!==null&&J.renderStart(M,H,it),R=lt.get(it),R.init(H),b.push(R),it.traverseVisible(function(tt){tt.isLight&&tt.layers.test(H.layers)&&(R.pushLight(tt),tt.castShadow&&R.pushShadow(tt))}),M!==it&&M.traverseVisible(function(tt){tt.isLight&&tt.layers.test(H.layers)&&(R.pushLight(tt),tt.castShadow&&R.pushShadow(tt))}),R.setupLights(),J!==null&&J.updateLights(R.state.lightsArray),Fe=this.localClippingEnabled,Me=ht.init(this.clippingPlanes,Fe),Me===!0&&ht.setGlobalState(this.clippingPlanes,H),J!==null&&At.render(R.state.shadowsArray,it,H);let K=new Set;return M.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let S=tt.material;if(S)if(Array.isArray(S))for(let D=0;D<S.length;D++){let C=S[D];ai(C,it,H,tt),K.add(C)}else ai(S,it,H,tt),K.add(S)}),R=b.pop(),J!==null&&J.renderEnd(),K},this.compileAsync=function(M,H,it=null){let K=this.compile(M,H,it);return new Promise(tt=>{function S(){if(K.forEach(function(D){let B=Wt.get(D).currentProgram;(B===void 0||B.isReady())&&K.delete(D)}),K.size===0){tt(M);return}setTimeout(S,10)}ye.get("KHR_parallel_shader_compile")!==null?S():setTimeout(S,10)})};let Ln=null;function Xe(M){Ln&&Ln(M)}function Hn(){sn.stop()}function Oe(){sn.start()}let sn=new ph;sn.setAnimationLoop(Xe),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(M){Ln=M,Mt.setAnimationLoop(M),M===null?sn.stop():sn.start()},Mt.addEventListener("sessionstart",Hn),Mt.addEventListener("sessionend",Oe),this.render=function(M,H){if(H!==void 0&&H.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;J!==null&&J.renderStart(M,H);let it=Mt.enabled===!0&&Mt.isPresenting===!0,K=z!==null&&(vt===null||it)&&z.begin(N,vt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(H),H=Mt.getCamera()),M.isScene===!0&&M.onBeforeRender(N,M,H,vt),R=lt.get(M,b.length),R.init(H),R.state.textureUnits=$t.getTextureUnits(),b.push(R),xe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?Ce.setFromArrayCamera(H):re.setFromProjectionMatrix(xe,Mn,H.reversedDepth),Fe=this.localClippingEnabled,Me=ht.init(this.clippingPlanes,Fe),T=Rt.get(M,_.length),T.init(),_.push(T),this.info.render.frame++,Mt.enabled===!0&&Mt.isPresenting===!0){let D=N.xr.getDepthSensingMesh();D!==null&&Gn(D,H,-1/0,N.sortObjects)}Gn(M,H,0,N.sortObjects),T.finish(),J!==null&&J.updateLights(R.state.lightsArray),N.sortObjects===!0&&T.sort(Yt,ge),$e=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,$e&&O.addToRenderList(T,M),this.info.autoReset===!0&&this.info.reset(),Me===!0&&ht.beginShadows();let tt=R.state.shadowsArray;if(At.render(tt,M,H),Me===!0&&ht.endShadows(),(K&&z.hasRenderPass())===!1){let D=T.opaque,C=T.transmissive;if(R.setupLights(),H.isArrayCamera){let B=H.cameras;if(C.length>0)for(let $=0,Q=B.length;$<Q;$++){let V=B[$];oi(D,C,M,V)}$e&&O.render(M);for(let $=0,Q=B.length;$<Q;$++){let V=B[$];kn(T,M,V,V.viewport)}}else C.length>0&&oi(D,C,M,H),$e&&O.render(M),kn(T,M,H)}vt!==null&&at===0&&($t.updateMultisampleRenderTarget(vt),$t.updateRenderTargetMipmap(vt)),K&&z.end(N),M.isScene===!0&&M.onAfterRender(N,M,H),gt.resetDefaultState(),U=-1,mt=null,b.pop(),b.length>0?(R=b[b.length-1],$t.setTextureUnits(R.state.textureUnits),Me===!0&&ht.setGlobalState(N.clippingPlanes,R.state.camera)):R=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,J!==null&&J.renderEnd()};function Gn(M,H,it,K){if(M.visible===!1)return;if(M.layers.test(H.layers)){if(M.isGroup)it=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(H);else if(M.isLight)R.pushLight(M),M.castShadow&&R.pushShadow(M);else if(M.isSprite){let D=H.isArrayCamera?Ce:re;if(!M.frustumCulled||M.intersectsFrustum(D)){K&&De.setFromMatrixPosition(M.matrixWorld).applyMatrix4(xe);let C=xt.update(M),B=M.material;B.visible&&T.push(M,C,B,it,De.z,null,H)}}else if(M.isMesh||M.isLine||M.isPoints){let D=H.isArrayCamera?Ce:re;if(!M.frustumCulled||M.intersectsFrustum(D)){let C=xt.update(M),B=M.material;if(K&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),De.copy(M.boundingSphere.center)):(C.boundingSphere===null&&C.computeBoundingSphere(),De.copy(C.boundingSphere.center)),De.applyMatrix4(M.matrixWorld).applyMatrix4(xe)),Array.isArray(B)){let $=C.groups;for(let Q=0,V=$.length;Q<V;Q++){let ut=$[Q],x=B[ut.materialIndex];x&&x.visible&&T.push(M,C,x,it,De.z,ut,H)}}else B.visible&&T.push(M,C,B,it,De.z,null,H)}}}let S=M.children;for(let D=0,C=S.length;D<C;D++)Gn(S[D],H,it,K)}function kn(M,H,it,K){let{opaque:tt,transmissive:S,transparent:D}=M;R.setupLightsView(it),Me===!0&&ht.setGlobalState(N.clippingPlanes,it),K&&Pt.viewport(yt.copy(K)),tt.length>0&&de(tt,H,it),S.length>0&&de(S,H,it),D.length>0&&de(D,H,it),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function oi(M,H,it,K){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[K.id]===void 0){let ut=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[K.id]=new gn(1,1,{generateMipmaps:!0,type:ut?In:cn,minFilter:ii,samples:Math.max(4,ve.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let S=R.state.transmissionRenderTarget[K.id],D=K.viewport||yt;S.setSize(D.z*N.transmissionResolutionScale,D.w*N.transmissionResolutionScale);let C=N.getRenderTarget(),B=N.getActiveCubeFace(),$=N.getActiveMipmapLevel();N.setRenderTarget(S),N.getClearColor(ft),It=N.getClearAlpha(),It<1&&N.setClearColor(16777215,.5),N.clear(),$e&&O.render(it);let Q=N.toneMapping;N.toneMapping=On;let V=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),R.setupLightsView(K),Me===!0&&ht.setGlobalState(N.clippingPlanes,K),de(M,it,K),$t.updateMultisampleRenderTarget(S),$t.updateRenderTargetMipmap(S),ye.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let x=0,I=H.length;x<I;x++){let A=H[x],{object:G,geometry:nt,material:q,group:Y}=A;if(q.side===bn&&G.layers.test(K.layers)){let X=q.side;q.side=Ze,q.needsUpdate=!0,je(G,it,K,nt,q,Y),q.side=X,q.needsUpdate=!0,ut=!0}}ut===!0&&($t.updateMultisampleRenderTarget(S),$t.updateRenderTargetMipmap(S))}N.setRenderTarget(C,B,$),N.setClearColor(ft,It),V!==void 0&&(K.viewport=V),N.toneMapping=Q}function de(M,H,it){let K=H.isScene===!0?H.overrideMaterial:null;for(let tt=0,S=M.length;tt<S;tt++){let D=M[tt],{object:C,geometry:B,group:$}=D,Q=D.material;Q.allowOverride===!0&&K!==null&&(Q=K),C.layers.test(it.layers)&&je(C,H,it,B,Q,$)}}function je(M,H,it,K,tt,S){J!==null&&tt.isNodeMaterial&&J.setObject(M,tt),M.onBeforeRender(N,H,it,K,tt,S),M.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),tt.onBeforeRender(N,H,it,K,M,S),tt.transparent===!0&&tt.side===bn&&tt.forceSinglePass===!1?(tt.side=Ze,tt.needsUpdate=!0,N.renderBufferDirect(it,H,K,tt,M,S),tt.side=Ei,tt.needsUpdate=!0,N.renderBufferDirect(it,H,K,tt,M,S),tt.side=bn):N.renderBufferDirect(it,H,K,tt,M,S),M.onAfterRender(N,H,it,K,tt,S)}function qe(M){let H=0;for(let it of M)it.texture!==null&&H++;return H}function yn(M,H,it){H.isScene!==!0&&(H=Je);let K=Wt.get(M),tt=R.state.lights,S=R.state.shadowsArray,D=tt.state.version,C=pt.getParameters(M,tt.state,S,H,it,R.state.lightProbeGridArray),B=pt.getProgramCacheKey(C),$=K.programs;K.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?H.environment:null,K.fog=H.fog;let Q=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;K.envMap=P.get(M.envMap||K.environment,Q),K.envMapRotation=K.environment!==null&&M.envMap===null?H.environmentRotation:M.envMapRotation,$===void 0&&(M.addEventListener("dispose",Bt),$=new Map,K.programs=$,K.programVariants=new Map);let V=$.get(B);if(V!==void 0){if(K.currentProgram===V&&K.lightsStateVersion===D)return Dn(M,C),V}else C.uniforms=pt.getUniforms(M),J!==null&&M.isNodeMaterial&&J.build(M,it,C),M.onBeforeCompile(C,N),V=pt.acquireProgram(C,B),$.set(B,V),K.uniforms=C.uniforms;let ut=K.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ut.clippingPlanes=ht.uniform),Dn(M,C),K.needsLights=Wn(M),K.lightsStateVersion=D,K.needsLights&&(ut.ambientLightColor.value=tt.state.ambient,ut.lightProbe.value=tt.state.probe,ut.sunLights.value=tt.state.sun,ut.sunLightShadows.value=tt.state.sunShadow,ut.directionalLights.value=tt.state.directional,ut.directionalLightShadows.value=tt.state.directionalShadow,ut.spotLights.value=tt.state.spot,ut.spotLightShadows.value=tt.state.spotShadow,ut.rectAreaLights.value=tt.state.rectArea,ut.ltc_1.value=tt.state.rectAreaLTC1,ut.ltc_2.value=tt.state.rectAreaLTC2,ut.pointLights.value=tt.state.point,ut.pointLightShadows.value=tt.state.pointShadow,ut.hemisphereLights.value=tt.state.hemi,ut.sunShadowMatrix.value=tt.state.sunShadowMatrix,ut.sunShadowCascade.value=tt.state.sunShadowCascade,ut.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,ut.spotLightMatrix.value=tt.state.spotLightMatrix,ut.spotLightMap.value=tt.state.spotLightMap,ut.pointShadowMatrix.value=tt.state.pointShadowMatrix),K.numLightProbeGrids=qe(R.state.lightProbeGridArray),K.currentProgram=V,K.uniformsList=null,V}function li(M,H,it,K,tt){let S=Wt.get(M),D=S.currentProgram.id+","+K+","+tt,C=S.programVariants.get(D);return C===void 0?(C=yn(M,H,it),S.programVariants.set(D,C)):(S.currentProgram=C,S.uniformsList=null,S.outputColorSpace=K,S.toneMapping=tt),C}function Vn(M){if(M.uniformsList===null){let H=M.currentProgram.getUniforms();M.uniformsList=ws.seqWithValue(H.seq,M.uniforms)}return M.uniformsList}function Dn(M,H){let it=Wt.get(M);it.outputColorSpace=H.outputColorSpace,it.batching=H.batching,it.batchingColor=H.batchingColor,it.instancing=H.instancing,it.instancingColor=H.instancingColor,it.instancingMorph=H.instancingMorph,it.skinning=H.skinning,it.morphTargets=H.morphTargets,it.morphNormals=H.morphNormals,it.morphColors=H.morphColors,it.morphTargetsCount=H.morphTargetsCount,it.numClippingPlanes=H.numClippingPlanes,it.numIntersection=H.numClipIntersection,it.vertexAlphas=H.vertexAlphas,it.vertexTangents=H.vertexTangents,it.toneMapping=H.toneMapping}function Zi(M,H,it,K,tt){H.isScene!==!0&&(H=Je),$t.resetTextureUnits();let S=H.fog,D=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?H.environment:null,C=vt===null?N.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:le.workingColorSpace,B=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,$=P.get(K.envMap||D,B),Q=K.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,V=!!it.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ut=!!it.morphAttributes.position,x=!!it.morphAttributes.normal,I=!!it.morphAttributes.color,A=On;K.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(A=N.toneMapping);let G=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,nt=G!==void 0?G.length:0,q=Wt.get(K),Y=R.state.lights;if(Me===!0&&(Fe===!0||M!==mt)){let fe=M===mt&&K.id===U;ht.setState(K,M,fe)}let X=!1,rt=!1;K.version===q.__version?q.needsLights&&q.lightsStateVersion!==Y.state.version||tt.isBatchedMesh&&q.batching===!1||!tt.isBatchedMesh&&q.batching===!0||tt.isBatchedMesh&&q.batchingColor===!0&&tt._colorsTexture===null||tt.isBatchedMesh&&q.batchingColor===!1&&tt._colorsTexture!==null||tt.isInstancedMesh&&q.instancing===!1||!tt.isInstancedMesh&&q.instancing===!0||tt.isSkinnedMesh&&q.skinning===!1||!tt.isSkinnedMesh&&q.skinning===!0||tt.isInstancedMesh&&q.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&q.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&q.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&q.instancingMorph===!1&&tt.morphTexture!==null||q.envMap!==$||K.fog===!0&&q.fog!==S||q.numClippingPlanes!==void 0&&(q.numClippingPlanes!==ht.numPlanes||q.numIntersection!==ht.numIntersection)||q.vertexAlphas!==Q||q.vertexTangents!==V||q.morphTargets!==ut||q.morphNormals!==x||q.morphColors!==I||q.morphTargetsCount!==nt||q.numLightProbeGrids!==qe(R.state.lightProbeGridArray)?X=!0:(q.outputColorSpace!==C||q.toneMapping!==A)&&(rt=!0):(X=!0,q.__version=K.version);let Dt=q.currentProgram;(X===!0||rt===!0)&&(Dt=rt===!0?li(K,H,tt,C,A):yn(K,H,tt),J&&K.isNodeMaterial&&J.onUpdateProgram(K,Dt,q));let Nt=!1,_t=!1,qt=!1,Ot=Dt.getUniforms(),jt=q.uniforms;if(Pt.useProgram(Dt.program)&&(Nt=!0,_t=!0,qt=!0),K.id!==U&&(U=K.id,_t=!0),Nt||mt!==M){Pt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ot.setValue(Z,"projectionMatrix",M.projectionMatrix),Ot.setValue(Z,"viewMatrix",M.matrixWorldInverse);let Ie=Ot.map.cameraPosition;Ie!==void 0&&Ie.setValue(Z,he.setFromMatrixPosition(M.matrixWorld)),ve.logarithmicDepthBuffer&&Ot.setValue(Z,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ot.setValue(Z,"isOrthographic",M.isOrthographicCamera===!0),mt!==M&&(mt=M,_t=!0,qt=!0)}if(q.needsLights&&(Y.state.sunShadowMap.length>0&&Ot.setValue(Z,"sunShadowMap",Y.state.sunShadowMap,$t),Y.state.directionalShadowMap.length>0&&Ot.setValue(Z,"directionalShadowMap",Y.state.directionalShadowMap,$t),Y.state.spotShadowMap.length>0&&Ot.setValue(Z,"spotShadowMap",Y.state.spotShadowMap,$t),Y.state.pointShadowMap.length>0&&Ot.setValue(Z,"pointShadowMap",Y.state.pointShadowMap,$t)),tt.isSkinnedMesh){Ot.setOptional(Z,tt,"bindMatrix"),Ot.setOptional(Z,tt,"bindMatrixInverse");let fe=tt.skeleton;fe&&(fe.boneTexture===null&&fe.computeBoneTexture(),Ot.setValue(Z,"boneTexture",fe.boneTexture,$t))}tt.isBatchedMesh&&(Ot.setOptional(Z,tt,"batchingTexture"),Ot.setValue(Z,"batchingTexture",tt._matricesTexture,$t),Ot.setOptional(Z,tt,"batchingIdTexture"),Ot.setValue(Z,"batchingIdTexture",tt._indirectTexture,$t),Ot.setOptional(Z,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Ot.setValue(Z,"batchingColorTexture",tt._colorsTexture,$t));let Te=it.morphAttributes;if((Te.position!==void 0||Te.normal!==void 0||Te.color!==void 0)&&dt.update(tt,it,Dt),(_t||q.receiveShadow!==tt.receiveShadow)&&(q.receiveShadow=tt.receiveShadow,Ot.setValue(Z,"receiveShadow",tt.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&H.environment!==null&&(jt.envMapIntensity.value=H.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=gg()),_t){if(Ot.setValue(Z,"toneMappingExposure",N.toneMappingExposure),q.needsLights&&_e(jt,qt),S&&K.fog===!0&&Tt.refreshFogUniforms(jt,S),Tt.refreshMaterialUniforms(jt,K,bt,Lt,R.state.transmissionRenderTarget[M.id]),q.needsLights&&q.numLightProbeGrids>0){let fe=w,Ie=0;for(let un of R.state.lightProbeGridArray)un.texture!==null&&(fe.textures[Ie]=un.texture,fe.min[Ie]=un.boundingBox.min,fe.max[Ie]=un.boundingBox.max,fe.resolution[Ie]=un.resolution,Ie++);for(let un in fe)fe[un].length=Ie;jt.probesSH.value=fe.textures,jt.probesMin.value=fe.min,jt.probesMax.value=fe.max,jt.probesResolution.value=fe.resolution}ws.upload(Z,Vn(q),jt,$t)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ws.upload(Z,Vn(q),jt,$t),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ot.setValue(Z,"center",tt.center),Ot.setValue(Z,"modelViewMatrix",tt.modelViewMatrix),Ot.setValue(Z,"normalMatrix",tt.normalMatrix),Ot.setValue(Z,"modelMatrix",tt.matrixWorld),K.uniformsGroups!==void 0){let fe=K.uniformsGroups;for(let Ie=0,un=fe.length;Ie<un;Ie++){let Ps=fe[Ie];zt.update(Ps,Dt),zt.bind(Ps,Dt)}}return Dt}function _e(M,H){M.ambientLightColor.needsUpdate=H,M.lightProbe.needsUpdate=H,M.sunLights.needsUpdate=H,M.sunLightShadows.needsUpdate=H,M.directionalLights.needsUpdate=H,M.directionalLightShadows.needsUpdate=H,M.pointLights.needsUpdate=H,M.pointLightShadows.needsUpdate=H,M.spotLights.needsUpdate=H,M.spotLightShadows.needsUpdate=H,M.rectAreaLights.needsUpdate=H,M.hemisphereLights.needsUpdate=H}function Wn(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return ct},this.getActiveMipmapLevel=function(){return at},this.getRenderTarget=function(){return vt},this.setRenderTargetTextures=function(M,H,it){let K=Wt.get(M);K.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Wt.get(M.texture).__webglTexture=H,Wt.get(M.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:it,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,H){let it=Wt.get(M);it.__webglFramebuffer=H,it.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(M,H=0,it=0){vt=M,ct=H,at=it;let K=null,tt=!1,S=!1;if(M){let C=Wt.get(M);if(C.__useDefaultFramebuffer!==void 0){Pt.bindFramebuffer(Z.FRAMEBUFFER,C.__webglFramebuffer),yt.copy(M.viewport),Ht.copy(M.scissor),Jt=M.scissorTest,Pt.viewport(yt),Pt.scissor(Ht),Pt.setScissorTest(Jt),U=-1;return}else if(C.__webglFramebuffer===void 0)$t.setupRenderTarget(M);else if(C.__hasExternalTextures)$t.rebindTextures(M,Wt.get(M.texture).__webglTexture,Wt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Q=M.depthTexture;if(C.__boundDepthTexture!==Q){if(Q!==null&&Wt.has(Q)&&(M.width!==Q.image.width||M.height!==Q.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$t.setupDepthRenderbuffer(M)}}let B=M.texture;(B.isData3DTexture||B.isDataArrayTexture||B.isCompressedArrayTexture)&&(S=!0);let $=Wt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray($[H])?K=$[H][it]:K=$[H],tt=!0):M.samples>0&&$t.useMultisampledRTT(M)===!1?K=Wt.get(M).__webglMultisampledFramebuffer:Array.isArray($)?K=$[it]:K=$,yt.copy(M.viewport),Ht.copy(M.scissor),Jt=M.scissorTest}else yt.copy(Xt).multiplyScalar(bt).floor(),Ht.copy(se).multiplyScalar(bt).floor(),Jt=ne;if(it!==0&&(K=st),Pt.bindFramebuffer(Z.FRAMEBUFFER,K)&&Pt.drawBuffers(M,K),Pt.viewport(yt),Pt.scissor(Ht),Pt.setScissorTest(Jt),tt){let C=Wt.get(M.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+H,C.__webglTexture,it)}else if(S){let C=H;for(let B=0;B<M.textures.length;B++){let $=Wt.get(M.textures[B]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+B,$.__webglTexture,it,C)}}else if(M!==null&&it!==0){let C=Wt.get(M.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,C.__webglTexture,it)}U=-1};function Se(M){let H=Wt.get(M);return(H.__readFormat!==M.format||H.__readType!==M.type)&&(H.__readFormat=M.format,H.__readType=M.type,H.__formatReadable=ve.textureFormatReadable(M.format),H.__typeReadable=ve.textureTypeReadable(M.type)),H}this.readRenderTargetPixels=function(M,H,it,K,tt,S,D,C=0){if(!(M&&M.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let B=Wt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&D!==void 0&&(B=B[D],Array.isArray(B)&&(B=B[0])),B){Pt.bindFramebuffer(Z.FRAMEBUFFER,B);try{let $=M.textures[C],Q=$.format,V=$.type;M.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+C);let ut=Se($);if(ut.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ut.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=M.width-K&&it>=0&&it<=M.height-tt&&Z.readPixels(H,it,K,tt,wt.convert(Q),wt.convert(V),S)}finally{let $=vt!==null?Wt.get(vt).__webglFramebuffer:null;Pt.bindFramebuffer(Z.FRAMEBUFFER,$)}}},this.readRenderTargetPixelsAsync=async function(M,H,it,K,tt,S,D,C=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let B=Wt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&D!==void 0&&(B=B[D],Array.isArray(B)&&(B=B[0])),B)if(H>=0&&H<=M.width-K&&it>=0&&it<=M.height-tt){Pt.bindFramebuffer(Z.FRAMEBUFFER,B);let $=M.textures[C],Q=$.format,V=$.type;M.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+C);let ut=Se($);if(ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let x=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,x),Z.bufferData(Z.PIXEL_PACK_BUFFER,S.byteLength,Z.STREAM_READ),Z.readPixels(H,it,K,tt,wt.convert(Q),wt.convert(V),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null);let I=vt!==null?Wt.get(vt).__webglFramebuffer:null;Pt.bindFramebuffer(Z.FRAMEBUFFER,I);let A=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await zc(Z,A,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,x),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,S),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer(x),Z.deleteSync(A),S}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,H=null,it=0){let K=Math.pow(2,-it),tt=Math.floor(M.image.width*K),S=Math.floor(M.image.height*K),D=H!==null?H.x:0,C=H!==null?H.y:0;$t.setTexture2D(M,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,it,0,0,D,C,tt,S),Pt.unbindTexture()},this.copyTextureToTexture=function(M,H,it=null,K=null,tt=0,S=0){let D,C,B,$,Q,V,ut,x,I,A=M.isCompressedTexture?M.mipmaps[S]:M.image;if(it!==null)D=it.max.x-it.min.x,C=it.max.y-it.min.y,B=it.isBox3?it.max.z-it.min.z:1,$=it.min.x,Q=it.min.y,V=it.isBox3?it.min.z:0;else{let Ot=Math.pow(2,-tt);D=Math.floor(A.width*Ot),C=Math.floor(A.height*Ot),M.isDataArrayTexture?B=A.depth:M.isData3DTexture?B=Math.floor(A.depth*Ot):B=1,$=0,Q=0,V=0}K!==null?(ut=K.x,x=K.y,I=K.z):(ut=0,x=0,I=0);let G=wt.convert(H.format),nt=wt.convert(H.type),q;H.isData3DTexture?($t.setTexture3D(H,0),q=Z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?($t.setTexture2DArray(H,0),q=Z.TEXTURE_2D_ARRAY):($t.setTexture2D(H,0),q=Z.TEXTURE_2D),Pt.activeTexture(Z.TEXTURE0),Pt.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,H.flipY),Pt.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),Pt.pixelStorei(Z.UNPACK_ALIGNMENT,H.unpackAlignment);let Y=Pt.getParameter(Z.UNPACK_ROW_LENGTH),X=Pt.getParameter(Z.UNPACK_IMAGE_HEIGHT),rt=Pt.getParameter(Z.UNPACK_SKIP_PIXELS),Dt=Pt.getParameter(Z.UNPACK_SKIP_ROWS),Nt=Pt.getParameter(Z.UNPACK_SKIP_IMAGES);Pt.pixelStorei(Z.UNPACK_ROW_LENGTH,A.width),Pt.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,A.height),Pt.pixelStorei(Z.UNPACK_SKIP_PIXELS,$),Pt.pixelStorei(Z.UNPACK_SKIP_ROWS,Q),Pt.pixelStorei(Z.UNPACK_SKIP_IMAGES,V);let _t=M.isDataArrayTexture||M.isData3DTexture,qt=H.isDataArrayTexture||H.isData3DTexture;if(M.isDepthTexture){let Ot=Wt.get(M),jt=Wt.get(H),Te=Wt.get(Ot.__renderTarget),fe=Wt.get(jt.__renderTarget);Pt.bindFramebuffer(Z.READ_FRAMEBUFFER,Te.__webglFramebuffer),Pt.bindFramebuffer(Z.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Ie=0;Ie<B;Ie++)_t&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Wt.get(M).__webglTexture,tt,V+Ie),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Wt.get(H).__webglTexture,S,I+Ie)),Z.blitFramebuffer($,Q,$+D,Q+C,ut,x,ut+D,x+C,Z.DEPTH_BUFFER_BIT,Z.NEAREST);Pt.bindFramebuffer(Z.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(tt!==0||M.isRenderTargetTexture||Wt.has(M)){let Ot=Wt.get(M),jt=Wt.get(H);Pt.bindFramebuffer(Z.READ_FRAMEBUFFER,F),Pt.bindFramebuffer(Z.DRAW_FRAMEBUFFER,et);for(let Te=0;Te<B;Te++)_t?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ot.__webglTexture,tt,V+Te):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ot.__webglTexture,tt),qt?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,jt.__webglTexture,S,I+Te):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,jt.__webglTexture,S),tt!==0?Z.blitFramebuffer($,Q,$+D,Q+C,ut,x,ut+D,x+C,Z.COLOR_BUFFER_BIT,Z.NEAREST):qt?Z.copyTexSubImage3D(q,S,ut,x,I+Te,$,Q,D,C):Z.copyTexSubImage2D(q,S,ut,x,$,Q,D,C);Pt.bindFramebuffer(Z.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else qt?M.isDataTexture||M.isData3DTexture?Z.texSubImage3D(q,S,ut,x,I,D,C,B,G,nt,A.data):H.isCompressedArrayTexture?Z.compressedTexSubImage3D(q,S,ut,x,I,D,C,B,G,A.data):Z.texSubImage3D(q,S,ut,x,I,D,C,B,G,nt,A):M.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,S,ut,x,D,C,G,nt,A.data):M.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,S,ut,x,A.width,A.height,G,A.data):Z.texSubImage2D(Z.TEXTURE_2D,S,ut,x,D,C,G,nt,A);Pt.pixelStorei(Z.UNPACK_ROW_LENGTH,Y),Pt.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,X),Pt.pixelStorei(Z.UNPACK_SKIP_PIXELS,rt),Pt.pixelStorei(Z.UNPACK_SKIP_ROWS,Dt),Pt.pixelStorei(Z.UNPACK_SKIP_IMAGES,Nt),S===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&Z.generateMipmap(q),Pt.unbindTexture()},this.initRenderTarget=function(M){Wt.get(M).__webglFramebuffer===void 0&&$t.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?$t.setTextureCube(M,0):M.isData3DTexture?$t.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?$t.setTexture2DArray(M,0):$t.setTexture2D(M,0),Pt.unbindTexture()},this.resetState=function(){ct=0,at=0,vt=null,Pt.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var Th={type:"change"},Il={type:"start"},Rh={type:"end"},io=new Ni,Ah=new pn,_g=Math.cos(70*cr.DEG2RAD),He=new W,hn=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cl=1e-6,Rs=class extends er{constructor(t,e=null){super(t,e),this.state=ue.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.touches={ONE:bi.ROTATE,TWO:bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new mn,this._lastTargetPosition=new W,this._quat=new mn().setFromUnitVectors(t.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ys,this._sphericalDelta=new ys,this._scale=1,this._panOffset=new W,this._rotateStart=new kt,this._rotateEnd=new kt,this._rotateDelta=new kt,this._panStart=new kt,this._panEnd=new kt,this._panDelta=new kt,this._dollyStart=new kt,this._dollyEnd=new kt,this._dollyDelta=new kt,this._dollyDirection=new W,this._mouse=new kt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yg.bind(this),this._onPointerDown=xg.bind(this),this._onPointerUp=vg.bind(this),this._onContextMenu=Ag.bind(this),this._onMouseWheel=bg.bind(this),this._onKeyDown=Eg.bind(this),this._onTouchStart=wg.bind(this),this._onTouchMove=Tg.bind(this),this._onMouseDown=Mg.bind(this),this._onMouseMove=Sg.bind(this),this._interceptControlDown=Rg.bind(this),this._interceptControlUp=Cg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ue.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Th),this.update(),this.state=ue.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;He.copy(e).sub(this.target),He.applyQuaternion(this._quat),this._spherical.setFromVector3(He),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=hn:n>Math.PI&&(n-=hn),s<-Math.PI?s+=hn:s>Math.PI&&(s-=hn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(He.setFromSpherical(this._spherical),He.applyQuaternion(this._quatInverse),e.copy(this.target).add(He),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=He.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new W(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new W(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=He.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(io.origin.copy(this.object.position),io.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(io.direction))<_g?this.object.lookAt(this.target):(Ah.setFromNormalAndCoplanarPoint(this.object.up,this.target),io.intersectPlane(Ah,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Cl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cl||this._lastTargetPosition.distanceToSquared(this.target)>Cl?(this.dispatchEvent(Th),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?hn/60*this.autoRotateSpeed*t:hn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){He.setFromMatrixColumn(e,0),He.multiplyScalar(-t),this._panOffset.add(He)}_panUp(t,e){this.screenSpacePanning===!0?He.setFromMatrixColumn(e,1):(He.setFromMatrixColumn(e,0),He.crossVectors(this.object.up,He)),He.multiplyScalar(t),this._panOffset.add(He)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;He.copy(s).sub(this.target);let r=He.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new kt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function xg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function yg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function vg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rh),this.state=ue.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Mg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Si.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ue.DOLLY;break;case Si.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}break;case Si.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(Il)}function Sg(i){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function bg(i){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(i.preventDefault(),this.dispatchEvent(Il),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Rh))}function Eg(i){this.enabled!==!1&&this._handleKeyDown(i)}function wg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case bi.ROTATE:if(this.enableRotate===!1){this.state=ue.NONE;break}this._handleTouchStartRotate(i),this.state=ue.TOUCH_ROTATE;break;case bi.PAN:if(this.enablePan===!1){this.state=ue.NONE;break}this._handleTouchStartPan(i),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case bi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ue.TOUCH_DOLLY_PAN;break;case bi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(Il)}function Tg(i){switch(this._trackPointer(i),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ue.NONE}}function Ag(i){this.enabled!==!1&&i.preventDefault()}function Rg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Cg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ti=class extends We{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new kt(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this.rotation2D=t.rotation2D,this}},Cs=new W,Ch=new me,Ih=new me,Ph=new W,Lh=new W,Is=class{constructor(t={}){let e=this,n,s,r,a,o={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:s}},this.render=function(m,E){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),E.parent===null&&E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),Ch.copy(E.matrixWorldInverse),Ih.multiplyMatrices(E.projectionMatrix,Ch),h(m,m,E),this.sortObjects&&u(m)},this.setSize=function(m,E){n=m,s=E,r=n/2,a=s/2,l.style.width=m+"px",l.style.height=E+"px"};function c(m){m.isCSS2DObject&&(m.element.style.display="none");for(let E=0,p=m.children.length;E<p;E++)c(m.children[E])}function h(m,E,p){if(m.visible===!1){c(m);return}if(m.isCSS2DObject){Cs.setFromMatrixPosition(m.matrixWorld),Cs.applyMatrix4(Ih);let d=Cs.z>=-1&&Cs.z<=1&&m.layers.test(p.layers)===!0,v=m.element;if(v.style.display=d===!0?"":"none",d===!0){m.onBeforeRender(e,E,p);let w=100*m.center.x,T=100*m.center.y;v.style.transformOrigin=`${w}% ${T}%`;let R=-m.rotation2D,_=Cs.x*r+r,b=-Cs.y*a+a;v.style.transform=`translate(${-w}%, ${-T}%) translate(${_}px, ${b}px) rotate(${R}rad)`,v.parentNode!==l&&l.appendChild(v),m.onAfterRender(e,E,p)}let L={distanceToCameraSquared:g(p,m)};o.objects.set(m,L)}for(let d=0,v=m.children.length;d<v;d++)h(m.children[d],E,p)}function g(m,E){return Ph.setFromMatrixPosition(m.matrixWorld),Lh.setFromMatrixPosition(E.matrixWorld),Ph.distanceToSquared(Lh)}function f(m){let E=[];return m.traverseVisible(function(p){p.isCSS2DObject&&E.push(p)}),E}function u(m){let E=f(m).sort(function(d,v){if(d.renderOrder!==v.renderOrder)return v.renderOrder-d.renderOrder;let L=o.objects.get(d).distanceToCameraSquared,w=o.objects.get(v).distanceToCameraSquared;return L-w}),p=E.length;for(let d=0,v=E.length;d<v;d++)E[d].element.style.zIndex=p-d}}};function Dh(i){let t=i.status,e=i.stage,n=i.canvasHost,s=i.labelHost,r=i.rotateButton,a=i.resetButton,o=i.reducedMotion,l=i.data,c=i.months,h=i.latest,g=(S,D={})=>{let C=new URLSearchParams({month:S});return D.group!==void 0&&C.set("group",String(D.group)),D.category&&C.set("category",D.category),`month.html?${C.toString()}`};function f(S){t.textContent=S,t.hidden=!1,r.disabled=!0,r.setAttribute("aria-pressed","false"),r.textContent="3D \u65CB\u8F49\u672A\u555F\u7528",a.disabled=!0}a.disabled=!1;let u;try{u=new Ts({antialias:!0,alpha:!1,powerPreference:"low-power"})}catch{return f("3D \u5834\u666F\u7121\u6CD5\u555F\u52D5\uFF1B\u6587\u7A3F\u5C0E\u89BD\u4ECD\u53EF\u5B8C\u6574\u4F7F\u7528\u3002\u82E5\u5C0E\u89BD\u5DF2\u6536\u5408\uFF0C\u6309\u4E0A\u65B9\u300C\u986F\u793A\u5C0E\u89BD\u300D\u3002"),()=>{}}let m=new Di;m.background=new ee("#fff8f4"),m.fog=new Li("#edddcf",48,110);let E=new ke(32,1,.1,200),p=new ce;m.add(p),u.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6)),u.shadowMap.enabled=!0,u.shadowMap.type=ni,u.outputColorSpace=Ye,u.toneMapping=Wi,u.toneMappingExposure=1,u.domElement.setAttribute("aria-hidden","true"),u.domElement.setAttribute("role","presentation"),n.appendChild(u.domElement);let d=new Is;d.domElement.style.position="absolute",d.domElement.style.inset="0",d.domElement.style.overflow="visible",d.domElement.style.pointerEvents="none",s.appendChild(d.domElement);let v=new Bi("#fff8f4","#c5b5a7",1.9);m.add(v);let L=new Hi("#ffc090",0);m.add(L);let w=new ei("#cfe4f2",.9);w.position.set(12,8,-10),m.add(w);let T=new ei("#ffe9cf",3);T.position.set(-8,18,12),T.castShadow=!0,T.shadow.mapSize.set(1024,1024),T.shadow.camera.left=-28,T.shadow.camera.right=28,T.shadow.camera.top=26,T.shadow.camera.bottom=-26,T.shadow.bias=-35e-5,m.add(T);let R=new ln({side:Ze,depthWrite:!1,toneMapped:!1,uniforms:{top:{value:new W(197/255,223/255,240/255)},mid:{value:new W(232/255,242/255,247/255)},bottom:{value:new W(243/255,235/255,227/255)},resolution:{value:new kt(1,1)}},vertexShader:"void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 mid; uniform vec3 bottom; uniform vec2 resolution; void main(){ float y = clamp(gl_FragCoord.y / max(resolution.y, 1.0), 0.0, 1.0); vec3 col = y < 0.5 ? mix(bottom, mid, y * 2.0) : mix(mid, top, (y - 0.5) * 2.0); gl_FragColor = vec4(col, 1.0); }"}),_=new Le(new Re(180,28,18),R);_.frustumCulled=!1,_.renderOrder=-10,m.add(_);let b=new Le(new xi(42,80),new ti({color:"#45abbb",roughness:.8,metalness:0,emissive:"#45abbb",emissiveIntensity:0})),z=new Le(new xi(15,48),new ti({color:"#8fd3da",roughness:.8,metalness:0,transparent:!0,opacity:.7,emissive:"#8fd3da",emissiveIntensity:0}));z.rotation.x=-Math.PI/2,z.position.y=-.12,p.add(z),b.rotation.x=-Math.PI/2,b.position.y=-.17,b.receiveShadow=!0,p.add(b);let N=[],k=new Set,J=[],st=[],F=[],et=[];et.push(z.material);let ct={land:["#e6d8c8","#d3c4aa","#f4ece4"],soil:["#c5b5a7","#b8a07e","#c5b5a7","#b8a07e"],roof:["#db6a41","#e08a5f","#c9583a"],building:["#fff8f4","#f4ebdd","#fffdf9"],ink:"#211d1d"},at={\u6587\u7A3F:"#db6a41",\u526A\u5F71:"#e6a15a",\u8A69\u8A5E:"#45abbb",\u89AA\u5B50\u5712\u5730:"#e9c46a",\u5C01\u5E95:"#c9583a",\u5F85\u5206\u985E:"#78685e"};function vt(S,D={}){return new ti({color:S,roughness:.8,metalness:0,flatShading:!0,...D})}function U(S,D,C={}){let B=new Le(S,vt(D,C));return B.castShadow=!0,B.receiveShadow=!0,B}function mt(S,D,C,B,$="",Q={}){let V=document.createElement("a");V.className=`island-label ${$}`.trim(),V.href=C,$.includes("group-label")&&(V.dataset.num=(S.match(/\d+/)||[""])[0]),Q.openInNewTab&&(V.target="_blank",V.rel="noopener noreferrer");let ut=Q.ariaLabel||(D?`${S}\uFF0C${D}\uFF0C\u958B\u555F\u5BE9\u7A3F\u9801`:`${S}\uFF0C\u958B\u555F\u5BE9\u7A3F\u9801`);V.setAttribute("aria-label",ut);let x=document.createElement("span");if(x.textContent=S,V.appendChild(x),D){let A=document.createElement("small");A.textContent=D,V.appendChild(A)}let I=new Ti(V);return I.position.set(B.x,B.y,B.z),I}function yt(S,D){S.userData.route=D,S.traverse(C=>{if(!C.isMesh)return;C.userData.route=D,C.userData.interactiveRoot=S;let B=Array.isArray(C.material)?C.material:[C.material];for(let $ of B)$&&$.emissive&&($.userData.originalEmissive=$.emissive.getHex());N.push(C)}),k.add(S)}function Ht(S,D,C,B,$,Q,V=1,ut="",x=0,I=B){let A=new ce;A.position.set(D,1.1,C),S.add(A);let G=U(new St(.98*V,.16*V,.82*V),"#f4ebdd");G.position.y=.08*V,A.add(G);let nt=ct.building.length,q=((B.length+Math.round(D*10))%nt+nt)%nt,Y=U(new St(.72*V,.76*V,.62*V),ct.building[q]);Y.position.y=.52*V,A.add(Y);let X=U(new an(.62*V,.54*V,4,1),Q);X.position.y=1.15*V,X.rotation.y=Math.PI/4,A.add(X);let rt=U(new St(.19*V,.34*V,.045*V),"#78685e",{roughness:.9});rt.position.set(0,.28*V,.33*V),A.add(rt);for(let Ot of[-1,1]){let jt=U(new St(.13*V,.14*V,.04*V),"#8fd3da",{roughness:.6,emissive:"#fcea8b",emissiveIntensity:0});jt.position.set(Ot*.22*V,.64*V,.33*V),jt.material.userData.todManaged=!0,J.push(jt.material),A.add(jt)}let Dt=U(new St(.86*V,.06*V,.76*V),"#f4ebdd");Dt.position.y=.92*V,A.add(Dt);let Nt=U(new St(.34*V,.04*V,.16*V),Q);Nt.position.set(0,.5*V,.38*V),Nt.rotation.x=.35,A.add(Nt);let _t=U(new St(.3*V,.06*V,.14*V),"#c5b5a7");_t.position.set(0,.19*V,.42*V),A.add(_t);for(let Ot of[-1,1]){let jt=U(new St(.17*V,.03*V,.06*V),"#fff8f4");jt.position.set(Ot*.22*V,.56*V,.34*V),A.add(jt)}ft(A,B.replace("\u2026",""),V,Q),A.rotation.y=-Math.atan2(C,D)+Math.PI/2,yt(A,$);let qt=mt(B,ut,$,{x:0,y:1.9*V+x,z:0},"cat-label");return qt.element.title=I+(ut?`\uFF08${ut}\uFF09`:""),A.add(qt),A}function Jt(S,D,C,B=1,$="#9fbf8f"){let Q=new ce;Q.position.set(D,1.05,C),S.add(Q);let V=U(new Vt(.08*B,.12*B,.55*B,5),"#a77a55");V.position.y=.28*B,Q.add(V);let ut=U(new Sn(.44*B,0),$);ut.position.y=.78*B,Q.add(ut);let x=U(new Sn(.31*B,0),"#b7cf9f");x.position.set(.12*B,1.02*B,.04*B),Q.add(x)}function ft(S,D,C,B){let $=(Q,V,ut,x,I,A=0)=>{let G=U(Q,V);return G.position.set(ut*C,x*C,I*C),G.rotation.y=A,S.add(G),G};if(D.startsWith("\u6587\u7A3F"))$(new St(.5,.14,.04),"#211d1d",0,1.5,.05),$(new St(.44,.09,.05),"#fcea8b",0,1.5,.08),$(new St(.3,.4,.14),"#a77a55",.55,.4,.2),["#db6a41","#45abbb","#fcea8b","#78685e"].forEach((Q,V)=>$(new St(.05,.13,.1),Q,.46+V*.06,.5,.26));else if(D.startsWith("\u526A\u5F71")){$(new St(.36,.05,.36),"#b48560",.62,.62,.1);for(let[V,ut]of[[-1,-1],[1,-1],[-1,1],[1,1]])$(new Vt(.025,.025,.6,5),"#a77a55",.62+V*.15,.3,.1+ut*.15);$(new St(.16,.11,.1),"#211d1d",.62,.72,.1);let Q=$(new Vt(.04,.04,.08,8),"#8fd3da",.62,.72,.18);Q.rotation.x=Math.PI/2}else if(D.startsWith("\u8A69\u8A5E")){$(new St(.18,.42,.08),"#c5b5a7",.58,.29,.25),$(new St(.24,.06,.12),"#b8a07e",.58,.1,.25);for(let Q of[-1,1])$(new Vt(.025,.025,.42,5),"#db6a41",-.62+Q*.13,.29,.25);$(new an(.24,.16,6),B,-.62,.58,.25)}else if(D.startsWith("\u89AA\u5B50")){for(let Q of[-1,1]){let V=$(new Vt(.02,.02,.5,5),"#db6a41",.62+Q*.18,.25,.25);V.rotation.z=Q*.12}$(new Vt(.02,.02,.4,5),"#db6a41",.62,.5,.25).rotation.z=Math.PI/2,$(new St(.12,.02,.07),"#fcea8b",.62,.22,.25),$(new St(.34,.06,.34),"#f4ece4",-.6,.1,.3),$(new Re(.06,6,4),"#45abbb",-.6,.16,.3)}else if(D.startsWith("\u5C01\u5E95")){for(let Q of[-1,1])$(new Vt(.025,.025,.55,5),"#a77a55",.6+Q*.2,.27,.3);$(new St(.46,.3,.04),"#fff8f4",.6,.45,.3),["#db6a41","#fcea8b","#8fd3da"].forEach((Q,V)=>$(new St(.1,.12,.01),Q,.46+V*.14,.46,.33))}}let It={rock:new Sn(.16,0),bush:new Fi(.16,0),flower:new Re(.05,5,4),stone:new Vt(.16,.18,.04,6),pile:new Vt(.045,.05,.6,5),plank:new St(.22,.05,.6)};function Ft(S,D,C,B,$,Q,V=1,ut=0){let x=U(D,C);return x.position.set(B,$,Q),x.scale.setScalar(V),x.rotation.y=ut,x.castShadow=V>.6,S.add(x),x}function Lt(S,D,C,B){let $=bt.islandRadius,Q=(X,rt)=>({x:Math.cos(X)*rt,z:Math.sin(X)*rt}),V=X=>{let rt=Math.sin(D*91.7+X*12.9)*43758.5;return rt-Math.floor(rt)},ut=new Le(new Vt($*1.32,$*1.32,.04,28),vt("#8fd3da",{transparent:!0,opacity:.7,emissive:"#8fd3da",emissiveIntensity:0}));ut.position.y=.06,ut.receiveShadow=!0,et.push(ut.material),S.add(ut);for(let X=0;X<7;X+=1){let rt=Q(C+X*.9+V(X),$*(.9+V(X+3)*.12)),Dt=U(new Vt(.55+V(X)*.35,.7+V(X)*.35,.7+V(X+1)*.25,6),X%2?"#c5b5a7":"#b8a07e");Dt.position.set(rt.x,.36,rt.z),Dt.rotation.y=V(X+9)*3,S.add(Dt);let Nt=U(new Vt(.5+V(X)*.3,.55+V(X)*.3,.12,6),Yt[D]);Nt.position.set(rt.x,.72+V(X+1)*.12,rt.z),Nt.rotation.y=Dt.rotation.y,S.add(Nt)}ge.filter(X=>X!==D).forEach(X=>{let rt=Math.atan2(ne[X].z-ne[D].z,ne[X].x-ne[D].x);for(let Dt=.5;Dt<$-.1;Dt+=.42){let Nt=Q(rt+Math.sin(Dt*2)*.06,Dt);Ft(S,It.stone,"#f4ebdd",Nt.x,1.13,Nt.z,1,Dt)}});let x=C+Math.PI,I=200*Math.PI/180,A=[[x,1.3,.6],[x+.35,2.4,.5],[x-.35,2.5,.45]];for(let X=0;X<Math.max(1,B.length-1);X+=1){let rt=B.length<2?C+.6:C-I/2+I*(X+.5)/(B.length-1);A.push([rt,3,.4+V(X+20)*.2])}A.slice(0,6).forEach(([X,rt,Dt],Nt)=>{let _t=Q(X,rt);Jt(S,_t.x,_t.z,Dt,Nt%2?"#9fbf8f":"#8db07c")});let G=["#db6a41","#fcea8b","#fff8f4","#e6a15a"];for(let X=0;X<6;X+=1){let rt=Q(x+(X-2.5)*.28,1.9+V(X+30)*.9);Ft(S,It.bush,X%2?"#a9c796":"#8db07c",rt.x,1.16,rt.z,.9+V(X)*.5);for(let Dt=0;Dt<3;Dt+=1)Ft(S,It.flower,G[(X+Dt)%4],rt.x+(Dt-1)*.12,1.3,rt.z+V(X+Dt)*.14-.07,1)}for(let X=0;X<3;X+=1){let rt=Q(C+(X-1)*1.6+.4,$*1.08);Ft(S,It.rock,"#c5b5a7",rt.x,.25,rt.z,1.1+V(X+40)*1.2,V(X)*3)}let nt=C+.3,q=new ce,Y=Q(nt,$+.35);q.position.set(Y.x,.62,Y.z),q.rotation.y=-nt+Math.PI/2,S.add(q);for(let X=0;X<5;X+=1)Ft(q,It.plank,X%2?"#b48560":"#a77a55",0,0,-.5+X*.25,1,Math.PI/2);for(let[X,rt]of[[-.28,-.6],[.28,-.6],[-.28,.5],[.28,.5]])Ft(q,It.pile,"#a77a55",X,-.15,rt,1)}let bt={ringRadius:8,islandRadius:3.4,buildingRing:2.15,hubRadius:1.55},Yt={1:"#e6d8c8",2:"#d3c4aa",3:"#f4ece4"},ge=[1,2,3],Xt=h.groupCategories&&typeof h.groupCategories=="object"?h.groupCategories:{},se=S=>{let D=(h.groups||[]).find(C=>Number(C.id)===S);return D&&Number(D.count)||0},ne={};ge.forEach((S,D)=>{let C=-Math.PI/2+D*Math.PI*2/3;ne[S]={x:Math.cos(C)*bt.ringRadius,z:Math.sin(C)*bt.ringRadius,angle:C}});function re(S){let D=ne[S],C=bt.islandRadius,B=new ce;B.position.set(D.x,0,D.z),p.add(B);let $=U(new Vt(C*.97,C*1.1,.58,9,1),S%2?"#c5b5a7":"#b8a07e");$.position.y=.34;let Q=U(new Vt(C*.98,C*1.02,.28,9,1),"#f4ebdd");Q.position.y=.74;let V=U(new Vt(C*.96,C*.99,.24,9,1),Yt[S]);V.position.y=.99,B.add($,Q,V);let ut=g(h.key,{group:S});B.userData.route=ut;for(let G of[$,Q,V])G.userData.route=ut,G.userData.interactiveRoot=B,G.material.userData.originalEmissive=G.material.emissive.getHex(),N.push(G);k.add(B),B.add(mt(`\u7B2C ${S} \u7D44`,`${se(S)} \u7BC7 \xB7 ${h.month} \u6708`,ut,{x:0,y:4.35,z:0},"group-label"));let x=Array.isArray(Xt[String(S)])?Xt[String(S)]:[];x.length||(x=(h.categories||[]).map(G=>({name:G.name,count:null})));let I=D.angle,A=200*Math.PI/180;return x.forEach((G,nt)=>{let q=x.length===1?I:I-A/2+A*nt/(x.length-1),Y={x:Math.cos(q)*bt.buildingRing,z:Math.sin(q)*bt.buildingRing},X=G.count===null||G.count===void 0?"":`${G.count} \u7BC7`;Ht(B,Y.x,Y.z,G.name.length>4?G.name.slice(0,4)+"\u2026":G.name,g(h.key,{group:S,category:G.name}),at[G.name]||"#777f6d",.62,X,.18+nt%5*.28,G.name)}),Lt(B,S,I,x),B}function Ce(S,D){let C=ne[S],B=ne[D],$=B.x-C.x,Q=B.z-C.z,V=Math.hypot($,Q),ut=$/V,x=Q/V,I=bt.islandRadius,A={x:C.x+ut*I,z:C.z+x*I},G={x:B.x-ut*I,z:B.z-x*I},nt=V-2*I,q=new ce;q.position.set((A.x+G.x)/2,.92,(A.z+G.z)/2),q.rotation.y=-Math.atan2(Q,$),p.add(q);let Y=Math.max(3,Math.ceil(nt/.48));for(let X=0;X<Y;X+=1){let rt=U(new St(nt/Y-.045,.12,.62),X%2?"#b48560":"#a77a55");rt.position.x=-nt/2+(X+.5)*(nt/Y),q.add(rt)}for(let X of[-1,1]){let rt=U(new St(nt,.08,.05),X>0?"#db6a41":"#ffffff");rt.position.set(0,.22,X*.33),q.add(rt);let Dt=Math.max(6,Math.ceil(nt/.5));for(let Ot=0;Ot<=Dt;Ot+=1){let jt=U(new St(.08,.36,.08),"#fff8f4");jt.position.set(-nt/2+Ot*nt/Dt,.14,X*.33),q.add(jt)}let Nt=U(new St(nt,.04,.04),"#f4ebdd");Nt.position.set(0,.08,X*.33),q.add(Nt);let _t=U(new Vt(.03,.035,.75,5),"#211d1d");_t.position.set(X*nt*.25,.42,X*.38),q.add(_t);let qt=U(new St(.14,.16,.14),"#fcea8b",{emissive:"#fcea8b",emissiveIntensity:.5});qt.position.set(X*nt*.25,.86,X*.38),qt.material.userData.todManaged=!0,st.push(qt.material),q.add(qt)}return{start:A,end:G}}function Me(){let S=new ce;p.add(S);let D=U(new Vt(bt.hubRadius,bt.hubRadius*1.12,.5,7,1),"#b8a07e");D.position.y=.3;let C=U(new Vt(bt.hubRadius*.95,bt.hubRadius,.18,7,1),"#f4ece4");C.position.y=.62,S.add(D,C);let B=U(new Vt(.22,.3,1.2,6),"#fff8f4");B.position.y=1.3;let $=U(new an(.42,.5,6),"#db6a41");$.position.y=2.15,S.add(B,$);let Q=g(h.key);S.userData.route=Q;for(let ut of[D,C,B,$])ut.userData.route=Q,ut.userData.interactiveRoot=S,ut.material.userData.originalEmissive=ut.material.emissive.getHex(),N.push(ut);let V=Number(l.totalEntries)||c.reduce((ut,x)=>ut+Number(x.entries||0),0);S.add(mt("\u6708\u4EFD\u7E3D\u89BD",`${h.label} ${h.entries} \u7BC7 \xB7 \u5168\u90E8 ${V} \u7BC7`,Q,{x:0,y:2.9,z:0},"hub-label"))}function Fe(S,D,C){let B=document.createElement("span");B.className="resident-label",B.textContent=D;let $=document.createElement("div");$.style.pointerEvents="none",$.appendChild(B);let Q=new Ti($);Q.position.set(0,C,0),S.add(Q),S.userData.tag=B}function xe(S,D={}){let C={pants:"#78685e",shirt:"#fff8f4",vest:"#db6a41",hair:"#2e2522",hairCap:.58,hairTilt:-.25,bangs:!1,...D},B=new ce,$=U(new Vt(.09,.1,.22,6),C.pants);$.position.y=.11;let Q=U(new Ui(.16,.24,3,8),C.shirt);Q.position.y=.42;let V=U(new Vt(.175,.19,.2,8,1,!0),C.vest);V.position.y=.44;let ut=U(new Re(.24,12,10),"#f3cfae");ut.position.y=.9;let x=U(new Re(.262,12,10,0,Math.PI*2,0,Math.PI*C.hairCap),C.hair);if(x.position.y=.92,x.rotation.z=C.hairTilt,B.add($,Q,V,ut,x),C.bangs){let I=U(new St(.1,.06,.34),C.hair);I.position.set(.18,1.08,0),B.add(I)}for(let I of[-1,1]){let A=U(new Re(.03,6,4),"#211d1d");A.position.set(.22,.88,I*.08),B.add(A)}return Fe(B,S,1.5),B.userData.body=Q,p.add(B),B}let he={x:0,z:9.2,radius:1.65,url:"survey/index.html"};function De(S,D,C){S.userData.route=D,S.userData.openInNewTab=!0;for(let B of C)B.userData.route=D,B.userData.interactiveRoot=S,B.userData.openInNewTab=!0,B.material&&B.material.emissive&&(B.material.userData.originalEmissive=B.material.emissive.getHex()),N.push(B);k.add(S)}function Je(S){let D=U(new St(.12,1.15,.12),"#c5b5a7");D.position.set(.05,1.62,0);let C=U(new St(.86,.62,.08),"#fff8f4");C.position.set(.05,2.18,.02);let B=U(new St(.86,.16,.09),"#db6a41");B.position.set(.05,2.48,.03);let $=U(new St(.42,.32,.28),"#db6a41");$.position.set(-.62,1.42,.15);let Q=U(new St(.28,.04,.04),"#211d1d");Q.position.set(-.62,1.52,.3);let V=U(new St(.16,.12,.02),"#fcea8b");V.position.set(-.42,1.58,.15);let ut=U(new Re(.09,6,5),"#db6a41");ut.position.set(.7,1.22,-.35);let x=U(new Re(.18,6,5),"#8db07c");return x.position.set(.7,1.16,-.35),S.add(D,C,B,$,Q,V,ut,x),[D,C,B,$,Q,V,ut,x]}function $e(){let S=he.radius,D=he.url,C=new ce;C.position.set(he.x,0,he.z),p.add(C);let B=U(new Vt(S*.96,S*1.08,.5,7,1),"#c5b5a7");B.position.y=.3;let $=U(new Vt(S*.98,S*1.02,.22,7,1),"#f4ebdd");$.position.y=.64;let Q=U(new Vt(S*.96,S*.99,.2,7,1),"#f4ece4");Q.position.y=.84,C.add(B,$,Q);let V=Je(C);return De(C,D,[B,$,Q,...V]),C.add(mt("\u8B80\u8005\u554F\u5377","\u9810\u89BD\u7248",D,{x:0,y:3.15,z:0},"survey-label",{openInNewTab:!0,ariaLabel:"\u8B80\u8005\u554F\u5377\uFF0C\u958B\u555F\u554F\u5377\u9810\u89BD\uFF08\u65B0\u5206\u9801\uFF09"})),C}ge.forEach(S=>re(S));let Ke=[Ce(1,2),Ce(2,3),Ce(3,1)];Me(),$e(),[[.5,12.6],[2.6,12.2],[4.6,12.8]].forEach(([S,D],C)=>{let B=new ce;if(B.position.set(Math.cos(S)*D,.12,Math.sin(S)*D),B.rotation.y=S,p.add(B),C===1){let $=U(new St(.9,.18,.38),"#fff8f4");B.add($);let Q=U(new St(.92,.05,.4),"#db6a41");Q.position.y=.1,B.add(Q)}else{let $=U(new Vt(.14,.18,.28,8),C?"#db6a41":"#fcea8b");B.add($);let Q=U(new an(.08,.2,6),"#fff8f4");Q.position.y=.24,B.add(Q)}}),p.userData.bridges=Ke;function Z(S,D){let C=new ce;C.position.set(S,2.55,D);let B=U(new Vt(.045,.058,1.45,6),"#b8a07e");B.position.y=-.86;let $=U(new Re(.14,8,6),"#fff8f4",{emissive:"#ffe0a8",emissiveIntensity:.15,roughness:.55});$.scale.set(1,.78,1),$.material.userData.todManaged=!0;let Q=U(new an(.11,.09,6),"#db6a41");Q.position.y=.12,C.add(B,$,Q);let V=new zi("#ffb978",0,5.5,2);V.castShadow=!1,C.add(V),p.add(C),C.traverse(ut=>{ut.raycast=()=>{}}),F.push({light:V,shade:$.material,baseDistance:5.5})}ge.forEach(S=>{let D=ne[S];for(let C of[-.62,.62]){let B=D.angle+C;Z(D.x+Math.cos(B)*2.55,D.z+Math.sin(B)*2.55)}});let Ne={y:.22,period:115,ships:[{radius:13.62,phase:0,dir:1,stripe:"#45abbb",funnel:"#db6a41"},{radius:14.86,phase:Math.PI,dir:-1,stripe:"#db6a41",funnel:"#45abbb"}]},ye={roughness:.82,metalness:0};function ve(S,D){let C=new ce,B=($,Q,V,ut,x)=>{let I=U($,Q,ye);return I.position.set(V,ut,x),C.add(I),I};B(new St(.92,.07,3.28),"#c5b5a7",0,-.145,-.16),B(new St(1.02,.4,3.36),"#fff8f4",0,.06,-.12),B(new St(1.1,.055,3.3),S,0,-.02,-.14),B(new St(.78,.3,.42),"#fff8f4",0,.02,1.68),B(new St(.46,.18,.28),"#fff8f4",0,-.02,1.98),B(new St(.8,.045,.36),S,0,-.02,1.66),B(new St(.96,.08,2.42),"#e6d8c8",0,.3,-.28),B(new St(.72,.38,1.82),"#fff8f4",0,.53,-.42),B(new St(.62,.07,1.22),"#e6d8c8",0,.755,-.52),B(new St(.46,.22,.52),"#fff8f4",0,.9,-.12),B(new Vt(.1,.125,.58,6),D,0,1.07,-.86),B(new Vt(.15,.15,.08,6),"#fff8f4",0,1.39,-.86);for(let $ of[-1,1])for(let Q=0;Q<5;Q+=1)B(new St(.045,.09,.12),"#8fd3da",$*.532,.1,-1.12+Q*.46);return C.traverse($=>{$.raycast=()=>{}}),C}let Pt=Ne.ships.map(S=>({...S,group:ve(S.stripe,S.funnel)}));Pt.forEach(S=>p.add(S.group));function Ee(S,D){S.group.position.set(Math.cos(D)*S.radius,Ne.y,Math.sin(D)*S.radius),S.group.rotation.y=S.dir>0?-D:Math.PI-D}Pt.forEach(S=>Ee(S,S.phase));let Wt=null;function $t(S){if(o)return;Wt===null&&(Wt=S);let D=(S-Wt)/Ne.period*Math.PI*2;Pt.forEach(C=>Ee(C,C.phase+C.dir*D))}let P=2.75,y=bt.islandRadius-.1,j=(S,D)=>Math.atan2(ne[D].z-ne[S].z,ne[D].x-ne[S].x),xt=(S,D,C=P,B=1.1)=>new W(ne[S].x+Math.cos(D)*C,B,ne[S].z+Math.sin(D)*C);function pt(S,D,C){let B=C-D;for(;B>Math.PI;)B-=Math.PI*2;for(;B<-Math.PI;)B+=Math.PI*2;let $=Math.max(1,Math.ceil(Math.abs(B)/.25)),Q=[];for(let V=1;V<=$;V+=1)Q.push(xt(S,D+B*V/$));return Q}function Tt(S){let D=ge.filter(ut=>ut!==S.island&&!S.visited.has(ut));D.length||(S.visited=new Set([S.island]),D=ge.filter(ut=>ut!==S.island));let C=D[Math.floor(Math.random()*D.length)],B=j(S.island,C),$=j(C,S.island),Q=pt(S.island,S.angle,B);Q.push(xt(S.island,B,y,1.1)),Q.push(xt(C,$,y,1.1)),Q.push(xt(C,$));let V=$+(Math.random()<.5?-1:1)*(1.2+Math.random()*2.6);Q.push(...pt(C,$,V)),S.island=C,S.angle=V,S.visited.add(C),S.queue=Q,S.pause=1.2+Math.random()*2.5}function Rt(S,D,C){let B={mesh:S,island:D,angle:C,visited:new Set([D]),queue:[],pause:0,phase:Math.random()*6};return S.position.copy(xt(D,C)),S.rotation.y=-(C+Math.PI/2),B}let lt=[Rt(xe("\u5DF4\u54E5",{shirt:"#45abbb",vest:"#fcea8b",pants:"#211d1d",hair:"#6b4a33",hairCap:.42,hairTilt:0,bangs:!0}),1,j(1,2)-.9),Rt(xe("\u6F84\u745B"),3,j(3,2)+.9)],ht=.9,At=0;function O(S,D,C){if(S.pause>0)S.pause-=C;else{S.queue.length||Tt(S);let Q=ht*C;for(;Q>0&&S.queue.length;){let V=S.queue[0],ut=V.x-S.mesh.position.x,x=V.z-S.mesh.position.z,I=Math.hypot(ut,x);I>1e-4&&(S.mesh.rotation.y=-Math.atan2(x,ut)),I<=Q?(S.mesh.position.copy(V),S.queue.shift(),Q-=I):(S.mesh.position.x+=ut/I*Q,S.mesh.position.z+=x/I*Q,Q=0)}S.queue.length||(S.pause=1.2+Math.random()*2.5)}let B=S.pause<=0;S.mesh.position.y=1.1+(B?Math.abs(Math.sin(D*9+S.phase))*.05:0);let $=1+Math.sin(D*2.1+S.phase)*.035;S.mesh.userData.body.scale.set(1,$,1)}function dt(S,D){let C=At?Math.min(.1,D-At):0;O(S,D,C)}let ot=Math.max(bt.ringRadius+bt.islandRadius,Math.hypot(he.x,he.z)+he.radius),Ct=S=>Math.max(S<560?50:34,ot*(S<560?4.15:2.9));function wt(S){let C=S<560?4.6:0,B=Ct(S);gt.target.set(C,.85,0),E.position.set(C,B*.82,B*.58),gt.update()}let gt=new Rs(E,u.domElement);gt.enableDamping=!0,gt.dampingFactor=.07,gt.enablePan=!1,gt.enableZoom=!0,gt.enableRotate=!0,gt.rotateSpeed=.48,gt.zoomSpeed=.78,gt.minPolarAngle=25*Math.PI/180,gt.maxPolarAngle=70*Math.PI/180,gt.minDistance=22,gt.maxDistance=80,gt.target.set(0,.85,0),gt.autoRotate=!1,gt.autoRotateSpeed=.24,gt.addEventListener("start",()=>{gt.autoRotate&&(gt.autoRotate=!1,zt())});function zt(){r.disabled=!1,r.setAttribute("aria-pressed",String(!!gt.autoRotate)),r.textContent=gt.autoRotate?"\u66AB\u505C\u65CB\u8F49":"\u958B\u59CB\u65CB\u8F49"}zt();function ie(){gt.autoRotate=!gt.autoRotate,zt()}r.addEventListener("click",ie);function Mt(){wt(e.getBoundingClientRect().width)}a.addEventListener("click",Mt);function Gt(){let S=e.getBoundingClientRect(),D=Math.max(1,S.width),C=Math.max(1,S.height),B=D<560;p.userData.mobileLayout!==B&&(p.rotation.y=B?Math.PI/2:0,p.userData.mobileLayout=B),E.aspect=D/C,E.updateProjectionMatrix(),u.setSize(D,C,!1),R.uniforms.resolution.value.set(u.domElement.width,u.domElement.height),d.setSize(D,C),wt(D)}let Kt=null;window.ResizeObserver?(Kt=new ResizeObserver(Gt),Kt.observe(e)):window.addEventListener("resize",Gt),Gt();let Et=null,Bt=null,we=new Gi,nn=new kt;function ai(S,D){let C=u.domElement.getBoundingClientRect();nn.x=(S-C.left)/C.width*2-1,nn.y=-((D-C.top)/C.height)*2+1,we.setFromCamera(nn,E);let B=we.intersectObjects(N,!1);for(let $ of B){let Q=$.object.userData.interactiveRoot,V=$.object.userData.route;if(Q&&V)return{root:Q,route:V}}return null}function Ln(S,D){S&&S.traverse(C=>{if(!C.isMesh)return;let B=Array.isArray(C.material)?C.material:[C.material];for(let $ of B){if(!$||!$.emissive||$.userData.todManaged)continue;let Q=$.userData.originalEmissive||0;$.emissive.setHex(D?4668181:Q)}})}u.domElement.addEventListener("pointerdown",S=>{Et={x:S.clientX,y:S.clientY,pointerId:S.pointerId}},{passive:!0}),u.domElement.addEventListener("pointermove",S=>{if(Et&&(Math.abs(S.clientX-Et.x)>6||Math.abs(S.clientY-Et.y)>6))return;let D=ai(S.clientX,S.clientY),C=D&&D.root;C!==Bt&&(Ln(Bt,!1),Bt=C,Ln(Bt,!0)),u.domElement.style.cursor=D?"pointer":Et?"grabbing":"grab"},{passive:!0}),u.domElement.addEventListener("pointerup",S=>{if(!Et||Et.pointerId!==S.pointerId)return;let D=Math.hypot(S.clientX-Et.x,S.clientY-Et.y);if(Et=null,u.domElement.style.cursor="grab",D>6)return;let C=ai(S.clientX,S.clientY);C&&(Ln(C.root,!0),Hn(C.root,C.route))},{passive:!0}),u.domElement.addEventListener("pointercancel",()=>{Et=null},{passive:!0}),u.domElement.addEventListener("webglcontextlost",S=>{K||(S.preventDefault(),f("3D \u5716\u5F62\u66AB\u6642\u4E2D\u65B7\uFF1B\u8ACB\u6539\u7528\u6587\u7A3F\u5C0E\u89BD\u3002\u82E5\u5C0E\u89BD\u5DF2\u6536\u5408\uFF0C\u6309\u4E0A\u65B9\u300C\u986F\u793A\u5C0E\u89BD\u300D\u3002"))});let Xe=null;function Hn(S,D){if(S.userData.openInNewTab){window.open(D,"_blank","noopener,noreferrer");return}if(o){location.href=D;return}let C=new W;S.getWorldPosition(C),Xe={t0:performance.now(),dur:650,route:D,fromPos:E.position.clone(),fromTarget:gt.target.clone(),toTarget:C.clone().setY(1),toPos:C.clone().add(E.position.clone().sub(gt.target).setLength(16))},gt.autoRotate=!1,zt()}let Oe={day:{sky:["#c5dff0","#e8f2f7","#f3ebe3"],fog:"#edddcf",fogNear:48,fogFar:110,hemiSky:"#fff8f4",hemiGround:"#c5b5a7",hemiI:1.9,sun:"#ffe9cf",sunI:3,sunPos:[-8,18,12],castShadow:!0,fill:"#cfe4f2",fillI:.9,fillPos:[12,8,-10],amb:"#ffc090",ambI:0,exposure:1,sea:"#45abbb",seaEmissive:0,shallow:"#8fd3da",shallowOp:.7,win:0,lantern:.5,lampI:0,lampReach:1,lampColor:"#ffb978",bulbE:.15},dusk:{sky:["#7a9ec4","#c9a48a","#e8b89a"],fog:"#d9a882",fogNear:40,fogFar:95,hemiSky:"#f5c49a",hemiGround:"#8a6a55",hemiI:1.1,sun:"#ff9a5c",sunI:1.35,sunPos:[-14,6,8],castShadow:!0,fill:"#6a7ea0",fillI:.45,fillPos:[10,5,-12],amb:"#ffc090",ambI:.15,exposure:.92,sea:"#3f6f86",seaEmissive:.35,shallow:"#c9a48a",shallowOp:.55,win:.15,lantern:1.2,lampI:.55,lampReach:1.45,lampColor:"#ffb978",bulbE:.9},night:{sky:["#1e2a3a","#2a3545","#3a3340"],fog:"#2c3a4e",fogNear:58,fogFar:150,hemiSky:"#6d7fa0",hemiGround:"#3e4c62",hemiI:1.15,sun:"#c5d4ee",sunI:.72,sunPos:[6,22,-10],castShadow:!1,fill:"#7d8eaa",fillI:.55,fillPos:[-10,8,6],amb:"#516078",ambI:.38,exposure:1.05,sea:"#1c3344",seaEmissive:.42,shallow:"#2a4558",shallowOp:.55,win:.7,lantern:2.6,lampI:5.2,lampReach:2.6,lampColor:"#ffd6a0",bulbE:1.8}},sn=new ee,Gn=new ee,kn=new W,oi=new W,de=(S,D,C)=>S+(D-S)*C,je=S=>{let D=Math.min(1,Math.max(0,S));return D*D*(3-2*D)};function qe(S,D,C,B){sn.set(D),Gn.set(C),S.copy(sn).lerp(Gn,B)}function yn(S,D){let C=parseInt(String(S).replace("#",""),16);return D.set((C>>16&255)/255,(C>>8&255)/255,(C&255)/255)}function li(S,D,C,B){yn(D,kn),yn(C,oi),S.copy(kn).lerp(oi,B)}function Vn(S){let D=C=>Math.round(Math.min(255,Math.max(0,C*255))).toString(16).padStart(2,"0");return`#${D(S.x)}${D(S.y)}${D(S.z)}`}function Dn(S,D,C,B){li(R.uniforms.top.value,S.sky[0],D.sky[0],C),li(R.uniforms.mid.value,S.sky[1],D.sky[1],C),li(R.uniforms.bottom.value,S.sky[2],D.sky[2],C),qe(m.background,S.sky[2],D.sky[2],C),qe(m.fog.color,S.fog,D.fog,C),m.fog.near=de(S.fogNear,D.fogNear,C),m.fog.far=de(S.fogFar,D.fogFar,C),qe(v.color,S.hemiSky,D.hemiSky,C),qe(v.groundColor,S.hemiGround,D.hemiGround,C),v.intensity=de(S.hemiI,D.hemiI,C),qe(T.color,S.sun,D.sun,C),T.intensity=de(S.sunI,D.sunI,C),T.position.set(de(S.sunPos[0],D.sunPos[0],C),de(S.sunPos[1],D.sunPos[1],C),de(S.sunPos[2],D.sunPos[2],C)),T.castShadow=C<.5?S.castShadow:D.castShadow,qe(w.color,S.fill,D.fill,C),w.intensity=de(S.fillI,D.fillI,C),w.position.set(de(S.fillPos[0],D.fillPos[0],C),de(S.fillPos[1],D.fillPos[1],C),de(S.fillPos[2],D.fillPos[2],C)),qe(L.color,S.amb,D.amb,C),L.intensity=de(S.ambI,D.ambI,C),u.toneMappingExposure=de(S.exposure,D.exposure,C),qe(b.material.color,S.sea,D.sea,C),qe(b.material.emissive,S.sea,D.sea,C),b.material.emissiveIntensity=de(S.seaEmissive,D.seaEmissive,C),et.forEach(V=>{qe(V.color,S.shallow,D.shallow,C),V.emissive&&qe(V.emissive,S.shallow,D.shallow,C),V.emissive&&(V.emissiveIntensity=de(S.seaEmissive*.45,D.seaEmissive*.45,C)),V.opacity=de(S.shallowOp,D.shallowOp,C)});let $=de(S.win,D.win,C);J.forEach(V=>{V.emissive.set("#fcea8b"),V.emissiveIntensity=$});let Q=de(S.lantern,D.lantern,C);st.forEach(V=>{V.emissive.set("#fcea8b"),V.emissiveIntensity=Q}),F.forEach((V,ut)=>{let x=B(ut),I=S.lamps&&S.lamps[ut];V.light.intensity=de(I?I.intensity:S.lampI,D.lampI,x),V.baseDistance&&(V.light.distance=V.baseDistance*de(S.lampReach||1,D.lampReach||1,x)),qe(V.light.color,I?I.color:S.lampColor,D.lampColor,x),V.shade.emissive.set("#ffe0a8"),V.shade.emissiveIntensity=de(I?I.emissive:S.bulbE,D.bulbE,x)})}function Zi(){return{sky:[Vn(R.uniforms.top.value),Vn(R.uniforms.mid.value),Vn(R.uniforms.bottom.value)],fog:"#"+m.fog.color.getHexString(),fogNear:m.fog.near,fogFar:m.fog.far,hemiSky:"#"+v.color.getHexString(),hemiGround:"#"+v.groundColor.getHexString(),hemiI:v.intensity,sun:"#"+T.color.getHexString(),sunI:T.intensity,sunPos:[T.position.x,T.position.y,T.position.z],castShadow:T.castShadow,fill:"#"+w.color.getHexString(),fillI:w.intensity,fillPos:[w.position.x,w.position.y,w.position.z],amb:"#"+L.color.getHexString(),ambI:L.intensity,exposure:u.toneMappingExposure,sea:"#"+b.material.color.getHexString(),seaEmissive:b.material.emissiveIntensity,shallow:et.length?"#"+et[0].color.getHexString():"#8fd3da",shallowOp:et.length?et[0].opacity:.7,win:J.length?J[0].emissiveIntensity:0,lantern:st.length?st[0].emissiveIntensity:.5,lampI:F.length?F[0].light.intensity:0,lampReach:F.length&&F[0].baseDistance?F[0].light.distance/F[0].baseDistance:1,lampColor:F.length?"#"+F[0].light.color.getHexString():"#ffb978",bulbE:F.length?F[0].shade.emissiveIntensity:.15,lamps:F.map(S=>({intensity:S.light.intensity,color:"#"+S.light.color.getHexString(),emissive:S.shade.emissiveIntensity}))}}function _e(){try{let S=localStorage.getItem("homeSkyTod");if(S==="dusk"||S==="night")return S}catch{}return"day"}let Wn=_e(),Se=null;function M(S){if(S!=="day"&&S!=="dusk"&&S!=="night"||S===Wn&&!Se)return;let D=Zi();if(Wn=S,document.body.classList.remove("tod-day","tod-dusk","tod-night"),document.body.classList.add(`tod-${S}`),o){Dn(D,Oe[S],1,()=>1),Se=null;return}Se={from:D,to:Oe[S],t0:performance.now()}}Dn(Oe[Wn],Oe[Wn],1,()=>1);function H(S){M(S.detail)}window.addEventListener("home-sky-tod",H),t.hidden=!0;let it=0,K=!1;function tt(){if(K)return;it=window.requestAnimationFrame(tt);let S=performance.now();if(Xe){let Q=Math.min(1,(S-Xe.t0)/Xe.dur),V=1-Math.pow(1-Q,3);if(E.position.lerpVectors(Xe.fromPos,Xe.toPos,V),gt.target.lerpVectors(Xe.fromTarget,Xe.toTarget,V),Q>=1){let ut=Xe.route;Xe=null,location.href=ut}}if(Se){let Q=(S-Se.t0)/1e3,V=je(Math.min(1,Q/.45)),ut=x=>je(Math.min(1,Math.max(0,(Q-x*.1)/.8)));Dn(Se.from,Se.to,V,ut),Q>=.8+Math.max(0,F.length-1)*.1&&(Dn(Se.from,Se.to,1,()=>1),Se=null)}if(_.position.copy(E.position),!o){let Q=S/1e3;lt.forEach(V=>dt(V,Q)),$t(Q),At=Q}let D=E.position.distanceTo(gt.target),C=D<26?1:Math.max(.78,1-(D-26)/60);lt.forEach(Q=>{let V=Q.mesh.userData.tag;V&&(V.style.opacity="1",V.style.setProperty("--tag-scale",C.toFixed(2)))});let B=E.position.distanceTo(gt.target),$=B<56?"1":B<72?"0.5":"0";$!==p.userData.catOpacity&&(p.userData.catOpacity=$,document.querySelectorAll(".island-label.cat-label").forEach(Q=>{Q.style.opacity=$,Q.style.pointerEvents=$==="0"?"none":"auto"})),gt.update(),u.render(m,E),d.render(m,E)}return tt(),function(){K||(K=!0,window.cancelAnimationFrame(it),Kt&&Kt.disconnect(),window.removeEventListener("resize",Gt),window.removeEventListener("home-sky-tod",H),r.removeEventListener("click",ie),a.removeEventListener("click",Mt),gt.dispose(),m.traverse(D=>{D.geometry&&D.geometry.dispose(),(D.material?Array.isArray(D.material)?D.material:[D.material]:[]).forEach(B=>{B&&B.dispose&&B.dispose()})}),u.dispose(),u.forceContextLoss(),u.domElement.remove(),d.domElement.parentNode&&d.domElement.remove())}}function Nh(i){let t=i.status,e=i.stage,n=i.canvasHost,s=i.labelHost,r=i.rotateButton,a=i.resetButton,o=i.reducedMotion,l=i.data,c=i.months,h=i.latest,g=(x,I={})=>{let A=new URLSearchParams({month:x});return I.group!==void 0&&A.set("group",String(I.group)),I.category&&A.set("category",I.category),`month.html?${A.toString()}`};function f(x){t.textContent=x,t.hidden=!1,r.disabled=!0,r.setAttribute("aria-pressed","false"),r.textContent="3D \u65CB\u8F49\u672A\u555F\u7528",a.disabled=!0}a.disabled=!1;let u;try{u=new Ts({antialias:!0,alpha:!1,powerPreference:"low-power"})}catch{return f("3D \u5834\u666F\u7121\u6CD5\u555F\u52D5\uFF1B\u6587\u7A3F\u5C0E\u89BD\u4ECD\u53EF\u5B8C\u6574\u4F7F\u7528\u3002\u82E5\u5C0E\u89BD\u5DF2\u6536\u5408\uFF0C\u6309\u4E0A\u65B9\u300C\u986F\u793A\u5C0E\u89BD\u300D\u3002"),()=>{}}let m=new Di;m.background=new ee("#f3ebe3"),m.fog=new Li("#edddcf",48,110);let E=new ke(32,1,.1,240),p=new ce;m.add(p),u.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6)),u.shadowMap.enabled=!0,u.shadowMap.type=ni,u.outputColorSpace=Ye,u.toneMapping=Wi,u.toneMappingExposure=1,u.domElement.setAttribute("aria-hidden","true"),u.domElement.setAttribute("role","presentation"),n.appendChild(u.domElement);let d=new Is;d.domElement.style.position="absolute",d.domElement.style.inset="0",d.domElement.style.overflow="visible",d.domElement.style.pointerEvents="none",s.appendChild(d.domElement);let v=new Bi("#fff8f4","#c5b5a7",1.9);m.add(v);let L=new Hi("#ffc090",0);m.add(L);let w=new ei("#cfe4f2",.9);w.position.set(12,8,-10),m.add(w);let T=new ei("#ffe9cf",3);T.position.set(-8,18,12),T.castShadow=!0,T.shadow.mapSize.set(1024,1024),T.shadow.camera.left=-36,T.shadow.camera.right=36,T.shadow.camera.top=36,T.shadow.camera.bottom=-36,T.shadow.camera.near=.5,T.shadow.camera.far=80,T.shadow.bias=-45e-5,T.shadow.normalBias=.04,T.target.position.set(0,6.5,0),m.add(T,T.target),T.shadow.camera.updateProjectionMatrix();let R=new ln({side:bn,depthWrite:!1,toneMapped:!1,uniforms:{top:{value:new W(197/255,223/255,240/255)},mid:{value:new W(232/255,242/255,247/255)},bottom:{value:new W(243/255,235/255,227/255)},resolution:{value:new kt(1,1)}},vertexShader:"void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 mid; uniform vec3 bottom; uniform vec2 resolution; void main(){ float y = clamp(gl_FragCoord.y / max(resolution.y, 1.0), 0.0, 1.0); vec3 col = y < 0.5 ? mix(bottom, mid, y * 2.0) : mix(mid, top, (y - 0.5) * 2.0); gl_FragColor = vec4(col, 1.0); }"}),_=new Le(new Re(180,28,18),R);_.frustumCulled=!1,_.renderOrder=-10,m.add(_);let b=[],z=new Set,N=[],k=[],J=[],st=[],F=[],et=[],ct={land:["#e6d8c8","#d3c4aa","#f4ece4"],soil:["#c5b5a7","#b8a07e","#c5b5a7","#b8a07e"],roof:["#db6a41","#e08a5f","#c9583a"],building:["#fff8f4","#f4ebdd","#fffdf9"],ink:"#211d1d"},at={\u6587\u7A3F:"#db6a41",\u526A\u5F71:"#e6a15a",\u8A69\u8A5E:"#45abbb",\u89AA\u5B50\u5712\u5730:"#e9c46a",\u5C01\u5E95:"#c9583a",\u5F85\u5206\u985E:"#78685e"};function vt(x,I={}){return new ti({roughness:.8,metalness:0,flatShading:!0,...I,color:x})}function U(x,I,A={}){let G=new Le(x,vt(I,A));return G.castShadow=!0,G.receiveShadow=!0,G}function mt(x,I,A,G,nt="",q={}){let Y=document.createElement("a");Y.className=`island-label ${nt}`.trim(),Y.href=A,nt.includes("group-label")&&(Y.dataset.num=(x.match(/\d+/)||[""])[0]),q.openInNewTab&&(Y.target="_blank",Y.rel="noopener noreferrer");let X=q.ariaLabel||(I?`${x}\uFF0C${I}\uFF0C\u958B\u555F\u5BE9\u7A3F\u9801`:`${x}\uFF0C\u958B\u555F\u5BE9\u7A3F\u9801`);Y.setAttribute("aria-label",X);let rt=document.createElement("span");if(rt.textContent=x,Y.appendChild(rt),I){let Nt=document.createElement("small");Nt.textContent=I,Y.appendChild(Nt)}let Dt=new Ti(Y);return Dt.position.set(G.x,G.y,G.z),Dt}function yt(x,I){x.userData.route=I,x.traverse(A=>{if(!A.isMesh)return;A.userData.route=I,A.userData.interactiveRoot=x;let G=Array.isArray(A.material)?A.material:[A.material];for(let nt of G)nt&&nt.emissive&&(nt.userData.originalEmissive=nt.emissive.getHex());b.push(A)}),z.add(x)}function Ht(x,I,A,G,nt,q,Y=1,X="",rt=0,Dt=G){let Nt=new ce;Nt.position.set(I,1.1,A),x.add(Nt);let _t=U(new St(.98*Y,.16*Y,.82*Y),"#f4ebdd");_t.position.y=.08*Y,Nt.add(_t);let qt=ct.building.length,Ot=((G.length+Math.round(I*10))%qt+qt)%qt,jt=U(new St(.72*Y,.76*Y,.62*Y),ct.building[Ot]);jt.position.y=.52*Y,Nt.add(jt);let Te=U(new an(.62*Y,.54*Y,4,1),q);Te.position.y=1.15*Y,Te.rotation.y=Math.PI/4,Nt.add(Te);let fe=U(new St(.19*Y,.34*Y,.045*Y),"#78685e",{roughness:.9});fe.position.set(0,.28*Y,.33*Y),Nt.add(fe);for(let so of[-1,1]){let Ai=U(new St(.13*Y,.14*Y,.04*Y),"#8fd3da",{roughness:.6,emissive:"#fcea8b",emissiveIntensity:0});Ai.position.set(so*.22*Y,.64*Y,.33*Y),Ai.material.userData.todManaged=!0,N.push(Ai.material),Nt.add(Ai)}let Ie=U(new St(.86*Y,.06*Y,.76*Y),"#f4ebdd");Ie.position.y=.92*Y,Nt.add(Ie);let un=U(new St(.34*Y,.04*Y,.16*Y),q);un.position.set(0,.5*Y,.38*Y),un.rotation.x=.35,Nt.add(un);let Ps=U(new St(.3*Y,.06*Y,.14*Y),"#c5b5a7");Ps.position.set(0,.19*Y,.42*Y),Nt.add(Ps);for(let so of[-1,1]){let Ai=U(new St(.17*Y,.03*Y,.06*Y),"#fff8f4");Ai.position.set(so*.22*Y,.56*Y,.34*Y),Nt.add(Ai)}ft(Nt,G.replace("\u2026",""),Y,q),Nt.rotation.y=-Math.atan2(A,I)+Math.PI/2,yt(Nt,nt);let Pl=mt(G,X,nt,{x:0,y:1.9*Y+rt,z:0},"cat-label");return Pl.element.title=Dt+(X?`\uFF08${X}\uFF09`:""),Nt.add(Pl),Nt}function Jt(x,I,A,G=1,nt="#9fbf8f"){let q=new ce;q.position.set(I,1.05,A),x.add(q);let Y=U(new Vt(.08*G,.12*G,.55*G,5),"#a77a55");Y.position.y=.28*G,q.add(Y);let X=U(new Sn(.44*G,0),nt);X.position.y=.78*G,q.add(X);let rt=U(new Sn(.31*G,0),"#b7cf9f");rt.position.set(.12*G,1.02*G,.04*G),q.add(rt)}function ft(x,I,A,G){let nt=(q,Y,X,rt,Dt,Nt=0)=>{let _t=U(q,Y);return _t.position.set(X*A,rt*A,Dt*A),_t.rotation.y=Nt,x.add(_t),_t};if(I.startsWith("\u6587\u7A3F"))nt(new St(.5,.14,.04),"#211d1d",0,1.5,.05),nt(new St(.44,.09,.05),"#fcea8b",0,1.5,.08),nt(new St(.3,.4,.14),"#a77a55",.55,.4,.2),["#db6a41","#45abbb","#fcea8b","#78685e"].forEach((q,Y)=>nt(new St(.05,.13,.1),q,.46+Y*.06,.5,.26));else if(I.startsWith("\u526A\u5F71")){nt(new St(.36,.05,.36),"#b48560",.62,.62,.1);for(let[Y,X]of[[-1,-1],[1,-1],[-1,1],[1,1]])nt(new Vt(.025,.025,.6,5),"#a77a55",.62+Y*.15,.3,.1+X*.15);nt(new St(.16,.11,.1),"#211d1d",.62,.72,.1);let q=nt(new Vt(.04,.04,.08,8),"#8fd3da",.62,.72,.18);q.rotation.x=Math.PI/2}else if(I.startsWith("\u8A69\u8A5E")){nt(new St(.18,.42,.08),"#c5b5a7",.58,.29,.25),nt(new St(.24,.06,.12),"#b8a07e",.58,.1,.25);for(let q of[-1,1])nt(new Vt(.025,.025,.42,5),"#db6a41",-.62+q*.13,.29,.25);nt(new an(.24,.16,6),G,-.62,.58,.25)}else if(I.startsWith("\u89AA\u5B50")){for(let q of[-1,1]){let Y=nt(new Vt(.02,.02,.5,5),"#db6a41",.62+q*.18,.25,.25);Y.rotation.z=q*.12}nt(new Vt(.02,.02,.4,5),"#db6a41",.62,.5,.25).rotation.z=Math.PI/2,nt(new St(.12,.02,.07),"#fcea8b",.62,.22,.25),nt(new St(.34,.06,.34),"#f4ece4",-.6,.1,.3),nt(new Re(.06,6,4),"#45abbb",-.6,.16,.3)}else if(I.startsWith("\u5C01\u5E95")){for(let q of[-1,1])nt(new Vt(.025,.025,.55,5),"#a77a55",.6+q*.2,.27,.3);nt(new St(.46,.3,.04),"#fff8f4",.6,.45,.3),["#db6a41","#fcea8b","#8fd3da"].forEach((q,Y)=>nt(new St(.1,.12,.01),q,.46+Y*.14,.46,.33))}}let It={rock:new Sn(.16,0),bush:new Fi(.16,0),flower:new Re(.05,5,4),stone:new Vt(.16,.18,.04,6)};function Ft(x,I){let A=new _s({color:x,transparent:!0,opacity:I,depthWrite:!1,toneMapped:!1});return A.userData.todManaged=!0,A}let Lt={nearLit:vt("#fff8f4",{flatShading:!0,transparent:!0,opacity:.92,roughness:.9}),nearShade:vt("#d5e3ee",{flatShading:!0,transparent:!0,opacity:.92,roughness:.9}),farLit:Ft("#fff8f4",.9),farShade:Ft("#d5e3ee",.88),disc:Ft("#f3ebe3",.97)};Lt.nearLit.userData.todManaged=!0,Lt.nearShade.userData.todManaged=!0;function bt(x,I,A,G,nt,q,Y,X){let rt=new Le(new Sn(1,0),I);return rt.position.set(A,G,nt),rt.scale.set(q,Y,X),rt.castShadow=!1,rt.receiveShadow=!1,x.add(rt),rt}function Yt(x,I,A,G,nt,q,Y=1,X=0){let rt=U(I,A);return rt.position.set(G,nt,q),rt.scale.setScalar(Y),rt.rotation.y=X,rt.castShadow=Y>.6,x.add(rt),rt}function ge(x,I,A,G){let nt=se.islandRadius,q=(_t,qt)=>({x:Math.cos(_t)*qt,z:Math.sin(_t)*qt}),Y=_t=>{let qt=Math.sin(I*91.7+_t*12.9)*43758.5;return qt-Math.floor(qt)};for(let _t=0;_t<7;_t+=1){let qt=q(A+_t*.9+Y(_t),nt*(.9+Y(_t+3)*.12)),Ot=U(new Vt(.55+Y(_t)*.35,.7+Y(_t)*.35,.7+Y(_t+1)*.25,6),_t%2?"#c5b5a7":"#b8a07e");Ot.position.set(qt.x,.36,qt.z),Ot.rotation.y=Y(_t+9)*3,x.add(Ot);let jt=U(new Vt(.5+Y(_t)*.3,.55+Y(_t)*.3,.12,6),Ce[I]);jt.position.set(qt.x,.72+Y(_t+1)*.12,qt.z),jt.rotation.y=Ot.rotation.y,x.add(jt)}Me.filter(_t=>_t!==I).forEach(_t=>{let qt=Math.atan2(he[_t].z-he[I].z,he[_t].x-he[I].x);for(let Ot=.5;Ot<nt-.1;Ot+=.42){let jt=q(qt+Math.sin(Ot*2)*.06,Ot);Yt(x,It.stone,"#f4ebdd",jt.x,1.13,jt.z,1,Ot)}});let X=A+Math.PI,rt=200*Math.PI/180,Dt=[[X,1.3,.6],[X+.35,2.4,.5],[X-.35,2.5,.45]];for(let _t=0;_t<Math.max(1,G.length-1);_t+=1){let qt=G.length<2?A+.6:A-rt/2+rt*(_t+.5)/(G.length-1);Dt.push([qt,3,.4+Y(_t+20)*.2])}Dt.slice(0,6).forEach(([_t,qt,Ot],jt)=>{let Te=q(_t,qt);Jt(x,Te.x,Te.z,Ot,jt%2?"#9fbf8f":"#8db07c")});let Nt=["#db6a41","#fcea8b","#fff8f4","#e6a15a"];for(let _t=0;_t<6;_t+=1){let qt=q(X+(_t-2.5)*.28,1.9+Y(_t+30)*.9);Yt(x,It.bush,_t%2?"#a9c796":"#8db07c",qt.x,1.16,qt.z,.9+Y(_t)*.5);for(let Ot=0;Ot<3;Ot+=1)Yt(x,It.flower,Nt[(_t+Ot)%4],qt.x+(Ot-1)*.12,1.3,qt.z+Y(_t+Ot)*.14-.07,1)}for(let _t=0;_t<3;_t+=1){let qt=q(A+(_t-1)*1.6+.4,nt*.86);Yt(x,It.rock,"#c5b5a7",qt.x,1.16,qt.z,.9+Y(_t+40)*.6,Y(_t)*3)}}function Xt(x,I,A){let G=new ce;x.add(G),F.push(G),[{y:-.3,rt:A*.92,rb:A*.68,h:.7,color:"#c5b5a7"},{y:-1,rt:A*.68,rb:A*.42,h:.7,color:"#b8a07e"},{y:-1.7,rt:A*.42,rb:A*.16,h:.7,color:"#9a8b7a"}].forEach(Y=>{let X=U(new Vt(Y.rt,Y.rb,Y.h,7,1),Y.color);X.position.y=Y.y,G.add(X),X.userData.route=I,X.userData.interactiveRoot=x,X.material.userData.originalEmissive=X.material.emissive.getHex(),b.push(X)});let q=U(new St(.22,.95,.22),"#9a8b7a");return q.position.set(.42,-2.35,.12),q.rotation.z=.16,q.rotation.x=-.08,G.add(q),bt(G,Lt.nearLit,0,-1.22,0,A*.82,.36,A*.7),bt(G,Lt.nearShade,A*.36,-1.02,A*.1,A*.46,.26,A*.38),bt(G,Lt.nearLit,-A*.34,-1.1,-A*.16,A*.42,.24,A*.36),bt(G,Lt.nearShade,.08,-1.38,A*.28,A*.34,.2,A*.28),G}let se={islandRadius:3.4,buildingRing:2.15,hubRadius:1.55,walkRadius:3.08},ne={1:{c:[0,5.4,-8],deckY:6.5,angle:-1.570796},2:{c:[6.9282,7.1,4],deckY:8.2,angle:.523599},3:{c:[-6.9282,4.3,4],deckY:5.4,angle:2.617994}},re=[{a:1,b:2,p0:[1.7,6.5,-5.0555],p1:[5.2282,8.2,1.0555]},{a:2,b:3,p0:[3.5282,8.2,4],p1:[-3.5282,5.4,4]},{a:3,b:1,p0:[-5.2282,5.4,1.0555],p1:[-1.7,6.5,-5.0555]}],Ce={1:"#e6d8c8",2:"#d3c4aa",3:"#f4ece4"},Me=[1,2,3],Fe=h.groupCategories&&typeof h.groupCategories=="object"?h.groupCategories:{},xe=x=>{let I=(h.groups||[]).find(A=>Number(A.id)===x);return I&&Number(I.count)||0},he={};Me.forEach(x=>{let I=ne[x];he[x]={x:I.c[0],y:I.c[1],z:I.c[2],angle:I.angle,deckY:I.deckY}});function De(x){let I=he[x],A=se.islandRadius,G=new ce;G.position.set(I.x,I.y,I.z),p.add(G);let nt=U(new Vt(A*.97,A*1.1,.58,9,1),x%2?"#c5b5a7":"#b8a07e");nt.position.y=.34;let q=U(new Vt(A*.98,A*1.02,.28,9,1),"#f4ebdd");q.position.y=.74;let Y=U(new Vt(A,A*1.01,.24,9,1),Ce[x]);Y.position.y=.99,G.add(nt,q,Y);let X=g(h.key,{group:x});G.userData.route=X;for(let _t of[nt,q,Y])_t.userData.route=X,_t.userData.interactiveRoot=G,_t.material.userData.originalEmissive=_t.material.emissive.getHex(),b.push(_t);z.add(G),G.add(mt(`\u7B2C ${x} \u7D44`,`${xe(x)} \u7BC7 \xB7 ${h.month} \u6708`,X,{x:0,y:4.35,z:0},"group-label"));let rt=Array.isArray(Fe[String(x)])?Fe[String(x)]:[];rt.length||(rt=(h.categories||[]).map(_t=>({name:_t.name,count:null})));let Dt=I.angle,Nt=200*Math.PI/180;return rt.forEach((_t,qt)=>{let Ot=rt.length===1?Dt:Dt-Nt/2+Nt*qt/(rt.length-1),jt={x:Math.cos(Ot)*se.buildingRing,z:Math.sin(Ot)*se.buildingRing},Te=_t.count===null||_t.count===void 0?"":`${_t.count} \u7BC7`;Ht(G,jt.x,jt.z,_t.name.length>4?_t.name.slice(0,4)+"\u2026":_t.name,g(h.key,{group:x,category:_t.name}),at[_t.name]||"#777f6d",.62,Te,.18+qt%5*.28,_t.name)}),ge(G,x,Dt,rt),Xt(G,X,A),G}function Je(x){let I=new W(x.p0[0],x.p0[1],x.p0[2]),A=new W(x.p1[0],x.p1[1],x.p1[2]),G=new W().subVectors(A,I),nt=G.length(),q=G.clone().normalize(),Y=new W().crossVectors(q,new W(0,1,0));Y.lengthSq()<1e-8&&Y.set(0,0,1),Y.normalize();let X=new W().crossVectors(Y,q).normalize(),rt=new ce;rt.position.copy(I).add(A).multiplyScalar(.5),rt.quaternion.setFromRotationMatrix(new me().makeBasis(q,X,Y)),p.add(rt);let Dt=Math.max(3,Math.ceil(nt/.48));for(let Nt=0;Nt<Dt;Nt+=1){let _t=U(new St(nt/Dt-.045,.12,.62),Nt%2?"#b48560":"#a77a55");_t.position.set(-nt/2+(Nt+.5)*(nt/Dt),-.06,0),rt.add(_t)}for(let Nt of[-1,1]){let _t=U(new St(nt,.08,.05),Nt>0?"#db6a41":"#ffffff");_t.position.set(0,.16,Nt*.33),rt.add(_t);let qt=Math.max(6,Math.ceil(nt/.5));for(let fe=0;fe<=qt;fe+=1){let Ie=U(new St(.08,.36,.08),"#fff8f4");Ie.position.set(-nt/2+fe*nt/qt,.08,Nt*.33),rt.add(Ie)}let Ot=U(new St(nt,.04,.04),"#f4ebdd");Ot.position.set(0,.02,Nt*.33),rt.add(Ot);let jt=U(new Vt(.03,.035,.75,5),"#211d1d");jt.position.set(Nt*nt*.25,.36,Nt*.38),rt.add(jt);let Te=U(new St(.14,.16,.14),"#fcea8b",{emissive:"#fcea8b",emissiveIntensity:.5,roughness:.6});Te.position.set(Nt*nt*.25,.8,Nt*.38),Te.material.userData.todManaged=!0,k.push(Te.material),rt.add(Te)}return x}function $e(){let x=new ce;x.position.set(0,4,0),p.add(x);let I=new ce;x.add(I),F.push(I),bt(I,Lt.nearLit,0,-.15,0,1.45,.42,1.2),bt(I,Lt.nearShade,.15,-1.05,.05,.85,.55,.72),bt(I,Lt.nearLit,-.05,-1.9,-.05,.5,.62,.46);let A=U(new Vt(se.hubRadius,se.hubRadius*1.08,.42,7,1),"#b8a07e");A.position.y=.28;let G=U(new Vt(se.hubRadius*.95,se.hubRadius,.18,7,1),"#f4ece4");G.position.y=.55,x.add(A,G);let nt=U(new Vt(.22,.3,1.15,6),"#fff8f4");nt.position.y=1.22;let q=U(new an(.4,.46,6),"#db6a41");q.position.y=2.02,x.add(nt,q);let Y=g(h.key);x.userData.route=Y;for(let rt of[A,G,nt,q])rt.userData.route=Y,rt.userData.interactiveRoot=x,rt.material.userData.originalEmissive=rt.material.emissive.getHex(),b.push(rt);let X=Number(l.totalEntries)||c.reduce((rt,Dt)=>rt+Number(Dt.entries||0),0);x.add(mt("\u6708\u4EFD\u7E3D\u89BD",`${h.label} ${h.entries} \u7BC7 \xB7 \u5168\u90E8 ${X} \u7BC7`,Y,{x:0,y:3.35,z:0},"hub-label"))}function Ke(x,I,A){let G=document.createElement("span");G.className="resident-label",G.textContent=I;let nt=document.createElement("div");nt.style.pointerEvents="none",nt.appendChild(G);let q=new Ti(nt);q.position.set(0,A,0),x.add(q),x.userData.tag=G}function Z(x,I={}){let A={pants:"#78685e",shirt:"#fff8f4",vest:"#db6a41",hair:"#2e2522",hairCap:.58,hairTilt:-.25,bangs:!1,...I},G=new ce,nt=U(new Vt(.09,.1,.22,6),A.pants);nt.position.y=.11;let q=U(new Ui(.16,.24,3,8),A.shirt);q.position.y=.42;let Y=U(new Vt(.175,.19,.2,8,1,!0),A.vest);Y.position.y=.44;let X=U(new Re(.24,12,10),"#f3cfae");X.position.y=.9;let rt=U(new Re(.262,12,10,0,Math.PI*2,0,Math.PI*A.hairCap),A.hair);if(rt.position.y=.92,rt.rotation.z=A.hairTilt,G.add(nt,q,Y,X,rt),A.bangs){let Dt=U(new St(.1,.06,.34),A.hair);Dt.position.set(.18,1.08,0),G.add(Dt)}for(let Dt of[-1,1]){let Nt=U(new Re(.03,6,4),"#211d1d");Nt.position.set(.22,.88,Dt*.08),G.add(Nt)}return Ke(G,x,1.5),G.userData.body=q,p.add(G),G}let Ne={x:0,y:6,z:9.2,radius:1.65,url:"survey/index.html"};function ye(x,I,A){x.userData.route=I,x.userData.openInNewTab=!0;for(let G of A)G.userData.route=I,G.userData.interactiveRoot=x,G.userData.openInNewTab=!0,G.material&&G.material.emissive&&(G.material.userData.originalEmissive=G.material.emissive.getHex()),b.push(G);z.add(x)}function ve(x){let I=U(new St(.12,1.15,.12),"#c5b5a7");I.position.set(.05,1.62,0);let A=U(new St(.86,.62,.08),"#fff8f4");A.position.set(.05,2.18,.02);let G=U(new St(.86,.16,.09),"#db6a41");G.position.set(.05,2.48,.03);let nt=U(new St(.42,.32,.28),"#db6a41");nt.position.set(-.62,1.42,.15);let q=U(new St(.28,.04,.04),"#211d1d");q.position.set(-.62,1.52,.3);let Y=U(new St(.16,.12,.02),"#fcea8b");Y.position.set(-.42,1.58,.15);let X=U(new Re(.09,6,5),"#db6a41");X.position.set(.7,1.22,-.35);let rt=U(new Re(.18,6,5),"#8db07c");return rt.position.set(.7,1.16,-.35),x.add(I,A,G,nt,q,Y,X,rt),[I,A,G,nt,q,Y,X,rt]}function Pt(){let x=Ne.radius,I=Ne.url,A=new ce;A.position.set(Ne.x,Ne.y,Ne.z),p.add(A);let G=U(new Vt(x*.96,x*1.08,.5,7,1),"#c5b5a7");G.position.y=.3;let nt=U(new Vt(x*.98,x*1.02,.22,7,1),"#f4ebdd");nt.position.y=.64;let q=U(new Vt(x*.96,x*.99,.2,7,1),"#f4ece4");q.position.y=.84,A.add(G,nt,q);let Y=ve(A);return ye(A,I,[G,nt,q,...Y]),Xt(A,I,x),A.traverse(X=>{X.userData&&X.userData.route===I&&(X.userData.openInNewTab=!0)}),A.add(mt("\u8B80\u8005\u554F\u5377","\u9810\u89BD\u7248",I,{x:0,y:3.15,z:0},"survey-label",{openInNewTab:!0,ariaLabel:"\u8B80\u8005\u554F\u5377\uFF0C\u958B\u555F\u554F\u5377\u9810\u89BD\uFF08\u65B0\u5206\u9801\uFF09"})),A}Me.forEach(x=>De(x)),re.forEach(x=>Je(x)),$e(),Pt();function Ee(x){x.traverse(I=>{I.raycast=()=>{}})}function Wt(x,I,A){let G=new ce;if(G.position.set(x[0],x[1],x[2]),A){let X=U(new Vt(.045,.05,.22,6),"#b8a07e");X.position.y=-.18,G.add(X)}else{let X=U(new Vt(.045,.058,1.62,6),"#b8a07e");X.position.y=-.97;let rt=U(new St(.08,.06,.08),"#c5b5a7");rt.position.y=-.18,G.add(X,rt)}let nt=U(new Re(.16,8,6),"#fff8f4",{emissive:"#ffe0a8",emissiveIntensity:.15,roughness:.55,flatShading:!0});nt.scale.set(1,.78,1),nt.material.userData.todManaged=!0;let q=U(new an(.13,.1,6),"#c5b5a7");q.position.y=.14,G.add(nt,q);let Y=new zi("#ffb978",0,I,2);return Y.castShadow=!1,G.add(Y),p.add(G),Ee(G),{light:Y,shade:nt.material,baseDistance:I}}[[0,8.35,-10.7],[2.3383,8.35,-9.35],[-2.3383,8.35,-9.35],[9.2665,10.05,5.35],[6.9282,10.05,6.7],[9.2665,10.05,2.65],[-9.2665,7.25,5.35],[-9.2665,7.25,2.65],[-6.9282,7.25,6.7]].forEach(x=>et.push(Wt(x,4.2,!1))),et.push(Wt([0,6.5,0],3.5,!0));let P=new ce;P.position.y=.85,p.add(P);let y=new Le(new xi(48,40),R);y.rotation.x=-Math.PI/2,y.position.y=-.35,y.frustumCulled=!1,P.add(y);for(let x=0;x<16;x+=1){let I=x/16*Math.PI*2+.35,A=13+x%5*4.4;bt(P,x%2?Lt.farShade:Lt.farLit,Math.cos(I)*A,(x%4-1.5)*.28,Math.sin(I)*A,2.1+x%3*.45,.55,1.6+x%2*.35)}Ee(P);let j=[{id:"planeA_high",radius:17.5,y:14,period:90,phase:0,dir:1,bank:8,waist:"#45abbb",hub:"#db6a41"},{id:"planeB_low",radius:19.2,y:3,period:110,phase:Math.PI,dir:-1,bank:6,waist:"#db6a41",hub:"#45abbb"}],xt={roughness:.82,metalness:0,flatShading:!0};function pt(x){let I=new ce;I.rotation.order="YZX";let A=(X,rt,Dt,Nt,_t,qt={})=>{let Ot=U(X,rt,{...xt,...qt});return Ot.position.set(Dt,Nt,_t),I.add(Ot),Ot};A(new St(.72,.28,3.4),"#e6d8c8",0,-.08,-.1),A(new St(.78,.46,3.5),"#fff8f4",0,.16,-.05);let G=A(new St(.84,.07,3.35),x.waist,0,.02,-.05,{emissive:x.waist,emissiveIntensity:0});G.material.userData.todManaged=!0,J.push(G.material);let nt=A(new an(.28,.55,6),"#fff8f4",0,.12,1.95);nt.rotation.x=Math.PI/2,A(new St(5.1,.08,.9),"#fff8f4",0,.22,.15),A(new St(.28,.1,.92),x.waist,-2.45,.22,.15),A(new St(.28,.1,.92),x.waist,2.45,.22,.15),A(new St(1.4,.06,.5),"#fff8f4",0,.22,-1.55),A(new St(.08,.55,.42),x.waist,0,.55,-1.58);for(let X of[-1,1])for(let rt=0;rt<4;rt+=1)A(new St(.04,.1,.14),"#8fd3da",X*.4,.22,.4-rt*.42);let q=new ce;q.position.set(0,.12,2.28),q.add(new Le(new St(.1,1.15,.035),vt("#c5b5a7",xt))),q.add(new Le(new St(1.15,.1,.035),vt("#c5b5a7",xt))),q.add(U(new Re(.09,8,6),x.hub,xt)),I.add(q);let Y=U(new Re(.055,6,4),"#ffe0a8",{emissive:"#ffe0a8",emissiveIntensity:0,roughness:.45});return Y.position.set(0,.2,2.08),Y.material.userData.todManaged=!0,st.push(Y.material),I.add(Y),I.userData.prop=q,Ee(I),I}let Tt=j.map(x=>({...x,group:pt(x)}));Tt.forEach(x=>p.add(x.group));function Rt(x,I){x.group.position.set(Math.cos(I)*x.radius,x.y,Math.sin(I)*x.radius);let A=x.dir>0?-I:Math.PI-I,G=cr.degToRad(x.bank)*(x.dir>0?1:-1);x.group.rotation.set(0,A,G)}Tt.forEach(x=>Rt(x,x.phase));let lt=null;function ht(x){let I=o||lt===null?0:x-lt;Tt.forEach(A=>{let G=A.phase+A.dir*(I/A.period)*Math.PI*2;Rt(A,G),A.group.userData.prop.rotation.z=o?0:I*7})}let At=se.walkRadius,O=(x,I)=>Math.atan2(he[I].z-he[x].z,he[I].x-he[x].x),dt=(x,I,A=At)=>new W(he[x].x+Math.cos(I)*A,he[x].deckY,he[x].z+Math.sin(I)*A);function ot(x,I,A){let G=A-I;for(;G>Math.PI;)G-=Math.PI*2;for(;G<-Math.PI;)G+=Math.PI*2;let nt=Math.max(1,Math.ceil(Math.abs(G)/.25)),q=[];for(let Y=1;Y<=nt;Y+=1)q.push(dt(x,I+G*Y/nt));return q}function Ct(x,I){let A=re.find(X=>X.a===x&&X.b===I||X.a===I&&X.b===x),G=A.a===x?A.p0:A.p1,nt=A.a===x?A.p1:A.p0,q=[],Y=8;for(let X=0;X<=Y;X+=1){let rt=X/Y;q.push(new W(G[0]+(nt[0]-G[0])*rt,G[1]+(nt[1]-G[1])*rt,G[2]+(nt[2]-G[2])*rt))}return q}function wt(x){let I=Me.filter(X=>X!==x.island&&!x.visited.has(X));I.length||(x.visited=new Set([x.island]),I=Me.filter(X=>X!==x.island));let A=I[Math.floor(Math.random()*I.length)],G=O(x.island,A),nt=O(A,x.island),q=ot(x.island,x.angle,G);q.push(...Ct(x.island,A)),q.push(dt(A,nt));let Y=nt+(Math.random()<.5?-1:1)*(1.2+Math.random()*2.6);q.push(...ot(A,nt,Y)),x.island=A,x.angle=Y,x.visited.add(A),x.queue=q,x.pause=1.2+Math.random()*2.5}function gt(x,I,A){let G=he[I],nt=Math.atan2(A[2]-G.z,A[0]-G.x),q={mesh:x,island:I,angle:nt,baseY:A[1],visited:new Set([I]),queue:[],pause:0,phase:Math.random()*6};return x.position.set(A[0],A[1],A[2]),x.rotation.y=-(nt+Math.PI/2),q}let zt=[gt(Z("\u5DF4\u54E5",{shirt:"#45abbb",vest:"#fcea8b",pants:"#211d1d",hair:"#6b4a33",hairCap:.42,hairTilt:0,bangs:!0}),1,[0,6.5,-5.25]),gt(Z("\u6F84\u745B"),3,[-4.547,5.4,2.625])],ie=.9,Mt=0;function Gt(x,I,A){if(x.pause>0)x.pause-=A;else{x.queue.length||wt(x);let q=ie*A;for(;q>0&&x.queue.length;){let Y=x.queue[0],X=Y.x-x.mesh.position.x,rt=Y.y-x.baseY,Dt=Y.z-x.mesh.position.z,Nt=Math.hypot(X,rt,Dt);if(Math.hypot(X,Dt)>1e-4&&(x.mesh.rotation.y=-(Math.atan2(Dt,X)+Math.PI/2)),Nt<=q)x.mesh.position.x=Y.x,x.baseY=Y.y,x.mesh.position.z=Y.z,x.queue.shift(),q-=Nt;else{let _t=q/Nt;x.mesh.position.x+=X*_t,x.baseY+=rt*_t,x.mesh.position.z+=Dt*_t,q=0}}x.queue.length||(x.pause=1.2+Math.random()*2.5)}let G=x.pause<=0;x.mesh.position.y=x.baseY+(G?Math.abs(Math.sin(I*9+x.phase))*.05:0);let nt=1+Math.sin(I*2.1+x.phase)*.035;x.mesh.userData.body.scale.set(1,nt,1)}function Kt(x,I){let A=Mt?Math.min(.1,I-Mt):0;Gt(x,I,A)}let Et={pos:[0,28,22],target:[0,6.5,0]},Bt=new Rs(E,u.domElement);Bt.enableDamping=!0,Bt.dampingFactor=.07,Bt.enablePan=!1,Bt.enableZoom=!0,Bt.enableRotate=!0,Bt.rotateSpeed=.48,Bt.zoomSpeed=.78,Bt.minPolarAngle=20*Math.PI/180,Bt.maxPolarAngle=72*Math.PI/180,Bt.minDistance=24,Bt.maxDistance=90,Bt.target.set(Et.target[0],Et.target[1],Et.target[2]),Bt.autoRotate=!1,Bt.autoRotateSpeed=.24,Bt.addEventListener("start",()=>{Bt.autoRotate&&(Bt.autoRotate=!1,we())});function we(){r.disabled=!1,r.setAttribute("aria-pressed",String(!!Bt.autoRotate)),r.textContent=Bt.autoRotate?"\u66AB\u505C\u65CB\u8F49":"\u958B\u59CB\u65CB\u8F49"}we();function nn(){Bt.autoRotate=!Bt.autoRotate,we()}r.addEventListener("click",nn);function ai(){E.position.set(Et.pos[0],Et.pos[1],Et.pos[2]),Bt.target.set(Et.target[0],Et.target[1],Et.target[2]),Bt.update()}function Ln(){ai()}a.addEventListener("click",Ln);function Xe(){let x=e.getBoundingClientRect(),I=Math.max(1,x.width),A=Math.max(1,x.height);E.aspect=I/A,E.updateProjectionMatrix(),u.setSize(I,A,!1),R.uniforms.resolution.value.set(u.domElement.width,u.domElement.height),d.setSize(I,A)}let Hn=null;window.ResizeObserver?(Hn=new ResizeObserver(Xe),Hn.observe(e)):window.addEventListener("resize",Xe),Xe(),ai();let Oe=null,sn=null,Gn=new Gi,kn=new kt;function oi(x,I){let A=u.domElement.getBoundingClientRect();kn.x=(x-A.left)/A.width*2-1,kn.y=-((I-A.top)/A.height)*2+1,Gn.setFromCamera(kn,E);let G=Gn.intersectObjects(b,!1);for(let nt of G){let q=nt.object.userData.interactiveRoot,Y=nt.object.userData.route;if(q&&Y)return{root:q,route:Y}}return null}function de(x,I){x&&x.traverse(A=>{if(!A.isMesh)return;let G=Array.isArray(A.material)?A.material:[A.material];for(let nt of G){if(!nt||!nt.emissive||nt.userData.todManaged)continue;let q=nt.userData.originalEmissive||0;nt.emissive.setHex(I?4668181:q)}})}u.domElement.addEventListener("pointerdown",x=>{Oe={x:x.clientX,y:x.clientY,pointerId:x.pointerId}},{passive:!0}),u.domElement.addEventListener("pointermove",x=>{if(Oe&&(Math.abs(x.clientX-Oe.x)>6||Math.abs(x.clientY-Oe.y)>6))return;let I=oi(x.clientX,x.clientY),A=I&&I.root;A!==sn&&(de(sn,!1),sn=A,de(sn,!0)),u.domElement.style.cursor=I?"pointer":Oe?"grabbing":"grab"},{passive:!0}),u.domElement.addEventListener("pointerup",x=>{if(!Oe||Oe.pointerId!==x.pointerId)return;let I=Math.hypot(x.clientX-Oe.x,x.clientY-Oe.y);if(Oe=null,u.domElement.style.cursor="grab",I>6)return;let A=oi(x.clientX,x.clientY);A&&(de(A.root,!0),qe(A.root,A.route))},{passive:!0}),u.domElement.addEventListener("pointercancel",()=>{Oe=null},{passive:!0}),u.domElement.addEventListener("webglcontextlost",x=>{V||(x.preventDefault(),f("3D \u5716\u5F62\u66AB\u6642\u4E2D\u65B7\uFF1B\u8ACB\u6539\u7528\u6587\u7A3F\u5C0E\u89BD\u3002\u82E5\u5C0E\u89BD\u5DF2\u6536\u5408\uFF0C\u6309\u4E0A\u65B9\u300C\u986F\u793A\u5C0E\u89BD\u300D\u3002"))});let je=null;function qe(x,I){if(x.userData.openInNewTab){window.open(I,"_blank","noopener,noreferrer");return}if(o){location.href=I;return}let A=new W;x.getWorldPosition(A),je={t0:performance.now(),dur:650,route:I,fromPos:E.position.clone(),fromTarget:Bt.target.clone(),toTarget:A.clone(),toPos:A.clone().add(E.position.clone().sub(Bt.target).setLength(28))},Bt.autoRotate=!1,we()}let yn={day:{sky:["#c5dff0","#e8f2f7","#f3ebe3"],fog:"#edddcf",fogNear:48,fogFar:110,hemiSky:"#fff8f4",hemiGround:"#c5b5a7",hemiI:1.9,sun:"#ffe9cf",sunI:3,sunPos:[-8,18,12],castShadow:!0,fill:"#cfe4f2",fillI:.9,fillPos:[12,8,-10],amb:"#ffc090",ambI:0,exposure:1,nearLit:"#fff8f4",nearShade:"#d5e3ee",nearOp:.92,farLit:"#fff8f4",farShade:"#d5e3ee",farOp:.88,win:0,waist:0,nav:0,lantern:.5,lampI:0,lampReach:1,lampColor:"#ffb978",bulbE:.15},dusk:{sky:["#7a9ec4","#c9a48a","#e8b89a"],fog:"#d9a882",fogNear:40,fogFar:95,hemiSky:"#f5c49a",hemiGround:"#8a6a55",hemiI:1.1,sun:"#ff9a5c",sunI:1.35,sunPos:[-14,6,8],castShadow:!0,fill:"#6a7ea0",fillI:.45,fillPos:[10,5,-12],amb:"#ffc090",ambI:.15,exposure:.92,nearLit:"#f5e6d8",nearShade:"#b89a9a",nearOp:.9,farLit:"#f5e6d8",farShade:"#b89a9a",farOp:.84,win:.15,waist:.12,nav:.35,lantern:1.2,lampI:.55,lampReach:1.45,lampColor:"#ffb978",bulbE:.9},night:{sky:["#1e2a3a","#2a3545","#3a3340"],fog:"#2c3a4e",fogNear:58,fogFar:150,hemiSky:"#6d7fa0",hemiGround:"#3e4c62",hemiI:1.15,sun:"#c5d4ee",sunI:.72,sunPos:[6,22,-10],castShadow:!1,fill:"#7d8eaa",fillI:.55,fillPos:[-10,8,6],amb:"#516078",ambI:.38,exposure:1.05,nearLit:"#e7edf2",nearShade:"#7d8794",nearOp:.72,farLit:"#d8dee6",farShade:"#6a7585",farOp:.58,win:.7,waist:.35,nav:.95,lantern:2.6,lampI:5.2,lampReach:2.6,lampColor:"#ffd6a0",bulbE:1.8}},li=new ee,Vn=new ee,Dn=new W,Zi=new W,_e=(x,I,A)=>x+(I-x)*A,Wn=x=>{let I=Math.min(1,Math.max(0,x));return I*I*(3-2*I)};function Se(x,I,A,G){li.set(I),Vn.set(A),x.copy(li).lerp(Vn,G)}function M(x,I){let A=parseInt(String(x).replace("#",""),16);return I.set((A>>16&255)/255,(A>>8&255)/255,(A&255)/255)}function H(x,I,A,G){M(I,Dn),M(A,Zi),x.copy(Dn).lerp(Zi,G)}function it(x){let I=A=>Math.round(Math.min(255,Math.max(0,A*255))).toString(16).padStart(2,"0");return`#${I(x.x)}${I(x.y)}${I(x.z)}`}function K(x,I,A,G){H(R.uniforms.top.value,x.sky[0],I.sky[0],A),H(R.uniforms.mid.value,x.sky[1],I.sky[1],A),H(R.uniforms.bottom.value,x.sky[2],I.sky[2],A),Se(m.background,x.sky[2],I.sky[2],A),Se(m.fog.color,x.fog,I.fog,A),m.fog.near=_e(x.fogNear,I.fogNear,A),m.fog.far=_e(x.fogFar,I.fogFar,A),Se(v.color,x.hemiSky,I.hemiSky,A),Se(v.groundColor,x.hemiGround,I.hemiGround,A),v.intensity=_e(x.hemiI,I.hemiI,A),Se(T.color,x.sun,I.sun,A),T.intensity=_e(x.sunI,I.sunI,A),T.position.set(_e(x.sunPos[0],I.sunPos[0],A),_e(x.sunPos[1],I.sunPos[1],A),_e(x.sunPos[2],I.sunPos[2],A)),T.castShadow=A<.5?x.castShadow:I.castShadow,Se(w.color,x.fill,I.fill,A),w.intensity=_e(x.fillI,I.fillI,A),w.position.set(_e(x.fillPos[0],I.fillPos[0],A),_e(x.fillPos[1],I.fillPos[1],A),_e(x.fillPos[2],I.fillPos[2],A)),Se(L.color,x.amb,I.amb,A),L.intensity=_e(x.ambI,I.ambI,A),u.toneMappingExposure=_e(x.exposure,I.exposure,A),Se(Lt.nearLit.color,x.nearLit,I.nearLit,A),Se(Lt.nearShade.color,x.nearShade,I.nearShade,A),Se(Lt.farLit.color,x.farLit,I.farLit,A),Se(Lt.farShade.color,x.farShade,I.farShade,A),Se(Lt.disc.color,x.sky[2],I.sky[2],A),Lt.nearLit.opacity=_e(x.nearOp,I.nearOp,A),Lt.nearShade.opacity=_e(x.nearOp,I.nearOp,A),Lt.farLit.opacity=_e(x.farOp,I.farOp,A),Lt.farShade.opacity=_e(x.farOp,I.farOp,A),Lt.disc.opacity=_e(Math.min(.96,x.farOp+.06),Math.min(.96,I.farOp+.06),A);let nt=_e(x.win,I.win,A);N.forEach(rt=>{rt.emissive.set("#fcea8b"),rt.emissiveIntensity=nt});let q=_e(x.waist,I.waist,A);J.forEach(rt=>{rt.emissive.copy(rt.color),rt.emissiveIntensity=q});let Y=_e(x.nav,I.nav,A);st.forEach(rt=>{rt.emissive.set("#ffe0a8"),rt.emissiveIntensity=Y});let X=_e(x.lantern,I.lantern,A);k.forEach(rt=>{rt.emissive.set("#fcea8b"),rt.emissiveIntensity=X}),et.forEach((rt,Dt)=>{let Nt=G(Dt),_t=x.lamps&&x.lamps[Dt],qt=_t?_t.intensity:x.lampI,Ot=_t?_t.color:x.lampColor,jt=_t?_t.emissive:x.bulbE;rt.light.intensity=_e(qt,I.lampI,Nt),rt.baseDistance&&(rt.light.distance=rt.baseDistance*_e(x.lampReach||1,I.lampReach||1,Nt)),Se(rt.light.color,Ot,I.lampColor,Nt),rt.shade.emissive.set("#ffe0a8"),rt.shade.emissiveIntensity=_e(jt,I.bulbE,Nt)})}function tt(){return{sky:[it(R.uniforms.top.value),it(R.uniforms.mid.value),it(R.uniforms.bottom.value)],fog:"#"+m.fog.color.getHexString(),fogNear:m.fog.near,fogFar:m.fog.far,hemiSky:"#"+v.color.getHexString(),hemiGround:"#"+v.groundColor.getHexString(),hemiI:v.intensity,sun:"#"+T.color.getHexString(),sunI:T.intensity,sunPos:[T.position.x,T.position.y,T.position.z],castShadow:T.castShadow,fill:"#"+w.color.getHexString(),fillI:w.intensity,fillPos:[w.position.x,w.position.y,w.position.z],amb:"#"+L.color.getHexString(),ambI:L.intensity,exposure:u.toneMappingExposure,nearLit:"#"+Lt.nearLit.color.getHexString(),nearShade:"#"+Lt.nearShade.color.getHexString(),nearOp:Lt.nearLit.opacity,farLit:"#"+Lt.farLit.color.getHexString(),farShade:"#"+Lt.farShade.color.getHexString(),farOp:Lt.farLit.opacity,win:N.length?N[0].emissiveIntensity:0,waist:J.length?J[0].emissiveIntensity:0,nav:st.length?st[0].emissiveIntensity:0,lantern:k.length?k[0].emissiveIntensity:.5,lampI:et.length?et[0].light.intensity:0,lampReach:et.length&&et[0].baseDistance?et[0].light.distance/et[0].baseDistance:1,lampColor:et.length?"#"+et[0].light.color.getHexString():"#ffb978",bulbE:et.length?et[0].shade.emissiveIntensity:.15,lamps:et.map(x=>({intensity:x.light.intensity,color:"#"+x.light.color.getHexString(),emissive:x.shade.emissiveIntensity}))}}function S(){try{let x=localStorage.getItem("homeSkyTod");if(x==="dusk"||x==="night")return x}catch{}return"day"}let D=S(),C=null;function B(x){if(x!=="day"&&x!=="dusk"&&x!=="night"||x===D&&!C)return;let I=tt();D=x,document.body.classList.remove("tod-day","tod-dusk","tod-night"),document.body.classList.add(`tod-${x}`);let A=yn[x];if(o){K(I,A,1,()=>1),C=null;return}C={from:I,to:A,t0:performance.now()}}K(yn[D],yn[D],1,()=>1);function $(x){B(x.detail)}window.addEventListener("home-sky-tod",$),t.hidden=!0;let Q=0,V=!1;function ut(){if(V)return;Q=window.requestAnimationFrame(ut);let x=performance.now();if(C){let Y=(x-C.t0)/1e3,X=Wn(Math.min(1,Y/.45)),rt=Dt=>Wn(Math.min(1,Math.max(0,(Y-Dt*.1)/.8)));K(C.from,C.to,X,rt),Y>=.8+Math.max(0,et.length-1)*.1&&(K(C.from,C.to,1,()=>1),C=null)}if(je){let Y=Math.min(1,(x-je.t0)/je.dur),X=1-Math.pow(1-Y,3);if(E.position.lerpVectors(je.fromPos,je.toPos,X),Bt.target.lerpVectors(je.fromTarget,je.toTarget,X),Y>=1){let rt=je.route;je=null,location.href=rt}}let I=x/1e3;o||(zt.forEach(Y=>Kt(Y,I)),lt===null&&(lt=I),F.forEach((Y,X)=>{Y.position.y=Math.sin(I*Math.PI*2/7.6+X*1.7)*.05}),P.position.x=Math.sin(I*.05)*1.3,P.position.z=Math.cos(I*.04)*1,Mt=I),ht(I);let A=E.position.distanceTo(Bt.target),G=A<26?1:Math.max(.78,1-(A-26)/60);zt.forEach(Y=>{let X=Y.mesh.userData.tag;X&&(X.style.opacity="1",X.style.setProperty("--tag-scale",G.toFixed(2)))});let nt=E.position.distanceTo(Bt.target),q=nt<56?"1":nt<72?"0.5":"0";q!==p.userData.catOpacity&&(p.userData.catOpacity=q,document.querySelectorAll(".island-label.cat-label").forEach(Y=>{Y.style.opacity=q,Y.style.pointerEvents=q==="0"?"none":"auto"})),Bt.update(),_.position.copy(E.position),u.render(m,E),d.render(m,E)}return ut(),function(){V||(V=!0,window.cancelAnimationFrame(Q),Hn&&Hn.disconnect(),window.removeEventListener("resize",Xe),window.removeEventListener("home-sky-tod",$),r.removeEventListener("click",nn),a.removeEventListener("click",Ln),Bt.dispose(),m.traverse(I=>{I.geometry&&I.geometry.dispose(),(I.material?Array.isArray(I.material)?I.material:[I.material]:[]).forEach(G=>{G&&G.dispose&&G.dispose()})}),u.dispose(),u.forceContextLoss(),u.domElement.remove(),d.domElement.parentNode&&d.domElement.remove())}}(()=>{let i=document.getElementById("sceneFallback"),t=document.getElementById("islandStage"),e=document.getElementById("three-root"),n=document.getElementById("label-root"),s=document.getElementById("rotateToggle"),r=document.getElementById("resetView"),a=document.getElementById("sceneNote"),o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,l={classic:"\u6ED1\u9F20\uFF0F\u89F8\u63A7\u62D6\u66F3\u65CB\u8F49\uFF0C\u6EFE\u8F2A\u6216\u96D9\u6307\u7E2E\u653E\u3002\u5916\u6D77\u5169\u8258\u904A\u8F2A\u53EA\u662F\u98A8\u666F\uFF0C\u4E0D\u80FD\u9EDE\u9078\u3002\u53EF\u5207\u63DB\u767D\u5929\u3001\u508D\u665A\u3001\u591C\u665A\u3002\u7D44\u5225\u3001\u985E\u5225\u8207\u6708\u4EFD\u8ACB\u7528\u6587\u7A3F\u5C0E\u89BD\u3002",sky:"\u6ED1\u9F20\uFF0F\u89F8\u63A7\u62D6\u66F3\u65CB\u8F49\uFF0C\u6EFE\u8F2A\u6216\u96D9\u6307\u7E2E\u653E\u3002\u5169\u67B6\u73A9\u5177\u98DB\u6A5F\u53EA\u662F\u98A8\u666F\uFF0C\u4E0D\u80FD\u9EDE\u9078\u3002\u53EF\u5207\u63DB\u767D\u5929\u3001\u508D\u665A\u3001\u591C\u665A\u3002\u7D44\u5225\u3001\u985E\u5225\u8207\u6708\u4EFD\u8ACB\u7528\u6587\u7A3F\u5C0E\u89BD\u3002"},h=decodeURIComponent(location.hash.slice(1)).match(/^(\d{4}-\d{2})-/),g=new URLSearchParams(location.search);if(h){location.replace(`month.html?month=${encodeURIComponent(h[1])}${location.hash}`);return}if(/^\d{4}-\d{2}$/.test(g.get("month")||"")){location.replace(`month.html${location.search}${location.hash}`);return}let f;try{f=JSON.parse(document.getElementById("home-data").textContent||"{}")}catch{f={}}let u=Array.isArray(f.months)?f.months:[],m=null;try{m=localStorage.getItem("homeIslandMonth")}catch{}let E=u.find(b=>b.key===m)||u[u.length-1];function p(b){i.textContent=b,i.hidden=!1,s.disabled=!0,s.setAttribute("aria-pressed","false"),s.textContent="3D \u65CB\u8F49\u672A\u555F\u7528",r.disabled=!0}if(!u.length||!E){p("\u76EE\u524D\u5C1A\u7121\u6708\u4EFD\u8CC7\u6599\uFF1B\u8ACB\u4F7F\u7528\u6587\u7A3F\u5C0E\u89BD\uFF0C\u6216\u7A0D\u5F8C\u518D\u8A66\u3002");return}if(!document.createElement("canvas").getContext("webgl2")){p("\u6B64\u700F\u89BD\u5668\u672A\u555F\u7528 WebGL\uFF1B\u8ACB\u4F7F\u7528\u6587\u7A3F\u5C0E\u89BD\u9032\u5165\u5BE9\u7A3F\u9801\u3002\u82E5\u5C0E\u89BD\u5DF2\u6536\u5408\uFF0C\u6309\u4E0A\u65B9\u300C\u986F\u793A\u5C0E\u89BD\u300D\u3002");return}function v(){try{if(localStorage.getItem("homeIslandEdition")==="classic")return"classic"}catch{}return"sky"}function L(b){document.body.classList.toggle("edition-classic",b==="classic"),document.body.classList.toggle("edition-sky",b==="sky"),document.body.classList.remove("tod-day","tod-dusk","tod-night");let z="day";try{let N=localStorage.getItem("homeSkyTod");(N==="dusk"||N==="night")&&(z=N)}catch{}document.body.classList.add(`tod-${z}`),a&&(a.textContent=l[b]),document.querySelectorAll(".edition-switch [data-edition]").forEach(N=>{N.setAttribute("aria-checked",N.getAttribute("data-edition")===b?"true":"false")})}let w={status:i,stage:t,canvasHost:e,labelHost:n,rotateButton:s,resetButton:r,reducedMotion:o,data:f,months:u,latest:E},T=null,R=null;function _(b){T&&(T(),T=null),e.replaceChildren(),n.replaceChildren(),L(b),R=b;try{T=b==="classic"?Dh(w):Nh(w)}catch(z){console.error(z),p("3D \u5834\u666F\u7121\u6CD5\u555F\u52D5\uFF1B\u6587\u7A3F\u5C0E\u89BD\u4ECD\u53EF\u5B8C\u6574\u4F7F\u7528\u3002\u82E5\u5C0E\u89BD\u5DF2\u6536\u5408\uFF0C\u6309\u4E0A\u65B9\u300C\u986F\u793A\u5C0E\u89BD\u300D\u3002")}}_(v()),window.addEventListener("home-island-edition",b=>{let z=b.detail==="classic"?"classic":"sky";z!==R&&_(z)})})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
