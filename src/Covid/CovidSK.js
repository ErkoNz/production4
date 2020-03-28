import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import styled, { keyframes } from "styled-components";
import './covid.css'

function CovidSK() {
    const [dataSvk, setDataSvk] = useState()
    const [dataTests, setDataTests] = useState()

    const svk = 'https://mapa.covid.chat/map_data'
    const testsSvk = 'https://services.arcgis.com/s2Iyql6ZO52bpobk/arcgis/rest/services/2020_COVID_SK_DENNE_PUBLIC_VIEW/FeatureServer/0/query?f=json&where=1%3D1&spatialRel=esriSpatialRelIntersects&outFields=*'

    useEffect(() => {
        LoadData()
    }, [])

    const LoadData = async () => {
        const response = await fetch(svk)
        const data = await response.json()
        setDataSvk([data])

        const response2 = await fetch(testsSvk)
        const data2 = await response2.json()
        setDataTests(data2.features)
    }

    function handleData() {
        return (
            <div>
                Počet testovaných: {dataSvk[0].tested} <br />
                Počet nakazených: {dataSvk[0].infected}<br />
                Počet mŕtvych: {dataSvk[0].deaths}<br />
                Počet vyliečených: {dataSvk[0].recovered}<br />
            </div>
        )
    }
    const Heading = keyframes`
    0%{
        height: 0%;
      }
      100%{
        height: 100%;
      }
    `;

    const HomeHeader = styled.div`
    height: 100%;
    animation: ${Heading} 2s;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    `;

    function handleGraph() {
        const pom = dataSvk[0].chart
        const pom2TESTS = dataTests
        const MaxInfected = 100 / pom[Object.keys(pom).length - 1].infected
        let MaxDaily = 0
        if (dataTests) {
            pom2TESTS.map((pom1, index) => {
                let pomMax = pom2TESTS[index].attributes.nove_negativne_testy
                if (pomMax > MaxDaily) {
                    MaxDaily = pomMax
                }
            })
            MaxDaily = MaxDaily / 100
        }
        return (
            <>
                <div className="svkGraf">
                    {
                        pom.map((pom1, index) =>
                            <HomeHeader key={index}>
                                <div className="dayXFirst" style={{ height: `calc(${MaxInfected * pom1.infected}% + 10px)` }} >
                                    <CountUp className="countup countAll" end={parseInt(pom1.infected)} />
                                    {/* <CountUp className="" end={parseInt(pom1[1])} /> */}
                                    {pom[index - 1]
                                        ? <CountUp className="countupFirstRed" prefix="+" end={pom[index].infected - pom[index - 1].infected} />
                                        : ''}
                                    <div className="spanDate">{pom1.date}</div>
                                </div>
                            </HomeHeader>
                        )
                    }
                </div>
                <div className="svkGraf">
                    {
                        pom.map((pom1, index) =>
                            <HomeHeader key={index}>
                                {pom[index - 1] ?
                                    <>
                                        <div className="dayX" style={{ height: `calc(${(pom[index].infected - pom[index - 1].infected) / MaxDaily}% + 5px)` }} >
                                            {/* {console.log((pom[index].infected - pom[index - 1].infected) / MaxDaily)} */}
                                            <CountUp className="countup2 countAll" end={pom[index].infected - pom[index - 1].infected} />
                                            <div className="spanDate">{pom1.date}</div>
                                        </div>
                                        <>
                                            {dataTests ?
                                                dataTests[index] ?
                                                    <div className="dayX2" style={{ height: `calc(${dataTests[index].attributes.nove_negativne_testy / MaxDaily}% + 5px)` }} >
                                                        <CountUp className="countupX2 countAll" end={dataTests[index].attributes.nove_negativne_testy} />

                                                    </div>

                                                    : ''
                                                : ''}
                                        </>
                                    </>
                                    :
                                    <>
                                        <div className="dayX" style={{ height: ` 5px` }} >
                                            <CountUp className="countup countAll" end={1} />
                                            <div className="spanDate">{"6-3-2020"}</div>
                                        </div>
                                        <div className="dayX2 dayX2pom" style={{ height: `calc(76.69% + 5px)` }} >
                                            {dataTests ? <CountUp className="countupX2 countAll" end={dataTests[0].attributes.nove_negativne_testy} /> : ''}
                                        </div>
                                    </>
                                }
                            </HomeHeader>
                        )
                    }
                </div>
            </>
        )
    }

    return (
        <div className="covidApp">
            {
                dataSvk
                    ? <>
                        {handleData()}
                        {handleGraph()}

                    </>
                    : ''
            }
        </div >
    )
}

export default CovidSK
