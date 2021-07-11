$(window).on('load', function() {
    if($('#myModal')) {
        $('#myModal').modal('show');
    }
    
});

$('#iconified').on('keyup', function() {
    var input = $(this);
    if(input.val().length === 0) {
        input.addClass('empty');
    } else {
        input.removeClass('empty');
    }
});
$('.navbar-toggler').click(function() {
    $( 'html' ).toggleClass( "nav-open" );
    $(this).toggleClass( "show" );
})






  $(document).ready(function() {

    $(".toggle-password").click(function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).prev());
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });
   
    // subitem lv3 header handle
    if($('header .dropdown-item.lv3')) {
        $('header .dropdown-item.lv3').click(function() {
            event.stopPropagation();
            event.preventDefault();
            $(this).next().toggleClass('show');
        });
    }
   

    if($('.slick_add')) {
        $('.slick_add').slick({
            autoplay: false,
            arrows: true,
            speed: 1000,
            dots: false,
            infinite: true,
            slidesToShow: 8, 
            slidesToScroll: 1,
            cssEase: 'linear',
            pauseOnFocus: false,
            pauseOnHover: false,
            responsive: [
                
                {
                    breakpoint: 600,
                    settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    
                    }
                }
                ]
          });
    }

        if(document.querySelector('.container-fluid.cate-ruou .wrap .wrap-image'))  {
            var cw = document.querySelector('.container-fluid.cate-ruou .wrap .wrap-image').offsetWidth;
            $('.container-fluid.cate-ruou .wrap .wrap-image').css({'height':cw+'px'});
        }   
     
        if($('.slick_khuyenmai')) {
            $('.slick_khuyenmai').slick({
                autoplay: false,
                arrows: true,
                speed: 1000,
                dots: false,
                infinite: true,
                slidesToShow: 5, 
                slidesToScroll: 1,
                cssEase: 'linear',
                pauseOnFocus: false,
                pauseOnHover: false,
                responsive: [
                    
                    {
                        breakpoint: 800,
                        settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        
                        }
                    },
                    ]
              });
        }
     $('.menu-right > li').click(function() {
         event.preventDefault();
        //  event.stopPropagation()
     });
     // Chuyen huong sang man hinh dang nhap va dang ky tren mobile
     $('.menu-right .table_login li.login').click(function() {
        window.location.href = "dangnhap-mobi.html";
     });
     $('.menu-right .table_login li.register').click(function() {
        window.location.href = "dangky-mobi.html";
     });
   
    $("#begin_modal").on( "click", function() {
        $('#modalLogin').modal('hide');  
        $('#modalRegister').modal('show'); 
    });
    $("#begin_modal_1").on( "click", function() {
        $('#modalRegister').modal('hide');  
        $('#modalRegister2').modal('show'); 
    });
    $("#begin_modal_2").on( "click", function() {
        $('#modalRegister2').modal('hide');  
        $('#cs_doitra').modal('show'); 
    });
    
     
    //  JS Header Sticky 
     
        window.onscroll = function() {myFunction()};

       
        var header = document.querySelector("header");

       
        var sticky = header.offsetTop;

        
        function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
        }
        // JS Handle login mobile 
        var btn_tt = document.querySelector('.login_mobile .btn_tt .btn');
        var contentShow = document.querySelectorAll('.login_mobile .divShow');
        stt = 0;
        if(btn_tt){
            btn_tt.onclick = function() {
                
                if(stt < contentShow.length -1) {
                    stt = stt + 1;
                    for (let i = 0; i < contentShow.length; i++) {
                        contentShow[i].classList.add('d-none');
                        contentShow[stt].classList.remove('d-none');
                        console.log(stt);
                    }
                }else {
                    stt = 2;
                }
                
            }
        }

        var backBtn = document.querySelectorAll('.login_mobile .back_btn_mobile ');
        if(backBtn) {
            for(i = 0; i < backBtn.length; i++){
                
                    backBtn[i].onclick = function() {
                        event.preventDefault();
                            if(stt > 0 && stt <= contentShow.length){
                                contentShow[stt].classList.add('d-none');
                                    contentShow[stt-1].classList.remove('d-none');
                                 stt = stt - 1;
    
                                 
                                console.log(stt);
                            }else {
                                window.location.href = "index.html";
                            }   
                    }
            }
        } 

        $('.bia_duc_content .filter a.des').click(function() {
             var needDiv = $('.bia_duc_content .filter a.des').parent().find('.filterContentDiv');
             needDiv.toggleClass('show');
        })
});

