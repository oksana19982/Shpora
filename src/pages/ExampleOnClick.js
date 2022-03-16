import React, {useState} from 'react';

function ExampleOnClick(){
    const [on, setOn] = useState(true)
    function handleClick() {
        setOn(!on);
    }
    return (
        <button className='Main-info-button' onClick={() => handleClick()}>{on ? "Включено" : "Выключено"}</button>
    )
}

export default ExampleOnClick;