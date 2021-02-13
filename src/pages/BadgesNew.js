import React from "react";

import Hero from "../images/seoyest.png";

import Card from "../componets/Card";

import Form from "../componets/form";
import api from "../api";
import Loader from "../componets/pageLoading";

class BadgesNew extends React.Component {
  // STATE GUARDA ALGO YA QUIETO
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      twitter: "",
    },
  };

  handleChange = (e) => {
    // SETSTATE ACTUALIZA A NUEVOS DATOS O LO QUE QUERAMOS
    this.setState({
      form: {
        // ESTO ME TRAE TODO LOS DATOS ...
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // console.log((e.target.name = e.target.value));
    this.setState({ loading: true, error: null });
    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      // ESTE ES PARA CUANDO SE ENVIE LOS DATOS DEL FORM SE REDIRIGA A LA PAGINA BADGES AL LISTADO HISTORY
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    return (
      <React.Fragment>
        <div className="hero_yest">
          <img className="hero_fondo-yest" src={Hero} alt="seo" />
        </div>

        <div className="colum">
          <div>
            <Card
              firstName={this.state.form.firstName || "FIRST_NAME"}
              lastName={this.state.form.lastName || "LAST_NAME"}
              jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
              twitter={this.state.form.twitter || "TWITTER"}
              email={this.state.form.email || "EMAIL"}
              // avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
            />
          </div>
          <div>
            <h1>NEW YEST</h1>
            <Form
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              formValues={this.state.form}
              error={this.state.error}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgesNew;
