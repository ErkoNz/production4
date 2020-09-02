import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import './css/csspreSvk.css'
function DougnatChart(props) {
    // console.log(props.dataForGraph[props.dataForGraph.length - 1])
    // console.log(props)
    const data = {
        labels: ['Nakazení', 'Vyliečení', 'Úmrtia'],
        datasets: [{
            label: '# of Votes',
            data: [props.cases, props.recovered, props.deaths],
            backgroundColor: [
                '#f85959',
                '#17b978',
                '#430d27',
            ],
        }]
    }


    // const data = {
    //     labels: props.dataForGraph.labels,
    //     datasets: [{
    //         label: '# of Votes',
    //         data: props.dataForGraph.data,
    //         backgroundColor: props.dataForGraph.backgroundColor,
    //     }]
    // }

    // const data = {
    //     labels: ['Nakazení', 'Vyliečení'],
    //     datasets: [{
    //         label: '# of Votes',
    //         data: [10, 20],
    //         backgroundColor: ['red', 'blue'],
    //     }]
    // }


    return (
        props && data ?
            <div>
                {/* {console.log("DougnatChart")} */}
                <div className="dougnut">
                    <Doughnut
                        data={data}
                        height={300}
                        options={{
                            maintainAspectRatio: false,
                            tooltips: {
                                callbacks: {
                                    title: function (tooltipItem, data) {
                                        return data['labels'][tooltipItem[0]['index']];
                                    },
                                    label: function (tooltipItem, data) {
                                        var dataset = data.datasets[0]
                                        // console.log(dataset.data[0])
                                        let totalSpolu = dataset.data[0] + dataset.data[1] + dataset.data[2]
                                        let percent = data['datasets'][0]['data'][tooltipItem['index']] / totalSpolu
                                        // console.log(data['datasets'][0]['data'][tooltipItem['index']])
                                        // console.log(dataset._meta[0].total)
                                        // console.log(dataset.data[tooltipItem['index']])
                                        // if (dataset)
                                        //     var percent = Math.round((dataset.data[tooltipItem['index']] / dataset._meta[0].total) * 100)
                                        return data['datasets'][0]['data'][tooltipItem['index']] + " (" + Math.round(percent * 100) + "%)";
                                    },

                                    // label: function (tooltipItem, data) {
                                    //     var percent = Math.round((dataset.data[tooltipItem['index']] / dataset._meta[0].total) * 100)

                                    //     return data['datasets'][0]['data'][tooltipItem['index']] + " (" + percent + "%)";
                                    // }


                                    // afterLabel: function (tooltipItem, data) {
                                    //     var dataset = data['datasets'][0];
                                    //     var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
                                    //     return '(' + percent + '%)';
                                    // },
                                },
                            },
                            centerText: {
                                display: true,
                                text: `90%`
                            },
                            animation: {
                                duration: 2000,
                                easing: 'easeOutQuint',
                                // beforeDraw: function (chart) {
                                //     var width = chart.chart.width,
                                //         height = chart.chart.height,
                                //         ctx = chart.chart.ctx;
                                //     ctx.restore();
                                //     var fontSize = (height / 160).toFixed(2);
                                //     ctx.font = fontSize + "em sans-serif";
                                //     ctx.textBaseline = "top";
                                //     var text = "Foo-bar",
                                //         textX = Math.round((width - ctx.measureText(text).width) / 2),
                                //         textY = height / 2;
                                //     ctx.fillText(text, textX, textY);
                                //     ctx.save();
                                // },
                                // onProgress: function () {
                                //     var chartInstance = this.chart,
                                //         ctx = chartInstance.ctx;
                                //     ctx.textAlign = 'center';
                                //     ctx.fillStyle = "rgba(0, 0, 0, .75)";
                                //     ctx.textBaseline = 'bottom';


                                //     if (window.innerWidth > 1220) {
                                //         ctx.font = "bold 12px Arial";
                                //     }
                                //     else if (window.innerWidth > 720) {
                                //         ctx.font = "bold 11px Arial";
                                //     }
                                //     else {
                                //         ctx.font = "bold 6px Arial";
                                //     }
                                //     // if (window.innerWidth > 720) {
                                //     this.data.datasets.forEach(function (dataset, i) {
                                //         var meta = chartInstance.controller.getDatasetMeta(i);
                                //         meta.data.forEach(function (bar, index) {
                                //             var data = dataset.data[index];
                                //             console.log(bar._model)
                                //             console.log(index)
                                //             // ctx.fillText(data, bar._model.x + index * 100, bar._model.y - 4);
                                //             ctx.fillText("o", bar._model.x + index * 100, bar._model.y - 4);
                                //             // console.log(data, bar._model.x + 0, bar._model.y - 4)
                                //             // console.log(Math.abs(data) > 999 ? Math.sign(data) * ((Math.abs(data) / 1000).toFixed(1)) + 'k' : Math.sign(data) * Math.abs(data))
                                //         })
                                //     })
                                //     // }
                                // }
                            }
                        }
                        }
                    />
                </div>

            </div>
            : null
    )
}

export default DougnatChart
