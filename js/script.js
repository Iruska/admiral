$(document).ready(function(){

    $('#scene').parallax();

    $('#nextsection').on('click', function(){
		$target = $($(this).attr('href')).offset().top-30;
		return false;
	});

     
    $("#gallery-slider").owlCarousel({
	    autoPlay: 3000,
	    navigation: true,
	    slideSpeed: 400,
	     
	    items : 4,
	    itemsDesktop : [1080,4],
	    itemsTablet: [718,1],
	    itemsMobile: false
    });

});