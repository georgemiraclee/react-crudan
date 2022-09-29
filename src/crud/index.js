import React, { Component } from "react";
import Form from "./form";
import { NavbarComponent } from "./NavbarComponent";
import Table from "./table";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bio: [],
      firstName: "",
      lastName: "",
      username: "",
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    //   console.log("Data : ", this.state);
    this.setState({
      bio: [
        ...this.state.bio,
        {
          id: this.state.bio.length + 1,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          username: this.state.username,
        },
      ],
    });

    this.setState({
        firstName: "",
        lastName: "",
        username: "",
        id: "",
    })
  };

  editData = (id) => {
    const selectBio = this.state.bio
    .filter((bio)=>bio.id === id)
    .map((filterBio)=>{
        return filterBio
    })

    this.setState({
        firstName: selectBio[0].firstName,
        lastName: selectBio[0].lastName,
        username: selectBio[0].username,
        id: selectBio[0].id,
    })
  }

  render() {
    //   console.log(this.state.bio);
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <h2>CRUD React JS</h2>
          <Table bio={this.state.bio} editData={this.editData} />
          <Form
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
