import React, { Component } from "react";

export default class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };
  handleChange = e => {
    console.log(e.target.id);
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className="container">
          <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3" />

            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <label htmlFor="content">Content</label>
              <textarea
                className="materialize-textarea"
                type="text"
                id="content"
                onChange={this.handleChange}
              />
            </div>

            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">
                Create Project
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
