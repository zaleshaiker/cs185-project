function onLoad(page) {
	$('#header').load('templates/header.html', null, function() {
		if (page !== '') {
			$('#menu-' + page).css('color', 'gray');
		}
	});
	$('#footer').load('templates/footer.html');
	
	if (page === 'images') {
		window.onscroll = function() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				$('.back-to-top').css('display', 'block');
			} else {
				$('.back-to-top').css('display', 'none');
			}
		};

	}
}

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
} 