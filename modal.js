$('[data-target="#myModal"]').on('click', function (e) {
  e.preventDefault();

  var _linky = $(this).attr('href');
  var _target = $(this).data('target'); 
  var $target = $(_target);

  if ($target.length > 0) {
    
      $target.find('iframe').attr('src', 'about:blank');

      var _isRemote = false;
      if (_linky.indexOf('http') > -1) {
          _isRemote = true;
      }

      if (!_isRemote) {
          if (_linky.indexOf('?') > -1) {
              _linky += '&tmpl=component';
          } else {
              _linky += '?tmpl=component';
          }
      }
    
      $target.find('iframe').attr('src', _linky).load(function() {
          $target.modal('show');
      });
  }
});

$('body').on('hidden.bs.modal', '.modal', function () {
  $(this).removeData('bs.modal');
});