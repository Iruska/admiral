$(document).ready(function(){
  
    // инициализация слайдера 
    $("#review-slider").owlCarousel({
	    navigation: true,
	    slideSpeed: 400, 
	    items: 3
    });

    // анимация появления блоков
  //   $(window).on('scroll', function(){
		// var scrollpos = $(this).scrollTop() + ($(window).height()/2+200);

  //     if ( $('#js-animate-1') && $('#js-animate-2') && $('#js-animate-3') && $('#js-animate-4') && $('#js-animate-5') && $('#js-animate-6') && $('#js-animate-7') && $('#js-animate-8') ){

  // 		if( (scrollpos > $('#js-animate-1').offset().top) ){
  // 			$('#js-animate-1').addClass('active');
  // 		}
  // 		if( scrollpos > $('#js-animate-2').offset().top ){
  // 			$('#js-animate-2').addClass('active');
  // 		}
  // 		if( scrollpos > $('#js-animate-3').offset().top ){
  // 			$('#js-animate-3').addClass('active');
  // 		}
  //         if( scrollpos > $('#js-animate-4').offset().top ){
  //             $('#js-animate-4').addClass('active');
  //         }
  //         if( scrollpos > $('#js-animate-5').offset().top ){
  //             $('#js-animate-5').addClass('active');
  //         }
  //         if( scrollpos > $('#js-animate-6').offset().top ){
  //             $('#js-animate-6').addClass('active');
  //         }
  //         if( scrollpos > $('#js-animate-7').offset().top ){
  //             $('#js-animate-7').addClass('active');
  //         }
  //         if( scrollpos > $('#js-animate-8').offset().top ){
  //             $('#js-animate-8').addClass('active');
  //         }
  //     }
  //   });

    // открытие и закрытие формы
    $(".js-search-link").click(function(){
        $(".form-search__wrapper").toggleClass('active');
        return false;
    });

    // работа со слайдером карточки теплохода
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
     
    sync1.owlCarousel({
      singleItem : true,
      slideSpeed : 500,
      navigation: true,
      pagination: false,
      afterAction : syncPosition,
      responsiveRefreshRate : 200,
    });
   
    sync2.owlCarousel({
      items : 5,
      pagination: false,
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


    // работа с модальными окнами

    //  вызов окна
    $(".js-get-modal").on("click", function(event){
      event.preventDefault();
      $(".modal-overlay").addClass("modal-overlay--open");
      $(".modal").removeClass("modal--open");
      $("." + $(this).attr("data-modal")).addClass("modal--open");
      $("body, html").addClass("body--hidden");
    })

    // закрытие модальног окна изнутри
    $(".js-close-modal").on("click", function(event){
      event.preventDefault();
      $(this).parents(".modal").removeClass("modal--open");
      $(".modal-overlay").removeClass("modal-overlay--open");
      $("body, html").removeClass("body--hidden");
    })

    // закрытие по ESC
    $(window).on("keydown", function(){
      if (event.keyCode == 27) {
        $(".modal").removeClass("modal--open");
        $(".modal-overlay").removeClass("modal-overlay--open");
        $("body, html").removeClass("body--hidden");
      }
    })

    // автокомплит
    $('#autocomplete').autocomplete({
      serviceUrl: 'service/autocomplete.ashx', // Страница для обработки запросов автозаполнения
      minChars: 2, // Минимальная длина запроса для срабатывания автозаполнения
      delimiter: /(,|;)\s*/, // Разделитель для нескольких запросов, символ или регулярное выражение
      maxHeight: 400, // Максимальная высота списка подсказок, в пикселях
      width: 1166, // Ширина списка
      zIndex: 9999, // z-index списка
      deferRequestBy: 0, // Задержка запроса (мсек), на случай, если мы не хотим слать миллион запросов, пока пользователь печатает. Я обычно ставлю 300.
      params: { country: 'Yes'}, // Дополнительные параметры
      onSelect: function(data, value){ }, // Callback функция, срабатывающая на выбор одного из предложенных вариантов,
      lookup: ['Яхта Palma', 'Теплоход Radisson', 'Теплоход Баттерфляй'] // Список вариантов для локального автозаполнения
    });

});