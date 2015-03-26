angular.module('starter.controllers', [])

.controller('AllCtrl', function($scope, Topics) {
    $scope.title = '最近';
    $scope.route = 'topic-all';
    Topics.latest().then(function(topics){
        $scope.topics = topics;
    });
})

.controller('HotCtrl', function($scope, Topics) {
    $scope.title = '热门';
    $scope.route = 'topic-hot';
    Topics.hot().then(function(topics){
        $scope.topics = topics;
    });
})

.controller('TopicDetailCtrl', function($scope, $stateParams, Topics) {
    Topics.detail($stateParams.topicId).then(function(topic){
        $scope.topic = topic;
    });
})

.controller('TechCtrl', function($scope, Topics) {
    $scope.title = '技术';
    $scope.route = 'topic-tech';
    Topics.tech().then(function(topics){
        $scope.topics = topics;
    });
});
