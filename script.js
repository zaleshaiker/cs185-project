function onload(page) {
	$('#header').load('templates/header.html', null, function() {
		$('#menu-' + page).css('color', 'gray');
	});
	$('#footer').load('templates/footer.html');

}