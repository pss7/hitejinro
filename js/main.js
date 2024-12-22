
$(function () {

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
