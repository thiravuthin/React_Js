import React from 'react'
import '../App.css'

export default function Navbar(){
    return (
        <div >
                <ul className='nav'>
                    <li>
                        <a href='/'> Home</a>
                    </li>
                    <li>
                        <a href='/about'> About</a>
                    </li>
                    <li>
                        <a href='/contact'> Contact</a>
                    </li>
                </ul>
        </div>
    )
}
