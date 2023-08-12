import React from 'react'
import {BsFillBasketFill} from 'react-icons/bs'

function Navbar() {
  return (
    <nav>
        <div  className='navbar'>
            <h3>Kurs Uygulaması</h3>
            <div className='navDiv'>
                <div className='itemsDiv'>
                <p>0</p>
                </div>
                <BsFillBasketFill className='itemsIcon'/>
            </div>
           
        </div>
    </nav>
  )
}

export default Navbar
