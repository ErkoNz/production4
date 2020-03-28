import React, { useState, useEffect } from 'react'
import './covid.css'
import './covidDesign.css'
import { Link } from 'react-router-dom'
import coronaIcon from "../imgs/coronaIcon.svg"
import CovidTable from "./CovidTable"
import covidHP from "../imgs/covidHP.svg"
import { GiDeathSkull } from "react-icons/gi";

function CovidApp() {
    // const url = 'https://covid19.mathdro.id/api/'
    const url = 'https://coronavirus-19-api.herokuapp.com/all'
    // const svk = 'https://covid19.mathdro.id/api/countries/slovakia'
    const [mainData, setMainData] = useState([])

    useEffect(() => {
        HandleLoadData()
    }, [])

    const HandleLoadData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        // setMainData([data.confirmed.value, data.recovered.value, data.deaths.value])
        setMainData([data.cases, data.recovered, data.deaths])
    }

    function numberTrans(num) {
        if (num) {
            return (
                num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            )
        }
    }

    function numberTrans2(a, b, c) {
        if (a) {
            let output = a - b - c
            return (
                <div className="aktiveNakazenych">
                    <span>Počet aktívnych prípadov:</span> {output.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                </div>
            )
        }
    }

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

    return (
        <div className="covidApp">
            <div className="cardsDiv">
                <div className="cards">
                    <div className="topCard">
                        <div className="obrDiv">
                            <div className="circle">
                                <img alt="" src={coronaIcon} />
                            </div>
                        </div>
                        <div className="textCard"> Počet nakazených</div>
                    </div>
                    <div className="mainText">
                        {numberTrans(mainData[0])}
                        {numberTrans2(mainData[0], mainData[1], mainData[2])}
                    </div>
                    {/* Počet aktívnych prípadov: {mainData[0] - mainData[1] - mainData[2]} */}
                </div>


                <div className="cards">
                    <div className="topCard">
                        <div className="obrDiv">
                            <div className="circle HP">
                                <img alt="" src={covidHP} />
                            </div>
                        </div>
                        <div className="textCard"> Počet vyliečených</div>
                    </div>
                    <div className="mainText">
                        {/* {mainData[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} */}
                        {numberTrans(mainData[1])}
                        {numberTrans3(mainData[0], mainData[1])}

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
                        {/* {mainData[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} */}
                        {numberTrans(mainData[2])}
                        {numberTrans3(mainData[0], mainData[2])}
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>

            {/* Slovakia<br></br>
            Nakazení {dataSvk[0]}<br></br>
            Uzdravení {dataSvk[1]}<br></br>
            Počet úmrtí {dataSvk[2]}<br></br> */}
            <CovidTable />
            <Link to='/Covid/CovidSK'>to slovakia</Link>
        </div >
    )
}

export default CovidApp


// const [dataSvk, setDataSvk] = useState([])
// const [datumy, setDatumy] = useState()
// const [test, setTest] = useState()
// const [svkNum, setSvkNum] = useState()
// const [maxPercent, setMaxPercent] = useState()

// const HandleLoadData2 = async () => {
//     const response = await fetch(svk)
//     const data = await response.json()
//     setDataSvk([data.confirmed.value, data.recovered.value, data.deaths.value])
// }

// function HandleLoadData3() {
//     const startDate = '3-06-2020'

//     var dt = new Date(startDate);
//     var now = new Date();
//     let arrayPom = []
//     while (dt <= now) {
//         arrayPom.push(new Date(dt));
//         dt.setDate(dt.getDate() + 1);
//     }
//     setDatumy(arrayPom)
//     HandleLoadData4()
// }
// function HandleLoadData4() {
//     if (datumy) {
//         let pom = datumy
//         for (let i = 0; i < pom.length; i++) {
//             var dt = new Date(pom[i]);
//             var pom2 = (dt.getMonth() + 1) + "-" + dt.getDate() + "-" + dt.getFullYear()
//             pom[i] = pom2
//         }
//         setDatumy(pom)
//     }
//     functionX()
// }

