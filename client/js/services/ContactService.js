angular.module('ContactService', []).factory('Contact', ['$resource', function($resource) {
    var resource = $resource('/api/contacts/:contact_id', {contact_id: '@contact_id'}, {
        update:{
            method:'PUT'
        },
        save: {method: 'POST', isArray: false}
    });
    return resource;
}]);