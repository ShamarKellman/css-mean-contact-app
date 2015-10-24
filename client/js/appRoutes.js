angular.module('appRoutes', [])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		// Base state of our application and two views.
        .state('base', {
            abstract: true,
            views: {
                "sidebar": {
                    templateUrl: 'views/sidebar.html'
                },
                "main": {
                    templateUrl: 'views/main.html'
                },
            }
        })
		// Child of "base" state - overwrites the "main" view only.
        .state('base.home', {
            url: '/',
            views: {
                "main@": {
                    templateUrl: 'views/home.html'
                },
            }
        })
		.state('base.single-contact', {
            url: '/contact/:contact_id',
            views: {
                "main@": {
                    templateUrl: 'views/single-contact.html',
					controller: 'SingleContactController'
                },
            }
        })
        .state('base.add-contact', {
            url: '/add',
            views: {
                "main@": {
                    templateUrl: 'views/add-contact.html',
					controller: 'AddContactController'
                },
            }
        });
}]);