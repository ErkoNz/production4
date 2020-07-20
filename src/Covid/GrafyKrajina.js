import React, { useState, useEffect } from 'react'
import BarGraf from './BarGraf';
import DougnatChart from './DougnatChart';

function GrafyKrajina({ match }) {

    const [dataforChart, setDataforChart] = useState()
    const [loadMoreData, setLoadMoreData] = useState({
        text: 'Zobraziť viac dni',
        bool: false
    })

    useEffect(() => {
        const fetchData = async () => {
            let response1, data1, datumy, valuesCases, valueRecovered, valueDeaths, dailyCases = [], valueActiveCases = []
            if (match.params.id === "Svet") {
                if (loadMoreData.bool === false)
                    response1 = await fetch(`https://disease.sh/v2/historical/All`)
                else
                    response1 = await fetch(`https://disease.sh/v2/historical/All?lastdays=all`)
                data1 = await response1.json()
                datumy = Object.keys(data1.cases)
                valuesCases = Object.values(data1.cases)
                valueRecovered = Object.values(data1.recovered)
                valueDeaths = Object.values(data1.deaths)

            }
            else {
                if (loadMoreData.bool === false)
                    response1 = await fetch(`https://disease.sh/v2/historical/${match.params.id}`)
                else
                    response1 = await fetch(`https://disease.sh/v2/historical/${match.params.id}/?lastdays=all`)

                data1 = await response1.json()
                datumy = Object.keys(data1.timeline.cases)
                valuesCases = Object.values(data1.timeline.cases)

                valueRecovered = Object.values(data1.timeline.recovered)

                valueDeaths = Object.values(data1.timeline.deaths)

            }

            datumy.map((jedenDatum, id) => {
                if (valuesCases[id] > 0) {
                    var d = new Date(jedenDatum);
                    var datestring = d.getDate() + ". " + (d.getMonth() + 1) + ". " + d.getFullYear()
                    return datumy[id] = datestring
                }
                else return null
            })

            // let testingX = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            // console.log("length: " + testingX.length)
            // testingX = testingX.slice(-8)


            valuesCases.map((oneCase, id) => {
                valueActiveCases[id] = oneCase - valueRecovered[id] - valueDeaths[id]
                if (id > 0) {
                    dailyCases[id - 1] = valuesCases[id] - valuesCases[id - 1]
                }

                return dailyCases
            })

            // console.log(dailyCases)



            // console.log(dailyCases)
            valuesCases = valuesCases.filter(jedno => jedno !== 0);
            valueRecovered = valueRecovered.splice(-valuesCases.length)
            valueDeaths = valueDeaths.splice(-valuesCases.length)
            datumy = datumy.splice(-valuesCases.length)
            dailyCases = dailyCases.slice(-valuesCases.length)
            valueActiveCases = valueActiveCases.slice(-valuesCases.length)
            setDataforChart(
                {
                    nacitatViacUdajov: loadMoreData.bool,
                    datumy: datumy,

                    dataSetsCases: {
                        datasets: [
                            {
                                label: "Celkový počet nakazených",
                                data: valuesCases,
                                backgroundColor: "rgb(249, 70, 68)",
                                fillColor: 'black',
                                hoverBackgroundColor: 'red',
                            }
                        ]
                    },

                    dataSetsDeaths: {
                        datasets: [
                            {
                                label: "Celkový počet úmrtí",
                                data: valueDeaths,
                                backgroundColor: "grey",
                                hoverBackgroundColor: 'grey',
                            }
                        ]
                    },

                    dataSetsRecovered: {
                        datasets: [
                            {
                                label: "Celkový počet vyliečených",
                                data: valueRecovered,
                                backgroundColor: "green",
                                hoverBackgroundColor: 'green',
                            }
                        ]
                    },

                    dataSetsActiveCases: {
                        datasets: [
                            {
                                label: "Celkový počet aktivnych prípadov",
                                data: valueActiveCases,
                                backgroundColor: "blue",
                                hoverBackgroundColor: 'blue',
                            }
                        ]
                    },

                    dataSetsDailyCases: {
                        datasets: [
                            {
                                label: "Denný prírastok nakazených",
                                data: dailyCases,
                                backgroundColor: "salmon",
                                hoverBackgroundColor: 'salmon',
                            }
                        ]
                    },

                }
            )

        }
        fetchData()

    }, [loadMoreData])


    const ZmenitLoadMoreData = () => {
        if (loadMoreData.bool === false)
            setLoadMoreData({
                text: 'Zobraziť menej dní',
                bool: !loadMoreData.bool
            })
        else {
            setLoadMoreData({
                text: 'Zobraziť viac dní',
                bool: !loadMoreData.bool
            })
        }
    }

    return (
        dataforChart ?
            <div className="testingGrafy">
                {console.log("graffyyyy")}

                {match.params.id === "Svet" ?
                    <h1>Covid-19 vo svete</h1>

                    :
                    < h1 > Covid - 19 v krajine {match.params.id}</h1>
                }

                <DougnatChart cases={dataforChart.dataSetsCases.datasets[0].data[dataforChart.dataSetsCases.datasets[0].data.length - 1]}
                    recovered={dataforChart.dataSetsRecovered.datasets[0].data[dataforChart.dataSetsRecovered.datasets[0].data.length - 1]}
                    deaths={dataforChart.dataSetsDeaths.datasets[0].data[dataforChart.dataSetsDeaths.datasets[0].data.length - 1]} />

                <div className="NacitatViacDniDoGrafov" onClick={ZmenitLoadMoreData}>
                    {loadMoreData.text}
                </div>


                <div >
                    <BarGraf props={dataforChart} />
                </div>
            </div >
            : null
    )
}

export default GrafyKrajina
