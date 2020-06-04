import React, { Component } from "react";

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }
  render() {
    return (
      <div>
        <h3>Create New Song</h3>
        <form>
          <label>Song Title:</label>
          <input
            value={this.state.title}
            onChange={(e) => {
              this.setState({ title: e.target.value });
            }}
          />
        </form>
      </div>
    );
  }
}

// mutation will be written here

export default SongCreate;
