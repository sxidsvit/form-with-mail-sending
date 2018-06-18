 
 $(document).ready(function () {

 // Проверка чекнутости инпута у кнопки отправки
  
  $('.formm').each(function(){
    $form = $(this);
    //$form.find('button[type="submit"]').prop('disabled', true);
    if( $(this).find('input[type="checkbox"]').is(':checked') ) {
      $(this).find('.button-block').find('button[type="submit"]').prop('disabled', false);
    } else {
      $(this).find('.button-block').find('button[type="submit"]').prop('disabled', true);
    }
    $form.find('input[type="checkbox"]').click(function(){
      if( $(this).is(':checked') ) {
        $(this).parents('.button-block').find('button[type="submit"]').prop('disabled', false);
      } else {
        $(this).parents('.button-block').find('button[type="submit"]').prop('disabled', true);
      }
    });
  });
  
  // Отправка формы
  
  $(".formm").submit(function() { //Change
      var mobile = $(this).find('input[type=tel]');
      if(!mobile.val() ){ 
          mobile.addClass('error'); 
          return false;
      }
      else {
              var th = $(this);
              $.ajax({
                  type: "POST",
                  // url: "mail.php", //Change
                  // url: "http://bestkuzminki.ru/new/mail.php",
                  url: "https://best.lekua.in.ua/mail.php",
                  data: th.serialize()
              }).done(function() {
                  th.trigger("reset");
                  mobile.removeClass('error');
                  mobile.addClass('done');
                  $('.done-block').addClass('vis');
                  setTimeout(function() {
                      $('.done-block').removeClass('vis');
                      mobile.removeClass('done');
                  }, 4000);
              });
          }
      return false;
  });  // $(".formm").submit

}); // $(document).ready
