import React from "react";
import "./styles/BadgeDetails.css";
import PageLoading from "../componets/pageLoading";
import Logo from "../images/logoYest.png";
import api from "../api";
import PageError from "../componets/PageError";

class BadgeDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeid);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    const badge = this.state.data;

    return (
      <>
        <div className="hero__details">
          <div className="hero__details-image">
            <img
              className="hero__details-image-logo"
              src={Logo}
              alt="logoyest"
            />
          </div>
          <div className="hero__details-nombres">
            <h1 className="hero__details-nombres-h1">
              {badge.firstName} {badge.lastName}
            </h1>
          </div>
        </div>
      </>
    );
  }
}

export default BadgeDetails;
