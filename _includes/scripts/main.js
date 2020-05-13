
$("[data-clipboard-content]").click(function() {

    $(this).addClass('is-animating');
  
    $(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
    function(e) {

	    $(this).removeClass('is-animating');
    });

	var clipboardContent = $(this).attr("data-clipboard-content");
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val(clipboardContent).select();
	document.execCommand("copy");
	$temp.remove();
});

function getCurrentScrollPosition() {
	currentScrollPosition = $(window).scrollTop();
};

$("[data-toggle='work-item-open']").click(function() {
	event.preventDefault();

	var currentScrollPosition = $(window).scrollTop();
	var workItemLink = $(this).attr('href');

	window.location.href = workItemLink + "?s=" + currentScrollPosition;
});

$(document).ready(function() {
	if (window.location.href.indexOf("?s=") > -1) {
		$.urlParam = function(name){
			var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
			return results[1] || 0;
		}

		if (window.location.pathname  === "/" ) {

			$(window).scrollTop($.urlParam('s'));

			window.history.replaceState({}, document.title, "/");

		} else {
			$("a[href]").each(function( index ) {
				var hrefUrl = $(this).attr("href");
				var newUrl = hrefUrl + "?s=" + $.urlParam('s');

				$(this).attr("href",newUrl);
			});

			window.history.replaceState({}, document.title, window.location.origin + window.location.pathname);
		};
	};
});

$("[data-toggle='menu']").click(function() {
	$("#" + $(this).data("toggle")).toggleClass("hidden");
});

$("[data-close='menu']").click(function() {
	$("#" + $(this).data("close")).addClass("hidden");
});

$("[data-reveal]").each(function() {
	$("[data-reveal]").one("webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend", function(event) {
		$(this).removeAttr("data-reveal-from");
		$(this).removeAttr("data-reveal-delay");
		$(this).removeAttr("data-reveal-duration");
		$(this).removeAttr("data-reveal");
	});
});
