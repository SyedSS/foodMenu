import React, { PureComponent} from 'react';
import "./style.css";

export default class Burger extends PureComponent {

    render() {
        return (
           
           <div className="itemDetailsBurger">
                <div className="headerItemBurger">
                
                <div className="numberCircleBurger"> 3</div> 
                <div className="headerTextBurger">
                Burger
                </div>
                Ingredients: Tomate, lettuce, cheese, onions.
                </div>
                 <img src={require('../../images/Burger.jpg')} alt={"Burger"} className="photoDetailsBurger" />
            </div>
        );
    }
}