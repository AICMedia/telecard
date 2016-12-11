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
			var pagesContainer = new Swiper('#pages-container-inner', {
				slidesPerView: 1,
				watchSlidesProgress: true,
				watchSlidesVisibility: true,
				pagination: '.swiper-pagination',
				paginationClickable: true
			});

			$(function() {

			    var $el, leftPos, newWidth,
			        $mainNav = $(".links-container");

			    $mainNav.append("<li id='magic-line'></li>");
			    var $magicLine = $("#magic-line");

			    $magicLine
			        .width($(".active").outerWidth())
			        .css("left", $(".active").position().left)
			        .data("origLeft", $magicLine.position().left)
			        .data("origWidth", $magicLine.width());
				
					pagesContainer.on('slideChangeStart', function() {
						$el = $('.active');
						leftPos = $el.position().left;
			        newWidth = $el.outerWidth();
			        $magicLine.stop().animate({
			            left: leftPos,
			            width: newWidth
			        });
					});
			});

			pagesContainer.on('slideChangeStart', function() {
				$('.nav-link').removeClass('active');
				var currentIndex = pagesContainer.activeIndex;
				$('.nav-link:nth-child('+(currentIndex+1)+')').addClass('active');
			});

			$('.nav-link').on('click', function() {
			  var $magicLine = $("#magic-line");
			  $('.nav-link').removeClass('active');
			  $(this).addClass('active');
			  $el = $('.active');
			  leftPos = $el.position().left;
			  newWidth = $el.outerWidth();
			  $magicLine.stop().animate({
			    left: leftPos,
			    width: newWidth
			  });
			  pagesContainer.slideTo($('.nav-link').index($(this)));
			});

			// menu click event
			$('.menuBtn').click(function() {
				$(this).toggleClass('act');
					if($(this).hasClass('act')) {
						$('.mainMenu').addClass('act');
					}
					else {
						$('.mainMenu').removeClass('act');
					}
			});
			$('.mainMenu li').click(function() {
				$('.mainMenu').toggleClass('act');
				$('.menuBtn').toggleClass('act')
			});

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
			var $a_block = $("#nav").find(".active").data('category'),
				$sw_slide = $('.swiper-slide'),
				$active_img = $('.phone img');

			$active_img.each(function(){
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
		activeBlock();
		$('#nav ul li').click(function () {
			$('li.active').removeClass('active');	
			$(this).addClass('active');
			activeBlock();	
		});
				
		var doFullpage = $body.outerWidth();
		new WOW().init();

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
			}
		setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
		$(window).resize( setHeiHeight ); // обновляем при изменении размеров окна

})(jQuery);
