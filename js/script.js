$(function () {

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
