import React from 'react';
import {getFunName} from "../helpers";

class StorePicker extends React.Component{
    myInput = React.createRef();

    goToStore = event => {
        //Detiene el envío del form
        event.preventDefault();
        //Obtener el texto del input
        //Una de las reglas en React es no tocar el DOM
        //No podemos hacer aquí un queryselector
        //Para ello están los estados
        const storeName = this.myInput.current.value;
        //Enviar a la página siguiente
        this.props.history.push(`/store/${storeName}`);
    };
    render(){
        //Se puede enviar sólo un elemento en el primer nivel del return
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Introduce una tienda</h2>
                {/*defaultValue es como value, pero con value daría error en React*/}
                <input 
                    type="text"
                    ref={this.myInput}
                    required 
                    placeholder="Nombre" 
                    defaultValue={getFunName()} 
                />
                <button type="submit">Visitar tienda -></button>
            </form>
        )
    }
}

export default StorePicker;