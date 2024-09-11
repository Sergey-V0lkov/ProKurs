$(document).ready(function() {






	$('.popup').magnificPopup({type:'image'});




	$('.popup_j').magnificPopup();



	$.stellar({
		responsive: true,
		horizontalOffset: 60
	});


	$(".owl-carousel").owlCarousel({
		responsive : {
			0 : {
				items : 1,
				nav : true
			}
		},
		navText : ""
	});



	function wResize(){
		$("header").css("min-height", $(window).height());
	};
	wResize();

	$(window).resize(function(){
		wResize()
	});





	$(".top_phone .wrapper .tab").click(function() {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	$(".tabs_header .wrapper .tab").click(function() {
		$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");



	$(".contacts .tabs .tab").click(function() {
		$(".contacts .tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".contacts  .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");



	$(".end .wrapper .tab").click(function() {
		$(".end .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".end .tab_item3").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {

				var magnificPopup = $.magnificPopup.instance;
				magnificPopup.close();


			}, 1000);
		});
		return false;
	});
	


});







$(window).load(function() {

	$(".top_header ").animated("wobble", "wobble");
	$(".tabs_header .wrapper ").animated("flipInY", "flipInY");
	$(".an ").animated("fadeInRight", "fadeOutRight");
	$(".che ").animated("zoomInRight", "fadeOut");
	$(".che ").animated("zoomInRight", "fadeOut");
	$(".flag h2 ").animated("fadeInUp", "fadeOut");
	$("footer ").animated("rubberBand", "fadeOut");
});


