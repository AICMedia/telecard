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

		//Полноэкранный скроллинг
		var doFullpage = $body.outerWidth();
        if (doFullpage > 737) {
			$('#fullpage').fullpage({
				anchors: ['block1', 'block2', 'block3', 'block4'],
	            css3: true,
	            scrollingSpeed: 1000,
			    easing: 'linear',
			    easingcss3: 'ease',
			    scrollBar:true
			  });
		}
		new WOW().init();

		//Скрипт меню и вывода блоков
		function activeBlock(){
			var a_block = $("#nav").find(".active").attr('data-category');
			$('#banner .description').each(function(){
				var c_block = $(this);
				var sh_block = $(this).attr('data-category');

				if(a_block == sh_block){
					$(c_block).toggleClass("fadeInRight animated");
					setTimeout(function(){
						$(c_block).css({"display":"table-cell"});
					},200);
				} else{
					$(c_block).removeClass("fadeInRight");
					setTimeout(function(){
						$(c_block).css({"display":"none"}).removeClass("animated");
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
		activeBlock();
		
		//Бегунок для меню
		var style = 'easeOutExpo';
		var default_left = Math.round($('#nav ul li.active').offset().left);
		var default_top = $('#nav').height() + $('#nav ul').height() + 40;
		var default_width = $('#nav ul li.active').outerWidth();
		$('#border').css({left: default_left, top: default_top, width: default_width});	
		$('#nav ul li').hover(function () {
			left = Math.round($(this).offset().left);
			width = $(this).outerWidth();
			$('#border').stop(false, true).animate({left: left, width: width},{duration:500, easing: style});	
		}).click(function () {
			$('#nav ul li').removeClass('active');	
			$(this).addClass('active');
			activeBlock();	
		});
		$('#nav ul').mouseleave(function () {
			default_left = Math.round($('#nav ul li.active').offset().left);
			default_width = $('#nav ul li.active').outerWidth();
			$('#border').stop(false, true).animate({left: default_left, width: default_width},{duration:1500, easing: style});	
		});

		//Маска ввода в INPUT
		$("#iphone").mask("+7 999 999 99 99");	

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		

		// Scrolly кнопки
			$('.scrolly').scrolly();

		//Анимация меню
		$("#nav ul li").on("tap", function(){
			var screenwidth = $("#nav").width();
			if (screenwidth < 736) {
				$( "#nav" ).slideToggle( 500, function() {
					$( ".cross" ).hide();
					$( ".hamburger" ).show();
				});
			}
		})
			
		$( ".cross" ).hide();
		$( ".hamburger" ).click(function() {
			$( "#nav" ).slideToggle( 500, function() {
				$( ".hamburger" ).hide();
				$( ".cross" ).show();
			});
		});

		$( ".cross" ).click(function() {
			$( "#nav" ).slideToggle( 500, function() {
				$( ".cross" ).hide();
				$( ".hamburger" ).show();
			});
		});

	});

})(jQuery);
