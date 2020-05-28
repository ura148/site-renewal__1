let deviceW = 767;
    main = $("#main");


$(window).on({
  "load":function(){
;
  },
  "load resize":function(){
    loadingAnimation();
    reasonAreaSet();
    eyecatchSet();
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
      // yecatchImgSpMaxH = 100vh - eyecatchImgSpTO;
      eyecatchBoxH = windowH - eyeCatchPosTO;
      eyecatchBoxHsp = windowH - eyecatchImgSpH;

      console.log(eyecatchImgSpH);
      console.log(windowH);

      if(windowW <= deviceW){
        $(".eyecatch").css("padding-bottom",eyecatchBoxHsp);
        console.log("sp");
      }else{
        $(".eyecatch").css("padding-bottom",eyecatchBoxH);
        $("#eyecatch-img__pc").css("height",eyecatchBoxH);
        console.log("pc");
      }
}

// reason areaのサイズ調整
let reasonAreaSet = function(){
  let windowW = $(window).width();
      reasontextArea = $("#reason-list");
      reasontextLast = $("#reason-text-last");
      reasonImgArea = $("#reason-product");
      reasonflex = $("#reason-flex");
      reasontextAreaPosTO = reasontextArea.offset().top;
      reasontextLastPosTO = reasontextLast.offset().top;
      reasonflexW = reasonflex.width();
      reasonImgAreaW = reasonImgArea.width();
      reasontextLastH = reasontextLast.height();
      reasontextLastBottom = reasontextLastPosTO + reasontextLastH;
      reasontextAreaH = reasontextLastBottom - reasontextAreaPosTO;

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

  }else{
  let productText1st = $("#ProdInfo-txt");
      productBtn = $("#ProdInfo__btn");
      productFlex = $("#Product-flex");
      productFlexW = productFlex.width();
      productImgW = productImg.width();
      productBtnH = productBtn.outerHeight();
      productText1stPosTO = productText1st.offset().top;
      productBtnPosTO = productBtn.offset().top;
      productBtnPosBottom = productBtnPosTO + productBtnH;
      productTextAreaH = productBtnPosBottom - productText1stPosTO;

    productImg.css("height",productTextAreaH);
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
