$(document).ready(function () {
  $(".delivery").on("click", function (e) {
    e.preventDefault();
    $("body,html").animate(
      {
        screenTop: $($(this).attr(href)).offset().top,
      },
      500
    );
  });

  $(".pop").on("click", function (e) {
    e.preventDefault();
    $("body,html").animate(
      {
        screenTop: $($(this).attr(href)).offset().top,
      },
      500
    );
  });

  $(".city").on("click", function (e) {
    e.preventDefault();
    $("body,html").animate(
      {
        screenTop: $($(this).attr(href)).offset().top,
      },
      500
    );
  });

  $(".signup").on("click", function (e) {
    e.preventDefault();
    $("body,html").animate(
      {
        screenTop: $($(this).attr(href)).offset().top,
      },
      500
    );
  });
});
