
$(function () {

  /* 메인 */
  var $slick_carousel = $('#mainWrap .slick');
  $slick_carousel.on('init', function (event, slick) {
    $slick_carousel.find('.slick-current').removeClass('slick-active');
    setTimeout(function () {
      $slick_carousel.find('.slick-current').addClass('slick-active');
    }, 100);
  });

  $("#mainWrap .slick").slick({
    autoplay: true,
    arrows: false,
    dots: false,
    fade: true,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 8000,
    speed: 1500,
  });

  $('#mainWrap .slick').on('afterChange', function (slick, currentSlide, nextSlide) {
    $('#mainWrap .titleBox').fadeIn();
  });
  $('#mainWrap .slick').on('beforeChange', function (slick, currentSlide, nextSlide) {
    $('#mainWrap .titleBox').fadeOut();
  });

  // 뉴스 이미지 슬라이드
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 42,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });

  $('.counterUp').counterUp({
    time: 1000,
  });

  /*
  $("html, body").animate({ scrollTop: 0 }, "slow");

  const handleScroll = (e) => {
    e.preventDefault();
    const delta = e.originalEvent.deltaY;
    const $currentSection = $(e.currentTarget);

    let $targetSection;

    if (delta > 0) {
     
      $targetSection = $currentSection.is("footer")
        ? $currentSection.prev("section")  
        : $currentSection.next().length ? $currentSection.next() : $("footer");
    } else {

      if ($currentSection.is("footer")) {
    
        $targetSection = $currentSection.prev("section");  
      } else {

        $targetSection = $currentSection.prev().length ? $currentSection.prev() : $("section:first-of-type");
      }
    }
    $("html, body").stop().animate({ scrollTop: $targetSection.offset().top }, 800);
  };

  const toggleSectionScroll = () => {
    const isMobile = $(window).width() <= 768;
    $("section, footer").off("wheel", handleScroll);
    if (!isMobile) $("section, footer").on("wheel", handleScroll);
  };

  toggleSectionScroll();
  $(window).on("resize", toggleSectionScroll);
*/

});
