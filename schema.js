// Panggil function apollo server
const { gql } = require("apollo-server");

// Defini Structure data
const typeDefs = gql`
  type Book {
    _id: ID!
    title: String!
    author: String!
    description: String
    release_year: Int!
    genre: String!
  }

  type Query {
    getAllBooks: [Book]!
    getBook(_id: ID!): Book
  }

  type Mutation {
    createBook(
      title: String!
      author: String!
      description: String
      release_year: Int!
      genre: String!
    ): Book!

    updateBook(
      _id: ID!
      title: String
      author: String
      description: String
      release_year: Int
      genre: String
    ): Book!

    deleteBook(_id: ID!): Boolean
  }
`;

module.exports = typeDefs;
//  Book! => yang dimaksud data tersebut harus dilempar ke client
// type Query  => digunakan untuk menampilkan data
// type Mutation => digunakan untuk mengubah data / menambah data
