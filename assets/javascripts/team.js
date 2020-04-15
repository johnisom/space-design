$(() => {
  $('li > figure').on('click', function() {
    $(this).nextAll().fadeIn(500);
  });

  $('div.close, .modal-layer').on('click', function() {
    $(this).closest('li').find('.modal, .modal-layer').fadeOut(500);
  });
});
