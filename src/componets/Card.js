import React from "react";
// import logoYest from "../images/logoYest.png";
import Gravatar from "./Gravatar";
import "./styles/style.css";

class Card extends React.Component {
  render() {
    // o tambien a los props para no repetir tantas veces THIS.PROPS.TUVARIABLE lo puedes hacer asi, esto se llama destructuring
    // const {
    //   firstName,
    //   job,
    //     } = this.props;

    return (
      <div className="block">
        <div>
          <h1>YEST EXPRESS</h1>
        </div>

        <div className="App-body">
          <div className="App__logo__content">
            <Gravatar
              className="App__logo"
              email={this.props.email}
              alt="avatar"
            />
            <div className="App__names">
              <h3>{this.props.firstName}</h3>
              <h3>{this.props.lastName}</h3>
            </div>
          </div>
          <h4>{this.props.jobTitle}</h4>
          <h4 className="Twitter__name">@{this.props.twitter}</h4>
        </div>

        <div>
          <p className="footer">#we dont stop!</p>
        </div>
      </div>
    );
  }
}

export default Card;
