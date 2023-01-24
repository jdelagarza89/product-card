
import React from 'react';
import Imaged from '../images/pdesk.jpg'
import "../components/Card.css"
import Cart from '../images/icon-cart.svg'



function Card() {
  return (
   
   
        <div className='card'>
            <div className='image'>
            <img src={Imaged} alt="perfume" className='imaded'/>
            </div>
            <div className='main'>
            <div className='item'>
               <p>PERFUME</p>

            </div>
            <div className='name'>
                <h1>Gabrielle Essence Eau De Parfum</h1>
            </div>

            <div className='discription'>
                <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
  Perfumer-Creator for the House of CHANEL.</p>
            </div>
            <div className='set'>
                <div className='price'>
                    <h2>$149.99</h2>  
                 </div>
                <div className='discount'>
                    <p>$149.99</p>
                 </div>
            </div>

            <div className='button'>

                <button className='click'>
                <img src={Cart} alt="perfume" className='icon'/>
                    <p className='btntxt'>Add to Cart</p>
                </button>

            </div>
            </div>
            </div>
  
  
  )
}


export default Card;

