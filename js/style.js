let deviceW = 767;
    main = $("#main");


$(window).on({
  "load":function(){
;
  },
  "load resize":function(){
    eyecatchSet();
    loadingAnimation();
    reasonAreaSet();
    bubbleSize();
    productArea();
  },
  "scroll":function(){
    bubbleMove();
  }
});


// 初期処理が終わるまでのアニメーション
let loadingAnimation = function(){
  let animation = document.getElementById('loading-animation');

  animation.classList.add('loaded');
  }

// 泡のサイズ変更
let bubbleSize = function(){
  let windowW = $(window).width();
      windowH = $(window).height();
  if(windowW <= deviceW){
    $(".background-effect__img").css("width",windowW * 3);
  }else{
    $(".background-effect__img").css("width",windowW);
  }
}

// bgeの気泡の動き
let bubbleMove = function(){
  let bgeb = $("#background-effect__box"),
      bgebPosOT = bgeb.offset().top;
      targetFactor = 0.2;
      windowH = $(window).height();
      bgebStart1 = bgebPosOT - windowH;
      scrollY = $(this).scrollTop();
      toggle = (scrollY - bgebPosOT) * targetFactor ;
      bgeb.css('transform', 'translateY(' + - toggle + 'px)');
  }

// eyecatch areaの調整
let eyecatchSet = function(){
  let windowW = $(window).width();
      windowH = $(window).height();
      eyecatchBox = $(".eyecatch-box");
      eyecatchImgSp = $("#eyecatch-img__sp");
      eyecatchImgSpTO = eyecatchImgSp.offset().top;
      eyeCatchPosTO = eyecatchBox.offset().top;
      eyecatchImgSpH = eyecatchImgSp.height();
      // eyecatchImgSpMaxH = 100vh - eyecatchImgSpTO;
      eyecatchBoxH = windowH - eyeCatchPosTO;
      eyecatchBoxHsp = windowH - eyeCatchPosTO - eyecatchImgSpH;


      if(windowW <= deviceW){
        if(eyecatchBoxHsp < 0){
          $(".eyecatch").css("padding-bottom",0);
        }else{
        $(".eyecatch").css("padding-bottom",eyecatchBoxHsp);

        }
      }else{
        $(".eyecatch").css("padding-bottom",eyecatchBoxH);
        $("#eyecatch-img__pc").css("height",eyecatchBoxH);

      }
}

// reason areaのサイズ調整
let reasonAreaSet = function(){
  let windowW = $(window).width();
      reasontextArea = $("#reason-list");
      reasontextLast = $("#reason-text-last");
      reasonImgArea = $("#reason-product");
      reasonImgArea = $(".reason-product__img");
      reasonflex = $("#reason-flex");
      reasontextAreaPosTO = reasontextArea.offset().top;
      reasontextLastPosTO = reasontextLast.offset().top;
      reasonflexW = reasonflex.width();
      reasontextLastH = reasontextLast.height();
      reasontextLastBottom = reasontextLastPosTO + reasontextLastH;
      reasontextAreaH = reasontextLastBottom - reasontextAreaPosTO;
      $(".reason-product__img").css("height",reasontextAreaH * 1.1961);
      reasonImgAreaW = reasonImgArea.innerWidth();

      if(windowW <= deviceW){
        reasonflex.css("height",reasontextAreaH);
        reasontextArea.css("height",reasontextAreaH);
        reasonImgArea.css('transform', 'translateY( 0 )');
        $(".reason-product__img").css("height",reasontextAreaH);

      }else{
        reasonflex.css("height",reasontextAreaH);
        reasontextArea.css("height",reasontextAreaH);
        reasonImgArea.css('transform', 'translateY(' + - reasontextAreaH * 0.1961 + 'px)');
        reasontextArea.css("width",reasonflexW - reasonImgAreaW);
        $(".reason-product__img").css("height",reasontextAreaH * 1.1961);
      }
}

let productArea = function(){
  let windowW = $(window).width();
      productTextArea = $("#ProdInfo-text-area");
      productImg = $("#Product__img");

  if(windowW <= deviceW){
    $("#ProdInfo-text-area").css("height","auto");
    $("#Product__img").css("height","auto");
    productImg.css("width","26.1467%");

  }else{
  let productText1st = $("#ProdInfo-txt");
      productBtn = $("#ProdInfo__btn");
      productFlex = $("#Product-flex");
      productFlexW = productFlex.width();
      productBtnH = productBtn.outerHeight();
      productText1stPosTO = productText1st.offset().top;
      productBtnPosTO = productBtn.offset().top;
      productBtnPosBottom = productBtnPosTO + productBtnH;
      productTextAreaH = productBtnPosBottom - productText1stPosTO;
      productImgW = productImg.width();

      productImg.css("height",productTextAreaH);
      productImg.css("width","auto");

  }
}

// メニューボタンの設定
$(".btn-trigger").on("click",function(){
  $(this).toggleClass("active");
  $(".header-nav").fadeToggle(500);
});

$(".nav-link").on("click",function(){
  $(".btn-trigger").toggleClass("active");
  $(".header-nav").fadeToggle(500);
});


// ページ内リンクの設定
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
