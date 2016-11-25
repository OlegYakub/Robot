
  $('.marquee').marquee({
  duplicated: true,
  duration: 9000
    });
  $( function() {
    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
});

$('.post-slide, .slick-partner').slick({
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

  $('.aside__link').click(function(){
      $('.keygen__title, .aside').hide("fast"); 
      $('.platforma, .tab__, .sdelki').css("width", "920px");
      $('.show-menu').css('display', 'block');
      $('.platforma-item').css('marginLeft', '195px');
  });

  $('.show-menu').click(function(){
    $('.show-menu').hide(300);
    $('.keygen__title, .aside').show("fast");
    $('.platforma, .tab__, .wrapper-broker, .sdelki').css("width", "725px");
    $('.platforma-item').css('marginLeft', '0px');
    $('.broker').css({'width': '990px', 'transform': 'scale(0.7349)  translateX(-179px) translateY(-218px)', 'marginBottom': '-324px'});
  });

  $('#ui-id-1').click(function(){
        $('#ui-id-1').toggleClass("aside__link--active");
        var links = $('.aside__item a:not(#ui-id-1)')
        links.removeClass("aside__link--active");
        $('.tree__span').text("Платформа");
        $('.rebus').css('display', 'flex')
  });
  $('#ui-id-2').click(function(){
        $('#ui-id-2').toggleClass("aside__link--active");
        var links = $('.aside__item a:not(#ui-id-2)')
        links.removeClass("aside__link--active");
        $('.tree__span').text("Мой брокер");
        $('.rebus').css('display', 'none')
        $('.wrapper-broker').css("width", "970px");
        $('.broker').css({'width': 'auto', 'transform': 'none', 'marginBottom': '0px'});
  });
  $('#ui-id-3').click(function(){
        $('#ui-id-3').toggleClass("aside__link--active");
        var links = $('.aside__item a:not(#ui-id-3)')
        links.removeClass("aside__link--active");
        $('.tree__span').text("Ввод и вывод средств");
        $('.rebus').css('display', 'none');
        $('.wrapper-broker').css("width", "970px");
        $('.broker').css({'width': 'auto', 'transform': 'none', 'marginBottom': '0px'});
  });
  $('#ui-id-4').click(function(){
        $('#ui-id-4').toggleClass("aside__link--active");
        var links = $('.aside__item a:not(#ui-id-4)')
        links.removeClass("aside__link--active");
        $('.tree__span').text("Мои сделки");
        $('.rebus').css('display', 'none')
  });
  $('#ui-id-5').click(function(){
        $('#ui-id-5').toggleClass("aside__link--active");
        var links = $('.aside__item a:not(#ui-id-5)')
        links.removeClass("aside__link--active");
        $('.tree__span').text("Изменить личные данные");
        $('.rebus').css('display', 'none')
  });
  $('#ui-id-6').click(function(){
        $('#ui-id-6').toggleClass("aside__link--active");
        var links = $('.aside__item a:not(#ui-id-6)')
        links.removeClass("aside__link--active");
        $('.tree__span').text("Изменить пароль");
        $('.rebus').css('display', 'none')
  });
   $('#ui-id-7').click(function(){
        $('#ui-id-7').toggleClass("aside__link--active");
        var links = $('.aside__item a:not(#ui-id-7)')
        links.removeClass("aside__link--active");
        $('.tree__span').text("Тикет");
        $('.rebus').css('display', 'none')
  });

});
//$('.select').styler();  

/*==============popup-reg=====================*/

$('#reg').click(function(){
  $('.popup-reg__wrapper').fadeIn(400,
      function(){
        $('.popup-reg') 
          .css('display', 'flex')
          .animate({opacity: 1, top: '10%'}, 200);
      });
 
});
$('.close a').click( function(){ 
    $('.popup-reg')
      .animate({opacity: 0, top: '5%'}, 200,  
        function(){ 
          $(this).css('display', 'none'); 
          $('.popup-reg__wrapper').fadeOut(400);
        }
      );
  });