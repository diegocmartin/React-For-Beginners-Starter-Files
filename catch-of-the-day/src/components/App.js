import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component{
    //Inicializamos el estado. Se puede hacer con constructor también
    state = {
        fishes: {},
        order: {}
    };
    addFish = fish => {
        //Obtener una copia del estado existente
        const fishes = {...this.state.fishes};
        //agregar el nuevo fish a los fishes
        //Le metemos un timestamp
        fishes[`fish${Date.now()}`]=fish;
        this.setState({
            fishes: fishes
        //this.setState({fishes}); 
        //es análogo porque se llaman igual ES6
        });
    };
    
    render(){
        return (
            <div className="catch-of-the-day">
                <div cassName="menu">
                    <Header tagline="Todo lo que quiera"/>
                </div>
                <Order />
                <Inventory addFish={this.addFish} />
            </div>
        )
    }
}
export default App;