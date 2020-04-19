// ==============================
// 初期処理
//

$(window).on('load resize scroll',function(){
  let contentsBox = $("#main-container"),
      contensHeight =contentsBox.height(),
      windowW = $(window).width(),
      deviceW = 768,
      main = $("#main"),
      // reason areaについての取得情報
      reasontextArea = $("#reason-list"),
      reasontextLast = $("#reason-text-last"),
      reasonImgArea = $("#reason-product"),
      reasonflex = $("#reason-flex"),
      reasontextAreaPosTO = reasontextArea.offset().top,
      reasontextLastPosTO = reasontextLast.offset().top,
      reasonflexW = reasonflex.width(),
      reasonImgAreaW = reasonImgArea.width(),
      reasontextLastH = reasontextLast.height(),
      reasontextLastBottom = reasontextLastPosTO + reasontextLastH,
      reasontextAreaH = reasontextLastBottom - reasontextAreaPosTO;

      main.css("height",contensHeight);

      $("#background-effect").css("height",contensHeight);
        if(windowW <= deviceW){
        // 768px以下の時の処理
        let contensHeightSP = contensHeight + 160;
        main.css("height",contensHeightSP);

        // ==============================
        // 気泡の画像サイズを調整
        //
        $(".background-effect__img").css("width",windowW * 4);

        // ==============================
        // reasonエリアのサイズ調整
        //
        $(".reason-product__img").css("height",reasontextAreaH),

        // ==============================
        // productエリアのサイズ調整
        //
        $("#ProdInfo-text-area").css("height","auto"),
        $("#Product__img").css("height","auto");

      }else{
        // 768pxより大きい時の処理

        let productTextArea = $("#ProdInfo-text-area"),
            productText1st = $("#ProdInfo-txt"),
            productBtn = $("#ProdInfo__btn"),
            productImg = $("#Product__img"),
            productFlex = $("#Product-flex"),
            productFlexW = productFlex.width(),
            productImgW = productImg.width(),
            productBtnH = productBtn.outerHeight(),
            productText1stPosTO = productText1st.offset().top,
            productBtnPosTO = productBtn.offset().top,
            productBtnPosBottom = productBtnPosTO + productBtnH,
            productTextAreaH = productBtnPosBottom - productText1stPosTO;

        // ==============================
        //気泡の画像サイズを調整する
        //
        $(".background-effect__img").css("width",windowW);
        //
        //
        // ===============================


        // ==============================
        // reasonの画像サイズを調整する
        //
        reasontextArea.css("height",reasontextAreaH),
        reasonflex.css("height",reasontextAreaH),
        $(".reason-product__img").css("height",reasontextAreaH * 1.1961),
        reasonImgArea.css('transform', 'translateY(' + - reasontextAreaH * 0.1961 + 'px)');
        reasontextArea.css("width",reasonflexW - reasonImgAreaW);
        //
        //
        // ===============================


        // ==============================
        // productエリアの調整
        //
        $("#ProdInfo-text-area").css("height",productTextAreaH),
        productImg.css("height",productTextAreaH),
        productTextArea.css("width",productFlexW - productImgW);
        //
        //
        // ===============================
      }
});
//
//
// ===============================

// ==============================
// bgeの気泡の動き
//
$(function(){
    let bgeb = $("#background-effect__box"),
        bgebPosOT = bgeb.offset().top,
        targetFactor = 0.2,
        windowH = $(window).height();
        bgebStart1 = bgebPosOT - windowH,

        $(window).on('scroll',function(){
          let scrollY = $(this).scrollTop(),//scrollする度のscrolltopのY座標
              toggle = (scrollY - bgebPosOT) * targetFactor ;

              bgeb.css('transform', 'translateY(' + - toggle + 'px)');
        });
});
//
//
// ===============================

// ==============================
// メニューボタンの設定
//
$(".btn-trigger").on("click",function(){
  $(this).toggleClass("active");
  // $(".header-nav").toggleClass("dn");
  $(".header-nav").fadeToggle(500);
});

$(".nav-link").on("click",function(){
  $(".btn-trigger").toggleClass("active");
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
//
//
// ===============================
