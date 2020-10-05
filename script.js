$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav
      .toggleClass("bg-light", $(this).scrollTop() > $nav.height())
      .toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
