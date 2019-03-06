    $('document').ready(function(){
      $('body').click(function(){
        $('body').toggleClass('colorful');  
      });
    });
$('#on').click(function(e) {
    $('#square').addClass('rounded');
});

$('#off').click(function(e) {
    $('#square').removeClass('rounded');
});