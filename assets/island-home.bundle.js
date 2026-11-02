(()=>{var yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ec=0,Lo=1,nc=2;var ei=1,ic=2,ys=3,Mi=0,Ze=1,Mn=2,ki=0,vs=1,Do=2,No=3,Uo=4,sc=5;var Vi=100,rc=101,ac=102,oc=103,lc=104,cc=200,hc=201,uc=202,dc=203,Fo=204,Oo=205,fc=206,pc=207,mc=208,gc=209,_c=210,xc=211,yc=212,vc=213,Mc=214,Nr=0,Ur=1,Fr=2,ls=3,Or=4,Br=5,zr=6,Hr=7,Bo=0,Sc=1,bc=2,Hn=0,zo=1,Ho=2,Go=3,Wi=4,ko=5,Vo=6,Wo=7;var Xo=300,Xi=301,Ms=302,ha=303,ua=304,Gr=1e3,Bn=1001,kr=1002,Ve=1003,Ec=1004;var tr=1005;var en=1006,da=1007;var ni=1008;var cn=1009,qo=1010,Yo=1011,Ss=1012,fa=1013,Rn=1014,Cn=1015,Pn=1016,pa=1017,ma=1018,qi=1020,Zo=35902,Jo=35899,$o=1021,Ko=1022,In=1023,$n=1026,ii=1027,jo=1028,ga=1029,Si=1030,_a=1031;var xa=1033,er=33776,nr=33777,ir=33778,sr=33779,ya=35840,va=35841,Ma=35842,Sa=35843,ba=36196,Ea=37492,wa=37496,Ta=37488,Aa=37489,rr=37490,Ra=37491,Ca=37808,Pa=37809,Ia=37810,La=37811,Da=37812,Na=37813,Ua=37814,Fa=37815,Oa=37816,Ba=37817,za=37818,Ha=37819,Ga=37820,ka=37821,Va=36492,Wa=36494,Xa=36495,qa=36283,Ya=36284,ar=36285,Za=36286;var Os=2300,Vr=2301,Lr=2302,bo=2303,Eo=2400,wo=2401,To=2402;var wc=3200;var Ja=0,Tc=1,si="",Ye="srgb",Bs="srgb-linear",zs="linear",ce="srgb";var Dr=7680;var Ac=519,Rc=512,Cc=513,Pc=514,Qo=515,Ic=516,Lc=517,tl=518,el=519,Dc=35044;var nl="300 es",yn=2e3,cs=2001;function Lh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Dh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nc(){let i=Hs("canvas");return i.style.display="block",i}var Cl={},hs=null;function il(...i){let t="THREE."+i.shift();hs?hs("log",t,...i):console.log(t,...i)}function Uc(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=Uc(i);let t="THREE."+i.shift();if(hs)hs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Yt(...i){i=Uc(i);let t="THREE."+i.shift();if(hs)hs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ns(...i){let t=i.join(" ");t in Cl||(Cl[t]=!0,Xt(...i))}function Fc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Oc={[Nr]:Nr,[Fr]:zr,[Or]:Or,[ls]:Br,[Ur]:Ur,[zr]:Fr,[Hr]:Hr,[Br]:ls},An=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pl=1234567,Us=Math.PI/180,us=180/Math.PI;function bs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function sl(i,t){return(i%t+t)%t}function Nh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Uh(i,t,e){return i!==t?(e-i)/(t-i):0}function Fs(i,t,e){return(1-e)*i+e*t}function Fh(i,t,e,n){return Fs(i,t,1-Math.exp(-e*n))}function Oh(i,t=1){return t-Math.abs(sl(i,t*2)-t)}function Bh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function zh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Hh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Gh(i,t){return i+Math.random()*(t-i)}function kh(i){return i*(.5-Math.random())}function Vh(i){i!==void 0&&(Pl=i);let t=Pl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wh(i){return i*Us}function Xh(i){return i*us}function qh(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Yh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zh(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),h=r((t+n)/2),u=a((t+n)/2),_=r((t-n)/2),p=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*_,c*p,o*h);break;case"YZY":i.set(c*p,o*u,c*_,o*h);break;case"ZXZ":i.set(c*_,c*p,o*u,o*h);break;case"XZX":i.set(o*u,c*g,c*d,o*h);break;case"YXY":i.set(c*d,o*u,c*g,o*h);break;case"ZYZ":i.set(c*g,c*d,o*u,o*h);break;default:Xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function al(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Bc(i,t){if(t.constructor===Float32Array)return i;let e=al(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function zc(i,t){if(t.constructor===Float32Array)return i;let e=al(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var or={DEG2RAD:Us,RAD2DEG:us,generateUUID:bs,clamp:ie,euclideanModulo:sl,mapLinear:Nh,inverseLerp:Uh,lerp:Fs,damp:Fh,pingpong:Oh,smoothstep:Bh,smootherstep:zh,randInt:Hh,randFloat:Gh,randFloatSpread:kh,seededRandom:Vh,degToRad:Wh,radToDeg:Xh,isPowerOfTwo:qh,ceilPowerOfTwo:Yh,floorPowerOfTwo:rl,setQuaternionFromProperEuler:Zh,normalize:zc,denormalize:Bc},ul=class ul{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ul.prototype.isVector2=!0;var Ot=ul,pn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],h=n[s+1],u=n[s+2],_=n[s+3],p=r[a+0],d=r[a+1],g=r[a+2],E=r[a+3];if(_!==E||c!==p||h!==d||u!==g){let m=c*p+h*d+u*g+_*E;m<0&&(p=-p,d=-d,g=-g,E=-E,m=-m);let f=1-o;if(m<.9995){let S=Math.acos(m),D=Math.sin(S);f=Math.sin(f*S)/D,o=Math.sin(o*S)/D,c=c*f+p*o,h=h*f+d*o,u=u*f+g*o,_=_*f+E*o}else{c=c*f+p*o,h=h*f+d*o,u=u*f+g*o,_=_*f+E*o;let S=1/Math.sqrt(c*c+h*h+u*u+_*_);c*=S,h*=S,u*=S,_*=S}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=_}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],h=n[s+2],u=n[s+3],_=r[a],p=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*_+c*d-h*p,t[e+1]=c*g+u*p+h*_-o*d,t[e+2]=h*g+u*d+o*p-c*_,t[e+3]=u*g-o*_-c*p-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(s/2),_=o(r/2),p=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=p*u*_+h*d*g,this._y=h*d*_-p*u*g,this._z=h*u*g+p*d*_,this._w=h*u*_-p*d*g;break;case"YXZ":this._x=p*u*_+h*d*g,this._y=h*d*_-p*u*g,this._z=h*u*g-p*d*_,this._w=h*u*_+p*d*g;break;case"ZXY":this._x=p*u*_-h*d*g,this._y=h*d*_+p*u*g,this._z=h*u*g+p*d*_,this._w=h*u*_-p*d*g;break;case"ZYX":this._x=p*u*_-h*d*g,this._y=h*d*_+p*u*g,this._z=h*u*g-p*d*_,this._w=h*u*_+p*d*g;break;case"YZX":this._x=p*u*_+h*d*g,this._y=h*d*_+p*u*g,this._z=h*u*g-p*d*_,this._w=h*u*_-p*d*g;break;case"XZY":this._x=p*u*_-h*d*g,this._y=h*d*_-p*u*g,this._z=h*u*g+p*d*_,this._w=h*u*_+p*d*g;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],u=e[6],_=e[10],p=n+o+_;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-h)*d,this._z=(a-s)*d}else if(n>o&&n>_){let d=2*Math.sqrt(1+n-o-_);this._w=(u-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+h)/d}else if(o>_){let d=2*Math.sqrt(1+o-n-_);this._w=(r-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+_-n-o);this._w=(a-s)/d,this._x=(r+h)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,u=e._w;return this._x=n*u+a*o+s*h-r*c,this._y=s*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-s*o,this._w=a*u-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let h=Math.acos(o),u=Math.sin(h);c=Math.sin(c*h)/u,e=Math.sin(e*h)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},dl=class dl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Il.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*s-o*n),u=2*(o*e-r*s),_=2*(r*n-a*e);return this.x=e+c*h+a*_-o*u,this.y=n+c*u+o*h-r*_,this.z=s+c*_+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return no.copy(this).projectOnVector(t),this.sub(no)}reflect(t){return this.sub(no.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dl.prototype.isVector3=!0;var X=dl,no=new X,Il=new pn,fl=class fl{constructor(t,e,n,s,r,a,o,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h)}set(t,e,n,s,r,a,o,c,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],_=n[7],p=n[2],d=n[5],g=n[8],E=s[0],m=s[3],f=s[6],S=s[1],D=s[4],w=s[7],A=s[2],C=s[5],x=s[8];return r[0]=a*E+o*S+c*A,r[3]=a*m+o*D+c*C,r[6]=a*f+o*w+c*x,r[1]=h*E+u*S+_*A,r[4]=h*m+u*D+_*C,r[7]=h*f+u*w+_*x,r[2]=p*E+d*S+g*A,r[5]=p*m+d*D+g*C,r[8]=p*f+d*w+g*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-n*r*u+n*o*c+s*r*h-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],_=u*a-o*h,p=o*c-u*r,d=h*r-a*c,g=e*_+n*p+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return t[0]=_*E,t[1]=(s*h-u*n)*E,t[2]=(o*n-s*a)*E,t[3]=p*E,t[4]=(u*e-s*c)*E,t[5]=(s*r-o*e)*E,t[6]=d*E,t[7]=(n*c-h*e)*E,t[8]=(a*e-n*r)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+t,-s*h,s*c,-s*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return Ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(io.makeScale(t,e)),this}rotate(t){return Ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(io.makeRotation(-t)),this}translate(t,e){return Ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(io.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};fl.prototype.isMatrix3=!0;var Jt=fl,io=new Jt,Ll=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dl=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jh(){let i={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ce&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ce&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?zs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Bs]:{primaries:t,whitePoint:n,transfer:zs,toXYZ:Ll,fromXYZ:Dl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:Ll,fromXYZ:Dl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}}),i}var se=Jh();function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Zi,Wr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Zi===void 0&&(Zi=Hs("canvas")),Zi.width=t.width,Zi.height=t.height;let s=Zi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Hs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Jn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$h=0,ds=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=bs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(so(s[a].image)):r.push(so(s[a]))}else r=so(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function so(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var Kh=0,ro=new X,on=class i extends An{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Bn,s=Bn,r=en,a=ni,o=In,c=cn,h=i.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=bs(),this.name="",this.source=new ds(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ro).x}get height(){return this.source.getSize(ro).y}get depth(){return this.source.getSize(ro).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gr:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case kr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gr:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case kr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Xo;on.DEFAULT_ANISOTROPY=1;var pl=class pl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],u=c[4],_=c[8],p=c[1],d=c[5],g=c[9],E=c[2],m=c[6],f=c[10];if(Math.abs(u-p)<.01&&Math.abs(_-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(_+E)<.1&&Math.abs(g+m)<.1&&Math.abs(h+d+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let D=(h+1)/2,w=(d+1)/2,A=(f+1)/2,C=(u+p)/4,x=(_+E)/4,b=(g+m)/4;return D>w&&D>A?D<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(D),s=C/n,r=x/n):w>A?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=C/s,r=b/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=x/r,s=b/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(_-E)*(_-E)+(p-u)*(p-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(_-E)/S,this.z=(p-u)/S,this.w=Math.acos((h+d+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pl.prototype.isVector4=!0;var we=pl,Xr=class extends An{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new on({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ds(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends Xr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Gs=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var qr=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ca=class ca{constructor(t,e,n,s,r,a,o,c,h,u,_,p,d,g,E,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h,u,_,p,d,g,E,m)}set(t,e,n,s,r,a,o,c,h,u,_,p,d,g,E,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=h,f[6]=u,f[10]=_,f[14]=p,f[3]=d,f[7]=g,f[11]=E,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ca().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),a=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),u=Math.cos(r),_=Math.sin(r);if(t.order==="XYZ"){let p=a*u,d=a*_,g=o*u,E=o*_;e[0]=c*u,e[4]=-c*_,e[8]=h,e[1]=d+g*h,e[5]=p-E*h,e[9]=-o*c,e[2]=E-p*h,e[6]=g+d*h,e[10]=a*c}else if(t.order==="YXZ"){let p=c*u,d=c*_,g=h*u,E=h*_;e[0]=p+E*o,e[4]=g*o-d,e[8]=a*h,e[1]=a*_,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=E+p*o,e[10]=a*c}else if(t.order==="ZXY"){let p=c*u,d=c*_,g=h*u,E=h*_;e[0]=p-E*o,e[4]=-a*_,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=E-p*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let p=a*u,d=a*_,g=o*u,E=o*_;e[0]=c*u,e[4]=g*h-d,e[8]=p*h+E,e[1]=c*_,e[5]=E*h+p,e[9]=d*h-g,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let p=a*c,d=a*h,g=o*c,E=o*h;e[0]=c*u,e[4]=E-p*_,e[8]=g*_+d,e[1]=_,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=d*_+g,e[10]=p-E*_}else if(t.order==="XZY"){let p=a*c,d=a*h,g=o*c,E=o*h;e[0]=c*u,e[4]=-_,e[8]=h*u,e[1]=p*_+E,e[5]=a*u,e[9]=d*_-g,e[2]=g*_-d,e[6]=o*u,e[10]=E*_+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jh,t,Qh)}lookAt(t,e,n){let s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),ai.crossVectors(n,un),ai.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ai.crossVectors(n,un)),ai.normalize(),dr.crossVectors(un,ai),s[0]=ai.x,s[4]=dr.x,s[8]=un.x,s[1]=ai.y,s[5]=dr.y,s[9]=un.y,s[2]=ai.z,s[6]=dr.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],_=n[5],p=n[9],d=n[13],g=n[2],E=n[6],m=n[10],f=n[14],S=n[3],D=n[7],w=n[11],A=n[15],C=s[0],x=s[4],b=s[8],H=s[12],F=s[1],W=s[5],Y=s[9],K=s[13],B=s[2],$=s[6],st=s[10],tt=s[14],_t=s[3],z=s[7],ft=s[11],mt=s[15];return r[0]=a*C+o*F+c*B+h*_t,r[4]=a*x+o*W+c*$+h*z,r[8]=a*b+o*Y+c*st+h*ft,r[12]=a*H+o*K+c*tt+h*mt,r[1]=u*C+_*F+p*B+d*_t,r[5]=u*x+_*W+p*$+d*z,r[9]=u*b+_*Y+p*st+d*ft,r[13]=u*H+_*K+p*tt+d*mt,r[2]=g*C+E*F+m*B+f*_t,r[6]=g*x+E*W+m*$+f*z,r[10]=g*b+E*Y+m*st+f*ft,r[14]=g*H+E*K+m*tt+f*mt,r[3]=S*C+D*F+w*B+A*_t,r[7]=S*x+D*W+w*$+A*z,r[11]=S*b+D*Y+w*st+A*ft,r[15]=S*H+D*K+w*tt+A*mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],u=t[2],_=t[6],p=t[10],d=t[14],g=t[3],E=t[7],m=t[11],f=t[15],S=c*d-h*p,D=o*d-h*_,w=o*p-c*_,A=a*d-h*u,C=a*p-c*u,x=a*_-o*u;return e*(E*S-m*D+f*w)-n*(g*S-m*A+f*C)+s*(g*D-E*A+f*x)-r*(g*w-E*C+m*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],h=t[6],u=t[10];return e*(a*u-o*h)-n*(r*u-o*c)+s*(r*h-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],_=t[9],p=t[10],d=t[11],g=t[12],E=t[13],m=t[14],f=t[15],S=e*o-n*a,D=e*c-s*a,w=e*h-r*a,A=n*c-s*o,C=n*h-r*o,x=s*h-r*c,b=u*E-_*g,H=u*m-p*g,F=u*f-d*g,W=_*m-p*E,Y=_*f-d*E,K=p*f-d*m,B=S*K-D*Y+w*W+A*F-C*H+x*b;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let $=1/B;return t[0]=(o*K-c*Y+h*W)*$,t[1]=(s*Y-n*K-r*W)*$,t[2]=(E*x-m*C+f*A)*$,t[3]=(p*C-_*x-d*A)*$,t[4]=(c*F-a*K-h*H)*$,t[5]=(e*K-s*F+r*H)*$,t[6]=(m*w-g*x-f*D)*$,t[7]=(u*x-p*w+d*D)*$,t[8]=(a*Y-o*F+h*b)*$,t[9]=(n*F-e*Y-r*b)*$,t[10]=(g*C-E*w+f*S)*$,t[11]=(_*w-u*C-d*S)*$,t[12]=(o*H-a*W-c*b)*$,t[13]=(e*W-n*H+s*b)*$,t[14]=(E*D-g*A-m*S)*$,t[15]=(u*A-_*D+p*S)*$,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,u*o+n,u*c-s*a,0,h*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,u=a+a,_=o+o,p=r*h,d=r*u,g=r*_,E=a*u,m=a*_,f=o*_,S=c*h,D=c*u,w=c*_,A=n.x,C=n.y,x=n.z;return s[0]=(1-(E+f))*A,s[1]=(d+w)*A,s[2]=(g-D)*A,s[3]=0,s[4]=(d-w)*C,s[5]=(1-(p+f))*C,s[6]=(m+S)*C,s[7]=0,s[8]=(g+D)*x,s[9]=(m-S)*x,s[10]=(1-(p+E))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ji.set(s[0],s[1],s[2]).length(),o=Ji.set(s[4],s[5],s[6]).length(),c=Ji.set(s[8],s[9],s[10]).length();r<0&&(a=-a),En.copy(this);let h=1/a,u=1/o,_=1/c;return En.elements[0]*=h,En.elements[1]*=h,En.elements[2]*=h,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=_,En.elements[9]*=_,En.elements[10]*=_,e.setFromRotationMatrix(En),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=yn,c=!1){let h=this.elements,u=2*r/(e-t),_=2*r/(n-s),p=(e+t)/(e-t),d=(n+s)/(n-s),g,E;if(c)g=r/(a-r),E=a*r/(a-r);else if(o===yn)g=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===cs)g=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=_,h[9]=d,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=yn,c=!1){let h=this.elements,u=2/(e-t),_=2/(n-s),p=-(e+t)/(e-t),d=-(n+s)/(n-s),g,E;if(c)g=1/(a-r),E=a/(a-r);else if(o===yn)g=-2/(a-r),E=-(a+r)/(a-r);else if(o===cs)g=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=0,h[12]=p,h[1]=0,h[5]=_,h[9]=0,h[13]=d,h[2]=0,h[6]=0,h[10]=g,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ca.prototype.isMatrix4=!0;var he=ca,Ji=new X,En=new he,jh=new X(0,0,0),Qh=new X(1,1,1),ai=new X,dr=new X,un=new X,Nl=new he,Ul=new pn,Kn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],u=s[9],_=s[2],p=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-_,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-_,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ie(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-_,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ul.setFromEuler(this),this.setFromQuaternion(Ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var fs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},tu=0,Fl=new X,$i=new pn,Wn=new he,fr=new X,Ps=new X,eu=new X,nu=new pn,Ol=new X(1,0,0),Bl=new X(0,1,0),zl=new X(0,0,1),Hl={type:"added"},iu={type:"removed"},Ki={type:"childadded",child:null},ao={type:"childremoved",child:null},We=class i extends An{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new X,e=new Kn,n=new pn,s=new X(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Jt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(Ol,t)}rotateY(t){return this.rotateOnAxis(Bl,t)}rotateZ(t){return this.rotateOnAxis(zl,t)}translateOnAxis(t,e){return Fl.copy(t).applyQuaternion(this.quaternion),this.position.add(Fl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ol,t)}translateY(t){return this.translateOnAxis(Bl,t)}translateZ(t){return this.translateOnAxis(zl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fr.copy(t):fr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Ps,fr,this.up):Wn.lookAt(fr,Ps,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Wn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hl),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(iu),ao.child=t,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hl),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,eu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,nu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let _=c[h];r(t.shapes,_)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),_=a(t.shapes),p=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),_.length>0&&(n.shapes=_),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let h in o){let u=o[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};We.DEFAULT_UP=new X(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var re=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},su={type:"move"},ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let E of t.hand.values()){let m=e.getJointPose(E,n),f=this._getHandJoint(h,E);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],p=u.position.distanceTo(_.position),d=.02,g=.005;h.inputState.pinching&&p>d+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=d-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(su)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},pr={h:0,s:0,l:0};function oo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var $t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=sl(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=oo(a,r,t+1/3),this.g=oo(a,r,t),this.b=oo(a,r,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){let n=Hc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return se.workingToColorSpace(Qe.copy(this),t),Math.round(ie(Qe.r*255,0,255))*65536+Math.round(ie(Qe.g*255,0,255))*256+Math.round(ie(Qe.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(Qe.copy(this),e);let n=Qe.r,s=Qe.g,r=Qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,h,u=(o+a)/2;if(o===a)c=0,h=0;else{let _=a-o;switch(h=u<=.5?_/(a+o):_/(2-a-o),a){case n:c=(s-r)/_+(s<r?6:0);break;case s:c=(r-n)/_+2;break;case r:c=(n-s)/_+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=Ye){se.workingToColorSpace(Qe.copy(this),t);let e=Qe.r,n=Qe.g,s=Qe.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(pr);let n=Fs(oi.h,pr.h,e),s=Fs(oi.s,pr.s,e),r=Fs(oi.l,pr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new $t;$t.NAMES=Hc;var Li=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new $t(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Di=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},wn=new X,Xn=new X,lo=new X,qn=new X,ji=new X,Qi=new X,Gl=new X,co=new X,ho=new X,uo=new X,fo=new we,po=new we,mo=new we,ui=class i{constructor(t=new X,e=new X,n=new X){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),Xn.subVectors(n,e),lo.subVectors(t,e);let a=wn.dot(wn),o=wn.dot(Xn),c=wn.dot(lo),h=Xn.dot(Xn),u=Xn.dot(lo),_=a*h-o*o;if(_===0)return r.set(0,0,0),null;let p=1/_,d=(h*c-o*u)*p,g=(a*u-o*c)*p;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,qn.x),c.addScaledVector(a,qn.y),c.addScaledVector(o,qn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return fo.setScalar(0),po.setScalar(0),mo.setScalar(0),fo.fromBufferAttribute(t,e),po.fromBufferAttribute(t,n),mo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(fo,r.x),a.addScaledVector(po,r.y),a.addScaledVector(mo,r.z),a}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),Xn.subVectors(t,e),wn.cross(Xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),wn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ji.subVectors(s,n),Qi.subVectors(r,n),co.subVectors(t,n);let c=ji.dot(co),h=Qi.dot(co);if(c<=0&&h<=0)return e.copy(n);ho.subVectors(t,s);let u=ji.dot(ho),_=Qi.dot(ho);if(u>=0&&_<=u)return e.copy(s);let p=c*_-u*h;if(p<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),e.copy(n).addScaledVector(ji,a);uo.subVectors(t,r);let d=ji.dot(uo),g=Qi.dot(uo);if(g>=0&&d<=g)return e.copy(r);let E=d*h-c*g;if(E<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(n).addScaledVector(Qi,o);let m=u*g-d*_;if(m<=0&&_-u>=0&&d-g>=0)return Gl.subVectors(r,s),o=(_-u)/(_-u+(d-g)),e.copy(s).addScaledVector(Gl,o);let f=1/(m+E+p);return a=E*f,o=p*f,e.copy(n).addScaledVector(ji,a).addScaledVector(Qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},di=class{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mr.copy(n.boundingBox)),mr.applyMatrix4(t.matrixWorld),this.union(mr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),gr.subVectors(this.max,Is),ts.subVectors(t.a,Is),es.subVectors(t.b,Is),ns.subVectors(t.c,Is),li.subVectors(es,ts),ci.subVectors(ns,es),Ri.subVectors(ts,ns);let e=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Ri.z,Ri.y,li.z,0,-li.x,ci.z,0,-ci.x,Ri.z,0,-Ri.x,-li.y,li.x,0,-ci.y,ci.x,0,-Ri.y,Ri.x,0];return!go(e,ts,es,ns,gr)||(e=[1,0,0,0,1,0,0,0,1],!go(e,ts,es,ns,gr))?!1:(_r.crossVectors(li,ci),e=[_r.x,_r.y,_r.z],go(e,ts,es,ns,gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Yn=[new X,new X,new X,new X,new X,new X,new X,new X],Tn=new X,mr=new di,ts=new X,es=new X,ns=new X,li=new X,ci=new X,Ri=new X,Is=new X,gr=new X,_r=new X,Ci=new X;function go(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ci.fromArray(i,r);let o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),c=t.dot(Ci),h=e.dot(Ci),u=n.dot(Ci);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}var Le=new X,xr=new Ot,ru=0,zn=class extends An{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ru++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dc,this.updateRanges=[],this.gpuType=Cn,this.version=0,this._normalizationScale=t!==void 0?al(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xr.fromBufferAttribute(this,e),xr.applyMatrix3(t),this.setXY(e,xr.x,xr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Bc(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):zc(t,this.array)}};var ks=class extends zn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Vs=class extends zn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xe=class extends zn{constructor(t,e,n){super(new Float32Array(t),e,n)}},au=new di,Ls=new X,_o=new X,ms=class{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):au.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);let e=Ls.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_o.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(_o)),this.expandByPoint(Ls.copy(t.center).sub(_o))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ou=0,xn=new he,xo=new We,is=new X,dn=new di,Ds=new di,Ge=new X,gn=class i extends An{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lh(t)?Vs:ks)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return xo.lookAt(t),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(dn.min,Ds.min),dn.expandByPoint(Ge),Ge.addVectors(dn.max,Ds.max),dn.expandByPoint(Ge)):(dn.expandByPoint(Ds.min),dn.expandByPoint(Ds.max))}dn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ge));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Ge.fromBufferAttribute(o,h),c&&(is.fromBufferAttribute(t,h),Ge.add(is)),s=Math.max(s,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new zn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],h=new Uint8Array(n.count);for(let H=0;H<n.count;H++)o[H]=new X,c[H]=new X;let u=new X,_=new X,p=new X,d=new Ot,g=new Ot,E=new Ot,m=new X,f=new X;function S(H,F,W){h[H]=h[F]=h[W]=1,u.fromBufferAttribute(n,H),_.fromBufferAttribute(n,F),p.fromBufferAttribute(n,W),d.fromBufferAttribute(r,H),g.fromBufferAttribute(r,F),E.fromBufferAttribute(r,W),_.sub(u),p.sub(u),g.sub(d),E.sub(d);let Y=1/(g.x*E.y-E.x*g.y);isFinite(Y)&&(m.copy(_).multiplyScalar(E.y).addScaledVector(p,-g.y).multiplyScalar(Y),f.copy(p).multiplyScalar(g.x).addScaledVector(_,-E.x).multiplyScalar(Y),o[H].add(m),o[F].add(m),o[W].add(m),c[H].add(f),c[F].add(f),c[W].add(f))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let H=0,F=D.length;H<F;++H){let W=D[H],Y=W.start,K=W.count;for(let B=Y,$=Y+K;B<$;B+=3)S(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let w=new X,A=new X,C=new X,x=new X;function b(H){C.fromBufferAttribute(s,H),x.copy(C);let F=o[H];w.copy(F),w.sub(C.multiplyScalar(C.dot(F))).normalize(),A.crossVectors(x,F);let Y=A.dot(c[H])<0?-1:1;a.setXYZW(H,w.x,w.y,w.z,Y)}for(let H=0,F=n.count;H<F;++H)h[H]&&b(H);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new zn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let s=new X,r=new X,a=new X,o=new X,c=new X,h=new X,u=new X,_=new X;if(t)for(let p=0,d=t.count;p<d;p+=3){let g=t.getX(p+0),E=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,E),a.fromBufferAttribute(e,m),u.subVectors(a,r),_.subVectors(s,r),u.cross(_),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,m),o.add(u),c.add(u),h.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let p=0,d=e.count;p<d;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),u.subVectors(a,r),_.subVectors(s,r),u.cross(_),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(o,c){let h=o.array,u=o.itemSize,_=o.normalized,p=new h.constructor(c.length*u),d=0,g=0;for(let E=0,m=c.length;E<m;E++){o.isInterleavedBufferAttribute?d=c[E]*o.data.stride+o.offset:d=c[E]*u;for(let f=0;f<u;f++)p[g++]=h[d++]}return new zn(p,u,_)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],h=t(c,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let u=0,_=h.length;u<_;u++){let p=h[u],d=t(p,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let _=0,p=h.length;_<p;_++){let d=h[_];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],_=r[h];for(let p=0,d=_.length;p<d;p++)u.push(_[p].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,u=a.length;h<u;h++){let _=a[h];this.addGroup(_.start,_.count,_.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var yo=new X,lu=new X,cu=new Jt,fn=class{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=yo.subVectors(n,e).cross(lu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(yo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||cu.getNormalMatrix(t),s=this.coplanarPoint(yo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},hu=0,fi=class extends An{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=vs,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fo,this.blendDst=Oo,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new $t().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new fn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ot().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Zn=new X,vo=new X,yr=new X,vr=new X,Ni=class{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){vo.copy(t).add(e).multiplyScalar(.5),yr.copy(e).sub(t).normalize(),vr.copy(this.origin).sub(vo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(yr),o=vr.dot(this.direction),c=-vr.dot(yr),h=vr.lengthSq(),u=Math.abs(1-a*a),_,p,d,g;if(u>0)if(_=a*c-o,p=a*o-c,g=r*u,_>=0)if(p>=-g)if(p<=g){let E=1/u;_*=E,p*=E,d=_*(_+a*p+2*o)+p*(a*_+p+2*c)+h}else p=r,_=Math.max(0,-(a*p+o)),d=-_*_+p*(p+2*c)+h;else p=-r,_=Math.max(0,-(a*p+o)),d=-_*_+p*(p+2*c)+h;else p<=-g?(_=Math.max(0,-(-a*r+o)),p=_>0?-r:Math.min(Math.max(-r,-c),r),d=-_*_+p*(p+2*c)+h):p<=g?(_=0,p=Math.min(Math.max(-r,-c),r),d=p*(p+2*c)+h):(_=Math.max(0,-(a*r+o)),p=_>0?r:Math.min(Math.max(-r,-c),r),d=-_*_+p*(p+2*c)+h);else p=a>0?-r:r,_=Math.max(0,-(a*p+o)),d=-_*_+p*(p+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(vo).addScaledVector(yr,p),d}intersectSphere(t,e){if(t.radius<0)return null;Zn.subVectors(t.center,this.origin);let n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,h=1/this.direction.x,u=1/this.direction.y,_=1/this.direction.z,p=this.origin;return h>=0?(n=(t.min.x-p.x)*h,s=(t.max.x-p.x)*h):(n=(t.max.x-p.x)*h,s=(t.min.x-p.x)*h),u>=0?(r=(t.min.y-p.y)*u,a=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,a=(t.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),_>=0?(o=(t.min.z-p.z)*_,c=(t.max.z-p.z)*_):(o=(t.max.z-p.z)*_,c=(t.min.z-p.z)*_),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,h=o.y,u=o.z,_=t.x-a.x,p=t.y-a.y,d=t.z-a.z,g=e.x-a.x,E=e.y-a.y,m=e.z-a.z,f=n.x-a.x,S=n.y-a.y,D=n.z-a.z,w=Math.abs(c),A=Math.abs(h),C=Math.abs(u),x,b,H,F,W,Y,K,B,$,st,tt,_t;if(w>=A&&w>=C?(H=c,Y=_,$=g,_t=f,c>=0?(x=h,b=u,F=p,W=d,K=E,B=m,st=S,tt=D):(x=u,b=h,F=d,W=p,K=m,B=E,st=D,tt=S)):A>=C?(H=h,Y=p,$=E,_t=S,h>=0?(x=u,b=c,F=d,W=_,K=m,B=g,st=D,tt=f):(x=c,b=u,F=_,W=d,K=g,B=m,st=f,tt=D)):(H=u,Y=d,$=m,_t=D,u>=0?(x=c,b=h,F=_,W=p,K=g,B=E,st=f,tt=S):(x=h,b=c,F=p,W=_,K=E,B=g,st=S,tt=f)),H===0)return null;let z=x/H,ft=b/H,mt=1/H,Nt=F-z*Y,qt=W-ft*Y,ht=K-z*$,Tt=B-ft*$,Lt=st-z*_t,Ct=tt-ft*_t,xt=Lt*Tt-Ct*ht,Wt=Nt*Ct-qt*Lt,ue=ht*qt-Tt*Nt;if(s){if(xt<0||Wt<0||ue<0)return null}else if((xt<0||Wt<0||ue<0)&&(xt>0||Wt>0||ue>0))return null;let Gt=xt+Wt+ue;if(Gt===0)return null;let Qt=mt*(xt*Y+Wt*$+ue*_t);return(Gt>0?Qt<0:Qt>0)?null:this.at(Qt/Gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gs=class extends fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},kl=new he,Pi=new Ni,Mr=new ms,Vl=new X,Sr=new X,br=new X,Er=new X,Mo=new X,wr=new X,Wl=new X,Tr=new X,Te=class extends We{constructor(t=new gn,e=new gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){wr.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let u=o[c],_=r[c];u!==0&&(Mo.fromBufferAttribute(_,t),a?wr.addScaledVector(Mo,u):wr.addScaledVector(Mo.sub(e),u))}e.add(wr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(Mr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Mr,Vl)===null||Pi.origin.distanceToSquared(Vl)>(t.far-t.near)**2))&&(kl.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(kl),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,_=r.attributes.normal,p=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,E=p.length;g<E;g++){let m=p[g],f=a[m.materialIndex],S=Math.max(m.start,d.start),D=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let w=S,A=D;w<A;w+=3){let C=o.getX(w),x=o.getX(w+1),b=o.getX(w+2);s=Ar(this,f,t,n,h,u,_,C,x,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),E=Math.min(o.count,d.start+d.count);for(let m=g,f=E;m<f;m+=3){let S=o.getX(m),D=o.getX(m+1),w=o.getX(m+2);s=Ar(this,a,t,n,h,u,_,S,D,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,E=p.length;g<E;g++){let m=p[g],f=a[m.materialIndex],S=Math.max(m.start,d.start),D=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let w=S,A=D;w<A;w+=3){let C=w,x=w+1,b=w+2;s=Ar(this,f,t,n,h,u,_,C,x,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),E=Math.min(c.count,d.start+d.count);for(let m=g,f=E;m<f;m+=3){let S=m,D=m+1,w=m+2;s=Ar(this,a,t,n,h,u,_,S,D,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function uu(i,t,e,n,s,r,a,o){let c;if(t.side===Ze?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Mi,o),c===null)return null;Tr.copy(o),Tr.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Tr);return h<e.near||h>e.far?null:{distance:h,point:Tr.clone(),object:i}}function Ar(i,t,e,n,s,r,a,o,c,h){i.getVertexPosition(o,Sr),i.getVertexPosition(c,br),i.getVertexPosition(h,Er);let u=uu(i,t,e,n,Sr,br,Er,Wl);if(u){let _=new X;ui.getBarycoord(Wl,Sr,br,Er,_),s&&(u.uv=ui.getInterpolatedAttribute(s,o,c,h,_,new Ot)),r&&(u.uv1=ui.getInterpolatedAttribute(r,o,c,h,_,new Ot)),a&&(u.normal=ui.getInterpolatedAttribute(a,o,c,h,_,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a:o,b:c,c:h,normal:new X,materialIndex:0};ui.getNormal(Sr,br,Er,p.normal),u.face=p,u.barycoord=_}return u}var Yr=class extends on{constructor(t=null,e=1,n=1,s,r,a,o,c,h=Ve,u=Ve,_,p){super(null,a,o,c,h,u,s,r,_,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ii=new ms,du=new Ot(.5,.5),Rr=new X,pi=class{constructor(t=new fn,e=new fn,n=new fn,s=new fn,r=new fn,a=new fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],h=r[3],u=r[4],_=r[5],p=r[6],d=r[7],g=r[8],E=r[9],m=r[10],f=r[11],S=r[12],D=r[13],w=r[14],A=r[15];if(s[0].setComponents(h-a,d-u,f-g,A-S).normalize(),s[1].setComponents(h+a,d+u,f+g,A+S).normalize(),s[2].setComponents(h+o,d+_,f+E,A+D).normalize(),s[3].setComponents(h-o,d-_,f-E,A-D).normalize(),n)s[4].setComponents(c,p,m,w).normalize(),s[5].setComponents(h-c,d-p,f-m,A-w).normalize();else if(s[4].setComponents(h-c,d-p,f-m,A-w).normalize(),e===yn)s[5].setComponents(h+c,d+p,f+m,A+w).normalize();else if(e===cs)s[5].setComponents(c,p,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){Ii.center.set(0,0,0);let e=du.distanceTo(t.center);return Ii.radius=.7071067811865476+e,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Rr.x=s.normal.x>0?t.max.x:t.min.x,Rr.y=s.normal.y>0?t.max.y:t.min.y,Rr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Xl=new he,Zr=class i{constructor(){this.coordinateSystem=yn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Xl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new pi),n[s].setFromProjectionMatrix(Xl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new pi),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Ws=class extends on{constructor(t=[],e=Xi,n,s,r,a,o,c,h,u){super(t,e,n,s,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var jn=class extends on{constructor(t,e,n=Rn,s,r,a,o=Ve,c=Ve,h,u=$n,_=1){if(u!==$n&&u!==ii)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:_};super(p,s,r,a,o,c,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ds(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Xs=class extends jn{constructor(t,e=Rn,n=Xi,s,r,a=Ve,o=Ve,c,h=$n){let u={width:t,height:t,depth:1},_=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},qs=class extends on{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},wt=class i extends gn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],u=[],_=[],p=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new xe(h,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(_,2));function g(E,m,f,S,D,w,A,C,x,b,H){let F=w/x,W=A/b,Y=w/2,K=A/2,B=C/2,$=x+1,st=b+1,tt=0,_t=0,z=new X;for(let ft=0;ft<st;ft++){let mt=ft*W-K;for(let Nt=0;Nt<$;Nt++){let qt=Nt*F-Y;z[E]=qt*S,z[m]=mt*D,z[f]=B,h.push(z.x,z.y,z.z),z[E]=0,z[m]=0,z[f]=C>0?1:-1,u.push(z.x,z.y,z.z),_.push(Nt/x),_.push(1-ft/b),tt+=1}}for(let ft=0;ft<b;ft++)for(let mt=0;mt<x;mt++){let Nt=p+mt+$*ft,qt=p+mt+$*(ft+1),ht=p+(mt+1)+$*(ft+1),Tt=p+(mt+1)+$*ft;c.push(Nt,qt,Tt),c.push(qt,ht,Tt),_t+=6}o.addGroup(d,_t,H),d+=_t,p+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ui=class i extends gn{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],h=[],u=e/2,_=Math.PI/2*t,p=e,d=2*_+p,g=n*2+r,E=s+1,m=new X,f=new X;for(let S=0;S<=g;S++){let D=0,w=0,A=0,C=0;if(S<=n){let H=S/n,F=H*Math.PI/2;w=-u-t*Math.cos(F),A=t*Math.sin(F),C=-t*Math.cos(F),D=H*_}else if(S<=n+r){let H=(S-n)/r;w=-u+H*e,A=t,C=0,D=_+H*p}else{let H=(S-n-r)/n,F=H*Math.PI/2;w=u+t*Math.sin(F),A=t*Math.cos(F),C=t*Math.sin(F),D=_+p+H*_}let x=Math.max(0,Math.min(1,D/d)),b=0;S===0?b=.5/s:S===g&&(b=-.5/s);for(let H=0;H<=s;H++){let F=H/s,W=F*Math.PI*2,Y=Math.sin(W),K=Math.cos(W);f.x=-A*K,f.y=w,f.z=A*Y,o.push(f.x,f.y,f.z),m.set(-A*K,C,A*Y),m.normalize(),c.push(m.x,m.y,m.z),h.push(F+b,x)}if(S>0){let H=(S-1)*E;for(let F=0;F<s;F++){let W=H+F,Y=H+F+1,K=S*E+F,B=S*E+F+1;a.push(W,Y,K),a.push(Y,B,K)}}}this.setIndex(a),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},mi=class i extends gn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],h=new X,u=new Ot;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let _=0,p=3;_<=e;_++,p+=3){let d=n+_/e*s;h.x=t*Math.cos(d),h.y=t*Math.sin(d),a.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(a[p]/t+1)/2,u.y=(a[p+1]/t+1)/2,c.push(u.x,u.y)}for(let _=1;_<=e;_++)r.push(_,_+1,0);this.setIndex(r),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(o,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Vt=class i extends gn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],_=[],p=[],d=[],g=0,E=[],m=n/2,f=0;S(),a===!1&&(t>0&&D(!0),e>0&&D(!1)),this.setIndex(u),this.setAttribute("position",new xe(_,3)),this.setAttribute("normal",new xe(p,3)),this.setAttribute("uv",new xe(d,2));function S(){let w=new X,A=new X,C=0,x=(e-t)/n;for(let b=0;b<=r;b++){let H=[],F=b/r,W=F*(e-t)+t;for(let Y=0;Y<=s;Y++){let K=Y/s,B=K*c+o,$=Math.sin(B),st=Math.cos(B);A.x=W*$,A.y=-F*n+m,A.z=W*st,_.push(A.x,A.y,A.z),w.set($,x,st).normalize(),p.push(w.x,w.y,w.z),d.push(K,1-F),H.push(g++)}E.push(H)}for(let b=0;b<s;b++)for(let H=0;H<r;H++){let F=E[H][b],W=E[H+1][b],Y=E[H+1][b+1],K=E[H][b+1];(t>0||H!==0)&&(u.push(F,W,K),C+=3),(e>0||H!==r-1)&&(u.push(W,Y,K),C+=3)}h.addGroup(f,C,0),f+=C}function D(w){let A=g,C=new Ot,x=new X,b=0,H=w===!0?t:e,F=w===!0?1:-1;for(let Y=1;Y<=s;Y++)_.push(0,m*F,0),p.push(0,F,0),d.push(.5,.5),g++;let W=g;for(let Y=0;Y<=s;Y++){let B=Y/s*c+o,$=Math.cos(B),st=Math.sin(B);x.x=H*st,x.y=m*F,x.z=H*$,_.push(x.x,x.y,x.z),p.push(0,F,0),C.x=$*.5+.5,C.y=st*.5*F+.5,d.push(C.x,C.y),g++}for(let Y=0;Y<s;Y++){let K=A+Y,B=W+Y;w===!0?u.push(B,B+1,K):u.push(B+1,B,K),b+=3}h.addGroup(f,b,w===!0?1:2),f+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},nn=class i extends Vt{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ys=class i extends gn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),h(n),u(),this.setAttribute("position",new xe(r,3)),this.setAttribute("normal",new xe(r.slice(),3)),this.setAttribute("uv",new xe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let D=new X,w=new X,A=new X;for(let C=0;C<e.length;C+=3)d(e[C+0],D),d(e[C+1],w),d(e[C+2],A),c(D,w,A,S)}function c(S,D,w,A){let C=A+1,x=[];for(let b=0;b<=C;b++){x[b]=[];let H=S.clone().lerp(w,b/C),F=D.clone().lerp(w,b/C),W=C-b;for(let Y=0;Y<=W;Y++)Y===0&&b===C?x[b][Y]=H:x[b][Y]=H.clone().lerp(F,Y/W)}for(let b=0;b<C;b++)for(let H=0;H<2*(C-b)-1;H++){let F=Math.floor(H/2);H%2===0?(p(x[b][F+1]),p(x[b+1][F]),p(x[b][F])):(p(x[b][F+1]),p(x[b+1][F+1]),p(x[b+1][F]))}}function h(S){let D=new X;for(let w=0;w<r.length;w+=3)D.x=r[w+0],D.y=r[w+1],D.z=r[w+2],D.normalize().multiplyScalar(S),r[w+0]=D.x,r[w+1]=D.y,r[w+2]=D.z}function u(){let S=new X;for(let D=0;D<r.length;D+=3){S.x=r[D+0],S.y=r[D+1],S.z=r[D+2];let w=m(S)/2/Math.PI+.5,A=f(S)/Math.PI+.5;a.push(w,1-A)}g(),_()}function _(){for(let S=0;S<a.length;S+=6){let D=a[S+0],w=a[S+2],A=a[S+4],C=Math.max(D,w,A),x=Math.min(D,w,A);C>.9&&x<.1&&(D<.2&&(a[S+0]+=1),w<.2&&(a[S+2]+=1),A<.2&&(a[S+4]+=1))}}function p(S){r.push(S.x,S.y,S.z)}function d(S,D){let w=S*3;D.x=t[w+0],D.y=t[w+1],D.z=t[w+2]}function g(){let S=new X,D=new X,w=new X,A=new X,C=new Ot,x=new Ot,b=new Ot;for(let H=0,F=0;H<r.length;H+=9,F+=6){S.set(r[H+0],r[H+1],r[H+2]),D.set(r[H+3],r[H+4],r[H+5]),w.set(r[H+6],r[H+7],r[H+8]),C.set(a[F+0],a[F+1]),x.set(a[F+2],a[F+3]),b.set(a[F+4],a[F+5]),A.copy(S).add(D).add(w).divideScalar(3);let W=m(A);E(C,F+0,S,W),E(x,F+2,D,W),E(b,F+4,w,W)}}function E(S,D,w,A){A<0&&S.x===1&&(a[D]=S.x-1),w.x===0&&w.z===0&&(a[D]=A/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},vn=class i extends Ys{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Fi=class i extends Ys{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Zs=class i extends gn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),h=o+1,u=c+1,_=t/o,p=e/c,d=[],g=[],E=[],m=[];for(let f=0;f<u;f++){let S=f*p-a;for(let D=0;D<h;D++){let w=D*_-r;g.push(w,-S,0),E.push(0,0,1),m.push(D/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<o;S++){let D=S+h*f,w=S+h*(f+1),A=S+1+h*(f+1),C=S+1+h*f;d.push(D,w,C),d.push(w,A,C)}this.setIndex(d),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(E,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ie=class i extends gn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),h=0,u=[],_=new X,p=new X,d=[],g=[],E=[],m=[];for(let f=0;f<=n;f++){let S=[],D=f/n,w=a+D*o,A=t*Math.cos(w),C=Math.sqrt(t*t-A*A),x=0;f===0&&a===0?x=.5/e:f===n&&c===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){let H=b/e,F=s+H*r;_.x=-C*Math.cos(F),_.y=A,_.z=C*Math.sin(F),g.push(_.x,_.y,_.z),p.copy(_).normalize(),E.push(p.x,p.y,p.z),m.push(H+x,1-D),S.push(h++)}u.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){let D=u[f][S+1],w=u[f][S],A=u[f+1][S],C=u[f+1][S+1];(f!==0||a>0)&&d.push(D,w,C),(f!==n-1||c<Math.PI)&&d.push(w,A,C)}this.setIndex(d),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(E,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Yi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ql(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ql(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function tn(i){let t={};for(let e=0;e<i.length;e++){let n=Yi(i[e]);for(let s in n)t[s]=n[s]}return t}function ql(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function fu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ol(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var Gc={clone:Yi,merge:tn},pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pu,this.fragmentShader=mu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yi(t.uniforms),this.uniformsGroups=fu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new $t().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ot().fromArray(s.value);break;case"v3":this.uniforms[n].value=new X().fromArray(s.value);break;case"v4":this.uniforms[n].value=new we().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new he().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Jr=class extends ln{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qn=class extends fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ja,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var $r=class extends fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Kr=class extends fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ss(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Cr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var gi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},jr=class extends gi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eo,endingEnd:Eo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case wo:r=t,o=2*e-n;break;case To:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case wo:a=t,c=2*n-e;break;case To:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=this._offsetPrev,_=this._offsetNext,p=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),E=g*g,m=E*g,f=-p*m+2*p*E-p*g,S=(1+p)*m+(-1.5-2*p)*E+(-.5+p)*g+1,D=(-1-d)*m+(1.5+d)*E+.5*g,w=d*m-d*E;for(let A=0;A!==o;++A)r[A]=f*a[u+A]+S*a[h+A]+D*a[c+A]+w*a[_+A];return r}},Qr=class extends gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=(n-e)/(s-e),_=1-u;for(let p=0;p!==o;++p)r[p]=a[h+p]*_+a[c+p]*u;return r}},ta=class extends gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ea=class extends gi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=this.inTangents,_=this.outTangents;if(!u||!_){let g=(n-e)/(s-e),E=1-g;for(let m=0;m!==o;++m)r[m]=a[h+m]*E+a[c+m]*g;return r}let p=o*2,d=t-1;for(let g=0;g!==o;++g){let E=a[h+g],m=a[c+g],f=d*p+g*2,S=_[f],D=_[f+1],w=t*p+g*2,A=u[w],C=u[w+1],x=_u(n,e,S,A,s);r[g]=kc(x,E,D,C,m)}return r}};function kc(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function gu(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function _u(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=kc(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=gu(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var _n=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ss(e,this.TimeBufferType),this.values=ss(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ss(t.times,Array),values:ss(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Cr(t.settings)&&(n.settings={inTangents:ss(t.settings.inTangents,Array),outTangents:ss(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ea(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Os:e=this.InterpolantFactoryMethodDiscrete;break;case Vr:e=this.InterpolantFactoryMethodLinear;break;case Lr:e=this.InterpolantFactoryMethodSmooth;break;case bo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return Vr;case this.InterpolantFactoryMethodSmooth:return Lr;case this.InterpolantFactoryMethodBezier:return bo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Cr(this.settings)&&(Yl(this.settings.inTangents,t),Yl(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Cr(this.settings)&&(Zl(this.settings.inTangents,t),Zl(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Yt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Yt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Dh(s))for(let o=0,c=s.length;o!==c;++o){let h=s[o];if(isNaN(h)){Yt("KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Lr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=t[o],u=t[o+1];if(h!==u&&(o!==1||h!==t[0]))if(s)c=!0;else{let _=o*n,p=_-n,d=_+n;for(let g=0;g!==n;++g){let E=e[_+g];if(E!==e[p+g]||E!==e[d+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let _=o*n,p=a*n;for(let d=0;d!==n;++d)e[p+d]=e[_+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)e[c+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Cr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Yl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Zl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Vr;var _i=class extends _n{constructor(t,e,n){super(t,e,n)}};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=Os;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var na=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}};na.prototype.ValueTypeName="color";var ia=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}};ia.prototype.ValueTypeName="number";var sa=class extends gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),h=t*o;for(let u=h+o;h!==u;h+=4)pn.slerpFlat(r,0,a,h-o,a,h,c);return r}},Js=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new sa(this.times,this.values,this.getValueSize(),t)}};Js.prototype.ValueTypeName="quaternion";Js.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends _n{constructor(t,e,n){super(t,e,n)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Os;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var ra=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}};ra.prototype.ValueTypeName="vector";var aa=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,_){return h.push(u,_),this},this.removeHandler=function(u){let _=h.indexOf(u);return _!==-1&&h.splice(_,2),this},this.getHandler=function(u){for(let _=0,p=h.length;_<p;_+=2){let d=h[_],g=h[_+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Vc=new aa,oa=class{constructor(t){this.manager=t!==void 0?t:Vc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};oa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oi=class extends We{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Bi=class extends Oi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},So=new he,Jl=new X,$l=new X,$s=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pi,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Jl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jl),$l.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($l),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){So.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(So,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===cs||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),e.multiply(So)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Pr=new X,Ir=new pn,On=new X,Ks=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Pr,Ir,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pr,Ir,On.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Pr,Ir,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pr,Ir,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hi=new X,Kl=new Ot,jl=new Ot,ke=class extends Ks{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return us*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,Kl,jl),e.subVectors(jl,Kl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Us*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ao=class extends $s{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0}},zi=class extends Oi{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ao}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},js=class extends Ks{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ro=class extends $s{constructor(){super(new js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ti=class extends Oi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new Ro}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Hi=class extends Oi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var rs=-90,as=1,_s=class extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ke(rs,as,t,e);s.layers=this.layers,this.add(s);let r=new ke(rs,as,t,e);r.layers=this.layers,this.add(r);let a=new ke(rs,as,t,e);a.layers=this.layers,this.add(a);let o=new ke(rs,as,t,e);o.layers=this.layers,this.add(o);let c=new ke(rs,as,t,e);c.layers=this.layers,this.add(c);let h=new ke(rs,as,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let h of e)this.remove(h);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,h,u]=this.children,_=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let E=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.mipmapsAutoUpdate=E,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(_,p,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},la=class extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var ll="\\[\\]\\.:\\/",xu=new RegExp("["+ll+"]","g"),cl="[^"+ll+"]",yu="[^"+ll.replace("\\.","")+"]",vu=/((?:WC+[\/:])*)/.source.replace("WC",cl),Mu=/(WCOD+)?/.source.replace("WCOD",yu),Su=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),bu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),Eu=new RegExp("^"+vu+Mu+Su+bu+"$"),wu=["material","materials","bones","map"],Co=class{constructor(t,e,n){let s=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xu,"")}static parseTrackName(t){let e=Eu.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);wu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=Co;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ag=new Float32Array(1);var Ql=new he,Gi=class{constructor(t,e,n=0,s=1/0){this.ray=new Ni(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Yt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ql.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ql),this}intersectObject(t,e=!0,n=[]){return Po(t,this,n,e),n.sort(tc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Po(t[s],this,n,e);return n.sort(tc),n}};function tc(i,t){return i.distance-t.distance}function Po(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Po(r[a],t,e,!0)}}var xs=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ie(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ml=class ml{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};ml.prototype.isMatrix2=!0;var Io=ml;var Qs=class extends An{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function hl(i,t,e,n){let s=Tu(n);switch(e){case $o:return i*t;case jo:return i*t/s.components*s.byteLength;case ga:return i*t/s.components*s.byteLength;case Si:return i*t*2/s.components*s.byteLength;case _a:return i*t*2/s.components*s.byteLength;case Ko:return i*t*3/s.components*s.byteLength;case In:return i*t*4/s.components*s.byteLength;case xa:return i*t*4/s.components*s.byteLength;case er:case nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case va:case Sa:return Math.max(i,16)*Math.max(t,8)/4;case ya:case Ma:return Math.max(i,8)*Math.max(t,8)/2;case ba:case Ea:case Ta:case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wa:case rr:case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Va:case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case qa:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ar:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tu(i){switch(i){case cn:case qo:return{byteLength:1,components:1};case Ss:case Yo:case Pn:return{byteLength:2,components:1};case pa:case ma:return{byteLength:2,components:4};case Rn:case fa:case Cn:return{byteLength:4,components:1};case Zo:case Jo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function uh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ru(i){let t=new WeakMap;function e(o,c){let h=o.array,u=o.usage,_=h.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,h,u),o.onUploadCallback();let d;if(h instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)d=i.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=i.SHORT;else if(h instanceof Uint32Array)d=i.UNSIGNED_INT;else if(h instanceof Int32Array)d=i.INT;else if(h instanceof Int8Array)d=i.BYTE;else if(h instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:_}}function n(o,c,h){let u=c.array,_=c.updateRanges;if(i.bindBuffer(h,o),_.length===0)i.bufferSubData(h,0,u);else{_.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<_.length;d++){let g=_[p],E=_[d];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++p,_[p]=E)}_.length=p+1;for(let d=0,g=_.length;d<g;d++){let E=_[d];i.bufferSubData(h,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:a}}var Cu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pu=`#ifdef USE_ALPHAHASH
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
#endif`,Iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Du=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uu=`#ifdef USE_AOMAP
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
#endif`,Fu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ou=`#ifdef USE_BATCHING
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
#endif`,Bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ku=`#ifdef USE_IRIDESCENCE
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
#endif`,Vu=`#ifdef USE_BUMPMAP
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
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ju=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$u=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ku=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ju=`#define PI 3.141592653589793
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
} // validated`,Qu=`vec3 transformedNormal = objectNormal;
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
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sd="gl_FragColor = linearToOutputTexel( gl_FragColor );",rd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ad=`#ifdef USE_ENVMAP
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
#endif`,od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,md=`#ifdef USE_GRADIENTMAP
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
}`,gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vd=`#ifdef USE_ENVMAP
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
#endif`,Md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wd=`PhysicalMaterial material;
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
#endif`,Td=`uniform sampler2D dfgLUT;
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
}`,Ad=`
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
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pd=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Id=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ld=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bd=`#if defined( USE_POINTS_UV )
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
#endif`,zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kd=`#if defined( USE_MORPHCOLORS )
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
#endif`,Vd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`#ifdef USE_MORPHTARGETS
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
#endif`,Xd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kd=`#ifdef USE_NORMALMAP
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
#endif`,jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pf=`float getShadowMask() {
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
}`,mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gf=`#ifdef USE_SKINNING
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
#endif`,_f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xf=`#ifdef USE_SKINNING
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
#endif`,yf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bf=`#ifdef USE_TRANSMISSION
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
#endif`,Ef=`#ifdef USE_TRANSMISSION
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
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pf=`uniform sampler2D t2D;
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
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`uniform float backgroundBlurriness;
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
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`#include <common>
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
}`,Ff=`#if DEPTH_PACKING == 3200
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
}`,Of=`#define DISTANCE
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
}`,Bf=`#define DISTANCE
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
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`uniform float scale;
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
}`,kf=`uniform vec3 diffuse;
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
}`,Vf=`#include <common>
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
}`,Wf=`uniform vec3 diffuse;
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
}`,Xf=`#define LAMBERT
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
}`,qf=`#define LAMBERT
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
}`,Yf=`#define MATCAP
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
}`,Zf=`#define MATCAP
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
}`,Jf=`#define NORMAL
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
}`,$f=`#define NORMAL
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
}`,Kf=`#define PHONG
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
}`,jf=`#define PHONG
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
}`,Qf=`#define STANDARD
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
}`,tp=`#define STANDARD
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
}`,ep=`#define TOON
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
}`,np=`#define TOON
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
}`,ip=`uniform float size;
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
}`,sp=`uniform vec3 diffuse;
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
}`,rp=`#include <common>
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
}`,ap=`uniform vec3 color;
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
}`,op=`uniform float rotation;
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
}`,lp=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:Cu,alphahash_pars_fragment:Pu,alphamap_fragment:Iu,alphamap_pars_fragment:Lu,alphatest_fragment:Du,alphatest_pars_fragment:Nu,aomap_fragment:Uu,aomap_pars_fragment:Fu,batching_pars_vertex:Ou,batching_vertex:Bu,begin_vertex:zu,beginnormal_vertex:Hu,bsdfs:Gu,iridescence_fragment:ku,bumpmap_pars_fragment:Vu,clipping_planes_fragment:Wu,clipping_planes_pars_fragment:Xu,clipping_planes_pars_vertex:qu,clipping_planes_vertex:Yu,color_fragment:Zu,color_pars_fragment:Ju,color_pars_vertex:$u,color_vertex:Ku,common:ju,defaultnormal_vertex:Qu,displacementmap_pars_vertex:td,displacementmap_vertex:ed,emissivemap_fragment:nd,emissivemap_pars_fragment:id,colorspace_fragment:sd,colorspace_pars_fragment:rd,envmap_fragment:ad,envmap_common_pars_fragment:od,envmap_pars_fragment:ld,envmap_pars_vertex:cd,envmap_physical_pars_fragment:vd,envmap_vertex:hd,fog_vertex:ud,fog_pars_vertex:dd,fog_fragment:fd,fog_pars_fragment:pd,gradientmap_pars_fragment:md,lightmap_pars_fragment:gd,lights_lambert_fragment:_d,lights_lambert_pars_fragment:xd,lights_pars_begin:yd,lights_toon_fragment:Md,lights_toon_pars_fragment:Sd,lights_phong_fragment:bd,lights_phong_pars_fragment:Ed,lights_physical_fragment:wd,lights_physical_pars_fragment:Td,lights_fragment_begin:Ad,lights_fragment_maps:Rd,lights_fragment_end:Cd,lightprobes_pars_fragment:Pd,logdepthbuf_fragment:Id,logdepthbuf_pars_fragment:Ld,logdepthbuf_pars_vertex:Dd,logdepthbuf_vertex:Nd,map_fragment:Ud,map_pars_fragment:Fd,map_particle_fragment:Od,map_particle_pars_fragment:Bd,metalnessmap_fragment:zd,metalnessmap_pars_fragment:Hd,morphinstance_vertex:Gd,morphcolor_vertex:kd,morphnormal_vertex:Vd,morphtarget_pars_vertex:Wd,morphtarget_vertex:Xd,normal_fragment_begin:qd,normal_fragment_maps:Yd,normal_pars_fragment:Zd,normal_pars_vertex:Jd,normal_vertex:$d,normalmap_pars_fragment:Kd,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:Qd,clearcoat_pars_fragment:tf,iridescence_pars_fragment:ef,opaque_fragment:nf,packing:sf,premultiplied_alpha_fragment:rf,project_vertex:af,dithering_fragment:of,dithering_pars_fragment:lf,roughnessmap_fragment:cf,roughnessmap_pars_fragment:hf,shadowmap_pars_fragment:uf,shadowmap_pars_vertex:df,shadowmap_vertex:ff,shadowmask_pars_fragment:pf,skinbase_vertex:mf,skinning_pars_vertex:gf,skinning_vertex:_f,skinnormal_vertex:xf,specularmap_fragment:yf,specularmap_pars_fragment:vf,tonemapping_fragment:Mf,tonemapping_pars_fragment:Sf,transmission_fragment:bf,transmission_pars_fragment:Ef,uv_pars_fragment:wf,uv_pars_vertex:Tf,uv_vertex:Af,worldpos_vertex:Rf,background_vert:Cf,background_frag:Pf,backgroundCube_vert:If,backgroundCube_frag:Lf,cube_vert:Df,cube_frag:Nf,depth_vert:Uf,depth_frag:Ff,distance_vert:Of,distance_frag:Bf,equirect_vert:zf,equirect_frag:Hf,linedashed_vert:Gf,linedashed_frag:kf,meshbasic_vert:Vf,meshbasic_frag:Wf,meshlambert_vert:Xf,meshlambert_frag:qf,meshmatcap_vert:Yf,meshmatcap_frag:Zf,meshnormal_vert:Jf,meshnormal_frag:$f,meshphong_vert:Kf,meshphong_frag:jf,meshphysical_vert:Qf,meshphysical_frag:tp,meshtoon_vert:ep,meshtoon_frag:np,points_vert:ip,points_frag:sp,shadow_vert:rp,shadow_frag:ap,sprite_vert:op,sprite_frag:lp},It={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},kn={basic:{uniforms:tn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:tn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new $t(0)},envMapIntensity:{value:1}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:tn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:tn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:tn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new $t(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:tn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:tn([It.points,It.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:tn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:tn([It.common,It.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:tn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:tn([It.sprite,It.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:tn([It.common,It.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:tn([It.lights,It.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};kn.physical={uniforms:tn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var $a={r:0,b:0,g:0},cp=new he,dh=new Jt;dh.set(-1,0,0,0,1,0,0,0,1);function hp(i,t,e,n,s,r){let a=new $t(0),o=s===!0?0:1,c,h,u=null,_=0,p=null;function d(S){let D=S.isScene===!0?S.background:null;if(D&&D.isTexture){let w=S.backgroundBlurriness>0;D=t.get(D,w)}return D}function g(S){let D=!1,w=d(S);w===null?m(a,o):w&&w.isColor&&(m(w,1),D=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||D)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(S,D){let w=d(D);w&&w.isCubeTexture?(h===void 0&&(h=new Te(new wt(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Yi(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cp.makeRotationFromEuler(D.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(dh),h.material.toneMapped=se.getTransfer(w.colorSpace)!==ce,(u!==w||_!==w.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,_=w.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Te(new Zs(2,2),new ln({name:"BackgroundMaterial",uniforms:Yi(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.toneMapped=se.getTransfer(w.colorSpace)!==ce,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||_!==w.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=w,_=w.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,D){S.getRGB($a,ol(i)),e.buffers.color.setClear($a.r,$a.g,$a.b,D,r)}function f(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,D=1){a.set(S),o=D,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:E,dispose:f}}function up(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(W,Y,K,B,$){let st=!1,tt=_(W,B,K,Y);r!==tt&&(r=tt,h(r.object)),st=d(W,B,K,$),st&&g(W,B,K,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(st||a)&&(a=!1,w(W,Y,K,B),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function c(){return i.createVertexArray()}function h(W){return i.bindVertexArray(W)}function u(W){return i.deleteVertexArray(W)}function _(W,Y,K,B){let $=B.wireframe===!0,st=n[Y.id];st===void 0&&(st={},n[Y.id]=st);let tt=W.isInstancedMesh===!0?W.id:0,_t=st[tt];_t===void 0&&(_t={},st[tt]=_t);let z=_t[K.id];z===void 0&&(z={},_t[K.id]=z);let ft=z[$];return ft===void 0&&(ft=p(c()),z[$]=ft),ft}function p(W){let Y=[],K=[],B=[];for(let $=0;$<e;$++)Y[$]=0,K[$]=0,B[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:K,attributeDivisors:B,object:W,attributes:{},index:null}}function d(W,Y,K,B){let $=r.attributes,st=Y.attributes,tt=0,_t=K.getAttributes();for(let z in _t)if(_t[z].location>=0){let mt=$[z],Nt=st[z];if(Nt===void 0&&(z==="instanceMatrix"&&W.instanceMatrix&&(Nt=W.instanceMatrix),z==="instanceColor"&&W.instanceColor&&(Nt=W.instanceColor)),mt===void 0||mt.attribute!==Nt||Nt&&mt.data!==Nt.data)return!0;tt++}return r.attributesNum!==tt||r.index!==B}function g(W,Y,K,B){let $={},st=Y.attributes,tt=0,_t=K.getAttributes();for(let z in _t)if(_t[z].location>=0){let mt=st[z];mt===void 0&&(z==="instanceMatrix"&&W.instanceMatrix&&(mt=W.instanceMatrix),z==="instanceColor"&&W.instanceColor&&(mt=W.instanceColor));let Nt={};Nt.attribute=mt,mt&&mt.data&&(Nt.data=mt.data),$[z]=Nt,tt++}r.attributes=$,r.attributesNum=tt,r.index=B}function E(){let W=r.newAttributes;for(let Y=0,K=W.length;Y<K;Y++)W[Y]=0}function m(W){f(W,0)}function f(W,Y){let K=r.newAttributes,B=r.enabledAttributes,$=r.attributeDivisors;K[W]=1,B[W]===0&&(i.enableVertexAttribArray(W),B[W]=1),$[W]!==Y&&(i.vertexAttribDivisor(W,Y),$[W]=Y)}function S(){let W=r.newAttributes,Y=r.enabledAttributes;for(let K=0,B=Y.length;K<B;K++)Y[K]!==W[K]&&(i.disableVertexAttribArray(K),Y[K]=0)}function D(W,Y,K,B,$,st,tt){tt===!0?i.vertexAttribIPointer(W,Y,K,$,st):i.vertexAttribPointer(W,Y,K,B,$,st)}function w(W,Y,K,B){E();let $=B.attributes,st=K.getAttributes(),tt=Y.defaultAttributeValues;for(let _t in st){let z=st[_t];if(z.location>=0){let ft=$[_t];if(ft===void 0&&(_t==="instanceMatrix"&&W.instanceMatrix&&(ft=W.instanceMatrix),_t==="instanceColor"&&W.instanceColor&&(ft=W.instanceColor)),ft!==void 0){let mt=ft.normalized,Nt=ft.itemSize,qt=t.get(ft);if(qt===void 0)continue;let ht=qt.buffer,Tt=qt.type,Lt=qt.bytesPerElement,Ct=Tt===i.INT||Tt===i.UNSIGNED_INT||ft.gpuType===fa;if(ft.isInterleavedBufferAttribute){let xt=ft.data,Wt=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,ue=ft.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let Gt=0;Gt<z.locationSize;Gt++)f(z.location+Gt,xt.meshPerAttribute);W.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Gt=0;Gt<z.locationSize;Gt++)m(z.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let Gt=0;Gt<z.locationSize;Gt++)D(z.location+Gt,Nt/z.locationSize,Tt,mt,Wt*Lt,(ue+Nt/z.locationSize*Gt)*Lt,Ct)}else{if(ft.isInstancedBufferAttribute){for(let xt=0;xt<z.locationSize;xt++)f(z.location+xt,ft.meshPerAttribute);W.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let xt=0;xt<z.locationSize;xt++)m(z.location+xt);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let xt=0;xt<z.locationSize;xt++)D(z.location+xt,Nt/z.locationSize,Tt,mt,Nt*Lt,Nt/z.locationSize*xt*Lt,Ct)}}else if(tt!==void 0){let mt=tt[_t];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(z.location,mt);break;case 3:i.vertexAttrib3fv(z.location,mt);break;case 4:i.vertexAttrib4fv(z.location,mt);break;default:i.vertexAttrib1fv(z.location,mt)}}}}S()}function A(){H();for(let W in n){let Y=n[W];for(let K in Y){let B=Y[K];for(let $ in B){let st=B[$];for(let tt in st)u(st[tt].object),delete st[tt];delete B[$]}}delete n[W]}}function C(W){if(n[W.id]===void 0)return;let Y=n[W.id];for(let K in Y){let B=Y[K];for(let $ in B){let st=B[$];for(let tt in st)u(st[tt].object),delete st[tt];delete B[$]}}delete n[W.id]}function x(W){for(let Y in n){let K=n[Y];for(let B in K){let $=K[B];if($[W.id]===void 0)continue;let st=$[W.id];for(let tt in st)u(st[tt].object),delete st[tt];delete $[W.id]}}}function b(W){for(let Y in n){let K=n[Y],B=W.isInstancedMesh===!0?W.id:0,$=K[B];if($!==void 0){for(let st in $){let tt=$[st];for(let _t in tt)u(tt[_t].object),delete tt[_t];delete $[st]}delete K[B],Object.keys(K).length===0&&delete n[Y]}}}function H(){F(),a=!0,r!==s&&(r=s,h(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:H,resetDefaultState:F,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:E,enableAttribute:m,disableUnusedAttributes:S}}function dp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let d=0;d<u;d++)p+=h[d];e.update(p,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function fp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==In&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let b=x===Pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==cn&&x!==Cn&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=c(h);u!==h&&(Xt("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let _=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.logarithmicDepthBuffer===!0&&_===!1;e.reversedDepthBuffer===!0&&_===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&_===!0&&Xt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:p,reversedDepthBuffer:_,maxTextures:d,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:D,maxFragmentUniforms:w,maxSamples:A,samples:C}}function pp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new fn,o=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(_,p){let d=_.length!==0||p||n!==0||s;return s=p,n=_.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(_,p){e=u(_,p,0)},this.setState=function(_,p,d){let g=_.clippingPlanes,E=_.clipIntersection,m=_.clipShadows,f=i.get(_);if(!s||g===null||g.length===0||r&&!m)r?u(null):h();else{let S=r?0:n,D=S*4,w=f.clippingState||null;c.value=w,w=u(g,p,D,d);for(let A=0;A!==D;++A)w[A]=e[A];f.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=S}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(_,p,d,g){let E=_!==null?_.length:0,m=null;if(E!==0){if(m=c.value,g!==!0||m===null){let f=d+E*4,S=p.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let D=0,w=d;D!==E;++D,w+=4)a.copy(_[D]).applyMatrix4(S,o),a.normal.toArray(m,w),m[w+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,m}}var hr=class extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ws(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wt(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:ki});r.uniforms.tEquirect.value=e;let a=new Te(s,r),o=e.minFilter;return e.minFilter===ni&&(e.minFilter=en),new _s(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Wc=256,mp=3,gp=20,fh=256,ph=16,_p=3,xp=new X,yp=new $t,ja=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new _s(1,10,null),this._boxMesh=new Te(new wt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=xp}=r,c=this._renderer;this._setSize(a);let h=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let _=c.autoClear,p=c.autoClearColor,d=c.autoClearDepth,g=c.autoClearStencil,E=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,E===null&&(t.background=c.getClearColor(yp));let m=new _s(n,s,u);return m.position.copy(o),m.update(c,t),c.autoClear=_,c.autoClearColor=p,c.autoClearDepth=d,c.autoClearStencil=g,t.background=E,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(h,e)),this._applyPMREM(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Wc,rl(t))}_fromTexture(t,e){t.mapping===Xi||t.mapping===Ms?this._setSize(t.image.length===0?Wc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Xc(t,!1,!1),n=Math.log2(t)-mp;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Xc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Xi||t.mapping===Ms?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=qc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=vp(),this._integrationMaterial=Mp());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/ph);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-_p)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(fh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Sp());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Xc(i,t,e){return new hr(i,{minFilter:ni,generateMipmaps:t,type:Pn,colorSpace:Bs,depthBuffer:e})}function ur(i,t,e){return new ln({name:i,uniforms:t,vertexShader:ee.cube_vert,fragmentShader:e,side:Ze,blending:ki,depthTest:!1,depthWrite:!1})}function vp(){return ur("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function Mp(){return ur("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ph}},`

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
	`)}function Sp(){return ur("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${gp}
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
	`)}function qc(){return ur("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Yc(){return ur("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function bp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(p,d=!1){return p==null?null:d?a(p):r(p)}function r(p){if(p&&p.isTexture){let d=p.mapping;if(d===ha||d===ua)if(t.has(p)){let g=t.get(p).texture;return o(g,p.mapping)}else{let g=p.image;if(g&&g.height>0){let E=new hr(g.height);return E.fromEquirectangularTexture(i,p),t.set(p,E),p.addEventListener("dispose",h),o(E.texture,p.mapping)}else return null}}return p}function a(p){if(p&&p.isTexture&&p.isPMREMTexture!==!0){let d=p.mapping,g=d===ha||d===ua,E=d===Xi||d===Ms;if(g||E){let m=e.get(p),f=m!==void 0?m.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==f)return n===null&&(n=new ja(i)),m=g?n.fromEquirectangular(p,m):n.fromCubemap(p,m),m.texture.pmremVersion=p.pmremVersion,e.set(p,m),m.texture;if(m!==void 0)return m.texture;{let S=p.image;return g&&S&&S.height>0||E&&S&&c(S)?(n===null&&(n=new ja(i)),m=g?n.fromEquirectangular(p):n.fromCubemap(p),m.texture.pmremVersion=p.pmremVersion,e.set(p,m),p.addEventListener("dispose",u),m.texture):null}}}return p}function o(p,d){return d===ha?p.mapping=Xi:d===ua&&(p.mapping=Ms),p}function c(p){let d=0,g=6;for(let E=0;E<g;E++)p[E]!==void 0&&d++;return d===g}function h(p){let d=p.target;d.removeEventListener("dispose",h);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(p){let d=p.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function _(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:_}}function Ep(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ns("WebGLRenderer: "+n+" extension not supported."),s}}}function wp(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}function c(g){g.index!==null&&t.remove(g.index);for(let m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let E=r.get(g);E&&(t.remove(E),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function h(g,E){return s[E.id]!==void 0||(E.addEventListener("dispose",o),s[E.id]=new WeakRef(E),a.register(E,E.id,E),e.memory.geometries++),E}function u(g){let E=g.attributes;for(let m in E)t.update(E[m],i.ARRAY_BUFFER)}function _(g){let E=g.index,m=g.attributes.position,f=0;if(m===void 0)return;let S=E!==null?E.array.length:m.array.length/3-1,D=m.count>=65535?Vs:ks,w=new D(Math.ceil(S/3)*6,1),A=w.array;if(E!==null){let x=E.array;f=E.version;for(let b=0,H=0;b<S;b+=3){let F=x[b+0],W=x[b+1],Y=x[b+2];A[H++]=F,A[H++]=W,A[H++]=W,A[H++]=Y,A[H++]=Y,A[H++]=F}}else{f=m.version;for(let x=0,b=0;x<S;x+=3){let H=x+0,F=x+1,W=x+2;A[b++]=H,A[b++]=F,A[b++]=F,A[b++]=W,A[b++]=W,A[b++]=H}}w.version=f;let C=r.get(g);C&&t.remove(C),r.set(g,w)}function p(g){let E=r.get(g);if(E){let m=g.index;m!==null&&E.version<m.version&&_(g)}else _(g);return r.get(g)}function d(){for(let g in s){let E=s[g].deref();E!==void 0&&c(E)}}return{get:h,update:u,getWireframeAttribute:p,dispose:d}}function Tp(i,t,e){let n;function s(_){n=_}let r,a;function o(_){r=_.type,a=_.bytesPerElement}function c(_,p){i.drawElements(n,p,r,_*a),e.update(p,n,1)}function h(_,p,d){d!==0&&(i.drawElementsInstanced(n,p,r,_*a,d),e.update(p,n,d))}function u(_,p,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,_,0,d);let E=0;for(let m=0;m<d;m++)E+=p[m];e.update(E,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=u}function Ap(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Yt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Rp(i,t,e){let n=new WeakMap,s=new we;function r(a,o,c){let h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,_=u!==void 0?u.length:0,p=n.get(o);if(p===void 0||p.count!==_){let H=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",H)};p!==void 0&&p.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],D=0;d===!0&&(D=1),g===!0&&(D=2),E===!0&&(D=3);let w=o.attributes.position.count*D,A=1;w>t.maxTextureSize&&(A=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let C=new Float32Array(w*A*4*_),x=new Gs(C,w,A,_);x.type=Cn,x.needsUpdate=!0;let b=D*4;for(let F=0;F<_;F++){let W=m[F],Y=f[F],K=S[F],B=w*A*4*F;for(let $=0;$<W.count;$++){let st=$*b;d===!0&&(s.fromBufferAttribute(W,$),C[B+st+0]=s.x,C[B+st+1]=s.y,C[B+st+2]=s.z,C[B+st+3]=0),g===!0&&(s.fromBufferAttribute(Y,$),C[B+st+4]=s.x,C[B+st+5]=s.y,C[B+st+6]=s.z,C[B+st+7]=0),E===!0&&(s.fromBufferAttribute(K,$),C[B+st+8]=s.x,C[B+st+9]=s.y,C[B+st+10]=s.z,C[B+st+11]=K.itemSize===4?s.w:1)}}p={count:_,texture:x,size:new Ot(w,A)},n.set(o,p),o.addEventListener("dispose",H)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let E=0;E<h.length;E++)d+=h[E];let g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Cp(i,t,e,n,s){let r=new WeakMap;function a(h){let u=s.render.frame,_=h.geometry,p=t.get(h,_);if(r.get(p)!==u&&(t.update(p),r.set(p,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==u&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,u))),h.isSkinnedMesh){let d=h.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return p}function o(){r=new WeakMap}function c(h){let u=h.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Pp={[zo]:"LINEAR_TONE_MAPPING",[Ho]:"REINHARD_TONE_MAPPING",[Go]:"CINEON_TONE_MAPPING",[Wi]:"ACES_FILMIC_TONE_MAPPING",[Vo]:"AGX_TONE_MAPPING",[Wo]:"NEUTRAL_TONE_MAPPING",[ko]:"CUSTOM_TONE_MAPPING"};function Ip(i,t,e,n,s,r){let a=new mn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,h=null,u=new gn;u.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new xe([0,2,0,0,2,0],2));let _=new Jr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Te(u,_),d=new js(-1,1,1,-1,0,1),g=null,E=null,m=!1,f,S=null,D=[],w=!1;this.setSize=function(A,C){a.setSize(A,C),o!==null&&o.setSize(A,C),c!==null&&c.setSize(A,C);for(let x=0;x<D.length;x++){let b=D[x];b.setSize&&b.setSize(A,C)}},this.setEffects=function(A){D=A,w=D.length>0&&D[0].isRenderPass===!0;let C=a.width,x=a.height;D.length>0&&o===null&&(o=new mn(C,x,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),c=new mn(C,x,{type:Pn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&D.some(H=>H.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&h===null&&(h=new jn(C,x),r===!0&&(h.format=ii,h.type=qi)),a.dispose(),a.depthTexture=b?h:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let H=0;H<D.length;H++){let F=D[H];F.setSize&&F.setSize(C,x),b&&F.needsDepthTexture===!0&&F.setDepthTexture&&F.setDepthTexture(h)}},this.begin=function(A,C){if(m||A.toneMapping===Hn&&D.length===0)return!1;if(S=C,C!==null){let x=C.width,b=C.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return w===!1&&A.setRenderTarget(a),f=A.toneMapping,A.toneMapping=Hn,!0},this.hasRenderPass=function(){return w},this.end=function(A,C){A.toneMapping=f,m=!0;let x=a,b=o;for(let H=0;H<D.length;H++){let F=D[H];F.enabled!==!1&&(F.render(A,b,x,C),F.needsSwap!==!1&&(x=b,b=b===o?c:o))}if(g!==A.outputColorSpace||E!==A.toneMapping){g=A.outputColorSpace,E=A.toneMapping,_.defines={},se.getTransfer(g)===ce&&(_.defines.SRGB_TRANSFER="");let H=Pp[E];H&&(_.defines[H]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(S),A.render(p,d),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),_.dispose()}}var mh=new on,gh=new jn(1,1),_h=new Xs(1),xh=new Gs,yh=new qr,vh=new Ws,Zc=[],Jc=[],$c=new Float32Array(16),Kc=new Float32Array(9),jc=new Float32Array(4);function Ts(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Zc[s];if(r===void 0&&(r=new Float32Array(s),Zc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qa(i,t){let e=Jc[t];e===void 0&&(e=new Int32Array(t),Jc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Lp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Dp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function Np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function Up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function Fp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;jc.set(n),i.uniformMatrix2fv(this.addr,!1,jc),Fe(e,n)}}function Op(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Kc.set(n),i.uniformMatrix3fv(this.addr,!1,Kc),Fe(e,n)}}function Bp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;$c.set(n),i.uniformMatrix4fv(this.addr,!1,$c),Fe(e,n)}}function zp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Hp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function Gp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function Vp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function Xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function to(i){return i.version===0&&(i.compareFunction=el,i.needsUpdate=!0),i}function Yp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=to(gh):r=mh,e.setTexture2D(t||r,s)}function Zp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||yh,s)}function Jp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=to(_h):r=vh,e.setTextureCube(t||r,s)}function $p(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||xh,s)}function Kp(i){switch(i){case 5126:return Lp;case 35664:return Dp;case 35665:return Np;case 35666:return Up;case 35674:return Fp;case 35675:return Op;case 35676:return Bp;case 5124:case 35670:return zp;case 35667:case 35671:return Hp;case 35668:case 35672:return Gp;case 35669:case 35673:return kp;case 5125:return Vp;case 36294:return Wp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return Zp;case 35680:case 36300:case 36308:case 36293:return Jp;case 36289:case 36303:case 36311:case 36292:return $p}}function jp(i,t){i.uniform1fv(this.addr,t)}function Qp(i,t){let e=Ts(t,this.size,2);i.uniform2fv(this.addr,e)}function tm(i,t){let e=Ts(t,this.size,3);i.uniform3fv(this.addr,e)}function em(i,t){let e=Ts(t,this.size,4);i.uniform4fv(this.addr,e)}function nm(i,t){let e=Ts(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function im(i,t){let e=Ts(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sm(i,t){let e=Ts(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function rm(i,t){i.uniform1iv(this.addr,t)}function am(i,t){i.uniform2iv(this.addr,t)}function om(i,t){i.uniform3iv(this.addr,t)}function lm(i,t){i.uniform4iv(this.addr,t)}function cm(i,t){i.uniform1uiv(this.addr,t)}function hm(i,t){i.uniform2uiv(this.addr,t)}function um(i,t){i.uniform3uiv(this.addr,t)}function dm(i,t){i.uniform4uiv(this.addr,t)}function fm(i,t,e){let n=this.cache,s=t.length,r=Qa(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=to(gh):a=mh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function pm(i,t,e){let n=this.cache,s=t.length,r=Qa(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||yh,r[a])}function mm(i,t,e){let n=this.cache,s=t.length,r=Qa(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=to(_h):a=vh;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function gm(i,t,e){let n=this.cache,s=t.length,r=Qa(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||xh,r[a])}function _m(i){switch(i){case 5126:return jp;case 35664:return Qp;case 35665:return tm;case 35666:return em;case 35674:return nm;case 35675:return im;case 35676:return sm;case 5124:case 35670:return rm;case 35667:case 35671:return am;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return hm;case 36295:return um;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}var xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kp(e.type)}},yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_m(e.type)}},vl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},gl=/(\w+)(\])?(\[|\.)?/g;function Qc(i,t){i.seq.push(t),i.map[t.id]=t}function xm(i,t,e){let n=i.name,s=n.length;for(gl.lastIndex=0;;){let r=gl.exec(n),a=gl.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){Qc(e,h===void 0?new xl(o,i,t):new yl(o,i,t));break}else{let _=e.map[o];_===void 0&&(_=new vl(o),Qc(e,_)),e=_}}}var Es=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);xm(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function th(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ym=37297,vm=0;function Mm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var eh=new Jt;function Sm(i){se._getMatrix(eh,se.workingColorSpace,i);let t=`mat3( ${eh.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case zs:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function nh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Mm(i.getShaderSource(t),o)}else return r}function bm(i,t){let e=Sm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Em={[zo]:"Linear",[Ho]:"Reinhard",[Go]:"Cineon",[Wi]:"ACESFilmic",[Vo]:"AgX",[Wo]:"Neutral",[ko]:"Custom"};function wm(i,t){let e=Em[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ka=new X;function Tm(){se.getLuminanceCoefficients(Ka);let i=Ka.x.toFixed(4),t=Ka.y.toFixed(4),e=Ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Am(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function Rm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function cr(i){return i!==""}function ih(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function sh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Pm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(i){return i.replace(Pm,Im)}function Im(i,t){let e=ee[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ml(e)}var Lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rh(i){return i.replace(Lm,Dm)}function Dm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ah(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Nm={[ei]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};function Um(i){return Nm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Fm={[Ms]:"ENVMAP_MODE_REFRACTION"};function Om(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Fm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Bm={[Bo]:"ENVMAP_BLENDING_MULTIPLY",[Sc]:"ENVMAP_BLENDING_MIX",[bc]:"ENVMAP_BLENDING_ADD"};function zm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Bm[i.combine]||"ENVMAP_BLENDING_NONE"}function Hm(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Um(e),h=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Om(e),_=zm(e),p=Am(e),d=Rm(r),g=s.createProgram(),E,m,f=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(E=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(cr).join(`
`),E.length>0&&(E+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(cr).join(`
`),m.length>0&&(m+=`
`)):(E=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),m=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+_:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?ee.tonemapping_pars_fragment:"",e.toneMapping!==Hn?wm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,bm("linearToOutputTexel",e.outputColorSpace),Tm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),a=Ml(a),a=ih(a,e),a=sh(a,e),o=Ml(o),o=ih(o,e),o=sh(o,e),a=rh(a),o=rh(o),e.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,E=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,m=["#define varying in",e.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=f+E+a,D=f+m+o,w=th(s,s.VERTEX_SHADER,S),A=th(s,s.FRAGMENT_SHADER,D);s.attachShader(g,w),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function C(F){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(g)||"",Y=s.getShaderInfoLog(w)||"",K=s.getShaderInfoLog(A)||"",B=W.trim(),$=Y.trim(),st=K.trim(),tt=!0,_t=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,w,A);else{let z=nh(s,w,"vertex"),ft=nh(s,A,"fragment");Yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+B+`
`+z+`
`+ft)}else B!==""?Xt("WebGLProgram: Program Info Log:",B):($===""||st==="")&&(_t=!1);_t&&(F.diagnostics={runnable:tt,programLog:B,vertexShader:{log:$,prefix:E},fragmentShader:{log:st,prefix:m}})}s.deleteShader(w),s.deleteShader(A),x=new Es(s,g),b=Cm(s,g)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(g,ym)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=A,this}var Gm=0,Sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bl(t),e.set(t,n)),n}},bl=class{constructor(t){this.id=Gm++,this.code=t,this.usedTimes=0}};function km(i){return i===Si||i===rr||i===ar}function Vm(i,t,e,n,s,r){let a=new fs,o=new Sl,c=new Set,h=[],u=new Map,_=n.logarithmicDepthBuffer,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return c.add(x),x===0?"uv":`uv${x}`}function g(x,b,H,F,W,Y){let K=F.fog,B=W.geometry,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,st=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,tt=t.get(x.envMap||$,st),_t=p[x.type],z=n.precision;x.precision!==null&&(z=n.getMaxPrecision(x.precision),z!==x.precision&&Xt("WebGLProgram.getParameters:",x.precision,"not supported, using",z,"instead."));let ft=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,mt=ft!==void 0?ft.length:0,Nt=0;B.morphAttributes.position!==void 0&&(Nt=1),B.morphAttributes.normal!==void 0&&(Nt=2),B.morphAttributes.color!==void 0&&(Nt=3);let qt,ht,Tt,Lt;if(_t){let Rt=kn[_t];qt=Rt.vertexShader,ht=Rt.fragmentShader}else{qt=x.vertexShader,ht=x.fragmentShader;let Rt=o.getVertexShaderStage(x),jt=o.getFragmentShaderStage(x);o.update(x,Rt,jt),Tt=Rt.id,Lt=jt.id}let Ct=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Wt=W.isInstancedMesh===!0,ue=W.isBatchedMesh===!0,Gt=!!x.map,Qt=!!x.matcap,Kt=!!tt,te=Kt&&tt.isPMREMTexture===!0,be=!!x.aoMap,fe=!!x.lightMap,De=!!x.bumpMap&&x.wireframe===!1,de=!!x.normalMap,pe=!!x.displacementMap,Ae=!!x.emissiveMap,Be=!!x.metalnessMap,Je=!!x.roughnessMap,$e=x.anisotropy>0,q=x.clearcoat>0,Ne=x.diffuseRoughness>0,ae=x.dispersion>0,me=x.retroreflectivity>0,St=x.iridescence>0,ge=x.sheen>0,Bt=x.transmission>0,zt=$e&&!!x.anisotropyMap,L=q&&!!x.clearcoatMap,M=q&&!!x.clearcoatNormalMap,Z=q&&!!x.clearcoatRoughnessMap,gt=Ne&&!!x.diffuseRoughnessMap,dt=St&&!!x.iridescenceMap,Mt=St&&!!x.iridescenceThicknessMap,At=ge&&!!x.sheenColorMap,rt=ge&&!!x.sheenRoughnessMap,lt=!!x.specularMap,bt=!!x.specularColorMap,U=!!x.specularIntensityMap,at=Bt&&!!x.transmissionMap,nt=Bt&&!!x.thicknessMap,Et=!!x.gradientMap,yt=!!x.alphaMap,vt=x.alphaTest>0,Dt=!!x.alphaHash,Ht=!!x.extensions,ct=Hn;x.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(ct=i.toneMapping);let Ut=te?tt.isCompressedCubeTexture?tt.image[0].mipmaps:tt.mipmaps:null,Zt={shaderID:_t,shaderType:x.type,shaderName:x.name,vertexShader:qt,fragmentShader:ht,defines:x.defines,customVertexShaderID:Tt,customFragmentShaderID:Lt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:z,batching:ue,batchingColor:ue&&W._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&W.instanceColor!==null,instancingMorph:Wt&&W.morphTexture!==null,outputColorSpace:Ct===null?i.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Gt,matcap:Qt,envMap:Kt,envMapMode:Kt&&tt.mapping,envMapPMREM:te,envMapMaxLod:te?Ut.length-1:null,envMapSize:te?Ut[0].width:null,aoMap:be,lightMap:fe,bumpMap:De,normalMap:de,displacementMap:pe,emissiveMap:Ae,normalMapObjectSpace:de&&x.normalMapType===Tc,normalMapTangentSpace:de&&x.normalMapType===Ja,packedNormalMap:de&&x.normalMapType===Ja&&km(x.normalMap.format),metalnessMap:Be,roughnessMap:Je,anisotropy:$e,anisotropyMap:zt,clearcoat:q,clearcoatMap:L,clearcoatNormalMap:M,clearcoatRoughnessMap:Z,diffuseRoughness:Ne,diffuseRoughnessMap:gt,dispersion:ae,retroreflection:me,iridescence:St,iridescenceMap:dt,iridescenceThicknessMap:Mt,sheen:ge,sheenColorMap:At,sheenRoughnessMap:rt,specularMap:lt,specularColorMap:bt,specularIntensityMap:U,transmission:Bt,transmissionMap:at,thicknessMap:nt,gradientMap:Et,opaque:x.transparent===!1&&x.blending===vs&&x.alphaToCoverage===!1,alphaMap:yt,alphaTest:vt,alphaHash:Dt,combine:x.combine,mapUv:Gt&&d(x.map.channel),aoMapUv:be&&d(x.aoMap.channel),lightMapUv:fe&&d(x.lightMap.channel),bumpMapUv:De&&d(x.bumpMap.channel),normalMapUv:de&&d(x.normalMap.channel),displacementMapUv:pe&&d(x.displacementMap.channel),emissiveMapUv:Ae&&d(x.emissiveMap.channel),metalnessMapUv:Be&&d(x.metalnessMap.channel),roughnessMapUv:Je&&d(x.roughnessMap.channel),anisotropyMapUv:zt&&d(x.anisotropyMap.channel),clearcoatMapUv:L&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:gt&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:dt&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:At&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:rt&&d(x.sheenRoughnessMap.channel),specularMapUv:lt&&d(x.specularMap.channel),specularColorMapUv:bt&&d(x.specularColorMap.channel),specularIntensityMapUv:U&&d(x.specularIntensityMap.channel),transmissionMapUv:at&&d(x.transmissionMap.channel),thicknessMapUv:nt&&d(x.thicknessMap.channel),alphaMapUv:yt&&d(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(de||$e),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!B.attributes.uv&&(Gt||yt),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&de===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:xt,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Nt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:Y.filter(Rt=>Rt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:ct,decodeVideoTexture:Gt&&x.map.isVideoTexture===!0&&se.getTransfer(x.map.colorSpace)===ce,decodeVideoTextureEmissive:Ae&&x.emissiveMap.isVideoTexture===!0&&se.getTransfer(x.emissiveMap.colorSpace)===ce,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mn,flipSided:x.side===Ze,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ht&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&x.extensions.multiDraw===!0||ue)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Zt.vertexUv1s=c.has(1),Zt.vertexUv2s=c.has(2),Zt.vertexUv3s=c.has(3),c.clear(),Zt}function E(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let H in x.defines)b.push(H),b.push(x.defines[H]);return x.isRawShaderMaterial===!1&&(m(b,x),f(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function f(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function S(x){let b=p[x.type],H;if(b){let F=kn[b];H=Gc.clone(F.uniforms)}else H=x.uniforms;return H}function D(x,b){let H=u.get(b);return H!==void 0?++H.usedTimes:(H=new Hm(i,b,x,s),h.push(H),u.set(b,H)),H}function w(x){if(--x.usedTimes===0){let b=h.indexOf(x);h[b]=h[h.length-1],h.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function C(){o.dispose()}return{getParameters:g,getProgramCacheKey:E,getUniforms:S,acquireProgram:D,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:C}}function Wm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Xm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function oh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function lh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(p){let d=0;return p.isInstancedMesh&&(d+=2),p.isSkinnedMesh&&(d+=1),d}function o(p,d,g,E,m,f){let S=i[t];return S===void 0?(S={id:p.id,object:p,geometry:d,material:g,materialVariant:a(p),groupOrder:E,renderOrder:p.renderOrder,z:m,group:f},i[t]=S):(S.id=p.id,S.object=p,S.geometry=d,S.material=g,S.materialVariant=a(p),S.groupOrder=E,S.renderOrder=p.renderOrder,S.z=m,S.group=f),t++,S}function c(p,d,g,E,m,f,S){S.reversedDepth===!0&&(m=-m);let D=o(p,d,g,E,m,f);g.transmission>0?n.push(D):g.transparent===!0?s.push(D):e.push(D)}function h(p,d,g,E,m,f){let S=o(p,d,g,E,m,f);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function u(p,d){e.length>1&&e.sort(p||Xm),n.length>1&&n.sort(d||oh),s.length>1&&s.sort(d||oh)}function _(){for(let p=t,d=i.length;p<d;p++){let g=i[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:h,finish:_,sort:u}}function qm(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new lh,i.set(n,[a])):s>=r.length?(a=new lh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ym(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new X,color:new $t};break;case"SpotLight":e={position:new X,direction:new X,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new X,halfWidth:new X,halfHeight:new X};break}return i[t.id]=e,e}}}function Zm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Jm=0;function $m(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Km(i){let t=new Ym,e=Zm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new X);let s=new X,r=new he,a=new he;function o(h){let u=0,_=0,p=0;for(let Y=0;Y<9;Y++)n.probe[Y].set(0,0,0);let d=0,g=0,E=0,m=0,f=0,S=0,D=0,w=0,A=0,C=0,x=0,b=0,H=0,F=0;h.sort($m);for(let Y=0,K=h.length;Y<K;Y++){let B=h[Y],$=B.color,st=B.intensity,tt=B.distance,_t=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Si?_t=B.shadow.map.texture:_t=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)u+=$.r*st,_+=$.g*st,p+=$.b*st;else if(B.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(B.sh.coefficients[z],st);F++}else if(B.isSunLight){let z=t.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let ft=B.shadow,mt=e.get(B);mt.shadowIntensity=ft.intensity,mt.shadowBias=ft.bias,mt.shadowNormalBias=ft.normalBias,mt.shadowRadius=ft.radius,mt.shadowMapSize.copy(ft.mapSize).multiply(ft.getFrameExtents()),n.sunShadow[g]=mt,n.sunShadowMap[g]=_t;let Nt=ft.getViewportCount();for(let qt=0;qt<Nt;qt++)n.sunShadowMatrix[E+qt]=ft.getMatrix(qt),n.sunShadowCascade[E+qt]=ft._cascadeData[qt];E+=Nt,g++}n.sun[d]=z,d++}else if(B.isDirectionalLight){let z=t.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let ft=B.shadow,mt=e.get(B);mt.shadowIntensity=ft.intensity,mt.shadowBias=ft.bias,mt.shadowNormalBias=ft.normalBias,mt.shadowRadius=ft.radius,mt.shadowMapSize=ft.mapSize,n.directionalShadow[m]=mt,n.directionalShadowMap[m]=_t,n.directionalShadowMatrix[m]=B.shadow.matrix,A++}n.directional[m]=z,m++}else if(B.isSpotLight){let z=t.get(B);z.position.setFromMatrixPosition(B.matrixWorld),z.color.copy($).multiplyScalar(st),z.distance=tt,z.coneCos=Math.cos(B.angle),z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),z.decay=B.decay,n.spot[S]=z;let ft=B.shadow;if(B.map&&(n.spotLightMap[b]=B.map,b++,ft.updateMatrices(B),B.castShadow&&H++),n.spotLightMatrix[S]=ft.matrix,B.castShadow){let mt=e.get(B);mt.shadowIntensity=ft.intensity,mt.shadowBias=ft.bias,mt.shadowNormalBias=ft.normalBias,mt.shadowRadius=ft.radius,mt.shadowMapSize=ft.mapSize,n.spotShadow[S]=mt,n.spotShadowMap[S]=_t,x++}S++}else if(B.isRectAreaLight){let z=t.get(B);z.color.copy($).multiplyScalar(st),z.halfWidth.set(B.width*.5,0,0),z.halfHeight.set(0,B.height*.5,0),n.rectArea[D]=z,D++}else if(B.isPointLight){let z=t.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),z.distance=B.distance,z.decay=B.decay,B.castShadow){let ft=B.shadow,mt=e.get(B);mt.shadowIntensity=ft.intensity,mt.shadowBias=ft.bias,mt.shadowNormalBias=ft.normalBias,mt.shadowRadius=ft.radius,mt.shadowMapSize=ft.mapSize,mt.shadowCameraNear=ft.camera.near,mt.shadowCameraFar=ft.camera.far,n.pointShadow[f]=mt,n.pointShadowMap[f]=_t,n.pointShadowMatrix[f]=B.shadow.matrix,C++}n.point[f]=z,f++}else if(B.isHemisphereLight){let z=t.get(B);z.skyColor.copy(B.color).multiplyScalar(st),z.groundColor.copy(B.groundColor).multiplyScalar(st),n.hemi[w]=z,w++}}D>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=_,n.ambient[2]=p;let W=n.hash;(W.sunLength!==d||W.directionalLength!==m||W.pointLength!==f||W.spotLength!==S||W.rectAreaLength!==D||W.hemiLength!==w||W.numSunShadows!==g||W.numDirectionalShadows!==A||W.numPointShadows!==C||W.numSpotShadows!==x||W.numSpotMaps!==b||W.numLightProbes!==F)&&(n.sun.length=d,n.directional.length=m,n.spot.length=S,n.rectArea.length=D,n.point.length=f,n.hemi.length=w,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=E,n.sunShadowCascade.length=E,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-H,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=H,n.numLightProbes=F,W.sunLength=d,W.directionalLength=m,W.pointLength=f,W.spotLength=S,W.rectAreaLength=D,W.hemiLength=w,W.numSunShadows=g,W.numDirectionalShadows=A,W.numPointShadows=C,W.numSpotShadows=x,W.numSpotMaps=b,W.numLightProbes=F,n.version=Jm++)}function c(h,u){let _=0,p=0,d=0,g=0,E=0,m=0,f=u.matrixWorldInverse;for(let S=0,D=h.length;S<D;S++){let w=h[S];if(w.isSunLight){let A=n.sun[_];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(f),_++}else if(w.isDirectionalLight){let A=n.directional[p];A.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),p++}else if(w.isSpotLight){let A=n.spot[g];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),g++}else if(w.isRectAreaLight){let A=n.rectArea[E];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(f),a.identity(),r.copy(w.matrixWorld),r.premultiply(f),a.extractRotation(r),A.halfWidth.set(w.width*.5,0,0),A.halfHeight.set(0,w.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),E++}else if(w.isPointLight){let A=n.point[d];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(f),d++}else if(w.isHemisphereLight){let A=n.hemi[m];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(f),m++}}}return{setup:o,setupView:c,state:n}}function ch(i){let t=new Km(i),e=[],n=[],s=[];function r(_){u.camera=_,e.length=0,n.length=0,s.length=0}function a(_){_.isLightProbeGrid?s.push(_):e.push(_)}function o(_){n.push(_)}function c(){t.setup(e),s.sort((_,p)=>_.priority-p.priority||_.id-p.id)}function h(_){t.setupView(e,_)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o}}function jm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ch(i),t.set(s,[o])):r>=a.length?(o=new ch(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Qm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tg=`uniform sampler2D shadow_pass;
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
}`,eg=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],ng=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],hh=new he,lr=new X,_l=new X;function ig(i,t,e){let n=new pi,s=new Ot,r=new Ot,a=new we,o=new $r,c=new Kr,h={},u=e.maxTextureSize,_={[Mi]:Ze,[Ze]:Mi,[Mn]:Mn},p=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:Qm,fragmentShader:tg}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let g=new gn;g.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new Te(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ei;let f=this.type;this.render=function(C,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;this.type===ic&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ei);let H=i.getRenderTarget(),F=i.getActiveCubeFace(),W=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(ki),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let K=f!==this.type;K&&x.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach($=>$.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,$=C.length;B<$;B++){let st=C[B],tt=st.shadow;if(tt===void 0){Xt("WebGLShadowMap:",st,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let _t=tt.getFrameExtents();s.multiply(_t),r.copy(tt.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/_t.x),s.x=r.x*_t.x,tt.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/_t.y),s.y=r.y*_t.y,tt.mapSize.y=r.y));let z=i.state.buffers.depth.getReversed();if(tt.camera._reversedDepth=z,tt.map===null||K===!0){if(tt.map!==null&&(tt.map.depthTexture!==null&&(tt.map.depthTexture.dispose(),tt.map.depthTexture=null),tt.map.dispose()),this.type===ys){if(st.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}tt.map=new mn(s.x,s.y,{format:Si,type:Pn,minFilter:en,magFilter:en,generateMipmaps:!1}),tt.map.texture.name=st.name+".shadowMap",tt.map.depthTexture=new jn(s.x,s.y,Cn),tt.map.depthTexture.name=st.name+".shadowMapDepth",tt.map.depthTexture.format=$n,tt.map.depthTexture.compareFunction=null,tt.map.depthTexture.minFilter=Ve,tt.map.depthTexture.magFilter=Ve}else st.isPointLight?(tt.map=new hr(s.x),tt.map.depthTexture=new Xs(s.x,Rn)):(tt.map=new mn(s.x,s.y),tt.map.depthTexture=new jn(s.x,s.y,Rn)),tt.map.depthTexture.name=st.name+".shadowMap",tt.map.depthTexture.format=$n,this.type===ei?(tt.map.depthTexture.compareFunction=z?tl:Qo,tt.map.depthTexture.minFilter=en,tt.map.depthTexture.magFilter=en):(tt.map.depthTexture.compareFunction=null,tt.map.depthTexture.minFilter=Ve,tt.map.depthTexture.magFilter=Ve);tt.camera.updateProjectionMatrix()}tt.map.isWebGLCubeRenderTarget!==!0&&(tt.map.width!==s.x||tt.map.height!==s.y)&&tt.map.setSize(s.x,s.y);let ft=tt.map.isWebGLCubeRenderTarget?6:tt.getViewportCount();st.isPointLight!==!0&&tt.updateMatrices(st,b);let mt=(tt.camera.layers.mask&4294967294)!==0?tt.camera.layers:b.layers;for(let Nt=0;Nt<ft;Nt++){let qt=tt.getCamera(Nt);if(st.isPointLight){let ht=tt.camera,Tt=tt.matrix,Lt=st.distance||ht.far;Lt!==ht.far&&(ht.far=Lt,ht.updateProjectionMatrix()),lr.setFromMatrixPosition(st.matrixWorld),ht.position.copy(lr),_l.copy(ht.position),_l.add(eg[Nt]),ht.up.copy(ng[Nt]),ht.lookAt(_l),ht.updateMatrixWorld(),Tt.makeTranslation(-lr.x,-lr.y,-lr.z),hh.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),tt._frustum.setFromProjectionMatrix(hh,ht.coordinateSystem,ht.reversedDepth)}if(tt.map.isWebGLCubeRenderTarget)i.setRenderTarget(tt.map,Nt),i.clear();else{Nt===0&&(i.setRenderTarget(tt.map),i.clear());let ht=tt.getViewport(Nt);a.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),Y.viewport(a)}n=tt.getFrustum(Nt),w(x,b,qt,st,mt,this.type)}tt.isPointLightShadow!==!0&&this.type===ys&&S(tt,b),tt.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(H,F,W)};function S(C,x){let b=t.update(E);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null?C.mapPass=new mn(s.x,s.y,{format:Si,type:Pn}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),p.uniforms.shadow_pass.value=C.map.depthTexture,p.uniforms.resolution.value.set(C.map.width,C.map.height),p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(x,null,b,p,E,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value.set(C.map.width,C.map.height),d.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(x,null,b,d,E,null)}function D(C,x,b,H){let F=null,W=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(W!==void 0)F=W;else if(F=b.isPointLight===!0?c:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let Y=F.uuid,K=x.uuid,B=h[Y];B===void 0&&(B={},h[Y]=B);let $=B[K];$===void 0&&($=F.clone(),B[K]=$,x.addEventListener("dispose",A)),F=$}if(F.visible=x.visible,F.wireframe=x.wireframe,H===ys?F.side=x.shadowSide!==null?x.shadowSide:x.side:F.side=x.shadowSide!==null?x.shadowSide:_[x.side],F.alphaMap=x.alphaMap,F.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,F.map=x.map,F.clipShadows=x.clipShadows,F.clippingPlanes=x.clippingPlanes,F.clipIntersection=x.clipIntersection,F.displacementMap=x.displacementMap,F.displacementScale=x.displacementScale,F.displacementBias=x.displacementBias,F.wireframeLinewidth=x.wireframeLinewidth,F.linewidth=x.linewidth,b.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let Y=i.properties.get(F);Y.light=b}return F}function w(C,x,b,H,F,W){if(C.visible===!1)return;if(C.layers.test(F)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&W===ys)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);let B=t.update(C),$=C.material;if(Array.isArray($)){let st=B.groups;for(let tt=0,_t=st.length;tt<_t;tt++){let z=st[tt],ft=$[z.materialIndex];if(ft&&ft.visible){let mt=D(C,ft,H,W);C.onBeforeShadow(i,C,x,b,B,mt,z),i.renderBufferDirect(b,null,B,mt,C,z),C.onAfterShadow(i,C,x,b,B,mt,z)}}}else if($.visible){let st=D(C,$,H,W);C.onBeforeShadow(i,C,x,b,B,st,null),i.renderBufferDirect(b,null,B,st,C,null),C.onAfterShadow(i,C,x,b,B,st,null)}}let K=C.children;for(let B=0,$=K.length;B<$;B++)w(K[B],x,b,H,F,W)}function A(C){C.target.removeEventListener("dispose",A);for(let b in h){let H=h[b],F=C.target.uuid;F in H&&(H[F].dispose(),delete H[F])}}}function sg(i,t){function e(){let U=!1,at=new we,nt=null,Et=new we(0,0,0,0);return{setMask:function(yt){nt!==yt&&!U&&(i.colorMask(yt,yt,yt,yt),nt=yt)},setLocked:function(yt){U=yt},setClear:function(yt,vt,Dt,Ht,ct){ct===!0&&(yt*=Ht,vt*=Ht,Dt*=Ht),at.set(yt,vt,Dt,Ht),Et.equals(at)===!1&&(i.clearColor(yt,vt,Dt,Ht),Et.copy(at))},reset:function(){U=!1,nt=null,Et.set(-1,0,0,0)}}}function n(){let U=!1,at=!1,nt=null,Et=null,yt=null;return{setReversed:function(vt){if(at!==vt){let Dt=t.get("EXT_clip_control");vt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),at=vt;let Ht=yt;yt=null,this.setClear(Ht)}},getReversed:function(){return at},setTest:function(vt){vt?xt(i.DEPTH_TEST):Wt(i.DEPTH_TEST)},setMask:function(vt){nt!==vt&&!U&&(i.depthMask(vt),nt=vt)},setFunc:function(vt){if(at&&(vt=Oc[vt]),Et!==vt){switch(vt){case Nr:i.depthFunc(i.NEVER);break;case Ur:i.depthFunc(i.ALWAYS);break;case Fr:i.depthFunc(i.LESS);break;case ls:i.depthFunc(i.LEQUAL);break;case Or:i.depthFunc(i.EQUAL);break;case Br:i.depthFunc(i.GEQUAL);break;case zr:i.depthFunc(i.GREATER);break;case Hr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=vt}},setLocked:function(vt){U=vt},setClear:function(vt){yt!==vt&&(yt=vt,at&&(vt=1-vt),i.clearDepth(vt))},reset:function(){U=!1,nt=null,Et=null,yt=null,at=!1}}}function s(){let U=!1,at=null,nt=null,Et=null,yt=null,vt=null,Dt=null,Ht=null,ct=null;return{setTest:function(Ut){U||(Ut?xt(i.STENCIL_TEST):Wt(i.STENCIL_TEST))},setMask:function(Ut){at!==Ut&&!U&&(i.stencilMask(Ut),at=Ut)},setFunc:function(Ut,Zt,Rt){(nt!==Ut||Et!==Zt||yt!==Rt)&&(i.stencilFunc(Ut,Zt,Rt),nt=Ut,Et=Zt,yt=Rt)},setOp:function(Ut,Zt,Rt){(vt!==Ut||Dt!==Zt||Ht!==Rt)&&(i.stencilOp(Ut,Zt,Rt),vt=Ut,Dt=Zt,Ht=Rt)},setLocked:function(Ut){U=Ut},setClear:function(Ut){ct!==Ut&&(i.clearStencil(Ut),ct=Ut)},reset:function(){U=!1,at=null,nt=null,Et=null,yt=null,vt=null,Dt=null,Ht=null,ct=null}}}let r=new e,a=new n,o=new s,c={},h=new WeakMap,u={},_={},p={},d=new WeakMap,g=[],E=null,m=!1,f=null,S=null,D=null,w=null,A=null,C=null,x=null,b=new $t(0,0,0),H=0,F=!1,W=null,Y=null,K=null,B=null,$=null,st=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),tt=!1,_t=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(_t=parseFloat(/^WebGL (\d)/.exec(z)[1]),tt=_t>=1):z.indexOf("OpenGL ES")!==-1&&(_t=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),tt=_t>=2);let ft=null,mt={},Nt=i.getParameter(i.SCISSOR_BOX),qt=i.getParameter(i.VIEWPORT),ht=new we().fromArray(Nt),Tt=new we().fromArray(qt);function Lt(U,at,nt,Et){let yt=new Uint8Array(4),vt=i.createTexture();i.bindTexture(U,vt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<nt;Dt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(at+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return vt}let Ct={};Ct[i.TEXTURE_2D]=Lt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ct[i.TEXTURE_CUBE_MAP]=Lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[i.TEXTURE_2D_ARRAY]=Lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ct[i.TEXTURE_3D]=Lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xt(i.DEPTH_TEST),a.setFunc(ls),De(!1),de(Lo),xt(i.CULL_FACE),be(ki);function xt(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Wt(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function ue(U,at){return p[U]!==at?(i.bindFramebuffer(U,at),p[U]=at,U===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=at),U===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=at),!0):!1}function Gt(U,at){let nt=g,Et=!1;if(U){nt=d.get(at),nt===void 0&&(nt=[],d.set(at,nt));let yt=U.textures;if(nt.length!==yt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,Dt=yt.length;vt<Dt;vt++)nt[vt]=i.COLOR_ATTACHMENT0+vt;nt.length=yt.length,Et=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,Et=!0);Et&&i.drawBuffers(nt)}function Qt(U){return E!==U?(i.useProgram(U),E=U,!0):!1}let Kt={[Vi]:i.FUNC_ADD,[rc]:i.FUNC_SUBTRACT,[ac]:i.FUNC_REVERSE_SUBTRACT};Kt[oc]=i.MIN,Kt[lc]=i.MAX;let te={[cc]:i.ZERO,[hc]:i.ONE,[uc]:i.SRC_COLOR,[Fo]:i.SRC_ALPHA,[_c]:i.SRC_ALPHA_SATURATE,[mc]:i.DST_COLOR,[fc]:i.DST_ALPHA,[dc]:i.ONE_MINUS_SRC_COLOR,[Oo]:i.ONE_MINUS_SRC_ALPHA,[gc]:i.ONE_MINUS_DST_COLOR,[pc]:i.ONE_MINUS_DST_ALPHA,[xc]:i.CONSTANT_COLOR,[yc]:i.ONE_MINUS_CONSTANT_COLOR,[vc]:i.CONSTANT_ALPHA,[Mc]:i.ONE_MINUS_CONSTANT_ALPHA};function be(U,at,nt,Et,yt,vt,Dt,Ht,ct,Ut){if(U===ki){m===!0&&(Wt(i.BLEND),m=!1);return}if(m===!1&&(xt(i.BLEND),m=!0),U!==sc){if(U!==f||Ut!==F){if((S!==Vi||A!==Vi)&&(i.blendEquation(i.FUNC_ADD),S=Vi,A=Vi),Ut)switch(U){case vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFunc(i.ONE,i.ONE);break;case No:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Yt("WebGLState: Invalid blending: ",U);break}else switch(U){case vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Do:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case No:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uo:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",U);break}D=null,w=null,C=null,x=null,b.set(0,0,0),H=0,f=U,F=Ut}return}yt=yt||at,vt=vt||nt,Dt=Dt||Et,(at!==S||yt!==A)&&(i.blendEquationSeparate(Kt[at],Kt[yt]),S=at,A=yt),(nt!==D||Et!==w||vt!==C||Dt!==x)&&(i.blendFuncSeparate(te[nt],te[Et],te[vt],te[Dt]),D=nt,w=Et,C=vt,x=Dt),(Ht.equals(b)===!1||ct!==H)&&(i.blendColor(Ht.r,Ht.g,Ht.b,ct),b.copy(Ht),H=ct),f=U,F=!1}function fe(U,at){U.side===Mn?Wt(i.CULL_FACE):xt(i.CULL_FACE);let nt=U.side===Ze;at&&(nt=!nt),De(nt),U.blending===vs&&U.transparent===!1?be(ki):be(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let Et=U.stencilWrite;o.setTest(Et),Et&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):Wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(U){W!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),W=U)}function de(U){U!==ec?(xt(i.CULL_FACE),U!==Y&&(U===Lo?i.cullFace(i.BACK):U===nc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Wt(i.CULL_FACE),Y=U}function pe(U){U!==K&&(tt&&i.lineWidth(U),K=U)}function Ae(U,at,nt){U?(xt(i.POLYGON_OFFSET_FILL),(B!==at||$!==nt)&&(B=at,$=nt,a.getReversed()&&(at=-at,nt=-nt),i.polygonOffset(at,nt))):Wt(i.POLYGON_OFFSET_FILL)}function Be(U){U?xt(i.SCISSOR_TEST):Wt(i.SCISSOR_TEST)}function Je(U){U===void 0&&(U=i.TEXTURE0+st-1),ft!==U&&(i.activeTexture(U),ft=U)}function $e(U,at,nt){nt===void 0&&(ft===null?nt=i.TEXTURE0+st-1:nt=ft);let Et=mt[nt];Et===void 0&&(Et={type:void 0,texture:void 0},mt[nt]=Et),(Et.type!==U||Et.texture!==at)&&(ft!==nt&&(i.activeTexture(nt),ft=nt),i.bindTexture(U,at||Ct[U]),Et.type=U,Et.texture=at)}function q(){let U=mt[ft];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ne(){try{i.compressedTexImage2D(...arguments)}catch(U){Yt("WebGLState:",U)}}function ae(){try{i.compressedTexImage3D(...arguments)}catch(U){Yt("WebGLState:",U)}}function me(){try{i.texSubImage2D(...arguments)}catch(U){Yt("WebGLState:",U)}}function St(){try{i.texSubImage3D(...arguments)}catch(U){Yt("WebGLState:",U)}}function ge(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Yt("WebGLState:",U)}}function Bt(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Yt("WebGLState:",U)}}function zt(){try{i.texStorage2D(...arguments)}catch(U){Yt("WebGLState:",U)}}function L(){try{i.texStorage3D(...arguments)}catch(U){Yt("WebGLState:",U)}}function M(){try{i.texImage2D(...arguments)}catch(U){Yt("WebGLState:",U)}}function Z(){try{i.texImage3D(...arguments)}catch(U){Yt("WebGLState:",U)}}function gt(U){return _[U]!==void 0?_[U]:i.getParameter(U)}function dt(U,at){_[U]!==at&&(i.pixelStorei(U,at),_[U]=at)}function Mt(U){ht.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ht.copy(U))}function At(U){Tt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Tt.copy(U))}function rt(U,at){let nt=h.get(at);nt===void 0&&(nt=new WeakMap,h.set(at,nt));let Et=nt.get(U);Et===void 0&&(Et=i.getUniformBlockIndex(at,U.name),i.uniformBlockBinding(at,Et,Et),nt.set(U,Et))}function lt(U,at,nt){let yt=h.get(at).get(U);c[yt]!==nt&&(i.bindBufferBase(i.UNIFORM_BUFFER,yt,nt),c[yt]=nt)}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},_={},ft=null,mt={},p={},c={},d=new WeakMap,g=[],E=null,m=!1,f=null,S=null,D=null,w=null,A=null,C=null,x=null,b=new $t(0,0,0),H=0,F=!1,W=null,Y=null,K=null,B=null,$=null,ht.set(0,0,i.canvas.width,i.canvas.height),Tt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xt,disable:Wt,bindFramebuffer:ue,drawBuffers:Gt,useProgram:Qt,setBlending:be,setMaterial:fe,setFlipSided:De,setCullFace:de,setLineWidth:pe,setPolygonOffset:Ae,setScissorTest:Be,activeTexture:Je,bindTexture:$e,unbindTexture:q,compressedTexImage2D:Ne,compressedTexImage3D:ae,texImage2D:M,texImage3D:Z,pixelStorei:dt,getParameter:gt,updateUBOMapping:rt,uniformBlockBinding:lt,texStorage2D:zt,texStorage3D:L,texSubImage2D:me,texSubImage3D:St,compressedTexSubImage2D:ge,compressedTexSubImage3D:Bt,scissor:Mt,viewport:At,reset:bt}}function rg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ot,u=new WeakMap,_=new Set,p,d=new WeakMap,g=new Set,E=new FinalizationRegistry(L=>g.delete(L)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(L,M){return m?new OffscreenCanvas(L,M):Hs("canvas")}function S(L,M,Z){let gt=1,dt=zt(L);if((dt.width>Z||dt.height>Z)&&(gt=Z/Math.max(dt.width,dt.height)),gt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let Mt=Math.floor(gt*dt.width),At=Math.floor(gt*dt.height);p===void 0&&(p=f(Mt,At));let rt=M?f(Mt,At):p;return rt.width=Mt,rt.height=At,rt.getContext("2d").drawImage(L,0,0,Mt,At),Xt("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+Mt+"x"+At+")."),rt}else return"data"in L&&Xt("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),L;return L}function D(L){return L.generateMipmaps}function w(L){i.generateMipmap(L)}function A(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(L,M,Z,gt,dt,Mt=!1){if(L!==null){if(i[L]!==void 0)return i[L];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let At;gt&&(At=t.get("EXT_texture_norm16"),At||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=M;if(M===i.RED&&(Z===i.FLOAT&&(rt=i.R32F),Z===i.HALF_FLOAT&&(rt=i.R16F),Z===i.UNSIGNED_BYTE&&(rt=i.R8),Z===i.UNSIGNED_SHORT&&At&&(rt=At.R16_EXT),Z===i.SHORT&&At&&(rt=At.R16_SNORM_EXT)),M===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(rt=i.R8UI),Z===i.UNSIGNED_SHORT&&(rt=i.R16UI),Z===i.UNSIGNED_INT&&(rt=i.R32UI),Z===i.BYTE&&(rt=i.R8I),Z===i.SHORT&&(rt=i.R16I),Z===i.INT&&(rt=i.R32I)),M===i.RG&&(Z===i.FLOAT&&(rt=i.RG32F),Z===i.HALF_FLOAT&&(rt=i.RG16F),Z===i.UNSIGNED_BYTE&&(rt=i.RG8),Z===i.UNSIGNED_SHORT&&At&&(rt=At.RG16_EXT),Z===i.SHORT&&At&&(rt=At.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(rt=i.RG8UI),Z===i.UNSIGNED_SHORT&&(rt=i.RG16UI),Z===i.UNSIGNED_INT&&(rt=i.RG32UI),Z===i.BYTE&&(rt=i.RG8I),Z===i.SHORT&&(rt=i.RG16I),Z===i.INT&&(rt=i.RG32I)),M===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),Z===i.UNSIGNED_INT&&(rt=i.RGB32UI),Z===i.BYTE&&(rt=i.RGB8I),Z===i.SHORT&&(rt=i.RGB16I),Z===i.INT&&(rt=i.RGB32I)),M===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),Z===i.UNSIGNED_INT&&(rt=i.RGBA32UI),Z===i.BYTE&&(rt=i.RGBA8I),Z===i.SHORT&&(rt=i.RGBA16I),Z===i.INT&&(rt=i.RGBA32I)),M===i.RGB&&(Z===i.UNSIGNED_SHORT&&At&&(rt=At.RGB16_EXT),Z===i.SHORT&&At&&(rt=At.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(rt=i.R11F_G11F_B10F)),M===i.RGBA){let lt=Mt?zs:se.getTransfer(dt);Z===i.FLOAT&&(rt=i.RGBA32F),Z===i.HALF_FLOAT&&(rt=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(rt=lt===ce?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&At&&(rt=At.RGBA16_EXT),Z===i.SHORT&&At&&(rt=At.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function x(L,M){let Z;return L?M===null||M===Rn||M===qi?Z=i.DEPTH24_STENCIL8:M===Cn?Z=i.DEPTH32F_STENCIL8:M===Ss&&(Z=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Rn||M===qi?Z=i.DEPTH_COMPONENT24:M===Cn?Z=i.DEPTH_COMPONENT32F:M===Ss&&(Z=i.DEPTH_COMPONENT16),Z}function b(L,M){return D(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ve&&L.minFilter!==en?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function H(L){let M=new WeakRef(L);n.get(L).__ref=M,g.add(M),E.register(L,M,M)}function F(L){let M=n.get(L).__ref;M!==void 0&&(g.delete(M),E.unregister(M))}function W(L){K(L.target)}function Y(L){B(L.target)}function K(L){L.removeEventListener("dispose",W),F(L),st(L),L.isVideoTexture&&u.delete(L),L.isHTMLTexture&&_.delete(L)}function B(L){L.removeEventListener("dispose",Y),F(L),_t(L)}function $(){for(let L of g){let M=L.deref();M!==void 0&&(M.isRenderTarget===!0?B(M):K(M))}g.clear(),_.clear()}function st(L){let M=n.get(L);if(M.__webglInit===void 0)return;let Z=L.source,gt=d.get(Z);if(gt){let dt=gt[M.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&tt(L),Object.keys(gt).length===0&&d.delete(Z)}n.remove(L)}function tt(L){let M=n.get(L);i.deleteTexture(M.__webglTexture);let Z=L.source,gt=d.get(Z);delete gt[M.__cacheKey],a.memory.textures--}function _t(L){let M=n.get(L);M.__depthDisposeCallback&&M.__depthDisposeCallback();let Z=L.depthTexture;if(Z&&Z.renderTarget===L&&K(Z),L.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(M.__webglFramebuffer[dt]))for(let Mt=0;Mt<M.__webglFramebuffer[dt].length;Mt++)i.deleteFramebuffer(M.__webglFramebuffer[dt][Mt]);else i.deleteFramebuffer(M.__webglFramebuffer[dt]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[dt])}else{if(Array.isArray(M.__webglFramebuffer))for(let dt=0;dt<M.__webglFramebuffer.length;dt++)i.deleteFramebuffer(M.__webglFramebuffer[dt]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let dt=0;dt<M.__webglColorRenderbuffer.length;dt++)M.__webglColorRenderbuffer[dt]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[dt]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let gt=L.textures;for(let dt=0,Mt=gt.length;dt<Mt;dt++){let At=n.get(gt[dt]);At.__webglTexture&&(i.deleteTexture(At.__webglTexture),a.memory.textures--),n.remove(gt[dt])}n.remove(L)}let z=0;function ft(){z=0}function mt(){return z}function Nt(L){z=L}function qt(){let L=z;return L>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,L}function ht(L){let M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.mipmapsAutoUpdate),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function Tt(L,M){let Z=n.get(L);if(L.isVideoTexture&&ge(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Z.__version!==L.version){let gt=L.image;if(gt===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(Z,L,M);return}}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+M)}function Lt(L,M){let Z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){fe(Z,L,M);return}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+M)}function Ct(L,M){let Z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){fe(Z,L,M);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+M)}function xt(L,M){let Z=n.get(L);if(L.version>0&&Z.__version!==L.version){De(Z,L,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+M)}let Wt={[Gr]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[kr]:i.MIRRORED_REPEAT},ue={[Ve]:i.NEAREST,[Ec]:i.NEAREST_MIPMAP_NEAREST,[tr]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[da]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},Gt={[Rc]:i.NEVER,[el]:i.ALWAYS,[Cc]:i.LESS,[Qo]:i.LEQUAL,[Pc]:i.EQUAL,[tl]:i.GEQUAL,[Ic]:i.GREATER,[Lc]:i.NOTEQUAL};function Qt(L,M){if(M.type===Cn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===en||M.magFilter===da||M.magFilter===tr||M.magFilter===ni||M.minFilter===en||M.minFilter===da||M.minFilter===tr||M.minFilter===ni)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,Wt[M.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Wt[M.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Wt[M.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,ue[M.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,ue[M.minFilter]),M.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Gt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ve||M.minFilter!==tr&&M.minFilter!==ni||M.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Kt(L,M){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",W),H(M));let gt=M.source,dt=d.get(gt);dt===void 0&&(dt={},d.set(gt,dt));let Mt=ht(M);if(Mt!==L.__cacheKey){dt[Mt]===void 0&&(dt[Mt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),dt[Mt].usedTimes++;let At=dt[L.__cacheKey];At!==void 0&&(dt[L.__cacheKey].usedTimes--,At.usedTimes===0&&tt(M)),L.__cacheKey=Mt,L.__webglTexture=dt[Mt].texture}return Z}function te(L,M,Z){return Math.floor(Math.floor(L/Z)/M)}function be(L,M,Z,gt){let Mt=L.updateRanges;if(Mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,Z,gt,M.data);else{Mt.sort((U,at)=>U.start-at.start);let At=0;for(let U=1;U<Mt.length;U++){let at=Mt[At],nt=Mt[U],Et=at.start+at.count,yt=te(nt.start,M.width,4),vt=te(at.start,M.width,4);nt.start<=Et+1&&yt===vt&&te(nt.start+nt.count-1,M.width,4)===yt?at.count=Math.max(at.count,nt.start+nt.count-at.start):(++At,Mt[At]=nt)}Mt.length=At+1;let rt=e.getParameter(i.UNPACK_ROW_LENGTH),lt=e.getParameter(i.UNPACK_SKIP_PIXELS),bt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let U=0,at=Mt.length;U<at;U++){let nt=Mt[U],Et=Math.floor(nt.start/4),yt=Math.ceil(nt.count/4),vt=Et%M.width,Dt=Math.floor(Et/M.width),Ht=yt,ct=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Dt),e.texSubImage2D(i.TEXTURE_2D,0,vt,Dt,Ht,ct,Z,gt,M.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,rt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function fe(L,M,Z){let gt=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(gt=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(gt=i.TEXTURE_3D);let dt=Kt(L,M),Mt=M.source;e.bindTexture(gt,L.__webglTexture,i.TEXTURE0+Z);let At=n.get(Mt);if(Mt.version!==At.__version||dt===!0){if(e.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let ct=se.getPrimaries(se.workingColorSpace),Ut=M.colorSpace===si?null:se.getPrimaries(M.colorSpace),Zt=M.colorSpace===si||ct===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let lt=S(M.image,!1,s.maxTextureSize);lt=Bt(M,lt);let bt=r.convert(M.format,M.colorSpace),U=r.convert(M.type),at=C(M.internalFormat,bt,U,M.normalized,M.colorSpace,M.isVideoTexture);Qt(gt,M);let nt,Et=M.mipmaps,yt=M.isVideoTexture!==!0,vt=At.__version===void 0||dt===!0,Dt=Mt.dataReady,Ht=b(M,lt);if(M.isDepthTexture)at=x(M.format===ii,M.type),vt&&(yt?e.texStorage2D(i.TEXTURE_2D,1,at,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,at,lt.width,lt.height,0,bt,U,null));else if(M.isDataTexture)if(Et.length>0){yt&&vt&&e.texStorage2D(i.TEXTURE_2D,Ht,at,Et[0].width,Et[0].height);for(let ct=0,Ut=Et.length;ct<Ut;ct++)nt=Et[ct],yt?Dt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,nt.width,nt.height,bt,U,nt.data):e.texImage2D(i.TEXTURE_2D,ct,at,nt.width,nt.height,0,bt,U,nt.data);M.generateMipmaps=!1}else yt?(vt&&e.texStorage2D(i.TEXTURE_2D,Ht,at,lt.width,lt.height),Dt&&be(M,lt,bt,U)):e.texImage2D(i.TEXTURE_2D,0,at,lt.width,lt.height,0,bt,U,lt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){yt&&vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,at,Et[0].width,Et[0].height,lt.depth);for(let ct=0,Ut=Et.length;ct<Ut;ct++)if(nt=Et[ct],M.format!==In)if(bt!==null)if(yt){if(Dt)if(M.layerUpdates.size>0){let Zt=hl(nt.width,nt.height,M.format,M.type);for(let Rt of M.layerUpdates){let jt=nt.data.subarray(Rt*Zt/nt.data.BYTES_PER_ELEMENT,(Rt+1)*Zt/nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,Rt,nt.width,nt.height,1,bt,jt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,nt.width,nt.height,lt.depth,bt,nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,at,nt.width,nt.height,lt.depth,0,nt.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else yt?Dt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,nt.width,nt.height,lt.depth,bt,U,nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,at,nt.width,nt.height,lt.depth,0,bt,U,nt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{yt&&vt&&e.texStorage2D(i.TEXTURE_2D,Ht,at,Et[0].width,Et[0].height);for(let ct=0,Ut=Et.length;ct<Ut;ct++)nt=Et[ct],M.format!==In?bt!==null?yt?Dt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,nt.width,nt.height,bt,nt.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,at,nt.width,nt.height,0,nt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?Dt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,nt.width,nt.height,bt,U,nt.data):e.texImage2D(i.TEXTURE_2D,ct,at,nt.width,nt.height,0,bt,U,nt.data)}else if(M.isDataArrayTexture)if(yt){if(vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,at,lt.width,lt.height,lt.depth),Dt)if(M.layerUpdates.size>0){let ct=hl(lt.width,lt.height,M.format,M.type);for(let Ut of M.layerUpdates){let Zt=lt.data.subarray(Ut*ct/lt.data.BYTES_PER_ELEMENT,(Ut+1)*ct/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ut,lt.width,lt.height,1,bt,U,Zt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,bt,U,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,at,lt.width,lt.height,lt.depth,0,bt,U,lt.data);else if(M.isData3DTexture)yt?(vt&&e.texStorage3D(i.TEXTURE_3D,Ht,at,lt.width,lt.height,lt.depth),Dt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,bt,U,lt.data)):e.texImage3D(i.TEXTURE_3D,0,at,lt.width,lt.height,lt.depth,0,bt,U,lt.data);else if(M.isFramebufferTexture){if(vt)if(yt)e.texStorage2D(i.TEXTURE_2D,Ht,at,lt.width,lt.height);else{let ct=lt.width,Ut=lt.height;for(let Zt=0;Zt<Ht;Zt++)e.texImage2D(i.TEXTURE_2D,Zt,at,ct,Ut,0,bt,U,null),ct>>=1,Ut>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let ct=i.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),lt.parentNode!==ct){ct.appendChild(lt),_.add(M),ct.onpaint=Ut=>{let Zt=Ut.changedElements;for(let Rt of _)Zt.includes(Rt.image)&&(Rt.needsUpdate=!0)},ct.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,lt);else{let Zt=i.RGBA,Rt=i.RGBA,jt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Zt,Rt,jt,lt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Et.length>0){if(yt&&vt){let ct=zt(Et[0]);e.texStorage2D(i.TEXTURE_2D,Ht,at,ct.width,ct.height)}for(let ct=0,Ut=Et.length;ct<Ut;ct++)nt=Et[ct],yt?Dt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,bt,U,nt):e.texImage2D(i.TEXTURE_2D,ct,at,bt,U,nt);M.generateMipmaps=!1}else if(yt){if(vt){let ct=zt(lt);e.texStorage2D(i.TEXTURE_2D,Ht,at,ct.width,ct.height)}Dt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,U,lt)}else e.texImage2D(i.TEXTURE_2D,0,at,bt,U,lt);D(M)&&M.mipmapsAutoUpdate===!0&&w(gt),At.__version=Mt.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function De(L,M,Z){if(M.image.length!==6)return;let gt=Kt(L,M),dt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+Z);let Mt=n.get(dt);if(dt.version!==Mt.__version||gt===!0){e.activeTexture(i.TEXTURE0+Z);let At=se.getPrimaries(se.workingColorSpace),rt=M.colorSpace===si?null:se.getPrimaries(M.colorSpace),lt=M.colorSpace===si||At===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let bt=M.isCompressedTexture||M.image[0].isCompressedTexture,U=M.image[0]&&M.image[0].isDataTexture,at=[];for(let Rt=0;Rt<6;Rt++)!bt&&!U?at[Rt]=S(M.image[Rt],!0,s.maxCubemapSize):at[Rt]=U?M.image[Rt].image:M.image[Rt],at[Rt]=Bt(M,at[Rt]);let nt=at[0],Et=r.convert(M.format,M.colorSpace),yt=r.convert(M.type),vt=C(M.internalFormat,Et,yt,M.normalized,M.colorSpace),Dt=M.isVideoTexture!==!0,Ht=Mt.__version===void 0||gt===!0,ct=dt.dataReady,Ut=b(M,nt);Qt(i.TEXTURE_CUBE_MAP,M);let Zt;if(M.isDepthTexture){if(vt=x(M.format===ii,M.type),Ht)if(Dt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,vt,nt.width,nt.height);else for(let Rt=0;Rt<6;Rt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,vt,nt.width,nt.height,0,Et,yt,null)}else if(bt){Dt&&Ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,vt,nt.width,nt.height);for(let Rt=0;Rt<6;Rt++){Zt=at[Rt].mipmaps;for(let jt=0;jt<Zt.length;jt++){let Me=Zt[jt];M.format!==In?Et!==null?Dt?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,jt,0,0,Me.width,Me.height,Et,Me.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,jt,vt,Me.width,Me.height,0,Me.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,jt,0,0,Me.width,Me.height,Et,yt,Me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,jt,vt,Me.width,Me.height,0,Et,yt,Me.data)}}}else{if(Zt=M.mipmaps,Dt&&Ht){Zt.length>0&&Ut++;let Rt=zt(at[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,vt,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(U){Dt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,at[Rt].width,at[Rt].height,Et,yt,at[Rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,vt,at[Rt].width,at[Rt].height,0,Et,yt,at[Rt].data);for(let jt=0;jt<Zt.length;jt++){let ze=Zt[jt].image[Rt].image;Dt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,jt+1,0,0,ze.width,ze.height,Et,yt,ze.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,jt+1,vt,ze.width,ze.height,0,Et,yt,ze.data)}}else{Dt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Et,yt,at[Rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,vt,Et,yt,at[Rt]);for(let jt=0;jt<Zt.length;jt++){let Me=Zt[jt];Dt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,jt+1,0,0,Et,yt,Me.image[Rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,jt+1,vt,Et,yt,Me.image[Rt])}}}D(M)&&M.mipmapsAutoUpdate===!0&&w(i.TEXTURE_CUBE_MAP),Mt.__version=dt.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function de(L,M,Z,gt,dt,Mt){let At=r.convert(Z.format,Z.colorSpace),rt=r.convert(Z.type),lt=C(Z.internalFormat,At,rt,Z.normalized,Z.colorSpace),bt=n.get(M),U=n.get(Z);if(U.__renderTarget=M,!bt.__hasExternalTextures){let at=Math.max(1,M.width>>Mt),nt=Math.max(1,M.height>>Mt);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,Mt,lt,at,nt,M.depth,0,At,rt,null):e.texImage2D(dt,Mt,lt,at,nt,0,At,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),St(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,dt,U.__webglTexture,0,me(M)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,gt,dt,U.__webglTexture,Mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(L,M,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,L),M.depthBuffer){let gt=M.depthTexture,dt=gt&&gt.isDepthTexture?gt.type:null,Mt=x(M.stencilBuffer,dt),At=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;St(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(M),Mt,M.width,M.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(M),Mt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,L)}else{let gt=M.textures;for(let dt=0;dt<gt.length;dt++){let Mt=gt[dt],At=r.convert(Mt.format,Mt.colorSpace),rt=r.convert(Mt.type),lt=C(Mt.internalFormat,At,rt,Mt.normalized,Mt.colorSpace);St(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(M),lt,M.width,M.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(M),lt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,lt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(L,M,Z){let gt=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let dt=n.get(M.depthTexture);dt.__renderTarget=M;let Mt=gt?M.depthTexture.image[0]:M.depthTexture.image;(!dt.__webglTexture||Mt.width!==M.width||Mt.height!==M.height)&&(Mt.width=M.width,Mt.height=M.height,M.depthTexture.needsUpdate=!0),gt?xt(M.depthTexture,0):Tt(M.depthTexture,0);let At=dt.__webglTexture,rt=me(M),lt=gt?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,bt=M.depthTexture.format===ii?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===$n)St(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,bt,lt,At,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,bt,lt,At,0);else if(M.depthTexture.format===ii)St(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,bt,lt,At,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,bt,lt,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Be(L){let M=n.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){let gt=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),gt){let dt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,gt.removeEventListener("dispose",dt)};gt.addEventListener("dispose",dt),M.__depthDisposeCallback=dt}M.__boundDepthTexture=gt}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(Z)for(let gt=0;gt<6;gt++)Ae(M.__webglFramebuffer[gt],L,gt);else L.texture.mipmaps.length>0?Ae(M.__webglFramebuffer[0],L,0):Ae(M.__webglFramebuffer,L,0);else if(Z){M.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[gt]),M.__webglDepthbuffer[gt]===void 0)M.__webglDepthbuffer[gt]=i.createRenderbuffer(),pe(M.__webglDepthbuffer[gt],L,!1);else{let dt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=M.__webglDepthbuffer[gt];i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,Mt)}}else if(L.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),pe(M.__webglDepthbuffer,L,!1);else{let dt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,Mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(L,M,Z){let gt=n.get(L);M!==void 0&&de(gt.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Be(L)}function $e(L){let M=L.texture,Z=n.get(L),gt=n.get(M);L.addEventListener("dispose",Y),H(L);let dt=L.textures,Mt=L.isWebGLCubeRenderTarget===!0,At=dt.length>1;if(At||(gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture()),gt.__version=M.version,a.memory.textures++),Mt){Z.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(M.mipmaps.length>0){Z.__webglFramebuffer[rt]=[];for(let lt=0;lt<M.mipmaps.length;lt++)Z.__webglFramebuffer[rt][lt]=i.createFramebuffer()}else Z.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(M.mipmaps.length>0){Z.__webglFramebuffer=[];for(let rt=0;rt<M.mipmaps.length;rt++)Z.__webglFramebuffer[rt]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(At)for(let rt=0,lt=dt.length;rt<lt;rt++){let bt=n.get(dt[rt]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&St(L)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let rt=0;rt<dt.length;rt++){let lt=dt[rt];Z.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[rt]);let bt=r.convert(lt.format,lt.colorSpace),U=r.convert(lt.type),at=C(lt.internalFormat,bt,U,lt.normalized,lt.colorSpace,L.isXRRenderTarget===!0),nt=me(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,at,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,Z.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(Z.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Mt){e.bindTexture(i.TEXTURE_CUBE_MAP,gt.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,M);for(let rt=0;rt<6;rt++)if(M.mipmaps.length>0)for(let lt=0;lt<M.mipmaps.length;lt++)de(Z.__webglFramebuffer[rt][lt],L,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,lt);else de(Z.__webglFramebuffer[rt],L,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);D(M)?w(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(At){for(let rt=0,lt=dt.length;rt<lt;rt++){let bt=dt[rt],U=n.get(bt),at=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(at=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,U.__webglTexture),Qt(at,bt),de(Z.__webglFramebuffer,L,bt,i.COLOR_ATTACHMENT0+rt,at,0),D(bt)&&w(at)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(rt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,gt.__webglTexture),Qt(rt,M),M.mipmaps.length>0)for(let lt=0;lt<M.mipmaps.length;lt++)de(Z.__webglFramebuffer[lt],L,M,i.COLOR_ATTACHMENT0,rt,lt);else de(Z.__webglFramebuffer,L,M,i.COLOR_ATTACHMENT0,rt,0);D(M)?w(rt):M.mipmaps.length>0&&i.texParameteri(rt,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}L.depthBuffer&&Be(L)}function q(L){let M=L.textures;for(let Z=0,gt=M.length;Z<gt;Z++){let dt=M[Z];if(D(dt)&&dt.mipmapsAutoUpdate===!0){let Mt=A(L),At=n.get(dt).__webglTexture;e.bindTexture(Mt,At),w(Mt),e.unbindTexture()}}}let Ne=[];function ae(L){if(L.samples>0){if(St(L)===!1){let M=L.textures,Z=L.width,gt=L.height,dt=i.COLOR_BUFFER_BIT,Mt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(L),rt=M.length>1;if(rt)for(let bt=0;bt<M.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let bt=0;bt<M.length;bt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);let U=n.get(M[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,U,0)}i.blitFramebuffer(0,0,Z,gt,0,0,Z,gt,dt,i.NEAREST),c===!0&&(Ne.length=0,Ne.push(i.COLOR_ATTACHMENT0+bt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&Ne.push(Mt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ne))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let bt=0;bt<M.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);let U=n.get(M[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,U,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){let M=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function me(L){return Math.min(s.maxSamples,L.samples)}function St(L){let M=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ge(L){let M=a.render.frame;u.get(L)!==M&&(u.set(L,M),L.update())}function Bt(L,M){let Z=L.colorSpace,gt=L.format,dt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==Bs&&Z!==si&&(se.getTransfer(Z)===ce?(gt!==In||dt!==cn)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",Z)),M}function zt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=qt,this.resetTextureUnits=ft,this.getTextureUnits=mt,this.setTextureUnits=Nt,this.setTexture2D=Tt,this.setTexture2DArray=Lt,this.setTexture3D=Ct,this.setTextureCube=xt,this.rebindTextures=Je,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=de,this.useMultisampledRTT=St,this.dispose=$}function ag(i,t){function e(n,s=si){let r,a=se.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ma)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qo)return i.BYTE;if(n===Yo)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===fa)return i.INT;if(n===Rn)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Pn)return i.HALF_FLOAT;if(n===$o)return i.ALPHA;if(n===Ko)return i.RGB;if(n===In)return i.RGBA;if(n===$n)return i.DEPTH_COMPONENT;if(n===ii)return i.DEPTH_STENCIL;if(n===jo)return i.RED;if(n===ga)return i.RED_INTEGER;if(n===Si)return i.RG;if(n===_a)return i.RG_INTEGER;if(n===xa)return i.RGBA_INTEGER;if(n===er||n===nr||n===ir||n===sr)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ya||n===va||n===Ma||n===Sa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ba||n===Ea||n===wa||n===Ta||n===Aa||n===rr||n===Ra)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ba||n===Ea)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wa)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ta)return r.COMPRESSED_R11_EAC;if(n===Aa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===rr)return r.COMPRESSED_RG11_EAC;if(n===Ra)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ca||n===Pa||n===Ia||n===La||n===Da||n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===za||n===Ha||n===Ga||n===ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ca)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ia)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===La)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Na)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fa)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oa)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ba)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ha)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ga)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Va||n===Wa||n===Xa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Va)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qa||n===Ya||n===ar||n===Za)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ar)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var og=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lg=`
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

}`,El=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new qs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ln({vertexShader:og,fragmentShader:lg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Te(new Zs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wl=class extends An{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,_=null,p=null,d=null,g=null,E=typeof XRWebGLBinding<"u",m=new El,f={},S=e.getContextAttributes(),D=null,w=null,A=[],C=[],x=new Ot,b=null,H=null,F=new ke;F.viewport=new we;let W=new ke;W.viewport=new we;let Y=[F,W],K=new la,B=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ht){let Tt=A[ht];return Tt===void 0&&(Tt=new ps,A[ht]=Tt),Tt.getTargetRaySpace()},this.getControllerGrip=function(ht){let Tt=A[ht];return Tt===void 0&&(Tt=new ps,A[ht]=Tt),Tt.getGripSpace()},this.getHand=function(ht){let Tt=A[ht];return Tt===void 0&&(Tt=new ps,A[ht]=Tt),Tt.getHandSpace()};function st(ht){let Tt=C.indexOf(ht.inputSource);if(Tt===-1)return;let Lt=A[Tt];Lt!==void 0&&(Lt.update(ht.inputSource,ht.frame,h||a),Lt.dispatchEvent({type:ht.type,data:ht.inputSource}))}function tt(){s.removeEventListener("select",st),s.removeEventListener("selectstart",st),s.removeEventListener("selectend",st),s.removeEventListener("squeeze",st),s.removeEventListener("squeezestart",st),s.removeEventListener("squeezeend",st),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",_t);for(let ht=0;ht<A.length;ht++){let Tt=C[ht];Tt!==null&&(C[ht]=null,A[ht].disconnect(Tt))}B=null,$=null,m.reset();for(let ht in f)delete f[ht];if(t.setRenderTarget(D),d=null,p=null,_=null,s=null,w=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),H!==null){let ht=H.camera;ht.fov=H.fov,ht.zoom=H.zoom,ht.updateProjectionMatrix(),H=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ht){r=ht,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ht){o=ht,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(ht){h=ht},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return _===null&&E&&(_=new XRWebGLBinding(s,e)),_},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ht){if(s=ht,s!==null){if(D=t.getRenderTarget(),s.addEventListener("select",st),s.addEventListener("selectstart",st),s.addEventListener("selectend",st),s.addEventListener("squeeze",st),s.addEventListener("squeezestart",st),s.addEventListener("squeezeend",st),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",_t),S.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,Ct=null,xt=null;S.depth&&(xt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Lt=S.stencil?ii:$n,Ct=S.stencil?qi:Rn);let Wt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};_=this.getBinding(),p=_.createProjectionLayer(Wt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),w=new mn(p.textureWidth,p.textureHeight,{format:In,type:cn,depthTexture:new jn(p.textureWidth,p.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let Lt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Lt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new mn(d.framebufferWidth,d.framebufferHeight,{format:In,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function _t(ht){for(let Tt=0;Tt<ht.removed.length;Tt++){let Lt=ht.removed[Tt],Ct=C.indexOf(Lt);Ct>=0&&(C[Ct]=null,A[Ct].disconnect(Lt))}for(let Tt=0;Tt<ht.added.length;Tt++){let Lt=ht.added[Tt],Ct=C.indexOf(Lt);if(Ct===-1){for(let Wt=0;Wt<A.length;Wt++)if(Wt>=C.length){C.push(Lt),Ct=Wt;break}else if(C[Wt]===null){C[Wt]=Lt,Ct=Wt;break}if(Ct===-1)break}let xt=A[Ct];xt&&xt.connect(Lt)}}function z(ht,Tt){Tt===null?ht.matrixWorld.copy(ht.matrix):ht.matrixWorld.multiplyMatrices(Tt.matrixWorld,ht.matrix),ht.matrixWorldInverse.copy(ht.matrixWorld).invert()}this.updateCamera=function(ht){if(s===null)return;let Tt=ht.near,Lt=ht.far;m.texture!==null&&(m.depthNear>0&&(Tt=m.depthNear),m.depthFar>0&&(Lt=m.depthFar)),K.near=W.near=F.near=Tt,K.far=W.far=F.far=Lt,(B!==K.near||$!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),B=K.near,$=K.far),K.layers.mask=ht.layers.mask|6,F.layers.mask=K.layers.mask&-5,W.layers.mask=K.layers.mask&-3;let Ct=ht.parent,xt=K.cameras;z(K,Ct);for(let Wt=0;Wt<xt.length;Wt++)z(xt[Wt],Ct);K.projectionMatrix.copy(F.projectionMatrix),K.projectionMatrixInverse.copy(F.projectionMatrixInverse),H===null&&ht.isPerspectiveCamera&&(H={camera:ht,fov:ht.fov,zoom:ht.zoom}),ft(ht,K,Ct)};function ft(ht,Tt,Lt){Lt===null?ht.matrix.copy(Tt.matrixWorld):(ht.matrix.copy(Lt.matrixWorld),ht.matrix.invert(),ht.matrix.multiply(Tt.matrixWorld)),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.updateMatrixWorld(!0),ht.projectionMatrix.copy(Tt.projectionMatrix),ht.projectionMatrixInverse.copy(Tt.projectionMatrixInverse),ht.isPerspectiveCamera&&(ht.fov=us*2*Math.atan(1/ht.projectionMatrix.elements[5]),ht.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(p===null&&d===null))return c},this.setFoveation=function(ht){c=ht,p!==null&&(p.fixedFoveation=ht),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ht)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(K)},this.getCameraTexture=function(ht){return f[ht]};let mt=null;function Nt(ht,Tt){if(u=Tt.getViewerPose(h||a),g=Tt,u!==null){let Lt=u.views;d!==null&&(t.setRenderTargetFramebuffer(w,d.framebuffer),t.setRenderTarget(w));let Ct=!1;Lt.length!==K.cameras.length&&(K.cameras.length=0,Ct=!0);for(let Gt=0;Gt<Lt.length;Gt++){let Qt=Lt[Gt],Kt=null;if(d!==null)Kt=d.getViewport(Qt);else{let be=_.getViewSubImage(p,Qt);Kt=be.viewport,Gt===0&&(t.setRenderTargetTextures(w,be.colorTexture,be.depthStencilTexture),t.setRenderTarget(w))}let te=Y[Gt];te===void 0&&(te=new ke,te.layers.enable(Gt),te.viewport=new we,Y[Gt]=te),te.matrix.fromArray(Qt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Qt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Gt===0&&(K.matrix.copy(te.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ct===!0&&K.cameras.push(te)}let xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){_=n.getBinding();let Gt=_.getDepthInformation(Lt[0]);Gt&&Gt.isValid&&Gt.texture&&m.init(Gt,s.renderState)}if(xt&&xt.includes("camera-access")&&E){t.state.unbindTexture(),_=n.getBinding();for(let Gt=0;Gt<Lt.length;Gt++){let Qt=Lt[Gt].camera;if(Qt){let Kt=f[Qt];Kt||(Kt=new qs,f[Qt]=Kt);let te=_.getCameraImage(Qt);Kt.sourceTexture=te}}}}for(let Lt=0;Lt<A.length;Lt++){let Ct=C[Lt],xt=A[Lt];Ct!==null&&xt!==void 0&&xt.update(Ct,Tt,h||a)}mt&&mt(ht,Tt),Tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Tt}),g=null}let qt=new uh;qt.setAnimationLoop(Nt),this.setAnimationLoop=function(ht){mt=ht},this.dispose=function(){}}},cg=new he,Mh=new Jt;Mh.set(-1,0,0,0,1,0,0,0,1);function hg(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ol(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,D,w){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),_(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,w)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),E(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,S,D):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ze&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ze&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=t.get(f),D=S.envMap,w=S.envMapRotation;D&&(m.envMap.value=D,m.envMapRotation.value.setFromMatrix4(cg.makeRotationFromEuler(w)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Mh),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,S,D){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=D*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function _(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,S){m.ior.value=f.ior,f.diffuseRoughness>0&&(m.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=f.diffuseRoughnessMap,e(f.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ze&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function E(m,f){let S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ug(i,t,e,n){let s={},r={};function a(S,D){let w=D.program;n.uniformBlockBinding(S,w,s[S.id])}function o(S,D){let w=s[S.id];w===void 0&&(g(S),w=c(S),s[S.id]=w,S.addEventListener("dispose",m));let A=D.program;n.updateUBOMapping(S,A);let C=t.render.frame;r[S.id]!==C&&(h(S),r[S.id]=C)}function c(S){let D=i.createBuffer(),w=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),D}function h(S){let D=s[S.id],w=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let C=0,x=w.length;C<x;C++){let b=w[C];if(Array.isArray(b))for(let H=0,F=b.length;H<F;H++)u(b[H],C,H,A);else u(b,C,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(S,D,w,A){if(p(S,D,w,A)===!0){let C=S.__offset,x=S.value;if(Array.isArray(x)){let b=0;for(let H=0;H<x.length;H++){let F=x[H],W=E(F,!0);_(F,S.__data,b),b+=W.storage/Float32Array.BYTES_PER_ELEMENT}}else _(x,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,C,S.__data)}}function _(S,D,w){typeof S=="number"||typeof S=="boolean"?D[w]=S:S.isMatrix3?(D[w]=S.elements[0],D[w+1]=S.elements[1],D[w+2]=S.elements[2],D[w+3]=0,D[w+4]=S.elements[3],D[w+5]=S.elements[4],D[w+6]=S.elements[5],D[w+7]=0,D[w+8]=S.elements[6],D[w+9]=S.elements[7],D[w+10]=S.elements[8],D[w+11]=0):ArrayBuffer.isView(S)?D.set(S.subarray(0,D.length-w),w):S.toArray(D,w)}function p(S,D,w,A){let C=S.value,x=D+"_"+w;if(Array.isArray(C)){A[x]===void 0&&(A[x]=[]);let b=A[x],H=!1;for(let F=0;F<C.length;F++)d(C[F],b,F)===!0&&(H=!0);return H}return d(C,A,x)}function d(S,D,w){if(D[w]===void 0)return typeof S=="number"||typeof S=="boolean"?D[w]=S:ArrayBuffer.isView(S)?D[w]=S.slice():D[w]=S.clone(),!0;{let A=D[w];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return D[w]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(A.equals(S)===!1)return A.copy(S),!0}}return!1}function g(S){let D=S.uniforms,w=0,A=16;for(let x=0,b=D.length;x<b;x++){let H=Array.isArray(D[x])?D[x]:[D[x]];for(let F=0,W=H.length;F<W;F++){let Y=H[F],K=Array.isArray(Y.value)?Y.value:[Y.value],B=Array.isArray(D[x])||Array.isArray(Y.value),$=w;for(let tt=0,_t=K.length;tt<_t;tt++){let z=K[tt],ft=E(z,B),mt=w%A,Nt=mt%ft.boundary,qt=mt+Nt;w+=Nt,qt!==0&&A-qt<ft.storage&&(w+=A-qt),tt===0&&($=w),w+=ft.storage}let st=Y.type==="int"?Int32Array:Y.type==="uint"?Uint32Array:Float32Array;Y.__data=new st((w-$)/Float32Array.BYTES_PER_ELEMENT),Y.__offset=$}}let C=w%A;return C>0&&(w+=A-C),S.__size=w,S.__cache={},this}function E(S,D){let w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=16,w.storage=48):S.isMatrix4?(w.boundary=16,w.storage=64):S.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",S),D===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}function m(S){let D=S.target;D.removeEventListener("dispose",m),i.deleteBuffer(s[D.id]),delete s[D.id],delete r[D.id]}function f(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:f}}var dg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gn=null;function fg(){return Gn===null&&(Gn=new Yr(dg,16,16,Si,Pn),Gn.name="DFG_LUT",Gn.minFilter=en,Gn.magFilter=en,Gn.wrapS=Bn,Gn.wrapT=Bn,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}var ws=class{constructor(t={}){let{canvas:e=Nc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:p=!1,outputBufferType:d=cn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let E=d,m=new Set([xa,_a,ga]),f=new Set([cn,Rn,Ss,qi,pa,ma]),S=new Uint32Array(4),D=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]},A=null,C=null,x=[],b=[],H=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,W=!1,Y=null,K=null,B=null,$=null;this._outputColorSpace=Ye;let st=0,tt=0,_t=null,z=-1,ft=null,mt=new we,Nt=new we,qt=null,ht=new $t(0),Tt=0,Lt=e.width,Ct=e.height,xt=1,Wt=null,ue=null,Gt=new we(0,0,Lt,Ct),Qt=new we(0,0,Lt,Ct),Kt=!1,te=new pi,be=new Zr,fe=!1,De=!1,de=new he,pe=new X,Ae=new we,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Je=!1;function $e(){return _t===null?xt:1}let q=n;function Ne(l,v){return e.getContext(l,v)}let ae,me,St,ge,Bt,zt,L,M,Z,gt,dt,Mt,At,rt,lt,bt,U,at,nt,Et,yt,vt,Dt;try{let l={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ut,!1),e.addEventListener("webglcontextrestored",Zt,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),q===null){let v="webgl2";if(q=Ne(v,l),q===null)throw Ne(v)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(l){throw e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),Yt("WebGLRenderer: "+l.message),l}function Ht(){ae=new Ep(q),ae.init(),yt=new ag(q,ae),me=new fp(q,ae,t,yt),St=new sg(q,ae),me.reversedDepthBuffer&&p&&St.buffers.depth.setReversed(!0),K=q.createFramebuffer(),B=q.createFramebuffer(),$=q.createFramebuffer(),ge=new Ap(q),Bt=new Wm,zt=new rg(q,ae,St,Bt,me,yt,ge),L=new bp(F),M=new Ru(q),vt=new up(q,M),Z=new wp(q,M,ge,vt),gt=new Cp(q,Z,M,vt,ge),at=new Rp(q,me,zt),lt=new pp(Bt),dt=new Vm(F,L,ae,me,vt,lt),Mt=new hg(F,Bt),At=new qm,rt=new jm(ae),U=new hp(F,L,St,gt,g,c),bt=new ig(F,gt,me),Dt=new ug(q,ge,me,St),nt=new dp(q,ae,ge),Et=new Tp(q,ae,ge),ge.programs=dt.programs,F.capabilities=me,F.extensions=ae,F.properties=Bt,F.renderLists=At,F.shadowMap=bt,F.state=St,F.info=ge}E!==cn&&(H=new Ip(E,e.width,e.height,o,s,r));let ct=new wl(F,q);this.xr=ct,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let l=ae.get("WEBGL_lose_context");l&&l.loseContext()},this.forceContextRestore=function(){let l=ae.get("WEBGL_lose_context");l&&l.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(l){l!==void 0&&(xt=l,this.setSize(Lt,Ct,!1))},this.getSize=function(l){return l.set(Lt,Ct)},this.setSize=function(l,v,T=!0){if(ct.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}Lt=l,Ct=v,e.width=Math.floor(l*xt),e.height=Math.floor(v*xt),T===!0&&(e.style.width=l+"px",e.style.height=v+"px"),H!==null&&H.setSize(e.width,e.height),this.setViewport(0,0,l,v)},this.getDrawingBufferSize=function(l){return l.set(Lt*xt,Ct*xt).floor()},this.setDrawingBufferSize=function(l,v,T){Lt=l,Ct=v,xt=T,e.width=Math.floor(l*T),e.height=Math.floor(v*T),this.setViewport(0,0,l,v)},this.setEffects=function(l){if(E===cn){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(l){for(let v=0;v<l.length;v++)if(l[v].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}H.setEffects(l||[])},this.getCurrentViewport=function(l){return l.copy(mt)},this.getViewport=function(l){return l.copy(Gt)},this.setViewport=function(l,v,T,R){l.isVector4?Gt.set(l.x,l.y,l.z,l.w):Gt.set(l,v,T,R),St.viewport(mt.copy(Gt).multiplyScalar($e()).round())},this.getScissor=function(l){return l.copy(Qt)},this.setScissor=function(l,v,T,R){l.isVector4?Qt.set(l.x,l.y,l.z,l.w):Qt.set(l,v,T,R),St.scissor(Nt.copy(Qt).multiplyScalar($e()).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(l){St.setScissorTest(Kt=l)},this.setOpaqueSort=function(l){Wt=l},this.setTransparentSort=function(l){ue=l},this.getClearColor=function(l){return l.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(l=!0,v=!0,T=!0){let R=0;if(l){let N=!1;if(_t!==null){let V=_t.texture.format;N=m.has(V)}if(N){let V=_t.texture.type,k=f.has(V),Q=U.getClearColor(),ut=U.getClearAlpha(),y=Q.r,I=Q.g,P=Q.b;k?(S[0]=y,S[1]=I,S[2]=P,S[3]=ut,q.clearBufferuiv(q.COLOR,0,S)):(D[0]=y,D[1]=I,D[2]=P,D[3]=ut,q.clearBufferiv(q.COLOR,0,D))}else R|=q.COLOR_BUFFER_BIT}v&&(R|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),T&&(R|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R!==0&&q.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(l){l.setRenderer(this),Y=l},this.dispose=function(){e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",Zt,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),U.dispose(),At.dispose(),rt.dispose(),zt.dispose(),Bt.dispose(),L.dispose(),gt.dispose(),Z.dispose(),vt.dispose(),Dt.dispose(),dt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Vn),ct.removeEventListener("sessionend",ye),sn.stop()};function Ut(l){l.preventDefault(),il("WebGLRenderer: Context Lost."),W=!0}function Zt(){il("WebGLRenderer: Context Restored."),W=!1;let l=ge.autoReset,v=bt.enabled,T=bt.autoUpdate,R=bt.needsUpdate,N=bt.type;Ht(),ge.autoReset=l,bt.enabled=v,bt.autoUpdate=T,bt.needsUpdate=R,bt.type=N}function Rt(l){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",l.statusMessage)}function jt(l){let v=l.target;v.removeEventListener("dispose",jt),Me(v)}function Me(l){ze(l),Bt.remove(l)}function ze(l){let v=Bt.get(l).programs;v!==void 0&&(v.forEach(function(T){dt.releaseProgram(T)}),l.isShaderMaterial&&dt.releaseShaderCache(l))}this.renderBufferDirect=function(l,v,T,R,N,V){v===null&&(v=Be);let k=N.isMesh&&N.matrixWorld.determinantAffine()<0,Q=Ai(l,v,T,R,N);St.setMaterial(R,k);let ut=T.index,y=1;if(R.wireframe===!0){if(ut=Z.getWireframeAttribute(T),ut===void 0)return;y=2}let I=T.drawRange,P=T.attributes.position,G=I.start*y,J=(I.start+I.count)*y;V!==null&&(G=Math.max(G,V.start*y),J=Math.min(J,(V.start+V.count)*y)),ut!==null?(G=Math.max(G,0),J=Math.min(J,ut.count)):P!=null&&(G=Math.max(G,0),J=Math.min(J,P.count));let et=J-G;if(et<0||et===1/0)return;vt.setup(N,R,Q,T,ut);let O,j=nt;if(ut!==null&&(O=M.get(ut),j=Et,j.setIndex(O)),N.isMesh)R.wireframe===!0?(St.setLineWidth(R.wireframeLinewidth*$e()),j.setMode(q.LINES)):j.setMode(q.TRIANGLES);else if(N.isLine){let it=R.linewidth;it===void 0&&(it=1),St.setLineWidth(it*$e()),N.isLineSegments?j.setMode(q.LINES):N.isLineLoop?j.setMode(q.LINE_LOOP):j.setMode(q.LINE_STRIP)}else N.isPoints?j.setMode(q.POINTS):N.isSprite&&j.setMode(q.TRIANGLES);if(N.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))j.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let it=N._multiDrawStarts,pt=N._multiDrawCounts,Pt=N._multiDrawCount,ot=ut?M.get(ut).bytesPerElement:1,kt=Bt.get(R).currentProgram.getUniforms();for(let Ft=0;Ft<Pt;Ft++)kt.setValue(q,"_gl_DrawID",Ft),j.render(it[Ft]/ot,pt[Ft])}else if(N.isInstancedMesh)j.renderInstances(G,et,N.count);else if(T.isInstancedBufferGeometry){let it=T._maxInstanceCount!==void 0?T._maxInstanceCount:1/0,pt=Math.min(T.instanceCount,it);j.renderInstances(G,et,pt)}else j.render(G,et)};function Xe(l,v,T,R){Y!==null&&l.isNodeMaterial&&Y.setObject(R,l),fe===!0&&lt.setState(l,T,!1),l.transparent===!0&&l.side===Mn&&l.forceSinglePass===!1?(l.side=Ze,l.needsUpdate=!0,Nn(l,v,R),l.side=Mi,l.needsUpdate=!0,Nn(l,v,R),l.side=Mn):Nn(l,v,R)}this.compile=function(l,v,T=null){T===null&&(T=l),Y!==null&&Y.renderStart(l,v,T),C=rt.get(T),C.init(v),b.push(C),T.traverseVisible(function(N){N.isLight&&N.layers.test(v.layers)&&(C.pushLight(N),N.castShadow&&C.pushShadow(N))}),l!==T&&l.traverseVisible(function(N){N.isLight&&N.layers.test(v.layers)&&(C.pushLight(N),N.castShadow&&C.pushShadow(N))}),C.setupLights(),Y!==null&&Y.updateLights(C.state.lightsArray),De=this.localClippingEnabled,fe=lt.init(this.clippingPlanes,De),fe===!0&&lt.setGlobalState(this.clippingPlanes,v),Y!==null&&bt.render(C.state.shadowsArray,T,v);let R=new Set;return l.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let V=N.material;if(V)if(Array.isArray(V))for(let k=0;k<V.length;k++){let Q=V[k];Xe(Q,T,v,N),R.add(Q)}else Xe(V,T,v,N),R.add(V)}),C=b.pop(),Y!==null&&Y.renderEnd(),R},this.compileAsync=function(l,v,T=null){let R=this.compile(l,v,T);return new Promise(N=>{function V(){if(R.forEach(function(k){let ut=Bt.get(k).currentProgram;(ut===void 0||ut.isReady())&&R.delete(k)}),R.size===0){N(l);return}setTimeout(V,10)}ae.get("KHR_parallel_shader_compile")!==null?V():setTimeout(V,10)})};let Sn=null;function Ei(l){Sn&&Sn(l)}function Vn(){sn.stop()}function ye(){sn.start()}let sn=new uh;sn.setAnimationLoop(Ei),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(l){Sn=l,ct.setAnimationLoop(l),l===null?sn.stop():sn.start()},ct.addEventListener("sessionstart",Vn),ct.addEventListener("sessionend",ye),this.render=function(l,v){if(v!==void 0&&v.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;Y!==null&&Y.renderStart(l,v);let T=ct.enabled===!0&&ct.isPresenting===!0,R=H!==null&&(_t===null||T)&&H.begin(F,_t);if(l.matrixWorldAutoUpdate===!0&&l.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(H===null||H.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(v),v=ct.getCamera()),l.isScene===!0&&l.onBeforeRender(F,l,v,_t),C=rt.get(l,b.length),C.init(v),C.state.textureUnits=zt.getTextureUnits(),b.push(C),de.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),v.isArrayCamera?be.setFromArrayCamera(v):te.setFromProjectionMatrix(de,yn,v.reversedDepth),De=this.localClippingEnabled,fe=lt.init(this.clippingPlanes,De),A=At.get(l,x.length),A.init(),x.push(A),this.info.render.frame++,ct.enabled===!0&&ct.isPresenting===!0){let k=F.xr.getDepthSensingMesh();k!==null&&_e(k,v,-1/0,F.sortObjects)}_e(l,v,0,F.sortObjects),A.finish(),Y!==null&&Y.updateLights(C.state.lightsArray),F.sortObjects===!0&&A.sort(Wt,ue),Je=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Je&&U.addToRenderList(A,l),this.info.autoReset===!0&&this.info.reset(),fe===!0&&lt.beginShadows();let N=C.state.shadowsArray;if(bt.render(N,l,v),fe===!0&&lt.endShadows(),(R&&H.hasRenderPass())===!1){let k=A.opaque,Q=A.transmissive;if(C.setupLights(),v.isArrayCamera){let ut=v.cameras;if(Q.length>0)for(let y=0,I=ut.length;y<I;y++){let P=ut[y];Ln(k,Q,l,P)}Je&&U.render(l);for(let y=0,I=ut.length;y<I;y++){let P=ut[y];wi(A,l,P,P.viewport)}}else Q.length>0&&Ln(k,Q,l,v),Je&&U.render(l),wi(A,l,v)}_t!==null&&tt===0&&(zt.updateMultisampleRenderTarget(_t),zt.updateRenderTargetMipmap(_t)),R&&H.end(F),l.isScene===!0&&l.onAfterRender(F,l,v),vt.resetDefaultState(),z=-1,ft=null,b.pop(),b.length>0?(C=b[b.length-1],zt.setTextureUnits(C.state.textureUnits),fe===!0&&lt.setGlobalState(F.clippingPlanes,C.state.camera)):C=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,Y!==null&&Y.renderEnd()};function _e(l,v,T,R){if(l.visible===!1)return;if(l.layers.test(v.layers)){if(l.isGroup)T=l.renderOrder;else if(l.isLOD)l.autoUpdate===!0&&l.update(v);else if(l.isLight)C.pushLight(l),l.castShadow&&C.pushShadow(l);else if(l.isSprite){let k=v.isArrayCamera?be:te;if(!l.frustumCulled||l.intersectsFrustum(k)){R&&Ae.setFromMatrixPosition(l.matrixWorld).applyMatrix4(de);let Q=gt.update(l),ut=l.material;ut.visible&&A.push(l,Q,ut,T,Ae.z,null,v)}}else if(l.isMesh||l.isLine||l.isPoints){let k=v.isArrayCamera?be:te;if(!l.frustumCulled||l.intersectsFrustum(k)){let Q=gt.update(l),ut=l.material;if(R&&(l.boundingSphere!==void 0?(l.boundingSphere===null&&l.computeBoundingSphere(),Ae.copy(l.boundingSphere.center)):(Q.boundingSphere===null&&Q.computeBoundingSphere(),Ae.copy(Q.boundingSphere.center)),Ae.applyMatrix4(l.matrixWorld).applyMatrix4(de)),Array.isArray(ut)){let y=Q.groups;for(let I=0,P=y.length;I<P;I++){let G=y[I],J=ut[G.materialIndex];J&&J.visible&&A.push(l,Q,J,T,Ae.z,G,v)}}else ut.visible&&A.push(l,Q,ut,T,Ae.z,null,v)}}}let V=l.children;for(let k=0,Q=V.length;k<Q;k++)_e(V[k],v,T,R)}function wi(l,v,T,R){let{opaque:N,transmissive:V,transparent:k}=l;C.setupLightsView(T),fe===!0&&lt.setGlobalState(F.clippingPlanes,T),R&&St.viewport(mt.copy(R)),N.length>0&&bn(N,v,T),V.length>0&&bn(V,v,T),k.length>0&&bn(k,v,T),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Ln(l,v,T,R){if((T.isScene===!0?T.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[R.id]===void 0){let G=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[R.id]=new mn(1,1,{generateMipmaps:!0,type:G?Pn:cn,minFilter:ni,samples:Math.max(4,me.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}let V=C.state.transmissionRenderTarget[R.id],k=R.viewport||mt;V.setSize(k.z*F.transmissionResolutionScale,k.w*F.transmissionResolutionScale);let Q=F.getRenderTarget(),ut=F.getActiveCubeFace(),y=F.getActiveMipmapLevel();F.setRenderTarget(V),F.getClearColor(ht),Tt=F.getClearAlpha(),Tt<1&&F.setClearColor(16777215,.5),F.clear(),Je&&U.render(T);let I=F.toneMapping;F.toneMapping=Hn;let P=R.viewport;if(R.viewport!==void 0&&(R.viewport=void 0),C.setupLightsView(R),fe===!0&&lt.setGlobalState(F.clippingPlanes,R),bn(l,T,R),zt.updateMultisampleRenderTarget(V),zt.updateRenderTargetMipmap(V),ae.has("WEBGL_multisampled_render_to_texture")===!1){let G=!1;for(let J=0,et=v.length;J<et;J++){let O=v[J],{object:j,geometry:it,material:pt,group:Pt}=O;if(pt.side===Mn&&j.layers.test(R.layers)){let ot=pt.side;pt.side=Ze,pt.needsUpdate=!0,Dn(j,T,R,it,pt,Pt),pt.side=ot,pt.needsUpdate=!0,G=!0}}G===!0&&(zt.updateMultisampleRenderTarget(V),zt.updateRenderTargetMipmap(V))}F.setRenderTarget(Q,ut,y),F.setClearColor(ht,Tt),P!==void 0&&(R.viewport=P),F.toneMapping=I}function bn(l,v,T){let R=v.isScene===!0?v.overrideMaterial:null;for(let N=0,V=l.length;N<V;N++){let k=l[N],{object:Q,geometry:ut,group:y}=k,I=k.material;I.allowOverride===!0&&R!==null&&(I=R),Q.layers.test(T.layers)&&Dn(Q,v,T,ut,I,y)}}function Dn(l,v,T,R,N,V){Y!==null&&N.isNodeMaterial&&Y.setObject(l,N),l.onBeforeRender(F,v,T,R,N,V),l.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,l.matrixWorld),l.normalMatrix.getNormalMatrix(l.modelViewMatrix),N.onBeforeRender(F,v,T,R,l,V),N.transparent===!0&&N.side===Mn&&N.forceSinglePass===!1?(N.side=Ze,N.needsUpdate=!0,F.renderBufferDirect(T,v,R,N,l,V),N.side=Mi,N.needsUpdate=!0,F.renderBufferDirect(T,v,R,N,l,V),N.side=Mn):F.renderBufferDirect(T,v,R,N,l,V),l.onAfterRender(F,v,T,R,N,V)}function Ti(l){let v=0;for(let T of l)T.texture!==null&&v++;return v}function Nn(l,v,T){v.isScene!==!0&&(v=Be);let R=Bt.get(l),N=C.state.lights,V=C.state.shadowsArray,k=N.state.version,Q=dt.getParameters(l,N.state,V,v,T,C.state.lightProbeGridArray),ut=dt.getProgramCacheKey(Q),y=R.programs;R.environment=l.isMeshStandardMaterial||l.isMeshLambertMaterial||l.isMeshPhongMaterial?v.environment:null,R.fog=v.fog;let I=l.isMeshStandardMaterial||l.isMeshLambertMaterial&&!l.envMap||l.isMeshPhongMaterial&&!l.envMap;R.envMap=L.get(l.envMap||R.environment,I),R.envMapRotation=R.environment!==null&&l.envMap===null?v.environmentRotation:l.envMapRotation,y===void 0&&(l.addEventListener("dispose",jt),y=new Map,R.programs=y,R.programVariants=new Map);let P=y.get(ut);if(P!==void 0){if(R.currentProgram===P&&R.lightsStateVersion===k)return He(l,Q),P}else Q.uniforms=dt.getUniforms(l),Y!==null&&l.isNodeMaterial&&Y.build(l,T,Q),l.onBeforeCompile(Q,F),P=dt.acquireProgram(Q,ut),y.set(ut,P),R.uniforms=Q.uniforms;let G=R.uniforms;return(!l.isShaderMaterial&&!l.isRawShaderMaterial||l.clipping===!0)&&(G.clippingPlanes=lt.uniform),He(l,Q),R.needsLights=Un(l),R.lightsStateVersion=k,R.needsLights&&(G.ambientLightColor.value=N.state.ambient,G.lightProbe.value=N.state.probe,G.sunLights.value=N.state.sun,G.sunLightShadows.value=N.state.sunShadow,G.directionalLights.value=N.state.directional,G.directionalLightShadows.value=N.state.directionalShadow,G.spotLights.value=N.state.spot,G.spotLightShadows.value=N.state.spotShadow,G.rectAreaLights.value=N.state.rectArea,G.ltc_1.value=N.state.rectAreaLTC1,G.ltc_2.value=N.state.rectAreaLTC2,G.pointLights.value=N.state.point,G.pointLightShadows.value=N.state.pointShadow,G.hemisphereLights.value=N.state.hemi,G.sunShadowMatrix.value=N.state.sunShadowMatrix,G.sunShadowCascade.value=N.state.sunShadowCascade,G.directionalShadowMatrix.value=N.state.directionalShadowMatrix,G.spotLightMatrix.value=N.state.spotLightMatrix,G.spotLightMap.value=N.state.spotLightMap,G.pointShadowMatrix.value=N.state.pointShadowMatrix),R.numLightProbeGrids=Ti(C.state.lightProbeGridArray),R.currentProgram=P,R.uniformsList=null,P}function oe(l,v,T,R,N){let V=Bt.get(l),k=V.currentProgram.id+","+R+","+N,Q=V.programVariants.get(k);return Q===void 0?(Q=Nn(l,v,T),V.programVariants.set(k,Q)):(V.currentProgram=Q,V.uniformsList=null,V.outputColorSpace=R,V.toneMapping=N),Q}function Ke(l){if(l.uniformsList===null){let v=l.currentProgram.getUniforms();l.uniformsList=Es.seqWithValue(v.seq,l.uniforms)}return l.uniformsList}function He(l,v){let T=Bt.get(l);T.outputColorSpace=v.outputColorSpace,T.batching=v.batching,T.batchingColor=v.batchingColor,T.instancing=v.instancing,T.instancingColor=v.instancingColor,T.instancingMorph=v.instancingMorph,T.skinning=v.skinning,T.morphTargets=v.morphTargets,T.morphNormals=v.morphNormals,T.morphColors=v.morphColors,T.morphTargetsCount=v.morphTargetsCount,T.numClippingPlanes=v.numClippingPlanes,T.numIntersection=v.numClipIntersection,T.vertexAlphas=v.vertexAlphas,T.vertexTangents=v.vertexTangents,T.toneMapping=v.toneMapping}function Ai(l,v,T,R,N){v.isScene!==!0&&(v=Be),zt.resetTextureUnits();let V=v.fog,k=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?v.environment:null,Q=_t===null?F.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:se.workingColorSpace,ut=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap,y=L.get(R.envMap||k,ut),I=R.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,P=!!T.attributes.tangent&&(!!R.normalMap||R.anisotropy>0),G=!!T.morphAttributes.position,J=!!T.morphAttributes.normal,et=!!T.morphAttributes.color,O=Hn;R.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(O=F.toneMapping);let j=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,it=j!==void 0?j.length:0,pt=Bt.get(R),Pt=C.state.lights;if(fe===!0&&(De===!0||l!==ft)){let ve=l===ft&&R.id===z;lt.setState(R,l,ve)}let ot=!1,kt=!1;R.version===pt.__version?pt.needsLights&&pt.lightsStateVersion!==Pt.state.version||N.isBatchedMesh&&pt.batching===!1||!N.isBatchedMesh&&pt.batching===!0||N.isBatchedMesh&&pt.batchingColor===!0&&N._colorsTexture===null||N.isBatchedMesh&&pt.batchingColor===!1&&N._colorsTexture!==null||N.isInstancedMesh&&pt.instancing===!1||!N.isInstancedMesh&&pt.instancing===!0||N.isSkinnedMesh&&pt.skinning===!1||!N.isSkinnedMesh&&pt.skinning===!0||N.isInstancedMesh&&pt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&pt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&pt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&pt.instancingMorph===!1&&N.morphTexture!==null||pt.envMap!==y||R.fog===!0&&pt.fog!==V||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==lt.numPlanes||pt.numIntersection!==lt.numIntersection)||pt.vertexAlphas!==I||pt.vertexTangents!==P||pt.morphTargets!==G||pt.morphNormals!==J||pt.morphColors!==et||pt.morphTargetsCount!==it||pt.numLightProbeGrids!==Ti(C.state.lightProbeGridArray)?ot=!0:(pt.outputColorSpace!==Q||pt.toneMapping!==O)&&(kt=!0):(ot=!0,pt.__version=R.version);let Ft=pt.currentProgram;(ot===!0||kt===!0)&&(Ft=kt===!0?oe(R,v,N,Q,O):Nn(R,v,N),Y&&R.isNodeMaterial&&Y.onUpdateProgram(R,Ft,pt));let Ee=!1,Re=!1,rn=!1,ne=Ft.getUniforms(),Pe=pt.uniforms;if(St.useProgram(Ft.program)&&(Ee=!0,Re=!0,rn=!0),R.id!==z&&(z=R.id,Re=!0),Ee||ft!==l){St.buffers.depth.getReversed()&&l.reversedDepth!==!0&&(l._reversedDepth=!0,l.updateProjectionMatrix()),ne.setValue(q,"projectionMatrix",l.projectionMatrix),ne.setValue(q,"viewMatrix",l.matrixWorldInverse);let Ce=ne.map.cameraPosition;Ce!==void 0&&Ce.setValue(q,pe.setFromMatrixPosition(l.matrixWorld)),me.logarithmicDepthBuffer&&ne.setValue(q,"logDepthBufFC",2/(Math.log(l.far+1)/Math.LN2)),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&ne.setValue(q,"isOrthographic",l.isOrthographicCamera===!0),ft!==l&&(ft=l,Re=!0,rn=!0)}if(pt.needsLights&&(Pt.state.sunShadowMap.length>0&&ne.setValue(q,"sunShadowMap",Pt.state.sunShadowMap,zt),Pt.state.directionalShadowMap.length>0&&ne.setValue(q,"directionalShadowMap",Pt.state.directionalShadowMap,zt),Pt.state.spotShadowMap.length>0&&ne.setValue(q,"spotShadowMap",Pt.state.spotShadowMap,zt),Pt.state.pointShadowMap.length>0&&ne.setValue(q,"pointShadowMap",Pt.state.pointShadowMap,zt)),N.isSkinnedMesh){ne.setOptional(q,N,"bindMatrix"),ne.setOptional(q,N,"bindMatrixInverse");let ve=N.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),ne.setValue(q,"boneTexture",ve.boneTexture,zt))}N.isBatchedMesh&&(ne.setOptional(q,N,"batchingTexture"),ne.setValue(q,"batchingTexture",N._matricesTexture,zt),ne.setOptional(q,N,"batchingIdTexture"),ne.setValue(q,"batchingIdTexture",N._indirectTexture,zt),ne.setOptional(q,N,"batchingColorTexture"),N._colorsTexture!==null&&ne.setValue(q,"batchingColorTexture",N._colorsTexture,zt));let an=T.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&at.update(N,T,Ft),(Re||pt.receiveShadow!==N.receiveShadow)&&(pt.receiveShadow=N.receiveShadow,ne.setValue(q,"receiveShadow",N.receiveShadow)),(R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial)&&R.envMap===null&&v.environment!==null&&(Pe.envMapIntensity.value=v.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=fg()),Re){if(ne.setValue(q,"toneMappingExposure",F.toneMappingExposure),pt.needsLights&&ri(Pe,rn),V&&R.fog===!0&&Mt.refreshFogUniforms(Pe,V),Mt.refreshMaterialUniforms(Pe,R,xt,Ct,C.state.transmissionRenderTarget[l.id]),pt.needsLights&&pt.numLightProbeGrids>0){let ve=w,Ce=0;for(let qe of C.state.lightProbeGridArray)qe.texture!==null&&(ve.textures[Ce]=qe.texture,ve.min[Ce]=qe.boundingBox.min,ve.max[Ce]=qe.boundingBox.max,ve.resolution[Ce]=qe.resolution,Ce++);for(let qe in ve)ve[qe].length=Ce;Pe.probesSH.value=ve.textures,Pe.probesMin.value=ve.min,Pe.probesMax.value=ve.max,Pe.probesResolution.value=ve.resolution}Es.upload(q,Ke(pt),Pe,zt)}if(R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(Es.upload(q,Ke(pt),Pe,zt),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&ne.setValue(q,"center",N.center),ne.setValue(q,"modelViewMatrix",N.modelViewMatrix),ne.setValue(q,"normalMatrix",N.normalMatrix),ne.setValue(q,"modelMatrix",N.matrixWorld),R.uniformsGroups!==void 0){let ve=R.uniformsGroups;for(let Ce=0,qe=ve.length;Ce<qe;Ce++){let Rl=ve[Ce];Dt.update(Rl,Ft),Dt.bind(Rl,Ft)}}return Ft}function ri(l,v){l.ambientLightColor.needsUpdate=v,l.lightProbe.needsUpdate=v,l.sunLights.needsUpdate=v,l.sunLightShadows.needsUpdate=v,l.directionalLights.needsUpdate=v,l.directionalLightShadows.needsUpdate=v,l.pointLights.needsUpdate=v,l.pointLightShadows.needsUpdate=v,l.spotLights.needsUpdate=v,l.spotLightShadows.needsUpdate=v,l.rectAreaLights.needsUpdate=v,l.hemisphereLights.needsUpdate=v}function Un(l){return l.isMeshLambertMaterial||l.isMeshToonMaterial||l.isMeshPhongMaterial||l.isMeshStandardMaterial||l.isShadowMaterial||l.isShaderMaterial&&l.lights===!0}this.getActiveCubeFace=function(){return st},this.getActiveMipmapLevel=function(){return tt},this.getRenderTarget=function(){return _t},this.setRenderTargetTextures=function(l,v,T){let R=Bt.get(l);R.__autoAllocateDepthBuffer=l.resolveDepthBuffer===!1,R.__autoAllocateDepthBuffer===!1&&(R.__useRenderToTexture=!1),Bt.get(l.texture).__webglTexture=v,Bt.get(l.depthTexture).__webglTexture=R.__autoAllocateDepthBuffer?void 0:T,R.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(l,v){let T=Bt.get(l);T.__webglFramebuffer=v,T.__useDefaultFramebuffer=v===void 0},this.setRenderTarget=function(l,v=0,T=0){_t=l,st=v,tt=T;let R=null,N=!1,V=!1;if(l){let Q=Bt.get(l);if(Q.__useDefaultFramebuffer!==void 0){St.bindFramebuffer(q.FRAMEBUFFER,Q.__webglFramebuffer),mt.copy(l.viewport),Nt.copy(l.scissor),qt=l.scissorTest,St.viewport(mt),St.scissor(Nt),St.setScissorTest(qt),z=-1;return}else if(Q.__webglFramebuffer===void 0)zt.setupRenderTarget(l);else if(Q.__hasExternalTextures)zt.rebindTextures(l,Bt.get(l.texture).__webglTexture,Bt.get(l.depthTexture).__webglTexture);else if(l.depthBuffer){let I=l.depthTexture;if(Q.__boundDepthTexture!==I){if(I!==null&&Bt.has(I)&&(l.width!==I.image.width||l.height!==I.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(l)}}let ut=l.texture;(ut.isData3DTexture||ut.isDataArrayTexture||ut.isCompressedArrayTexture)&&(V=!0);let y=Bt.get(l).__webglFramebuffer;l.isWebGLCubeRenderTarget?(Array.isArray(y[v])?R=y[v][T]:R=y[v],N=!0):l.samples>0&&zt.useMultisampledRTT(l)===!1?R=Bt.get(l).__webglMultisampledFramebuffer:Array.isArray(y)?R=y[T]:R=y,mt.copy(l.viewport),Nt.copy(l.scissor),qt=l.scissorTest}else mt.copy(Gt).multiplyScalar(xt).floor(),Nt.copy(Qt).multiplyScalar(xt).floor(),qt=Kt;if(T!==0&&(R=K),St.bindFramebuffer(q.FRAMEBUFFER,R)&&St.drawBuffers(l,R),St.viewport(mt),St.scissor(Nt),St.setScissorTest(qt),N){let Q=Bt.get(l.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+v,Q.__webglTexture,T)}else if(V){let Q=v;for(let ut=0;ut<l.textures.length;ut++){let y=Bt.get(l.textures[ut]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+ut,y.__webglTexture,T,Q)}}else if(l!==null&&T!==0){let Q=Bt.get(l.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Q.__webglTexture,T)}z=-1};function Fn(l){let v=Bt.get(l);return(v.__readFormat!==l.format||v.__readType!==l.type)&&(v.__readFormat=l.format,v.__readType=l.type,v.__formatReadable=me.textureFormatReadable(l.format),v.__typeReadable=me.textureTypeReadable(l.type)),v}this.readRenderTargetPixels=function(l,v,T,R,N,V,k,Q=0){if(!(l&&l.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=Bt.get(l).__webglFramebuffer;if(l.isWebGLCubeRenderTarget&&k!==void 0&&(ut=ut[k],Array.isArray(ut)&&(ut=ut[0])),ut){St.bindFramebuffer(q.FRAMEBUFFER,ut);try{let y=l.textures[Q],I=y.format,P=y.type;l.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Q);let G=Fn(y);if(G.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(G.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}v>=0&&v<=l.width-R&&T>=0&&T<=l.height-N&&q.readPixels(v,T,R,N,yt.convert(I),yt.convert(P),V)}finally{let y=_t!==null?Bt.get(_t).__webglFramebuffer:null;St.bindFramebuffer(q.FRAMEBUFFER,y)}}},this.readRenderTargetPixelsAsync=async function(l,v,T,R,N,V,k,Q=0){if(!(l&&l.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=Bt.get(l).__webglFramebuffer;if(l.isWebGLCubeRenderTarget&&k!==void 0&&(ut=ut[k],Array.isArray(ut)&&(ut=ut[0])),ut)if(v>=0&&v<=l.width-R&&T>=0&&T<=l.height-N){St.bindFramebuffer(q.FRAMEBUFFER,ut);let y=l.textures[Q],I=y.format,P=y.type;l.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Q);let G=Fn(y);if(G.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(G.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let J=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,J),q.bufferData(q.PIXEL_PACK_BUFFER,V.byteLength,q.STREAM_READ),q.readPixels(v,T,R,N,yt.convert(I),yt.convert(P),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let et=_t!==null?Bt.get(_t).__webglFramebuffer:null;St.bindFramebuffer(q.FRAMEBUFFER,et);let O=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Fc(q,O,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,J),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,V),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(J),q.deleteSync(O),V}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(l,v=null,T=0){let R=Math.pow(2,-T),N=Math.floor(l.image.width*R),V=Math.floor(l.image.height*R),k=v!==null?v.x:0,Q=v!==null?v.y:0;zt.setTexture2D(l,0),q.copyTexSubImage2D(q.TEXTURE_2D,T,0,0,k,Q,N,V),St.unbindTexture()},this.copyTextureToTexture=function(l,v,T=null,R=null,N=0,V=0){let k,Q,ut,y,I,P,G,J,et,O=l.isCompressedTexture?l.mipmaps[V]:l.image;if(T!==null)k=T.max.x-T.min.x,Q=T.max.y-T.min.y,ut=T.isBox3?T.max.z-T.min.z:1,y=T.min.x,I=T.min.y,P=T.isBox3?T.min.z:0;else{let ne=Math.pow(2,-N);k=Math.floor(O.width*ne),Q=Math.floor(O.height*ne),l.isDataArrayTexture?ut=O.depth:l.isData3DTexture?ut=Math.floor(O.depth*ne):ut=1,y=0,I=0,P=0}R!==null?(G=R.x,J=R.y,et=R.z):(G=0,J=0,et=0);let j=yt.convert(v.format),it=yt.convert(v.type),pt;v.isData3DTexture?(zt.setTexture3D(v,0),pt=q.TEXTURE_3D):v.isDataArrayTexture||v.isCompressedArrayTexture?(zt.setTexture2DArray(v,0),pt=q.TEXTURE_2D_ARRAY):(zt.setTexture2D(v,0),pt=q.TEXTURE_2D),St.activeTexture(q.TEXTURE0),St.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,v.flipY),St.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),St.pixelStorei(q.UNPACK_ALIGNMENT,v.unpackAlignment);let Pt=St.getParameter(q.UNPACK_ROW_LENGTH),ot=St.getParameter(q.UNPACK_IMAGE_HEIGHT),kt=St.getParameter(q.UNPACK_SKIP_PIXELS),Ft=St.getParameter(q.UNPACK_SKIP_ROWS),Ee=St.getParameter(q.UNPACK_SKIP_IMAGES);St.pixelStorei(q.UNPACK_ROW_LENGTH,O.width),St.pixelStorei(q.UNPACK_IMAGE_HEIGHT,O.height),St.pixelStorei(q.UNPACK_SKIP_PIXELS,y),St.pixelStorei(q.UNPACK_SKIP_ROWS,I),St.pixelStorei(q.UNPACK_SKIP_IMAGES,P);let Re=l.isDataArrayTexture||l.isData3DTexture,rn=v.isDataArrayTexture||v.isData3DTexture;if(l.isDepthTexture){let ne=Bt.get(l),Pe=Bt.get(v),an=Bt.get(ne.__renderTarget),ve=Bt.get(Pe.__renderTarget);St.bindFramebuffer(q.READ_FRAMEBUFFER,an.__webglFramebuffer),St.bindFramebuffer(q.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ce=0;Ce<ut;Ce++)Re&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Bt.get(l).__webglTexture,N,P+Ce),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Bt.get(v).__webglTexture,V,et+Ce)),q.blitFramebuffer(y,I,y+k,I+Q,G,J,G+k,J+Q,q.DEPTH_BUFFER_BIT,q.NEAREST);St.bindFramebuffer(q.READ_FRAMEBUFFER,null),St.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(N!==0||l.isRenderTargetTexture||Bt.has(l)){let ne=Bt.get(l),Pe=Bt.get(v);St.bindFramebuffer(q.READ_FRAMEBUFFER,B),St.bindFramebuffer(q.DRAW_FRAMEBUFFER,$);for(let an=0;an<ut;an++)Re?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ne.__webglTexture,N,P+an):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,ne.__webglTexture,N),rn?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Pe.__webglTexture,V,et+an):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Pe.__webglTexture,V),N!==0?q.blitFramebuffer(y,I,y+k,I+Q,G,J,G+k,J+Q,q.COLOR_BUFFER_BIT,q.NEAREST):rn?q.copyTexSubImage3D(pt,V,G,J,et+an,y,I,k,Q):q.copyTexSubImage2D(pt,V,G,J,y,I,k,Q);St.bindFramebuffer(q.READ_FRAMEBUFFER,null),St.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else rn?l.isDataTexture||l.isData3DTexture?q.texSubImage3D(pt,V,G,J,et,k,Q,ut,j,it,O.data):v.isCompressedArrayTexture?q.compressedTexSubImage3D(pt,V,G,J,et,k,Q,ut,j,O.data):q.texSubImage3D(pt,V,G,J,et,k,Q,ut,j,it,O):l.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,V,G,J,k,Q,j,it,O.data):l.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,V,G,J,O.width,O.height,j,O.data):q.texSubImage2D(q.TEXTURE_2D,V,G,J,k,Q,j,it,O);St.pixelStorei(q.UNPACK_ROW_LENGTH,Pt),St.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ot),St.pixelStorei(q.UNPACK_SKIP_PIXELS,kt),St.pixelStorei(q.UNPACK_SKIP_ROWS,Ft),St.pixelStorei(q.UNPACK_SKIP_IMAGES,Ee),V===0&&v.generateMipmaps===!0&&v.mipmapsAutoUpdate===!0&&q.generateMipmap(pt),St.unbindTexture()},this.initRenderTarget=function(l){Bt.get(l).__webglFramebuffer===void 0&&zt.setupRenderTarget(l)},this.initTexture=function(l){l.isCubeTexture?zt.setTextureCube(l,0):l.isData3DTexture?zt.setTexture3D(l,0):l.isDataArrayTexture||l.isCompressedArrayTexture?zt.setTexture2DArray(l,0):zt.setTexture2D(l,0),St.unbindTexture()},this.resetState=function(){st=0,tt=0,_t=null,St.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var bh={type:"change"},Al={type:"start"},wh={type:"end"},eo=new Ni,Eh=new fn,pg=Math.cos(70*or.DEG2RAD),Oe=new X,hn=2*Math.PI,le={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Tl=1e-6,As=class extends Qs{constructor(t,e=null){super(t,e),this.state=le.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new pn,this._lastTargetPosition=new X,this._quat=new pn().setFromUnitVectors(t.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xs,this._sphericalDelta=new xs,this._scale=1,this._panOffset=new X,this._rotateStart=new Ot,this._rotateEnd=new Ot,this._rotateDelta=new Ot,this._panStart=new Ot,this._panEnd=new Ot,this._panDelta=new Ot,this._dollyStart=new Ot,this._dollyEnd=new Ot,this._dollyDelta=new Ot,this._dollyDirection=new X,this._mouse=new Ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gg.bind(this),this._onPointerDown=mg.bind(this),this._onPointerUp=_g.bind(this),this._onContextMenu=Eg.bind(this),this._onMouseWheel=vg.bind(this),this._onKeyDown=Mg.bind(this),this._onTouchStart=Sg.bind(this),this._onTouchMove=bg.bind(this),this._onMouseDown=xg.bind(this),this._onMouseMove=yg.bind(this),this._interceptControlDown=wg.bind(this),this._interceptControlUp=Tg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=le.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bh),this.update(),this.state=le.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Oe.copy(e).sub(this.target),Oe.applyQuaternion(this._quat),this._spherical.setFromVector3(Oe),this.autoRotate&&this.state===le.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=hn:n>Math.PI&&(n-=hn),s<-Math.PI?s+=hn:s>Math.PI&&(s-=hn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Oe.setFromSpherical(this._spherical),Oe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Oe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Oe.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new X(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let h=new X(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(o),this.object.updateMatrixWorld(),a=Oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(eo.origin.copy(this.object.position),eo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(eo.direction))<pg?this.object.lookAt(this.target):(Eh.setFromNormalAndCoplanarPoint(this.object.up,this.target),eo.intersectPlane(Eh,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Tl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Tl||this._lastTargetPosition.distanceToSquared(this.target)>Tl?(this.dispatchEvent(bh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?hn/60*this.autoRotateSpeed*t:hn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Oe.setFromMatrixColumn(e,0),Oe.multiplyScalar(-t),this._panOffset.add(Oe)}_panUp(t,e){this.screenSpacePanning===!0?Oe.setFromMatrixColumn(e,1):(Oe.setFromMatrixColumn(e,0),Oe.crossVectors(this.object.up,Oe)),Oe.multiplyScalar(t),this._panOffset.add(Oe)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Oe.copy(s).sub(this.target);let r=Oe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function mg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function gg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function _g(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wh),this.state=le.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function xg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=le.DOLLY;break;case yi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=le.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=le.ROTATE}break;case yi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=le.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=le.PAN}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(Al)}function yg(i){switch(this.state){case le.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case le.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case le.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function vg(i){this.enabled===!1||this.enableZoom===!1||this.state!==le.NONE||(i.preventDefault(),this.dispatchEvent(Al),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(wh))}function Mg(i){this.enabled!==!1&&this._handleKeyDown(i)}function Sg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case vi.ROTATE:if(this.enableRotate===!1){this.state=le.NONE;break}this._handleTouchStartRotate(i),this.state=le.TOUCH_ROTATE;break;case vi.PAN:if(this.enablePan===!1){this.state=le.NONE;break}this._handleTouchStartPan(i),this.state=le.TOUCH_PAN;break;default:this.state=le.NONE}break;case 2:switch(this.touches.TWO){case vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=le.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=le.TOUCH_DOLLY_ROTATE;break;default:this.state=le.NONE}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(Al)}function bg(i){switch(this._trackPointer(i),this.state){case le.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case le.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case le.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case le.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=le.NONE}}function Eg(i){this.enabled!==!1&&i.preventDefault()}function wg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Tg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var bi=class extends We{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Ot(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this.rotation2D=t.rotation2D,this}},Rs=new X,Th=new he,Ah=new he,Rh=new X,Ch=new X,Cs=class{constructor(t={}){let e=this,n,s,r,a,o={objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.sortObjects=!0,this.getSize=function(){return{width:n,height:s}},this.render=function(g,E){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),E.parent===null&&E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),Th.copy(E.matrixWorldInverse),Ah.multiplyMatrices(E.projectionMatrix,Th),u(g,g,E),this.sortObjects&&d(g)},this.setSize=function(g,E){n=g,s=E,r=n/2,a=s/2,c.style.width=g+"px",c.style.height=E+"px"};function h(g){g.isCSS2DObject&&(g.element.style.display="none");for(let E=0,m=g.children.length;E<m;E++)h(g.children[E])}function u(g,E,m){if(g.visible===!1){h(g);return}if(g.isCSS2DObject){Rs.setFromMatrixPosition(g.matrixWorld),Rs.applyMatrix4(Ah);let f=Rs.z>=-1&&Rs.z<=1&&g.layers.test(m.layers)===!0,S=g.element;if(S.style.display=f===!0?"":"none",f===!0){g.onBeforeRender(e,E,m);let w=100*g.center.x,A=100*g.center.y;S.style.transformOrigin=`${w}% ${A}%`;let C=-g.rotation2D,x=Rs.x*r+r,b=-Rs.y*a+a;S.style.transform=`translate(${-w}%, ${-A}%) translate(${x}px, ${b}px) rotate(${C}rad)`,S.parentNode!==c&&c.appendChild(S),g.onAfterRender(e,E,m)}let D={distanceToCameraSquared:_(m,g)};o.objects.set(g,D)}for(let f=0,S=g.children.length;f<S;f++)u(g.children[f],E,m)}function _(g,E){return Rh.setFromMatrixPosition(g.matrixWorld),Ch.setFromMatrixPosition(E.matrixWorld),Rh.distanceToSquared(Ch)}function p(g){let E=[];return g.traverseVisible(function(m){m.isCSS2DObject&&E.push(m)}),E}function d(g){let E=p(g).sort(function(f,S){if(f.renderOrder!==S.renderOrder)return S.renderOrder-f.renderOrder;let D=o.objects.get(f).distanceToCameraSquared,w=o.objects.get(S).distanceToCameraSquared;return D-w}),m=E.length;for(let f=0,S=E.length;f<S;f++)E[f].element.style.zIndex=m-f}}};function Ph(i){let t=i.status,e=i.stage,n=i.canvasHost,s=i.labelHost,r=i.rotateButton,a=i.resetButton,o=i.reducedMotion,c=i.data,h=i.months,u=i.latest,_=(l,v={})=>{let T=new URLSearchParams({month:l});return v.group!==void 0&&T.set("group",String(v.group)),v.category&&T.set("category",v.category),`month.html?${T.toString()}`};function p(l){t.textContent=l,t.hidden=!1,r.disabled=!0,r.setAttribute("aria-pressed","false"),r.textContent="3D \u65CB\u8F49\u672A\u555F\u7528",a.disabled=!0}a.disabled=!1;let d;try{d=new ws({antialias:!0,alpha:!1,powerPreference:"low-power"})}catch{return p("3D \u5834\u666F\u7121\u6CD5\u555F\u52D5\uFF1B\u6587\u7A3F\u5C0E\u89BD\u4ECD\u53EF\u5B8C\u6574\u4F7F\u7528\u3002\u82E5\u5C0E\u89BD\u5DF2\u6536\u5408\uFF0C\u6309\u4E0A\u65B9\u300C\u986F\u793A\u5C0E\u89BD\u300D\u3002"),()=>{}}let g=new Di;g.background=new $t("#fff8f4"),g.fog=new Li("#edddcf",48,110);let E=new ke(32,1,.1,200),m=new re;g.add(m),d.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6)),d.shadowMap.enabled=!0,d.shadowMap.type=ei,d.outputColorSpace=Ye,d.toneMapping=Wi,d.toneMappingExposure=1,d.domElement.setAttribute("aria-hidden","true"),d.domElement.setAttribute("role","presentation"),n.appendChild(d.domElement);let f=new Cs;f.domElement.style.position="absolute",f.domElement.style.inset="0",f.domElement.style.overflow="hidden",f.domElement.style.pointerEvents="none",s.appendChild(f.domElement);let S=new Bi("#fff8f4","#c5b5a7",1.9);g.add(S);let D=new Hi("#ffc090",0);g.add(D);let w=new ti("#cfe4f2",.9);w.position.set(12,8,-10),g.add(w);let A=new ti("#ffe9cf",3);A.position.set(-8,18,12),A.castShadow=!0,A.shadow.mapSize.set(1024,1024),A.shadow.camera.left=-28,A.shadow.camera.right=28,A.shadow.camera.top=26,A.shadow.camera.bottom=-26,A.shadow.bias=-35e-5,g.add(A);let C=new ln({side:Ze,depthWrite:!1,toneMapped:!1,uniforms:{top:{value:new X(197/255,223/255,240/255)},mid:{value:new X(232/255,242/255,247/255)},bottom:{value:new X(243/255,235/255,227/255)},resolution:{value:new Ot(1,1)}},vertexShader:"void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 mid; uniform vec3 bottom; uniform vec2 resolution; void main(){ float y = clamp(gl_FragCoord.y / max(resolution.y, 1.0), 0.0, 1.0); vec3 col = y < 0.5 ? mix(bottom, mid, y * 2.0) : mix(mid, top, (y - 0.5) * 2.0); gl_FragColor = vec4(col, 1.0); }"}),x=new Te(new Ie(180,28,18),C);x.frustumCulled=!1,x.renderOrder=-10,g.add(x);let b=new Te(new mi(42,80),new Qn({color:"#45abbb",roughness:.8,metalness:0,emissive:"#45abbb",emissiveIntensity:0})),H=new Te(new mi(15,48),new Qn({color:"#8fd3da",roughness:.8,metalness:0,transparent:!0,opacity:.7,emissive:"#8fd3da",emissiveIntensity:0}));H.rotation.x=-Math.PI/2,H.position.y=-.12,m.add(H),b.rotation.x=-Math.PI/2,b.position.y=-.17,b.receiveShadow=!0,m.add(b);let F=[],W=new Set,Y=[],K=[],B=[],$=[];$.push(H.material);let st={land:["#e6d8c8","#d3c4aa","#f4ece4"],soil:["#c5b5a7","#b8a07e","#c5b5a7","#b8a07e"],roof:["#db6a41","#e08a5f","#c9583a"],building:["#fff8f4","#f4ebdd","#fffdf9"],ink:"#211d1d"},tt={\u6587\u7A3F:"#db6a41",\u526A\u5F71:"#e6a15a",\u8A69\u8A5E:"#45abbb",\u89AA\u5B50\u5712\u5730:"#e9c46a",\u5C01\u5E95:"#c9583a",\u5F85\u5206\u985E:"#78685e"};function _t(l,v={}){return new Qn({color:l,roughness:.8,metalness:0,flatShading:!0,...v})}function z(l,v,T={}){let R=new Te(l,_t(v,T));return R.castShadow=!0,R.receiveShadow=!0,R}function ft(l,v,T,R,N=""){let V=document.createElement("a");V.className=`island-label ${N}`.trim(),V.href=T,N.includes("group-label")&&(V.dataset.num=(l.match(/\d+/)||[""])[0]),V.setAttribute("aria-label",v?`${l}\uFF0C${v}\uFF0C\u958B\u555F\u5BE9\u7A3F\u9801`:`${l}\uFF0C\u958B\u555F\u5BE9\u7A3F\u9801`);let k=document.createElement("span");if(k.textContent=l,V.appendChild(k),v){let ut=document.createElement("small");ut.textContent=v,V.appendChild(ut)}let Q=new bi(V);return Q.position.set(R.x,R.y,R.z),Q}function mt(l,v){l.userData.route=v,l.traverse(T=>{if(!T.isMesh)return;T.userData.route=v,T.userData.interactiveRoot=l;let R=Array.isArray(T.material)?T.material:[T.material];for(let N of R)N&&N.emissive&&(N.userData.originalEmissive=N.emissive.getHex());F.push(T)}),W.add(l)}function Nt(l,v,T,R,N,V,k=1,Q="",ut=0,y=R){let I=new re;I.position.set(v,1.1,T),l.add(I);let P=z(new wt(.98*k,.16*k,.82*k),"#f4ebdd");P.position.y=.08*k,I.add(P);let G=st.building.length,J=((R.length+Math.round(v*10))%G+G)%G,et=z(new wt(.72*k,.76*k,.62*k),st.building[J]);et.position.y=.52*k,I.add(et);let O=z(new nn(.62*k,.54*k,4,1),V);O.position.y=1.15*k,O.rotation.y=Math.PI/4,I.add(O);let j=z(new wt(.19*k,.34*k,.045*k),"#78685e",{roughness:.9});j.position.set(0,.28*k,.33*k),I.add(j);for(let kt of[-1,1]){let Ft=z(new wt(.13*k,.14*k,.04*k),"#8fd3da",{roughness:.6,emissive:"#fcea8b",emissiveIntensity:0});Ft.position.set(kt*.22*k,.64*k,.33*k),Ft.material.userData.todManaged=!0,Y.push(Ft.material),I.add(Ft)}let it=z(new wt(.86*k,.06*k,.76*k),"#f4ebdd");it.position.y=.92*k,I.add(it);let pt=z(new wt(.34*k,.04*k,.16*k),V);pt.position.set(0,.5*k,.38*k),pt.rotation.x=.35,I.add(pt);let Pt=z(new wt(.3*k,.06*k,.14*k),"#c5b5a7");Pt.position.set(0,.19*k,.42*k),I.add(Pt);for(let kt of[-1,1]){let Ft=z(new wt(.17*k,.03*k,.06*k),"#fff8f4");Ft.position.set(kt*.22*k,.56*k,.34*k),I.add(Ft)}ht(I,R.replace("\u2026",""),k,V),I.rotation.y=-Math.atan2(T,v)+Math.PI/2,mt(I,N);let ot=ft(R,Q,N,{x:0,y:1.9*k+ut,z:0},"cat-label");return ot.element.title=y+(Q?`\uFF08${Q}\uFF09`:""),I.add(ot),I}function qt(l,v,T,R=1,N="#9fbf8f"){let V=new re;V.position.set(v,1.05,T),l.add(V);let k=z(new Vt(.08*R,.12*R,.55*R,5),"#a77a55");k.position.y=.28*R,V.add(k);let Q=z(new vn(.44*R,0),N);Q.position.y=.78*R,V.add(Q);let ut=z(new vn(.31*R,0),"#b7cf9f");ut.position.set(.12*R,1.02*R,.04*R),V.add(ut)}function ht(l,v,T,R){let N=(V,k,Q,ut,y,I=0)=>{let P=z(V,k);return P.position.set(Q*T,ut*T,y*T),P.rotation.y=I,l.add(P),P};if(v.startsWith("\u6587\u7A3F"))N(new wt(.5,.14,.04),"#211d1d",0,1.5,.05),N(new wt(.44,.09,.05),"#fcea8b",0,1.5,.08),N(new wt(.3,.4,.14),"#a77a55",.55,.4,.2),["#db6a41","#45abbb","#fcea8b","#78685e"].forEach((V,k)=>N(new wt(.05,.13,.1),V,.46+k*.06,.5,.26));else if(v.startsWith("\u526A\u5F71")){N(new wt(.36,.05,.36),"#b48560",.62,.62,.1);for(let[k,Q]of[[-1,-1],[1,-1],[-1,1],[1,1]])N(new Vt(.025,.025,.6,5),"#a77a55",.62+k*.15,.3,.1+Q*.15);N(new wt(.16,.11,.1),"#211d1d",.62,.72,.1);let V=N(new Vt(.04,.04,.08,8),"#8fd3da",.62,.72,.18);V.rotation.x=Math.PI/2}else if(v.startsWith("\u8A69\u8A5E")){N(new wt(.18,.42,.08),"#c5b5a7",.58,.29,.25),N(new wt(.24,.06,.12),"#b8a07e",.58,.1,.25);for(let V of[-1,1])N(new Vt(.025,.025,.42,5),"#db6a41",-.62+V*.13,.29,.25);N(new nn(.24,.16,6),R,-.62,.58,.25)}else if(v.startsWith("\u89AA\u5B50")){for(let V of[-1,1]){let k=N(new Vt(.02,.02,.5,5),"#db6a41",.62+V*.18,.25,.25);k.rotation.z=V*.12}N(new Vt(.02,.02,.4,5),"#db6a41",.62,.5,.25).rotation.z=Math.PI/2,N(new wt(.12,.02,.07),"#fcea8b",.62,.22,.25),N(new wt(.34,.06,.34),"#f4ece4",-.6,.1,.3),N(new Ie(.06,6,4),"#45abbb",-.6,.16,.3)}else if(v.startsWith("\u5C01\u5E95")){for(let V of[-1,1])N(new Vt(.025,.025,.55,5),"#a77a55",.6+V*.2,.27,.3);N(new wt(.46,.3,.04),"#fff8f4",.6,.45,.3),["#db6a41","#fcea8b","#8fd3da"].forEach((V,k)=>N(new wt(.1,.12,.01),V,.46+k*.14,.46,.33))}}let Tt={rock:new vn(.16,0),bush:new Fi(.16,0),flower:new Ie(.05,5,4),stone:new Vt(.16,.18,.04,6),pile:new Vt(.045,.05,.6,5),plank:new wt(.22,.05,.6)};function Lt(l,v,T,R,N,V,k=1,Q=0){let ut=z(v,T);return ut.position.set(R,N,V),ut.scale.setScalar(k),ut.rotation.y=Q,ut.castShadow=k>.6,l.add(ut),ut}function Ct(l,v,T,R){let N=xt.islandRadius,V=(O,j)=>({x:Math.cos(O)*j,z:Math.sin(O)*j}),k=O=>{let j=Math.sin(v*91.7+O*12.9)*43758.5;return j-Math.floor(j)},Q=new Te(new Vt(N*1.32,N*1.32,.04,28),_t("#8fd3da",{transparent:!0,opacity:.7,emissive:"#8fd3da",emissiveIntensity:0}));Q.position.y=.06,Q.receiveShadow=!0,$.push(Q.material),l.add(Q);for(let O=0;O<7;O+=1){let j=V(T+O*.9+k(O),N*(.9+k(O+3)*.12)),it=z(new Vt(.55+k(O)*.35,.7+k(O)*.35,.7+k(O+1)*.25,6),O%2?"#c5b5a7":"#b8a07e");it.position.set(j.x,.36,j.z),it.rotation.y=k(O+9)*3,l.add(it);let pt=z(new Vt(.5+k(O)*.3,.55+k(O)*.3,.12,6),Wt[v]);pt.position.set(j.x,.72+k(O+1)*.12,j.z),pt.rotation.y=it.rotation.y,l.add(pt)}ue.filter(O=>O!==v).forEach(O=>{let j=Math.atan2(Kt[O].z-Kt[v].z,Kt[O].x-Kt[v].x);for(let it=.5;it<N-.1;it+=.42){let pt=V(j+Math.sin(it*2)*.06,it);Lt(l,Tt.stone,"#f4ebdd",pt.x,1.13,pt.z,1,it)}});let ut=T+Math.PI,y=200*Math.PI/180,I=[[ut,1.3,.6],[ut+.35,2.4,.5],[ut-.35,2.5,.45]];for(let O=0;O<Math.max(1,R.length-1);O+=1){let j=R.length<2?T+.6:T-y/2+y*(O+.5)/(R.length-1);I.push([j,3,.4+k(O+20)*.2])}I.slice(0,6).forEach(([O,j,it],pt)=>{let Pt=V(O,j);qt(l,Pt.x,Pt.z,it,pt%2?"#9fbf8f":"#8db07c")});let P=["#db6a41","#fcea8b","#fff8f4","#e6a15a"];for(let O=0;O<6;O+=1){let j=V(ut+(O-2.5)*.28,1.9+k(O+30)*.9);Lt(l,Tt.bush,O%2?"#a9c796":"#8db07c",j.x,1.16,j.z,.9+k(O)*.5);for(let it=0;it<3;it+=1)Lt(l,Tt.flower,P[(O+it)%4],j.x+(it-1)*.12,1.3,j.z+k(O+it)*.14-.07,1)}for(let O=0;O<3;O+=1){let j=V(T+(O-1)*1.6+.4,N*1.08);Lt(l,Tt.rock,"#c5b5a7",j.x,.25,j.z,1.1+k(O+40)*1.2,k(O)*3)}let G=T+.3,J=new re,et=V(G,N+.35);J.position.set(et.x,.62,et.z),J.rotation.y=-G+Math.PI/2,l.add(J);for(let O=0;O<5;O+=1)Lt(J,Tt.plank,O%2?"#b48560":"#a77a55",0,0,-.5+O*.25,1,Math.PI/2);for(let[O,j]of[[-.28,-.6],[.28,-.6],[-.28,.5],[.28,.5]])Lt(J,Tt.pile,"#a77a55",O,-.15,j,1)}let xt={ringRadius:8,islandRadius:3.4,buildingRing:2.15,hubRadius:1.55},Wt={1:"#e6d8c8",2:"#d3c4aa",3:"#f4ece4"},ue=[1,2,3],Gt=u.groupCategories&&typeof u.groupCategories=="object"?u.groupCategories:{},Qt=l=>{let v=(u.groups||[]).find(T=>Number(T.id)===l);return v&&Number(v.count)||0},Kt={};ue.forEach((l,v)=>{let T=-Math.PI/2+v*Math.PI*2/3;Kt[l]={x:Math.cos(T)*xt.ringRadius,z:Math.sin(T)*xt.ringRadius,angle:T}});function te(l){let v=Kt[l],T=xt.islandRadius,R=new re;R.position.set(v.x,0,v.z),m.add(R);let N=z(new Vt(T*.97,T*1.1,.58,9,1),l%2?"#c5b5a7":"#b8a07e");N.position.y=.34;let V=z(new Vt(T*.98,T*1.02,.28,9,1),"#f4ebdd");V.position.y=.74;let k=z(new Vt(T*.96,T*.99,.24,9,1),Wt[l]);k.position.y=.99,R.add(N,V,k);let Q=_(u.key,{group:l});R.userData.route=Q;for(let P of[N,V,k])P.userData.route=Q,P.userData.interactiveRoot=R,P.material.userData.originalEmissive=P.material.emissive.getHex(),F.push(P);W.add(R),R.add(ft(`\u7B2C ${l} \u7D44`,`${Qt(l)} \u7BC7 \xB7 ${u.month} \u6708`,Q,{x:0,y:4.35,z:0},"group-label"));let ut=Array.isArray(Gt[String(l)])?Gt[String(l)]:[];ut.length||(ut=(u.categories||[]).map(P=>({name:P.name,count:null})));let y=v.angle,I=200*Math.PI/180;return ut.forEach((P,G)=>{let J=ut.length===1?y:y-I/2+I*G/(ut.length-1),et={x:Math.cos(J)*xt.buildingRing,z:Math.sin(J)*xt.buildingRing},O=P.count===null||P.count===void 0?"":`${P.count} \u7BC7`;Nt(R,et.x,et.z,P.name.length>4?P.name.slice(0,4)+"\u2026":P.name,_(u.key,{group:l,category:P.name}),tt[P.name]||"#777f6d",.62,O,.18+G%5*.28,P.name)}),Ct(R,l,y,ut),R}function be(l,v){let T=Kt[l],R=Kt[v],N=R.x-T.x,V=R.z-T.z,k=Math.hypot(N,V),Q=N/k,ut=V/k,y=xt.islandRadius,I={x:T.x+Q*y,z:T.z+ut*y},P={x:R.x-Q*y,z:R.z-ut*y},G=k-2*y,J=new re;J.position.set((I.x+P.x)/2,.92,(I.z+P.z)/2),J.rotation.y=-Math.atan2(V,N),m.add(J);let et=Math.max(3,Math.ceil(G/.48));for(let O=0;O<et;O+=1){let j=z(new wt(G/et-.045,.12,.62),O%2?"#b48560":"#a77a55");j.position.x=-G/2+(O+.5)*(G/et),J.add(j)}for(let O of[-1,1]){let j=z(new wt(G,.08,.05),O>0?"#db6a41":"#ffffff");j.position.set(0,.22,O*.33),J.add(j);let it=Math.max(6,Math.ceil(G/.5));for(let kt=0;kt<=it;kt+=1){let Ft=z(new wt(.08,.36,.08),"#fff8f4");Ft.position.set(-G/2+kt*G/it,.14,O*.33),J.add(Ft)}let pt=z(new wt(G,.04,.04),"#f4ebdd");pt.position.set(0,.08,O*.33),J.add(pt);let Pt=z(new Vt(.03,.035,.75,5),"#211d1d");Pt.position.set(O*G*.25,.42,O*.38),J.add(Pt);let ot=z(new wt(.14,.16,.14),"#fcea8b",{emissive:"#fcea8b",emissiveIntensity:.5});ot.position.set(O*G*.25,.86,O*.38),ot.material.userData.todManaged=!0,K.push(ot.material),J.add(ot)}return{start:I,end:P}}function fe(){let l=new re;m.add(l);let v=z(new Vt(xt.hubRadius,xt.hubRadius*1.12,.5,7,1),"#b8a07e");v.position.y=.3;let T=z(new Vt(xt.hubRadius*.95,xt.hubRadius,.18,7,1),"#f4ece4");T.position.y=.62,l.add(v,T);let R=z(new Vt(.22,.3,1.2,6),"#fff8f4");R.position.y=1.3;let N=z(new nn(.42,.5,6),"#db6a41");N.position.y=2.15,l.add(R,N);let V=_(u.key);l.userData.route=V;for(let Q of[v,T,R,N])Q.userData.route=V,Q.userData.interactiveRoot=l,Q.material.userData.originalEmissive=Q.material.emissive.getHex(),F.push(Q);let k=Number(c.totalEntries)||h.reduce((Q,ut)=>Q+Number(ut.entries||0),0);l.add(ft("\u6708\u4EFD\u7E3D\u89BD",`${u.label} ${u.entries} \u7BC7 \xB7 \u5168\u90E8 ${k} \u7BC7`,V,{x:0,y:2.9,z:0},"hub-label"))}function De(l,v,T){let R=document.createElement("span");R.className="resident-label",R.textContent=v;let N=document.createElement("div");N.style.pointerEvents="none",N.appendChild(R);let V=new bi(N);V.position.set(0,T,0),l.add(V),l.userData.tag=R}function de(l,v={}){let T={pants:"#78685e",shirt:"#fff8f4",vest:"#db6a41",hair:"#2e2522",hairCap:.58,hairTilt:-.25,bangs:!1,...v},R=new re,N=z(new Vt(.09,.1,.22,6),T.pants);N.position.y=.11;let V=z(new Ui(.16,.24,3,8),T.shirt);V.position.y=.42;let k=z(new Vt(.175,.19,.2,8,1,!0),T.vest);k.position.y=.44;let Q=z(new Ie(.24,12,10),"#f3cfae");Q.position.y=.9;let ut=z(new Ie(.262,12,10,0,Math.PI*2,0,Math.PI*T.hairCap),T.hair);if(ut.position.y=.92,ut.rotation.z=T.hairTilt,R.add(N,V,k,Q,ut),T.bangs){let y=z(new wt(.1,.06,.34),T.hair);y.position.set(.18,1.08,0),R.add(y)}for(let y of[-1,1]){let I=z(new Ie(.03,6,4),"#211d1d");I.position.set(.22,.88,y*.08),R.add(I)}return De(R,l,1.5),R.userData.body=V,m.add(R),R}ue.forEach(l=>te(l));let pe=[be(1,2),be(2,3),be(3,1)];fe(),[[.5,12.6],[2.6,12.2],[4.6,12.8]].forEach(([l,v],T)=>{let R=new re;if(R.position.set(Math.cos(l)*v,.12,Math.sin(l)*v),R.rotation.y=l,m.add(R),T===1){let N=z(new wt(.9,.18,.38),"#fff8f4");R.add(N);let V=z(new wt(.92,.05,.4),"#db6a41");V.position.y=.1,R.add(V)}else{let N=z(new Vt(.14,.18,.28,8),T?"#db6a41":"#fcea8b");R.add(N);let V=z(new nn(.08,.2,6),"#fff8f4");V.position.y=.24,R.add(V)}}),m.userData.bridges=pe;function Ae(l,v){let T=new re;T.position.set(l,2.55,v);let R=z(new Vt(.045,.058,1.45,6),"#b8a07e");R.position.y=-.86;let N=z(new Ie(.14,8,6),"#fff8f4",{emissive:"#ffe0a8",emissiveIntensity:.15,roughness:.55});N.scale.set(1,.78,1),N.material.userData.todManaged=!0;let V=z(new nn(.11,.09,6),"#db6a41");V.position.y=.12,T.add(R,N,V);let k=new zi("#ffb978",0,5.5,2);k.castShadow=!1,T.add(k),m.add(T),T.traverse(Q=>{Q.raycast=()=>{}}),B.push({light:k,shade:N.material})}ue.forEach(l=>{let v=Kt[l];for(let T of[-.62,.62]){let R=v.angle+T;Ae(v.x+Math.cos(R)*2.55,v.z+Math.sin(R)*2.55)}});let Be={y:.22,period:115,ships:[{radius:13.62,phase:0,dir:1,stripe:"#45abbb",funnel:"#db6a41"},{radius:14.86,phase:Math.PI,dir:-1,stripe:"#db6a41",funnel:"#45abbb"}]},Je={roughness:.82,metalness:0};function $e(l,v){let T=new re,R=(N,V,k,Q,ut)=>{let y=z(N,V,Je);return y.position.set(k,Q,ut),T.add(y),y};R(new wt(.92,.07,3.28),"#c5b5a7",0,-.145,-.16),R(new wt(1.02,.4,3.36),"#fff8f4",0,.06,-.12),R(new wt(1.1,.055,3.3),l,0,-.02,-.14),R(new wt(.78,.3,.42),"#fff8f4",0,.02,1.68),R(new wt(.46,.18,.28),"#fff8f4",0,-.02,1.98),R(new wt(.8,.045,.36),l,0,-.02,1.66),R(new wt(.96,.08,2.42),"#e6d8c8",0,.3,-.28),R(new wt(.72,.38,1.82),"#fff8f4",0,.53,-.42),R(new wt(.62,.07,1.22),"#e6d8c8",0,.755,-.52),R(new wt(.46,.22,.52),"#fff8f4",0,.9,-.12),R(new Vt(.1,.125,.58,6),v,0,1.07,-.86),R(new Vt(.15,.15,.08,6),"#fff8f4",0,1.39,-.86);for(let N of[-1,1])for(let V=0;V<5;V+=1)R(new wt(.045,.09,.12),"#8fd3da",N*.532,.1,-1.12+V*.46);return T.traverse(N=>{N.raycast=()=>{}}),T}let q=Be.ships.map(l=>({...l,group:$e(l.stripe,l.funnel)}));q.forEach(l=>m.add(l.group));function Ne(l,v){l.group.position.set(Math.cos(v)*l.radius,Be.y,Math.sin(v)*l.radius),l.group.rotation.y=l.dir>0?-v:Math.PI-v}q.forEach(l=>Ne(l,l.phase));let ae=null;function me(l){if(o)return;ae===null&&(ae=l);let v=(l-ae)/Be.period*Math.PI*2;q.forEach(T=>Ne(T,T.phase+T.dir*v))}let St=2.75,ge=xt.islandRadius-.1,Bt=(l,v)=>Math.atan2(Kt[v].z-Kt[l].z,Kt[v].x-Kt[l].x),zt=(l,v,T=St,R=1.1)=>new X(Kt[l].x+Math.cos(v)*T,R,Kt[l].z+Math.sin(v)*T);function L(l,v,T){let R=T-v;for(;R>Math.PI;)R-=Math.PI*2;for(;R<-Math.PI;)R+=Math.PI*2;let N=Math.max(1,Math.ceil(Math.abs(R)/.25)),V=[];for(let k=1;k<=N;k+=1)V.push(zt(l,v+R*k/N));return V}function M(l){let v=ue.filter(Q=>Q!==l.island&&!l.visited.has(Q));v.length||(l.visited=new Set([l.island]),v=ue.filter(Q=>Q!==l.island));let T=v[Math.floor(Math.random()*v.length)],R=Bt(l.island,T),N=Bt(T,l.island),V=L(l.island,l.angle,R);V.push(zt(l.island,R,ge,1.1)),V.push(zt(T,N,ge,1.1)),V.push(zt(T,N));let k=N+(Math.random()<.5?-1:1)*(1.2+Math.random()*2.6);V.push(...L(T,N,k)),l.island=T,l.angle=k,l.visited.add(T),l.queue=V,l.pause=1.2+Math.random()*2.5}function Z(l,v,T){let R={mesh:l,island:v,angle:T,visited:new Set([v]),queue:[],pause:0,phase:Math.random()*6};return l.position.copy(zt(v,T)),l.rotation.y=-(T+Math.PI/2),R}let gt=[Z(de("\u5DF4\u54E5",{shirt:"#45abbb",vest:"#fcea8b",pants:"#211d1d",hair:"#6b4a33",hairCap:.42,hairTilt:0,bangs:!0}),1,Bt(1,2)-.9),Z(de("\u6F84\u745B"),3,Bt(3,2)+.9)],dt=.9,Mt=0;function At(l,v,T){if(l.pause>0)l.pause-=T;else{l.queue.length||M(l);let V=dt*T;for(;V>0&&l.queue.length;){let k=l.queue[0],Q=k.x-l.mesh.position.x,ut=k.z-l.mesh.position.z,y=Math.hypot(Q,ut);y>1e-4&&(l.mesh.rotation.y=-Math.atan2(ut,Q)),y<=V?(l.mesh.position.copy(k),l.queue.shift(),V-=y):(l.mesh.position.x+=Q/y*V,l.mesh.position.z+=ut/y*V,V=0)}l.queue.length||(l.pause=1.2+Math.random()*2.5)}let R=l.pause<=0;l.mesh.position.y=1.1+(R?Math.abs(Math.sin(v*9+l.phase))*.05:0);let N=1+Math.sin(v*2.1+l.phase)*.035;l.mesh.userData.body.scale.set(1,N,1)}function rt(l,v){let T=Mt?Math.min(.1,v-Mt):0;At(l,v,T)}let lt=xt.ringRadius+xt.islandRadius,bt=l=>Math.max(l<560?44:34,lt*(l<560?3.6:2.9)),U=new As(E,d.domElement);U.enableDamping=!0,U.dampingFactor=.07,U.enablePan=!1,U.enableZoom=!0,U.enableRotate=!0,U.rotateSpeed=.48,U.zoomSpeed=.78,U.minPolarAngle=25*Math.PI/180,U.maxPolarAngle=70*Math.PI/180,U.minDistance=22,U.maxDistance=80,U.target.set(0,.85,0),U.autoRotate=!1,U.autoRotateSpeed=.24,U.addEventListener("start",()=>{U.autoRotate&&(U.autoRotate=!1,at())});function at(){r.disabled=!1,r.setAttribute("aria-pressed",String(!!U.autoRotate)),r.textContent=U.autoRotate?"\u66AB\u505C\u65CB\u8F49":"\u958B\u59CB\u65CB\u8F49"}at();function nt(){U.autoRotate=!U.autoRotate,at()}r.addEventListener("click",nt);function Et(){U.target.set(0,.85,0);let l=e.getBoundingClientRect().width,v=bt(l);E.position.set(0,v*.82,v*.58),U.update()}a.addEventListener("click",Et);function yt(){let l=e.getBoundingClientRect(),v=Math.max(1,l.width),T=Math.max(1,l.height),R=v<560;m.userData.mobileLayout!==R&&(m.rotation.y=R?Math.PI/2:0,m.userData.mobileLayout=R),E.aspect=v/T,E.updateProjectionMatrix(),d.setSize(v,T,!1),C.uniforms.resolution.value.set(d.domElement.width,d.domElement.height),f.setSize(v,T);let N=bt(v);E.position.set(0,N*.82,N*.58),U.update()}let vt=null;window.ResizeObserver?(vt=new ResizeObserver(yt),vt.observe(e)):window.addEventListener("resize",yt),yt();let Dt=null,Ht=null,ct=new Gi,Ut=new Ot;function Zt(l,v){let T=d.domElement.getBoundingClientRect();Ut.x=(l-T.left)/T.width*2-1,Ut.y=-((v-T.top)/T.height)*2+1,ct.setFromCamera(Ut,E);let R=ct.intersectObjects(F,!1);for(let N of R){let V=N.object.userData.interactiveRoot,k=N.object.userData.route;if(V&&k)return{root:V,route:k}}return null}function Rt(l,v){l&&l.traverse(T=>{if(!T.isMesh)return;let R=Array.isArray(T.material)?T.material:[T.material];for(let N of R){if(!N||!N.emissive||N.userData.todManaged)continue;let V=N.userData.originalEmissive||0;N.emissive.setHex(v?4668181:V)}})}d.domElement.addEventListener("pointerdown",l=>{Dt={x:l.clientX,y:l.clientY,pointerId:l.pointerId}},{passive:!0}),d.domElement.addEventListener("pointermove",l=>{if(Dt&&(Math.abs(l.clientX-Dt.x)>6||Math.abs(l.clientY-Dt.y)>6))return;let v=Zt(l.clientX,l.clientY),T=v&&v.root;T!==Ht&&(Rt(Ht,!1),Ht=T,Rt(Ht,!0)),d.domElement.style.cursor=v?"pointer":Dt?"grabbing":"grab"},{passive:!0}),d.domElement.addEventListener("pointerup",l=>{if(!Dt||Dt.pointerId!==l.pointerId)return;let v=Math.hypot(l.clientX-Dt.x,l.clientY-Dt.y);if(Dt=null,d.domElement.style.cursor="grab",v>6)return;let T=Zt(l.clientX,l.clientY);T&&(Rt(T.root,!0),Me(T.root,T.route))},{passive:!0}),d.domElement.addEventListener("pointercancel",()=>{Dt=null},{passive:!0}),d.domElement.addEventListener("webglcontextlost",l=>{Un||(l.preventDefault(),p("3D \u5716\u5F62\u66AB\u6642\u4E2D\u65B7\uFF1B\u8ACB\u6539\u7528\u6587\u7A3F\u5C0E\u89BD\u3002\u82E5\u5C0E\u89BD\u5DF2\u6536\u5408\uFF0C\u6309\u4E0A\u65B9\u300C\u986F\u793A\u5C0E\u89BD\u300D\u3002"))});let jt=null;function Me(l,v){if(o){location.href=v;return}let T=new X;l.getWorldPosition(T),jt={t0:performance.now(),dur:650,route:v,fromPos:E.position.clone(),fromTarget:U.target.clone(),toTarget:T.clone().setY(1),toPos:T.clone().add(E.position.clone().sub(U.target).setLength(16))},U.autoRotate=!1,at()}let ze={day:{sky:["#c5dff0","#e8f2f7","#f3ebe3"],fog:"#edddcf",fogNear:48,fogFar:110,hemiSky:"#fff8f4",hemiGround:"#c5b5a7",hemiI:1.9,sun:"#ffe9cf",sunI:3,sunPos:[-8,18,12],castShadow:!0,fill:"#cfe4f2",fillI:.9,fillPos:[12,8,-10],amb:"#ffc090",ambI:0,exposure:1,sea:"#45abbb",seaEmissive:0,shallow:"#8fd3da",shallowOp:.7,win:0,lantern:.5,lampI:0,lampColor:"#ffb978",bulbE:.15},dusk:{sky:["#7a9ec4","#c9a48a","#e8b89a"],fog:"#d9a882",fogNear:40,fogFar:95,hemiSky:"#f5c49a",hemiGround:"#8a6a55",hemiI:1.1,sun:"#ff9a5c",sunI:1.35,sunPos:[-14,6,8],castShadow:!0,fill:"#6a7ea0",fillI:.45,fillPos:[10,5,-12],amb:"#ffc090",ambI:.15,exposure:.92,sea:"#3f6f86",seaEmissive:.35,shallow:"#c9a48a",shallowOp:.55,win:.15,lantern:1.2,lampI:.55,lampColor:"#ffb978",bulbE:.9},night:{sky:["#1e2a3a","#2a3545","#3a3340"],fog:"#121820",fogNear:35,fogFar:85,hemiSky:"#2a3550",hemiGround:"#0e1218",hemiI:.35,sun:"#a8c0e8",sunI:.22,sunPos:[6,22,-10],castShadow:!1,fill:"#3a4560",fillI:.18,fillPos:[-10,8,6],amb:"#1e2838",ambI:.08,exposure:.85,sea:"#1c3344",seaEmissive:.55,shallow:"#2a4558",shallowOp:.5,win:.45,lantern:2,lampI:1.6,lampColor:"#ffd6a0",bulbE:1.8}},Xe=new $t,Sn=new $t,Ei=new X,Vn=new X,ye=(l,v,T)=>l+(v-l)*T,sn=l=>{let v=Math.min(1,Math.max(0,l));return v*v*(3-2*v)};function _e(l,v,T,R){Xe.set(v),Sn.set(T),l.copy(Xe).lerp(Sn,R)}function wi(l,v){let T=parseInt(String(l).replace("#",""),16);return v.set((T>>16&255)/255,(T>>8&255)/255,(T&255)/255)}function Ln(l,v,T,R){wi(v,Ei),wi(T,Vn),l.copy(Ei).lerp(Vn,R)}function bn(l){let v=T=>Math.round(Math.min(255,Math.max(0,T*255))).toString(16).padStart(2,"0");return`#${v(l.x)}${v(l.y)}${v(l.z)}`}function Dn(l,v,T,R){Ln(C.uniforms.top.value,l.sky[0],v.sky[0],T),Ln(C.uniforms.mid.value,l.sky[1],v.sky[1],T),Ln(C.uniforms.bottom.value,l.sky[2],v.sky[2],T),_e(g.background,l.sky[2],v.sky[2],T),_e(g.fog.color,l.fog,v.fog,T),g.fog.near=ye(l.fogNear,v.fogNear,T),g.fog.far=ye(l.fogFar,v.fogFar,T),_e(S.color,l.hemiSky,v.hemiSky,T),_e(S.groundColor,l.hemiGround,v.hemiGround,T),S.intensity=ye(l.hemiI,v.hemiI,T),_e(A.color,l.sun,v.sun,T),A.intensity=ye(l.sunI,v.sunI,T),A.position.set(ye(l.sunPos[0],v.sunPos[0],T),ye(l.sunPos[1],v.sunPos[1],T),ye(l.sunPos[2],v.sunPos[2],T)),A.castShadow=T<.5?l.castShadow:v.castShadow,_e(w.color,l.fill,v.fill,T),w.intensity=ye(l.fillI,v.fillI,T),w.position.set(ye(l.fillPos[0],v.fillPos[0],T),ye(l.fillPos[1],v.fillPos[1],T),ye(l.fillPos[2],v.fillPos[2],T)),_e(D.color,l.amb,v.amb,T),D.intensity=ye(l.ambI,v.ambI,T),d.toneMappingExposure=ye(l.exposure,v.exposure,T),_e(b.material.color,l.sea,v.sea,T),_e(b.material.emissive,l.sea,v.sea,T),b.material.emissiveIntensity=ye(l.seaEmissive,v.seaEmissive,T),$.forEach(k=>{_e(k.color,l.shallow,v.shallow,T),k.emissive&&_e(k.emissive,l.shallow,v.shallow,T),k.emissive&&(k.emissiveIntensity=ye(l.seaEmissive*.45,v.seaEmissive*.45,T)),k.opacity=ye(l.shallowOp,v.shallowOp,T)});let N=ye(l.win,v.win,T);Y.forEach(k=>{k.emissive.set("#fcea8b"),k.emissiveIntensity=N});let V=ye(l.lantern,v.lantern,T);K.forEach(k=>{k.emissive.set("#fcea8b"),k.emissiveIntensity=V}),B.forEach((k,Q)=>{let ut=R(Q),y=l.lamps&&l.lamps[Q];k.light.intensity=ye(y?y.intensity:l.lampI,v.lampI,ut),_e(k.light.color,y?y.color:l.lampColor,v.lampColor,ut),k.shade.emissive.set("#ffe0a8"),k.shade.emissiveIntensity=ye(y?y.emissive:l.bulbE,v.bulbE,ut)})}function Ti(){return{sky:[bn(C.uniforms.top.value),bn(C.uniforms.mid.value),bn(C.uniforms.bottom.value)],fog:"#"+g.fog.color.getHexString(),fogNear:g.fog.near,fogFar:g.fog.far,hemiSky:"#"+S.color.getHexString(),hemiGround:"#"+S.groundColor.getHexString(),hemiI:S.intensity,sun:"#"+A.color.getHexString(),sunI:A.intensity,sunPos:[A.position.x,A.position.y,A.position.z],castShadow:A.castShadow,fill:"#"+w.color.getHexString(),fillI:w.intensity,fillPos:[w.position.x,w.position.y,w.position.z],amb:"#"+D.color.getHexString(),ambI:D.intensity,exposure:d.toneMappingExposure,sea:"#"+b.material.color.getHexString(),seaEmissive:b.material.emissiveIntensity,shallow:$.length?"#"+$[0].color.getHexString():"#8fd3da",shallowOp:$.length?$[0].opacity:.7,win:Y.length?Y[0].emissiveIntensity:0,lantern:K.length?K[0].emissiveIntensity:.5,lampI:B.length?B[0].light.intensity:0,lampColor:B.length?"#"+B[0].light.color.getHexString():"#ffb978",bulbE:B.length?B[0].shade.emissiveIntensity:.15,lamps:B.map(l=>({intensity:l.light.intensity,color:"#"+l.light.color.getHexString(),emissive:l.shade.emissiveIntensity}))}}function Nn(){try{let l=localStorage.getItem("homeSkyTod");if(l==="dusk"||l==="night")return l}catch{}return"day"}let oe=Nn(),Ke=null;function He(l){if(l!=="day"&&l!=="dusk"&&l!=="night"||l===oe&&!Ke)return;let v=Ti();if(oe=l,document.body.classList.remove("tod-day","tod-dusk","tod-night"),document.body.classList.add(`tod-${l}`),o){Dn(v,ze[l],1,()=>1),Ke=null;return}Ke={from:v,to:ze[l],t0:performance.now()}}Dn(ze[oe],ze[oe],1,()=>1);function Ai(l){He(l.detail)}window.addEventListener("home-sky-tod",Ai),t.hidden=!0;let ri=0,Un=!1;function Fn(){if(Un)return;ri=window.requestAnimationFrame(Fn);let l=performance.now();if(jt){let V=Math.min(1,(l-jt.t0)/jt.dur),k=1-Math.pow(1-V,3);if(E.position.lerpVectors(jt.fromPos,jt.toPos,k),U.target.lerpVectors(jt.fromTarget,jt.toTarget,k),V>=1){let Q=jt.route;jt=null,location.href=Q}}if(Ke){let V=(l-Ke.t0)/1e3,k=sn(Math.min(1,V/.45)),Q=ut=>sn(Math.min(1,Math.max(0,(V-ut*.1)/.8)));Dn(Ke.from,Ke.to,k,Q),V>=.8+Math.max(0,B.length-1)*.1&&(Dn(Ke.from,Ke.to,1,()=>1),Ke=null)}if(x.position.copy(E.position),!o){let V=l/1e3;gt.forEach(k=>rt(k,V)),me(V),Mt=V}let v=E.position.distanceTo(U.target),T=v<26?1:Math.max(.78,1-(v-26)/60);gt.forEach(V=>{let k=V.mesh.userData.tag;k&&(k.style.opacity="1",k.style.setProperty("--tag-scale",T.toFixed(2)))});let R=E.position.distanceTo(U.target),N=R<34?"1":R<42?"0.35":"0";N!==m.userData.catOpacity&&(m.userData.catOpacity=N,document.querySelectorAll(".island-label.cat-label").forEach(V=>{V.style.opacity=N,V.style.pointerEvents=N==="0"?"none":"auto"})),U.update(),d.render(g,E),f.render(g,E)}return Fn(),function(){Un||(Un=!0,window.cancelAnimationFrame(ri),vt&&vt.disconnect(),window.removeEventListener("resize",yt),window.removeEventListener("home-sky-tod",Ai),r.removeEventListener("click",nt),a.removeEventListener("click",Et),U.dispose(),g.traverse(v=>{v.geometry&&v.geometry.dispose(),(v.material?Array.isArray(v.material)?v.material:[v.material]:[]).forEach(R=>{R&&R.dispose&&R.dispose()})}),d.dispose(),d.forceContextLoss(),d.domElement.remove(),f.domElement.parentNode&&f.domElement.remove())}}function Ih(i){let t=i.status,e=i.stage,n=i.canvasHost,s=i.labelHost,r=i.rotateButton,a=i.resetButton,o=i.reducedMotion,c=i.data,h=i.months,u=i.latest,_=(y,I={})=>{let P=new URLSearchParams({month:y});return I.group!==void 0&&P.set("group",String(I.group)),I.category&&P.set("category",I.category),`month.html?${P.toString()}`};function p(y){t.textContent=y,t.hidden=!1,r.disabled=!0,r.setAttribute("aria-pressed","false"),r.textContent="3D \u65CB\u8F49\u672A\u555F\u7528",a.disabled=!0}a.disabled=!1;let d;try{d=new ws({antialias:!0,alpha:!1,powerPreference:"low-power"})}catch{return p("3D \u5834\u666F\u7121\u6CD5\u555F\u52D5\uFF1B\u6587\u7A3F\u5C0E\u89BD\u4ECD\u53EF\u5B8C\u6574\u4F7F\u7528\u3002\u82E5\u5C0E\u89BD\u5DF2\u6536\u5408\uFF0C\u6309\u4E0A\u65B9\u300C\u986F\u793A\u5C0E\u89BD\u300D\u3002"),()=>{}}let g=new Di;g.background=new $t("#f3ebe3"),g.fog=new Li("#edddcf",48,110);let E=new ke(32,1,.1,240),m=new re;g.add(m),d.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6)),d.shadowMap.enabled=!0,d.shadowMap.type=ei,d.outputColorSpace=Ye,d.toneMapping=Wi,d.toneMappingExposure=1,d.domElement.setAttribute("aria-hidden","true"),d.domElement.setAttribute("role","presentation"),n.appendChild(d.domElement);let f=new Cs;f.domElement.style.position="absolute",f.domElement.style.inset="0",f.domElement.style.overflow="hidden",f.domElement.style.pointerEvents="none",s.appendChild(f.domElement);let S=new Bi("#fff8f4","#c5b5a7",1.9);g.add(S);let D=new Hi("#ffc090",0);g.add(D);let w=new ti("#cfe4f2",.9);w.position.set(12,8,-10),g.add(w);let A=new ti("#ffe9cf",3);A.position.set(-8,18,12),A.castShadow=!0,A.shadow.mapSize.set(1024,1024),A.shadow.camera.left=-36,A.shadow.camera.right=36,A.shadow.camera.top=36,A.shadow.camera.bottom=-36,A.shadow.camera.near=.5,A.shadow.camera.far=80,A.shadow.bias=-45e-5,A.shadow.normalBias=.04,A.target.position.set(0,6.5,0),g.add(A,A.target),A.shadow.camera.updateProjectionMatrix();let C=new ln({side:Mn,depthWrite:!1,toneMapped:!1,uniforms:{top:{value:new X(197/255,223/255,240/255)},mid:{value:new X(232/255,242/255,247/255)},bottom:{value:new X(243/255,235/255,227/255)},resolution:{value:new Ot(1,1)}},vertexShader:"void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 mid; uniform vec3 bottom; uniform vec2 resolution; void main(){ float y = clamp(gl_FragCoord.y / max(resolution.y, 1.0), 0.0, 1.0); vec3 col = y < 0.5 ? mix(bottom, mid, y * 2.0) : mix(mid, top, (y - 0.5) * 2.0); gl_FragColor = vec4(col, 1.0); }"}),x=new Te(new Ie(180,28,18),C);x.frustumCulled=!1,x.renderOrder=-10,g.add(x);let b=[],H=new Set,F=[],W=[],Y=[],K=[],B=[],$=[],st={land:["#e6d8c8","#d3c4aa","#f4ece4"],soil:["#c5b5a7","#b8a07e","#c5b5a7","#b8a07e"],roof:["#db6a41","#e08a5f","#c9583a"],building:["#fff8f4","#f4ebdd","#fffdf9"],ink:"#211d1d"},tt={\u6587\u7A3F:"#db6a41",\u526A\u5F71:"#e6a15a",\u8A69\u8A5E:"#45abbb",\u89AA\u5B50\u5712\u5730:"#e9c46a",\u5C01\u5E95:"#c9583a",\u5F85\u5206\u985E:"#78685e"};function _t(y,I={}){return new Qn({roughness:.8,metalness:0,flatShading:!0,...I,color:y})}function z(y,I,P={}){let G=new Te(y,_t(I,P));return G.castShadow=!0,G.receiveShadow=!0,G}function ft(y,I,P,G,J=""){let et=document.createElement("a");et.className=`island-label ${J}`.trim(),et.href=P,J.includes("group-label")&&(et.dataset.num=(y.match(/\d+/)||[""])[0]),et.setAttribute("aria-label",I?`${y}\uFF0C${I}\uFF0C\u958B\u555F\u5BE9\u7A3F\u9801`:`${y}\uFF0C\u958B\u555F\u5BE9\u7A3F\u9801`);let O=document.createElement("span");if(O.textContent=y,et.appendChild(O),I){let it=document.createElement("small");it.textContent=I,et.appendChild(it)}let j=new bi(et);return j.position.set(G.x,G.y,G.z),j}function mt(y,I){y.userData.route=I,y.traverse(P=>{if(!P.isMesh)return;P.userData.route=I,P.userData.interactiveRoot=y;let G=Array.isArray(P.material)?P.material:[P.material];for(let J of G)J&&J.emissive&&(J.userData.originalEmissive=J.emissive.getHex());b.push(P)}),H.add(y)}function Nt(y,I,P,G,J,et,O=1,j="",it=0,pt=G){let Pt=new re;Pt.position.set(I,1.1,P),y.add(Pt);let ot=z(new wt(.98*O,.16*O,.82*O),"#f4ebdd");ot.position.y=.08*O,Pt.add(ot);let kt=st.building.length,Ft=((G.length+Math.round(I*10))%kt+kt)%kt,Ee=z(new wt(.72*O,.76*O,.62*O),st.building[Ft]);Ee.position.y=.52*O,Pt.add(Ee);let Re=z(new nn(.62*O,.54*O,4,1),et);Re.position.y=1.15*O,Re.rotation.y=Math.PI/4,Pt.add(Re);let rn=z(new wt(.19*O,.34*O,.045*O),"#78685e",{roughness:.9});rn.position.set(0,.28*O,.33*O),Pt.add(rn);for(let Ce of[-1,1]){let qe=z(new wt(.13*O,.14*O,.04*O),"#8fd3da",{roughness:.6,emissive:"#fcea8b",emissiveIntensity:0});qe.position.set(Ce*.22*O,.64*O,.33*O),qe.material.userData.todManaged=!0,F.push(qe.material),Pt.add(qe)}let ne=z(new wt(.86*O,.06*O,.76*O),"#f4ebdd");ne.position.y=.92*O,Pt.add(ne);let Pe=z(new wt(.34*O,.04*O,.16*O),et);Pe.position.set(0,.5*O,.38*O),Pe.rotation.x=.35,Pt.add(Pe);let an=z(new wt(.3*O,.06*O,.14*O),"#c5b5a7");an.position.set(0,.19*O,.42*O),Pt.add(an);for(let Ce of[-1,1]){let qe=z(new wt(.17*O,.03*O,.06*O),"#fff8f4");qe.position.set(Ce*.22*O,.56*O,.34*O),Pt.add(qe)}ht(Pt,G.replace("\u2026",""),O,et),Pt.rotation.y=-Math.atan2(P,I)+Math.PI/2,mt(Pt,J);let ve=ft(G,j,J,{x:0,y:1.9*O+it,z:0},"cat-label");return ve.element.title=pt+(j?`\uFF08${j}\uFF09`:""),Pt.add(ve),Pt}function qt(y,I,P,G=1,J="#9fbf8f"){let et=new re;et.position.set(I,1.05,P),y.add(et);let O=z(new Vt(.08*G,.12*G,.55*G,5),"#a77a55");O.position.y=.28*G,et.add(O);let j=z(new vn(.44*G,0),J);j.position.y=.78*G,et.add(j);let it=z(new vn(.31*G,0),"#b7cf9f");it.position.set(.12*G,1.02*G,.04*G),et.add(it)}function ht(y,I,P,G){let J=(et,O,j,it,pt,Pt=0)=>{let ot=z(et,O);return ot.position.set(j*P,it*P,pt*P),ot.rotation.y=Pt,y.add(ot),ot};if(I.startsWith("\u6587\u7A3F"))J(new wt(.5,.14,.04),"#211d1d",0,1.5,.05),J(new wt(.44,.09,.05),"#fcea8b",0,1.5,.08),J(new wt(.3,.4,.14),"#a77a55",.55,.4,.2),["#db6a41","#45abbb","#fcea8b","#78685e"].forEach((et,O)=>J(new wt(.05,.13,.1),et,.46+O*.06,.5,.26));else if(I.startsWith("\u526A\u5F71")){J(new wt(.36,.05,.36),"#b48560",.62,.62,.1);for(let[O,j]of[[-1,-1],[1,-1],[-1,1],[1,1]])J(new Vt(.025,.025,.6,5),"#a77a55",.62+O*.15,.3,.1+j*.15);J(new wt(.16,.11,.1),"#211d1d",.62,.72,.1);let et=J(new Vt(.04,.04,.08,8),"#8fd3da",.62,.72,.18);et.rotation.x=Math.PI/2}else if(I.startsWith("\u8A69\u8A5E")){J(new wt(.18,.42,.08),"#c5b5a7",.58,.29,.25),J(new wt(.24,.06,.12),"#b8a07e",.58,.1,.25);for(let et of[-1,1])J(new Vt(.025,.025,.42,5),"#db6a41",-.62+et*.13,.29,.25);J(new nn(.24,.16,6),G,-.62,.58,.25)}else if(I.startsWith("\u89AA\u5B50")){for(let et of[-1,1]){let O=J(new Vt(.02,.02,.5,5),"#db6a41",.62+et*.18,.25,.25);O.rotation.z=et*.12}J(new Vt(.02,.02,.4,5),"#db6a41",.62,.5,.25).rotation.z=Math.PI/2,J(new wt(.12,.02,.07),"#fcea8b",.62,.22,.25),J(new wt(.34,.06,.34),"#f4ece4",-.6,.1,.3),J(new Ie(.06,6,4),"#45abbb",-.6,.16,.3)}else if(I.startsWith("\u5C01\u5E95")){for(let et of[-1,1])J(new Vt(.025,.025,.55,5),"#a77a55",.6+et*.2,.27,.3);J(new wt(.46,.3,.04),"#fff8f4",.6,.45,.3),["#db6a41","#fcea8b","#8fd3da"].forEach((et,O)=>J(new wt(.1,.12,.01),et,.46+O*.14,.46,.33))}}let Tt={rock:new vn(.16,0),bush:new Fi(.16,0),flower:new Ie(.05,5,4),stone:new Vt(.16,.18,.04,6)};function Lt(y,I){let P=new gs({color:y,transparent:!0,opacity:I,depthWrite:!1,toneMapped:!1});return P.userData.todManaged=!0,P}let Ct={nearLit:_t("#fff8f4",{flatShading:!0,transparent:!0,opacity:.92,roughness:.9}),nearShade:_t("#d5e3ee",{flatShading:!0,transparent:!0,opacity:.92,roughness:.9}),farLit:Lt("#fff8f4",.9),farShade:Lt("#d5e3ee",.88),disc:Lt("#f3ebe3",.97)};Ct.nearLit.userData.todManaged=!0,Ct.nearShade.userData.todManaged=!0;function xt(y,I,P,G,J,et,O,j){let it=new Te(new vn(1,0),I);return it.position.set(P,G,J),it.scale.set(et,O,j),it.castShadow=!1,it.receiveShadow=!1,y.add(it),it}function Wt(y,I,P,G,J,et,O=1,j=0){let it=z(I,P);return it.position.set(G,J,et),it.scale.setScalar(O),it.rotation.y=j,it.castShadow=O>.6,y.add(it),it}function ue(y,I,P,G){let J=Qt.islandRadius,et=(ot,kt)=>({x:Math.cos(ot)*kt,z:Math.sin(ot)*kt}),O=ot=>{let kt=Math.sin(I*91.7+ot*12.9)*43758.5;return kt-Math.floor(kt)};for(let ot=0;ot<7;ot+=1){let kt=et(P+ot*.9+O(ot),J*(.9+O(ot+3)*.12)),Ft=z(new Vt(.55+O(ot)*.35,.7+O(ot)*.35,.7+O(ot+1)*.25,6),ot%2?"#c5b5a7":"#b8a07e");Ft.position.set(kt.x,.36,kt.z),Ft.rotation.y=O(ot+9)*3,y.add(Ft);let Ee=z(new Vt(.5+O(ot)*.3,.55+O(ot)*.3,.12,6),be[I]);Ee.position.set(kt.x,.72+O(ot+1)*.12,kt.z),Ee.rotation.y=Ft.rotation.y,y.add(Ee)}fe.filter(ot=>ot!==I).forEach(ot=>{let kt=Math.atan2(pe[ot].z-pe[I].z,pe[ot].x-pe[I].x);for(let Ft=.5;Ft<J-.1;Ft+=.42){let Ee=et(kt+Math.sin(Ft*2)*.06,Ft);Wt(y,Tt.stone,"#f4ebdd",Ee.x,1.13,Ee.z,1,Ft)}});let j=P+Math.PI,it=200*Math.PI/180,pt=[[j,1.3,.6],[j+.35,2.4,.5],[j-.35,2.5,.45]];for(let ot=0;ot<Math.max(1,G.length-1);ot+=1){let kt=G.length<2?P+.6:P-it/2+it*(ot+.5)/(G.length-1);pt.push([kt,3,.4+O(ot+20)*.2])}pt.slice(0,6).forEach(([ot,kt,Ft],Ee)=>{let Re=et(ot,kt);qt(y,Re.x,Re.z,Ft,Ee%2?"#9fbf8f":"#8db07c")});let Pt=["#db6a41","#fcea8b","#fff8f4","#e6a15a"];for(let ot=0;ot<6;ot+=1){let kt=et(j+(ot-2.5)*.28,1.9+O(ot+30)*.9);Wt(y,Tt.bush,ot%2?"#a9c796":"#8db07c",kt.x,1.16,kt.z,.9+O(ot)*.5);for(let Ft=0;Ft<3;Ft+=1)Wt(y,Tt.flower,Pt[(ot+Ft)%4],kt.x+(Ft-1)*.12,1.3,kt.z+O(ot+Ft)*.14-.07,1)}for(let ot=0;ot<3;ot+=1){let kt=et(P+(ot-1)*1.6+.4,J*.86);Wt(y,Tt.rock,"#c5b5a7",kt.x,1.16,kt.z,.9+O(ot+40)*.6,O(ot)*3)}}function Gt(y,I,P){let G=new re;y.add(G),B.push(G),[{y:-.3,rt:P*.92,rb:P*.68,h:.7,color:"#c5b5a7"},{y:-1,rt:P*.68,rb:P*.42,h:.7,color:"#b8a07e"},{y:-1.7,rt:P*.42,rb:P*.16,h:.7,color:"#9a8b7a"}].forEach(O=>{let j=z(new Vt(O.rt,O.rb,O.h,7,1),O.color);j.position.y=O.y,G.add(j),j.userData.route=I,j.userData.interactiveRoot=y,j.material.userData.originalEmissive=j.material.emissive.getHex(),b.push(j)});let et=z(new wt(.22,.95,.22),"#9a8b7a");return et.position.set(.42,-2.35,.12),et.rotation.z=.16,et.rotation.x=-.08,G.add(et),xt(G,Ct.nearLit,0,-1.22,0,P*.82,.36,P*.7),xt(G,Ct.nearShade,P*.36,-1.02,P*.1,P*.46,.26,P*.38),xt(G,Ct.nearLit,-P*.34,-1.1,-P*.16,P*.42,.24,P*.36),xt(G,Ct.nearShade,.08,-1.38,P*.28,P*.34,.2,P*.28),G}let Qt={islandRadius:3.4,buildingRing:2.15,hubRadius:1.55,walkRadius:3.08},Kt={1:{c:[0,5.4,-8],deckY:6.5,angle:-1.570796},2:{c:[6.9282,7.1,4],deckY:8.2,angle:.523599},3:{c:[-6.9282,4.3,4],deckY:5.4,angle:2.617994}},te=[{a:1,b:2,p0:[1.7,6.5,-5.0555],p1:[5.2282,8.2,1.0555]},{a:2,b:3,p0:[3.5282,8.2,4],p1:[-3.5282,5.4,4]},{a:3,b:1,p0:[-5.2282,5.4,1.0555],p1:[-1.7,6.5,-5.0555]}],be={1:"#e6d8c8",2:"#d3c4aa",3:"#f4ece4"},fe=[1,2,3],De=u.groupCategories&&typeof u.groupCategories=="object"?u.groupCategories:{},de=y=>{let I=(u.groups||[]).find(P=>Number(P.id)===y);return I&&Number(I.count)||0},pe={};fe.forEach(y=>{let I=Kt[y];pe[y]={x:I.c[0],y:I.c[1],z:I.c[2],angle:I.angle,deckY:I.deckY}});function Ae(y){let I=pe[y],P=Qt.islandRadius,G=new re;G.position.set(I.x,I.y,I.z),m.add(G);let J=z(new Vt(P*.97,P*1.1,.58,9,1),y%2?"#c5b5a7":"#b8a07e");J.position.y=.34;let et=z(new Vt(P*.98,P*1.02,.28,9,1),"#f4ebdd");et.position.y=.74;let O=z(new Vt(P,P*1.01,.24,9,1),be[y]);O.position.y=.99,G.add(J,et,O);let j=_(u.key,{group:y});G.userData.route=j;for(let ot of[J,et,O])ot.userData.route=j,ot.userData.interactiveRoot=G,ot.material.userData.originalEmissive=ot.material.emissive.getHex(),b.push(ot);H.add(G),G.add(ft(`\u7B2C ${y} \u7D44`,`${de(y)} \u7BC7 \xB7 ${u.month} \u6708`,j,{x:0,y:4.35,z:0},"group-label"));let it=Array.isArray(De[String(y)])?De[String(y)]:[];it.length||(it=(u.categories||[]).map(ot=>({name:ot.name,count:null})));let pt=I.angle,Pt=200*Math.PI/180;return it.forEach((ot,kt)=>{let Ft=it.length===1?pt:pt-Pt/2+Pt*kt/(it.length-1),Ee={x:Math.cos(Ft)*Qt.buildingRing,z:Math.sin(Ft)*Qt.buildingRing},Re=ot.count===null||ot.count===void 0?"":`${ot.count} \u7BC7`;Nt(G,Ee.x,Ee.z,ot.name.length>4?ot.name.slice(0,4)+"\u2026":ot.name,_(u.key,{group:y,category:ot.name}),tt[ot.name]||"#777f6d",.62,Re,.18+kt%5*.28,ot.name)}),ue(G,y,pt,it),Gt(G,j,P),G}function Be(y){let I=new X(y.p0[0],y.p0[1],y.p0[2]),P=new X(y.p1[0],y.p1[1],y.p1[2]),G=new X().subVectors(P,I),J=G.length(),et=G.clone().normalize(),O=new X().crossVectors(et,new X(0,1,0));O.lengthSq()<1e-8&&O.set(0,0,1),O.normalize();let j=new X().crossVectors(O,et).normalize(),it=new re;it.position.copy(I).add(P).multiplyScalar(.5),it.quaternion.setFromRotationMatrix(new he().makeBasis(et,j,O)),m.add(it);let pt=Math.max(3,Math.ceil(J/.48));for(let Pt=0;Pt<pt;Pt+=1){let ot=z(new wt(J/pt-.045,.12,.62),Pt%2?"#b48560":"#a77a55");ot.position.set(-J/2+(Pt+.5)*(J/pt),-.06,0),it.add(ot)}for(let Pt of[-1,1]){let ot=z(new wt(J,.08,.05),Pt>0?"#db6a41":"#ffffff");ot.position.set(0,.16,Pt*.33),it.add(ot);let kt=Math.max(6,Math.ceil(J/.5));for(let rn=0;rn<=kt;rn+=1){let ne=z(new wt(.08,.36,.08),"#fff8f4");ne.position.set(-J/2+rn*J/kt,.08,Pt*.33),it.add(ne)}let Ft=z(new wt(J,.04,.04),"#f4ebdd");Ft.position.set(0,.02,Pt*.33),it.add(Ft);let Ee=z(new Vt(.03,.035,.75,5),"#211d1d");Ee.position.set(Pt*J*.25,.36,Pt*.38),it.add(Ee);let Re=z(new wt(.14,.16,.14),"#fcea8b",{emissive:"#fcea8b",emissiveIntensity:.5,roughness:.6});Re.position.set(Pt*J*.25,.8,Pt*.38),Re.material.userData.todManaged=!0,W.push(Re.material),it.add(Re)}return y}function Je(){let y=new re;y.position.set(0,4,0),m.add(y);let I=new re;y.add(I),B.push(I),xt(I,Ct.nearLit,0,-.15,0,1.45,.42,1.2),xt(I,Ct.nearShade,.15,-1.05,.05,.85,.55,.72),xt(I,Ct.nearLit,-.05,-1.9,-.05,.5,.62,.46);let P=z(new Vt(Qt.hubRadius,Qt.hubRadius*1.08,.42,7,1),"#b8a07e");P.position.y=.28;let G=z(new Vt(Qt.hubRadius*.95,Qt.hubRadius,.18,7,1),"#f4ece4");G.position.y=.55,y.add(P,G);let J=z(new Vt(.22,.3,1.15,6),"#fff8f4");J.position.y=1.22;let et=z(new nn(.4,.46,6),"#db6a41");et.position.y=2.02,y.add(J,et);let O=_(u.key);y.userData.route=O;for(let it of[P,G,J,et])it.userData.route=O,it.userData.interactiveRoot=y,it.material.userData.originalEmissive=it.material.emissive.getHex(),b.push(it);let j=Number(c.totalEntries)||h.reduce((it,pt)=>it+Number(pt.entries||0),0);y.add(ft("\u6708\u4EFD\u7E3D\u89BD",`${u.label} ${u.entries} \u7BC7 \xB7 \u5168\u90E8 ${j} \u7BC7`,O,{x:0,y:3.35,z:0},"hub-label"))}function $e(y,I,P){let G=document.createElement("span");G.className="resident-label",G.textContent=I;let J=document.createElement("div");J.style.pointerEvents="none",J.appendChild(G);let et=new bi(J);et.position.set(0,P,0),y.add(et),y.userData.tag=G}function q(y,I={}){let P={pants:"#78685e",shirt:"#fff8f4",vest:"#db6a41",hair:"#2e2522",hairCap:.58,hairTilt:-.25,bangs:!1,...I},G=new re,J=z(new Vt(.09,.1,.22,6),P.pants);J.position.y=.11;let et=z(new Ui(.16,.24,3,8),P.shirt);et.position.y=.42;let O=z(new Vt(.175,.19,.2,8,1,!0),P.vest);O.position.y=.44;let j=z(new Ie(.24,12,10),"#f3cfae");j.position.y=.9;let it=z(new Ie(.262,12,10,0,Math.PI*2,0,Math.PI*P.hairCap),P.hair);if(it.position.y=.92,it.rotation.z=P.hairTilt,G.add(J,et,O,j,it),P.bangs){let pt=z(new wt(.1,.06,.34),P.hair);pt.position.set(.18,1.08,0),G.add(pt)}for(let pt of[-1,1]){let Pt=z(new Ie(.03,6,4),"#211d1d");Pt.position.set(.22,.88,pt*.08),G.add(Pt)}return $e(G,y,1.5),G.userData.body=et,m.add(G),G}fe.forEach(y=>Ae(y)),te.forEach(y=>Be(y)),Je();function Ne(y){y.traverse(I=>{I.raycast=()=>{}})}function ae(y,I,P){let G=new re;if(G.position.set(y[0],y[1],y[2]),P){let j=z(new Vt(.045,.05,.22,6),"#b8a07e");j.position.y=-.18,G.add(j)}else{let j=z(new Vt(.045,.058,1.62,6),"#b8a07e");j.position.y=-.97;let it=z(new wt(.08,.06,.08),"#c5b5a7");it.position.y=-.18,G.add(j,it)}let J=z(new Ie(.16,8,6),"#fff8f4",{emissive:"#ffe0a8",emissiveIntensity:.15,roughness:.55,flatShading:!0});J.scale.set(1,.78,1),J.material.userData.todManaged=!0;let et=z(new nn(.13,.1,6),"#c5b5a7");et.position.y=.14,G.add(J,et);let O=new zi("#ffb978",0,I,2);return O.castShadow=!1,G.add(O),m.add(G),Ne(G),{light:O,shade:J.material}}[[0,8.35,-10.7],[2.3383,8.35,-9.35],[-2.3383,8.35,-9.35],[9.2665,10.05,5.35],[6.9282,10.05,6.7],[9.2665,10.05,2.65],[-9.2665,7.25,5.35],[-9.2665,7.25,2.65],[-6.9282,7.25,6.7]].forEach(y=>$.push(ae(y,4.2,!1))),$.push(ae([0,6.5,0],3.5,!0));let St=new re;St.position.y=.85,m.add(St);let ge=new Te(new mi(48,40),C);ge.rotation.x=-Math.PI/2,ge.position.y=-.35,ge.frustumCulled=!1,St.add(ge);for(let y=0;y<16;y+=1){let I=y/16*Math.PI*2+.35,P=13+y%5*4.4;xt(St,y%2?Ct.farShade:Ct.farLit,Math.cos(I)*P,(y%4-1.5)*.28,Math.sin(I)*P,2.1+y%3*.45,.55,1.6+y%2*.35)}Ne(St);let Bt=[{id:"planeA_high",radius:17.5,y:14,period:90,phase:0,dir:1,bank:8,waist:"#45abbb",hub:"#db6a41"},{id:"planeB_low",radius:19.2,y:3,period:110,phase:Math.PI,dir:-1,bank:6,waist:"#db6a41",hub:"#45abbb"}],zt={roughness:.82,metalness:0,flatShading:!0};function L(y){let I=new re;I.rotation.order="YZX";let P=(j,it,pt,Pt,ot,kt={})=>{let Ft=z(j,it,{...zt,...kt});return Ft.position.set(pt,Pt,ot),I.add(Ft),Ft};P(new wt(.72,.28,3.4),"#e6d8c8",0,-.08,-.1),P(new wt(.78,.46,3.5),"#fff8f4",0,.16,-.05);let G=P(new wt(.84,.07,3.35),y.waist,0,.02,-.05,{emissive:y.waist,emissiveIntensity:0});G.material.userData.todManaged=!0,Y.push(G.material);let J=P(new nn(.28,.55,6),"#fff8f4",0,.12,1.95);J.rotation.x=Math.PI/2,P(new wt(5.1,.08,.9),"#fff8f4",0,.22,.15),P(new wt(.28,.1,.92),y.waist,-2.45,.22,.15),P(new wt(.28,.1,.92),y.waist,2.45,.22,.15),P(new wt(1.4,.06,.5),"#fff8f4",0,.22,-1.55),P(new wt(.08,.55,.42),y.waist,0,.55,-1.58);for(let j of[-1,1])for(let it=0;it<4;it+=1)P(new wt(.04,.1,.14),"#8fd3da",j*.4,.22,.4-it*.42);let et=new re;et.position.set(0,.12,2.28),et.add(new Te(new wt(.1,1.15,.035),_t("#c5b5a7",zt))),et.add(new Te(new wt(1.15,.1,.035),_t("#c5b5a7",zt))),et.add(z(new Ie(.09,8,6),y.hub,zt)),I.add(et);let O=z(new Ie(.055,6,4),"#ffe0a8",{emissive:"#ffe0a8",emissiveIntensity:0,roughness:.45});return O.position.set(0,.2,2.08),O.material.userData.todManaged=!0,K.push(O.material),I.add(O),I.userData.prop=et,Ne(I),I}let M=Bt.map(y=>({...y,group:L(y)}));M.forEach(y=>m.add(y.group));function Z(y,I){y.group.position.set(Math.cos(I)*y.radius,y.y,Math.sin(I)*y.radius);let P=y.dir>0?-I:Math.PI-I,G=or.degToRad(y.bank)*(y.dir>0?1:-1);y.group.rotation.set(0,P,G)}M.forEach(y=>Z(y,y.phase));let gt=null;function dt(y){let I=o||gt===null?0:y-gt;M.forEach(P=>{let G=P.phase+P.dir*(I/P.period)*Math.PI*2;Z(P,G),P.group.userData.prop.rotation.z=o?0:I*7})}let Mt=Qt.walkRadius,At=(y,I)=>Math.atan2(pe[I].z-pe[y].z,pe[I].x-pe[y].x),rt=(y,I,P=Mt)=>new X(pe[y].x+Math.cos(I)*P,pe[y].deckY,pe[y].z+Math.sin(I)*P);function lt(y,I,P){let G=P-I;for(;G>Math.PI;)G-=Math.PI*2;for(;G<-Math.PI;)G+=Math.PI*2;let J=Math.max(1,Math.ceil(Math.abs(G)/.25)),et=[];for(let O=1;O<=J;O+=1)et.push(rt(y,I+G*O/J));return et}function bt(y,I){let P=te.find(j=>j.a===y&&j.b===I||j.a===I&&j.b===y),G=P.a===y?P.p0:P.p1,J=P.a===y?P.p1:P.p0,et=[],O=8;for(let j=0;j<=O;j+=1){let it=j/O;et.push(new X(G[0]+(J[0]-G[0])*it,G[1]+(J[1]-G[1])*it,G[2]+(J[2]-G[2])*it))}return et}function U(y){let I=fe.filter(j=>j!==y.island&&!y.visited.has(j));I.length||(y.visited=new Set([y.island]),I=fe.filter(j=>j!==y.island));let P=I[Math.floor(Math.random()*I.length)],G=At(y.island,P),J=At(P,y.island),et=lt(y.island,y.angle,G);et.push(...bt(y.island,P)),et.push(rt(P,J));let O=J+(Math.random()<.5?-1:1)*(1.2+Math.random()*2.6);et.push(...lt(P,J,O)),y.island=P,y.angle=O,y.visited.add(P),y.queue=et,y.pause=1.2+Math.random()*2.5}function at(y,I,P){let G=pe[I],J=Math.atan2(P[2]-G.z,P[0]-G.x),et={mesh:y,island:I,angle:J,baseY:P[1],visited:new Set([I]),queue:[],pause:0,phase:Math.random()*6};return y.position.set(P[0],P[1],P[2]),y.rotation.y=-(J+Math.PI/2),et}let nt=[at(q("\u5DF4\u54E5",{shirt:"#45abbb",vest:"#fcea8b",pants:"#211d1d",hair:"#6b4a33",hairCap:.42,hairTilt:0,bangs:!0}),1,[0,6.5,-5.25]),at(q("\u6F84\u745B"),3,[-4.547,5.4,2.625])],Et=.9,yt=0;function vt(y,I,P){if(y.pause>0)y.pause-=P;else{y.queue.length||U(y);let et=Et*P;for(;et>0&&y.queue.length;){let O=y.queue[0],j=O.x-y.mesh.position.x,it=O.y-y.baseY,pt=O.z-y.mesh.position.z,Pt=Math.hypot(j,it,pt);if(Math.hypot(j,pt)>1e-4&&(y.mesh.rotation.y=-(Math.atan2(pt,j)+Math.PI/2)),Pt<=et)y.mesh.position.x=O.x,y.baseY=O.y,y.mesh.position.z=O.z,y.queue.shift(),et-=Pt;else{let ot=et/Pt;y.mesh.position.x+=j*ot,y.baseY+=it*ot,y.mesh.position.z+=pt*ot,et=0}}y.queue.length||(y.pause=1.2+Math.random()*2.5)}let G=y.pause<=0;y.mesh.position.y=y.baseY+(G?Math.abs(Math.sin(I*9+y.phase))*.05:0);let J=1+Math.sin(I*2.1+y.phase)*.035;y.mesh.userData.body.scale.set(1,J,1)}function Dt(y,I){let P=yt?Math.min(.1,I-yt):0;vt(y,I,P)}let Ht={pos:[0,28,22],target:[0,6.5,0]},ct=new As(E,d.domElement);ct.enableDamping=!0,ct.dampingFactor=.07,ct.enablePan=!1,ct.enableZoom=!0,ct.enableRotate=!0,ct.rotateSpeed=.48,ct.zoomSpeed=.78,ct.minPolarAngle=20*Math.PI/180,ct.maxPolarAngle=72*Math.PI/180,ct.minDistance=24,ct.maxDistance=90,ct.target.set(Ht.target[0],Ht.target[1],Ht.target[2]),ct.autoRotate=!1,ct.autoRotateSpeed=.24,ct.addEventListener("start",()=>{ct.autoRotate&&(ct.autoRotate=!1,Ut())});function Ut(){r.disabled=!1,r.setAttribute("aria-pressed",String(!!ct.autoRotate)),r.textContent=ct.autoRotate?"\u66AB\u505C\u65CB\u8F49":"\u958B\u59CB\u65CB\u8F49"}Ut();function Zt(){ct.autoRotate=!ct.autoRotate,Ut()}r.addEventListener("click",Zt);function Rt(){E.position.set(Ht.pos[0],Ht.pos[1],Ht.pos[2]),ct.target.set(Ht.target[0],Ht.target[1],Ht.target[2]),ct.update()}function jt(){Rt()}a.addEventListener("click",jt);function Me(){let y=e.getBoundingClientRect(),I=Math.max(1,y.width),P=Math.max(1,y.height);E.aspect=I/P,E.updateProjectionMatrix(),d.setSize(I,P,!1),C.uniforms.resolution.value.set(d.domElement.width,d.domElement.height),f.setSize(I,P)}let ze=null;window.ResizeObserver?(ze=new ResizeObserver(Me),ze.observe(e)):window.addEventListener("resize",Me),Me(),Rt();let Xe=null,Sn=null,Ei=new Gi,Vn=new Ot;function ye(y,I){let P=d.domElement.getBoundingClientRect();Vn.x=(y-P.left)/P.width*2-1,Vn.y=-((I-P.top)/P.height)*2+1,Ei.setFromCamera(Vn,E);let G=Ei.intersectObjects(b,!1);for(let J of G){let et=J.object.userData.interactiveRoot,O=J.object.userData.route;if(et&&O)return{root:et,route:O}}return null}function sn(y,I){y&&y.traverse(P=>{if(!P.isMesh)return;let G=Array.isArray(P.material)?P.material:[P.material];for(let J of G){if(!J||!J.emissive||J.userData.todManaged)continue;let et=J.userData.originalEmissive||0;J.emissive.setHex(I?4668181:et)}})}d.domElement.addEventListener("pointerdown",y=>{Xe={x:y.clientX,y:y.clientY,pointerId:y.pointerId}},{passive:!0}),d.domElement.addEventListener("pointermove",y=>{if(Xe&&(Math.abs(y.clientX-Xe.x)>6||Math.abs(y.clientY-Xe.y)>6))return;let I=ye(y.clientX,y.clientY),P=I&&I.root;P!==Sn&&(sn(Sn,!1),Sn=P,sn(Sn,!0)),d.domElement.style.cursor=I?"pointer":Xe?"grabbing":"grab"},{passive:!0}),d.domElement.addEventListener("pointerup",y=>{if(!Xe||Xe.pointerId!==y.pointerId)return;let I=Math.hypot(y.clientX-Xe.x,y.clientY-Xe.y);if(Xe=null,d.domElement.style.cursor="grab",I>6)return;let P=ye(y.clientX,y.clientY);P&&(sn(P.root,!0),wi(P.root,P.route))},{passive:!0}),d.domElement.addEventListener("pointercancel",()=>{Xe=null},{passive:!0}),d.domElement.addEventListener("webglcontextlost",y=>{Q||(y.preventDefault(),p("3D \u5716\u5F62\u66AB\u6642\u4E2D\u65B7\uFF1B\u8ACB\u6539\u7528\u6587\u7A3F\u5C0E\u89BD\u3002\u82E5\u5C0E\u89BD\u5DF2\u6536\u5408\uFF0C\u6309\u4E0A\u65B9\u300C\u986F\u793A\u5C0E\u89BD\u300D\u3002"))});let _e=null;function wi(y,I){if(o){location.href=I;return}let P=new X;y.getWorldPosition(P),_e={t0:performance.now(),dur:650,route:I,fromPos:E.position.clone(),fromTarget:ct.target.clone(),toTarget:P.clone(),toPos:P.clone().add(E.position.clone().sub(ct.target).setLength(28))},ct.autoRotate=!1,Ut()}let Ln={day:{sky:["#c5dff0","#e8f2f7","#f3ebe3"],fog:"#edddcf",fogNear:48,fogFar:110,hemiSky:"#fff8f4",hemiGround:"#c5b5a7",hemiI:1.9,sun:"#ffe9cf",sunI:3,sunPos:[-8,18,12],castShadow:!0,fill:"#cfe4f2",fillI:.9,fillPos:[12,8,-10],amb:"#ffc090",ambI:0,exposure:1,nearLit:"#fff8f4",nearShade:"#d5e3ee",nearOp:.92,farLit:"#fff8f4",farShade:"#d5e3ee",farOp:.88,win:0,waist:0,nav:0,lantern:.5,lampI:0,lampColor:"#ffb978",bulbE:.15},dusk:{sky:["#7a9ec4","#c9a48a","#e8b89a"],fog:"#d9a882",fogNear:40,fogFar:95,hemiSky:"#f5c49a",hemiGround:"#8a6a55",hemiI:1.1,sun:"#ff9a5c",sunI:1.35,sunPos:[-14,6,8],castShadow:!0,fill:"#6a7ea0",fillI:.45,fillPos:[10,5,-12],amb:"#ffc090",ambI:.15,exposure:.92,nearLit:"#f5e6d8",nearShade:"#b89a9a",nearOp:.9,farLit:"#f5e6d8",farShade:"#b89a9a",farOp:.84,win:.15,waist:.12,nav:.35,lantern:1.2,lampI:.55,lampColor:"#ffb978",bulbE:.9},night:{sky:["#1e2a3a","#2a3545","#3a3340"],fog:"#121820",fogNear:35,fogFar:85,hemiSky:"#2a3550",hemiGround:"#0e1218",hemiI:.35,sun:"#a8c0e8",sunI:.22,sunPos:[6,22,-10],castShadow:!1,fill:"#3a4560",fillI:.18,fillPos:[-10,8,6],amb:"#1e2838",ambI:.08,exposure:.85,nearLit:"#e7edf2",nearShade:"#7d8794",nearOp:.66,farLit:"#d8dee6",farShade:"#6a7585",farOp:.52,win:.45,waist:.28,nav:.85,lantern:2,lampI:1.6,lampColor:"#ffd6a0",bulbE:1.8}},bn=new $t,Dn=new $t,Ti=new X,Nn=new X,oe=(y,I,P)=>y+(I-y)*P,Ke=y=>{let I=Math.min(1,Math.max(0,y));return I*I*(3-2*I)};function He(y,I,P,G){bn.set(I),Dn.set(P),y.copy(bn).lerp(Dn,G)}function Ai(y,I){let P=parseInt(String(y).replace("#",""),16);return I.set((P>>16&255)/255,(P>>8&255)/255,(P&255)/255)}function ri(y,I,P,G){Ai(I,Ti),Ai(P,Nn),y.copy(Ti).lerp(Nn,G)}function Un(y){let I=P=>Math.round(Math.min(255,Math.max(0,P*255))).toString(16).padStart(2,"0");return`#${I(y.x)}${I(y.y)}${I(y.z)}`}function Fn(y,I,P,G){ri(C.uniforms.top.value,y.sky[0],I.sky[0],P),ri(C.uniforms.mid.value,y.sky[1],I.sky[1],P),ri(C.uniforms.bottom.value,y.sky[2],I.sky[2],P),He(g.background,y.sky[2],I.sky[2],P),He(g.fog.color,y.fog,I.fog,P),g.fog.near=oe(y.fogNear,I.fogNear,P),g.fog.far=oe(y.fogFar,I.fogFar,P),He(S.color,y.hemiSky,I.hemiSky,P),He(S.groundColor,y.hemiGround,I.hemiGround,P),S.intensity=oe(y.hemiI,I.hemiI,P),He(A.color,y.sun,I.sun,P),A.intensity=oe(y.sunI,I.sunI,P),A.position.set(oe(y.sunPos[0],I.sunPos[0],P),oe(y.sunPos[1],I.sunPos[1],P),oe(y.sunPos[2],I.sunPos[2],P)),A.castShadow=P<.5?y.castShadow:I.castShadow,He(w.color,y.fill,I.fill,P),w.intensity=oe(y.fillI,I.fillI,P),w.position.set(oe(y.fillPos[0],I.fillPos[0],P),oe(y.fillPos[1],I.fillPos[1],P),oe(y.fillPos[2],I.fillPos[2],P)),He(D.color,y.amb,I.amb,P),D.intensity=oe(y.ambI,I.ambI,P),d.toneMappingExposure=oe(y.exposure,I.exposure,P),He(Ct.nearLit.color,y.nearLit,I.nearLit,P),He(Ct.nearShade.color,y.nearShade,I.nearShade,P),He(Ct.farLit.color,y.farLit,I.farLit,P),He(Ct.farShade.color,y.farShade,I.farShade,P),He(Ct.disc.color,y.sky[2],I.sky[2],P),Ct.nearLit.opacity=oe(y.nearOp,I.nearOp,P),Ct.nearShade.opacity=oe(y.nearOp,I.nearOp,P),Ct.farLit.opacity=oe(y.farOp,I.farOp,P),Ct.farShade.opacity=oe(y.farOp,I.farOp,P),Ct.disc.opacity=oe(Math.min(.96,y.farOp+.06),Math.min(.96,I.farOp+.06),P);let J=oe(y.win,I.win,P);F.forEach(it=>{it.emissive.set("#fcea8b"),it.emissiveIntensity=J});let et=oe(y.waist,I.waist,P);Y.forEach(it=>{it.emissive.copy(it.color),it.emissiveIntensity=et});let O=oe(y.nav,I.nav,P);K.forEach(it=>{it.emissive.set("#ffe0a8"),it.emissiveIntensity=O});let j=oe(y.lantern,I.lantern,P);W.forEach(it=>{it.emissive.set("#fcea8b"),it.emissiveIntensity=j}),$.forEach((it,pt)=>{let Pt=G(pt),ot=y.lamps&&y.lamps[pt],kt=ot?ot.intensity:y.lampI,Ft=ot?ot.color:y.lampColor,Ee=ot?ot.emissive:y.bulbE;it.light.intensity=oe(kt,I.lampI,Pt),He(it.light.color,Ft,I.lampColor,Pt),it.shade.emissive.set("#ffe0a8"),it.shade.emissiveIntensity=oe(Ee,I.bulbE,Pt)})}function l(){return{sky:[Un(C.uniforms.top.value),Un(C.uniforms.mid.value),Un(C.uniforms.bottom.value)],fog:"#"+g.fog.color.getHexString(),fogNear:g.fog.near,fogFar:g.fog.far,hemiSky:"#"+S.color.getHexString(),hemiGround:"#"+S.groundColor.getHexString(),hemiI:S.intensity,sun:"#"+A.color.getHexString(),sunI:A.intensity,sunPos:[A.position.x,A.position.y,A.position.z],castShadow:A.castShadow,fill:"#"+w.color.getHexString(),fillI:w.intensity,fillPos:[w.position.x,w.position.y,w.position.z],amb:"#"+D.color.getHexString(),ambI:D.intensity,exposure:d.toneMappingExposure,nearLit:"#"+Ct.nearLit.color.getHexString(),nearShade:"#"+Ct.nearShade.color.getHexString(),nearOp:Ct.nearLit.opacity,farLit:"#"+Ct.farLit.color.getHexString(),farShade:"#"+Ct.farShade.color.getHexString(),farOp:Ct.farLit.opacity,win:F.length?F[0].emissiveIntensity:0,waist:Y.length?Y[0].emissiveIntensity:0,nav:K.length?K[0].emissiveIntensity:0,lantern:W.length?W[0].emissiveIntensity:.5,lampI:$.length?$[0].light.intensity:0,lampColor:$.length?"#"+$[0].light.color.getHexString():"#ffb978",bulbE:$.length?$[0].shade.emissiveIntensity:.15,lamps:$.map(y=>({intensity:y.light.intensity,color:"#"+y.light.color.getHexString(),emissive:y.shade.emissiveIntensity}))}}function v(){try{let y=localStorage.getItem("homeSkyTod");if(y==="dusk"||y==="night")return y}catch{}return"day"}let T=v(),R=null;function N(y){if(y!=="day"&&y!=="dusk"&&y!=="night"||y===T&&!R)return;let I=l();T=y,document.body.classList.remove("tod-day","tod-dusk","tod-night"),document.body.classList.add(`tod-${y}`);let P=Ln[y];if(o){Fn(I,P,1,()=>1),R=null;return}R={from:I,to:P,t0:performance.now()}}Fn(Ln[T],Ln[T],1,()=>1);function V(y){N(y.detail)}window.addEventListener("home-sky-tod",V),t.hidden=!0;let k=0,Q=!1;function ut(){if(Q)return;k=window.requestAnimationFrame(ut);let y=performance.now();if(R){let O=(y-R.t0)/1e3,j=Ke(Math.min(1,O/.45)),it=pt=>Ke(Math.min(1,Math.max(0,(O-pt*.1)/.8)));Fn(R.from,R.to,j,it),O>=.8+Math.max(0,$.length-1)*.1&&(Fn(R.from,R.to,1,()=>1),R=null)}if(_e){let O=Math.min(1,(y-_e.t0)/_e.dur),j=1-Math.pow(1-O,3);if(E.position.lerpVectors(_e.fromPos,_e.toPos,j),ct.target.lerpVectors(_e.fromTarget,_e.toTarget,j),O>=1){let it=_e.route;_e=null,location.href=it}}let I=y/1e3;o||(nt.forEach(O=>Dt(O,I)),gt===null&&(gt=I),B.forEach((O,j)=>{O.position.y=Math.sin(I*Math.PI*2/7.6+j*1.7)*.05}),St.position.x=Math.sin(I*.05)*1.3,St.position.z=Math.cos(I*.04)*1,yt=I),dt(I);let P=E.position.distanceTo(ct.target),G=P<26?1:Math.max(.78,1-(P-26)/60);nt.forEach(O=>{let j=O.mesh.userData.tag;j&&(j.style.opacity="1",j.style.setProperty("--tag-scale",G.toFixed(2)))});let J=E.position.distanceTo(ct.target),et=J<34?"1":J<42?"0.35":"0";et!==m.userData.catOpacity&&(m.userData.catOpacity=et,document.querySelectorAll(".island-label.cat-label").forEach(O=>{O.style.opacity=et,O.style.pointerEvents=et==="0"?"none":"auto"})),ct.update(),x.position.copy(E.position),d.render(g,E),f.render(g,E)}return ut(),function(){Q||(Q=!0,window.cancelAnimationFrame(k),ze&&ze.disconnect(),window.removeEventListener("resize",Me),window.removeEventListener("home-sky-tod",V),r.removeEventListener("click",Zt),a.removeEventListener("click",jt),ct.dispose(),g.traverse(I=>{I.geometry&&I.geometry.dispose(),(I.material?Array.isArray(I.material)?I.material:[I.material]:[]).forEach(G=>{G&&G.dispose&&G.dispose()})}),d.dispose(),d.forceContextLoss(),d.domElement.remove(),f.domElement.parentNode&&f.domElement.remove())}}(()=>{let i=document.getElementById("sceneFallback"),t=document.getElementById("islandStage"),e=document.getElementById("three-root"),n=document.getElementById("label-root"),s=document.getElementById("rotateToggle"),r=document.getElementById("resetView"),a=document.getElementById("sceneNote"),o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,c={classic:"\u6ED1\u9F20\uFF0F\u89F8\u63A7\u62D6\u66F3\u65CB\u8F49\uFF0C\u6EFE\u8F2A\u6216\u96D9\u6307\u7E2E\u653E\u3002\u5916\u6D77\u5169\u8258\u904A\u8F2A\u53EA\u662F\u98A8\u666F\uFF0C\u4E0D\u80FD\u9EDE\u9078\u3002\u53EF\u5207\u63DB\u767D\u5929\u3001\u508D\u665A\u3001\u591C\u665A\u3002\u7D44\u5225\u3001\u985E\u5225\u8207\u6708\u4EFD\u8ACB\u7528\u6587\u7A3F\u5C0E\u89BD\u3002",sky:"\u6ED1\u9F20\uFF0F\u89F8\u63A7\u62D6\u66F3\u65CB\u8F49\uFF0C\u6EFE\u8F2A\u6216\u96D9\u6307\u7E2E\u653E\u3002\u5169\u67B6\u73A9\u5177\u98DB\u6A5F\u53EA\u662F\u98A8\u666F\uFF0C\u4E0D\u80FD\u9EDE\u9078\u3002\u53EF\u5207\u63DB\u767D\u5929\u3001\u508D\u665A\u3001\u591C\u665A\u3002\u7D44\u5225\u3001\u985E\u5225\u8207\u6708\u4EFD\u8ACB\u7528\u6587\u7A3F\u5C0E\u89BD\u3002"},u=decodeURIComponent(location.hash.slice(1)).match(/^(\d{4}-\d{2})-/),_=new URLSearchParams(location.search);if(u){location.replace(`month.html?month=${encodeURIComponent(u[1])}${location.hash}`);return}if(/^\d{4}-\d{2}$/.test(_.get("month")||"")){location.replace(`month.html${location.search}${location.hash}`);return}let p;try{p=JSON.parse(document.getElementById("home-data").textContent||"{}")}catch{p={}}let d=Array.isArray(p.months)?p.months:[],g=null;try{g=localStorage.getItem("homeIslandMonth")}catch{}let E=d.find(b=>b.key===g)||d[d.length-1];function m(b){i.textContent=b,i.hidden=!1,s.disabled=!0,s.setAttribute("aria-pressed","false"),s.textContent="3D \u65CB\u8F49\u672A\u555F\u7528",r.disabled=!0}if(!d.length||!E){m("\u76EE\u524D\u5C1A\u7121\u6708\u4EFD\u8CC7\u6599\uFF1B\u8ACB\u4F7F\u7528\u6587\u7A3F\u5C0E\u89BD\uFF0C\u6216\u7A0D\u5F8C\u518D\u8A66\u3002");return}if(!document.createElement("canvas").getContext("webgl2")){m("\u6B64\u700F\u89BD\u5668\u672A\u555F\u7528 WebGL\uFF1B\u8ACB\u4F7F\u7528\u6587\u7A3F\u5C0E\u89BD\u9032\u5165\u5BE9\u7A3F\u9801\u3002\u82E5\u5C0E\u89BD\u5DF2\u6536\u5408\uFF0C\u6309\u4E0A\u65B9\u300C\u986F\u793A\u5C0E\u89BD\u300D\u3002");return}function S(){try{if(localStorage.getItem("homeIslandEdition")==="classic")return"classic"}catch{}return"sky"}function D(b){document.body.classList.toggle("edition-classic",b==="classic"),document.body.classList.toggle("edition-sky",b==="sky"),document.body.classList.remove("tod-day","tod-dusk","tod-night");let H="day";try{let F=localStorage.getItem("homeSkyTod");(F==="dusk"||F==="night")&&(H=F)}catch{}document.body.classList.add(`tod-${H}`),a&&(a.textContent=c[b]),document.querySelectorAll(".edition-switch [data-edition]").forEach(F=>{F.setAttribute("aria-checked",F.getAttribute("data-edition")===b?"true":"false")})}let w={status:i,stage:t,canvasHost:e,labelHost:n,rotateButton:s,resetButton:r,reducedMotion:o,data:p,months:d,latest:E},A=null,C=null;function x(b){A&&(A(),A=null),e.replaceChildren(),n.replaceChildren(),D(b),C=b;try{A=b==="classic"?Ph(w):Ih(w)}catch(H){console.error(H),m("3D \u5834\u666F\u7121\u6CD5\u555F\u52D5\uFF1B\u6587\u7A3F\u5C0E\u89BD\u4ECD\u53EF\u5B8C\u6574\u4F7F\u7528\u3002\u82E5\u5C0E\u89BD\u5DF2\u6536\u5408\uFF0C\u6309\u4E0A\u65B9\u300C\u986F\u793A\u5C0E\u89BD\u300D\u3002")}}x(S()),window.addEventListener("home-island-edition",b=>{let H=b.detail==="classic"?"classic":"sky";H!==C&&x(H)})})();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
