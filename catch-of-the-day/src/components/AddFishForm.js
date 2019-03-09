import React from 'react';

class AddFishForm extends React.Component{
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = event =>{
        event.preventDefault();
        const fish = {
            name: this.nameRef.current.value,
            price: this.priceRef.current.value,
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        };
        this.props.addFish(fish);
        //Ahora hay que resetear el form
        event.currentTarget.reset();

    };
    render(){
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Nombre"/>
                <input name="price" ref={this.priceRef} type="text" placeholder="Precio"/>
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresco</option>
                    <option value="unavailable">Vendido</option>
                </select>
                <textarea name="desc" ref={this.descRef} type="text" placeholder="Desc"/>
                <input name="image" ref={this.imageRef} type="text" placeholder="Imagen"/>
                <button type="submit">+ Agregar Pescado</button>
            </form>
        )
    }
}
export default AddFishForm;