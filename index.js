const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

// panggil schema dan resolver
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

// Connection to mongoose db
mongoose.connect(
  "mongodb://localhost:27017/graphql-start",
  {
    useNewUrlParser: true, //Optimalkan mongoose
    useUnifiedTopology: true, //Optimalkan mongoose
    //useFindAndModify: true, // digunakan untuk melakukan find and Update
  },
  (err) => {
    if (err) {
      console.log("Error:", err);
      // throw err;
    }
    console.log("Connected to MongoDB");
  }
);

// Create the server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
