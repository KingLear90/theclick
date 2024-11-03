import { useState} from 'react'
import Timer from './Timer'

function StartButton() {

    const [isClicked, setIsClicked] = useState(false)
    const handleClick = () => {
        setIsClicked(true)
    }
  return (
    <div>
      <button onClick={handleClick}>EMPEZAR</button>
      {isClicked && <Timer />}
    </div>
  )
}

export default StartButton
