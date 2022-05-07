import gql from 'graphql-tag';

export default gql`
    mutation AddLyrics($id: ID!, $content: String) {
        addLyricToSong(songId: $id, content: $content) {
            id
            title
            lyrics {
                id
                likes
                content
            }
        }
    }
`;
