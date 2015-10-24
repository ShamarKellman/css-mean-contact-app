angular.module('AddContactCtrl', []).controller('AddContactController', function($scope, $state, Contact) {
    $scope.contact = 
        {
        name: {
            title: null,
            first: null,
            last: null,
        },
        phone: {
            home: null,
            work: null,
            mobile: null,
            other: null
        },
        email: ['Enter Email'],
        image: null,
        occupation: null,
        relationship: null
    };

    $scope.addEmail = function() {
        $scope.contact.email.push('');
    };
    
    $scope.save = function(isValid) {       
        if(isValid){
            var image = 'data:' + $scope.contact.image.filetype + ';base64,' + $scope.contact.image.base64;
            $scope.contact.image = image;
            
            Contact.save($scope.contact, function(res){
                $state.go('base.single-contact', {contact_id: res._id});
            }, function(err){
                console.log(err);
            });
            
        }
    };
    
});