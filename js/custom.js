/*nav fixing transparent
window.addEventListener('scroll', function () {
    let nav = document.querySelector('nav');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})
*/
//loader Animation
    $(window).on("load",function(){
        $(".loader-container").fadeOut(1000);
    });
//page loader

//scroll spy
$(function() {
    var topoffset = 70; //variable for menu height

    //Use smooth scrolling when clicking on navigation
    $('.navbar-nav a').click(function() {
      if (location.pathname.replace(/^\//,'') === 
        this.pathname.replace(/^\//,'') && 
        location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top-topoffset
          }, 700);
          return false;
        } //target.length
      } //click function
    }); //smooth scrolling

  });	
//scroll spy end


//type animation
var typed=new Typed(".text-animation",{
    strings:["Achieve More. Fast.","With","Expert Thinking. "],
    typeSpeed:100,
    backSpeed:100,
    loop:true,
    
});
//type animation end

//slick slider start
$('.responsive').slick({
    dots: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
//slick slider end


//feedback courausel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        slideBy: 1,
        margin: 10,
        items: 1,
        loop: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            425: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
              items: 2
            }
        }

    });
});
//feedback courausel end

//go to top
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $('.fa-angle-up').css({
                "opacity":"1", "pointer-events":"auto"
            });
        }
        else{
            $('.fa-angle-up').css({
                "opacity":"0", "pointer-events":"none"
            });
        }
    });
    $('.fa-angle-up').click(function(){
        $('html').animate({scrollTop:0}, 1400)
    });
});
//go to top end



let searchForm = document.querySelector('.search-div');

document.querySelector('#searchh').onclick = () =>{
    searchForm.classList.toggle('active');
    
}