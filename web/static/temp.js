/*!
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 Mykhailo Stadnyk <mikhus@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @version 2.1.7
 */
!function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(t||(t="undefined"==typeof window?global:window),void 0!==t[e])return t[e];for(var i=["webkit","moz","ms","o"],r=0,n=i.length,o=e.charAt(0).toUpperCase()+e.substr(1);r<n;r++){var a=t[i[r]+o];if(void 0!==a)return a}return null}function a(e,t,i,r,n,o,l){if("function"!=typeof r)throw new TypeError("Invalid animation rule:",r);var s=e-i,d=s/n,u=0;d>1&&(d=1),1!==d&&(u=r(d),isFinite(u)&&!isNaN(u)&&(d=u)),t&&t(d),s<n?l.frame=Z(function(e){return a(e,t,i,r,n,o,l)}):(o&&o(),l.inProgress=!1)}function l(){Array.prototype.constructor.apply(this,arguments)}function s(e){if(!(e instanceof DOMException&&2152923147===e.result))throw e}function d(e,t){return t.replace(le,function(t,i){var r=e[i];return void 0!==r?r:t})}function u(e){return e.majorTicks instanceof Array||(e.majorTicks=e.majorTicks?[e.majorTicks]:[]),e.majorTicks.length||(e.majorTicks.push(se.formatMajorTickNumber(e.minValue,e)),e.majorTicks.push(se.formatMajorTickNumber(e.maxValue,e))),["right"!==e.tickSide,"left"!==e.tickSide]}function h(e,t,i,r,n,o){e.beginPath(),e.moveTo(t+o,i),e.lineTo(t+r-o,i),e.quadraticCurveTo(t+r,i,t+r,i+o),e.lineTo(t+r,i+n-o),e.quadraticCurveTo(t+r,i+n,t+r-o,i+n),e.lineTo(t+o,i+n),e.quadraticCurveTo(t,i+n,t,i+n-o),e.lineTo(t,i+o),e.quadraticCurveTo(t,i,t+o,i),e.closePath()}function c(e,t){var i=t.valueDec,r=t.valueInt,n=0,o=void 0,a=void 0,l=void 0;if(e=parseFloat(e),l=e<0,e=Math.abs(e),i>0){for(a=e.toFixed(i).toString().split("."),o=r-a[0].length;n<o;++n)a[0]="0"+a[0];a=(l?"-":"")+a[0]+"."+a[1]}else{for(a=Math.round(e).toString(),o=r-a.length;n<o;++n)a="0"+a;a=(l?"-":"")+a}return a}function f(e,t){var i=void 0,r=!1;return i=0===t.majorTicksDec?Math.round(e).toString():e.toFixed(t.majorTicksDec),t.majorTicksInt>1?(r=~i.indexOf("."),~i.indexOf("-")?"-"+[t.majorTicksInt+t.majorTicksDec+2+(r?1:0)-i.length].join("0")+i.replace("-",""):[t.majorTicksInt+t.majorTicksDec+1+(r?1:0)-i.length].join("0")+i):i}function v(e){return e*Math.PI/180}function m(e,t){return{x:-e*Math.sin(t),y:e*Math.cos(t)}}function b(e,t,i,r){var n=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=e.createLinearGradient(n?0:o,n?o:0,n?0:r,n?r:0);return a.addColorStop(0,t),a.addColorStop(1,i),a}function g(e,t){if(arguments.length>2&&void 0!==arguments[2]&&arguments[2])return e.restore(),!0;e.save();var i=t.borderShadowWidth;return i&&(e.shadowBlur=i,e.shadowColor=t.colorBorderShadow),!0}function p(e,t){t.needleShadow&&(e.shadowOffsetX=2,e.shadowOffsetY=2,e.shadowBlur=10,e.shadowColor=t.colorNeedleShadowDown)}function w(e,t,i){return e["font"+t+"Style"]+" "+e["font"+t+"Weight"]+" "+e["font"+t+"Size"]*i+"px "+e["font"+t]}function y(e){e.shadowOffsetX=null,e.shadowOffsetY=null,e.shadowBlur=null,e.shadowColor="",e.strokeStyle=null,e.lineWidth=0,e.save()}function k(e,t,i,r){t.valueTextShadow&&(e.shadowOffsetX=i,e.shadowOffsetY=i,e.shadowBlur=r,e.shadowColor=t.colorValueTextShadow)}function T(e,t,i,r,n,o){if(t.valueBox){y(e);var a=t.valueDec?1+t.valueDec:0,l="9".repeat(Math.max.apply(null,[String(parseInt(i)).length+a].concat(t.majorTicks.map(function(e){return String(parseInt(e,10)).length+a})))),s=t.valueText||c(i,t),d=o/200,u=o/100,f=.4*u,v=1.2*u;e.font=w(t,"Value",d),k(e,t,f,v);var m=e.measureText(t.valueText?s:"-"+c(Number(l),t)).width;y(e);var b=parseFloat(t.fontValueSize)*d+f+v,g=u*parseFloat(t.valueBoxStroke),p=2*o-2*g,T=m+10*u,x=1.1*b+f+v,S=u*t.valueBoxBorderRadius,O=(parseFloat(t.valueBoxWidth)||0)/100*p;O>T&&(T=O),T>p&&(T=p);var V=r-T/2,W=n-x/2,B=n-5.75*u;if(e.beginPath(),S?h(e,V,W,T,x,S):e.rect(V,W,T,x),g){var M=e.createRadialGradient(r,B,10*u,r,B,20*u);M.addColorStop(0,t.colorValueBoxRect),M.addColorStop(1,t.colorValueBoxRectEnd),e.strokeStyle=M,e.lineWidth=g,e.stroke()}t.colorValueBoxShadow&&(e.shadowBlur=1.2*u,e.shadowColor=t.colorValueBoxShadow),t.colorValueBoxBackground&&(e.fillStyle=t.colorValueBoxBackground,e.fill()),e.closePath(),e.restore(),k(e,t,f,v),e.fillStyle=t.colorValueText,e.textAlign="center",e.textBaseline="alphabetic",e.fillText(s,V+T/2,n+x/2-b/3),e.restore()}}function x(e){var t=e.value,i=e.minValue,r=e.maxValue,n=.01*(r-i);return{normal:t<i?i:t>r?r:t,indented:t<i?i-n:t>r?r+n:t}}function S(e,t,i,r,n,o,a,l){e.beginPath(),e.fillStyle=l?se.linearGradient(e,a,l,n>o?n:o,o>n,n>o?i:r):a,t>0?se.roundRect(e,i,r,n,o,t):e.rect(i,r,n,o),e.fill(),e.closePath()}function O(e,t,i,r,n,o,a,l,s){e.beginPath(),e.lineWidth=t,e.strokeStyle=s?se.linearGradient(e,l,s,a,!0,n):l,i>0?se.roundRect(e,r,n,o,a,i):e.rect(r,n,o,a),e.stroke(),e.closePath()}function V(e,t,i,r,n,o){var a=ee.pixelRatio;e.save();var l=t.borderRadius*a,s=n-t.borderShadowWidth-t.borderOuterWidth*a,d=s-t.borderOuterWidth*a-t.borderMiddleWidth*a,u=d-t.borderMiddleWidth*a-t.borderInnerWidth*a,h=u-t.borderInnerWidth*a,c=o-t.borderShadowWidth-t.borderOuterWidth*a,f=c-t.borderOuterWidth*a-t.borderMiddleWidth*a,v=f-t.borderMiddleWidth*a-t.borderInnerWidth*a,m=v-t.borderInnerWidth*a,b=i-(d-s)/2,g=b-(u-d)/2,p=g-(h-u)/2,w=r-(f-c)/2,y=w-(v-f)/2,k=y-(m-v)/2,T=0,x=!1;return t.borderOuterWidth&&(x=se.drawShadow(e,t,x),O(e,t.borderOuterWidth*a,l,i+t.borderOuterWidth*a/2-T,r+t.borderOuterWidth*a/2-T,s,c,t.colorBorderOuter,t.colorBorderOuterEnd),T+=.5*a),t.borderMiddleWidth&&(x=se.drawShadow(e,t,x),O(e,t.borderMiddleWidth*a,l-=1+2*T,b+t.borderMiddleWidth*a/2-T,w+t.borderMiddleWidth*a/2-T,d+2*T,f+2*T,t.colorBorderMiddle,t.colorBorderMiddleEnd),T+=.5*a),t.borderInnerWidth&&(x=se.drawShadow(e,t,x),O(e,t.borderInnerWidth*a,l-=1+2*T,g+t.borderInnerWidth*a/2-T,y+t.borderInnerWidth*a/2-T,u+2*T,v+2*T,t.colorBorderInner,t.colorBorderInnerEnd),T+=.5*a),se.drawShadow(e,t,x),S(e,l,p,k,h+2*T,m+2*T,t.colorPlate,t.colorPlateEnd),e.restore(),[p,k,h,m]}function W(e,t,i,r,n,o){var a=ee.pixelRatio,l=o>=n,s=l?.85*n:o,d=l?o:n;i=l?re(i+(n-s)/2):i;var u=!!t.title,h=!!t.units,c=!!t.valueBox,f=void 0,v=void 0,m=void 0;l?(v=re(.05*d),f=re(.075*d),m=re(.11*d),u&&(d-=f,r+=f),h&&(d-=v),c&&(d-=m)):(v=f=re(.15*s),u&&(s-=f,r+=f),h&&(s-=v));var b=2*t.barStrokeWidth,g=t.barBeginCircle?re(s*t.barBeginCircle/200-b/2):0,p=re(s*t.barWidth/100-b),w=re(d*t.barLength/100-b),y=re((d-w)/2),k=re(i+(l?s/2:y+g)),T=re(r+(l?d-y-g+b/2:s/2)),x=!l||t.hasLeft&&t.hasRight?0:(t.hasRight?-1:1)*t.ticksWidth/100*s,S=l||t.hasLeft&&t.hasRight?0:(t.hasRight?-1:1)*t.ticksWidth/100*s;return e.barDimensions={isVertical:l,width:s,length:d,barWidth:p,barLength:w,strokeWidth:b,barMargin:y,radius:g,pixelRatio:a,barOffset:null,titleMargin:u?f:0,unitsMargin:h?v:0,get ticksLength(){return this.barLength-this.barOffset-this.strokeWidth},X:i+x,Y:r+S,x0:k+x,y0:T+S,baseX:i,baseY:r,ticksPadding:t.ticksPadding/100},e.barDimensions}function B(e,t,i,r,n,o,a){var l=W(e,t,r,n,o,a),s=l.isVertical,d=l.width,u=l.barWidth,h=l.barLength,c=l.strokeWidth,f=l.barMargin,v=l.radius,m=l.x0,b=l.y0,g=l.X,p=l.Y,w=h;if(e.save(),e.beginPath(),t.barBeginCircle){var y=se.radians(s?270:0),k=Math.asin(u/2/v),T=Math.cos(k),x=Math.sin(k),S=m+(s?v*x:v*T-c/2),O=s?b-v*T:b+v*x,V=ne(s?O-b:S-m);e.barDimensions.barOffset=re(V+v);var B=s?re(m-v*x):S,M=s?O:re(b-v*x);"progress"===i&&(h=e.barDimensions.barOffset+(h-e.barDimensions.barOffset)*(se.normalizedValue(t).normal-t.minValue)/(t.maxValue-t.minValue));var j=re(S+h-e.barDimensions.barOffset+c/2),C=re(O-h+e.barDimensions.barOffset-c/2);e.arc(m,b,v,y+k,y-k),s?(e.moveTo(S,M),e.lineTo(S,C),e.lineTo(B,C),e.lineTo(B,M)):(e.moveTo(S,M),e.lineTo(j,M),e.lineTo(j,O),e.lineTo(S,O))}else{var N=re(s?g+(d-u)/2:g+f),P=re(s?p+h+f:p+(d-u)/2);"progress"===i&&(h*=(t.value-t.minValue)/(t.maxValue-t.minValue)),s?e.rect(N,P,u,-h):e.rect(N,P,h,u)}"progress"!==i&&t.barStrokeWidth&&(e.lineWidth=c,e.strokeStyle=t.colorBarStroke,e.stroke()),"progress"!==i&&t.colorBar?(e.fillStyle=t.colorBarEnd?se.linearGradient(e,t.colorBar,t.colorBarEnd,h,s,s?p:g):t.colorBar,e.fill()):"progress"===i&&t.colorBarProgress&&(e.fillStyle=t.colorBarProgressEnd?se.linearGradient(e,t.colorBarProgress,t.colorBarProgressEnd,w,s,s?p:g):t.colorBarProgress,e.fill()),e.closePath(),t.barBeginCircle&&(e.barDimensions.radius+=c),e.barDimensions.barWidth+=c,e.barDimensions.barLength+=c}function M(e,t,i,r,n,o){B(e,t,"",i,r,n,o)}function j(e,t){return t.needleSide!==e||t.tickSide!==e||t.numberSide!==e}function C(e,t,i,r,n,o){t.barProgress&&B(e,t,"progress",i,r,n,o)}function N(e,t){var i=e.barDimensions,r=i.isVertical,n=i.width,o=i.length,a=i.barWidth,l=i.barOffset,s=i.barMargin,d=i.X,u=i.Y,h=i.ticksLength,c=i.ticksPadding,f=n*(parseFloat(t.highlightsWidth)||0)/100;if(t.highlights&&f){var v="right"!==t.tickSide,m="left"!==t.tickSide,b=0,g=t.highlights.length,p=(n-a)/2,w=t.maxValue-t.minValue,y=re(r?d+p:d+s+l),k=f,T=r?u+o-s-l:u+p,x=re((t.ticksWidth/100+c)*n)+(f-t.ticksWidth/100*n),S=re(a+c*n);for(e.save();b<g;b++){var O=t.highlights[b],V=h*ne(t.minValue-O.from)/w,W=h*ne((O.to-O.from)/w);e.beginPath(),e.fillStyle=O.color,r?(v&&e.rect(y-x,T-V,k,-W),m&&e.rect(y+S,T-V,k,-W)):(v&&e.rect(y+V,T-x,W,k),m&&e.rect(y+V,T+S,W,k)),e.fill(),e.closePath()}}}function P(e,t,i,r,n){e.beginPath(),e.moveTo(t,i),e.lineTo(r,n),e.stroke(),e.closePath(),e.save()}function A(e,t,i,r,n,o,a,l,s){var d=e.barDimensions,u=d.isVertical,h=d.length,c=d.barWidth,f=d.barOffset,v=d.barMargin,m=d.pixelRatio,b=d.width,g=d.X,p=d.Y,w=d.ticksLength,y=d.ticksPadding,k=(b-c)/2,T=void 0,x=void 0,S=0,O=i.length,V=void 0,W=s*b,B=k-y*b,M=k+c+W+y*b,j=t instanceof Array?t:new Array(i.length).fill(t);e.lineWidth=l*m,e.save();for(var C=w/(n-r);S<O;S++)V=i[S],e.strokeStyle=j[S],u?(x=p+h-v-f+(r-V)*C,o&&(T=g+B,P(e,T,x,re(T-W),x)),a&&(T=g+M,P(e,T,x,re(T-W),x))):(T=g+v+f-(r-V)*C,o&&(x=p+B,P(e,T,x,T,re(x-W))),a&&(x=p+M,P(e,T,re(x),T,x-W)))}function E(e,t){var i=se.prepareTicks(t),r=q(i,2),n=r[0],o=r[1],a=2,l=(t.maxValue-t.minValue)/(t.majorTicks.length-1),s=t.colorMajorTicks instanceof Array?t.colorMajorTicks:new Array(t.majorTicks.length).fill(t.colorStrokeTicks||t.colorMajorTicks);if(A(e,s,t.exactTicks?t.majorTicks:t.majorTicks.map(function(e,i){return t.minValue+l*i}),t.minValue,t.maxValue,n,o,a,t.ticksWidth/100),t.strokeTicks){var d=e.barDimensions,u=d.isVertical,h=d.length,c=d.width,f=d.barWidth,v=d.barMargin,m=d.barOffset,b=d.X,g=d.Y,p=d.ticksLength,w=d.pixelRatio,y=d.ticksPadding,k=(c-f)/2+f+y*c,T=(c-f)/2-y*c,x=void 0,S=void 0,O=void 0,V=void 0;e.strokeStyle=t.colorStrokeTicks||s[0],a*=w,u?(S=g+h-v-m+a/2,V=S-p-a,n&&(O=x=re(b+T),D(e,x,S,O,V)),o&&(O=x=re(b+k),D(e,x,S,O,V))):(x=b+v+m-a/2,O=x+p+a,n&&(V=S=re(g+T),D(e,x,S,O,V)),o&&(V=S=re(g+k),D(e,x,S,O,V)))}}function D(e,t,i,r,n){e.beginPath(),e.moveTo(t,i),e.lineTo(r,n),e.stroke(),e.closePath()}function _(e,t){var i=se.prepareTicks(t),r=q(i,2),n=r[0],o=r[1],a=[],l=t.minValue,s=Math.abs(t.minorTicks)||0,d=s?(t.maxValue-t.minValue)/(s*(t.majorTicks.length-1)):0;if(s)if(t.exactTicks)for(var u=ae.mod(t.majorTicks[0],s)||0;l<t.maxValue;l+=s)u+l<t.maxValue&&a.push(u+l);else for(;l<t.maxValue;l+=d)a.push(l);A(e,t.colorMinorTicks||t.colorStrokeTicks,a,t.minValue,t.maxValue,n,o,1,t.ticksWidthMinor/100)}function R(e,t){var i=e.barDimensions,r=i.isVertical,n=i.length,o=i.width,a=i.barWidth,l=i.barMargin,s=i.barOffset,d=i.X,u=i.Y,h=i.ticksLength,c=i.ticksPadding,f=t.maxValue-t.minValue,v=f/(t.majorTicks.length-1),m=t.exactTicks?t.majorTicks:t.majorTicks.map(function(e,i){return t.minValue+v*i}),b=m.length,g="right"!==t.numberSide,p="left"!==t.numberSide,w=t.fontNumbersSize*o/200,y=0,k=(t.ticksWidth/100+2*c)*o,T=(o-a)/2-k,x=(o-a)/2+a+k,S=void 0,O=void 0,V=void 0,W=void 0,B=t.colorNumbers instanceof Array?t.colorNumbers:new Array(b).fill(t.colorNumbers),M=t.numbersMargin/100*o;for(e.font=se.font(t,"Numbers",o/200),e.lineWidth=0,e.textAlign="center";y<b;y++)e.fillStyle=B[y],W=t.majorTicks[y],V=t.exactTicks?h*((m[y]-t.minValue)/f):y*h/(b-1),r?(O=u+n-l-s-V+w/3,g&&(e.textAlign="right",e.fillText(W,d+T-M,O)),p&&(e.textAlign="left",e.fillText(W,d+x+M,O))):(e.measureText(W).width,S=d+l+s+V,g&&e.fillText(W,S,u+T-M),p&&e.fillText(W,S,u+x+w+M))}function I(e,t){if(t.title){var i=e.barDimensions,r=i.isVertical,n=i.width,o=i.length,a=i.baseX,l=i.baseY,s=i.titleMargin,d=t.fontTitleSize*n/200,u=re(a+(r?n:o)/2),h=re(l+s/2-(r?d:d/2)-.025*(r?o:n));e.save(),e.textAlign="center",e.fillStyle=t.colorTitle,e.font=se.font(t,"Title",n/200),e.lineWidth=0,e.fillText(t.title,u,h,r?n:o)}}function L(e,t){if(t.units){var i=e.barDimensions,r=i.isVertical,n=i.width,o=i.length,a=i.baseX,l=i.baseY,s=i.unitsMargin,d=t.fontUnitsSize*n/200,u=re(a+(r?n:o)/2),h=re(l+(r?o:n)+s/2-d/2);e.save(),e.textAlign="center",e.fillStyle=t.colorUnits,e.font=se.font(t,"Units",n/200),e.lineWidth=0,e.fillText(se.formatContext(t,t.units),u,h,r?n:o)}}function z(e,t){if(t.needle){var i=e.barDimensions,r=i.isVertical,n=i.width,o=i.length,a=i.barWidth,l=i.barOffset,s=i.barMargin,d=i.ticksLength,u=i.X,h=i.Y,c=i.ticksPadding,f="right"!==t.needleSide,v="left"!==t.needleSide,m=d*(se.normalizedValue(t).indented-t.minValue)/(t.maxValue-t.minValue),b=(t.ticksWidth/100+c)*n,g=a/2+b,p=g*(t.needleEnd/100),w=void 0,y=void 0,k=void 0,T=void 0,x="arrow"===t.needleType.toLowerCase()?X:G,S=(n-a)/2,O=g*(t.needleStart/100),V=S-b-O,W=S+a+b+O;e.save(),se.drawNeedleShadow(e,t),r?(k=re(h+o-s-l-m),f&&(w=re(u+V),y=w+p,x(e,t,w,k,y,k,p)),v&&(w=re(u+W),y=w-p,x(e,t,w,k,y,k,p,!0))):(w=re(u+s+l+m),f&&(k=re(h+V),T=k+p,x(e,t,w,k,w,T,p)),v&&(k=re(h+W),T=k-p,x(e,t,w,k,w,T,p,!0))),e.restore()}}function F(e,t,i,r){return t.colorNeedleEnd?se.linearGradient(e,r?t.colorNeedleEnd:t.colorNeedle,r?t.colorNeedle:t.colorNeedleEnd,i,!e.barDimensions.isVertical):t.colorNeedle}function G(e,t,i,r,n,o,a,l){e.lineWidth=t.needleWidth,e.strokeStyle=F(e,t,a,l),e.beginPath(),e.moveTo(i,r),e.lineTo(n,o),e.stroke(),e.closePath()}function X(e,t,i,r,n,o,a,l){var s=re(.4*a),d=a-s,u=i===n,h=t.needleWidth/2;e.fillStyle=F(e,t,a,l),e.beginPath(),u?(r>o&&(d*=-1),e.moveTo(i-h,r),e.lineTo(i+h,r),e.lineTo(i+h,r+d),e.lineTo(i,o),e.lineTo(i-h,r+d),e.lineTo(i-h,r)):(i>n&&(d*=-1),e.moveTo(i,r-h),e.lineTo(i,r+h),e.lineTo(i+d,r+h),e.lineTo(n,r),e.lineTo(i+d,r-h),e.lineTo(i,r-h)),e.fill(),e.closePath()}function Y(e,t,i,r,n,o,a){var l=(parseFloat(t.fontValueSize)||0)*o/200,s=(.11*a-l)/2;e.barDimensions.isVertical&&se.drawValueBox(e,t,i,r+o/2,n+a-l-s,o)}var U=function e(t,i,r){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,i);if(void 0===n){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,i,r)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(r)},q=function(){function e(e,t){var i=[],r=!0,n=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(i.push(a.value),!t||i.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{!r&&l.return&&l.return()}finally{if(n)throw o}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),H=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}();Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var i=Object(e),r=1;r<arguments.length;r++){var n=arguments[r];if(void 0!==n&&null!==n)for(var o=Object.keys(Object(n)),a=0,l=o.length;a<l;a++){var s=o[a],d=Object.getOwnPropertyDescriptor(n,s);void 0!==d&&d.enumerable&&(i[s]=n[s])}}return i}}),Array.prototype.indexOf||Object.defineProperty(Array.prototype,"indexOf",{value:function(e,t){var i;if(null===this)throw new TypeError('"this" is null or not defined');var r=Object(this),n=r.length>>>0;if(0===n)return-1;var o=+t||0;if(Math.abs(o)===1/0&&(o=0),o>=n)return-1;for(i=Math.max(o>=0?o:n-Math.abs(o),0);i<n;){if(i in r&&r[i]===e)return i;i++}return-1}}),Array.prototype.fill||Object.defineProperty(Array.prototype,"fill",{value:function(e){if(null===this)throw new TypeError("this is null or not defined");for(var t=Object(this),i=t.length>>>0,r=arguments[1],n=r>>0,o=n<0?Math.max(i+n,0):Math.min(n,i),a=arguments[2],l=void 0===a?i:a>>0,s=l<0?Math.max(i+l,0):Math.min(l,i);o<s;)t[o]=e,o++;return t}}),"undefined"==typeof window&&(window="undefined"==typeof global?{}:global);var J=function(){function e(){n(this,e),this._events={},this.addListener=this.on,this.removeListener=this.off}return H(e,[{key:"emit",value:function(e){if(this._events[e]){for(var t=0,i=this._events[e].length,r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];for(;t<i;t++)this._events[e][t]&&this._events[e][t].apply(this,n)}}},{key:"once",value:function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];for(var n=0,o=i.length,a=this;n<o;n++)!function(){var t=i[n],r=function i(){a.off(e,i),t.apply(a,arguments)};i[n]=r}();this.on.apply(this,[e].concat(i))}},{key:"on",value:function(e){this._events[e]||(this._events[e]=[]);for(var t=0,i=arguments.length<=1?0:arguments.length-1;t<i;t++)this._events[e].push(arguments.length<=t+1?void 0:arguments[t+1])}},{key:"off",value:function(e){if(this._events[e])for(var t=0,i=arguments.length<=1?0:arguments.length-1;t<i;t++)for(var r=arguments.length<=t+1?void 0:arguments[t+1],n=void 0;~(n=this._events[e].indexOf(r));)this._events[e].splice(n,1)}},{key:"removeAllListeners",value:function(e){delete this._events[e]}},{key:"listeners",get:function(){return this._events}}]),e}(),Z=o("requestAnimationFrame")||function(e){return setTimeout(function(){return e((new Date).getTime())},1e3/60)},$={linear:function(e){return e},quad:function(e){return Math.pow(e,2)},dequad:function(e){return 1-$.quad(1-e)},quint:function(e){return Math.pow(e,5)},dequint:function(e){return 1-Math.pow(1-e,5)},cycle:function(e){return 1-Math.sin(Math.acos(e))},decycle:function(e){return Math.sin(Math.acos(1-e))},bounce:function(e){return 1-$.debounce(1-e)},debounce:function(e){for(var t=0,i=1;1;t+=i,i/=2)if(e>=(7-4*t)/11)return-Math.pow((11-6*t-11*e)/4,2)+Math.pow(i,2)},elastic:function(e){return 1-$.delastic(1-e)},delastic:function(e){return Math.pow(2,10*(e-1))*Math.cos(20*Math.PI*1.5/3*e)}},K=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"linear",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};if(n(this,e),this.duration=i,this.rule=t,this.draw=r,this.end=o,"function"!=typeof this.draw)throw new TypeError("Invalid animation draw callback:",r);if("function"!=typeof this.end)throw new TypeError("Invalid animation end callback:",o)}return H(e,[{key:"animate",value:function(e,t){var i=this;this.frame&&this.cancel();var r=window.performance&&window.performance.now?window.performance.now():o("animationStartTime")||Date.now();e=e||this.draw,t=t||this.end,this.draw=e,this.end=t,this.frame=Z(function(n){return a(n,e,r,$[i.rule]||i.rule,i.duration,t,i)})}},{key:"cancel",value:function(){if(this.frame){(o("cancelAnimationFrame")||function(e){})(this.frame),this.frame=null}}},{key:"destroy",value:function(){this.cancel(),this.draw=null,this.end=null}}]),e}();K.rules=$;var Q=function(){function t(i,r,o){n(this,t),this.options=i,this.element=r.toLowerCase(),this.type=t.toDashed(o),this.Type=e[o],this.mutationsObserved=!1,this.isObservable=!!window.MutationObserver,window.GAUGES_NO_AUTO_INIT||t.domReady(this.traverse.bind(this))}return H(t,[{key:"isValidNode",value:function(e){return!(!e.tagName||e.tagName.toLowerCase()!==this.element||e.getAttribute("data-type")!==this.type)}},{key:"traverse",value:function(){for(var e=document.getElementsByTagName(this.element),t=0,i=e.length;t<i;t++)this.process(e[t]);this.isObservable&&!this.mutationsObserved&&(new MutationObserver(this.observe.bind(this)).observe(document.body,{childList:!0,subtree:!0,attributes:!0,characterData:!0,attributeOldValue:!0,characterDataOldValue:!0}),this.mutationsObserved=!0)}},{key:"observe",value:function(e){for(var t=0,i=e.length;t<i;t++){var r=e[t];if("attributes"===r.type&&"data-type"===r.attributeName&&this.isValidNode(r.target)&&r.oldValue!==this.type)setTimeout(this.process.bind(this,r.target));else if(r.addedNodes&&r.addedNodes.length)for(var n=0,o=r.addedNodes.length;n<o;n++)setTimeout(this.process.bind(this,r.addedNodes[n]))}}},{key:"process",value:function(e){var i=this;if(!this.isValidNode(e))return null;var r=void 0,n=JSON.parse(JSON.stringify(this.options)),o=null;for(r in n)if(n.hasOwnProperty(r)){var a=t.toAttributeName(r),l=t.parse(e.getAttribute(a));null!==l&&void 0!==l&&(n[r]=l)}return n.renderTo=e,o=new this.Type(n),o.draw&&o.draw(),this.isObservable?(o.observer=new MutationObserver(function(r){r.forEach(function(r){if("attributes"===r.type){var n=r.attributeName.toLowerCase(),a=e.getAttribute(n).toLowerCase();if("data-type"===n&&a&&a!==i.type)o.observer.disconnect(),delete o.observer,o.destroy&&o.destroy();else if("data-"===n.substr(0,5)){var l=n.substr(5).split("-").map(function(e,t){return t?e.charAt(0).toUpperCase()+e.substr(1):e}).join(""),s={};s[l]=t.parse(e.getAttribute(r.attributeName)),"value"===l?o&&(o.value=s[l]):o.update&&o.update(s)}}})}),o.observer.observe(e,{attributes:!0}),o):o}}],[{key:"parse",value:function(e){if("true"===e)return!0;if("false"===e)return!1;if("undefined"!==e){if("null"===e)return null;if(/^[-+#.\w\d\s]+(?:,[-+#.\w\d\s]*)+$/.test(e))return e.split(",");try{return JSON.parse(e)}catch(e){}return e}}},{key:"toDashed",value:function(e){for(var t=e.split(/(?=[A-Z])/),i=1,r=t.length,n=t[0].toLowerCase();i<r;i++)n+="-"+t[i].toLowerCase();return n}},{key:"toCamelCase",value:function(e){for(var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=e.split(/-/),r=0,n=i.length,o="";r<n;r++)o+=r||t?i[r][0].toUpperCase()+i[r].substr(1).toLowerCase():i[r].toLowerCase();return o}},{key:"toAttributeName",value:function(e){return"data-"+t.toDashed(e)}},{key:"domReady",value:function(e){if(/comp|inter|loaded/.test((window.document||{}).readyState+""))return e();window.addEventListener?window.addEventListener("DOMContentLoaded",e,!1):window.attachEvent&&window.attachEvent("onload",e)}}]),t}(),ee=function(){function e(t,i,r){n(this,e),e.collection.push(this),this.width=i||0,this.height=r||0,this.element=t,this.init()}return H(e,[{key:"init",value:function(){var t=e.pixelRatio;this.element.width=this.width*t,this.element.height=this.height*t,this.element.style.width=this.width+"px",this.element.style.height=this.height+"px",this.elementClone=this.element.cloneNode(!0),this.context=this.element.getContext("2d"),this.contextClone=this.elementClone.getContext("2d"),this.drawWidth=this.element.width,this.drawHeight=this.element.height,this.drawX=this.drawWidth/2,this.drawY=this.drawHeight/2,this.minSide=this.drawX<this.drawY?this.drawX:this.drawY,this.elementClone.initialized=!1,this.contextClone.translate(this.drawX,this.drawY),this.contextClone.save(),this.context.translate(this.drawX,this.drawY),this.context.save(),this.context.max=this.contextClone.max=this.minSide,this.context.maxRadius=this.contextClone.maxRadius=null}},{key:"destroy",value:function(){var t=e.collection.indexOf(this);~t&&e.collection.splice(t,1),this.context.clearRect(-this.drawX,-this.drawY,this.drawWidth,this.drawHeight),this.context.max=null,delete this.context.max,this.context.maxRadius=null,delete this.context.maxRadius,this.context=null,this.contextClone=null,this.elementClone=null,this.element=null,this.onRedraw=null}},{key:"commit",value:function(){var t=e.pixelRatio;return 1!==t&&(this.contextClone.scale(t,t),this.contextClone.save()),this}},{key:"redraw",value:function(){return this.init(),this.onRedraw&&this.onRedraw(),this}}],[{key:"redraw",value:function(){for(var t=0,i=e.collection.length;t<i;t++)e.collection[t].redraw()}},{key:"pixelRatio",get:function(){return window.devicePixelRatio||1}}]),e}();ee.collection=[],window.matchMedia&&window.matchMedia("screen and (min-resolution: 2dppx)").addListener(ee.redraw);var te={renderTo:null,width:0,height:0,minValue:0,maxValue:100,value:0,units:!1,exactTicks:!1,majorTicks:[0,20,40,60,80,100],minorTicks:10,strokeTicks:!0,animatedValue:!1,animateOnInit:!1,title:!1,borders:!0,numbersMargin:1,listeners:null,valueInt:3,valueDec:2,majorTicksInt:1,majorTicksDec:0,animation:!0,animationDuration:500,animationRule:"cycle",colorPlate:"#fff",colorPlateEnd:"",colorMajorTicks:"#444",colorMinorTicks:"#666",colorStrokeTicks:"",colorTitle:"#888",colorUnits:"#888",colorNumbers:"#444",colorNeedle:"rgba(240,128,128,1)",colorNeedleEnd:"rgba(255,160,122,.9)",colorValueText:"#444",colorValueTextShadow:"rgba(0,0,0,0.3)",colorBorderShadow:"rgba(0,0,0,0.5)",colorBorderOuter:"#ddd",colorBorderOuterEnd:"#aaa",colorBorderMiddle:"#eee",colorBorderMiddleEnd:"#f0f0f0",colorBorderInner:"#fafafa",colorBorderInnerEnd:"#ccc",colorValueBoxRect:"#888",colorValueBoxRectEnd:"#666",colorValueBoxBackground:"#babab2",colorValueBoxShadow:"rgba(0,0,0,1)",colorNeedleShadowUp:"rgba(2,255,255,0.2)",colorNeedleShadowDown:"rgba(188,143,143,0.45)",colorBarStroke:"#222",colorBar:"#ccc",colorBarProgress:"#888",colorBarShadow:"#000",fontNumbers:"Arial",fontTitle:"Arial",fontUnits:"Arial",fontValue:"Arial",fontNumbersSize:20,fontTitleSize:24,fontUnitsSize:22,fontValueSize:26,fontNumbersStyle:"normal",fontTitleStyle:"normal",fontUnitsStyle:"normal",fontValueStyle:"normal",fontNumbersWeight:"normal",fontTitleWeight:"normal",fontUnitsWeight:"normal",fontValueWeight:"normal",needle:!0,needleShadow:!0,needleType:"arrow",needleStart:5,needleEnd:85,needleWidth:4,borderOuterWidth:3,borderMiddleWidth:3,borderInnerWidth:3,borderShadowWidth:3,valueBox:!0,valueBoxStroke:5,valueBoxWidth:0,valueText:"",valueTextShadow:!0,valueBoxBorderRadius:2.5,highlights:[{from:20,to:60,color:"#eee"},{from:60,to:80,color:"#ccc"},{from:80,to:100,color:"#999"}],highlightsWidth:15,highlightsLineCap:"butt",barWidth:20,barStrokeWidth:0,barProgress:!0,barShadow:0};l.prototype=Object.create(Array.prototype),l.prototype.constructor=l,l.prototype.get=function(e){if("string"==typeof e)for(var t=0,i=this.length;t<i;t++){var r=this[t].options.renderTo.tagName?this[t].options.renderTo:document.getElementById(this[t].options.renderTo||"");if(r.getAttribute("id")===e)return this[t]}else if("number"==typeof e)return this[e];return null};var ie="2.1.7",re=Math.round,ne=Math.abs,oe=new l;oe.version=ie;var ae=function(t){function o(t){n(this,o);var r=i(this,(o.__proto__||Object.getPrototypeOf(o)).call(this)),a=r.constructor.name;if("BaseGauge"===a)throw new TypeError("Attempt to instantiate abstract class!");if(oe.push(r),t.listeners&&Object.keys(t.listeners).forEach(function(e){(t.listeners[e]instanceof Array?t.listeners[e]:[t.listeners[e]]).forEach(function(t){r.on(e,t)})}),r.version=ie,r.type=e[a]||o,r.initialized=!1,t.minValue=parseFloat(t.minValue),t.maxValue=parseFloat(t.maxValue),t.value=parseFloat(t.value)||0,t.borders||(t.borderInnerWidth=t.borderMiddleWidth=t.borderOuterWidth=0),!t.renderTo)throw TypeError("Canvas element was not specified when creating the Gauge object!");var l=t.renderTo.tagName?t.renderTo:document.getElementById(t.renderTo);if(!(l instanceof HTMLCanvasElement))throw TypeError("Given gauge canvas element is invalid!");return t.width=parseFloat(t.width)||0,t.height=parseFloat(t.height)||0,t.width&&t.height||(t.width||(t.width=l.parentNode?l.parentNode.offsetWidth:l.offsetWidth),t.height||(t.height=l.parentNode?l.parentNode.offsetHeight:l.offsetHeight)),r.options=t||{},r.options.animateOnInit&&(r._value=r.options.value,r.options.value=r.options.minValue),r.canvas=new ee(l,t.width,t.height),r.canvas.onRedraw=r.draw.bind(r),r.animation=new K(t.animationRule,t.animationDuration),r}return r(o,t),H(o,[{key:"update",value:function(e){return Object.assign(this.options,this.type.configure(e||{})),this.canvas.width=this.options.width,this.canvas.height=this.options.height,this.animation.rule=this.options.animationRule,this.animation.duration=this.options.animationDuration,this.canvas.redraw(),this}},{key:"destroy",value:function(){var e=oe.indexOf(this);~e&&oe.splice(e,1),this.canvas.destroy(),this.canvas=null,this.animation.destroy(),this.animation=null,this.emit("destroy")}},{key:"draw",value:function(){return this.options.animateOnInit&&!this.initialized&&(this.value=this._value,this.initialized=!0,this.emit("init")),this.emit("render"),this}},{key:"value",set:function(e){var t=this;e=o.ensureValue(e,this.options.minValue);var i=this.options.value;if(e!==i)if(this.options.animation){if(this.animation.frame&&(this.options.value=this._value,this._value===e))return this.animation.cancel(),void delete this._value;void 0===this._value&&(this._value=e),this.emit("animationStart"),this.animation.animate(function(r){var n=i+(e-i)*r;t.options.animatedValue&&t.emit("value",n,t.value),t.options.value=n,t.draw(),t.emit("animate",r,t.options.value)},function(){void 0!==t._value&&(t.emit("value",t._value,t.value),t.options.value=t._value,delete t._value),t.draw(),t.emit("animationEnd")})}else this.emit("value",e,this.value),this.options.value=e,this.draw()},get:function(){return void 0===this._value?this.options.value:this._value}}],[{key:"configure",value:function(e){return e}},{key:"initialize",value:function(e,t){return new Q(t,"canvas",e)}},{key:"fromElement",value:function(e){var t=Q.toCamelCase(e.getAttribute("data-type")),i=e.attributes,r=0,n=i.length,o={};if(t){for(/Gauge$/.test(t)||(t+="Gauge");r<n;r++)o[Q.toCamelCase(i[r].name.replace(/^data-/,""),!1)]=Q.parse(i[r].value);new Q(o,e.tagName,t).process(e)}}},{key:"ensureValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e=parseFloat(e),!isNaN(e)&&isFinite(e)||(e=parseFloat(t)||0),e}},{key:"mod",value:function(e,t){return(e%t+t)%t}},{key:"version",get:function(){return ie}}]),o}(J);void 0!==e&&(e.BaseGauge=ae,e.gauges=(window.document||{}).gauges=oe);var le=/{([_a-zA-Z]+[_a-zA-Z0-9]*)}/g,se={roundRect:h,padValue:c,formatMajorTickNumber:f,radians:v,radialPoint:m,linearGradient:b,drawNeedleShadow:p,drawValueBox:T,verifyError:s,prepareTicks:u,drawShadow:g,font:w,normalizedValue:x,formatContext:d},de=Object.assign({},te,{borderRadius:0,barBeginCircle:30,colorBarEnd:"",colorBarProgressEnd:"",needleWidth:6,tickSide:"both",needleSide:"both",numberSide:"both",ticksWidth:10,ticksWidthMinor:5,ticksPadding:5,barLength:85,fontTitleSize:26,highlightsWidth:10}),ue=function(e){function o(e){return n(this,o),e=Object.assign({},de,e||{}),i(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,o.configure(e)))}return r(o,e),H(o,[{key:"draw",value:function(){try{var e=this.canvas,i=[-e.drawX,-e.drawY,e.drawWidth,e.drawHeight],r=i[0],n=i[1],a=i[2],l=i[3],s=this.options;if(!e.elementClone.initialized){var d=e.contextClone;d.clearRect(r,n,a,l),d.save(),this.emit("beforePlate"),this.drawBox=V(d,s,r,n,a,l),this.emit("beforeBar"),M.apply(void 0,[d,s].concat(t(this.drawBox))),e.context.barDimensions=d.barDimensions,this.emit("beforeHighlights"),N(d,s),this.emit("beforeMinorTicks"),_(d,s),this.emit("beforeMajorTicks"),E(d,s),this.emit("beforeNumbers"),R(d,s),this.emit("beforeTitle"),I(d,s),this.emit("beforeUnits"),L(d,s),e.elementClone.initialized=!0}
this.canvas.commit(),e.context.clearRect(r,n,a,l),e.context.save(),e.context.drawImage(e.elementClone,r,n,a,l),e.context.save(),this.emit("beforeProgressBar"),C.apply(void 0,[e.context,s].concat(t(this.drawBox))),this.emit("beforeNeedle"),z(e.context,s),this.emit("beforeValueBox"),Y.apply(void 0,[e.context,s,s.animatedValue?this.options.value:this.value].concat(t(this.drawBox))),U(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"draw",this).call(this)}catch(e){se.verifyError(e)}return this}}],[{key:"configure",value:function(e){return e.barStrokeWidth>=e.barWidth&&(e.barStrokeWidth=re(e.barWidth/2)),e.hasLeft=j("right",e),e.hasRight=j("left",e),e.value>e.maxValue&&(e.value=e.maxValue),e.value<e.minValue&&(e.value=e.minValue),ae.configure(e)}}]),o}(ae);void 0!==e&&(e.LinearGauge=ue),ae.initialize("LinearGauge",de),"undefined"!=typeof module&&Object.assign(e,{Collection:l,GenericOptions:te,Animation:K,BaseGauge:ae,drawings:se,SmartCanvas:ee,DomObserver:Q,vendorize:o})}("undefined"!=typeof module?module.exports:window);