'use strict';

// Declare app level module which depends on views, and components
var portfolioApp = angular.module('myApp', [
    'ngAnimate',
    'ngRoute',
    'angular-inview',
    'ui.bootstrap',
    'duScroll',
    'projects',
    'contactme',
    'timeline',
    'charts'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/'});
}]);

portfolioApp.controller('MainController', function ProjectsController($scope) {

    var mainNav = angular.element('#myNav');
    var sectionNameEl = angular.element('sectionName');

    $scope.sectionClass = [];
    $scope.sectionClass.push('isvisible');

    //Affix navbar when scrolling past
    mainNav.affix({
        offset: {
            top: mainNav.offset().top
        }
    });

    $scope.sectionName = 'Web Developer';
    $scope.nextSection = '#firstContainer';

    var items = angular.element(".main-section");

    window.addEventListener("scroll", changeSection);
    window.addEventListener("load", changeSection);

    function changeSection() {

        var onScreen = $scope.sectionName;
        var nextSectionName = $scope.nextSection;
        var nextSection = false;
        var sectionChange = false;

        items.each(function () {

            if ($(this).isOnScreen() && onScreen !== this.dataset.title) {
                onScreen = this.dataset.title;
                nextSection = true;
                sectionChange = true;
            }
            else {
                if (nextSection) {
                    nextSection = false;
                    nextSectionName = "#" + this.id;
                }
            }
        });

        if (sectionChange) {

            // Don't remove in-view even if Projects is scrolled past as this will reset animation
            if (onScreen == "Projects") angular.element('.project-thumb').addClass('in-view');

            $scope.sectionClass = [];
            $scope.sectionClass.push('ishidden');

            $scope.$apply();

            $scope.sectionName = onScreen;
            $scope.nextSection = nextSectionName;

            $scope.sectionClass = [];
            $scope.sectionClass.push('isvisible');

            $scope.scrollShow = (onScreen !== "Contact Me");

            $scope.$apply();

        }

    }

});

// From http://stackoverflow.com/questions/37674113/how-to-track-if-element-is-visible-on-screen-with-same-class-when-scrolling-with
$.fn.isOnScreen = function () {
    var win = $(window);
    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    // These lines have been adapted to only look at top 50% of screen
    viewport.right = viewport.left + (win.width() * 0.5);
    viewport.bottom = viewport.top + (win.height() * 0.5);

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};