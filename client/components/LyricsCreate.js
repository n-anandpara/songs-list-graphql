import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import addLyrics from '../queries/addLyrics';

class LyricsCreate extends Component {

    constructor(props ) {
        super(props);
        this.state = { content: '' };
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.mutate({
            variables: {
                id: this.props.songId,
                content: this.state.content
            }
        }).then(() => {
            this.setState({ content: '' });
        })
    }

    render() {
        return (
            <form onSubmit={(event) => this.onSubmit(event)}>
                <label>Add a lyrics</label>
                <input
                    value={this.state.content}
                    onChange={(e) => this.setState({content: e.target.value})}
                />
            </form>
        )
    }
}

export default graphql(addLyrics)(LyricsCreate);
