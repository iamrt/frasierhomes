$(function() {

/***************Mobile Menu***************/

	$('#mobile-menu').on('click', function() {
		$('nav ul').fadeToggle(600)
		$('button').toggleClass('change-bg')
		$('.icon-bar').toggleClass('change-icon');
	});

	$img = $('.test-pic')
	$pHeight = $('.testimony').height()



});