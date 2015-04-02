$(document).ready(function(){
     
    $("#review-slider").owlCarousel({
	    navigation: true,
	    slideSpeed: 400, 
	    items: 3,
    });

    $(window).on('scroll', function(){
		var scrollpos = $(this).scrollTop() + ($(window).height()/2+200);
		if( scrollpos > $('#js-animate-1').offset().top ){
			$('#js-animate-1').addClass('active');
		}
		if( scrollpos > $('#js-animate-2').offset().top ){
			$('#js-animate-2').addClass('active');
		}
		if( scrollpos > $('#js-animate-3').offset().top ){
			$('#js-animate-3').addClass('active');
		}
        if( scrollpos > $('#js-animate-4').offset().top ){
            $('#js-animate-4').addClass('active');
        }
        if( scrollpos > $('#js-animate-5').offset().top ){
            $('#js-animate-5').addClass('active');
        }
        if( scrollpos > $('#js-animate-6').offset().top ){
            $('#js-animate-6').addClass('active');
        }
        if( scrollpos > $('#js-animate-7').offset().top ){
            $('#js-animate-7').addClass('active');
        }
        if( scrollpos > $('#js-animate-8').offset().top ){
            $('#js-animate-8').addClass('active');
        }
	})

    $(".js-search-link").click(function(){
        $(".form-search__wrapper").toggleClass('active');
    });

});