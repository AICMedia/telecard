/*
	Helios by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$banner = $('#banner');

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 960px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)',
		smobile: '(max-width: 480px)'
	});


		

		$(window).on('load', function() {
			$(".preloader").fadeOut(600);
			$('#header .inner').addClass("animated fadeInDown");
		});
		
		var isiPad = navigator.userAgent.match(/iPad/i) != null;
	    if ((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPod") != -1)){
	    	window.location.replace("https://appsto.re/ru/lbWV6.i");
	    }

	    if (/Android/i.test(navigator.userAgent)) {
    		window.location.replace("https://play.google.com/store/apps/details?id=ru.bpc.mobilebank.android");
  		}

	//Скрипт меню и вывода блоков
		function activeBlock(){
			var $a_block = $("#nav").find(".active").data('category');
			$('#banner .description').each(function(){
				var $c_block = $(this);
				var $sh_block = $(this).data('category');

				if($a_block == $sh_block){
					$c_block.toggleClass("fadeInRight animated");
					setTimeout(function(){
						$c_block.show();
					},200);
				} else{
					$c_block.removeClass("fadeInRight");
					setTimeout(function(){
						$c_block.hide().removeClass("animated");
					},200); 
				} 
			});

			$('.phone img').each(function(){
				var $c_block = $(this);
				var $sh_block = $(this).data('category');

				if($a_block == $sh_block){
					$c_block.toggleClass("fadeIn animated");
					setTimeout(function(){
						$c_block.show();
					},200);
				} else{
					$c_block.removeClass("fadeIn");
					setTimeout(function(){
						$c_block.hide().removeClass("animated");
					},200); 
				} 
			});
		
		}

		$('#nav ul li').click(function () {
			$('li.active').removeClass('active');	
			$(this).addClass('active');
			activeBlock();	
		});
				
		var doFullpage = $body.outerWidth();
		
        if (doFullpage < 737) {
			$("#owl-demo").owlCarousel({
		      slideSpeed : 300,
		      paginationSpeed : 400,
		      singleItem : true,
		      itemsMobile : true
			});
			$('.owl-carousel').trigger('resize.owl.carousel');
			$('.item').show();	
			
		} else {
			activeBlock();
		}

		var owl = $('.owl-carousel');
		function owl(){
			$('#owl-demo').addClass('owl-theme');
				owl.trigger('resize.owl.carousel');
				owl.trigger('resized.owl.carousel');
				owl.trigger('refresh.owl.carousel');
				owl.trigger('refreshed.owl.carousel');
		}

		$(window).resize(function(){
			if ($('body').outerWidth() > 737) {
				$('#owl-demo').removeClass('owl-theme');
				activeBlock();
			} else {
				owl();
				console.log($('.item').attr('class'));
			}
		});
		
		new WOW().init();
		
		//Маска ввода в INPUT
		$("#iphone").mask("+7 999 999 99 99");	

		// CSS polyfills (IE<9).
		if (skel.vars.IEVersion < 9)
			$(':last-child').addClass('last-child');

		$('.scrolly').scrolly(); // Scrolly кнопки

		function setHeiHeight() {
			if ($('body').outerWidth() > 737){
				$('#header').css({
		        	height: $(window).height() - ($(window).height() / 4.5) + 'px'
		    	});
			} else {
				$('#header').css({
		        	height: $(window).height() - ($(window).height() / 8) + 'px'
		    	});
			}
		    

		    $('#banner').css({
		        height: $(window).height() + 'px'
		    });
		    $('.preloader').css({
		        height: $(window).height() + 'px'
		    });
		    if ($('body').outerWidth() > 737) {
			    $('.owl-wrapper-outer').css({
			        width: ($(window).width() / 3)+ 'px'
			    });
			} else if ($('body').outerWidth() > 480){
				 $('.owl-wrapper-outer').css({
			        width: ($(window).width() / 2)+ 'px'
			    });
			} else {
				$('.owl-wrapper-outer').css({
			        width: ($(window).width() / 1.4)+ 'px'
			    });
			}
		}
		setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
		$(window).resize( setHeiHeight ); // обновляем при изменении размеров окна

})(jQuery);
