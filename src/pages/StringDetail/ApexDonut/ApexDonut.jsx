import { useEffect, useMemo, useState } from 'react';
import Chart from 'react-apexcharts'


export default function ApexDonut({ label, data, colors, labelArray }) {
    const [series, setSeries] = useState([])
    const renderValue = () => {
        if (!data) return;
        const totalvalue = data["total"];
        const numbervalue = Object.values(data);
        if (data?.warning) {
            numbervalue.splice(numbervalue.indexOf(totalvalue), 1);
        } else {
            numbervalue.pop();
        }
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
                            show: true,
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
            <Chart options={options} series={series} type="donut" width="195" />
        </div>
    );
}