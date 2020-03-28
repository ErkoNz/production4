import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaReact } from 'react-icons/fa';
// import { GiConsoleController } from 'react-icons/gi';


function Nav() {

    const [burgerIcon, setBurgerIcon] = useState(true)
    const [mystyle, setMystyle] = useState({})

    let navStyle = {
        color: 'white',
    }

    // window.addEventListener('click', function (e) {
    //     if (document.getElementById('clickbox').contains(e.target)) {
    //         console.log(e.target)
    //         return () => {
    //             window.removeEventListener('click', e);
    //         };
    //     }


    //     // window.addEventListener('keydown', handleEsc);
    //     return () => {
    //         window.removeEventListener('click', e);
    //     };
    // })
    // else {
    //     console.log(e.target)
    // }
    // } else {
    //     if (burgerIcon) {
    //         console.log("X")
    //         navSlide()
    //         setMystyle({
    //             transform: "translateX(100%)",
    //         })
    //     }
    // }
    // console.log(burgerIcon)
    // if (burgerIcon) {
    //     console.log("je otvorene")
    // }
    // console.log(e.target.className)



    // if (e.target.className === "navApp"
    //     || e.target.className == "logoIcon"
    //     || e.target.className == "line1"
    //     || e.target.className == "line2"
    //     || e.target.className == "line3"
    //     || e.target.className == "burger") {
    //     console.log("navaaaap")
    // }
    // else {
    //     console.log("do this")
    //     setMystyle({
    //         transform: "translateX(100%)",
    //     })
    // }

    // })


    const navSlide = () => {
        let burger = document.querySelector('.burger')
        burger.classList.toggle("toggle");
    }

    function changeBurger() {
        navSlide()
        setBurgerIcon(!burgerIcon)
        if (burgerIcon) {
            setMystyle({
                // transform: "translateX(0%)",
                right: "50%",
                transition: ".3s ease",
            })
        }
        else {
            setMystyle({
                // transform: "translateX(100%)",
                right: "0%",
                transition: ".3s ease",
            })
        }
    }


    function close() {
        // if (!burgerIcon) {
        //     setMystyle({
        //         right: "0%",
        //         transition: ".3s ease",
        //     })
        //     setBurgerIcon(!burgerIcon)
        //     navSlide()
        // }
    }

    useEffect(() => {
        let handleEsc;
        let handleClick;
        if (!burgerIcon) {
            handleEsc = (event) => {
                if (event.keyCode === 27) {
                    setMystyle({
                        right: "0%",
                        transition: ".3s ease",
                    })
                    navSlide()
                    setBurgerIcon(!burgerIcon)
                }
            }

            handleClick = (event) => {
                if (!document.getElementById('clickbox').contains(event.target) || document.getElementById('clickbox').contains(event.target)) {
                    if (!document.getElementById('notClick').contains(event.target)) {
                        setMystyle({
                            right: "0%",
                            transition: ".3s ease",
                        })
                        navSlide()
                        setBurgerIcon(!burgerIcon)
                    }
                }
            }
        }
        window.addEventListener('keydown', handleEsc);
        window.addEventListener('click', handleClick);


        //     window.addEventListener('click', function (e) {
        // if (document.getElementById('clickbox').contains(e.target)) {



        return () => {
            window.removeEventListener('keydown', handleEsc);
            window.removeEventListener('click', handleClick);
        };
    }, [burgerIcon])

    return (
        <nav className="navApp" id="clickbox" >
            <Link onClick={close} style={navStyle} to='/'>
                <div>
                    <h3 className="logoIcon"> React APP</h3>
                    <FaReact className="testt" />
                </div>
            </Link>
            <ul style={mystyle} className="navLinks" onClick={close}>
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
                <Link style={navStyle} to='/Covid/CovidApp'>
                    <li>Covid - 19</li>
                </Link>
            </ul>

            <div className="burger" id="notClick" onClick={changeBurger}>
                <div className="line1" ></div>
                <div className="line2" ></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

export default Nav
