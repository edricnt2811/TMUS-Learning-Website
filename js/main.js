jQuery(document).ready(function(){
	$(function(){
		$('#nav').slicknav();
		$.scrollUp();
		$('.bxslider').bxSlider({
			mode: 'horizontal',
			speed: 1000,
			auto: true,
			keyboardEnabled: true,
			slideWidth: 1366
		});
		
		$('.service_area').owlCarousel({
    		loop: true,
    		margin: 10,
    		nav: true,
			autoplay: true,
			responsiveClass: true,
    		responsive:{
        		0:{
            		items: 1,
					nav: true
        		},
        		600:{
            		items: 3,
					nav: false
        		},
        		1000:{
            		items: 4,
					nav: false
        		}
    		}
		})
		
		$('.course_area').owlCarousel({
    		loop: true,
    		margin: 10,
			autoplay: true,
    		nav: true,
			responsiveClass: true,
    		responsive:{
        		0:{
            		items: 1,
					nav: true
        		},
        		600:{
            		items: 3,
					nav: false
        		},
        		1000:{
            		items: 3,
					nav: false
        		}
    		}
		})
		
		$('.testimonial_area').owlCarousel({
    		loop: true,
    		margin: 10,
			autoplay: true,
    		nav: true,
			responsiveClass: true,
    		responsive:{
        		0:{
            		items: 1,
					nav: true
        		},
        		600:{
            		items: 1,
					nav: false
        		},
        		1000:{
            		items: 1,
					nav: false
        		}
    		}
		})
		
		$('.clients_area').owlCarousel({
    		loop: true,
    		margin: 10,
			autoplay: true,
    		nav: true,
			responsiveClass: true,
    		responsive:{
        		0:{
            		items: 2,
					nav: true
        		},
        		600:{
            		items: 4,
					nav: true
        		},
        		1000:{
            		items: 6,
					nav: true
        		}
    		}
		})
		
	});
	
	$("a[href*='#']:not([href='#])").click(
			function() {
  			let target = $(this).attr("href");
  			$('html,body').stop().animate({
    			scrollTop: $(target).offset().top
  			}, 1000);
  			event.preventDefault();
		});
});