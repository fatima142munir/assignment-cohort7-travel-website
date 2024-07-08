// js for slider
$(document).ready(function () {

  if ($(".slider").length > 0) {
    $('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: false,
    });
  }
  // js for FAQ's
  if ($("#beauty").length > 0) {
    $("#beauty").accordion({
      heightStyle: "content"
    });
  }

  // js for form
  $("#simpleForm").validate({
    rules: {
      email: {
        required: true
      },
      name: "required",
      lastName: "required",
      nic: "required",
      travelDate: "required",
      departureCity: "required",
      arrivalCity: "required"
    },
    messages: {
      mail: {
        required: 'Please enter your email',
        email: 'This is not valid email address'
      },
      name: {
        required: 'Name is mandatory'
      }
    }
  });
});

$("form").submit(function () {
  alert("Thank you for CONTACT!");
});



// js for gallery
if ($('[data-fancybox]').length > 0) {
  $('[data-fancybox]').fancybox(
    {
      loop: true,
      buttons: [
        "zoom",
        "share",
        "slideShow",
        "fullScreen",
        "download",
        "thumbs",
        "close"
      ],
      animationEffect: "zoom-in-out",
      transitionEffect: "tube"
    });
}

