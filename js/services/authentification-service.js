angular
  .module('app')
  .factory('AuthService', ['$rootScope', '$window', '$q', function($rootScope, $window, $q) {
    function login(email, password) {
      return $q(function(resolve, reject) {
        if (email == 'test@gmail.com') {
          console.log('login successful');
          $window.sessionStorage.setItem("currentUser", angular.toJson({
            // id: response.user.id,
            // tokenId: response.id,
            // username: response.user.username,
            email: email
          }));
          resolve();
        } else {
          reject('Combination email/password incorrect');
        }
      });
    }

    function signUp(email, password) {
      return $q(function(resolve, reject) {
        if (email == 'test@gmail.com') {
          console.log('login successful');
          $window.sessionStorage.setItem("currentUser", angular.toJson({
            // id: response.user.id,
            // tokenId: response.id,
            // username: response.user.username,
            email: email
          }));
          resolve();
        } else {
          reject('Combination email/password incorrect');
        }
      });
    }

    function logout() {
      return $q(function(resolve, reject) {
        $window.sessionStorage.setItem("currentUser", null);
        resolve();
      });
    }

    return {
      login: login,
      signUp: signUp,
      logout: logout
    };
  }]);
