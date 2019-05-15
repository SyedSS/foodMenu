import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";
import Pizza  from "../../components/Pizza";
import Burrito from "../../components/Burrito";
import Burger  from "../../components/Burger";
import Salad  from "../../components/Salad";


class Meals extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div style={{  backgroundColor: "orange" }}>
            <Link to="/pizza">Pizza</Link> |<Link to="/burrito">Burrito</Link> |
            <Link to="/burger">Burger</Link> |<Link to="/Salad">Salad</Link>
          </div>
 
          <SwipeableRoutes>
            <Route path="/pizza" component={Pizza} />
            <Route path="/burrito" component={Burrito} />
            <Route path="/burger" component={Burger} />
            <Route path="/salad" component={Salad} />
          </SwipeableRoutes>
        </div>
      </Router>
    );
  }
}
 
export default Meals;
