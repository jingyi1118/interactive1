$('document').ready(function(){
	$('body').click(function(){
		$('body').toggleClass('colorful');  
	});
});


$('#on').click(function(e) {
$('#border-radius').addClass('#border-radius2');
});

$('#off').click(function(e) {
$('#border-radius2').removeClass('#border-radius');
});