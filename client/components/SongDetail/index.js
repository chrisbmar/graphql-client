import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchSong from "../../queries/fetchSong";
import LyricCreate from "../LyricCreate/index";
import LyricList from "../LyricList/index";

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;
    console.log(song);

    if (!song) {
      return <h3>Loading...</h3>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={song.id} />
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: (props) => {
    return { variables: { id: props.params.id } };
  },
})(SongDetail);
