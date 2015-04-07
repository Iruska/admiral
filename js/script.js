$(document).ready(function(){
     
    $("#review-slider").owlCarousel({
	    navigation: true,
	    slideSpeed: 400, 
	    items: 3
    });

    $(window).on('scroll', function(){
		var scrollpos = $(this).scrollTop() + ($(window).height()/2+200);

        if ( $('#js-animate-1') && $('#js-animate-2') && $('#js-animate-3') && $('#js-animate-4') && $('#js-animate-5') && $('#js-animate-6') && $('#js-animate-7') && $('#js-animate-8') ){

    		if( (scrollpos > $('#js-animate-1').offset().top) ){
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

        }
	});

    $(".js-search-link").click(function(){
        $(".form-search__wrapper").toggleClass('active');
        return false;
    });


    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
     
      sync1.owlCarousel({
        singleItem : true,
        slideSpeed : 1000,
        navigation: true,
        pagination:false,
        afterAction : syncPosition,
        responsiveRefreshRate : 200,
      });
     
      sync2.owlCarousel({
        items : 5,
        // itemsDesktop      : [1199,10],
        // itemsDesktopSmall     : [979,10],
        // itemsTablet       : [768,8],
        // itemsMobile       : [479,4],
        pagination:false,
        responsiveRefreshRate : 100,
        afterInit : function(el){
          el.find(".owl-item").eq(0).addClass("synced");
        }
      });
     
      function syncPosition(el){
        var current = this.currentItem;
        $("#sync2")
          .find(".owl-item")
          .removeClass("synced")
          .eq(current)
          .addClass("synced")
        if($("#sync2").data("owlCarousel") !== undefined){
          center(current)
        }
      }
     
      $("#sync2").on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo",number);
      });
     
      function center(number){
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for(var i in sync2visible){
          if(num === sync2visible[i]){
            var found = true;
          }
        }
     
        if(found===false){
          if(num>sync2visible[sync2visible.length-1]){
            sync2.trigger("owl.goTo", num - sync2visible.length+2)
          }else{
            if(num - 1 === -1){
              num = 0;
            }
            sync2.trigger("owl.goTo", num);
          }
        } else if(num === sync2visible[sync2visible.length-1]){
          sync2.trigger("owl.goTo", sync2visible[1])
        } else if(num === sync2visible[0]){
          sync2.trigger("owl.goTo", num-1)
        }
        
      }

});