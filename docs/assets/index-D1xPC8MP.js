(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ua="160",uc=0,Oa=1,dc=2,fl=1,pl=2,Sn=3,Gn=0,Ne=1,hn=2,En=0,Jn=1,Fn=2,za=3,Ba=4,fc=5,$n=100,pc=101,mc=102,Ga=103,Ha=104,gc=200,_c=201,vc=202,xc=203,Jr=204,Qr=205,Mc=206,Sc=207,yc=208,Ec=209,Tc=210,wc=211,bc=212,Ac=213,Rc=214,Cc=0,Pc=1,Lc=2,Hs=3,Dc=4,Uc=5,Ic=6,Nc=7,ml=0,Fc=1,Oc=2,On=0,gl=1,_l=2,vl=3,da=4,zc=5,xl=6,Ml=300,bi=301,Ai=302,ta=303,ea=304,tr=306,Vs=1e3,rn=1001,na=1002,Ie=1003,Va=1004,fr=1005,Ye=1006,Bc=1007,Qi=1008,zn=1009,Gc=1010,Hc=1011,fa=1012,Sl=1013,In=1014,Nn=1015,Tn=1016,yl=1017,El=1018,Qn=1020,Vc=1021,an=1023,kc=1024,Wc=1025,ti=1026,Ri=1027,Xc=1028,Tl=1029,qc=1030,wl=1031,bl=1033,pr=33776,mr=33777,gr=33778,_r=33779,ka=35840,Wa=35841,Xa=35842,qa=35843,Al=36196,Ya=37492,Ka=37496,$a=37808,ja=37809,Za=37810,Ja=37811,Qa=37812,to=37813,eo=37814,no=37815,io=37816,so=37817,ro=37818,ao=37819,oo=37820,lo=37821,vr=36492,co=36494,ho=36495,Yc=36283,uo=36284,fo=36285,po=36286,Rl=3e3,ei=3001,Kc=3200,$c=3201,Cl=0,jc=1,$e="",pe="srgb",bn="srgb-linear",pa="display-p3",er="display-p3-linear",ks="linear",ie="srgb",Ws="rec709",Xs="p3",ii=7680,mo=519,Zc=512,Jc=513,Qc=514,Pl=515,th=516,eh=517,nh=518,ih=519,ia=35044,go="300 es",sa=1035,yn=2e3,qs=2001;class Li{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _o=1234567;const qi=Math.PI/180,ts=180/Math.PI;function wn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[s&255]+Re[s>>8&255]+Re[s>>16&255]+Re[s>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Te(s,t,e){return Math.max(t,Math.min(e,s))}function ma(s,t){return(s%t+t)%t}function sh(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function rh(s,t,e){return s!==t?(e-s)/(t-s):0}function Yi(s,t,e){return(1-e)*s+e*t}function ah(s,t,e,n){return Yi(s,t,1-Math.exp(-e*n))}function oh(s,t=1){return t-Math.abs(ma(s,t*2)-t)}function lh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function ch(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function hh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function uh(s,t){return s+Math.random()*(t-s)}function dh(s){return s*(.5-Math.random())}function fh(s){s!==void 0&&(_o=s);let t=_o+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ph(s){return s*qi}function mh(s){return s*ts}function ra(s){return(s&s-1)===0&&s!==0}function gh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ys(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _h(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*p,a*c);break;case"YXY":s.set(l*p,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function un(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Zt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const vh={DEG2RAD:qi,RAD2DEG:ts,generateUUID:wn,clamp:Te,euclideanModulo:ma,mapLinear:sh,inverseLerp:rh,lerp:Yi,damp:ah,pingpong:oh,smoothstep:lh,smootherstep:ch,randInt:hh,randFloat:uh,randFloatSpread:dh,seededRandom:fh,degToRad:ph,radToDeg:mh,isPowerOfTwo:ra,ceilPowerOfTwo:gh,floorPowerOfTwo:Ys,setQuaternionFromProperEuler:_h,normalize:Zt,denormalize:un};class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,i,r,o,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],v=i[0],m=i[3],f=i[6],w=i[1],x=i[4],y=i[7],C=i[2],R=i[5],A=i[8];return r[0]=o*v+a*w+l*C,r[3]=o*m+a*x+l*R,r[6]=o*f+a*y+l*A,r[1]=c*v+h*w+u*C,r[4]=c*m+h*x+u*R,r[7]=c*f+h*y+u*A,r[2]=d*v+p*w+g*C,r[5]=d*m+p*x+g*R,r[8]=d*f+p*y+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=d*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xr.makeScale(t,e)),this}rotate(t){return this.premultiply(xr.makeRotation(-t)),this}translate(t,e){return this.premultiply(xr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xr=new qt;function Ll(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ks(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xh(){const s=Ks("canvas");return s.style.display="block",s}const vo={};function Ki(s){s in vo||(vo[s]=!0,console.warn(s))}const xo=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mo=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cs={[bn]:{transfer:ks,primaries:Ws,toReference:s=>s,fromReference:s=>s},[pe]:{transfer:ie,primaries:Ws,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[er]:{transfer:ks,primaries:Xs,toReference:s=>s.applyMatrix3(Mo),fromReference:s=>s.applyMatrix3(xo)},[pa]:{transfer:ie,primaries:Xs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Mo),fromReference:s=>s.applyMatrix3(xo).convertLinearToSRGB()}},Mh=new Set([bn,er]),jt={enabled:!0,_workingColorSpace:bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Mh.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=cs[t].toReference,i=cs[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return cs[s].primaries},getTransfer:function(s){return s===$e?ks:cs[s].transfer}};function wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Mr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let si;class Dl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{si===void 0&&(si=Ks("canvas")),si.width=t.width,si.height=t.height;const n=si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ks("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wi(e[n]/255)*255):e[n]=wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sh=0;class Ul{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=wn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Sr(i[o].image)):r.push(Sr(i[o]))}else r=Sr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Sr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Dl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yh=0;class Fe extends Li{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=rn,i=rn,r=Ye,o=Qi,a=an,l=zn,c=Fe.DEFAULT_ANISOTROPY,h=$e){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=wn(),this.name="",this.source=new Ul(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ei?pe:$e),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ml)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vs:t.x=t.x-Math.floor(t.x);break;case rn:t.x=t.x<0?0:1;break;case na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vs:t.y=t.y-Math.floor(t.y);break;case rn:t.y=t.y<0?0:1;break;case na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pe?ei:Rl}set encoding(t){Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ei?pe:$e}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=Ml;Fe.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,i=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,y=(p+1)/2,C=(f+1)/2,R=(h+d)/4,A=(u+v)/4,N=(g+m)/4;return x>y&&x>C?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=R/n,r=A/n):y>C?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=R/i,r=N/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=A/r,i=N/r),this.set(n,i,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-v)/w,this.z=(d-h)/w,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Eh extends Li{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Ki("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ei?pe:$e),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Fe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ul(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class on extends Eh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Il extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Th extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ss{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*v,w=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const C=Math.sqrt(x),R=Math.atan2(C,f*w);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}const y=a*w;if(l=l*m+d*y,c=c*m+p*y,h=h*m+g*y,u=u*m+v*y,m===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(So.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(So.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return yr.copy(this).projectOnVector(t),this.sub(yr)}reflect(t){return this.sub(yr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yr=new T,So=new ss;class rs{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,tn):tn.fromBufferAttribute(r,o),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hs.copy(n.boundingBox)),hs.applyMatrix4(t.matrixWorld),this.union(hs)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fi),us.subVectors(this.max,Fi),ri.subVectors(t.a,Fi),ai.subVectors(t.b,Fi),oi.subVectors(t.c,Fi),Rn.subVectors(ai,ri),Cn.subVectors(oi,ai),kn.subVectors(ri,oi);let e=[0,-Rn.z,Rn.y,0,-Cn.z,Cn.y,0,-kn.z,kn.y,Rn.z,0,-Rn.x,Cn.z,0,-Cn.x,kn.z,0,-kn.x,-Rn.y,Rn.x,0,-Cn.y,Cn.x,0,-kn.y,kn.x,0];return!Er(e,ri,ai,oi,us)||(e=[1,0,0,0,1,0,0,0,1],!Er(e,ri,ai,oi,us))?!1:(ds.crossVectors(Rn,Cn),e=[ds.x,ds.y,ds.z],Er(e,ri,ai,oi,us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const mn=[new T,new T,new T,new T,new T,new T,new T,new T],tn=new T,hs=new rs,ri=new T,ai=new T,oi=new T,Rn=new T,Cn=new T,kn=new T,Fi=new T,us=new T,ds=new T,Wn=new T;function Er(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Wn.fromArray(s,r);const a=i.x*Math.abs(Wn.x)+i.y*Math.abs(Wn.y)+i.z*Math.abs(Wn.z),l=t.dot(Wn),c=e.dot(Wn),h=n.dot(Wn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const wh=new rs,Oi=new T,Tr=new T;class nr{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):wh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oi.subVectors(t,this.center);const e=Oi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Oi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Tr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oi.copy(t.center).add(Tr)),this.expandByPoint(Oi.copy(t.center).sub(Tr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new T,wr=new T,fs=new T,Pn=new T,br=new T,ps=new T,Ar=new T;class ir{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gn.copy(this.origin).addScaledVector(this.direction,e),gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){wr.copy(t).add(e).multiplyScalar(.5),fs.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(wr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(fs),a=Pn.dot(this.direction),l=-Pn.dot(fs),c=Pn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(wr).addScaledVector(fs,d),p}intersectSphere(t,e){gn.subVectors(t.center,this.origin);const n=gn.dot(this.direction),i=gn.dot(gn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,gn)!==null}intersectTriangle(t,e,n,i,r){br.subVectors(e,t),ps.subVectors(n,t),Ar.crossVectors(br,ps);let o=this.direction.dot(Ar),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pn.subVectors(this.origin,t);const l=a*this.direction.dot(ps.crossVectors(Pn,ps));if(l<0)return null;const c=a*this.direction.dot(br.cross(Pn));if(c<0||l+c>o)return null;const h=-a*Pn.dot(Ar);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,i,r,o,a,l,c,h,u,d,p,g,v,m){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,p,g,v,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/li.setFromMatrixColumn(t,0).length(),r=1/li.setFromMatrixColumn(t,1).length(),o=1/li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d+v*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bh,t,Ah)}lookAt(t,e,n){const i=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Ln.crossVectors(n,Ge),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Ln.crossVectors(n,Ge)),Ln.normalize(),ms.crossVectors(Ge,Ln),i[0]=Ln.x,i[4]=ms.x,i[8]=Ge.x,i[1]=Ln.y,i[5]=ms.y,i[9]=Ge.y,i[2]=Ln.z,i[6]=ms.z,i[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],w=n[3],x=n[7],y=n[11],C=n[15],R=i[0],A=i[4],N=i[8],M=i[12],b=i[1],H=i[5],V=i[9],st=i[13],P=i[2],I=i[6],k=i[10],Z=i[14],K=i[3],$=i[7],J=i[11],tt=i[15];return r[0]=o*R+a*b+l*P+c*K,r[4]=o*A+a*H+l*I+c*$,r[8]=o*N+a*V+l*k+c*J,r[12]=o*M+a*st+l*Z+c*tt,r[1]=h*R+u*b+d*P+p*K,r[5]=h*A+u*H+d*I+p*$,r[9]=h*N+u*V+d*k+p*J,r[13]=h*M+u*st+d*Z+p*tt,r[2]=g*R+v*b+m*P+f*K,r[6]=g*A+v*H+m*I+f*$,r[10]=g*N+v*V+m*k+f*J,r[14]=g*M+v*st+m*Z+f*tt,r[3]=w*R+x*b+y*P+C*K,r[7]=w*A+x*H+y*I+C*$,r[11]=w*N+x*V+y*k+C*J,r[15]=w*M+x*st+y*Z+C*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*p-n*l*p)+v*(+e*l*p-e*c*d+r*o*d-i*o*p+i*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],w=u*m*c-v*d*c+v*l*p-a*m*p-u*l*f+a*d*f,x=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,y=h*v*c-g*u*c+g*a*p-o*v*p-h*a*f+o*u*f,C=g*u*l-h*v*l-g*a*d+o*v*d+h*a*m-o*u*m,R=e*w+n*x+i*y+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=w*A,t[1]=(v*d*r-u*m*r-v*i*p+n*m*p+u*i*f-n*d*f)*A,t[2]=(a*m*r-v*l*r+v*i*c-n*m*c-a*i*f+n*l*f)*A,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*p-n*l*p)*A,t[4]=x*A,t[5]=(h*m*r-g*d*r+g*i*p-e*m*p-h*i*f+e*d*f)*A,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*f-e*l*f)*A,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*p+e*l*p)*A,t[8]=y*A,t[9]=(g*u*r-h*v*r-g*n*p+e*v*p+h*n*f-e*u*f)*A,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*f+e*a*f)*A,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*A,t[12]=C*A,t[13]=(h*v*i-g*u*i+g*n*d-e*v*d-h*n*m+e*u*m)*A,t[14]=(g*a*i-o*v*i-g*n*l+e*v*l+o*n*m-e*a*m)*A,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,v=o*h,m=o*u,f=a*u,w=l*c,x=l*h,y=l*u,C=n.x,R=n.y,A=n.z;return i[0]=(1-(v+f))*C,i[1]=(p+y)*C,i[2]=(g-x)*C,i[3]=0,i[4]=(p-y)*R,i[5]=(1-(d+f))*R,i[6]=(m+w)*R,i[7]=0,i[8]=(g+x)*A,i[9]=(m-w)*A,i[10]=(1-(d+v))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=li.set(i[0],i[1],i[2]).length();const o=li.set(i[4],i[5],i[6]).length(),a=li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],en.copy(this);const c=1/r,h=1/o,u=1/a;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=u,en.elements[9]*=u,en.elements[10]*=u,e.setFromRotationMatrix(en),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=yn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,g;if(a===yn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===qs)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=yn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,p=(n+i)*h;let g,v;if(a===yn)g=(o+r)*u,v=-2*u;else if(a===qs)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const li=new T,en=new oe,bh=new T(0,0,0),Ah=new T(1,1,1),Ln=new T,ms=new T,Ge=new T,yo=new oe,Eo=new ss;class as{constructor(t=0,e=0,n=0,i=as.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Eo.setFromEuler(this),this.setFromQuaternion(Eo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}as.DEFAULT_ORDER="XYZ";class ga{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rh=0;const To=new T,ci=new ss,_n=new oe,gs=new T,zi=new T,Ch=new T,Ph=new ss,wo=new T(1,0,0),bo=new T(0,1,0),Ao=new T(0,0,1),Lh={type:"added"},Dh={type:"removed"};class he extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=he.DEFAULT_UP.clone();const t=new T,e=new as,n=new ss,i=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new qt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=he.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.multiply(ci),this}rotateOnWorldAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.premultiply(ci),this}rotateX(t){return this.rotateOnAxis(wo,t)}rotateY(t){return this.rotateOnAxis(bo,t)}rotateZ(t){return this.rotateOnAxis(Ao,t)}translateOnAxis(t,e){return To.copy(t).applyQuaternion(this.quaternion),this.position.add(To.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wo,t)}translateY(t){return this.translateOnAxis(bo,t)}translateZ(t){return this.translateOnAxis(Ao,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gs.copy(t):gs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(zi,gs,this.up):_n.lookAt(gs,zi,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),ci.setFromRotationMatrix(_n),this.quaternion.premultiply(ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Lh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,t,Ch),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,Ph,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}he.DEFAULT_UP=new T(0,1,0);he.DEFAULT_MATRIX_AUTO_UPDATE=!0;he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new T,vn=new T,Rr=new T,xn=new T,hi=new T,ui=new T,Ro=new T,Cr=new T,Pr=new T,Lr=new T;let _s=!1;class Ke{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),nn.subVectors(t,e),i.cross(nn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){nn.subVectors(i,e),vn.subVectors(n,e),Rr.subVectors(t,e);const o=nn.dot(nn),a=nn.dot(vn),l=nn.dot(Rr),c=vn.dot(vn),h=vn.dot(Rr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(t,e,n,i,r,o,a,l){return _s===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_s=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(o,xn.y),l.addScaledVector(a,xn.z),l)}static isFrontFacing(t,e,n,i){return nn.subVectors(n,e),vn.subVectors(t,e),nn.cross(vn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),nn.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return _s===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_s=!0),Ke.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return Ke.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;hi.subVectors(i,n),ui.subVectors(r,n),Cr.subVectors(t,n);const l=hi.dot(Cr),c=ui.dot(Cr);if(l<=0&&c<=0)return e.copy(n);Pr.subVectors(t,i);const h=hi.dot(Pr),u=ui.dot(Pr);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(hi,o);Lr.subVectors(t,r);const p=hi.dot(Lr),g=ui.dot(Lr);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ui,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ro.subVectors(r,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(Ro,a);const f=1/(m+v+d);return o=v*f,a=d*f,e.copy(n).addScaledVector(hi,o).addScaledVector(ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Dr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=jt.workingColorSpace){if(t=ma(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Dr(o,r,t+1/3),this.g=Dr(o,r,t),this.b=Dr(o,r,t-1/3)}return jt.toWorkingColorSpace(this,i),this}setStyle(t,e=pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pe){const n=Nl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pe){return jt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Te(Ce.r*255,0,255))*65536+Math.round(Te(Ce.g*255,0,255))*256+Math.round(Te(Ce.b*255,0,255))}getHexString(t=pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,i=Ce.g,r=Ce.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=pe){jt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,i=Ce.b;return t!==pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(vs);const n=Yi(Dn.h,vs.h,e),i=Yi(Dn.s,vs.s,e),r=Yi(Dn.l,vs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Ot;Ot.NAMES=Nl;let Uh=0;class ni extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=Jn,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jr,this.blendDst=Qr,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jn&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jr&&(n.blendSrc=this.blendSrc),this.blendDst!==Qr&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class sr extends ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new T,xs=new pt;class Ee{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ia,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xs.fromBufferAttribute(this,e),xs.applyMatrix3(t),this.setXY(e,xs.x,xs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=un(e,this.array)),e}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=un(e,this.array)),e}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=un(e,this.array)),e}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ia&&(t.usage=this.usage),t}}class Fl extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ol extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ih=0;const qe=new oe,Ur=new he,di=new T,He=new rs,Bi=new rs,Se=new T;class ge extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ll(t)?Ol:Fl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return Ur.lookAt(t),Ur.updateMatrix(),this.applyMatrix4(Ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Bi.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(He.min,Bi.min),He.expandByPoint(Se),Se.addVectors(He.max,Bi.max),He.expandByPoint(Se)):(He.expandByPoint(Bi.min),He.expandByPoint(Bi.max))}He.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Se.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Se.fromBufferAttribute(a,c),l&&(di.fromBufferAttribute(t,c),Se.add(di)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<a;b++)c[b]=new T,h[b]=new T;const u=new T,d=new T,p=new T,g=new pt,v=new pt,m=new pt,f=new T,w=new T;function x(b,H,V){u.fromArray(i,b*3),d.fromArray(i,H*3),p.fromArray(i,V*3),g.fromArray(o,b*2),v.fromArray(o,H*2),m.fromArray(o,V*2),d.sub(u),p.sub(u),v.sub(g),m.sub(g);const st=1/(v.x*m.y-m.x*v.y);isFinite(st)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(st),w.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(st),c[b].add(f),c[H].add(f),c[V].add(f),h[b].add(w),h[H].add(w),h[V].add(w))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let b=0,H=y.length;b<H;++b){const V=y[b],st=V.start,P=V.count;for(let I=st,k=st+P;I<k;I+=3)x(n[I+0],n[I+1],n[I+2])}const C=new T,R=new T,A=new T,N=new T;function M(b){A.fromArray(r,b*3),N.copy(A);const H=c[b];C.copy(H),C.sub(A.multiplyScalar(A.dot(H))).normalize(),R.crossVectors(N,H);const st=R.dot(h[b])<0?-1:1;l[b*4]=C.x,l[b*4+1]=C.y,l[b*4+2]=C.z,l[b*4+3]=st}for(let b=0,H=y.length;b<H;++b){const V=y[b],st=V.start,P=V.count;for(let I=st,k=st+P;I<k;I+=3)M(n[I+0]),M(n[I+1]),M(n[I+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new T,r=new T,o=new T,a=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Ee(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ge,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Co=new oe,Xn=new ir,Ms=new nr,Po=new T,fi=new T,pi=new T,mi=new T,Ir=new T,Ss=new T,ys=new pt,Es=new pt,Ts=new pt,Lo=new T,Do=new T,Uo=new T,ws=new T,bs=new T;class ct extends he{constructor(t=new ge,e=new sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Ss.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ir.fromBufferAttribute(u,t),o?Ss.addScaledVector(Ir,h):Ss.addScaledVector(Ir.sub(e),h))}e.add(Ss)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(r),Xn.copy(t.ray).recast(t.near),!(Ms.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(Ms,Po)===null||Xn.origin.distanceToSquared(Po)>(t.far-t.near)**2))&&(Co.copy(r).invert(),Xn.copy(t.ray).applyMatrix4(Co),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,C=x;y<C;y+=3){const R=a.getX(y),A=a.getX(y+1),N=a.getX(y+2);i=As(this,f,t,n,c,h,u,R,A,N),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const w=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);i=As(this,o,t,n,c,h,u,w,x,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,C=x;y<C;y+=3){const R=y,A=y+1,N=y+2;i=As(this,f,t,n,c,h,u,R,A,N),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const w=m,x=m+1,y=m+2;i=As(this,o,t,n,c,h,u,w,x,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Nh(s,t,e,n,i,r,o,a){let l;if(t.side===Ne?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Gn,a),l===null)return null;bs.copy(a),bs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(bs);return c<e.near||c>e.far?null:{distance:c,point:bs.clone(),object:s}}function As(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,fi),s.getVertexPosition(l,pi),s.getVertexPosition(c,mi);const h=Nh(s,t,e,n,fi,pi,mi,ws);if(h){i&&(ys.fromBufferAttribute(i,a),Es.fromBufferAttribute(i,l),Ts.fromBufferAttribute(i,c),h.uv=Ke.getInterpolation(ws,fi,pi,mi,ys,Es,Ts,new pt)),r&&(ys.fromBufferAttribute(r,a),Es.fromBufferAttribute(r,l),Ts.fromBufferAttribute(r,c),h.uv1=Ke.getInterpolation(ws,fi,pi,mi,ys,Es,Ts,new pt),h.uv2=h.uv1),o&&(Lo.fromBufferAttribute(o,a),Do.fromBufferAttribute(o,l),Uo.fromBufferAttribute(o,c),h.normal=Ke.getInterpolation(ws,fi,pi,mi,Lo,Do,Uo,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new T,materialIndex:0};Ke.getNormal(fi,pi,mi,u.normal),h.face=u}return h}class Tt extends ge{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function g(v,m,f,w,x,y,C,R,A,N,M){const b=y/A,H=C/N,V=y/2,st=C/2,P=R/2,I=A+1,k=N+1;let Z=0,K=0;const $=new T;for(let J=0;J<k;J++){const tt=J*H-st;for(let lt=0;lt<I;lt++){const W=lt*b-V;$[v]=W*w,$[m]=tt*x,$[f]=P,c.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[f]=R>0?1:-1,h.push($.x,$.y,$.z),u.push(lt/A),u.push(1-J/N),Z+=1}}for(let J=0;J<N;J++)for(let tt=0;tt<A;tt++){const lt=d+tt+I*J,W=d+tt+I*(J+1),et=d+(tt+1)+I*(J+1),mt=d+(tt+1)+I*J;l.push(lt,W,mt),l.push(W,et,mt),K+=6}a.addGroup(p,K,M),p+=K,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ci(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ue(s){const t={};for(let e=0;e<s.length;e++){const n=Ci(s[e]);for(const i in n)t[i]=n[i]}return t}function Fh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function zl(s){return s.getRenderTarget()===null?s.outputColorSpace:jt.workingColorSpace}const es={clone:Ci,merge:Ue};var Oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class be extends ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oh,this.fragmentShader=zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ci(t.uniforms),this.uniformsGroups=Fh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Bl extends he{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ke extends Bl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ts*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gi=-90,_i=1;class Bh extends he{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ke(gi,_i,t,e);i.layers=this.layers,this.add(i);const r=new ke(gi,_i,t,e);r.layers=this.layers,this.add(r);const o=new ke(gi,_i,t,e);o.layers=this.layers,this.add(o);const a=new ke(gi,_i,t,e);a.layers=this.layers,this.add(a);const l=new ke(gi,_i,t,e);l.layers=this.layers,this.add(l);const c=new ke(gi,_i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Gl extends Fe{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:bi,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gh extends on{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Ki("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ei?pe:$e),this.texture=new Gl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Tt(5,5,5),r=new be({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:En});r.uniforms.tEquirect.value=e;const o=new ct(i,r),a=e.minFilter;return e.minFilter===Qi&&(e.minFilter=Ye),new Bh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Nr=new T,Hh=new T,Vh=new qt;class Yn{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Nr.subVectors(n,e).cross(Hh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Nr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Vh.getNormalMatrix(t),i=this.coplanarPoint(Nr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new nr,Rs=new T;class _a{constructor(t=new Yn,e=new Yn,n=new Yn,i=new Yn,r=new Yn,o=new Yn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],v=i[10],m=i[11],f=i[12],w=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-r,d-c,m-p,y-f).normalize(),n[1].setComponents(l+r,d+c,m+p,y+f).normalize(),n[2].setComponents(l+o,d+h,m+g,y+w).normalize(),n[3].setComponents(l-o,d-h,m-g,y-w).normalize(),n[4].setComponents(l-a,d-u,m-v,y-x).normalize(),e===yn)n[5].setComponents(l+a,d+u,m+v,y+x).normalize();else if(e===qs)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(t){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Rs.x=i.normal.x>0?t.max.x:t.min.x,Rs.y=i.normal.y>0?t.max.y:t.min.y,Rs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hl(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function kh(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,p=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=s.SHORT;else if(u instanceof Uint32Array)v=s.UNSIGNED_INT;else if(u instanceof Int32Array)v=s.INT;else if(u instanceof Int8Array)v=s.BYTE;else if(u instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){const d=h.array,p=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),p.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let v=0,m=g.length;v<m;v++){const f=g[v];e?s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class Un extends ge{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const w=f*d-o;for(let x=0;x<c;x++){const y=x*u-r;g.push(y,-w,0),v.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){const x=w+c*f,y=w+c*(f+1),C=w+1+c*(f+1),R=w+1+c*f;p.push(x,y,R),p.push(y,C,R)}this.setIndex(p),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.width,t.height,t.widthSegments,t.heightSegments)}}var Wh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xh=`#ifdef USE_ALPHAHASH
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
#endif`,qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jh=`#ifdef USE_AOMAP
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
#endif`,Zh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,tu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iu=`#ifdef USE_IRIDESCENCE
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
#endif`,su=`#ifdef USE_BUMPMAP
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
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fu=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,pu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mu=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_u=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Su=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,yu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Eu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tu=`#ifdef USE_ENVMAP
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
#endif`,wu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Au=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ru=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lu=`#ifdef USE_GRADIENTMAP
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
}`,Du=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fu=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Ou=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,zu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,ku=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wu=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,qu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ku=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$u=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ju=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,td=`#if defined( USE_POINTS_UV )
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
#endif`,ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,id=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,rd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ad=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ld=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dd=`#ifdef USE_NORMALMAP
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
#endif`,fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,md=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_d=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Md=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ed=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Td=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ad=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,Rd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pd=`#ifdef USE_SKINNING
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
#endif`,Ld=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dd=`#ifdef USE_SKINNING
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
#endif`,Ud=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Id=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fd=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Od=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zd=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wd=`uniform sampler2D t2D;
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
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$d=`#include <common>
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
}`,jd=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Zd=`#define DISTANCE
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
}`,Jd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ef=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sf=`#include <common>
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
}`,rf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,af=`#define LAMBERT
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
}`,of=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,lf=`#define MATCAP
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
}`,cf=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,hf=`#define NORMAL
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
}`,uf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,df=`#define PHONG
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
}`,ff=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,pf=`#define STANDARD
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
}`,mf=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,gf=`#define TOON
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
}`,_f=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vf=`uniform float size;
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
}`,xf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Mf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Sf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,yf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Ef=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Vt={alphahash_fragment:Wh,alphahash_pars_fragment:Xh,alphamap_fragment:qh,alphamap_pars_fragment:Yh,alphatest_fragment:Kh,alphatest_pars_fragment:$h,aomap_fragment:jh,aomap_pars_fragment:Zh,batching_pars_vertex:Jh,batching_vertex:Qh,begin_vertex:tu,beginnormal_vertex:eu,bsdfs:nu,iridescence_fragment:iu,bumpmap_pars_fragment:su,clipping_planes_fragment:ru,clipping_planes_pars_fragment:au,clipping_planes_pars_vertex:ou,clipping_planes_vertex:lu,color_fragment:cu,color_pars_fragment:hu,color_pars_vertex:uu,color_vertex:du,common:fu,cube_uv_reflection_fragment:pu,defaultnormal_vertex:mu,displacementmap_pars_vertex:gu,displacementmap_vertex:_u,emissivemap_fragment:vu,emissivemap_pars_fragment:xu,colorspace_fragment:Mu,colorspace_pars_fragment:Su,envmap_fragment:yu,envmap_common_pars_fragment:Eu,envmap_pars_fragment:Tu,envmap_pars_vertex:wu,envmap_physical_pars_fragment:Ou,envmap_vertex:bu,fog_vertex:Au,fog_pars_vertex:Ru,fog_fragment:Cu,fog_pars_fragment:Pu,gradientmap_pars_fragment:Lu,lightmap_fragment:Du,lightmap_pars_fragment:Uu,lights_lambert_fragment:Iu,lights_lambert_pars_fragment:Nu,lights_pars_begin:Fu,lights_toon_fragment:zu,lights_toon_pars_fragment:Bu,lights_phong_fragment:Gu,lights_phong_pars_fragment:Hu,lights_physical_fragment:Vu,lights_physical_pars_fragment:ku,lights_fragment_begin:Wu,lights_fragment_maps:Xu,lights_fragment_end:qu,logdepthbuf_fragment:Yu,logdepthbuf_pars_fragment:Ku,logdepthbuf_pars_vertex:$u,logdepthbuf_vertex:ju,map_fragment:Zu,map_pars_fragment:Ju,map_particle_fragment:Qu,map_particle_pars_fragment:td,metalnessmap_fragment:ed,metalnessmap_pars_fragment:nd,morphcolor_vertex:id,morphnormal_vertex:sd,morphtarget_pars_vertex:rd,morphtarget_vertex:ad,normal_fragment_begin:od,normal_fragment_maps:ld,normal_pars_fragment:cd,normal_pars_vertex:hd,normal_vertex:ud,normalmap_pars_fragment:dd,clearcoat_normal_fragment_begin:fd,clearcoat_normal_fragment_maps:pd,clearcoat_pars_fragment:md,iridescence_pars_fragment:gd,opaque_fragment:_d,packing:vd,premultiplied_alpha_fragment:xd,project_vertex:Md,dithering_fragment:Sd,dithering_pars_fragment:yd,roughnessmap_fragment:Ed,roughnessmap_pars_fragment:Td,shadowmap_pars_fragment:wd,shadowmap_pars_vertex:bd,shadowmap_vertex:Ad,shadowmask_pars_fragment:Rd,skinbase_vertex:Cd,skinning_pars_vertex:Pd,skinning_vertex:Ld,skinnormal_vertex:Dd,specularmap_fragment:Ud,specularmap_pars_fragment:Id,tonemapping_fragment:Nd,tonemapping_pars_fragment:Fd,transmission_fragment:Od,transmission_pars_fragment:zd,uv_pars_fragment:Bd,uv_pars_vertex:Gd,uv_vertex:Hd,worldpos_vertex:Vd,background_vert:kd,background_frag:Wd,backgroundCube_vert:Xd,backgroundCube_frag:qd,cube_vert:Yd,cube_frag:Kd,depth_vert:$d,depth_frag:jd,distanceRGBA_vert:Zd,distanceRGBA_frag:Jd,equirect_vert:Qd,equirect_frag:tf,linedashed_vert:ef,linedashed_frag:nf,meshbasic_vert:sf,meshbasic_frag:rf,meshlambert_vert:af,meshlambert_frag:of,meshmatcap_vert:lf,meshmatcap_frag:cf,meshnormal_vert:hf,meshnormal_frag:uf,meshphong_vert:df,meshphong_frag:ff,meshphysical_vert:pf,meshphysical_frag:mf,meshtoon_vert:gf,meshtoon_frag:_f,points_vert:vf,points_frag:xf,shadow_vert:Mf,shadow_frag:Sf,sprite_vert:yf,sprite_frag:Ef},ht={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},cn={basic:{uniforms:Ue([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ue([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ue([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ue([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ue([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ue([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ue([ht.points,ht.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ue([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ue([ht.common,ht.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ue([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ue([ht.sprite,ht.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ue([ht.common,ht.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ue([ht.lights,ht.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};cn.physical={uniforms:Ue([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Cs={r:0,b:0,g:0};function Tf(s,t,e,n,i,r,o){const a=new Ot(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let w=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?e:t).get(x)),x===null?v(a,l):x&&x.isColor&&(v(x,1),w=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||w)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===tr)?(h===void 0&&(h=new ct(new Tt(1,1,1),new be({name:"BackgroundCubeMaterial",uniforms:Ci(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=jt.getTransfer(x.colorSpace)!==ie,(u!==x||d!==x.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ct(new Un(2,2),new be({name:"BackgroundMaterial",uniforms:Ci(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=jt.getTransfer(x.colorSpace)!==ie,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,f){m.getRGB(Cs,zl(s)),n.buffers.color.setClear(Cs.r,Cs.g,Cs.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function wf(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let c=l,h=!1;function u(P,I,k,Z,K){let $=!1;if(o){const J=v(Z,k,I);c!==J&&(c=J,p(c.object)),$=f(P,Z,k,K),$&&w(P,Z,k,K)}else{const J=I.wireframe===!0;(c.geometry!==Z.id||c.program!==k.id||c.wireframe!==J)&&(c.geometry=Z.id,c.program=k.id,c.wireframe=J,$=!0)}K!==null&&e.update(K,s.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,N(P,I,k,Z),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,I,k){const Z=k.wireframe===!0;let K=a[P.id];K===void 0&&(K={},a[P.id]=K);let $=K[I.id];$===void 0&&($={},K[I.id]=$);let J=$[Z];return J===void 0&&(J=m(d()),$[Z]=J),J}function m(P){const I=[],k=[],Z=[];for(let K=0;K<i;K++)I[K]=0,k[K]=0,Z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:Z,object:P,attributes:{},index:null}}function f(P,I,k,Z){const K=c.attributes,$=I.attributes;let J=0;const tt=k.getAttributes();for(const lt in tt)if(tt[lt].location>=0){const et=K[lt];let mt=$[lt];if(mt===void 0&&(lt==="instanceMatrix"&&P.instanceMatrix&&(mt=P.instanceMatrix),lt==="instanceColor"&&P.instanceColor&&(mt=P.instanceColor)),et===void 0||et.attribute!==mt||mt&&et.data!==mt.data)return!0;J++}return c.attributesNum!==J||c.index!==Z}function w(P,I,k,Z){const K={},$=I.attributes;let J=0;const tt=k.getAttributes();for(const lt in tt)if(tt[lt].location>=0){let et=$[lt];et===void 0&&(lt==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),lt==="instanceColor"&&P.instanceColor&&(et=P.instanceColor));const mt={};mt.attribute=et,et&&et.data&&(mt.data=et.data),K[lt]=mt,J++}c.attributes=K,c.attributesNum=J,c.index=Z}function x(){const P=c.newAttributes;for(let I=0,k=P.length;I<k;I++)P[I]=0}function y(P){C(P,0)}function C(P,I){const k=c.newAttributes,Z=c.enabledAttributes,K=c.attributeDivisors;k[P]=1,Z[P]===0&&(s.enableVertexAttribArray(P),Z[P]=1),K[P]!==I&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,I),K[P]=I)}function R(){const P=c.newAttributes,I=c.enabledAttributes;for(let k=0,Z=I.length;k<Z;k++)I[k]!==P[k]&&(s.disableVertexAttribArray(k),I[k]=0)}function A(P,I,k,Z,K,$,J){J===!0?s.vertexAttribIPointer(P,I,k,K,$):s.vertexAttribPointer(P,I,k,Z,K,$)}function N(P,I,k,Z){if(n.isWebGL2===!1&&(P.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const K=Z.attributes,$=k.getAttributes(),J=I.defaultAttributeValues;for(const tt in $){const lt=$[tt];if(lt.location>=0){let W=K[tt];if(W===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){const et=W.normalized,mt=W.itemSize,St=e.get(W);if(St===void 0)continue;const yt=St.buffer,Nt=St.type,zt=St.bytesPerElement,Rt=n.isWebGL2===!0&&(Nt===s.INT||Nt===s.UNSIGNED_INT||W.gpuType===Sl);if(W.isInterleavedBufferAttribute){const Wt=W.data,F=Wt.stride,rt=W.offset;if(Wt.isInstancedInterleavedBuffer){for(let q=0;q<lt.locationSize;q++)C(lt.location+q,Wt.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Wt.meshPerAttribute*Wt.count)}else for(let q=0;q<lt.locationSize;q++)y(lt.location+q);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let q=0;q<lt.locationSize;q++)A(lt.location+q,mt/lt.locationSize,Nt,et,F*zt,(rt+mt/lt.locationSize*q)*zt,Rt)}else{if(W.isInstancedBufferAttribute){for(let Wt=0;Wt<lt.locationSize;Wt++)C(lt.location+Wt,W.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Wt=0;Wt<lt.locationSize;Wt++)y(lt.location+Wt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let Wt=0;Wt<lt.locationSize;Wt++)A(lt.location+Wt,mt/lt.locationSize,Nt,et,mt*zt,mt/lt.locationSize*Wt*zt,Rt)}}else if(J!==void 0){const et=J[tt];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(lt.location,et);break;case 3:s.vertexAttrib3fv(lt.location,et);break;case 4:s.vertexAttrib4fv(lt.location,et);break;default:s.vertexAttrib1fv(lt.location,et)}}}}R()}function M(){V();for(const P in a){const I=a[P];for(const k in I){const Z=I[k];for(const K in Z)g(Z[K].object),delete Z[K];delete I[k]}delete a[P]}}function b(P){if(a[P.id]===void 0)return;const I=a[P.id];for(const k in I){const Z=I[k];for(const K in Z)g(Z[K].object),delete Z[K];delete I[k]}delete a[P.id]}function H(P){for(const I in a){const k=a[I];if(k[P.id]===void 0)continue;const Z=k[P.id];for(const K in Z)g(Z[K].object),delete Z[K];delete k[P.id]}}function V(){st(),h=!0,c!==l&&(c=l,p(c.object))}function st(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:V,resetDefaultState:st,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:H,initAttributes:x,enableAttribute:y,disableUnusedAttributes:R}}function bf(s,t,e,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,g;if(i)p=s,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Af(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,y=o||t.has("OES_texture_float"),C=x&&y,R=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:w,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:R}}function Rf(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Yn,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const w=r?0:n,x=w*4;let y=f.clippingState||null;l.value=y,y=h(g,d,x,p);for(let C=0;C!==x;++C)y[C]=e[C];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,y=p;x!==v;++x,y+=4)o.copy(u[x]).applyMatrix4(w,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Cf(s){let t=new WeakMap;function e(o,a){return a===ta?o.mapping=bi:a===ea&&(o.mapping=Ai),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ta||a===ea)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Gh(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class va extends Bl{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ei=4,Io=[.125,.215,.35,.446,.526,.582],jn=20,Fr=new va,No=new Ot;let Or=null,zr=0,Br=0;const Kn=(1+Math.sqrt(5))/2,vi=1/Kn,Fo=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,Kn,vi),new T(0,Kn,-vi),new T(vi,0,Kn),new T(-vi,0,Kn),new T(Kn,vi,0),new T(-Kn,vi,0)];class aa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Or=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Or,zr,Br),t.scissorTest=!1,Ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bi||t.mapping===Ai?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Or=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:Tn,format:an,colorSpace:bn,depthBuffer:!1},i=Oo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pf(r)),this._blurMaterial=Lf(r,t,e)}return i}_compileMaterial(t){const e=new ct(this._lodPlanes[0],t);this._renderer.compile(e,Fr)}_sceneToCubeUV(t,e,n,i){const a=new ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(No),h.toneMapping=On,h.autoClear=!1;const p=new sr({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),g=new ct(new Tt,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(No),v=!0);for(let f=0;f<6;f++){const w=f%3;w===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):w===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;Ps(i,w*x,f>2?x:0,x,x),h.setRenderTarget(i),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===bi||t.mapping===Ai;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zo());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ct(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Fr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Fo[(i-1)%Fo.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ct(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*jn-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):jn;m>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`);const f=[];let w=0;for(let A=0;A<jn;++A){const N=A/v,M=Math.exp(-N*N/2);f.push(M),A===0?w+=M:A<m&&(w+=2*M)}for(let A=0;A<f.length;A++)f[A]=f[A]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const y=this._sizeLods[i],C=3*y*(i>x-Ei?i-x+Ei:0),R=4*(this._cubeSize-y);Ps(e,C,R,3*y,2*y),l.setRenderTarget(e),l.render(u,Fr)}}function Pf(s){const t=[],e=[],n=[];let i=s;const r=s-Ei+1+Io.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Ei?l=Io[o-s+Ei-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,w=new Float32Array(v*g*p),x=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,N=R>2?0:-1,M=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];w.set(M,v*g*R),x.set(d,m*g*R);const b=[R,R,R,R,R,R];y.set(b,f*g*R)}const C=new ge;C.setAttribute("position",new Ee(w,v)),C.setAttribute("uv",new Ee(x,m)),C.setAttribute("faceIndex",new Ee(y,f)),t.push(C),i>Ei&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Oo(s,t,e){const n=new on(s,t,e);return n.texture.mapping=tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Lf(s,t,e){const n=new Float32Array(jn),i=new T(0,1,0);return new be({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xa(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function zo(){return new be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function Bo(){return new be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function xa(){return`

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
	`}function Df(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ta||l===ea,h=l===bi||l===Ai;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new aa(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new aa(s));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Uf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function If(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)t.update(v[m],s.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let x=0,y=w.length;x<y;x+=3){const C=w[x+0],R=w[x+1],A=w[x+2];d.push(C,R,R,A,A,C)}}else if(g!==void 0){const w=g.array;v=g.version;for(let x=0,y=w.length/3-1;x<y;x+=3){const C=x+0,R=x+1,A=x+2;d.push(C,R,R,A,A,C)}}else return;const m=new(Ll(d)?Ol:Fl)(d,1);m.version=v;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Nf(s,t,e,n){const i=n.isWebGL2;let r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,g){s.drawElements(r,g,a,p*l),e.update(g,r,1)}function u(p,g,v){if(v===0)return;let m,f;if(i)m=s,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,a,p*l,v),e.update(g,r,v)}function d(p,g,v){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<v;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,v);let f=0;for(let w=0;w<v;w++)f+=g[w];e.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Ff(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Of(s,t){return s[0]-t[0]}function zf(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Bf(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new re,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==v){let I=function(){st.dispose(),r.delete(h),h.removeEventListener("dispose",I)};var p=I;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let M=0;x===!0&&(M=1),y===!0&&(M=2),C===!0&&(M=3);let b=h.attributes.position.count*M,H=1;b>t.maxTextureSize&&(H=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const V=new Float32Array(b*H*4*v),st=new Il(V,b,H,v);st.type=Nn,st.needsUpdate=!0;const P=M*4;for(let k=0;k<v;k++){const Z=R[k],K=A[k],$=N[k],J=b*H*4*k;for(let tt=0;tt<Z.count;tt++){const lt=tt*P;x===!0&&(o.fromBufferAttribute(Z,tt),V[J+lt+0]=o.x,V[J+lt+1]=o.y,V[J+lt+2]=o.z,V[J+lt+3]=0),y===!0&&(o.fromBufferAttribute(K,tt),V[J+lt+4]=o.x,V[J+lt+5]=o.y,V[J+lt+6]=o.z,V[J+lt+7]=0),C===!0&&(o.fromBufferAttribute($,tt),V[J+lt+8]=o.x,V[J+lt+9]=o.y,V[J+lt+10]=o.z,V[J+lt+11]=$.itemSize===4?o.w:1)}}m={count:v,texture:st,size:new pt(b,H)},r.set(h,m),h.addEventListener("dispose",I)}let f=0;for(let x=0;x<d.length;x++)f+=d[x];const w=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(s,"morphTargetBaseInfluence",w),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let v=n[h.id];if(v===void 0||v.length!==g){v=[];for(let y=0;y<g;y++)v[y]=[y,0];n[h.id]=v}for(let y=0;y<g;y++){const C=v[y];C[0]=y,C[1]=d[y]}v.sort(zf);for(let y=0;y<8;y++)y<g&&v[y][1]?(a[y][0]=v[y][0],a[y][1]=v[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Of);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let w=0;for(let y=0;y<8;y++){const C=a[y],R=C[0],A=C[1];R!==Number.MAX_SAFE_INTEGER&&A?(m&&h.getAttribute("morphTarget"+y)!==m[R]&&h.setAttribute("morphTarget"+y,m[R]),f&&h.getAttribute("morphNormal"+y)!==f[R]&&h.setAttribute("morphNormal"+y,f[R]),i[y]=A,w+=A):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),f&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const x=h.morphTargetsRelative?1:1-w;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Gf(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Vl extends Fe{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:ti,h!==ti&&h!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ti&&(n=In),n===void 0&&h===Ri&&(n=Qn),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ie,this.minFilter=l!==void 0?l:Ie,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const kl=new Fe,Wl=new Vl(1,1);Wl.compareFunction=Pl;const Xl=new Il,ql=new Th,Yl=new Gl,Go=[],Ho=[],Vo=new Float32Array(16),ko=new Float32Array(9),Wo=new Float32Array(4);function Di(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Go[i];if(r===void 0&&(r=new Float32Array(i),Go[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function _e(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ve(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function rr(s,t){let e=Ho[t];e===void 0&&(e=new Int32Array(t),Ho[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Hf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Vf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2fv(this.addr,t),ve(e,t)}}function kf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;s.uniform3fv(this.addr,t),ve(e,t)}}function Wf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4fv(this.addr,t),ve(e,t)}}function Xf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Wo.set(n),s.uniformMatrix2fv(this.addr,!1,Wo),ve(e,n)}}function qf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;ko.set(n),s.uniformMatrix3fv(this.addr,!1,ko),ve(e,n)}}function Yf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Vo.set(n),s.uniformMatrix4fv(this.addr,!1,Vo),ve(e,n)}}function Kf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function $f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2iv(this.addr,t),ve(e,t)}}function jf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3iv(this.addr,t),ve(e,t)}}function Zf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4iv(this.addr,t),ve(e,t)}}function Jf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Qf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2uiv(this.addr,t),ve(e,t)}}function tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3uiv(this.addr,t),ve(e,t)}}function ep(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4uiv(this.addr,t),ve(e,t)}}function np(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Wl:kl;e.setTexture2D(t||r,i)}function ip(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ql,i)}function sp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Yl,i)}function rp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Xl,i)}function ap(s){switch(s){case 5126:return Hf;case 35664:return Vf;case 35665:return kf;case 35666:return Wf;case 35674:return Xf;case 35675:return qf;case 35676:return Yf;case 5124:case 35670:return Kf;case 35667:case 35671:return $f;case 35668:case 35672:return jf;case 35669:case 35673:return Zf;case 5125:return Jf;case 36294:return Qf;case 36295:return tp;case 36296:return ep;case 35678:case 36198:case 36298:case 36306:case 35682:return np;case 35679:case 36299:case 36307:return ip;case 35680:case 36300:case 36308:case 36293:return sp;case 36289:case 36303:case 36311:case 36292:return rp}}function op(s,t){s.uniform1fv(this.addr,t)}function lp(s,t){const e=Di(t,this.size,2);s.uniform2fv(this.addr,e)}function cp(s,t){const e=Di(t,this.size,3);s.uniform3fv(this.addr,e)}function hp(s,t){const e=Di(t,this.size,4);s.uniform4fv(this.addr,e)}function up(s,t){const e=Di(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function dp(s,t){const e=Di(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function fp(s,t){const e=Di(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function pp(s,t){s.uniform1iv(this.addr,t)}function mp(s,t){s.uniform2iv(this.addr,t)}function gp(s,t){s.uniform3iv(this.addr,t)}function _p(s,t){s.uniform4iv(this.addr,t)}function vp(s,t){s.uniform1uiv(this.addr,t)}function xp(s,t){s.uniform2uiv(this.addr,t)}function Mp(s,t){s.uniform3uiv(this.addr,t)}function Sp(s,t){s.uniform4uiv(this.addr,t)}function yp(s,t,e){const n=this.cache,i=t.length,r=rr(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||kl,r[o])}function Ep(s,t,e){const n=this.cache,i=t.length,r=rr(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||ql,r[o])}function Tp(s,t,e){const n=this.cache,i=t.length,r=rr(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Yl,r[o])}function wp(s,t,e){const n=this.cache,i=t.length,r=rr(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Xl,r[o])}function bp(s){switch(s){case 5126:return op;case 35664:return lp;case 35665:return cp;case 35666:return hp;case 35674:return up;case 35675:return dp;case 35676:return fp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return vp;case 36294:return xp;case 36295:return Mp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35679:case 36299:case 36307:return Ep;case 35680:case 36300:case 36308:case 36293:return Tp;case 36289:case 36303:case 36311:case 36292:return wp}}class Ap{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ap(e.type)}}class Rp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bp(e.type)}}class Cp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Gr=/(\w+)(\])?(\[|\.)?/g;function Xo(s,t){s.seq.push(t),s.map[t.id]=t}function Pp(s,t,e){const n=s.name,i=n.length;for(Gr.lastIndex=0;;){const r=Gr.exec(n),o=Gr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Xo(e,c===void 0?new Ap(a,s,t):new Rp(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Cp(a),Xo(e,u)),e=u}}}class Bs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Pp(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function qo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Lp=37297;let Dp=0;function Up(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Ip(s){const t=jt.getPrimaries(jt.workingColorSpace),e=jt.getPrimaries(s);let n;switch(t===e?n="":t===Xs&&e===Ws?n="LinearDisplayP3ToLinearSRGB":t===Ws&&e===Xs&&(n="LinearSRGBToLinearDisplayP3"),s){case bn:case er:return[n,"LinearTransferOETF"];case pe:case pa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Yo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Up(s.getShaderSource(t),o)}else return i}function Np(s,t){const e=Ip(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Fp(s,t){let e;switch(t){case gl:e="Linear";break;case _l:e="Reinhard";break;case vl:e="OptimizedCineon";break;case da:e="ACESFilmic";break;case xl:e="AgX";break;case zc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Op(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ti).join(`
`)}function zp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ti).join(`
`)}function Bp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ti(s){return s!==""}function Ko(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $o(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hp=/^[ \t]*#include +<([\w\d./]+)>/gm;function oa(s){return s.replace(Hp,kp)}const Vp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kp(s,t){let e=Vt[t];if(e===void 0){const n=Vp.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return oa(e)}const Wp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jo(s){return s.replace(Wp,Xp)}function Xp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Zo(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function qp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===fl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===pl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function Yp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case bi:case Ai:t="ENVMAP_TYPE_CUBE";break;case tr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Kp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ai:t="ENVMAP_MODE_REFRACTION";break}return t}function $p(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ml:t="ENVMAP_BLENDING_MULTIPLY";break;case Fc:t="ENVMAP_BLENDING_MIX";break;case Oc:t="ENVMAP_BLENDING_ADD";break}return t}function jp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Zp(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=qp(e),c=Yp(e),h=Kp(e),u=$p(e),d=jp(e),p=e.isWebGL2?"":Op(e),g=zp(e),v=Bp(r),m=i.createProgram();let f,w,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ti).join(`
`),f.length>0&&(f+=`
`),w=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ti).join(`
`),w.length>0&&(w+=`
`)):(f=[Zo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ti).join(`
`),w=[p,Zo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Vt.tonemapping_pars_fragment:"",e.toneMapping!==On?Fp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Np("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ti).join(`
`)),o=oa(o),o=Ko(o,e),o=$o(o,e),a=oa(a),a=Ko(a,e),a=$o(a,e),o=jo(o),a=jo(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,w=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===go?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const y=x+f+o,C=x+w+a,R=qo(i,i.VERTEX_SHADER,y),A=qo(i,i.FRAGMENT_SHADER,C);i.attachShader(m,R),i.attachShader(m,A),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function N(V){if(s.debug.checkShaderErrors){const st=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(R).trim(),I=i.getShaderInfoLog(A).trim();let k=!0,Z=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,R,A);else{const K=Yo(i,R,"vertex"),$=Yo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+st+`
`+K+`
`+$)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(P===""||I==="")&&(Z=!1);Z&&(V.diagnostics={runnable:k,programLog:st,vertexShader:{log:P,prefix:f},fragmentShader:{log:I,prefix:w}})}i.deleteShader(R),i.deleteShader(A),M=new Bs(i,m),b=Gp(i,m)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=i.getProgramParameter(m,Lp)),H},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dp++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=A,this}let Jp=0;class Qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new tm(t),e.set(t,n)),n}}class tm{constructor(t){this.id=Jp++,this.code=t,this.usedTimes=0}}function em(s,t,e,n,i,r,o){const a=new ga,l=new Qp,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function m(M,b,H,V,st){const P=V.fog,I=st.geometry,k=M.isMeshStandardMaterial?V.environment:null,Z=(M.isMeshStandardMaterial?e:t).get(M.envMap||k),K=Z&&Z.mapping===tr?Z.image.height:null,$=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const J=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,tt=J!==void 0?J.length:0;let lt=0;I.morphAttributes.position!==void 0&&(lt=1),I.morphAttributes.normal!==void 0&&(lt=2),I.morphAttributes.color!==void 0&&(lt=3);let W,et,mt,St;if($){const Pe=cn[$];W=Pe.vertexShader,et=Pe.fragmentShader}else W=M.vertexShader,et=M.fragmentShader,l.update(M),mt=l.getVertexShaderID(M),St=l.getFragmentShaderID(M);const yt=s.getRenderTarget(),Nt=st.isInstancedMesh===!0,zt=st.isBatchedMesh===!0,Rt=!!M.map,Wt=!!M.matcap,F=!!Z,rt=!!M.aoMap,q=!!M.lightMap,Q=!!M.bumpMap,O=!!M.normalMap,it=!!M.displacementMap,at=!!M.emissiveMap,S=!!M.metalnessMap,_=!!M.roughnessMap,D=M.anisotropy>0,Y=M.clearcoat>0,X=M.iridescence>0,j=M.sheen>0,_t=M.transmission>0,ut=D&&!!M.anisotropyMap,gt=Y&&!!M.clearcoatMap,wt=Y&&!!M.clearcoatNormalMap,Dt=Y&&!!M.clearcoatRoughnessMap,nt=X&&!!M.iridescenceMap,Yt=X&&!!M.iridescenceThicknessMap,Ft=j&&!!M.sheenColorMap,bt=j&&!!M.sheenRoughnessMap,Mt=!!M.specularMap,xt=!!M.specularColorMap,It=!!M.specularIntensityMap,Kt=_t&&!!M.transmissionMap,Qt=_t&&!!M.thicknessMap,Gt=!!M.gradientMap,ot=!!M.alphaMap,L=M.alphaTest>0,dt=!!M.alphaHash,ft=!!M.extensions,Pt=!!I.attributes.uv1,At=!!I.attributes.uv2,te=!!I.attributes.uv3;let ee=On;return M.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(ee=s.toneMapping),{isWebGL2:h,shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:W,fragmentShader:et,defines:M.defines,customVertexShaderID:mt,customFragmentShaderID:St,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:zt,instancing:Nt,instancingColor:Nt&&st.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:yt===null?s.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:bn,map:Rt,matcap:Wt,envMap:F,envMapMode:F&&Z.mapping,envMapCubeUVHeight:K,aoMap:rt,lightMap:q,bumpMap:Q,normalMap:O,displacementMap:d&&it,emissiveMap:at,normalMapObjectSpace:O&&M.normalMapType===jc,normalMapTangentSpace:O&&M.normalMapType===Cl,metalnessMap:S,roughnessMap:_,anisotropy:D,anisotropyMap:ut,clearcoat:Y,clearcoatMap:gt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Dt,iridescence:X,iridescenceMap:nt,iridescenceThicknessMap:Yt,sheen:j,sheenColorMap:Ft,sheenRoughnessMap:bt,specularMap:Mt,specularColorMap:xt,specularIntensityMap:It,transmission:_t,transmissionMap:Kt,thicknessMap:Qt,gradientMap:Gt,opaque:M.transparent===!1&&M.blending===Jn,alphaMap:ot,alphaTest:L,alphaHash:dt,combine:M.combine,mapUv:Rt&&v(M.map.channel),aoMapUv:rt&&v(M.aoMap.channel),lightMapUv:q&&v(M.lightMap.channel),bumpMapUv:Q&&v(M.bumpMap.channel),normalMapUv:O&&v(M.normalMap.channel),displacementMapUv:it&&v(M.displacementMap.channel),emissiveMapUv:at&&v(M.emissiveMap.channel),metalnessMapUv:S&&v(M.metalnessMap.channel),roughnessMapUv:_&&v(M.roughnessMap.channel),anisotropyMapUv:ut&&v(M.anisotropyMap.channel),clearcoatMapUv:gt&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:wt&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:bt&&v(M.sheenRoughnessMap.channel),specularMapUv:Mt&&v(M.specularMap.channel),specularColorMapUv:xt&&v(M.specularColorMap.channel),specularIntensityMapUv:It&&v(M.specularIntensityMap.channel),transmissionMapUv:Kt&&v(M.transmissionMap.channel),thicknessMapUv:Qt&&v(M.thicknessMap.channel),alphaMapUv:ot&&v(M.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(O||D),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Pt,vertexUv2s:At,vertexUv3s:te,pointsUvs:st.isPoints===!0&&!!I.attributes.uv&&(Rt||ot),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:st.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:lt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:ee,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Rt&&M.map.isVideoTexture===!0&&jt.getTransfer(M.map.colorSpace)===ie,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hn,flipSided:M.side===Ne,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ft&&M.extensions.derivatives===!0,extensionFragDepth:ft&&M.extensions.fragDepth===!0,extensionDrawBuffers:ft&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ft&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ft&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const H in M.defines)b.push(H),b.push(M.defines[H]);return M.isRawShaderMaterial===!1&&(w(b,M),x(b,M),b.push(s.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function w(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function x(M,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){const b=g[M.type];let H;if(b){const V=cn[b];H=es.clone(V.uniforms)}else H=M.uniforms;return H}function C(M,b){let H;for(let V=0,st=c.length;V<st;V++){const P=c[V];if(P.cacheKey===b){H=P,++H.usedTimes;break}}return H===void 0&&(H=new Zp(s,b,M,r),c.push(H)),H}function R(M){if(--M.usedTimes===0){const b=c.indexOf(M);c[b]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:C,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:N}}function nm(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function im(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Jo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Qo(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,p,g,v,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),t++,f}function a(u,d,p,g,v,m){const f=o(u,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,g,v,m){const f=o(u,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||im),n.length>1&&n.sort(d||Jo),i.length>1&&i.sort(d||Jo)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function sm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Qo,s.set(n,[o])):i>=r.length?(o=new Qo,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function rm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Ot};break;case"SpotLight":e={position:new T,direction:new T,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new T,halfWidth:new T,halfHeight:new T};break}return s[t.id]=e,e}}}function am(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let om=0;function lm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function cm(s,t){const e=new rm,n=am(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new T);const r=new T,o=new oe,a=new oe;function l(h,u){let d=0,p=0,g=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let v=0,m=0,f=0,w=0,x=0,y=0,C=0,R=0,A=0,N=0,M=0;h.sort(lm);const b=u===!0?Math.PI:1;for(let V=0,st=h.length;V<st;V++){const P=h[V],I=P.color,k=P.intensity,Z=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=I.r*k*b,p+=I.g*k*b,g+=I.b*k*b;else if(P.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(P.sh.coefficients[$],k);M++}else if(P.isDirectionalLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){const J=P.shadow,tt=n.get(P);tt.shadowBias=J.bias,tt.shadowNormalBias=J.normalBias,tt.shadowRadius=J.radius,tt.shadowMapSize=J.mapSize,i.directionalShadow[v]=tt,i.directionalShadowMap[v]=K,i.directionalShadowMatrix[v]=P.shadow.matrix,y++}i.directional[v]=$,v++}else if(P.isSpotLight){const $=e.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(I).multiplyScalar(k*b),$.distance=Z,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,i.spot[f]=$;const J=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,J.updateMatrices(P),P.castShadow&&N++),i.spotLightMatrix[f]=J.matrix,P.castShadow){const tt=n.get(P);tt.shadowBias=J.bias,tt.shadowNormalBias=J.normalBias,tt.shadowRadius=J.radius,tt.shadowMapSize=J.mapSize,i.spotShadow[f]=tt,i.spotShadowMap[f]=K,R++}f++}else if(P.isRectAreaLight){const $=e.get(P);$.color.copy(I).multiplyScalar(k),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),i.rectArea[w]=$,w++}else if(P.isPointLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*b),$.distance=P.distance,$.decay=P.decay,P.castShadow){const J=P.shadow,tt=n.get(P);tt.shadowBias=J.bias,tt.shadowNormalBias=J.normalBias,tt.shadowRadius=J.radius,tt.shadowMapSize=J.mapSize,tt.shadowCameraNear=J.camera.near,tt.shadowCameraFar=J.camera.far,i.pointShadow[m]=tt,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=P.shadow.matrix,C++}i.point[m]=$,m++}else if(P.isHemisphereLight){const $=e.get(P);$.skyColor.copy(P.color).multiplyScalar(k*b),$.groundColor.copy(P.groundColor).multiplyScalar(k*b),i.hemi[x]=$,x++}}w>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const H=i.hash;(H.directionalLength!==v||H.pointLength!==m||H.spotLength!==f||H.rectAreaLength!==w||H.hemiLength!==x||H.numDirectionalShadows!==y||H.numPointShadows!==C||H.numSpotShadows!==R||H.numSpotMaps!==A||H.numLightProbes!==M)&&(i.directional.length=v,i.spot.length=f,i.rectArea.length=w,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=R+A-N,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=M,H.directionalLength=v,H.pointLength=m,H.spotLength=f,H.rectAreaLength=w,H.hemiLength=x,H.numDirectionalShadows=y,H.numPointShadows=C,H.numSpotShadows=R,H.numSpotMaps=A,H.numLightProbes=M,i.version=om++)}function c(h,u){let d=0,p=0,g=0,v=0,m=0;const f=u.matrixWorldInverse;for(let w=0,x=h.length;w<x;w++){const y=h[w];if(y.isDirectionalLight){const C=i.directional[d];C.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),d++}else if(y.isSpotLight){const C=i.spot[g];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),g++}else if(y.isRectAreaLight){const C=i.rectArea[v];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const C=i.point[p];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const C=i.hemi[m];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:i}}function tl(s,t){const e=new cm(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function hm(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new tl(s,t),e.set(r,[l])):o>=a.length?(l=new tl(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class um extends ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dm extends ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mm(s,t,e){let n=new _a;const i=new pt,r=new pt,o=new re,a=new um({depthPacking:$c}),l=new dm,c={},h=e.maxTextureSize,u={[Gn]:Ne,[Ne]:Gn,[hn]:hn},d=new be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:fm,fragmentShader:pm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ge;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ct(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fl;let f=this.type;this.render=function(R,A,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=s.getRenderTarget(),b=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),V=s.state;V.setBlending(En),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const st=f!==Sn&&this.type===Sn,P=f===Sn&&this.type!==Sn;for(let I=0,k=R.length;I<k;I++){const Z=R[I],K=Z.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const $=K.getFrameExtents();if(i.multiply($),r.copy(K.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,K.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,K.mapSize.y=r.y)),K.map===null||st===!0||P===!0){const tt=this.type!==Sn?{minFilter:Ie,magFilter:Ie}:{};K.map!==null&&K.map.dispose(),K.map=new on(i.x,i.y,tt),K.map.texture.name=Z.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const J=K.getViewportCount();for(let tt=0;tt<J;tt++){const lt=K.getViewport(tt);o.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),V.viewport(o),K.updateMatrices(Z,tt),n=K.getFrustum(),y(A,N,K.camera,Z,this.type)}K.isPointLightShadow!==!0&&this.type===Sn&&w(K,N),K.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(M,b,H)};function w(R,A){const N=t.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new on(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(A,null,N,d,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(A,null,N,p,v,null)}function x(R,A,N,M){let b=null;const H=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(H!==void 0)b=H;else if(b=N.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=b.uuid,st=A.uuid;let P=c[V];P===void 0&&(P={},c[V]=P);let I=P[st];I===void 0&&(I=b.clone(),P[st]=I,A.addEventListener("dispose",C)),b=I}if(b.visible=A.visible,b.wireframe=A.wireframe,M===Sn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=s.properties.get(b);V.light=N}return b}function y(R,A,N,M,b){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===Sn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const st=t.update(R),P=R.material;if(Array.isArray(P)){const I=st.groups;for(let k=0,Z=I.length;k<Z;k++){const K=I[k],$=P[K.materialIndex];if($&&$.visible){const J=x(R,$,M,b);R.onBeforeShadow(s,R,A,N,st,J,K),s.renderBufferDirect(N,null,st,J,R,K),R.onAfterShadow(s,R,A,N,st,J,K)}}}else if(P.visible){const I=x(R,P,M,b);R.onBeforeShadow(s,R,A,N,st,I,null),s.renderBufferDirect(N,null,st,I,R,null),R.onAfterShadow(s,R,A,N,st,I,null)}}const V=R.children;for(let st=0,P=V.length;st<P;st++)y(V[st],A,N,M,b)}function C(R){R.target.removeEventListener("dispose",C);for(const N in c){const M=c[N],b=R.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function gm(s,t,e){const n=e.isWebGL2;function i(){let L=!1;const dt=new re;let ft=null;const Pt=new re(0,0,0,0);return{setMask:function(At){ft!==At&&!L&&(s.colorMask(At,At,At,At),ft=At)},setLocked:function(At){L=At},setClear:function(At,te,ee,xe,Pe){Pe===!0&&(At*=xe,te*=xe,ee*=xe),dt.set(At,te,ee,xe),Pt.equals(dt)===!1&&(s.clearColor(At,te,ee,xe),Pt.copy(dt))},reset:function(){L=!1,ft=null,Pt.set(-1,0,0,0)}}}function r(){let L=!1,dt=null,ft=null,Pt=null;return{setTest:function(At){At?zt(s.DEPTH_TEST):Rt(s.DEPTH_TEST)},setMask:function(At){dt!==At&&!L&&(s.depthMask(At),dt=At)},setFunc:function(At){if(ft!==At){switch(At){case Cc:s.depthFunc(s.NEVER);break;case Pc:s.depthFunc(s.ALWAYS);break;case Lc:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case Dc:s.depthFunc(s.EQUAL);break;case Uc:s.depthFunc(s.GEQUAL);break;case Ic:s.depthFunc(s.GREATER);break;case Nc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ft=At}},setLocked:function(At){L=At},setClear:function(At){Pt!==At&&(s.clearDepth(At),Pt=At)},reset:function(){L=!1,dt=null,ft=null,Pt=null}}}function o(){let L=!1,dt=null,ft=null,Pt=null,At=null,te=null,ee=null,xe=null,Pe=null;return{setTest:function(ne){L||(ne?zt(s.STENCIL_TEST):Rt(s.STENCIL_TEST))},setMask:function(ne){dt!==ne&&!L&&(s.stencilMask(ne),dt=ne)},setFunc:function(ne,Le,ln){(ft!==ne||Pt!==Le||At!==ln)&&(s.stencilFunc(ne,Le,ln),ft=ne,Pt=Le,At=ln)},setOp:function(ne,Le,ln){(te!==ne||ee!==Le||xe!==ln)&&(s.stencilOp(ne,Le,ln),te=ne,ee=Le,xe=ln)},setLocked:function(ne){L=ne},setClear:function(ne){Pe!==ne&&(s.clearStencil(ne),Pe=ne)},reset:function(){L=!1,dt=null,ft=null,Pt=null,At=null,te=null,ee=null,xe=null,Pe=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let d={},p={},g=new WeakMap,v=[],m=null,f=!1,w=null,x=null,y=null,C=null,R=null,A=null,N=null,M=new Ot(0,0,0),b=0,H=!1,V=null,st=null,P=null,I=null,k=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,$=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(J)[1]),K=$>=1):J.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),K=$>=2);let tt=null,lt={};const W=s.getParameter(s.SCISSOR_BOX),et=s.getParameter(s.VIEWPORT),mt=new re().fromArray(W),St=new re().fromArray(et);function yt(L,dt,ft,Pt){const At=new Uint8Array(4),te=s.createTexture();s.bindTexture(L,te),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ee=0;ee<ft;ee++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(dt,0,s.RGBA,1,1,Pt,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(dt+ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return te}const Nt={};Nt[s.TEXTURE_2D]=yt(s.TEXTURE_2D,s.TEXTURE_2D,1),Nt[s.TEXTURE_CUBE_MAP]=yt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Nt[s.TEXTURE_2D_ARRAY]=yt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Nt[s.TEXTURE_3D]=yt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),zt(s.DEPTH_TEST),l.setFunc(Hs),at(!1),S(Oa),zt(s.CULL_FACE),O(En);function zt(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function Rt(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function Wt(L,dt){return p[L]!==dt?(s.bindFramebuffer(L,dt),p[L]=dt,n&&(L===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=dt),L===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=dt)),!0):!1}function F(L,dt){let ft=v,Pt=!1;if(L)if(ft=g.get(dt),ft===void 0&&(ft=[],g.set(dt,ft)),L.isWebGLMultipleRenderTargets){const At=L.texture;if(ft.length!==At.length||ft[0]!==s.COLOR_ATTACHMENT0){for(let te=0,ee=At.length;te<ee;te++)ft[te]=s.COLOR_ATTACHMENT0+te;ft.length=At.length,Pt=!0}}else ft[0]!==s.COLOR_ATTACHMENT0&&(ft[0]=s.COLOR_ATTACHMENT0,Pt=!0);else ft[0]!==s.BACK&&(ft[0]=s.BACK,Pt=!0);Pt&&(e.isWebGL2?s.drawBuffers(ft):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ft))}function rt(L){return m!==L?(s.useProgram(L),m=L,!0):!1}const q={[$n]:s.FUNC_ADD,[pc]:s.FUNC_SUBTRACT,[mc]:s.FUNC_REVERSE_SUBTRACT};if(n)q[Ga]=s.MIN,q[Ha]=s.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(q[Ga]=L.MIN_EXT,q[Ha]=L.MAX_EXT)}const Q={[gc]:s.ZERO,[_c]:s.ONE,[vc]:s.SRC_COLOR,[Jr]:s.SRC_ALPHA,[Tc]:s.SRC_ALPHA_SATURATE,[yc]:s.DST_COLOR,[Mc]:s.DST_ALPHA,[xc]:s.ONE_MINUS_SRC_COLOR,[Qr]:s.ONE_MINUS_SRC_ALPHA,[Ec]:s.ONE_MINUS_DST_COLOR,[Sc]:s.ONE_MINUS_DST_ALPHA,[wc]:s.CONSTANT_COLOR,[bc]:s.ONE_MINUS_CONSTANT_COLOR,[Ac]:s.CONSTANT_ALPHA,[Rc]:s.ONE_MINUS_CONSTANT_ALPHA};function O(L,dt,ft,Pt,At,te,ee,xe,Pe,ne){if(L===En){f===!0&&(Rt(s.BLEND),f=!1);return}if(f===!1&&(zt(s.BLEND),f=!0),L!==fc){if(L!==w||ne!==H){if((x!==$n||R!==$n)&&(s.blendEquation(s.FUNC_ADD),x=$n,R=$n),ne)switch(L){case Jn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fn:s.blendFunc(s.ONE,s.ONE);break;case za:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ba:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Jn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case za:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ba:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,C=null,A=null,N=null,M.set(0,0,0),b=0,w=L,H=ne}return}At=At||dt,te=te||ft,ee=ee||Pt,(dt!==x||At!==R)&&(s.blendEquationSeparate(q[dt],q[At]),x=dt,R=At),(ft!==y||Pt!==C||te!==A||ee!==N)&&(s.blendFuncSeparate(Q[ft],Q[Pt],Q[te],Q[ee]),y=ft,C=Pt,A=te,N=ee),(xe.equals(M)===!1||Pe!==b)&&(s.blendColor(xe.r,xe.g,xe.b,Pe),M.copy(xe),b=Pe),w=L,H=!1}function it(L,dt){L.side===hn?Rt(s.CULL_FACE):zt(s.CULL_FACE);let ft=L.side===Ne;dt&&(ft=!ft),at(ft),L.blending===Jn&&L.transparent===!1?O(En):O(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Pt=L.stencilWrite;c.setTest(Pt),Pt&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),D(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?zt(s.SAMPLE_ALPHA_TO_COVERAGE):Rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function at(L){V!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),V=L)}function S(L){L!==uc?(zt(s.CULL_FACE),L!==st&&(L===Oa?s.cullFace(s.BACK):L===dc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Rt(s.CULL_FACE),st=L}function _(L){L!==P&&(K&&s.lineWidth(L),P=L)}function D(L,dt,ft){L?(zt(s.POLYGON_OFFSET_FILL),(I!==dt||k!==ft)&&(s.polygonOffset(dt,ft),I=dt,k=ft)):Rt(s.POLYGON_OFFSET_FILL)}function Y(L){L?zt(s.SCISSOR_TEST):Rt(s.SCISSOR_TEST)}function X(L){L===void 0&&(L=s.TEXTURE0+Z-1),tt!==L&&(s.activeTexture(L),tt=L)}function j(L,dt,ft){ft===void 0&&(tt===null?ft=s.TEXTURE0+Z-1:ft=tt);let Pt=lt[ft];Pt===void 0&&(Pt={type:void 0,texture:void 0},lt[ft]=Pt),(Pt.type!==L||Pt.texture!==dt)&&(tt!==ft&&(s.activeTexture(ft),tt=ft),s.bindTexture(L,dt||Nt[L]),Pt.type=L,Pt.texture=dt)}function _t(){const L=lt[tt];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ut(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Yt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ft(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function It(L){mt.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),mt.copy(L))}function Kt(L){St.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),St.copy(L))}function Qt(L,dt){let ft=u.get(dt);ft===void 0&&(ft=new WeakMap,u.set(dt,ft));let Pt=ft.get(L);Pt===void 0&&(Pt=s.getUniformBlockIndex(dt,L.name),ft.set(L,Pt))}function Gt(L,dt){const Pt=u.get(dt).get(L);h.get(dt)!==Pt&&(s.uniformBlockBinding(dt,Pt,L.__bindingPointIndex),h.set(dt,Pt))}function ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},tt=null,lt={},p={},g=new WeakMap,v=[],m=null,f=!1,w=null,x=null,y=null,C=null,R=null,A=null,N=null,M=new Ot(0,0,0),b=0,H=!1,V=null,st=null,P=null,I=null,k=null,mt.set(0,0,s.canvas.width,s.canvas.height),St.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:zt,disable:Rt,bindFramebuffer:Wt,drawBuffers:F,useProgram:rt,setBlending:O,setMaterial:it,setFlipSided:at,setCullFace:S,setLineWidth:_,setPolygonOffset:D,setScissorTest:Y,activeTexture:X,bindTexture:j,unbindTexture:_t,compressedTexImage2D:ut,compressedTexImage3D:gt,texImage2D:Mt,texImage3D:xt,updateUBOMapping:Qt,uniformBlockBinding:Gt,texStorage2D:Ft,texStorage3D:bt,texSubImage2D:wt,texSubImage3D:Dt,compressedTexSubImage2D:nt,compressedTexSubImage3D:Yt,scissor:It,viewport:Kt,reset:ot}}function _m(s,t,e,n,i,r,o){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return p?new OffscreenCanvas(S,_):Ks("canvas")}function v(S,_,D,Y){let X=1;if((S.width>Y||S.height>Y)&&(X=Y/Math.max(S.width,S.height)),X<1||_===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const j=_?Ys:Math.floor,_t=j(X*S.width),ut=j(X*S.height);u===void 0&&(u=g(_t,ut));const gt=D?g(_t,ut):u;return gt.width=_t,gt.height=ut,gt.getContext("2d").drawImage(S,0,0,_t,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+_t+"x"+ut+")."),gt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return ra(S.width)&&ra(S.height)}function f(S){return a?!1:S.wrapS!==rn||S.wrapT!==rn||S.minFilter!==Ie&&S.minFilter!==Ye}function w(S,_){return S.generateMipmaps&&_&&S.minFilter!==Ie&&S.minFilter!==Ye}function x(S){s.generateMipmap(S)}function y(S,_,D,Y,X=!1){if(a===!1)return _;if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let j=_;if(_===s.RED&&(D===s.FLOAT&&(j=s.R32F),D===s.HALF_FLOAT&&(j=s.R16F),D===s.UNSIGNED_BYTE&&(j=s.R8)),_===s.RED_INTEGER&&(D===s.UNSIGNED_BYTE&&(j=s.R8UI),D===s.UNSIGNED_SHORT&&(j=s.R16UI),D===s.UNSIGNED_INT&&(j=s.R32UI),D===s.BYTE&&(j=s.R8I),D===s.SHORT&&(j=s.R16I),D===s.INT&&(j=s.R32I)),_===s.RG&&(D===s.FLOAT&&(j=s.RG32F),D===s.HALF_FLOAT&&(j=s.RG16F),D===s.UNSIGNED_BYTE&&(j=s.RG8)),_===s.RGBA){const _t=X?ks:jt.getTransfer(Y);D===s.FLOAT&&(j=s.RGBA32F),D===s.HALF_FLOAT&&(j=s.RGBA16F),D===s.UNSIGNED_BYTE&&(j=_t===ie?s.SRGB8_ALPHA8:s.RGBA8),D===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),D===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function C(S,_,D){return w(S,D)===!0||S.isFramebufferTexture&&S.minFilter!==Ie&&S.minFilter!==Ye?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function R(S){return S===Ie||S===Va||S===fr?s.NEAREST:s.LINEAR}function A(S){const _=S.target;_.removeEventListener("dispose",A),M(_),_.isVideoTexture&&h.delete(_)}function N(S){const _=S.target;_.removeEventListener("dispose",N),H(_)}function M(S){const _=n.get(S);if(_.__webglInit===void 0)return;const D=S.source,Y=d.get(D);if(Y){const X=Y[_.__cacheKey];X.usedTimes--,X.usedTimes===0&&b(S),Object.keys(Y).length===0&&d.delete(D)}n.remove(S)}function b(S){const _=n.get(S);s.deleteTexture(_.__webglTexture);const D=S.source,Y=d.get(D);delete Y[_.__cacheKey],o.memory.textures--}function H(S){const _=S.texture,D=n.get(S),Y=n.get(_);if(Y.__webglTexture!==void 0&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(D.__webglFramebuffer[X]))for(let j=0;j<D.__webglFramebuffer[X].length;j++)s.deleteFramebuffer(D.__webglFramebuffer[X][j]);else s.deleteFramebuffer(D.__webglFramebuffer[X]);D.__webglDepthbuffer&&s.deleteRenderbuffer(D.__webglDepthbuffer[X])}else{if(Array.isArray(D.__webglFramebuffer))for(let X=0;X<D.__webglFramebuffer.length;X++)s.deleteFramebuffer(D.__webglFramebuffer[X]);else s.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&s.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&s.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let X=0;X<D.__webglColorRenderbuffer.length;X++)D.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(D.__webglColorRenderbuffer[X]);D.__webglDepthRenderbuffer&&s.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let X=0,j=_.length;X<j;X++){const _t=n.get(_[X]);_t.__webglTexture&&(s.deleteTexture(_t.__webglTexture),o.memory.textures--),n.remove(_[X])}n.remove(_),n.remove(S)}let V=0;function st(){V=0}function P(){const S=V;return S>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+i.maxTextures),V+=1,S}function I(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function k(S,_){const D=n.get(S);if(S.isVideoTexture&&it(S),S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){const Y=S.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(D,S,_);return}}e.bindTexture(s.TEXTURE_2D,D.__webglTexture,s.TEXTURE0+_)}function Z(S,_){const D=n.get(S);if(S.version>0&&D.__version!==S.version){mt(D,S,_);return}e.bindTexture(s.TEXTURE_2D_ARRAY,D.__webglTexture,s.TEXTURE0+_)}function K(S,_){const D=n.get(S);if(S.version>0&&D.__version!==S.version){mt(D,S,_);return}e.bindTexture(s.TEXTURE_3D,D.__webglTexture,s.TEXTURE0+_)}function $(S,_){const D=n.get(S);if(S.version>0&&D.__version!==S.version){St(D,S,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+_)}const J={[Vs]:s.REPEAT,[rn]:s.CLAMP_TO_EDGE,[na]:s.MIRRORED_REPEAT},tt={[Ie]:s.NEAREST,[Va]:s.NEAREST_MIPMAP_NEAREST,[fr]:s.NEAREST_MIPMAP_LINEAR,[Ye]:s.LINEAR,[Bc]:s.LINEAR_MIPMAP_NEAREST,[Qi]:s.LINEAR_MIPMAP_LINEAR},lt={[Zc]:s.NEVER,[ih]:s.ALWAYS,[Jc]:s.LESS,[Pl]:s.LEQUAL,[Qc]:s.EQUAL,[nh]:s.GEQUAL,[th]:s.GREATER,[eh]:s.NOTEQUAL};function W(S,_,D){if(D?(s.texParameteri(S,s.TEXTURE_WRAP_S,J[_.wrapS]),s.texParameteri(S,s.TEXTURE_WRAP_T,J[_.wrapT]),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,J[_.wrapR]),s.texParameteri(S,s.TEXTURE_MAG_FILTER,tt[_.magFilter]),s.texParameteri(S,s.TEXTURE_MIN_FILTER,tt[_.minFilter])):(s.texParameteri(S,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(S,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(_.wrapS!==rn||_.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(S,s.TEXTURE_MAG_FILTER,R(_.magFilter)),s.texParameteri(S,s.TEXTURE_MIN_FILTER,R(_.minFilter)),_.minFilter!==Ie&&_.minFilter!==Ye&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(s.texParameteri(S,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(S,s.TEXTURE_COMPARE_FUNC,lt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Y=t.get("EXT_texture_filter_anisotropic");if(_.magFilter===Ie||_.minFilter!==fr&&_.minFilter!==Qi||_.type===Nn&&t.has("OES_texture_float_linear")===!1||a===!1&&_.type===Tn&&t.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(s.texParameterf(S,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function et(S,_){let D=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",A));const Y=_.source;let X=d.get(Y);X===void 0&&(X={},d.set(Y,X));const j=I(_);if(j!==S.__cacheKey){X[j]===void 0&&(X[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,D=!0),X[j].usedTimes++;const _t=X[S.__cacheKey];_t!==void 0&&(X[S.__cacheKey].usedTimes--,_t.usedTimes===0&&b(_)),S.__cacheKey=j,S.__webglTexture=X[j].texture}return D}function mt(S,_,D){let Y=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=s.TEXTURE_3D);const X=et(S,_),j=_.source;e.bindTexture(Y,S.__webglTexture,s.TEXTURE0+D);const _t=n.get(j);if(j.version!==_t.__version||X===!0){e.activeTexture(s.TEXTURE0+D);const ut=jt.getPrimaries(jt.workingColorSpace),gt=_.colorSpace===$e?null:jt.getPrimaries(_.colorSpace),wt=_.colorSpace===$e||ut===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Dt=f(_)&&m(_.image)===!1;let nt=v(_.image,Dt,!1,i.maxTextureSize);nt=at(_,nt);const Yt=m(nt)||a,Ft=r.convert(_.format,_.colorSpace);let bt=r.convert(_.type),Mt=y(_.internalFormat,Ft,bt,_.colorSpace,_.isVideoTexture);W(Y,_,Yt);let xt;const It=_.mipmaps,Kt=a&&_.isVideoTexture!==!0&&Mt!==Al,Qt=_t.__version===void 0||X===!0,Gt=C(_,nt,Yt);if(_.isDepthTexture)Mt=s.DEPTH_COMPONENT,a?_.type===Nn?Mt=s.DEPTH_COMPONENT32F:_.type===In?Mt=s.DEPTH_COMPONENT24:_.type===Qn?Mt=s.DEPTH24_STENCIL8:Mt=s.DEPTH_COMPONENT16:_.type===Nn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===ti&&Mt===s.DEPTH_COMPONENT&&_.type!==fa&&_.type!==In&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=In,bt=r.convert(_.type)),_.format===Ri&&Mt===s.DEPTH_COMPONENT&&(Mt=s.DEPTH_STENCIL,_.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Qn,bt=r.convert(_.type))),Qt&&(Kt?e.texStorage2D(s.TEXTURE_2D,1,Mt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,Mt,nt.width,nt.height,0,Ft,bt,null));else if(_.isDataTexture)if(It.length>0&&Yt){Kt&&Qt&&e.texStorage2D(s.TEXTURE_2D,Gt,Mt,It[0].width,It[0].height);for(let ot=0,L=It.length;ot<L;ot++)xt=It[ot],Kt?e.texSubImage2D(s.TEXTURE_2D,ot,0,0,xt.width,xt.height,Ft,bt,xt.data):e.texImage2D(s.TEXTURE_2D,ot,Mt,xt.width,xt.height,0,Ft,bt,xt.data);_.generateMipmaps=!1}else Kt?(Qt&&e.texStorage2D(s.TEXTURE_2D,Gt,Mt,nt.width,nt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,Ft,bt,nt.data)):e.texImage2D(s.TEXTURE_2D,0,Mt,nt.width,nt.height,0,Ft,bt,nt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Kt&&Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,Mt,It[0].width,It[0].height,nt.depth);for(let ot=0,L=It.length;ot<L;ot++)xt=It[ot],_.format!==an?Ft!==null?Kt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,xt.width,xt.height,nt.depth,Ft,xt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ot,Mt,xt.width,xt.height,nt.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,xt.width,xt.height,nt.depth,Ft,bt,xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ot,Mt,xt.width,xt.height,nt.depth,0,Ft,bt,xt.data)}else{Kt&&Qt&&e.texStorage2D(s.TEXTURE_2D,Gt,Mt,It[0].width,It[0].height);for(let ot=0,L=It.length;ot<L;ot++)xt=It[ot],_.format!==an?Ft!==null?Kt?e.compressedTexSubImage2D(s.TEXTURE_2D,ot,0,0,xt.width,xt.height,Ft,xt.data):e.compressedTexImage2D(s.TEXTURE_2D,ot,Mt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage2D(s.TEXTURE_2D,ot,0,0,xt.width,xt.height,Ft,bt,xt.data):e.texImage2D(s.TEXTURE_2D,ot,Mt,xt.width,xt.height,0,Ft,bt,xt.data)}else if(_.isDataArrayTexture)Kt?(Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,Mt,nt.width,nt.height,nt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,Ft,bt,nt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Mt,nt.width,nt.height,nt.depth,0,Ft,bt,nt.data);else if(_.isData3DTexture)Kt?(Qt&&e.texStorage3D(s.TEXTURE_3D,Gt,Mt,nt.width,nt.height,nt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,Ft,bt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,Mt,nt.width,nt.height,nt.depth,0,Ft,bt,nt.data);else if(_.isFramebufferTexture){if(Qt)if(Kt)e.texStorage2D(s.TEXTURE_2D,Gt,Mt,nt.width,nt.height);else{let ot=nt.width,L=nt.height;for(let dt=0;dt<Gt;dt++)e.texImage2D(s.TEXTURE_2D,dt,Mt,ot,L,0,Ft,bt,null),ot>>=1,L>>=1}}else if(It.length>0&&Yt){Kt&&Qt&&e.texStorage2D(s.TEXTURE_2D,Gt,Mt,It[0].width,It[0].height);for(let ot=0,L=It.length;ot<L;ot++)xt=It[ot],Kt?e.texSubImage2D(s.TEXTURE_2D,ot,0,0,Ft,bt,xt):e.texImage2D(s.TEXTURE_2D,ot,Mt,Ft,bt,xt);_.generateMipmaps=!1}else Kt?(Qt&&e.texStorage2D(s.TEXTURE_2D,Gt,Mt,nt.width,nt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Ft,bt,nt)):e.texImage2D(s.TEXTURE_2D,0,Mt,Ft,bt,nt);w(_,Yt)&&x(Y),_t.__version=j.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function St(S,_,D){if(_.image.length!==6)return;const Y=et(S,_),X=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,S.__webglTexture,s.TEXTURE0+D);const j=n.get(X);if(X.version!==j.__version||Y===!0){e.activeTexture(s.TEXTURE0+D);const _t=jt.getPrimaries(jt.workingColorSpace),ut=_.colorSpace===$e?null:jt.getPrimaries(_.colorSpace),gt=_.colorSpace===$e||_t===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const wt=_.isCompressedTexture||_.image[0].isCompressedTexture,Dt=_.image[0]&&_.image[0].isDataTexture,nt=[];for(let ot=0;ot<6;ot++)!wt&&!Dt?nt[ot]=v(_.image[ot],!1,!0,i.maxCubemapSize):nt[ot]=Dt?_.image[ot].image:_.image[ot],nt[ot]=at(_,nt[ot]);const Yt=nt[0],Ft=m(Yt)||a,bt=r.convert(_.format,_.colorSpace),Mt=r.convert(_.type),xt=y(_.internalFormat,bt,Mt,_.colorSpace),It=a&&_.isVideoTexture!==!0,Kt=j.__version===void 0||Y===!0;let Qt=C(_,Yt,Ft);W(s.TEXTURE_CUBE_MAP,_,Ft);let Gt;if(wt){It&&Kt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Qt,xt,Yt.width,Yt.height);for(let ot=0;ot<6;ot++){Gt=nt[ot].mipmaps;for(let L=0;L<Gt.length;L++){const dt=Gt[L];_.format!==an?bt!==null?It?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,L,0,0,dt.width,dt.height,bt,dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,L,xt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,L,0,0,dt.width,dt.height,bt,Mt,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,L,xt,dt.width,dt.height,0,bt,Mt,dt.data)}}}else{Gt=_.mipmaps,It&&Kt&&(Gt.length>0&&Qt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Qt,xt,nt[0].width,nt[0].height));for(let ot=0;ot<6;ot++)if(Dt){It?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,nt[ot].width,nt[ot].height,bt,Mt,nt[ot].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,xt,nt[ot].width,nt[ot].height,0,bt,Mt,nt[ot].data);for(let L=0;L<Gt.length;L++){const ft=Gt[L].image[ot].image;It?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,L+1,0,0,ft.width,ft.height,bt,Mt,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,L+1,xt,ft.width,ft.height,0,bt,Mt,ft.data)}}else{It?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,bt,Mt,nt[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,xt,bt,Mt,nt[ot]);for(let L=0;L<Gt.length;L++){const dt=Gt[L];It?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,L+1,0,0,bt,Mt,dt.image[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,L+1,xt,bt,Mt,dt.image[ot])}}}w(_,Ft)&&x(s.TEXTURE_CUBE_MAP),j.__version=X.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function yt(S,_,D,Y,X,j){const _t=r.convert(D.format,D.colorSpace),ut=r.convert(D.type),gt=y(D.internalFormat,_t,ut,D.colorSpace);if(!n.get(_).__hasExternalTextures){const Dt=Math.max(1,_.width>>j),nt=Math.max(1,_.height>>j);X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?e.texImage3D(X,j,gt,Dt,nt,_.depth,0,_t,ut,null):e.texImage2D(X,j,gt,Dt,nt,0,_t,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,S),O(_)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,X,n.get(D).__webglTexture,0,Q(_)):(X===s.TEXTURE_2D||X>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,X,n.get(D).__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(S,_,D){if(s.bindRenderbuffer(s.RENDERBUFFER,S),_.depthBuffer&&!_.stencilBuffer){let Y=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(D||O(_)){const X=_.depthTexture;X&&X.isDepthTexture&&(X.type===Nn?Y=s.DEPTH_COMPONENT32F:X.type===In&&(Y=s.DEPTH_COMPONENT24));const j=Q(_);O(_)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j,Y,_.width,_.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,j,Y,_.width,_.height)}else s.renderbufferStorage(s.RENDERBUFFER,Y,_.width,_.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,S)}else if(_.depthBuffer&&_.stencilBuffer){const Y=Q(_);D&&O(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Y,s.DEPTH24_STENCIL8,_.width,_.height):O(_)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Y,s.DEPTH24_STENCIL8,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,S)}else{const Y=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let X=0;X<Y.length;X++){const j=Y[X],_t=r.convert(j.format,j.colorSpace),ut=r.convert(j.type),gt=y(j.internalFormat,_t,ut,j.colorSpace),wt=Q(_);D&&O(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,gt,_.width,_.height):O(_)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,wt,gt,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,gt,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function zt(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k(_.depthTexture,0);const Y=n.get(_.depthTexture).__webglTexture,X=Q(_);if(_.depthTexture.format===ti)O(_)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0);else if(_.depthTexture.format===Ri)O(_)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Rt(S){const _=n.get(S),D=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");zt(_.__webglFramebuffer,S)}else if(D){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]=s.createRenderbuffer(),Nt(_.__webglDepthbuffer[Y],S,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=s.createRenderbuffer(),Nt(_.__webglDepthbuffer,S,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(S,_,D){const Y=n.get(S);_!==void 0&&yt(Y.__webglFramebuffer,S,S.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),D!==void 0&&Rt(S)}function F(S){const _=S.texture,D=n.get(S),Y=n.get(_);S.addEventListener("dispose",N),S.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=_.version,o.memory.textures++);const X=S.isWebGLCubeRenderTarget===!0,j=S.isWebGLMultipleRenderTargets===!0,_t=m(S)||a;if(X){D.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(a&&_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[ut]=[];for(let gt=0;gt<_.mipmaps.length;gt++)D.__webglFramebuffer[ut][gt]=s.createFramebuffer()}else D.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let ut=0;ut<_.mipmaps.length;ut++)D.__webglFramebuffer[ut]=s.createFramebuffer()}else D.__webglFramebuffer=s.createFramebuffer();if(j)if(i.drawBuffers){const ut=S.texture;for(let gt=0,wt=ut.length;gt<wt;gt++){const Dt=n.get(ut[gt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&O(S)===!1){const ut=j?_:[_];D.__webglMultisampledFramebuffer=s.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let gt=0;gt<ut.length;gt++){const wt=ut[gt];D.__webglColorRenderbuffer[gt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,D.__webglColorRenderbuffer[gt]);const Dt=r.convert(wt.format,wt.colorSpace),nt=r.convert(wt.type),Yt=y(wt.internalFormat,Dt,nt,wt.colorSpace,S.isXRRenderTarget===!0),Ft=Q(S);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,Yt,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,D.__webglColorRenderbuffer[gt])}s.bindRenderbuffer(s.RENDERBUFFER,null),S.depthBuffer&&(D.__webglDepthRenderbuffer=s.createRenderbuffer(),Nt(D.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),W(s.TEXTURE_CUBE_MAP,_,_t);for(let ut=0;ut<6;ut++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let gt=0;gt<_.mipmaps.length;gt++)yt(D.__webglFramebuffer[ut][gt],S,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,gt);else yt(D.__webglFramebuffer[ut],S,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);w(_,_t)&&x(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(j){const ut=S.texture;for(let gt=0,wt=ut.length;gt<wt;gt++){const Dt=ut[gt],nt=n.get(Dt);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),W(s.TEXTURE_2D,Dt,_t),yt(D.__webglFramebuffer,S,Dt,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,0),w(Dt,_t)&&x(s.TEXTURE_2D)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?ut=S.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,Y.__webglTexture),W(ut,_,_t),a&&_.mipmaps&&_.mipmaps.length>0)for(let gt=0;gt<_.mipmaps.length;gt++)yt(D.__webglFramebuffer[gt],S,_,s.COLOR_ATTACHMENT0,ut,gt);else yt(D.__webglFramebuffer,S,_,s.COLOR_ATTACHMENT0,ut,0);w(_,_t)&&x(ut),e.unbindTexture()}S.depthBuffer&&Rt(S)}function rt(S){const _=m(S)||a,D=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Y=0,X=D.length;Y<X;Y++){const j=D[Y];if(w(j,_)){const _t=S.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ut=n.get(j).__webglTexture;e.bindTexture(_t,ut),x(_t),e.unbindTexture()}}}function q(S){if(a&&S.samples>0&&O(S)===!1){const _=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],D=S.width,Y=S.height;let X=s.COLOR_BUFFER_BIT;const j=[],_t=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=n.get(S),gt=S.isWebGLMultipleRenderTargets===!0;if(gt)for(let wt=0;wt<_.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let wt=0;wt<_.length;wt++){j.push(s.COLOR_ATTACHMENT0+wt),S.depthBuffer&&j.push(_t);const Dt=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(Dt===!1&&(S.depthBuffer&&(X|=s.DEPTH_BUFFER_BIT),S.stencilBuffer&&(X|=s.STENCIL_BUFFER_BIT)),gt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ut.__webglColorRenderbuffer[wt]),Dt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[_t]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_t])),gt){const nt=n.get(_[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,nt,0)}s.blitFramebuffer(0,0,D,Y,0,0,D,Y,X,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,j)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),gt)for(let wt=0;wt<_.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,ut.__webglColorRenderbuffer[wt]);const Dt=n.get(_[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,Dt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function Q(S){return Math.min(i.maxSamples,S.samples)}function O(S){const _=n.get(S);return a&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function it(S){const _=o.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function at(S,_){const D=S.colorSpace,Y=S.format,X=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===sa||D!==bn&&D!==$e&&(jt.getTransfer(D)===ie?a===!1?t.has("EXT_sRGB")===!0&&Y===an?(S.format=sa,S.minFilter=Ye,S.generateMipmaps=!1):_=Dl.sRGBToLinear(_):(Y!==an||X!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),_}this.allocateTextureUnit=P,this.resetTextureUnits=st,this.setTexture2D=k,this.setTexture2DArray=Z,this.setTexture3D=K,this.setTextureCube=$,this.rebindTextures=Wt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=O}function vm(s,t,e){const n=e.isWebGL2;function i(r,o=$e){let a;const l=jt.getTransfer(o);if(r===zn)return s.UNSIGNED_BYTE;if(r===yl)return s.UNSIGNED_SHORT_4_4_4_4;if(r===El)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Gc)return s.BYTE;if(r===Hc)return s.SHORT;if(r===fa)return s.UNSIGNED_SHORT;if(r===Sl)return s.INT;if(r===In)return s.UNSIGNED_INT;if(r===Nn)return s.FLOAT;if(r===Tn)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Vc)return s.ALPHA;if(r===an)return s.RGBA;if(r===kc)return s.LUMINANCE;if(r===Wc)return s.LUMINANCE_ALPHA;if(r===ti)return s.DEPTH_COMPONENT;if(r===Ri)return s.DEPTH_STENCIL;if(r===sa)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Xc)return s.RED;if(r===Tl)return s.RED_INTEGER;if(r===qc)return s.RG;if(r===wl)return s.RG_INTEGER;if(r===bl)return s.RGBA_INTEGER;if(r===pr||r===mr||r===gr||r===_r)if(l===ie)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===pr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===pr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===gr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_r)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ka||r===Wa||r===Xa||r===qa)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ka)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Wa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Al)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ya||r===Ka)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ya)return l===ie?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ka)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===$a||r===ja||r===Za||r===Ja||r===Qa||r===to||r===eo||r===no||r===io||r===so||r===ro||r===ao||r===oo||r===lo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===$a)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ja)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Za)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ja)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qa)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===to)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===eo)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===no)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===io)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===so)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ro)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ao)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===oo)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===lo)return l===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vr||r===co||r===ho)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===vr)return l===ie?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===co)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ho)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Yc||r===uo||r===fo||r===po)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===vr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===uo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===po)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qn?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class xm extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class de extends he{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mm={type:"move"};class Hr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new de;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Sm extends Li{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const v=e.getContextAttributes();let m=null,f=null;const w=[],x=[],y=new pt;let C=null;const R=new ke;R.layers.enable(1),R.viewport=new re;const A=new ke;A.layers.enable(2),A.viewport=new re;const N=[R,A],M=new xm;M.layers.enable(1),M.layers.enable(2);let b=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let et=w[W];return et===void 0&&(et=new Hr,w[W]=et),et.getTargetRaySpace()},this.getControllerGrip=function(W){let et=w[W];return et===void 0&&(et=new Hr,w[W]=et),et.getGripSpace()},this.getHand=function(W){let et=w[W];return et===void 0&&(et=new Hr,w[W]=et),et.getHandSpace()};function V(W){const et=x.indexOf(W.inputSource);if(et===-1)return;const mt=w[et];mt!==void 0&&(mt.update(W.inputSource,W.frame,c||o),mt.dispatchEvent({type:W.type,data:W.inputSource}))}function st(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",st),i.removeEventListener("inputsourceschange",P);for(let W=0;W<w.length;W++){const et=x[W];et!==null&&(x[W]=null,w[W].disconnect(et))}b=null,H=null,t.setRenderTarget(m),p=null,d=null,u=null,i=null,f=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",st),i.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(y),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const et={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new on(p.framebufferWidth,p.framebufferHeight,{format:an,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let et=null,mt=null,St=null;v.depth&&(St=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=v.stencil?Ri:ti,mt=v.stencil?Qn:In);const yt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(yt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new on(d.textureWidth,d.textureHeight,{format:an,type:zn,depthTexture:new Vl(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const Nt=t.properties.get(f);Nt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),lt.setContext(i),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(W){for(let et=0;et<W.removed.length;et++){const mt=W.removed[et],St=x.indexOf(mt);St>=0&&(x[St]=null,w[St].disconnect(mt))}for(let et=0;et<W.added.length;et++){const mt=W.added[et];let St=x.indexOf(mt);if(St===-1){for(let Nt=0;Nt<w.length;Nt++)if(Nt>=x.length){x.push(mt),St=Nt;break}else if(x[Nt]===null){x[Nt]=mt,St=Nt;break}if(St===-1)break}const yt=w[St];yt&&yt.connect(mt)}}const I=new T,k=new T;function Z(W,et,mt){I.setFromMatrixPosition(et.matrixWorld),k.setFromMatrixPosition(mt.matrixWorld);const St=I.distanceTo(k),yt=et.projectionMatrix.elements,Nt=mt.projectionMatrix.elements,zt=yt[14]/(yt[10]-1),Rt=yt[14]/(yt[10]+1),Wt=(yt[9]+1)/yt[5],F=(yt[9]-1)/yt[5],rt=(yt[8]-1)/yt[0],q=(Nt[8]+1)/Nt[0],Q=zt*rt,O=zt*q,it=St/(-rt+q),at=it*-rt;et.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(at),W.translateZ(it),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const S=zt+it,_=Rt+it,D=Q-at,Y=O+(St-at),X=Wt*Rt/_*S,j=F*Rt/_*S;W.projectionMatrix.makePerspective(D,Y,X,j,S,_),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function K(W,et){et===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(et.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;M.near=A.near=R.near=W.near,M.far=A.far=R.far=W.far,(b!==M.near||H!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,H=M.far);const et=W.parent,mt=M.cameras;K(M,et);for(let St=0;St<mt.length;St++)K(mt[St],et);mt.length===2?Z(M,R,A):M.projectionMatrix.copy(R.projectionMatrix),$(W,M,et)};function $(W,et,mt){mt===null?W.matrix.copy(et.matrixWorld):(W.matrix.copy(mt.matrixWorld),W.matrix.invert(),W.matrix.multiply(et.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ts*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)};let J=null;function tt(W,et){if(h=et.getViewerPose(c||o),g=et,h!==null){const mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let St=!1;mt.length!==M.cameras.length&&(M.cameras.length=0,St=!0);for(let yt=0;yt<mt.length;yt++){const Nt=mt[yt];let zt=null;if(p!==null)zt=p.getViewport(Nt);else{const Wt=u.getViewSubImage(d,Nt);zt=Wt.viewport,yt===0&&(t.setRenderTargetTextures(f,Wt.colorTexture,d.ignoreDepthValues?void 0:Wt.depthStencilTexture),t.setRenderTarget(f))}let Rt=N[yt];Rt===void 0&&(Rt=new ke,Rt.layers.enable(yt),Rt.viewport=new re,N[yt]=Rt),Rt.matrix.fromArray(Nt.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Nt.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(zt.x,zt.y,zt.width,zt.height),yt===0&&(M.matrix.copy(Rt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),St===!0&&M.cameras.push(Rt)}}for(let mt=0;mt<w.length;mt++){const St=x[mt],yt=w[mt];St!==null&&yt!==void 0&&yt.update(St,et,c||o)}J&&J(W,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const lt=new Hl;lt.setAnimationLoop(tt),this.setAnimationLoop=function(W){J=W},this.dispose=function(){}}}function ym(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,zl(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,w,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,w,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ne&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ne&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=t.get(f).envMap;if(w&&(m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ne&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const w=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Em(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,x){const y=x.program;n.uniformBlockBinding(w,y)}function c(w,x){let y=i[w.id];y===void 0&&(g(w),y=h(w),i[w.id]=y,w.addEventListener("dispose",m));const C=x.program;n.updateUBOMapping(w,C);const R=t.render.frame;r[w.id]!==R&&(d(w),r[w.id]=R)}function h(w){const x=u();w.__bindingPointIndex=x;const y=s.createBuffer(),C=w.__size,R=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,C,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const x=i[w.id],y=w.uniforms,C=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let R=0,A=y.length;R<A;R++){const N=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,b=N.length;M<b;M++){const H=N[M];if(p(H,R,M,C)===!0){const V=H.__offset,st=Array.isArray(H.value)?H.value:[H.value];let P=0;for(let I=0;I<st.length;I++){const k=st[I],Z=v(k);typeof k=="number"||typeof k=="boolean"?(H.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,V+P,H.__data)):k.isMatrix3?(H.__data[0]=k.elements[0],H.__data[1]=k.elements[1],H.__data[2]=k.elements[2],H.__data[3]=0,H.__data[4]=k.elements[3],H.__data[5]=k.elements[4],H.__data[6]=k.elements[5],H.__data[7]=0,H.__data[8]=k.elements[6],H.__data[9]=k.elements[7],H.__data[10]=k.elements[8],H.__data[11]=0):(k.toArray(H.__data,P),P+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(w,x,y,C){const R=w.value,A=x+"_"+y;if(C[A]===void 0)return typeof R=="number"||typeof R=="boolean"?C[A]=R:C[A]=R.clone(),!0;{const N=C[A];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return C[A]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(w){const x=w.uniforms;let y=0;const C=16;for(let A=0,N=x.length;A<N;A++){const M=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,H=M.length;b<H;b++){const V=M[b],st=Array.isArray(V.value)?V.value:[V.value];for(let P=0,I=st.length;P<I;P++){const k=st[P],Z=v(k),K=y%C;K!==0&&C-K<Z.boundary&&(y+=C-K),V.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=Z.storage}}}const R=y%C;return R>0&&(y+=C-R),w.__size=y,w.__cache={},this}function v(w){const x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function m(w){const x=w.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function f(){for(const w in i)s.deleteBuffer(i[w]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}class Kl{constructor(t={}){const{canvas:e=xh(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const f=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pe,this._useLegacyLights=!1,this.toneMapping=On,this.toneMappingExposure=1;const x=this;let y=!1,C=0,R=0,A=null,N=-1,M=null;const b=new re,H=new re;let V=null;const st=new Ot(0);let P=0,I=e.width,k=e.height,Z=1,K=null,$=null;const J=new re(0,0,I,k),tt=new re(0,0,I,k);let lt=!1;const W=new _a;let et=!1,mt=!1,St=null;const yt=new oe,Nt=new pt,zt=new T,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Wt(){return A===null?Z:1}let F=n;function rt(E,U){for(let B=0;B<E.length;B++){const G=E[B],z=e.getContext(G,U);if(z!==null)return z}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ua}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",dt,!1),F===null){const U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),F=rt(U,E),F===null)throw rt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let q,Q,O,it,at,S,_,D,Y,X,j,_t,ut,gt,wt,Dt,nt,Yt,Ft,bt,Mt,xt,It,Kt;function Qt(){q=new Uf(F),Q=new Af(F,q,t),q.init(Q),xt=new vm(F,q,Q),O=new gm(F,q,Q),it=new Ff(F),at=new nm,S=new _m(F,q,O,at,Q,xt,it),_=new Cf(x),D=new Df(x),Y=new kh(F,Q),It=new wf(F,q,Y,Q),X=new If(F,Y,it,It),j=new Gf(F,X,Y,it),Ft=new Bf(F,Q,S),Dt=new Rf(at),_t=new em(x,_,D,q,Q,It,Dt),ut=new ym(x,at),gt=new sm,wt=new hm(q,Q),Yt=new Tf(x,_,D,O,j,d,l),nt=new mm(x,j,Q),Kt=new Em(F,it,Q,O),bt=new bf(F,q,it,Q),Mt=new Nf(F,q,it,Q),it.programs=_t.programs,x.capabilities=Q,x.extensions=q,x.properties=at,x.renderLists=gt,x.shadowMap=nt,x.state=O,x.info=it}Qt();const Gt=new Sm(x,F);this.xr=Gt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=q.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=q.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(I,k,!1))},this.getSize=function(E){return E.set(I,k)},this.setSize=function(E,U,B=!0){if(Gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=E,k=U,e.width=Math.floor(E*Z),e.height=Math.floor(U*Z),B===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(I*Z,k*Z).floor()},this.setDrawingBufferSize=function(E,U,B){I=E,k=U,Z=B,e.width=Math.floor(E*B),e.height=Math.floor(U*B),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,U,B,G){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,U,B,G),O.viewport(b.copy(J).multiplyScalar(Z).floor())},this.getScissor=function(E){return E.copy(tt)},this.setScissor=function(E,U,B,G){E.isVector4?tt.set(E.x,E.y,E.z,E.w):tt.set(E,U,B,G),O.scissor(H.copy(tt).multiplyScalar(Z).floor())},this.getScissorTest=function(){return lt},this.setScissorTest=function(E){O.setScissorTest(lt=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){$=E},this.getClearColor=function(E){return E.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(E=!0,U=!0,B=!0){let G=0;if(E){let z=!1;if(A!==null){const vt=A.texture.format;z=vt===bl||vt===wl||vt===Tl}if(z){const vt=A.texture.type,Et=vt===zn||vt===In||vt===fa||vt===Qn||vt===yl||vt===El,Ct=Yt.getClearColor(),Ut=Yt.getClearAlpha(),kt=Ct.r,Bt=Ct.g,Ht=Ct.b;Et?(p[0]=kt,p[1]=Bt,p[2]=Ht,p[3]=Ut,F.clearBufferuiv(F.COLOR,0,p)):(g[0]=kt,g[1]=Bt,g[2]=Ht,g[3]=Ut,F.clearBufferiv(F.COLOR,0,g))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT),B&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),gt.dispose(),wt.dispose(),at.dispose(),_.dispose(),D.dispose(),j.dispose(),It.dispose(),Kt.dispose(),_t.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",Pe),Gt.removeEventListener("sessionend",ne),St&&(St.dispose(),St=null),Le.stop()};function ot(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=it.autoReset,U=nt.enabled,B=nt.autoUpdate,G=nt.needsUpdate,z=nt.type;Qt(),it.autoReset=E,nt.enabled=U,nt.autoUpdate=B,nt.needsUpdate=G,nt.type=z}function dt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ft(E){const U=E.target;U.removeEventListener("dispose",ft),Pt(U)}function Pt(E){At(E),at.remove(E)}function At(E){const U=at.get(E).programs;U!==void 0&&(U.forEach(function(B){_t.releaseProgram(B)}),E.isShaderMaterial&&_t.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,B,G,z,vt){U===null&&(U=Rt);const Et=z.isMesh&&z.matrixWorld.determinant()<0,Ct=oc(E,U,B,G,z);O.setMaterial(G,Et);let Ut=B.index,kt=1;if(G.wireframe===!0){if(Ut=X.getWireframeAttribute(B),Ut===void 0)return;kt=2}const Bt=B.drawRange,Ht=B.attributes.position;let ue=Bt.start*kt,Be=(Bt.start+Bt.count)*kt;vt!==null&&(ue=Math.max(ue,vt.start*kt),Be=Math.min(Be,(vt.start+vt.count)*kt)),Ut!==null?(ue=Math.max(ue,0),Be=Math.min(Be,Ut.count)):Ht!=null&&(ue=Math.max(ue,0),Be=Math.min(Be,Ht.count));const Me=Be-ue;if(Me<0||Me===1/0)return;It.setup(z,G,Ct,B,Ut);let pn,ae=bt;if(Ut!==null&&(pn=Y.get(Ut),ae=Mt,ae.setIndex(pn)),z.isMesh)G.wireframe===!0?(O.setLineWidth(G.wireframeLinewidth*Wt()),ae.setMode(F.LINES)):ae.setMode(F.TRIANGLES);else if(z.isLine){let Xt=G.linewidth;Xt===void 0&&(Xt=1),O.setLineWidth(Xt*Wt()),z.isLineSegments?ae.setMode(F.LINES):z.isLineLoop?ae.setMode(F.LINE_LOOP):ae.setMode(F.LINE_STRIP)}else z.isPoints?ae.setMode(F.POINTS):z.isSprite&&ae.setMode(F.TRIANGLES);if(z.isBatchedMesh)ae.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)ae.renderInstances(ue,Me,z.count);else if(B.isInstancedBufferGeometry){const Xt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,cr=Math.min(B.instanceCount,Xt);ae.renderInstances(ue,Me,cr)}else ae.render(ue,Me)};function te(E,U,B){E.transparent===!0&&E.side===hn&&E.forceSinglePass===!1?(E.side=Ne,E.needsUpdate=!0,ls(E,U,B),E.side=Gn,E.needsUpdate=!0,ls(E,U,B),E.side=hn):ls(E,U,B)}this.compile=function(E,U,B=null){B===null&&(B=E),m=wt.get(B),m.init(),w.push(m),B.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),E!==B&&E.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(x._useLegacyLights);const G=new Set;return E.traverse(function(z){const vt=z.material;if(vt)if(Array.isArray(vt))for(let Et=0;Et<vt.length;Et++){const Ct=vt[Et];te(Ct,B,z),G.add(Ct)}else te(vt,B,z),G.add(vt)}),w.pop(),m=null,G},this.compileAsync=function(E,U,B=null){const G=this.compile(E,U,B);return new Promise(z=>{function vt(){if(G.forEach(function(Et){at.get(Et).currentProgram.isReady()&&G.delete(Et)}),G.size===0){z(E);return}setTimeout(vt,10)}q.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let ee=null;function xe(E){ee&&ee(E)}function Pe(){Le.stop()}function ne(){Le.start()}const Le=new Hl;Le.setAnimationLoop(xe),typeof self<"u"&&Le.setContext(self),this.setAnimationLoop=function(E){ee=E,Gt.setAnimationLoop(E),E===null?Le.stop():Le.start()},Gt.addEventListener("sessionstart",Pe),Gt.addEventListener("sessionend",ne),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(U),U=Gt.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,A),m=wt.get(E,w.length),m.init(),w.push(m),yt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),W.setFromProjectionMatrix(yt),mt=this.localClippingEnabled,et=Dt.init(this.clippingPlanes,mt),v=gt.get(E,f.length),v.init(),f.push(v),ln(E,U,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(K,$),this.info.render.frame++,et===!0&&Dt.beginShadows();const B=m.state.shadowsArray;if(nt.render(B,E,U),et===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Yt.render(v,E),m.setupLights(x._useLegacyLights),U.isArrayCamera){const G=U.cameras;for(let z=0,vt=G.length;z<vt;z++){const Et=G[z];La(v,E,Et,Et.viewport)}}else La(v,E,U);A!==null&&(S.updateMultisampleRenderTarget(A),S.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(x,E,U),It.resetDefaultState(),N=-1,M=null,w.pop(),w.length>0?m=w[w.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function ln(E,U,B,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){G&&zt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(yt);const Et=j.update(E),Ct=E.material;Ct.visible&&v.push(E,Et,Ct,B,zt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){const Et=j.update(E),Ct=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),zt.copy(E.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),zt.copy(Et.boundingSphere.center)),zt.applyMatrix4(E.matrixWorld).applyMatrix4(yt)),Array.isArray(Ct)){const Ut=Et.groups;for(let kt=0,Bt=Ut.length;kt<Bt;kt++){const Ht=Ut[kt],ue=Ct[Ht.materialIndex];ue&&ue.visible&&v.push(E,Et,ue,B,zt.z,Ht)}}else Ct.visible&&v.push(E,Et,Ct,B,zt.z,null)}}const vt=E.children;for(let Et=0,Ct=vt.length;Et<Ct;Et++)ln(vt[Et],U,B,G)}function La(E,U,B,G){const z=E.opaque,vt=E.transmissive,Et=E.transparent;m.setupLightsView(B),et===!0&&Dt.setGlobalState(x.clippingPlanes,B),vt.length>0&&ac(z,vt,U,B),G&&O.viewport(b.copy(G)),z.length>0&&os(z,U,B),vt.length>0&&os(vt,U,B),Et.length>0&&os(Et,U,B),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function ac(E,U,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const vt=Q.isWebGL2;St===null&&(St=new on(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")?Tn:zn,minFilter:Qi,samples:vt?4:0})),x.getDrawingBufferSize(Nt),vt?St.setSize(Nt.x,Nt.y):St.setSize(Ys(Nt.x),Ys(Nt.y));const Et=x.getRenderTarget();x.setRenderTarget(St),x.getClearColor(st),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Ct=x.toneMapping;x.toneMapping=On,os(E,B,G),S.updateMultisampleRenderTarget(St),S.updateRenderTargetMipmap(St);let Ut=!1;for(let kt=0,Bt=U.length;kt<Bt;kt++){const Ht=U[kt],ue=Ht.object,Be=Ht.geometry,Me=Ht.material,pn=Ht.group;if(Me.side===hn&&ue.layers.test(G.layers)){const ae=Me.side;Me.side=Ne,Me.needsUpdate=!0,Da(ue,B,G,Be,Me,pn),Me.side=ae,Me.needsUpdate=!0,Ut=!0}}Ut===!0&&(S.updateMultisampleRenderTarget(St),S.updateRenderTargetMipmap(St)),x.setRenderTarget(Et),x.setClearColor(st,P),x.toneMapping=Ct}function os(E,U,B){const G=U.isScene===!0?U.overrideMaterial:null;for(let z=0,vt=E.length;z<vt;z++){const Et=E[z],Ct=Et.object,Ut=Et.geometry,kt=G===null?Et.material:G,Bt=Et.group;Ct.layers.test(B.layers)&&Da(Ct,U,B,Ut,kt,Bt)}}function Da(E,U,B,G,z,vt){E.onBeforeRender(x,U,B,G,z,vt),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(x,U,B,G,E,vt),z.transparent===!0&&z.side===hn&&z.forceSinglePass===!1?(z.side=Ne,z.needsUpdate=!0,x.renderBufferDirect(B,U,G,z,E,vt),z.side=Gn,z.needsUpdate=!0,x.renderBufferDirect(B,U,G,z,E,vt),z.side=hn):x.renderBufferDirect(B,U,G,z,E,vt),E.onAfterRender(x,U,B,G,z,vt)}function ls(E,U,B){U.isScene!==!0&&(U=Rt);const G=at.get(E),z=m.state.lights,vt=m.state.shadowsArray,Et=z.state.version,Ct=_t.getParameters(E,z.state,vt,U,B),Ut=_t.getProgramCacheKey(Ct);let kt=G.programs;G.environment=E.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(E.isMeshStandardMaterial?D:_).get(E.envMap||G.environment),kt===void 0&&(E.addEventListener("dispose",ft),kt=new Map,G.programs=kt);let Bt=kt.get(Ut);if(Bt!==void 0){if(G.currentProgram===Bt&&G.lightsStateVersion===Et)return Ia(E,Ct),Bt}else Ct.uniforms=_t.getUniforms(E),E.onBuild(B,Ct,x),E.onBeforeCompile(Ct,x),Bt=_t.acquireProgram(Ct,Ut),kt.set(Ut,Bt),G.uniforms=Ct.uniforms;const Ht=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ht.clippingPlanes=Dt.uniform),Ia(E,Ct),G.needsLights=cc(E),G.lightsStateVersion=Et,G.needsLights&&(Ht.ambientLightColor.value=z.state.ambient,Ht.lightProbe.value=z.state.probe,Ht.directionalLights.value=z.state.directional,Ht.directionalLightShadows.value=z.state.directionalShadow,Ht.spotLights.value=z.state.spot,Ht.spotLightShadows.value=z.state.spotShadow,Ht.rectAreaLights.value=z.state.rectArea,Ht.ltc_1.value=z.state.rectAreaLTC1,Ht.ltc_2.value=z.state.rectAreaLTC2,Ht.pointLights.value=z.state.point,Ht.pointLightShadows.value=z.state.pointShadow,Ht.hemisphereLights.value=z.state.hemi,Ht.directionalShadowMap.value=z.state.directionalShadowMap,Ht.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ht.spotShadowMap.value=z.state.spotShadowMap,Ht.spotLightMatrix.value=z.state.spotLightMatrix,Ht.spotLightMap.value=z.state.spotLightMap,Ht.pointShadowMap.value=z.state.pointShadowMap,Ht.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Bt,G.uniformsList=null,Bt}function Ua(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Bs.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Ia(E,U){const B=at.get(E);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function oc(E,U,B,G,z){U.isScene!==!0&&(U=Rt),S.resetTextureUnits();const vt=U.fog,Et=G.isMeshStandardMaterial?U.environment:null,Ct=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:bn,Ut=(G.isMeshStandardMaterial?D:_).get(G.envMap||Et),kt=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Bt=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ht=!!B.morphAttributes.position,ue=!!B.morphAttributes.normal,Be=!!B.morphAttributes.color;let Me=On;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Me=x.toneMapping);const pn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ae=pn!==void 0?pn.length:0,Xt=at.get(G),cr=m.state.lights;if(et===!0&&(mt===!0||E!==M)){const Xe=E===M&&G.id===N;Dt.setState(G,E,Xe)}let le=!1;G.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==cr.state.version||Xt.outputColorSpace!==Ct||z.isBatchedMesh&&Xt.batching===!1||!z.isBatchedMesh&&Xt.batching===!0||z.isInstancedMesh&&Xt.instancing===!1||!z.isInstancedMesh&&Xt.instancing===!0||z.isSkinnedMesh&&Xt.skinning===!1||!z.isSkinnedMesh&&Xt.skinning===!0||z.isInstancedMesh&&Xt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Xt.instancingColor===!1&&z.instanceColor!==null||Xt.envMap!==Ut||G.fog===!0&&Xt.fog!==vt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Dt.numPlanes||Xt.numIntersection!==Dt.numIntersection)||Xt.vertexAlphas!==kt||Xt.vertexTangents!==Bt||Xt.morphTargets!==Ht||Xt.morphNormals!==ue||Xt.morphColors!==Be||Xt.toneMapping!==Me||Q.isWebGL2===!0&&Xt.morphTargetsCount!==ae)&&(le=!0):(le=!0,Xt.__version=G.version);let Hn=Xt.currentProgram;le===!0&&(Hn=ls(G,U,z));let Na=!1,Ni=!1,hr=!1;const Ae=Hn.getUniforms(),Vn=Xt.uniforms;if(O.useProgram(Hn.program)&&(Na=!0,Ni=!0,hr=!0),G.id!==N&&(N=G.id,Ni=!0),Na||M!==E){Ae.setValue(F,"projectionMatrix",E.projectionMatrix),Ae.setValue(F,"viewMatrix",E.matrixWorldInverse);const Xe=Ae.map.cameraPosition;Xe!==void 0&&Xe.setValue(F,zt.setFromMatrixPosition(E.matrixWorld)),Q.logarithmicDepthBuffer&&Ae.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ae.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Ni=!0,hr=!0)}if(z.isSkinnedMesh){Ae.setOptional(F,z,"bindMatrix"),Ae.setOptional(F,z,"bindMatrixInverse");const Xe=z.skeleton;Xe&&(Q.floatVertexTextures?(Xe.boneTexture===null&&Xe.computeBoneTexture(),Ae.setValue(F,"boneTexture",Xe.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Ae.setOptional(F,z,"batchingTexture"),Ae.setValue(F,"batchingTexture",z._matricesTexture,S));const ur=B.morphAttributes;if((ur.position!==void 0||ur.normal!==void 0||ur.color!==void 0&&Q.isWebGL2===!0)&&Ft.update(z,B,Hn),(Ni||Xt.receiveShadow!==z.receiveShadow)&&(Xt.receiveShadow=z.receiveShadow,Ae.setValue(F,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Vn.envMap.value=Ut,Vn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),Ni&&(Ae.setValue(F,"toneMappingExposure",x.toneMappingExposure),Xt.needsLights&&lc(Vn,hr),vt&&G.fog===!0&&ut.refreshFogUniforms(Vn,vt),ut.refreshMaterialUniforms(Vn,G,Z,k,St),Bs.upload(F,Ua(Xt),Vn,S)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Bs.upload(F,Ua(Xt),Vn,S),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ae.setValue(F,"center",z.center),Ae.setValue(F,"modelViewMatrix",z.modelViewMatrix),Ae.setValue(F,"normalMatrix",z.normalMatrix),Ae.setValue(F,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Xe=G.uniformsGroups;for(let dr=0,hc=Xe.length;dr<hc;dr++)if(Q.isWebGL2){const Fa=Xe[dr];Kt.update(Fa,Hn),Kt.bind(Fa,Hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hn}function lc(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function cc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,U,B){at.get(E.texture).__webglTexture=U,at.get(E.depthTexture).__webglTexture=B;const G=at.get(E);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){const B=at.get(E);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,B=0){A=E,C=U,R=B;let G=!0,z=null,vt=!1,Et=!1;if(E){const Ut=at.get(E);Ut.__useDefaultFramebuffer!==void 0?(O.bindFramebuffer(F.FRAMEBUFFER,null),G=!1):Ut.__webglFramebuffer===void 0?S.setupRenderTarget(E):Ut.__hasExternalTextures&&S.rebindTextures(E,at.get(E.texture).__webglTexture,at.get(E.depthTexture).__webglTexture);const kt=E.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Et=!0);const Bt=at.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Bt[U])?z=Bt[U][B]:z=Bt[U],vt=!0):Q.isWebGL2&&E.samples>0&&S.useMultisampledRTT(E)===!1?z=at.get(E).__webglMultisampledFramebuffer:Array.isArray(Bt)?z=Bt[B]:z=Bt,b.copy(E.viewport),H.copy(E.scissor),V=E.scissorTest}else b.copy(J).multiplyScalar(Z).floor(),H.copy(tt).multiplyScalar(Z).floor(),V=lt;if(O.bindFramebuffer(F.FRAMEBUFFER,z)&&Q.drawBuffers&&G&&O.drawBuffers(E,z),O.viewport(b),O.scissor(H),O.setScissorTest(V),vt){const Ut=at.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ut.__webglTexture,B)}else if(Et){const Ut=at.get(E.texture),kt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ut.__webglTexture,B||0,kt)}N=-1},this.readRenderTargetPixels=function(E,U,B,G,z,vt,Et){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=at.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct){O.bindFramebuffer(F.FRAMEBUFFER,Ct);try{const Ut=E.texture,kt=Ut.format,Bt=Ut.type;if(kt!==an&&xt.convert(kt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ht=Bt===Tn&&(q.has("EXT_color_buffer_half_float")||Q.isWebGL2&&q.has("EXT_color_buffer_float"));if(Bt!==zn&&xt.convert(Bt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Bt===Nn&&(Q.isWebGL2||q.has("OES_texture_float")||q.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&B>=0&&B<=E.height-z&&F.readPixels(U,B,G,z,xt.convert(kt),xt.convert(Bt),vt)}finally{const Ut=A!==null?at.get(A).__webglFramebuffer:null;O.bindFramebuffer(F.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(E,U,B=0){const G=Math.pow(2,-B),z=Math.floor(U.image.width*G),vt=Math.floor(U.image.height*G);S.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,B,0,0,E.x,E.y,z,vt),O.unbindTexture()},this.copyTextureToTexture=function(E,U,B,G=0){const z=U.image.width,vt=U.image.height,Et=xt.convert(B.format),Ct=xt.convert(B.type);S.setTexture2D(B,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment),U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,G,E.x,E.y,z,vt,Et,Ct,U.image.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,G,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,Et,U.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,G,E.x,E.y,Et,Ct,U.image),G===0&&B.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),O.unbindTexture()},this.copyTextureToTexture3D=function(E,U,B,G,z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const vt=E.max.x-E.min.x+1,Et=E.max.y-E.min.y+1,Ct=E.max.z-E.min.z+1,Ut=xt.convert(G.format),kt=xt.convert(G.type);let Bt;if(G.isData3DTexture)S.setTexture3D(G,0),Bt=F.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)S.setTexture2DArray(G,0),Bt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const Ht=F.getParameter(F.UNPACK_ROW_LENGTH),ue=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Be=F.getParameter(F.UNPACK_SKIP_PIXELS),Me=F.getParameter(F.UNPACK_SKIP_ROWS),pn=F.getParameter(F.UNPACK_SKIP_IMAGES),ae=B.isCompressedTexture?B.mipmaps[z]:B.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ae.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ae.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,E.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,E.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,E.min.z),B.isDataTexture||B.isData3DTexture?F.texSubImage3D(Bt,z,U.x,U.y,U.z,vt,Et,Ct,Ut,kt,ae.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Bt,z,U.x,U.y,U.z,vt,Et,Ct,Ut,ae.data)):F.texSubImage3D(Bt,z,U.x,U.y,U.z,vt,Et,Ct,Ut,kt,ae),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ht),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ue),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Be),F.pixelStorei(F.UNPACK_SKIP_ROWS,Me),F.pixelStorei(F.UNPACK_SKIP_IMAGES,pn),z===0&&G.generateMipmaps&&F.generateMipmap(Bt),O.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),O.unbindTexture()},this.resetState=function(){C=0,R=0,A=null,O.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===pa?"display-p3":"srgb",e.unpackColorSpace=jt.workingColorSpace===er?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pe?ei:Rl}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ei?pe:bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Tm extends Kl{}Tm.prototype.isWebGL1Renderer=!0;class Ma{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ot(t),this.density=e}clone(){return new Ma(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $l extends he{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class wm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ia,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const De=new T;class $s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new $s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class js extends ni{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let xi;const Gi=new T,Mi=new T,Si=new T,yi=new pt,Hi=new pt,jl=new oe,Ls=new T,Vi=new T,Ds=new T,el=new pt,Vr=new pt,nl=new pt;class la extends he{constructor(t=new js){if(super(),this.isSprite=!0,this.type="Sprite",xi===void 0){xi=new ge;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wm(e,5);xi.setIndex([0,1,2,0,2,3]),xi.setAttribute("position",new $s(n,3,0,!1)),xi.setAttribute("uv",new $s(n,2,3,!1))}this.geometry=xi,this.material=t,this.center=new pt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mi.setFromMatrixScale(this.matrixWorld),jl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Si.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mi.multiplyScalar(-Si.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Us(Ls.set(-.5,-.5,0),Si,o,Mi,i,r),Us(Vi.set(.5,-.5,0),Si,o,Mi,i,r),Us(Ds.set(.5,.5,0),Si,o,Mi,i,r),el.set(0,0),Vr.set(1,0),nl.set(1,1);let a=t.ray.intersectTriangle(Ls,Vi,Ds,!1,Gi);if(a===null&&(Us(Vi.set(-.5,.5,0),Si,o,Mi,i,r),Vr.set(0,1),a=t.ray.intersectTriangle(Ls,Ds,Vi,!1,Gi),a===null))return;const l=t.ray.origin.distanceTo(Gi);l<t.near||l>t.far||e.push({distance:l,point:Gi.clone(),uv:Ke.getInterpolation(Gi,Ls,Vi,Ds,el,Vr,nl,new pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Us(s,t,e,n,i,r){yi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Hi.x=r*yi.x-i*yi.y,Hi.y=i*yi.x+r*yi.y):Hi.copy(yi),s.copy(t),s.x+=Hi.x,s.y+=Hi.y,s.applyMatrix4(jl)}class Zl extends ni{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const il=new oe,ca=new ir,Is=new nr,Ns=new T;class kr extends he{constructor(t=new ge,e=new Zl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(i),Is.radius+=r,t.ray.intersectsSphere(Is)===!1)return;il.copy(i).invert(),ca.copy(t.ray).applyMatrix4(il);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);Ns.fromBufferAttribute(u,m),sl(Ns,m,l,i,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,v=p;g<v;g++)Ns.fromBufferAttribute(u,g),sl(Ns,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function sl(s,t,e,n,i,r,o){const a=ca.distanceSqToPoint(s);if(a<e){const l=new T;ca.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class ns extends Fe{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,p=(o-h)/d;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new pt:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new T,i=[],r=[],o=[],a=new T,l=new oe;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Te(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(Te(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Jl extends An{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new pt,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class bm extends Jl{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Sa(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,i(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Fs=new T,Wr=new Sa,Xr=new Sa,qr=new Sa;class Am extends An{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Fs.subVectors(i[0],i[1]).add(i[0]),c=Fs);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Fs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Fs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Wr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),Xr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),qr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Wr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Xr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),qr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Wr.calc(l),Xr.calc(l),qr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function rl(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Rm(s,t){const e=1-s;return e*e*t}function Cm(s,t){return 2*(1-s)*s*t}function Pm(s,t){return s*s*t}function $i(s,t,e,n){return Rm(s,t)+Cm(s,e)+Pm(s,n)}function Lm(s,t){const e=1-s;return e*e*e*t}function Dm(s,t){const e=1-s;return 3*e*e*s*t}function Um(s,t){return 3*(1-s)*s*s*t}function Im(s,t){return s*s*s*t}function ji(s,t,e,n,i){return Lm(s,t)+Dm(s,e)+Um(s,n)+Im(s,i)}class Nm extends An{constructor(t=new pt,e=new pt,n=new pt,i=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new pt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ji(t,i.x,r.x,o.x,a.x),ji(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fm extends An{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ji(t,i.x,r.x,o.x,a.x),ji(t,i.y,r.y,o.y,a.y),ji(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Om extends An{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zm extends An{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bm extends An{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set($i(t,i.x,r.x,o.x),$i(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ya extends An{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set($i(t,i.x,r.x,o.x),$i(t,i.y,r.y,o.y),$i(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gm extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(rl(a,l.x,c.x,h.x,u.x),rl(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new pt().fromArray(i))}return this}}var Hm=Object.freeze({__proto__:null,ArcCurve:bm,CatmullRomCurve3:Am,CubicBezierCurve:Nm,CubicBezierCurve3:Fm,EllipseCurve:Jl,LineCurve:Om,LineCurve3:zm,QuadraticBezierCurve:Bm,QuadraticBezierCurve3:ya,SplineCurve:Gm});class Zs extends ge{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new T,h=new pt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ce extends ge{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const v=[],m=n/2;let f=0;w(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(p,2));function w(){const y=new T,C=new T;let R=0;const A=(e-t)/n;for(let N=0;N<=r;N++){const M=[],b=N/r,H=b*(e-t)+t;for(let V=0;V<=i;V++){const st=V/i,P=st*l+a,I=Math.sin(P),k=Math.cos(P);C.x=H*I,C.y=-b*n+m,C.z=H*k,u.push(C.x,C.y,C.z),y.set(I,A,k).normalize(),d.push(y.x,y.y,y.z),p.push(st,1-b),M.push(g++)}v.push(M)}for(let N=0;N<i;N++)for(let M=0;M<r;M++){const b=v[M][N],H=v[M+1][N],V=v[M+1][N+1],st=v[M][N+1];h.push(b,H,st),h.push(H,V,st),R+=6}c.addGroup(f,R,0),f+=R}function x(y){const C=g,R=new pt,A=new T;let N=0;const M=y===!0?t:e,b=y===!0?1:-1;for(let V=1;V<=i;V++)u.push(0,m*b,0),d.push(0,b,0),p.push(.5,.5),g++;const H=g;for(let V=0;V<=i;V++){const P=V/i*l+a,I=Math.cos(P),k=Math.sin(P);A.x=M*k,A.y=m*b,A.z=M*I,u.push(A.x,A.y,A.z),d.push(0,b,0),R.x=I*.5+.5,R.y=k*.5*b+.5,p.push(R.x,R.y),g++}for(let V=0;V<i;V++){const st=C+V,P=H+V;y===!0?h.push(P,P+1,st):h.push(P+1,P,st),N+=3}c.addGroup(f,N,y===!0?1:2),f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ce(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Js extends ce{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Js(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ea extends ge{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const x=new T,y=new T,C=new T;for(let R=0;R<e.length;R+=3)p(e[R+0],x),p(e[R+1],y),p(e[R+2],C),l(x,y,C,w)}function l(w,x,y,C){const R=C+1,A=[];for(let N=0;N<=R;N++){A[N]=[];const M=w.clone().lerp(y,N/R),b=x.clone().lerp(y,N/R),H=R-N;for(let V=0;V<=H;V++)V===0&&N===R?A[N][V]=M:A[N][V]=M.clone().lerp(b,V/H)}for(let N=0;N<R;N++)for(let M=0;M<2*(R-N)-1;M++){const b=Math.floor(M/2);M%2===0?(d(A[N][b+1]),d(A[N+1][b]),d(A[N][b])):(d(A[N][b+1]),d(A[N+1][b+1]),d(A[N+1][b]))}}function c(w){const x=new T;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(w),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){const w=new T;for(let x=0;x<r.length;x+=3){w.x=r[x+0],w.y=r[x+1],w.z=r[x+2];const y=m(w)/2/Math.PI+.5,C=f(w)/Math.PI+.5;o.push(y,1-C)}g(),u()}function u(){for(let w=0;w<o.length;w+=6){const x=o[w+0],y=o[w+2],C=o[w+4],R=Math.max(x,y,C),A=Math.min(x,y,C);R>.9&&A<.1&&(x<.2&&(o[w+0]+=1),y<.2&&(o[w+2]+=1),C<.2&&(o[w+4]+=1))}}function d(w){r.push(w.x,w.y,w.z)}function p(w,x){const y=w*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function g(){const w=new T,x=new T,y=new T,C=new T,R=new pt,A=new pt,N=new pt;for(let M=0,b=0;M<r.length;M+=9,b+=6){w.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),R.set(o[b+0],o[b+1]),A.set(o[b+2],o[b+3]),N.set(o[b+4],o[b+5]),C.copy(w).add(x).add(y).divideScalar(3);const H=m(C);v(R,b+0,w,H),v(A,b+2,x,H),v(N,b+4,y,H)}}function v(w,x,y,C){C<0&&w.x===1&&(o[x]=w.x-1),y.x===0&&y.z===0&&(o[x]=C/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function f(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ea(t.vertices,t.indices,t.radius,t.details)}}class Ta extends Ea{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ta(t.radius,t.detail)}}class dn extends ge{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new T,d=new T,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const w=[],x=f/n;let y=0;f===0&&o===0?y=.5/e:f===n&&l===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){const R=C/e;u.x=-t*Math.cos(i+R*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(i+R*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(R+y,1-x),w.push(c++)}h.push(w)}for(let f=0;f<n;f++)for(let w=0;w<e;w++){const x=h[f][w+1],y=h[f][w],C=h[f+1][w],R=h[f+1][w+1];(f!==0||o>0)&&p.push(x,y,R),(f!==n-1||l<Math.PI)&&p.push(y,C,R)}this.setIndex(p),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ar extends ge{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new T,u=new T,d=new T;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const v=g/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const v=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,w=(i+1)*p+g;o.push(v,m,w),o.push(m,f,w)}this.setIndex(o),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class wa extends ge{constructor(t=new ya(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new T,l=new T,c=new pt;let h=new T;const u=[],d=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(p,2));function v(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),w(),f()}function m(x){h=t.getPointAt(x/e,h);const y=o.normals[x],C=o.binormals[x];for(let R=0;R<=i;R++){const A=R/i*Math.PI*2,N=Math.sin(A),M=-Math.cos(A);l.x=M*y.x+N*C.x,l.y=M*y.y+N*C.y,l.z=M*y.z+N*C.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let x=1;x<=e;x++)for(let y=1;y<=i;y++){const C=(i+1)*(x-1)+(y-1),R=(i+1)*x+(y-1),A=(i+1)*x+y,N=(i+1)*(x-1)+y;g.push(C,R,N),g.push(R,A,N)}}function w(){for(let x=0;x<=e;x++)for(let y=0;y<=i;y++)c.x=x/e,c.y=y/i,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new wa(new Hm[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Vm extends be{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class se extends ni{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cl,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class or extends he{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class km extends or{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Yr=new oe,al=new T,ol=new T;class Ql{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _a,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;al.setFromMatrixPosition(t.matrixWorld),e.position.copy(al),ol.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ol),e.updateMatrixWorld(),Yr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ll=new oe,ki=new T,Kr=new T;class Wm extends Ql{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ki.setFromMatrixPosition(t.matrixWorld),n.position.copy(ki),Kr.copy(n.position),Kr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Kr),n.updateMatrixWorld(),i.makeTranslation(-ki.x,-ki.y,-ki.z),ll.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ll)}}class Xm extends or{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Wm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class qm extends Ql{constructor(){super(new va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ym extends or{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.shadow=new qm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Km extends or{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class tc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=cl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function cl(){return(typeof performance>"u"?Date:performance).now()}class $m{constructor(t,e,n=0,i=1/0){this.ray=new ir(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ga,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return ha(t,this,n,e),n.sort(hl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)ha(t[i],this,n,e);return n.sort(hl),n}}function hl(s,t){return s.distance-t.distance}function ha(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)ha(i[r],t,e,!0)}}const ul=new T,Os=new T;class jm{constructor(t=new T,e=new T){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){ul.subVectors(t,this.start),Os.subVectors(this.end,this.start);const n=Os.dot(Os);let r=Os.dot(ul)/n;return e&&(r=Te(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ua}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ua);const ec={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ui{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Zm=new va(-1,1,1,-1,0,1);class Jm extends ge{constructor(){super(),this.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Jt([0,2,0,0,2,0],2))}}const Qm=new Jm;class ba{constructor(t){this._mesh=new ct(Qm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Zm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class nc extends Ui{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof be?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=es.clone(t.uniforms),this.material=new be({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ba(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class dl extends Ui{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class t0 extends Ui{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class e0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new pt);this._width=n.width,this._height=n.height,e=new on(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Tn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new nc(ec),this.copyPass.material.blending=En,this.clock=new tc}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}dl!==void 0&&(o instanceof dl?n=!0:o instanceof t0&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new pt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class n0 extends Ui{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ot}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const i0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ot(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Pi extends Ui{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new pt(t.x,t.y):new pt(256,256),this.clearColor=new Ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new on(r,o,{type:Tn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new on(r,o,{type:Tn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new on(r,o,{type:Tn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=i0;this.highPassUniforms=es.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new be({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new pt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=ec;this.copyUniforms=es.clone(h.uniforms),this.blendMaterial=new be({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Fn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ot,this.oldClearAlpha=1,this.basic=new sr,this.fsQuad=new ba(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new pt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Pi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Pi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new be({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new pt(.5,.5)},direction:{value:new pt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new be({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Pi.BlurDirectionX=new pt(1,0);Pi.BlurDirectionY=new pt(0,1);const s0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class r0 extends Ui{constructor(){super();const t=s0;this.uniforms=es.clone(t.uniforms),this.material=new Vm({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ba(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},jt.getTransfer(this._outputColorSpace)===ie&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===gl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_l?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===da?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xl&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function a0(s){let t=s;return()=>(t=t*16807%2147483647,(t-1)/2147483646)}function Gs(s,t){const e=document.createElement("canvas");return e.width=s,e.height=t||s,[e,e.getContext("2d")]}function ye(s,t,e,n,i,r,o,a){for(let l=0;l<n;l++){s.globalAlpha=a*(.4+e()*.6),s.fillStyle=i[e()*i.length|0];const c=r+e()*(o-r);s.beginPath(),s.arc(e()*t,e()*t,c,0,7),s.fill()}s.globalAlpha=1}function o0(s,t=2){const e=s.width,n=s.height,i=s.getContext("2d").getImageData(0,0,e,n).data,[r,o]=Gs(e,n),a=o.createImageData(e,n),l=(c,h)=>(c=(c+e)%e,h=(h+n)%n,i[(h*e+c)*4]/255);for(let c=0;c<n;c++)for(let h=0;h<e;h++){const u=(l(h+1,c)-l(h-1,c))*t,d=(l(h,c+1)-l(h,c-1))*t,p=1/Math.hypot(u,d,1),g=(c*e+h)*4;a.data[g]=(-u*p*.5+.5)*255,a.data[g+1]=(d*p*.5+.5)*255,a.data[g+2]=p*255,a.data[g+3]=255}return o.putImageData(a,0,0),r}function $r(s,t=1,e=!0){const n=new ns(s);return n.wrapS=n.wrapT=Vs,n.repeat.set(t,t),n.anisotropy=8,e&&(n.colorSpace=pe),n}function Mn(s,t,e,n=512,i=7){const r=a0(i),[o,a]=Gs(n);s(a,n,r);const[l,c]=Gs(n);t(c,n,r);const[h,u]=Gs(n);return u.fillStyle=`rgb(${e},${e},${e})`,u.fillRect(0,0,n,n),u.globalAlpha=.35,u.drawImage(l,0,0),u.globalAlpha=1,{map:$r(o),normalMap:$r(o0(l),1,!1),roughnessMap:$r(h,1,!1)}}function l0(){const s={};return s.sand=Mn((t,e,n)=>{const i=t.createLinearGradient(0,0,e,e);i.addColorStop(0,"#c9a86e"),i.addColorStop(.5,"#bd9c60"),i.addColorStop(1,"#c4a468"),t.fillStyle=i,t.fillRect(0,0,e,e);for(let r=0;r<90;r++){t.strokeStyle=`rgba(90,66,30,${.05+n()*.08})`,t.lineWidth=1+n()*2,t.beginPath();const o=n()*e;t.moveTo(0,o);for(let a=0;a<=e;a+=16)t.lineTo(a,o+Math.sin(a*.02+r)*4);t.stroke()}ye(t,e,n,9e3,["#a8854c","#e0c48c","#8f713c","#d6b87e"],.5,2.2,.5),ye(t,e,n,260,["#7a5f33","#5d4826"],2,7,.35);for(let r=0;r<90;r++)t.fillStyle=`rgba(110,92,60,${.4+n()*.4})`,t.beginPath(),t.ellipse(n()*e,n()*e,2+n()*5,1.5+n()*3,n()*3,0,7),t.fill()},(t,e,n)=>{t.fillStyle="#808080",t.fillRect(0,0,e,e),ye(t,e,n,7e3,["#666","#999","#555","#aaa"],.5,2.5,.5)},235),s.concrete=Mn((t,e,n)=>{t.fillStyle="#9a938a",t.fillRect(0,0,e,e),ye(t,e,n,6e3,["#8a837b","#aaa49b","#7d766e","#b5aea4"],.5,3,.45);for(let i=0;i<26;i++){const r=n()*e,o=n()*e,a=20+n()*70,l=t.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,`rgba(70,62,50,${.1+n()*.14})`),l.addColorStop(1,"rgba(70,62,50,0)"),t.fillStyle=l,t.beginPath(),t.arc(r,o,a,0,7),t.fill()}t.strokeStyle="rgba(50,46,40,.5)";for(let i=0;i<14;i++){t.lineWidth=.7+n(),t.beginPath();let r=n()*e,o=n()*e;t.moveTo(r,o);for(let a=0;a<8;a++)r+=(n()-.5)*46,o+=(n()-.5)*46,t.lineTo(r,o);t.stroke()}t.fillStyle="rgba(60,55,48,.18)";for(let i=0;i<e;i+=e/4)t.fillRect(0,i,e,2)},(t,e,n)=>{t.fillStyle="#7f7f7f",t.fillRect(0,0,e,e),ye(t,e,n,5e3,["#5f5f5f","#9f9f9f"],.5,3,.5),t.strokeStyle="rgba(40,40,40,.8)";for(let i=0;i<12;i++){t.lineWidth=1,t.beginPath();let r=n()*e,o=n()*e;t.moveTo(r,o);for(let a=0;a<6;a++)r+=(n()-.5)*40,o+=(n()-.5)*40,t.lineTo(r,o);t.stroke()}},200),s.wood=Mn((t,e,n)=>{t.fillStyle="#8a6238",t.fillRect(0,0,e,e);const i=5,r=e/i;for(let o=0;o<i;o++){t.fillStyle=`rgba(${110+n()*40|0},${76+n()*26|0},${40+n()*16|0},.55)`,t.fillRect(0,o*r,e,r),t.fillStyle="rgba(40,24,10,.7)",t.fillRect(0,o*r,e,3);for(let a=0;a<26;a++){t.strokeStyle=`rgba(60,38,16,${.12+n()*.2})`,t.lineWidth=.8,t.beginPath();const l=o*r+n()*r;t.moveTo(0,l),t.bezierCurveTo(e*.3,l+(n()-.5)*8,e*.7,l+(n()-.5)*8,e,l),t.stroke()}for(let a=0;a<3;a++){const l=n()*e,c=o*r+n()*r;t.strokeStyle="rgba(50,30,12,.5)";for(let h=1;h<4;h++)t.beginPath(),t.ellipse(l,c,h*3,h*1.8,0,0,7),t.stroke()}t.fillStyle="#3a3a3a",[14,e-14].forEach(a=>{t.beginPath(),t.arc(a,o*r+r/2,3,0,7),t.fill()})}},(t,e,n)=>{t.fillStyle="#808080",t.fillRect(0,0,e,e);const i=5,r=e/i;for(let o=0;o<i;o++)t.fillStyle="#6a6a6a",t.fillRect(0,o*r,e,3),ye(t,e,n,300,["#666","#999"],.5,2,.3)},190),s.metal=Mn((t,e,n)=>{t.fillStyle="#5d6468",t.fillRect(0,0,e,e),ye(t,e,n,5e3,["#4d5458","#6d7478","#596065"],.5,3,.4);for(let i=0;i<60;i++){const r=n()*e,o=n()*e,a=6+n()*30,l=t.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,`rgba(150,84,40,${.25+n()*.3})`),l.addColorStop(1,"rgba(150,84,40,0)"),t.fillStyle=l,t.beginPath(),t.arc(r,o,a,0,7),t.fill()}t.strokeStyle="rgba(200,205,210,.35)";for(let i=0;i<40;i++){t.lineWidth=.6,t.beginPath();const r=n()*e,o=n()*e;t.moveTo(r,o),t.lineTo(r+(n()-.5)*90,o+(n()-.5)*90),t.stroke()}t.strokeStyle="rgba(30,32,34,.6)",t.lineWidth=3,t.strokeRect(4,4,e-8,e-8),t.fillStyle="#33383c";for(let i=24;i<e;i+=48)for(let r=24;r<e;r+=48)t.beginPath(),t.arc(i,r,4,0,7),t.fill()},(t,e,n)=>{t.fillStyle="#808080",t.fillRect(0,0,e,e),ye(t,e,n,4e3,["#606060","#a0a0a0"],.5,3,.5)},110),s.asphalt=Mn((t,e,n)=>{t.fillStyle="#4c4a47",t.fillRect(0,0,e,e),ye(t,e,n,9e3,["#3e3c39","#5c5a56","#6a6863","#33312e"],.5,2.4,.5);for(let i=0;i<18;i++){const r=n()*e,o=n()*e,a=14+n()*50,l=t.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,`rgba(20,18,16,${.15+n()*.2})`),l.addColorStop(1,"rgba(20,18,16,0)"),t.fillStyle=l,t.beginPath(),t.arc(r,o,a,0,7),t.fill()}},(t,e,n)=>{t.fillStyle="#808080",t.fillRect(0,0,e,e),ye(t,e,n,7e3,["#666","#999"],.5,2.5,.5)},225),s.camo=Mn((t,e,n)=>{t.fillStyle="#4a4d38",t.fillRect(0,0,e,e);const i=["#3d402c","#5a5d42","#6b6a4e","#2f3324","#7a7355"];for(let r=0;r<130;r++){t.fillStyle=i[n()*i.length|0],t.globalAlpha=.5+n()*.5,t.beginPath();const o=n()*e,a=n()*e;t.ellipse(o,a,12+n()*30,8+n()*18,n()*3,0,7),t.fill()}t.globalAlpha=1,ye(t,e,n,2500,["#00000022","#ffffff14"],.5,2,.4)},(t,e,n)=>{t.fillStyle="#808080",t.fillRect(0,0,e,e),ye(t,e,n,2e3,["#6a6a6a","#969696"],.5,2,.4)},230),s.brick=Mn((t,e,n)=>{t.fillStyle="#b08d5a",t.fillRect(0,0,e,e);const i=e/8,r=e/4;for(let o=0;o<8;o++){const a=o%2*r/2;for(let l=-1;l<5;l++){const c=l*r+a,h=o*i;t.fillStyle=`rgb(${168+n()*26|0},${132+n()*20|0},${84+n()*16|0})`,t.fillRect(c+2,h+2,r-4,i-4),t.fillStyle="rgba(255,240,200,.10)",t.fillRect(c+2,h+2,r-4,3),t.fillStyle="rgba(60,40,16,.18)",t.fillRect(c+2,h+i-6,r-4,4)}}ye(t,e,n,4e3,["#96763f","#c8a96e"],.5,2.5,.4)},(t,e,n)=>{t.fillStyle="#808080",t.fillRect(0,0,e,e);const i=e/8,r=e/4;t.fillStyle="#555";for(let o=0;o<8;o++){const a=o%2*r/2;for(let l=-1;l<5;l++)t.fillRect(l*r+a,o*i,r,3)}ye(t,e,n,3e3,["#666","#9a9a9a"],.5,2.5,.4)},215),s.paint=Mn((t,e,n)=>{t.fillStyle="#cfc8ba",t.fillRect(0,0,e,e),ye(t,e,n,3500,["#bdb4a2","#e2dccf","#a89e8a"],.5,3,.35);for(let i=0;i<20;i++){const r=n()*e,o=n()*e,a=12+n()*40,l=t.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,`rgba(120,100,70,${.08+n()*.12})`),l.addColorStop(1,"rgba(120,100,70,0)"),t.fillStyle=l,t.beginPath(),t.arc(r,o,a,0,7),t.fill()}},(t,e,n)=>{t.fillStyle="#808080",t.fillRect(0,0,e,e),ye(t,e,n,3e3,["#6a6a6a","#969696"],.5,3,.4)},180),s.rock=Mn((t,e,n)=>{t.fillStyle="#8d7a5f",t.fillRect(0,0,e,e),ye(t,e,n,7e3,["#75624a","#a08a68","#6a563e","#b09a76"],.5,3.5,.5);for(let i=0;i<30;i++){t.strokeStyle=`rgba(50,38,22,${.15+n()*.2})`,t.lineWidth=1+n()*2,t.beginPath();const r=n()*e,o=n()*e;t.moveTo(r,o),t.lineTo(r+(n()-.5)*80,o+(n()-.5)*80),t.stroke()}},(t,e,n)=>{t.fillStyle="#808080",t.fillRect(0,0,e,e),ye(t,e,n,5e3,["#5f5f5f","#a5a5a5"],.5,4,.5)},240),s.clone=(t,e,n)=>{const i={};for(const r of["map","normalMap","roughnessMap"])i[r]=t[r].clone(),i[r].repeat.set(e,n),i[r].needsUpdate=!0;return i},s}function we(s,t={}){return new se({map:s.map,normalMap:s.normalMap,roughnessMap:s.roughnessMap,roughness:t.roughness??1,metalness:t.metalness??0,color:t.color??16777215,envMapIntensity:t.envMapIntensity??.6,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1})}class c0{constructor(t,e){this.scene=t,this.T=e,this.colliders=[],this.spawnPoints=[],this.patrols=[],this.build()}addCollider(t,e,n,i,r,o){this.colliders.push({min:new T(t-i/2,e-r/2,n-o/2),max:new T(t+i/2,e+r/2,n+o/2)})}box(t,e,n,i,r,o,a,l=0,c=!0,h=!0,u=!0){const d=new ct(new Tt(t,e,n),i);if(d.position.set(r,o,a),d.rotation.y=l,d.castShadow=h,d.receiveShadow=u,this.scene.add(d),c)if(l===0)this.addCollider(r,o,a,t,e,n);else{const p=Math.abs(Math.cos(l)),g=Math.abs(Math.sin(l));this.addCollider(r,o,a,t*p+n*g,e,t*g+n*p)}return d}build(){const t=this.T,e=this.scene,n=new dn(400,32,20),i=new be({side:Ne,depthWrite:!1,fog:!1,uniforms:{uSunDir:{value:new T(-.55,.38,-.45).normalize()}},vertexShader:"varying vec3 vDir; void main(){ vDir=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
        varying vec3 vDir; uniform vec3 uSunDir;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
        float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
          return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
        float fbm(vec2 p){ float v=0.0, a=0.5; for(int i=0;i<5;i++){ v+=a*noise(p); p*=2.1; a*=0.5; } return v; }
        void main(){
          vec3 d = normalize(vDir);
          float h = clamp(d.y, -0.1, 1.0);
          vec3 zen = vec3(0.16,0.30,0.52);
          vec3 mid = vec3(0.62,0.58,0.52);
          vec3 hor = vec3(0.98,0.72,0.42);
          vec3 col = mix(hor, mid, smoothstep(0.0,0.18,h));
          col = mix(col, zen, smoothstep(0.15,0.65,h));
          float sunAmt = max(dot(d, uSunDir), 0.0);
          col += vec3(1.0,0.55,0.22)*pow(sunAmt, 220.0)*3.0;   // disc
          col += vec3(1.0,0.62,0.28)*pow(sunAmt, 8.0)*0.35;    // glow
          col += vec3(0.9,0.45,0.18)*pow(sunAmt, 2.0)*0.12;
          // clouds
          if (d.y > 0.02) {
            vec2 uv = d.xz / (d.y + 0.25);
            float cl = fbm(uv*1.4 + vec2(3.7, 1.2));
            float cov = smoothstep(0.52, 0.78, cl) * smoothstep(0.02, 0.25, d.y);
            vec3 cloudCol = mix(vec3(0.98,0.90,0.82), vec3(0.55,0.48,0.45), clamp(cl*1.2-0.3,0.0,1.0));
            cloudCol += vec3(1.0,0.5,0.2)*pow(sunAmt,3.0)*0.25;
            col = mix(col, cloudCol, cov*0.75);
          }
          // haze at horizon
          col = mix(col, vec3(0.92,0.70,0.45), smoothstep(0.12,0.0,d.y)*0.6);
          gl_FragColor = vec4(col, 1.0);
        }`}),r=new ct(n,i);e.add(r),this.sky=r;const o=new Ym(16767392,3.2);o.position.set(-55,42,-48),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.camera.left=-55,o.shadow.camera.right=55,o.shadow.camera.top=55,o.shadow.camera.bottom=-55,o.shadow.camera.near=5,o.shadow.camera.far=180,o.shadow.bias=-4e-4,o.shadow.normalBias=.03,e.add(o),e.add(o.target),this.sun=o;const a=new km(12571880,9071170,.55);e.add(a);const l=new Km(16769208,.12);e.add(l),e.fog=new Ma(14200952,.011);const c=new aa(this.renderer),h=new $l;h.add(new ct(new dn(50,16,12),i.clone()));const u=c.fromScene(h,.04);e.environment=u.texture;const d=we(t.clone(t.sand,26,26),{roughness:1,envMapIntensity:.25}),p=new ct(new Un(320,320),d);p.rotation.x=-Math.PI/2,p.receiveShadow=!0,e.add(p);const g=we(t.clone(t.asphalt,7,7),{roughness:.95,envMapIntensity:.3}),v=new ct(new Un(78,78),g);v.rotation.x=-Math.PI/2,v.position.y=.02,v.receiveShadow=!0,e.add(v);const m=we(t.clone(t.sand,3,3),{roughness:1,envMapIntensity:.2});[[-14,12,18,14],[16,16,20,16],[2,-22,24,14],[-24,-6,14,20]].forEach(([rt,q,Q,O])=>{const it=new ct(new Un(Q,O),m);it.rotation.x=-Math.PI/2,it.position.set(rt,.045,q),it.receiveShadow=!0,e.add(it)});const f=new se({color:3814186,roughness:1});for(let rt=0;rt<3;rt++){const q=new ct(new Un(1.1,46),f);q.rotation.x=-Math.PI/2,q.rotation.z=.25+rt*.18,q.position.set(-6+rt*7,.05,4),q.receiveShadow=!0,e.add(q)}const w=we(t.clone(t.sand,4,4),{roughness:1,envMapIntensity:.15}),x=new se({color:10123861,roughness:1});for(let rt=0;rt<10;rt++){const q=rt/10*Math.PI*2+.3,Q=130+Math.random()*60,O=14+Math.random()*22,it=new ct(new Js(30+Math.random()*30,O,7),rt%3?w:x);it.position.set(Math.cos(q)*Q,O/2-2,Math.sin(q)*Q),it.scale.y=.55,e.add(it)}const y=we(t.clone(t.concrete,1.6,1.6),{roughness:.9,envMapIntensity:.4}),C=we(t.clone(t.concrete,1.2,1.2),{roughness:.95,color:12103844,envMapIntensity:.35}),R=we(t.clone(t.brick,2,1.4),{roughness:.92,envMapIntensity:.35}),A=we(t.clone(t.paint,1.4,1.4),{roughness:.75,envMapIntensity:.5}),N=we(t.clone(t.wood,1,1),{roughness:.85,envMapIntensity:.3}),M=we(t.clone(t.metal,1,1),{roughness:.55,metalness:.65,envMapIntensity:.9}),b=we(t.clone(t.metal,1,1),{roughness:.8,metalness:.4,color:12618330,envMapIntensity:.5}),H=we(t.clone(t.rock,1,1),{roughness:1,envMapIntensity:.2}),V=new se({color:1712680,roughness:.15,metalness:.8,envMapIntensity:1.4}),st=we(t.clone(t.metal,.6,.6),{roughness:.6,metalness:.5,color:9071162,envMapIntensity:.6}),P=38,I=3.4,k=.6,Z=R;this.box(P*2,I,k,Z,0,I/2,-P),this.box(P*2,I,k,Z,0,I/2,P),this.box(k,I,P*2,Z,-P,I/2,0),this.box(k,I,P*2,Z,P,I/2,0);for(let rt=-P;rt<=P;rt+=9.5)this.box(1.1,I+.5,1.1,C,rt,(I+.5)/2,-P),this.box(1.1,I+.5,1.1,C,rt,(I+.5)/2,P);for(let rt=-P;rt<=P;rt+=9.5)this.box(1.1,I+.5,1.1,C,-P,(I+.5)/2,rt),this.box(1.1,I+.5,1.1,C,P,(I+.5)/2,rt);const K=new se({color:2763306,roughness:.6,metalness:.7});this.box(P*2,.08,.08,K,0,I+.35,-P,0,!1,!1),this.box(P*2,.08,.08,K,0,I+.35,P,0,!1,!1);const $=(rt,q,Q,O,it,at,S=0)=>{const _=new de;_.position.set(rt,0,q),_.rotation.y=S;const D=new ct(new Tt(Q,it,O),at);D.position.y=it/2,D.castShadow=D.receiveShadow=!0,_.add(D);const Y=new ct(new Tt(Q+.5,.25,O+.5),C);Y.position.y=it+.12,Y.castShadow=Y.receiveShadow=!0,_.add(Y);const X=new ct(new Tt(Q+.5,.5,.18),at);X.position.set(0,it+.4,-O/2-.15),X.castShadow=!0,_.add(X);const j=X.clone();j.position.z=O/2+.15,_.add(j);const _t=new ct(new Tt(.18,.5,O+.5),at);_t.position.set(-Q/2-.15,it+.4,0),_t.castShadow=!0,_.add(_t);const ut=_t.clone();ut.position.x=Q/2+.15,_.add(ut);const gt=Math.max(1,Math.floor(Q/3));for(let It=0;It<gt;It++){const Kt=-Q/2+(It+.5)*(Q/gt),Qt=new ct(new Tt(1.3,1.1,.08),V);Qt.position.set(Kt,it*.62,O/2+.02),_.add(Qt);const Gt=new ct(new Tt(1.5,1.3,.05),C);Gt.position.set(Kt,it*.62,O/2+.005),_.add(Gt);const ot=Qt.clone();ot.position.z=-O/2-.02,_.add(ot)}const wt=new ct(new Tt(1.1,2.2,.1),st);wt.position.set(Q*.28,1.1,O/2+.03),_.add(wt);const Dt=new ct(new dn(.05,8,8),M);Dt.position.set(Q*.28+.38,1.1,O/2+.1),_.add(Dt);const nt=new ct(new Tt(1.1,.7,.5),A);nt.position.set(-Q*.3,it+.6,0),nt.castShadow=!0,_.add(nt);const Yt=new ct(new ce(.09,.09,it,8),M);Yt.position.set(Q/2+.18,it/2,O*.2),Yt.castShadow=!0,_.add(Yt);const Ft=new ct(new ce(.02,.02,2.4,6),M);Ft.position.set(Q*.35,it+1.4,-O*.25),_.add(Ft);const bt=new ct(new dn(.55,12,8,0,Math.PI*2,0,Math.PI/2.4),A);bt.position.set(Q*.35,it+2.2,-O*.25),bt.rotation.x=Math.PI*.7,_.add(bt),e.add(_);const Mt=Math.abs(Math.cos(S)),xt=Math.abs(Math.sin(S));return this.addCollider(rt,it/2,q,Q*Mt+O*xt,it,Q*xt+O*Mt),_};$(-20,-14,15,11,5.2,y),$(17,-18,11,9,4.2,R,.12),$(-6,-26,9,7,3.6,A),$(24,6,8,8,3.4,y,-.2),$(-26,14,8,7,3.2,R,.3),$(8,26,10,6,3,A,.08);{const O=M;[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4]].forEach(([X,j])=>{const _t=new ct(new ce(.14,.18,6,8),O);_t.position.set(26+X,6/2,-6+j),_t.castShadow=!0,e.add(_t)});const it=new ct(new Tt(4.2,.25,4.2),N);it.position.set(26,6,-6),it.castShadow=it.receiveShadow=!0,e.add(it);const at=new ct(new Tt(3.4,2.2,3.4),y);at.position.set(26,6+1.35,-6),at.castShadow=!0,e.add(at);const S=new ct(new Js(3.1,1.4,4),b);S.position.set(26,6+3.1,-6),S.rotation.y=Math.PI/4,S.castShadow=!0,e.add(S);const _=new ct(new Tt(4.2,.08,.08),M);_.position.set(26,7,-6+2.05),e.add(_);const D=_.clone();D.position.z=-6-2.05,e.add(D),this.addCollider(26,6/2,-6,3.2,6,3.2);const Y=new la(new js({map:this.glowTex(),color:16771504,transparent:!0,opacity:.85,blending:Fn,depthWrite:!1}));Y.scale.set(1.4,1.4,1),Y.position.set(26,6+1.6,-6+1.8),e.add(Y)}const J=(rt,q,Q,O)=>{const it=we(t.clone(t.metal,2,1),{roughness:.6,metalness:.55,color:O,envMapIntensity:.7}),at=new de;at.position.set(rt,1.3,q),at.rotation.y=Q;const S=new ct(new Tt(6,2.6,2.4),it);S.castShadow=S.receiveShadow=!0,at.add(S);for(let Y=-2;Y<=2;Y++){const X=new ct(new Tt(.14,2.5,2.5),it);X.position.x=Y*1.2,at.add(X)}e.add(at);const _=Math.abs(Math.cos(Q)),D=Math.abs(Math.sin(Q));this.addCollider(rt,1.3,q,6*_+2.4*D,2.6,6*D+2.4*_)};J(-2,-8,.15,10111530),J(12,-4,-.1,3824250),J(12.2,-7.6,.05,3824250),J(-14,22,1.35,5925434);const tt=(rt,q,Q,O,it=0)=>{const at=this.box(O,O,O,N,rt,q,Q,it),S=new ct(new Tt(O+.06,O*.16,O+.06),M);return S.position.set(rt,q,Q),S.rotation.y=it,e.add(S),at};tt(0,.6,2,1.2),tt(1.3,.6,2.2,1.2,.2),tt(.6,1.8,2.1,1.2,.1),tt(-1.5,.5,3.4,1,.4),tt(3.2,.75,.5,1.5,-.15),tt(3.3,2.25,.4,1.5,.05),tt(-8,.6,-16,1.2),tt(-6.6,.6,-15.4,1.2,.3),tt(-7.3,1.8,-15.7,1.2),tt(6,.6,12,1.2,.2),tt(7.4,.6,11.4,1.2),tt(6.7,1.8,11.7,1.2,.5),tt(-18,.6,2,1.2),tt(-16.6,.6,2.4,1.2,.2),tt(20,.6,18,1.2,.1),tt(21.4,.6,17.4,1.2,.4),tt(20.7,1.8,17.7,1.2),tt(-4,.5,-20,1),tt(14,.5,8,1,.3),tt(-10,1,8,2,.12);const lt=(rt,q,Q=0)=>{const O=new de;O.position.set(rt,0,q);const it=new ct(new ce(.42,.42,.95,14),b);it.position.y=.48,it.castShadow=it.receiveShadow=!0,O.add(it),[.25,.7].forEach(S=>{const _=new ct(new ar(.43,.025,6,20),M);_.rotation.x=Math.PI/2,_.position.y=S,O.add(_)});const at=new ct(new ce(.4,.4,.05,14),M);at.position.y=.97,O.add(at),e.add(O),this.addCollider(rt,.5,q,.85,1,.85)};[[-3,6],[-2.1,6.4],[-2.6,5.2],[9,-12],[9.8,-11.2],[-12,-4],[-11.2,-3.2],[18,2],[18.9,2.6],[4,18],[4.8,18.6],[-20,18],[22,-14],[-8,14]].forEach(([rt,q])=>lt(rt,q));const W=we(t.clone(t.camo,1,1),{roughness:1,color:12101768,envMapIntensity:.2}),et=(rt,q,Q,O=4)=>{const it=new de;it.position.set(rt,0,q),it.rotation.y=Q;const at=new dn(.32,8,6);for(let D=0;D<3;D++){const Y=Math.floor(O/.55);for(let X=0;X<Y;X++){const j=new ct(at,W);j.scale.set(1.3,.55,.8),j.position.set(-O/2+X*.55+D%2*.14,.18+D*.3,D%2?.08:-.05),j.rotation.y=(Math.random()-.5)*.4,j.castShadow=j.receiveShadow=!0,it.add(j)}}e.add(it);const S=Math.abs(Math.cos(Q)),_=Math.abs(Math.sin(Q));this.addCollider(rt,.5,q,O*S+.7*_,1,O*_+.7*S)};et(0,-14,0,5),et(-10,0,Math.PI/2,4),et(10,14,.2,4),et(-16,-20,.5,3),et(22,12,-.4,4);const mt=(rt,q,Q)=>{const O=new Ta(Q,1),it=O.attributes.position;for(let S=0;S<it.count;S++){const _=new T().fromBufferAttribute(it,S),D=1+(Math.sin(_.x*5+rt)+Math.cos(_.y*4+q))*.12+Math.random()*.08;_.multiplyScalar(D),it.setXYZ(S,_.x,_.y*.75,_.z)}O.computeVertexNormals();const at=new ct(O,H);at.position.set(rt,Q*.35,q),at.rotation.y=Math.random()*3,at.castShadow=at.receiveShadow=!0,e.add(at),this.addCollider(rt,Q*.4,q,Q*1.5,Q,Q*1.5)};[[-30,-24,1.6],[30,20,2],[-32,8,1.2],[32,-28,1.8],[14,30,1.4],[-14,32,1.1],[28,28,1.3],[-28,-30,1.5],[6,-32,1.2],[-34,-8,1]].forEach(([rt,q,Q])=>mt(rt,q,Q));const St=new se({color:4864038,roughness:1}),yt=(rt,q,Q=1)=>{const O=new de;O.position.set(rt,0,q),O.scale.setScalar(Q);const it=new ct(new ce(.12,.22,2.6,7),St);it.position.y=1.3,it.rotation.z=(Math.random()-.5)*.25,it.castShadow=!0,O.add(it);for(let at=0;at<4;at++){const S=new ct(new ce(.03,.07,1.4,5),St);S.position.set(Math.sin(at*1.7)*.5,2.2+at*.18,Math.cos(at*1.7)*.5),S.rotation.set(Math.cos(at*1.7)*.9,0,Math.sin(at*1.7)*.9),S.castShadow=!0,O.add(S)}e.add(O),this.addCollider(rt,1,q,.5,2,.5)};[[-24,-24],[28,-22],[-30,20],[30,30],[12,-30],[-12,28]].forEach(([rt,q])=>yt(rt,q,.9+Math.random()*.5));const Nt=(()=>{const rt=document.createElement("canvas");rt.width=rt.height=128;const q=rt.getContext("2d");q.strokeStyle="#9a8a4a",q.lineWidth=2;for(let O=0;O<40;O++){const it=20+Math.random()*88;q.beginPath(),q.moveTo(it,128),q.quadraticCurveTo(it+(Math.random()-.5)*30,70,it+(Math.random()-.5)*50,10+Math.random()*40),q.stroke()}const Q=new ns(rt);return Q.colorSpace=pe,Q})(),zt=new se({map:Nt,transparent:!0,alphaTest:.25,side:hn,roughness:1});for(let rt=0;rt<90;rt++){const q=(Math.random()-.5)*72,Q=(Math.random()-.5)*72,O=new de;O.position.set(q,0,Q),O.rotation.y=Math.random()*3;for(let it=0;it<2;it++){const at=new ct(new Un(.9,.6),zt);at.position.y=.3,at.rotation.y=it*Math.PI/2,O.add(at)}e.add(O)}const Rt=M,Wt=[[-8,-8],[8,-20],[-16,10],[16,20],[0,0]];Wt.forEach(([rt,q])=>{const Q=new ct(new ce(.07,.09,4.2,8),Rt);Q.position.set(rt,2.1,q),Q.castShadow=!0,e.add(Q);const O=new ct(new Tt(.5,.18,.28),V);O.position.set(rt,4.25,q),e.add(O);const it=new la(new js({map:this.glowTex(),color:16767392,transparent:!0,opacity:.5,blending:Fn,depthWrite:!1}));it.scale.set(1.6,1.6,1),it.position.set(rt,4.2,q),e.add(it),this.addCollider(rt,2,q,.3,4,.3)});for(let rt=0;rt<Wt.length-1;rt++){const[q,Q]=Wt[rt],[O,it]=Wt[rt+1],at=new T((q+O)/2,3.6,(Q+it)/2),S=new ya(new T(q,4.2,Q),at,new T(O,4.2,it)),_=new wa(S,16,.02,4),D=new ct(_,new se({color:1710618,roughness:.8}));e.add(D)}{const O=new de;O.position.set(-6,0,16),O.rotation.y=.5;const it=we(t.clone(t.metal,1,1),{roughness:.5,metalness:.5,color:5921346,envMapIntensity:.7}),at=new ct(new Tt(4.4,.9,1.9),it);at.position.y=.85,at.castShadow=!0,O.add(at);const S=new ct(new Tt(1.4,.5,1.8),it);S.position.set(1.6,1.15,0),S.castShadow=!0,O.add(S);const _=new ct(new Tt(2,.8,1.8),it);_.position.set(-.4,1.6,0),_.castShadow=!0,O.add(_);const D=new ct(new Tt(1.9,.6,1.7),V);D.position.set(-.4,1.65,0),O.add(D);const Y=new ce(.42,.42,.3,14),X=new se({color:1842204,roughness:.95});[[1.5,.95],[1.5,-.95],[-1.5,.95],[-1.5,-.95]].forEach(([Yt,Ft])=>{const bt=new ct(Y,X);bt.rotation.x=Math.PI/2,bt.position.set(Yt,.42,Ft),bt.castShadow=!0,O.add(bt);const Mt=new ct(new ce(.18,.18,.32,10),M);Mt.rotation.x=Math.PI/2,Mt.position.set(Yt,.42,Ft),O.add(Mt)});const j=new ct(Y,X);j.rotation.z=Math.PI/2,j.position.set(-2.25,1,0),O.add(j);const _t=new ct(new Tt(.5,.6,.25),b);_t.position.set(-2.1,.9,.6),O.add(_t);const ut=new ct(new Tt(1.8,.08,1.6),M);ut.position.set(-.4,2.05,0),O.add(ut);const gt=new ct(new Zs(.14,10),new se({color:16773824,emissive:16772528,emissiveIntensity:.6}));gt.position.set(2.21,1,.6),gt.rotation.y=Math.PI/2,O.add(gt);const wt=gt.clone();wt.position.z=-.6,O.add(wt),e.add(O);const Dt=Math.abs(Math.cos(.5)),nt=Math.abs(Math.sin(.5));this.addCollider(-6,1,16,4.6*Dt+2.1*nt,2,4.6*nt+2.1*Dt)}const F=new se({color:2366482,roughness:1,transparent:!0,opacity:.55});[[4,-6,3],[-12,6,2.4],[10,22,2.8],[-22,-2,2]].forEach(([rt,q,Q])=>{const O=new ct(new Zs(Q,16),F);O.rotation.x=-Math.PI/2,O.position.set(rt,.055,q),O.receiveShadow=!0,e.add(O)}),this.playerSpawn=new T(0,1.7,33),this.playerSpawnDir=new T(0,0,-1),this.enemySpawns=[new T(-14,0,-21),new T(10,0,-24),new T(0,0,-24),new T(-22,0,2),new T(22,0,-2),new T(4,0,-12)],this.patrols=[[new T(-14,0,-21),new T(-6,0,-16),new T(-14,0,-8)],[new T(10,0,-24),new T(6,0,-14),new T(16,0,-8)],[new T(0,0,-24),new T(-4,0,-18),new T(4,0,-18)],[new T(-22,0,2),new T(-16,0,6),new T(-18,0,12)],[new T(22,0,-2),new T(18,0,4),new T(20,0,12)],[new T(4,0,-12),new T(0,0,-4),new T(6,0,2)]]}glowTex(){if(this._glow)return this._glow;const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),this._glow=new ns(t),this._glow}collide(t,e,n){for(const i of this.colliders){if(t.y>i.max.y||t.y-n<i.min.y)continue;const r=Math.max(i.min.x,Math.min(t.x,i.max.x)),o=Math.max(i.min.z,Math.min(t.z,i.max.z)),a=t.x-r,l=t.z-o,c=a*a+l*l;if(c<e*e)if(c>1e-8){const h=Math.sqrt(c);t.x+=a/h*(e-h),t.z+=l/h*(e-h)}else{const h=t.x-i.min.x,u=i.max.x-t.x,d=t.z-i.min.z,p=i.max.z-t.z,g=Math.min(h,u,d,p);g===h?t.x=i.min.x-e:g===u?t.x=i.max.x+e:g===d?t.z=i.min.z-e:t.z=i.max.z+e}}t.x=Math.max(-37,Math.min(37,t.x)),t.z=Math.max(-37,Math.min(37,t.z))}rayBlocked(t,e){for(let i=1;i<24;i++){const r=i/24,o=t.x+(e.x-t.x)*r,a=t.y+(e.y-t.y)*r,l=t.z+(e.z-t.z)*r;for(const c of this.colliders)if(o>c.min.x&&o<c.max.x&&a>c.min.y&&a<c.max.y&&l>c.min.z&&l<c.max.z)return!0}return!1}}class h0{constructor(t,e,n){this.camera=t,this.world=e,this.audio=n,this.pos=new T(0,1.7,33),this.vel=new T,this.yaw=Math.PI,this.pitch=0,this.yaw=0,this.pitch=0,this.health=100,this.armor=50,this.onGround=!0,this.crouch=!1,this.sprint=!1,this.keys={},this.sens=1,this.baseFov=90,this.bobT=0,this.stepT=0,this.shake=0,this.shakeEnabled=!0,this.dead=!1,this.eyeH=1.7,this.eyeCrouch=1.15,this.radius=.42,this.mouseDX=0,this.mouseDY=0,this.fovKick=0}reset(){this.pos.set(0,1.7,33),this.vel.set(0,0,0),this.yaw=0,this.pitch=0,this.health=100,this.armor=50,this.dead=!1,this.crouch=!1,this.shake=0}forwardVec(){return new T(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}rightVec(){return new T(Math.cos(this.yaw),0,-Math.sin(this.yaw))}look(t,e){const n=.0022*this.sens;this.yaw-=t.x*n,this.pitch-=t.y*n,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch)),this.mouseDX=t.x,this.mouseDY=t.y}takeDamage(t,e){if(this.dead)return!1;let n=t;if(this.armor>0){const i=Math.min(this.armor,n*.5);this.armor-=i,n-=i}return this.health-=n,this.shake=Math.min(1,this.shake+.45),this.audio.hurt(),this.health<=0?(this.health=0,this.dead=!0,!0):!1}update(t,e){if(this.dead)return;const n=this.keys,i=new T(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),r=new T(Math.cos(this.yaw),0,-Math.sin(this.yaw)),o=new T;(n.KeyW||n.ArrowUp)&&o.add(i),(n.KeyS||n.ArrowDown)&&o.sub(i),(n.KeyD||n.ArrowRight)&&o.add(r),(n.KeyA||n.ArrowLeft)&&o.sub(r),o.lengthSq()>0&&o.normalize(),this.sprint=(n.ShiftLeft||n.ShiftRight)&&!this.crouch&&e<.3&&o.dot(i)>.3,this.crouch=!!n.KeyC||!!n.ControlLeft;let l=this.crouch?2.2:this.sprint?7.2:4.6;l*=1-e*.45,this.onGround||(l*=.6);const c=this.onGround?14:3;this.vel.x+=(o.x*l-this.vel.x)*Math.min(1,c*t),this.vel.z+=(o.z*l-this.vel.z)*Math.min(1,c*t);const h=this.crouch?this.eyeCrouch:this.eyeH;n.Space&&this.onGround&&(this.vel.y=5.2,this.onGround=!1,this.audio.jump()),this.vel.y-=13.5*t,this.pos.y+=this.vel.y*t,this.pos.y<=h?(!this.onGround&&this.vel.y<-3&&this.audio.land(),this.pos.y=h,this.vel.y=0,this.onGround=!0):this.pos.y>h+.05&&(this.onGround=!1),this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t;const u=this.pos.y-this.eyeH,d=new T(this.pos.x,u+.9,this.pos.z);this.world.collide(d,this.radius,1.6),this.pos.x=d.x,this.pos.z=d.z;const p=Math.hypot(this.vel.x,this.vel.z);p>.5&&this.onGround&&(this.bobT+=t*p*1.6,this.stepT+=t*p,this.stepT>2.4&&(this.stepT=0,this.audio.step(this.sprint)));const g=Math.sin(this.bobT*2)*.028*Math.min(1,p/4)*(this.onGround?1:0),v=Math.cos(this.bobT)*.02*Math.min(1,p/4)*(this.onGround?1:0);this.shake*=Math.pow(.001,t);const m=(Math.random()-.5)*this.shake*.03,f=(Math.random()-.5)*this.shake*.03,w=this.baseFov+(this.sprint?6:0)-e*18+this.fovKick;this.fovKick*=Math.pow(1e-4,t),Math.abs(this.camera.fov-w)>.05&&(this.camera.fov+=(w-this.camera.fov)*Math.min(1,t*10),this.camera.updateProjectionMatrix()),this.camera.position.set(this.pos.x+v*Math.cos(this.yaw),this.pos.y+g,this.pos.z-v*Math.sin(this.yaw));const x=this.vel.x*Math.cos(this.yaw)+this.vel.z*-Math.sin(this.yaw),y=vh.clamp(-x*.012,-.05,.05),C=new as(this.pitch+f,this.yaw+m,y,"YXZ");this.camera.quaternion.setFromEuler(C),this.mouseDX=0,this.mouseDY=0}get speed2D(){return Math.hypot(this.vel.x,this.vel.z)}}class u0{constructor(t,e,n,i){this.camera=t,this.scene=e,this.audio=n,this.fx=i,this.group=new de,t.add(this.group),e.add(t),this.buildRifle(),this.buildPistol(),this.current="rifle",this.group.add(this.rifle),this.group.add(this.pistol),this.pistol.visible=!1,this.reset(),this.bobT=0,this.recoil=0,this.recoilRot=0,this.ads=0,this.reloadT=0,this.reloadDur=0,this.swayX=0,this.swayY=0,this.triggerHeld=!1,this.nextShot=0,this.muzzleWorld=new T}buildRifle(){const t=new de,e=new se({color:2303528,roughness:.38,metalness:.85,envMapIntensity:1}),n=new se({color:3817282,roughness:.45,metalness:.8,envMapIntensity:.9}),i=new se({color:8014370,roughness:.55,metalness:.05,envMapIntensity:.5}),r=new se({color:1974044,roughness:.7,metalness:.1}),o=new se({color:13148208,roughness:.3,metalness:.9}),a=(d,p,g,v,m,f=0,w=0,x=0)=>{const y=new ct(d,p);return y.position.set(g,v,m),y.rotation.set(f,w,x),t.add(y),y};a(new Tt(.075,.11,.52),e,0,0,-.05),a(new ce(.016,.016,.34,10),n,0,.015,-.42,Math.PI/2),a(new ce(.024,.024,.09,10),e,0,.015,-.56,Math.PI/2);for(let d=0;d<3;d++)a(new Tt(.05,.012,.02),e,0,.015,-.53-d*.025);a(new ce(.011,.011,.3,8),n,0,.055,-.38,Math.PI/2),a(new Tt(.008,.05,.008),e,0,.085,-.5),a(new Tt(.03,.012,.03),e,0,.062,-.5),a(new Tt(.085,.085,.3),i,0,.005,-.33),a(new Tt(.05,.045,.07),e,0,.075,.08),a(new Tt(.006,.02,.006),e,0,.105,.08),a(new Tt(.078,.02,.3),n,0,.058,-.02),a(new Tt(.03,.02,.05),e,.05,.02,.12);const l=new de;l.position.set(0,-.06,-.08);const c=new ct(new Tt(.055,.24,.11),r);c.position.y=-.1,l.add(c);const h=new ct(new Tt(.055,.12,.1),r);h.position.set(0,-.24,.03),h.rotation.x=.35,l.add(h);const u=new ct(new Tt(.06,.02,.12),e);u.position.set(0,-.29,.055),u.rotation.x=.35,l.add(u),t.add(l),this.mag=l,a(new Tt(.05,.14,.07),r,0,-.11,.1,.25),a(new ar(.035,.007,6,12,Math.PI),e,0,-.075,.03,0,0,Math.PI),a(new Tt(.06,.09,.3),i,0,-.01,.36,-.06),a(new Tt(.065,.13,.03),r,0,-.03,.52),a(new Tt(.02,.02,.02),o,.045,.03,-.2),this.rifleMuzzle=new he,this.rifleMuzzle.position.set(0,.015,-.62),t.add(this.rifleMuzzle),this.rifle=t,this.rifle.userData={mag:30,reserve:120,auto:!0,rpm:600,dmg:34,spread:.012,adsSpread:.002,reloadTime:2.1,name:"TUĞRUL-47"}}buildPistol(){const t=new de,e=new se({color:2764079,roughness:.35,metalness:.85,envMapIntensity:1}),n=new se({color:2237215,roughness:.7,metalness:.1}),i=(r,o,a,l,c,h=0)=>{const u=new ct(r,o);return u.position.set(a,l,c),u.rotation.x=h,t.add(u),u};i(new Tt(.05,.07,.24),e,0,0,-.04),i(new ce(.014,.014,.05,8),e,0,.01,-.17,Math.PI/2),i(new Tt(.045,.1,.06),n,0,-.08,.05,.2),i(new Tt(.008,.02,.008),e,0,.045,-.14),i(new Tt(.008,.018,.008),e,0,.045,.06),this.pistolMuzzle=new he,this.pistolMuzzle.position.set(0,.01,-.2),t.add(this.pistolMuzzle),this.pistol=t,this.pistol.userData={mag:12,reserve:48,auto:!1,rpm:320,dmg:26,spread:.02,adsSpread:.006,reloadTime:1.4,name:"P9 SIDEARM"}}get data(){return this.current==="rifle"?this.rifle.userData:this.pistol.userData}get muzzleObj(){return this.current==="rifle"?this.rifleMuzzle:this.pistolMuzzle}reset(){this.rifle.userData.mag=30,this.rifle.userData.reserve=120,this.pistol.userData.mag=12,this.pistol.userData.reserve=48,this.reloadT=0,this.recoil=0,this.ads=0}switchTo(t){this.current===t||this.reloadT>0||(this.current=t,this.rifle.visible=t==="rifle",this.pistol.visible=t==="pistol",this.audio.reload1())}startReload(){const t=this.data;this.reloadT>0||t.mag>=(this.current==="rifle"?30:12)||t.reserve<=0||(this.reloadT=t.reloadTime,this.reloadDur=t.reloadTime,this.audio.reload1(),setTimeout(()=>this.audio.reload2(),t.reloadTime*450))}finishReload(){const t=this.data,n=(this.current==="rifle"?30:12)-t.mag,i=Math.min(n,t.reserve);t.mag+=i,t.reserve-=i,this.audio.reload3()}tryShoot(t,e){const n=this.data;if(this.reloadT>0||t<this.nextShot)return null;if(n.mag<=0)return this.audio.dryFire(),this.nextShot=t+.25,this.startReload(),null;n.mag--,this.nextShot=t+60/n.rpm,this.recoil=Math.min(1,this.recoil+.55),this.recoilRot=Math.min(1,this.recoilRot+.7),this.audio.shoot&&(this.current==="rifle"?this.audio.shoot(0):this.audio.pistol(0)),this.muzzleObj.getWorldPosition(this.muzzleWorld),this.fx.muzzle(this.muzzleWorld,new T(0,0,-1).applyQuaternion(this.camera.quaternion),this.current==="rifle");const i=new T(1,0,0).applyQuaternion(this.camera.quaternion),r=new T(0,1,0).applyQuaternion(this.camera.quaternion),o=this.muzzleWorld.clone().add(new T(0,.05,.15).applyQuaternion(this.camera.quaternion));return this.fx.ejectShell(o,i,r),{dmg:n.dmg,spread:n.spread*(1-this.ads*.85)+this.recoil*.012}}update(t,e,n,i,r,o,a){const l=o?1:0;this.ads+=(l-this.ads)*Math.min(1,t*11),this.swayX+=(-i*6e-4-this.swayX)*Math.min(1,t*8),this.swayY+=(r*6e-4-this.swayY)*Math.min(1,t*8);const c=Math.min(1,e/5)*(n?1:.2)*(1-this.ads*.85);this.bobT+=t*(4+e*1.4);const h=Math.sin(this.bobT)*.014*c,u=Math.abs(Math.cos(this.bobT))*.011*c;this.recoil*=Math.pow(1e-4,t),this.recoilRot*=Math.pow(1e-4,t);let d=0,p=0;if(this.reloadT>0){this.reloadT-=t;const f=1-this.reloadT/this.reloadDur;d=Math.sin(f*Math.PI)*.22,p=Math.sin(f*Math.PI)*.5,this.reloadT<=0&&this.finishReload()}const g=new T(.24,-.21,-.45),v=new T(0,-.148,-.35),m=g.lerp(v,this.ads);if(m.x+=h+this.swayX,m.y+=-u+this.swayY-d,m.z+=this.recoil*.06,this.group.position.copy(m),this.group.rotation.set(this.recoilRot*.09+p+this.swayY*.6,this.swayX*.8,p*.3),this.mag){const f=this.reloadT>0?1-this.reloadT/this.reloadDur:0;this.mag.position.y=-.06-Math.sin(f*Math.PI)*.12,this.mag.rotation.x=Math.sin(f*Math.PI)*.4}return{ads:this.ads,recoil:this.recoil}}}class d0{constructor(t,e,n,i,r,o,a,l){this.scene=t,this.world=r,this.audio=o,this.fx=a,this.id=l,this.spawn=n.clone(),this.patrol=i,this.patrolIdx=0,this.pos=n.clone(),this.pos.y=0,this.yaw=Math.random()*Math.PI*2,this.health=100,this.alive=!0,this.state="patrol",this.alertT=0,this.shootT=1+Math.random()*2,this.burstLeft=0,this.burstT=0,this.walkT=Math.random()*10,this.flinch=0,this.deathT=0,this.speed=2+Math.random()*.7,this.engageSpeed=3.4+Math.random()*.8,this.reaction=.5+Math.random()*.5,this.accuracy=.55+Math.random()*.25,this.lastSeen=new T,this.buildModel(e),this.group.position.copy(this.pos),t.add(this.group),this.headMesh=this.head,this.bodyMesh=this.torso}buildModel(t){const e=new de,n=we(t.clone(t.camo,1,1),{roughness:.9,envMapIntensity:.35}),i=new se({color:11569248,roughness:.7}),r=new se({color:3026726,roughness:.85}),o=new se({color:4014124,roughness:.6,metalness:.2}),a=new se({color:1974306,roughness:.4,metalness:.8}),l=new se({color:2760728,roughness:.9}),c=A=>{const N=new de;N.position.set(.13*A,.95,0);const M=new ct(new ce(.09,.075,.85,8),n);M.position.y=-.42,M.castShadow=!0,N.add(M);const b=new ct(new Tt(.13,.1,.26),l);return b.position.set(0,-.88,.05),N.add(b),e.add(N),N};this.legL=c(-1),this.legR=c(1);const h=new de;h.position.y=.95,e.add(h),this.torsoG=h;const u=new ct(new Tt(.46,.62,.26),n);u.position.y=.31,u.castShadow=!0,h.add(u),this.torso=u;const d=new ct(new Tt(.5,.42,.32),r);d.position.y=.32,d.castShadow=!0,h.add(d);for(let A=0;A<3;A++){const N=new ct(new Tt(.11,.14,.06),r);N.position.set(-.14+A*.14,.22,.19),h.add(N)}const p=new ct(new Tt(.34,.44,.16),r);p.position.set(0,.36,-.22),p.castShadow=!0,h.add(p);const g=new de;g.position.y=.72,h.add(g),this.headG=g;const v=new ct(new dn(.14,12,10),i);v.castShadow=!0,g.add(v),this.head=v;const m=new ct(new dn(.155,12,8,0,Math.PI*2,0,Math.PI*.55),o);m.position.y=.02,m.castShadow=!0,g.add(m);const f=new ct(new Tt(.2,.06,.08),new se({color:1118481,roughness:.2,metalness:.5}));f.position.set(0,.02,.11),g.add(f);const w=A=>{const N=new de;N.position.set(.28*A,.52,0);const M=new ct(new ce(.07,.06,.55,8),n);M.position.y=-.26,M.castShadow=!0,N.add(M);const b=new ct(new dn(.06,8,8),i);return b.position.y=-.56,N.add(b),h.add(N),N};this.armL=w(-1),this.armR=w(1);const x=new de,y=new ct(new Tt(.06,.09,.55),a);x.add(y);const C=new ct(new ce(.014,.014,.3,8),a);C.rotation.x=Math.PI/2,C.position.z=-.4,x.add(C);const R=new ct(new Tt(.045,.16,.09),a);R.position.set(0,-.1,.02),R.rotation.x=.2,x.add(R),x.position.set(.1,.32,.3),x.rotation.x=.12,h.add(x),this.rifle=x,this.muzzle=new he,this.muzzle.position.set(.1,.34,.85),h.add(this.muzzle),this.group=e,this.deathPivot=e}get eyePos(){return new T(this.pos.x,1.62,this.pos.z)}get chestPos(){return new T(this.pos.x,1.25,this.pos.z)}get headPos(){return new T(this.pos.x,1.68,this.pos.z)}canSee(t,e){const n=this.pos.distanceTo(t);if(n>55)return!1;const i=this.eyePos,r=new T().subVectors(t,this.pos).normalize(),o=new T(Math.sin(this.yaw),0,Math.cos(this.yaw)),a=r.dot(o);return!(this.state==="patrol"&&a<.15&&n>4||this.world.rayBlocked(i,e))}takeDamage(t,e,n){return this.alive?(this.health-=t,this.flinch=1,n&&this.fx.bloodPuff(n),this.state==="patrol"&&(this.state="alert",this.alertT=this.reaction),this.health<=0&&(this.alive=!1,this.state="dead",this.deathT=0,this.audio.kill()),t):0}update(t,e,n,i){if(!this.alive){this.deathT+=t;const p=Math.min(1,this.deathT*2.2);this.group.rotation.x=-p*Math.PI/2*.92,this.group.position.y=Math.sin(p*Math.PI/2)*.15,this.deathT>6&&(this.group.position.y=-.4);return}this.flinch*=Math.pow(.001,t);const r=this.pos.distanceTo(e),o=this.canSee(e,n);o&&(this.lastSeen.copy(e),this.state==="patrol"?(this.state="alert",this.alertT=this.reaction):this.state==="alert"&&(this.alertT-=t,this.alertT<=0&&(this.state="engage"))),i&&r<30&&this.state==="patrol"&&(this.state="alert",this.alertT=this.reaction,this.lastSeen.copy(e));let a=new T,l=0,c=null;if(this.state==="patrol"){const p=this.patrol[this.patrolIdx],g=new T().subVectors(p,this.pos);g.y=0,g.length()<1.2?this.patrolIdx=(this.patrolIdx+1)%this.patrol.length:(a.copy(g.normalize()),l=this.speed,c=p)}else if(this.state==="alert")c=this.lastSeen,r>14&&(a.subVectors(this.lastSeen,this.pos).setY(0).normalize(),l=this.engageSpeed*.8);else if(this.state==="engage"){c=e;const p=new T().subVectors(e,this.pos).setY(0).normalize(),g=new T(-p.z,0,p.x),v=Math.sin(performance.now()*4e-4+this.id*2.1)>0?1:-1;r>16?(a.copy(p),l=this.engageSpeed):r<7?(a.copy(p).multiplyScalar(-.6).add(g.clone().multiplyScalar(v*.7)),l=this.engageSpeed*.7):(a.copy(g).multiplyScalar(v*.6),l=this.engageSpeed*.55),o&&(this.shootT-=t,this.burstLeft>0?(this.burstT-=t,this.burstT<=0&&(this.fire(e,n),this.burstLeft--,this.burstT=.11)):this.shootT<=0&&(this.burstLeft=3+(Math.random()*3|0),this.burstT=0,this.shootT=.7+Math.random()*1.3))}if(l>0&&a.lengthSq()>0){a.normalize(),this.pos.addScaledVector(a,l*t);const p=new T(this.pos.x,.9,this.pos.z);this.world.collide(p,.4,1.6),this.pos.x=p.x,this.pos.z=p.z,this.walkT+=t*l*2.6}if(c){let g=Math.atan2(c.x-this.pos.x,c.z-this.pos.z)-this.yaw;for(;g>Math.PI;)g-=Math.PI*2;for(;g<-Math.PI;)g+=Math.PI*2;this.yaw+=g*Math.min(1,t*6)}this.group.position.set(this.pos.x,0,this.pos.z),this.group.rotation.y=this.yaw;const h=l>.1,u=h?Math.sin(this.walkT)*.55:0;this.legL.rotation.x=u,this.legR.rotation.x=-u;const d=this.state==="engage"||this.state==="alert";this.armR.rotation.x=d?-1.25:-.3+u*.3,this.armL.rotation.x=d?-1.05:-.3-u*.3,this.armL.rotation.z=d?.5:.1,this.torsoG.rotation.x=this.flinch*.18+(d?.06:0),this.torsoG.position.y=.95+(h?Math.abs(Math.sin(this.walkT))*.03:0),this.headG.rotation.x=-this.flinch*.12}fire(t,e){const n=this.muzzle.getWorldPosition(new T),i=e.clone();i.y-=.25;const r=(1-this.accuracy)*1.6;i.x+=(Math.random()-.5)*r,i.y+=(Math.random()-.5)*r*.6,i.z+=(Math.random()-.5)*r;const o=new T().subVectors(i,n).normalize(),a=n.distanceTo(t);this.audio.shoot(a),this.fx.muzzle(n,o,!1);const l=this.world.rayBlocked(n,i),c=n.distanceTo(i);return this.fx.tracer(n,n.clone().add(o.clone().multiplyScalar(Math.min(c,60)))),this.lastShot={dir:o,from:n,blocked:l,dist:a,target:i},this.lastShot}}class f0{constructor(t,e,n,i,r){this.enemies=[],n.enemySpawns.forEach((o,a)=>{this.enemies.push(new d0(t,e,o,n.patrols[a%n.patrols.length],n,i,r,a))})}get aliveCount(){return this.enemies.filter(t=>t.alive).length}update(t,e,n,i,r){const o=[];for(const a of this.enemies)a.burstLeft,a.update(t,e,n,i),a.lastShot&&(o.push(a.lastShot),a.lastShot=null);return o}reset(){for(const t of this.enemies)t.pos.copy(t.spawn),t.health=100,t.alive=!0,t.state="patrol",t.patrolIdx=0,t.deathT=0,t.flinch=0,t.group.rotation.set(0,0,0),t.group.position.copy(t.pos),t.group.visible=!0}}const sn=3e3;class p0{constructor(t){this.scene=t,this.pos=new Float32Array(sn*3),this.vel=new Float32Array(sn*3),this.life=new Float32Array(sn),this.maxLife=new Float32Array(sn),this.size=new Float32Array(sn),this.col=new Float32Array(sn*3),this.grav=new Float32Array(sn),this.drag=new Float32Array(sn),this.head=0;const e=new ge;e.setAttribute("position",new Ee(this.pos,3)),e.setAttribute("aColor",new Ee(this.col,3)),e.setAttribute("aSize",new Ee(this.size,1));const n=new be({transparent:!0,depthWrite:!1,blending:Jn,uniforms:{uTex:{value:this.makeSprite()}},vertexShader:`
        attribute float aSize; attribute vec3 aColor; varying vec3 vC; varying float vA;
        uniform float uLife; 
        void main(){ vC=aColor; vec4 mv=modelViewMatrix*vec4(position,1.0);
          gl_PointSize = aSize * (140.0 / -mv.z); gl_Position=projectionMatrix*mv; }`,fragmentShader:`
        uniform sampler2D uTex; varying vec3 vC;
        void main(){ vec4 t=texture2D(uTex, gl_PointCoord);
          gl_FragColor=vec4(vC, t.a); if(gl_FragColor.a<0.02) discard; }`});this.points=new kr(e,n),this.points.frustumCulled=!1,this.points.renderOrder=10,t.add(this.points);for(let c=0;c<sn;c++)this.pos[c*3+1]=-100,this.life[c]=0;this.geo=e,this.sPos=new Float32Array(600*3),this.sVel=new Float32Array(600*3),this.sLife=new Float32Array(600),this.sCol=new Float32Array(600*3),this.sSize=new Float32Array(600),this.sHead=0;const i=new ge;i.setAttribute("position",new Ee(this.sPos,3)),i.setAttribute("aColor",new Ee(this.sCol,3)),i.setAttribute("aSize",new Ee(this.sSize,1));const r=new be({transparent:!0,depthWrite:!1,blending:Fn,uniforms:{uTex:{value:this.makeSprite()}},vertexShader:`attribute float aSize; attribute vec3 aColor; varying vec3 vC;
        void main(){ vC=aColor; vec4 mv=modelViewMatrix*vec4(position,1.0);
          gl_PointSize=aSize*(140.0/-mv.z); gl_Position=projectionMatrix*mv; }`,fragmentShader:`uniform sampler2D uTex; varying vec3 vC;
        void main(){ vec4 t=texture2D(uTex, gl_PointCoord); gl_FragColor=vec4(vC*t.rgb, t.a); }`});this.sparks=new kr(i,r),this.sparks.frustumCulled=!1,this.sparks.renderOrder=11,t.add(this.sparks),this.sgeo=i;for(let c=0;c<600;c++)this.sPos[c*3+1]=-100;this.tracers=[];const o=new ce(.012,.012,1,5);o.translate(0,.5,0),o.rotateX(Math.PI/2);for(let c=0;c<24;c++){const h=new ct(o,new sr({color:16765562,transparent:!0,opacity:0,blending:Fn,depthWrite:!1}));h.visible=!1,t.add(h),this.tracers.push({mesh:h,life:0})}this.shells=[];const a=new ce(.012,.012,.045,6),l=new se({color:14198832,metalness:.9,roughness:.3});for(let c=0;c<30;c++){const h=new ct(a,l);h.visible=!1,t.add(h),this.shells.push({mesh:h,vel:new T,angVel:new T,life:0})}this.flashLight=new Xm(16756832,0,18,1.6),t.add(this.flashLight),this.flashSprite=new la(new js({map:this.makeFlashTex(),transparent:!0,opacity:0,blending:Fn,depthWrite:!1})),this.flashSprite.scale.set(.6,.6,1),t.add(this.flashSprite),this.flashLife=0,this.makeAmbientDust(t)}makeSprite(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.4,"rgba(255,255,255,.6)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),new ns(t)}makeFlashTex(){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),n=e.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,"rgba(255,240,180,1)"),n.addColorStop(.25,"rgba(255,180,60,.9)"),n.addColorStop(.6,"rgba(255,120,20,.35)"),n.addColorStop(1,"rgba(255,80,0,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),e.globalCompositeOperation="lighter";for(let i=0;i<4;i++){e.save(),e.translate(64,64),e.rotate(i*Math.PI/2+.4);const r=e.createLinearGradient(0,0,64,0);r.addColorStop(0,"rgba(255,220,140,.8)"),r.addColorStop(1,"rgba(255,120,0,0)"),e.fillStyle=r,e.beginPath(),e.moveTo(0,-5),e.lineTo(64,0),e.lineTo(0,5),e.fill(),e.restore()}return new ns(t)}makeAmbientDust(t){const n=new Float32Array(2100);for(let o=0;o<700;o++)n[o*3]=(Math.random()-.5)*90,n[o*3+1]=Math.random()*9+.3,n[o*3+2]=(Math.random()-.5)*90;const i=new ge;i.setAttribute("position",new Ee(n,3));const r=new Zl({color:15257760,size:.045,transparent:!0,opacity:.55,depthWrite:!1,sizeAttenuation:!0});this.dust=new kr(i,r),this.dust.frustumCulled=!1,t.add(this.dust)}spawn(t,e,n,i,r,o,a,l,c,h,u,d=-2,p=1){const g=this.head;this.head=(this.head+1)%sn,this.pos[g*3]=t,this.pos[g*3+1]=e,this.pos[g*3+2]=n,this.vel[g*3]=i,this.vel[g*3+1]=r,this.vel[g*3+2]=o,this.life[g]=a,this.maxLife[g]=a,this.size[g]=l,this.col[g*3]=c,this.col[g*3+1]=h,this.col[g*3+2]=u,this.grav[g]=d,this.drag[g]=p}burst(t,e,n,i,r,o,a=-3,l=1){for(let c=0;c<e;c++){const h=Math.random()*Math.PI*2,u=Math.acos(2*Math.random()-1),d=n*(.3+Math.random()*.7);this.spawn(t.x,t.y,t.z,Math.sin(u)*Math.cos(h)*d,Math.cos(u)*d*l+n*.25,Math.sin(u)*Math.sin(h)*d,i*(.5+Math.random()*.8),r*(.6+Math.random()*.8),o.r,o.g,o.b,a,1.5)}}dustPuff(t,e=10,n=1.2){const i=new Ot(13215854);for(let r=0;r<e;r++)this.spawn(t.x+(Math.random()-.5)*n,t.y+Math.random()*.4,t.z+(Math.random()-.5)*n,(Math.random()-.5)*1.2,.5+Math.random()*1.2,(Math.random()-.5)*1.2,.7+Math.random()*.9,.35+Math.random()*.5,i.r,i.g,i.b,.4,2.2)}bloodPuff(t){const e=new Ot(9049104);this.burst(t,14,2.2,.6,.22,e,-5);const n=new Ot(5900808);this.burst(t,8,1.4,.8,.3,n,-4)}sparkBurst(t,e=8){for(let n=0;n<e;n++){const i=this.sHead;this.sHead=(this.sHead+1)%600,this.sPos[i*3]=t.x,this.sPos[i*3+1]=t.y,this.sPos[i*3+2]=t.z;const r=Math.random()*Math.PI*2,o=2+Math.random()*5;this.sVel[i*3]=Math.cos(r)*o,this.sVel[i*3+1]=Math.random()*4,this.sVel[i*3+2]=Math.sin(r)*o,this.sLife[i]=.25+Math.random()*.3;const a=.7+Math.random()*.3;this.sCol[i*3]=1,this.sCol[i*3+1]=a*.75,this.sCol[i*3+2]=a*.3,this.sSize[i]=.06+Math.random()*.08}}tracer(t,e){const n=this.tracers.find(o=>o.life<=0)||this.tracers[0];n.mesh.visible=!0,n.life=.07,n.mesh.position.copy(t);const r=new T().subVectors(e,t).length();n.mesh.scale.set(1,1,r),n.mesh.lookAt(e),n.mesh.material.opacity=.9}ejectShell(t,e,n){const i=this.shells.find(r=>r.life<=0)||this.shells[0];i.mesh.visible=!0,i.life=1.6,i.mesh.position.copy(t),i.vel.copy(e).multiplyScalar(1.2+Math.random()).add(n.clone().multiplyScalar(1.6+Math.random())),i.angVel.set(Math.random()*20,Math.random()*20,Math.random()*20)}muzzle(t,e,n=!0){this.flashSprite.position.copy(t),this.flashSprite.material.rotation=Math.random()*Math.PI;const i=n?.55+Math.random()*.25:.35;this.flashSprite.scale.set(i,i,1),this.flashSprite.material.opacity=1,this.flashLife=.05,this.flashLight.position.copy(t),this.flashLight.intensity=n?26:14;const r=new Ot(13421772);for(let o=0;o<3;o++)this.spawn(t.x+e.x*.3,t.y+e.y*.3,t.z+e.z*.3,e.x*2.5+(Math.random()-.5),e.y*2.5+.6,e.z*2.5+(Math.random()-.5),.5+Math.random()*.5,.22,r.r,r.g,r.b,1.2,2)}update(t){for(let n=0;n<sn;n++){if(this.life[n]<=0)continue;if(this.life[n]-=t,this.life[n]<=0){this.pos[n*3+1]=-100;continue}const i=Math.max(0,1-this.drag[n]*t);this.vel[n*3]*=i,this.vel[n*3+2]*=i,this.vel[n*3+1]=this.vel[n*3+1]*i+this.grav[n]*t,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t,this.pos[n*3+1]<.02&&(this.pos[n*3+1]=.02,this.vel[n*3+1]*=-.3),this.size[n]*=1-t*.4}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0;for(let n=0;n<600;n++)if(!(this.sLife[n]<=0)){if(this.sLife[n]-=t,this.sLife[n]<=0){this.sPos[n*3+1]=-100;continue}this.sVel[n*3+1]-=12*t,this.sPos[n*3]+=this.sVel[n*3]*t,this.sPos[n*3+1]+=this.sVel[n*3+1]*t,this.sPos[n*3+2]+=this.sVel[n*3+2]*t,this.sPos[n*3+1]<.02&&(this.sLife[n]=0)}this.sgeo.attributes.position.needsUpdate=!0,this.sgeo.attributes.aColor.needsUpdate=!0,this.sgeo.attributes.aSize.needsUpdate=!0;for(const n of this.tracers)n.life>0&&(n.life-=t,n.mesh.material.opacity=Math.max(0,n.life/.07)*.9,n.life<=0&&(n.mesh.visible=!1));for(const n of this.shells)n.life>0&&(n.life-=t,n.vel.y-=9.8*t,n.mesh.position.addScaledVector(n.vel,t),n.mesh.position.y<.03&&(n.mesh.position.y=.03,n.vel.y*=-.35,n.vel.x*=.7,n.vel.z*=.7),n.mesh.rotation.x+=n.angVel.x*t,n.mesh.rotation.y+=n.angVel.y*t,n.mesh.rotation.z+=n.angVel.z*t,n.life<=0&&(n.mesh.visible=!1));this.flashLife>0?(this.flashLife-=t,this.flashLife<=0&&(this.flashSprite.material.opacity=0,this.flashLight.intensity=0)):this.flashLight.intensity*=.6,this.dust.rotation.y+=t*.008;const e=this.dust.geometry.attributes.position;for(let n=0;n<e.count;n++)e.array[n*3]+=Math.sin(performance.now()*3e-4+n)*t*.25,e.array[n*3+1]+=Math.cos(performance.now()*2e-4+n*2)*t*.12;e.needsUpdate=!0}}class m0{constructor(){this.ctx=null,this.master=null,this.muted=!1,this.noiseBuf=null}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.55,this.master.connect(this.ctx.destination);const e=this.ctx.sampleRate*2;this.noiseBuf=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const n=this.noiseBuf.getChannelData(0);for(let i=0;i<e;i++)n[i]=Math.random()*2-1;this.startAmbience()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.55)}noise(t,{type:e="bandpass",freq:n=1e3,q:i=1,gain:r=.5,sweepTo:o=null,delay:a=0}={}){if(!this.ctx)return;const l=this.ctx.currentTime+a,c=this.ctx.createBufferSource();c.buffer=this.noiseBuf,c.loop=!0,c.playbackRate.value=.8+Math.random()*.4;const h=this.ctx.createBiquadFilter();h.type=e,h.frequency.setValueAtTime(n,l),h.Q.value=i,o&&h.frequency.exponentialRampToValueAtTime(o,l+t);const u=this.ctx.createGain();u.gain.setValueAtTime(r,l),u.gain.exponentialRampToValueAtTime(.001,l+t),c.connect(h),h.connect(u),u.connect(this.master),c.start(l),c.stop(l+t+.05)}tone(t,e,{type:n="sine",gain:i=.3,sweepTo:r=null,delay:o=0}={}){if(!this.ctx)return;const a=this.ctx.currentTime+o,l=this.ctx.createOscillator();l.type=n,l.frequency.setValueAtTime(t,a),r&&l.frequency.exponentialRampToValueAtTime(r,a+e);const c=this.ctx.createGain();c.gain.setValueAtTime(i,a),c.gain.exponentialRampToValueAtTime(.001,a+e),l.connect(c),c.connect(this.master),l.start(a),l.stop(a+e+.05)}shoot(t=0){const e=Math.max(.12,.9-t*.03);this.noise(.09,{type:"highpass",freq:900,gain:e*.9}),this.noise(.16,{type:"lowpass",freq:900,gain:e*.8,sweepTo:120}),this.tone(140,.12,{type:"triangle",gain:e*.5,sweepTo:45}),this.noise(.05,{type:"bandpass",freq:3200,q:2,gain:e*.4,delay:.01})}pistol(t=0){const e=Math.max(.1,.7-t*.03);this.noise(.07,{type:"highpass",freq:1100,gain:e*.8}),this.tone(180,.09,{type:"triangle",gain:e*.4,sweepTo:60})}dryFire(){this.tone(2200,.03,{type:"square",gain:.12}),this.noise(.03,{freq:3e3,gain:.1})}reload1(){this.noise(.05,{freq:1800,gain:.25}),this.tone(900,.04,{type:"square",gain:.08})}reload2(){this.noise(.05,{freq:1200,gain:.3}),this.tone(600,.05,{type:"square",gain:.1})}reload3(){this.noise(.06,{freq:2400,gain:.35}),this.tone(1400,.05,{type:"square",gain:.12})}hit(){this.tone(1800,.05,{type:"sine",gain:.25})}headshot(){this.tone(2400,.07,{type:"sine",gain:.3}),this.tone(3200,.09,{type:"sine",gain:.2,delay:.05})}kill(){this.tone(700,.12,{type:"sawtooth",gain:.15,sweepTo:200})}hurt(){this.noise(.12,{type:"lowpass",freq:500,gain:.4}),this.tone(110,.15,{type:"sawtooth",gain:.2,sweepTo:60})}step(t=!1){this.noise(t?.09:.07,{type:"lowpass",freq:400+Math.random()*200,gain:t?.16:.1})}jump(){this.noise(.08,{freq:600,gain:.08})}land(){this.noise(.1,{type:"lowpass",freq:300,gain:.25})}impact(){this.noise(.05,{freq:2e3+Math.random()*1500,gain:.12})}uiClick(){this.tone(1200,.04,{type:"sine",gain:.12})}win(){[523,659,784,1047].forEach((t,e)=>this.tone(t,.35,{type:"triangle",gain:.2,delay:e*.14}))}lose(){[392,330,262,196].forEach((t,e)=>this.tone(t,.4,{type:"triangle",gain:.2,delay:e*.16}))}startAmbience(){if(!this.ctx)return;const t=this.ctx.createBufferSource();t.buffer=this.noiseBuf,t.loop=!0;const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.value=380;const n=this.ctx.createGain();n.gain.value=.05;const i=this.ctx.createOscillator();i.frequency.value=.13;const r=this.ctx.createGain();r.gain.value=.025,i.connect(r),r.connect(n.gain),t.connect(e),e.connect(n),n.connect(this.master),t.start(),i.start();const o=()=>{this.muted||this.tone(2800+Math.random()*1200,.08,{type:"sine",gain:.015}),setTimeout(o,1800+Math.random()*4e3)};setTimeout(o,2e3)}}class g0{constructor(){this.$=t=>document.getElementById(t),this.hud=this.$("hud"),this.killfeed=this.$("killfeed"),this.centerMsgT=0,this.radar=this.$("radar").getContext("2d"),this.compassStrip=this.$("compassStrip"),this.buildCompass(),this.hitT=0,this.dmgT=0}buildCompass(){let t="";const e={0:"K",45:"KD",90:"D",135:"GD",180:"G",225:"GB",270:"B",315:"GBB"};for(let n=0;n<3;n++)for(let i=0;i<360;i+=15){const r=e[i]||(i%45===0?"":"·");t+=`<span style="display:inline-block;width:22px;text-align:center">${r}</span>`}this.compassStrip.innerHTML=t,this.compassStrip.style.width="max-content"}show(t){this.$(t).classList.remove("hidden")}hide(t){this.$(t).classList.add("hidden")}setHUDVisible(t){this.hud.classList.toggle("hidden",!t)}updateHUD(t,e,n,i,r){this.$("hpNum").textContent=Math.ceil(t.health);const o=this.$("hpFill");o.style.width=Math.max(0,t.health)+"%",o.classList.toggle("hurt",t.health<35),this.$("armorFill").style.width=Math.max(0,t.armor)+"%";const a=e.data;this.$("ammoMag").textContent=a.mag,this.$("ammoRes").textContent=a.reserve,this.$("ammo").classList.toggle("low",a.mag<=6),this.$("weaponName").textContent=a.name,this.$("fireMode").textContent=a.auto?"OTO":"YARI-OTO",this.$("reloadHint").classList.toggle("hidden",!(a.mag<=6&&a.reserve>0)),this.$("objText").textContent=`${n} düşmanı etkisiz hale getir`;const l=Math.max(0,i),c=String(Math.floor(l/60)).padStart(2,"0"),h=String(Math.floor(l%60)).padStart(2,"0"),u=this.$("timer");u.textContent=`${c}:${h}`,u.classList.toggle("low",l<30);const p=170-(-r*180/Math.PI%360+360)%360/15*22-528;this.compassStrip.style.transform=`translateX(${p}px)`}hitmarker(t=!1){const e=this.$("hitmarker");e.textContent="✕",e.classList.toggle("kill",t),e.style.opacity=1,this.hitT=.22}damageFlash(){this.dmgT=.5}centerMsg(t,e=2.2){const n=this.$("centerMsg");n.textContent=t,n.style.opacity=1,this.centerMsgT=e}killBanner(t){const e=this.$("killBanner");e.textContent=t,e.style.opacity=1,setTimeout(()=>e.style.opacity=0,1400)}addKillfeed(t){const e=document.createElement("div");for(e.textContent=t,this.killfeed.prepend(e),setTimeout(()=>{e.style.opacity=0,setTimeout(()=>e.remove(),400)},3800);this.killfeed.children.length>5;)this.killfeed.lastChild.remove()}drawRadar(t,e){const n=this.radar,i=140,r=i/2,o=62;n.clearRect(0,0,i,i),n.fillStyle="rgba(10,14,8,0.85)",n.beginPath(),n.arc(r,r,o,0,7),n.fill(),n.strokeStyle="rgba(245,166,35,0.5)",n.lineWidth=1.5,n.beginPath(),n.arc(r,r,o,0,7),n.stroke(),n.beginPath(),n.arc(r,r,o*.55,0,7),n.stroke(),n.beginPath(),n.moveTo(r,r-o),n.lineTo(r,r+o),n.moveTo(r-o,r),n.lineTo(r+o,r),n.stroke(),n.fillStyle="#ffd27a",n.beginPath(),n.moveTo(r,r-8),n.lineTo(r-5,r+5),n.lineTo(r+5,r+5),n.fill();const a=45,l=Math.cos(t.yaw),c=Math.sin(t.yaw);for(const h of e){if(!h.alive)continue;const u=h.pos.x-t.pos.x,d=h.pos.z-t.pos.z,p=-c,g=-l,v=l,m=-c,f=u*p+d*g,x=(u*v+d*m)/a*o,y=-f/a*o;if(Math.hypot(x,y)>o-4)continue;const C=h.state!=="patrol";n.fillStyle=C?"#ff3b1f":"#ff9a3c",n.beginPath(),n.arc(r+x,r+y,C?4:3,0,7),n.fill()}}update(t){this.hitT>0&&(this.hitT-=t,this.hitT<=0&&(this.$("hitmarker").style.opacity=0)),this.dmgT>0&&(this.dmgT-=t,this.$("dmgVignette").style.opacity=Math.max(0,this.dmgT*1.4)),this.centerMsgT>0&&(this.centerMsgT-=t,this.centerMsgT<=0&&(this.$("centerMsg").style.opacity=0))}showEnd(t,e){const n=this.$("end");n.classList.remove("hidden"),n.classList.toggle("win",t),n.classList.toggle("lose",!t),this.$("endKicker").textContent=t?"GÖREV TAMAMLANDI":"GÖREV BAŞARISIZ",this.$("endTitle").textContent=t?"ZAFER":"YENİLDİ",this.$("endSub").textContent=t?"Saltline bileşkesi temizlendi. Bölge güvenli.":"Operasyon yarıda kaldı. Tekrar dene, komando.";const i=[[e.kills,"LEŞ"],[e.shots,"ATIŞ"],[e.hits,"İSABET"],[e.accuracy+"%","İSABET ORANI"],[e.time,"SÜRE"],[e.headshots,"KAFA VURUŞU"]];this.$("endStats").innerHTML=i.map(([r,o])=>`<div><b>${r}</b><span>${o}</span></div>`).join("")}}const lr=document.getElementById("game"),Ii=s=>{const t=document.getElementById("loadText");t&&(t.textContent=s)};Ii("Aşama 1/7 — WebGL motoru…");let Oe;try{const s=document.createElement("canvas");if(!(window.WebGLRenderingContext&&(s.getContext("webgl2")||s.getContext("webgl"))))throw new Error("Tarayiciniz WebGL desteklemiyor. Guncel bir Chrome/Edge/Firefox ile deneyin.");Oe=new Kl({canvas:lr,antialias:!0,powerPreference:"high-performance"}),Ii("Aşama 2/7 — Renderer…")}catch(s){throw window.__gameError&&window.__gameError(s.message||String(s)),s}Oe.setSize(innerWidth,innerHeight);Oe.setPixelRatio(Math.min(devicePixelRatio,2));Oe.shadowMap.enabled=!0;Oe.shadowMap.type=pl;Oe.toneMapping=da;Oe.toneMappingExposure=1.12;Oe.outputColorSpace=pe;const Wi=new $l,Ze=new ke(90,innerWidth/innerHeight,.05,600);Ze.position.set(0,6,40);Ii("Aşama 3/7 — Arayüz…");const $t=new g0;Ii("Aşama 4/7 — Ses…");const ze=new m0;let Zi,Lt,Je,Bn,je,me="loading",Xi=180,Ji=0,Ve={shots:0,hits:0,kills:0,headshots:0,accuracy:0,time:"0:00"},Qs=!1,zs=0,Qe={sens:1,fov:90,quality:"high",mute:!1,shake:!0},We,Zn;function _0(){We=new e0(Oe),We.addPass(new n0(Wi,Ze)),Zn=new Pi(new pt(innerWidth,innerHeight),.32,.7,.82),We.addPass(Zn);const s=new nc({uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:.42}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
      uniform sampler2D tDiffuse; uniform float uTime; uniform float uVig; varying vec2 vUv;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
      void main(){
        vec3 col = texture2D(tDiffuse, vUv).rgb;
        // subtle warm grade
        col = mix(col, col * vec3(1.06, 1.0, 0.92), 0.55);
        // vignette
        float d = distance(vUv, vec2(0.5));
        col *= smoothstep(0.95, 0.35, d * (1.0 + uVig));
        // film grain
        col += (hash(vUv * vec2(1920.0,1080.0) + fract(uTime)) - 0.5) * 0.045;
        // slight chromatic aberration at edges
        vec2 off = (vUv - 0.5) * 0.0035;
        col.r = texture2D(tDiffuse, vUv + off).r * 0.0 + col.r;
        gl_FragColor = vec4(col, 1.0);
      }`});s.name="grade",We.addPass(s),We.addPass(new r0),We.userData.grade=s}Ii("Aşama 5/7 — Post-processing…");_0();Ii("Aşama 6/7 — Oyun hazırlanıyor…");function v0(){const s=Qe.quality;s==="high"?(Oe.setPixelRatio(Math.min(devicePixelRatio,2)),Zn.enabled=!0,Zn.strength=.32):s==="med"?(Oe.setPixelRatio(Math.min(devicePixelRatio,1.5)),Zn.enabled=!0,Zn.strength=.22):(Oe.setPixelRatio(1),Zn.enabled=!1),rc()}async function x0(){const s=document.getElementById("loadBar"),t=document.getElementById("loadText"),e=async(n,i)=>{s.style.width=n+"%",t.textContent=i,await new Promise(r=>setTimeout(r,30))};try{await e(15,"Dokular üretiliyor…");const n=l0();await e(45,"Harita inşa ediliyor…"),Zi=new c0(Wi,n,Oe),je=new p0(Wi),Lt=new h0(Ze,Zi,ze),Je=new u0(Ze,Wi,ze,je),Bn=new f0(Wi,n,Zi,ze,je),await e(75,"Düşmanlar yerleştiriliyor…"),await e(100,"Hazır")}catch(n){console.error(n),t.textContent="Hata: "+(n&&n.message?n.message:n)+" — sayfayı yenile",t.style.color="#ff5a3c";return}document.getElementById("loading").classList.add("hidden"),me="menu",$t.show("menu"),Aa(),requestAnimationFrame(sc)}x0();function Aa(){const s=localStorage.getItem("ts_best");document.getElementById("statBest").textContent=s||"—",document.getElementById("statWins").textContent=localStorage.getItem("ts_wins")||"0",document.getElementById("statKills").textContent=localStorage.getItem("ts_kills")||"0"}function Ra(){ze.init(),ze.resume(),Lt.reset(),Je.reset(),Bn.reset(),Xi=180,Ji=0,Ve={shots:0,hits:0,kills:0,headshots:0,accuracy:0,time:"0:00"},Qs=!1,$t.hide("menu"),$t.hide("end"),$t.hide("pause"),$t.setHUDVisible(!0),me="playing",lr.requestPointerLock(),$t.centerMsg("OPERASYON BAŞLADI — 6 DÜŞMANI BUL VE ETKİSİZ HALE GETİR",3),$t.addKillfeed("◉ Görev başladı: Saltline temizlenecek")}function Ca(s){var t;if(me="ended",(t=document.exitPointerLock)==null||t.call(document),$t.setHUDVisible(!1),Ve.accuracy=Ve.shots?Math.round(Ve.hits/Ve.shots*100):0,Ve.time=`${Math.floor(Ji/60)}:${String(Math.floor(Ji%60)).padStart(2,"0")}`,s){ze.win();const e=localStorage.getItem("ts_best");(!e||Ji<parseFloat(e))&&localStorage.setItem("ts_best",Ve.time),localStorage.setItem("ts_wins",parseInt(localStorage.getItem("ts_wins")||"0")+1)}else ze.lose();localStorage.setItem("ts_kills",parseInt(localStorage.getItem("ts_kills")||"0")+Ve.kills),$t.showEnd(s,Ve)}addEventListener("keydown",s=>{Lt&&(Lt.keys[s.code]=!0),me==="playing"&&(s.code==="KeyR"&&Je.startReload(),s.code==="Digit1"&&Je.switchTo("rifle"),s.code==="Digit2"&&Je.switchTo("pistol")),s.code==="Escape"&&me==="playing"&&ic()});addEventListener("keyup",s=>{Lt&&(Lt.keys[s.code]=!1)});addEventListener("mousemove",s=>{me!=="playing"||document.pointerLockElement!==lr||Lt.look({x:s.movementX,y:s.movementY},0)});let is=!1,Pa=!1;addEventListener("mousedown",s=>{me==="playing"&&(s.button===0&&(is=!0),s.button===2&&(Pa=!0))});addEventListener("mouseup",s=>{s.button===0&&(is=!1),s.button===2&&(Pa=!1)});addEventListener("contextmenu",s=>s.preventDefault());document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==lr&&me==="playing"&&ic()});function ic(){var s;me==="playing"&&(me="paused",$t.show("pause"),(s=document.exitPointerLock)==null||s.call(document))}function M0(){$t.hide("pause"),me="playing",safeLock()}const fn=(s,t)=>document.getElementById(s).addEventListener("click",()=>{ze.init(),ze.uiClick(),t()});fn("btnPlay",Ra);fn("btnHow",()=>{$t.hide("menu"),$t.show("howto")});fn("btnHowBack",()=>{$t.hide("howto"),$t.show("menu")});fn("btnSettings",()=>{$t.hide("menu"),$t.show("settings")});fn("btnSetBack",()=>{$t.hide("settings"),$t.show("menu")});fn("btnResume",M0);fn("btnRestart",Ra);fn("btnQuit",()=>{$t.hide("pause"),$t.setHUDVisible(!1),me="menu",$t.show("menu"),Aa()});fn("btnAgain",Ra);fn("btnMenu2",()=>{$t.hide("end"),me="menu",$t.show("menu"),Aa()});document.getElementById("setSens").addEventListener("input",s=>{Qe.sens=parseFloat(s.target.value),document.getElementById("sensVal").textContent=Qe.sens.toFixed(1),Lt&&(Lt.sens=Qe.sens)});document.getElementById("setFov").addEventListener("input",s=>{Qe.fov=parseInt(s.target.value),document.getElementById("fovVal").textContent=Qe.fov,Lt&&(Lt.baseFov=Qe.fov)});document.getElementById("setQuality").addEventListener("change",s=>{Qe.quality=s.target.value,v0()});document.getElementById("setMute").addEventListener("change",s=>{Qe.mute=s.target.checked,ze.setMuted(Qe.mute)});document.getElementById("setShake").addEventListener("change",s=>{Qe.shake=s.target.checked,Lt&&(Lt.shakeEnabled=Qe.shake)});const S0=matchMedia("(pointer: coarse)").matches;if(S0){document.getElementById("touchUI").classList.remove("hidden");const s=document.getElementById("joy"),t=document.getElementById("joyKnob");let e=null,n=null,i=0,r=0;s.addEventListener("touchstart",o=>{e=o.changedTouches[0].identifier},{passive:!0}),addEventListener("touchmove",o=>{for(const a of o.changedTouches)if(a.identifier===e){const l=s.getBoundingClientRect(),c=(a.clientX-(l.left+l.width/2))/(l.width/2),h=(a.clientY-(l.top+l.height/2))/(l.height/2);t.style.transform=`translate(calc(-50% + ${c*34}px), calc(-50% + ${h*34}px))`,Lt&&(Lt.keys.KeyW=h<-.25,Lt.keys.KeyS=h>.25,Lt.keys.KeyA=c<-.25,Lt.keys.KeyD=c>.25)}else a.identifier===n&&(Lt&&Lt.look({x:(a.clientX-i)*2.2,y:(a.clientY-r)*2.2},0),i=a.clientX,r=a.clientY)},{passive:!0}),addEventListener("touchstart",o=>{for(const a of o.changedTouches)a.clientX>innerWidth*.4&&n===null&&me==="playing"&&(n=a.identifier,i=a.clientX,r=a.clientY)},{passive:!0}),addEventListener("touchend",o=>{for(const a of o.changedTouches)a.identifier===e&&(e=null,t.style.transform="translate(-50%,-50%)",Lt&&["KeyW","KeyS","KeyA","KeyD"].forEach(l=>Lt.keys[l]=!1)),a.identifier===n&&(n=null)}),document.getElementById("tFire").addEventListener("touchstart",o=>{o.preventDefault(),is=!0},{passive:!1}),document.getElementById("tFire").addEventListener("touchend",()=>is=!1),document.getElementById("tJump").addEventListener("touchstart",o=>{o.preventDefault(),Lt&&(Lt.keys.Space=!0),setTimeout(()=>Lt.keys.Space=!1,120)},{passive:!1}),document.getElementById("tReload").addEventListener("touchstart",o=>{o.preventDefault(),Je.startReload()},{passive:!1})}new $m;function y0(s,t,e){const i=new T;for(let r=.4;r<e;r+=.4){if(i.copy(s).addScaledVector(t,r),i.y<0)return{point:i.clone(),dist:r};for(const o of Zi.colliders)if(i.x>o.min.x&&i.x<o.max.x&&i.y>o.min.y&&i.y<o.max.y&&i.z>o.min.z&&i.z<o.max.z)return{point:i.clone(),dist:r}}return null}function jr(s,t,e,n){const i=new T().subVectors(e,s),r=i.dot(t);if(r<0)return null;const o=i.lengthSq()-r*r;if(o>n*n)return null;const a=Math.sqrt(n*n-o),l=r-a;return l>0?l:null}function E0(s){const t=Je.tryShoot(s,Je.ads);if(!t)return;Qs=!0,Ve.shots++;const e=Ze.position.clone(),n=new T(0,0,-1).applyQuaternion(Ze.quaternion);n.x+=(Math.random()-.5)*t.spread*2,n.y+=(Math.random()-.5)*t.spread*2,n.z+=(Math.random()-.5)*t.spread*2,n.normalize(),Lt.fovKick=Math.min(2.2,Lt.fovKick+.5),Lt.shakeEnabled&&(Lt.shake=Math.min(1,Lt.shake+.12)),Lt.pitch+=.0035+Math.random()*.002;const i=120,r=y0(e,n,i),o=r?r.dist:i;let a=null;for(const c of Bn.enemies){if(!c.alive)continue;const h=jr(e,n,c.headPos(),.19);h&&h<o&&(!a||h<a.t)&&(a={e:c,t:h,head:!0});const u=jr(e,n,c.chestPos(),.42);u&&u<o&&(!a||u<a.t)&&(a={e:c,t:u,head:!1});const d=jr(e,n,new T(c.pos.x,.7,c.pos.z),.36);d&&d<o&&(!a||d<a.t)&&(a={e:c,t:d,head:!1})}const l=Je.muzzleWorld.clone();if(a){const c=e.clone().addScaledVector(n,a.t);je.tracer(l,c);let h=t.dmg*(a.head?4:1);a.t>35&&(h*=.75);const u=a.e.alive;a.e.takeDamage(h,a.head,c),Ve.hits++,a.head&&Ve.headshots++,$t.hitmarker(!a.e.alive&&u),a.head?ze.headshot():ze.hit(),!a.e.alive&&u&&(Ve.kills++,$t.addKillfeed(`✕ Düşman etkisiz hale getirildi (${a.head?"KAFA VURUŞU":"VÜCUT"}) — ${Bn.aliveCount} kaldı`),$t.killBanner(a.head?"KAFA VURUŞU!":"ETKİSİZ HALE GETİRİLDİ"),Bn.aliveCount<=0&&setTimeout(()=>{me==="playing"&&Ca(!0)},900))}else r?(je.tracer(l,r.point),je.dustPuff(r.point,7,.6),je.sparkBurst(r.point,5),ze.impact()):je.tracer(l,e.clone().addScaledVector(n,i))}function T0(s){for(const t of s){if(t.blocked)continue;const e=Lt.pos.clone(),n=e.clone();n.y-=1.55;const i=new ir(t.from,t.dir),r=new jm(n,e),o=new T;i.closestPointToPoint(r.getPoint(.5,new T),o);const a=o.distanceTo(r.getPoint(.5,new T)),l=Lt.speed2D,c=Math.max(.08,.62-t.dist*.008-l*.05);if(a<.55&&Math.random()<c+.25){const h=Lt.takeDamage(9+Math.random()*7,t.from);$t.damageFlash(),je.bloodPuff(e.clone().add(new T((Math.random()-.5)*.3,-.3,(Math.random()-.5)*.3))),h&&($t.centerMsg("ÖLDÜN — GÖREV BAŞARISIZ",2),setTimeout(()=>{me==="playing"&&Ca(!1)},1100))}else{const h=e.clone().add(new T((Math.random()-.5)*2.4,(Math.random()-.5)*1.2,(Math.random()-.5)*2.4));h.y=Math.max(.1,h.y),je.dustPuff(h,5,.5),ze.impact()}}}const w0=new tc;let Zr=!1;function sc(){requestAnimationFrame(sc);const s=Math.min(.05,w0.getDelta()),t=performance.now()/1e3;if(We.userData.grade&&(We.userData.grade.uniforms.uTime.value=t),me==="menu"||me==="ended"){zs+=s*.07;const r=30;Ze.position.set(Math.cos(zs)*r,9+Math.sin(zs*.7)*2,Math.sin(zs)*r),Ze.lookAt(0,1.5,0),Ze.fov=60,Ze.updateProjectionMatrix(),Zi&&je.update(s),We.render();return}if(me==="paused"){We.render();return}if(me!=="playing"){We.render();return}Ji+=s,Xi-=s,Xi<=0&&(Xi=0,Ca(!1));const e=Je.data;is?(e.auto||!Zr)&&(E0(t),Zr=!0):Zr=!1;const n=Je.update(s,Lt.speed2D,Lt.onGround,Lt.mouseDX,Lt.mouseDY,Pa&&!Lt.sprint,t);Lt.update(s,n.ads),document.getElementById("crosshair").classList.toggle("ads",n.ads>.6);const i=Bn.update(s,Lt.pos,Lt.pos,Qs,Lt.speed2D);Qs=!1,T0(i),je.update(s),$t.update(s),$t.updateHUD(Lt,Je,Bn.aliveCount,Xi,Lt.yaw),$t.drawRadar(Lt,Bn.enemies),We.render()}addEventListener("resize",rc);function rc(){Ze.aspect=innerWidth/innerHeight,Ze.updateProjectionMatrix(),Oe.setSize(innerWidth,innerHeight),We.setSize(innerWidth,innerHeight)}
