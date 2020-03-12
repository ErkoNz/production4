import React, { useState, useEffect } from 'react'
import jsonDB from './covidJson.json'
import './covid.css'
function CovidApp() {

    // const [slovakia, setSlovakia] = useState()
    const [hodnota, setHodnota] = useState(1)
    let [divStyle, setDivStyle] = useState()

    // const test = (jsonDB.filter(hero => (
    //     hero.Country === "Italy")
    // ))

    const [pom1, setPom1] = useState([])
    // console.log(Object.keys(test).length)
    const test = (jsonDB.filter(hero => (
        hero.Country === "Italy")
    ))

    // useEffect(() => {
    //     // let test = (jsonDB.filter(hero => (
    //     //     hero.Country === "Italy")
    //     // ))
    //     const test = (jsonDB.filter(hero => (
    //         hero.Country === "Italy")
    //     ))
    //     setPom1(test)
    // }, [])


    // const dlzka = Object.keys(pom1).length

    let dlzka = Object.keys(test).length
    // console.log(pom1[hodnota])
    // const HandleLoadData = () => {
    //     setSlovakia(jsonDB.filter(hero => (
    //         hero.Country === "Slovakia")
    //     ))
    // }

    const test2 = (jsonDB.filter(hero => (
        hero.Country === "Italy")
    ))


    function handleChange(event) {
        setHodnota(event.target.value);
    }

    // const test3 = test2.slice(hodnota - 1, hodnota)
    // console.log("test3: " + test3)
    let data = test2[dlzka - 1]
    // console.log(data.Confirmed)
    // console.log(data.Confirmed)
    let data2 = test2[hodnota - 1].Confirmed
    let pom2 = 100 / data.Confirmed
    let hodnotaPom = data2 * pom2

    // var d = new Date();
    // var datestring = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear() + " " +
    //     d.getHours() + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2)
    // console.log(d)
    // console.log(datestring)
    let data3 = test2[hodnota - 1].Date
    // console.log(data3)

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún",
        "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"
    ];
    var d = new Date(data3)
    var datestring = d.getDate() + "." + (monthNames[d.getMonth()]) + "." + d.getFullYear()

    return (
        <div>
            <h1>Covid - 19 </h1>
            <input
                id="typeinp"
                type="range"
                min="1" max={dlzka}
                value={hodnota}
                onChange={handleChange}
                step="1"
                className="slider" />
            {/* <p>{hodnota} </p> */}
            <div className="CovidDiv">
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
            </div>

        </div>
    )
}

export default CovidApp
