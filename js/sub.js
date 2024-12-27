$(function () {

  //서브페이지 이미지 효과
  $(window).load(function () {
    $('.subViewBox').addClass('active');
  });

  //탭 
  $(".enterpriseWrap .tabContentBox .tabContent").hide();
  $(".enterpriseWrap .tabContentBox .tabContent").first().show();

  $('.enterpriseWrap .commonTab li').click(function () {

    $('.enterpriseWrap .commonTab li').children('a').removeClass('active');
    $(this).children('a').addClass('active');

    const Idx = $(this).index();

    $(".enterpriseWrap .tabContentBox .tabContent").hide();
    $(".enterpriseWrap .tabContentBox .tabContent").eq(Idx).show();

    return false;

  });

  /* 리스트 토글 */
  $('.tabList li a').click(function () {
    if ($(this).hasClass('active')) {
      $('.tabList li a').removeClass('active');
    } else {
      $('.tabList li a').removeClass('active');
      $(this).addClass('active')
    }
    return false;
  });

  /* 연혁 탭 */
  $('.historyContentBox .historyContent').hide();
  $('.historyContentBox .historyContent').first().show();

  $('.historyWrap .historyTopList li').click(function () {

    $('.historyWrap .historyTopList li').children().removeClass('active');
    $(this).children().addClass('active');

    const idx = $(this).index();

    $('.historyContentBox .historyContent').hide();
    $('.historyContentBox .historyContent').eq(idx).show();

    return false;

  });

  $('.historyTabContent .historyList').hide();
  $('.historyTabContent .historyList').first().show();

  $('.historyWrap .historyTab li').click(function () {

    $('.historyWrap .historyTab li').children().removeClass('active');
    $(this).children().addClass('active');

    const idx = $(this).index();

    $('.historyTabContent .historyList').hide();
    $('.historyTabContent .historyList').eq(idx).show();

    return false;

  });

  //게열사현황 슬라이드
  $(".affiliateSlideBox .slick").slick({
    autoplay: true,
    arrows: true,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 8000,
    speed: 1500,
    prevArrow: $('.affiliateSlideBox .control .prev'),
    nextArrow: $('.affiliateSlideBox .control .next'),
    responsive: [ // 반응형 웹 구현 옵션
      {
        breakpoint: 768,
        settings: {

          slidesToShow: 3
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

  // 게열사현황 탭 
  $('.affiliateWrap .affiliateInfoBox').hide();
  $('.affiliateWrap .affiliateInfoBox').first().show();

  $('.affiliateWrap .commonTab li').click(function () {

    $('.affiliateWrap .commonTab li').children().removeClass('active');
    $(this).children().addClass('active');

    const idx = $(this).index();

    $('.affiliateWrap .affiliateInfoBox').hide();
    $('.affiliateWrap .affiliateInfoBox').eq(idx).show();

    return false;

  });

});