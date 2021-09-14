$(function () {

  $('.header__logo, .menu__item a, .contacts').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.contacts__date').flatpickr({
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    disableMobile: true,
  });

  $('.menu__btn, .menu a').on('click', function () {
    $('.header__inner').toggleClass('header__inner--active');
  });

});