

$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });
  

$(document).on('ready', function() {


 
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll:1,
  });
  
  
})