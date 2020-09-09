import React, { useState, useEffect } from 'react'
import './css/tabulkaMesta.scss'
import CompareCislo from './CompareCislo'
import { IoIosArrowDown } from 'react-icons/io';
import { FaSortAmountDown } from 'react-icons/fa'
import { IoMdStarOutline } from 'react-icons/io'
import { IoMdStar } from 'react-icons/io'
import ZmeniTextTabulkaMesta from './components/ZmenitTextTabulkaMesta'
import HandleSortObce from './components/HandleSortObce'
import ActualTabulka from './components/ActualTabulka';
const LOCAL_STORAGE_KEY = 'zoradenieLocalStorage'
const LOCAL_STORAGE_KEY_STAR = 'starsTabulkaMesta'


function TabulkaMesta(props) {
    // const [ShowTableMestaOnClick, setShowTableMestaOnClick] = useState()
    const data = props.tabulkaData
    const [sorting, setSorting] = useState({
        desc: true,
    })
    const [styleArrows, setStylesArrows] = useState({
        sipkaNakazeni: {
            transform: 'rotate(0deg)'
        },
        sipkaPoslednyden: {
            display: 'none',
        }
    })
    // const [ShowHide, setShowHide] = useState({
    //     display: 'none'
    // })

    const [ShowHide, setShowHide] = useState()
    const [textPreZobrazenieObci, setTextPreZobrazenieObci] = useState({
        boolean: true,
        text: "Zobraziť údaje o jedntlivých obciach"
    })
    const [sipkaObce, setSipkaObce] = useState({
        transition: 'all .2s ease-in',
        marginBottom: '-3px',
        marginLeft: '3px',
    })

    const [rerender, setRerender] = useState(true)
    const [onlyStars, setOnlyStars] = useState(false)


    useEffect(() => {
        setShowHide({
            maxHeight: '0px',
        })
        CompareCislo(data, true, JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))
        if (JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) === "amountDelta")
            setStylesArrows({
                sipkaNakazeni: {
                    display: 'none'
                },
                sipkaPoslednyden: {
                    transform: 'rotate(0deg)',
                }
            })
        if (JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_STAR)))
            setOnlyStars(true)
    }, [data])

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

    function ShowOnlyStars() {
        if (onlyStars)
            return <IoMdStar className="star" />
        else
            return <IoMdStarOutline className="star" />
    }

    function SetingStarsAndLocalStorage() {
        setOnlyStars(!onlyStars)
        localStorage.setItem(LOCAL_STORAGE_KEY_STAR, !onlyStars)
    }
    return (
        <>
            <div className="textPreZObrazenieTabulky" onClick={() => ZmeniTextTabulkaMesta(textPreZobrazenieObci, setTextPreZobrazenieObci, setShowHide, setSipkaObce)}>{textPreZobrazenieObci.text} <IoIosArrowDown style={sipkaObce} /></div>
            <div style={ShowHide} className="tabulkaOkrajDivMain">


                <input type="text" id="myInput" onKeyUp={searchInputMesta} placeholder="Hľadať.." className="inputSearch" />
                <div className="tabulkaMesta" >

                    <table id="myTable" className="tabulkaMesta">
                        <thead>
                            <tr >
                                <th onClick={() => SetingStarsAndLocalStorage()}>Obec {ShowOnlyStars()}</th>
                                <th onClick={() => HandleSortObce('amountInfected', CompareCislo, data, sorting, setStylesArrows, setSorting)} >
                                    Počet nakazených <FaSortAmountDown className="sipkaNakazeni" style={styleArrows.sipkaNakazeni} />
                                </th>
                                <th onClick={() => HandleSortObce('amountDelta', CompareCislo, data, sorting, setStylesArrows, setSorting)} >
                                    Za posledný deň <FaSortAmountDown className="sipkaPoslednyden" style={styleArrows.sipkaPoslednyden} />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <ActualTabulka data={data} onlyStars={onlyStars} rerender={rerender} setRerender={setRerender} />
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default TabulkaMesta
