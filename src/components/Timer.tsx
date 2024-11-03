import { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    // Efecto que se ejecuta al cambiar `count` (es decir, al click del startbutton)
    const temp = setTimeout(() => {
      setCount(prevCount => prevCount - 1); //toma siempre el estado anterior de count, le resta 1, y lo guarda en prevCount
    }, 1000); // Realiza esto cada 1 segundo (1000 ms)
    if (count === 0) {
      clearTimeout(temp); // Limpieza del temp cuando el contador llega a 0
    }
    return () => clearTimeout(temp); // Limpieza del temp al desmontar el componente o antes de volver a ejecutar el efecto.
  }, [count]); 

  return (
    <div>
      <h2>Contador: {count}</h2>
      {count === 0 && <h4>¡Tiempo agotado!</h4>}
    </div>
  );
};

export default Timer;