function addToList(content) {
	$("#created-messages").append("<li>" + content + "</li>");
}

// Get's executed when the page loads
$(function() {
	$("#add-message-button").click(function() {
		var content = $("#message-content").val();

		var url = '/messages.json';
		var params = {
			'message[content]':content
		};
		var callback = function(new_object) {
			var content = new_object.content;
			var id = new_object.id;
			addToList(id);

		};

		$.post(url,params,callback);
	});
});