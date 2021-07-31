$(document).ready(function(){
    $('.slick__add').slick({
        autoplay: false,
        arrows: true,
        speed: 1000,
        dots: false,
        infinite: true,
        slidesToShow: 2, 
        slidesToScroll: 1,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                
                }
            }
            ]
      });
  });