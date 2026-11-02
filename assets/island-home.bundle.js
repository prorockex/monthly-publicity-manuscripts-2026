(()=>{var ai={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ec=0,Lo=1,nc=2;var _i=1,ic=2,Qi=3,li=0,qe=1,pn=2,xi=0,ts=1,Do=2,No=3,Uo=4,sc=5;var yi=100,rc=101,ac=102,oc=103,lc=104,cc=200,hc=201,uc=202,dc=203,Fo=204,Oo=205,fc=206,pc=207,mc=208,gc=209,_c=210,xc=211,yc=212,vc=213,Mc=214,Ir=0,Lr=1,Dr=2,Gi=3,Nr=4,Ur=5,Fr=6,Or=7,Bo=0,Sc=1,bc=2,Rn=0,zo=1,ko=2,Go=3,qs=4,Ho=5,Vo=6,Wo=7;var Xo=300,vi=301,es=302,oa=303,la=304,Br=1e3,wn=1001,zr=1002,Le=1003,Ec=1004;var Ys=1005;var Xe=1006,ca=1007;var Hn=1008;var Ke=1009,qo=1010,Yo=1011,ns=1012,ha=1013,vn=1014,Mn=1015,Sn=1016,ua=1017,da=1018,Mi=1020,Zo=35902,Jo=35899,$o=1021,Ko=1022,bn=1023,Bn=1026,Vn=1027,jo=1028,fa=1029,ci=1030,pa=1031;var ma=1033,Zs=33776,Js=33777,$s=33778,Ks=33779,ga=35840,_a=35841,xa=35842,ya=35843,va=36196,Ma=37492,Sa=37496,ba=37488,Ea=37489,js=37490,Ta=37491,wa=37808,Aa=37809,Ra=37810,Ca=37811,Pa=37812,Ia=37813,La=37814,Da=37815,Na=37816,Ua=37817,Fa=37818,Oa=37819,Ba=37820,za=37821,ka=36492,Ga=36494,Ha=36495,Va=36283,Wa=36284,Qs=36285,Xa=36286;var ys=2300,kr=2301,Cr=2302,bo=2303,Eo=2400,To=2401,wo=2402;var Tc=3200;var qa=0,wc=1,Wn="",We="srgb",vs="srgb-linear",Ms="linear",re="srgb";var Pr=7680;var Ac=519,Rc=512,Cc=513,Pc=514,Qo=515,Ic=516,Lc=517,tl=518,el=519,Dc=35044;var nl="300 es",dn=2e3,Hi=2001;function Ch(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ph(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nc(){let i=Ss("canvas");return i.style.display="block",i}var Cl={},Vi=null;function il(...i){let t="THREE."+i.shift();Vi?Vi("log",t,...i):console.log(t,...i)}function Uc(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function kt(...i){i=Uc(i);let t="THREE."+i.shift();if(Vi)Vi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ht(...i){i=Uc(i);let t="THREE."+i.shift();if(Vi)Vi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function gs(...i){let t=i.join(" ");t in Cl||(Cl[t]=!0,kt(...i))}function Fc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Oc={[Ir]:Ir,[Dr]:Fr,[Nr]:Nr,[Gi]:Ur,[Lr]:Lr,[Fr]:Dr,[Or]:Or,[Ur]:Gi},yn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pl=1234567,_s=Math.PI/180,Wi=180/Math.PI;function is(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Qt(i,t,e){return Math.max(t,Math.min(e,i))}function sl(i,t){return(i%t+t)%t}function Ih(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Lh(i,t,e){return i!==t?(e-i)/(t-i):0}function xs(i,t,e){return(1-e)*i+e*t}function Dh(i,t,e,n){return xs(i,t,1-Math.exp(-e*n))}function Nh(i,t=1){return t-Math.abs(sl(i,t*2)-t)}function Uh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Fh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Oh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Bh(i,t){return i+Math.random()*(t-i)}function zh(i){return i*(.5-Math.random())}function kh(i){i!==void 0&&(Pl=i);let t=Pl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gh(i){return i*_s}function Hh(i){return i*Wi}function Vh(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Wh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xh(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),p=r((t-n)/2),d=a((t-n)/2),m=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*p,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*p,o*c);break;case"ZXZ":i.set(l*p,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*m,o*c);break;case"YXY":i.set(l*m,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*m,o*u,o*c);break;default:kt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function al(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Bc(i,t){if(t.constructor===Float32Array)return i;let e=al(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function zc(i,t){if(t.constructor===Float32Array)return i;let e=al(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var tr={DEG2RAD:_s,RAD2DEG:Wi,generateUUID:is,clamp:Qt,euclideanModulo:sl,mapLinear:Ih,inverseLerp:Lh,lerp:xs,damp:Dh,pingpong:Nh,smoothstep:Uh,smootherstep:Fh,randInt:Oh,randFloat:Bh,randFloatSpread:zh,seededRandom:kh,degToRad:Gh,radToDeg:Hh,isPowerOfTwo:Vh,ceilPowerOfTwo:Wh,floorPowerOfTwo:rl,setQuaternionFromProperEuler:Xh,normalize:zc,denormalize:Bc},ul=class ul{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ul.prototype.isVector2=!0;var Ut=ul,an=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],p=n[s+3],d=r[a+0],m=r[a+1],_=r[a+2],E=r[a+3];if(p!==E||l!==d||c!==m||u!==_){let f=l*d+c*m+u*_+p*E;f<0&&(d=-d,m=-m,_=-_,E=-E,f=-f);let h=1-o;if(f<.9995){let v=Math.acos(f),A=Math.sin(v);h=Math.sin(h*v)/A,o=Math.sin(o*v)/A,l=l*h+d*o,c=c*h+m*o,u=u*h+_*o,p=p*h+E*o}else{l=l*h+d*o,c=c*h+m*o,u=u*h+_*o,p=p*h+E*o;let v=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=v,c*=v,u*=v,p*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],p=r[a],d=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+u*p+l*m-c*d,t[e+1]=l*_+u*d+c*p-o*m,t[e+2]=c*_+u*m+o*d-l*p,t[e+3]=u*_-o*p-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),p=o(r/2),d=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*p+c*m*_,this._y=c*m*p-d*u*_,this._z=c*u*_+d*m*p,this._w=c*u*p-d*m*_;break;case"YXZ":this._x=d*u*p+c*m*_,this._y=c*m*p-d*u*_,this._z=c*u*_-d*m*p,this._w=c*u*p+d*m*_;break;case"ZXY":this._x=d*u*p-c*m*_,this._y=c*m*p+d*u*_,this._z=c*u*_+d*m*p,this._w=c*u*p-d*m*_;break;case"ZYX":this._x=d*u*p-c*m*_,this._y=c*m*p+d*u*_,this._z=c*u*_-d*m*p,this._w=c*u*p+d*m*_;break;case"YZX":this._x=d*u*p+c*m*_,this._y=c*m*p+d*u*_,this._z=c*u*_-d*m*p,this._w=c*u*p-d*m*_;break;case"XZY":this._x=d*u*p-c*m*_,this._y=c*m*p-d*u*_,this._z=c*u*_+d*m*p,this._w=c*u*p+d*m*_;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],p=e[10],d=n+o+p;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>p){let m=2*Math.sqrt(1+n-o-p);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>p){let m=2*Math.sqrt(1+o-n-p);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},dl=class dl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Il.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*u,this.y=n+l*u+o*c-r*p,this.z=s+l*p+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return no.copy(this).projectOnVector(t),this.sub(no)}reflect(t){return this.sub(no.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dl.prototype.isVector3=!0;var O=dl,no=new O,Il=new an,fl=class fl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],p=n[7],d=n[2],m=n[5],_=n[8],E=s[0],f=s[3],h=s[6],v=s[1],A=s[4],b=s[7],R=s[2],w=s[5],g=s[8];return r[0]=a*E+o*v+l*R,r[3]=a*f+o*A+l*w,r[6]=a*h+o*b+l*g,r[1]=c*E+u*v+p*R,r[4]=c*f+u*A+p*w,r[7]=c*h+u*b+p*g,r[2]=d*E+m*v+_*R,r[5]=d*f+m*A+_*w,r[8]=d*h+m*b+_*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=u*a-o*c,d=o*l-u*r,m=c*r-a*l,_=e*p+n*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/_;return t[0]=p*E,t[1]=(s*c-u*n)*E,t[2]=(o*n-s*a)*E,t[3]=d*E,t[4]=(u*e-s*l)*E,t[5]=(s*r-o*e)*E,t[6]=m*E,t[7]=(n*l-c*e)*E,t[8]=(a*e-n*r)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(io.makeScale(t,e)),this}rotate(t){return gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(io.makeRotation(-t)),this}translate(t,e){return gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(io.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};fl.prototype.isMatrix3=!0;var Wt=fl,io=new Wt,Ll=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dl=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qh(){let i={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===re&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===re&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wn?Ms:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vs]:{primaries:t,whitePoint:n,transfer:Ms,toXYZ:Ll,fromXYZ:Dl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:t,whitePoint:n,transfer:re,toXYZ:Ll,fromXYZ:Dl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:We}}}),i}var ne=qh();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ai,Gr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ai===void 0&&(Ai=Ss("canvas")),Ai.width=t.width,Ai.height=t.height;let s=Ai.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ai}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ss("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=On(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(On(e[n]/255)*255):e[n]=On(e[n]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Yh=0,Xi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=is(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(so(s[a].image)):r.push(so(s[a]))}else r=so(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function so(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}var Zh=0,ro=new O,$e=class i extends yn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=wn,s=wn,r=Xe,a=Hn,o=bn,l=Ke,c=i.DEFAULT_ANISOTROPY,u=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=is(),this.name="",this.source=new Xi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ro).x}get height(){return this.source.getSize(ro).y}get depth(){return this.source.getSize(ro).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Br:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case zr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Br:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case zr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Xo;$e.DEFAULT_ANISOTROPY=1;var pl=class pl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],p=l[8],d=l[1],m=l[5],_=l[9],E=l[2],f=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(p-E)<.01&&Math.abs(_-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+E)<.1&&Math.abs(_+f)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,b=(m+1)/2,R=(h+1)/2,w=(u+d)/4,g=(p+E)/4,S=(_+f)/4;return A>b&&A>R?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=w/n,r=g/n):b>R?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=w/s,r=S/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=g/r,s=S/r),this.set(n,s,r,e),this}let v=Math.sqrt((f-_)*(f-_)+(p-E)*(p-E)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(f-_)/v,this.y=(p-E)/v,this.z=(d-u)/v,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pl.prototype.isVector4=!0;var ve=pl,Hr=class extends yn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new $e({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Xi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends Hr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},bs=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vr=class extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var aa=class aa{constructor(t,e,n,s,r,a,o,l,c,u,p,d,m,_,E,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,p,d,m,_,E,f)}set(t,e,n,s,r,a,o,l,c,u,p,d,m,_,E,f){let h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=p,h[14]=d,h[3]=m,h[7]=_,h[11]=E,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new aa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ri.setFromMatrixColumn(t,0).length(),r=1/Ri.setFromMatrixColumn(t,1).length(),a=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let d=a*u,m=a*p,_=o*u,E=o*p;e[0]=l*u,e[4]=-l*p,e[8]=c,e[1]=m+_*c,e[5]=d-E*c,e[9]=-o*l,e[2]=E-d*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,m=l*p,_=c*u,E=c*p;e[0]=d+E*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=m*o-_,e[6]=E+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,m=l*p,_=c*u,E=c*p;e[0]=d-E*o,e[4]=-a*p,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*u,e[9]=E-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,m=a*p,_=o*u,E=o*p;e[0]=l*u,e[4]=_*c-m,e[8]=d*c+E,e[1]=l*p,e[5]=E*c+d,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,m=a*c,_=o*l,E=o*c;e[0]=l*u,e[4]=E-d*p,e[8]=_*p+m,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*p+_,e[10]=d-E*p}else if(t.order==="XZY"){let d=a*l,m=a*c,_=o*l,E=o*c;e[0]=l*u,e[4]=-p,e[8]=c*u,e[1]=d*p+E,e[5]=a*u,e[9]=m*p-_,e[2]=_*p-m,e[6]=o*u,e[10]=E*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jh,t,$h)}lookAt(t,e,n){let s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Yn.crossVectors(n,nn),Yn.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Yn.crossVectors(n,nn)),Yn.normalize(),cr.crossVectors(nn,Yn),s[0]=Yn.x,s[4]=cr.x,s[8]=nn.x,s[1]=Yn.y,s[5]=cr.y,s[9]=nn.y,s[2]=Yn.z,s[6]=cr.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],p=n[5],d=n[9],m=n[13],_=n[2],E=n[6],f=n[10],h=n[14],v=n[3],A=n[7],b=n[11],R=n[15],w=s[0],g=s[4],S=s[8],L=s[12],I=s[1],F=s[5],z=s[9],Y=s[13],N=s[2],K=s[6],Q=s[10],Z=s[14],dt=s[3],J=s[7],ot=s[11],ht=s[15];return r[0]=a*w+o*I+l*N+c*dt,r[4]=a*g+o*F+l*K+c*J,r[8]=a*S+o*z+l*Q+c*ot,r[12]=a*L+o*Y+l*Z+c*ht,r[1]=u*w+p*I+d*N+m*dt,r[5]=u*g+p*F+d*K+m*J,r[9]=u*S+p*z+d*Q+m*ot,r[13]=u*L+p*Y+d*Z+m*ht,r[2]=_*w+E*I+f*N+h*dt,r[6]=_*g+E*F+f*K+h*J,r[10]=_*S+E*z+f*Q+h*ot,r[14]=_*L+E*Y+f*Z+h*ht,r[3]=v*w+A*I+b*N+R*dt,r[7]=v*g+A*F+b*K+R*J,r[11]=v*S+A*z+b*Q+R*ot,r[15]=v*L+A*Y+b*Z+R*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],p=t[6],d=t[10],m=t[14],_=t[3],E=t[7],f=t[11],h=t[15],v=l*m-c*d,A=o*m-c*p,b=o*d-l*p,R=a*m-c*u,w=a*d-l*u,g=a*p-o*u;return e*(E*v-f*A+h*b)-n*(_*v-f*R+h*w)+s*(_*A-E*R+h*g)-r*(_*b-E*w+f*g)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=t[9],d=t[10],m=t[11],_=t[12],E=t[13],f=t[14],h=t[15],v=e*o-n*a,A=e*l-s*a,b=e*c-r*a,R=n*l-s*o,w=n*c-r*o,g=s*c-r*l,S=u*E-p*_,L=u*f-d*_,I=u*h-m*_,F=p*f-d*E,z=p*h-m*E,Y=d*h-m*f,N=v*Y-A*z+b*F+R*I-w*L+g*S;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/N;return t[0]=(o*Y-l*z+c*F)*K,t[1]=(s*z-n*Y-r*F)*K,t[2]=(E*g-f*w+h*R)*K,t[3]=(d*w-p*g-m*R)*K,t[4]=(l*I-a*Y-c*L)*K,t[5]=(e*Y-s*I+r*L)*K,t[6]=(f*b-_*g-h*A)*K,t[7]=(u*g-d*b+m*A)*K,t[8]=(a*z-o*I+c*S)*K,t[9]=(n*I-e*z-r*S)*K,t[10]=(_*w-E*b+h*v)*K,t[11]=(p*b-u*w-m*v)*K,t[12]=(o*L-a*F-l*S)*K,t[13]=(e*F-n*L+s*S)*K,t[14]=(E*A-_*R-f*v)*K,t[15]=(u*R-p*A+d*v)*K,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,p=o+o,d=r*c,m=r*u,_=r*p,E=a*u,f=a*p,h=o*p,v=l*c,A=l*u,b=l*p,R=n.x,w=n.y,g=n.z;return s[0]=(1-(E+h))*R,s[1]=(m+b)*R,s[2]=(_-A)*R,s[3]=0,s[4]=(m-b)*w,s[5]=(1-(d+h))*w,s[6]=(f+v)*w,s[7]=0,s[8]=(_+A)*g,s[9]=(f-v)*g,s[10]=(1-(d+E))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ri.set(s[0],s[1],s[2]).length(),o=Ri.set(s[4],s[5],s[6]).length(),l=Ri.set(s[8],s[9],s[10]).length();r<0&&(a=-a),gn.copy(this);let c=1/a,u=1/o,p=1/l;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=p,gn.elements[9]*=p,gn.elements[10]*=p,e.setFromRotationMatrix(gn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=dn,l=!1){let c=this.elements,u=2*r/(e-t),p=2*r/(n-s),d=(e+t)/(e-t),m=(n+s)/(n-s),_,E;if(l)_=r/(a-r),E=a*r/(a-r);else if(o===dn)_=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===Hi)_=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=dn,l=!1){let c=this.elements,u=2/(e-t),p=2/(n-s),d=-(e+t)/(e-t),m=-(n+s)/(n-s),_,E;if(l)_=1/(a-r),E=a/(a-r);else if(o===dn)_=-2/(a-r),E=-(a+r)/(a-r);else if(o===Hi)_=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};aa.prototype.isMatrix4=!0;var ae=aa,Ri=new O,gn=new ae,Jh=new O(0,0,0),$h=new O(1,1,1),Yn=new O,cr=new O,nn=new O,Nl=new ae,Ul=new an,zn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],p=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ul.setFromEuler(this),this.setFromQuaternion(Ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var qi=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kh=0,Fl=new O,Ci=new an,Ln=new ae,hr=new O,ds=new O,jh=new O,Qh=new an,Ol=new O(1,0,0),Bl=new O(0,1,0),zl=new O(0,0,1),kl={type:"added"},tu={type:"removed"},Pi={type:"childadded",child:null},ao={type:"childremoved",child:null},De=class i extends yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new zn,n=new an,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Wt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(Ol,t)}rotateY(t){return this.rotateOnAxis(Bl,t)}rotateZ(t){return this.rotateOnAxis(zl,t)}translateOnAxis(t,e){return Fl.copy(t).applyQuaternion(this.quaternion),this.position.add(Fl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ol,t)}translateY(t){return this.translateOnAxis(Bl,t)}translateZ(t){return this.translateOnAxis(zl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hr.copy(t):hr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(ds,hr,this.up):Ln.lookAt(hr,ds,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kl),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tu),ao.child=t,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kl),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,t,jh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,Qh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),p=a(t.shapes),d=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};De.DEFAULT_UP=new O(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var be=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},eu={type:"move"},Yi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let E of t.hand.values()){let f=e.getJointPose(E,n),h=this._getHandJoint(c,E);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}let u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=u.position.distanceTo(p.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},ur={h:0,s:0,l:0};function oo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=sl(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=oo(a,r,t+1/3),this.g=oo(a,r,t),this.b=oo(a,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){let n=kc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return ne.workingToColorSpace(Oe.copy(this),t),Math.round(Qt(Oe.r*255,0,255))*65536+Math.round(Qt(Oe.g*255,0,255))*256+Math.round(Qt(Oe.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Oe.copy(this),e);let n=Oe.r,s=Oe.g,r=Oe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=We){ne.workingToColorSpace(Oe.copy(this),t);let e=Oe.r,n=Oe.g,s=Oe.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(ur);let n=xs(Zn.h,ur.h,e),s=xs(Zn.s,ur.s,e),r=xs(Zn.l,ur.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Oe=new Zt;Zt.NAMES=kc;var Es=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Zt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ts=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},_n=new O,Dn=new O,lo=new O,Nn=new O,Ii=new O,Li=new O,Gl=new O,co=new O,ho=new O,uo=new O,fo=new ve,po=new ve,mo=new ve,jn=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_n.subVectors(s,e),Dn.subVectors(n,e),lo.subVectors(t,e);let a=_n.dot(_n),o=_n.dot(Dn),l=_n.dot(lo),c=Dn.dot(Dn),u=Dn.dot(lo),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,m=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return fo.setScalar(0),po.setScalar(0),mo.setScalar(0),fo.fromBufferAttribute(t,e),po.fromBufferAttribute(t,n),mo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(fo,r.x),a.addScaledVector(po,r.y),a.addScaledVector(mo,r.z),a}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),Dn.subVectors(t,e),_n.cross(Dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),_n.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ii.subVectors(s,n),Li.subVectors(r,n),co.subVectors(t,n);let l=Ii.dot(co),c=Li.dot(co);if(l<=0&&c<=0)return e.copy(n);ho.subVectors(t,s);let u=Ii.dot(ho),p=Li.dot(ho);if(u>=0&&p<=u)return e.copy(s);let d=l*p-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),e.copy(n).addScaledVector(Ii,a);uo.subVectors(t,r);let m=Ii.dot(uo),_=Li.dot(uo);if(_>=0&&m<=_)return e.copy(r);let E=m*c-l*_;if(E<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Li,o);let f=u*_-m*p;if(f<=0&&p-u>=0&&m-_>=0)return Gl.subVectors(r,s),o=(p-u)/(p-u+(m-_)),e.copy(s).addScaledVector(Gl,o);let h=1/(f+E+d);return a=E*h,o=d*h,e.copy(n).addScaledVector(Ii,a).addScaledVector(Li,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qn=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)),dr.applyMatrix4(t.matrixWorld),this.union(dr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),fr.subVectors(this.max,fs),Di.subVectors(t.a,fs),Ni.subVectors(t.b,fs),Ui.subVectors(t.c,fs),Jn.subVectors(Ni,Di),$n.subVectors(Ui,Ni),ui.subVectors(Di,Ui);let e=[0,-Jn.z,Jn.y,0,-$n.z,$n.y,0,-ui.z,ui.y,Jn.z,0,-Jn.x,$n.z,0,-$n.x,ui.z,0,-ui.x,-Jn.y,Jn.x,0,-$n.y,$n.x,0,-ui.y,ui.x,0];return!go(e,Di,Ni,Ui,fr)||(e=[1,0,0,0,1,0,0,0,1],!go(e,Di,Ni,Ui,fr))?!1:(pr.crossVectors(Jn,$n),e=[pr.x,pr.y,pr.z],go(e,Di,Ni,Ui,fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Un=[new O,new O,new O,new O,new O,new O,new O,new O],xn=new O,dr=new Qn,Di=new O,Ni=new O,Ui=new O,Jn=new O,$n=new O,ui=new O,fs=new O,fr=new O,pr=new O,di=new O;function go(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){di.fromArray(i,r);let o=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),l=t.dot(di),c=e.dot(di),u=n.dot(di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Te=new O,mr=new Ut,nu=0,An=class extends yn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dc,this.updateRanges=[],this.gpuType=Mn,this.version=0,this._normalizationScale=t!==void 0?al(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)mr.fromBufferAttribute(this,e),mr.applyMatrix3(t),this.setXY(e,mr.x,mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Bc(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):zc(t,this.array)}};var ws=class extends An{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var As=class extends An{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ue=class extends An{constructor(t,e,n){super(new Float32Array(t),e,n)}},iu=new Qn,ps=new O,_o=new O,Zi=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):iu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);let e=ps.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ps,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_o.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(_o)),this.expandByPoint(ps.copy(t.center).sub(_o))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},su=0,un=new ae,xo=new De,Fi=new O,sn=new Qn,ms=new Qn,Ie=new O,ln=class i extends yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ch(t)?As:ws)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return xo.lookAt(t),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ue(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(sn.min,ms.min),sn.expandByPoint(Ie),Ie.addVectors(sn.max,ms.max),sn.expandByPoint(Ie)):(sn.expandByPoint(ms.min),sn.expandByPoint(ms.max))}sn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ie.fromBufferAttribute(o,c),l&&(Fi.fromBufferAttribute(t,c),Ie.add(Fi)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new An(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new O,l[L]=new O;let u=new O,p=new O,d=new O,m=new Ut,_=new Ut,E=new Ut,f=new O,h=new O;function v(L,I,F){c[L]=c[I]=c[F]=1,u.fromBufferAttribute(n,L),p.fromBufferAttribute(n,I),d.fromBufferAttribute(n,F),m.fromBufferAttribute(r,L),_.fromBufferAttribute(r,I),E.fromBufferAttribute(r,F),p.sub(u),d.sub(u),_.sub(m),E.sub(m);let z=1/(_.x*E.y-E.x*_.y);isFinite(z)&&(f.copy(p).multiplyScalar(E.y).addScaledVector(d,-_.y).multiplyScalar(z),h.copy(d).multiplyScalar(_.x).addScaledVector(p,-E.x).multiplyScalar(z),o[L].add(f),o[I].add(f),o[F].add(f),l[L].add(h),l[I].add(h),l[F].add(h))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let L=0,I=A.length;L<I;++L){let F=A[L],z=F.start,Y=F.count;for(let N=z,K=z+Y;N<K;N+=3)v(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let b=new O,R=new O,w=new O,g=new O;function S(L){w.fromBufferAttribute(s,L),g.copy(w);let I=o[L];b.copy(I),b.sub(w.multiplyScalar(w.dot(I))).normalize(),R.crossVectors(g,I);let z=R.dot(l[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,z)}for(let L=0,I=n.count;L<I;++L)c[L]&&S(L);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,u=new O,p=new O;if(t)for(let d=0,m=t.count;d<m;d+=3){let _=t.getX(d+0),E=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,E),a.fromBufferAttribute(e,f),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,p=o.normalized,d=new c.constructor(l.length*u),m=0,_=0;for(let E=0,f=l.length;E<f;E++){o.isInterleavedBufferAttribute?m=l[E]*o.data.stride+o.offset:m=l[E]*u;for(let h=0;h<u;h++)d[_++]=c[m++]}return new An(d,u,p)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,p=c.length;u<p;u++){let d=c[u],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let p=0,d=c.length;p<d;p++){let m=c[p];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],p=r[c];for(let d=0,m=p.length;d<m;d++)u.push(p[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var yo=new O,ru=new O,au=new Wt,rn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=yo.subVectors(n,e).cross(ru.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(yo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||au.getNormalMatrix(t),s=this.coplanarPoint(yo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ou=0,ti=class extends yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=is(),this.name="",this.type="Material",this.blending=ts,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fo,this.blendDst=Oo,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new rn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Fn=new O,vo=new O,gr=new O,_r=new O,mi=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){vo.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),_r.copy(this.origin).sub(vo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(gr),o=_r.dot(this.direction),l=-_r.dot(gr),c=_r.lengthSq(),u=Math.abs(1-a*a),p,d,m,_;if(u>0)if(p=a*l-o,d=a*o-l,_=r*u,p>=0)if(d>=-_)if(d<=_){let E=1/u;p*=E,d*=E,m=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=r,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;else d=-r,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;else d<=-_?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+d*(d+2*l)+c):d<=_?(p=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+d*(d+2*l)+c);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(vo).addScaledVector(gr,d),m}intersectSphere(t,e){if(t.radius<0)return null;Fn.subVectors(t.center,this.origin);let n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(o=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,p=t.x-a.x,d=t.y-a.y,m=t.z-a.z,_=e.x-a.x,E=e.y-a.y,f=e.z-a.z,h=n.x-a.x,v=n.y-a.y,A=n.z-a.z,b=Math.abs(l),R=Math.abs(c),w=Math.abs(u),g,S,L,I,F,z,Y,N,K,Q,Z,dt;if(b>=R&&b>=w?(L=l,z=p,K=_,dt=h,l>=0?(g=c,S=u,I=d,F=m,Y=E,N=f,Q=v,Z=A):(g=u,S=c,I=m,F=d,Y=f,N=E,Q=A,Z=v)):R>=w?(L=c,z=d,K=E,dt=v,c>=0?(g=u,S=l,I=m,F=p,Y=f,N=_,Q=A,Z=h):(g=l,S=u,I=p,F=m,Y=_,N=f,Q=h,Z=A)):(L=u,z=m,K=f,dt=A,u>=0?(g=l,S=c,I=p,F=d,Y=_,N=E,Q=h,Z=v):(g=c,S=l,I=d,F=p,Y=E,N=_,Q=v,Z=h)),L===0)return null;let J=g/L,ot=S/L,ht=1/L,Pt=I-J*z,pt=F-ot*z,et=Y-J*K,wt=N-ot*K,Lt=Q-J*dt,Bt=Z-ot*dt,At=Lt*wt-Bt*et,Gt=Pt*Bt-pt*Lt,xe=et*pt-wt*Pt;if(s){if(At<0||Gt<0||xe<0)return null}else if((At<0||Gt<0||xe<0)&&(At>0||Gt>0||xe>0))return null;let Tt=At+Gt+xe;if(Tt===0)return null;let Kt=ht*(At*z+Gt*K+xe*dt);return(Tt>0?Kt<0:Kt>0)?null:this.at(Kt/Tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ji=class extends ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Hl=new ae,fi=new mi,xr=new Zi,Vl=new O,yr=new O,vr=new O,Mr=new O,Mo=new O,Sr=new O,Wl=new O,br=new O,Ne=class extends De{constructor(t=new ln,e=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Sr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],p=r[l];u!==0&&(Mo.fromBufferAttribute(p,t),a?Sr.addScaledVector(Mo,u):Sr.addScaledVector(Mo.sub(e),u))}e.add(Sr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(r),fi.copy(t.ray).recast(t.near),!(xr.containsPoint(fi.origin)===!1&&(fi.intersectSphere(xr,Vl)===null||fi.origin.distanceToSquared(Vl)>(t.far-t.near)**2))&&(Hl.copy(r).invert(),fi.copy(t.ray).applyMatrix4(Hl),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,E=d.length;_<E;_++){let f=d[_],h=a[f.materialIndex],v=Math.max(f.start,m.start),A=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let b=v,R=A;b<R;b+=3){let w=o.getX(b),g=o.getX(b+1),S=o.getX(b+2);s=Er(this,h,t,n,c,u,p,w,g,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),E=Math.min(o.count,m.start+m.count);for(let f=_,h=E;f<h;f+=3){let v=o.getX(f),A=o.getX(f+1),b=o.getX(f+2);s=Er(this,a,t,n,c,u,p,v,A,b),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,E=d.length;_<E;_++){let f=d[_],h=a[f.materialIndex],v=Math.max(f.start,m.start),A=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let b=v,R=A;b<R;b+=3){let w=b,g=b+1,S=b+2;s=Er(this,h,t,n,c,u,p,w,g,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let f=_,h=E;f<h;f+=3){let v=f,A=f+1,b=f+2;s=Er(this,a,t,n,c,u,p,v,A,b),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function lu(i,t,e,n,s,r,a,o){let l;if(t.side===qe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===li,o),l===null)return null;br.copy(o),br.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(br);return c<e.near||c>e.far?null:{distance:c,point:br.clone(),object:i}}function Er(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,yr),i.getVertexPosition(l,vr),i.getVertexPosition(c,Mr);let u=lu(i,t,e,n,yr,vr,Mr,Wl);if(u){let p=new O;jn.getBarycoord(Wl,yr,vr,Mr,p),s&&(u.uv=jn.getInterpolatedAttribute(s,o,l,c,p,new Ut)),r&&(u.uv1=jn.getInterpolatedAttribute(r,o,l,c,p,new Ut)),a&&(u.normal=jn.getInterpolatedAttribute(a,o,l,c,p,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new O,materialIndex:0};jn.getNormal(yr,vr,Mr,d.normal),u.face=d,u.barycoord=p}return u}var Wr=class extends $e{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Le,u=Le,p,d){super(null,a,o,l,c,u,s,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pi=new Zi,cu=new Ut(.5,.5),Tr=new O,ei=class{constructor(t=new rn,e=new rn,n=new rn,s=new rn,r=new rn,a=new rn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=dn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],p=r[5],d=r[6],m=r[7],_=r[8],E=r[9],f=r[10],h=r[11],v=r[12],A=r[13],b=r[14],R=r[15];if(s[0].setComponents(c-a,m-u,h-_,R-v).normalize(),s[1].setComponents(c+a,m+u,h+_,R+v).normalize(),s[2].setComponents(c+o,m+p,h+E,R+A).normalize(),s[3].setComponents(c-o,m-p,h-E,R-A).normalize(),n)s[4].setComponents(l,d,f,b).normalize(),s[5].setComponents(c-l,m-d,h-f,R-b).normalize();else if(s[4].setComponents(c-l,m-d,h-f,R-b).normalize(),e===dn)s[5].setComponents(c+l,m+d,h+f,R+b).normalize();else if(e===Hi)s[5].setComponents(l,d,f,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){pi.center.set(0,0,0);let e=cu.distanceTo(t.center);return pi.radius=.7071067811865476+e,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Tr.x=s.normal.x>0?t.max.x:t.min.x,Tr.y=s.normal.y>0?t.max.y:t.min.y,Tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Xl=new ae,Xr=class i{constructor(){this.coordinateSystem=dn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Xl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ei),n[s].setFromProjectionMatrix(Xl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ei),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Rs=class extends $e{constructor(t=[],e=vi,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var kn=class extends $e{constructor(t,e,n=vn,s,r,a,o=Le,l=Le,c,u=Bn,p=1){if(u!==Bn&&u!==Vn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:p};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Cs=class extends kn{constructor(t,e=vn,n=vi,s,r,a=Le,o=Le,l,c=Bn){let u={width:t,height:t,depth:1},p=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ps=class extends $e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Xt=class i extends ln{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],p=[],d=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(p,2));function _(E,f,h,v,A,b,R,w,g,S,L){let I=b/g,F=R/S,z=b/2,Y=R/2,N=w/2,K=g+1,Q=S+1,Z=0,dt=0,J=new O;for(let ot=0;ot<Q;ot++){let ht=ot*F-Y;for(let Pt=0;Pt<K;Pt++){let pt=Pt*I-z;J[E]=pt*v,J[f]=ht*A,J[h]=N,c.push(J.x,J.y,J.z),J[E]=0,J[f]=0,J[h]=w>0?1:-1,u.push(J.x,J.y,J.z),p.push(Pt/g),p.push(1-ot/S),Z+=1}}for(let ot=0;ot<S;ot++)for(let ht=0;ht<g;ht++){let Pt=d+ht+K*ot,pt=d+ht+K*(ot+1),et=d+(ht+1)+K*(ot+1),wt=d+(ht+1)+K*ot;l.push(Pt,pt,wt),l.push(pt,et,wt),dt+=6}o.addGroup(m,dt,L),m+=dt,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Is=class i extends ln{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=e/2,p=Math.PI/2*t,d=e,m=2*p+d,_=n*2+r,E=s+1,f=new O,h=new O;for(let v=0;v<=_;v++){let A=0,b=0,R=0,w=0;if(v<=n){let L=v/n,I=L*Math.PI/2;b=-u-t*Math.cos(I),R=t*Math.sin(I),w=-t*Math.cos(I),A=L*p}else if(v<=n+r){let L=(v-n)/r;b=-u+L*e,R=t,w=0,A=p+L*d}else{let L=(v-n-r)/n,I=L*Math.PI/2;b=u+t*Math.sin(I),R=t*Math.cos(I),w=t*Math.sin(I),A=p+d+L*p}let g=Math.max(0,Math.min(1,A/m)),S=0;v===0?S=.5/s:v===_&&(S=-.5/s);for(let L=0;L<=s;L++){let I=L/s,F=I*Math.PI*2,z=Math.sin(F),Y=Math.cos(F);h.x=-R*Y,h.y=b,h.z=R*z,o.push(h.x,h.y,h.z),f.set(-R*Y,w,R*z),f.normalize(),l.push(f.x,f.y,f.z),c.push(I+S,g)}if(v>0){let L=(v-1)*E;for(let I=0;I<s;I++){let F=L+I,z=L+I+1,Y=v*E+I,N=v*E+I+1;a.push(F,z,Y),a.push(z,N,Y)}}}this.setIndex(a),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ls=class i extends ln{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new O,u=new Ut;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=e;p++,d+=3){let m=n+p/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(o,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},de=class i extends ln{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],p=[],d=[],m=[],_=0,E=[],f=n/2,h=0;v(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new ue(p,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(m,2));function v(){let b=new O,R=new O,w=0,g=(e-t)/n;for(let S=0;S<=r;S++){let L=[],I=S/r,F=I*(e-t)+t;for(let z=0;z<=s;z++){let Y=z/s,N=Y*l+o,K=Math.sin(N),Q=Math.cos(N);R.x=F*K,R.y=-I*n+f,R.z=F*Q,p.push(R.x,R.y,R.z),b.set(K,g,Q).normalize(),d.push(b.x,b.y,b.z),m.push(Y,1-I),L.push(_++)}E.push(L)}for(let S=0;S<s;S++)for(let L=0;L<r;L++){let I=E[L][S],F=E[L+1][S],z=E[L+1][S+1],Y=E[L][S+1];(t>0||L!==0)&&(u.push(I,F,Y),w+=3),(e>0||L!==r-1)&&(u.push(F,z,Y),w+=3)}c.addGroup(h,w,0),h+=w}function A(b){let R=_,w=new Ut,g=new O,S=0,L=b===!0?t:e,I=b===!0?1:-1;for(let z=1;z<=s;z++)p.push(0,f*I,0),d.push(0,I,0),m.push(.5,.5),_++;let F=_;for(let z=0;z<=s;z++){let N=z/s*l+o,K=Math.cos(N),Q=Math.sin(N);g.x=L*Q,g.y=f*I,g.z=L*K,p.push(g.x,g.y,g.z),d.push(0,I,0),w.x=K*.5+.5,w.y=Q*.5*I+.5,m.push(w.x,w.y),_++}for(let z=0;z<s;z++){let Y=R+z,N=F+z;b===!0?u.push(N,N+1,Y):u.push(N+1,N,Y),S+=3}c.addGroup(h,S,b===!0?1:2),h+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Gn=class i extends de{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ds=class i extends ln{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(r.slice(),3)),this.setAttribute("uv",new ue(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let A=new O,b=new O,R=new O;for(let w=0;w<e.length;w+=3)m(e[w+0],A),m(e[w+1],b),m(e[w+2],R),l(A,b,R,v)}function l(v,A,b,R){let w=R+1,g=[];for(let S=0;S<=w;S++){g[S]=[];let L=v.clone().lerp(b,S/w),I=A.clone().lerp(b,S/w),F=w-S;for(let z=0;z<=F;z++)z===0&&S===w?g[S][z]=L:g[S][z]=L.clone().lerp(I,z/F)}for(let S=0;S<w;S++)for(let L=0;L<2*(w-S)-1;L++){let I=Math.floor(L/2);L%2===0?(d(g[S][I+1]),d(g[S+1][I]),d(g[S][I])):(d(g[S][I+1]),d(g[S+1][I+1]),d(g[S+1][I]))}}function c(v){let A=new O;for(let b=0;b<r.length;b+=3)A.x=r[b+0],A.y=r[b+1],A.z=r[b+2],A.normalize().multiplyScalar(v),r[b+0]=A.x,r[b+1]=A.y,r[b+2]=A.z}function u(){let v=new O;for(let A=0;A<r.length;A+=3){v.x=r[A+0],v.y=r[A+1],v.z=r[A+2];let b=f(v)/2/Math.PI+.5,R=h(v)/Math.PI+.5;a.push(b,1-R)}_(),p()}function p(){for(let v=0;v<a.length;v+=6){let A=a[v+0],b=a[v+2],R=a[v+4],w=Math.max(A,b,R),g=Math.min(A,b,R);w>.9&&g<.1&&(A<.2&&(a[v+0]+=1),b<.2&&(a[v+2]+=1),R<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function m(v,A){let b=v*3;A.x=t[b+0],A.y=t[b+1],A.z=t[b+2]}function _(){let v=new O,A=new O,b=new O,R=new O,w=new Ut,g=new Ut,S=new Ut;for(let L=0,I=0;L<r.length;L+=9,I+=6){v.set(r[L+0],r[L+1],r[L+2]),A.set(r[L+3],r[L+4],r[L+5]),b.set(r[L+6],r[L+7],r[L+8]),w.set(a[I+0],a[I+1]),g.set(a[I+2],a[I+3]),S.set(a[I+4],a[I+5]),R.copy(v).add(A).add(b).divideScalar(3);let F=f(R);E(w,I+0,v,F),E(g,I+2,A,F),E(S,I+4,b,F)}}function E(v,A,b,R){R<0&&v.x===1&&(a[A]=v.x-1),b.x===0&&b.z===0&&(a[A]=R/2/Math.PI+.5)}function f(v){return Math.atan2(v.z,-v.x)}function h(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},ni=class i extends Ds{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ns=class i extends Ds{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Us=class i extends ln{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,p=t/o,d=e/l,m=[],_=[],E=[],f=[];for(let h=0;h<u;h++){let v=h*d-a;for(let A=0;A<c;A++){let b=A*p-r;_.push(b,-v,0),E.push(0,0,1),f.push(A/o),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<o;v++){let A=v+c*h,b=v+c*(h+1),R=v+1+c*(h+1),w=v+1+c*h;m.push(A,b,w),m.push(b,R,w)}this.setIndex(m),this.setAttribute("position",new ue(_,3)),this.setAttribute("normal",new ue(E,3)),this.setAttribute("uv",new ue(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var cn=class i extends ln{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],p=new O,d=new O,m=[],_=[],E=[],f=[];for(let h=0;h<=n;h++){let v=[],A=h/n,b=a+A*o,R=t*Math.cos(b),w=Math.sqrt(t*t-R*R),g=0;h===0&&a===0?g=.5/e:h===n&&l===Math.PI&&(g=-.5/e);for(let S=0;S<=e;S++){let L=S/e,I=s+L*r;p.x=-w*Math.cos(I),p.y=R,p.z=w*Math.sin(I),_.push(p.x,p.y,p.z),d.copy(p).normalize(),E.push(d.x,d.y,d.z),f.push(L+g,1-A),v.push(c++)}u.push(v)}for(let h=0;h<n;h++)for(let v=0;v<e;v++){let A=u[h][v+1],b=u[h][v],R=u[h+1][v],w=u[h+1][v+1];(h!==0||a>0)&&m.push(A,b,w),(h!==n-1||l<Math.PI)&&m.push(b,R,w)}this.setIndex(m),this.setAttribute("position",new ue(_,3)),this.setAttribute("normal",new ue(E,3)),this.setAttribute("uv",new ue(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Si(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ql(s))s.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ql(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ze(i){let t={};for(let e=0;e<i.length;e++){let n=Si(i[e]);for(let s in n)t[s]=n[s]}return t}function ql(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function hu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ol(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var Gc={clone:Si,merge:ze},uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uu,this.fragmentShader=du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Si(t.uniforms),this.uniformsGroups=hu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Zt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ve().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Wt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},qr=class extends fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Fs=class extends ti{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qa,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Yr=class extends ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Zr=class extends ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Oi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function wr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ii=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Jr=class extends ii{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eo,endingEnd:Eo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case To:r=t,o=2*e-n;break;case wo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case To:a=t,l=2*n-e;break;case wo:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,m=this._weightNext,_=(n-e)/(s-e),E=_*_,f=E*_,h=-d*f+2*d*E-d*_,v=(1+d)*f+(-1.5-2*d)*E+(-.5+d)*_+1,A=(-1-m)*f+(1.5+m)*E+.5*_,b=m*f-m*E;for(let R=0;R!==o;++R)r[R]=h*a[u+R]+v*a[c+R]+A*a[l+R]+b*a[p+R];return r}},$r=class extends ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),p=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*p+a[l+d]*u;return r}},Kr=class extends ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},jr=class extends ii{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let _=(n-e)/(s-e),E=1-_;for(let f=0;f!==o;++f)r[f]=a[c+f]*E+a[l+f]*_;return r}let d=o*2,m=t-1;for(let _=0;_!==o;++_){let E=a[c+_],f=a[l+_],h=m*d+_*2,v=p[h],A=p[h+1],b=t*d+_*2,R=u[b],w=u[b+1],g=pu(n,e,v,R,s);r[_]=Hc(g,E,A,w,f)}return r}};function Hc(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function fu(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function pu(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Hc(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=fu(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var hn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Oi(e,this.TimeBufferType),this.values=Oi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Oi(t.times,Array),values:Oi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),wr(t.settings)&&(n.settings={inTangents:Oi(t.settings.inTangents,Array),outTangents:Oi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Kr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $r(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Jr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new jr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ys:e=this.InterpolantFactoryMethodDiscrete;break;case kr:e=this.InterpolantFactoryMethodLinear;break;case Cr:e=this.InterpolantFactoryMethodSmooth;break;case bo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ys;case this.InterpolantFactoryMethodLinear:return kr;case this.InterpolantFactoryMethodSmooth:return Cr;case this.InterpolantFactoryMethodBezier:return bo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;wr(this.settings)&&(Yl(this.settings.inTangents,t),Yl(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;wr(this.settings)&&(Zl(this.settings.inTangents,t),Zl(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ht("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Ph(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Cr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*n,d=p-n,m=p+n;for(let _=0;_!==n;++_){let E=e[p+_];if(E!==e[d+_]||E!==e[m+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*n,d=a*n;for(let m=0;m!==n;++m)e[d+m]=e[p+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,wr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Yl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Zl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=kr;var si=class extends hn{constructor(t,e,n){super(t,e,n)}};si.prototype.ValueTypeName="bool";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=ys;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};Qr.prototype.ValueTypeName="color";var ta=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};ta.prototype.ValueTypeName="number";var ea=class extends ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)an.slerpFlat(r,0,a,c-o,a,c,l);return r}},Os=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ea(this.times,this.values,this.getValueSize(),t)}};Os.prototype.ValueTypeName="quaternion";Os.prototype.InterpolantFactoryMethodSmooth=void 0;var ri=class extends hn{constructor(t,e,n){super(t,e,n)}};ri.prototype.ValueTypeName="string";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=ys;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var na=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};na.prototype.ValueTypeName="vector";var ia=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,p){return c.push(u,p),this},this.removeHandler=function(u){let p=c.indexOf(u);return p!==-1&&c.splice(p,2),this},this.getHandler=function(u){for(let p=0,d=c.length;p<d;p+=2){let m=c[p],_=c[p+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Vc=new ia,sa=class{constructor(t){this.manager=t!==void 0?t:Vc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};sa.DEFAULT_MATERIAL_NAME="__DEFAULT";var gi=class extends De{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Bs=class extends gi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},So=new ae,Jl=new O,$l=new O,zs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=Ke,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ei,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Jl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jl),$l.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($l),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){So.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(So,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Hi||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(So)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ar=new O,Rr=new an,Tn=new O,ks=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ar,Rr,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ar,Rr,Tn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ar,Rr,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ar,Rr,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Kn=new O,Kl=new Ut,jl=new Ut,Be=class extends ks{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,Kl,jl),e.subVectors(jl,Kl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_s*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ao=class extends zs{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0}},Gs=class extends gi{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ao}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Hs=class extends ks{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ro=class extends zs{constructor(){super(new Hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$i=class extends gi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Ro}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Vs=class extends gi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Bi=-90,zi=1,Ki=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(Bi,zi,t,e);s.layers=this.layers,this.add(s);let r=new Be(Bi,zi,t,e);r.layers=this.layers,this.add(r);let a=new Be(Bi,zi,t,e);a.layers=this.layers,this.add(a);let o=new Be(Bi,zi,t,e);o.layers=this.layers,this.add(o);let l=new Be(Bi,zi,t,e);l.layers=this.layers,this.add(l);let c=new Be(Bi,zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let E=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=E,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(p,d,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ra=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var ll="\\[\\]\\.:\\/",mu=new RegExp("["+ll+"]","g"),cl="[^"+ll+"]",gu="[^"+ll.replace("\\.","")+"]",_u=/((?:WC+[\/:])*)/.source.replace("WC",cl),xu=/(WCOD+)?/.source.replace("WCOD",gu),yu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),vu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),Mu=new RegExp("^"+_u+xu+yu+vu+"$"),Su=["material","materials","bones","map"],Co=class{constructor(t,e,n){let s=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mu,"")}static parseTrackName(t){let e=Mu.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Su.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=Co;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Tg=new Float32Array(1);var Ql=new ae,Ws=class{constructor(t,e,n=0,s=1/0){this.ray=new mi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new qi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ht("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ql.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ql),this}intersectObject(t,e=!0,n=[]){return Po(t,this,n,e),n.sort(tc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Po(t[s],this,n,e);return n.sort(tc),n}};function tc(i,t){return i.distance-t.distance}function Po(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Po(r[a],t,e,!0)}}var ji=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ml=class ml{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};ml.prototype.isMatrix2=!0;var Io=ml;var Xs=class extends yn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function hl(i,t,e,n){let s=bu(n);switch(e){case $o:return i*t;case jo:return i*t/s.components*s.byteLength;case fa:return i*t/s.components*s.byteLength;case ci:return i*t*2/s.components*s.byteLength;case pa:return i*t*2/s.components*s.byteLength;case Ko:return i*t*3/s.components*s.byteLength;case bn:return i*t*4/s.components*s.byteLength;case ma:return i*t*4/s.components*s.byteLength;case Zs:case Js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $s:case Ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _a:case ya:return Math.max(i,16)*Math.max(t,8)/4;case ga:case xa:return Math.max(i,8)*Math.max(t,8)/2;case va:case Ma:case ba:case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sa:case js:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ka:case Ga:case Ha:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Va:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qs:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bu(i){switch(i){case Ke:case qo:return{byteLength:1,components:1};case ns:case Yo:case Sn:return{byteLength:2,components:1};case ua:case da:return{byteLength:2,components:4};case vn:case ha:case Mn:return{byteLength:4,components:1};case Zo:case Jo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function uh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Tu(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,p=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let u=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,u);else{p.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<p.length;m++){let _=p[d],E=p[m];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++d,p[d]=E)}p.length=d+1;for(let m=0,_=p.length;m<_;m++){let E=p[m];i.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var wu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Au=`#ifdef USE_ALPHAHASH
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
#endif`,Ru=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lu=`#ifdef USE_AOMAP
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
#endif`,Du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nu=`#ifdef USE_BATCHING
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
#endif`,Uu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ou=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zu=`#ifdef USE_IRIDESCENCE
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
#endif`,ku=`#ifdef USE_BUMPMAP
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
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ju=`#define PI 3.141592653589793
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
} // validated`,$u=`vec3 transformedNormal = objectNormal;
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
#endif`,Ku=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ju=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",nd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,id=`#ifdef USE_ENVMAP
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
#endif`,sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,rd=`#ifdef USE_ENVMAP
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
#endif`,ad=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,od=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dd=`#ifdef USE_GRADIENTMAP
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
}`,fd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_d=`#ifdef USE_ENVMAP
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
#endif`,xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sd=`PhysicalMaterial material;
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
#endif`,bd=`uniform sampler2D dfgLUT;
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
}`,Ed=`
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
#endif`,Td=`#if defined( RE_IndirectDiffuse )
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
#endif`,wd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ad=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Rd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Id=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ld=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ud=`#if defined( USE_POINTS_UV )
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
#endif`,Fd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Od=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zd=`#if defined( USE_MORPHCOLORS )
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
#endif`,kd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gd=`#ifdef USE_MORPHTARGETS
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
#endif`,Hd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zd=`#ifdef USE_NORMALMAP
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
#endif`,Jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$d=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ef=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,af=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,of=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uf=`float getShadowMask() {
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
}`,df=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ff=`#ifdef USE_SKINNING
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
#endif`,pf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mf=`#ifdef USE_SKINNING
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
#endif`,gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_f=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vf=`#ifdef USE_TRANSMISSION
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
#endif`,Mf=`#ifdef USE_TRANSMISSION
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
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Af=`uniform sampler2D t2D;
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
}`,Rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cf=`uniform float backgroundBlurriness;
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
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,If=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`#include <common>
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
}`,Df=`#if DEPTH_PACKING == 3200
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
}`,Nf=`#define DISTANCE
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
}`,Uf=`#define DISTANCE
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
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Of=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`uniform float scale;
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
}`,zf=`uniform vec3 diffuse;
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
}`,kf=`#include <common>
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
}`,Gf=`uniform vec3 diffuse;
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
}`,Hf=`#define LAMBERT
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
}`,Vf=`#define LAMBERT
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
}`,Wf=`#define MATCAP
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
}`,Xf=`#define MATCAP
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
}`,qf=`#define NORMAL
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
}`,Yf=`#define NORMAL
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
}`,Zf=`#define PHONG
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
}`,Jf=`#define PHONG
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
}`,$f=`#define STANDARD
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
}`,Kf=`#define STANDARD
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
}`,jf=`#define TOON
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
}`,Qf=`#define TOON
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
}`,tp=`uniform float size;
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
}`,ep=`uniform vec3 diffuse;
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
}`,np=`#include <common>
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
}`,ip=`uniform vec3 color;
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
}`,sp=`uniform float rotation;
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
}`,rp=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:wu,alphahash_pars_fragment:Au,alphamap_fragment:Ru,alphamap_pars_fragment:Cu,alphatest_fragment:Pu,alphatest_pars_fragment:Iu,aomap_fragment:Lu,aomap_pars_fragment:Du,batching_pars_vertex:Nu,batching_vertex:Uu,begin_vertex:Fu,beginnormal_vertex:Ou,bsdfs:Bu,iridescence_fragment:zu,bumpmap_pars_fragment:ku,clipping_planes_fragment:Gu,clipping_planes_pars_fragment:Hu,clipping_planes_pars_vertex:Vu,clipping_planes_vertex:Wu,color_fragment:Xu,color_pars_fragment:qu,color_pars_vertex:Yu,color_vertex:Zu,common:Ju,defaultnormal_vertex:$u,displacementmap_pars_vertex:Ku,displacementmap_vertex:ju,emissivemap_fragment:Qu,emissivemap_pars_fragment:td,colorspace_fragment:ed,colorspace_pars_fragment:nd,envmap_fragment:id,envmap_common_pars_fragment:sd,envmap_pars_fragment:rd,envmap_pars_vertex:ad,envmap_physical_pars_fragment:_d,envmap_vertex:od,fog_vertex:ld,fog_pars_vertex:cd,fog_fragment:hd,fog_pars_fragment:ud,gradientmap_pars_fragment:dd,lightmap_pars_fragment:fd,lights_lambert_fragment:pd,lights_lambert_pars_fragment:md,lights_pars_begin:gd,lights_toon_fragment:xd,lights_toon_pars_fragment:yd,lights_phong_fragment:vd,lights_phong_pars_fragment:Md,lights_physical_fragment:Sd,lights_physical_pars_fragment:bd,lights_fragment_begin:Ed,lights_fragment_maps:Td,lights_fragment_end:wd,lightprobes_pars_fragment:Ad,logdepthbuf_fragment:Rd,logdepthbuf_pars_fragment:Cd,logdepthbuf_pars_vertex:Pd,logdepthbuf_vertex:Id,map_fragment:Ld,map_pars_fragment:Dd,map_particle_fragment:Nd,map_particle_pars_fragment:Ud,metalnessmap_fragment:Fd,metalnessmap_pars_fragment:Od,morphinstance_vertex:Bd,morphcolor_vertex:zd,morphnormal_vertex:kd,morphtarget_pars_vertex:Gd,morphtarget_vertex:Hd,normal_fragment_begin:Vd,normal_fragment_maps:Wd,normal_pars_fragment:Xd,normal_pars_vertex:qd,normal_vertex:Yd,normalmap_pars_fragment:Zd,clearcoat_normal_fragment_begin:Jd,clearcoat_normal_fragment_maps:$d,clearcoat_pars_fragment:Kd,iridescence_pars_fragment:jd,opaque_fragment:Qd,packing:tf,premultiplied_alpha_fragment:ef,project_vertex:nf,dithering_fragment:sf,dithering_pars_fragment:rf,roughnessmap_fragment:af,roughnessmap_pars_fragment:of,shadowmap_pars_fragment:lf,shadowmap_pars_vertex:cf,shadowmap_vertex:hf,shadowmask_pars_fragment:uf,skinbase_vertex:df,skinning_pars_vertex:ff,skinning_vertex:pf,skinnormal_vertex:mf,specularmap_fragment:gf,specularmap_pars_fragment:_f,tonemapping_fragment:xf,tonemapping_pars_fragment:yf,transmission_fragment:vf,transmission_pars_fragment:Mf,uv_pars_fragment:Sf,uv_pars_vertex:bf,uv_vertex:Ef,worldpos_vertex:Tf,background_vert:wf,background_frag:Af,backgroundCube_vert:Rf,backgroundCube_frag:Cf,cube_vert:Pf,cube_frag:If,depth_vert:Lf,depth_frag:Df,distance_vert:Nf,distance_frag:Uf,equirect_vert:Ff,equirect_frag:Of,linedashed_vert:Bf,linedashed_frag:zf,meshbasic_vert:kf,meshbasic_frag:Gf,meshlambert_vert:Hf,meshlambert_frag:Vf,meshmatcap_vert:Wf,meshmatcap_frag:Xf,meshnormal_vert:qf,meshnormal_frag:Yf,meshphong_vert:Zf,meshphong_frag:Jf,meshphysical_vert:$f,meshphysical_frag:Kf,meshtoon_vert:jf,meshtoon_frag:Qf,points_vert:tp,points_frag:ep,shadow_vert:np,shadow_frag:ip,sprite_vert:sp,sprite_frag:rp},Rt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Pn={basic:{uniforms:ze([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:ze([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:ze([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:ze([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:ze([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:ze([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:ze([Rt.points,Rt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:ze([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:ze([Rt.common,Rt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:ze([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:ze([Rt.sprite,Rt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:ze([Rt.common,Rt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:ze([Rt.lights,Rt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Pn.physical={uniforms:ze([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var Ya={r:0,b:0,g:0},ap=new ae,dh=new Wt;dh.set(-1,0,0,0,1,0,0,0,1);function op(i,t,e,n,s,r){let a=new Zt(0),o=s===!0?0:1,l,c,u=null,p=0,d=null;function m(v){let A=v.isScene===!0?v.background:null;if(A&&A.isTexture){let b=v.backgroundBlurriness>0;A=t.get(A,b)}return A}function _(v){let A=!1,b=m(v);b===null?f(a,o):b&&b.isColor&&(f(b,1),A=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(v,A){let b=m(A);b&&b.isCubeTexture?(c===void 0&&(c=new Ne(new Xt(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Si(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,w,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ap.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(dh),c.material.toneMapped=ne.getTransfer(b.colorSpace)!==re,(u!==b||p!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,p=b.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ne(new Us(2,2),new fn({name:"BackgroundMaterial",uniforms:Si(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ne.getTransfer(b.colorSpace)!==re,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||p!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,p=b.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function f(v,A){v.getRGB(Ya,ol(i)),e.buffers.color.setClear(Ya.r,Ya.g,Ya.b,A,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,A=1){a.set(v),o=A,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,f(a,o)},render:_,addToRenderList:E,dispose:h}}function lp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(F,z,Y,N,K){let Q=!1,Z=p(F,N,Y,z);r!==Z&&(r=Z,c(r.object)),Q=m(F,N,Y,K),Q&&_(F,N,Y,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,b(F,z,Y,N),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function u(F){return i.deleteVertexArray(F)}function p(F,z,Y,N){let K=N.wireframe===!0,Q=n[z.id];Q===void 0&&(Q={},n[z.id]=Q);let Z=F.isInstancedMesh===!0?F.id:0,dt=Q[Z];dt===void 0&&(dt={},Q[Z]=dt);let J=dt[Y.id];J===void 0&&(J={},dt[Y.id]=J);let ot=J[K];return ot===void 0&&(ot=d(l()),J[K]=ot),ot}function d(F){let z=[],Y=[],N=[];for(let K=0;K<e;K++)z[K]=0,Y[K]=0,N[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Y,attributeDivisors:N,object:F,attributes:{},index:null}}function m(F,z,Y,N){let K=r.attributes,Q=z.attributes,Z=0,dt=Y.getAttributes();for(let J in dt)if(dt[J].location>=0){let ht=K[J],Pt=Q[J];if(Pt===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(Pt=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(Pt=F.instanceColor)),ht===void 0||ht.attribute!==Pt||Pt&&ht.data!==Pt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==N}function _(F,z,Y,N){let K={},Q=z.attributes,Z=0,dt=Y.getAttributes();for(let J in dt)if(dt[J].location>=0){let ht=Q[J];ht===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(ht=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(ht=F.instanceColor));let Pt={};Pt.attribute=ht,ht&&ht.data&&(Pt.data=ht.data),K[J]=Pt,Z++}r.attributes=K,r.attributesNum=Z,r.index=N}function E(){let F=r.newAttributes;for(let z=0,Y=F.length;z<Y;z++)F[z]=0}function f(F){h(F,0)}function h(F,z){let Y=r.newAttributes,N=r.enabledAttributes,K=r.attributeDivisors;Y[F]=1,N[F]===0&&(i.enableVertexAttribArray(F),N[F]=1),K[F]!==z&&(i.vertexAttribDivisor(F,z),K[F]=z)}function v(){let F=r.newAttributes,z=r.enabledAttributes;for(let Y=0,N=z.length;Y<N;Y++)z[Y]!==F[Y]&&(i.disableVertexAttribArray(Y),z[Y]=0)}function A(F,z,Y,N,K,Q,Z){Z===!0?i.vertexAttribIPointer(F,z,Y,K,Q):i.vertexAttribPointer(F,z,Y,N,K,Q)}function b(F,z,Y,N){E();let K=N.attributes,Q=Y.getAttributes(),Z=z.defaultAttributeValues;for(let dt in Q){let J=Q[dt];if(J.location>=0){let ot=K[dt];if(ot===void 0&&(dt==="instanceMatrix"&&F.instanceMatrix&&(ot=F.instanceMatrix),dt==="instanceColor"&&F.instanceColor&&(ot=F.instanceColor)),ot!==void 0){let ht=ot.normalized,Pt=ot.itemSize,pt=t.get(ot);if(pt===void 0)continue;let et=pt.buffer,wt=pt.type,Lt=pt.bytesPerElement,Bt=wt===i.INT||wt===i.UNSIGNED_INT||ot.gpuType===ha;if(ot.isInterleavedBufferAttribute){let At=ot.data,Gt=At.isInterleavedBuffer===!0?At.stride:At.itemSize,xe=ot.offset;if(At.isInstancedInterleavedBuffer||At.isInstancedBufferAttribute){for(let Tt=0;Tt<J.locationSize;Tt++)h(J.location+Tt,At.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Tt=0;Tt<J.locationSize;Tt++)f(J.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,et);for(let Tt=0;Tt<J.locationSize;Tt++)A(J.location+Tt,Pt/J.locationSize,wt,ht,Gt*Lt,(xe+Pt/J.locationSize*Tt)*Lt,Bt)}else{if(ot.isInstancedBufferAttribute){for(let At=0;At<J.locationSize;At++)h(J.location+At,ot.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let At=0;At<J.locationSize;At++)f(J.location+At);i.bindBuffer(i.ARRAY_BUFFER,et);for(let At=0;At<J.locationSize;At++)A(J.location+At,Pt/J.locationSize,wt,ht,Pt*Lt,Pt/J.locationSize*At*Lt,Bt)}}else if(Z!==void 0){let ht=Z[dt];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(J.location,ht);break;case 3:i.vertexAttrib3fv(J.location,ht);break;case 4:i.vertexAttrib4fv(J.location,ht);break;default:i.vertexAttrib1fv(J.location,ht)}}}}v()}function R(){L();for(let F in n){let z=n[F];for(let Y in z){let N=z[Y];for(let K in N){let Q=N[K];for(let Z in Q)u(Q[Z].object),delete Q[Z];delete N[K]}}delete n[F]}}function w(F){if(n[F.id]===void 0)return;let z=n[F.id];for(let Y in z){let N=z[Y];for(let K in N){let Q=N[K];for(let Z in Q)u(Q[Z].object),delete Q[Z];delete N[K]}}delete n[F.id]}function g(F){for(let z in n){let Y=n[z];for(let N in Y){let K=Y[N];if(K[F.id]===void 0)continue;let Q=K[F.id];for(let Z in Q)u(Q[Z].object),delete Q[Z];delete K[F.id]}}}function S(F){for(let z in n){let Y=n[z],N=F.isInstancedMesh===!0?F.id:0,K=Y[N];if(K!==void 0){for(let Q in K){let Z=K[Q];for(let dt in Z)u(Z[dt].object),delete Z[dt];delete K[Q]}delete Y[N],Object.keys(Y).length===0&&delete n[z]}}}function L(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:I,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:g,initAttributes:E,enableAttribute:f,disableUnusedAttributes:v}}function cp(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let m=0;m<u;m++)d+=c[m];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function hp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==bn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let S=g===Sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==Ke&&g!==Mn&&!S&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(kt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&kt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:b,maxSamples:R,samples:w}}function up(i){let t=this,e=null,n=0,s=!1,r=!1,a=new rn,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let m=p.length!==0||d||n!==0||s;return s=d,n=p.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=u(p,d,0)},this.setState=function(p,d,m){let _=p.clippingPlanes,E=p.clipIntersection,f=p.clipShadows,h=i.get(p);if(!s||_===null||_.length===0||r&&!f)r?u(null):c();else{let v=r?0:n,A=v*4,b=h.clippingState||null;l.value=b,b=u(_,d,A,m);for(let R=0;R!==A;++R)b[R]=e[R];h.clippingState=b,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,d,m,_){let E=p!==null?p.length:0,f=null;if(E!==0){if(f=l.value,_!==!0||f===null){let h=m+E*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(f===null||f.length<h)&&(f=new Float32Array(h));for(let A=0,b=m;A!==E;++A,b+=4)a.copy(p[A]).applyMatrix4(v,o),a.normal.toArray(f,b),f[b+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,f}}var ir=class extends on{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Rs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xt(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:xi});r.uniforms.tEquirect.value=e;let a=new Ne(s,r),o=e.minFilter;return e.minFilter===Hn&&(e.minFilter=Xe),new Ki(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Wc=256,dp=3,fp=20,fh=256,ph=16,pp=3,mp=new O,gp=new Zt,Ja=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ki(1,10,null),this._boxMesh=new Ne(new Xt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=mp}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,d=l.autoClearColor,m=l.autoClearDepth,_=l.autoClearStencil,E=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,E===null&&(t.background=l.getClearColor(gp));let f=new Ki(n,s,u);return f.position.copy(o),f.update(l,t),l.autoClear=p,l.autoClearColor=d,l.autoClearDepth=m,l.autoClearStencil=_,t.background=E,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Wc,rl(t))}_fromTexture(t,e){t.mapping===vi||t.mapping===es?this._setSize(t.image.length===0?Wc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Xc(t,!1,!1),n=Math.log2(t)-dp;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Xc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===vi||t.mapping===es?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=qc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=_p(),this._integrationMaterial=xp());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/ph);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-pp)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(fh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=yp());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Xc(i,t,e){return new ir(i,{minFilter:Hn,generateMipmaps:t,type:Sn,colorSpace:vs,depthBuffer:e})}function sr(i,t,e){return new fn({name:i,uniforms:t,vertexShader:$t.cube_vert,fragmentShader:e,side:qe,blending:xi,depthTest:!1,depthWrite:!1})}function _p(){return sr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${fh}u

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
	`)}function xp(){return sr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ph}},`

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
	`)}function yp(){return sr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${fp}
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
	`)}function qc(){return sr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Yc(){return sr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function vp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,m=!1){return d==null?null:m?a(d):r(d)}function r(d){if(d&&d.isTexture){let m=d.mapping;if(m===oa||m===la)if(t.has(d)){let _=t.get(d).texture;return o(_,d.mapping)}else{let _=d.image;if(_&&_.height>0){let E=new ir(_.height);return E.fromEquirectangularTexture(i,d),t.set(d,E),d.addEventListener("dispose",c),o(E.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let m=d.mapping,_=m===oa||m===la,E=m===vi||m===es;if(_||E){let f=e.get(d),h=f!==void 0?f.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return n===null&&(n=new Ja(i)),f=_?n.fromEquirectangular(d,f):n.fromCubemap(d,f),f.texture.pmremVersion=d.pmremVersion,e.set(d,f),f.texture;if(f!==void 0)return f.texture;{let v=d.image;return _&&v&&v.height>0||E&&v&&l(v)?(n===null&&(n=new Ja(i)),f=_?n.fromEquirectangular(d):n.fromCubemap(d),f.texture.pmremVersion=d.pmremVersion,e.set(d,f),d.addEventListener("dispose",u),f.texture):null}}}return d}function o(d,m){return m===oa?d.mapping=vi:m===la&&(d.mapping=es),d}function l(d){let m=0,_=6;for(let E=0;E<_;E++)d[E]!==void 0&&m++;return m===_}function c(d){let m=d.target;m.removeEventListener("dispose",c);let _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function u(d){let m=d.target;m.removeEventListener("dispose",u);let _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Mp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&gs("WebGLRenderer: "+n+" extension not supported."),s}}}function Sp(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(let f in _.attributes)t.remove(_.attributes[f]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let E=r.get(_);E&&(t.remove(E),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,E){return s[E.id]!==void 0||(E.addEventListener("dispose",o),s[E.id]=new WeakRef(E),a.register(E,E.id,E),e.memory.geometries++),E}function u(_){let E=_.attributes;for(let f in E)t.update(E[f],i.ARRAY_BUFFER)}function p(_){let E=_.index,f=_.attributes.position,h=0;if(f===void 0)return;let v=E!==null?E.array.length:f.array.length/3-1,A=f.count>=65535?As:ws,b=new A(Math.ceil(v/3)*6,1),R=b.array;if(E!==null){let g=E.array;h=E.version;for(let S=0,L=0;S<v;S+=3){let I=g[S+0],F=g[S+1],z=g[S+2];R[L++]=I,R[L++]=F,R[L++]=F,R[L++]=z,R[L++]=z,R[L++]=I}}else{h=f.version;for(let g=0,S=0;g<v;g+=3){let L=g+0,I=g+1,F=g+2;R[S++]=L,R[S++]=I,R[S++]=I,R[S++]=F,R[S++]=F,R[S++]=L}}b.version=h;let w=r.get(_);w&&t.remove(w),r.set(_,b)}function d(_){let E=r.get(_);if(E){let f=_.index;f!==null&&E.version<f.version&&p(_)}else p(_);return r.get(_)}function m(){for(let _ in s){let E=s[_].deref();E!==void 0&&l(E)}}return{get:c,update:u,getWireframeAttribute:d,dispose:m}}function bp(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,d){i.drawElements(n,d,r,p*a),e.update(d,n,1)}function c(p,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,p*a,m),e.update(d,n,m))}function u(p,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,m);let E=0;for(let f=0;f<m;f++)E+=d[f];e.update(E,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Ep(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ht("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Tp(i,t,e){let n=new WeakMap,s=new ve;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==p){let L=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();let m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],A=0;m===!0&&(A=1),_===!0&&(A=2),E===!0&&(A=3);let b=o.attributes.position.count*A,R=1;b>t.maxTextureSize&&(R=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let w=new Float32Array(b*R*4*p),g=new bs(w,b,R,p);g.type=Mn,g.needsUpdate=!0;let S=A*4;for(let I=0;I<p;I++){let F=f[I],z=h[I],Y=v[I],N=b*R*4*I;for(let K=0;K<F.count;K++){let Q=K*S;m===!0&&(s.fromBufferAttribute(F,K),w[N+Q+0]=s.x,w[N+Q+1]=s.y,w[N+Q+2]=s.z,w[N+Q+3]=0),_===!0&&(s.fromBufferAttribute(z,K),w[N+Q+4]=s.x,w[N+Q+5]=s.y,w[N+Q+6]=s.z,w[N+Q+7]=0),E===!0&&(s.fromBufferAttribute(Y,K),w[N+Q+8]=s.x,w[N+Q+9]=s.y,w[N+Q+10]=s.z,w[N+Q+11]=Y.itemSize===4?s.w:1)}}d={count:p,texture:g,size:new Ut(b,R)},n.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let E=0;E<c.length;E++)m+=c[E];let _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function wp(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,p=c.geometry,d=t.get(c,p);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Ap={[zo]:"LINEAR_TONE_MAPPING",[ko]:"REINHARD_TONE_MAPPING",[Go]:"CINEON_TONE_MAPPING",[qs]:"ACES_FILMIC_TONE_MAPPING",[Vo]:"AGX_TONE_MAPPING",[Wo]:"NEUTRAL_TONE_MAPPING",[Ho]:"CUSTOM_TONE_MAPPING"};function Rp(i,t,e,n,s,r){let a=new on(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new ln;u.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ue([0,2,0,0,2,0],2));let p=new qr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ne(u,p),m=new Hs(-1,1,1,-1,0,1),_=null,E=null,f=!1,h,v=null,A=[],b=!1;this.setSize=function(R,w){a.setSize(R,w),o!==null&&o.setSize(R,w),l!==null&&l.setSize(R,w);for(let g=0;g<A.length;g++){let S=A[g];S.setSize&&S.setSize(R,w)}},this.setEffects=function(R){A=R,b=A.length>0&&A[0].isRenderPass===!0;let w=a.width,g=a.height;A.length>0&&o===null&&(o=new on(w,g,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),l=new on(w,g,{type:Sn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&A.some(L=>L.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new kn(w,g),r===!0&&(c.format=Vn,c.type=Mi)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let L=0;L<A.length;L++){let I=A[L];I.setSize&&I.setSize(w,g),S&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(R,w){if(f||R.toneMapping===Rn&&A.length===0)return!1;if(v=w,w!==null){let g=w.width,S=w.height;(a.width!==g||a.height!==S)&&this.setSize(g,S)}return b===!1&&R.setRenderTarget(a),h=R.toneMapping,R.toneMapping=Rn,!0},this.hasRenderPass=function(){return b},this.end=function(R,w){R.toneMapping=h,f=!0;let g=a,S=o;for(let L=0;L<A.length;L++){let I=A[L];I.enabled!==!1&&(I.render(R,S,g,w),I.needsSwap!==!1&&(g=S,S=S===o?l:o))}if(_!==R.outputColorSpace||E!==R.toneMapping){_=R.outputColorSpace,E=R.toneMapping,p.defines={},ne.getTransfer(_)===re&&(p.defines.SRGB_TRANSFER="");let L=Ap[E];L&&(p.defines[L]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=g.texture,R.setRenderTarget(v),R.render(d,m),v=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),p.dispose()}}var mh=new $e,gh=new kn(1,1),_h=new Cs(1),xh=new bs,yh=new Vr,vh=new Rs,Zc=[],Jc=[],$c=new Float32Array(16),Kc=new Float32Array(9),jc=new Float32Array(4);function rs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Zc[s];if(r===void 0&&(r=new Float32Array(s),Zc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ka(i,t){let e=Jc[t];e===void 0&&(e=new Int32Array(t),Jc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Cp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function Ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function Lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function Dp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;jc.set(n),i.uniformMatrix2fv(this.addr,!1,jc),Re(e,n)}}function Np(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Kc.set(n),i.uniformMatrix3fv(this.addr,!1,Kc),Re(e,n)}}function Up(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;$c.set(n),i.uniformMatrix4fv(this.addr,!1,$c),Re(e,n)}}function Fp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function Bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function kp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Gp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function Hp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function Vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function ja(i){return i.version===0&&(i.compareFunction=el,i.needsUpdate=!0),i}function Wp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=ja(gh):r=mh,e.setTexture2D(t||r,s)}function Xp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||yh,s)}function qp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ja(_h):r=vh,e.setTextureCube(t||r,s)}function Yp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||xh,s)}function Zp(i){switch(i){case 5126:return Cp;case 35664:return Pp;case 35665:return Ip;case 35666:return Lp;case 35674:return Dp;case 35675:return Np;case 35676:return Up;case 5124:case 35670:return Fp;case 35667:case 35671:return Op;case 35668:case 35672:return Bp;case 35669:case 35673:return zp;case 5125:return kp;case 36294:return Gp;case 36295:return Hp;case 36296:return Vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Yp}}function Jp(i,t){i.uniform1fv(this.addr,t)}function $p(i,t){let e=rs(t,this.size,2);i.uniform2fv(this.addr,e)}function Kp(i,t){let e=rs(t,this.size,3);i.uniform3fv(this.addr,e)}function jp(i,t){let e=rs(t,this.size,4);i.uniform4fv(this.addr,e)}function Qp(i,t){let e=rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function tm(i,t){let e=rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function em(i,t){let e=rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function nm(i,t){i.uniform1iv(this.addr,t)}function im(i,t){i.uniform2iv(this.addr,t)}function sm(i,t){i.uniform3iv(this.addr,t)}function rm(i,t){i.uniform4iv(this.addr,t)}function am(i,t){i.uniform1uiv(this.addr,t)}function om(i,t){i.uniform2uiv(this.addr,t)}function lm(i,t){i.uniform3uiv(this.addr,t)}function cm(i,t){i.uniform4uiv(this.addr,t)}function hm(i,t,e){let n=this.cache,s=t.length,r=Ka(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ja(gh):a=mh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function um(i,t,e){let n=this.cache,s=t.length,r=Ka(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||yh,r[a])}function dm(i,t,e){let n=this.cache,s=t.length,r=Ka(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=ja(_h):a=vh;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function fm(i,t,e){let n=this.cache,s=t.length,r=Ka(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||xh,r[a])}function pm(i){switch(i){case 5126:return Jp;case 35664:return $p;case 35665:return Kp;case 35666:return jp;case 35674:return Qp;case 35675:return tm;case 35676:return em;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return sm;case 35669:case 35673:return rm;case 5125:return am;case 36294:return om;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return fm}}var xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zp(e.type)}},yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pm(e.type)}},vl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},gl=/(\w+)(\])?(\[|\.)?/g;function Qc(i,t){i.seq.push(t),i.map[t.id]=t}function mm(i,t,e){let n=i.name,s=n.length;for(gl.lastIndex=0;;){let r=gl.exec(n),a=gl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Qc(e,c===void 0?new xl(o,i,t):new yl(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new vl(o),Qc(e,p)),e=p}}}var ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);mm(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function th(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var gm=37297,_m=0;function xm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var eh=new Wt;function ym(i){ne._getMatrix(eh,ne.workingColorSpace,i);let t=`mat3( ${eh.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case Ms:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function nh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+xm(i.getShaderSource(t),o)}else return r}function vm(i,t){let e=ym(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Mm={[zo]:"Linear",[ko]:"Reinhard",[Go]:"Cineon",[qs]:"ACESFilmic",[Vo]:"AgX",[Wo]:"Neutral",[Ho]:"Custom"};function Sm(i,t){let e=Mm[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Za=new O;function bm(){ne.getLuminanceCoefficients(Za);let i=Za.x.toFixed(4),t=Za.y.toFixed(4),e=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Em(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function Tm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function nr(i){return i!==""}function ih(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function sh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Am=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(i){return i.replace(Am,Rm)}function Rm(i,t){let e=$t[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ml(e)}var Cm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rh(i){return i.replace(Cm,Pm)}function Pm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ah(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Im={[_i]:"SHADOWMAP_TYPE_PCF",[Qi]:"SHADOWMAP_TYPE_VSM"};function Lm(i){return Im[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Dm={[es]:"ENVMAP_MODE_REFRACTION"};function Nm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Dm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Um={[Bo]:"ENVMAP_BLENDING_MULTIPLY",[Sc]:"ENVMAP_BLENDING_MIX",[bc]:"ENVMAP_BLENDING_ADD"};function Fm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Um[i.combine]||"ENVMAP_BLENDING_NONE"}function Om(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Lm(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Nm(e),p=Fm(e),d=Em(e),m=Tm(r),_=s.createProgram(),E,f,h=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(E=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(nr).join(`
`),E.length>0&&(E+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(nr).join(`
`),f.length>0&&(f+=`
`)):(E=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),f=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?$t.tonemapping_pars_fragment:"",e.toneMapping!==Rn?Sm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,vm("linearToOutputTexel",e.outputColorSpace),bm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(nr).join(`
`)),a=Ml(a),a=ih(a,e),a=sh(a,e),o=Ml(o),o=ih(o,e),o=sh(o,e),a=rh(a),o=rh(o),e.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,E=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,f=["#define varying in",e.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=h+E+a,A=h+f+o,b=th(s,s.VERTEX_SHADER,v),R=th(s,s.FRAGMENT_SHADER,A);s.attachShader(_,b),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(I){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(_)||"",z=s.getShaderInfoLog(b)||"",Y=s.getShaderInfoLog(R)||"",N=F.trim(),K=z.trim(),Q=Y.trim(),Z=!0,dt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,R);else{let J=nh(s,b,"vertex"),ot=nh(s,R,"fragment");Ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+J+`
`+ot)}else N!==""?kt("WebGLProgram: Program Info Log:",N):(K===""||Q==="")&&(dt=!1);dt&&(I.diagnostics={runnable:Z,programLog:N,vertexShader:{log:K,prefix:E},fragmentShader:{log:Q,prefix:f}})}s.deleteShader(b),s.deleteShader(R),g=new ss(s,_),S=wm(s,_)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(_,gm)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_m++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=R,this}var Bm=0,Sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bl(t),e.set(t,n)),n}},bl=class{constructor(t){this.id=Bm++,this.code=t,this.usedTimes=0}};function zm(i){return i===ci||i===js||i===Qs}function km(i,t,e,n,s,r){let a=new qi,o=new Sl,l=new Set,c=[],u=new Map,p=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,S,L,I,F,z){let Y=I.fog,N=F.geometry,K=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?I.environment:null,Q=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,Z=t.get(g.envMap||K,Q),dt=d[g.type],J=n.precision;g.precision!==null&&(J=n.getMaxPrecision(g.precision),J!==g.precision&&kt("WebGLProgram.getParameters:",g.precision,"not supported, using",J,"instead."));let ot=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ht=ot!==void 0?ot.length:0,Pt=0;N.morphAttributes.position!==void 0&&(Pt=1),N.morphAttributes.normal!==void 0&&(Pt=2),N.morphAttributes.color!==void 0&&(Pt=3);let pt,et,wt,Lt;if(dt){let vt=Pn[dt];pt=vt.vertexShader,et=vt.fragmentShader}else{pt=g.vertexShader,et=g.fragmentShader;let vt=o.getVertexShaderStage(g),Nt=o.getFragmentShaderStage(g);o.update(g,vt,Nt),wt=vt.id,Lt=Nt.id}let Bt=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Gt=F.isInstancedMesh===!0,xe=F.isBatchedMesh===!0,Tt=!!g.map,Kt=!!g.matcap,ie=!!Z,jt=ie&&Z.isPMREMTexture===!0,we=!!g.aoMap,oe=!!g.lightMap,Ue=!!g.bumpMap&&g.wireframe===!1,fe=!!g.normalMap,Qe=!!g.displacementMap,ye=!!g.emissiveMap,ke=!!g.metalnessMap,Ye=!!g.roughnessMap,le=g.anisotropy>0,B=g.clearcoat>0,Ze=g.diffuseRoughness>0,pe=g.dispersion>0,me=g.retroreflectivity>0,Et=g.iridescence>0,Me=g.sheen>0,Ot=g.transmission>0,Vt=le&&!!g.anisotropyMap,T=B&&!!g.clearcoatMap,x=B&&!!g.clearcoatNormalMap,W=B&&!!g.clearcoatRoughnessMap,ut=Ze&&!!g.diffuseRoughnessMap,rt=Et&&!!g.iridescenceMap,gt=Et&&!!g.iridescenceThicknessMap,St=Me&&!!g.sheenColorMap,tt=Me&&!!g.sheenRoughnessMap,nt=!!g.specularMap,xt=!!g.specularColorMap,D=!!g.specularIntensityMap,it=Ot&&!!g.transmissionMap,j=Ot&&!!g.thicknessMap,yt=!!g.gradientMap,mt=!!g.alphaMap,_t=g.alphaTest>0,Dt=!!g.alphaHash,Yt=!!g.extensions,ft=Rn;g.toneMapped&&(Bt===null||Bt.isXRRenderTarget===!0)&&(ft=i.toneMapping);let Ft=jt?Z.isCompressedCubeTexture?Z.image[0].mipmaps:Z.mipmaps:null,qt={shaderID:dt,shaderType:g.type,shaderName:g.name,vertexShader:pt,fragmentShader:et,defines:g.defines,customVertexShaderID:wt,customFragmentShaderID:Lt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:J,batching:xe,batchingColor:xe&&F._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&F.instanceColor!==null,instancingMorph:Gt&&F.morphTexture!==null,outputColorSpace:Bt===null?i.outputColorSpace:Bt.isXRRenderTarget===!0?Bt.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Tt,matcap:Kt,envMap:ie,envMapMode:ie&&Z.mapping,envMapPMREM:jt,envMapMaxLod:jt?Ft.length-1:null,envMapSize:jt?Ft[0].width:null,aoMap:we,lightMap:oe,bumpMap:Ue,normalMap:fe,displacementMap:Qe,emissiveMap:ye,normalMapObjectSpace:fe&&g.normalMapType===wc,normalMapTangentSpace:fe&&g.normalMapType===qa,packedNormalMap:fe&&g.normalMapType===qa&&zm(g.normalMap.format),metalnessMap:ke,roughnessMap:Ye,anisotropy:le,anisotropyMap:Vt,clearcoat:B,clearcoatMap:T,clearcoatNormalMap:x,clearcoatRoughnessMap:W,diffuseRoughness:Ze,diffuseRoughnessMap:ut,dispersion:pe,retroreflection:me,iridescence:Et,iridescenceMap:rt,iridescenceThicknessMap:gt,sheen:Me,sheenColorMap:St,sheenRoughnessMap:tt,specularMap:nt,specularColorMap:xt,specularIntensityMap:D,transmission:Ot,transmissionMap:it,thicknessMap:j,gradientMap:yt,opaque:g.transparent===!1&&g.blending===ts&&g.alphaToCoverage===!1,alphaMap:mt,alphaTest:_t,alphaHash:Dt,combine:g.combine,mapUv:Tt&&m(g.map.channel),aoMapUv:we&&m(g.aoMap.channel),lightMapUv:oe&&m(g.lightMap.channel),bumpMapUv:Ue&&m(g.bumpMap.channel),normalMapUv:fe&&m(g.normalMap.channel),displacementMapUv:Qe&&m(g.displacementMap.channel),emissiveMapUv:ye&&m(g.emissiveMap.channel),metalnessMapUv:ke&&m(g.metalnessMap.channel),roughnessMapUv:Ye&&m(g.roughnessMap.channel),anisotropyMapUv:Vt&&m(g.anisotropyMap.channel),clearcoatMapUv:T&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ut&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:rt&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:St&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:tt&&m(g.sheenRoughnessMap.channel),specularMapUv:nt&&m(g.specularMap.channel),specularColorMapUv:xt&&m(g.specularColorMap.channel),specularIntensityMapUv:D&&m(g.specularIntensityMap.channel),transmissionMapUv:it&&m(g.transmissionMap.channel),thicknessMapUv:j&&m(g.thicknessMap.channel),alphaMapUv:mt&&m(g.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(fe||le),vertexNormals:!!N.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(Tt||mt),fog:!!Y,useFog:g.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||N.attributes.normal===void 0&&fe===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:At,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Pt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:z.filter(vt=>vt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,decodeVideoTexture:Tt&&g.map.isVideoTexture===!0&&ne.getTransfer(g.map.colorSpace)===re,decodeVideoTextureEmissive:ye&&g.emissiveMap.isVideoTexture===!0&&ne.getTransfer(g.emissiveMap.colorSpace)===re,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===pn,flipSided:g.side===qe,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Yt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&g.extensions.multiDraw===!0||xe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function E(g){let S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(let L in g.defines)S.push(L),S.push(g.defines[L]);return g.isRawShaderMaterial===!1&&(f(S,g),h(S,g),S.push(i.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function f(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapPMREM),g.push(S.envMapMaxLod),g.push(S.envMapSize),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.diffuseRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.numLightProbeGrids),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function h(g,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function v(g){let S=d[g.type],L;if(S){let I=Pn[S];L=Gc.clone(I.uniforms)}else L=g.uniforms;return L}function A(g,S){let L=u.get(S);return L!==void 0?++L.usedTimes:(L=new Om(i,S,g,s),c.push(L),u.set(S,L)),L}function b(g){if(--g.usedTimes===0){let S=c.indexOf(g);c[S]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function R(g){o.remove(g)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:E,getUniforms:v,acquireProgram:A,releaseProgram:b,releaseShaderCache:R,programs:c,dispose:w}}function Gm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Hm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function oh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function lh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,_,E,f,h){let v=i[t];return v===void 0?(v={id:d.id,object:d,geometry:m,material:_,materialVariant:a(d),groupOrder:E,renderOrder:d.renderOrder,z:f,group:h},i[t]=v):(v.id=d.id,v.object=d,v.geometry=m,v.material=_,v.materialVariant=a(d),v.groupOrder=E,v.renderOrder=d.renderOrder,v.z=f,v.group=h),t++,v}function l(d,m,_,E,f,h,v){v.reversedDepth===!0&&(f=-f);let A=o(d,m,_,E,f,h);_.transmission>0?n.push(A):_.transparent===!0?s.push(A):e.push(A)}function c(d,m,_,E,f,h){let v=o(d,m,_,E,f,h);_.transmission>0?n.unshift(v):_.transparent===!0?s.unshift(v):e.unshift(v)}function u(d,m){e.length>1&&e.sort(d||Hm),n.length>1&&n.sort(m||oh),s.length>1&&s.sort(m||oh)}function p(){for(let d=t,m=i.length;d<m;d++){let _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:u}}function Vm(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new lh,i.set(n,[a])):s>=r.length?(a=new lh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Wm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new Zt};break;case"SpotLight":e={position:new O,direction:new O,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function Xm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var qm=0;function Ym(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Zm(i){let t=new Wm,e=Xm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new ae,a=new ae;function o(c){let u=0,p=0,d=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let m=0,_=0,E=0,f=0,h=0,v=0,A=0,b=0,R=0,w=0,g=0,S=0,L=0,I=0;c.sort(Ym);for(let z=0,Y=c.length;z<Y;z++){let N=c[z],K=N.color,Q=N.intensity,Z=N.distance,dt=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ci?dt=N.shadow.map.texture:dt=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=K.r*Q,p+=K.g*Q,d+=K.b*Q;else if(N.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(N.sh.coefficients[J],Q);I++}else if(N.isSunLight){let J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ot=N.shadow,ht=e.get(N);ht.shadowIntensity=ot.intensity,ht.shadowBias=ot.bias,ht.shadowNormalBias=ot.normalBias,ht.shadowRadius=ot.radius,ht.shadowMapSize.copy(ot.mapSize).multiply(ot.getFrameExtents()),n.sunShadow[_]=ht,n.sunShadowMap[_]=dt;let Pt=ot.getViewportCount();for(let pt=0;pt<Pt;pt++)n.sunShadowMatrix[E+pt]=ot.getMatrix(pt),n.sunShadowCascade[E+pt]=ot._cascadeData[pt];E+=Pt,_++}n.sun[m]=J,m++}else if(N.isDirectionalLight){let J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ot=N.shadow,ht=e.get(N);ht.shadowIntensity=ot.intensity,ht.shadowBias=ot.bias,ht.shadowNormalBias=ot.normalBias,ht.shadowRadius=ot.radius,ht.shadowMapSize=ot.mapSize,n.directionalShadow[f]=ht,n.directionalShadowMap[f]=dt,n.directionalShadowMatrix[f]=N.shadow.matrix,R++}n.directional[f]=J,f++}else if(N.isSpotLight){let J=t.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(K).multiplyScalar(Q),J.distance=Z,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,n.spot[v]=J;let ot=N.shadow;if(N.map&&(n.spotLightMap[S]=N.map,S++,ot.updateMatrices(N),N.castShadow&&L++),n.spotLightMatrix[v]=ot.matrix,N.castShadow){let ht=e.get(N);ht.shadowIntensity=ot.intensity,ht.shadowBias=ot.bias,ht.shadowNormalBias=ot.normalBias,ht.shadowRadius=ot.radius,ht.shadowMapSize=ot.mapSize,n.spotShadow[v]=ht,n.spotShadowMap[v]=dt,g++}v++}else if(N.isRectAreaLight){let J=t.get(N);J.color.copy(K).multiplyScalar(Q),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),n.rectArea[A]=J,A++}else if(N.isPointLight){let J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),J.distance=N.distance,J.decay=N.decay,N.castShadow){let ot=N.shadow,ht=e.get(N);ht.shadowIntensity=ot.intensity,ht.shadowBias=ot.bias,ht.shadowNormalBias=ot.normalBias,ht.shadowRadius=ot.radius,ht.shadowMapSize=ot.mapSize,ht.shadowCameraNear=ot.camera.near,ht.shadowCameraFar=ot.camera.far,n.pointShadow[h]=ht,n.pointShadowMap[h]=dt,n.pointShadowMatrix[h]=N.shadow.matrix,w++}n.point[h]=J,h++}else if(N.isHemisphereLight){let J=t.get(N);J.skyColor.copy(N.color).multiplyScalar(Q),J.groundColor.copy(N.groundColor).multiplyScalar(Q),n.hemi[b]=J,b++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=d;let F=n.hash;(F.sunLength!==m||F.directionalLength!==f||F.pointLength!==h||F.spotLength!==v||F.rectAreaLength!==A||F.hemiLength!==b||F.numSunShadows!==_||F.numDirectionalShadows!==R||F.numPointShadows!==w||F.numSpotShadows!==g||F.numSpotMaps!==S||F.numLightProbes!==I)&&(n.sun.length=m,n.directional.length=f,n.spot.length=v,n.rectArea.length=A,n.point.length=h,n.hemi.length=b,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=E,n.sunShadowCascade.length=E,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+S-L,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=I,F.sunLength=m,F.directionalLength=f,F.pointLength=h,F.spotLength=v,F.rectAreaLength=A,F.hemiLength=b,F.numSunShadows=_,F.numDirectionalShadows=R,F.numPointShadows=w,F.numSpotShadows=g,F.numSpotMaps=S,F.numLightProbes=I,n.version=qm++)}function l(c,u){let p=0,d=0,m=0,_=0,E=0,f=0,h=u.matrixWorldInverse;for(let v=0,A=c.length;v<A;v++){let b=c[v];if(b.isSunLight){let R=n.sun[p];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(h),p++}else if(b.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(h),d++}else if(b.isSpotLight){let R=n.spot[_];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(h),R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(h),_++}else if(b.isRectAreaLight){let R=n.rectArea[E];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(h),a.identity(),r.copy(b.matrixWorld),r.premultiply(h),a.extractRotation(r),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),E++}else if(b.isPointLight){let R=n.point[m];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(h),m++}else if(b.isHemisphereLight){let R=n.hemi[f];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(h),f++}}}return{setup:o,setupView:l,state:n}}function ch(i){let t=new Zm(i),e=[],n=[],s=[];function r(p){u.camera=p,e.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):e.push(p)}function o(p){n.push(p)}function l(){t.setup(e),s.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function c(p){t.setupView(e,p)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Jm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ch(i),t.set(s,[o])):r>=a.length?(o=new ch(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var $m=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Km=`uniform sampler2D shadow_pass;
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
}`,jm=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Qm=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],hh=new ae,er=new O,_l=new O;function tg(i,t,e){let n=new ei,s=new Ut,r=new Ut,a=new ve,o=new Yr,l=new Zr,c={},u=e.maxTextureSize,p={[li]:qe,[qe]:li,[pn]:pn},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:$m,fragmentShader:Km}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let _=new ln;_.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new Ne(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_i;let h=this.type;this.render=function(w,g,S){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;this.type===ic&&(kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_i);let L=i.getRenderTarget(),I=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),z=i.state;z.setBlending(xi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let Y=h!==this.type;Y&&g.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(K=>K.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,K=w.length;N<K;N++){let Q=w[N],Z=Q.shadow;if(Z===void 0){kt("WebGLShadowMap:",Q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let dt=Z.getFrameExtents();s.multiply(dt),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/dt.x),s.x=r.x*dt.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/dt.y),s.y=r.y*dt.y,Z.mapSize.y=r.y));let J=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=J,Z.map===null||Y===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Qi){if(Q.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new on(s.x,s.y,{format:ci,type:Sn,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),Z.map.texture.name=Q.name+".shadowMap",Z.map.depthTexture=new kn(s.x,s.y,Mn),Z.map.depthTexture.name=Q.name+".shadowMapDepth",Z.map.depthTexture.format=Bn,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Le,Z.map.depthTexture.magFilter=Le}else Q.isPointLight?(Z.map=new ir(s.x),Z.map.depthTexture=new Cs(s.x,vn)):(Z.map=new on(s.x,s.y),Z.map.depthTexture=new kn(s.x,s.y,vn)),Z.map.depthTexture.name=Q.name+".shadowMap",Z.map.depthTexture.format=Bn,this.type===_i?(Z.map.depthTexture.compareFunction=J?tl:Qo,Z.map.depthTexture.minFilter=Xe,Z.map.depthTexture.magFilter=Xe):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Le,Z.map.depthTexture.magFilter=Le);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let ot=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();Q.isPointLight!==!0&&Z.updateMatrices(Q,S);let ht=(Z.camera.layers.mask&4294967294)!==0?Z.camera.layers:S.layers;for(let Pt=0;Pt<ot;Pt++){let pt=Z.getCamera(Pt);if(Q.isPointLight){let et=Z.camera,wt=Z.matrix,Lt=Q.distance||et.far;Lt!==et.far&&(et.far=Lt,et.updateProjectionMatrix()),er.setFromMatrixPosition(Q.matrixWorld),et.position.copy(er),_l.copy(et.position),_l.add(jm[Pt]),et.up.copy(Qm[Pt]),et.lookAt(_l),et.updateMatrixWorld(),wt.makeTranslation(-er.x,-er.y,-er.z),hh.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(hh,et.coordinateSystem,et.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,Pt),i.clear();else{Pt===0&&(i.setRenderTarget(Z.map),i.clear());let et=Z.getViewport(Pt);a.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),z.viewport(a)}n=Z.getFrustum(Pt),b(g,S,pt,Q,ht,this.type)}Z.isPointLightShadow!==!0&&this.type===Qi&&v(Z,S),Z.needsUpdate=!1}h=this.type,f.needsUpdate=!1,i.setRenderTarget(L,I,F)};function v(w,g){let S=t.update(E);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new on(s.x,s.y,{format:ci,type:Sn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(g,null,S,d,E,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(g,null,S,m,E,null)}function A(w,g,S,L){let I=null,F=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)I=F;else if(I=S.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let z=I.uuid,Y=g.uuid,N=c[z];N===void 0&&(N={},c[z]=N);let K=N[Y];K===void 0&&(K=I.clone(),N[Y]=K,g.addEventListener("dispose",R)),I=K}if(I.visible=g.visible,I.wireframe=g.wireframe,L===Qi?I.side=g.shadowSide!==null?g.shadowSide:g.side:I.side=g.shadowSide!==null?g.shadowSide:p[g.side],I.alphaMap=g.alphaMap,I.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,I.map=g.map,I.clipShadows=g.clipShadows,I.clippingPlanes=g.clippingPlanes,I.clipIntersection=g.clipIntersection,I.displacementMap=g.displacementMap,I.displacementScale=g.displacementScale,I.displacementBias=g.displacementBias,I.wireframeLinewidth=g.wireframeLinewidth,I.linewidth=g.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let z=i.properties.get(I);z.light=S}return I}function b(w,g,S,L,I,F){if(w.visible===!1)return;if(w.layers.test(I)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&F===Qi)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let N=t.update(w),K=w.material;if(Array.isArray(K)){let Q=N.groups;for(let Z=0,dt=Q.length;Z<dt;Z++){let J=Q[Z],ot=K[J.materialIndex];if(ot&&ot.visible){let ht=A(w,ot,L,F);w.onBeforeShadow(i,w,g,S,N,ht,J),i.renderBufferDirect(S,null,N,ht,w,J),w.onAfterShadow(i,w,g,S,N,ht,J)}}}else if(K.visible){let Q=A(w,K,L,F);w.onBeforeShadow(i,w,g,S,N,Q,null),i.renderBufferDirect(S,null,N,Q,w,null),w.onAfterShadow(i,w,g,S,N,Q,null)}}let Y=w.children;for(let N=0,K=Y.length;N<K;N++)b(Y[N],g,S,L,I,F)}function R(w){w.target.removeEventListener("dispose",R);for(let S in c){let L=c[S],I=w.target.uuid;I in L&&(L[I].dispose(),delete L[I])}}}function eg(i,t){function e(){let D=!1,it=new ve,j=null,yt=new ve(0,0,0,0);return{setMask:function(mt){j!==mt&&!D&&(i.colorMask(mt,mt,mt,mt),j=mt)},setLocked:function(mt){D=mt},setClear:function(mt,_t,Dt,Yt,ft){ft===!0&&(mt*=Yt,_t*=Yt,Dt*=Yt),it.set(mt,_t,Dt,Yt),yt.equals(it)===!1&&(i.clearColor(mt,_t,Dt,Yt),yt.copy(it))},reset:function(){D=!1,j=null,yt.set(-1,0,0,0)}}}function n(){let D=!1,it=!1,j=null,yt=null,mt=null;return{setReversed:function(_t){if(it!==_t){let Dt=t.get("EXT_clip_control");_t?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),it=_t;let Yt=mt;mt=null,this.setClear(Yt)}},getReversed:function(){return it},setTest:function(_t){_t?At(i.DEPTH_TEST):Gt(i.DEPTH_TEST)},setMask:function(_t){j!==_t&&!D&&(i.depthMask(_t),j=_t)},setFunc:function(_t){if(it&&(_t=Oc[_t]),yt!==_t){switch(_t){case Ir:i.depthFunc(i.NEVER);break;case Lr:i.depthFunc(i.ALWAYS);break;case Dr:i.depthFunc(i.LESS);break;case Gi:i.depthFunc(i.LEQUAL);break;case Nr:i.depthFunc(i.EQUAL);break;case Ur:i.depthFunc(i.GEQUAL);break;case Fr:i.depthFunc(i.GREATER);break;case Or:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=_t}},setLocked:function(_t){D=_t},setClear:function(_t){mt!==_t&&(mt=_t,it&&(_t=1-_t),i.clearDepth(_t))},reset:function(){D=!1,j=null,yt=null,mt=null,it=!1}}}function s(){let D=!1,it=null,j=null,yt=null,mt=null,_t=null,Dt=null,Yt=null,ft=null;return{setTest:function(Ft){D||(Ft?At(i.STENCIL_TEST):Gt(i.STENCIL_TEST))},setMask:function(Ft){it!==Ft&&!D&&(i.stencilMask(Ft),it=Ft)},setFunc:function(Ft,qt,vt){(j!==Ft||yt!==qt||mt!==vt)&&(i.stencilFunc(Ft,qt,vt),j=Ft,yt=qt,mt=vt)},setOp:function(Ft,qt,vt){(_t!==Ft||Dt!==qt||Yt!==vt)&&(i.stencilOp(Ft,qt,vt),_t=Ft,Dt=qt,Yt=vt)},setLocked:function(Ft){D=Ft},setClear:function(Ft){ft!==Ft&&(i.clearStencil(Ft),ft=Ft)},reset:function(){D=!1,it=null,j=null,yt=null,mt=null,_t=null,Dt=null,Yt=null,ft=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,u={},p={},d={},m=new WeakMap,_=[],E=null,f=!1,h=null,v=null,A=null,b=null,R=null,w=null,g=null,S=new Zt(0,0,0),L=0,I=!1,F=null,z=null,Y=null,N=null,K=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,dt=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(dt=parseFloat(/^WebGL (\d)/.exec(J)[1]),Z=dt>=1):J.indexOf("OpenGL ES")!==-1&&(dt=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Z=dt>=2);let ot=null,ht={},Pt=i.getParameter(i.SCISSOR_BOX),pt=i.getParameter(i.VIEWPORT),et=new ve().fromArray(Pt),wt=new ve().fromArray(pt);function Lt(D,it,j,yt){let mt=new Uint8Array(4),_t=i.createTexture();i.bindTexture(D,_t),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<j;Dt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(it+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return _t}let Bt={};Bt[i.TEXTURE_2D]=Lt(i.TEXTURE_2D,i.TEXTURE_2D,1),Bt[i.TEXTURE_CUBE_MAP]=Lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Bt[i.TEXTURE_2D_ARRAY]=Lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Bt[i.TEXTURE_3D]=Lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),At(i.DEPTH_TEST),a.setFunc(Gi),Ue(!1),fe(Lo),At(i.CULL_FACE),we(xi);function At(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Gt(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function xe(D,it){return d[D]!==it?(i.bindFramebuffer(D,it),d[D]=it,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=it),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Tt(D,it){let j=_,yt=!1;if(D){j=m.get(it),j===void 0&&(j=[],m.set(it,j));let mt=D.textures;if(j.length!==mt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,Dt=mt.length;_t<Dt;_t++)j[_t]=i.COLOR_ATTACHMENT0+_t;j.length=mt.length,yt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,yt=!0);yt&&i.drawBuffers(j)}function Kt(D){return E!==D?(i.useProgram(D),E=D,!0):!1}let ie={[yi]:i.FUNC_ADD,[rc]:i.FUNC_SUBTRACT,[ac]:i.FUNC_REVERSE_SUBTRACT};ie[oc]=i.MIN,ie[lc]=i.MAX;let jt={[cc]:i.ZERO,[hc]:i.ONE,[uc]:i.SRC_COLOR,[Fo]:i.SRC_ALPHA,[_c]:i.SRC_ALPHA_SATURATE,[mc]:i.DST_COLOR,[fc]:i.DST_ALPHA,[dc]:i.ONE_MINUS_SRC_COLOR,[Oo]:i.ONE_MINUS_SRC_ALPHA,[gc]:i.ONE_MINUS_DST_COLOR,[pc]:i.ONE_MINUS_DST_ALPHA,[xc]:i.CONSTANT_COLOR,[yc]:i.ONE_MINUS_CONSTANT_COLOR,[vc]:i.CONSTANT_ALPHA,[Mc]:i.ONE_MINUS_CONSTANT_ALPHA};function we(D,it,j,yt,mt,_t,Dt,Yt,ft,Ft){if(D===xi){f===!0&&(Gt(i.BLEND),f=!1);return}if(f===!1&&(At(i.BLEND),f=!0),D!==sc){if(D!==h||Ft!==I){if((v!==yi||R!==yi)&&(i.blendEquation(i.FUNC_ADD),v=yi,R=yi),Ft)switch(D){case ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.ONE,i.ONE);break;case No:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ht("WebGLState: Invalid blending: ",D);break}else switch(D){case ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case No:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uo:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",D);break}A=null,b=null,w=null,g=null,S.set(0,0,0),L=0,h=D,I=Ft}return}mt=mt||it,_t=_t||j,Dt=Dt||yt,(it!==v||mt!==R)&&(i.blendEquationSeparate(ie[it],ie[mt]),v=it,R=mt),(j!==A||yt!==b||_t!==w||Dt!==g)&&(i.blendFuncSeparate(jt[j],jt[yt],jt[_t],jt[Dt]),A=j,b=yt,w=_t,g=Dt),(Yt.equals(S)===!1||ft!==L)&&(i.blendColor(Yt.r,Yt.g,Yt.b,ft),S.copy(Yt),L=ft),h=D,I=!1}function oe(D,it){D.side===pn?Gt(i.CULL_FACE):At(i.CULL_FACE);let j=D.side===qe;it&&(j=!j),Ue(j),D.blending===ts&&D.transparent===!1?we(xi):we(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let yt=D.stencilWrite;o.setTest(yt),yt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ye(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?At(i.SAMPLE_ALPHA_TO_COVERAGE):Gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(D){F!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),F=D)}function fe(D){D!==ec?(At(i.CULL_FACE),D!==z&&(D===Lo?i.cullFace(i.BACK):D===nc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Gt(i.CULL_FACE),z=D}function Qe(D){D!==Y&&(Z&&i.lineWidth(D),Y=D)}function ye(D,it,j){D?(At(i.POLYGON_OFFSET_FILL),(N!==it||K!==j)&&(N=it,K=j,a.getReversed()&&(it=-it,j=-j),i.polygonOffset(it,j))):Gt(i.POLYGON_OFFSET_FILL)}function ke(D){D?At(i.SCISSOR_TEST):Gt(i.SCISSOR_TEST)}function Ye(D){D===void 0&&(D=i.TEXTURE0+Q-1),ot!==D&&(i.activeTexture(D),ot=D)}function le(D,it,j){j===void 0&&(ot===null?j=i.TEXTURE0+Q-1:j=ot);let yt=ht[j];yt===void 0&&(yt={type:void 0,texture:void 0},ht[j]=yt),(yt.type!==D||yt.texture!==it)&&(ot!==j&&(i.activeTexture(j),ot=j),i.bindTexture(D,it||Bt[D]),yt.type=D,yt.texture=it)}function B(){let D=ht[ot];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Ze(){try{i.compressedTexImage2D(...arguments)}catch(D){Ht("WebGLState:",D)}}function pe(){try{i.compressedTexImage3D(...arguments)}catch(D){Ht("WebGLState:",D)}}function me(){try{i.texSubImage2D(...arguments)}catch(D){Ht("WebGLState:",D)}}function Et(){try{i.texSubImage3D(...arguments)}catch(D){Ht("WebGLState:",D)}}function Me(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Ht("WebGLState:",D)}}function Ot(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Ht("WebGLState:",D)}}function Vt(){try{i.texStorage2D(...arguments)}catch(D){Ht("WebGLState:",D)}}function T(){try{i.texStorage3D(...arguments)}catch(D){Ht("WebGLState:",D)}}function x(){try{i.texImage2D(...arguments)}catch(D){Ht("WebGLState:",D)}}function W(){try{i.texImage3D(...arguments)}catch(D){Ht("WebGLState:",D)}}function ut(D){return p[D]!==void 0?p[D]:i.getParameter(D)}function rt(D,it){p[D]!==it&&(i.pixelStorei(D,it),p[D]=it)}function gt(D){et.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),et.copy(D))}function St(D){wt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),wt.copy(D))}function tt(D,it){let j=c.get(it);j===void 0&&(j=new WeakMap,c.set(it,j));let yt=j.get(D);yt===void 0&&(yt=i.getUniformBlockIndex(it,D.name),i.uniformBlockBinding(it,yt,yt),j.set(D,yt))}function nt(D,it,j){let mt=c.get(it).get(D);l[mt]!==j&&(i.bindBufferBase(i.UNIFORM_BUFFER,mt,j),l[mt]=j)}function xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},ot=null,ht={},d={},l={},m=new WeakMap,_=[],E=null,f=!1,h=null,v=null,A=null,b=null,R=null,w=null,g=null,S=new Zt(0,0,0),L=0,I=!1,F=null,z=null,Y=null,N=null,K=null,et.set(0,0,i.canvas.width,i.canvas.height),wt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:At,disable:Gt,bindFramebuffer:xe,drawBuffers:Tt,useProgram:Kt,setBlending:we,setMaterial:oe,setFlipSided:Ue,setCullFace:fe,setLineWidth:Qe,setPolygonOffset:ye,setScissorTest:ke,activeTexture:Ye,bindTexture:le,unbindTexture:B,compressedTexImage2D:Ze,compressedTexImage3D:pe,texImage2D:x,texImage3D:W,pixelStorei:rt,getParameter:ut,updateUBOMapping:tt,uniformBlockBinding:nt,texStorage2D:Vt,texStorage3D:T,texSubImage2D:me,texSubImage3D:Et,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ot,scissor:gt,viewport:St,reset:xt}}function ng(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,u=new WeakMap,p=new Set,d,m=new WeakMap,_=new Set,E=new FinalizationRegistry(T=>_.delete(T)),f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(T,x){return f?new OffscreenCanvas(T,x):Ss("canvas")}function v(T,x,W){let ut=1,rt=Vt(T);if((rt.width>W||rt.height>W)&&(ut=W/Math.max(rt.width,rt.height)),ut<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let gt=Math.floor(ut*rt.width),St=Math.floor(ut*rt.height);d===void 0&&(d=h(gt,St));let tt=x?h(gt,St):d;return tt.width=gt,tt.height=St,tt.getContext("2d").drawImage(T,0,0,gt,St),kt("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+gt+"x"+St+")."),tt}else return"data"in T&&kt("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),T;return T}function A(T){return T.generateMipmaps}function b(T){i.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(T,x,W,ut,rt,gt=!1){if(T!==null){if(i[T]!==void 0)return i[T];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let St;ut&&(St=t.get("EXT_texture_norm16"),St||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=x;if(x===i.RED&&(W===i.FLOAT&&(tt=i.R32F),W===i.HALF_FLOAT&&(tt=i.R16F),W===i.UNSIGNED_BYTE&&(tt=i.R8),W===i.UNSIGNED_SHORT&&St&&(tt=St.R16_EXT),W===i.SHORT&&St&&(tt=St.R16_SNORM_EXT)),x===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.R8UI),W===i.UNSIGNED_SHORT&&(tt=i.R16UI),W===i.UNSIGNED_INT&&(tt=i.R32UI),W===i.BYTE&&(tt=i.R8I),W===i.SHORT&&(tt=i.R16I),W===i.INT&&(tt=i.R32I)),x===i.RG&&(W===i.FLOAT&&(tt=i.RG32F),W===i.HALF_FLOAT&&(tt=i.RG16F),W===i.UNSIGNED_BYTE&&(tt=i.RG8),W===i.UNSIGNED_SHORT&&St&&(tt=St.RG16_EXT),W===i.SHORT&&St&&(tt=St.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RG8UI),W===i.UNSIGNED_SHORT&&(tt=i.RG16UI),W===i.UNSIGNED_INT&&(tt=i.RG32UI),W===i.BYTE&&(tt=i.RG8I),W===i.SHORT&&(tt=i.RG16I),W===i.INT&&(tt=i.RG32I)),x===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),W===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),W===i.UNSIGNED_INT&&(tt=i.RGB32UI),W===i.BYTE&&(tt=i.RGB8I),W===i.SHORT&&(tt=i.RGB16I),W===i.INT&&(tt=i.RGB32I)),x===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),W===i.UNSIGNED_INT&&(tt=i.RGBA32UI),W===i.BYTE&&(tt=i.RGBA8I),W===i.SHORT&&(tt=i.RGBA16I),W===i.INT&&(tt=i.RGBA32I)),x===i.RGB&&(W===i.UNSIGNED_SHORT&&St&&(tt=St.RGB16_EXT),W===i.SHORT&&St&&(tt=St.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),x===i.RGBA){let nt=gt?Ms:ne.getTransfer(rt);W===i.FLOAT&&(tt=i.RGBA32F),W===i.HALF_FLOAT&&(tt=i.RGBA16F),W===i.UNSIGNED_BYTE&&(tt=nt===re?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&St&&(tt=St.RGBA16_EXT),W===i.SHORT&&St&&(tt=St.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function g(T,x){let W;return T?x===null||x===vn||x===Mi?W=i.DEPTH24_STENCIL8:x===Mn?W=i.DEPTH32F_STENCIL8:x===ns&&(W=i.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===vn||x===Mi?W=i.DEPTH_COMPONENT24:x===Mn?W=i.DEPTH_COMPONENT32F:x===ns&&(W=i.DEPTH_COMPONENT16),W}function S(T,x){return A(T)===!0||T.isFramebufferTexture&&T.minFilter!==Le&&T.minFilter!==Xe?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function L(T){let x=new WeakRef(T);n.get(T).__ref=x,_.add(x),E.register(T,x,x)}function I(T){let x=n.get(T).__ref;x!==void 0&&(_.delete(x),E.unregister(x))}function F(T){Y(T.target)}function z(T){N(T.target)}function Y(T){T.removeEventListener("dispose",F),I(T),Q(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&p.delete(T)}function N(T){T.removeEventListener("dispose",z),I(T),dt(T)}function K(){for(let T of _){let x=T.deref();x!==void 0&&(x.isRenderTarget===!0?N(x):Y(x))}_.clear(),p.clear()}function Q(T){let x=n.get(T);if(x.__webglInit===void 0)return;let W=T.source,ut=m.get(W);if(ut){let rt=ut[x.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&Z(T),Object.keys(ut).length===0&&m.delete(W)}n.remove(T)}function Z(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let W=T.source,ut=m.get(W);delete ut[x.__cacheKey],a.memory.textures--}function dt(T){let x=n.get(T);x.__depthDisposeCallback&&x.__depthDisposeCallback();let W=T.depthTexture;if(W&&W.renderTarget===T&&Y(W),T.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(x.__webglFramebuffer[rt]))for(let gt=0;gt<x.__webglFramebuffer[rt].length;gt++)i.deleteFramebuffer(x.__webglFramebuffer[rt][gt]);else i.deleteFramebuffer(x.__webglFramebuffer[rt]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[rt])}else{if(Array.isArray(x.__webglFramebuffer))for(let rt=0;rt<x.__webglFramebuffer.length;rt++)i.deleteFramebuffer(x.__webglFramebuffer[rt]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let rt=0;rt<x.__webglColorRenderbuffer.length;rt++)x.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[rt]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let ut=T.textures;for(let rt=0,gt=ut.length;rt<gt;rt++){let St=n.get(ut[rt]);St.__webglTexture&&(i.deleteTexture(St.__webglTexture),a.memory.textures--),n.remove(ut[rt])}n.remove(T)}let J=0;function ot(){J=0}function ht(){return J}function Pt(T){J=T}function pt(){let T=J;return T>=s.maxTextures&&kt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,T}function et(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.mipmapsAutoUpdate),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function wt(T,x){let W=n.get(T);if(T.isVideoTexture&&Me(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&W.__version!==T.version){let ut=T.image;if(ut===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(W,T,x);return}}else T.isExternalTexture&&(W.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+x)}function Lt(T,x){let W=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&W.__version!==T.version){oe(W,T,x);return}else T.isExternalTexture&&(W.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+x)}function Bt(T,x){let W=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&W.__version!==T.version){oe(W,T,x);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+x)}function At(T,x){let W=n.get(T);if(T.version>0&&W.__version!==T.version){Ue(W,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+x)}let Gt={[Br]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[zr]:i.MIRRORED_REPEAT},xe={[Le]:i.NEAREST,[Ec]:i.NEAREST_MIPMAP_NEAREST,[Ys]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[ca]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},Tt={[Rc]:i.NEVER,[el]:i.ALWAYS,[Cc]:i.LESS,[Qo]:i.LEQUAL,[Pc]:i.EQUAL,[tl]:i.GEQUAL,[Ic]:i.GREATER,[Lc]:i.NOTEQUAL};function Kt(T,x){if(x.type===Mn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Xe||x.magFilter===ca||x.magFilter===Ys||x.magFilter===Hn||x.minFilter===Xe||x.minFilter===ca||x.minFilter===Ys||x.minFilter===Hn)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Gt[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Gt[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Gt[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,xe[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,xe[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Tt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Le||x.minFilter!==Ys&&x.minFilter!==Hn||x.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ie(T,x){let W=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",F),L(x));let ut=x.source,rt=m.get(ut);rt===void 0&&(rt={},m.set(ut,rt));let gt=et(x);if(gt!==T.__cacheKey){rt[gt]===void 0&&(rt[gt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),rt[gt].usedTimes++;let St=rt[T.__cacheKey];St!==void 0&&(rt[T.__cacheKey].usedTimes--,St.usedTimes===0&&Z(x)),T.__cacheKey=gt,T.__webglTexture=rt[gt].texture}return W}function jt(T,x,W){return Math.floor(Math.floor(T/W)/x)}function we(T,x,W,ut){let gt=T.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,W,ut,x.data);else{gt.sort((D,it)=>D.start-it.start);let St=0;for(let D=1;D<gt.length;D++){let it=gt[St],j=gt[D],yt=it.start+it.count,mt=jt(j.start,x.width,4),_t=jt(it.start,x.width,4);j.start<=yt+1&&mt===_t&&jt(j.start+j.count-1,x.width,4)===mt?it.count=Math.max(it.count,j.start+j.count-it.start):(++St,gt[St]=j)}gt.length=St+1;let tt=e.getParameter(i.UNPACK_ROW_LENGTH),nt=e.getParameter(i.UNPACK_SKIP_PIXELS),xt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let D=0,it=gt.length;D<it;D++){let j=gt[D],yt=Math.floor(j.start/4),mt=Math.ceil(j.count/4),_t=yt%x.width,Dt=Math.floor(yt/x.width),Yt=mt,ft=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(i.UNPACK_SKIP_ROWS,Dt),e.texSubImage2D(i.TEXTURE_2D,0,_t,Dt,Yt,ft,W,ut,x.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,tt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,xt)}}function oe(T,x,W){let ut=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ut=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ut=i.TEXTURE_3D);let rt=ie(T,x),gt=x.source;e.bindTexture(ut,T.__webglTexture,i.TEXTURE0+W);let St=n.get(gt);if(gt.version!==St.__version||rt===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ft=ne.getPrimaries(ne.workingColorSpace),Ft=x.colorSpace===Wn?null:ne.getPrimaries(x.colorSpace),qt=x.colorSpace===Wn||ft===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let nt=v(x.image,!1,s.maxTextureSize);nt=Ot(x,nt);let xt=r.convert(x.format,x.colorSpace),D=r.convert(x.type),it=w(x.internalFormat,xt,D,x.normalized,x.colorSpace,x.isVideoTexture);Kt(ut,x);let j,yt=x.mipmaps,mt=x.isVideoTexture!==!0,_t=St.__version===void 0||rt===!0,Dt=gt.dataReady,Yt=S(x,nt);if(x.isDepthTexture)it=g(x.format===Vn,x.type),_t&&(mt?e.texStorage2D(i.TEXTURE_2D,1,it,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,it,nt.width,nt.height,0,xt,D,null));else if(x.isDataTexture)if(yt.length>0){mt&&_t&&e.texStorage2D(i.TEXTURE_2D,Yt,it,yt[0].width,yt[0].height);for(let ft=0,Ft=yt.length;ft<Ft;ft++)j=yt[ft],mt?Dt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,j.width,j.height,xt,D,j.data):e.texImage2D(i.TEXTURE_2D,ft,it,j.width,j.height,0,xt,D,j.data);x.generateMipmaps=!1}else mt?(_t&&e.texStorage2D(i.TEXTURE_2D,Yt,it,nt.width,nt.height),Dt&&we(x,nt,xt,D)):e.texImage2D(i.TEXTURE_2D,0,it,nt.width,nt.height,0,xt,D,nt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){mt&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,it,yt[0].width,yt[0].height,nt.depth);for(let ft=0,Ft=yt.length;ft<Ft;ft++)if(j=yt[ft],x.format!==bn)if(xt!==null)if(mt){if(Dt)if(x.layerUpdates.size>0){let qt=hl(j.width,j.height,x.format,x.type);for(let vt of x.layerUpdates){let Nt=j.data.subarray(vt*qt/j.data.BYTES_PER_ELEMENT,(vt+1)*qt/j.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,vt,j.width,j.height,1,xt,Nt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,j.width,j.height,nt.depth,xt,j.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,it,j.width,j.height,nt.depth,0,j.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?Dt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,j.width,j.height,nt.depth,xt,D,j.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,it,j.width,j.height,nt.depth,0,xt,D,j.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{mt&&_t&&e.texStorage2D(i.TEXTURE_2D,Yt,it,yt[0].width,yt[0].height);for(let ft=0,Ft=yt.length;ft<Ft;ft++)j=yt[ft],x.format!==bn?xt!==null?mt?Dt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,j.width,j.height,xt,j.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,it,j.width,j.height,0,j.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?Dt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,j.width,j.height,xt,D,j.data):e.texImage2D(i.TEXTURE_2D,ft,it,j.width,j.height,0,xt,D,j.data)}else if(x.isDataArrayTexture)if(mt){if(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,it,nt.width,nt.height,nt.depth),Dt)if(x.layerUpdates.size>0){let ft=hl(nt.width,nt.height,x.format,x.type);for(let Ft of x.layerUpdates){let qt=nt.data.subarray(Ft*ft/nt.data.BYTES_PER_ELEMENT,(Ft+1)*ft/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ft,nt.width,nt.height,1,xt,D,qt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,xt,D,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,it,nt.width,nt.height,nt.depth,0,xt,D,nt.data);else if(x.isData3DTexture)mt?(_t&&e.texStorage3D(i.TEXTURE_3D,Yt,it,nt.width,nt.height,nt.depth),Dt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,xt,D,nt.data)):e.texImage3D(i.TEXTURE_3D,0,it,nt.width,nt.height,nt.depth,0,xt,D,nt.data);else if(x.isFramebufferTexture){if(_t)if(mt)e.texStorage2D(i.TEXTURE_2D,Yt,it,nt.width,nt.height);else{let ft=nt.width,Ft=nt.height;for(let qt=0;qt<Yt;qt++)e.texImage2D(i.TEXTURE_2D,qt,it,ft,Ft,0,xt,D,null),ft>>=1,Ft>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let ft=i.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),nt.parentNode!==ft){ft.appendChild(nt),p.add(x),ft.onpaint=Ft=>{let qt=Ft.changedElements;for(let vt of p)qt.includes(vt.image)&&(vt.needsUpdate=!0)},ft.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,nt);else{let qt=i.RGBA,vt=i.RGBA,Nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,qt,vt,Nt,nt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(yt.length>0){if(mt&&_t){let ft=Vt(yt[0]);e.texStorage2D(i.TEXTURE_2D,Yt,it,ft.width,ft.height)}for(let ft=0,Ft=yt.length;ft<Ft;ft++)j=yt[ft],mt?Dt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,xt,D,j):e.texImage2D(i.TEXTURE_2D,ft,it,xt,D,j);x.generateMipmaps=!1}else if(mt){if(_t){let ft=Vt(nt);e.texStorage2D(i.TEXTURE_2D,Yt,it,ft.width,ft.height)}Dt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,D,nt)}else e.texImage2D(i.TEXTURE_2D,0,it,xt,D,nt);A(x)&&x.mipmapsAutoUpdate===!0&&b(ut),St.__version=gt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Ue(T,x,W){if(x.image.length!==6)return;let ut=ie(T,x),rt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+W);let gt=n.get(rt);if(rt.version!==gt.__version||ut===!0){e.activeTexture(i.TEXTURE0+W);let St=ne.getPrimaries(ne.workingColorSpace),tt=x.colorSpace===Wn?null:ne.getPrimaries(x.colorSpace),nt=x.colorSpace===Wn||St===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let xt=x.isCompressedTexture||x.image[0].isCompressedTexture,D=x.image[0]&&x.image[0].isDataTexture,it=[];for(let vt=0;vt<6;vt++)!xt&&!D?it[vt]=v(x.image[vt],!0,s.maxCubemapSize):it[vt]=D?x.image[vt].image:x.image[vt],it[vt]=Ot(x,it[vt]);let j=it[0],yt=r.convert(x.format,x.colorSpace),mt=r.convert(x.type),_t=w(x.internalFormat,yt,mt,x.normalized,x.colorSpace),Dt=x.isVideoTexture!==!0,Yt=gt.__version===void 0||ut===!0,ft=rt.dataReady,Ft=S(x,j);Kt(i.TEXTURE_CUBE_MAP,x);let qt;if(x.isDepthTexture){if(_t=g(x.format===Vn,x.type),Yt)if(Dt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,_t,j.width,j.height);else for(let vt=0;vt<6;vt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,_t,j.width,j.height,0,yt,mt,null)}else if(xt){Dt&&Yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,_t,j.width,j.height);for(let vt=0;vt<6;vt++){qt=it[vt].mipmaps;for(let Nt=0;Nt<qt.length;Nt++){let Se=qt[Nt];x.format!==bn?yt!==null?Dt?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt,0,0,Se.width,Se.height,yt,Se.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt,_t,Se.width,Se.height,0,Se.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt,0,0,Se.width,Se.height,yt,mt,Se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt,_t,Se.width,Se.height,0,yt,mt,Se.data)}}}else{if(qt=x.mipmaps,Dt&&Yt){qt.length>0&&Ft++;let vt=Vt(it[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,_t,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(D){Dt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,it[vt].width,it[vt].height,yt,mt,it[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,_t,it[vt].width,it[vt].height,0,yt,mt,it[vt].data);for(let Nt=0;Nt<qt.length;Nt++){let mn=qt[Nt].image[vt].image;Dt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt+1,0,0,mn.width,mn.height,yt,mt,mn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt+1,_t,mn.width,mn.height,0,yt,mt,mn.data)}}else{Dt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,yt,mt,it[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,_t,yt,mt,it[vt]);for(let Nt=0;Nt<qt.length;Nt++){let Se=qt[Nt];Dt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt+1,0,0,yt,mt,Se.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt+1,_t,yt,mt,Se.image[vt])}}}A(x)&&x.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),gt.__version=rt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function fe(T,x,W,ut,rt,gt){let St=r.convert(W.format,W.colorSpace),tt=r.convert(W.type),nt=w(W.internalFormat,St,tt,W.normalized,W.colorSpace),xt=n.get(x),D=n.get(W);if(D.__renderTarget=x,!xt.__hasExternalTextures){let it=Math.max(1,x.width>>gt),j=Math.max(1,x.height>>gt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,gt,nt,it,j,x.depth,0,St,tt,null):e.texImage2D(rt,gt,nt,it,j,0,St,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Et(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,rt,D.__webglTexture,0,me(x)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ut,rt,D.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(T,x,W){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let ut=x.depthTexture,rt=ut&&ut.isDepthTexture?ut.type:null,gt=g(x.stencilBuffer,rt),St=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Et(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(x),gt,x.width,x.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(x),gt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,gt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,T)}else{let ut=x.textures;for(let rt=0;rt<ut.length;rt++){let gt=ut[rt],St=r.convert(gt.format,gt.colorSpace),tt=r.convert(gt.type),nt=w(gt.internalFormat,St,tt,gt.normalized,gt.colorSpace);Et(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(x),nt,x.width,x.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(x),nt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,nt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(T,x,W){let ut=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let rt=n.get(x.depthTexture);rt.__renderTarget=x;let gt=ut?x.depthTexture.image[0]:x.depthTexture.image;(!rt.__webglTexture||gt.width!==x.width||gt.height!==x.height)&&(gt.width=x.width,gt.height=x.height,x.depthTexture.needsUpdate=!0),ut?At(x.depthTexture,0):wt(x.depthTexture,0);let St=rt.__webglTexture,tt=me(x),nt=ut?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,xt=x.depthTexture.format===Vn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Bn)Et(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,nt,St,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,xt,nt,St,0);else if(x.depthTexture.format===Vn)Et(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,nt,St,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,xt,nt,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(T){let x=n.get(T),W=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let ut=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ut){let rt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ut.removeEventListener("dispose",rt)};ut.addEventListener("dispose",rt),x.__depthDisposeCallback=rt}x.__boundDepthTexture=ut}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(W)for(let ut=0;ut<6;ut++)ye(x.__webglFramebuffer[ut],T,ut);else T.texture.mipmaps.length>0?ye(x.__webglFramebuffer[0],T,0):ye(x.__webglFramebuffer,T,0);else if(W){x.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ut]),x.__webglDepthbuffer[ut]===void 0)x.__webglDepthbuffer[ut]=i.createRenderbuffer(),Qe(x.__webglDepthbuffer[ut],T,!1);else{let rt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=x.__webglDepthbuffer[ut];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,gt)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Qe(x.__webglDepthbuffer,T,!1);else{let rt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,gt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(T,x,W){let ut=n.get(T);x!==void 0&&fe(ut.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&ke(T)}function le(T){let x=T.texture,W=n.get(T),ut=n.get(x);T.addEventListener("dispose",z),L(T);let rt=T.textures,gt=T.isWebGLCubeRenderTarget===!0,St=rt.length>1;if(St||(ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture()),ut.__version=x.version,a.memory.textures++),gt){W.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(x.mipmaps.length>0){W.__webglFramebuffer[tt]=[];for(let nt=0;nt<x.mipmaps.length;nt++)W.__webglFramebuffer[tt][nt]=i.createFramebuffer()}else W.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(x.mipmaps.length>0){W.__webglFramebuffer=[];for(let tt=0;tt<x.mipmaps.length;tt++)W.__webglFramebuffer[tt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(St)for(let tt=0,nt=rt.length;tt<nt;tt++){let xt=n.get(rt[tt]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Et(T)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let tt=0;tt<rt.length;tt++){let nt=rt[tt];W.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[tt]);let xt=r.convert(nt.format,nt.colorSpace),D=r.convert(nt.type),it=w(nt.internalFormat,xt,D,nt.normalized,nt.colorSpace,T.isXRRenderTarget===!0),j=me(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,j,it,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,W.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Qe(W.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),Kt(i.TEXTURE_CUBE_MAP,x);for(let tt=0;tt<6;tt++)if(x.mipmaps.length>0)for(let nt=0;nt<x.mipmaps.length;nt++)fe(W.__webglFramebuffer[tt][nt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,nt);else fe(W.__webglFramebuffer[tt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);A(x)?b(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(St){for(let tt=0,nt=rt.length;tt<nt;tt++){let xt=rt[tt],D=n.get(xt),it=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(it=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,D.__webglTexture),Kt(it,xt),fe(W.__webglFramebuffer,T,xt,i.COLOR_ATTACHMENT0+tt,it,0),A(xt)&&b(it)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(tt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,ut.__webglTexture),Kt(tt,x),x.mipmaps.length>0)for(let nt=0;nt<x.mipmaps.length;nt++)fe(W.__webglFramebuffer[nt],T,x,i.COLOR_ATTACHMENT0,tt,nt);else fe(W.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,tt,0);A(x)?b(tt):x.mipmaps.length>0&&i.texParameteri(tt,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&ke(T)}function B(T){let x=T.textures;for(let W=0,ut=x.length;W<ut;W++){let rt=x[W];if(A(rt)&&rt.mipmapsAutoUpdate===!0){let gt=R(T),St=n.get(rt).__webglTexture;e.bindTexture(gt,St),b(gt),e.unbindTexture()}}}let Ze=[];function pe(T){if(T.samples>0){if(Et(T)===!1){let x=T.textures,W=T.width,ut=T.height,rt=i.COLOR_BUFFER_BIT,gt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(T),tt=x.length>1;if(tt)for(let xt=0;xt<x.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let xt=0;xt<x.length;xt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[xt]);let D=n.get(x[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,W,ut,0,0,W,ut,rt,i.NEAREST),l===!0&&(Ze.length=0,Ze.push(i.COLOR_ATTACHMENT0+xt),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&Ze.push(gt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ze))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let xt=0;xt<x.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,St.__webglColorRenderbuffer[xt]);let D=n.get(x[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function me(T){return Math.min(s.maxSamples,T.samples)}function Et(T){let x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Me(T){let x=a.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function Ot(T,x){let W=T.colorSpace,ut=T.format,rt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||W!==vs&&W!==Wn&&(ne.getTransfer(W)===re?(ut!==bn||rt!==Ke)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",W)),x}function Vt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=pt,this.resetTextureUnits=ot,this.getTextureUnits=ht,this.setTextureUnits=Pt,this.setTexture2D=wt,this.setTexture2DArray=Lt,this.setTexture3D=Bt,this.setTextureCube=At,this.rebindTextures=Ye,this.setupRenderTarget=le,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Et,this.dispose=K}function ig(i,t){function e(n,s=Wn){let r,a=ne.getTransfer(s);if(n===Ke)return i.UNSIGNED_BYTE;if(n===ua)return i.UNSIGNED_SHORT_4_4_4_4;if(n===da)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qo)return i.BYTE;if(n===Yo)return i.SHORT;if(n===ns)return i.UNSIGNED_SHORT;if(n===ha)return i.INT;if(n===vn)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Sn)return i.HALF_FLOAT;if(n===$o)return i.ALPHA;if(n===Ko)return i.RGB;if(n===bn)return i.RGBA;if(n===Bn)return i.DEPTH_COMPONENT;if(n===Vn)return i.DEPTH_STENCIL;if(n===jo)return i.RED;if(n===fa)return i.RED_INTEGER;if(n===ci)return i.RG;if(n===pa)return i.RG_INTEGER;if(n===ma)return i.RGBA_INTEGER;if(n===Zs||n===Js||n===$s||n===Ks)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ga||n===_a||n===xa||n===ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===va||n===Ma||n===Sa||n===ba||n===Ea||n===js||n===Ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===va||n===Ma)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ba)return r.COMPRESSED_R11_EAC;if(n===Ea)return r.COMPRESSED_SIGNED_R11_EAC;if(n===js)return r.COMPRESSED_RG11_EAC;if(n===Ta)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wa||n===Aa||n===Ra||n===Ca||n===Pa||n===Ia||n===La||n===Da||n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===za)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Aa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ra)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ca)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ia)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===La)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Da)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Na)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ua)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ba)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===za)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ka||n===Ga||n===Ha)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ka)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Va||n===Wa||n===Qs||n===Xa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Va)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rg=`
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

}`,El=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ps(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new fn({vertexShader:sg,fragmentShader:rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new Us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tl=class extends yn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,d=null,m=null,_=null,E=typeof XRWebGLBinding<"u",f=new El,h={},v=e.getContextAttributes(),A=null,b=null,R=[],w=[],g=new Ut,S=null,L=null,I=new Be;I.viewport=new ve;let F=new Be;F.viewport=new ve;let z=[I,F],Y=new ra,N=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let wt=R[et];return wt===void 0&&(wt=new Yi,R[et]=wt),wt.getTargetRaySpace()},this.getControllerGrip=function(et){let wt=R[et];return wt===void 0&&(wt=new Yi,R[et]=wt),wt.getGripSpace()},this.getHand=function(et){let wt=R[et];return wt===void 0&&(wt=new Yi,R[et]=wt),wt.getHandSpace()};function Q(et){let wt=w.indexOf(et.inputSource);if(wt===-1)return;let Lt=R[wt];Lt!==void 0&&(Lt.update(et.inputSource,et.frame,c||a),Lt.dispatchEvent({type:et.type,data:et.inputSource}))}function Z(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",dt);for(let et=0;et<R.length;et++){let wt=w[et];wt!==null&&(w[et]=null,R[et].disconnect(wt))}N=null,K=null,f.reset();for(let et in h)delete h[et];if(t.setRenderTarget(A),m=null,d=null,p=null,s=null,b=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(g.width,g.height,!1),L!==null){let et=L.camera;et.fov=L.fov,et.zoom=L.zoom,et.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,n.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",dt),v.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(g),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,Bt=null,At=null;v.depth&&(At=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Lt=v.stencil?Vn:Bn,Bt=v.stencil?Mi:vn);let Gt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(Gt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new on(d.textureWidth,d.textureHeight,{format:bn,type:Ke,depthTexture:new kn(d.textureWidth,d.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Lt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Lt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new on(m.framebufferWidth,m.framebufferHeight,{format:bn,type:Ke,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),pt.setContext(s),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function dt(et){for(let wt=0;wt<et.removed.length;wt++){let Lt=et.removed[wt],Bt=w.indexOf(Lt);Bt>=0&&(w[Bt]=null,R[Bt].disconnect(Lt))}for(let wt=0;wt<et.added.length;wt++){let Lt=et.added[wt],Bt=w.indexOf(Lt);if(Bt===-1){for(let Gt=0;Gt<R.length;Gt++)if(Gt>=w.length){w.push(Lt),Bt=Gt;break}else if(w[Gt]===null){w[Gt]=Lt,Bt=Gt;break}if(Bt===-1)break}let At=R[Bt];At&&At.connect(Lt)}}function J(et,wt){wt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(wt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let wt=et.near,Lt=et.far;f.texture!==null&&(f.depthNear>0&&(wt=f.depthNear),f.depthFar>0&&(Lt=f.depthFar)),Y.near=F.near=I.near=wt,Y.far=F.far=I.far=Lt,(N!==Y.near||K!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),N=Y.near,K=Y.far),Y.layers.mask=et.layers.mask|6,I.layers.mask=Y.layers.mask&-5,F.layers.mask=Y.layers.mask&-3;let Bt=et.parent,At=Y.cameras;J(Y,Bt);for(let Gt=0;Gt<At.length;Gt++)J(At[Gt],Bt);Y.projectionMatrix.copy(I.projectionMatrix),Y.projectionMatrixInverse.copy(I.projectionMatrixInverse),L===null&&et.isPerspectiveCamera&&(L={camera:et,fov:et.fov,zoom:et.zoom}),ot(et,Y,Bt)};function ot(et,wt,Lt){Lt===null?et.matrix.copy(wt.matrixWorld):(et.matrix.copy(Lt.matrixWorld),et.matrix.invert(),et.matrix.multiply(wt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(wt.projectionMatrix),et.projectionMatrixInverse.copy(wt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Wi*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(et){l=et,d!==null&&(d.fixedFoveation=et),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=et)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(Y)},this.getCameraTexture=function(et){return h[et]};let ht=null;function Pt(et,wt){if(u=wt.getViewerPose(c||a),_=wt,u!==null){let Lt=u.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let Bt=!1;Lt.length!==Y.cameras.length&&(Y.cameras.length=0,Bt=!0);for(let Tt=0;Tt<Lt.length;Tt++){let Kt=Lt[Tt],ie=null;if(m!==null)ie=m.getViewport(Kt);else{let we=p.getViewSubImage(d,Kt);ie=we.viewport,Tt===0&&(t.setRenderTargetTextures(b,we.colorTexture,we.depthStencilTexture),t.setRenderTarget(b))}let jt=z[Tt];jt===void 0&&(jt=new Be,jt.layers.enable(Tt),jt.viewport=new ve,z[Tt]=jt),jt.matrix.fromArray(Kt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Kt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(ie.x,ie.y,ie.width,ie.height),Tt===0&&(Y.matrix.copy(jt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Bt===!0&&Y.cameras.push(jt)}let At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){p=n.getBinding();let Tt=p.getDepthInformation(Lt[0]);Tt&&Tt.isValid&&Tt.texture&&f.init(Tt,s.renderState)}if(At&&At.includes("camera-access")&&E){t.state.unbindTexture(),p=n.getBinding();for(let Tt=0;Tt<Lt.length;Tt++){let Kt=Lt[Tt].camera;if(Kt){let ie=h[Kt];ie||(ie=new Ps,h[Kt]=ie);let jt=p.getCameraImage(Kt);ie.sourceTexture=jt}}}}for(let Lt=0;Lt<R.length;Lt++){let Bt=w[Lt],At=R[Lt];Bt!==null&&At!==void 0&&At.update(Bt,wt,c||a)}ht&&ht(et,wt),wt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:wt}),_=null}let pt=new uh;pt.setAnimationLoop(Pt),this.setAnimationLoop=function(et){ht=et},this.dispose=function(){}}},ag=new ae,Mh=new Wt;Mh.set(-1,0,0,0,1,0,0,0,1);function og(i,t){function e(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,ol(i)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function s(f,h,v,A,b){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(f,h):h.isMeshLambertMaterial?(r(f,h),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(f,h),p(f,h)):h.isMeshPhongMaterial?(r(f,h),u(f,h),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(f,h),d(f,h),h.isMeshPhysicalMaterial&&m(f,h,b)):h.isMeshMatcapMaterial?(r(f,h),_(f,h)):h.isMeshDepthMaterial?r(f,h):h.isMeshDistanceMaterial?(r(f,h),E(f,h)):h.isMeshNormalMaterial?r(f,h):h.isLineBasicMaterial?(a(f,h),h.isLineDashedMaterial&&o(f,h)):h.isPointsMaterial?l(f,h,v,A):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,e(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===qe&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,e(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===qe&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,e(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,e(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);let v=t.get(h),A=v.envMap,b=v.envMapRotation;A&&(f.envMap.value=A,f.envMapRotation.value.setFromMatrix4(ag.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Mh),f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,f.aoMapTransform))}function a(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform))}function o(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,v,A){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*v,f.scale.value=A*.5,h.map&&(f.map.value=h.map,e(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function p(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function d(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,v){f.ior.value=h.ior,h.diffuseRoughness>0&&(f.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=h.diffuseRoughnessMap,e(h.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===qe&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.retroreflectivity>0&&(f.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=v.texture,f.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,h){h.matcap&&(f.matcap.value=h.matcap)}function E(f,h){let v=t.get(h).light;f.referencePosition.value.setFromMatrixPosition(v.matrixWorld),f.nearDistance.value=v.shadow.camera.near,f.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lg(i,t,e,n){let s={},r={};function a(v,A){let b=A.program;n.uniformBlockBinding(v,b,s[v.id])}function o(v,A){let b=s[v.id];b===void 0&&(_(v),b=l(v),s[v.id]=b,v.addEventListener("dispose",f));let R=A.program;n.updateUBOMapping(v,R);let w=t.render.frame;r[v.id]!==w&&(c(v),r[v.id]=w)}function l(v){let A=i.createBuffer(),b=v.__size,R=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,b,R),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function c(v){let A=s[v.id],b=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let w=0,g=b.length;w<g;w++){let S=b[w];if(Array.isArray(S))for(let L=0,I=S.length;L<I;L++)u(S[L],w,L,R);else u(S,w,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(v,A,b,R){if(d(v,A,b,R)===!0){let w=v.__offset,g=v.value;if(Array.isArray(g)){let S=0;for(let L=0;L<g.length;L++){let I=g[L],F=E(I,!0);p(I,v.__data,S),S+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else p(g,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,v.__data)}}function p(v,A,b){typeof v=="number"||typeof v=="boolean"?A[b]=v:v.isMatrix3?(A[b]=v.elements[0],A[b+1]=v.elements[1],A[b+2]=v.elements[2],A[b+3]=0,A[b+4]=v.elements[3],A[b+5]=v.elements[4],A[b+6]=v.elements[5],A[b+7]=0,A[b+8]=v.elements[6],A[b+9]=v.elements[7],A[b+10]=v.elements[8],A[b+11]=0):ArrayBuffer.isView(v)?A.set(v.subarray(0,A.length-b),b):v.toArray(A,b)}function d(v,A,b,R){let w=v.value,g=A+"_"+b;if(Array.isArray(w)){R[g]===void 0&&(R[g]=[]);let S=R[g],L=!1;for(let I=0;I<w.length;I++)m(w[I],S,I)===!0&&(L=!0);return L}return m(w,R,g)}function m(v,A,b){if(A[b]===void 0)return typeof v=="number"||typeof v=="boolean"?A[b]=v:ArrayBuffer.isView(v)?A[b]=v.slice():A[b]=v.clone(),!0;{let R=A[b];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return A[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function _(v){let A=v.uniforms,b=0,R=16;for(let g=0,S=A.length;g<S;g++){let L=Array.isArray(A[g])?A[g]:[A[g]];for(let I=0,F=L.length;I<F;I++){let z=L[I],Y=Array.isArray(z.value)?z.value:[z.value],N=Array.isArray(A[g])||Array.isArray(z.value),K=b;for(let Z=0,dt=Y.length;Z<dt;Z++){let J=Y[Z],ot=E(J,N),ht=b%R,Pt=ht%ot.boundary,pt=ht+Pt;b+=Pt,pt!==0&&R-pt<ot.storage&&(b+=R-pt),Z===0&&(K=b),b+=ot.storage}let Q=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new Q((b-K)/Float32Array.BYTES_PER_ELEMENT),z.__offset=K}}let w=b%R;return w>0&&(b+=R-w),v.__size=b,v.__cache={},this}function E(v,A){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=16,b.storage=48):v.isMatrix4?(b.boundary=16,b.storage=64):v.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",v),A===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function f(v){let A=v.target;A.removeEventListener("dispose",f),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function h(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:h}}var cg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Cn=null;function hg(){return Cn===null&&(Cn=new Wr(cg,16,16,ci,Sn),Cn.name="DFG_LUT",Cn.minFilter=Xe,Cn.magFilter=Xe,Cn.wrapS=wn,Cn.wrapT=wn,Cn.generateMipmaps=!1,Cn.needsUpdate=!0),Cn}var $a=class{constructor(t={}){let{canvas:e=Nc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Ke}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let E=m,f=new Set([ma,pa,fa]),h=new Set([Ke,vn,ns,Mi,ua,da]),v=new Uint32Array(4),A=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},R=null,w=null,g=[],S=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,F=!1,z=null,Y=null,N=null,K=null;this._outputColorSpace=We;let Q=0,Z=0,dt=null,J=-1,ot=null,ht=new ve,Pt=new ve,pt=null,et=new Zt(0),wt=0,Lt=e.width,Bt=e.height,At=1,Gt=null,xe=null,Tt=new ve(0,0,Lt,Bt),Kt=new ve(0,0,Lt,Bt),ie=!1,jt=new ei,we=new Xr,oe=!1,Ue=!1,fe=new ae,Qe=new O,ye=new ve,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ye=!1;function le(){return dt===null?At:1}let B=n;function Ze(M,U){return e.getContext(M,U)}let pe,me,Et,Me,Ot,Vt,T,x,W,ut,rt,gt,St,tt,nt,xt,D,it,j,yt,mt,_t,Dt;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),B===null){let U="webgl2";if(B=Ze(U,M),B===null)throw Ze(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(M){throw e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Ht("WebGLRenderer: "+M.message),M}function Yt(){pe=new Mp(B),pe.init(),mt=new ig(B,pe),me=new hp(B,pe,t,mt),Et=new eg(B,pe),me.reversedDepthBuffer&&d&&Et.buffers.depth.setReversed(!0),Y=B.createFramebuffer(),N=B.createFramebuffer(),K=B.createFramebuffer(),Me=new Ep(B),Ot=new Gm,Vt=new ng(B,pe,Et,Ot,me,mt,Me),T=new vp(I),x=new Tu(B),_t=new lp(B,x),W=new Sp(B,x,Me,_t),ut=new wp(B,W,x,_t,Me),it=new Tp(B,me,Vt),nt=new up(Ot),rt=new km(I,T,pe,me,_t,nt),gt=new og(I,Ot),St=new Vm,tt=new Jm(pe),D=new op(I,T,Et,ut,_,l),xt=new tg(I,ut,me),Dt=new lg(B,Me,me,Et),j=new cp(B,pe,Me),yt=new bp(B,pe,Me),Me.programs=rt.programs,I.capabilities=me,I.extensions=pe,I.properties=Ot,I.renderLists=St,I.shadowMap=xt,I.state=Et,I.info=Me}E!==Ke&&(L=new Rp(E,e.width,e.height,o,s,r));let ft=new Tl(I,B);this.xr=ft,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let M=pe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=pe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return At},this.setPixelRatio=function(M){M!==void 0&&(At=M,this.setSize(Lt,Bt,!1))},this.getSize=function(M){return M.set(Lt,Bt)},this.setSize=function(M,U,q=!0){if(ft.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}Lt=M,Bt=U,e.width=Math.floor(M*At),e.height=Math.floor(U*At),q===!0&&(e.style.width=M+"px",e.style.height=U+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(Lt*At,Bt*At).floor()},this.setDrawingBufferSize=function(M,U,q){Lt=M,Bt=U,At=q,e.width=Math.floor(M*q),e.height=Math.floor(U*q),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(E===Ke){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ht)},this.getViewport=function(M){return M.copy(Tt)},this.setViewport=function(M,U,q,V){M.isVector4?Tt.set(M.x,M.y,M.z,M.w):Tt.set(M,U,q,V),Et.viewport(ht.copy(Tt).multiplyScalar(le()).round())},this.getScissor=function(M){return M.copy(Kt)},this.setScissor=function(M,U,q,V){M.isVector4?Kt.set(M.x,M.y,M.z,M.w):Kt.set(M,U,q,V),Et.scissor(Pt.copy(Kt).multiplyScalar(le()).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(M){Et.setScissorTest(ie=M)},this.setOpaqueSort=function(M){Gt=M},this.setTransparentSort=function(M){xe=M},this.getClearColor=function(M){return M.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,q=!0){let V=0;if(M){let G=!1;if(dt!==null){let bt=dt.texture.format;G=f.has(bt)}if(G){let bt=dt.texture.type,It=h.has(bt),Mt=D.getClearColor(),y=D.getClearAlpha(),P=Mt.r,C=Mt.g,X=Mt.b;It?(v[0]=P,v[1]=C,v[2]=X,v[3]=y,B.clearBufferuiv(B.COLOR,0,v)):(A[0]=P,A[1]=C,A[2]=X,A[3]=y,B.clearBufferiv(B.COLOR,0,A))}else V|=B.COLOR_BUFFER_BIT}U&&(V|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),z=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),D.dispose(),St.dispose(),tt.dispose(),Vt.dispose(),Ot.dispose(),T.dispose(),ut.dispose(),W.dispose(),_t.dispose(),Dt.dispose(),rt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",os),ft.removeEventListener("sessionend",Ti),En.stop()};function Ft(M){M.preventDefault(),il("WebGLRenderer: Context Lost."),F=!0}function qt(){il("WebGLRenderer: Context Restored."),F=!1;let M=Me.autoReset,U=xt.enabled,q=xt.autoUpdate,V=xt.needsUpdate,G=xt.type;Yt(),Me.autoReset=M,xt.enabled=U,xt.autoUpdate=q,xt.needsUpdate=V,xt.type=G}function vt(M){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Nt(M){let U=M.target;U.removeEventListener("dispose",Nt),Se(U)}function Se(M){mn(M),Ot.remove(M)}function mn(M){let U=Ot.get(M).programs;U!==void 0&&(U.forEach(function(q){rt.releaseProgram(q)}),M.isShaderMaterial&&rt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,q,V,G,bt){U===null&&(U=ke);let It=G.isMesh&&G.matrixWorld.determinantAffine()<0,Mt=He(M,U,q,V,G);Et.setMaterial(V,It);let y=q.index,P=1;if(V.wireframe===!0){if(y=W.getWireframeAttribute(q),y===void 0)return;P=2}let C=q.drawRange,X=q.attributes.position,H=C.start*P,$=(C.start+C.count)*P;bt!==null&&(H=Math.max(H,bt.start*P),$=Math.min($,(bt.start+bt.count)*P)),y!==null?(H=Math.max(H,0),$=Math.min($,y.count)):X!=null&&(H=Math.max(H,0),$=Math.min($,X.count));let k=$-H;if(k<0||k===1/0)return;_t.setup(G,V,Mt,q,y);let lt,st=j;if(y!==null&&(lt=x.get(y),st=yt,st.setIndex(lt)),G.isMesh)V.wireframe===!0?(Et.setLineWidth(V.wireframeLinewidth*le()),st.setMode(B.LINES)):st.setMode(B.TRIANGLES);else if(G.isLine){let zt=V.linewidth;zt===void 0&&(zt=1),Et.setLineWidth(zt*le()),G.isLineSegments?st.setMode(B.LINES):G.isLineLoop?st.setMode(B.LINE_LOOP):st.setMode(B.LINE_STRIP)}else G.isPoints?st.setMode(B.POINTS):G.isSprite&&st.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))st.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let zt=G._multiDrawStarts,at=G._multiDrawCounts,ct=G._multiDrawCount,Ct=y?x.get(y).bytesPerElement:1,Jt=Ot.get(V).currentProgram.getUniforms();for(let ee=0;ee<ct;ee++)Jt.setValue(B,"_gl_DrawID",ee),st.render(zt[ee]/Ct,at[ee])}else if(G.isInstancedMesh)st.renderInstances(H,k,G.count);else if(q.isInstancedBufferGeometry){let zt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,at=Math.min(q.instanceCount,zt);st.renderInstances(H,k,at)}else st.render(H,k)};function bi(M,U,q,V){z!==null&&M.isNodeMaterial&&z.setObject(V,M),oe===!0&&nt.setState(M,q,!1),M.transparent===!0&&M.side===pn&&M.forceSinglePass===!1?(M.side=qe,M.needsUpdate=!0,qn(M,U,V),M.side=li,M.needsUpdate=!0,qn(M,U,V),M.side=pn):qn(M,U,V)}this.compile=function(M,U,q=null){q===null&&(q=M),z!==null&&z.renderStart(M,U,q),w=tt.get(q),w.init(U),S.push(w),q.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),M!==q&&M.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),Ue=this.localClippingEnabled,oe=nt.init(this.clippingPlanes,Ue),oe===!0&&nt.setGlobalState(this.clippingPlanes,U),z!==null&&xt.render(w.state.shadowsArray,q,U);let V=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let bt=G.material;if(bt)if(Array.isArray(bt))for(let It=0;It<bt.length;It++){let Mt=bt[It];bi(Mt,q,U,G),V.add(Mt)}else bi(bt,q,U,G),V.add(bt)}),w=S.pop(),z!==null&&z.renderEnd(),V},this.compileAsync=function(M,U,q=null){let V=this.compile(M,U,q);return new Promise(G=>{function bt(){if(V.forEach(function(It){let y=Ot.get(It).currentProgram;(y===void 0||y.isReady())&&V.delete(It)}),V.size===0){G(M);return}setTimeout(bt,10)}pe.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Ge=null;function Ei(M){Ge&&Ge(M)}function os(){En.stop()}function Ti(){En.start()}let En=new uh;En.setAnimationLoop(Ei),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(M){Ge=M,ft.setAnimationLoop(M),M===null?En.stop():En.start()},ft.addEventListener("sessionstart",os),ft.addEventListener("sessionend",Ti),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;z!==null&&z.renderStart(M,U);let q=ft.enabled===!0&&ft.isPresenting===!0,V=L!==null&&(dt===null||q)&&L.begin(I,dt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(U),U=ft.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,U,dt),w=tt.get(M,S.length),w.init(U),w.state.textureUnits=Vt.getTextureUnits(),S.push(w),fe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?we.setFromArrayCamera(U):jt.setFromProjectionMatrix(fe,dn,U.reversedDepth),Ue=this.localClippingEnabled,oe=nt.init(this.clippingPlanes,Ue),R=St.get(M,g.length),R.init(),g.push(R),this.info.render.frame++,ft.enabled===!0&&ft.isPresenting===!0){let It=I.xr.getDepthSensingMesh();It!==null&&hi(It,U,-1/0,I.sortObjects)}hi(M,U,0,I.sortObjects),R.finish(),z!==null&&z.updateLights(w.state.lightsArray),I.sortObjects===!0&&R.sort(Gt,xe),Ye=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Ye&&D.addToRenderList(R,M),this.info.autoReset===!0&&this.info.reset(),oe===!0&&nt.beginShadows();let G=w.state.shadowsArray;if(xt.render(G,M,U),oe===!0&&nt.endShadows(),(V&&L.hasRenderPass())===!1){let It=R.opaque,Mt=R.transmissive;if(w.setupLights(),U.isArrayCamera){let y=U.cameras;if(Mt.length>0)for(let P=0,C=y.length;P<C;P++){let X=y[P];ar(It,Mt,M,X)}Ye&&D.render(M);for(let P=0,C=y.length;P<C;P++){let X=y[P];tn(R,M,X,X.viewport)}}else Mt.length>0&&ar(It,Mt,M,U),Ye&&D.render(M),tn(R,M,U)}dt!==null&&Z===0&&(Vt.updateMultisampleRenderTarget(dt),Vt.updateRenderTargetMipmap(dt)),V&&L.end(I),M.isScene===!0&&M.onAfterRender(I,M,U),_t.resetDefaultState(),J=-1,ot=null,S.pop(),S.length>0?(w=S[S.length-1],Vt.setTextureUnits(w.state.textureUnits),oe===!0&&nt.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,g.pop(),g.length>0?R=g[g.length-1]:R=null,z!==null&&z.renderEnd()};function hi(M,U,q,V){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){let It=U.isArrayCamera?we:jt;if(!M.frustumCulled||M.intersectsFrustum(It)){V&&ye.setFromMatrixPosition(M.matrixWorld).applyMatrix4(fe);let Mt=ut.update(M),y=M.material;y.visible&&R.push(M,Mt,y,q,ye.z,null,U)}}else if(M.isMesh||M.isLine||M.isPoints){let It=U.isArrayCamera?we:jt;if(!M.frustumCulled||M.intersectsFrustum(It)){let Mt=ut.update(M),y=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ye.copy(M.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),ye.copy(Mt.boundingSphere.center)),ye.applyMatrix4(M.matrixWorld).applyMatrix4(fe)),Array.isArray(y)){let P=Mt.groups;for(let C=0,X=P.length;C<X;C++){let H=P[C],$=y[H.materialIndex];$&&$.visible&&R.push(M,Mt,$,q,ye.z,H,U)}}else y.visible&&R.push(M,Mt,y,q,ye.z,null,U)}}}let bt=M.children;for(let It=0,Mt=bt.length;It<Mt;It++)hi(bt[It],U,q,V)}function tn(M,U,q,V){let{opaque:G,transmissive:bt,transparent:It}=M;w.setupLightsView(q),oe===!0&&nt.setGlobalState(I.clippingPlanes,q),V&&Et.viewport(ht.copy(V)),G.length>0&&Xn(G,U,q),bt.length>0&&Xn(bt,U,q),It.length>0&&Xn(It,U,q),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function ar(M,U,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){let H=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new on(1,1,{generateMipmaps:!0,type:H?Sn:Ke,minFilter:Hn,samples:Math.max(4,me.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let bt=w.state.transmissionRenderTarget[V.id],It=V.viewport||ht;bt.setSize(It.z*I.transmissionResolutionScale,It.w*I.transmissionResolutionScale);let Mt=I.getRenderTarget(),y=I.getActiveCubeFace(),P=I.getActiveMipmapLevel();I.setRenderTarget(bt),I.getClearColor(et),wt=I.getClearAlpha(),wt<1&&I.setClearColor(16777215,.5),I.clear(),Ye&&D.render(q);let C=I.toneMapping;I.toneMapping=Rn;let X=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),oe===!0&&nt.setGlobalState(I.clippingPlanes,V),Xn(M,q,V),Vt.updateMultisampleRenderTarget(bt),Vt.updateRenderTargetMipmap(bt),pe.has("WEBGL_multisampled_render_to_texture")===!1){let H=!1;for(let $=0,k=U.length;$<k;$++){let lt=U[$],{object:st,geometry:zt,material:at,group:ct}=lt;if(at.side===pn&&st.layers.test(V.layers)){let Ct=at.side;at.side=qe,at.needsUpdate=!0,ls(st,q,V,zt,at,ct),at.side=Ct,at.needsUpdate=!0,H=!0}}H===!0&&(Vt.updateMultisampleRenderTarget(bt),Vt.updateRenderTargetMipmap(bt))}I.setRenderTarget(Mt,y,P),I.setClearColor(et,wt),X!==void 0&&(V.viewport=X),I.toneMapping=C}function Xn(M,U,q){let V=U.isScene===!0?U.overrideMaterial:null;for(let G=0,bt=M.length;G<bt;G++){let It=M[G],{object:Mt,geometry:y,group:P}=It,C=It.material;C.allowOverride===!0&&V!==null&&(C=V),Mt.layers.test(q.layers)&&ls(Mt,U,q,y,C,P)}}function ls(M,U,q,V,G,bt){z!==null&&G.isNodeMaterial&&z.setObject(M,G),M.onBeforeRender(I,U,q,V,G,bt),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(I,U,q,V,M,bt),G.transparent===!0&&G.side===pn&&G.forceSinglePass===!1?(G.side=qe,G.needsUpdate=!0,I.renderBufferDirect(q,U,V,G,M,bt),G.side=li,G.needsUpdate=!0,I.renderBufferDirect(q,U,V,G,M,bt),G.side=pn):I.renderBufferDirect(q,U,V,G,M,bt),M.onAfterRender(I,U,q,V,G,bt)}function cs(M){let U=0;for(let q of M)q.texture!==null&&U++;return U}function qn(M,U,q){U.isScene!==!0&&(U=ke);let V=Ot.get(M),G=w.state.lights,bt=w.state.shadowsArray,It=G.state.version,Mt=rt.getParameters(M,G.state,bt,U,q,w.state.lightProbeGridArray),y=rt.getProgramCacheKey(Mt),P=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;let C=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;V.envMap=T.get(M.envMap||V.environment,C),V.envMapRotation=V.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,P===void 0&&(M.addEventListener("dispose",Nt),P=new Map,V.programs=P,V.programVariants=new Map);let X=P.get(y);if(X!==void 0){if(V.currentProgram===X&&V.lightsStateVersion===It)return hs(M,Mt),X}else Mt.uniforms=rt.getUniforms(M),z!==null&&M.isNodeMaterial&&z.build(M,q,Mt),M.onBeforeCompile(Mt,I),X=rt.acquireProgram(Mt,y),P.set(y,X),V.uniforms=Mt.uniforms;let H=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(H.clippingPlanes=nt.uniform),hs(M,Mt),V.needsLights=us(M),V.lightsStateVersion=It,V.needsLights&&(H.ambientLightColor.value=G.state.ambient,H.lightProbe.value=G.state.probe,H.sunLights.value=G.state.sun,H.sunLightShadows.value=G.state.sunShadow,H.directionalLights.value=G.state.directional,H.directionalLightShadows.value=G.state.directionalShadow,H.spotLights.value=G.state.spot,H.spotLightShadows.value=G.state.spotShadow,H.rectAreaLights.value=G.state.rectArea,H.ltc_1.value=G.state.rectAreaLTC1,H.ltc_2.value=G.state.rectAreaLTC2,H.pointLights.value=G.state.point,H.pointLightShadows.value=G.state.pointShadow,H.hemisphereLights.value=G.state.hemi,H.sunShadowMatrix.value=G.state.sunShadowMatrix,H.sunShadowCascade.value=G.state.sunShadowCascade,H.directionalShadowMatrix.value=G.state.directionalShadowMatrix,H.spotLightMatrix.value=G.state.spotLightMatrix,H.spotLightMap.value=G.state.spotLightMap,H.pointShadowMatrix.value=G.state.pointShadowMatrix),V.numLightProbeGrids=cs(w.state.lightProbeGridArray),V.currentProgram=X,V.uniformsList=null,X}function or(M,U,q,V,G){let bt=Ot.get(M),It=bt.currentProgram.id+","+V+","+G,Mt=bt.programVariants.get(It);return Mt===void 0?(Mt=qn(M,U,q),bt.programVariants.set(It,Mt)):(bt.currentProgram=Mt,bt.uniformsList=null,bt.outputColorSpace=V,bt.toneMapping=G),Mt}function ce(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=ss.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function hs(M,U){let q=Ot.get(M);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function He(M,U,q,V,G){U.isScene!==!0&&(U=ke),Vt.resetTextureUnits();let bt=U.fog,It=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,Mt=dt===null?I.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:ne.workingColorSpace,y=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,P=T.get(V.envMap||It,y),C=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,X=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),H=!!q.morphAttributes.position,$=!!q.morphAttributes.normal,k=!!q.morphAttributes.color,lt=Rn;V.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(lt=I.toneMapping);let st=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,zt=st!==void 0?st.length:0,at=Ot.get(V),ct=w.state.lights;if(oe===!0&&(Ue===!0||M!==ot)){let he=M===ot&&V.id===J;nt.setState(V,M,he)}let Ct=!1,Jt=!1;V.version===at.__version?at.needsLights&&at.lightsStateVersion!==ct.state.version||G.isBatchedMesh&&at.batching===!1||!G.isBatchedMesh&&at.batching===!0||G.isBatchedMesh&&at.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&at.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&at.instancing===!1||!G.isInstancedMesh&&at.instancing===!0||G.isSkinnedMesh&&at.skinning===!1||!G.isSkinnedMesh&&at.skinning===!0||G.isInstancedMesh&&at.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&at.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&at.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&at.instancingMorph===!1&&G.morphTexture!==null||at.envMap!==P||V.fog===!0&&at.fog!==bt||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==nt.numPlanes||at.numIntersection!==nt.numIntersection)||at.vertexAlphas!==C||at.vertexTangents!==X||at.morphTargets!==H||at.morphNormals!==$||at.morphColors!==k||at.morphTargetsCount!==zt||at.numLightProbeGrids!==cs(w.state.lightProbeGridArray)?Ct=!0:(at.outputColorSpace!==Mt||at.toneMapping!==lt)&&(Jt=!0):(Ct=!0,at.__version=V.version);let ee=at.currentProgram;(Ct===!0||Jt===!0)&&(ee=Jt===!0?or(V,U,G,Mt,lt):qn(V,U,G),z&&V.isNodeMaterial&&z.onUpdateProgram(V,ee,at));let Pe=!1,Ve=!1,en=!1,te=ee.getUniforms(),Ee=at.uniforms;if(Et.useProgram(ee.program)&&(Pe=!0,Ve=!0,en=!0),V.id!==J&&(J=V.id,Ve=!0),Pe||ot!==M){Et.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),te.setValue(B,"projectionMatrix",M.projectionMatrix),te.setValue(B,"viewMatrix",M.matrixWorldInverse);let ge=te.map.cameraPosition;ge!==void 0&&ge.setValue(B,Qe.setFromMatrixPosition(M.matrixWorld)),me.logarithmicDepthBuffer&&te.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&te.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),ot!==M&&(ot=M,Ve=!0,en=!0)}if(at.needsLights&&(ct.state.sunShadowMap.length>0&&te.setValue(B,"sunShadowMap",ct.state.sunShadowMap,Vt),ct.state.directionalShadowMap.length>0&&te.setValue(B,"directionalShadowMap",ct.state.directionalShadowMap,Vt),ct.state.spotShadowMap.length>0&&te.setValue(B,"spotShadowMap",ct.state.spotShadowMap,Vt),ct.state.pointShadowMap.length>0&&te.setValue(B,"pointShadowMap",ct.state.pointShadowMap,Vt)),G.isSkinnedMesh){te.setOptional(B,G,"bindMatrix"),te.setOptional(B,G,"bindMatrixInverse");let he=G.skeleton;he&&(he.boneTexture===null&&he.computeBoneTexture(),te.setValue(B,"boneTexture",he.boneTexture,Vt))}G.isBatchedMesh&&(te.setOptional(B,G,"batchingTexture"),te.setValue(B,"batchingTexture",G._matricesTexture,Vt),te.setOptional(B,G,"batchingIdTexture"),te.setValue(B,"batchingIdTexture",G._indirectTexture,Vt),te.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&te.setValue(B,"batchingColorTexture",G._colorsTexture,Vt));let Je=q.morphAttributes;if((Je.position!==void 0||Je.normal!==void 0||Je.color!==void 0)&&it.update(G,q,ee),(Ve||at.receiveShadow!==G.receiveShadow)&&(at.receiveShadow=G.receiveShadow,te.setValue(B,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(Ee.envMapIntensity.value=U.environmentIntensity),Ee.dfgLUT!==void 0&&(Ee.dfgLUT.value=hg()),Ve){if(te.setValue(B,"toneMappingExposure",I.toneMappingExposure),at.needsLights&&lr(Ee,en),bt&&V.fog===!0&&gt.refreshFogUniforms(Ee,bt),gt.refreshMaterialUniforms(Ee,V,At,Bt,w.state.transmissionRenderTarget[M.id]),at.needsLights&&at.numLightProbeGrids>0){let he=b,ge=0;for(let In of w.state.lightProbeGridArray)In.texture!==null&&(he.textures[ge]=In.texture,he.min[ge]=In.boundingBox.min,he.max[ge]=In.boundingBox.max,he.resolution[ge]=In.resolution,ge++);for(let In in he)he[In].length=ge;Ee.probesSH.value=he.textures,Ee.probesMin.value=he.min,Ee.probesMax.value=he.max,Ee.probesResolution.value=he.resolution}ss.upload(B,ce(at),Ee,Vt)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ss.upload(B,ce(at),Ee,Vt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&te.setValue(B,"center",G.center),te.setValue(B,"modelViewMatrix",G.modelViewMatrix),te.setValue(B,"normalMatrix",G.normalMatrix),te.setValue(B,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let he=V.uniformsGroups;for(let ge=0,In=he.length;ge<In;ge++){let Rl=he[ge];Dt.update(Rl,ee),Dt.bind(Rl,ee)}}return ee}function lr(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function us(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return dt},this.setRenderTargetTextures=function(M,U,q){let V=Ot.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Ot.get(M.texture).__webglTexture=U,Ot.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let q=Ot.get(M);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,q=0){dt=M,Q=U,Z=q;let V=null,G=!1,bt=!1;if(M){let Mt=Ot.get(M);if(Mt.__useDefaultFramebuffer!==void 0){Et.bindFramebuffer(B.FRAMEBUFFER,Mt.__webglFramebuffer),ht.copy(M.viewport),Pt.copy(M.scissor),pt=M.scissorTest,Et.viewport(ht),Et.scissor(Pt),Et.setScissorTest(pt),J=-1;return}else if(Mt.__webglFramebuffer===void 0)Vt.setupRenderTarget(M);else if(Mt.__hasExternalTextures)Vt.rebindTextures(M,Ot.get(M.texture).__webglTexture,Ot.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let C=M.depthTexture;if(Mt.__boundDepthTexture!==C){if(C!==null&&Ot.has(C)&&(M.width!==C.image.width||M.height!==C.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(M)}}let y=M.texture;(y.isData3DTexture||y.isDataArrayTexture||y.isCompressedArrayTexture)&&(bt=!0);let P=Ot.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(P[U])?V=P[U][q]:V=P[U],G=!0):M.samples>0&&Vt.useMultisampledRTT(M)===!1?V=Ot.get(M).__webglMultisampledFramebuffer:Array.isArray(P)?V=P[q]:V=P,ht.copy(M.viewport),Pt.copy(M.scissor),pt=M.scissorTest}else ht.copy(Tt).multiplyScalar(At).floor(),Pt.copy(Kt).multiplyScalar(At).floor(),pt=ie;if(q!==0&&(V=Y),Et.bindFramebuffer(B.FRAMEBUFFER,V)&&Et.drawBuffers(M,V),Et.viewport(ht),Et.scissor(Pt),Et.setScissorTest(pt),G){let Mt=Ot.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,q)}else if(bt){let Mt=U;for(let y=0;y<M.textures.length;y++){let P=Ot.get(M.textures[y]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+y,P.__webglTexture,q,Mt)}}else if(M!==null&&q!==0){let Mt=Ot.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Mt.__webglTexture,q)}J=-1};function wi(M){let U=Ot.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=me.textureFormatReadable(M.format),U.__typeReadable=me.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,q,V,G,bt,It,Mt=0){if(!(M&&M.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let y=Ot.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&It!==void 0&&(y=y[It],Array.isArray(y)&&(y=y[0])),y){Et.bindFramebuffer(B.FRAMEBUFFER,y);try{let P=M.textures[Mt],C=P.format,X=P.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Mt);let H=wi(P);if(H.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(H.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-V&&q>=0&&q<=M.height-G&&B.readPixels(U,q,V,G,mt.convert(C),mt.convert(X),bt)}finally{let P=dt!==null?Ot.get(dt).__webglFramebuffer:null;Et.bindFramebuffer(B.FRAMEBUFFER,P)}}},this.readRenderTargetPixelsAsync=async function(M,U,q,V,G,bt,It,Mt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let y=Ot.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&It!==void 0&&(y=y[It],Array.isArray(y)&&(y=y[0])),y)if(U>=0&&U<=M.width-V&&q>=0&&q<=M.height-G){Et.bindFramebuffer(B.FRAMEBUFFER,y);let P=M.textures[Mt],C=P.format,X=P.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Mt);let H=wi(P);if(H.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(H.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,$),B.bufferData(B.PIXEL_PACK_BUFFER,bt.byteLength,B.STREAM_READ),B.readPixels(U,q,V,G,mt.convert(C),mt.convert(X),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let k=dt!==null?Ot.get(dt).__webglFramebuffer:null;Et.bindFramebuffer(B.FRAMEBUFFER,k);let lt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Fc(B,lt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,$),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,bt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer($),B.deleteSync(lt),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,q=0){let V=Math.pow(2,-q),G=Math.floor(M.image.width*V),bt=Math.floor(M.image.height*V),It=U!==null?U.x:0,Mt=U!==null?U.y:0;Vt.setTexture2D(M,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,It,Mt,G,bt),Et.unbindTexture()},this.copyTextureToTexture=function(M,U,q=null,V=null,G=0,bt=0){let It,Mt,y,P,C,X,H,$,k,lt=M.isCompressedTexture?M.mipmaps[bt]:M.image;if(q!==null)It=q.max.x-q.min.x,Mt=q.max.y-q.min.y,y=q.isBox3?q.max.z-q.min.z:1,P=q.min.x,C=q.min.y,X=q.isBox3?q.min.z:0;else{let te=Math.pow(2,-G);It=Math.floor(lt.width*te),Mt=Math.floor(lt.height*te),M.isDataArrayTexture?y=lt.depth:M.isData3DTexture?y=Math.floor(lt.depth*te):y=1,P=0,C=0,X=0}V!==null?(H=V.x,$=V.y,k=V.z):(H=0,$=0,k=0);let st=mt.convert(U.format),zt=mt.convert(U.type),at;U.isData3DTexture?(Vt.setTexture3D(U,0),at=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Vt.setTexture2DArray(U,0),at=B.TEXTURE_2D_ARRAY):(Vt.setTexture2D(U,0),at=B.TEXTURE_2D),Et.activeTexture(B.TEXTURE0),Et.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),Et.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),Et.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);let ct=Et.getParameter(B.UNPACK_ROW_LENGTH),Ct=Et.getParameter(B.UNPACK_IMAGE_HEIGHT),Jt=Et.getParameter(B.UNPACK_SKIP_PIXELS),ee=Et.getParameter(B.UNPACK_SKIP_ROWS),Pe=Et.getParameter(B.UNPACK_SKIP_IMAGES);Et.pixelStorei(B.UNPACK_ROW_LENGTH,lt.width),Et.pixelStorei(B.UNPACK_IMAGE_HEIGHT,lt.height),Et.pixelStorei(B.UNPACK_SKIP_PIXELS,P),Et.pixelStorei(B.UNPACK_SKIP_ROWS,C),Et.pixelStorei(B.UNPACK_SKIP_IMAGES,X);let Ve=M.isDataArrayTexture||M.isData3DTexture,en=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let te=Ot.get(M),Ee=Ot.get(U),Je=Ot.get(te.__renderTarget),he=Ot.get(Ee.__renderTarget);Et.bindFramebuffer(B.READ_FRAMEBUFFER,Je.__webglFramebuffer),Et.bindFramebuffer(B.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ge=0;ge<y;ge++)Ve&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ot.get(M).__webglTexture,G,X+ge),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ot.get(U).__webglTexture,bt,k+ge)),B.blitFramebuffer(P,C,P+It,C+Mt,H,$,H+It,$+Mt,B.DEPTH_BUFFER_BIT,B.NEAREST);Et.bindFramebuffer(B.READ_FRAMEBUFFER,null),Et.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||Ot.has(M)){let te=Ot.get(M),Ee=Ot.get(U);Et.bindFramebuffer(B.READ_FRAMEBUFFER,N),Et.bindFramebuffer(B.DRAW_FRAMEBUFFER,K);for(let Je=0;Je<y;Je++)Ve?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,te.__webglTexture,G,X+Je):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,te.__webglTexture,G),en?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ee.__webglTexture,bt,k+Je):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ee.__webglTexture,bt),G!==0?B.blitFramebuffer(P,C,P+It,C+Mt,H,$,H+It,$+Mt,B.COLOR_BUFFER_BIT,B.NEAREST):en?B.copyTexSubImage3D(at,bt,H,$,k+Je,P,C,It,Mt):B.copyTexSubImage2D(at,bt,H,$,P,C,It,Mt);Et.bindFramebuffer(B.READ_FRAMEBUFFER,null),Et.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else en?M.isDataTexture||M.isData3DTexture?B.texSubImage3D(at,bt,H,$,k,It,Mt,y,st,zt,lt.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(at,bt,H,$,k,It,Mt,y,st,lt.data):B.texSubImage3D(at,bt,H,$,k,It,Mt,y,st,zt,lt):M.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,bt,H,$,It,Mt,st,zt,lt.data):M.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,bt,H,$,lt.width,lt.height,st,lt.data):B.texSubImage2D(B.TEXTURE_2D,bt,H,$,It,Mt,st,zt,lt);Et.pixelStorei(B.UNPACK_ROW_LENGTH,ct),Et.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ct),Et.pixelStorei(B.UNPACK_SKIP_PIXELS,Jt),Et.pixelStorei(B.UNPACK_SKIP_ROWS,ee),Et.pixelStorei(B.UNPACK_SKIP_IMAGES,Pe),bt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&B.generateMipmap(at),Et.unbindTexture()},this.initRenderTarget=function(M){Ot.get(M).__webglFramebuffer===void 0&&Vt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Vt.setTextureCube(M,0):M.isData3DTexture?Vt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Vt.setTexture2DArray(M,0):Vt.setTexture2D(M,0),Et.unbindTexture()},this.resetState=function(){Q=0,Z=0,dt=null,Et.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var Sh={type:"change"},Al={type:"start"},Eh={type:"end"},Qa=new mi,bh=new rn,dg=Math.cos(70*tr.DEG2RAD),Ce=new O,je=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wl=1e-6,to=class extends Xs{constructor(t,e=null){super(t,e),this.state=se.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ai.ROTATE,MIDDLE:ai.DOLLY,RIGHT:ai.PAN},this.touches={ONE:oi.ROTATE,TWO:oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new an,this._lastTargetPosition=new O,this._quat=new an().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ji,this._sphericalDelta=new ji,this._scale=1,this._panOffset=new O,this._rotateStart=new Ut,this._rotateEnd=new Ut,this._rotateDelta=new Ut,this._panStart=new Ut,this._panEnd=new Ut,this._panDelta=new Ut,this._dollyStart=new Ut,this._dollyEnd=new Ut,this._dollyDelta=new Ut,this._dollyDirection=new O,this._mouse=new Ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=pg.bind(this),this._onPointerDown=fg.bind(this),this._onPointerUp=mg.bind(this),this._onContextMenu=Sg.bind(this),this._onMouseWheel=xg.bind(this),this._onKeyDown=yg.bind(this),this._onTouchStart=vg.bind(this),this._onTouchMove=Mg.bind(this),this._onMouseDown=gg.bind(this),this._onMouseMove=_g.bind(this),this._interceptControlDown=bg.bind(this),this._interceptControlUp=Eg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=se.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sh),this.update(),this.state=se.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ce.copy(e).sub(this.target),Ce.applyQuaternion(this._quat),this._spherical.setFromVector3(Ce),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=je:n>Math.PI&&(n-=je),s<-Math.PI?s+=je:s>Math.PI&&(s-=je),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ce.setFromSpherical(this._spherical),Ce.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ce),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ce.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ce.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Qa.origin.copy(this.object.position),Qa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qa.direction))<dg?this.object.lookAt(this.target):(bh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qa.intersectPlane(bh,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>wl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wl||this._lastTargetPosition.distanceToSquared(this.target)>wl?(this.dispatchEvent(Sh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?je/60*this.autoRotateSpeed*t:je/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ce.setFromMatrixColumn(e,0),Ce.multiplyScalar(-t),this._panOffset.add(Ce)}_panUp(t,e){this.screenSpacePanning===!0?Ce.setFromMatrixColumn(e,1):(Ce.setFromMatrixColumn(e,0),Ce.crossVectors(this.object.up,Ce)),Ce.multiplyScalar(t),this._panOffset.add(Ce)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ce.copy(s).sub(this.target);let r=Ce.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function fg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function pg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function mg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Eh),this.state=se.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function gg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ai.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=se.DOLLY;break;case ai.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}break;case ai.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Al)}function _g(i){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function xg(i){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(i.preventDefault(),this.dispatchEvent(Al),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Eh))}function yg(i){this.enabled!==!1&&this._handleKeyDown(i)}function vg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case oi.ROTATE:if(this.enableRotate===!1){this.state=se.NONE;break}this._handleTouchStartRotate(i),this.state=se.TOUCH_ROTATE;break;case oi.PAN:if(this.enablePan===!1){this.state=se.NONE;break}this._handleTouchStartPan(i),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case oi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=se.TOUCH_DOLLY_PAN;break;case oi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Al)}function Mg(i){switch(this._trackPointer(i),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=se.NONE}}function Sg(i){this.enabled!==!1&&i.preventDefault()}function bg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Eg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var rr=class extends De{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Ut(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this.rotation2D=t.rotation2D,this}},as=new O,Th=new ae,wh=new ae,Ah=new O,Rh=new O,eo=class{constructor(t={}){let e=this,n,s,r,a,o={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:s}},this.render=function(_,E){_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),E.parent===null&&E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),Th.copy(E.matrixWorldInverse),wh.multiplyMatrices(E.projectionMatrix,Th),u(_,_,E),this.sortObjects&&m(_)},this.setSize=function(_,E){n=_,s=E,r=n/2,a=s/2,l.style.width=_+"px",l.style.height=E+"px"};function c(_){_.isCSS2DObject&&(_.element.style.display="none");for(let E=0,f=_.children.length;E<f;E++)c(_.children[E])}function u(_,E,f){if(_.visible===!1){c(_);return}if(_.isCSS2DObject){as.setFromMatrixPosition(_.matrixWorld),as.applyMatrix4(wh);let h=as.z>=-1&&as.z<=1&&_.layers.test(f.layers)===!0,v=_.element;if(v.style.display=h===!0?"":"none",h===!0){_.onBeforeRender(e,E,f);let b=100*_.center.x,R=100*_.center.y;v.style.transformOrigin=`${b}% ${R}%`;let w=-_.rotation2D,g=as.x*r+r,S=-as.y*a+a;v.style.transform=`translate(${-b}%, ${-R}%) translate(${g}px, ${S}px) rotate(${w}rad)`,v.parentNode!==l&&l.appendChild(v),_.onAfterRender(e,E,f)}let A={distanceToCameraSquared:p(f,_)};o.objects.set(_,A)}for(let h=0,v=_.children.length;h<v;h++)u(_.children[h],E,f)}function p(_,E){return Ah.setFromMatrixPosition(_.matrixWorld),Rh.setFromMatrixPosition(E.matrixWorld),Ah.distanceToSquared(Rh)}function d(_){let E=[];return _.traverseVisible(function(f){f.isCSS2DObject&&E.push(f)}),E}function m(_){let E=d(_).sort(function(h,v){if(h.renderOrder!==v.renderOrder)return v.renderOrder-h.renderOrder;let A=o.objects.get(h).distanceToCameraSquared,b=o.objects.get(v).distanceToCameraSquared;return A-b}),f=E.length;for(let h=0,v=E.length;h<v;h++)E[h].element.style.zIndex=f-h}}};(()=>{let i=document.getElementById("sceneFallback"),t=document.getElementById("islandStage"),e=document.getElementById("three-root"),n=document.getElementById("label-root"),s=document.getElementById("rotateToggle"),r=document.getElementById("resetView"),a=window.matchMedia("(prefers-reduced-motion: reduce)").matches,l=decodeURIComponent(location.hash.slice(1)).match(/^(\d{4}-\d{2})-/),c=new URLSearchParams(location.search);if(l){location.replace(`month.html?month=${encodeURIComponent(l[1])}${location.hash}`);return}if(/^\d{4}-\d{2}$/.test(c.get("month")||"")){location.replace(`month.html${location.search}${location.hash}`);return}let u;try{u=JSON.parse(document.getElementById("home-data").textContent||"{}")}catch{u={}}let p=Array.isArray(u.months)?u.months:[],d=null;try{d=localStorage.getItem("homeIslandMonth")}catch{}let m=p.find(y=>y.key===d)||p[p.length-1],_=(y,P={})=>{let C=new URLSearchParams({month:y});return P.group!==void 0&&C.set("group",String(P.group)),P.category&&C.set("category",P.category),`month.html?${C.toString()}`};function E(y){i.textContent=y,i.hidden=!1,s.disabled=!0,s.setAttribute("aria-pressed","false"),s.textContent="3D \u65CB\u8F49\u672A\u555F\u7528",r.disabled=!0}if(!p.length||!m){E("\u76EE\u524D\u5C1A\u7121\u6708\u4EFD\u8CC7\u6599\uFF1B\u8ACB\u4F7F\u7528\u6587\u7A3F\u5C0E\u89BD\uFF0C\u6216\u7A0D\u5F8C\u518D\u8A66\u3002");return}if(!document.createElement("canvas").getContext("webgl2")){E("\u6B64\u700F\u89BD\u5668\u672A\u555F\u7528 WebGL\uFF1B\u8ACB\u4F7F\u7528\u6587\u7A3F\u5C0E\u89BD\u9032\u5165\u5BE9\u7A3F\u9801\u3002\u82E5\u5C0E\u89BD\u5DF2\u6536\u5408\uFF0C\u6309\u4E0A\u65B9\u300C\u986F\u793A\u5C0E\u89BD\u300D\u3002");return}let h;try{h=new $a({antialias:!0,alpha:!1,powerPreference:"low-power"})}catch{E("3D \u5834\u666F\u7121\u6CD5\u555F\u52D5\uFF1B\u6587\u7A3F\u5C0E\u89BD\u4ECD\u53EF\u5B8C\u6574\u4F7F\u7528\u3002\u82E5\u5C0E\u89BD\u5DF2\u6536\u5408\uFF0C\u6309\u4E0A\u65B9\u300C\u986F\u793A\u5C0E\u89BD\u300D\u3002");return}let v=new Ts;v.background=new Zt("#f3ebe3"),v.fog=new Es("#edddcf",48,110);let A=new Be(32,1,.1,240),b=new be;v.add(b),h.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6)),h.shadowMap.enabled=!0,h.shadowMap.type=_i,h.outputColorSpace=We,h.toneMapping=qs,h.toneMappingExposure=1,h.domElement.setAttribute("aria-hidden","true"),h.domElement.setAttribute("role","presentation"),e.appendChild(h.domElement);let R=new eo;R.domElement.style.position="absolute",R.domElement.style.inset="0",R.domElement.style.overflow="hidden",R.domElement.style.pointerEvents="none",n.appendChild(R.domElement);let w=new Bs("#fff8f4","#c5b5a7",1.9);v.add(w);let g=new Vs("#ffc090",0);v.add(g);let S=new $i("#cfe4f2",.9);S.position.set(12,8,-10),v.add(S);let L=new $i("#ffe9cf",3);L.position.set(-8,18,12),L.castShadow=!0,L.shadow.mapSize.set(1024,1024),L.shadow.camera.left=-36,L.shadow.camera.right=36,L.shadow.camera.top=36,L.shadow.camera.bottom=-36,L.shadow.camera.near=.5,L.shadow.camera.far=80,L.shadow.bias=-45e-5,L.shadow.normalBias=.04,L.target.position.set(0,6.5,0),v.add(L,L.target),L.shadow.camera.updateProjectionMatrix();let I=new fn({side:pn,depthWrite:!1,toneMapped:!1,uniforms:{top:{value:new O(197/255,223/255,240/255)},mid:{value:new O(232/255,242/255,247/255)},bottom:{value:new O(243/255,235/255,227/255)},resolution:{value:new Ut(1,1)}},vertexShader:"void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 mid; uniform vec3 bottom; uniform vec2 resolution; void main(){ float y = clamp(gl_FragCoord.y / max(resolution.y, 1.0), 0.0, 1.0); vec3 col = y < 0.5 ? mix(bottom, mid, y * 2.0) : mix(mid, top, (y - 0.5) * 2.0); gl_FragColor = vec4(col, 1.0); }"}),F=new Ne(new cn(180,28,18),I);F.frustumCulled=!1,F.renderOrder=-10,v.add(F);let z=[],Y=new Set,N=[],K=[],Q=[],Z=[],dt=[],J=[],ot={land:["#e6d8c8","#d3c4aa","#f4ece4"],soil:["#c5b5a7","#b8a07e","#c5b5a7","#b8a07e"],roof:["#db6a41","#e08a5f","#c9583a"],building:["#fff8f4","#f4ebdd","#fffdf9"],ink:"#211d1d"},ht={\u6587\u7A3F:"#db6a41",\u526A\u5F71:"#e6a15a",\u8A69\u8A5E:"#45abbb",\u89AA\u5B50\u5712\u5730:"#e9c46a",\u5C01\u5E95:"#c9583a",\u5F85\u5206\u985E:"#78685e"};function Pt(y,P={}){return new Fs({roughness:.8,metalness:0,flatShading:!0,...P,color:y})}function pt(y,P,C={}){let X=new Ne(y,Pt(P,C));return X.castShadow=!0,X.receiveShadow=!0,X}function et(y,P,C,X,H=""){let $=document.createElement("a");$.className=`island-label ${H}`.trim(),$.href=C,H.includes("group-label")&&($.dataset.num=(y.match(/\d+/)||[""])[0]),$.setAttribute("aria-label",P?`${y}\uFF0C${P}\uFF0C\u958B\u555F\u5BE9\u7A3F\u9801`:`${y}\uFF0C\u958B\u555F\u5BE9\u7A3F\u9801`);let k=document.createElement("span");if(k.textContent=y,$.appendChild(k),P){let st=document.createElement("small");st.textContent=P,$.appendChild(st)}let lt=new rr($);return lt.position.set(X.x,X.y,X.z),lt}function wt(y,P){y.userData.route=P,y.traverse(C=>{if(!C.isMesh)return;C.userData.route=P,C.userData.interactiveRoot=y;let X=Array.isArray(C.material)?C.material:[C.material];for(let H of X)H&&H.emissive&&(H.userData.originalEmissive=H.emissive.getHex());z.push(C)}),Y.add(y)}function Lt(y,P,C,X,H,$,k=1,lt="",st=0,zt=X){let at=new be;at.position.set(P,1.1,C),y.add(at);let ct=pt(new Xt(.98*k,.16*k,.82*k),"#f4ebdd");ct.position.y=.08*k,at.add(ct);let Ct=ot.building.length,Jt=((X.length+Math.round(P*10))%Ct+Ct)%Ct,ee=pt(new Xt(.72*k,.76*k,.62*k),ot.building[Jt]);ee.position.y=.52*k,at.add(ee);let Pe=pt(new Gn(.62*k,.54*k,4,1),$);Pe.position.y=1.15*k,Pe.rotation.y=Math.PI/4,at.add(Pe);let Ve=pt(new Xt(.19*k,.34*k,.045*k),"#78685e",{roughness:.9});Ve.position.set(0,.28*k,.33*k),at.add(Ve);for(let he of[-1,1]){let ge=pt(new Xt(.13*k,.14*k,.04*k),"#8fd3da",{roughness:.6,emissive:"#fcea8b",emissiveIntensity:0});ge.position.set(he*.22*k,.64*k,.33*k),ge.material.userData.todManaged=!0,N.push(ge.material),at.add(ge)}let en=pt(new Xt(.86*k,.06*k,.76*k),"#f4ebdd");en.position.y=.92*k,at.add(en);let te=pt(new Xt(.34*k,.04*k,.16*k),$);te.position.set(0,.5*k,.38*k),te.rotation.x=.35,at.add(te);let Ee=pt(new Xt(.3*k,.06*k,.14*k),"#c5b5a7");Ee.position.set(0,.19*k,.42*k),at.add(Ee);for(let he of[-1,1]){let ge=pt(new Xt(.17*k,.03*k,.06*k),"#fff8f4");ge.position.set(he*.22*k,.56*k,.34*k),at.add(ge)}At(at,X.replace("\u2026",""),k,$),at.rotation.y=-Math.atan2(C,P)+Math.PI/2,wt(at,H);let Je=et(X,lt,H,{x:0,y:1.9*k+st,z:0},"cat-label");return Je.element.title=zt+(lt?`\uFF08${lt}\uFF09`:""),at.add(Je),at}function Bt(y,P,C,X=1,H="#9fbf8f"){let $=new be;$.position.set(P,1.05,C),y.add($);let k=pt(new de(.08*X,.12*X,.55*X,5),"#a77a55");k.position.y=.28*X,$.add(k);let lt=pt(new ni(.44*X,0),H);lt.position.y=.78*X,$.add(lt);let st=pt(new ni(.31*X,0),"#b7cf9f");st.position.set(.12*X,1.02*X,.04*X),$.add(st)}function At(y,P,C,X){let H=($,k,lt,st,zt,at=0)=>{let ct=pt($,k);return ct.position.set(lt*C,st*C,zt*C),ct.rotation.y=at,y.add(ct),ct};if(P.startsWith("\u6587\u7A3F"))H(new Xt(.5,.14,.04),"#211d1d",0,1.5,.05),H(new Xt(.44,.09,.05),"#fcea8b",0,1.5,.08),H(new Xt(.3,.4,.14),"#a77a55",.55,.4,.2),["#db6a41","#45abbb","#fcea8b","#78685e"].forEach(($,k)=>H(new Xt(.05,.13,.1),$,.46+k*.06,.5,.26));else if(P.startsWith("\u526A\u5F71")){H(new Xt(.36,.05,.36),"#b48560",.62,.62,.1);for(let[k,lt]of[[-1,-1],[1,-1],[-1,1],[1,1]])H(new de(.025,.025,.6,5),"#a77a55",.62+k*.15,.3,.1+lt*.15);H(new Xt(.16,.11,.1),"#211d1d",.62,.72,.1);let $=H(new de(.04,.04,.08,8),"#8fd3da",.62,.72,.18);$.rotation.x=Math.PI/2}else if(P.startsWith("\u8A69\u8A5E")){H(new Xt(.18,.42,.08),"#c5b5a7",.58,.29,.25),H(new Xt(.24,.06,.12),"#b8a07e",.58,.1,.25);for(let $ of[-1,1])H(new de(.025,.025,.42,5),"#db6a41",-.62+$*.13,.29,.25);H(new Gn(.24,.16,6),X,-.62,.58,.25)}else if(P.startsWith("\u89AA\u5B50")){for(let $ of[-1,1]){let k=H(new de(.02,.02,.5,5),"#db6a41",.62+$*.18,.25,.25);k.rotation.z=$*.12}H(new de(.02,.02,.4,5),"#db6a41",.62,.5,.25).rotation.z=Math.PI/2,H(new Xt(.12,.02,.07),"#fcea8b",.62,.22,.25),H(new Xt(.34,.06,.34),"#f4ece4",-.6,.1,.3),H(new cn(.06,6,4),"#45abbb",-.6,.16,.3)}else if(P.startsWith("\u5C01\u5E95")){for(let $ of[-1,1])H(new de(.025,.025,.55,5),"#a77a55",.6+$*.2,.27,.3);H(new Xt(.46,.3,.04),"#fff8f4",.6,.45,.3),["#db6a41","#fcea8b","#8fd3da"].forEach(($,k)=>H(new Xt(.1,.12,.01),$,.46+k*.14,.46,.33))}}let Gt={rock:new ni(.16,0),bush:new Ns(.16,0),flower:new cn(.05,5,4),stone:new de(.16,.18,.04,6)};function xe(y,P){let C=new Ji({color:y,transparent:!0,opacity:P,depthWrite:!1,toneMapped:!1});return C.userData.todManaged=!0,C}let Tt={nearLit:Pt("#fff8f4",{flatShading:!0,transparent:!0,opacity:.92,roughness:.9}),nearShade:Pt("#d5e3ee",{flatShading:!0,transparent:!0,opacity:.92,roughness:.9}),farLit:xe("#fff8f4",.9),farShade:xe("#d5e3ee",.88),disc:xe("#f3ebe3",.97)};Tt.nearLit.userData.todManaged=!0,Tt.nearShade.userData.todManaged=!0;function Kt(y,P,C,X,H,$,k,lt){let st=new Ne(new ni(1,0),P);return st.position.set(C,X,H),st.scale.set($,k,lt),st.castShadow=!1,st.receiveShadow=!1,y.add(st),st}function ie(y,P,C,X,H,$,k=1,lt=0){let st=pt(P,C);return st.position.set(X,H,$),st.scale.setScalar(k),st.rotation.y=lt,st.castShadow=k>.6,y.add(st),st}function jt(y,P,C,X){let H=oe.islandRadius,$=(ct,Ct)=>({x:Math.cos(ct)*Ct,z:Math.sin(ct)*Ct}),k=ct=>{let Ct=Math.sin(P*91.7+ct*12.9)*43758.5;return Ct-Math.floor(Ct)};for(let ct=0;ct<7;ct+=1){let Ct=$(C+ct*.9+k(ct),H*(.9+k(ct+3)*.12)),Jt=pt(new de(.55+k(ct)*.35,.7+k(ct)*.35,.7+k(ct+1)*.25,6),ct%2?"#c5b5a7":"#b8a07e");Jt.position.set(Ct.x,.36,Ct.z),Jt.rotation.y=k(ct+9)*3,y.add(Jt);let ee=pt(new de(.5+k(ct)*.3,.55+k(ct)*.3,.12,6),Qe[P]);ee.position.set(Ct.x,.72+k(ct+1)*.12,Ct.z),ee.rotation.y=Jt.rotation.y,y.add(ee)}ye.filter(ct=>ct!==P).forEach(ct=>{let Ct=Math.atan2(le[ct].z-le[P].z,le[ct].x-le[P].x);for(let Jt=.5;Jt<H-.1;Jt+=.42){let ee=$(Ct+Math.sin(Jt*2)*.06,Jt);ie(y,Gt.stone,"#f4ebdd",ee.x,1.13,ee.z,1,Jt)}});let lt=C+Math.PI,st=200*Math.PI/180,zt=[[lt,1.3,.6],[lt+.35,2.4,.5],[lt-.35,2.5,.45]];for(let ct=0;ct<Math.max(1,X.length-1);ct+=1){let Ct=X.length<2?C+.6:C-st/2+st*(ct+.5)/(X.length-1);zt.push([Ct,3,.4+k(ct+20)*.2])}zt.slice(0,6).forEach(([ct,Ct,Jt],ee)=>{let Pe=$(ct,Ct);Bt(y,Pe.x,Pe.z,Jt,ee%2?"#9fbf8f":"#8db07c")});let at=["#db6a41","#fcea8b","#fff8f4","#e6a15a"];for(let ct=0;ct<6;ct+=1){let Ct=$(lt+(ct-2.5)*.28,1.9+k(ct+30)*.9);ie(y,Gt.bush,ct%2?"#a9c796":"#8db07c",Ct.x,1.16,Ct.z,.9+k(ct)*.5);for(let Jt=0;Jt<3;Jt+=1)ie(y,Gt.flower,at[(ct+Jt)%4],Ct.x+(Jt-1)*.12,1.3,Ct.z+k(ct+Jt)*.14-.07,1)}for(let ct=0;ct<3;ct+=1){let Ct=$(C+(ct-1)*1.6+.4,H*.86);ie(y,Gt.rock,"#c5b5a7",Ct.x,1.16,Ct.z,.9+k(ct+40)*.6,k(ct)*3)}}function we(y,P,C){let X=new be;y.add(X),dt.push(X),[{y:-.3,rt:C*.92,rb:C*.68,h:.7,color:"#c5b5a7"},{y:-1,rt:C*.68,rb:C*.42,h:.7,color:"#b8a07e"},{y:-1.7,rt:C*.42,rb:C*.16,h:.7,color:"#9a8b7a"}].forEach(k=>{let lt=pt(new de(k.rt,k.rb,k.h,7,1),k.color);lt.position.y=k.y,X.add(lt),lt.userData.route=P,lt.userData.interactiveRoot=y,lt.material.userData.originalEmissive=lt.material.emissive.getHex(),z.push(lt)});let $=pt(new Xt(.22,.95,.22),"#9a8b7a");return $.position.set(.42,-2.35,.12),$.rotation.z=.16,$.rotation.x=-.08,X.add($),Kt(X,Tt.nearLit,0,-1.22,0,C*.82,.36,C*.7),Kt(X,Tt.nearShade,C*.36,-1.02,C*.1,C*.46,.26,C*.38),Kt(X,Tt.nearLit,-C*.34,-1.1,-C*.16,C*.42,.24,C*.36),Kt(X,Tt.nearShade,.08,-1.38,C*.28,C*.34,.2,C*.28),X}let oe={islandRadius:3.4,buildingRing:2.15,hubRadius:1.55,walkRadius:3.08},Ue={1:{c:[0,5.4,-8],deckY:6.5,angle:-1.570796},2:{c:[6.9282,7.1,4],deckY:8.2,angle:.523599},3:{c:[-6.9282,4.3,4],deckY:5.4,angle:2.617994}},fe=[{a:1,b:2,p0:[1.7,6.5,-5.0555],p1:[5.2282,8.2,1.0555]},{a:2,b:3,p0:[3.5282,8.2,4],p1:[-3.5282,5.4,4]},{a:3,b:1,p0:[-5.2282,5.4,1.0555],p1:[-1.7,6.5,-5.0555]}],Qe={1:"#e6d8c8",2:"#d3c4aa",3:"#f4ece4"},ye=[1,2,3],ke=m.groupCategories&&typeof m.groupCategories=="object"?m.groupCategories:{},Ye=y=>{let P=(m.groups||[]).find(C=>Number(C.id)===y);return P&&Number(P.count)||0},le={};ye.forEach(y=>{let P=Ue[y];le[y]={x:P.c[0],y:P.c[1],z:P.c[2],angle:P.angle,deckY:P.deckY}});function B(y){let P=le[y],C=oe.islandRadius,X=new be;X.position.set(P.x,P.y,P.z),b.add(X);let H=pt(new de(C*.97,C*1.1,.58,9,1),y%2?"#c5b5a7":"#b8a07e");H.position.y=.34;let $=pt(new de(C*.98,C*1.02,.28,9,1),"#f4ebdd");$.position.y=.74;let k=pt(new de(C,C*1.01,.24,9,1),Qe[y]);k.position.y=.99,X.add(H,$,k);let lt=_(m.key,{group:y});X.userData.route=lt;for(let ct of[H,$,k])ct.userData.route=lt,ct.userData.interactiveRoot=X,ct.material.userData.originalEmissive=ct.material.emissive.getHex(),z.push(ct);Y.add(X),X.add(et(`\u7B2C ${y} \u7D44`,`${Ye(y)} \u7BC7 \xB7 ${m.month} \u6708`,lt,{x:0,y:4.35,z:0},"group-label"));let st=Array.isArray(ke[String(y)])?ke[String(y)]:[];st.length||(st=(m.categories||[]).map(ct=>({name:ct.name,count:null})));let zt=P.angle,at=200*Math.PI/180;return st.forEach((ct,Ct)=>{let Jt=st.length===1?zt:zt-at/2+at*Ct/(st.length-1),ee={x:Math.cos(Jt)*oe.buildingRing,z:Math.sin(Jt)*oe.buildingRing},Pe=ct.count===null||ct.count===void 0?"":`${ct.count} \u7BC7`;Lt(X,ee.x,ee.z,ct.name.length>4?ct.name.slice(0,4)+"\u2026":ct.name,_(m.key,{group:y,category:ct.name}),ht[ct.name]||"#777f6d",.62,Pe,.18+Ct%5*.28,ct.name)}),jt(X,y,zt,st),we(X,lt,C),X}function Ze(y){let P=new O(y.p0[0],y.p0[1],y.p0[2]),C=new O(y.p1[0],y.p1[1],y.p1[2]),X=new O().subVectors(C,P),H=X.length(),$=X.clone().normalize(),k=new O().crossVectors(new O(0,1,0),$);k.lengthSq()<1e-8&&k.set(0,0,1),k.normalize();let lt=new O().crossVectors($,k).normalize(),st=new be;st.position.copy(P).add(C).multiplyScalar(.5),st.quaternion.setFromRotationMatrix(new ae().makeBasis($,lt,k)),b.add(st);let zt=Math.max(3,Math.ceil(H/.48));for(let at=0;at<zt;at+=1){let ct=pt(new Xt(H/zt-.045,.12,.62),at%2?"#b48560":"#a77a55");ct.position.set(-H/2+(at+.5)*(H/zt),-.06,0),st.add(ct)}for(let at of[-1,1]){let ct=pt(new Xt(H,.08,.05),at>0?"#db6a41":"#ffffff");ct.position.set(0,.16,at*.33),st.add(ct);let Ct=Math.max(6,Math.ceil(H/.5));for(let Ve=0;Ve<=Ct;Ve+=1){let en=pt(new Xt(.08,.36,.08),"#fff8f4");en.position.set(-H/2+Ve*H/Ct,.08,at*.33),st.add(en)}let Jt=pt(new Xt(H,.04,.04),"#f4ebdd");Jt.position.set(0,.02,at*.33),st.add(Jt);let ee=pt(new de(.03,.035,.75,5),"#211d1d");ee.position.set(at*H*.25,.36,at*.38),st.add(ee);let Pe=pt(new Xt(.14,.16,.14),"#fcea8b",{emissive:"#fcea8b",emissiveIntensity:.5,roughness:.6});Pe.position.set(at*H*.25,.8,at*.38),Pe.material.userData.todManaged=!0,K.push(Pe.material),st.add(Pe)}return y}function pe(){let y=new be;y.position.set(0,4,0),b.add(y);let P=new be;y.add(P),dt.push(P),Kt(P,Tt.nearLit,0,-.15,0,1.45,.42,1.2),Kt(P,Tt.nearShade,.15,-1.05,.05,.85,.55,.72),Kt(P,Tt.nearLit,-.05,-1.9,-.05,.5,.62,.46);let C=pt(new de(oe.hubRadius,oe.hubRadius*1.08,.42,7,1),"#b8a07e");C.position.y=.28;let X=pt(new de(oe.hubRadius*.95,oe.hubRadius,.18,7,1),"#f4ece4");X.position.y=.55,y.add(C,X);let H=pt(new de(.22,.3,1.15,6),"#fff8f4");H.position.y=1.22;let $=pt(new Gn(.4,.46,6),"#db6a41");$.position.y=2.02,y.add(H,$);let k=_(m.key);y.userData.route=k;for(let st of[C,X,H,$])st.userData.route=k,st.userData.interactiveRoot=y,st.material.userData.originalEmissive=st.material.emissive.getHex(),z.push(st);let lt=Number(u.totalEntries)||p.reduce((st,zt)=>st+Number(zt.entries||0),0);y.add(et("\u6708\u4EFD\u7E3D\u89BD",`${m.label} ${m.entries} \u7BC7 \xB7 \u5168\u90E8 ${lt} \u7BC7`,k,{x:0,y:3.35,z:0},"hub-label"))}function me(y,P,C){let X=document.createElement("span");X.className="resident-label",X.textContent=P;let H=document.createElement("div");H.style.pointerEvents="none",H.appendChild(X);let $=new rr(H);$.position.set(0,C,0),y.add($),y.userData.tag=X}function Et(y,P={}){let C={pants:"#78685e",shirt:"#fff8f4",vest:"#db6a41",hair:"#2e2522",hairCap:.58,hairTilt:-.25,bangs:!1,...P},X=new be,H=pt(new de(.09,.1,.22,6),C.pants);H.position.y=.11;let $=pt(new Is(.16,.24,3,8),C.shirt);$.position.y=.42;let k=pt(new de(.175,.19,.2,8,1,!0),C.vest);k.position.y=.44;let lt=pt(new cn(.24,12,10),"#f3cfae");lt.position.y=.9;let st=pt(new cn(.262,12,10,0,Math.PI*2,0,Math.PI*C.hairCap),C.hair);if(st.position.y=.92,st.rotation.z=C.hairTilt,X.add(H,$,k,lt,st),C.bangs){let zt=pt(new Xt(.1,.06,.34),C.hair);zt.position.set(.18,1.08,0),X.add(zt)}for(let zt of[-1,1]){let at=pt(new cn(.03,6,4),"#211d1d");at.position.set(.22,.88,zt*.08),X.add(at)}return me(X,y,1.5),X.userData.body=$,b.add(X),X}ye.forEach(y=>B(y)),fe.forEach(y=>Ze(y)),pe();function Me(y){y.traverse(P=>{P.raycast=()=>{}})}function Ot(y,P,C){let X=new be;if(X.position.set(y[0],y[1],y[2]),C){let lt=pt(new de(.045,.05,.22,6),"#b8a07e");lt.position.y=-.18,X.add(lt)}else{let lt=pt(new de(.045,.058,1.62,6),"#b8a07e");lt.position.y=-.97;let st=pt(new Xt(.08,.06,.08),"#c5b5a7");st.position.y=-.18,X.add(lt,st)}let H=pt(new cn(.16,8,6),"#fff8f4",{emissive:"#ffe0a8",emissiveIntensity:.15,roughness:.55,flatShading:!0});H.scale.set(1,.78,1),H.material.userData.todManaged=!0;let $=pt(new Gn(.13,.1,6),"#c5b5a7");$.position.y=.14,X.add(H,$);let k=new Gs("#ffb978",0,P,2);return k.castShadow=!1,X.add(k),b.add(X),Me(X),{light:k,shade:H.material}}[[0,8.35,-10.7],[2.3383,8.35,-9.35],[-2.3383,8.35,-9.35],[9.2665,10.05,5.35],[6.9282,10.05,6.7],[9.2665,10.05,2.65],[-9.2665,7.25,5.35],[-9.2665,7.25,2.65],[-6.9282,7.25,6.7]].forEach(y=>J.push(Ot(y,4.2,!1))),J.push(Ot([0,6.5,0],3.5,!0));let T=new be;T.position.y=.85,b.add(T);let x=new Ne(new Ls(48,40),I);x.rotation.x=-Math.PI/2,x.position.y=-.35,x.frustumCulled=!1,T.add(x);for(let y=0;y<16;y+=1){let P=y/16*Math.PI*2+.35,C=13+y%5*4.4;Kt(T,y%2?Tt.farShade:Tt.farLit,Math.cos(P)*C,(y%4-1.5)*.28,Math.sin(P)*C,2.1+y%3*.45,.55,1.6+y%2*.35)}Me(T);let W=[{id:"planeA_high",radius:17.5,y:14,period:90,phase:0,dir:1,bank:8,waist:"#45abbb",hub:"#db6a41"},{id:"planeB_low",radius:19.2,y:3,period:110,phase:Math.PI,dir:-1,bank:6,waist:"#db6a41",hub:"#45abbb"}],ut={roughness:.82,metalness:0,flatShading:!0};function rt(y){let P=new be;P.rotation.order="YZX";let C=(lt,st,zt,at,ct,Ct={})=>{let Jt=pt(lt,st,{...ut,...Ct});return Jt.position.set(zt,at,ct),P.add(Jt),Jt};C(new Xt(.72,.28,3.4),"#e6d8c8",0,-.08,-.1),C(new Xt(.78,.46,3.5),"#fff8f4",0,.16,-.05);let X=C(new Xt(.84,.07,3.35),y.waist,0,.02,-.05,{emissive:y.waist,emissiveIntensity:0});X.material.userData.todManaged=!0,Q.push(X.material);let H=C(new Gn(.28,.55,6),"#fff8f4",0,.12,1.95);H.rotation.x=Math.PI/2,C(new Xt(5.1,.08,.9),"#fff8f4",0,.22,.15),C(new Xt(.28,.1,.92),y.waist,-2.45,.22,.15),C(new Xt(.28,.1,.92),y.waist,2.45,.22,.15),C(new Xt(1.4,.06,.5),"#fff8f4",0,.22,-1.55),C(new Xt(.08,.55,.42),y.waist,0,.55,-1.58);for(let lt of[-1,1])for(let st=0;st<4;st+=1)C(new Xt(.04,.1,.14),"#8fd3da",lt*.4,.22,.4-st*.42);let $=new be;$.position.set(0,.12,2.28),$.add(new Ne(new Xt(.1,1.15,.035),Pt("#c5b5a7",ut))),$.add(new Ne(new Xt(1.15,.1,.035),Pt("#c5b5a7",ut))),$.add(pt(new cn(.09,8,6),y.hub,ut)),P.add($);let k=pt(new cn(.055,6,4),"#ffe0a8",{emissive:"#ffe0a8",emissiveIntensity:0,roughness:.45});return k.position.set(0,.2,2.08),k.material.userData.todManaged=!0,Z.push(k.material),P.add(k),P.userData.prop=$,Me(P),P}let gt=W.map(y=>({...y,group:rt(y)}));gt.forEach(y=>b.add(y.group));function St(y,P){y.group.position.set(Math.cos(P)*y.radius,y.y,Math.sin(P)*y.radius);let C=y.dir>0?-P:Math.PI-P,X=tr.degToRad(y.bank)*(y.dir>0?1:-1);y.group.rotation.set(0,C,X)}gt.forEach(y=>St(y,y.phase));let tt=null;function nt(y){let P=a||tt===null?0:y-tt;gt.forEach(C=>{let X=C.phase+C.dir*(P/C.period)*Math.PI*2;St(C,X),C.group.userData.prop.rotation.z=a?0:P*7})}let xt=oe.walkRadius,D=(y,P)=>Math.atan2(le[P].z-le[y].z,le[P].x-le[y].x),it=(y,P,C=xt)=>new O(le[y].x+Math.cos(P)*C,le[y].deckY,le[y].z+Math.sin(P)*C);function j(y,P,C){let X=C-P;for(;X>Math.PI;)X-=Math.PI*2;for(;X<-Math.PI;)X+=Math.PI*2;let H=Math.max(1,Math.ceil(Math.abs(X)/.25)),$=[];for(let k=1;k<=H;k+=1)$.push(it(y,P+X*k/H));return $}function yt(y,P){let C=fe.find(lt=>lt.a===y&&lt.b===P||lt.a===P&&lt.b===y),X=C.a===y?C.p0:C.p1,H=C.a===y?C.p1:C.p0,$=[],k=8;for(let lt=0;lt<=k;lt+=1){let st=lt/k;$.push(new O(X[0]+(H[0]-X[0])*st,X[1]+(H[1]-X[1])*st,X[2]+(H[2]-X[2])*st))}return $}function mt(y){let P=ye.filter(lt=>lt!==y.island&&!y.visited.has(lt));P.length||(y.visited=new Set([y.island]),P=ye.filter(lt=>lt!==y.island));let C=P[Math.floor(Math.random()*P.length)],X=D(y.island,C),H=D(C,y.island),$=j(y.island,y.angle,X);$.push(...yt(y.island,C)),$.push(it(C,H));let k=H+(Math.random()<.5?-1:1)*(1.2+Math.random()*2.6);$.push(...j(C,H,k)),y.island=C,y.angle=k,y.visited.add(C),y.queue=$,y.pause=1.2+Math.random()*2.5}function _t(y,P,C){let X=le[P],H=Math.atan2(C[2]-X.z,C[0]-X.x),$={mesh:y,island:P,angle:H,baseY:C[1],visited:new Set([P]),queue:[],pause:0,phase:Math.random()*6};return y.position.set(C[0],C[1],C[2]),y.rotation.y=-(H+Math.PI/2),$}let Dt=[_t(Et("\u5DF4\u54E5",{shirt:"#45abbb",vest:"#fcea8b",pants:"#211d1d",hair:"#6b4a33",hairCap:.42,hairTilt:0,bangs:!0}),1,[0,6.5,-5.25]),_t(Et("\u6F84\u745B"),3,[-4.547,5.4,2.625])],Yt=.9,ft=0;function Ft(y,P,C){if(y.pause>0)y.pause-=C;else{y.queue.length||mt(y);let $=Yt*C;for(;$>0&&y.queue.length;){let k=y.queue[0],lt=k.x-y.mesh.position.x,st=k.y-y.baseY,zt=k.z-y.mesh.position.z,at=Math.hypot(lt,st,zt);if(Math.hypot(lt,zt)>1e-4&&(y.mesh.rotation.y=-Math.atan2(zt,lt)),at<=$)y.mesh.position.x=k.x,y.baseY=k.y,y.mesh.position.z=k.z,y.queue.shift(),$-=at;else{let ct=$/at;y.mesh.position.x+=lt*ct,y.baseY+=st*ct,y.mesh.position.z+=zt*ct,$=0}}y.queue.length||(y.pause=1.2+Math.random()*2.5)}let X=y.pause<=0;y.mesh.position.y=y.baseY+(X?Math.abs(Math.sin(P*9+y.phase))*.05:0);let H=1+Math.sin(P*2.1+y.phase)*.035;y.mesh.userData.body.scale.set(1,H,1)}function qt(y,P){let C=ft?Math.min(.1,P-ft):0;Ft(y,P,C)}let vt={pos:[0,28,22],target:[0,6.5,0]},Nt=new to(A,h.domElement);Nt.enableDamping=!0,Nt.dampingFactor=.07,Nt.enablePan=!1,Nt.enableZoom=!0,Nt.enableRotate=!0,Nt.rotateSpeed=.48,Nt.zoomSpeed=.78,Nt.minPolarAngle=20*Math.PI/180,Nt.maxPolarAngle=72*Math.PI/180,Nt.minDistance=24,Nt.maxDistance=90,Nt.target.set(vt.target[0],vt.target[1],vt.target[2]),Nt.autoRotate=!1,Nt.autoRotateSpeed=.24,Nt.addEventListener("start",()=>{Nt.autoRotate&&(Nt.autoRotate=!1,Se())});function Se(){s.disabled=!1,s.setAttribute("aria-pressed",String(!!Nt.autoRotate)),s.textContent=Nt.autoRotate?"\u66AB\u505C\u65CB\u8F49":"\u958B\u59CB\u65CB\u8F49"}Se(),s.addEventListener("click",()=>{Nt.autoRotate=!Nt.autoRotate,Se()});function mn(){A.position.set(vt.pos[0],vt.pos[1],vt.pos[2]),Nt.target.set(vt.target[0],vt.target[1],vt.target[2]),Nt.update()}r.addEventListener("click",()=>{mn()});function bi(){let y=t.getBoundingClientRect(),P=Math.max(1,y.width),C=Math.max(1,y.height);A.aspect=P/C,A.updateProjectionMatrix(),h.setSize(P,C,!1),I.uniforms.resolution.value.set(h.domElement.width,h.domElement.height),R.setSize(P,C)}window.ResizeObserver?new ResizeObserver(bi).observe(t):window.addEventListener("resize",bi),bi(),mn();let Ge=null,Ei=null,os=new Ws,Ti=new Ut;function En(y,P){let C=h.domElement.getBoundingClientRect();Ti.x=(y-C.left)/C.width*2-1,Ti.y=-((P-C.top)/C.height)*2+1,os.setFromCamera(Ti,A);let X=os.intersectObjects(z,!1);for(let H of X){let $=H.object.userData.interactiveRoot,k=H.object.userData.route;if($&&k)return{root:$,route:k}}return null}function hi(y,P){y&&y.traverse(C=>{if(!C.isMesh)return;let X=Array.isArray(C.material)?C.material:[C.material];for(let H of X){if(!H||!H.emissive||H.userData.todManaged)continue;let $=H.userData.originalEmissive||0;H.emissive.setHex(P?4668181:$)}})}h.domElement.addEventListener("pointerdown",y=>{Ge={x:y.clientX,y:y.clientY,pointerId:y.pointerId}},{passive:!0}),h.domElement.addEventListener("pointermove",y=>{if(Ge&&(Math.abs(y.clientX-Ge.x)>6||Math.abs(y.clientY-Ge.y)>6))return;let P=En(y.clientX,y.clientY),C=P&&P.root;C!==Ei&&(hi(Ei,!1),Ei=C,hi(Ei,!0)),h.domElement.style.cursor=P?"pointer":Ge?"grabbing":"grab"},{passive:!0}),h.domElement.addEventListener("pointerup",y=>{if(!Ge||Ge.pointerId!==y.pointerId)return;let P=Math.hypot(y.clientX-Ge.x,y.clientY-Ge.y);if(Ge=null,h.domElement.style.cursor="grab",P>6)return;let C=En(y.clientX,y.clientY);C&&(hi(C.root,!0),ar(C.root,C.route))},{passive:!0}),h.domElement.addEventListener("pointercancel",()=>{Ge=null},{passive:!0}),h.domElement.addEventListener("webglcontextlost",y=>{y.preventDefault(),E("3D \u5716\u5F62\u66AB\u6642\u4E2D\u65B7\uFF1B\u8ACB\u6539\u7528\u6587\u7A3F\u5C0E\u89BD\u3002\u82E5\u5C0E\u89BD\u5DF2\u6536\u5408\uFF0C\u6309\u4E0A\u65B9\u300C\u986F\u793A\u5C0E\u89BD\u300D\u3002")});let tn=null;function ar(y,P){if(a){location.href=P;return}let C=new O;y.getWorldPosition(C),tn={t0:performance.now(),dur:650,route:P,fromPos:A.position.clone(),fromTarget:Nt.target.clone(),toTarget:C.clone(),toPos:C.clone().add(A.position.clone().sub(Nt.target).setLength(28))},Nt.autoRotate=!1,Se()}let Xn={day:{sky:["#c5dff0","#e8f2f7","#f3ebe3"],fog:"#edddcf",fogNear:48,fogFar:110,hemiSky:"#fff8f4",hemiGround:"#c5b5a7",hemiI:1.9,sun:"#ffe9cf",sunI:3,sunPos:[-8,18,12],castShadow:!0,fill:"#cfe4f2",fillI:.9,fillPos:[12,8,-10],amb:"#ffc090",ambI:0,exposure:1,nearLit:"#fff8f4",nearShade:"#d5e3ee",nearOp:.92,farLit:"#fff8f4",farShade:"#d5e3ee",farOp:.88,win:0,waist:0,nav:0,lantern:.5,lampI:0,lampColor:"#ffb978",bulbE:.15},dusk:{sky:["#7a9ec4","#c9a48a","#e8b89a"],fog:"#d9a882",fogNear:40,fogFar:95,hemiSky:"#f5c49a",hemiGround:"#8a6a55",hemiI:1.1,sun:"#ff9a5c",sunI:1.35,sunPos:[-14,6,8],castShadow:!0,fill:"#6a7ea0",fillI:.45,fillPos:[10,5,-12],amb:"#ffc090",ambI:.15,exposure:.92,nearLit:"#f5e6d8",nearShade:"#b89a9a",nearOp:.9,farLit:"#f5e6d8",farShade:"#b89a9a",farOp:.84,win:.15,waist:.12,nav:.35,lantern:1.2,lampI:.55,lampColor:"#ffb978",bulbE:.9},night:{sky:["#1e2a3a","#2a3545","#3a3340"],fog:"#121820",fogNear:35,fogFar:85,hemiSky:"#2a3550",hemiGround:"#0e1218",hemiI:.35,sun:"#a8c0e8",sunI:.22,sunPos:[6,22,-10],castShadow:!1,fill:"#3a4560",fillI:.18,fillPos:[-10,8,6],amb:"#1e2838",ambI:.08,exposure:.85,nearLit:"#e7edf2",nearShade:"#7d8794",nearOp:.66,farLit:"#d8dee6",farShade:"#6a7585",farOp:.52,win:.45,waist:.28,nav:.85,lantern:2,lampI:1.6,lampColor:"#ffd6a0",bulbE:1.8}},ls=new Zt,cs=new Zt,qn=new O,or=new O,ce=(y,P,C)=>y+(P-y)*C,hs=y=>{let P=Math.min(1,Math.max(0,y));return P*P*(3-2*P)};function He(y,P,C,X){ls.set(P),cs.set(C),y.copy(ls).lerp(cs,X)}function lr(y,P){let C=parseInt(String(y).replace("#",""),16);return P.set((C>>16&255)/255,(C>>8&255)/255,(C&255)/255)}function us(y,P,C,X){lr(P,qn),lr(C,or),y.copy(qn).lerp(or,X)}function wi(y){let P=C=>Math.round(Math.min(255,Math.max(0,C*255))).toString(16).padStart(2,"0");return`#${P(y.x)}${P(y.y)}${P(y.z)}`}function M(y,P,C,X){us(I.uniforms.top.value,y.sky[0],P.sky[0],C),us(I.uniforms.mid.value,y.sky[1],P.sky[1],C),us(I.uniforms.bottom.value,y.sky[2],P.sky[2],C),He(v.background,y.sky[2],P.sky[2],C),He(v.fog.color,y.fog,P.fog,C),v.fog.near=ce(y.fogNear,P.fogNear,C),v.fog.far=ce(y.fogFar,P.fogFar,C),He(w.color,y.hemiSky,P.hemiSky,C),He(w.groundColor,y.hemiGround,P.hemiGround,C),w.intensity=ce(y.hemiI,P.hemiI,C),He(L.color,y.sun,P.sun,C),L.intensity=ce(y.sunI,P.sunI,C),L.position.set(ce(y.sunPos[0],P.sunPos[0],C),ce(y.sunPos[1],P.sunPos[1],C),ce(y.sunPos[2],P.sunPos[2],C)),L.castShadow=C<.5?y.castShadow:P.castShadow,He(S.color,y.fill,P.fill,C),S.intensity=ce(y.fillI,P.fillI,C),S.position.set(ce(y.fillPos[0],P.fillPos[0],C),ce(y.fillPos[1],P.fillPos[1],C),ce(y.fillPos[2],P.fillPos[2],C)),He(g.color,y.amb,P.amb,C),g.intensity=ce(y.ambI,P.ambI,C),h.toneMappingExposure=ce(y.exposure,P.exposure,C),He(Tt.nearLit.color,y.nearLit,P.nearLit,C),He(Tt.nearShade.color,y.nearShade,P.nearShade,C),He(Tt.farLit.color,y.farLit,P.farLit,C),He(Tt.farShade.color,y.farShade,P.farShade,C),He(Tt.disc.color,y.sky[2],P.sky[2],C),Tt.nearLit.opacity=ce(y.nearOp,P.nearOp,C),Tt.nearShade.opacity=ce(y.nearOp,P.nearOp,C),Tt.farLit.opacity=ce(y.farOp,P.farOp,C),Tt.farShade.opacity=ce(y.farOp,P.farOp,C),Tt.disc.opacity=ce(Math.min(.96,y.farOp+.06),Math.min(.96,P.farOp+.06),C);let H=ce(y.win,P.win,C);N.forEach(st=>{st.emissive.set("#fcea8b"),st.emissiveIntensity=H});let $=ce(y.waist,P.waist,C);Q.forEach(st=>{st.emissive.copy(st.color),st.emissiveIntensity=$});let k=ce(y.nav,P.nav,C);Z.forEach(st=>{st.emissive.set("#ffe0a8"),st.emissiveIntensity=k});let lt=ce(y.lantern,P.lantern,C);K.forEach(st=>{st.emissive.set("#fcea8b"),st.emissiveIntensity=lt}),J.forEach((st,zt)=>{let at=X(zt),ct=y.lamps&&y.lamps[zt],Ct=ct?ct.intensity:y.lampI,Jt=ct?ct.color:y.lampColor,ee=ct?ct.emissive:y.bulbE;st.light.intensity=ce(Ct,P.lampI,at),He(st.light.color,Jt,P.lampColor,at),st.shade.emissive.set("#ffe0a8"),st.shade.emissiveIntensity=ce(ee,P.bulbE,at)})}function U(){return{sky:[wi(I.uniforms.top.value),wi(I.uniforms.mid.value),wi(I.uniforms.bottom.value)],fog:"#"+v.fog.color.getHexString(),fogNear:v.fog.near,fogFar:v.fog.far,hemiSky:"#"+w.color.getHexString(),hemiGround:"#"+w.groundColor.getHexString(),hemiI:w.intensity,sun:"#"+L.color.getHexString(),sunI:L.intensity,sunPos:[L.position.x,L.position.y,L.position.z],castShadow:L.castShadow,fill:"#"+S.color.getHexString(),fillI:S.intensity,fillPos:[S.position.x,S.position.y,S.position.z],amb:"#"+g.color.getHexString(),ambI:g.intensity,exposure:h.toneMappingExposure,nearLit:"#"+Tt.nearLit.color.getHexString(),nearShade:"#"+Tt.nearShade.color.getHexString(),nearOp:Tt.nearLit.opacity,farLit:"#"+Tt.farLit.color.getHexString(),farShade:"#"+Tt.farShade.color.getHexString(),farOp:Tt.farLit.opacity,win:N.length?N[0].emissiveIntensity:0,waist:Q.length?Q[0].emissiveIntensity:0,nav:Z.length?Z[0].emissiveIntensity:0,lantern:K.length?K[0].emissiveIntensity:.5,lampI:J.length?J[0].light.intensity:0,lampColor:J.length?"#"+J[0].light.color.getHexString():"#ffb978",bulbE:J.length?J[0].shade.emissiveIntensity:.15,lamps:J.map(y=>({intensity:y.light.intensity,color:"#"+y.light.color.getHexString(),emissive:y.shade.emissiveIntensity}))}}function q(){try{let y=localStorage.getItem("homeSkyTod");if(y==="dusk"||y==="night")return y}catch{}return"day"}let V=q(),G=null;function bt(y){if(y!=="day"&&y!=="dusk"&&y!=="night"||y===V&&!G)return;let P=U();V=y,document.body.classList.remove("tod-day","tod-dusk","tod-night"),document.body.classList.add(`tod-${y}`);let C=Xn[y];if(a){M(P,C,1,()=>1),G=null;return}G={from:P,to:C,t0:performance.now()}}M(Xn[V],Xn[V],1,()=>1),window.addEventListener("home-sky-tod",y=>bt(y.detail)),i.hidden=!0;let It=0;function Mt(){It=window.requestAnimationFrame(Mt);let y=performance.now();if(G){let k=(y-G.t0)/1e3,lt=hs(Math.min(1,k/.45)),st=zt=>hs(Math.min(1,Math.max(0,(k-zt*.1)/.8)));M(G.from,G.to,lt,st),k>=.8+Math.max(0,J.length-1)*.1&&(M(G.from,G.to,1,()=>1),G=null)}if(tn){let k=Math.min(1,(y-tn.t0)/tn.dur),lt=1-Math.pow(1-k,3);if(A.position.lerpVectors(tn.fromPos,tn.toPos,lt),Nt.target.lerpVectors(tn.fromTarget,tn.toTarget,lt),k>=1){let st=tn.route;tn=null,location.href=st}}let P=y/1e3;a||(Dt.forEach(k=>qt(k,P)),tt===null&&(tt=P),dt.forEach((k,lt)=>{k.position.y=Math.sin(P*Math.PI*2/7.6+lt*1.7)*.05}),T.position.x=Math.sin(P*.05)*1.3,T.position.z=Math.cos(P*.04)*1,ft=P),nt(P);let C=A.position.distanceTo(Nt.target),X=C<26?1:Math.max(.78,1-(C-26)/60);Dt.forEach(k=>{let lt=k.mesh.userData.tag;lt&&(lt.style.opacity="1",lt.style.setProperty("--tag-scale",X.toFixed(2)))});let H=A.position.distanceTo(Nt.target),$=H<34?"1":H<42?"0.35":"0";$!==b.userData.catOpacity&&(b.userData.catOpacity=$,document.querySelectorAll(".island-label.cat-label").forEach(k=>{k.style.opacity=$,k.style.pointerEvents=$==="0"?"none":"auto"})),Nt.update(),F.position.copy(A.position),h.render(v,A),R.render(v,A)}Mt()})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
