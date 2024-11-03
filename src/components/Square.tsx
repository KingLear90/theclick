import { useState, useEffect } from 'react';
import '../styles/Square.css'
import '../styles/CorrectList.css'

function Square() {

const [animation, setAnimation] = useState(false)

const handleClick = () => {
    setAnimation(!animation)
}

useEffect(() => {
    if (animation) {
        setTimeout(() => {
            setAnimation(false);
        }, 1500);
}}, [animation]);

return (
    <>
        <div 
            onClick={handleClick} 
            className={`square ${animation ? 'active' : ''}`}
        >
            <h2>7</h2>
        </div>

        <div>
        <h2>{animation ? <p className='correctList'>Correcto!</p> : null}</h2>
        </div>
    </>
)

}

export default Square
