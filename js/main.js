
new WOW().init();

var time = 2, ss = 1;
$(window).scroll(function() {
	$('#counter').each(function(){
		var 
		cPos = $(this).offset().top,
		topwindow = $(window).scrollTop();
		if (cPos < topwindow + 500) {
			if (ss < 2) {
				$('.num').addClass('numv');
				$('span').each(function(){
					var 
					i = 1,
					num = $(this).data('num'),
					step = 1000 * time / num,
					that = $(this),
					int = setInterval(function(){
						if (i <= num) {
							that.html(i);
						}
						else {
							ss = ss + 2;
							clearInterval(int);
						}
						i++;
					},step);
				});
			}
		}
	});
});


$(document).ready(function() {

	$(".top_nav a, .top").mPageScroll2id({
		offset : 0,
		scrollSpeed : 1000
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
			}, 1000);
		});
	});
	
});