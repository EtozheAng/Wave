$(function(){

  $(document).scroll(function () {
    $(window).scrollTop() > 50 ? $('.header__top').addClass('header__top--bg') : $('.header__top').removeClass('header__top--bg');
  });

  $(".menu a").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });


  $('.slider-blog__box').slick({
    dots: true,
    arrows: false
    
  });
  
  $('.menu__btn, .menu a').on('click',function() {
    $('.header__top').toggleClass
    ('header__top--active');
  })
  
  
  var mixer = mixitup('.gallery__images');
});