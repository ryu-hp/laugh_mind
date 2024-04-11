
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  // アコーディオンメニューの開閉動作
$('.js-AccordionTitle').on('click', function() {
	var findElm = $(this).next(".accordion-content");
	$(findElm).toggleClass('is-open');//アコーディオンの上下動作
	$(this).toggleClass('is-active');
});

});
