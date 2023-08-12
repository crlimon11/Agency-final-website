$('.main_slider').slick({
    arrows:false,
    dots:true,
});

$('.card_main_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fa-solid fa-angle-left left"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right right"></i>',
    centerMode: true,
    centerPadding: '0',
    responsive: [
      
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            centerMode: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
        
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });