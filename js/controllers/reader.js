'use strict';

angular
  .module('app')
  .controller('ReaderController', ['$scope', '$rootScope', '$window', '$state',
      function($scope, $rootScope, $window, $state) {

        $scope.currentUser = JSON.parse($window.sessionStorage.getItem("currentUser"));

        function getCategories() {
          $scope.defaultCategories = [
            {
              name: 'Starred items'
            },
            {
              name: 'All items'
            }
          ];

          // Temporary variables
          $scope.categories = [
            {
              name: 'Uncategorized'
            },
            {
              name: 'Sport'
            },
            {
              name: 'Automobile'
            },
            {
              name: 'News'
            }
          ];
          // Call to Category's Service


          $rootScope.selectedCategory = $scope.defaultCategories[0];
        };
        getCategories();

        function getArticles() {
          // Temporary variables
          $scope.articles = [
            {
              title: 'First article!',
              content: 'This is the first article of the list.',
              open: false
            },
            {
              title: 'Here is another one',
              content: 'Another article',
              open: false
            },
            {
              title: 'Never two without three!',
              content: 'Last article of the list',
              open: false
            }
          ];

          // Call to Article's Service
        };
        getArticles();

        $scope.toggleStarredArticle = function(article) {
          article.starred = !article.starred;
        };

  }])
 .directive('myLabel', ['$rootScope', function($rootScope) {
   return {
     restrict: 'A',
     scope: {
       category: '=',
       selectedCategory: '='
     },
     link: function(scope, element, attrs) {
         element.on('click', function() {
           element.parent().find('li.active').removeClass('active');
           element.addClass('active');
           $rootScope.selectedCategory = scope.category;
           scope.$apply();
         });
       }
   }
}]);
