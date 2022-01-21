// burger menu
let burger = document.querySelector("#burger-icon");
            let header = document.querySelector("#adaptive");
            burger.onclick = function () {
                header.classList.toggle("menu-open");
            };

// button to top

$("#toTop").click(function () {
   //1 second of animation time
   //html works for FFX but not Chrome
   //body works for Chrome but not FFX
   //This strange selector seems to work universally
   $("html, body").animate({scrollTop: 0}, 1000);
});
