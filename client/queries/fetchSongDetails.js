import gql from 'graphql-tag';

export default gql`
    query FetchSongDetails($id: ID!){
        song (id: $id) {
            title
            id
            lyrics {
                id
                content
                likes
            }
        }
    }
`;
