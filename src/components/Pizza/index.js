import React, {PureComponent}  from "react";
import "./style.css";
export default class Pizza extends PureComponent {

    render() {
        return (
            <div className="itemDetails">
                <div className="headerItem">
                
                <div className="numberCircle"> 1</div> 
                <div className="headerText">
                Pizza
                </div>
                Ingredients: Olive, tomato, cheese, pepperoni.
                </div>
            <img src={require('../../images/Pizza.jpg')} alt={"Pizza"} className="photoDetails"  /> 
            </div>
            
        );
    }
}