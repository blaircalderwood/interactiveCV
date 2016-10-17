require(['https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.js'], function (Chart) {
    var ctx = [document.getElementById("languagesChart").getContext("2d"),
        document.getElementById("technologiesChart").getContext("2d")];

    var labels = [];
    labels[0] = 'Least Experience';
    for (var i = 1; i < 10; i++) {
        labels[i] = '';
    }
    labels[10] = 'Most Experience     ';

    var labelNames = [["        JavaScript", "HTML", "CSS", "Python", "Java"],
        ["            Django", "Angular", "jQuery", "LESS", "Phaser", "Bootstrap"]];
    var data = [[10, 8, 8, 10, 5], [10, 5, 9, 7, 6, 8]];
    var colours = [
        [
            'rgba(255, 99, 132, 1)',
            'rgba(0, 191, 255, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 127 ,80, 1)'
        ],
        [
            'rgba(255, 99, 132, 1)',
            'rgba(0, 191, 255, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 127, 80, 1)',
            'rgba(186, 85, 211, 1)'
        ]
    ];

    var charts = [];

    for (var index = 0; index < 2; index++) {

        charts[index] = new Chart(ctx[index], {
            type: 'horizontalBar',
            data: {
                labels: labelNames[index],
                datasets: [{
                    data: data[index],
                    backgroundColor: colours[index]
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

        //Chart.defaults.global.defaultFontColor = '#fff';
        //Chart.defaults.global.defaultFontSize = 18;

    }

});