/*
	Helios by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var settings = {

		// Carousels
			carousels: {
				speed: 4,
				fadeIn: true,
				fadeDelay: 250
			},

	};

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 960px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$banner = $('#banner');

		new WOW().init();

		//Скрипт меню и вывода блоков
		function activeBlock(){
			var a_block = $("#nav").find(".active").attr('data-category');
			console.log("a_block "+a_block);
			$('#banner .inner').each(function(){
				var c_block = $(this);
				var sh_block = $(this).attr('data-category');
				console.log("sh_block "+sh_block);

				/*
				if(a_block == sh_block){
					$(c_block).removeClass('zoomOut').toggleClass("zoomIn animated");
					setTimeout(function(){
						$(c_block).css({"display":"table"});
					},600);
				} else{
					$(c_block).removeClass("zoomIn").addClass('zoomOut');
					setTimeout(function(){
						$(c_block).css({"display":"none"}).removeClass("zoomOut animated");
					},600); 
				} */

				if(a_block == sh_block){
					$(c_block).toggleClass("zoomIn animated");
					setTimeout(function(){
						$(c_block).css({"display":"table"});
					},200);
				} else{
					$(c_block).removeClass("zoomIn");
					setTimeout(function(){
						$(c_block).css({"display":"none"}).removeClass("animated");
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
			$( "#nav" ).slideToggle( "slow", function() {
				$( ".cross" ).hide();
				$( ".hamburger" ).show();
			});
		});
		$('#nav ul').mouseleave(function () {
			default_left = Math.round($('#nav ul li.active').offset().left);
			default_width = $('#nav ul li.active').outerWidth();
			$('#border').stop(false, true).animate({left: default_left, width: default_width},{duration:1500, easing: style});	
		});

		//Маска ввода в INPUT
		$("#iphone").mask("+7 999 999 99 99");

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				mode: 'fade',
				speed: 350,
				noOpenerFade: true,
				alignment: 'center'
			});

		// Scrolly кнопки
			$('.scrolly').scrolly();

		//Анимация меню
		$( ".cross" ).hide();
		$( ".hamburger" ).click(function() {
			$( "#nav" ).slideToggle( "slow", function() {
				$( ".hamburger" ).hide();
				$( ".cross" ).show();
			});
		});

		$( ".cross" ).click(function() {
			$( "#nav" ).slideToggle( "slow", function() {
				$( ".cross" ).hide();
				$( ".hamburger" ).show();
			});
		});
		// Carousels.
			$('.carousel').each(function() {

				var	$t = $(this),
					$forward = $('<span class="forward"></span>'),
					$backward = $('<span class="backward"></span>'),
					$reel = $t.children('.reel'),
					$items = $reel.children('article');

				var	pos = 0,
					leftLimit,
					rightLimit,
					itemWidth,
					reelWidth,
					timerId;

				// Items.
					if (settings.carousels.fadeIn) {

						$items.addClass('loading');

						$t.onVisible(function() {
							var	timerId,
								limit = $items.length - Math.ceil($window.width() / itemWidth);

							timerId = window.setInterval(function() {
								var x = $items.filter('.loading'), xf = x.first();

								if (x.length <= limit) {

									window.clearInterval(timerId);
									$items.removeClass('loading');
									return;

								}

								if (skel.vars.IEVersion < 10) {

									xf.fadeTo(750, 1.0);
									window.setTimeout(function() {
										xf.removeClass('loading');
									}, 50);

								}
								else
									xf.removeClass('loading');

							}, settings.carousels.fadeDelay);
						}, 50);
					}

				// Main.
					$t._update = function() {
						pos = 0;
						rightLimit = (-1 * reelWidth) + $window.width();
						leftLimit = 0;
						$t._updatePos();
					};

					if (skel.vars.IEVersion < 9)
						$t._updatePos = function() { $reel.css('left', pos); };
					else
						$t._updatePos = function() { $reel.css('transform', 'translate(' + pos + 'px, 0)'); };

				// Forward.
					$forward
						.appendTo($t)
						.hide()
						.mouseenter(function(e) {
							timerId = window.setInterval(function() {
								pos -= settings.carousels.speed;

								if (pos <= rightLimit)
								{
									window.clearInterval(timerId);
									pos = rightLimit;
								}

								$t._updatePos();
							}, 10);
						})
						.mouseleave(function(e) {
							window.clearInterval(timerId);
						});

				// Backward.
					$backward
						.appendTo($t)
						.hide()
						.mouseenter(function(e) {
							timerId = window.setInterval(function() {
								pos += settings.carousels.speed;

								if (pos >= leftLimit) {

									window.clearInterval(timerId);
									pos = leftLimit;

								}

								$t._updatePos();
							}, 10);
						})
						.mouseleave(function(e) {
							window.clearInterval(timerId);
						});

				// Init.
					$window.load(function() {

						reelWidth = $reel[0].scrollWidth;

						skel.on('change', function() {

							if (skel.vars.touch) {

								$reel
									.css('overflow-y', 'hidden')
									.css('overflow-x', 'scroll')
									.scrollLeft(0);
								$forward.hide();
								$backward.hide();

							}
							else {

								$reel
									.css('overflow', 'visible')
									.scrollLeft(0);
								$forward.show();
								$backward.show();

							}

							$t._update();

						});

						$window.resize(function() {
							reelWidth = $reel[0].scrollWidth;
							$t._update();
						}).trigger('resize');

					});

			});

	});

})(jQuery);
