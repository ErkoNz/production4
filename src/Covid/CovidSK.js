import React, { useState, useEffect } from 'react'
// import CountUp from 'react-countup'
import styled, { keyframes } from "styled-components";
import './css/covid.css'
// import './tooltip.css'
import coronaIcon from "../imgs/coronaIcon.svg"
import wideArrow from "../imgs/wideArrow.svg"
import TabulkaMesta from "./TabulkaMesta"
import FormatNumber from './components/FormatNumber';
// import DataGrid from "./DataGrid"


// import DougnatChart from "./DougnatChart"

function CovidSK() {
    const [dataSvk, setDataSvk] = useState()
    const svk = 'https://mapa.covid.chat/map_data'
    // const [tabulkaMestaData, setTabulkaMestaData] = useState([])
    const [maxDate, setMaxDate] = useState()
    const [maxDateboolLean, setMaxDateboolLean] = useState(false)
    const [grafNegativneTesty, setGrafNegativneTesty] = useState({ stav: true, styling: { textDecoration: 'none' } })
    const [styleWideArrow, setStyleWideArrow] = useState()
    // const [toolTip, setToolTip] = useState({ background: 'red' })

    const [state, setState] = useState({
        dataSvk: dataSvk,
        direction: {
            price_usd: 'asc',
        }
    })

    useEffect(() => {

        const LoadData = async () => {
            const response = await fetch(svk)
            const data = await response.json()

            setMaxDate(Object.keys(data.chart).length - 25)

            setDataSvk([data])
            setState({
                dataSvk: data.map.sort((a, b) => (
                    state.direction['cases'] === 'asc'
                        ? parseFloat(a['cases']) - parseFloat(b['cases'])
                        : parseFloat(b['cases']) - parseFloat(a['cases'])
                )),
                direction: {
                    'cases': state.direction['cases'] === 'asc'
                        ? 'desc'
                        : 'asc'
                }
            })
        }

        LoadData()


    }, [])

    const negatTestyMoje = [83, 102, 50, 42, 120, 129, 118, 197, 228]

    // const LoadData = async () => {
    //     const response = await fetch(svk)
    //     const data = await response.json()

    //     setMaxDate(Object.keys(data.chart).length - 25)

    //     setDataSvk([data])
    //     setState({
    //         dataSvk: data.map.sort((a, b) => (
    //             state.direction['cases'] === 'asc'
    //                 ? parseFloat(a['cases']) - parseFloat(b['cases'])
    //                 : parseFloat(b['cases']) - parseFloat(a['cases'])
    //         )),
    //         direction: {
    //             'cases': state.direction['cases'] === 'asc'
    //                 ? 'desc'
    //                 : 'asc'
    //         }
    //     })
    // }

    function handleData() {
        let a = dataSvk[0].chart[Object.keys(dataSvk[0].tested_chart).length].recovered
        let b = dataSvk[0].chart[Object.keys(dataSvk[0].tested_chart).length - 1].recovered
        let c = a - b
        let newRecovered = 0
        if (c > 0) {
            newRecovered = a - b
        }

        a = dataSvk[0].chart[Object.keys(dataSvk[0].tested_chart).length].deaths
        b = dataSvk[0].chart[Object.keys(dataSvk[0].tested_chart).length - 1].deaths
        c = a - b
        let newDeaths = 0
        if (c > 0) {
            newDeaths = a - b
        }


        const GetTheDay = () => {
            const lastDay = dataSvk[0].tested_chart[Object.keys(dataSvk[0].tested_chart).length - 1].day
            if (lastDay === "Pondelok")
                return "pondelok"
            else if (lastDay === "Utorok")
                return "utorok"
            else if (lastDay === "Streda")
                return "stredu"
            else if (lastDay === "Štvrtok")
                return "štvrtok"
            else if (lastDay === "Piatok")
                return "piatok"
            else if (lastDay === "Sobota")
                return "sobotu"
            else return "nedeľu"

        }
        return (
            <div>
                <div className="cardsDiv">
                    <div className="cards cardsSVK">
                        <div className="topCard">
                            <div className="obrDiv">
                                <div className="circle">
                                    <img alt="" src={coronaIcon} />
                                </div>
                            </div>
                            <div className="textCard"><b>Slovenské údaje</b></div>
                        </div>
                        <div className="mainTextSK">
                            Počet testovaných: <FormatNumber prop={dataSvk[0].tested} /><br />
                                Z toho pozitívnych testov: {dataSvk[0].infected}<br />
                            Počet aktívnych prípadov: <b>{dataSvk[0].active}</b><br />
                                Počet vyliečených: <span style={{ color: "green" }}>{dataSvk[0].recovered}</span><br />
                            {dataSvk[0].deaths > 0 ? <>Počet úmrtí: {dataSvk[0].deaths}<br /></>
                                : null}
                        </div>
                    </div>

                    <div className="cards cardsSVK">
                        <div className="topCard"><div className="textCard"><b>Údaje za {GetTheDay()}</b></div></div>
                        <div className="mainTextSK">
                            Počet nových testovaných: <span>{dataSvk[0].tested_chart[Object.keys(dataSvk[0].tested_chart).length - 1].tested}</span><br />
                                Počet negatívnych testov: <span>{dataSvk[0].tested_chart[Object.keys(dataSvk[0].tested_chart).length - 1].tested - dataSvk[0].tested_chart[Object.keys(dataSvk[0].tested_chart).length - 1].infected}</span><br />
                                Počet pozitívnych testov: <span>+{dataSvk[0].tested_chart[Object.keys(dataSvk[0].tested_chart).length - 1].infected}</span>
                            {
                                newRecovered > 0 ?
                                    <> <br />Počet nových vyliečených: {newRecovered}</>
                                    : null
                            }
                            {
                                newDeaths > 0 ?
                                    <>  <br />Počet nových úmrtí: {newDeaths}</>
                                    : null
                            }
                        </div>
                    </div>


                </div>
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
    animation: ${Heading} .7s;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    `;

    function changeWideArrow() {
        if (!maxDateboolLean) {
            setMaxDate(-1)
            setStyleWideArrow({
                transform: 'rotateY(180deg)',
            })
        }
        else {
            setMaxDate(Object.keys(dataSvk[0].chart).length - 25)
            setStyleWideArrow({
                transform: 'rotateY(0deg)',
            })
        }
        // dataSvk
        setMaxDateboolLean(!maxDateboolLean)
    }

    function handleGraphAktivnePripady() {
        let maxAktivnychInfikovanych = 0
        dataSvk[0].chart.map(day1 => {
            if (maxAktivnychInfikovanych < (day1.infected - day1.recovered - day1.deaths))
                maxAktivnychInfikovanych = (day1.infected - day1.recovered - day1.deaths)
            return maxAktivnychInfikovanych
        })
        const MaxInfected = 100 / maxAktivnychInfikovanych

        // function testHover() {
        //     setToolTip({
        //         background: 'blue'
        //     })
        // }

        // function testLeave() {
        //     setToolTip({
        //         background: 'red'
        //     })
        // }
        return (
            <div className="outsideDivGraf">
                <h1>Aktívne prípady</h1>
                <div className="test" onClick={changeWideArrow} style={styleWideArrow}>
                    <div className="wideArrow">
                        <img alt="" src={wideArrow} />
                    </div>
                </div>

                <div className="svkGraf">
                    {dataSvk[0].chart.map((day1, index) =>
                        index > maxDate ?
                            <HomeHeader key={index}>
                                {/* <div className="divInGraf" style={toolTip}>{day1.infected}</div> */}
                                <div className="aktivnePripadyGraf" style={{ height: `calc(${MaxInfected * (day1.infected - day1.recovered - day1.deaths)}% )` }} >
                                    {/* <div onMouseOver={testHover} onMouseLeave={testLeave} className="stlpcePrvehoGrafu" style={{ height: `calc(${MaxInfected * (day1.infected - day1.recovered - day1.deaths)}% )` }} > */}
                                    <span className="CountPrvehoGrafu" >{day1.infected - day1.recovered - day1.deaths}</span>
                                    {maxDateboolLean ?
                                        index % 2 === 0 ?
                                            <div className="spanDate">{day1.date}</div>
                                            : null
                                        : <div className="spanDate">{day1.date}</div>}
                                </div>
                            </HomeHeader>
                            : null)}
                </div>
                <div className="medzeraPodDatumomGraf1"></div>
            </div>
        )
    }

    function handleGraph1() {
        const MaxInfected = 100 / dataSvk[0].chart[Object.keys(dataSvk[0].chart).length - 1].infected
        return (
            <div className="outsideDivGraf">
                <h1>Celkový prírastok nakazených</h1>
                <div className="test" onClick={changeWideArrow} style={styleWideArrow}>
                    <div className="wideArrow">
                        <img alt="" src={wideArrow} />
                    </div>
                </div>
                <div className="svkGraf">
                    {
                        dataSvk[0].chart.map((day1, index) =>
                            index > maxDate ?
                                <HomeHeader key={index}>
                                    <div className="stlpcePrvehoGrafu tooltip" style={{ height: `calc(${MaxInfected * day1.infected}% )` }} >
                                        <span className="CountPrvehoGrafu" >{day1.infected}</span>
                                        {dataSvk[0].tested_chart[index - 1]
                                            ? <><span className="countupFirstRed">+{dataSvk[0].tested_chart[index - 1].infected}</span>
                                            </>
                                            : <><span className="countupFirstRed">+1</span>
                                            </>}
                                        {
                                            maxDateboolLean ?
                                                index % 2 === 0 ?
                                                    <div className="spanDate">{day1.date}</div>
                                                    : null
                                                : <div className="spanDate">{day1.date}</div>
                                        }
                                    </div>
                                </HomeHeader>
                                : null
                        )
                    }
                </div>
                <div className="medzeraPodDatumomGraf1"></div>
            </div>
        )
    }

    function negatTesty() {
        if (grafNegativneTesty.stav)
            setGrafNegativneTesty({ stav: false, styling: { textDecoration: 'line-through' } })
        else
            setGrafNegativneTesty({ stav: true, styling: { textDecoration: 'none' } })
    }

    function handleGraph2() {
        let MaxDaily = 0
        if (grafNegativneTesty.stav) {
            if (dataSvk) {
                dataSvk[0].tested_chart.map(pom1 => {
                    if (pom1.tested > MaxDaily) {
                        MaxDaily = pom1.tested - pom1.infected
                    }
                    return MaxDaily
                })
                MaxDaily = MaxDaily / 100
            }
        }
        else {
            if (dataSvk) {
                dataSvk[0].tested_chart.map(pom1 => {
                    if (pom1.infected > MaxDaily) {
                        MaxDaily = pom1.infected
                    }
                    return MaxDaily
                })
                MaxDaily = MaxDaily / 100
            }
        }
        return (
            <div className="outsideDivGraf">
                <h1>Denný prírastok negatívnych a pozitívnych testov</h1>
                <div className="test" onClick={changeWideArrow} style={styleWideArrow}>
                    <div className="wideArrow">
                        <img alt="" src={wideArrow} />
                    </div>
                </div>
                <div className="svkGraf">
                    {maxDate === -1 ?
                        <HomeHeader >  {/* prvy stlpec pre druhy graf */}
                            <div className="PozitivneTestyDruhyGraf" style={{ height: `calc(${1 / MaxDaily}%)` }} >
                                <div className="spanDate">{"06-03-2020"}</div>
                            </div>

                            {grafNegativneTesty.stav ?
                                <div className="Graf2Stlpce" style={{ height: `calc(${306 / MaxDaily}%)` }} >
                                    <span className="CountDruhehoGrafu">306</span>
                                    <span className="CountDruhehoGrafu nakazeniZaDen">+1</span>
                                </div>
                                : <div className="Graf2Stlpce" style={{ height: `calc(${1 / MaxDaily}%)` }} >
                                    <span className="CountDruhehoGrafu druhyGrafJedenTypSltpca">+1</span>
                                </div>}
                        </HomeHeader>
                        : ''}

                    {dataSvk[0].tested_chart.map((day1, index) =>
                        index > maxDate - 1 ?
                            <HomeHeader key={index}>
                                {
                                    <>
                                        <div className="PozitivneTestyDruhyGraf" style={{ height: `calc(${(day1.infected) / MaxDaily}% )` }} >
                                            {/* <div className="spanDate">{day1.date}</div> */}

                                            {
                                                maxDateboolLean ?
                                                    index % 2 === 0 ?
                                                        null
                                                        : <div className="spanDate">{day1.date}</div>
                                                    : <div className="spanDate">{day1.date}</div>
                                            }


                                            {!grafNegativneTesty.stav ?
                                                <span className=" CountDruhehoGrafu druhyGrafJedenTypSltpca" >+{day1.infected}</span>
                                                : null}
                                        </div>
                                        {
                                            negatTestyMoje[index]
                                                ? grafNegativneTesty.stav ?
                                                    <div className="Graf2Stlpce" style={{ height: `calc(${negatTestyMoje[index] / MaxDaily}% )` }} >
                                                        {(negatTestyMoje[index] > 99) ? <>
                                                            <span className="CountDruhehoGrafu" style={{ marginLeft: '-2px' }}>{negatTestyMoje[index]}</span>
                                                            <span className=" CountDruhehoGrafu nakazeniZaDen">{day1.infected}</span>
                                                        </>
                                                            : <>
                                                                <span className="CountDruhehoGrafu">{negatTestyMoje[index]}</span>
                                                                <span className=" CountDruhehoGrafu nakazeniZaDen">+{day1.infected}</span>
                                                            </>
                                                        }
                                                    </div>
                                                    : null
                                                : grafNegativneTesty.stav ?
                                                    <div className="Graf2Stlpce" style={{ height: `calc(${day1.tested / MaxDaily}%)` }} >
                                                        <span className="CountDruhehoGrafu">{day1.tested - day1.infected}</span>
                                                        <span className=" CountDruhehoGrafu nakazeniZaDen">+{day1.infected}</span>
                                                    </div>
                                                    : null
                                        }
                                    </>
                                }
                            </HomeHeader>
                            : null
                    )}
                </div>
                <div className="vysvetlivkyPodGrafom">
                    <div style={grafNegativneTesty.styling} onClick={negatTesty}><div className="blue" ></div>Počet negatívnych testov</div>
                    <div><div className="red"></div>Počet pozitívnych testov</div>
                </div>
            </div>
        )
    }


    function sortBy(key) {
        setState({
            dataSvk: dataSvk[0].map.sort((a, b) => (

                state.direction[key] === 'asc'
                    ? parseFloat(a[key]) - parseFloat(b[key])
                    : <>{parseFloat(b[key]) - parseFloat(a[key])} </>
            )),
            direction: {
                [key]: state.direction[key] === 'asc'
                    ? 'desc'
                    : 'asc'
            }
        })
    }

    // const Testing = () => {
    //     const lastDay = dataSvk[0].tested_chart[Object.keys(dataSvk[0].tested_chart).length - 1].day
    //     if (lastDay === "Pondelok")
    //         return "Pondelok"
    //     else if (lastDay === "Utorok")
    //         return "Utorok"
    //     else if (lastDay === "Streda")
    //         return "Stredu"
    //     else if (lastDay === "Štvrtok")
    //         return "Štvrtok"
    //     else if (lastDay === "Piatok")
    //         return "Piatok"
    //     else if (lastDay === "Sobota")
    //         return "Sobota"
    //     else return "Nedeľa"
    // }
    return (
        <div className="covidApp">
            {dataSvk ?
                <>
                    {/* <div className="PocetPripadovdoNav">za {Testing()}: {dataSvk[0].tested_chart[Object.keys(dataSvk[0].tested_chart).length - 1].infected}  </div> */}
                    {/* <div className="PripadydoNavDiv">
                        <ul className="PripadydoNavUl">
                            <li></li>
                            <li>
                                {Testing()}: {dataSvk[0].tested_chart[Object.keys(dataSvk[0].tested_chart).length - 1].infected} prípadov
                            </li>
                        </ul>
                    </div> */}
                    {handleData()}
                    {/* <DataGrid data={dataSvk[0].map} /> */}

                    <TabulkaMesta tabulkaData={dataSvk[0].districts} sortBy={sortBy} />
                    {/* <div className="tooltip">Hover over me
                        <div className="tooltiptext">Tooltip text</div>
                        </div> */}
                    {/* <DougnatChart /> */}

                    {handleGraphAktivnePripady()}

                    {handleGraph1()}
                    {handleGraph2()}




                    <br></br><br></br><br></br><br></br>
                </>
                : ''}
        </div >
    )
}

export default CovidSK
