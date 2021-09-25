$(document).ready(function(){
	new WOW().init();
	
	$('#slider').nivoSlider({
		controlNav:false,
		pauseOnHover:false,
		prevText:'<i class="fas fa-arrow-left"></i>',
		nextText:'<i class="fas fa-arrow-right"></i>',


	});
	
	$(window).scroll(function(){
		var x=$(window).scrollTop();
		if(x>800){
			$('#scroll-up').fadeIn();
		}
		else{
			$('#scroll-up').fadeOut();
		}
	});
	
	$('#scroll-up').click(function(){
		$('html').animate({scrollTop:0},1500);
	});
});
