app.controller("ProductsController", function($scope) {

    $scope.item = {};

    $scope.itens = [
        {name: 'Cadeira', quantity: 2, value: 100},
        {name: 'Mesa', quantity: 12, value: 200},
        {name: 'Notebook', quantity: 3, value: 2000},
        {name: 'Monitor', quantity: 0, value: 700.50}
    ];

    $scope.addItem = function () {
        $scope.itens.push({name: $scope.item.name, quantity: $scope.item.quantity, value: $scope.item.value});
        $scope.item.name = $scope.item.quantity = $scope.item.value ='';        
    };

    $scope.editItem = function(index){
        $scope.item = $scope.itens[index];
        $scope.edit = true;
    };

    $scope.applyChanges = function(index){
        $scope.item = {};
        $scope.edit = false;        
    };

    $scope.deleteItem = function(index){
        $scope.itens.splice(index, 1);        
    };
});