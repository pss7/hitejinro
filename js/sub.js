$(function () {

  //서브페이지 이미지 효과
  $(window).load(function () {
    $('.subViewBox').addClass('active');
  });

  //탭 
  $(".enterpriseWrap .tabContentBox .tabContent").hide();
  $(".enterpriseWrap .tabContentBox .tabContent").first().show();

  $('.enterpriseWrap .enterpriseTab li').click(function () {

    $('.enterpriseWrap .enterpriseTab li').children('a').removeClass('active');
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

});