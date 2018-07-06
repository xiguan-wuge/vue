// 立即执行函数，放在main.js中

(function(doc,win){
  var docEl=doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange':'resize',
      recalc=function(){
        var clientWidth=docEl.clientWidth;
        if (!clientWidth) return;
        // console.log(clientWidth)
        // 设计稿为320
        docEl.style.fontSize=20*(clientWidth/320)+'px';
        // 320/20=16rem
      };
  if(!doc.addEventListener) return;
  win.addEventListener(resizeEvt,recalc,false);
  doc.addEventListener('DOMContentLoaded',recalc,false); 
})(document, window)