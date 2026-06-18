"use strict";var q=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(r){throw (e=0, r)}};};var d=q(function(O,f){
var o=require('@stdlib/ndarray-base-numel-dimension/dist'),x=require('@stdlib/ndarray-base-stride/dist'),c=require('@stdlib/ndarray-base-offset/dist'),l=require('@stdlib/ndarray-base-data-buffer/dist'),m=require('@stdlib/blas-ext-base-zindex-of/dist').ndarray,s=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function g(i){var e,r,n,u,v,a,t;if(t=i[0],a=o(t,0),e=s(i[1]),r=s(i[2]),r<0)r+=a,r<0&&(r=0);else if(r>=a)return-1;return a-=r,n=x(t,0),u=c(t)+n*r,v=m(a,e,l(t),n,u),v>=0&&(v+=r),v}f.exports=g
});var p=d();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
