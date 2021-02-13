import React from "react";

import Hero from "../images/seoyest.png";

import Card from "../componets/Card";

import Form from "../componets/form";
import api from "../api";
import Loader from "../componets/pageLoading";

class BadgeEdit extends React.Component {
  // STATE GUARDA ALGO YA QUIETO
  state = {
    loading: true,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      twitter: "",
    },
  };

  componentDidMount() {
    this.fechtData();
  }

  fechtData = async (e) => {
    this.setState({ loading: true, error: null });

    try {
      /* https://reactrouter.com/web/api/Hooks/useparams
        la propiedad match.params viene de react router y es usado para las apis, igual que history.push
        y viene de this.props porque son los props de react router 
        Los props de react router son match history y location mira la documentación por encima para conocer la funcionalidad de cada uno.
        en resumen, siempre que agarres los props de react router, si, tienes que escribir primero this. props porque vienen de los props de react router */
      const data = await api.badges.read(this.props.match.params.badgeid);

      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
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
      await api.badges.update(this.props.match.params.badgeid, this.state.form);
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
            <h1>EDIT YEST</h1>
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

export default BadgeEdit;
