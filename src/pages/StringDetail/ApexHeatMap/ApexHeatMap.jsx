import { useEffect, useMemo, useState } from 'react';
import ReactApexChart from 'react-apexcharts';



export default function ApexHeatMap({ label, data, colors }) {

    const [series, setSeries] = useState([{
        name: 'Metric1',
        data: [{
            x: '06:00',
            y: 22
        }, {
            x: '07:00',
            y: 29
        }, {
            x: '08:00',
            y: 13
        }, {
            x: '09:00',
            y: 32
        }, {
            x: '10:00',
            y: 24
        }, {
            x: '11:00',
            y: 43
        }, {
            x: '12.00',
            y: 19
        }, {
            x: '13:00',
            y: 32
        }, {
            x: '14:00',
            y: 26
        }, {
            x: '15:00',
            y: 28
        }, {
            x: '16:00',
            y: 20
        }, {
            x: '17:00',
            y: 33
        }, {
            x: '18:00',
            y: 1
        }, {
            x: '19:00',
            y: 3
        }]
    },
    {
        name: 'Metric2',
        data: [{
            x: '06:00',
            y: 22
        }, {
            x: '07:00',
            y: 29
        }, {
            x: '08:00',
            y: 13
        }, {
            x: '09:00',
            y: 32
        }, {
            x: '10:00',
            y: 24
        }, {
            x: '11:00',
            y: 43
        }, {
            x: '12.00',
            y: 19
        }, {
            x: '13:00',
            y: 32
        }, {
            x: '14:00',
            y: 26
        }, {
            x: '15:00',
            y: 28
        }, {
            x: '16:00',
            y: 20
        }, {
            x: '17:00',
            y: 33
        }, {
            x: '18:00',
            y: 1
        }, {
            x: '19:00',
            y: 3
        }]
    },
    {
        name: 'Metric3',
        data: [{
            x: '06:00',
            y: 22
        }, {
            x: '07:00',
            y: 29
        }, {
            x: '08:00',
            y: 13
        }, {
            x: '09:00',
            y: 32
        }, {
            x: '10:00',
            y: 24
        }, {
            x: '11:00',
            y: 43
        }, {
            x: '12.00',
            y: 19
        }, {
            x: '13:00',
            y: 32
        }, {
            x: '14:00',
            y: 26
        }, {
            x: '15:00',
            y: 28
        }, {
            x: '16:00',
            y: 20
        }, {
            x: '17:00',
            y: 33
        }, {
            x: '18:00',
            y: 1
        }, {
            x: '19:00',
            y: 3
        }]
    },
    {
        name: 'Metric4',
        data: [{
            x: '06:00',
            y: 22
        }, {
            x: '07:00',
            y: 29
        }, {
            x: '08:00',
            y: 13
        }, {
            x: '09:00',
            y: 32
        }, {
            x: '10:00',
            y: 24
        }, {
            x: '11:00',
            y: 43
        }, {
            x: '12.00',
            y: 19
        }, {
            x: '13:00',
            y: 32
        }, {
            x: '14:00',
            y: 26
        }, {
            x: '15:00',
            y: 28
        }, {
            x: '16:00',
            y: 20
        }, {
            x: '17:00',
            y: 33
        }, {
            x: '18:00',
            y: 1
        }, {
            x: '19:00',
            y: 3
        }]
    },
    {
        name: 'Metric5',
        data: [{
            x: '06:00',
            y: 22
        }, {
            x: '07:00',
            y: 29
        }, {
            x: '08:00',
            y: 13
        }, {
            x: '09:00',
            y: 32
        }, {
            x: '10:00',
            y: 24
        }, {
            x: '11:00',
            y: 43
        }, {
            x: '12.00',
            y: 19
        }, {
            x: '13:00',
            y: 32
        }, {
            x: '14:00',
            y: 26
        }, {
            x: '15:00',
            y: 28
        }, {
            x: '16:00',
            y: 20
        }, {
            x: '17:00',
            y: 33
        }, {
            x: '18:00',
            y: 10
        }, {
            x: '19:00',
            y: 30
        }]
    },
    {
        name: 'Metric6',
        data: [{
            x: '06:00',
            y: 22
        }, {
            x: '07:00',
            y: 29
        }, {
            x: '08:00',
            y: 13
        }, {
            x: '09:00',
            y: 32
        }, {
            x: '10:00',
            y: 24
        }, {
            x: '11:00',
            y: 43
        }, {
            x: '12.00',
            y: 19
        }, {
            x: '13:00',
            y: 32
        }, {
            x: '14:00',
            y: 26
        }, {
            x: '15:00',
            y: 28
        }, {
            x: '16:00',
            y: 20
        }, {
            x: '17:00',
            y: 33
        }, {
            x: '18:00',
            y: 1
        }, {
            x: '19:00',
            y: 3
        }]
    }
    ])
    const renderValue = () => {
        if (!data) return;
        const totalvalue = data["total"];
        const numbervalue = Object.values(data);
        numbervalue.splice(numbervalue.indexOf(totalvalue), 1);
        // setSeries(Object.values(numbervalue));
    }
    useMemo(() => renderValue(), [data])
    const options = {
        chart: {
            type: 'heatmap',
            toolbar: {
                show: false
            },
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#FF0000"],
        title: {
            text: ' '
        },

    }


    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="heatmap" height={250} />
        </div>
    );
}