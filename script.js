$(document).ready(function () {
	$("p").css("color", "green");
	$("#mybutton").click(function () {
		$("p").toggle();
		$("#square").hover(function () {
			alert("This is a big red square!");
		})
	});
});