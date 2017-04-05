//>>built
define("dojox/charting/axis2d/Default","dojo/_base/lang dojo/_base/array dojo/sniff dojo/_base/declare dojo/_base/connect dojo/dom-geometry ./Invisible ../scaler/linear ./common dojox/gfx dojox/lang/utils dojox/lang/functional dojo/has!dojo-bidi?../bidi/axis2d/Default".split(" "),function(C,P,S,T,U,ba,L,V,X,z,W,Q,ca){L=T(S("dojo-bidi")?"dojox.charting.axis2d.NonBidiDefault":"dojox.charting.axis2d.Default",L,{defaultParams:{vertical:!1,fixUpper:"none",fixLower:"none",natural:!1,leftBottom:!0,includeZero:!1,
fixed:!0,majorLabels:!0,minorTicks:!0,minorLabels:!0,microTicks:!1,rotation:0,htmlLabels:!0,enableCache:!1,dropLabels:!0,labelSizeChange:!1,position:"leftOrBottom"},optionalParams:{min:0,max:1,from:0,to:1,majorTickStep:4,minorTickStep:2,microTickStep:1,labels:[],labelFunc:null,maxLabelSize:0,maxLabelCharCount:0,trailingSymbol:null,stroke:{},majorTick:{},minorTick:{},microTick:{},tick:{},font:"",fontColor:"",title:"",titleGap:0,titleFont:"",titleFontColor:"",titleOrientation:""},constructor:function(a,
c){this.opt=C.clone(this.defaultParams);W.updateWithObject(this.opt,c);W.updateWithPattern(this.opt,c,this.optionalParams);this.opt.enableCache&&(this._textFreePool=[],this._lineFreePool=[],this._textUsePool=[],this._lineUsePool=[]);this._invalidMaxLabelSize=!0;c&&"position"in c||(this.opt.position=this.opt.leftBottom?"leftOrBottom":"rightOrTop");this.renderingOptions={"shape-rendering":"crispEdges"}},setWindow:function(a,c){a!=this.scale&&(this._invalidMaxLabelSize=!0);return this.inherited(arguments)},
_groupLabelWidth:function(a,c,g){if(!a.length)return 0;50<a.length&&(a.length=50);C.isObject(a[0])&&(a=Q.map(a,function(a){return a.text}));g&&(a=Q.map(a,function(a){return 0==C.trim(a).length?"":a.substring(0,g)+this.trailingSymbol},this));a=a.join("\x3cbr\x3e");return z._base._getTextBox(a,{font:c}).w||0},_getMaxLabelSize:function(a,c,g,h,f,l){if(null==this._maxLabelSize&&6==arguments.length){var k=this.opt;this.scaler.minMinorStep=this._prevMinMinorStep=0;var b=C.clone(k);delete b.to;delete b.from;
var p=V.buildScaler(a,c,g,b,k.to-k.from);p.minMinorStep=0;this._majorStart=p.major.start;k=V.buildTicks(p,k);if(l&&k){var u=p=0,d=function(a){a.label&&this.push(a.label)},e=[];this.opt.majorLabels&&(P.forEach(k.major,d,e),p=this._groupLabelWidth(e,f,b.maxLabelCharCount),b.maxLabelSize&&(p=Math.min(b.maxLabelSize,p)));e=[];this.opt.dropLabels&&this.opt.minorLabels&&(P.forEach(k.minor,d,e),u=this._groupLabelWidth(e,f,b.maxLabelCharCount),b.maxLabelSize&&(u=Math.min(b.maxLabelSize,u)));this._maxLabelSize=
{majLabelW:p,minLabelW:u,majLabelH:l,minLabelH:l}}else this._maxLabelSize=null}return this._maxLabelSize},calculate:function(a,c,g){this.inherited(arguments);this.scaler.minMinorStep=this._prevMinMinorStep;if((this._invalidMaxLabelSize||g!=this._oldSpan)&&Infinity!=a&&-Infinity!=c){this._invalidMaxLabelSize=!1;this.opt.labelSizeChange&&(this._maxLabelSize=null);this._oldSpan=g;var h=this.opt,f=this.chart.theme.axis,l=h.rotation%360,k=this.chart.theme.axis.tick.labelGap,b=h.font||f.majorTick&&f.majorTick.font||
f.tick&&f.tick.font,f=b?z.normalizedLength(z.splitFontString(b).size):0,b=this._getMaxLabelSize(a,c,g,l,b,f);"number"!=typeof k&&(k=4);if(b&&h.dropLabels){var h=Math.abs(Math.cos(l*Math.PI/180)),p=Math.abs(Math.sin(l*Math.PI/180));0>l&&(l+=360);switch(l){case 0:case 180:this.vertical?l=f:(l=b.majLabelW,f=b.minLabelW);break;case 90:case 270:this.vertical?(l=b.majLabelW,f=b.minLabelW):l=f;break;default:l=this.vertical?Math.min(b.majLabelW,f/h):Math.min(b.majLabelW,f/p),f=Math.min(Math.sqrt(b.minLabelW*
b.minLabelW+f*f),this.vertical?f*h+b.minLabelW*p:b.minLabelW*h+f*p)}this.scaler.minMinorStep=this._prevMinMinorStep=Math.max(l,f)+k;this._skipInterval=this.scaler.minMinorStep<=this.scaler.minor.tick*this.scaler.bounds.scale?0:Math.floor((l+k)/(this.scaler.major.tick*this.scaler.bounds.scale))}else this._skipInterval=0}this.ticks=V.buildTicks(this.scaler,this.opt);return this},getOffsets:function(){var a={l:0,r:0,t:0,b:0};if(!this.scaler)return a;var c=this.opt,g=this.chart.theme.axis,h=this.chart.theme.axis.tick.labelGap,
f=c.titleFont||g.title&&g.title.font,g=0==c.titleGap?0:c.titleGap||g.title&&g.title.gap,l=this.chart.theme.getTick("major",c),k=this.chart.theme.getTick("minor",c),f=f?z.normalizedLength(z.splitFontString(f).size):0,b=c.rotation%360,p=c.position,u="rightOrTop"!==p,d=Math.abs(Math.cos(b*Math.PI/180)),e=Math.abs(Math.sin(b*Math.PI/180));this.trailingSymbol=void 0===c.trailingSymbol||null===c.trailingSymbol?this.trailingSymbol:c.trailingSymbol;"number"!=typeof h&&(h=4);0>b&&(b+=360);var r=this._getMaxLabelSize();
if(r){var q=Math.ceil(Math.max(r.majLabelW,r.minLabelW))+1,m=Math.ceil(Math.max(r.majLabelH,r.minLabelH))+1;if(this.vertical)switch(r=u?"l":"r",b){case 0:case 180:a[r]="center"===p?0:q;a.t=a.b=m/2;break;case 90:case 270:a[r]=m;a.t=a.b=q/2;break;default:45>=b||180<b&&225>=b?(a[r]=m*e/2+q*d,a[u?"t":"b"]=m*d/2+q*e,a[u?"b":"t"]=m*d/2):315<b||180>b&&135<b?(a[r]=m*e/2+q*d,a[u?"b":"t"]=m*d/2+q*e,a[u?"t":"b"]=m*d/2):90>b||180<b&&270>b?(a[r]=m*e+q*d,a[u?"t":"b"]=m*d+q*e):(a[r]=m*e+q*d,a[u?"b":"t"]=m*d+q*e)}else switch(r=
u?"b":"t",b){case 0:case 180:a[r]="center"===p?0:m;a.l=a.r=q/2;break;case 90:case 270:a[r]=q;a.l=a.r=m/2;break;default:45<=b&&90>=b||225<=b&&270>=b?(a[r]=m*d/2+q*e,a[u?"r":"l"]=m*e/2+q*d,a[u?"l":"r"]=m*e/2):90<=b&&135>=b||270<=b&&315>=b?(a[r]=m*d/2+q*e,a[u?"l":"r"]=m*e/2+q*d,a[u?"r":"l"]=m*e/2):45>b||180<b&&225>b?(a[r]=m*d+q*e,a[u?"r":"l"]=m*e+q*d):(a[r]=m*d+q*e,a[u?"l":"r"]=m*e+q*d)}a[r]="center"===p?0:a[r]+(h+Math.max(0<l.length?l.length:0,0<k.length?k.length:0)+(c.title?f+g:0))}return a},cleanGroup:function(a){this.opt.enableCache&&
this.group&&(this._lineFreePool=this._lineFreePool.concat(this._lineUsePool),this._lineUsePool=[],this._textFreePool=this._textFreePool.concat(this._textUsePool),this._textUsePool=[]);this.inherited(arguments)},createText:function(a,c,g,h,f,l,k,b,p){if(!this.opt.enableCache||"html"==a)return X.createText[a](this.chart,c,g,h,f,l,k,b,p);0<this._textFreePool.length?(a=this._textFreePool.pop(),a.setShape({x:g,y:h,text:l,align:f}),c.add(a)):a=X.createText[a](this.chart,c,g,h,f,l,k,b);this._textUsePool.push(a);
return a},createLine:function(a,c){var g;this.opt.enableCache&&0<this._lineFreePool.length?(g=this._lineFreePool.pop(),g.setShape(c),a.add(g)):g=a.createLine(c);this.opt.enableCache&&this._lineUsePool.push(g);return g},render:function(a,c){var g,h,f,l,k,b,p,u,d,e,r,q,m,I,C=this._isRtl();if(!this.dirty||!this.scaler)return this;var v=this.opt;d=this.chart.theme.axis;var J=v.position,y="rightOrTop"!==J,t=v.rotation%360,x=0,F,n,x=this.chart.theme.axis.tick.labelGap,D=v.font||d.majorTick&&d.majorTick.font||
d.tick&&d.tick.font,N=v.titleFont||d.title&&d.title.font,L=v.fontColor||d.majorTick&&d.majorTick.fontColor||d.tick&&d.tick.fontColor||"black",T=v.titleFontColor||d.title&&d.title.fontColor||"black";k=0==v.titleGap?0:v.titleGap||d.title&&d.title.gap||15;var K=v.titleOrientation||d.title&&d.title.orientation||"axis",A=this.chart.theme.getTick("major",v),B=this.chart.theme.getTick("minor",v),Y=this.chart.theme.getTick("micro",v),U="stroke"in v?v.stroke:d.stroke,w=D?z.normalizedLength(z.splitFontString(D).size):
0;b=Math.abs(Math.cos(t*Math.PI/180));F=Math.abs(Math.sin(t*Math.PI/180));var O=N?z.normalizedLength(z.splitFontString(N).size):0;"number"!=typeof x&&(x=4);0>t&&(t+=360);var R=this._getMaxLabelSize(),R=R&&R.majLabelW;if(this.vertical){m=a.height-c.b;I=void 0;r=c.t;q=void 0;d=(a.height-c.b+c.t)/2;e=void 0;F=w*F+(R||0)*b+x+Math.max(0<A.length?A.length:0,0<B.length?B.length:0)+O+k;p=0;u=-1;h=g=0;k=1;b=0;f=x;l=0;switch(t){case 0:n="end";h=.4*w;break;case 90:n="middle";g=-w;break;case 180:n="start";h=
.4*-w;break;case 270:n="middle";break;default:45>t?(n="end",h=.4*w):90>t?(n="end",h=.4*w):135>t?n="start":225>t?(n="start",h=.4*-w):270>t?(n="start",g=y?0:.4*w):315>t?(n="end",g=y?0:.4*w):(n="end",h=.4*w)}if(y)I=q="center"===J?a.width/2:c.l,x=K&&"away"==K?90:270,e=c.l-F+(270==x?O:0),k=-1,f=-f;else switch(I=q=a.width-c.r,x=K&&"axis"==K?90:270,e=a.width-c.r+F-(270==x?0:O),n){case "start":n="end";break;case "end":n="start";break;case "middle":g+=w}}else{I=c.l;m=void 0;q=a.width-c.r;r=void 0;e=(a.width-
c.r+c.l)/2;d=void 0;F=w*b+(R||0)*F+x+Math.max(0<A.length?A.length:0,0<B.length?B.length:0)+O+k;p=C?-1:1;k=h=g=u=0;b=1;f=0;l=x;switch(t){case 0:n="middle";h=w;break;case 90:n="start";g=.4*-w;break;case 180:n="middle";break;case 270:n="end";g=.4*w;break;default:45>t?(n="start",h=y?w:0):135>t?(n="start",g=.4*-w):180>t?(n="start",h=y?0:-w):225>t?(n="end",h=y?0:-w):315>t?(n="end",h=y?.4*w:0):(n="end",h=y?w:0)}if(y)m=r="center"===J?a.height/2:a.height-c.b,x=K&&"axis"==K?180:0,d=a.height-c.b+F-(x?O:0);else switch(m=
r=c.t,x=K&&"away"==K?180:0,d=c.t-F+(x?0:O),b=-1,l=-l,n){case "start":n="end";break;case "end":n="start";break;case "middle":h-=w}}this.cleanGroup();var M=this.group,J=this.scaler,y=this.ticks,Z=V.getTransformerFromModel(this.scaler),E=v.title&&x||t||!this.opt.htmlLabels||S("ie")||S("opera")?"gfx":"html",G=k*A.length,H=b*A.length,aa=this._skipInterval;M.createLine({x1:I,y1:m,x2:q,y2:r}).setStroke(U);v.title&&(N=X.createText[E](this.chart,M,e,d,"middle",v.title,N,T),"html"==E?this.htmlElements.push(N):
N.setTransform(z.matrix.rotategAt(x,e,d)));if(null==y)return this.dirty=!1,this;var W=0<y.major.length?(y.major[0].value-this._majorStart)/J.major.tick:0,Q=this.opt.majorLabels;P.forEach(y.major,function(a,b){var d=Z(a.value),c=(C?q:I)+p*d,k=m+u*d;b+=W;this.createLine(M,{x1:c,y1:k,x2:c+G,y2:k+H}).setStroke(A);if(a.label&&(!aa||0==(b-(1+aa))%(1+aa))){var e=v.maxLabelCharCount?this.getTextWithLimitCharCount(a.label,D,v.maxLabelCharCount):{text:a.label,truncated:!1},e=v.maxLabelSize?this.getTextWithLimitLength(e.text,
D,v.maxLabelSize,e.truncated):e,d=this.createText(E,M,c+(0<A.length?G:0)+f+(t?0:g),k+(0<A.length?H:0)+l+(t?0:h),n,e.text,D,L);e.truncated&&this.chart.formatTruncatedLabel(d,a.label,E);e.truncated&&this.labelTooltip(d,this.chart,a.label,e.text,D,E);"html"==E?this.htmlElements.push(d):t&&d.setTransform([{dx:g,dy:h},z.matrix.rotategAt(t,c+(0<A.length?G:0)+f,k+(0<A.length?H:0)+l)])}},this);G=k*B.length;H=b*B.length;Q=this.opt.minorLabels&&J.minMinorStep<=J.minor.tick*J.bounds.scale;P.forEach(y.minor,
function(a){var b=Z(a.value),d=(C?q:I)+p*b,c=m+u*b;this.createLine(M,{x1:d,y1:c,x2:d+G,y2:c+H}).setStroke(B);if(Q&&a.label){var e=v.maxLabelCharCount?this.getTextWithLimitCharCount(a.label,D,v.maxLabelCharCount):{text:a.label,truncated:!1},e=v.maxLabelSize?this.getTextWithLimitLength(e.text,D,v.maxLabelSize,e.truncated):e,b=this.createText(E,M,d+(0<B.length?G:0)+f+(t?0:g),c+(0<B.length?H:0)+l+(t?0:h),n,e.text,D,L);e.truncated&&this.chart.formatTruncatedLabel(b,a.label,E);e.truncated&&this.labelTooltip(b,
this.chart,a.label,e.text,D,E);"html"==E?this.htmlElements.push(b):t&&b.setTransform([{dx:g,dy:h},z.matrix.rotategAt(t,d+(0<B.length?G:0)+f,c+(0<B.length?H:0)+l)])}},this);G=k*Y.length;H=b*Y.length;P.forEach(y.micro,function(a){var b=Z(a.value);a=I+p*b;b=m+u*b;this.createLine(M,{x1:a,y1:b,x2:a+G,y2:b+H}).setStroke(Y)},this);this.dirty=!1;return this},labelTooltip:function(a,c,g,h,f,l){var k=["dijit/Tooltip"],b={type:"rect"},p=["above","below"];h=z._base._getTextBox(h,{font:f}).w||0;f=f?z.normalizedLength(z.splitFontString(f).size):
0;"html"==l?(C.mixin(b,ba.position(a.firstChild,!0)),b.width=Math.ceil(h),b.height=Math.ceil(f),this._events.push({shape:dojo,handle:U.connect(a.firstChild,"onmouseover",this,function(a){require(k,function(a){a.show(g,b,p)})})}),this._events.push({shape:dojo,handle:U.connect(a.firstChild,"onmouseout",this,function(a){require(k,function(a){a.hide(b)})})})):(l=a.getShape(),c=c.getCoords(),b=C.mixin(b,{x:l.x-h/2,y:l.y}),b.x+=c.x,b.y+=c.y,b.x=Math.round(b.x),b.y=Math.round(b.y),b.width=Math.ceil(h),b.height=
Math.ceil(f),this._events.push({shape:a,handle:a.connect("onmouseenter",this,function(a){require(k,function(a){a.show(g,b,p)})})}),this._events.push({shape:a,handle:a.connect("onmouseleave",this,function(a){require(k,function(a){a.hide(b)})})}))},_isRtl:function(){return!1}});return S("dojo-bidi")?T("dojox.charting.axis2d.Default",[L,ca]):L});
//# sourceMappingURL=Default.js.map