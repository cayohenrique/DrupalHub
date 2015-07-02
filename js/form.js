(function(doc) {
	'use strict';

	var $bannerMenu = doc.querySelector('.banner-menu');
	var $formCallToAction = doc.querySelector('.form-callToAction');


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

	$formCallToAction.addEventListener('click', function(event) {
		var $formInput = doc.querySelectorAll('.form-input');
		var regex = /[a-zA-Z]/g;
		var campos = new Campos();

		if (campos.estaVazio($formInput[0].textContent)) {

		}

		$formInput[0].textContent.replace(regex, '');

		if (!regex.test($formInput[0].textContent)) {

		};
	});

})(document);