import { useState, useEffect } from 'react'
import '../styles/Circle.css'
    
function Circle() {
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
            className={`circle ${animation ? 'active' : ''}`}
        >
            <h2>49</h2>
        </div>

        <div>
        <h2>{animation ? <p className='correctList'>Correcto!</p> : null}</h2>
        </div>
    </>
)
}

export default Circle
