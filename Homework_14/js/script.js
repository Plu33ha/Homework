let burger = document.querySelector("#burger-icon");
            let header = document.querySelector("#header");
            burger.onclick = function () {
                header.classList.toggle("menu-open");
            };

            $('.slider').slick({
                 arrows: false,
                 dots: false,
                 slidesToShow:1,

  infinite: true,
  speed: 500,
            });