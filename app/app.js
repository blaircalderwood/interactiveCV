'use strict';

// Declare app level module which depends on views, and components
var portfolioApp = angular.module('myApp', [
    'ngAnimate',
    'ngRoute',
    'angular-inview',
    'ui.bootstrap',
    'duScroll',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
}]);

portfolioApp.controller('ProjectsController', function ProjectsController($scope, $sce) {

    $scope.projects = [
        {
            name: 'Parking Space Finder',
            company: 'University of Glasgow',
            description: 'An app that allows the user to select a nearby car park and view a map of all available ' +
            'parking spaces. A sonar based distance sensor was placed in each parking space and connected to an Arduino' +
            ' board. This determined whether a car was parked in the space and updated the user\'s car park map ' +
            'appropriately. ',
            startDate: 'October 2015',
            endDate: 'December 2015',
            link: 'https://www.youtube.com/embed/j0bbQysxf7Q',
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
            link: 'https://www.offshore-renewables.co.uk/',
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
            link: 'https://www.bio-materials.co.uk/',
            imageURL: 'images/projects/biomat.png',
            teamSize: 1,
            topFive: false,
            tags: ['Django', 'Bootstrap', 'LESS', 'HTML', 'Python', 'CSS', 'MVC']
        },
        {
            name: 'Excurj Travel Website',
            company: 'University of Glasgow',
            description: 'Myself and three team members created a travel website for a university project. Users can ' +
            'visit the website to find people who live in the cities they are visiting. This way they can be shown ' +
            'around the city by people who really know it.',
            startDate: 'February 2016',
            endDate: 'April 2016',
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
            startDate: 'January 2016',
            endDate: 'February 2016',
            link: 'https://nupp.nuclearpowerplantconference.com/',
            imageURL: 'images/projects/NUPP.jpg',
            teamSize: 1,
            topFive: false,
            tags: ['Django', 'Bootstrap', 'LESS', 'HTML', 'Python', 'CSS', 'MVC']
        },
        {
            name: 'Turnip Wars Game',
            company: 'University West of Scotland',
            description: 'Turnip Wars Game',
            startDate: 'September 2014',
            endDate: 'December 2014',
            link: 'https://www.youtube.com/embed/rTdJZn8rM5o',
            imageURL: 'images/projects/turnipWars.png',
            teamSize: 2,
            topFive: true,
            tags: ['Phaser', 'HTML', 'Web Games', 'JavaScript', 'Google App Engine']
        },
        {
            name: 'CONFAB Conference Website',
            company: 'ASRANet Ltd',
            description: 'CONFAB Conference Website',
            startDate: '',
            endDate: '',
            link: 'https://www.fireandblast.co.uk/',
            imageURL: 'images/projects/confab.jpg',
            teamSize: 1,
            topFive: false,
            tags: ['Django', 'Bootstrap', 'LESS', 'HTML', 'Python', 'CSS', 'MVC']
        },
        {
            name: 'Pressure Input Project',
            company: 'University of Glasgow',
            description: 'A novel input method involving the use of pressure pads was developed to attempt to increase ' +
            'the mobile typing speed of the average user. This input method works in conjunction with a standard mobile ' +
            'keyboard. The user will switch between keyboard views (lowercase, uppercase and numbers/symbols) by ' +
            'applying a small amount of pressure to the side of the phone. Tests show that this method is a viable ' +
            'alternative to the standard input method for controlling keyboard views as performance between the two ' +
            'input methods is relatively similar.',
            startDate: 'October 2015',
            endDate: 'December 2015',
            link: 'https://www.youtube.com/embed/aA_zj2pinus',
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
            link: 'https://www.ship-dismantling.co.uk/',
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
            link: 'https://www.adwind2017.com/',
            imageURL: 'images/projects/adwind.jpg',
            teamSize: 1,
            topFive: false,
            tags: ['Django', 'Bootstrap', 'LESS', 'HTML', 'Python', 'CSS', 'MVC']
        },
        {
            name: 'Masters Project',
            company: 'University of Glasgow',
            description: 'Masters Project',
            startDate: 'June 2016',
            endDate: 'September 2016',
            link: '',
            imageURL: 'images/projects/mastersProject.png',
            teamSize: 1,
            topFive: true,
            tags: ['Python', 'Numpy', 'Scipy', 'Data Science', 'Research', 'Multimedia']
        },
        {
            name: 'Portfolio Website',
            company: 'Personal Project',
            description: 'Portfolio Website',
            startDate: 'October 2016',
            endDate: '',
            link: '',
            imageURL: 'images/projects/portfolio.png',
            teamSize: 1,
            topFive: false,
            tags: ['Angular', 'HTML', 'JavaScript', 'Bootstrap', 'CSS', 'chartJS']
        },
        {
            name: 'Honours Project',
            company: 'University West of Scotland',
            description: 'A simple web-based game editor that allows users to create sprites and use them in a game. ' +
            'Sprites can be manipulated, for example moved towards the mouse at a fixed speed, upon completion of specified ' +
            'events e.g. a mouse move event. The game editor includes a physics engine and so collisions between sprites ' +
            'are possible.',
            startDate: '',
            endDate: '',
            link: '',
            imageURL: 'images/projects/uws.png',
            teamSize: 1,
            topFive: false,
            tags: ['Game Development', 'HTML', 'JavaScript', 'jQuery', 'jQuery Mobile', 'Multimedia']
        }
    ];


    $scope.hideOverlay = function (e) {

        if (e.target.id == "overlay" || e.target.id == "overlayCross") {
            console.log(e.target.id);

            $scope.overlayShow = false;
            $scope.overlayProject = {};

        }
    };

    $scope.showOverlay = function () {
        $scope.overlayShow = true;
        $scope.overlayProject = this.project;
    };

    $scope.getNumber = function (num) {
        return new Array(num);
    };

    $scope.toSrc = function (src) {
        return $sce.trustAsResourceUrl(src);
    };

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

portfolioApp.controller('ContactController', function ContactController($scope) {

    $scope.sendEmail = function () {
        emailjs.send("gmail", "contact_message", {
            name: $scope.contactName, email: $scope.contactEmail,
            message: $scope.contactMessage
        });

        $scope.contactName = '';
        $scope.contactEmail = '';
        $scope.contactMessage = 'Your message has been sent.';

        setTimeout(function () {
            $scope.contactMessage = '';
            $scope.$apply();
        }, 1000)
    }

});

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