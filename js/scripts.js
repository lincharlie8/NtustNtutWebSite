/***************** Waypoints ******************/


$(document).ready(function() {
	var ID;
	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp10').waypoint(function() {
		$('.wp10').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp7').waypoint(function() {
		$('.wp7').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	if($(window).width()<550){

	$('.wp8').waypoint(function() {
		$('.wp8').removeClass('animated fadeInUp hover');
		//$('.wp10').removeClass('animated fadeInUp hover');
		//$('.wp11').removeClass('animated fadeInUp hover');

		$(this).addClass('animated fadeInUp hover');
	}, {
		offset: '50%'
	});

	$('.wp9').waypoint(function() {
		$('.wp8').removeClass('animated fadeInUp hover');
		$('.wp10').removeClass('animated fadeInUp hover');
		$('.wp11').removeClass('animated fadeInUp hover');

		$('.wp9').addClass('animated fadeInUp hover');
	}, {
		offset: '50%'
	});

	$('.wp10').waypoint(function() {
		$('.wp9').removeClass('animated fadeInUp hover');
		$('.wp8').removeClass('animated fadeInUp hover');
		$('.wp11').removeClass('animated fadeInUp hover');

		$('.wp10').addClass('animated fadeInUp hover');
	}, {
		offset: '50%'
	});

	$('.wp11').waypoint(function() {
		$('.wp9').removeClass('animated fadeInUp hover');
		$('.wp10').removeClass('animated fadeInUp hover');
		$('.wp8').removeClass('animated fadeInUp hover');

		$('.wp11').addClass('animated fadeInUp hover');
	}, {
		offset: '50%'
	});

	}



	
});

/***************** Slide-In Nav ******************/

$(window).load(function() {

	$('.nav_slide_button').click(function() {
		$('.pull').slideToggle();
	});

});

/***************** Smooth Scrolling ******************/

$(function() {
	
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			
			ID=$(this).attr('href');

			
			
			if(Math.abs($(window).scrollTop()-$(ID).offset().top) > 50){
				
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 2000);
				return false;
				}
			}

		}
	});

});

/***************** Nav Transformicon ******************/

document.querySelector("#nav-toggle").addEventListener("click", function() {
	this.classList.toggle("active");
});

/***************** Overlays ******************/

$(document).ready(function(){
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".overlay").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }
});

/***************** Flexsliders ******************/

$(window).load(function() {

	$('#portfolioSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#servicesSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('.teamSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

});

$(window).scroll(function() {
	$(".select-now").removeClass('select-now');
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


/*$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});*/