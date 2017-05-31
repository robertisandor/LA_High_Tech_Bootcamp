exerciseApp.controller('MainController', ['$scope', function($scope) {
    $scope.exercises = [{
        name: 'Pushups',
        count: 20
    }, {
        name: 'Squats',
        count: 15
    }, {
        name: 'Pullups',
        count: 10
    }, {
        name: 'Rows',
        count: 10
    }, {
        name: 'Lunges',
        count: 10
    }, {
        name: 'Step Ups',
        count: 10
    }, {
        name: 'Sit Ups',
        count: 15
    }];

    $scope.increase = function(indexOfExercise) {
        $scope.exercises[indexOfExercise].count++;
    };
    
    // needs to be revised
    $scope.decrease = function(indexOfExercise) {
        $scope.exercises[indexOfExercise].count--;
    }
}]);
