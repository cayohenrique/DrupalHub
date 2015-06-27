var DrupalHub = angular.module('DrupalHub', []);

DrupalHub.controller('ListaUsuariosCtrl', function($scope, $http){
	
	$http.get('http://104.236.105.139/ranking/views/lista_usuarios').success(function(data) {
		$scope.usuarios = data;
	});
});

DrupalHub.controller('InfoUsuarioCtrl', function($scope, $http){
	
	var InfoUsuario = this;
	
	InfoUsuario = {
		id: window.location.search.replace('?id=', ''),
		curtidas: null
	};
	
	if(InfoUsuario.id.length){
		$http.get('http://104.236.105.139/ranking/views/usuario?args[0]=' + InfoUsuario.id).success(function(data) {
			console.log(data)
			$scope.infoUsuario = data;
		});	
	}
});

DrupalHub.controller('DadosDeContribuicoesCtrl', function($scope, $http){
	
	$http.get('http://104.236.105.139/ranking/views/dados_de_contribuicao?args[0]=1').success(function(data) {
		$scope.dadosDeContribuicoes = data;
		console.log(data)
	});
});

DrupalHub.controller('RankingContribuicaoCtrl', function($scope, $http){
	
	$http.get('http://104.236.105.139/ranking/views/contribuicao,?args[0]=1').success(function(data) {
		$scope.contribuicoes = data;
		console.log(data)
	});
});

DrupalHub.controller('PontuacaoCtrl', function($scope, $http){
	
	$http.get('http://104.236.105.139/ranking/views/ponto?args[0]=1').success(function(data) {
		$scope.pontuacao = data;
		console.log(data)
	});
});