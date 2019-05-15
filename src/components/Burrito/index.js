import React, {PureComponent} from 'react';
import "./style.css";
export default class Burrito extends PureComponent {

    render() {
        return (
           
            <div className="itemDetailsBurrito">
                <div className="headerItemBurrito">
                
                <div className="numberCircleBurrito"> 2</div> 
                <div className="headerTextBurrito">
                Burrito
                </div>
                Ingredients: Cilantro, guacamole, beans, rice.
                </div>
            <img src={require('../../images/burrito.jpg')} alt={"Burrito"} className="photoDetailsBurrito" /> 
            </div>
            
        );
    }
}