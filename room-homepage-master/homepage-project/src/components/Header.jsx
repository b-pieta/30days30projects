import React from 'react'
import logo from "../assets/images/logo.svg"
import menu from "../assets/images/icon-hamburger.svg"


export default function Header() {
  return (
    <>
    <header> 
        <div>
            <img src={logo} alt="" />
        </div>

        <nav>

        </nav>

        <div>
            <button>
                <img src={menu} alt="" />
            </button>
        </div>
    </header>
    </>
  )
}
