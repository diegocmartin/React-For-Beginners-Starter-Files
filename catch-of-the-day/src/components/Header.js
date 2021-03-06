import React from 'react';

/*class Header extends React.Component{
    render(){
        return (
            <header className="top">
                <h1>
                    Mariscos
                    <span className="ofThe">
                        <span className="of">de</span>
                        <span className="the">la</span>
                    </span>
                    Niña
                </h1>
                <h3 className="tagline">
                    <span>{this.props.tagline}</span>
                </h3>
            </header>
        )
    }
}*/

const Header = props => (
    <header className="top">
        <h1>
            Mariscos
            <span className="ofThe">
                <span className="of">de</span>
                <span className="the">la</span>
            </span>
            Niña
        </h1>
        <h3 className="tagline">
            <span>{props.tagline}</span>
        </h3>
    </header>
);
export default Header;