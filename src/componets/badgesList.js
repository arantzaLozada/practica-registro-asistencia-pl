import React from "react";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";
import "./styles/style.css";

class Badgelist extends React.Component {
  render() {
    if (this.props.Badges.length === 0) {
      return (
        <div>
          <h3>no hay datos aun</h3>
          <Link to="/badges/new" className="badges__button">
            Create New Badges
          </Link>
        </div>
      );
    }

    return (
      <ul className="BadgesListItem__ul">
        {this.props.Badges.map((badge) => {
          return (
            <li className="BadgesListItem" key={badge.id}>
              {/* PARA MANDAR A LA PAGINA EDIT CON SU PROPIO ID DE CADA PERSONA */}
              <Link className="link" to={`/badges/${badge.id}`}>
                <div className="item">
                  <div>
                    <Gravatar
                      className="BadgesListItem__avatar"
                      email={badge.email}
                    />
                  </div>
                  <div className="BadgesListItem__list">
                    <strong className="BadgesListItem__name">
                      {badge.firstName} {badge.lastName}
                    </strong>
                    <span className="Twitter__name">@{badge.twitter}</span>
                    <span>{badge.jobTitle}</span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Badgelist;
