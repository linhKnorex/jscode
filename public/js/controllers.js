var uiControllers = angular.module('uiControllers', []);

uiControllers.controller('homeCtrl', function($scope, $location, $rootScope){

});

uiControllers.controller('listCtrl', function($scope, $location, $rootScope){
	$scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
	console.log('hahaha');
});

uiControllers.controller('paraCtrl', function($scope, $location, $rootScope){
	$scope.paras = ['Paragraph-1', 'Paragraph-2', 'Paragraph-3'];
});

uiControllers.controller('aboutCtrl', function($scope, $location, $rootScope){
	$scope.isShowOne = true;
	$scope.isShowTwo = true;

	$scope.colOne = function(){
		$scope.isShowOne = !$scope.isShowOne;
	}

	$scope.colTwo = function(){
		$scope.isShowTwo = !$scope.isShowTwo;
	}
	
});

uiControllers.controller('columnOneCtrl', function($scope, $location, $rootScope){

});

uiControllers.controller('columnTwoCtrl', function($scope, $location, $rootScope){
	$scope.scotches = [
		{
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }   
	];
});







