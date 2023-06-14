import React, { Component }  from 'react';
import "../style/home.css";
import Typed from 'react-typed';


class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }


    render() {
        return (
        <div>
         <Typed strings={["Do you want to play a game?"]} typeSpeed={150} backSpeed={100}  />

        </div>
    )



        }
}


export default About;
