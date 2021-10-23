$(document).ready(function() {
	//xử lý nút next
	$('.next').click(function() {
		let slideNext = $('.active').next();
		// console.log(slideNext.length);
		if(slideNext.length!=0){
			$('.active').addClass('hidden-left').one('webkitAnimationEnd', function() {
				$('.hidden-left').removeClass('hidden-left').removeClass('active');
			});
			slideNext.addClass('active').addClass('next-slide-right').one('webkitAnimationEnd', function() {
				$('.next-slide-right').removeClass('next-slide-right');
			});
		}else{
			$('.active').addClass('hidden-left').one('webkitAnimationEnd', function() {
				$('.hidden-left').removeClass('hidden-left').removeClass('active');
			});
			$('.slide:first-child').addClass('active').addClass('next-slide-right').one('webkitAnimationEnd', function() {
				$('.next-slide-right').removeClass('next-slide-right');
			});
		}
	});
	// Xử lý nút pre
	$('.previous').click(function() {
		let slidePrev = $('.active').prev();
		if(slidePrev.length!=0){
			$('.active').addClass('hidden-right').one('webkitAnimationEnd', function() {
				$('.hidden-right').removeClass('hidden-right').removeClass('active');
			});
			slidePrev.addClass('active').addClass('next-slide-left').one('webkitAnimationEnd', function() {
				$('.next-slide-left').removeClass('next-slide-left');
			});
		}else{
			$('.active').addClass('hidden-right').one('webkitAnimationEnd', function() {
				$('.hidden-right').removeClass('hidden-right').removeClass('active');
			});
			$('.slide:last-child').addClass('active').addClass('next-slide-left').one('webkitAnimationEnd', function() {
				$('.next-slide-left').removeClass('next-slide-left');
			});
		}
	});
});