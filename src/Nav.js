import React from 'react'
import { Link } from 'react-router-dom'
import { FaReact } from 'react-icons/fa';


function Nav() {
    const navStyle = {
        color: 'white'
    }

    return (
        <nav className="navApp">
            <Link style={navStyle} to='/'>
                <div>
                    <h3 className="logoIcon"> React APP 23 35</h3>
                    <FaReact className="testt" />
                </div>
            </Link>
            <ul className="navLinks">
                <Link style={navStyle} to='/IsometricCSS/IsometricCSS'>
                    <li>isometric CSS</li>
                </Link>
                <Link style={navStyle} to='/Currency/CurrencyApp'>
                    <li>Prevod</li>
                </Link>
                <Link style={navStyle} to='/TicTacToe/TicTacToe'>
                    <li>TicTacToe</li>
                </Link>
                <Link style={navStyle} to='/Todo/TodoApp'>
                    <li>Todo</li>
                </Link>
                <Link style={navStyle} to='/Recepty/Recepty'>
                    <li>Recepty</li>
                </Link>
                <Link style={navStyle} to='/ReceptyV2/ReceptyV2'>
                    <li>ReceptyV2</li>
                </Link>
                <Link style={navStyle} to='/ExpenseTracker/ExpenseTrackerApp'>
                    <li>Expense Tracker</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
