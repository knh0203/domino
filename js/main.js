//헤더
let $logo = $('.logo');
    $header = $('header');

$logo.click(function(){
  $header.addClass('sticky')
})

//fadein 효과
$(function(){
  let $quik = $('#quik');
      $grid = $('#grid');
      $ceo = $('#ceo');
      $h1 = $('#section2');
      $menu = $('#menu');
      $menu_all = $('.menu_all');
      $side = $('#side')
      $section5 = $('.section5');

      $offset = 700;

      $quikOST = $quik.offset().top - $offset;
      $gridOST = $grid.offset().top - $offset;
      $ceoOST = $ceo.offset().top - $offset;
      $h1OST = $h1.offset().top - $offset;
      $menuOST = $menu.offset().top - $offset;
      $menu_allOST = $menu_all.offset(top) - $offset;
      $section5OST = $section5.offset(top) - $offset;

  $(window).scroll(function(){
    if($(this).scrollTop() > $quikOST){
      $quik.addClass('animate')
    }
    if($(this).scrollTop() > $gridOST){
      $grid.addClass('animate')
    }
    if($(this).scrollTop() > $ceoOST){
      $ceo.addClass('animate')
    }
    if($(this).scrollTop() > $h1OST){
      $h1.find('h1').addClass('animate')
      $h1.find('p').addClass('animate')
    }
    if($(this).scrollTop() > $menuOST){
      $menu.addClass('animate')
    }
    if($(this).scrollTop() > $menu_allOST){
      $menu_all.addClass('animate')
    }

    //ceo섹션
    if($(this).scrollTop() > $section5OST){
      $section5.addClass('animate')
    }
  });
})



const triangle = document.querySelector('#triangle');
  product = document.querySelector('#product');
  service = document.querySelector('#service');
  image = document.querySelector('#image');
  safety = document.querySelector('#safety');
  content1 = document.querySelector('#content1');
  content2 = document.querySelector('#content2');
  content3 = document.querySelector('#content3');
  content4 = document.querySelector('#content4');
  video = document.querySelector('#photo video');


//메뉴바
let $toggle = $('.toggle');
    $navBar = $('.navBar');
    $ul = $('nav ul');

$ul.mouseenter(function(){
  $toggle.css('transform', 'rotate(180deg)');
  $navBar.css('left', '10px');
})

$ul.mouseleave(function(){
  $toggle.css('transform', 'rotate(-180deg)');
  $navBar.css('left', '-100px');

})



let slideWrapper = $('.slide_wrapper'),
    slides = slideWrapper.find('.slides'),
    slide = slides.find('li'),
    currentIdx = 0,
    slideCount =  slide.length,
    slideWidth = 200,
    slideMargin = 30,
    moveAmt,
    maxSlides = 3,
    responsiveMargin = 20,
    newSlides,
    newSlideWidth,
    prevBtn = slideWrapper.find('.prev'),
    nextBtn = slideWrapper.find('.next');
    newSlideWidth = slideWidth;

//복사본 생성하기 앞뒤에 5개 추가
slides.append(slide.clone().addClass('clone'));
slides.prepend(slide.clone().addClass('clone'));

//가로배열하기
function slideLayout(sw,sm){
newSlides = $('.slide_wrapper li');
moveAmt = sw + sm;

newSlides.each(function(idx){
    $(this).css({left:moveAmt*idx +'px', width:sw +'px'});
  })
}
slideLayout(slideWidth, slideMargin);

//중앙배치하기
function setSlidePos() {
let ulMoveAmt = -moveAmt * slideCount + 'px'
  slides.css({transform: 'translateX(' + ulMoveAmt + ')'});
}
setSlidePos();

//좌우 버튼 슬라이드 작동하기
nextBtn.click(function(){
  moveSlide(currentIdx + 1);
})
prevBtn.click(function(){
  moveSlide(currentIdx - 1);
})

//슬라이드 이동 함수
function moveSlide(num){
// num의 숫자를 이용해서 slides left값이 변경, animate 매서드 0.5초 moveAmt
  slides.stop().animate({left:moveAmt * -num + 'px'},500, function(){
      if(currentIdx == slideCount || currentIdx == -slideCount){
          slides.css({left: '0px'});
          currentIdx = 0;
      }
  });
  currentIdx = num;
}

//자동슬라이드
let timer = undefined;

function autoSlide(){
  if(timer == undefined){
      timer = setInterval(function(){
          moveSlide(currentIdx + 1);
      },3000);
    }
  }
autoSlide();


function stopSlide(){
  clearInterval(timer);
    timer = undefined;
  }
    slideWrapper.mouseenter(function(){
    stopSlide();
  })
    slideWrapper.mouseleave(function(){
    autoSlide();
  })



//팝업창 끄기
$click = $('#click');
$consol = $('#consol');

$click.click(() => {
  $consol.css({'display': 'none'})
})