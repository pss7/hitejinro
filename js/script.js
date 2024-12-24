$(function () {

  //메뉴
  $('#header .depth01 li h2 a').mouseover(function () {
    $('#header .depth02').fadeIn();
    $('#header .bg').fadeIn();
  });
  $('#header').mouseleave(function () {
    $('#header .depth02').fadeOut();
    $('#header .bg').fadeOut();
  });

  $('#header .menuBox .menuButton.pc').click(function () {
    $('#siteMap').fadeIn();
    $('#siteMap .siteMapDepth01').addClass('active');
  });

  $('#siteMap .closeBtn').click(function () {
    $('#siteMap').fadeOut();
    $('#siteMap .siteMapDepth01').removeClass('active');
  });

  $('#header .menuBox .menuButton.m').click(function () {
    $('#mobileMenu').animate({
      right: 0
    }, 500);
    $('.mobileBg').show();
  });

  $('#mobileMenu .closeBtn').click(function () {
    $('#mobileMenu').animate({
      right: -3000
    }, 500);
    $('.mobileBg').hide();
  });

  //로드 시 상단에서 헤더 나오는 효과, aos 초기화
  $(window).load(function () {
    $('#header').addClass('active');
    AOS.init({
      duration: 2000
    });
  });

  //스크롤 시 헤더 그림자 효과
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#header').addClass('scroll');
    } else {
      $('#header').removeClass('scroll');
    }
  });

  // 계열사 바로가기 
  $('#footer .footerSelect').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next('.viewBox').fadeOut();
    } else {
      $(this).addClass('active');
      $(this).next('.viewBox').fadeIn();
    }
    return false;
  });


});
