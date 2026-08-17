import React from 'react';
import { Link } from 'react-router-dom';


function Hero() {
    return ( 
      <div className='container'>
        <div className='row text-center mb-5 pb-5 pt-5 mt-4'>
            <img src="media/landing.svg" alt="Hero Image" className='mb-5 ' style={{width:"70%",margin:"0 auto"}}/>
            <h2 className='mt-5'>Invest in everything</h2>
            <p className='mt-2 fs-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            
            <Link to ="/signup" className='btn btn-primary px-2 py-2 fs-5 mt-4 'style={{width:"200px" , margin:"auto"}} >Sign up for free</Link>
                    </div>

      </div>
     );
}

export default Hero;