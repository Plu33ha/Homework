let burger = document.querySelector("#burger-icon");
            let header = document.querySelector("#header");
            burger.onclick = function () {
                header.classList.toggle("menu-open");
            };
            

            $(document).ready(function(){
    $('.slider').slick({
        autoplay:true,
        speed:300,
        arrows:false,
        dots:false,
    });
});