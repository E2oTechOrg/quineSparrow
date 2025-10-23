$(document).ready(function () {
  $(".scroll-to").on("click", function (event) {
   event.preventDefault();
   let id  = $(this).attr('href'),
   top = $(id).offset().top + -50;
   $('.modal-menu').removeClass('open');
   $('body,html').animate({scrollTop: top}, 500);
  });

  

  

  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.first-top').addClass('fixed');
    } else {
      $('.first-top').removeClass('fixed');
    }
  });

  $('.wpcf7-submit').on('click', function (e) {
      let form = $(this).closest('form');
      let isValid = true;

      form.find('.wpcf7-validates-as-required').each(function () {
          if (!$(this).val().trim()) {
              $(this).addClass('wpcf7-not-valid');
              isValid = false;
          } else {
              $(this).removeClass('wpcf7-not-valid');
          }
      });

      let wrapper = $(this).closest('.brief-form');
      let checkbox = $(wrapper).find('input[type=checkbox]');
      let check_label = $(wrapper).find('.brief__policy');

      if (checkbox.prop('checked')) {
          $(check_label).removeClass('error');
      } else {
          isValid = false;
          $(check_label).addClass('error');

          // Прокрутка к элементу с отступом сверху
          $('html, body').animate({
              scrollTop: $(check_label).offset().top - 100 // можно изменить отступ
          }, 600);
      }

      if (!isValid) {
          return false;
      }
  });

  $('form').on('wpcf7mailsent',function(){
    $('.modal-window').removeClass('open');
    $('.modal-thanks').addClass('open');
    ym(100441928,'reachGoal','Zayavka');
   })

  $('.variety-block').on('click', function() {
    let block = this;
    let index = $('.variety-block').index(block);
    let modal = $('.modal-sliders')[index];

    let photos_elements = $(modal).find('[data-src]');

    $(photos_elements).each(function() {
      let src = $(this).data('src'); // Получаем значение data-src

      // Проверяем, существует ли значение и является ли оно корректным URL

      $(this).css('background-image', `url(${src})`);

      
    });

    $(modal).addClass('open');
    return false;
  })

  $('.scroll-parent__btn').on('click', function() {
    let block = $(this).closest('.scroll-parent');
    block = $(block).find('.scroll-wrapper');
    $(block).toggleClass('open');

    let block_after = $(this).closest('.scroll-parent');
    $(block_after).toggleClass('opened');

    if ($(block).hasClass('open')) {
      $(this).text('Hide');
    }
    else{
      $(this).text('Show More');
    }

    return false;
  })

  

  let first_video = videojs(document.querySelector('#first-video'));


  if ($(window).width() < 960) {
    let inputs = $('.brief-label input');

    let input_1 = inputs[0];
    let input_2 = inputs[1];
    let input_3 = $('.brief-label textarea');

    $(input_1).attr("placeholder", "Your Name");
    $(input_2).attr("placeholder", "Your Phone");
    $(input_3).attr("placeholder", "Comment");

    $('.team-items').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.team-prev'),
      nextArrow: $('.team-next'),
    });

    

    first_video.src({ 
      src: 'https://royalevent.ru/wp-content/themes/Royal/assets/img/video/mob/RW-30-sec-Vertical_v2.m3u8',
      type: 'application/x-mpegURL',
    });

  }
  else{

    first_video.src({ 
      src: 'https://royalevent.ru/wp-content/themes/Royal/assets/img/video/video.m3u8',
      type: 'application/x-mpegURL',
    });

  }

  first_video.play();

  $(document).mouseup( function(e){ // событие клика по веб-документу
    let modal = $('.modal-window .inner'); // тут указываем ID элемента
    if ( !modal.is(e.target) // если клик был не по нашему блоку
        && modal.has(e.target).length === 0 ) { // и не по его дочерним элементам
        $('.modal-window').removeClass('open');
    }
  });

  $('.open-menu').on('click', function() {
    $('.modal-menu').addClass('open');
    return false;
  })

  $('.modal-window__close').on('click', function() {
    $('.modal-window').removeClass('open');
    return false;
  })

  $('.open-callback').on('click', function() {
    $('.modal-menu').removeClass('open');
    $('.modal-callback-open').addClass('open');
    return false;
  })

  $('.story-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  centerMode: true,
	  variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.details-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  variableWidth: true,
	  prevArrow: $('.details-prev'),
	  nextArrow: $('.details-next'),
    responsive: [
      {
        breakpoint: 680,
        settings: {
          variableWidth: false,
        }
      }
    ]
  });


  let events_sliders = $('.events-slider');

  for (let i = events_sliders.length - 1; i >= 0; i--) {
    let slider = events_sliders[i];
    let nav_slider = $(slider).closest('.events-wrapper');
    nav_slider = $(nav_slider).find('.events-navslider');

    let wrapper = $(slider).closest('.events-wrapper');

    let arrow_r = $(wrapper).find('.events-next');
    let arrow_l = $(wrapper).find('.events-prev');

    $(slider).slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: nav_slider,
      speed: 700,
      fade: true,
      cssEase: 'linear',
    });

    $(nav_slider).slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: slider,
      focusOnSelect: true,
      prevArrow: arrow_l,
      nextArrow: arrow_r,
      responsive: [
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 4,
          }
        }
      ]
    });

  }

  $('.notification').css("display", "flex");
  $('.notification').hide();

  $('.notification').show();
  $('.notification').show();

  // Проверка, дал ли пользователь уже согласие
  if (!localStorage.getItem('cookieConsent')) {
      $('.notification').show(); // Показываем уведомление
  } else {
      $('.notification').hide(); // Скрываем уведомление, если уже подтверждено
  }

  // Обработка нажатия кнопки подтверждения
  $('.notification__close').on('click', function() {
      localStorage.setItem('cookieConsent', 'true'); // Сохраняем согласие
      $('.notification').fadeOut(); // Скрываем уведомление
  });
  
  AOS.init({
    offset: 0,
  });
})
// important