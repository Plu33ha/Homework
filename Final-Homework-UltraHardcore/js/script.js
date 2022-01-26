// slider in main__article exp
$('.consistent').on('click', function() {
  $('.exp__text').text("Consolidating many years of experience and practice, the company's lawyers accompany complex projects and achieve a number of important decisions for the industry. Many of them form the practice of applying the law of the sea in Ukraine."); 
  $('.exp__title').text('We turn the idea of legal services');
});

    $('.customer').on('click', function() {
  $('.exp__text').text('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non dolorem, esse, veniam soluta, inventore quasi minus exercitationem sint placeat qui, consectetur. Ut, iusto, dicta. Minus odit nostrum sunt aliquam commodi.'); // либо .text()
  $('.exp__title').text('Customer oriented Heading');
});

    $('.innovative').on('click', function() {
  $('.exp__text').text("Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Reprehenderit sit eum quia voluptatibus nihil, omnis, fuga minus praesentium ea harum, sed eligendi. Fuga iure ad quasi nemo corrupti tenetur eligendi Error blanditiis qui velit soluta ratione non odit quaerat, suscipit commodi iste iusto unde tenetur eum rem! Possimus, vero! Totam, incidunt expedita laudantium magni corporis laboriosam quo sunt et eum?"); // либо .text()
  $('.exp__title').text('Innovative Heading');
});

    $('.business').on('click', function() {
  $('.exp__text').text("Lorem ipsum dolor sit amet, consectetur, adipisicing elit. Possimus animi suscipit hic at laboriosam tempora reprehenderit, nam esse quam, fugit, dolore cupiditate perferendis sequi perspiciatis ratione ex voluptatem rem itaque!Qui, temporibus natus, at fugiat rem minus ut atque ducimus. Quidem temporibus a fuga possimus mollitia, nam, quod? Minus quo blanditiis nemo! Eius alias nihil adipisci temporibus, fuga doloribus ipsa.Dolorum dicta minima porro nihil, aut dolor necessitatibus dolores quis qui? Pariatur, voluptatem quas cupiditate ducimus amet consectetur assumenda vel esse officia voluptas laboriosam libero eveniet, accusamus reprehenderit deserunt fugiat?Nisi, ad maxime delectus magni qui excepturi nesciunt quia recusandae omnis molestias expedita blanditiis amet quos? Delectus consectetur et ad voluptas nam, consequatur voluptates neque aliquam recusandae molestiae. Nihil, voluptates?"); // либо .text()
  $('.exp__title').text('Business oriented heading');
});



    // team slider
    $('.team__slider').slick({
      arrows:false,
      dots:true,
    });
    // advantages slider
    $('.achievments__slider').slick({
      arrows:false,
      dots:true,
    });

// experience buttons
   $(".exp__btn").click(function(e) {
  e.preventDefault();
  $(".exp__btn").removeClass('exp__btn--active');
  $(this).addClass('exp__btn--active');
})

  // burger menu 
  // burger menu
let burger = document.querySelector("#burger-icon");
            let wrapper = document.querySelector("#wrapper");
            burger.onclick = function () {
                wrapper.classList.toggle("menu-open");
            };
// button to scroll down
        $("#scroll-down").click(function() { // ID откуда кливаем
            $('html, body').animate({
                scrollTop: $(".exp").offset().top // класс объекта к которому приезжаем
            }, 1000); // Скорость прокрутки
        });