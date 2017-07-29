angular.module('HighchartService', [])
    .service('HighchartsService', ['$http', function ($http){
        this.generateLineChart = (titleText, subtitleText, yAxisTitle, 
            legend, series, plotOptions) => {
            let highchartLineObject = {
                title: {
                    text: titleText
                },
                subtitle: {
                    text: subtitleText
                },
                yAxis: {
                    title: {
                        text: yAxisTitle
                    }
                },
                legend: legend,

                plotOptions: plotOptions,
                series: series
            };
            return highchartLineObject;
        };
    }

]);
