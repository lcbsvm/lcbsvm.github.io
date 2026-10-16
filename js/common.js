(function() {
	$(function() {
		$('#fontMinas').on('click', function() { clickCount(-1); return false; });
		$('#fontPlus').on('click', function() { clickCount(1); return false; });
	});
})();
