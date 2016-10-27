'use strict';

// Declare app level module which depends on views, and components
var portfolioApp = angular.module('myApp', [
    'ngAnimate',
    'ngRoute',
    'angular-inview',
    'ui.bootstrap',
    'chart.js',
    'duScroll',
    'projects',
    'contactme',
    'timeline'

]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/'});
}]);

portfolioApp.controller('MainController', function ProjectsController($scope) {

    var mainNav = angular.element('#myNav');
    var items;

    // Requires document ready to ensure all elements are loaded into DOM before searching by class
    angular.element(document).ready(function () {
        items = angular.element(document.getElementsByClassName("main-section"));
    });

    if (window.innerWidth < 480)$scope.chartsHeight = "10vh";
    else $scope.chartsHeight = "40vh";

    $scope.sectionClass = [];
    $scope.sectionClass.push('isvisible');

    //Affix navbar when scrolling past
    mainNav.affix({
        offset: {
            top: mainNav.offset().top
        }
    });

    function changeChartHeight() {
        if (window.innerWidth < 480)$scope.chartsHeight = "80vh";
        else $scope.chartsHeight = "40vh";
    }

    $scope.sectionName = 'Web Developer';
    $scope.nextSection = '#timelineSection';

    window.addEventListener("scroll", changeSection);
    window.addEventListener("load", changeSection);
    //window.addEventListener("resize", changeChartHeight);

    function changeSection() {

        var newSectionName = $scope.sectionName;

        items.each(function () {

            if ($(this).isOnScreen()) newSectionName = this.dataset.title;

        });

        if ($scope.sectionName !== newSectionName) {

            $scope.sectionClass = [];
            $scope.sectionClass.push('ishidden');

            $scope.$apply();

            $scope.sectionName = newSectionName;
            $scope.nextSection = newSectionName;

            $scope.sectionClass = [];
            $scope.sectionClass.push('isvisible');

            $scope.scrollShow = (newSectionName !== "Contact Me");

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

portfolioApp.controller('ChartsController', function ChartsController($scope) {

    var labels = [];
    labels[0] = 'Inexperienced';
    for (var i = 1; i < 10; i++) {
        labels[i] = '';
    }
    labels[10] = 'Experienced';

    $scope.charts = [
        {
            title: "Languages",
            id: "languagesSection",
            labels: ["JavaScript", "HTML", "CSS", "Python", "Java"],
            data: [10, 8, 8, 10, 5]
        },
        {
            title: "Technologies",
            id: "technologiesSection",
            labels: ["Django", "Angular", "jQuery", "LESS", "Phaser", "Bootstrap"],
            data: [10, 5, 8, 7, 6, 9]
        }
    ];

    $scope.chartOptions = {

        tooltips: {
            enabled: false
        },

        legend: {display: false},
        scales: {
            xAxes: [{
                ticks: {
                    maxRotation: 0,
                    minRotation: 0,
                    fontSize: 14,
                    fontColor: '#fff',
                    beginAtZero: true,
                    callback: function (value, index, values) {
                        return labels[value];
                    }
                },
                gridLines: {display: false}
            }],
            yAxes: [{
                ticks: {
                    fontSize: 18,
                    fontColor: '#fff'
                },
                gridLines: {display: false}
            }]
        }
    };

    Chart.defaults.global.colors = [
                '#FF6384',
                '#00BFFF',
                '#FFCE56',
                '#4BC0C0',
                '#FF7F50',
                '#BA55D3'
            ]
});
