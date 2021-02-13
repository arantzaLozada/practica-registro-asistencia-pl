import React from "react";
import "./styles/style.css";

class form extends React.Component {
  // state = {
  //   // firstName: "",
  //   // lastName: "",
  //   // email: "",
  // };
  // handleChange = (e) => {
  //   // console.log({
  //   //   name: e.target.name,
  //   //   value: e.target.value,
  //   // });
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };
  handleClick = (e) => {
    console.log("button was cliked");
  };
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(this.state);
  // };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>first Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
            <label>last Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
            <label>Job</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
            <button onClick={this.handleClick}>save</button>
          </div>
          {/* ESTO ES CONDICIONAL EN JSX ---- SI HACE ESTO this. props. error &&  <- ENTONCES MUESTRAME ESTO this. props. error.message ASI  */}
          {this.props.error && (
            <p className="red">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default form;
