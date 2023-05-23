const { gql } = require("apollo-server");

// Define your GraphQL type definitions
const typeDefs = gql`
  type Album {
    id: ID!
    artist: String!
    album: String!
    tracks: [Track!]!
    releaseDate: String!
    genre: String!
  }

  type Track {
    name: String!
    length: String!
  }

  type Query {
    albums: [Album!]!
    album(id: ID!): Album
  }

  type Mutation {
    createAlbum(input: AlbumInput!): Album!
  }

  input AlbumInput {
    artist: String!
    album: String!
    tracks: [TrackInput!]!
    releaseDate: String!
    genre: String!
  }

  input TrackInput {
    name: String!
    length: String!
  }
`;

module.exports = typeDefs;
