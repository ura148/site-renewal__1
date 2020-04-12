$(window).on('load resize scroll',function(){
  let contentsBox = $("#main-container"),
      contensHeight =contentsBox.height(),
      windowW = $(window).width(),
      deviceW = 768,
      main = $("#main");

  main.css("height",contensHeight);

      $("#background-effect").css("height",contensHeight);
        if(windowW <= deviceW){
        // 768px以下の時に行う処理
        $(".background-effect__img").css("width",windowW * 4);
        $("#ProdInfo-text-area").css("height","auto"),
        $("#Product__img").css("height","auto");
        main.css("height",contensHeight + 160);

      } else{
        // 768pxより大きい時に行う処理
        let productText1st = $("#ProdInfo-txt"),
            productBtn = $("#ProdInfo__btn"),
            reasontextArea = $("#reason-list"),
            reasontextLast = $("#reason-text-last"),
            reasontextLastH = reasontextLast.height(),//
            productBtnH = productBtn.outerHeight(),
            reasontextAreaPosTO = reasontextArea.offset().top,
            reasontextLastPosTO = reasontextLast.offset().top,
            productText1stPosTO = productText1st.offset().top,
            productBtnPosTO = productBtn.offset().top,
            productBtnPosBottom = productBtnPosTO + productBtnH,
            reasontextLastBottom = reasontextLastPosTO + reasontextLastH,
            productTextAreaH = productBtnPosBottom - productText1stPosTO,
            reasontextAreaH = reasontextLastBottom - reasontextAreaPosTO;


        $(".background-effect__img").css("width",windowW),
        $("#ProdInfo-text-area").css("height",productTextAreaH),
        $("#Product__img").css("height",productTextAreaH);

        // reasoの画像サイズを調整する
        reasontextArea.css("height",reasontextAreaH),
        $("#reason-product").css("height",reasontextAreaH),
        $("#reason-product__img").css("height",reasontextAreaH * 1.1961),
        $("#reason-product").css('transform', 'translateY(' + - reasontextAreaH * 0.1961 + 'px)');
      }

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
        toggle2 = (scrollY - eyecatchPdPosOt + 174)
        // toggle3

          if(scrollY > bgebStart1){
            //"="になる時はscrollbottomと背面遅延1のY座標が同じ時、1pxスクロールすれば背面遅延が画面内に入る
            bgeb.css('transform', 'translateY(' + - toggle + 'px)');

          }else{

          }if(scrollY > eyecatchPdStart){
            eyecatchPd.css('transform', 'translateY(' + toggle2 + 'px)');

            // eyecatchPd.css('margin-top', 0 + eyecatchPdPosOt),
            // eyecatch.css('padding-bottom', 144 - eyecatchPdPosOt);

          }else{
            eyecatchPd.css('background-position','center top');

          //
          // eyecatchのbackground-imageのparallax効果設定
          //
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


// ==============================
// メニューボタンの設定
//
$(".btn-trigger").on("touchstart",function(){
  $(this).toggleClass("active");
  // $(".header-nav").toggleClass("dn");
  $(".header-nav").fadeToggle(500);
});



//
//
// ===============================



// ===============================
// ページ内リンクの設定
//

$('a[href^="#"]').click(function() {
  // スクロールの速度
  let adjust = 50;
      speed = 800; // ミリ秒で記述
      href = $(this).attr("href");
      target = $(href == "#" || href == "" ? 'html' : href);
      position = target.offset().top - adjust;

  $('body,html').animate({
    scrollTop: position
  }, speed, 'swing');
  return false;
});
