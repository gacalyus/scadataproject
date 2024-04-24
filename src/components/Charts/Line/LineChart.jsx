import React from "react";
import { Line } from "react-chartjs-2";
import { useTranslation } from 'react-i18next';

function LineChart({ chartData }) {
    const { t } = useTranslation();

    return (
        <div className="chart-container" style={{ height: "400px", width: "100%" }}>

            <Line
                data={chartData}
                width={"100%"}
                height={"100%"}
                options={{
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: t('years'),
                                font: {
                                    size: 15
                                }
                            },

                        },
                        y: {
                            title: {
                                display: true,
                                text: '$K',
                                font: {
                                    size: 15
                                }
                            }
                        },

                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    //width ve height değerini manuel değiştirebilmek için 
                    maintainAspectRatio: false
                }}
            // options={{
            //     plugins: {
            //         title: {
            //             display: true,
            //             text: t('active-alarms'),
            //             align: 'start',
            //             color: 'blue',
            //             font: {
            //                 size: 24
            //             },
            //             // padding: {
            //             //   top: 30,
            //             //   bottom: 30
            //             // },
            //             responsive: true,
            //             animation: {
            //                 animateScale: true,
            //             }
            //         },
            //         legend: {
            //             display: true,
            //             // position: "right",
            //             align: "start",
            //             labels: {
            //                 usePointStyle: true,
            //                 pointStyle: "circle",
            //                 font: {
            //                     size: 11
            //                 },
            //             },
            //         },
            //     },
            //     layout: {
            //         // padding: {
            //         //   top: 20
            //         // }
            //     },

            // }}
            // plugins={[textCenter]}
            />
        </div>
    );
}
export default LineChart;