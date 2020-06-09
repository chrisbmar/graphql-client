import React, { Component } from "react";
import { graphql } from "react-apollo";
import fetchSong from "../../queries/fetchSong";

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) {
      return <h3>Loading...</h3>;
    }

    return (
      <div>
        <h3>{this.props.data.song.title}</h3>
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: (props) => {
    return { variables: { id: props.params.id } };
  },
})(SongDetail);