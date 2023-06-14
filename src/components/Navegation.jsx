import React, { Component }  from 'react';
import "../style/home.css";


class Navegation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
        <div>


        </div>
    )



        }
}


export default Navegation;
