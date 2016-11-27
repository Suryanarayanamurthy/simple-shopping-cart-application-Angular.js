
'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {

 $scope.productsSet = 
	{
		products: [
		{
			productname:"Complete Solution",
			cost: 10,
			qty:1,
			description:{
				superImpFeatures:[
				"smartfrog app",
				"smartfrog HD cam",
				"24 hour recording"
				],
				impFeatures:[
				"Important Feature 1",
				"Important Feature 2",
				"Important Feature 3"
				],
				norFeatures: [
				"Normal Feature 1",
				"Normal Feature 2",
				"Normal Feature 3",
				"Normal Feature 4"
				]
			}
		},
		{
			productname:"Cam Package",
			cost: 10,
			qty:1,
			description:{
				superImpFeatures:[
				"super Imp Feature 1",
				"super Imp Feature 2",
				"super Imp Feature 3"
				],
				impFeatures:[
				"Important Feature 21",
				"Important Feature 22",
				"Important Feature 23"
				],
				norFeatures: [
				"Normal Feature 21",
				"Normal Feature 22",
				"Normal Feature 23",
				"Normal Feature 24"
				]
			}
		},
		{
			productname:"Smart Sol",
			cost: 10,
			qty:1,
			description:{
				superImpFeatures:[
				"super Imp Feature 1",
				"super Imp Feature 2",
				"super Imp Feature 3"
				],
				impFeatures:[
				"Important Feature 31",
				"Important Feature 32",
				"Important Feature 33"
				],
				norFeatures: [
				"Normal Feature 31",
				"Normal Feature 32",
				"Normal Feature 33",
				"Normal Feature 34"
				]
			}
		},
		{
			productname:"Frog Solution",
			cost: 100,
			qty:1,
			description:{
				superImpFeatures:[
				"Scans for bugs",
				"can Jump 4 times it's height",
				"360 degree cam rotation",
				"water proof..."
				],
				impFeatures:[
				"Important Feature 41",
				"Important Feature 42",
				"Important Feature 43"
				],
				norFeatures: [
				"Normal Feature 41",
				"Normal Feature 42",
				"Normal Feature 43",
				"Normal Feature 44"
				]
			}
		}
		]
	};
 
$scope.addToCart = function(item){
	if (!$scope.cart.items.contains(item)) {
		$scope.cart.items.push(item)
	}
	console.log($scope.cart.items);
	
}

 $scope.cart = {
        items: []
    };

    Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

    $scope.removeItem = function(index) {
        $scope.cart.items.splice(index, 1);
    }

    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.cart.items, function(item) {
            total += item.qty * item.cost;
        })

        return total;
    }

    $scope.addQty = function(item){
    	item.qty ++;
    }
    $scope.removeQty = function(item){
    	item.qty --;
    	if (item.qty <= 0)
    		item.qty = 1;
    }
}]);