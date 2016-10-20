$(document).ready(function(){
  $(".last-blog-grid").owlCarousel({
  	items: 5,
  	margin: 30,
  	responsive : {
    320 : {
    	items: 1,
    },
    768 : {
    	items: 3,
    },
    992 : {
    	items: 5,
    },
    1200 : {
    }
}
  });
});