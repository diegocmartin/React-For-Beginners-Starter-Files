import React from 'react';

class StorePicker extends React.Component{
    render(){
        //Se puede enviar sólo un elemento en el primer nivel del return
        return (
            <form className="store-selector">
                <h2>Introduce una tienda</h2>
                <input type="text" required placeholder="Nombre"/>
                <button type="submit">Visitar tienda -></button>
                {/*comentario*/}
            </form>
        )
    }
}

export default StorePicker;