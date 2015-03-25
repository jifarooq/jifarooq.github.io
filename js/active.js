(function() {
	$('#nav a').on('click', function() {
		var lastActive = $('#nav .active');
		var $li = $(event.target).closest('li');
		$li.addClass('active');
		lastActive.removeClass('active');
	});
}).call(this);