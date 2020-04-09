$(document).ready(function(){
  let contentsBox = $("#main-container"),
      contensHeight =contentsBox.height(),
      windowW = $(window).width();

      $("#background-effect").css("height",contensHeight);
      $(".background-effect__img").css("width",windowW * 4);
});


$(function(){
    let bgeb = $("#background-effect__box"),//target1という変数に#background-effect__boxを代入するという変数宣言
        eyecatch = $("#eyecatch"),
        eyecatchPd = $("#product")
        // Y座標取得
        bgebPosOT = bgeb.offset().top,//target1のY座標を取得
        eyecatchPosOt = eyecatch.offset().top,
        eyecatchPdPosOt = eyecatchPd.offset().top,
        //
        targetFactor = 0.2,//targetFactorという変数に0.5を代入
        windowH = $(window).height();//window（使用している端末で表示される画面の高さ）
        //
        bgebStart1 = bgebPosOT - windowH,//Y座標-画面の高さ
        eyecatchStart = eyecatchPosOt - windowH,
        eyecatchPdStart = eyecatchPdPosOt - windowH,
        //




  $(window).on('scroll',function(){
    let scrollY = $(this).scrollTop(),//scrollする度のscrolltopのY座標

        toggle = (scrollY - bgebPosOT) * targetFactor
        toggle2 = (scrollY - eyecatchPdPosOt)



          if(scrollY > bgebStart1){
            //"="になる時はscrollbottomと背面遅延1のY座標が同じ時、1pxスクロールすれば背面遅延が画面内に入る
            bgeb.css('transform', 'translateY(' + - toggle + 'px)');

          }else{

          }if(scrollY > eyecatchPdStart){
            eyecatchPd.css('transform', 'translateY(' + toggle2 + 'px)'),
            eyecatchPd.css('margin-top', 0 + eyecatchPdPosOt),
            eyecatch.css('padding-bottom', 144 - eyecatchPdPosOt);

          }else{
            eyecatchPd.css('background-position','center top');
            eyecatch.css('padding-bottom', 144);

          }if(scrollY > eyecatchStart){
            //"="になる時はscrollbottomと背面遅延1のY座標が同じ時、1pxスクロールすれば背面遅延が画面内に入る
            eyecatch.css('background-position-y', (scrollY - eyecatchPosOt) + 'px');


          }else{
            //そうでない時は
            eyecatch.css('background-position','center top');
            //eyecatchのpositionを通常に戻す
          }
  });
});
