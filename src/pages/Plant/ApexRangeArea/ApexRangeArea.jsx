import { Box } from '@mui/material';
import Chart from 'react-apexcharts'


export default function ApexRangeArea({ graphData }) {
    if (graphData == null)
        return;


    var producedEnergyLine = [];
    var predictionLineRangeTop = [];
    var predictionLineRangeBottom = [];

    if (graphData.producedEnergy.length > 0) {

        graphData.producedEnergy.map((item, index) => {
            var tempDate = new Date(item.date);
            producedEnergyLine.push({ "x": tempDate.getHours(), "y": (Math.round((item.producedEnergy < 0 ? item.producedEnergy * -1 : item.producedEnergy) * 100) / 100).toFixed(2) });
        });
        producedEnergyLine.sort((a, b) => a.x > b.x ? 1 : -1);
    }

    if (graphData.prediction != null) {
        graphData.prediction.map((item) => {
            var tempDate = new Date(item.date);
            predictionLineRangeTop.push({
                "x": tempDate.getHours(),
                "y": [
                    (Math.round((item.maxThreshold < 0 ? item.maxThreshold * -1 : item.maxThreshold) * 100) / 100).toFixed(2),
                    (Math.round((item.prediction < 0 ? item.prediction * -1 : item.prediction) * 100) / 100).toFixed(2)
                ]
            })
        });

        graphData.prediction.map((item) => {
            var tempDate = new Date(item.date);
            predictionLineRangeBottom.push({
                "x": tempDate.getHours(),
                "y": [
                    (Math.round((item.prediction < 0 ? item.prediction * -1 : item.prediction) * 100) / 100).toFixed(2),
                    (Math.round((item.minThreshold < 0 ? item.minThreshold * -1 : item.minThreshold) * 100) / 100).toFixed(2)
                ]
            })
        });

    }






    const options = {
        chart: {
            height: 350,
            type: 'rangeArea',
            animations: {
                speed: 500
            },
            toolbar: {
                show: false
            },
        },
        responsive: [
            {
                breakpoint: 1000,
                options: {
                    plotOptions: {
                        bar: {
                            horizontal: false
                        }
                    },
                    legend: {
                        position: "bottom"
                    }
                }
            }
        ],
        yaxis: [{
            title: {
                text: 'Energy Production (kWh)',
                style: {
                    fontWeight: 400,
                    fontSize: '14px'
                }
            },

        }],
        colors: ['#d4526e', '#33b2df', '#000000', '#33b2df', '#FB7777', '#64D993', '#64D99329', "#6a329f"],
        dataLabels: {
            enabled: false
        },
        fill: {
            opacity: [0.24, 0.24, 1, 1]
        },
        stroke: {
            curve: 'straight',
            width: [0, 0, 2, 2, 1, 1, 1, 2]
        },
        legend: {
            show: false,
            customLegendItems: ['Team B', 'Team A',],
            inverseOrder: true
        },
        //çizgi üzerindeki noktalar
        markers: {
            hover: {
                sizeOffset: 5
            }
        }
    }
    const series = [

        {
            type: 'rangeArea',
            name: 'Prediction Range Top',
            data: predictionLineRangeTop
        },

        {
            type: 'rangeArea',
            name: 'Prediction LineBottom',
            data: predictionLineRangeBottom
        },
        {
            type: 'line',
            name: 'Produced Energy',
            data: producedEnergyLine
        },

    ]

    return (
        <Box style={{ display: "flex", justifyContent: 'center' }} >
            <Chart options={options} series={series} type="rangeArea" width='700' height={460} />
        </Box>
    );
}