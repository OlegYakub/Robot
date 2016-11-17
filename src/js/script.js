
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

$( function() {
  $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
  $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
});










function line() {
  var a = document.getElementById('line-p');
  // alert(a);
  // var b = a.style.width - 1px;
  a.style.width = a.style.width - '1px';
};




var butGr = document.getElementById('but-graf');

butGr.onclick = setInterval(line, 2000);

