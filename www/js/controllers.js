angular.module('starter.controllers', [])

.controller('AllCtrl', function($scope, $http) {
    $scope.title = '最近';
    $scope.route = 'topic-all';
    $http.get('https://www.v2ex.com/api/topics/latest.json').then(function(resp) {
        $scope.topics = resp['data'];
        console.log(resp);
    }, function(err) {
        console.error('ERR', err);
    })
})

.controller('HotCtrl', function($scope, $http) {
    $scope.title = '热门';
    $scope.route = 'topic-hot';
    $http.get('https://www.v2ex.com/api/topics/hot.json').then(function(resp) {
        $scope.topics = resp['data'];
        console.log(resp);
    }, function(err) {
        console.error('ERR', err);
    })
})

.controller('TopicDetailCtrl', function($scope, $stateParams, $http) {
    $http.get('https://v2ex.com/api/topics/show.json?id='+$stateParams.topicId).then(function(resp) {
        $scope.topic = resp['data'][0];
        console.log(resp);
    }, function(err) {
        console.error('ERR', err);
    })
})

.controller('TechCtrl', function($scope, $http) {
    $scope.title = '技术';
    $scope.route = 'topic-tech';
    $http.get('https://v2ex.com/api/topics/show.json?node_name=tech').then(function(resp) {
        $scope.topics = resp['data'];
        console.log(resp);
    }, function(err) {
        console.error('ERR', err);
    })
});
