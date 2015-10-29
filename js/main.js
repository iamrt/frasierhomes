$(function() {

/***************Mobile Menu***************/

	$('#mobile-menu').on('click', function() {
		$('nav ul').fadeToggle(600)
		$('button').toggleClass('change-bg')
		$('.icon-bar').toggleClass('change-icon');
	});


/***************Footer to Bottom***************/
	
	$docHeight = $(document).height();
	$winHeight = $(window).height();

	if ($docHeight > $winHeight) {
		$('.wrapper').css('min-height', $docHeight);
	}	else {
		$('.wrapper').css('min-height', $winHeight);
	};
});