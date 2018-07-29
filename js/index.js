(function(doc, win) {
  // 移动端REM自适应
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth=docEl.clientWidth||320;
      var docCls = docEl.classList;
      var width = clientWidth < 320 ? 320 : clientWidth > 640 ? 640 : clientWidth;
      docEl.style.fontSize = 100 * (width / 320) + 'px';
      docEl.style.opacity=1;

      // 添加屏幕标识，便于文字调整
      if(375 <= clientWidth && clientWidth < 414){
        docCls.add('view6');
      }else if(414 <= clientWidth){
        docCls.add('view6s');
      }else{
        docCls.remove('view6');
        docCls.remove('view6s');
      }
    };
  docEl.style.opacity=0;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
  // IOS8下1px线条改为0.5px
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) {
    var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/),
      version = parseInt(v[1], 10);
    if(version >= 8){
      document.documentElement.classList.add('hairlines');
    }
  }
})(document, window);
