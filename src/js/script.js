
 $( function() {
    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
});


$('.post-slide').slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: '20px',
    responsive: [
      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
     
    ]
});
$(document).ready(function(){ 
  $('#ui-id-1').click(function(){
        $('#ui-id-1').toggleClass("aside__link--active");
        var links = $('.aside__item a:not(#ui-id-1)')
        links.removeClass("aside__link--active");
        $('.tree__span').text("Платформа");
  });
  $('#ui-id-2').click(function(){
        $('#ui-id-2').toggleClass("aside__link--active");
        var links = $('.aside__item a:not(#ui-id-2)')
        links.removeClass("aside__link--active");
        $('.tree__span').text("Сводка");
  });
  $('#ui-id-3').click(function(){
        $('#ui-id-3').toggleClass("aside__link--active");
        var links = $('.aside__item a:not(#ui-id-3)')
        links.removeClass("aside__link--active");
        $('.tree__span').text("Изменить личные данные");
  });
  $('#ui-id-4').click(function(){
        $('#ui-id-4').toggleClass("aside__link--active");
        var links = $('.aside__item a:not(#ui-id-4)')
        links.removeClass("aside__link--active");
        $('.tree__span').text("Изменить пароль");
  });
  $('#ui-id-5').click(function(){
        $('#ui-id-5').toggleClass("aside__link--active");
        var links = $('.aside__item a:not(#ui-id-5)')
        links.removeClass("aside__link--active");
        $('.tree__span').text("Мои сделки");
  });
  $('#ui-id-6').click(function(){
        $('#ui-id-6').toggleClass("aside__link--active");
        var links = $('.aside__item a:not(#ui-id-6)')
        links.removeClass("aside__link--active");
        $('.tree__span').text("Мои брокер");
  });
   $('#ui-id-7').click(function(){
        $('#ui-id-7').toggleClass("aside__link--active");
        var links = $('.aside__item a:not(#ui-id-7)')
        links.removeClass("aside__link--active");
        $('.tree__span').text("Связаться с аналитиком");
  });


});
//$('.select').styler();  






