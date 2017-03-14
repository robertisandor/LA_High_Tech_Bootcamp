menuApp.controller('MainController', ['$scope', function($scope) {
    $scope.today = new Date();

    $scope.appetizers = [{
        name: 'Caprese',
        description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
        price: 4.95
    }, {
        name: 'Mozzarella Sticks',
        description: 'Served with marinara sauce.',
        price: 3.95
    }, {
        name: 'Bruschetta',
        description: 'Grilled bread, garlic, tomatoes, olive oil',
        price: 4.95
    }];
    
    $scope.pizzas = [{
        name: 'Mushroom Trio',
        description: 'Creamed mushrooms, Esaki mushroom, Shiitake mushrooms, spinach, marinara sauce, mozzarella',
        price: 8.95
    }, {
        name: 'Burrata',
        description: 'Burrata, tomato, caramelized onions, arugula, hazelnuts, pesto',
        price: 7.95
    }, {
        name: 'Pepperoni',
        description: 'Pepperoni, marinara sauce, mozarella, fresh oregano',
        price: 6.95
    }];

    $scope.sides = [{
        name: 'Breadsticks',
        description: 'Served with marinara sauce',
        price: 4.95
    }, {
        name: 'Soup Of The Day',
        description: 'Take a chance',
        price: 4.95
    }, {
        name: 'Salad',
        description: 'Field greens, balsamic viniagrette, asiago',
        price: 4.95
    }];
}]);
