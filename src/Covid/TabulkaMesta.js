import React, { useState, useEffect } from 'react'
import './css/tabulkaMesta.css'
import CompareCislo from './CompareCislo'
import { IoIosArrowDown } from 'react-icons/io';
// import DougnatChart from "./DougnatChart"

const LOCAL_STORAGE_KEY = 'zoradenieLocalStorage'


function TabulkaMesta(props) {
    const data = props.tabulkaData
    // const lastDay = props.tabulkaData.tested_chart[Object.keys(props.tested_chart).length - 1].day
    // const [dataForTable, setDataForTable] = useState({})
    const [sorting, setSorting] = useState(false)
    const [ShowHide, setShowHide] = useState({
        display: 'none'
    })
    const [textPreZobrazenieObci, setTextPreZobrazenieObci] = useState({
        boolean: true,
        text: "Zobraziť údaje o jedntlivých obciach"
    })
    const [sipkaObce, setSipkaObce] = useState({
        transition: 'all .2s ease-in',
        marginBottom: '-3px',
        marginLeft: '3px',
    })



    // const [sorting, setSorting] = useState(false)
    // console.log(props.tabulkaData)
    // console.log(props.tabulkaData)
    // const [dataTabulka, setDataTabulka] = useState(props.tabulkaData)
    // const [state, setState] = useState({
    //     dataTabulka: dataTabulka,
    //     direction: {
    //         price_usd: 'asc',
    //     }
    // })

    useEffect(() => {
        setSorting(s => !s)
        CompareCislo(data, sorting, "stlpec")
        // let zeny = 0;
        // let muzi = 0;
        // data.map(jednoData => {
        //     zeny = zeny + jednoData.females
        //     muzi = muzi + jednoData.males
        // })
        // setDataForTable({
        //     labels: ["Ženy", "Muži"],
        //     data: [zeny, muzi],
        //     backgroundColor: ["red", "blue"]
        // })
    }, [])


    // useEffect(() => {
    //     setState({
    //         dataTabulka: dataTabulka.sort((a, b) => (
    //             state.direction['cases'] === 'asc'
    //                 ? parseFloat(a['cases']) - parseFloat(b['cases'])
    //                 : parseFloat(b['cases']) - parseFloat(a['cases'])
    //         )),
    //         direction: {
    //             ['cases']: state.direction['cases'] === 'asc'
    //                 ? 'desc'
    //                 : 'asc'
    //         }
    //     })
    // }, [])


    // function sortBy(key) {
    //     setState({
    //         dataTabulka: dataTabulka.sort((a, b) => (
    //             state.direction[key] === 'asc'
    //                 ? parseFloat(a[key]) - parseFloat(b[key])
    //                 : parseFloat(b[key]) - parseFloat(a[key])
    //         )),
    //         direction: {
    //             [key]: state.direction[key] === 'asc'
    //                 ? 'desc'
    //                 : 'asc'
    //         }
    //     })
    // }

    function handleSortObce(stlpec) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stlpec))

        // const storedZoradenie = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        // if (storedZoradenie) console.log(storedZoradenie)


        setSorting(!sorting)
        CompareCislo(data, sorting, stlpec)
    }

    function zmenitText() {
        if (textPreZobrazenieObci.boolean) {
            setTextPreZobrazenieObci({
                boolean: !textPreZobrazenieObci.boolean,
                text: "Schovať údaje o jedntlivých obciach"
            })
            setShowHide({
                display: 'flex',
            })
            setSipkaObce({
                transform: "rotateX(180deg)",
                transition: 'all .2s ease-in',
                marginBottom: '-3px',
                marginLeft: '3px',
            })
        }
        else {
            setTextPreZobrazenieObci({
                boolean: !textPreZobrazenieObci.boolean,
                text: "Zobraziť údaje o jedntlivých obciach"
            })
            setShowHide({
                display: 'none',
            })
            setSipkaObce({
                transform: "rotateX(0deg)",
                transition: 'all .2s ease-in',
                marginBottom: '-3px',
                marginLeft: '3px',
            })
        }
    }

    function searchInputMesta() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }


    return (
        <>
            <div className="textPreZObrazenieTabulky" onClick={zmenitText}>{textPreZobrazenieObci.text} <IoIosArrowDown style={sipkaObce} /></div>



            <div style={ShowHide} className="tabulkaOkrajDivMain">

                <br></br>
                <input type="text" id="myInput" onKeyUp={searchInputMesta} placeholder="Hľadať.." className="inputSearch" />
                <div className="tabulkaMesta">

                    <table id="myTable">
                        <thead>
                            <tr >
                                <th >Obec</th>
                                <th onClick={() => handleSortObce('amountInfected')} >Počet nakazených</th>
                                <th onClick={() => handleSortObce('amountDelta')} >Za posledný deň</th>
                                {/* <th onClick={() => handleSortObce('amountRecovered')} >Počet vyliečených</th> */}
                                {/* <th onClick={() => handleSortObce('females')} >Ženy</th> */}
                                {/* <th onClick={() => handleSortObce('males')} >Muži</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((jednaObec, index) => <>
                                <tr key={index} >
                                    {/* {jednaObec.title === "Bratislava II" ? null
                                        : jednaObec.title === "Bratislava III" ? null
                                            : jednaObec.title === "Bratislava IV" ? null
                                                : jednaObec.title === "Bratislava V" ? null
                                                    : jednaObec.title === "Košice II " ? null
                                                        : jednaObec.title === "Košice III " ? null
                                                            : jednaObec.title === "Košice IV " ? null
                                                                : jednaObec.title === "Bratislava I "
                                                                    ? <td>{jednaObec.title}</td>
                                                                    : jednaObec.title === "Košice I" ? <td>{jednaObec.title}</td>
                                                                        : <td>{jednaObec.title}</td>} */}
                                    {jednaObec.title === "Bratislava II"
                                        || jednaObec.title === "Bratislava III"
                                        || jednaObec.title === "Bratislava IV"
                                        || jednaObec.title === "Bratislava V"
                                        || jednaObec.title === "Košice II"
                                        || jednaObec.title === "Košice III"
                                        || jednaObec.title === "Košice IV" ? null
                                        : <>
                                            <td>{jednaObec.title === "Bratislava I" ? "Bratislava" :
                                                jednaObec.title === "Košice I" ? "Košice" : jednaObec.title}</td>
                                            <td>{jednaObec.amount.infected}</td>
                                            <td style={{ color: 'red' }}>
                                                {jednaObec.amount.infected_delta > 0 ?
                                                    "+" + jednaObec.amount.infected_delta
                                                    : null}
                                            </td>
                                        </>}

                                    {/* <td>{jednaObec.amount.infected}
                                        <span className="plusPreObecInfected">{jednaObec.amount.infected_delta > 0 ? "+" + jednaObec.amount.infected_delta : ''}</span>
                                    </td> */}

                                    {/* <td><span className="plusPreObecRecovered">{jednaObec.amount.recovered}</span></td> */}
                                    {/* <td>{jednaObec.females}</td> */}
                                    {/* <td>{jednaObec.males}</td> */}
                                </tr>
                            </>
                            )}
                        </tbody>
                        {/* <tfoot>
                        <tr>
                            <td>Sum</td>
                            <td>$180</td>
                        </tr>
                    </tfoot> */}
                    </table>

                </div>
                {/* <DougnatChart dataForGraph={dataForTable} /> */}
                {/* {dataForTable ? <DougnatChart dataForGraph={dataForTable} /> : null} */}

            </div>
        </>
    )
}

export default TabulkaMesta