// const HandleLoadData5 = async () => {
//     if (datumy) {
//         let arrPom = []
//         const storedLocal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
//         if (!storedLocal) {
//             for (let i = 0; i < datumy.length - 1; i++) {
//                 const startDate = datumy[i]
//                 const daily = `https://covid19.mathdro.id/api/daily/${startDate}`
//                 const response = await fetch(daily)
//                 const datas = await response.json()
//                 const pom = (datas.filter(data => (
//                     data.countryRegion === "Slovakia")
//                 ))
//                 arrPom.push((pom[0]))
//             }
//             setSvkNum(arrPom)
//             localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(arrPom))
//             const pomX = 100 / arrPom[Object.keys(arrPom).length - 1].confirmed
//             setMaxPercent(pomX)
//         }
//         else {
//             const dayLast = `https://covid19.mathdro.id/api/daily/${datumy[Object.keys(datumy).length - 2]}`
//             const responseDayLast = await fetch(dayLast)
//             const datasDayLast = await responseDayLast.json()
//             const pomDayLast = (datasDayLast.filter(data => (
//                 data.countryRegion === "Slovakia")
//             ))

//             if (pomDayLast[0].lastUpdate === storedLocal[Object.keys(storedLocal).length - 1].lastUpdate) {
//                 setSvkNum(storedLocal)
//                 const pomX = 100 / storedLocal[Object.keys(storedLocal).length - 1].confirmed
//                 setMaxPercent(pomX)
//             }
//             else {
//                 for (let i = 0; i < datumy.length - 1; i++) {
//                     const startDate = datumy[i]
//                     const daily = `https://covid19.mathdro.id/api/daily/${startDate}`
//                     const response = await fetch(daily)
//                     const datas = await response.json()
//                     const pom = (datas.filter(data => (
//                         data.countryRegion === "Slovakia")
//                     ))
//                     arrPom.push((pom[0]))
//                 }
//                 setSvkNum(arrPom)
//                 localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(arrPom))
//                 const pomX = 100 / arrPom[Object.keys(arrPom).length - 1].confirmed
//                 setMaxPercent(pomX)
//             }

//         }
//     }
// }





// function functionX() {
//     setTest("X")
// }









// const [hodnota, setHodnota] = useState(1)
// let [divStyle, setDivStyle] = useState()


// const [pom1, setPom1] = useState([])
// const test = (jsonDB.filter(hero => (
//     hero.Country === "Italy")
// ))

// let dlzka = Object.keys(test).length

// const test2 = (jsonDB.filter(hero => (
//     hero.Country === "Italy")
// ))

// function handleChange(event) {
//     setHodnota(event.target.value);
// }

// let data = test2[dlzka - 1]
// let data2 = test2[hodnota - 1].Confirmed
// let pom2 = 100 / data.Confirmed
// let hodnotaPom = data2 * pom2

// let data3 = test2[hodnota - 1].Date

// const monthNames = ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún",
//     "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"
// ];
// var d = new Date(data3)
// var datestring = d.getDate() + "." + (monthNames[d.getMonth()]) + "." + d.getFullYear()


{/* <h1>Potvrdene</h1>  {allData} */ }
{/* <h1>Covid - 19 </h1>
            <input
                id="typeinp"
                type="range"
                min="1" max={dlzka}
                value={hodnota}
                onChange={handleChange}
                step="1"
                className="slider" />
            {/* <p>{hodnota} </p> */}
{/* <div className="CovidDiv">
                <br></br>
                {test.slice(hodnota - 1, hodnota).map(data => (
                    <span key={data.Date} >
                        {data.Country}, {data.Date},
                    <strong className="confirmed"> {data.Confirmed}</strong>,
                    <strong className="recovered"> {data.Recovered}</strong>,
                    <strong className="death"> {data.Deaths}</strong>
                        <br></br>
                    </span>
                ))}
            </div>

            <div className="SliderGraf">
                <h1>{datestring}</h1>
                <div style={divStyle} className="graph" style={{ width: `${hodnotaPom}%` }}  >
                    <span className="pocetSpan">{test2[hodnota - 1].Confirmed}</span>
                </div>
            </div> */}