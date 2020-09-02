import React from 'react'
import { IoMdStarOutline } from 'react-icons/io'
import { IoMdStar } from 'react-icons/io'

function ActualTabulka({ data, onlyStars, rerender, setRerender }) {
    const LOCAL_STORAGE_KEY_OBCE = 'obceSave'
    function GimmeStar(obec) {
        const local = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_OBCE))
        if (local && local.includes(obec))
            return <IoMdStar className="star" />
        else
            return <IoMdStarOutline className="star" />
    }

    function SaveObecStar(obec) {
        let dataObce = []
        if (!localStorage.getItem(LOCAL_STORAGE_KEY_OBCE)) {
            localStorage.setItem(LOCAL_STORAGE_KEY_OBCE, JSON.stringify([obec]))
        }
        else {

            dataObce = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_OBCE))
            if (dataObce.includes(obec))
                dataObce = dataObce.filter(item => item !== obec)
            else
                dataObce.push(obec)
            localStorage.setItem(LOCAL_STORAGE_KEY_OBCE, JSON.stringify(dataObce))
        }
        setRerender(!rerender)
    }



    if (onlyStars)
        return (
            data.map((jednaObec, index) =>
                localStorage.getItem(LOCAL_STORAGE_KEY_OBCE) && JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_OBCE)).includes(jednaObec.title) ?
                    <tr key={index} >
                        <td onClick={() => SaveObecStar(jednaObec.title)}>
                            {GimmeStar(jednaObec.title)}
                            {jednaObec.title === "Bratislava I" ? "Bratislava" :
                                jednaObec.title === "Košice I" ? "Košice" : jednaObec.title}</td>
                        <td>{jednaObec.amount.infected}</td>
                        <td style={{ color: 'red' }}>
                            {jednaObec.amount.infected_delta > 0 ?
                                "+" + jednaObec.amount.infected_delta
                                : null}
                        </td>
                    </tr>
                    : null
            )
        )

    else return (
        data.map((jednaObec, index) =>
            jednaObec.title === "Bratislava II"
                || jednaObec.title === "Bratislava III"
                || jednaObec.title === "Bratislava IV"
                || jednaObec.title === "Bratislava V"
                || jednaObec.title === "Košice II"
                || jednaObec.title === "Košice III"
                || jednaObec.title === "Košice IV" ? null
                :
                <tr key={index}>
                    <td onClick={() => SaveObecStar(jednaObec.title)}>
                        {GimmeStar(jednaObec.title)}
                        {jednaObec.title === "Bratislava I" ? "Bratislava" :
                            jednaObec.title === "Košice I" ? "Košice" : jednaObec.title}</td>
                    <td>{jednaObec.amount.infected}</td>
                    <td style={{ color: 'red' }}>
                        {jednaObec.amount.infected_delta > 0 ?
                            "+" + jednaObec.amount.infected_delta
                            : null}
                    </td>
                </tr>
        ))
}

export default ActualTabulka
