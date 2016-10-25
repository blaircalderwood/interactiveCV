angular.module('timeline').component('timeline', {
    templateUrl: 'core/timeline/timeline_template.html',
    controller: [function TimelineController() {

    this.timeline = [
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
            description: 'Masters Degree with Merit',
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
    ];


}]});

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
