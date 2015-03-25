angular.module('starter.controllers', [])

.controller('AllCtrl', function($scope) {})

.controller('HotCtrl', function($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('TecCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
