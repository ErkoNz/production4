import React, { useState, useEffect } from 'react'
import './css/covid.css'
import './css/covidDesign.css'
import { Link } from 'react-router-dom'
import coronaIcon from "../imgs/coronaIcon.svg"
// import CovidTable from "./CovidTable"
import SvetTabulka from "./SvetTabulka"
import { GiDeathSkull } from "react-icons/gi";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaPlusCircle } from "react-icons/fa";
import DougnatChart from "./DougnatChart"
// import DataGrid from "./DataGrid"
import FormatNumber from './components/FormatNumber'

function CovidApp() {
    const [mainData, setMainData] = useState()
    const [doughnatData, setDoughnatData] = useState()
    const [countriesData, setCountriesData] = useState()
    const [state, setState] = useState({
        countriesData: countriesData,
        direction: {
            price_usd: 'asc',
        }
    })


    useEffect(() => {

        // axios.get(`https://disease.sh/v2/all`)
        //     .then(res => {
        //         setDoughnatData([res.data.cases, res.data.recovered, res.data.deaths])
        //         setMainData([res.data])
        //     })

        // axios.get(`https://disease.sh/v2/countries`)
        //     .then(res => {
        //         setCountriesData(res.data)
        //         setState({
        //             data: res.data.sort((a, b) => (
        //                 state.direction['cases'] === 'asc'
        //                     ? parseFloat(a['cases']) - parseFloat(b['cases'])
        //                     : parseFloat(b['cases']) - parseFloat(a['cases'])
        //             )),
        //             direction: {
        //                 'cases': state.direction['cases'] === 'asc'
        //                     ? 'desc'
        //                     : 'asc'
        //             }
        //         })
        //     })
        // HandleLoadData2()
        // HandleLoadData1()

        const fetchData = async () => {
            const response1 = await fetch('https://disease.sh/v2/all')
            let data1 = await response1.json()
            setDoughnatData([data1.cases, data1.recovered, data1.deaths])
            setMainData([data1])

            const response = await fetch('https://disease.sh/v2/countries')
            let data = await response.json()
            setCountriesData(data)
            setState({
                data: data.sort((a, b) => (
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
        fetchData()
    }, [])


    // const HandleLoadData1 = async () => {
    //     const response1 = await fetch('https://disease.sh/v2/all')
    //     let data1 = await response1.json()
    //     setDoughnatData([data1.cases, data1.recovered, data1.deaths])
    //     setMainData([data1])
    // }

    // const HandleLoadData2 = async () => {
    //     const response = await fetch('https://disease.sh/v2/countries')
    //     let data = await response.json()
    //     setCountriesData(data)

    //     setState({
    //         data: data.sort((a, b) => (
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

    // function FormatNum(num) {
    //     if (num) {
    //         return (
    //             num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    //         )
    //     }
    // }

    function numberTrans3(a, b) {
        if (a) {
            let output = b / (a / 100)
            output = b / (a / 100)
            output = output.toFixed(3)
            output = output.toString()
            output = output.replace(".", ",")
            return (
                <div className="aktiveNakazenych">
                    <span>V percentách:</span> {output}%
                </div>
            )
        }
    }

    function sortBy(key) {
        setState({
            countriesData: countriesData.sort((a, b) => (
                state.direction[key] === 'asc'
                    ? parseFloat(a[key]) - parseFloat(b[key])
                    : parseFloat(b[key]) - parseFloat(a[key])
            )),
            direction: {
                [key]: state.direction[key] === 'asc'
                    ? 'desc'
                    : 'asc'
            }
        })
    }


    return (
        mainData && doughnatData && countriesData && (state.direction['cases'] || state.direction['tests']
            || state.direction['active']
            || state.direction['todayCases']
            || state.direction['deaths']
            || state.direction['recovered']
            || state.direction['todayDeaths']) ?
            <div className="covidApp">
                {console.log("CovidApp")}
                {
                    mainData ?
                        <div className="cardsDiv">
                            <div className="cards">
                                <div className="topCard">
                                    <div className="obrDiv">
                                        <div className="circle">
                                            <img alt="" src={coronaIcon} />
                                        </div>
                                    </div>
                                    <div className="textCard">Počet nakazených</div>
                                </div>
                                <div className="mainText">
                                    <FormatNumber prop={mainData[0].cases} />
                                    <div className="aktiveNakazenych">
                                        <span>Počet aktívnych prípadov:</span> <FormatNumber prop={mainData[0].active} />
                                    </div>
                                </div>
                            </div>


                            <div className="cards">
                                <div className="topCard">
                                    <div className="obrDiv">
                                        <div className="circle HP">
                                            <FaPlusCircle color={"green"} />
                                        </div>
                                    </div>
                                    <div className="textCard"> Počet vyliečených</div>
                                </div>
                                <div className="mainText">
                                    <FormatNumber prop={mainData[0].recovered} />
                                    {numberTrans3(mainData[0].cases, mainData[0].recovered)}
                                </div>
                            </div>

                            <div className="cards">
                                <div className="topCard">
                                    <div className="obrDiv">
                                        <div className="circle skull">
                                            <GiDeathSkull color={"white"} />
                                        </div>
                                    </div>
                                    <div className="textCard"> Počet úmrtí</div>
                                </div>
                                <div className="mainText">
                                    <FormatNumber prop={mainData[0].deaths} />
                                    {numberTrans3(mainData[0].cases, mainData[0].deaths)}
                                </div>
                            </div>
                        </div>
                        : ''
                }
                {/* <DataGrid /> */}
                <DougnatChart cases={doughnatData[0]} recovered={doughnatData[1]} deaths={doughnatData[2]} />
                <br></br>
                <br></br>
                <div className="SlovenskeUdajeLink" >
                    <Link to='/Covid/CovidSK'>Slovenské údaje <AiOutlineDoubleRight className="iconSlovUdaje" />
                    </Link>
                </div>
                <br></br>
                <div className="SlovenskeUdajeLink" >
                    <Link to={`/Covid/CovidApp/Svet`} >Grafy pre celý svet <AiOutlineDoubleRight className="iconSlovUdaje" />
                    </Link>
                </div>
                {/* <Link to={`/Covid/CovidApp/${item.country}`} > */}

                {/* <div className="SlovenskeUdajeLink" ><Link to={`/Covid/SamostatnaKrajina/GrafyKrajina/${Slovakiatest}`}>samosts údaje </Link></div> */}
                {/* <Link to={`/ReceptyV2/ReceptyV2/${recepty.recipe.label}`}></Link> */}
                <br></br><br></br>
                <SvetTabulka countriesData={countriesData} mainData={mainData} sortBy={sortBy} />
                {/* <SvetTabulka countriesData={countriesData} mainData={mainData} sortBy={useMemo(() => { return sortBy }, [])} /> */}

            </div >
            : null

    )
}

export default CovidApp
