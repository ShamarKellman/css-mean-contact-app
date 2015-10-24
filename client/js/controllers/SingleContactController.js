angular.module('SingleContactCtrl', []).controller('SingleContactController', function($scope, $stateParams, Contact) {
    var contact = Contact.get({contact_id: $stateParams.contact_id}, function() {
        $scope.contact = contact;
    });
});