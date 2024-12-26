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



});