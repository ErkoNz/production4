import React, { useState, useEffect } from 'react'
import './covid.css'
import './covidDesign.css'
import { Link } from 'react-router-dom'
import coronaIcon from "../imgs/coronaIcon.svg"

function CovidApp() {
    const url = 'https://covid19.mathdro.id/api/'
    // const svk = 'https://covid19.mathdro.id/api/countries/slovakia'
    const [mainData, setMainData] = useState([])

    useEffect(() => {
        HandleLoadData()
    }, [])

    const HandleLoadData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setMainData([data.confirmed.value, data.recovered.value, data.deaths.value])
    }

    return (
        <div className="covidApp">

            <div className="cardsDiv">
                <div className="cards">
                    <div className="circle">
                        <svg >
                            <path d="M32.77 39.33c-4.74,0.03 -11.1,-3.16 -13.51,-5.85 -0.77,-0.86 -1.41,-1.88 -2.13,-2.63 -0.99,-1.07 -2.19,-1.51 -3.53,-0.78 -2.62,1.46 -2.86,4.11 -0.14,5.71 3.83,2.24 5.13,-1.12 15.07,8.85 0.84,0.84 1.6,1.45 2.51,2.42 0.84,0.9 0.92,2.61 -0.06,3.44 -1.32,1.1 -6.8,0.29 -8.56,-0.11 -3.35,-0.76 -8.6,-1.55 -11.17,-3.19 -1.69,-1.08 -3.81,-3.62 -5.87,-3.82 -2.9,-0.3 -5.03,2.03 -5.34,4.36 -0.17,1.32 0.23,2.9 1.14,3.51 1.61,1.08 7.87,-0.24 13.44,1.01 3.65,0.82 12.06,2.9 13.75,5.57 -0.01,1.12 -0.45,2.46 -0.6,3.53 -0.25,1.8 0.19,2 -1.1,3.04 -4.56,3.71 -12.96,6.45 -19,4.88 -2.71,-0.71 -4.64,-0.3 -4.57,2.96 0.05,2.53 1.83,4.49 4.51,3.5 2.19,-0.81 5.16,-5.05 16.73,-3.96 3.86,0.36 3.19,-0.83 4.01,3.3 0.18,0.91 0.65,1.78 0.76,2.54 -1.73,1.2 -3.28,2.15 -5.34,2.9 -1.64,0.59 -4.91,1.41 -6.83,1.48 -1.57,0.05 -2.45,-0.1 -3.82,-0.25 -1.41,-0.17 -2.64,-0.26 -3.38,0.72 -1.48,1.98 -0.66,4.68 0.4,6.54 2.94,5.17 4.83,2.06 9.18,-2.03 2.32,-2.18 7.13,-5.64 11.57,-5.22 0.79,1.35 1.12,2.45 2.37,4.4 0.45,0.7 0.8,1.21 1.38,1.95 0.87,1.11 0.54,1.12 -0.02,2.46 -0.53,1.28 -1.67,3.19 -2.43,4.37 -0.97,1.49 -1.74,2.65 -2.84,3.97 -2.29,2.74 -3.92,4.3 -7.81,5.83 -1.26,0.49 -3.43,1.57 -3.97,2.81 -0.71,1.66 1.17,3.67 2.26,4.4 4.29,2.85 5.49,-3.01 7.01,-5.26 2.97,-4.39 7.99,-8.8 13.07,-10.83 1.13,-0.45 1.51,-0.74 2.48,0.01 2.86,2.17 5.38,3.44 8.85,4.92 0.22,1.99 -0.4,5.1 -1.03,6.62 -0.95,2.3 -1.84,3.15 -3.3,4.48 -3.1,2.84 2.44,6.28 4.62,4.46 1.66,-1.39 0.18,-5.34 1.8,-9.15 0.89,-2.1 2.9,-5.98 5.54,-4.22 0.81,0.54 0.98,1.36 1.17,2.34 0.98,5.22 0.61,11.39 -0.37,16.42 -0.31,1.62 -0.69,2.9 -1.32,4.28 -0.44,0.97 -1.53,2.94 -1.52,4.04 0.05,3.06 4.47,4.35 6.29,1.35 1.22,-2.01 -0.11,-6.58 -0.11,-9.91 0.01,-3.71 0.59,-6.19 1.33,-9.44 0.73,-3.16 1.01,-5.69 2.75,-8.03 1.05,-1.4 1.58,-1.48 3.52,-1.83 1.92,-0.34 2.93,-0.26 4.39,0.67 4.43,2.82 6.38,10.84 5.4,15.92 -0.74,3.9 1.47,5.57 5.09,3.81 1.4,-0.69 1.41,-2.6 0.64,-3.78 -0.81,-1.26 -1.42,-1.89 -2.07,-3.33 -1.24,-2.74 -1.74,-5.88 -1.74,-9.36 0,-7.54 3.84,-12.73 11.59,-13.44 4.09,-0.38 7.57,0.46 10.59,1.87 4.31,2.02 3.83,2.74 6.88,5.82 1.31,1.32 2.61,1.78 4.32,0.48 3.67,-2.8 0.4,-5.69 -3.59,-6.02 -5.46,-0.45 -9.85,-4.84 -13.68,-8.27 -3.04,-2.72 -2.71,-1.98 -1.06,-5.62 5.28,-0.42 13.36,0.99 17.66,2.62 2.83,1.08 6.63,5.89 9.46,3.57 3.06,-2.51 3.27,-9.01 -2.17,-8.02 -2.51,0.46 -6.48,0.78 -9.16,0.26 -4.77,-0.91 -11.22,-2.26 -14.46,-4.76 -0.11,-1.01 0.28,-2.18 0.45,-3.1 0.59,-3.24 -0.69,-3.25 2.07,-5.25 0.81,-0.58 1.56,-1.1 2.31,-1.5 3.58,-1.89 9.33,-3.99 14.02,-3.13 2.22,0.4 4.65,1.1 5.18,-1.93 0.6,-3.37 -2.15,-5.81 -5.13,-4.16 -1.07,0.59 -1.87,1.35 -3.21,2.04 -1.04,0.55 -2.55,1.11 -3.87,1.38 -3.54,0.75 -7.53,0.88 -11.39,0.82 -0.44,-0.96 -1.53,-5.29 -1.55,-5.92 2.19,-1.97 8.01,-4.31 11.84,-4.45 3.8,-0.15 8.3,1.38 7.06,-4.6 -0.53,-2.54 -3.44,-7.4 -6.07,-4.53l-2 2.11c-0.79,0.71 -1.34,1.47 -1.97,2.14 -2.11,2.27 -6.98,5.78 -10.64,5.65 -1.04,-1.4 -2.12,-4.73 -5.24,-7.53 0.11,-1.25 3.44,-6.86 4.17,-7.93 1.65,-2.43 3.69,-4.72 5.86,-6.32 2.02,-1.5 7.01,-2.4 6.88,-5.27 -0.1,-2.23 -4.34,-6.25 -6.84,-2.77 -0.84,1.17 -1.19,2.82 -1.92,4.09 -2.29,4 -4.87,6.53 -8.77,9.44 -1.03,0.78 -2.38,1.61 -3.71,2.3 -2.32,1.2 -1.84,0.8 -3.84,-0.44 -2.68,-1.66 -5.09,-2.74 -8.25,-3.91 -0.35,-1.52 0.47,-5.25 0.89,-6.52 0.76,-2.21 1.72,-3.19 3.04,-4.56 2.97,-3.06 -2.17,-6.13 -4.4,-4.39 -1.88,1.47 0.02,5.15 -1.62,9.29 -0.49,1.22 -1.91,4.15 -3,4.61 -2.62,1.13 -3.43,-1.43 -3.82,-3.47 -0.94,-4.99 -0.84,-10.8 0.1,-15.77 0.55,-2.88 2.17,-5.83 2.39,-7.09 0.63,-3.65 -2.91,-4.87 -5.09,-3.22 -3.74,2.83 0.61,8.05 -0.78,15.52 -0.76,4.09 -0.96,12.02 -4.68,14.33 -0.52,0.32 -3.19,0.81 -3.97,0.75 -0.98,-0.09 -2.56,-0.84 -3.3,-1.41 -3.29,-2.56 -5.38,-8.24 -5.26,-13.59 0.04,-2.2 1.23,-6.4 -2.97,-5.77 -3.43,0.52 -3.56,3.11 -1.5,5.5 2.72,3.16 4.7,9.52 3.27,14.9 -1.21,4.53 -5.18,8.35 -10.67,8.38z" />
                        </svg>
                    </div>
                    Počet nakazených {mainData[0]}
                </div>
                <div className="cards">
                    Uzdravení {mainData[1]}
                </div>
                <div className="cards">
                    Počet úmrtí {mainData[2]}
                </div>
            </div>
            Počet aktívnych prípadov: {mainData[0] - mainData[1] - mainData[2]}<br></br>
            Počet uzabretých prípadov: {mainData[1] + mainData[2]}

            <br></br>
            <br></br>
            <br></br>
            {/* Slovakia<br></br>
            Nakazení {dataSvk[0]}<br></br>
            Uzdravení {dataSvk[1]}<br></br>
            Počet úmrtí {dataSvk[2]}<br></br> */}
            <Link to='/Covid/CovidSK'>to slovakia</Link>
        </div>
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