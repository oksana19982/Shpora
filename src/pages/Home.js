import React from 'react';
import Shpora from '../img/Shpora.jpeg'

function Home (){
    return (
        <div>
            <h1 className='Main-info-title'>Shpora</h1>
            <img className='home-image' src={Shpora} alt='shpora'></img>
        </div>
    )
}

export default Home;