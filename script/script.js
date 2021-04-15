$(function () {

	/* //////////////////////////// GNB 메뉴 ////////////////////////////// */
	$("ul#mainMenu>li").mouseover(function () {
		$(this).children("ul").stop().fadeIn(300);
	});
	$("ul#mainMenu>li").mouseout(function () {
		$(this).children("ul").stop().fadeOut(300);
	});

	/* //////////////////////////// 슬라이드 쇼 ////////////////////////////// */
	setInterval(fnSlide, 3000);

	function fnSlide() {
		$("#shuttleFrame a").fadeOut(500);
		$("#shuttleFrame a:nth-child(2)").fadeIn(1000,
			function () {
				$("#shuttleFrame a:first-child").insertAfter("#shuttleFrame a:last-child");
			});
	}

    /* //////////////////////////// 슬라이드 쇼 ////////////////////////////// */
    $("div#notice a.noticeTxt:first-child").click(function() {
        $("div#modalLayer").css({
            "display":"block"
        });
    });

    $("div#modalPopup button").click(function() {
        $("div#modalLayer").css({
            "display":"none"
        });
    });

}); /*$(function() {  })*/
