
$(function() {
	$('.slider').owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		loop: true,
		navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false,
	            dots: true,
	        },
	        600:{
	            items:1,
	            nav:false,
	            dots: true,
	        },
	        1000:{
	            items:1,
	            nav:false,
	            loop:true,
	            dots: true,
	        }
	    }
	});
	$('.slider-about-us').owlCarousel({
		items: 3,
		margin: 20,
		loop: true,
		dots: true,
		stagePadding: 10,
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false,
	            dots: true,
	        },
	        600:{
	            items:3,
	            nav:false,
	            dots: true,
	        },
	        1000:{
	            items:4,
	            nav:false,
	            loop:true,
	            dots: true,
	        }
	    }
	});
	$(".toggle").click(function() {
	  $(this).toggleClass("on");
	  $(".menu").slideToggle();
	});
});