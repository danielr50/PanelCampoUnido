var app = angular.module('panelCampoUnido', ['firebase','ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home', {
		url: "/",
		templateUrl: 'partials/home.html',
		controller: 'homeCtrl'
	});

});

app.controller("homeCtrl", function($scope, $firebaseArray){
	$scope.prueba = "prueba";
	$scope.categoriaPrincipal = {};

	var categoriasRef = new Firebase('https://campo-unido.firebaseio.com/categorias');
	$scope.categorias = $firebaseArray(categoriasRef);

	

	$scope.enviarCategoriaPrincipal = function(){
		// agrega categoria principal
		var categoriaPrincipalRef = new Firebase('https://campo-unido.firebaseio.com/categoriaPrincipal');
		
		categoriaPrincipalRef.push({
			nombreCategoria: $scope.categoriaPrincipal.nombreCategoria,
			descripcionCategoria: $scope.categoriaPrincipal.descripcionCategoria
		});
		$scope.categoriaPrincipal = '';
		$('#myModal').modal('hide');
	}

});