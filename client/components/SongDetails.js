import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSongDetails from '../queries/fetchSongDetails';
import { Link } from 'react-router';
import LyricsCreate from './LyricsCreate';
import LyricsList from './LyricsList';

class SongDetails extends Component {

    render() {
        const { song } = this.props.data;
        if (this.props.data.loading && !song) {
            return <div></div>;
        }

        return (
            <div>
                <Link to='/'> Back </Link>
                <h3>{song.title}</h3>
                <LyricsList lyrics={song.lyrics} />
                <LyricsCreate songId={song.id}/>
            </div>
        )
    }
}

export default graphql(fetchSongDetails, { 
    options: (props) => { return { variables: { id: props.params.id } } } 
})(SongDetails);
