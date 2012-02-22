$(function() {
	$("#item-four").addClass('important');
	$("#add-button").click(function() {
		$("ul").append("<li>New Item</li>");
	});

	$("#wrong").click(function() {
		$("#error").toggle('slow');
	});
});
