﻿jQuery(function($){

'use strict';



    // ----------------------------------------------
    // Preloader
    // ----------------------------------------------
	(function () {
	    $(window).load(function() {
	        $('#pre-status').fadeOut();
	        $('#st-preloader').delay(350).fadeOut('slow');
	    });
	}());

    // ----------------------------------------------
    // Overlay Click event
    // ----------------------------------------------


	console.log('b');
	//var i;
	//for (i = 0; i < item.length; i++) {
	//    console.log[i];
	//    item[i].addEventListener("click", showOverlay(), false);

    //}

	$('.element-item').on('click', function () {
	    console.log('kaka');
	    $('#overlay').show();

	    showDish(this);
	    closeOverlay();
	});

	function showDish(dish) {
	    $('#overlay').empty();
	    $('#overlay').append('<div class="container flexChild">' +
            '<div class="row">' + '<div id="close">' +
             '<img src="' + $(dish).attr('data-id') + '" />' +
             '<h1>' + $(dish).attr('name') + '</h1>' +
             '<p>' + $(dish).attr('data-content') + '</p>' +
             '</div></div></div>');
	}

	function closeOverlay() {
	    $('#overlay').click(function (event) {
	        if (!$(event.target).closest('#close').length) {
	            if ($('#close').is(":visible")) {
	                $('#overlay').hide();
	            }
	            else {
	            }
	        }
	    });
	}

    // ---------------------------------------------- 
    //  magnific-popup
    // ----------------------------------------------
    // SAVE THIS FOR PRODUCT PAGES!!!! IT'S AWESOME
    //(function () {

	//	$('.portfolio-items').magnificPopup({ 
	//		delegate: 'a',
	//		type: 'image',
	//		// other options
	//		closeOnContentClick: false,
	//		closeBtnInside: false,
	//		mainClass: 'mfp-with-zoom mfp-img-mobile',

	//		gallery: {
	//			enabled: false
	//		},
	//		zoom: {
	//			enabled: true,
	//			duration: 300, // don't foget to change the duration also in CSS
	//			opener: function(element) {
	//				return element.find('i');
	//			}
	//		}

	//	});

	//}()); 



    // ---------------------------------------------- 
    // testamonials
    // ---------------------------------------------- 
	(function () {
		$('.ubr-counter').counterUp({
		    delay: 10,
		    time: 1500
		});
	}()); 



    // ---------------------------------------------- 
    //  isotope filter
    // ---------------------------------------------- 
	(function () {
		var winDow = $(window);
		var $container=$('.portfolio-items');
		var $filter=$('.filter');

		try{
			$container.imagesLoaded( function(){
				//$container.show();
				$container.isotope({
					filter:'.none',
					layoutMode:'masonry',
					animationOptions:{
						duration:750,
						easing:'linear'
					}
				});
			});
		} catch(err) {
		}

		winDow.bind('resize', function(){
			var selector = $filter.find('a.active').attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {
			}
			return false;
		});

		$filter.find('a').click(function(){
			var selector = $(this).attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {

			}
			return false;
		});


		var filterItemA	= $('.filter a');

		filterItemA.on('click', function(){
			var $this = $(this);
			if ( !$this.hasClass('active')) {
				filterItemA.removeClass('active');
				$this.addClass('active');
			}
		});
	}()); 


	// -------------------------------------------------------------
    // masonry
    // -------------------------------------------------------------

    (function () {
		var $container = $('.portfolio-items');
		// initialize
		$container.masonry({
		  itemSelector: '.work-grid'
		});
    }());


  	// -------------------------------------------------------------
    // Animated scrolling / Scroll Up
    // -------------------------------------------------------------

    (function () {
        $('li a[href*=#]').bind("click", function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top -79
            }, 1000);
            e.preventDefault();
        });
    }());


    // ----------------------------------------------
    // Owl Carousel
    // ----------------------------------------------
	(function () {

		$(".st-reviewss").owlCarousel({
		singleItem:true,
		lazyLoad : true,
		pagination:false,
		navigation : false,
		autoPlay: true,
		});

	}());


    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------

    (function () {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    }());
	

    // ----------------------------------------------
    // Parallax Scrolling
    // ----------------------------------------------
	(function () {
		$(window).bind('load', function () {
			parallaxInit();						  
		});
		function parallaxInit() {		
			$("#reviews").parallax("50%", 0.3);
		}	
		parallaxInit();
	}());

	

    // ----------------------------------------------
    // fitvids js
    // ----------------------------------------------
    (function () {

        $(".post-video").fitVids();

    }()); 

    // ----------------------------------------------
    // footer link
    // ----------------------------------------------

    (function () {

        $('.copyright').append('<a href="https://perkisar.github.io/" rel="nofollow" target="_blank"><p>Website by Sarah Perkins</p></a>')
    }());

});