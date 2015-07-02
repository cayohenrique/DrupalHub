Campos = (function() {
	var module = {};

	module._coisaPrivada = function() {

	};

	module.estaVazio = function(valor) {
		return valor == '';
	};

	return {
		estaVazio : module.estaVazio
	};
});