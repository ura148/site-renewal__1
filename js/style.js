$(document).ready(function(){
  let contentsBox = $("#main-container"),
      contensHeight =contentsBox.height(),
      windowW = $(window).width();

      $("#background-effect").css("height",contensHeight);
      $(".background-effect__img").css("width",windowW * 4);
      console.log(windowW);
});


$(function(){
    let target1 = $("#background-effect__box"),//target1という変数に#parallax-01を代入するという変数宣言
        targetPosOT1 = target1.offset().top,//target1のY座標を取得
        targetFactor = 0.2,//targetFactorという変数に0.5を代入
        windowH = $(window).height(),//window（使用している端末で表示される画面の高さ）
        scrollYStart1 = targetPosOT1 - windowH;//背面遅延1のY座標-画面の高さ

  $(window).on('scroll',function(){
    let scrollY = $(this).scrollTop(),//[仮説]scrollする度のscrolltopのY座標
         toggle = (scrollY - targetPosOT1) * targetFactor;

         console.log(toggle);

    if(scrollY > scrollYStart1){
      //"="になる時はscrollbottomと背面遅延1のY座標が同じ時、1pxスクロールすれば背面遅延が画面内に入る
      target1.css('transform', 'translateY(' + - toggle + 'px)');

    }else{
    }
  });
});
