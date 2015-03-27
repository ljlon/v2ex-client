angular.module('starter.controllers', [])

.filter('externalLinks', function() {
   return function(text) {
     if (!text) {
        return text;
     }
     return String(text).replace(/href=/gm, "onclick=\"angular.element(this).scope().exLink(this);return false\" href=");
   }
 })

.filter('toTrusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}])

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
    $scope.exLink = function(link){
            var url = link.href;
            window.open(encodeURI(url), '_blank', 'location=no');
        };
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
