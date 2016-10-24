require(['https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.js'], function (Chart) {

        var chartsData = [
        {
            chart: '',
            section: 'Languages',
            ctx: document.getElementById("languagesChart").getContext("2d"),
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

});