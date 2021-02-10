
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

$(document).ready(function() {
  $(document).on('scroll', function() {

    if ($(window).scrollTop() > 10) {
        $("#site-nav").addClass("shadow-md");
    } else {
        $("#site-nav").removeClass("shadow-md");
    }

  }).trigger('scroll');
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
