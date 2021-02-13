import React from "react";
import "./styles/badges.css";
import heroBadges from "../images/heroBadges.png";
import Badgelist from "../componets/badgesList";
import { Link } from "react-router-dom";
import api from "../api";
import Loader from "../componets/pageLoading";
import PageError from "../componets/PageError";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fechtData();
  }

  fechtData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true) {
      return <Loader />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="badges">
          <div>
            <img className="hero__images" src={heroBadges} alt="hero" />
          </div>
        </div>
        <div className="badges__container">
          <div className="badges__cont">
            <Link to="/badges/new" className="badges__button">
              New Yest
            </Link>
          </div>
          <div className="badges__list">
            <div>
              <Badgelist Badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
