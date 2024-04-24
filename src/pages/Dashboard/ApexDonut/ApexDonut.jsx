import { useMemo, useState } from 'react';
import Chart from 'react-apexcharts'


export default function ApexDonut({ label, labelArray, data, colors, width }) {
    const [series, setSeries] = useState([])
    const renderValue = () => {
        if (!data) return;
        const totalvalue = data["total"];
        const numbervalue = Object.values(data);
        numbervalue.splice(numbervalue.indexOf(totalvalue), 1);
        setSeries(Object.values(numbervalue));
    }
    useMemo(() => renderValue(), [data])
    const options = {
        labels: labelArray ?? [""],
        plotOptions: {
            pie: {
                donut: {
                    size: "85%",
                    labels: {
                        show: true,
                        total: {
                            show: data?.netExported ? false : true,
                            showAlways: true,
                            label: label,
                            fontSize: '12',
                            color: 'grey'
                        }
                    }
                },
                customScale: 1.1
            }
        },

        colors: colors,
        chart: {
            type: 'donut',
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },

    }

    return (
        <div className="donut" style={{ display: "flex", justifyContent: 'center' }} >
            <Chart options={options} series={series} type="donut" width={width} />
        </div>
    );
}