function addToList(message) {
	var el = $("<li style='display:none'>" + message + "</li>");
	$("#new_messages").append(el);
	$(el).show('fast');
}

$(function() {
	var url = '/messages.json'

	$.get(url,function(data) {
		$.each(data, function(i, message) {
			var content = message.content;
			addToList(content);
		});
	});

	$("#add").click(function() {
		var content = $("#message-content").val();
		if (content == "") {
			alert('thats required!');
			return;
		}

		var url = '/messages.json';
		var params = {
			'message[content]':content
		};
		$.post(url, params, function(message) {
			var content = message.content;
			addToList(content);
		});
	});

});