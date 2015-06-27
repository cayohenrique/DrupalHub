(function(doc) {
	'use strict';

	var $bannerMenu = doc.querySelector('.banner-menu');

	$bannerMenu.addEventListener('click', function(event) {
		event.preventDefault();

		var $origin = event.target;
		

		if ($origin.tagName == 'A') {
			var $bannerMenuItens = this.querySelectorAll('.banner-menu-item');
			var max = $bannerMenuItens.length;
			while (max--) {
				$bannerMenuItens[max].classList.remove('isActive');
			};
			$origin.parentNode.classList.toggle('isActive');
		};
	});
})(document);