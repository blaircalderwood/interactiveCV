'use strict';

// Declare app level module which depends on views, and components
var portfolioApp = angular.module('myApp', [
    'ngAnimate',
    'ngRoute',
    'angular-inview',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    //$routeProvider.otherwise({redirectTo: '/view1'});
}]);

portfolioApp.controller('ProjectsController', function ProjectsController($scope) {

    $scope.overlayShow = false;

    $scope.projects = [
        {
            name: 'Parking Space Finder',
            company: 'University of Glasgow',
            description: 'Parking Space Finder',
            startDate: '',
            endDate: '',
            link: 'www.youtube.com/watch?v=j0bbQysxf7Q',
            imageURL: 'images/projects/parkingSpaceFinder.png',
            teamSize: 2,
            topFive: true,
            tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'jQuery Mobile']
        },
        {
            name: 'CORE Conference Website',
            company: 'ASRANet Ltd',
            description: 'CORE Conference Website',
            startDate: '',
            endDate: '',
            link: 'www.offshore-renewables.co.uk/',
            imageURL: 'images/projects/CORE.jpg',
            teamSize: 1,
            topFive: true,
            tags: ['Django', 'Bootstrap', 'LESS', 'HTML', 'Python', 'CSS', 'MVC']
        },
        {
            name: 'BioMaAp Conference Website',
            company: 'ASRANet Ltd',
            description: 'BioMaAp Conference Website',
            startDate: '',
            endDate: '',
            link: 'www.bio-materials.co.uk/',
            imageURL: 'images/projects/biomat.png',
            teamSize: 1,
            topFive: false,
            tags: ['Django', 'Bootstrap', 'LESS', 'HTML', 'Python', 'CSS', 'MVC']
        },
        {
            name: 'Excurj Travel Website',
            company: 'University of Glasgow',
            description: 'Excurj Travel Website',
            startDate: '',
            endDate: '',
            link: 'http://excurj.pythonanywhere.com/',
            imageURL: 'images/projects/excurj.png',
            teamSize: 4,
            topFive: false,
            tags: ['Django', 'Bootstrap', 'LESS', 'HTML', 'Python', 'CSS', 'MVC']
        },
        {
            name: 'NUPP Conference Website',
            company: 'ASRANet Ltd',
            description: 'NUPP Conference Website',
            startDate: '',
            endDate: '',
            link: 'nupp.nuclearpowerplantconference.com/',
            imageURL: 'images/projects/NUPP.jpg',
            teamSize: 1,
            topFive: false,
            tags: ['Django', 'Bootstrap', 'LESS', 'HTML', 'Python', 'CSS', 'MVC']
        },
        {
            name: 'Turnip Wars Game',
            company: 'University West of Scotland',
            description: 'Turnip Wars Game',
            startDate: '',
            endDate: '',
            link: 'www.youtube.com/watch?v=rTdJZn8rM5o',
            imageURL: 'images/projects/turnipWars.png',
            teamSize: 1,
            topFive: true,
            tags: ['Phaser', 'HTML', 'Web Games', 'JavaScript', 'Google App Engine']
        },
        {
            name: 'CONFAB Conference Website',
            company: 'ASRANet Ltd',
            description: 'CONFAB Conference Website',
            startDate: '',
            endDate: '',
            link: 'www.fireandblast.co.uk/',
            imageURL: 'images/projects/confab.jpg',
            teamSize: 1,
            topFive: false,
            tags: ['Django', 'Bootstrap', 'LESS', 'HTML', 'Python', 'CSS', 'MVC']
        },
        {
            name: 'Pressure Input Project',
            company: 'University of Glasgow',
            description: 'Pressure Input Research Project',
            startDate: '',
            endDate: '',
            link: 'youtu.be/aA_zj2pinus',
            imageURL: 'images/projects/pressureProject.png',
            teamSize: 4,
            topFive: true,
            tags: ['Android', 'Java', 'Hardware', 'HCI', 'Research', 'Mobile Development']
        },
        {
            name: 'DISS Conference Website',
            company: 'ASRANet Ltd',
            description: 'DISS Conference Website',
            startDate: '',
            endDate: '',
            link: 'www.ship-dismantling.co.uk/',
            imageURL: 'images/projects/DISS.png',
            teamSize: 1,
            topFive: false,
            tags: ['Django', 'Bootstrap', 'LESS', 'HTML', 'Python', 'CSS', 'MVC']
        },
        {
            name: 'AdWind Conference Website',
            company: 'ASRANet Ltd',
            description: 'AdWind Conference Website',
            startDate: '',
            endDate: '',
            link: 'www.adwind2017.com/',
            imageURL: 'images/projects/adwind.jpg',
            teamSize: 1,
            topFive: false,
            tags: ['Django', 'Bootstrap', 'LESS', 'HTML', 'Python', 'CSS', 'MVC']
        },
        {
            name: 'Masters Project',
            company: 'University of Glasgow',
            description: 'Masters Project',
            startDate: '',
            endDate: '',
            link: '',
            imageURL: 'images/projects/mastersProject.png',
            teamSize: 4,
            topFive: true,
            tags: ['Python', 'Numpy', 'Scipy', 'Data Science', 'Research', 'Multimedia']
        }/*,
         {
         name: 'Honours Project',
         company: 'University West of Scotland',
         description: 'Honours Project',
         startDate: '',
         endDate: '',
         link: '',
         imageURL: 'images/projects/honoursProject.png',
         teamSize: 4,
         topFive: false,
         tags: ['Game Development', 'HTML', 'JavaScript', 'jQuery', 'jQuery Mobile', 'Multimedia']
         },
         {
         name: 'Portfolio Website',
         company: 'Personal Project',
         description: 'Portfolio Website',
         startDate: '',
         endDate: '',
         link: '',
         imageURL: 'images/projects/honoursProject.png',
         teamSize: 4,
         topFive: false,
         tags: ['Angular', 'HTML', 'JavaScript', 'Bootstrap', 'CSS', 'chartJS]
         }*/
    ];

});

portfolioApp.controller('TimelineController', function ProjectsController($scope) {

    $scope.timeline = [
        {
            establishment: 'University West of Scotland',
            degree: 'BSc Computer Games Development',
            description: 'First Class Honours Degree',
            startDate: 'September 2011',
            endDate: 'May 2015'
        },
        {
            establishment: 'University of Glasgow',
            degree: 'MSc Computing Science',
            description: 'I have obtained an average of 68% in the 11 classes I have completed so far.',
            startDate: 'September 2015',
            endDate: 'September 2016'
        },
        {
            establishment: 'ASRANet Ltd',
            degree: 'Web Developer Intern',
            description: 'I was a web developer for a company that hosts conferences and courses in engineering for ' +
            'academics and industry figures. As I was the only one in the company with an academic background in ' +
            'computing I was trusted to build several web apps myself. I utilised several technologies such as Django, ' +
            'Python, HTML, CSS, JavaScript and LESS.',
            startDate: 'January 2016',
            endDate: 'July 2016'
        }
    ]
});

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc() {

    var items = $(".timeline li");

    for (var i = 0; i < items.length; i++) {

        if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
        }
    }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

portfolioApp.controller('MainController', function ProjectsController($scope) {

    var mainNav = angular.element('#myNav');

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

        items.each(function () {
            if ($(this).isOnScreen()) {
                onScreen = this.dataset.title;
                nextSection = true;
            }
            else {
                if (nextSection) {
                    nextSection = false;
                    nextSectionName = "#" + this.id;
                }
            }
        });

        $scope.sectionName = onScreen;
        $scope.nextSection = nextSectionName;
        $scope.$apply();

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