$(function() {

/***************Mobile Menu***************/

	$('#mobile-menu').on('click', function() {
		$('nav ul').fadeToggle(600)
		$('button').toggleClass('change-bg')
		$('.icon-bar').toggleClass('change-icon');
	});

	$img = $('.test-pic')
	$pHeight = $('.testimony').height()


/*************** Same height for all imgs in Testimonies **************/

	$firstHeight = $('#first-pic').height()
	$testimonyImg = $('.testimony > a > img')

	$testimonyImg.css("height", $firstHeight);

/*************** Same height for all imgs in Projects **************/

	// $imgHeight = $('#firstImg').height()
	// $projImgs = $(".project > img")

	$(".project > img").css("height", $('#firstImg').height())

/***************Footer to Bottom***************/
	
	$docHeight = $(document).height();
	$winHeight = $(window).height();

	if ($docHeight > $winHeight) {
		$('.wrapper').css('min-height', $docHeight);
	}	else {
		$('.wrapper').css('min-height', $winHeight);
	};
});