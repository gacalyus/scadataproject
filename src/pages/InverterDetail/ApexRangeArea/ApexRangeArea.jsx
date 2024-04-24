import { Box } from '@mui/material';
import Chart from 'react-apexcharts'


export default function ApexRangeArea() {

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
        forecastDataPoints: {
            count: 10
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
            name: 'Team B Range',

            data: [
                {
                    x: '1',
                    y: [31, 31]
                },

            ]
        },

        {
            type: 'rangeArea',
            name: 'Team A Range',
            data: [
                {
                    x: '1',
                    y: [33, 36]
                },
                {
                    x: '2',
                    y: [49, 52]
                },
                {
                    x: '3',
                    y: [43, 49]
                },
                {
                    x: '4',
                    y: [37, 48]
                },
                {
                    x: '5',
                    y: [55, 74]
                },
                {
                    x: '6',
                    y: [59, 67]
                },
                {
                    x: '7',
                    y: [45, 49]
                },
                {
                    x: '8',
                    y: [24, 39]
                },
                {
                    x: '9',
                    y: [55, 59]
                },
                {
                    x: '10',
                    y: [59, 67]
                }
            ]
        },

        {
            type: 'line',
            name: 'Team B Median',
            data: [
                {
                    x: '1',
                    y: 33
                },
                {
                    x: '2',
                    y: 50
                },
                {
                    x: '3',
                    y: 44
                },
                {
                    x: '4',
                    y: 39
                },
                {
                    x: '5',
                    y: 51
                },
                {
                    x: '6',
                    y: 57
                },
                {
                    x: '7',
                    y: 45
                },
                {
                    x: '8',
                    y: 28
                },
                {
                    x: '9',
                    y: 56
                },
                {
                    x: '10',
                    y: 58
                },
                // {
                //     x: '11',
                //     y: 43
                // },
                // {
                //     x: '12',
                //     y: 40
                // },
                // {
                //     x: '13',
                //     y: 42
                // },
                // {
                //     x: '14',
                //     y: 43
                // }
            ]
        },
        {
            type: 'line',
            name: 'Team A Median',
            data: [
                {
                    x: '1',
                    y: 33
                },
                {
                    x: '2',
                    y: 49
                },
                {
                    x: '3',
                    y: 43
                },
                {
                    x: '4',
                    y: 37
                },
                {
                    x: '5',
                    y: 55
                },
                {
                    x: '6',
                    y: 59
                },
                {
                    x: '7',
                    y: 45
                },
                {
                    x: '8',
                    y: 24
                },
                {
                    x: '9',
                    y: 55
                },
                {
                    x: '10',
                    y: 59
                },
                // {
                //     x: '11',
                //     y: 43
                // },
                // {
                //     x: '12',
                //     y: 44
                // },
                // {
                //     x: '13',
                //     y: 45
                // },
                // {
                //     x: '14',
                //     y: 41
                // }
            ]
        },
        {
            type: 'line',
            name: 'Team C Median',
            data: [
                {
                    x: '1',
                    y: 36
                },
                {
                    x: '2',
                    y: 52
                },
                {
                    x: '3',
                    y: 49
                },
                {
                    x: '4',
                    y: 48
                },
                {
                    x: '5',
                    y: 74
                },
                {
                    x: '6',
                    y: 67
                },
                {
                    x: '7',
                    y: 49
                },
                {
                    x: '8',
                    y: 39
                },
                {
                    x: '9',
                    y: 59
                },
                {
                    x: '10',
                    y: 67
                },

            ]
        },
        {
            type: 'line',
            name: 'Team D Median',
            data: [
                {
                    x: '1',
                    y: 23
                },
                {
                    x: '2',
                    y: 40
                },
                {
                    x: '3',
                    y: 34
                },
                {
                    x: '4',
                    y: 29
                },
                {
                    x: '5',
                    y: 41
                },
                {
                    x: '6',
                    y: 47
                },
                {
                    x: '7',
                    y: 35
                },
                {
                    x: '8',
                    y: 18
                },
                {
                    x: '9',
                    y: 46
                },
                {
                    x: '10',
                    y: 48
                },

            ]
        },
        {
            type: 'rangeArea',
            name: 'Team D Range',
            data: [
                {
                    x: '1',
                    y: [23, 33]
                },
                {
                    x: '2',
                    y: [40, 49]
                },
                {
                    x: '3',
                    y: [34, 43]
                },
                {
                    x: '4',
                    y: [29, 37]
                },
                {
                    x: '5',
                    y: [41, 55]
                },
                {
                    x: '6',
                    y: [47, 59]
                },
                {
                    x: '7',
                    y: [35, 45]
                },
                {
                    x: '8',
                    y: [18, 24]
                },
                {
                    x: '9',
                    y: [46, 55]
                },
                {
                    x: '10',
                    y: [48, 59]
                }
            ]
        },
        {
            type: 'line',
            name: 'Team E Median',
            data: [
                {
                    x: '1',
                    y: 23
                },
                {
                    x: '2',
                    y: 45
                },
                {
                    x: '3',
                    y: 41
                },
                {
                    x: '4',
                    y: 38
                },
                {
                    x: '5',
                    y: 54
                },
                {
                    x: '6',
                    y: 47
                },
                {
                    x: '7',
                    y: 29
                },
                {
                    x: '8',
                    y: 19
                },
                {
                    x: '9',
                    y: 39
                },
                {
                    x: '10',
                    y: 47
                },

            ]
        },
    ]

    return (
        <Box style={{ display: "flex", justifyContent: 'center' }} >
            <Chart options={options} series={series} type="rangeArea" width='700' height={460} />
        </Box>
    );
}