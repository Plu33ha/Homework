// burger menu
let burger = document.querySelector("#burger-icon");
            let header = document.querySelector("#header");
            burger.onclick = function () {
                header.classList.toggle("menu-open");
            };

// button to top

$(function() {

 $(window).scroll(function() {

 if($(this).scrollTop() != 0) {

 $('#toTop').fadeIn();
 
 } else {

 $('#toTop').fadeOut();

 }

 });
 
 $('#toTop').click(function() {

 $('body,html').animate({scrollTop:0},800);

 });


 // changing themes
 $('.portfolio__cases').each(function(){
  $('.portfolio__case', this).each(function(i){
    $(this).addClass('portfolio__case' + (i+1))
  })
})
