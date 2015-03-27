// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $compileProvider) {

    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|local|data):/);

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.all', {
        url: '/all',
        views: {
            'tab-all': {
                templateUrl: 'templates/tab-topics.html',
                controller: 'AllCtrl'
            }
        }
    })
    .state('tab.topic-all', {
        url: '/topic-all/:topicId',
        views: {
            'tab-all': {
                templateUrl: 'templates/topic-detail.html',
                controller: 'TopicDetailCtrl'
            }
        }
    })

    .state('tab.hot', {
        url: '/hot',
        views: {
            'tab-hot': {
                templateUrl: 'templates/tab-topics.html',
                controller: 'HotCtrl'
            }
        }
    })
    .state('tab.topic-hot', {
        url: '/topic-hot/:topicId',
        views: {
            'tab-hot': {
                templateUrl: 'templates/topic-detail.html',
                controller: 'TopicDetailCtrl'
            }
        }
    })

    .state('tab.tech', {
        url: '/tech',
        views: {
            'tab-tech': {
                templateUrl: 'templates/tab-topics.html',
                controller: 'TechCtrl'
            }
        }
    })
    .state('tab.topic-tech', {
        url: '/topic-tech/:topicId',
        views: {
            'tab-tech': {
                templateUrl: 'templates/topic-detail.html',
                controller: 'TopicDetailCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/all');

})
