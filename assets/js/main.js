/*
	Helios by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 960px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)',
		smobile: '(max-width: 480px)'
	});

	$(function() {
		var	$window = $(window),
			$body = $('body'),
			$banner = $('#banner');

		$window.on('load', function() {
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
		var a_block = $("#nav").find(".active").attr('data-category');
		$('#banner .description').each(function(){
			var c_block = $(this);
			var sh_block = $(this).attr('data-category');

			if(a_block == sh_block){
				$(c_block).toggleClass("fadeInRight animated");
				setTimeout(function(){
					$(c_block).show();
				},200);
			} else{
				$(c_block).removeClass("fadeInRight");
				setTimeout(function(){
					$(c_block).hide().removeClass("animated");
				},200); 
			} 
		});

		$('.image img').each(function(){
			var c_block = $(this);
			var sh_block = $(this).attr('data-category');

			if(a_block == sh_block){
				$(c_block).toggleClass("fadeIn animated");
				setTimeout(function(){
					$(c_block).show();
				},200);
			} else{
				$(c_block).removeClass("fadeIn");
				setTimeout(function(){
					$(c_block).hide().removeClass("animated");
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

		      // "singleItem:true" is a shortcut for:
		      // items : 1, 
		      // itemsDesktop : true,
		      // itemsDesktopSmall : true,
		      // itemsTablet: true,

			});
			$('.owl-page').last().hide();
			$('.download').parent().hide();
			$('.owl-carousel').trigger('resize.owl.carousel');
			$('.item').show();	
			$('.download-section').show();
			
		} else {
			activeBlock();
			$('.download-section').hide();
		}

		var owl = $('.owl-carousel');
		$(window).resize(function(){
			if ($('body').outerWidth() > 737) {
				$('#owl-demo').removeClass('owl-theme');
				activeBlock();
				$('.download-section').hide();
				$('.download').parent().show().removeClass('owl-item');
			} else {
				$('#owl-demo').addClass('owl-theme');
				owl.trigger('resize.owl.carousel');
				console.log($('.item').attr('class'));
				$('.item').show();	
				$('.download').parent().hide().removeClass('owl-item');
				$('.download-section').show();
			}
			$('.owl-page').last().hide();
		});
		

		
		new WOW().init();
		
		//Маска ввода в INPUT
		$("#iphone").mask("+7 999 999 99 99");	

		// CSS polyfills (IE<9).
		if (skel.vars.IEVersion < 9)
			$(':last-child').addClass('last-child');

		$('.scrolly').scrolly(); // Scrolly кнопки

	});

})(jQuery);
