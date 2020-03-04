import React from 'react'
import './mainIndex.css'
import { Link } from 'react-router-dom'

function MainIndex() {
    const car = [
        { name: "Isometric CSS", image: require("./imgs/3.png"), id: 1, link: '/IsometricCSS/IsometricCSS' },
        { name: "Prevod", image: require("./imgs/2.png"), id: 2, link: '/Currency/CurrencyApp' },
        { name: "TicTacToe", image: require("./imgs/1.png"), id: 3, link: '/TicTacToe/TicTacToe' },
        { name: "Todo", image: require("./imgs/4.png"), id: 4, link: '/Todo/TodoApp' },
        { name: "Recepty", image: require("./imgs/5.png"), id: 5, link: '/Recepty/Recepty' },
        { name: "ReceptyV2", image: require("./imgs/6.png"), id: 6, link: '/ReceptyV2/ReceptyV2' },
        { name: "ExpanseTracker", image: require("./imgs/7.png"), id: 7, link: '/ExpenseTracker/ExpenseTrackerApp' },

    ]

    return (
        <div className="MainDiv">
            <h1>ReactJSasdasd</h1>
            {/* <img src={require('./imgs/1.png')} /> */}
            <div className="contMainIndex">
                {car.map(transaction => (
                    <Link to={transaction.link}>
                        <div key={transaction.id} className="mainIndexDiv">
                            <h1 className="h1MainIndex">{transaction.name} <hr className="new1" /></h1>
                            <img alt="" src={transaction.image} />
                        </div>
                    </Link>
                ))}
            </div>
            {/* <Link style={navStyle} to='/IsometricCSS/IsometricCSS'>
                <li>isometric CSS</li>
            </Link> */}
        </div>
    )
}

export default MainIndex
