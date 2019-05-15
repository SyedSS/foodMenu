import React, {PureComponent} from 'react';
import './style.css'
export default class Pizza extends PureComponent {

    render() {
        return (
            <div className="itemDetails">
            <div className="headerItem">
            
            <div className="numberCircle">4</div> 
            <div className="headerText">
            Salad
            </div>
            Ingredients: Lettuce, onion, broccoli, bellpepper.
            </div>
            <img src={require('../../images/Salad.jpg')} alt={"Salad"} className="photoDetails"  /> 
            </div>
            
        );
    }
}