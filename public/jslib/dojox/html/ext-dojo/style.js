//>>built
define("dojox/html/ext-dojo/style","dojo/_base/kernel dojo/dom-style dojo/_base/lang dojo/_base/html dojo/_base/sniff dojo/_base/window dojo/dom dojo/dom-construct dojo/dom-style dojo/dom-attr".split(" "),function(O,Q,B,y,G,M,H,N,C,P){O.experimental("dojox.html.ext-dojo.style");B.getObject("dojox.html.ext-dojo.style",!0);var L=B.getObject("dojox.html");B.mixin(L["ext-dojo"].style,{supportsTransform:!0,_toPx:function(n){var p=y.style,l=this._conversion;if("number"===typeof n)return n+"px";if(-1!=n.toLowerCase().indexOf("px"))return n;
!l.parentNode&&N.place(l,M.body());p(l,"margin",n);return p(l,"margin")},init:function(){var n=M.doc.documentElement.style,p=L["ext-dojo"].style,l=C.get,b=C.set;C.get=function(b,c){var g="transformOrigin"==c;return"transform"==c?p.getTransform(b):g?p.getTransformOrigin(b):l.apply(this,arguments)};C.set=function(c,f,l){var g="transform"==f,n="transformOrigin"==f,t=H.byId(c);return g?p.setTransform(t,l,!0):n?p.setTransformOrigin(t,l):b.apply(this,arguments)};for(var f=0,c=["WebkitT","MozT","OT","msT",
"t"];f<c.length;f++)"undefined"!==typeof n[c[f]+"ransform"]&&(this.tPropertyName=c[f]+"ransform"),"undefined"!==typeof n[c[f]+"ransformOrigin"]&&(this.toPropertyName=c[f]+"ransformOrigin");this.tPropertyName?(this.setTransform=function(c,f){return b(c,this.tPropertyName,f)},this.getTransform=function(b){return l(b,this.tPropertyName)}):G("ie")&&(this.setTransform=this._setTransformFilter,this.getTransform=this._getTransformFilter);this.toPropertyName?(this.setTransformOrigin=function(c,f){return b(c,
this.toPropertyName,f)},this.getTransformOrigin=function(b){return l(b,this.toPropertyName)}):G("ie")?(this.setTransformOrigin=this._setTransformOriginFilter,this.getTransformOrigin=this._getTransformOriginFilter):this.supportsTransform=!1;this._conversion=N.create("div",{style:{position:"absolute",top:"-100px",left:"-100px",fontSize:0,width:"0",backgroundPosition:"50% 50%"}})},_notSupported:function(){console.warn("Sorry, this browser doesn't support transform and transform-origin")},_setTransformOriginFilter:function(n,
p){for(var l=B.trim(p).replace(" top"," 0").replace("left ","0 ").replace(" center","50%").replace("center ","50% ").replace(" bottom"," 100%").replace("right ","100% ").replace(/\s+/," ").split(" "),b=H.byId(n),f=this.getTransform(b),c=!0,g=0;g<l.length;g++)c=c&&/^0|(\d+(%|px|pt|in|pc|mm|cm))$/.test(l[g]),-1==l[g].indexOf("%")&&(l[g]=this._toPx(l[g]));if(!c||!l.length||2<l.length)return p;y.attr(b,"dojo-transform-origin",l.join(" "));f&&this.setTransform(n,f);return p},_getTransformOriginFilter:function(n){return y.attr(n,
"dojo-transform-origin")||"50% 50%"},_setTransformFilter:function(n,p){var l=p.replace(/\s/g,""),b=H.byId(n),f=l.split(")"),c=1,g=1,l=P.has,t=y.attr,r=Math.PI,B=Math.cos,C=Math.sin,I=Math.tan,q=Math.max,v=Math.min,D=Math.abs,E=r/180,F=r/200,d="",d="",d=[],w=0,z=0,A=0,J=0,u=0,m=0,c=0,c=1,h=g=0,e=1,x=0,k=0,a=[c,g,h,e,x,k],z=!1,r=y.style,K="absolute"==r(b,"position")?"absolute":"relative",u=r(b,"width")+r(b,"paddingLeft")+r(b,"paddingRight"),w=r(b,"height")+r(b,"paddingTop")+r(b,"paddingBottom"),A=this._toPx;
!l(b,"dojo-transform-origin")&&this.setTransformOrigin(b,"50% 50%");m=0;for(J=f.length;m<J;m++){d=(d=f[m].match(/matrix|rotate|scaleX|scaleY|scale|skewX|skewY|skew|translateX|translateY|translate/))?d[0]:"";switch(d){case "matrix":d=f[m].replace(/matrix\(|\)/g,"");k=d.split(",");c=a[0]*k[0]+a[1]*k[2];g=a[0]*k[1]+a[1]*k[3];h=a[2]*k[0]+a[3]*k[2];e=a[2]*k[1]+a[3]*k[3];x=a[4]+k[4];k=a[5]+k[5];break;case "rotate":d=f[m].replace(/rotate\(|\)/g,"");c=-1!=d.indexOf("deg")?E:-1!=d.indexOf("grad")?F:1;c*=parseFloat(d);
e=C(c);d=B(c);c=a[0]*d+a[1]*e;g=-a[0]*e+a[1]*d;h=a[2]*d+a[3]*e;e=-a[2]*e+a[3]*d;break;case "skewX":d=f[m].replace(/skewX\(|\)/g,"");c=-1!=d.indexOf("deg")?E:-1!=d.indexOf("grad")?F:1;e=I(parseFloat(d)*c);c=a[0];g=a[0]*e+a[1];h=a[2];e=a[2]*e+a[3];break;case "skewY":d=f[m].replace(/skewY\(|\)/g,"");c=-1!=d.indexOf("deg")?E:-1!=d.indexOf("grad")?F:1;e=I(parseFloat(d)*c);c=a[0]+a[1]*e;g=a[1];h=a[2]+a[3]*e;e=a[3];break;case "skew":d=f[m].replace(/skew\(|\)/g,"");h=d.split(",");h[1]=h[1]||"0";c=-1!=h[0].indexOf("deg")?
E:-1!=h[0].indexOf("grad")?F:1;g=-1!=h[1].indexOf("deg")?E:-1!=h[1].indexOf("grad")?F:1;e=I(parseFloat(h[0])*c);h=I(parseFloat(h[1])*g);c=a[0]+a[1]*h;g=a[0]*e+a[1];h=a[2]+a[3]*h;e=a[2]*e+a[3];break;case "scaleX":d=parseFloat(f[m].replace(/scaleX\(|\)/g,""))||1;c=a[0]*d;g=a[1];h=a[2]*d;e=a[3];break;case "scaleY":d=parseFloat(f[m].replace(/scaleY\(|\)/g,""))||1;c=a[0];g=a[1]*d;h=a[2];e=a[3]*d;break;case "scale":d=f[m].replace(/scale\(|\)/g,"");e=d.split(",");e[1]=e[1]||e[0];c=a[0]*e[0];g=a[1]*e[1];
h=a[2]*e[0];e=a[3]*e[1];break;case "translateX":d=parseInt(f[m].replace(/translateX\(|\)/g,""))||1;c=a[0];g=a[1];h=a[2];e=a[3];(x=A(d))&&t(b,"dojo-transform-matrix-tx",x);break;case "translateY":d=parseInt(f[m].replace(/translateY\(|\)/g,""))||1;c=a[0];g=a[1];h=a[2];e=a[3];(k=A(d))&&t(b,"dojo-transform-matrix-ty",k);break;case "translate":d=f[m].replace(/translate\(|\)/g,""),c=a[0],g=a[1],h=a[2],e=a[3],k=d.split(","),k[0]=parseInt(A(k[0]))||0,k[1]=parseInt(A(k[1]))||0,x=k[0],k=k[1],x&&t(b,"dojo-transform-matrix-tx",
x),k&&t(b,"dojo-transform-matrix-ty",k)}a=[c,g,h,e,x,k]}f=v(u*c+w*g,v(v(u*c,w*g),0));v=v(u*h+w*e,v(v(u*h,w*e),0));A=-f;J=-v;8>G("ie")?(b.style.zoom="1","absolute"!=K&&(v=r(n.parentNode,"width"),f=D(u*c),D=D(w*g),q=q(f+D,q(q(D,f),0)),A-=(q-u)/2-(v>q?0:(q-v)/2))):8==G("ie")&&"auto"==r(b,"zIndex")&&(b.style.zIndex="0");try{z=!!b.filters.item("DXImageTransform.Microsoft.Matrix")}catch(R){z=!1}z?(b.filters.item("DXImageTransform.Microsoft.Matrix").M11=c,b.filters.item("DXImageTransform.Microsoft.Matrix").M12=
g,b.filters.item("DXImageTransform.Microsoft.Matrix").M21=h,b.filters.item("DXImageTransform.Microsoft.Matrix").M22=e,b.filters.item("DXImageTransform.Microsoft.Matrix").filterType="bilinear",b.filters.item("DXImageTransform.Microsoft.Matrix").Dx=0,b.filters.item("DXImageTransform.Microsoft.Matrix").Dy=0,b.filters.item("DXImageTransform.Microsoft.Matrix").sizingMethod="auto expand"):b.style.filter+=" progid:DXImageTransform.Microsoft.Matrix(M11\x3d"+c+",M12\x3d"+g+",M21\x3d"+h+",M22\x3d"+e+",FilterType\x3d'bilinear',Dx\x3d0,Dy\x3d0,sizingMethod\x3d'auto expand')";
x=parseInt(t(b,"dojo-transform-matrix-tx")||"0");k=parseInt(t(b,"dojo-transform-matrix-ty")||"0");q=t(b,"dojo-transform-origin").split(" ");for(m=0;2>m;m++)q[m]=q[m]||"50%";u=-1!=q[0].toString().indexOf("%")?u*parseInt(q[0])*.01:q[0];m=-1!=q[1].toString().indexOf("%")?w*parseInt(q[1])*.01:q[1];l(b,"dojo-startX")?w=parseInt(t(b,"dojo-startX")):(w=parseInt(r(b,"left")),t(b,"dojo-startX","absolute"==K?w:"0"));l(b,"dojo-startY")?z=parseInt(t(b,"dojo-startY")):(z=parseInt(r(b,"top")),t(b,"dojo-startY",
"absolute"==K?z:"0"));r(b,{position:K,left:w-parseInt(A)+parseInt(u)-((parseInt(u)-x)*c+(parseInt(m)-k)*g)+"px",top:z-parseInt(J)+parseInt(m)-((parseInt(u)-x)*h+(parseInt(m)-k)*e)+"px"});return p},_getTransformFilter:function(n){try{var p=H.byId(n).filters.item(0);return"matrix("+p.M11+", "+p.M12+", "+p.M21+", "+p.M22+", "+(y.attr(n,"dojo-transform-tx")||"0")+", "+(y.attr(n,"dojo-transform-ty")||"0")+")"}catch(l){return"matrix(1, 0, 0, 1, 0, 0)"}},setTransform:function(){this._notSupported()},setTransformOrigin:function(){this._notSupported()}});
L["ext-dojo"].style.init();return y.style});
//# sourceMappingURL=style.js.map