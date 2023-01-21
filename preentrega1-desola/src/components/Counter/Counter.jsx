import { useState } from "react";
const Counter = () => {
    
    const [contador, setContador] = useState (0);

    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);

    return (
        <>
            <button className="btn btn-secondary" onClick={()=>restar()}>-</button>
            {contador}
            <button className="btn btn-secondary" onClick={()=>sumar()}>+</button>
            
        </>
    );
}

export default Counter;
