import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CovidTable() {
    const urlCountries = 'https://coronavirus-19-api.herokuapp.com/countries'
    const [countriesData, setCountriesData] = useState([])

    useEffect(() => {
        HandleLoadData()
    }, [])

    const HandleLoadData = async () => {
        const response = await fetch(urlCountries)
        const data = await response.json()
        setCountriesData(data)
    }

    return (
        <div className="divTable" style={{ overflowX: 'visible' }}>
            <table>
                <thead>
                    <tr>
                        <th>Krajina</th>
                        <th>Počet nakazených</th>
                        <th>Počet aktívnych prípadov</th>
                        <th>Počet nových <br></br>nakazených</th>
                        <th>Počet úmrtí</th>
                        <th>Nové úmrtia</th>
                        <th>Počet vyliečených</th>
                    </tr>
                </thead>
                <tbody>
                    {countriesData.map((country, index) =>
                        country.cases > 100 ?
                            <tr key={index}>
                                <td >{country.country === 'Slovakia' ?
                                    <div style={{ fontWeight: 'bold' }}>
                                        <Link to='/Covid/CovidSK'>{country.country}</Link>
                                    </div>
                                    : country.country
                                }</td>
                                <td>{country.cases}</td>
                                <td>{country.cases - country.recovered - country.deaths}</td>
                                {country.todayCases > 0 ?
                                    <td style={{ background: ' rgb(254, 255, 194)' }}>+{country.todayCases} </td>
                                    : <td></td>
                                }
                                <td>{country.deaths}</td>
                                {country.todayDeaths > 0 ?
                                    <td style={{ color: ' rgba(156, 20, 20, 0.849)', fontWeight: 'bold' }}>+{country.todayDeaths} </td>
                                    : <td></td>
                                }
                                <td style={{ fontWeight: 'bold', color: 'green' }}>{country.recovered}</td>
                            </tr>
                            : null

                    )}

                </tbody>
                {/* <tfoot>
                    <tr>
                        <td>Sum</td>
                        <td>$180</td>
                        <td>$180</td>
                        <td>$180</td>
                        <td>$180</td>
                        <td>$180</td>
                    </tr>
                </tfoot> */}
            </table>
        </div>
    )
}

export default CovidTable
