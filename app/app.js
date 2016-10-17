'use strict';

// Declare app level module which depends on views, and components
var portfolioApp = angular.module('myApp', [
    'ngAnimate',
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
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
        },
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
            tags: ['Angular', 'HTML', 'JavaScript', 'Bootstrap', 'CSS']
        }
    ];

});

portfolioApp.controller('EducationController', function ProjectsController($scope) {

    $scope.educations = [
        {
            establishment: 'University of Glasgow',
            degree: 'MSc Computing Science',
            description: 'I have obtained an average of 68% in the 11 classes I have completed so far.',
            startDate: 'September 2015',
            endDate: 'September 2016'
        },
        {
            establishment: 'University West of Scotland',
            degree: 'BSc Computer Games Development',
            description: 'First Class Honours Degree',
            startDate: 'September 2011',
            endDate: 'May 2015'
        }
    ]
});

portfolioApp.controller('WorkController', function ProjectsController($scope) {

    $scope.workExperience = [
        {
            establishment: 'ASRANet Ltd',
            degree: 'Web Developer Intern',
            description: 'I was a web developer for a company that hosts conferences and courses in engineering for ' +
            'academics and industry figures. As I was the only one in the company with an academic background in ' +
            'computing I was trusted to build several web apps myself. I utilised several technologies such as Django, ' +
            'Python, HTML, CSS, JavaScript and Less.',
            startDate: 'January 2016',
            endDate: 'July 2016'
        }
    ]
});
