$(document).ready(function(){
	
//-----------*********************------------
//Mixitup portfolio section
//+++++++++++++++++++++++++++++++++++++++++++
	
	var container = document.querySelector('.container_item');	
	
	var mixer = mixitup(container, {
    selectors: {
        control: '[data-mixitup-control]'
    }

	});
	
	
	
});
//-----------*********************------------
// start owl carousel
//+++++++++++++++++++++++++++++++++++++++++++
$(document).ready(function(){
	
	
  $(".owl-carousel").owlCarousel({  
	loop:true,
    margin:10,
	autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
	center:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });

  
});

$(document).ready(function(){
	  	
//+++++++++++++++++++++++++++++++++++++++++
// Active class add 
//-------------------------------------------		
		$(".navbar-nav li").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			
		});
		
		//	scrollTop 
		
		
	        $('.navbar-nav  a[href^="#"]').click(function(event){
               event.preventDefault();
			   
			   var target = this.hash;
			 
			   $("html,body").animate({
				scrollTop: $(target).offset().top -100
				}, 500);
			   
                });

	
//+++++++++++++++++++++++++++++++++++++++++
// sticky header
//-------------------------------------------		
	
			
	window.onscroll = function() {myFunction()};

	var header = document.getElementById("myHeader");

	var sticky = header.offsetTop;

	function myFunction() {
	  if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	  } else {
		header.classList.remove("sticky");
	  }
	}
		
//+++++++++++++++++++++++++++++++++++++++++
//wow 
//-------------------------------------------		
 new WOW().init();
	
//+++++++++++++++++++++++++++++++++++++++++
// TOP ARROW
//-------------------------------------------		
	
		
	  $(".top_icon").click(function(){
		$("html,body").animate({
			scrollTop: 0
		});	
			
		});
		
		$(window).scroll(function(){
			
		 var ourwindow = $(this).scrollTop();
		 
		 if(ourwindow<500){
			 $(".top_icon").fadeOut();
		 }else{
			  $(".top_icon").fadeIn();
		 }
		 
			
		});
	  
	
});