angular.module('starter.services', [])

.factory('Topics', function($http) {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var topics = [];

    return {
        latest: function() {
            return $http.get('/api/topics/latest.json').then(function(resp) {
                        topics = resp['data'];
                        console.log(JSON.stringify(resp));
                        return topics;
                    }, function(err) {
                        console.error('ERR', JSON.stringify(err));
                        return null;
                    });
        },
        hot: function() {
            return $http.get('/api/topics/hot.json').then(function(resp) {
                        topics = resp['data'];
                        console.log(JSON.stringify(resp));
                        return topics;
                    }, function(err) {
                        console.error('ERR', JSON.stringify(err));
                        return null;
                    });
        },
        tech: function() {
            return $http.get('/api/topics/show.json?node_name=tech').then(function(resp) {
                        topics = resp['data'];
                        console.log(JSON.stringify(resp));
                        return topics;
                    }, function(err) {
                        console.error('ERR', JSON.stringify(err));
                        return null;
                    });
        },
        detail: function(topicId) {
            return $http.get('/api/topics/show.json?id='+topicId).then(function(resp) {
                        console.log(JSON.stringify(resp));
                        return resp['data'][0];
                    }, function(err) {
                        console.error('ERR', JSON.stringify(err));
                        return null;
                    });
        }
    };
});
