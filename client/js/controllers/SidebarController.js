angular.module('SidebarCtrl', []).controller('SidebarController', function($rootScope, $scope, $state, Contact) {
    $scope.showDelete = false;
    
    $rootScope.activateDelete = function() {
        if($scope.showDelete === false) {
            $scope.showDelete = true;
        }
        else {
            $scope.showDelete = false;
        }
    };
    
	$scope.tagline = 'The square root of life is pi!';
    
    var contacts = Contact.query(function() {
        $scope.contacts = contacts;
    });
    $scope.my = {
        name: {
            first: "Shamar",
            last: "Kellman"
        },
        email: "shamarkellman@hotmail.com"
    };
    
    $scope.delete = function(contact_id){
        Contact.delete({contact_id: contact_id}, function(res){
            $state.go('base.home');
        });
    };
});