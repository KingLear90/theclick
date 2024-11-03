import Square from './components/Square'
import Circle from './components/Circle'
import './App.css'
import StartButton from './components/StartButton'

function App()  {
  return (
    <div className='app'>
      <h2>Haz click en las figuras con resultados de la tabla del 7</h2>
      <StartButton />
      {/* <Square />
      <Circle />*/ }
    </div>
  )
}

export default App
