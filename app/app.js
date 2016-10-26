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
    'timeline'

]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/'});
}]);

portfolioApp.controller('MainController', function ProjectsController($scope) {

    var mainNav = angular.element('#myNav');

    $scope.sectionClass = [];
    $scope.sectionClass.push('isvisible');

    //Affix navbar when scrolling past
    mainNav.affix({
        offset: {
            top: mainNav.offset().top
        }
    });

    $scope.sectionName = 'Web Developer';
    $scope.nextSection = '#timelineSection';

    var items = angular.element(".main-section");

    window.addEventListener("scroll", changeSection);
    window.addEventListener("load", changeSection);

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

function createCharts() {

    var chartsData = [
        {
            chart: '',
            section: 'Languages',
            ctx: angular.element("#languagesChart")[0].getContext("2d"),
            labelNames: ["        JavaScript", "HTML", "CSS", "Python", "Java"],
            data: [10, 8, 8, 10, 5],
            colours: [
                'rgba(255, 99, 132, 1)',
                'rgba(0, 191, 255, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 127 ,80, 1)'
            ]
        },

        {
            chart: '',
            section: 'Technologies',
            ctx: document.getElementById("technologiesChart").getContext("2d"),
            labelNames: ["            Django", "Angular", "jQuery", "LESS", "Phaser", "Bootstrap"],
            data: [10, 5, 8, 7, 6, 9],
            colours: [
                'rgba(255, 99, 132, 1)',
                'rgba(0, 191, 255, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 127, 80, 1)',
                'rgba(186, 85, 211, 1)'
            ]
        }
    ];

    var labels = [];
    labels[0] = 'Least Experience';
    for (var i = 1; i < 10; i++) {
        labels[i] = '';
    }
    labels[10] = 'Most Experience     ';

    for (var index = 0; index < chartsData.length; index++) {

        var chrt = chartsData[index];

        chrt.chart = new Chart(chrt.ctx, {
            type: 'horizontalBar',
            data: {
                labels: chrt.labelNames,
                datasets: [{
                    data: chrt.data,
                    backgroundColor: chrt.colours
                }]
            },
            options: {

                tooltips: {
                    enabled: false
                },

                legend: {display: false},
                scales: {
                    xAxes: [{
                        ticks: {
                            maxRotation: 0,
                            minRotation: 0,
                            fontSize: 18,
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
            }
        });

    }

}

createCharts();
