$(document).ready(function(){
  $('.nav ul.toggle').click(function(){
      $(this).toggleClass('active');
      $('.nav .sidebar').toggleClass('active');
  })
})


$(document).ready(function(){
  $('#item1').click(function(){
      $(this).toggleClass('active');
      $('#item1').toggleClass('active');
  })
})





$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });

  $(document).ready(function(){
    $(".hum-links").click(function(){
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


function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
} 


// modal

const inputField = document.querySelector('#price-input');
const priceBtns = document.querySelectorAll('.opts button');


for (let i = 0; i < priceBtns.length; i++) {
    priceBtns[i].addEventListener('click',()=>{
        for (let e = 0; e < priceBtns.length; e++) {
            priceBtns[e].classList.remove('active');   
        }
        priceBtns[i].classList.toggle('active');
        if (priceBtns[i].textContent.toLowerCase() == 'custom'){
            inputField.value = "$"
        }else{
            inputField.value = priceBtns[i].textContent
        }
        input.focus();
    })
    
}



$(document).on('ready', function() {


 
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  
  
})
