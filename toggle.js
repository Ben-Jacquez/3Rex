$(".btn-toggle").on("click", function() {
    $('.dropdown-menu').toggleClass('open');
  });
  $(".dropdown-menu li").on("click", function() {
    $('.btn-toggle').text($(this).text());
    $('.dropdown-menu').removeClass('open');
  });

  