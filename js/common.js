// $(document).ready(function() {

// 	$(".top_nav a, .top").mPageScroll2id({
// 		offset : 0,
// 		scrollSpeed : 200
// 	});

// 	//Цели для Яндекс.Метрики и Google Analytics
// 	$(".count_element").on("click", (function() {
// 		ga("send", "event", "goal", "goal");
// 		yaCounterXXXXXXXX.reachGoal("goal");
// 		return true;
// 	}));

// 	//Аякс отправка форм
// 	//Документация: http://api.jquery.com/jquery.ajax/
// 	$("#form").submit(function(e) {
// 		e.preventDefault;
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php",
// 			data: $(this).serialize()
// 		}).done(function() {
// 			alert("Спасибо за заявку!");
// 			setTimeout(function() {
// 			}, 1000);
// 		});
// 	});
	
// });